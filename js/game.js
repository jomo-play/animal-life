// いのちのサイコロ(仮) v0.1
// 種データは data/species.js(tools/build.py が data/species/*.json から自動生成)
(function () {
  "use strict";

  var SPECIES = window.SPECIES_DATA || [];
  var COHORT = 10000; // 結果画面で使う「同じ年に生まれた仲間」の仮想の数
  var GAME_TAG = "いのちのサイコロ";
  var SEEN_KEY = "animal_life_seen_v1";

  var $ = function (id) { return document.getElementById(id); };
  var pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  // ---------- 表示の小道具 ----------
  function show(id) {
    var list = document.querySelectorAll(".screen");
    for (var i = 0; i < list.length; i++) list[i].classList.remove("active");
    $(id).classList.add("active");
    window.scrollTo(0, 0);
  }
  function unitOf(sp) { return (sp.cohort && sp.cohort.unit) || "匹"; }
  function fmtNum(n) { return Math.round(n).toLocaleString("ja-JP"); }
  function fmtPct(p) {
    var x = p * 100;
    if (x >= 10) return x.toFixed(0) + "%";
    if (x >= 1) return x.toFixed(1) + "%";
    if (x >= 0.01) return x.toFixed(2) + "%";
    return "0.01%未満";
  }
  function oneIn(p) {
    var n = 1 / p;
    if (n < 10) return null;
    if (n < 10000) return "約" + fmtNum(n) + "分の1";
    if (n < 100000000) return "約" + (n / 10000).toFixed(n < 100000 ? 1 : 0) + "万分の1";
    return "約" + (n / 100000000).toFixed(1) + "億分の1";
  }
  function fmtSpan(y) { // スタート地点からの経過時間
    if (y < 1 / 12) return Math.max(1, Math.round(y * 365)) + "日";
    if (y < 1) return Math.round(y * 12) + "か月";
    return Math.floor(y) + "年";
  }
  function totalYears(sp) {
    return sp.stages.reduce(function (a, s) { return a + s.years * (s.repeat || 1); }, 0);
  }
  function fullSurvival(sp) {
    return sp.stages.reduce(function (a, s) { return a * Math.pow(s.survival, s.repeat || 1); }, 1);
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms * state.speed); }); }

  // ---------- 出会った種(この端末だけの記録) ----------
  function loadSeen() {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY) || "[]"); } catch (e) { return []; }
  }
  function addSeen(id) {
    try {
      var s = loadSeen();
      if (s.indexOf(id) < 0) { s.push(id); localStorage.setItem(SEEN_KEY, JSON.stringify(s)); }
    } catch (e) { /* 保存できない環境では何もしない */ }
  }
  function renderSeen() {
    var n = loadSeen().filter(function (id) { return SPECIES.some(function (s) { return s.id === id; }); }).length;
    $("seen-count").textContent = "収録 " + SPECIES.length + "種 / これまでに生まれた種 " + n + "種";
  }

  // ---------- ゲーム本体 ----------
  var state = { sp: null, speed: 1, running: false };

  function startGame() {
    if (!SPECIES.length) { alert("種データが読み込めませんでした"); return; }
    state.sp = pick(SPECIES);
    state.speed = 1;
    show("screen-birth");
    $("birth-body").classList.add("hidden");
    var r = $("roulette"), n = 0;
    var t = setInterval(function () {
      r.textContent = pick(SPECIES).emoji;
      if (++n >= 14) { clearInterval(t); r.textContent = state.sp.emoji; renderBirth(); }
    }, 70);
  }

  function renderBirth() {
    var sp = state.sp, u = unitOf(sp);
    addSeen(sp.id);
    $("birth-group").textContent = sp.group + " / " + sp.sci;
    $("birth-title").textContent = "あなたは「" + sp.name + "」に生まれた";
    $("birth-intro").textContent = sp.intro;
    var c = sp.cohort;
    $("birth-cohort").textContent = c
      ? (c.size > 1 ? c.label + " " + fmtNum(c.size) + u + "のうちの1" + u + "として、" + sp.start + "をむかえた。"
                    : "1" + u + "で生まれ、" + sp.start + "をむかえた。")
      : "スタートは「" + sp.start + "」。";
    var p = fullSurvival(sp), oi = oneIn(p);
    var last = sp.stages[sp.stages.length - 1];
    var basis = sp.maxAgeBasis ? "・" + sp.maxAgeBasis : "";
    var goal = last.repeat ? "最高齢(約" + fmtSpan(totalYears(sp)) + basis + ")まで生きる" : "一生をまっとうする";
    $("birth-odds").innerHTML = "";
    $("birth-odds").appendChild(el("div", "", goal + "確率"));
    var b = el("b", "", fmtPct(p) + (oi ? "(" + oi + ")" : ""));
    $("birth-odds").appendChild(b);
    $("birth-region").textContent = "データの調査地: " + sp.dataRegion;
    $("birth-body").classList.remove("hidden");
  }

  async function live() {
    if (state.running) return;
    state.running = true;
    var sp = state.sp, u = unitOf(sp);
    show("screen-life");
    $("life-emoji").textContent = sp.emoji;
    $("life-name").textContent = sp.name;
    $("btn-fast").textContent = "はやおくり ▶▶";
    var log = $("life-log");
    log.innerHTML = "";
    var age = 0, alive = 1, death = null, checks = 0;

    function updateHead() {
      $("life-age").textContent = "経過 " + fmtSpan(age) + " ・ 生き残った仲間 約" +
        (COHORT * alive >= 1 ? fmtNum(COHORT * alive) : "0") + "/" + fmtNum(COHORT) + u;
    }
    updateHead();
    await wait(400);

    for (var i = 0; i < sp.stages.length && !death; i++) {
      var st = sp.stages[i], rep = st.repeat || 1;
      var li = el("li");
      var head = el("div", "stage", st.label);
      if (st.estimated) head.appendChild(el("span", "est", "推定"));
      li.appendChild(head);
      var per = rep > 1 ? "1年" : "この時期";
      li.appendChild(el("div", "prob", per + "を生きのびる確率 " + fmtPct(st.survival) +
        "(100" + u + "中 " + (st.survival * 100 < 1 ? "1" + u + "未満" : Math.round(st.survival * 100) + u) + ")"));
      var bar = el("div", "bar"), fill = el("span");
      bar.appendChild(fill); li.appendChild(bar);
      log.appendChild(li);
      li.scrollIntoView({ behavior: "smooth", block: "end" });
      await wait(60);
      fill.style.width = (st.survival * 100).toFixed(2) + "%";
      await wait(rep > 1 ? 700 : 1100);

      var yearsLine = rep > 1 ? el("div", "years") : null;
      if (yearsLine) li.appendChild(yearsLine);
      for (var k = 0; k < rep; k++) {
        checks++;
        if (Math.random() < st.survival) {
          alive *= st.survival;
          age += st.years;
          if (rep > 1) {
            yearsLine.textContent = (k + 1) + "年目も生きのびた";
            if (k === 0 || (k + 1) % 5 === 0) {
              li.appendChild(el("div", "ok small", fmtSpan(age) + ": " + pick(st.surviveText)));
              li.scrollIntoView({ behavior: "smooth", block: "end" });
            }
            updateHead();
            await wait(k < 3 ? 450 : 200);
          } else {
            li.appendChild(el("div", "ok", pick(st.surviveText)));
            updateHead();
            await wait(900);
          }
        } else {
          age += st.years * Math.random();
          death = { stage: st, text: pick(st.dieText) };
          li.appendChild(el("div", "ng", death.text));
          li.scrollIntoView({ behavior: "smooth", block: "end" });
          await wait(1400);
          break;
        }
      }
    }
    state.running = false;
    renderResult(age, alive, death);
  }

  function renderResult(age, alive, death) {
    var sp = state.sp, u = unitOf(sp);
    var last = sp.stages[sp.stages.length - 1];
    $("res-emoji").textContent = sp.emoji;
    $("res-title").textContent = sp.name + "の一生";
    var endPhrase;
    if (death) {
      endPhrase = sp.start + "から約" + fmtSpan(age) + "で一生を終えた";
      $("res-end").textContent = "「" + death.stage.label + "」の時期に。" + death.text;
    } else if (last.repeat) {
      endPhrase = "最高齢の約" + fmtSpan(age) + "まで生きた";
      $("res-end").textContent = sp.endText ||
        ("記録に残るいちばんの長生き(" + (sp.maxAgeBasis || "記録") + ")と同じくらいまで生きた。大往生。");
    } else {
      endPhrase = "一生をまっとうした";
      $("res-end").textContent = "最後の時期まで生きのび、一生をまっとうした。";
    }
    var cnt = function (x) { return x >= 1 ? "約" + fmtNum(x) + u : "1" + u + "未満"; };
    var rank = alive;
    if (death) {
      // 同じ時期に力つきた仲間とは同順位とみなし、その真ん中を順位にする
      var p = death.stage.survival;
      rank = alive * (1 + p) / 2;
      $("res-cohort").textContent = "同じ年に生まれた仲間 " + fmtNum(COHORT) + u + "のうち、この時期をむかえたのは " +
        cnt(COHORT * alive) + "、その先へ進めたのは " + cnt(COHORT * alive * p);
    } else {
      $("res-cohort").textContent = "同じ年に生まれた仲間 " + fmtNum(COHORT) + u + "のうち、ここまで生きたのは " + cnt(COHORT * alive);
    }
    $("res-rank").textContent = "上位 " + fmtPct(rank);
    var oi = oneIn(alive);
    $("res-rank-note").textContent = (death ? sp.start + "から約" + fmtSpan(age) + "。" : "") +
      (oi ? "ここまで来られるのは" + oi + "。" : "");

    var text = sp.emoji + " わたしは「" + sp.name + "」に生まれ、" + endPhrase + "。\n" +
      "同じ年に生まれた仲間のうち、上位" + fmtPct(rank) + "まで生きのびた。\n#" + GAME_TAG;
    var url = /^https?:/.test(location.protocol) ? location.href.split("#")[0].split("?")[0] : "";
    $("btn-share").href = "https://x.com/intent/tweet?text=" + encodeURIComponent(text) +
      (url ? "&url=" + encodeURIComponent(url) : "");
    show("screen-result");
  }

  // ---------- データの出典ページ ----------
  var GROUP_ORDER = ["哺乳類", "鳥類", "魚類", "爬虫類", "両生類", "昆虫", "海の生き物(無脊椎)"];
  function renderSources() {
    var box = $("src-list");
    if (box.childNodes.length) return;
    GROUP_ORDER.forEach(function (g) {
      var list = SPECIES.filter(function (s) { return s.group === g; });
      if (!list.length) return;
      box.appendChild(el("h3", "", g + "(" + list.length + "種)"));
      list.forEach(function (sp) {
        var d = el("details"); d.id = "src-" + sp.id;
        d.appendChild(el("summary", "", sp.emoji + " " + sp.name));
        d.appendChild(el("div", "small muted", sp.sci + " / 調査地: " + sp.dataRegion + " / スタート: " + sp.start));
        if (sp.maxAgeBasis) d.appendChild(el("div", "small muted", "最高齢の根拠: " + sp.maxAgeBasis));
        (sp.caveats || []).forEach(function (c) { d.appendChild(el("div", "small caveat", "注意: " + c)); });
        var t = el("table", "tbl");
        var hr = el("tr");
        ["段階", "期間", "生存率", "出典"].forEach(function (h) { hr.appendChild(el("th", "", h)); });
        t.appendChild(hr);
        sp.stages.forEach(function (st) {
          var tr = el("tr");
          var rep = st.repeat || 1;
          tr.appendChild(el("td", "", st.label + (st.estimated ? "(推定)" : "")));
          tr.appendChild(el("td", "", (st.years < 1 ? fmtSpan(st.years) : st.years + "年") + (rep > 1 ? "×" + rep + "回" : "")));
          tr.appendChild(el("td", "", fmtPct(st.survival) + (rep > 1 ? "/年" : "")));
          tr.appendChild(el("td", "", st.src.join(", ")));
          t.appendChild(tr);
          if (st.note) {
            var nr = el("tr"), nd = el("td", "muted", "メモ: " + st.note);
            nd.colSpan = 4; nr.appendChild(nd); t.appendChild(nr);
          }
        });
        d.appendChild(t);
        if (sp.cohort) {
          d.appendChild(el("div", "small", "一度に生まれる数: " + fmtNum(sp.cohort.size) + unitOf(sp) +
            (sp.cohort.estimated ? "(推定)" : "") + "(出典: " + (sp.cohort.src || []).join(", ") + ")" +
            (sp.cohort.note ? " メモ: " + sp.cohort.note : "")));
        }
        sp.sources.forEach(function (s) {
          var p = el("div", "src-item");
          p.appendChild(el("code", "", s.id + " "));
          var a = el("a", "", s.title); a.href = s.url; a.target = "_blank"; a.rel = "noopener";
          p.appendChild(a);
          p.appendChild(document.createTextNode(" — " + s.values));
          d.appendChild(p);
        });
        box.appendChild(d);
      });
    });
  }
  var backTo = "screen-title";
  function openSources(from, spId) {
    backTo = from;
    renderSources();
    show("screen-sources");
    if (spId) {
      var d = $("src-" + spId);
      if (d) { d.open = true; setTimeout(function () { d.scrollIntoView({ block: "start" }); }, 50); }
    }
  }

  // ---------- ボタン ----------
  $("btn-start").addEventListener("click", startGame);
  $("btn-live").addEventListener("click", live);
  $("btn-again").addEventListener("click", startGame);
  $("btn-fast").addEventListener("click", function () {
    state.speed = state.speed === 1 ? 0.15 : 1;
    this.textContent = state.speed === 1 ? "はやおくり ▶▶" : "ふつうの速さ ▶";
  });
  $("btn-sources").addEventListener("click", function () { openSources("screen-title"); });
  $("btn-res-sources").addEventListener("click", function () { openSources("screen-result", state.sp && state.sp.id); });
  $("btn-back").addEventListener("click", function () { renderSeen(); show(backTo); });

  renderSeen();

  // 動作確認用(ブラウザのコンソールから simulate("red_fox", 10000) で生存率の分布を確かめられる)
  window.simulate = function (id, n) {
    var sp = SPECIES.filter(function (s) { return s.id === id; })[0];
    var full = 0;
    for (var j = 0; j < n; j++) {
      var ok = true;
      sp.stages.forEach(function (st) { for (var k = 0; k < (st.repeat || 1) && ok; k++) if (Math.random() >= st.survival) ok = false; });
      if (ok) full++;
    }
    return { simulated: full / n, expected: fullSurvival(sp) };
  };
})();
