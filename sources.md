# データの出典一覧

自動生成ファイル(tools/build.py)。各種の詳しい値・計算方法は data/species/<id>.json の note を参照。
「推定」は、出典の数字から計算した値(例: 生存率=1−死亡率、複数年の値を1年あたりに換算、資料に幅があるときの幅の中央の値)。数字の作り話はしていない。

収録: 37種

## 哺乳類

### アフリカゾウ(Loxodonta africana)— 調査地: ケニア・アンボセリ国立公園(メス)

最高齢の根拠: 仲間の95%が一生を終える年齢

> 注意: 病気・干ばつなどの自然死だけの値(密猟など人による死は含まない)。

> 注意: 前の版で使ったタンザニア・タランギレの値(おとなの年死亡率1%)は、密猟から回復中の若い群れの平均で、年をとってからの死亡の増加を含まないため、65歳まで約45%が生きる計算になり不自然だった。年齢ごとの生存割合が分かるアンボセリの資料に差し替えた。

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 子ども(0〜9歳) | 1 | 9 | 0.9774 | 推定 | lee2016_amboseli |
| おとな(9〜40歳) | 1 | 31 | 0.9774 | 推定 | lee2016_amboseli |
| 年長のおとな(40〜50歳) | 1 | 10 | 0.933 | 推定 | lee2016_amboseli |
| 長老(50〜60歳) | 1 | 10 | 0.933 | 推定 | lee2016_amboseli |
| 大長老(60〜65歳) | 1 | 5 | 0.8706 | 推定 | lee2016_amboseli |

一度に生まれる数: 1頭(出典ID: anage_african_elephant)

