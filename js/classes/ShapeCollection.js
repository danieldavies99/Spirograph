let CreateShapeCollection = function() {
  return {
    circleOne: {
      points: [[0, 0], [-1.3308601682648629, 15.211801330929191], [-5.28300316029447, 29.96139977596097], [-11.73634511115685, 43.800636250000025], [-20.494804491223647, 56.30901255577419], [-31.29225994422582, 67.10646800877635], [-43.80063624999999, 75.86492738884314], [-57.63987272403902, 82.31826933970552], [-72.3894711690708, 86.27041233173512], [-87.6012725, 87.6012725], [-102.81307383092917, 86.27041233173512], [-117.56267227596095, 82.31826933970552], [-131.40190874999996, 75.86492738884314], [-143.91028505577418, 67.10646800877635], [-154.70774050877634, 56.30901255577422], [-163.46619988884314, 43.800636250000025], [-169.91954183970552, 29.961399775960984], [-173.87168483173514, 15.21180133092922], [-175.202545, 1.4210854715202004e-14], [-173.87168483173514, -15.211801330929148], [-169.91954183970552, -29.96139977596095], [-163.46619988884316, -43.800636249999975], [-154.70774050877634, -56.30901255577416], [-143.91028505577418, -67.10646800877632], [-131.40190875000002, -75.86492738884313], [-117.562672275961, -82.3182693397055], [-102.81307383092917, -86.27041233173512], [-87.60127250000001, -87.6012725], [-72.38947116907084, -86.27041233173513], [-57.63987272403908, -82.31826933970552], [-43.80063624999999, -75.86492738884313], [-31.292259944225833, -67.10646800877635], [-20.49480449122366, -56.30901255577419], [-11.73634511115688, -43.80063625000003], [-5.2830031602944985, -29.96139977596102], [-1.3308601682648629, -15.211801330929177]],
      holes: [[-12.5787725,-0.07502250000000288],[-25.082522499999996,-0.07502250000000288],[-37.58627249999999,-0.07502250000000288],[-50.090022499999996,-0.07502250000000288],[-62.59377249999999,-0.07502250000000288],[-75.0975225,-0.07502250000000288],[-87.6012725,-0.07502250000000288],],
    },
    circleTwo: {
      points: [[0, 0], [-2.660922059911769, 30.414478318362853], [-10.562837469348153, 59.90482810349087], [-23.46565052715556, 87.57500000000002], [-40.97731578771101, 112.58424983659737], [-62.565750163402626, 134.172684212289], [-87.57499999999999, 151.68434947284445], [-115.2451718965091, 164.58716253065185], [-144.73552168163715, 172.4890779400882], [-175.15, 175.15], [-205.56447831836286, 172.4890779400882], [-235.05482810349088, 164.58716253065185], [-262.72499999999997, 151.68434947284445], [-287.73424983659737, 134.172684212289], [-309.322684212289, 112.58424983659742], [-326.83434947284445, 87.57500000000002], [-339.73716253065186, 59.9048281034909], [-347.6390779400882, 30.41447831836291], [-350.3, 2.842170943040401e-14], [-347.63907794008827, -30.414478318362796], [-339.73716253065186, -59.90482810349087], [-326.83434947284445, -87.57499999999996], [-309.322684212289, -112.58424983659735], [-287.7342498365974, -134.17268421228897], [-262.7250000000001, -151.68434947284442], [-235.054828103491, -164.58716253065182], [-205.56447831836286, -172.48907794008824], [-175.15000000000003, -175.15], [-144.7355216816372, -172.48907794008826], [-115.24517189650922, -164.58716253065188], [-87.57499999999999, -151.68434947284442], [-62.565750163402654, -134.17268421228903], [-40.977315787711035, -112.58424983659741], [-23.465650527155617, -87.57500000000007], [-10.56283746934821, -59.90482810349101], [-2.660922059911769, -30.414478318362853],],
      holes: [[-25.150000000000006,-0.15000000000000568],[-50.150000000000006,-0.15000000000000568],[-75.15,-0.15000000000000568],[-100.15,-0.15000000000000568],[-125.15,-0.15000000000000568],[-150.15,-0.15000000000000568],[-175.15,-0.15000000000000568],],
    },
    semiCircleOne: {
      points: [[0,0],[-2.2691262398554386,25.936231603115743],[-9.007558706856997,51.084403933337256],[-20.010553540306205,74.68040249999999],[-34.94379030997273,96.00727482680728],[-53.35353017319268,114.41701469002729],[-74.68040249999999,129.3502514596938],[-98.27640106666273,140.35324629314297],[-123.42457339688426,147.0916787601445],[-149.360805,149.360805],[-175.2970366031157,147.0916787601445],[-200.44520893333726,140.35324629314297],[-224.04120749999998,129.3502514596938],[-245.36807982680733,114.41701469002729],[-263.7778196900273,96.00727482680733],[-278.7110564596938,74.68040249999999],[-289.71405129314303,51.084403933337285],[-296.45248376014456,25.9362316031158],],
      holes: [[-24.8934675,24.893467499999986],[-49.786935,24.893467499999986],[-75.6761412,24.893467499999986], [-100.6761412,24.893467499999986], [-125.6761412,24.893467499999986],],
    },
    semiCircleTwo: {
      points: [[0, 0], [-2.164947609012472, 24.745464403750532], [-8.594009598466329, 48.739050393402266], [-19.091842173074426, 71.251725], [-33.33947400221686, 91.59945199758525], [-50.90399800241471, 109.16397599778315], [-71.25172499999998, 123.41160782692555], [-93.76439960659772, 133.90944040153363], [-117.75798559624945, 140.33850239098751], [-142.50345, 142.50345], [-167.24891440375052, 140.33850239098751], [-191.24250039340225, 133.90944040153363], [-213.75517499999995, 123.41160782692555], [-234.10290199758526, 109.16397599778315], [-251.66742599778308, 91.5994519975853], [-265.91505782692553, 71.251725], [-276.4128904015337, 48.739050393402295], [-282.8419523909875, 24.74546440375059],],
      holes: [[-23.750574999999998,23.750574999999998],[-47.501149999999996,23.750574999999998],[-72.201748,23.750574999999998],[-97.201748,23.750574999999998],[-122.201748,23.750574999999998],]
    }
  }
}