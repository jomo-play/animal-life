// 自動生成ファイル。直接編集せず data/species/*.json を直して tools/build.py を実行する。
window.SPECIES_DATA = [
 {
  "id": "african_elephant",
  "name": "アフリカゾウ",
  "sci": "Loxodonta africana",
  "group": "哺乳類",
  "emoji": "🐘",
  "dataRegion": "ケニア・アンボセリ国立公園(メス)",
  "intro": "陸でいちばん大きな動物。お母さんたちの家族で暮らす。",
  "start": "生まれた日",
  "cohort": {
   "size": 1,
   "unit": "頭",
   "label": "いっしょに生まれた子",
   "src": [
    "anage_african_elephant"
   ]
  },
  "stages": [
   {
    "label": "子ども(0〜9歳)",
    "years": 1,
    "repeat": 9,
    "survival": 0.9774,
    "src": [
     "lee2016_amboseli"
    ],
    "estimated": true,
    "note": "40歳までの生存割合40%を1年あたりに換算(0.40の40乗根=0.9774)。年齢ごとの値は資料にないため0〜40歳で同じ値",
    "surviveText": [
     "お母さんのおっぱいを飲んで、すくすく育った。",
     "家族のおばさんたちにも守られた。"
    ],
    "dieText": [
     "乾季をこえられなかった。",
     "病気で動けなくなった。"
    ]
   },
   {
    "label": "おとな(9〜40歳)",
    "years": 1,
    "repeat": 31,
    "survival": 0.9774,
    "src": [
     "lee2016_amboseli"
    ],
    "estimated": true,
    "note": "0〜40歳と同じ値(0.40の40乗根)",
    "surviveText": [
     "家族といっしょに遠くの水場まで歩いた。",
     "また雨の季節をむかえた。",
     "子どもを育てた。"
    ],
    "dieText": [
     "年をとって、静かに眠りについた。",
     "日照りの年をこえられなかった。"
    ]
   },
   {
    "label": "年長のおとな(40〜50歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.933,
    "src": [
     "lee2016_amboseli"
    ],
    "estimated": true,
    "note": "40歳40%→50歳20%なので10年で0.5、1年あたり0.5の10乗根=0.9330",
    "surviveText": [
     "群れの先頭に立ち、水場への道を案内した。",
     "孫たちの世話を手伝った。"
    ],
    "dieText": [
     "乾季の終わりに、静かに力つきた。",
     "病気で動けなくなった。"
    ]
   },
   {
    "label": "長老(50〜60歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.933,
    "src": [
     "lee2016_amboseli"
    ],
    "estimated": true,
    "note": "50歳20%→60歳代10%なので10年で0.5、1年あたり0.9330",
    "surviveText": [
     "長い経験で、干ばつの年も水場を見つけた。",
     "若いゾウたちに頼られた。"
    ],
    "dieText": [
     "歯がすり減り、食べられなくなった。",
     "乾季をこえられなかった。"
    ]
   },
   {
    "label": "大長老(60〜65歳)",
    "years": 1,
    "repeat": 5,
    "survival": 0.8706,
    "src": [
     "lee2016_amboseli"
    ],
    "estimated": true,
    "note": "60歳代10%→65歳までに95%が死亡(残り5%)なので5年で0.5、1年あたり0.5の5乗根=0.8706",
    "surviveText": [
     "また雨の季節をむかえた。",
     "群れのみんなに見守られて過ごした。"
    ],
    "dieText": [
     "年をとり、静かに一生を終えた。",
     "歯がすり減り、食べられなくなった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "lee2016_amboseli",
    "title": "The reproductive advantages of a long life: longevity and senescence in wild female African elephants (Lee et al. 2016, CC BY 4.0)",
    "publisher": "Behavioral Ecology and Sociobiology 70:337-345",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4748003/",
    "values": "アンボセリの野生のメス(自然死のみ、1255頭): 生まれたメスのうち40歳まで生きるのは40%、50歳まで20%、60歳代まで10%/95%が65歳までに死亡/9歳まで生きたメスの平均余命32年",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_african_elephant",
    "title": "AnAge entry for Loxodonta africana",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Loxodonta_africana",
    "values": "一度に生まれる子の数1頭(最高寿命65年は飼育下の記録のため使っていない)",
    "accessed": "2026-11-20"
   }
  ],
  "maxAgeBasis": "仲間の95%が一生を終える年齢",
  "endText": "仲間の95%が一生を終える65歳をこえて生きた。大長老。",
  "caveats": [
   "病気・干ばつなどの自然死だけの値(密猟など人による死は含まない)。",
   "前の版で使ったタンザニア・タランギレの値(おとなの年死亡率1%)は、密猟から回復中の若い群れの平均で、年をとってからの死亡の増加を含まないため、65歳まで約45%が生きる計算になり不自然だった。年齢ごとの生存割合が分かるアンボセリの資料に差し替えた。"
  ]
 },
 {
  "id": "chimpanzee",
  "name": "チンパンジー",
  "sci": "Pan troglodytes",
  "group": "哺乳類",
  "emoji": "🐒",
  "dataRegion": "ウガンダ・キバレ国立公園ンゴゴ",
  "intro": "道具を使い、仲間と助け合って森でくらす、人にいちばん近い動物。",
  "start": "生まれた日",
  "cohort": {
   "size": 1,
   "unit": "頭",
   "label": "いっしょに生まれた子",
   "src": [
    "anage_chimpanzee"
   ]
  },
  "stages": [
   {
    "label": "赤ちゃん(0〜1歳)",
    "years": 1,
    "survival": 0.85,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "生命表の0歳の死亡率q0=0.15から 1-0.15=0.85 と計算",
    "surviveText": [
     "お母さんのおなかにしがみついて森を移動した。",
     "お母さんのおっぱいを飲んで育った。"
    ],
    "dieText": [
     "病気で動けなくなった。",
     "寒い雨の日に体が冷えてしまった。"
    ]
   },
   {
    "label": "1歳",
    "years": 1,
    "survival": 0.94,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "生命表の1歳の死亡率q1=0.06から 1-0.06=0.94 と計算",
    "surviveText": [
     "お母さんの背中に乗って、森を見わたした。",
     "初めて木の実をかじった。"
    ],
    "dieText": [
     "病気で弱ってしまった。",
     "お母さんとはぐれてしまった。"
    ]
   },
   {
    "label": "子ども(2〜10歳)",
    "years": 1,
    "repeat": 8,
    "survival": 0.9936,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "生存割合lx 2歳0.80→10歳0.76から、8年分 0.95 の8乗根で1年あたり0.9936と計算",
    "surviveText": [
     "小枝でシロアリをつる方法を覚えた。",
     "仲間と木の上で追いかけっこをした。"
    ],
    "dieText": [
     "病気で動けなくなった。",
     "木から落ちてしまった。"
    ]
   },
   {
    "label": "若者(10〜20歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.996,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "lx 10歳0.76→20歳0.73から、1年あたり0.996と計算",
    "surviveText": [
     "仲間と毛づくろいをしあった。",
     "群れのなわばりを見回りに行った。"
    ],
    "dieText": [
     "となりの群れとのけんかでけがをした。",
     "病気で弱ってしまった。"
    ]
   },
   {
    "label": "おとな(20〜30歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.9756,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "lx 20歳0.73→30歳0.57から、1年あたり0.9756と計算",
    "surviveText": [
     "石で固い木の実を割った。",
     "子どもが生まれた。"
    ],
    "dieText": [
     "群れの順位あらそいでけがをした。",
     "病気が群れに広がった。"
    ]
   },
   {
    "label": "おとな(30〜40歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.9766,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "lx 30歳0.57→40歳0.45から、1年あたり0.9766と計算",
    "surviveText": [
     "若い仲間に食べ物の場所を教えた。",
     "イチジクがたくさん実る季節が来た。"
    ],
    "dieText": [
     "病気で弱ってしまった。",
     "けがが治らなかった。"
    ]
   },
   {
    "label": "年をとったおとな(40〜50歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.9502,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "lx 40歳0.45→50歳0.27から、1年あたり0.9502と計算",
    "surviveText": [
     "孫と毛づくろいをした。",
     "ゆっくりと森を歩いた。"
    ],
    "dieText": [
     "年をとって、静かに眠りについた。",
     "病気で弱ってしまった。"
    ]
   },
   {
    "label": "長老(50〜60歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.9221,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "lx 50歳0.27→60歳0.12から、1年あたり0.9221と計算",
    "surviveText": [
     "群れのみんなに見守られてすごした。",
     "また雨の季節をむかえた。"
    ],
    "dieText": [
     "年をとって、静かに眠りについた。",
     "寒い雨の季節をこえられなかった。"
    ]
   },
   {
    "label": "大長老(60歳〜)",
    "years": 1,
    "repeat": 6,
    "survival": 0.8706,
    "src": [
     "wood_2017_ngogo"
    ],
    "estimated": true,
    "note": "lx 60歳0.12→65歳0.06から、1年あたり0.8706と計算。repeatはンゴゴの最高年齢66歳から60歳を引いた回数",
    "surviveText": [
     "森でいちばんの長生きになった。",
     "日なたでのんびり休んだ。"
    ],
    "dieText": [
     "年をとって、静かに眠りについた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "wood_2017_ngogo",
    "title": "Favorable ecological circumstances promote life expectancy in chimpanzees similar to that of human hunter-gatherers",
    "publisher": "Journal of Human Evolution 105 (Wood, Watts, Mitani & Langergraber 2017) / PubMed Central",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5526083/",
    "values": "表2(ンゴゴ、男女合計): q0=0.15、q1=0.06/生存割合lx 1歳0.85・2歳0.80・5歳0.79・10歳0.76・15歳0.76・20歳0.73・25歳0.62・30歳0.57・35歳0.50・40歳0.45・45歳0.35・50歳0.27・55歳0.17・60歳0.12・65歳0.06/表1 ンゴゴの最高年齢66歳(表2のlxから計算した出生時平均余命が約32.8年となり、論文の値32.8年と一致)",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_chimpanzee",
    "title": "AnAge entry for Pan troglodytes",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Pan_troglodytes",
    "values": "一度に生まれる子の数1頭",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "european_hedgehog",
  "name": "ヨーロッパハリネズミ",
  "sci": "Erinaceus europaeus",
  "group": "哺乳類",
  "emoji": "🦔",
  "dataRegion": "デンマーク",
  "intro": "背中のトゲで身を守り、夜の庭で虫をさがす。",
  "start": "巣を出て歩きはじめたころ",
  "stages": [
   {
    "label": "0歳",
    "years": 1,
    "survival": 0.642,
    "src": [
     "rasmussen_2023_hedgehog"
    ],
    "estimated": true,
    "note": "メスの生命表(死んで見つかった個体の年齢から作成)の0歳の死亡率0.358から 1-0.358=0.642 と計算。巣の中での死亡は含まれない",
    "surviveText": [
     "夜の庭でミミズを見つけた。",
     "落ち葉の巣で初めての冬眠をした。"
    ],
    "dieText": [
     "冬眠の前に太りきれなかった。",
     "道路をわたりきれなかった。",
     "初めての冬をこえられなかった。"
    ]
   },
   {
    "label": "1歳",
    "years": 1,
    "survival": 0.7,
    "src": [
     "rasmussen_2023_hedgehog"
    ],
    "estimated": true,
    "note": "メスの1歳の死亡率0.300から 1-0.300=0.700 と計算",
    "surviveText": [
     "春に冬眠から目をさました。",
     "初めて赤ちゃんを産んだ。"
    ],
    "dieText": [
     "道路をわたりきれなかった。",
     "病気で動けなくなった。"
    ]
   },
   {
    "label": "2歳",
    "years": 1,
    "survival": 0.694,
    "src": [
     "rasmussen_2023_hedgehog"
    ],
    "estimated": true,
    "note": "メスの2歳の死亡率0.306から 1-0.306=0.694 と計算",
    "surviveText": [
     "生けがきの下に新しい巣を作った。",
     "また赤ちゃんを育てた。"
    ],
    "dieText": [
     "道路をわたりきれなかった。",
     "冬眠中に力つきた。"
    ]
   },
   {
    "label": "3歳",
    "years": 1,
    "survival": 0.471,
    "src": [
     "rasmussen_2023_hedgehog"
    ],
    "estimated": true,
    "note": "メスの3歳の死亡率0.529から 1-0.529=0.471 と計算",
    "surviveText": [
     "夏の夜にカブトムシをたくさん食べた。",
     "また冬眠をのりこえた。"
    ],
    "dieText": [
     "病気で弱ってしまった。",
     "道路をわたりきれなかった。"
    ]
   },
   {
    "label": "4歳",
    "years": 1,
    "survival": 0.438,
    "src": [
     "rasmussen_2023_hedgehog"
    ],
    "estimated": true,
    "note": "メスの4歳の死亡率0.562から 1-0.562=0.438 と計算",
    "surviveText": [
     "いつもの庭をゆっくり歩いた。",
     "春の訪れを感じた。"
    ],
    "dieText": [
     "年をとって、冬眠から目ざめなかった。",
     "病気で動けなくなった。"
    ]
   },
   {
    "label": "5歳",
    "years": 1,
    "survival": 0.143,
    "src": [
     "rasmussen_2023_hedgehog"
    ],
    "estimated": true,
    "note": "メスの5歳の死亡率0.857から 1-0.857=0.143 と計算。この資料のメスは6歳が最高(オスでは16歳の記録あり)",
    "surviveText": [
     "とても長生きのハリネズミになった。"
    ],
    "dieText": [
     "年をとって、静かに眠りについた。",
     "冬眠から目ざめなかった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "rasmussen_2023_hedgehog",
    "title": "Anyone Can Get Old—All You Have to Do Is Live Long Enough: Understanding Mortality and Life Expectancy in European Hedgehogs (Erinaceus europaeus)",
    "publisher": "Animals 13(4):626 (2023) / PubMed Central",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9951656/",
    "values": "メスの生命表(表4)の死亡率qx: 0歳0.358・1歳0.300・2歳0.306・3歳0.529・4歳0.562・5歳0.857・6歳1.000/死亡時の年齢は0〜16歳(388頭)",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "gray_wolf",
  "name": "ハイイロオオカミ",
  "sci": "Canis lupus",
  "group": "哺乳類",
  "emoji": "🐺",
  "dataRegion": "アメリカ・ロッキー山脈北部(イエローストーン周辺)",
  "intro": "家族の群れでくらし、力を合わせて狩りをする。",
  "start": "子オオカミとして群れで数えられた日(生まれた年の夏〜秋)",
  "cohort": {
   "size": 6,
   "unit": "頭",
   "label": "同じ巣穴のきょうだい",
   "src": [
    "anage_gray_wolf"
   ]
  },
  "stages": [
   {
    "label": "子オオカミ(年末まで)",
    "years": 0.3,
    "survival": 0.79,
    "src": [
     "nps_yellowstone_wolf_2023"
    ],
    "estimated": false,
    "note": "2023年、数えられた子58頭のうち46頭(79%)が年末まで生きのびた。子の数は秋にランデブー地点に移ってから数えるため、それより前の死亡は含まれない。yearsは秋から年末までのおおよその長さ",
    "surviveText": [
     "おとなが運んでくれた肉を食べて大きくなった。",
     "きょうだいとじゃれあって遊んだ。"
    ],
    "dieText": [
     "病気で動けなくなった。",
     "初めての寒さに力つきた。"
    ]
   },
   {
    "label": "若者・おとな",
    "years": 1,
    "repeat": 13,
    "survival": 0.75,
    "src": [
     "smith_2010_wolf",
     "anage_gray_wolf"
    ],
    "estimated": false,
    "note": "首輪をつけた711頭の調査によるロッキー山脈北部の年生存率0.750(1982〜2004年。子と1歳はやや死にやすいと報告)。repeatは野生の最高記録13.7年から約0.7歳を引いて丸めた回数",
    "surviveText": [
     "群れでエルクを追いかけた。",
     "雪の冬をこえた。",
     "自分のなわばりを持った。"
    ],
    "dieText": [
     "狩りの最中にけがをしてしまった。",
     "ほかの群れとのあらそいに負けた。",
     "人の住む場所に近づきすぎた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "nps_yellowstone_wolf_2023",
    "title": "Yellowstone Wolf Project Annual Report 2023",
    "publisher": "U.S. National Park Service",
    "url": "https://www.nps.gov/yell/learn/nature/upload/2023-Wolf-Report-final_web.pdf",
    "values": "数えられた子58頭のうち46頭(79%)が年末まで生存(2023年)",
    "accessed": "2026-11-20"
   },
   {
    "id": "smith_2010_wolf",
    "title": "Survival of Colonizing Wolves in the Northern Rocky Mountains of the United States, 1982–2004",
    "publisher": "Journal of Wildlife Management 74(4) (Smith et al. 2010) 要旨",
    "url": "https://doi.org/10.2193/2008-584",
    "values": "【要旨で確認】年生存率0.750(95%信頼区間0.728〜0.772)/711頭に首輪、死亡363件",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_gray_wolf",
    "title": "AnAge entry for Canis lupus",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Canis_lupus",
    "values": "野生での最高記録13.7年(飼育下20.6年)/一腹の子の数6頭",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "little_brown_bat",
  "name": "トビイロホオヒゲコウモリ",
  "sci": "Myotis lucifugus",
  "group": "哺乳類",
  "emoji": "🦇",
  "dataRegion": "アメリカ・ニューハンプシャー州南部",
  "intro": "夜の空で虫をつかまえる、手のひらにのるほど小さなコウモリ。",
  "start": "生まれた夏",
  "cohort": {
   "size": 1,
   "unit": "匹",
   "label": "いっしょに生まれた子",
   "src": [
    "anage_little_brown_bat"
   ]
  },
  "stages": [
   {
    "label": "最初の1年",
    "years": 1,
    "survival": 0.345,
    "src": [
     "frick_2010_myotis"
    ],
    "estimated": true,
    "note": "1年目の生存率は年により0.23〜0.46。幅の中央の値0.345を使用。早く生まれた子ほど生きのびやすい",
    "surviveText": [
     "初めて夜空を飛んで、虫をつかまえた。",
     "洞くつで初めての冬眠をのりこえた。"
    ],
    "dieText": [
     "冬眠のための脂肪が足りなかった。",
     "フクロウに見つかってしまった。",
     "初めての冬をこえられなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 33,
    "survival": 0.765,
    "src": [
     "frick_2010_myotis",
     "anage_little_brown_bat"
    ],
    "estimated": true,
    "note": "おとなのメスの年生存率は年により0.63〜0.90。幅の中央の値0.765を使用(雨の多い夏ほど高い)。repeatは野生の最高記録34年から1歳を引いた回数",
    "surviveText": [
     "仲間と同じ屋根裏で子を産んだ。",
     "長い冬眠から目をさました。",
     "虫の多い夏をすごした。"
    ],
    "dieText": [
     "夏が乾いて虫が少なかった。",
     "冬眠中に力つきた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "frick_2010_myotis",
    "title": "Influence of climate and reproductive timing on demography of little brown myotis Myotis lucifugus",
    "publisher": "Journal of Animal Ecology (Frick, Reynolds & Kunz 2010) 要旨",
    "url": "https://doi.org/10.1111/j.1365-2656.2009.01615.x",
    "values": "【要旨で確認】おとなのメスの年生存率0.63〜0.90/1年目の生存率0.23〜0.46(1993〜2008年の標識再捕獲)",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_little_brown_bat",
    "title": "AnAge entry for Myotis lucifugus",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Myotis_lucifugus",
    "values": "最高寿命34年(野生)/一度に生まれる子の数1匹",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "meerkat",
  "name": "ミーアキャット",
  "sci": "Suricata suricatta",
  "group": "哺乳類",
  "emoji": "🐾",
  "dataRegion": "南アフリカ・カラハリ砂漠南部",
  "intro": "後ろ足で立って見はりをする、砂漠の家族思いの動物。",
  "start": "巣穴から初めて外に出た日",
  "cohort": {
   "size": 4,
   "unit": "匹",
   "label": "同じ巣穴のきょうだい",
   "src": [
    "clutton_brock_1999_meerkat"
   ]
  },
  "stages": [
   {
    "label": "子ども(最初の1年)",
    "years": 1,
    "survival": 0.2,
    "src": [
     "clutton_brock_1999_meerkat"
    ],
    "estimated": false,
    "note": "子どもの年生存率0.20",
    "surviveText": [
     "お兄さんお姉さんからサソリをもらった。",
     "見はり役の声で、すぐ巣穴にかくれた。"
    ],
    "dieText": [
     "タカに見つかってしまった。",
     "日照りで食べ物が足りなかった。",
     "暑さに力つきた。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 14,
    "survival": 0.43,
    "src": [
     "clutton_brock_1999_meerkat",
     "anage_meerkat"
    ],
    "estimated": false,
    "note": "1歳以上の年生存率0.43。repeatは野生での推定最高寿命15年から1歳を引いた回数",
    "surviveText": [
     "見はり役をりっぱにこなした。",
     "弟や妹の世話をした。",
     "雨のあと、虫がたくさん出てきた。"
    ],
    "dieText": [
     "ジャッカルに見つかってしまった。",
     "日照りの年をこえられなかった。",
     "となりの群れとのあらそいに負けた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "clutton_brock_1999_meerkat",
    "title": "Reproduction and survival of suricates (Suricata suricatta) in the southern Kalahari",
    "publisher": "African Journal of Ecology 37(1) (Clutton-Brock et al. 1999) / FAO AGRIS",
    "url": "https://agris.fao.org/search/en/records/65df47427c7033e84bed36d2",
    "values": "【要旨で確認】年生存率 子ども0.20・1歳以上0.43/巣穴から出たときの一腹子数3〜5匹(中央の4匹を使用)",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_meerkat",
    "title": "AnAge entry for Suricata suricatta",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Suricata_suricatta",
    "values": "野生での推定最高寿命15年(飼育下20.6年)",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "polar_bear",
  "name": "ホッキョクグマ",
  "sci": "Ursus maritimus",
  "group": "哺乳類",
  "emoji": "🐻‍❄️",
  "dataRegion": "アメリカ・アラスカのボーフォート海",
  "intro": "北の海の氷の上で、アザラシをとってくらす大きなクマ。",
  "start": "雪の巣穴から初めて外に出た日",
  "cohort": {
   "size": 2,
   "unit": "頭",
   "label": "いっしょに生まれたきょうだい",
   "src": [
    "anage_polar_bear"
   ]
  },
  "stages": [
   {
    "label": "子グマ(1年目)",
    "years": 1,
    "survival": 0.651,
    "src": [
     "usgs_amstrup_durner_1995"
    ],
    "estimated": false,
    "note": "1年目の生存率0.651(95%信頼区間0.610〜0.675)。巣穴を出てから離乳までは0.676",
    "surviveText": [
     "お母さんのあとについて、氷の上を歩いた。",
     "お母さんがとったアザラシを分けてもらった。"
    ],
    "dieText": [
     "冷たい海を泳ぎきれなかった。",
     "お母さんとはぐれてしまった。",
     "お腹をすかせたまま力つきた。"
    ]
   },
   {
    "label": "子グマ(2年目)",
    "years": 1,
    "survival": 0.86,
    "src": [
     "usgs_amstrup_durner_1995"
    ],
    "estimated": false,
    "note": "2年目の生存率0.860(95%信頼区間0.751〜0.903)",
    "surviveText": [
     "アザラシの待ちぶせを、まねして覚えた。",
     "お母さんと別れて、ひとり立ちした。"
    ],
    "dieText": [
     "氷がとけて、えさがとれなかった。",
     "大きなオスのクマに出会ってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 30,
    "survival": 0.969,
    "src": [
     "usgs_amstrup_durner_1995",
     "seaworld_polar_bear"
    ],
    "estimated": false,
    "note": "おとなのメスの年生存率0.969(範囲0.952〜0.983)。若いクマの値は示されていないため、2歳からこの値を使う。repeatは野生で知られている最高齢32年から2歳を引いた回数",
    "surviveText": [
     "氷の上で大きなアザラシをつかまえた。",
     "また冬の海が凍った。",
     "雪の巣穴で子を産んだ。"
    ],
    "dieText": [
     "氷のない夏が長すぎた。",
     "年をとって、静かに眠りについた。",
     "人の狩りにあってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "usgs_amstrup_durner_1995",
    "title": "Survival rates of radio-collared female polar bears and their dependent young",
    "publisher": "U.S. Geological Survey(Amstrup & Durner 1995, Canadian Journal of Zoology)",
    "url": "https://www.usgs.gov/publications/survival-rates-radio-collared-female-polar-bears-and-their-dependent-young",
    "values": "おとなのメスの年生存率0.969(0.952〜0.983)/巣穴を出てから離乳まで0.676/1年目0.651(0.610〜0.675)/2年目0.860(0.751〜0.903)",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_polar_bear",
    "title": "AnAge entry for Ursus maritimus",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Ursus_maritimus",
    "values": "一腹の子の数2頭(最高寿命43.8年は飼育下の記録のため使っていない)",
    "accessed": "2026-11-20"
   },
   {
    "id": "seaworld_polar_bear",
    "title": "Polar Bears - Longevity & Causes of Death",
    "publisher": "SeaWorld Parks & Entertainment",
    "url": "https://seaworld.org/animals/all-about/polar-bears/longevity/",
    "values": "北極で知られている最高齢は32年/多くは15〜18年をこえて生きない/飼育下の最高齢45年",
    "accessed": "2026-11-20"
   }
  ],
  "maxAgeBasis": "野生の記録",
  "caveats": [
   "おとなの年生存率0.969はおとなのメスの平均値で、年をとってからの死亡の増加を含まない。そのため32歳まで生きる割合が約22%と、「多くは15〜18年をこえない」という記述より高めに出る。",
   "最高齢32年は水族館運営団体のページの値(一次資料は未確認)。"
  ]
 },
 {
  "id": "red_fox",
  "name": "アカギツネ",
  "sci": "Vulpes vulpes",
  "group": "哺乳類",
  "emoji": "🦊",
  "dataRegion": "イギリス・ブリストル(都市部)",
  "intro": "野原にも町にもくらす、かしこいキツネ。",
  "start": "子ギツネとして巣穴の外に出たころ",
  "cohort": {
   "size": 4,
   "unit": "匹",
   "label": "同じ巣穴のきょうだい",
   "src": [
    "devenish_nelson_2012_fox"
   ]
  },
  "stages": [
   {
    "label": "子ギツネ(0歳)",
    "years": 1,
    "survival": 0.48,
    "src": [
     "devenish_nelson_2012_fox"
    ],
    "estimated": false,
    "note": "ブリストル(1977〜85年)の0歳の生存率P1=0.48。年齢構成(主に交通事故で死んだ個体)から求めた値で、巣穴の中での死亡は含まれないと考えられる",
    "surviveText": [
     "巣穴の前できょうだいとじゃれあった。",
     "親から虫やネズミのとり方を教わった。"
    ],
    "dieText": [
     "道路をわたりきれなかった。",
     "病気で動けなくなった。",
     "新しいなわばりを探す旅で力つきた。"
    ]
   },
   {
    "label": "1歳",
    "years": 1,
    "survival": 0.54,
    "src": [
     "devenish_nelson_2012_fox"
    ],
    "estimated": false,
    "note": "ブリストルの1歳の生存率P2=0.54",
    "surviveText": [
     "自分のなわばりを見つけた。",
     "初めて子ギツネを育てた。"
    ],
    "dieText": [
     "道路をわたりきれなかった。",
     "皮ふの病気で弱ってしまった。"
    ]
   },
   {
    "label": "2歳",
    "years": 1,
    "survival": 0.53,
    "src": [
     "devenish_nelson_2012_fox"
    ],
    "estimated": false,
    "note": "ブリストルの2歳の生存率P3=0.53",
    "surviveText": [
     "夜の町をすばやく走りぬけた。",
     "また春に子ギツネが生まれた。"
    ],
    "dieText": [
     "道路をわたりきれなかった。",
     "病気で動けなくなった。"
    ]
   },
   {
    "label": "おとな(3歳〜)",
    "years": 1,
    "repeat": 9,
    "survival": 0.51,
    "src": [
     "devenish_nelson_2012_fox",
     "wildlifeonline_fox_longevity",
     "mulder2004_fox"
    ],
    "estimated": false,
    "note": "ブリストルの3歳以上の生存率P4*=0.51。repeatは耳標で年齢が確かな野生の最高齢12年から3歳を引いた回数",
    "surviveText": [
     "なわばりを守りぬいた。",
     "寒い冬の夜をこえた。",
     "家族と庭のすみで休んだ。"
    ],
    "dieText": [
     "道路をわたりきれなかった。",
     "年をとって、静かに眠りについた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "devenish_nelson_2012_fox",
    "title": "Sarcoptic mange and the demography of the red fox, Vulpes vulpes (PhD thesis)",
    "publisher": "Durham University (Devenish-Nelson 2012) / 元データ Harris & Smith 1987",
    "url": "http://etheses.dur.ac.uk/6960/2/E_Devenish_Nelson_-_Final_PhD_Thesis.pdf",
    "values": "表4.1 ブリストル(1977〜85年、1628頭)の生存率: P1 0.48・P2 0.54・P3 0.53・P4* 0.51/表6.2 平均一腹子数4.00",
    "accessed": "2026-11-20"
   },
   {
    "id": "wildlifeonline_fox_longevity",
    "title": "Red Fox Longevity",
    "publisher": "Wildlife Online",
    "url": "https://www.wildlifeonline.me.uk/animals/article/red-fox-longevity",
    "values": "オランダの砂丘で子ギツネの時に耳標を付けたメスが1993年に12歳で死亡(Mulder 2004)/野生では2〜6年がふつう",
    "accessed": "2026-11-20"
   },
   {
    "id": "mulder2004_fox",
    "title": "Longevity records in the red fox (Mulder 2004)",
    "publisher": "Lutra 47(1)(ページ番号未確認・原文未確認)",
    "url": "https://www.zoogdiervereniging.nl/kennisbank/publicaties/2004/lutra-471editorial2004",
    "values": "Wildlife Online が紹介する元の記録: 耳標を付けた野生のメスが12歳で死亡。URLは同号の目次(編集後記)ページで、論文本文は未確認",
    "accessed": "2026-11-20"
   }
  ],
  "maxAgeBasis": "野生の記録",
  "caveats": [
   "最高齢12年は二次資料(Wildlife Online)が紹介する Mulder 2004(Lutra 47(1)、ページ番号未確認)の記録。原論文は未確認。"
  ]
 },
 {
  "id": "sea_otter",
  "name": "ラッコ",
  "sci": "Enhydra lutris",
  "group": "哺乳類",
  "emoji": "🦦",
  "dataRegion": "アメリカ・カリフォルニア州モントレー",
  "intro": "海にぷかぷか浮かび、おなかの上で貝を割って食べる。",
  "start": "生まれた日",
  "cohort": {
   "size": 1,
   "unit": "匹",
   "label": "いっしょに生まれた子",
   "src": [
    "anage_sea_otter"
   ]
  },
  "stages": [
   {
    "label": "赤ちゃん(離乳まで)",
    "years": 0.5,
    "survival": 0.675,
    "src": [
     "usgs_sea_otter_2019",
     "anage_sea_otter"
    ],
    "estimated": true,
    "note": "離乳まで育つ割合は母親の年齢により0.64(3歳の母)〜0.71(10歳の母)。幅の中央の値0.675を使用。離乳は生後約175日",
    "surviveText": [
     "お母さんのおなかの上で眠った。",
     "初めて自分で潜ってみた。"
    ],
    "dieText": [
     "冷たい海で体が冷えてしまった。",
     "お母さんとはぐれてしまった。",
     "嵐の海で力つきた。"
    ]
   },
   {
    "label": "1歳",
    "years": 1,
    "survival": 0.779,
    "src": [
     "usgs_sea_otter_2019"
    ],
    "estimated": false,
    "note": "モントレー(2008〜12年)のメス1歳の年生存率。離乳後から2歳までをこの値で代用",
    "surviveText": [
     "ひとりで貝をとれるようになった。",
     "海草に体をまいて眠った。"
    ],
    "dieText": [
     "えさを見つけられなかった。",
     "サメにかまれてしまった。"
    ]
   },
   {
    "label": "2歳",
    "years": 1,
    "survival": 0.859,
    "src": [
     "usgs_sea_otter_2019"
    ],
    "estimated": false,
    "note": "モントレー(2008〜12年)のメス2歳の年生存率",
    "surviveText": [
     "石で貝を割るのが上手になった。",
     "仲間のラッコたちと浮かんですごした。"
    ],
    "dieText": [
     "病気で弱ってしまった。",
     "サメにかまれてしまった。"
    ]
   },
   {
    "label": "若いおとな(3〜6歳)",
    "years": 1,
    "repeat": 4,
    "survival": 0.944,
    "src": [
     "usgs_sea_otter_2019"
    ],
    "estimated": true,
    "note": "メス3〜6歳の年生存率0.929・0.953・0.954・0.941をかけ合わせ、4乗根(幾何平均)で0.944と計算",
    "surviveText": [
     "赤ちゃんを産んで育てた。",
     "ウニをたくさん食べた。"
    ],
    "dieText": [
     "子育てでやせて、力つきた。",
     "病気で動けなくなった。"
    ]
   },
   {
    "label": "おとな(7〜10歳)",
    "years": 1,
    "repeat": 4,
    "survival": 0.861,
    "src": [
     "usgs_sea_otter_2019"
    ],
    "estimated": true,
    "note": "メス7〜10歳の年生存率0.906・0.884・0.853・0.803の幾何平均で0.861と計算",
    "surviveText": [
     "また赤ちゃんを育てた。",
     "おだやかな海でのんびり浮かんだ。"
    ],
    "dieText": [
     "子育てでやせて、力つきた。",
     "病気で弱ってしまった。"
    ]
   },
   {
    "label": "年をとったおとな(11〜14歳)",
    "years": 1,
    "repeat": 4,
    "survival": 0.721,
    "src": [
     "usgs_sea_otter_2019"
    ],
    "estimated": true,
    "note": "メス11〜14歳の年生存率0.798・0.752・0.703・0.639の幾何平均で0.721と計算",
    "surviveText": [
     "若いラッコたちのそばで浮かんだ。",
     "また春の海をむかえた。"
    ],
    "dieText": [
     "歯がすり減って、貝を食べにくくなった。",
     "年をとって、静かに眠りについた。"
    ]
   },
   {
    "label": "おばあちゃん(15〜18歳)",
    "years": 1,
    "repeat": 4,
    "survival": 0.559,
    "src": [
     "usgs_sea_otter_2019"
    ],
    "estimated": true,
    "note": "メス15〜18歳の年生存率0.573・0.524・0.548・0.594の幾何平均で0.559と計算。資料の表は18歳まで",
    "surviveText": [
     "長生きのラッコになった。",
     "昔からの海草の森でくらした。"
    ],
    "dieText": [
     "年をとって、静かに眠りについた。",
     "冷たい冬の海に力つきた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "usgs_sea_otter_2019",
    "title": "Southern sea otter (Enhydra lutris nereis) population biology at Big Sur and Monterey, California (Open-File Report 2019-1022)",
    "publisher": "U.S. Geological Survey",
    "url": "https://pubs.usgs.gov/of/2019/1022/ofr20191022.pdf",
    "values": "離乳まで育つ割合 0.64(3歳の母)〜0.71(10歳の母)/表28 モントレー2008〜12年のメス年生存率: 1歳0.779・2歳0.859・3歳0.929・4歳0.953・5歳0.954・6歳0.941・7歳0.906・8歳0.884・9歳0.853・10歳0.803・11歳0.798・12歳0.752・13歳0.703・14歳0.639・15歳0.573・16歳0.524・17歳0.548・18歳0.594",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_sea_otter",
    "title": "AnAge entry for Enhydra lutris",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Enhydra_lutris",
    "values": "一度に生まれる子の数1匹/離乳まで175日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "barn_owl",
  "name": "メンフクロウ",
  "sci": "Tyto alba",
  "group": "鳥類",
  "emoji": "🦉",
  "dataRegion": "イギリス",
  "intro": "ハート形の白い顔をした、夜に狩りをするフクロウ。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 5,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_barn_owl"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.37,
    "src": [
     "bto_barn_owl"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "音だけでネズミを見つけられるようになった。",
     "新しいすみかの古い納屋を見つけた。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "雪の冬にネズミがとれず、力つきた。",
     "夜の道路で車にぶつかってしまった。",
     "初めての冬をこえられなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 14,
    "survival": 0.72,
    "src": [
     "bto_barn_owl"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢15年3か月21日(約15年)から最初の1年を引いた回数",
    "surviveText": [
     "納屋で、ひなを育てた。",
     "野原でネズミをたくさんつかまえた。",
     "また春をむかえた。"
    ],
    "dieText": [
     "雪の多い冬に力つきた。",
     "夜の道路で車にぶつかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_barn_owl",
    "title": "BTO BirdFacts: Barn Owl",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/barn-owl",
    "values": "一腹卵数 平均4.85(典型4〜6)/幼鳥1年生存率0.37/成鳥年生存率0.72/最高記録年齢15年3か月21日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "barn_swallow",
  "name": "ツバメ",
  "sci": "Hirundo rustica",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "春に南の国から来て、軒下に巣をつくる鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 5,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_swallow"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.395,
    "src": [
     "bto_swallow"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率(秋にアフリカ南部へ渡り、春に戻るまでをふくむ)",
    "surviveText": [
     "海と砂漠をこえて、アフリカ南部にたどり着いた。",
     "長い旅を終えて、生まれた村に帰ってきた。",
     "飛びながら虫をとるのが上手になった。"
    ],
    "dieText": [
     "渡りの途中、嵐にまきこまれてしまった。",
     "砂漠をこえる途中で力つきた。",
     "ハヤブサに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 10,
    "survival": 0.374,
    "src": [
     "bto_swallow"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢11年1か月11日(約11年)から最初の1年を引いた回数",
    "surviveText": [
     "軒下に泥の巣をつくり、ひなを育てた。",
     "また春に、アフリカから帰ってきた。",
     "今年も無事に渡りを終えた。"
    ],
    "dieText": [
     "渡りの途中で力つきた。",
     "寒い春に虫がとれず、弱ってしまった。",
     "タカに見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_swallow",
    "title": "BTO BirdFacts: Swallow",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/swallow",
    "values": "一腹卵数 平均4.55(典型4〜5)/幼鳥1年生存率0.395/成鳥年生存率0.374/最高記録年齢11年1か月11日/繁殖開始は通常1歳",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "blue_tit",
  "name": "アオガラ",
  "sci": "Cyanistes caeruleus",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "青い頭がかわいい、ヨーロッパの小さな鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 9,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_blue_tit"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.379,
    "src": [
     "bto_blue_tit"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "親について、木の枝で虫をさがす方法を覚えた。",
     "庭のえさ台を見つけて、冬をこえた。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "初めての冬をこえられなかった。",
     "ハイタカに見つかってしまった。",
     "ネコに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 9,
    "survival": 0.532,
    "src": [
     "bto_blue_tit"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢9年8か月16日(約10年)から最初の1年を引いた回数",
    "surviveText": [
     "巣箱に巣をつくり、たくさんのひなを育てた。",
     "また春をむかえた。"
    ],
    "dieText": [
     "寒い冬に力つきた。",
     "ハイタカに見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_blue_tit",
    "title": "BTO BirdFacts: Blue Tit",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/blue-tit",
    "values": "一腹卵数 平均9.06(典型8〜10)/幼鳥1年生存率0.379/成鳥年生存率0.532/最高記録年齢9年8か月16日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "common_kingfisher",
  "name": "カワセミ",
  "sci": "Alcedo atthis",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "川で魚をとる、青くかがやく小さな鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 6,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_kingfisher"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.215,
    "src": [
     "bto_kingfisher"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "水に飛びこんで、初めて魚をつかまえた。",
     "自分の川のなわばりを見つけた。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "川がこおって、魚がとれなくなった。",
     "なわばりを見つけられず、力つきた。",
     "大雨で川がにごり、魚が見えなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 4,
    "survival": 0.28,
    "src": [
     "bto_kingfisher"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢4年6か月29日(約5年)から最初の1年を引いた回数",
    "surviveText": [
     "川の土手に穴をほって、ひなを育てた。",
     "また春をむかえた。"
    ],
    "dieText": [
     "川がこおる寒い冬をこえられなかった。",
     "大水で巣が流されてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_kingfisher",
    "title": "BTO BirdFacts: Kingfisher",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/kingfisher",
    "values": "一腹卵数 平均5.51(典型5〜7)/幼鳥1年生存率0.215/成鳥年生存率0.28/最高記録年齢4年6か月29日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "common_starling",
  "name": "ホシムクドリ",
  "sci": "Sturnus vulgaris",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "大きな群れで空におどるように飛ぶ、ものまね上手な鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 5,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_starling"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.518,
    "src": [
     "bto_starling"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "何万羽もの群れに入り、夕方の空をいっしょに飛んだ。",
     "芝生で虫をさがすのが上手になった。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "初めての冬をこえられなかった。",
     "ハヤブサに見つかってしまった。",
     "ネコに見つかってしまった。"
    ]
   },
   {
    "label": "おとな(巣をつくるのはふつう2歳から)",
    "years": 1,
    "repeat": 17,
    "survival": 0.687,
    "src": [
     "bto_starling"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢17年7か月25日(約18年)から最初の1年を引いた回数",
    "surviveText": [
     "屋根のすきまに巣をつくり、ひなを育てた。(はじめての子育てはふつう2歳から)",
     "いろんな音をまねして歌った。",
     "また春をむかえた。"
    ],
    "dieText": [
     "寒い冬に力つきた。",
     "ハヤブサに見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_starling",
    "title": "BTO BirdFacts: Starling",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/starling",
    "values": "一腹卵数 平均4.6(典型4〜5)/幼鳥1年生存率0.518/成鳥年生存率0.687/最高記録年齢17年7か月25日/繁殖開始はふつう2歳/繁殖年齢に達した鳥の典型的な寿命5年",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "emperor_penguin",
  "name": "コウテイペンギン",
  "sci": "Aptenodytes forsteri",
  "group": "鳥類",
  "emoji": "🐧",
  "dataRegion": "南極(テール・アデリー、ポワント・ジェオロジー)",
  "intro": "南極のきびしい冬に子育てをする、いちばん大きなペンギン。",
  "start": "卵",
  "cohort": {
   "size": 1,
   "unit": "羽",
   "label": "卵は1つだけ",
   "src": [
    "adw_emperor_penguin"
   ]
  },
  "stages": [
   {
    "label": "卵からひとり立ちまで",
    "years": 0.6,
    "survival": 0.458,
    "src": [
     "abadi2017",
     "adw_emperor_penguin"
    ],
    "estimated": false,
    "note": "生存率は論文の繁殖成功(卵が巣立ちヒナになる割合)の平均0.458。yearsはADWの抱卵約65日+ひとり立ちまで約5か月から計算(0.18+0.42年)",
    "surviveText": [
     "お父さんの足の上で、ブリザードの冬をこえて生まれた。",
     "ヒナどうしで集まって、寒さをしのいだ。",
     "ふわふわの羽が生えかわり、海へ向かった。"
    ],
    "dieText": [
     "卵が氷の上に落ちて、冷えてしまった。",
     "親がえさを持って帰るのが間に合わなかった。",
     "ブリザードの寒さをこえられなかった。"
    ]
   },
   {
    "label": "ひとり立ちから最初の1年",
    "years": 1,
    "survival": 0.401,
    "src": [
     "abadi2017"
    ],
    "estimated": false,
    "note": "論文の幼鳥生存率(巣立ちから1歳まで)の平均0.401(年ごとの変動が大きい)",
    "surviveText": [
     "遠い北の海まで泳ぎ、魚をとれるようになった。",
     "氷のふちにもどってきた。",
     "初めての1年を生きぬいた。"
    ],
    "dieText": [
     "ヒョウアザラシに見つかってしまった。",
     "えさが見つからず、弱ってしまった。",
     "シャチに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 48,
    "survival": 0.907,
    "src": [
     "abadi2017",
     "adw_emperor_penguin"
    ],
    "estimated": false,
    "note": "論文の成鳥(1歳以上)の年生存率0.907。最高年齢は信頼できる記録がなく(AnAgeは未確定)、ADWの「最長50年(到達は約1%)」を使用。repeatは50から最初の約1.6年を引いて丸めた数",
    "surviveText": [
     "氷の上でつがいと出会い、卵を受けついだ。",
     "深くもぐって、たくさん魚をとった。",
     "また南極の冬をこえた。"
    ],
    "dieText": [
     "ヒョウアザラシに見つかってしまった。",
     "海氷が少ない年に、えさがとれなかった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "abadi2017",
    "title": "Integrated population modeling reveals the impact of climate on the survival of juvenile emperor penguins (Abadi, Barbraud & Gimenez 2017, Global Change Biology, doi:10.1111/gcb.13538)",
    "publisher": "Global Change Biology(著者公開PDF)",
    "url": "https://oliviergimenez.github.io/pubs/abadi2016.pdf",
    "values": "調査地 ポワント・ジェオロジー(テール・アデリー)、解析期間1971〜1998年/幼鳥生存率(巣立ち〜1歳)平均0.401/成鳥生存率0.907/繁殖成功(卵が巣立ちヒナになる割合)平均0.458",
    "accessed": "2026-11-20"
   },
   {
    "id": "adw_emperor_penguin",
    "title": "Animal Diversity Web: Aptenodytes forsteri",
    "publisher": "University of Michigan Museum of Zoology",
    "url": "https://animaldiversity.org/accounts/Aptenodytes_forsteri/",
    "values": "1繁殖期に卵1個/抱卵約65日/約5か月でひとり立ち/野生の寿命15〜20年/最長50年まで生きた例があるとされる(約1%)",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_emperor_penguin",
    "title": "AnAge: Aptenodytes forsteri",
    "publisher": "Human Ageing Genomic Resources",
    "url": "https://genomics.senescence.info/species/entry.php?species=Aptenodytes_forsteri",
    "values": "最高寿命は未確定(詳しい研究なし、40年以上は逸話的)",
    "accessed": "2026-11-20"
   }
  ],
  "maxAgeBasis": "参考値(確かな記録なし)"
 },
 {
  "id": "eurasian_wren",
  "name": "ミソサザイ",
  "sci": "Troglodytes troglodytes",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "とても小さいのに、体に似合わない大きな声で歌う鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 6,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_wren"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.263,
    "src": [
     "bto_wren"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "やぶの中で虫をさがすのが上手になった。",
     "寒い夜は仲間と身を寄せ合ってすごした。"
    ],
    "dieText": [
     "初めての冬の寒さをこえられなかった。",
     "ネコに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 6,
    "survival": 0.319,
    "src": [
     "bto_wren"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢7年3か月から最初の1年を引いた回数",
    "surviveText": [
     "大きな声で歌い、巣をつくった。",
     "ひなを育てた。"
    ],
    "dieText": [
     "寒い冬に力つきた。",
     "タカに見つかってしまった。"
    ]
   }
  ],
  "maxAgeBasis": "野生の記録(足環)",
  "sources": [
   {
    "id": "bto_wren",
    "title": "BTO BirdFacts: Wren",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/wren",
    "values": "一腹卵数 平均5.7(典型5〜6)/幼鳥1年生存率0.263/成鳥年生存率0.319/最高記録年齢7年3か月6日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "european_robin",
  "name": "ヨーロッパコマドリ",
  "sci": "Erithacus rubecula",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "オレンジ色の胸で、冬でもきれいな声で歌う鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 5,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_robin"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.41,
    "src": [
     "bto_robin"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "自分のなわばりを見つけた。",
     "庭で、土をほる人のそばのミミズを食べて冬をこえた。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "初めての冬をこえられなかった。",
     "ネコに見つかってしまった。",
     "ハイタカに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 7,
    "survival": 0.419,
    "src": [
     "bto_robin"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢8年4か月30日(約8年)から最初の1年を引いた回数",
    "surviveText": [
     "なわばりで歌い、ひなを育てた。",
     "また春をむかえた。"
    ],
    "dieText": [
     "寒い冬に力つきた。",
     "ネコに見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_robin",
    "title": "BTO BirdFacts: Robin",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/robin",
    "values": "一腹卵数 平均4.87(典型4〜5)/幼鳥1年生存率0.41/成鳥年生存率0.419/最高記録年齢8年4か月30日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "house_sparrow",
  "name": "イエスズメ",
  "sci": "Passer domesticus",
  "group": "鳥類",
  "emoji": "🐦",
  "dataRegion": "イギリス",
  "intro": "人の町のそばで暮らす小さな鳥。世界中に広がっている。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 4,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_house_sparrow"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.489,
    "src": [
     "bto_house_sparrow"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "初めての冬をこえた。",
     "仲間の群れについて行き、えさ場を覚えた。"
    ],
    "dieText": [
     "初めての冬をこえられなかった。",
     "タカに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 11,
    "survival": 0.571,
    "src": [
     "bto_house_sparrow"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢12年から最初の1年を引いた回数",
    "surviveText": [
     "巣をつくり、ひなを育てた。",
     "また春をむかえた。"
    ],
    "dieText": [
     "寒い冬に力つきた。",
     "ネコに見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_house_sparrow",
    "title": "BTO BirdFacts: House Sparrow",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/house-sparrow",
    "values": "一腹卵数 平均4.15(典型4〜5)/幼鳥1年生存率0.489/成鳥年生存率0.571/最高記録年齢12年12日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "mallard",
  "name": "マガモ",
  "sci": "Anas platyrhynchos",
  "group": "鳥類",
  "emoji": "🦆",
  "dataRegion": "イギリス",
  "intro": "池や川でよく見る、緑の頭のカモ。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 12,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_mallard"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.518,
    "src": [
     "bto_mallard"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "池で、仲間といっしょに水草を食べた。",
     "空を飛んで、となりの湖まで行けるようになった。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "キツネに見つかってしまった。",
     "池がこおって、えさがとれなかった。",
     "初めての冬をこえられなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 19,
    "survival": 0.627,
    "src": [
     "bto_mallard"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢20年5か月17日(約20年)から最初の1年を引いた回数",
    "surviveText": [
     "草むらに巣をつくり、たくさんのひなを育てた。",
     "また春をむかえた。"
    ],
    "dieText": [
     "キツネに見つかってしまった。",
     "寒い冬に力つきた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_mallard",
    "title": "BTO BirdFacts: Mallard",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/mallard",
    "values": "一腹卵数 典型11〜14(平均値の記載なし。cohortは中央付近の12)/幼鳥1年生存率0.518/成鳥年生存率0.627(雌0.575・雄0.679)/最高記録年齢20年5か月17日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "mute_swan",
  "name": "コブハクチョウ",
  "sci": "Cygnus olor",
  "group": "鳥類",
  "emoji": "🦢",
  "dataRegion": "イギリス",
  "intro": "オレンジ色のくちばしの、大きな白い鳥。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 6,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_mute_swan"
   ]
  },
  "stages": [
   {
    "label": "若鳥の3年間",
    "years": 3,
    "survival": 0.42,
    "src": [
     "bto_mute_swan"
    ],
    "estimated": false,
    "note": "BTOの幼鳥生存率(3歳までの合計)。この3年をまとめて1段階とした",
    "surviveText": [
     "灰色の羽が、真っ白に生えかわった。",
     "若い仲間の群れで、川や湖をわたり歩いた。",
     "3回の冬をこえた。"
    ],
    "dieText": [
     "電線にぶつかってしまった。",
     "寒い冬に、水草がとれず弱ってしまった。",
     "キツネに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 26,
    "survival": 0.85,
    "src": [
     "bto_mute_swan"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢29年1か月11日(約29年)から若鳥の3年を引いた回数",
    "surviveText": [
     "つがいで大きな巣をつくり、ひなを育てた。",
     "川で、家族といっしょにすごした。",
     "また春をむかえた。"
    ],
    "dieText": [
     "電線にぶつかってしまった。",
     "鳥の病気にかかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_mute_swan",
    "title": "BTO BirdFacts: Mute Swan",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/mute-swan",
    "values": "一腹卵数 平均5.58(典型4〜7)/幼鳥生存率0.42(3歳まで)/成鳥年生存率0.85/最高記録年齢29年1か月11日/繁殖開始は通常4歳",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "tawny_owl",
  "name": "モリフクロウ",
  "sci": "Strix aluco",
  "group": "鳥類",
  "emoji": "🦉",
  "dataRegion": "イギリス",
  "intro": "森で「ホーホー」と鳴く、茶色のフクロウ。",
  "start": "巣立ちの日",
  "cohort": {
   "size": 3,
   "unit": "羽",
   "label": "同じ巣のきょうだい",
   "src": [
    "bto_tawny_owl"
   ]
  },
  "stages": [
   {
    "label": "巣立ちから最初の1年",
    "years": 1,
    "survival": 0.301,
    "src": [
     "bto_tawny_owl"
    ],
    "estimated": false,
    "note": "BTOの足環調査による幼鳥(1年目)の生存率",
    "surviveText": [
     "空いている森を見つけて、自分のなわばりにした。",
     "夜の森でネズミをとれるようになった。",
     "初めての冬をこえた。"
    ],
    "dieText": [
     "なわばりを見つけられず、力つきた。",
     "えものがとれず、弱ってしまった。",
     "初めての冬をこえられなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 22,
    "survival": 0.738,
    "src": [
     "bto_tawny_owl"
    ],
    "estimated": false,
    "note": "成鳥の年生存率。repeatは記録上の最高年齢23年5か月27日(約23年)から最初の1年を引いた回数",
    "surviveText": [
     "木のうろで、ひなを育てた。",
     "夜の森で、つがいと鳴きかわした。",
     "また春をむかえた。"
    ],
    "dieText": [
     "寒い冬に力つきた。",
     "夜の道路で車にぶつかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "bto_tawny_owl",
    "title": "BTO BirdFacts: Tawny Owl",
    "publisher": "British Trust for Ornithology",
    "url": "https://bto.org/learn/about-birds/birdfacts/tawny-owl",
    "values": "一腹卵数 平均2.56(典型2〜3)/幼鳥1年生存率0.301/成鳥年生存率0.738/最高記録年齢23年5か月27日",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "atlantic_salmon",
  "name": "タイセイヨウサケ",
  "sci": "Salmo salar",
  "group": "魚類",
  "emoji": "🐟",
  "dataRegion": "北大西洋の川(北米・ヨーロッパの275集団のまとめ)",
  "intro": "川で生まれて海で大きくなり、ふるさとの川へ帰ってくるサケ。",
  "start": "卵",
  "stages": [
   {
    "label": "卵から川を下る若者(スモルト)になるまで",
    "years": 2.91,
    "survival": 0.015,
    "src": [
     "hutchings1998"
    ],
    "estimated": false,
    "note": "卵からスモルトまでの生存率1.5%(範囲0.2〜3.2%)、集団平均。期間はスモルトになる平均年齢2.91年(範囲1.04〜5.85年)",
    "surviveText": [
     "川の石のかげで冬をこえた。",
     "体が銀色になり、海へ向かう準備ができた。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "大水で流されてしまった。",
     "鳥に見つかってしまった。"
    ]
   },
   {
    "label": "海で育ち、ふるさとの川へ帰るまで",
    "years": 1.6,
    "survival": 0.074,
    "src": [
     "hutchings1998"
    ],
    "estimated": false,
    "note": "スモルトから1回目の帰りまでの生存率7.4%(範囲1.3〜17.5%)。期間は海ですごす平均1.60年。タイセイヨウサケは産卵後も生き残ることがあるが、その割合は「15%未満が多い」としか示されていないため、ゲームは最初の産卵で終える",
    "surviveText": [
     "ふるさとの川に帰り、卵を産んで一生をやりとげた。",
     "遠い海を旅して、生まれた川に帰って卵を産んだ。"
    ],
    "dieText": [
     "アザラシに見つかってしまった。",
     "海で大きな魚に食べられてしまった。",
     "漁の網にかかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "hutchings1998",
    "title": "Life history variation and growth rate thresholds for maturity in Atlantic salmon, Salmo salar (Hutchings & Jones 1998, CJFAS)",
    "publisher": "Canadian Journal of Fisheries and Aquatic Sciences",
    "url": "https://doi.org/10.1139/d98-004",
    "values": "卵からスモルトまでの生存率1.5%(0.2〜3.2%)/スモルトの年齢2.91年(1.04〜5.85年)/海ですごす年数1.60年(1.00〜2.64年)/スモルトから1回目の帰りまでの生存率7.4%(1.3〜17.5%)/産卵後の冬をこす割合は15%未満が多い",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "coho_salmon",
  "name": "ギンザケ",
  "sci": "Oncorhynchus kisutch",
  "group": "魚類",
  "emoji": "🐟",
  "dataRegion": "カナダ・ブリティッシュコロンビア州(カーネーション川)",
  "intro": "小さな川で生まれ、海で育って、一度だけ卵を産みに帰ってくるサケ。",
  "start": "卵",
  "cohort": {
   "size": 2500,
   "unit": "個",
   "label": "同じお母さんの卵",
   "src": [
    "dfo_coho1990"
   ]
  },
  "stages": [
   {
    "label": "砂利の中(卵から稚魚が出てくるまで)",
    "years": 0.4,
    "survival": 0.15,
    "src": [
     "dfo_coho1990"
    ],
    "estimated": false,
    "note": "卵が泳げる稚魚になって出てくる割合約15%。秋〜冬に産まれ3〜5月に出てくるため期間は約0.4年(おおよそ)",
    "surviveText": [
     "砂利の中で卵がかえった。",
     "春になって川の岸辺に泳ぎ出た。"
    ],
    "dieText": [
     "砂の泥で息ができなくなってしまった。",
     "大水で卵が流されてしまった。"
    ]
   },
   {
    "label": "最初の夏",
    "years": 0.5,
    "survival": 0.5,
    "src": [
     "dfo_coho1990"
    ],
    "estimated": false,
    "note": "出てきた稚魚が最初の夏をこす割合は典型的に50%。期間はおおよそ",
    "surviveText": [
     "夏のあいだに体が2倍の長さになった。",
     "岸辺で虫をたくさん食べた。"
    ],
    "dieText": [
     "川の水が少なくなってしまった。",
     "カワセミに見つかってしまった。"
    ]
   },
   {
    "label": "川での冬",
    "years": 0.5,
    "survival": 0.3,
    "src": [
     "dfo_coho1990"
    ],
    "estimated": false,
    "note": "冬をこす割合は典型的に30%。期間はおおよそ",
    "surviveText": [
     "流れのゆるい池にかくれて冬をこした。",
     "体が銀色になり、海へ向かった。"
    ],
    "dieText": [
     "冬の大水で流されてしまった。",
     "寒さと空腹で力つきた。"
    ]
   },
   {
    "label": "海の暮らし",
    "years": 1.5,
    "survival": 0.1,
    "src": [
     "dfo_coho1990",
     "noaa_salmon_cycle"
    ],
    "estimated": false,
    "note": "スモルトが海で2度目の夏まで生きる割合は5〜15%、中央の10%を使用(図の値も10%)。多くは海で2年目の秋〜冬に帰る",
    "surviveText": [
     "海で小魚を食べて大きくなった。",
     "仲間と一緒にふるさとの川をめざした。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "アザラシに見つかってしまった。"
    ]
   },
   {
    "label": "漁の季節をぬけて川をのぼる",
    "years": 0.2,
    "survival": 0.36,
    "src": [
     "dfo_coho1990"
    ],
    "estimated": true,
    "note": "帰ってきたおとなの64%が漁でとられる(図: 5.6匹→産卵2匹)。生き残る割合 = 1 − 0.64 = 0.36(計算値)。ギンザケは産卵後に一生を終えるため、ここで終わる",
    "surviveText": [
     "生まれた川にたどりつき、卵を産んで一生をやりとげた。",
     "流れをのぼりきって、次の命に卵をたくした。"
    ],
    "dieText": [
     "漁の網にかかってしまった。",
     "釣り人につり上げられてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "dfo_coho1990",
    "title": "Strait of Georgia Coho Salmon: Resource Status and Management Planning Process (1990)",
    "publisher": "Fisheries and Oceans Canada",
    "url": "https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/243271.pdf",
    "values": "1匹のメスが平均約2,500個の卵/卵→稚魚約15%/最初の夏50%/冬30%/スモルト→海で2度目の夏まで5〜15%(図では10%)/漁による死亡64%(図: 卵2,500→稚魚375→秋の稚魚188→スモルト56→漁の前のおとな5.6→産卵2、カーネーション川のデータ)",
    "accessed": "2026-11-20"
   },
   {
    "id": "noaa_salmon_cycle",
    "title": "Salmon Life Cycle and Seasonal Fishery Planning",
    "publisher": "NOAA Fisheries",
    "url": "https://www.fisheries.noaa.gov/west-coast/sustainable-fisheries/salmon-life-cycle-and-seasonal-fishery-planning",
    "values": "ギンザケの寿命はふつう3〜4年",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "pink_salmon",
  "name": "カラフトマス",
  "sci": "Oncorhynchus gorbuscha",
  "group": "魚類",
  "emoji": "🐟",
  "dataRegion": "アラスカ・北太平洋",
  "intro": "生まれてすぐ海へ向かい、2年で一生を終える短い命のサケ。",
  "start": "卵",
  "cohort": {
   "size": 1850,
   "unit": "個",
   "label": "同じお母さんの卵",
   "src": [
    "mcneil1975"
   ],
   "estimated": true,
   "note": "McNeil & Bailey 1975 のカラフトマスの卵数1,400〜2,300個の中央。参考: アラスカ州の種のページでは1,200〜1,900個"
  },
  "stages": [
   {
    "label": "砂利の中(卵から稚魚が出てくるまで)",
    "years": 0.5,
    "survival": 0.125,
    "src": [
     "mcneil1975",
     "adfg_pink"
    ],
    "estimated": true,
    "note": "自然の川では卵の5〜20%が稚魚になる(サケ類全般の値)。幅の中央の12.5%を使用。期間はADF&Gの「5〜8か月」から約0.5年",
    "surviveText": [
     "冬のあいだ砂利の中で育った。",
     "春に砂利から出て、すぐ海へ向かった。"
    ],
    "dieText": [
     "大水で卵が流されてしまった。",
     "川の水が凍ってしまった。"
    ]
   },
   {
    "label": "海で育ち、ふるさとの川へ帰るまで",
    "years": 1.5,
    "survival": 0.03,
    "src": [
     "mcneil1975",
     "adfg_pink"
    ],
    "estimated": true,
    "note": "稚魚で海に入るカラフトマスとシロザケの海での生存率は1〜5%。幅の中央の3%を使用。海ですごす期間は18か月。カラフトマスは産卵後に一生を終えるため、ここで終わる",
    "surviveText": [
     "生まれた川に帰り、卵を産んで一生をやりとげた。",
     "背中を盛り上げた姿で川をのぼり、卵を産んだ。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "海鳥に見つかってしまった。",
     "漁の網にかかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "mcneil1975",
    "title": "Salmon Rancher's Manual (McNeil & Bailey 1975)",
    "publisher": "NOAA NMFS Auke Bay Fisheries Laboratory",
    "url": "https://apps-afsc.fisheries.noaa.gov/Publications/ProcRpt/PR1975_McNeil_Salmon.pdf",
    "values": "自然では卵の5〜20%しか稚魚にならない/海での生存率はカラフトマス・シロザケで1〜5%/カラフトマスの平均卵数1,400〜2,300個",
    "accessed": "2026-11-20"
   },
   {
    "id": "adfg_pink",
    "title": "Pink Salmon Species Profile",
    "publisher": "Alaska Department of Fish and Game",
    "url": "https://www.adfg.alaska.gov/index.cfm?adfg=pinksalmon.main",
    "values": "メス1匹が1,200〜1,900個の卵を産む/卵は冬に5〜8か月かけて育つ/海で18か月すごしておとなになる/2年で一生を終える",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "american_alligator",
  "name": "アメリカアリゲーター",
  "sci": "Alligator mississippiensis",
  "group": "爬虫類",
  "emoji": "🐊",
  "dataRegion": "アメリカ・フロリダ州オレンジ湖",
  "intro": "アメリカ南部の湖や沼にすむ大きなワニ。お母さんが子どもを守る。",
  "start": "卵",
  "cohort": {
   "size": 33,
   "unit": "個",
   "label": "同じ巣の卵",
   "src": [
    "crawford_ipm"
   ]
  },
  "stages": [
   {
    "label": "巣の中(卵がかえるまで)",
    "years": 0.18,
    "survival": 0.396,
    "src": [
     "crawford_ipm"
    ],
    "estimated": true,
    "note": "巣が最後まで残る確率0.452 × 卵が元気な子になる確率0.875 = 約0.396(計算値)。期間は資料の「約65日」",
    "surviveText": [
     "お母さんが巣を守ってくれた。",
     "卵の中から鳴き声を出すと、お母さんが巣をあけてくれた。"
    ],
    "dieText": [
     "巣が水につかってしまった。",
     "アライグマに巣をほり返されてしまった。"
    ]
   },
   {
    "label": "最初の1年",
    "years": 1,
    "survival": 0.411,
    "src": [
     "woodward1987",
     "crawford_ipm"
    ],
    "estimated": false,
    "note": "ふ化後12か月の生存率41%(ジョリー・セーバー法、1979〜1984年の標識調査)",
    "surviveText": [
     "きょうだいとかたまって、お母さんのそばですごした。",
     "小さな虫や魚をつかまえた。"
    ],
    "dieText": [
     "サギに見つかってしまった。",
     "大きなワニに見つかってしまった。"
    ]
   },
   {
    "label": "子どものワニ(体長30〜122cm)",
    "years": 1,
    "repeat": 5,
    "survival": 0.843,
    "src": [
     "crawford_ipm"
    ],
    "estimated": false,
    "note": "年生存率0.843(Rice & Percival 1995の値)。122cmに届く年齢は資料で確かめられなかったため、1〜14歳の13年を子ども5年・若者8年に仮に分けた",
    "surviveText": [
     "岸の草かげで魚をとった。",
     "体が少しずつ大きくなった。"
    ],
    "dieText": [
     "大きなワニに見つかってしまった。",
     "日照りで池が干上がってしまった。"
    ]
   },
   {
    "label": "若いワニ(体長122〜183cm)",
    "years": 1,
    "repeat": 8,
    "survival": 0.8552,
    "src": [
     "crawford_ipm",
     "icwdm_alligator"
    ],
    "estimated": false,
    "note": "年生存率0.8552(Rice & Percival 1995の値)。フロリダでは体長6フィート(約183cm)まで約14年かかる",
    "surviveText": [
     "自分のなわばりを見つけた。",
     "寒い冬を水の中でじっとこえた。"
    ],
    "dieText": [
     "大きなワニとのけんかに負けてしまった。",
     "狩りでつかまってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 63,
    "survival": 0.9057,
    "src": [
     "crawford_ipm",
     "anage_alligator"
    ],
    "estimated": false,
    "note": "おとなの年生存率0.9057(Rice & Percival 1995の値)。repeatはAnAgeの最高寿命77年(飼育下)から14歳を引いた63回。参考: この表で卵から14歳まで生きる割合は約2.0%",
    "surviveText": [
     "子どもたちを守り育てた。",
     "日なたぼっこをして、また1年をすごした。"
    ],
    "dieText": [
     "年をとって静かに力つきた。",
     "大きなワニとのけんかに負けてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "woodward1987",
    "title": "Survival of young American alligators on a Florida lake (Woodward et al. 1987, Journal of Wildlife Management)",
    "publisher": "USGS",
    "url": "https://www.usgs.gov/publications/survival-young-american-alligators-florida-lake",
    "values": "ふ化個体の生存率: 6か月76%、12か月41%(オレンジ湖、1979〜1984年)",
    "accessed": "2026-11-20"
   },
   {
    "id": "crawford_ipm",
    "title": "Towards a decision-making culture in wildlife management (Crawford, T. G., PhD dissertation, University of Georgia)",
    "publisher": "University of Georgia",
    "url": "https://openscholar.uga.edu/record/3104/files/CrawfordTaraPhD.pdf",
    "values": "オレンジ湖の値: 平均卵数33(32.8)/巣が残る確率0.452/卵が子になる確率0.875/年生存率: ふ化個体0.411、子ども(30〜122cm)0.843、若者(122〜183cm)0.8552、おとな(183〜274cm)0.9057/卵は約65日でかえる",
    "accessed": "2026-11-20"
   },
   {
    "id": "icwdm_alligator",
    "title": "Alligators (Woodward & David, Prevention and Control of Wildlife Damage 1994)",
    "publisher": "Internet Center for Wildlife Damage Management",
    "url": "https://icwdm.org/?p=1990",
    "values": "体長6フィートに届くまで: ルイジアナで最大10年、フロリダで14年、ノースカロライナで16年",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_alligator",
    "title": "AnAge entry for Alligator mississippiensis",
    "publisher": "Human Ageing Genomic Resources",
    "url": "https://genomics.senescence.info/species/entry.php?species=Alligator_mississippiensis",
    "values": "最高寿命77年(飼育下)/性成熟4,380日(約12年)",
    "accessed": "2026-11-20"
   }
  ],
  "maxAgeBasis": "飼育下の記録"
 },
 {
  "id": "green_turtle",
  "name": "アオウミガメ",
  "sci": "Chelonia mydas",
  "group": "爬虫類",
  "emoji": "🐢",
  "dataRegion": "ハワイ",
  "intro": "おとなになると海草を食べて暮らす、おだやかなウミガメ。",
  "start": "ふ化した日",
  "cohort": {
   "size": 110,
   "unit": "匹",
   "label": "同じ巣のきょうだい",
   "src": [
    "noaa_green"
   ]
  },
  "stages": [
   {
    "label": "赤ちゃんガメ(0〜1歳)",
    "years": 1,
    "repeat": 2,
    "survival": 0.35,
    "src": [
     "piacenza2019"
    ],
    "estimated": false,
    "note": "ふ化個体(hatchling)の年生存率0.350。論文の区分は0〜1歳なので2年分(repeat=2)とした。巣の中の卵の生存率は示されていないため、ふ化した日から始める",
    "surviveText": [
     "流れ藻にかくれて大海原をただよった。",
     "小さな生き物を食べて育った。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "鳥に見つかってしまった。"
    ]
   },
   {
    "label": "沖をただよう子ガメ(2〜3歳)",
    "years": 1,
    "repeat": 2,
    "survival": 0.8,
    "src": [
     "piacenza2019"
    ],
    "estimated": false,
    "note": "外洋期の幼体(pelagic juvenile)の年生存率0.800。2〜3歳の2年分",
    "surviveText": [
     "こうらが少し大きくなった。",
     "あたたかい海流に乗って旅をした。"
    ],
    "dieText": [
     "サメに見つかってしまった。",
     "ごみを飲みこんで弱ってしまった。"
    ]
   },
   {
    "label": "岸近くの子ガメ(4〜11歳)",
    "years": 1,
    "repeat": 8,
    "survival": 0.824,
    "src": [
     "piacenza2019"
    ],
    "estimated": false,
    "note": "沿岸期の幼体(neritic juvenile)の年生存率0.824。4〜11歳の8年分",
    "surviveText": [
     "浅い海で海草を食べはじめた。",
     "岩のすきまでぐっすり眠った。"
    ],
    "dieText": [
     "サメに見つかってしまった。",
     "漁の網にからまってしまった。"
    ]
   },
   {
    "label": "若いカメ(12〜29歳)",
    "years": 1,
    "repeat": 18,
    "survival": 0.876,
    "src": [
     "piacenza2019"
    ],
    "estimated": false,
    "note": "亜成体(subadult)の年生存率0.876。成熟年齢30歳(論文の値)までの18年分",
    "surviveText": [
     "海草の原っぱでゆっくり育った。",
     "また1年、元気にすごした。"
    ],
    "dieText": [
     "病気になって弱ってしまった。",
     "船とぶつかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 40,
    "survival": 0.929,
    "src": [
     "piacenza2019",
     "noaa_green"
    ],
    "estimated": false,
    "note": "おとなの年生存率0.929(ハワイでの29年間の標識調査に基づく)。repeatはNOAAの寿命「70年以上」から30歳を引いた40回。参考: この表でふ化から30歳まで生きる割合は約0.15%(約650分の1)",
    "surviveText": [
     "生まれた砂浜にもどって卵を産んだ。",
     "海草をたっぷり食べて1年をすごした。"
    ],
    "dieText": [
     "年をとって静かに力つきた。",
     "病気になって弱ってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "piacenza2019",
    "title": "Fathoming sea turtles: monitoring strategy evaluation to improve conservation status assessments (Piacenza, Richards & Heppell 2019, Ecological Applications)",
    "publisher": "Ecological Applications / PMC",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6851787/",
    "values": "年生存率: ふ化個体0.350/外洋期の幼体0.800/沿岸期の幼体0.824/亜成体0.876/おとな0.929。区分: ふ化個体0〜1歳、外洋期2〜3歳、沿岸期4〜11歳、亜成体12歳〜成熟。成熟年齢30(17〜41)歳",
    "accessed": "2026-11-20"
   },
   {
    "id": "noaa_green",
    "title": "Green Turtle",
    "publisher": "NOAA Fisheries",
    "url": "https://www.fisheries.noaa.gov/species/green-turtle",
    "values": "1つの巣に約110個の卵/メスは25〜35歳でおとな/少なくとも70年以上生きる",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "kemps_ridley_turtle",
  "name": "ケンプヒメウミガメ",
  "sci": "Lepidochelys kempii",
  "group": "爬虫類",
  "emoji": "🐢",
  "dataRegion": "メキシコ湾(メキシコ・ランチョヌエボ周辺の砂浜)",
  "intro": "世界でいちばん小さなウミガメ。昼間にみんなで砂浜へやってきて卵を産む。",
  "start": "卵",
  "cohort": {
   "size": 97,
   "unit": "個",
   "label": "同じ巣の卵",
   "src": [
    "kemp_plan2011"
   ]
  },
  "stages": [
   {
    "label": "巣の中(卵から砂の上に出るまで)",
    "years": 0.15,
    "survival": 0.801,
    "src": [
     "kemp_plan2011",
     "noaa_kemp"
    ],
    "estimated": false,
    "note": "自然の巣(3,000巣以上、2007年)で子ガメが出てきた割合80.1%。期間はNOAAの「50〜60日」",
    "surviveText": [
     "砂の中で卵がかえった。",
     "きょうだいと一緒に砂の上へ出た。"
    ],
    "dieText": [
     "卵がかえらなかった。",
     "巣がほかの動物にほり返されてしまった。"
    ]
   },
   {
    "label": "砂浜から海へ",
    "years": 0.01,
    "survival": 0.664,
    "src": [
     "kemp_plan2011"
    ],
    "estimated": false,
    "note": "自然の巣から出た子ガメが海にたどりついた割合66.4%(163巣を観察)",
    "surviveText": [
     "砂浜を走って海にたどりついた。",
     "最初の波をこえた。"
    ],
    "dieText": [
     "カモメに見つかってしまった。",
     "カニに見つかってしまった。"
    ]
   },
   {
    "label": "海をただよう赤ちゃんガメ(0〜1歳)",
    "years": 1,
    "repeat": 2,
    "survival": 0.318,
    "src": [
     "kemp_plan2011"
    ],
    "estimated": false,
    "note": "ふ化個体と外洋期の年生存率0.318。次の区分が2歳からなので0〜1歳の2年分(repeat=2)とした",
    "surviveText": [
     "流れ藻の中にかくれて育った。",
     "小さな生き物を食べて大きくなった。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "嵐の海で力つきた。"
    ]
   },
   {
    "label": "小さな子ガメ(2〜5歳)",
    "years": 1,
    "repeat": 4,
    "survival": 0.815,
    "src": [
     "kemp_plan2011"
    ],
    "estimated": false,
    "note": "2〜5歳の年生存率0.815(1997年以降の値)。4年分",
    "surviveText": [
     "岸近くの浅い海でカニを食べた。",
     "こうらが少しかたくなった。"
    ],
    "dieText": [
     "サメに見つかってしまった。",
     "漁の網にからまってしまった。"
    ]
   },
   {
    "label": "大きな子ガメ(6〜11歳)",
    "years": 1,
    "repeat": 6,
    "survival": 0.935,
    "src": [
     "kemp_plan2011"
    ],
    "estimated": false,
    "note": "6〜11歳の年生存率0.935(1997年以降の値)。6年分",
    "surviveText": [
     "湾の中をのびのびと泳いだ。",
     "また1年、元気にすごした。"
    ],
    "dieText": [
     "漁の網にからまってしまった。",
     "寒い冬に動けなくなってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 18,
    "survival": 0.935,
    "src": [
     "kemp_plan2011",
     "noaa_kemp"
    ],
    "estimated": false,
    "note": "12歳以上の年生存率0.935(1997年以降の値)。repeatはNOAAの寿命「30年以上」から12歳を引いた18回。参考: この表で卵から12歳まで生きる割合は約1.6%",
    "surviveText": [
     "仲間と一緒に砂浜へ行き、卵を産んだ。",
     "また1年、海で元気にすごした。"
    ],
    "dieText": [
     "年をとって静かに力つきた。",
     "漁の網にからまってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "kemp_plan2011",
    "title": "Bi-National Recovery Plan for the Kemp's Ridley Sea Turtle, Second Revision (2011)",
    "publisher": "NMFS, USFWS, SEMARNAT",
    "url": "https://ecos.fws.gov/docs/recovery_plan/kempsridley_revision2_with%20signature.pdf",
    "values": "1巣あたり平均97個/自然の巣から出てくる割合80.1%/出た子ガメが海に着く割合66.4%/年生存率(1997年以降): ふ化個体・外洋期0.318、2〜5歳0.815、6〜11歳0.935、12歳以上0.935/成熟12歳(モデル)",
    "accessed": "2026-11-20"
   },
   {
    "id": "noaa_kemp",
    "title": "Kemp's Ridley Turtle",
    "publisher": "NOAA Fisheries",
    "url": "https://www.fisheries.noaa.gov/species/kemps-ridley-turtle",
    "values": "1巣に約100個の卵、50〜60日で卵がかえる/約13歳でおとな/寿命は30年以上と推定",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "leatherback_turtle",
  "name": "オサガメ",
  "sci": "Dermochelys coriacea",
  "group": "爬虫類",
  "emoji": "🐢",
  "dataRegion": "太平洋(コスタリカ・プラヤグランデなど)",
  "intro": "世界でいちばん大きなカメ。やわらかい背中でクラゲを追って旅をする。",
  "start": "卵",
  "cohort": {
   "size": 100,
   "unit": "個",
   "label": "同じ巣の卵",
   "src": [
    "noaa_leatherback"
   ],
   "note": "NOAAの種のページの全体説明の「約100個」。同じページの太平洋個体群の欄では85〜95個"
  },
  "stages": [
   {
    "label": "巣の中(卵がかえるまで)",
    "years": 0.17,
    "survival": 0.47,
    "src": [
     "santidrian2012",
     "noaa_leatherback"
    ],
    "estimated": false,
    "note": "ふ化率0.47±0.25(プラヤグランデ、2004/05〜2009/10年の6シーズン平均)。期間はNOAAの「約2か月」",
    "surviveText": [
     "砂の中で卵がかえった。",
     "きょうだいの声が聞こえた。"
    ],
    "dieText": [
     "卵がかえらなかった。",
     "砂が暑くなりすぎてしまった。"
    ]
   },
   {
    "label": "砂の上に出るまで",
    "years": 0.01,
    "survival": 0.82,
    "src": [
     "santidrian2012"
    ],
    "estimated": false,
    "note": "ふ化した子が巣から出てくる割合0.82±0.22",
    "surviveText": [
     "みんなで砂をかいて外に出た。",
     "夜の砂浜に顔を出した。"
    ],
    "dieText": [
     "砂の中から出られなかった。",
     "力が足りず外に出られなかった。"
    ]
   },
   {
    "label": "海での最初の1年",
    "years": 1,
    "survival": 0.25,
    "src": [
     "jones2012"
    ],
    "estimated": false,
    "note": "1年目の生存率25%(Spotila et al. 1996の仮定値を使用)",
    "surviveText": [
     "波をこえて沖へ泳ぎだした。",
     "小さなクラゲを見つけて食べた。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "鳥に見つかってしまった。"
    ]
   },
   {
    "label": "子ども〜若者(1〜16歳)",
    "years": 1,
    "repeat": 15,
    "survival": 0.81,
    "src": [
     "jones2012"
    ],
    "estimated": false,
    "note": "幼体の年生存率0.81(範囲0.74〜0.87)、モデルの推定値。16歳でおとなになるまでの15年分",
    "surviveText": [
     "クラゲを追って遠い海まで旅をした。",
     "体がぐんと大きくなった。"
    ],
    "dieText": [
     "漁の網にからまってしまった。",
     "ビニール袋をクラゲとまちがえて弱ってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 34,
    "survival": 0.8,
    "src": [
     "jones2012",
     "noaa_leatherback"
    ],
    "estimated": false,
    "note": "おとなの年生存率0.80(範囲0.72〜0.84)、モデルの推定値。repeatはNOAAの寿命「50年以上」から16歳を引いた34回。参考: この表で卵から16歳まで生きる割合は約0.4%(約250分の1)",
    "surviveText": [
     "砂浜にもどって卵を産んだ。",
     "クラゲの多い海でたっぷり食べた。"
    ],
    "dieText": [
     "年をとって静かに力つきた。",
     "漁の網にからまってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "santidrian2012",
    "title": "Climate Driven Egg and Hatchling Mortality Threatens Survival of Eastern Pacific Leatherback Turtles (Santidrián Tomillo et al. 2012, PLoS ONE)",
    "publisher": "PLoS ONE",
    "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0037602",
    "values": "プラヤグランデのふ化率0.47±0.25/巣から出てくる割合0.82±0.22(2004/05〜2009/10年)",
    "accessed": "2026-11-20"
   },
   {
    "id": "jones2012",
    "title": "Resource Requirements of the Pacific Leatherback Turtle Population (Jones et al. 2012, PLoS ONE)",
    "publisher": "PLoS ONE",
    "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0045447",
    "values": "1年目の生存率25%/幼体の年生存率0.81(0.74〜0.87)/おとなの年生存率0.80(0.72〜0.84)/16歳でおとな",
    "accessed": "2026-11-20"
   },
   {
    "id": "noaa_leatherback",
    "title": "Leatherback Turtle",
    "publisher": "NOAA Fisheries",
    "url": "https://www.fisheries.noaa.gov/species/leatherback-turtle",
    "values": "1回に約100個の卵/約2か月で子ガメが出てくる/寿命は50年以上と推定/太平洋の個体群の欄では85〜95個の卵",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "loggerhead_turtle",
  "name": "アカウミガメ",
  "sci": "Caretta caretta",
  "group": "爬虫類",
  "emoji": "🐢",
  "dataRegion": "北西大西洋(アメリカ南東部の砂浜)",
  "intro": "砂浜で生まれ、広い海を旅して大きくなるウミガメ。",
  "start": "卵",
  "cohort": {
   "size": 100,
   "unit": "個",
   "label": "同じ巣の卵",
   "src": [
    "noaa_loggerhead"
   ]
  },
  "stages": [
   {
    "label": "巣の中(卵から砂の上に出るまで)",
    "years": 0.17,
    "survival": 0.54,
    "src": [
     "arendt2013"
    ],
    "estimated": false,
    "note": "卵からふ化して砂の上に出てくる割合(hatchling emergence)54%。期間はNOAAの「約2か月」",
    "surviveText": [
     "砂の中で卵がかえった。",
     "きょうだいと一緒に砂の上へ出た。"
    ],
    "dieText": [
     "卵がかえらなかった。",
     "巣が大波をかぶってしまった。"
    ]
   },
   {
    "label": "砂浜から海へ",
    "years": 0.01,
    "survival": 0.7,
    "src": [
     "arendt2013"
    ],
    "estimated": false,
    "note": "ふ化直後に海へ向かう間の生存率(hatchling frenzy)70%。論文著者の推定値",
    "surviveText": [
     "夜の砂浜を走って海にたどりついた。",
     "波に乗って沖へ泳ぎだした。"
    ],
    "dieText": [
     "カニに見つかってしまった。",
     "明かりにまよって海に着けなかった。"
    ]
   },
   {
    "label": "海での最初の1年",
    "years": 1,
    "survival": 0.4,
    "src": [
     "arendt2013"
    ],
    "estimated": false,
    "note": "0歳の海での生存率40%(Conant et al. 2009の値を引用)",
    "surviveText": [
     "流れ藻の中にかくれて育った。",
     "小さなエビを食べて大きくなった。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "嵐の海で力つきた。"
    ]
   },
   {
    "label": "子ガメ(1〜10歳)",
    "years": 1,
    "repeat": 10,
    "survival": 0.794,
    "src": [
     "arendt2013"
    ],
    "estimated": false,
    "note": "1〜10歳の年生存率79.4%。repeat=10年",
    "surviveText": [
     "大海原をわたって旅を続けた。",
     "こうらが少しかたくなった。"
    ],
    "dieText": [
     "サメに見つかってしまった。",
     "漁の網にからまってしまった。"
    ]
   },
   {
    "label": "若いカメ(11〜29歳)",
    "years": 1,
    "repeat": 19,
    "survival": 0.893,
    "src": [
     "arendt2013"
    ],
    "estimated": false,
    "note": "11〜29歳の年生存率89.3%。repeat=19年",
    "surviveText": [
     "浅い海に移り、貝をたくさん食べた。",
     "また1年、海で元気にすごした。"
    ],
    "dieText": [
     "漁の網にからまってしまった。",
     "大きなサメに出会ってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 50,
    "survival": 0.95,
    "src": [
     "arendt2013",
     "noaa_loggerhead"
    ],
    "estimated": false,
    "note": "31年目以降の年生存率95%。repeatはNOAAの寿命「80年以上」から30歳を引いた50回。",
    "surviveText": [
     "生まれた砂浜にもどって卵を産んだ。",
     "また1年、海を旅した。"
    ],
    "dieText": [
     "年をとって静かに力つきた。",
     "船とぶつかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "arendt2013",
    "title": "Historical versus Contemporary Climate Forcing on the Annual Nesting Variability of Loggerhead Sea Turtles in the Northwest Atlantic Ocean (Arendt et al. 2013, PLoS ONE)",
    "publisher": "PLoS ONE / PMC",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3855202",
    "values": "ふ化して巣から出る割合54%/海へたどりつく割合70%/0歳の生存率40%/1〜10歳の年生存率79.4%/11〜29歳の年生存率89.3%/31年目以降の年生存率95%",
    "accessed": "2026-11-20"
   },
   {
    "id": "noaa_loggerhead",
    "title": "Loggerhead Turtle",
    "publisher": "NOAA Fisheries",
    "url": "https://www.fisheries.noaa.gov/species/loggerhead-turtle",
    "values": "1つの巣に約100個の卵/約2か月で卵がかえる/メスは約35歳でおとな/80年以上生きることがある",
    "accessed": "2026-11-20"
   },
   {
    "id": "noaa_os_turtles",
    "title": "Sea turtles (Ocean Service news, June 2015)",
    "publisher": "NOAA Ocean Service",
    "url": "https://oceanservice.noaa.gov/news/june15/sea-turtles.html",
    "values": "おとなまで生きるのは1,000分の1〜10,000分の1(参考値、ゲームの計算には未使用)",
    "accessed": "2026-11-20"
   }
  ],
  "caveats": [
   "この表で計算すると、卵からおとな(約30〜35歳)まで生きるのは約570〜740分の1(30歳まで約1/570、35歳まで約1/737)で、NOAA海洋局の「1,000〜10,000分の1」より少し多い。",
   "ずれる理由: NOAA海洋局の値はウミガメ全般についての大まかな幅で、種や調査地を限らない。ゲームの値は北西大西洋のアカウミガメの評価(Conant et al. 2009)を引いた Arendt et al. 2013 のもので、砂浜から海へたどりつく割合70%は論文著者の推定値。どちらも実在の資料の値なので、作り変えずにそのまま使っている。"
  ]
 },
 {
  "id": "common_frog",
  "name": "ヨーロッパアカガエル",
  "sci": "Rana temporaria",
  "group": "両生類",
  "emoji": "🐸",
  "dataRegion": "ヨーロッパ(既存研究の値をまとめたもの)",
  "intro": "ヨーロッパの池や林にすむ、茶色いカエル。",
  "start": "卵",
  "cohort": {
   "size": 650,
   "unit": "個",
   "label": "1匹のお母さんが産む卵",
   "src": [
    "biek2002"
   ]
  },
  "stages": [
   {
    "label": "卵",
    "years": 0.058,
    "survival": 0.92,
    "src": [
     "biek2002",
     "froglife_common_frog"
    ],
    "estimated": false,
    "note": "胚(卵)の生存率0.92。期間はふ化まで2〜4週間の中央値(3週間)",
    "surviveText": [
     "オタマジャクシがふ化した。",
     "あたたかい日がつづき、無事に育った。"
    ],
    "dieText": [
     "霜で卵がこおってしまった。",
     "池の水がへってしまった。"
    ]
   },
   {
    "label": "オタマジャクシ",
    "years": 0.268,
    "survival": 0.06,
    "src": [
     "biek2002",
     "wildlifetrusts_common_frog"
    ],
    "estimated": false,
    "note": "幼生(オタマジャクシ)の生存率0.06。期間はふ化から子ガエルになるまで約14週間",
    "surviveText": [
     "足が生えて、小さなカエルになった。",
     "水草のかげにかくれて、たすかった。"
    ],
    "dieText": [
     "ヤゴに見つかってしまった。",
     "魚に食べられてしまった。",
     "池が干上がってしまった。"
    ]
   },
   {
    "label": "子ガエル(はじめての冬まで)",
    "years": 0.674,
    "survival": 0.34,
    "src": [
     "biek2002"
    ],
    "estimated": true,
    "note": "変態直後の子ガエルの生存率0.34。論文では卵・オタマジャクシ・子ガエルの3段階で最初の1年になるため、期間は1年から前の2段階(0.058+0.268)を引いた残り",
    "surviveText": [
     "はじめての冬をこえた。",
     "草むらで小さな虫を食べて育った。"
    ],
    "dieText": [
     "鳥に見つかってしまった。",
     "暑い日にかわいてしまった。"
    ]
   },
   {
    "label": "わかもの",
    "years": 1,
    "repeat": 2,
    "survival": 0.33,
    "src": [
     "biek2002"
    ],
    "estimated": false,
    "note": "幼体(おとな前)の年生存率0.33。おとなになるのは3年目なので2回くりかえす",
    "surviveText": [
     "また1年、元気にすごした。",
     "林の中で冬ごもりをした。"
    ],
    "dieText": [
     "ヘビに見つかってしまった。",
     "寒い冬をこえられなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 11,
    "survival": 0.43,
    "src": [
     "biek2002",
     "anage_rana_temporaria",
     "miaud1999_rana"
    ],
    "estimated": false,
    "note": "おとなの年生存率0.43(ヨーロッパの文献値。フランスの高山の集団では約0.80という報告もある)。repeatは野生での最高年齢14年から3年を引いた回数",
    "surviveText": [
     "春の池で卵を産んだ。",
     "また春をむかえた。"
    ],
    "dieText": [
     "サギに見つかってしまった。",
     "冬ごもり中に力つきてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "biek2002",
    "title": "What Is Missing in Amphibian Decline Research: Insights from Ecological Sensitivity Analysis (Biek, Funk, Maxell & Mills 2002, Conservation Biology 16(3): 728-734) Table 1",
    "publisher": "University of Montana (Mills Lab)",
    "url": "https://www.umt.edu/research/millslab/files/2015/01/biekwhat.pdf",
    "values": "ヨーロッパアカガエル:胚0.92/幼生0.06/変態直後0.34/幼体の年生存率0.33/おとなの年生存率0.43/一腹卵数650/成熟3年。胚・幼生・変態直後の3つで最初の1年(いくつかは近い仲間の値を代用)",
    "accessed": "2026-11-20"
   },
   {
    "id": "froglife_common_frog",
    "title": "Common Frog (Rana temporaria)",
    "publisher": "Froglife",
    "url": "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog-2/",
    "values": "産卵から2〜4週間でオタマジャクシがふ化/成熟は2〜3歳",
    "accessed": "2026-11-20"
   },
   {
    "id": "wildlifetrusts_common_frog",
    "title": "Common frog",
    "publisher": "The Wildlife Trusts",
    "url": "https://www.wildlifetrusts.org/wildlife-explorer/amphibians/common-frog",
    "values": "ふ化後、子ガエルになるまで約14週間/平均寿命5〜10年",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_rana_temporaria",
    "title": "AnAge entry for Rana temporaria",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Rana_temporaria",
    "values": "野生では最高14年生きることがある(飼育下の最高27年)",
    "accessed": "2026-11-20"
   },
   {
    "id": "miaud1999_rana",
    "title": "Variations in life-history traits in the common frog Rana temporaria (Miaud, Guyétant & Elmberg 1999, Journal of Zoology 249: 61-73) 要旨",
    "publisher": "Cambridge University Press",
    "url": "https://www.cambridge.org/core/journals/journal-of-zoology/article/abs/variations-in-life-history-traits-in-the-common-frog-rana-temporaria-amphibia-anura-a-literature-review-and-new-data-from-the-french-alps/7B9C432E181FDEEBA2D34AE4C5D1491A",
    "values": "フランス・アルプスの集団でおとなの生存率は雌雄とも約0.80(noteでの比較用)",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "great_crested_newt",
  "name": "クシイモリ",
  "sci": "Triturus cristatus",
  "group": "両生類",
  "emoji": "🦎",
  "dataRegion": "ヨーロッパ(スウェーデンの研究がまとめた文献値)",
  "intro": "せなかにギザギザのとさかがある、ヨーロッパの大きなイモリ。",
  "start": "卵",
  "cohort": {
   "size": 204,
   "unit": "個",
   "label": "1匹のお母さんが産む卵",
   "src": [
    "karlsson2007_gcn"
   ]
  },
  "stages": [
   {
    "label": "卵",
    "years": 0.044,
    "survival": 0.5,
    "src": [
     "karlsson2007_gcn",
     "anage_triturus_cristatus"
    ],
    "estimated": true,
    "note": "卵の約50%が生まれつきの染色体のしくみでふ化前に死ぬ → 生存率=1−0.50=0.50。期間はふ化まで16日",
    "surviveText": [
     "小さな幼生がふ化した。",
     "水草の葉にくるまれて、無事に育った。"
    ],
    "dieText": [
     "卵がうまく育たなかった。",
     "卵のまま、ふ化できなかった。"
    ]
   },
   {
    "label": "幼生(水の中の子ども)",
    "years": 0.247,
    "survival": 0.05,
    "src": [
     "karlsson2007_gcn",
     "anage_triturus_cristatus"
    ],
    "estimated": true,
    "note": "卵・幼生の死亡率は約95%とされる → 生存率=1−0.95=0.05(上の50%とは別に計算されている)。期間は変態まで90日",
    "surviveText": [
     "えらがなくなり、陸に上がった。",
     "水草のかげにかくれて、たすかった。"
    ],
    "dieText": [
     "魚に食べられてしまった。",
     "ヤゴに見つかってしまった。",
     "池が干上がってしまった。"
    ]
   },
   {
    "label": "わかもの",
    "years": 1,
    "repeat": 3,
    "survival": 0.55,
    "src": [
     "karlsson2007_gcn"
    ],
    "estimated": false,
    "note": "幼体の年生存率は0.22・0.59・0.85の3つの研究の平均0.55。成熟は平均3歳なので3回くりかえす(論文でも変態から次の春までにこの年生存率を使用)",
    "surviveText": [
     "石の下で冬をこした。",
     "また1年、元気にすごした。"
    ],
    "dieText": [
     "寒い冬をこえられなかった。",
     "鳥に見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 13,
    "survival": 0.66,
    "src": [
     "karlsson2007_gcn",
     "anage_triturus_cristatus"
    ],
    "estimated": false,
    "note": "おとなの年生存率は研究により0.49〜0.78、平均0.66。repeatは野生での最高16年から3年を引いた回数",
    "surviveText": [
     "春の池で卵を産んだ。",
     "また春をむかえた。"
    ],
    "dieText": [
     "サギに見つかってしまった。",
     "冬ごもり中に力つきてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "karlsson2007_gcn",
    "title": "Estimating viability and sensitivity of the great crested newt Triturus cristatus at a regional scale (Karlsson, Betzholtz & Malmgren 2007, Web Ecology 7: 63-76)",
    "publisher": "Copernicus Publications / European Ecological Federation",
    "url": "https://we.copernicus.org/articles/7/63/2007/we-7-63-2007.pdf",
    "values": "おとなの年生存率0.49〜0.78(平均0.66)/幼体の年生存率0.22・0.59・0.85(平均0.55)/成熟2〜5歳(平均3歳)/一腹卵数189〜220(平均204)/卵の約50%が染色体の異常でふ化前に死ぬ/卵・幼生の死亡率約95%",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_triturus_cristatus",
    "title": "AnAge entry for Triturus cristatus",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Triturus_cristatus",
    "values": "ふ化まで16日/変態まで90日/野生では最高16年(飼育下28年)/一腹卵数225",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "northern_red_legged_frog",
  "name": "アカアシガエル",
  "sci": "Rana aurora",
  "group": "両生類",
  "emoji": "🐸",
  "dataRegion": "北アメリカ西部(既存研究の値をまとめたもの/期間はカナダ・ブリティッシュコロンビア州)",
  "intro": "うしろ足の内側が赤い、北アメリカ西部のカエル。",
  "start": "卵",
  "cohort": {
   "size": 605,
   "unit": "個",
   "label": "1回に産まれる卵",
   "src": [
    "bc_cdc_red_legged_frog"
   ]
  },
  "stages": [
   {
    "label": "卵",
    "years": 0.104,
    "survival": 0.92,
    "src": [
     "biek2002",
     "bc_cdc_red_legged_frog"
    ],
    "estimated": false,
    "note": "胚(卵)の生存率0.92。期間はふ化まで1〜1.5か月の中央値(1.25か月)",
    "surviveText": [
     "オタマジャクシがふ化した。",
     "冷たい水の中で、ゆっくり育った。"
    ],
    "dieText": [
     "卵にカビが生えてしまった。",
     "池の水がへってしまった。"
    ]
   },
   {
    "label": "オタマジャクシ",
    "years": 0.25,
    "survival": 0.03,
    "src": [
     "biek2002",
     "bc_cdc_red_legged_frog"
    ],
    "estimated": false,
    "note": "幼生の生存率0.03。期間は2.5〜3.5か月の中央値(3か月)",
    "surviveText": [
     "足が生えて、小さなカエルになった。",
     "水草のかげにかくれて、たすかった。"
    ],
    "dieText": [
     "大きな魚に食べられてしまった。",
     "ヤゴに見つかってしまった。",
     "池が干上がってしまった。"
    ]
   },
   {
    "label": "子ガエル(はじめての冬まで)",
    "years": 0.646,
    "survival": 0.55,
    "src": [
     "biek2002"
    ],
    "estimated": true,
    "note": "変態直後の生存率0.55。論文では卵・オタマジャクシ・子ガエルで最初の1年のため、期間は1年から前の2段階(0.104+0.25)を引いた残り",
    "surviveText": [
     "はじめての冬をこえた。",
     "しめった森の中で虫を食べて育った。"
    ],
    "dieText": [
     "鳥に見つかってしまった。",
     "ヘビに見つかってしまった。"
    ]
   },
   {
    "label": "わかもの",
    "years": 1,
    "repeat": 2,
    "survival": 0.36,
    "src": [
     "biek2002",
     "bc_cdc_red_legged_frog"
    ],
    "estimated": false,
    "note": "幼体の年生存率0.36。おとなになるのは3年目なので2回くりかえす",
    "surviveText": [
     "また1年、元気にすごした。",
     "森の落ち葉の下で冬をこした。"
    ],
    "dieText": [
     "アライグマに見つかってしまった。",
     "寒い冬をこえられなかった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 12,
    "survival": 0.69,
    "src": [
     "biek2002",
     "anage_rana_aurora"
    ],
    "estimated": false,
    "note": "おとなの年生存率0.69。repeatは最高年齢15年から3年を引いた回数",
    "surviveText": [
     "冬の終わりの池で卵を産んだ。",
     "また春をむかえた。"
    ],
    "dieText": [
     "サギに見つかってしまった。",
     "道をわたるとちゅうで力つきた。"
    ]
   }
  ],
  "sources": [
   {
    "id": "biek2002",
    "title": "What Is Missing in Amphibian Decline Research: Insights from Ecological Sensitivity Analysis (Biek, Funk, Maxell & Mills 2002, Conservation Biology 16(3): 728-734) Table 1",
    "publisher": "University of Montana (Mills Lab)",
    "url": "https://www.umt.edu/research/millslab/files/2015/01/biekwhat.pdf",
    "values": "アカアシガエル:胚0.92/幼生0.03/変態直後0.55/幼体の年生存率0.36/おとなの年生存率0.69/一腹卵数303(モデル用のメス)/成熟3年。胚・幼生・変態直後の3つで最初の1年(いくつかは近い仲間の値を代用)",
    "accessed": "2026-11-20"
   },
   {
    "id": "bc_cdc_red_legged_frog",
    "title": "Species Summary: Rana aurora (Northern Red-legged Frog)",
    "publisher": "British Columbia Conservation Data Centre (カナダ・BC州政府)",
    "url": "https://a100.gov.bc.ca/pub/eswp/speciesSummary.do?id=19586",
    "values": "卵は水温によって1〜1.5か月でふ化/幼生期間2.5〜3.5か月/1回の産卵数は平均530〜680個/3歳以上で成熟/飼育下で15年生きた例",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_rana_aurora",
    "title": "AnAge entry for Rana aurora",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Rana_aurora",
    "values": "最高寿命15年(野生)/カリフォルニアではおそらく10年前後",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "western_toad",
  "name": "セイブヒキガエル",
  "sci": "Anaxyrus boreas",
  "group": "両生類",
  "emoji": "🐸",
  "dataRegion": "北アメリカ西部(既存研究の値をまとめたもの/期間はアメリカ・モンタナ州など)",
  "intro": "北アメリカ西部の山や草原にすむ、いぼいぼのヒキガエル。",
  "start": "卵",
  "cohort": {
   "size": 3532,
   "unit": "個",
   "label": "1回に産まれる卵",
   "src": [
    "biek2002"
   ]
  },
  "stages": [
   {
    "label": "卵",
    "years": 0.014,
    "survival": 0.78,
    "src": [
     "biek2002",
     "mt_fieldguide_western_toad"
    ],
    "estimated": false,
    "note": "胚(卵)の生存率0.78。期間はモンタナ州でのふ化までの日数(約5日)",
    "surviveText": [
     "小さなオタマジャクシがふ化した。",
     "ひもみたいな卵の中で無事に育った。"
    ],
    "dieText": [
     "卵にカビが生えてしまった。",
     "水がへって卵がかわいてしまった。"
    ]
   },
   {
    "label": "オタマジャクシ",
    "years": 0.158,
    "survival": 0.47,
    "src": [
     "biek2002",
     "mt_fieldguide_western_toad"
    ],
    "estimated": false,
    "note": "幼生の生存率0.47。期間はふ化から変態まで40〜75日の中央値(約58日)",
    "surviveText": [
     "足が生えて、小さなヒキガエルになった。",
     "仲間といっしょに浅瀬で育った。"
    ],
    "dieText": [
     "ヤゴに見つかってしまった。",
     "水たまりが干上がってしまった。"
    ]
   },
   {
    "label": "子ガエル(はじめての冬まで)",
    "years": 0.828,
    "survival": 0.08,
    "src": [
     "biek2002"
    ],
    "estimated": true,
    "note": "変態直後の生存率0.08。論文では卵・オタマジャクシ・子ガエルで最初の1年のため、期間は1年から前の2段階(0.014+0.158)を引いた残り",
    "surviveText": [
     "土にもぐって、はじめての冬をこえた。",
     "草むらで小さな虫を食べて育った。"
    ],
    "dieText": [
     "暑い日にかわいてしまった。",
     "鳥に見つかってしまった。",
     "ヘビに見つかってしまった。"
    ]
   },
   {
    "label": "わかもの",
    "years": 1,
    "repeat": 4,
    "survival": 0.26,
    "src": [
     "biek2002",
     "mt_fieldguide_western_toad"
    ],
    "estimated": false,
    "note": "幼体の年生存率0.26。成熟は4〜7歳(モンタナではオス4歳・メス6歳)の幅から5歳とし、4回くりかえす",
    "surviveText": [
     "また1年、元気にすごした。",
     "土の中で冬ごもりをした。"
    ],
    "dieText": [
     "寒い冬をこえられなかった。",
     "タカに見つかってしまった。"
    ]
   },
   {
    "label": "おとな",
    "years": 1,
    "repeat": 6,
    "survival": 0.78,
    "src": [
     "biek2002",
     "anage_anaxyrus_boreas"
    ],
    "estimated": false,
    "note": "おとなの年生存率0.78。repeatはAnAgeの最高寿命11.5年(飼育下)を11年とし、成熟の5年を引いた回数",
    "surviveText": [
     "春の池で卵を産んだ。",
     "また春をむかえた。"
    ],
    "dieText": [
     "病気になってしまった。",
     "冬ごもり中に力つきてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "biek2002",
    "title": "What Is Missing in Amphibian Decline Research: Insights from Ecological Sensitivity Analysis (Biek, Funk, Maxell & Mills 2002, Conservation Biology 16(3): 728-734) Table 1",
    "publisher": "University of Montana (Mills Lab)",
    "url": "https://www.umt.edu/research/millslab/files/2015/01/biekwhat.pdf",
    "values": "セイブヒキガエル:胚0.78/幼生0.47/変態直後0.08/幼体の年生存率0.26/おとなの年生存率0.78/一腹卵数3532/成熟4〜7年。胚・幼生・変態直後の3つで最初の1年(いくつかは近い仲間の値を代用)",
    "accessed": "2026-11-20"
   },
   {
    "id": "mt_fieldguide_western_toad",
    "title": "Montana Field Guide: Western Toad (Anaxyrus boreas)",
    "publisher": "Montana Natural Heritage Program / Montana Fish, Wildlife & Parks",
    "url": "https://fieldguide.mt.gov/speciesDetail.aspx?elcode=AAABB01030",
    "values": "卵は3〜12日でふ化(モンタナでは約5日)/オタマジャクシは40〜75日で一斉に変態/繁殖するオスは最低4歳、メスは6歳/1回の卵は1,000〜18,000個以上",
    "accessed": "2026-11-20"
   },
   {
    "id": "anage_anaxyrus_boreas",
    "title": "AnAge entry for Anaxyrus boreas",
    "publisher": "Human Ageing Genomic Resources (AnAge)",
    "url": "https://genomics.senescence.info/species/entry.php?species=Anaxyrus_boreas",
    "values": "最高寿命11.5年(飼育下)/成熟1,095日",
    "accessed": "2026-11-20"
   }
  ],
  "maxAgeBasis": "飼育下の記録"
 },
 {
  "id": "cabbage_white",
  "name": "モンシロチョウ",
  "sci": "Pieris rapae crucivora",
  "group": "昆虫",
  "emoji": "🦋",
  "dataRegion": "日本・北海道札幌市(北海道大学構内、1974年の夏の世代)",
  "intro": "キャベツ畑や野原をひらひら飛ぶ、白いチョウ。",
  "start": "卵",
  "cohort": {
   "size": 700,
   "unit": "個",
   "label": "1匹のお母さんが産む卵",
   "src": [
    "yamamoto1981_pieris"
   ]
  },
  "stages": [
   {
    "label": "卵",
    "years": 0.0135,
    "survival": 0.458,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "生命表(第2世代):卵891個のうち54.2%が死亡 → 生存率=1−0.542=0.458。期間は野外での卵期間4.92日",
    "surviveText": [
     "小さな青虫が、からを食べて出てきた。",
     "葉のうらで、見つからずにすんだ。"
    ],
    "dieText": [
     "小さな虫に食べられてしまった。",
     "大雨で流されてしまった。"
    ]
   },
   {
    "label": "幼虫(青虫)",
    "years": 0.0417,
    "survival": 0.0588,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "生命表(第2世代):1齢幼虫408匹のうち、さなぎになれたのは24匹 → 24÷408=0.0588。期間は1〜5齢の合計15.2日(20.14−4.92日)。5齢での寄生バチによる死亡が大きい",
    "surviveText": [
     "キャベツの葉をもりもり食べて大きくなった。",
     "4回の脱皮をおえて、さなぎになる場所を見つけた。"
    ],
    "dieText": [
     "ハチにねらわれてしまった。",
     "鳥に見つかってしまった。",
     "雨と寒さで力つきてしまった。"
    ]
   },
   {
    "label": "さなぎ",
    "years": 0.031,
    "survival": 0.0833,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "生命表(第2世代):さなぎ24個のうち成虫になれたのは2匹(死亡率91.7%) → 2÷24=0.0833。期間は11.33日",
    "surviveText": [
     "羽化して、白いチョウになった。",
     "かべのすみで、じっと見つからずにすんだ。"
    ],
    "dieText": [
     "さなぎのまま、羽化できなかった。",
     "鳥に見つかってしまった。"
    ]
   },
   {
    "label": "成虫(卵を産むまで)",
    "years": 0.022,
    "survival": 0.909,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "同じ論文の第2世代メスの日ごとの生存数表(Table 22)で、羽化ごろ(32日目)の2.2から40日目の2.0へ → 2.0÷2.2=0.909。この約8日間が産卵の多い時期",
    "surviveText": [
     "花のみつをすって、たくさんの卵を産み、一生を終えた。",
     "仲間と出会い、キャベツの葉に卵を産んで一生を終えた。"
    ],
    "dieText": [
     "卵を産む前に、クモの巣にかかってしまった。",
     "鳥に見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "yamamoto1981_pieris",
    "title": "Comparison of Population Dynamics of Two Pierid Butterflies, Pieris rapae crucivora and P. napi nesis, Living in the Same Area and Feeding on the Same Plant in Sapporo, Northern Japan (山本道也, 北海道大學理學部紀要 22(3): 202-249, 1981)",
    "publisher": "北海道大学 (HUSCAP)",
    "url": "https://eprints.lib.hokudai.ac.jp/repo/huscap/all/27663/22(3)_P202-249.pdf",
    "values": "モンシロチョウ第2世代の生命表:卵891→1齢408(死亡率54.2%)→…→さなぎ24→成虫2(さなぎ死亡率91.7%)、総生存率0.22%(第1世代1.07%・第3世代1.13%)/野外の発育日数:卵4.92日・幼虫期の終わりまで20.14日・さなぎ11.33日/1匹の産卵数600〜800個/第2世代メスの日ごと生存数(1000匹あたり):32日目2.2、40日目2.0",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "green_veined_white",
  "name": "エゾスジグロシロチョウ",
  "sci": "Pieris napi nesis",
  "group": "昆虫",
  "emoji": "🦋",
  "dataRegion": "日本・北海道札幌市(北海道大学構内、1974年の第1世代)",
  "intro": "はねにうすい黒いすじがある、北国の白いチョウ。",
  "start": "卵",
  "cohort": {
   "size": 300,
   "unit": "個",
   "label": "1匹のお母さんが産む卵",
   "src": [
    "yamamoto1981_pieris"
   ]
  },
  "stages": [
   {
    "label": "卵",
    "years": 0.022,
    "survival": 0.734,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "生命表(第1世代):卵64個のうち死亡率26.6% → 47÷64=0.734。期間は野外での卵期間7.95日",
    "surviveText": [
     "小さな青虫が生まれた。",
     "草のかげで、見つからずにすんだ。"
    ],
    "dieText": [
     "小さな虫に食べられてしまった。",
     "雨に流されてしまった。"
    ]
   },
   {
    "label": "幼虫(青虫)",
    "years": 0.069,
    "survival": 0.298,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "生命表(第1世代):1齢幼虫47匹のうち、さなぎになれたのは14匹 → 14÷47=0.298。期間は1〜5齢+前蛹の合計約25.3日(31.99−7.95+1.27日)",
    "surviveText": [
     "葉をたくさん食べて大きくなった。",
     "脱皮をくりかえして、さなぎになる場所を見つけた。"
    ],
    "dieText": [
     "ハチにねらわれてしまった。",
     "鳥に見つかってしまった。",
     "寒い日に力つきてしまった。"
    ]
   },
   {
    "label": "さなぎ",
    "years": 0.034,
    "survival": 0.643,
    "src": [
     "yamamoto1981_pieris"
    ],
    "estimated": true,
    "note": "生命表(第1世代):さなぎ14個のうち成虫になれたのは9匹(死亡率35.7%) → 9÷14=0.643。期間は12.56日。成虫になって飛び立つところでゲーム終了(成虫の生存データは無し)",
    "surviveText": [
     "羽化して、白いチョウになって飛び立った。",
     "草のしげみで、見つからずにすんだ。"
    ],
    "dieText": [
     "さなぎのまま、羽化できなかった。",
     "鳥に見つかってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "yamamoto1981_pieris",
    "title": "Comparison of Population Dynamics of Two Pierid Butterflies, Pieris rapae crucivora and P. napi nesis, Living in the Same Area and Feeding on the Same Plant in Sapporo, Northern Japan (山本道也, 北海道大學理學部紀要 22(3): 202-249, 1981)",
    "publisher": "北海道大学 (HUSCAP)",
    "url": "https://eprints.lib.hokudai.ac.jp/repo/huscap/all/27663/22(3)_P202-249.pdf",
    "values": "エゾスジグロシロチョウ第1世代の生命表:卵64→1齢47(死亡率26.6%)→5齢31→さなぎ14(5齢死亡率54.8%)→成虫9(さなぎ死亡率35.7%)、総生存率14.06%/野外の発育日数:卵7.95日・幼虫期の終わりまで31.99日・前蛹1.27日・さなぎ12.56日/1匹の産卵数200〜400個",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "honeybee_worker",
  "name": "ミツバチ(はたらきばち)",
  "sci": "Apis mellifera",
  "group": "昆虫",
  "emoji": "🐝",
  "dataRegion": "フランス(シゼとアヴィニョンの野外の巣箱)",
  "intro": "巣の仲間と力を合わせてくらす、はたらきもののハチ。",
  "start": "羽化した日(成虫になった日)",
  "stages": [
   {
    "label": "巣の中ではたらく時期(外で花をまわる前まで)",
    "years": 0.058,
    "survival": 0.483,
    "src": [
     "prado2020_honeybee"
    ],
    "estimated": true,
    "note": "外勤(花をまわる仕事)を始める前に死んだ割合は53.6%(A地点)・49.8%(B地点)。その平均51.7%から 生存率=1−0.517=0.483 と計算。要旨の「約40%」は15日齢までに死んだ割合なので使っていない。期間は外勤を始める平均日齢(22.4日と19.6日)の中央の約21日。この後の外勤期間は平均約8日で、そこで一生を終える",
    "surviveText": [
     "外に飛び立ち、花のみつを集めるはたらきばちになった。",
     "巣のそうじや幼虫の世話をやりとげた。",
     "飛ぶ練習をして、巣の場所をおぼえた。"
    ],
    "dieText": [
     "飛ぶ練習の日に、巣に帰れなかった。",
     "病気になってしまった。",
     "冷たい雨の日に力つきてしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "prado2020_honeybee",
    "title": "Honeybee lifespan: the critical role of pre-foraging stage (Prado et al. 2020, Royal Society Open Science 7: 200998)",
    "publisher": "The Royal Society (PMC7735337)",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7735337/",
    "values": "外勤を始める前に死ぬ割合 53.6%(A地点)・49.8%(B地点)(15日齢までに死ぬ割合は約40%)/外勤開始の平均日齢 22.4±10.6日(A地点)・19.6±5.7日(B地点)/平均寿命 21.2日・18.9日/外勤期間 8.7日・7.4日(約8日)/3,374匹を解析",
    "accessed": "2026-11-20"
   }
  ]
 },
 {
  "id": "monarch_butterfly",
  "name": "オオカバマダラ",
  "sci": "Danaus plexippus",
  "group": "昆虫",
  "emoji": "🦋",
  "dataRegion": "北アメリカ(卵〜さなぎ前:アメリカ・アイオワ州とカナダ・オンタリオ州/さなぎ:アメリカ・カリフォルニア州)",
  "intro": "トウワタの葉で育ち、北アメリカを大移動するチョウ。",
  "start": "卵",
  "cohort": {
   "size": 200,
   "unit": "個",
   "label": "1匹のお母さんが産む卵",
   "src": [
    "monarchwatch_cycle"
   ]
  },
  "stages": [
   {
    "label": "卵〜幼虫(さなぎになるまで)",
    "years": 0.042,
    "survival": 0.014,
    "src": [
     "grant2020_monarch",
     "monarchwatch_cycle"
    ],
    "estimated": false,
    "note": "18か所の野外調査による、産卵からさなぎになるまでの平均生存率0.014(95%信頼区間0.004〜0.024)。期間は卵3〜4日+幼虫10〜14日の中央値(約15.5日)",
    "surviveText": [
     "トウワタの葉をたくさん食べて大きくなった。",
     "クモやアリに見つからずにすんだ。",
     "5回目の脱皮をおえ、さなぎになる場所を見つけた。"
    ],
    "dieText": [
     "小さな虫に食べられてしまった。",
     "葉っぱから落ちてしまった。",
     "暑い日に力つきてしまった。"
    ]
   },
   {
    "label": "さなぎ",
    "years": 0.033,
    "survival": 0.394,
    "src": [
     "smith1986_monarch_pupae",
     "monarchwatch_cycle"
    ],
    "estimated": false,
    "note": "カリフォルニア州の道ばたで印をつけたさなぎ392個のうち39.4%が羽化。期間は10〜14日の中央値(12日)。さなぎを終えると成虫になって飛び立つところでゲーム終了",
    "surviveText": [
     "羽化して、オレンジ色のチョウになって飛び立った。",
     "じっと動かずに、見つからずにすんだ。"
    ],
    "dieText": [
     "さなぎのまま、羽化できなかった。",
     "鳥に見つかってしまった。",
     "さなぎが草ごとなくなってしまった。"
    ]
   }
  ],
  "sources": [
   {
    "id": "grant2020_monarch",
    "title": "Estimating arthropod survival probability from field counts: a case study with monarch butterflies (Grant et al. 2020, Ecosphere 11(4): e03082)",
    "publisher": "Ecological Society of America / Wiley",
    "url": "https://doi.org/10.1002/ecs2.3082",
    "values": "【要旨で確認】卵からさなぎになるまでの平均生存率0.014(95%CI 0.004〜0.024)/地点ごとの範囲0.002〜0.058/調査地:アイオワ州・オンタリオ州の18地点(要旨をCrossref経由で確認)",
    "accessed": "2026-11-20"
   },
   {
    "id": "smith1986_monarch_pupae",
    "title": "Placement and fate of monarch butterfly pupae in northern California (Journal of the Lepidopterists' Society 40(1): 67, 1986)",
    "publisher": "The Lepidopterists' Society",
    "url": "https://images.peabody.yale.edu/lepsoc/jls/1980s/1986/1986-40(1)67-Smith.pdf",
    "values": "さなぎ392個のうち羽化39.4%・死亡35.1%・行方不明25.5%(カリフォルニア州デービス近郊、1966年)",
    "accessed": "2026-11-20"
   },
   {
    "id": "monarchwatch_cycle",
    "title": "Monarch Life Cycle",
    "publisher": "Monarch Watch (University of Kansas)",
    "url": "https://monarchwatch.org/biology/cycle1.htm",
    "values": "卵3〜4日/幼虫10〜14日/さなぎ10〜14日/夏の世代の成虫は2〜5週間生きる/渡りの世代は8〜9か月/1匹が産む卵は平均でおそらく100〜300個",
    "accessed": "2026-11-20"
   }
  ]
 }
];