- `lee2016_amboseli` [The reproductive advantages of a long life: longevity and senescence in wild female African elephants (Lee et al. 2016, CC BY 4.0)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4748003/) — アンボセリの野生のメス(自然死のみ、1255頭): 生まれたメスのうち40歳まで生きるのは40%、50歳まで20%、60歳代まで10%/95%が65歳までに死亡/9歳まで生きたメスの平均余命32年(閲覧 2026-11-20)
- `anage_african_elephant` [AnAge entry for Loxodonta africana](https://genomics.senescence.info/species/entry.php?species=Loxodonta_africana) — 一度に生まれる子の数1頭(最高寿命65年は飼育下の記録のため使っていない)(閲覧 2026-11-20)

### チンパンジー(Pan troglodytes)— 調査地: ウガンダ・キバレ国立公園ンゴゴ

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 赤ちゃん(0〜1歳) | 1 | 1 | 0.85 | 推定 | wood_2017_ngogo |
| 1歳 | 1 | 1 | 0.94 | 推定 | wood_2017_ngogo |
| 子ども(2〜10歳) | 1 | 8 | 0.9936 | 推定 | wood_2017_ngogo |
| 若者(10〜20歳) | 1 | 10 | 0.996 | 推定 | wood_2017_ngogo |
| おとな(20〜30歳) | 1 | 10 | 0.9756 | 推定 | wood_2017_ngogo |
| おとな(30〜40歳) | 1 | 10 | 0.9766 | 推定 | wood_2017_ngogo |
| 年をとったおとな(40〜50歳) | 1 | 10 | 0.9502 | 推定 | wood_2017_ngogo |
| 長老(50〜60歳) | 1 | 10 | 0.9221 | 推定 | wood_2017_ngogo |
| 大長老(60歳〜) | 1 | 6 | 0.8706 | 推定 | wood_2017_ngogo |

一度に生まれる数: 1頭(出典ID: anage_chimpanzee)

- `wood_2017_ngogo` [Favorable ecological circumstances promote life expectancy in chimpanzees similar to that of human hunter-gatherers](https://pmc.ncbi.nlm.nih.gov/articles/PMC5526083/) — 表2(ンゴゴ、男女合計): q0=0.15、q1=0.06/生存割合lx 1歳0.85・2歳0.80・5歳0.79・10歳0.76・15歳0.76・20歳0.73・25歳0.62・30歳0.57・35歳0.50・40歳0.45・45歳0.35・50歳0.27・55歳0.17・60歳0.12・65歳0.06/表1 ンゴゴの最高年齢66歳(表2のlxから計算した出生時平均余命が約32.8年となり、論文の値32.8年と一致)(閲覧 2026-11-20)
- `anage_chimpanzee` [AnAge entry for Pan troglodytes](https://genomics.senescence.info/species/entry.php?species=Pan_troglodytes) — 一度に生まれる子の数1頭(閲覧 2026-11-20)

### ヨーロッパハリネズミ(Erinaceus europaeus)— 調査地: デンマーク

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 0歳 | 1 | 1 | 0.642 | 推定 | rasmussen_2023_hedgehog |
| 1歳 | 1 | 1 | 0.7 | 推定 | rasmussen_2023_hedgehog |
| 2歳 | 1 | 1 | 0.694 | 推定 | rasmussen_2023_hedgehog |
| 3歳 | 1 | 1 | 0.471 | 推定 | rasmussen_2023_hedgehog |
| 4歳 | 1 | 1 | 0.438 | 推定 | rasmussen_2023_hedgehog |
| 5歳 | 1 | 1 | 0.143 | 推定 | rasmussen_2023_hedgehog |

- `rasmussen_2023_hedgehog` [Anyone Can Get Old—All You Have to Do Is Live Long Enough: Understanding Mortality and Life Expectancy in European Hedgehogs (Erinaceus europaeus)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9951656/) — メスの生命表(表4)の死亡率qx: 0歳0.358・1歳0.300・2歳0.306・3歳0.529・4歳0.562・5歳0.857・6歳1.000/死亡時の年齢は0〜16歳(388頭)(閲覧 2026-11-20)

### ハイイロオオカミ(Canis lupus)— 調査地: アメリカ・ロッキー山脈北部(イエローストーン周辺)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 子オオカミ(年末まで) | 0.3 | 1 | 0.79 |  | nps_yellowstone_wolf_2023 |
| 若者・おとな | 1 | 13 | 0.75 |  | smith_2010_wolf, anage_gray_wolf |

一度に生まれる数: 6頭(出典ID: anage_gray_wolf)

- `nps_yellowstone_wolf_2023` [Yellowstone Wolf Project Annual Report 2023](https://www.nps.gov/yell/learn/nature/upload/2023-Wolf-Report-final_web.pdf) — 数えられた子58頭のうち46頭(79%)が年末まで生存(2023年)(閲覧 2026-11-20)
- `smith_2010_wolf` [Survival of Colonizing Wolves in the Northern Rocky Mountains of the United States, 1982–2004](https://doi.org/10.2193/2008-584) — 【要旨で確認】年生存率0.750(95%信頼区間0.728〜0.772)/711頭に首輪、死亡363件(閲覧 2026-11-20)
- `anage_gray_wolf` [AnAge entry for Canis lupus](https://genomics.senescence.info/species/entry.php?species=Canis_lupus) — 野生での最高記録13.7年(飼育下20.6年)/一腹の子の数6頭(閲覧 2026-11-20)

### トビイロホオヒゲコウモリ(Myotis lucifugus)— 調査地: アメリカ・ニューハンプシャー州南部

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 最初の1年 | 1 | 1 | 0.345 | 推定 | frick_2010_myotis |
| おとな | 1 | 33 | 0.765 | 推定 | frick_2010_myotis, anage_little_brown_bat |

一度に生まれる数: 1匹(出典ID: anage_little_brown_bat)

- `frick_2010_myotis` [Influence of climate and reproductive timing on demography of little brown myotis Myotis lucifugus](https://doi.org/10.1111/j.1365-2656.2009.01615.x) — 【要旨で確認】おとなのメスの年生存率0.63〜0.90/1年目の生存率0.23〜0.46(1993〜2008年の標識再捕獲)(閲覧 2026-11-20)
- `anage_little_brown_bat` [AnAge entry for Myotis lucifugus](https://genomics.senescence.info/species/entry.php?species=Myotis_lucifugus) — 最高寿命34年(野生)/一度に生まれる子の数1匹(閲覧 2026-11-20)

### ミーアキャット(Suricata suricatta)— 調査地: 南アフリカ・カラハリ砂漠南部

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 子ども(最初の1年) | 1 | 1 | 0.2 |  | clutton_brock_1999_meerkat |
| おとな | 1 | 14 | 0.43 |  | clutton_brock_1999_meerkat, anage_meerkat |

一度に生まれる数: 4匹(出典ID: clutton_brock_1999_meerkat)

- `clutton_brock_1999_meerkat` [Reproduction and survival of suricates (Suricata suricatta) in the southern Kalahari](https://agris.fao.org/search/en/records/65df47427c7033e84bed36d2) — 【要旨で確認】年生存率 子ども0.20・1歳以上0.43/巣穴から出たときの一腹子数3〜5匹(中央の4匹を使用)(閲覧 2026-11-20)
- `anage_meerkat` [AnAge entry for Suricata suricatta](https://genomics.senescence.info/species/entry.php?species=Suricata_suricatta) — 野生での推定最高寿命15年(飼育下20.6年)(閲覧 2026-11-20)

### ホッキョクグマ(Ursus maritimus)— 調査地: アメリカ・アラスカのボーフォート海

最高齢の根拠: 野生の記録

> 注意: おとなの年生存率0.969はおとなのメスの平均値で、年をとってからの死亡の増加を含まない。そのため32歳まで生きる割合が約22%と、「多くは15〜18年をこえない」という記述より高めに出る。

> 注意: 最高齢32年は水族館運営団体のページの値(一次資料は未確認)。

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 子グマ(1年目) | 1 | 1 | 0.651 |  | usgs_amstrup_durner_1995 |
| 子グマ(2年目) | 1 | 1 | 0.86 |  | usgs_amstrup_durner_1995 |
| おとな | 1 | 30 | 0.969 |  | usgs_amstrup_durner_1995, seaworld_polar_bear |

一度に生まれる数: 2頭(出典ID: anage_polar_bear)

- `usgs_amstrup_durner_1995` [Survival rates of radio-collared female polar bears and their dependent young](https://www.usgs.gov/publications/survival-rates-radio-collared-female-polar-bears-and-their-dependent-young) — おとなのメスの年生存率0.969(0.952〜0.983)/巣穴を出てから離乳まで0.676/1年目0.651(0.610〜0.675)/2年目0.860(0.751〜0.903)(閲覧 2026-11-20)
- `anage_polar_bear` [AnAge entry for Ursus maritimus](https://genomics.senescence.info/species/entry.php?species=Ursus_maritimus) — 一腹の子の数2頭(最高寿命43.8年は飼育下の記録のため使っていない)(閲覧 2026-11-20)
- `seaworld_polar_bear` [Polar Bears - Longevity & Causes of Death](https://seaworld.org/animals/all-about/polar-bears/longevity/) — 北極で知られている最高齢は32年/多くは15〜18年をこえて生きない/飼育下の最高齢45年(閲覧 2026-11-20)

### アカギツネ(Vulpes vulpes)— 調査地: イギリス・ブリストル(都市部)

最高齢の根拠: 野生の記録

> 注意: 最高齢12年は二次資料(Wildlife Online)が紹介する Mulder 2004(Lutra 47(1)、ページ番号未確認)の記録。原論文は未確認。

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 子ギツネ(0歳) | 1 | 1 | 0.48 |  | devenish_nelson_2012_fox |
| 1歳 | 1 | 1 | 0.54 |  | devenish_nelson_2012_fox |
| 2歳 | 1 | 1 | 0.53 |  | devenish_nelson_2012_fox |
| おとな(3歳〜) | 1 | 9 | 0.51 |  | devenish_nelson_2012_fox, wildlifeonline_fox_longevity, mulder2004_fox |

一度に生まれる数: 4匹(出典ID: devenish_nelson_2012_fox)

- `devenish_nelson_2012_fox` [Sarcoptic mange and the demography of the red fox, Vulpes vulpes (PhD thesis)](http://etheses.dur.ac.uk/6960/2/E_Devenish_Nelson_-_Final_PhD_Thesis.pdf) — 表4.1 ブリストル(1977〜85年、1628頭)の生存率: P1 0.48・P2 0.54・P3 0.53・P4* 0.51/表6.2 平均一腹子数4.00(閲覧 2026-11-20)
- `wildlifeonline_fox_longevity` [Red Fox Longevity](https://www.wildlifeonline.me.uk/animals/article/red-fox-longevity) — オランダの砂丘で子ギツネの時に耳標を付けたメスが1993年に12歳で死亡(Mulder 2004)/野生では2〜6年がふつう(閲覧 2026-11-20)
- `mulder2004_fox` [Longevity records in the red fox (Mulder 2004)](https://www.zoogdiervereniging.nl/kennisbank/publicaties/2004/lutra-471editorial2004) — Wildlife Online が紹介する元の記録: 耳標を付けた野生のメスが12歳で死亡。URLは同号の目次(編集後記)ページで、論文本文は未確認(閲覧 2026-11-20)

### ラッコ(Enhydra lutris)— 調査地: アメリカ・カリフォルニア州モントレー

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 赤ちゃん(離乳まで) | 0.5 | 1 | 0.675 | 推定 | usgs_sea_otter_2019, anage_sea_otter |
| 1歳 | 1 | 1 | 0.779 |  | usgs_sea_otter_2019 |
| 2歳 | 1 | 1 | 0.859 |  | usgs_sea_otter_2019 |
| 若いおとな(3〜6歳) | 1 | 4 | 0.944 | 推定 | usgs_sea_otter_2019 |
| おとな(7〜10歳) | 1 | 4 | 0.861 | 推定 | usgs_sea_otter_2019 |
| 年をとったおとな(11〜14歳) | 1 | 4 | 0.721 | 推定 | usgs_sea_otter_2019 |
| おばあちゃん(15〜18歳) | 1 | 4 | 0.559 | 推定 | usgs_sea_otter_2019 |

一度に生まれる数: 1匹(出典ID: anage_sea_otter)

- `usgs_sea_otter_2019` [Southern sea otter (Enhydra lutris nereis) population biology at Big Sur and Monterey, California (Open-File Report 2019-1022)](https://pubs.usgs.gov/of/2019/1022/ofr20191022.pdf) — 離乳まで育つ割合 0.64(3歳の母)〜0.71(10歳の母)/表28 モントレー2008〜12年のメス年生存率: 1歳0.779・2歳0.859・3歳0.929・4歳0.953・5歳0.954・6歳0.941・7歳0.906・8歳0.884・9歳0.853・10歳0.803・11歳0.798・12歳0.752・13歳0.703・14歳0.639・15歳0.573・16歳0.524・17歳0.548・18歳0.594(閲覧 2026-11-20)
- `anage_sea_otter` [AnAge entry for Enhydra lutris](https://genomics.senescence.info/species/entry.php?species=Enhydra_lutris) — 一度に生まれる子の数1匹/離乳まで175日(閲覧 2026-11-20)

## 鳥類

### メンフクロウ(Tyto alba)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.37 |  | bto_barn_owl |
| おとな | 1 | 14 | 0.72 |  | bto_barn_owl |

一度に生まれる数: 5羽(出典ID: bto_barn_owl)

- `bto_barn_owl` [BTO BirdFacts: Barn Owl](https://bto.org/learn/about-birds/birdfacts/barn-owl) — 一腹卵数 平均4.85(典型4〜6)/幼鳥1年生存率0.37/成鳥年生存率0.72/最高記録年齢15年3か月21日(閲覧 2026-11-20)

### ツバメ(Hirundo rustica)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.395 |  | bto_swallow |
| おとな | 1 | 10 | 0.374 |  | bto_swallow |

一度に生まれる数: 5羽(出典ID: bto_swallow)

- `bto_swallow` [BTO BirdFacts: Swallow](https://bto.org/learn/about-birds/birdfacts/swallow) — 一腹卵数 平均4.55(典型4〜5)/幼鳥1年生存率0.395/成鳥年生存率0.374/最高記録年齢11年1か月11日/繁殖開始は通常1歳(閲覧 2026-11-20)

### アオガラ(Cyanistes caeruleus)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.379 |  | bto_blue_tit |
| おとな | 1 | 9 | 0.532 |  | bto_blue_tit |

一度に生まれる数: 9羽(出典ID: bto_blue_tit)

- `bto_blue_tit` [BTO BirdFacts: Blue Tit](https://bto.org/learn/about-birds/birdfacts/blue-tit) — 一腹卵数 平均9.06(典型8〜10)/幼鳥1年生存率0.379/成鳥年生存率0.532/最高記録年齢9年8か月16日(閲覧 2026-11-20)

### カワセミ(Alcedo atthis)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.215 |  | bto_kingfisher |
| おとな | 1 | 4 | 0.28 |  | bto_kingfisher |

一度に生まれる数: 6羽(出典ID: bto_kingfisher)

- `bto_kingfisher` [BTO BirdFacts: Kingfisher](https://bto.org/learn/about-birds/birdfacts/kingfisher) — 一腹卵数 平均5.51(典型5〜7)/幼鳥1年生存率0.215/成鳥年生存率0.28/最高記録年齢4年6か月29日(閲覧 2026-11-20)

### ホシムクドリ(Sturnus vulgaris)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.518 |  | bto_starling |
| おとな(巣をつくるのはふつう2歳から) | 1 | 17 | 0.687 |  | bto_starling |

一度に生まれる数: 5羽(出典ID: bto_starling)

- `bto_starling` [BTO BirdFacts: Starling](https://bto.org/learn/about-birds/birdfacts/starling) — 一腹卵数 平均4.6(典型4〜5)/幼鳥1年生存率0.518/成鳥年生存率0.687/最高記録年齢17年7か月25日/繁殖開始はふつう2歳/繁殖年齢に達した鳥の典型的な寿命5年(閲覧 2026-11-20)

### コウテイペンギン(Aptenodytes forsteri)— 調査地: 南極(テール・アデリー、ポワント・ジェオロジー)

最高齢の根拠: 参考値(確かな記録なし)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵からひとり立ちまで | 0.6 | 1 | 0.458 |  | abadi2017, adw_emperor_penguin |
| ひとり立ちから最初の1年 | 1 | 1 | 0.401 |  | abadi2017 |
| おとな | 1 | 48 | 0.907 |  | abadi2017, adw_emperor_penguin |

一度に生まれる数: 1羽(出典ID: adw_emperor_penguin)

- `abadi2017` [Integrated population modeling reveals the impact of climate on the survival of juvenile emperor penguins (Abadi, Barbraud & Gimenez 2017, Global Change Biology, doi:10.1111/gcb.13538)](https://oliviergimenez.github.io/pubs/abadi2016.pdf) — 調査地 ポワント・ジェオロジー(テール・アデリー)、解析期間1971〜1998年/幼鳥生存率(巣立ち〜1歳)平均0.401/成鳥生存率0.907/繁殖成功(卵が巣立ちヒナになる割合)平均0.458(閲覧 2026-11-20)
- `adw_emperor_penguin` [Animal Diversity Web: Aptenodytes forsteri](https://animaldiversity.org/accounts/Aptenodytes_forsteri/) — 1繁殖期に卵1個/抱卵約65日/約5か月でひとり立ち/野生の寿命15〜20年/最長50年まで生きた例があるとされる(約1%)(閲覧 2026-11-20)
- `anage_emperor_penguin` [AnAge: Aptenodytes forsteri](https://genomics.senescence.info/species/entry.php?species=Aptenodytes_forsteri) — 最高寿命は未確定(詳しい研究なし、40年以上は逸話的)(閲覧 2026-11-20)

### ミソサザイ(Troglodytes troglodytes)— 調査地: イギリス

最高齢の根拠: 野生の記録(足環)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.263 |  | bto_wren |
| おとな | 1 | 6 | 0.319 |  | bto_wren |

一度に生まれる数: 6羽(出典ID: bto_wren)

- `bto_wren` [BTO BirdFacts: Wren](https://bto.org/learn/about-birds/birdfacts/wren) — 一腹卵数 平均5.7(典型5〜6)/幼鳥1年生存率0.263/成鳥年生存率0.319/最高記録年齢7年3か月6日(閲覧 2026-11-20)

### ヨーロッパコマドリ(Erithacus rubecula)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.41 |  | bto_robin |
| おとな | 1 | 7 | 0.419 |  | bto_robin |

一度に生まれる数: 5羽(出典ID: bto_robin)

- `bto_robin` [BTO BirdFacts: Robin](https://bto.org/learn/about-birds/birdfacts/robin) — 一腹卵数 平均4.87(典型4〜5)/幼鳥1年生存率0.41/成鳥年生存率0.419/最高記録年齢8年4か月30日(閲覧 2026-11-20)

### イエスズメ(Passer domesticus)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.489 |  | bto_house_sparrow |
| おとな | 1 | 11 | 0.571 |  | bto_house_sparrow |

一度に生まれる数: 4羽(出典ID: bto_house_sparrow)

- `bto_house_sparrow` [BTO BirdFacts: House Sparrow](https://bto.org/learn/about-birds/birdfacts/house-sparrow) — 一腹卵数 平均4.15(典型4〜5)/幼鳥1年生存率0.489/成鳥年生存率0.571/最高記録年齢12年12日(閲覧 2026-11-20)

### マガモ(Anas platyrhynchos)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.518 |  | bto_mallard |
| おとな | 1 | 19 | 0.627 |  | bto_mallard |

一度に生まれる数: 12羽(出典ID: bto_mallard)

- `bto_mallard` [BTO BirdFacts: Mallard](https://bto.org/learn/about-birds/birdfacts/mallard) — 一腹卵数 典型11〜14(平均値の記載なし。cohortは中央付近の12)/幼鳥1年生存率0.518/成鳥年生存率0.627(雌0.575・雄0.679)/最高記録年齢20年5か月17日(閲覧 2026-11-20)

### コブハクチョウ(Cygnus olor)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 若鳥の3年間 | 3 | 1 | 0.42 |  | bto_mute_swan |
| おとな | 1 | 26 | 0.85 |  | bto_mute_swan |

一度に生まれる数: 6羽(出典ID: bto_mute_swan)

- `bto_mute_swan` [BTO BirdFacts: Mute Swan](https://bto.org/learn/about-birds/birdfacts/mute-swan) — 一腹卵数 平均5.58(典型4〜7)/幼鳥生存率0.42(3歳まで)/成鳥年生存率0.85/最高記録年齢29年1か月11日/繁殖開始は通常4歳(閲覧 2026-11-20)

### モリフクロウ(Strix aluco)— 調査地: イギリス

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣立ちから最初の1年 | 1 | 1 | 0.301 |  | bto_tawny_owl |
| おとな | 1 | 22 | 0.738 |  | bto_tawny_owl |

一度に生まれる数: 3羽(出典ID: bto_tawny_owl)

- `bto_tawny_owl` [BTO BirdFacts: Tawny Owl](https://bto.org/learn/about-birds/birdfacts/tawny-owl) — 一腹卵数 平均2.56(典型2〜3)/幼鳥1年生存率0.301/成鳥年生存率0.738/最高記録年齢23年5か月27日(閲覧 2026-11-20)

## 魚類

### タイセイヨウサケ(Salmo salar)— 調査地: 北大西洋の川(北米・ヨーロッパの275集団のまとめ)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵から川を下る若者(スモルト)になるまで | 2.91 | 1 | 0.015 |  | hutchings1998 |
| 海で育ち、ふるさとの川へ帰るまで | 1.6 | 1 | 0.074 |  | hutchings1998 |

- `hutchings1998` [Life history variation and growth rate thresholds for maturity in Atlantic salmon, Salmo salar (Hutchings & Jones 1998, CJFAS)](https://doi.org/10.1139/d98-004) — 卵からスモルトまでの生存率1.5%(0.2〜3.2%)/スモルトの年齢2.91年(1.04〜5.85年)/海ですごす年数1.60年(1.00〜2.64年)/スモルトから1回目の帰りまでの生存率7.4%(1.3〜17.5%)/産卵後の冬をこす割合は15%未満が多い(閲覧 2026-11-20)

### ギンザケ(Oncorhynchus kisutch)— 調査地: カナダ・ブリティッシュコロンビア州(カーネーション川)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 砂利の中(卵から稚魚が出てくるまで) | 0.4 | 1 | 0.15 |  | dfo_coho1990 |
| 最初の夏 | 0.5 | 1 | 0.5 |  | dfo_coho1990 |
| 川での冬 | 0.5 | 1 | 0.3 |  | dfo_coho1990 |
| 海の暮らし | 1.5 | 1 | 0.1 |  | dfo_coho1990, noaa_salmon_cycle |
| 漁の季節をぬけて川をのぼる | 0.2 | 1 | 0.36 | 推定 | dfo_coho1990 |

一度に生まれる数: 2500個(出典ID: dfo_coho1990)

- `dfo_coho1990` [Strait of Georgia Coho Salmon: Resource Status and Management Planning Process (1990)](https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/243271.pdf) — 1匹のメスが平均約2,500個の卵/卵→稚魚約15%/最初の夏50%/冬30%/スモルト→海で2度目の夏まで5〜15%(図では10%)/漁による死亡64%(図: 卵2,500→稚魚375→秋の稚魚188→スモルト56→漁の前のおとな5.6→産卵2、カーネーション川のデータ)(閲覧 2026-11-20)
- `noaa_salmon_cycle` [Salmon Life Cycle and Seasonal Fishery Planning](https://www.fisheries.noaa.gov/west-coast/sustainable-fisheries/salmon-life-cycle-and-seasonal-fishery-planning) — ギンザケの寿命はふつう3〜4年(閲覧 2026-11-20)

### カラフトマス(Oncorhynchus gorbuscha)— 調査地: アラスカ・北太平洋

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 砂利の中(卵から稚魚が出てくるまで) | 0.5 | 1 | 0.125 | 推定 | mcneil1975, adfg_pink |
| 海で育ち、ふるさとの川へ帰るまで | 1.5 | 1 | 0.03 | 推定 | mcneil1975, adfg_pink |

一度に生まれる数: 1850個(推定)(出典ID: mcneil1975) — McNeil & Bailey 1975 のカラフトマスの卵数1,400〜2,300個の中央。参考: アラスカ州の種のページでは1,200〜1,900個

- `mcneil1975` [Salmon Rancher's Manual (McNeil & Bailey 1975)](https://apps-afsc.fisheries.noaa.gov/Publications/ProcRpt/PR1975_McNeil_Salmon.pdf) — 自然では卵の5〜20%しか稚魚にならない/海での生存率はカラフトマス・シロザケで1〜5%/カラフトマスの平均卵数1,400〜2,300個(閲覧 2026-11-20)
- `adfg_pink` [Pink Salmon Species Profile](https://www.adfg.alaska.gov/index.cfm?adfg=pinksalmon.main) — メス1匹が1,200〜1,900個の卵を産む/卵は冬に5〜8か月かけて育つ/海で18か月すごしておとなになる/2年で一生を終える(閲覧 2026-11-20)

## 爬虫類

### アメリカアリゲーター(Alligator mississippiensis)— 調査地: アメリカ・フロリダ州オレンジ湖

最高齢の根拠: 飼育下の記録

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣の中(卵がかえるまで) | 0.18 | 1 | 0.396 | 推定 | crawford_ipm |
| 最初の1年 | 1 | 1 | 0.411 |  | woodward1987, crawford_ipm |
| 子どものワニ(体長30〜122cm) | 1 | 5 | 0.843 |  | crawford_ipm |
| 若いワニ(体長122〜183cm) | 1 | 8 | 0.8552 |  | crawford_ipm, icwdm_alligator |
| おとな | 1 | 63 | 0.9057 |  | crawford_ipm, anage_alligator |

一度に生まれる数: 33個(出典ID: crawford_ipm)

- `woodward1987` [Survival of young American alligators on a Florida lake (Woodward et al. 1987, Journal of Wildlife Management)](https://www.usgs.gov/publications/survival-young-american-alligators-florida-lake) — ふ化個体の生存率: 6か月76%、12か月41%(オレンジ湖、1979〜1984年)(閲覧 2026-11-20)
- `crawford_ipm` [Towards a decision-making culture in wildlife management (Crawford, T. G., PhD dissertation, University of Georgia)](https://openscholar.uga.edu/record/3104/files/CrawfordTaraPhD.pdf) — オレンジ湖の値: 平均卵数33(32.8)/巣が残る確率0.452/卵が子になる確率0.875/年生存率: ふ化個体0.411、子ども(30〜122cm)0.843、若者(122〜183cm)0.8552、おとな(183〜274cm)0.9057/卵は約65日でかえる(閲覧 2026-11-20)
- `icwdm_alligator` [Alligators (Woodward & David, Prevention and Control of Wildlife Damage 1994)](https://icwdm.org/?p=1990) — 体長6フィートに届くまで: ルイジアナで最大10年、フロリダで14年、ノースカロライナで16年(閲覧 2026-11-20)
- `anage_alligator` [AnAge entry for Alligator mississippiensis](https://genomics.senescence.info/species/entry.php?species=Alligator_mississippiensis) — 最高寿命77年(飼育下)/性成熟4,380日(約12年)(閲覧 2026-11-20)

### アオウミガメ(Chelonia mydas)— 調査地: ハワイ

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 赤ちゃんガメ(0〜1歳) | 1 | 2 | 0.35 |  | piacenza2019 |
| 沖をただよう子ガメ(2〜3歳) | 1 | 2 | 0.8 |  | piacenza2019 |
| 岸近くの子ガメ(4〜11歳) | 1 | 8 | 0.824 |  | piacenza2019 |
| 若いカメ(12〜29歳) | 1 | 18 | 0.876 |  | piacenza2019 |
| おとな | 1 | 40 | 0.929 |  | piacenza2019, noaa_green |

一度に生まれる数: 110匹(出典ID: noaa_green)

- `piacenza2019` [Fathoming sea turtles: monitoring strategy evaluation to improve conservation status assessments (Piacenza, Richards & Heppell 2019, Ecological Applications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6851787/) — 年生存率: ふ化個体0.350/外洋期の幼体0.800/沿岸期の幼体0.824/亜成体0.876/おとな0.929。区分: ふ化個体0〜1歳、外洋期2〜3歳、沿岸期4〜11歳、亜成体12歳〜成熟。成熟年齢30(17〜41)歳(閲覧 2026-11-20)
- `noaa_green` [Green Turtle](https://www.fisheries.noaa.gov/species/green-turtle) — 1つの巣に約110個の卵/メスは25〜35歳でおとな/少なくとも70年以上生きる(閲覧 2026-11-20)

### ケンプヒメウミガメ(Lepidochelys kempii)— 調査地: メキシコ湾(メキシコ・ランチョヌエボ周辺の砂浜)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣の中(卵から砂の上に出るまで) | 0.15 | 1 | 0.801 |  | kemp_plan2011, noaa_kemp |
| 砂浜から海へ | 0.01 | 1 | 0.664 |  | kemp_plan2011 |
| 海をただよう赤ちゃんガメ(0〜1歳) | 1 | 2 | 0.318 |  | kemp_plan2011 |
| 小さな子ガメ(2〜5歳) | 1 | 4 | 0.815 |  | kemp_plan2011 |
| 大きな子ガメ(6〜11歳) | 1 | 6 | 0.935 |  | kemp_plan2011 |
| おとな | 1 | 18 | 0.935 |  | kemp_plan2011, noaa_kemp |

一度に生まれる数: 97個(出典ID: kemp_plan2011)

- `kemp_plan2011` [Bi-National Recovery Plan for the Kemp's Ridley Sea Turtle, Second Revision (2011)](https://ecos.fws.gov/docs/recovery_plan/kempsridley_revision2_with%20signature.pdf) — 1巣あたり平均97個/自然の巣から出てくる割合80.1%/出た子ガメが海に着く割合66.4%/年生存率(1997年以降): ふ化個体・外洋期0.318、2〜5歳0.815、6〜11歳0.935、12歳以上0.935/成熟12歳(モデル)(閲覧 2026-11-20)
- `noaa_kemp` [Kemp's Ridley Turtle](https://www.fisheries.noaa.gov/species/kemps-ridley-turtle) — 1巣に約100個の卵、50〜60日で卵がかえる/約13歳でおとな/寿命は30年以上と推定(閲覧 2026-11-20)

### オサガメ(Dermochelys coriacea)— 調査地: 太平洋(コスタリカ・プラヤグランデなど)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣の中(卵がかえるまで) | 0.17 | 1 | 0.47 |  | santidrian2012, noaa_leatherback |
| 砂の上に出るまで | 0.01 | 1 | 0.82 |  | santidrian2012 |
| 海での最初の1年 | 1 | 1 | 0.25 |  | jones2012 |
| 子ども〜若者(1〜16歳) | 1 | 15 | 0.81 |  | jones2012 |
| おとな | 1 | 34 | 0.8 |  | jones2012, noaa_leatherback |

一度に生まれる数: 100個(出典ID: noaa_leatherback) — NOAAの種のページの全体説明の「約100個」。同じページの太平洋個体群の欄では85〜95個

- `santidrian2012` [Climate Driven Egg and Hatchling Mortality Threatens Survival of Eastern Pacific Leatherback Turtles (Santidrián Tomillo et al. 2012, PLoS ONE)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037602) — プラヤグランデのふ化率0.47±0.25/巣から出てくる割合0.82±0.22(2004/05〜2009/10年)(閲覧 2026-11-20)
- `jones2012` [Resource Requirements of the Pacific Leatherback Turtle Population (Jones et al. 2012, PLoS ONE)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0045447) — 1年目の生存率25%/幼体の年生存率0.81(0.74〜0.87)/おとなの年生存率0.80(0.72〜0.84)/16歳でおとな(閲覧 2026-11-20)
- `noaa_leatherback` [Leatherback Turtle](https://www.fisheries.noaa.gov/species/leatherback-turtle) — 1回に約100個の卵/約2か月で子ガメが出てくる/寿命は50年以上と推定/太平洋の個体群の欄では85〜95個の卵(閲覧 2026-11-20)

### アカウミガメ(Caretta caretta)— 調査地: 北西大西洋(アメリカ南東部の砂浜)

> 注意: この表で計算すると、卵からおとな(約30〜35歳)まで生きるのは約570〜740分の1(30歳まで約1/570、35歳まで約1/737)で、NOAA海洋局の「1,000〜10,000分の1」より少し多い。

> 注意: ずれる理由: NOAA海洋局の値はウミガメ全般についての大まかな幅で、種や調査地を限らない。ゲームの値は北西大西洋のアカウミガメの評価(Conant et al. 2009)を引いた Arendt et al. 2013 のもので、砂浜から海へたどりつく割合70%は論文著者の推定値。どちらも実在の資料の値なので、作り変えずにそのまま使っている。

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣の中(卵から砂の上に出るまで) | 0.17 | 1 | 0.54 |  | arendt2013 |
| 砂浜から海へ | 0.01 | 1 | 0.7 |  | arendt2013 |
| 海での最初の1年 | 1 | 1 | 0.4 |  | arendt2013 |
| 子ガメ(1〜10歳) | 1 | 10 | 0.794 |  | arendt2013 |
| 若いカメ(11〜29歳) | 1 | 19 | 0.893 |  | arendt2013 |
| おとな | 1 | 50 | 0.95 |  | arendt2013, noaa_loggerhead |

一度に生まれる数: 100個(出典ID: noaa_loggerhead)

- `arendt2013` [Historical versus Contemporary Climate Forcing on the Annual Nesting Variability of Loggerhead Sea Turtles in the Northwest Atlantic Ocean (Arendt et al. 2013, PLoS ONE)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3855202) — ふ化して巣から出る割合54%/海へたどりつく割合70%/0歳の生存率40%/1〜10歳の年生存率79.4%/11〜29歳の年生存率89.3%/31年目以降の年生存率95%(閲覧 2026-11-20)
- `noaa_loggerhead` [Loggerhead Turtle](https://www.fisheries.noaa.gov/species/loggerhead-turtle) — 1つの巣に約100個の卵/約2か月で卵がかえる/メスは約35歳でおとな/80年以上生きることがある(閲覧 2026-11-20)
- `noaa_os_turtles` [Sea turtles (Ocean Service news, June 2015)](https://oceanservice.noaa.gov/news/june15/sea-turtles.html) — おとなまで生きるのは1,000分の1〜10,000分の1(参考値、ゲームの計算には未使用)(閲覧 2026-11-20)

## 両生類

### ヨーロッパアカガエル(Rana temporaria)— 調査地: ヨーロッパ(既存研究の値をまとめたもの)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵 | 0.058 | 1 | 0.92 |  | biek2002, froglife_common_frog |
| オタマジャクシ | 0.268 | 1 | 0.06 |  | biek2002, wildlifetrusts_common_frog |
| 子ガエル(はじめての冬まで) | 0.674 | 1 | 0.34 | 推定 | biek2002 |
| わかもの | 1 | 2 | 0.33 |  | biek2002 |
| おとな | 1 | 11 | 0.43 |  | biek2002, anage_rana_temporaria, miaud1999_rana |

一度に生まれる数: 650個(出典ID: biek2002)

- `biek2002` [What Is Missing in Amphibian Decline Research: Insights from Ecological Sensitivity Analysis (Biek, Funk, Maxell & Mills 2002, Conservation Biology 16(3): 728-734) Table 1](https://www.umt.edu/research/millslab/files/2015/01/biekwhat.pdf) — ヨーロッパアカガエル:胚0.92/幼生0.06/変態直後0.34/幼体の年生存率0.33/おとなの年生存率0.43/一腹卵数650/成熟3年。胚・幼生・変態直後の3つで最初の1年(いくつかは近い仲間の値を代用)(閲覧 2026-11-20)
- `froglife_common_frog` [Common Frog (Rana temporaria)](https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog-2/) — 産卵から2〜4週間でオタマジャクシがふ化/成熟は2〜3歳(閲覧 2026-11-20)
- `wildlifetrusts_common_frog` [Common frog](https://www.wildlifetrusts.org/wildlife-explorer/amphibians/common-frog) — ふ化後、子ガエルになるまで約14週間/平均寿命5〜10年(閲覧 2026-11-20)
- `anage_rana_temporaria` [AnAge entry for Rana temporaria](https://genomics.senescence.info/species/entry.php?species=Rana_temporaria) — 野生では最高14年生きることがある(飼育下の最高27年)(閲覧 2026-11-20)
- `miaud1999_rana` [Variations in life-history traits in the common frog Rana temporaria (Miaud, Guyétant & Elmberg 1999, Journal of Zoology 249: 61-73) 要旨](https://www.cambridge.org/core/journals/journal-of-zoology/article/abs/variations-in-life-history-traits-in-the-common-frog-rana-temporaria-amphibia-anura-a-literature-review-and-new-data-from-the-french-alps/7B9C432E181FDEEBA2D34AE4C5D1491A) — フランス・アルプスの集団でおとなの生存率は雌雄とも約0.80(noteでの比較用)(閲覧 2026-11-20)

### クシイモリ(Triturus cristatus)— 調査地: ヨーロッパ(スウェーデンの研究がまとめた文献値)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵 | 0.044 | 1 | 0.5 | 推定 | karlsson2007_gcn, anage_triturus_cristatus |
| 幼生(水の中の子ども) | 0.247 | 1 | 0.05 | 推定 | karlsson2007_gcn, anage_triturus_cristatus |
| わかもの | 1 | 3 | 0.55 |  | karlsson2007_gcn |
| おとな | 1 | 13 | 0.66 |  | karlsson2007_gcn, anage_triturus_cristatus |

一度に生まれる数: 204個(出典ID: karlsson2007_gcn)

- `karlsson2007_gcn` [Estimating viability and sensitivity of the great crested newt Triturus cristatus at a regional scale (Karlsson, Betzholtz & Malmgren 2007, Web Ecology 7: 63-76)](https://we.copernicus.org/articles/7/63/2007/we-7-63-2007.pdf) — おとなの年生存率0.49〜0.78(平均0.66)/幼体の年生存率0.22・0.59・0.85(平均0.55)/成熟2〜5歳(平均3歳)/一腹卵数189〜220(平均204)/卵の約50%が染色体の異常でふ化前に死ぬ/卵・幼生の死亡率約95%(閲覧 2026-11-20)
- `anage_triturus_cristatus` [AnAge entry for Triturus cristatus](https://genomics.senescence.info/species/entry.php?species=Triturus_cristatus) — ふ化まで16日/変態まで90日/野生では最高16年(飼育下28年)/一腹卵数225(閲覧 2026-11-20)

### アカアシガエル(Rana aurora)— 調査地: 北アメリカ西部(既存研究の値をまとめたもの/期間はカナダ・ブリティッシュコロンビア州)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵 | 0.104 | 1 | 0.92 |  | biek2002, bc_cdc_red_legged_frog |
| オタマジャクシ | 0.25 | 1 | 0.03 |  | biek2002, bc_cdc_red_legged_frog |
| 子ガエル(はじめての冬まで) | 0.646 | 1 | 0.55 | 推定 | biek2002 |
| わかもの | 1 | 2 | 0.36 |  | biek2002, bc_cdc_red_legged_frog |
| おとな | 1 | 12 | 0.69 |  | biek2002, anage_rana_aurora |

一度に生まれる数: 605個(出典ID: bc_cdc_red_legged_frog)

- `biek2002` [What Is Missing in Amphibian Decline Research: Insights from Ecological Sensitivity Analysis (Biek, Funk, Maxell & Mills 2002, Conservation Biology 16(3): 728-734) Table 1](https://www.umt.edu/research/millslab/files/2015/01/biekwhat.pdf) — アカアシガエル:胚0.92/幼生0.03/変態直後0.55/幼体の年生存率0.36/おとなの年生存率0.69/一腹卵数303(モデル用のメス)/成熟3年。胚・幼生・変態直後の3つで最初の1年(いくつかは近い仲間の値を代用)(閲覧 2026-11-20)
- `bc_cdc_red_legged_frog` [Species Summary: Rana aurora (Northern Red-legged Frog)](https://a100.gov.bc.ca/pub/eswp/speciesSummary.do?id=19586) — 卵は水温によって1〜1.5か月でふ化/幼生期間2.5〜3.5か月/1回の産卵数は平均530〜680個/3歳以上で成熟/飼育下で15年生きた例(閲覧 2026-11-20)
- `anage_rana_aurora` [AnAge entry for Rana aurora](https://genomics.senescence.info/species/entry.php?species=Rana_aurora) — 最高寿命15年(野生)/カリフォルニアではおそらく10年前後(閲覧 2026-11-20)

### セイブヒキガエル(Anaxyrus boreas)— 調査地: 北アメリカ西部(既存研究の値をまとめたもの/期間はアメリカ・モンタナ州など)

最高齢の根拠: 飼育下の記録

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵 | 0.014 | 1 | 0.78 |  | biek2002, mt_fieldguide_western_toad |
| オタマジャクシ | 0.158 | 1 | 0.47 |  | biek2002, mt_fieldguide_western_toad |
| 子ガエル(はじめての冬まで) | 0.828 | 1 | 0.08 | 推定 | biek2002 |
| わかもの | 1 | 4 | 0.26 |  | biek2002, mt_fieldguide_western_toad |
| おとな | 1 | 6 | 0.78 |  | biek2002, anage_anaxyrus_boreas |

一度に生まれる数: 3532個(出典ID: biek2002)

- `biek2002` [What Is Missing in Amphibian Decline Research: Insights from Ecological Sensitivity Analysis (Biek, Funk, Maxell & Mills 2002, Conservation Biology 16(3): 728-734) Table 1](https://www.umt.edu/research/millslab/files/2015/01/biekwhat.pdf) — セイブヒキガエル:胚0.78/幼生0.47/変態直後0.08/幼体の年生存率0.26/おとなの年生存率0.78/一腹卵数3532/成熟4〜7年。胚・幼生・変態直後の3つで最初の1年(いくつかは近い仲間の値を代用)(閲覧 2026-11-20)
- `mt_fieldguide_western_toad` [Montana Field Guide: Western Toad (Anaxyrus boreas)](https://fieldguide.mt.gov/speciesDetail.aspx?elcode=AAABB01030) — 卵は3〜12日でふ化(モンタナでは約5日)/オタマジャクシは40〜75日で一斉に変態/繁殖するオスは最低4歳、メスは6歳/1回の卵は1,000〜18,000個以上(閲覧 2026-11-20)
- `anage_anaxyrus_boreas` [AnAge entry for Anaxyrus boreas](https://genomics.senescence.info/species/entry.php?species=Anaxyrus_boreas) — 最高寿命11.5年(飼育下)/成熟1,095日(閲覧 2026-11-20)

## 昆虫

### モンシロチョウ(Pieris rapae crucivora)— 調査地: 日本・北海道札幌市(北海道大学構内、1974年の夏の世代)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵 | 0.0135 | 1 | 0.458 | 推定 | yamamoto1981_pieris |
| 幼虫(青虫) | 0.0417 | 1 | 0.0588 | 推定 | yamamoto1981_pieris |
| さなぎ | 0.031 | 1 | 0.0833 | 推定 | yamamoto1981_pieris |
| 成虫(卵を産むまで) | 0.022 | 1 | 0.909 | 推定 | yamamoto1981_pieris |

一度に生まれる数: 700個(出典ID: yamamoto1981_pieris)

- `yamamoto1981_pieris` [Comparison of Population Dynamics of Two Pierid Butterflies, Pieris rapae crucivora and P. napi nesis, Living in the Same Area and Feeding on the Same Plant in Sapporo, Northern Japan (山本道也, 北海道大學理學部紀要 22(3): 202-249, 1981)](https://eprints.lib.hokudai.ac.jp/repo/huscap/all/27663/22(3)_P202-249.pdf) — モンシロチョウ第2世代の生命表:卵891→1齢408(死亡率54.2%)→…→さなぎ24→成虫2(さなぎ死亡率91.7%)、総生存率0.22%(第1世代1.07%・第3世代1.13%)/野外の発育日数:卵4.92日・幼虫期の終わりまで20.14日・さなぎ11.33日/1匹の産卵数600〜800個/第2世代メスの日ごと生存数(1000匹あたり):32日目2.2、40日目2.0(閲覧 2026-11-20)

### エゾスジグロシロチョウ(Pieris napi nesis)— 調査地: 日本・北海道札幌市(北海道大学構内、1974年の第1世代)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵 | 0.022 | 1 | 0.734 | 推定 | yamamoto1981_pieris |
| 幼虫(青虫) | 0.069 | 1 | 0.298 | 推定 | yamamoto1981_pieris |
| さなぎ | 0.034 | 1 | 0.643 | 推定 | yamamoto1981_pieris |

一度に生まれる数: 300個(出典ID: yamamoto1981_pieris)

- `yamamoto1981_pieris` [Comparison of Population Dynamics of Two Pierid Butterflies, Pieris rapae crucivora and P. napi nesis, Living in the Same Area and Feeding on the Same Plant in Sapporo, Northern Japan (山本道也, 北海道大學理學部紀要 22(3): 202-249, 1981)](https://eprints.lib.hokudai.ac.jp/repo/huscap/all/27663/22(3)_P202-249.pdf) — エゾスジグロシロチョウ第1世代の生命表:卵64→1齢47(死亡率26.6%)→5齢31→さなぎ14(5齢死亡率54.8%)→成虫9(さなぎ死亡率35.7%)、総生存率14.06%/野外の発育日数:卵7.95日・幼虫期の終わりまで31.99日・前蛹1.27日・さなぎ12.56日/1匹の産卵数200〜400個(閲覧 2026-11-20)

### ミツバチ(はたらきばち)(Apis mellifera)— 調査地: フランス(シゼとアヴィニョンの野外の巣箱)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 巣の中ではたらく時期(外で花をまわる前まで) | 0.058 | 1 | 0.483 | 推定 | prado2020_honeybee |

- `prado2020_honeybee` [Honeybee lifespan: the critical role of pre-foraging stage (Prado et al. 2020, Royal Society Open Science 7: 200998)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7735337/) — 外勤を始める前に死ぬ割合 53.6%(A地点)・49.8%(B地点)(15日齢までに死ぬ割合は約40%)/外勤開始の平均日齢 22.4±10.6日(A地点)・19.6±5.7日(B地点)/平均寿命 21.2日・18.9日/外勤期間 8.7日・7.4日(約8日)/3,374匹を解析(閲覧 2026-11-20)

### オオカバマダラ(Danaus plexippus)— 調査地: 北アメリカ(卵〜さなぎ前:アメリカ・アイオワ州とカナダ・オンタリオ州/さなぎ:アメリカ・カリフォルニア州)

| 段階 | 期間(年) | くり返し | 生存率 | 推定 | 出典ID |
|---|---|---|---|---|---|
| 卵〜幼虫(さなぎになるまで) | 0.042 | 1 | 0.014 |  | grant2020_monarch, monarchwatch_cycle |
| さなぎ | 0.033 | 1 | 0.394 |  | smith1986_monarch_pupae, monarchwatch_cycle |

一度に生まれる数: 200個(出典ID: monarchwatch_cycle)

- `grant2020_monarch` [Estimating arthropod survival probability from field counts: a case study with monarch butterflies (Grant et al. 2020, Ecosphere 11(4): e03082)](https://doi.org/10.1002/ecs2.3082) — 【要旨で確認】卵からさなぎになるまでの平均生存率0.014(95%CI 0.004〜0.024)/地点ごとの範囲0.002〜0.058/調査地:アイオワ州・オンタリオ州の18地点(要旨をCrossref経由で確認)(閲覧 2026-11-20)
- `smith1986_monarch_pupae` [Placement and fate of monarch butterfly pupae in northern California (Journal of the Lepidopterists' Society 40(1): 67, 1986)](https://images.peabody.yale.edu/lepsoc/jls/1980s/1986/1986-40(1)67-Smith.pdf) — さなぎ392個のうち羽化39.4%・死亡35.1%・行方不明25.5%(カリフォルニア州デービス近郊、1966年)(閲覧 2026-11-20)
- `monarchwatch_cycle` [Monarch Life Cycle](https://monarchwatch.org/biology/cycle1.htm) — 卵3〜4日/幼虫10〜14日/さなぎ10〜14日/夏の世代の成虫は2〜5週間生きる/渡りの世代は8〜9か月/1匹が産む卵は平均でおそらく100〜300個(閲覧 2026-11-20)
