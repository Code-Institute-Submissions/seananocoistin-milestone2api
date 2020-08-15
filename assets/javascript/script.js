let wordArray = [
    {
        word: "ábhacht",
        grammar: "baininscneach - an tríú díchlaonadh",
        definition: "meidhir, caitheamh aimsire, aoibhneas",
        examples: ["Chuirfeadh iarthar Chiarraighe ábhacht ar chroidhe aonne lé n-a bhreághthacht: aoibhneas agus éirighe croidhe", 
        "Ag ábhacht seadh bhí na buachaillidhe nuair goirtigheadh duine aca: ag déanamh seóidh",
        "Bímíd bailighthe sa tigh seo gach oidhche ag ábhacht: ag déanamh cuideachtan, grinn a’s seóidh", 
        "Scéal ró-stuama dho seadh é chun ábhachta do dhéanamh de: .i. chun magaidh do dhéanamh de"]
    },
    {
        word: "ádhamhail",
        grammar: "aidiacht",
        definition: "do bhreith maitheasa gan choinne leis; do theacht i dtreó dhuine go fabharach, rathmhar; bail nó maitheas do theacht lasmuigh dár smacht féin",
        examples: ["Is ádhamhail do chlainn go bhfágann a muinntir airgead aca: ádhmharach, is sármhaith dhóibh é", 
        "Aimsir ádhamhail do churadóireacht seadh an aimsir thais seo: rathamhail; feabhasóchaidh sí go mór barraidhe",
        "Nílim ádhamhail in ao’chor, níor bhuadhs geall riamh: ní bhíonn an chinneamhain fabharach dom", 
        "Bliadhanta ó shoin do bhí long mhór taistealaidhthe ag dul thar lear, taidhbhrigheadh do dhuine uirthe go gcaillfí í, tháinig sé i dtalamh aiste in Afraice Theas, níor shroich an long a triall riamh, nár bh’ádhamhail an fear é? nách air a bhí an deagh-bhail",
        "Lá agus mé ar an gcara sráide gan an táille agam nár bh’ádhamhail dom go raibh fear aitheantais ann a dhíol asam: budh chaoitheamhail; budh mhaith an rud dom é"]
    },
    {
        word: "ainbheart",
        grammar: "baininscneach - tríú díchlaonadh",
        definition: "droichghníomh, olc",
        examples: ["Dá mhéid ar ghaibh sé tríd agus do deineadh mícheart air ní dheárna sé ainbheart riamh: beart nó gníomh olc",
        "Cad eile é ach ainbheart luighe trom ar bhochtaibh? gníomh olc",
        "Go maithidh Dia dho is iomdha ainbheart do rinne sé ag scriosadh na ndaoine as a mbailtibh: olca gránda"]
    },
    {
        word: "aithdheinim",
        grammar: "briathar a.",
        definition: "deinim airís, cuirim athchlódh air, aitheagar, iompuighim in athchuma, mar éadach, móin, féar",
        examples: ["Leag an ghaoth na stiocaidhe ach d’aithdheineas iad leis an ngealaigh: chuireas ’na seasamh fé sholas na gealaighe", 
        "An uile lá cuireann sé geall ar chapallaibh agus cailleann, ach ní thréigfeadh a mhian, ní aithdhéanfadh (aitéanfadh an fhoghraidheacht) an saoghal mór: ní atharróchadh faic a aigne", 
        "Bean bhaileach, ghasta a aithdheineas éadaighe dá chlainn seadh í: iompuigheann sí baill éadaigh lé duine aca agus deineann balcais mhaith dhe do dhuine is lugha dhíobh", 
        "Chaith an gabha an chrúdh do chur ’on teine bhí sí róchumhang, agus d’aithdhein sé oireamhnach í: dhein sé airís í i slighe go raibh sí mór a dóthain", 
        "Deineann sé agus aithdheineann sé an dán do léigheamh go dtí go mbíonn sé de ghlanmheabhair aige: léigheann go minic, minic é", 
        "Ná h-aithdhein do lámh do chur ar an iarann te nó is tinn duit: ná dein airís é", 
        "Bhuailis cheana me, aithdhein é, feicim: buail an athuair mé", 
        "Ní h-iontaoibh fear aithdhéanta: fear a iompuigheas ar fheabhas ó dhroichchleachtaibh", 
        "Tigh aithdhéanta: tigh atharruighthe ar fheabhas", 
        "Scaipeadh sinn don gcéad ionnsaidhe ón namhaid ach d’aithdheineamair agus ruagamair iad: thángamair i bhfóireamh a chéile airís"]
    },
    {
        word: "aithne",
        grammar: "baininscneach - an ceathrú díchlaonadh",
        definition: "coidreamh, fios nó eólas pearsanta",
        examples: ["Níl aon aithne agam ar an gcailín sin: níl a fhios agam cé h-í; ní fhéadfainn innsint duit cad is ainm di ná aon rud mar gheall uirthe", 
        "Chuireas aithne ar Thomás Ó Cléirigh n-a shiopa féin i Sráid an Pheárnéalaigh: choidrigheas é, cuireadh i bhfios dom cér bhé féin, a ainm agus mar sin de", 
        "Ní bhfaighinn ar m’aithne fear chómh galánta: ar líon na ndaoine go léir gur fios dom cé h-iad", 
        "Is maith an aithne, ní fuláir, atá agat in Áth Cliath tréis na mbliadhanta go léir atá caithte agat ann: a fhios agat cé h-iad mórán daoine, agus fios nó eólas cár cheart duit gabháil innte", 
        "Tréis na cinneamhna chaith sé an oidhche san ósbuidéal gan aithne: dall ar cad a bhí n-a aigne féin agus ar an uile rud n-a thímcheall", 
        "Trí lá thug sé gan aithne gan úrlabhra: gan bheith in inmhe aon rud do thabhairt fé ndeara ná focal cainnte do chur as",
        "Tháinig sé isteach an doras mar bheadh an nimh ar an aithne agus sinn ag cainnt air: ar an uain go raibh sé in ár smaointibh", 
        "Mar bheadh an nimh ar an aithne rith sé im aigne dul fé n-a bhrághaid aguscad bheadh ná é marbh rómham ar an mbóthar: cómhacht éigin draoidheachta ag suathadh m’aigne", 
        "Aithne na féile agus na carthanachta a bhí agamsa air: sin mar chonnac é, fial, carthanach", 
        "Dob fhada fairsing aithne air: bhí a fhios ges na sluaightibh air i gcómhgar ’si gcéin", 
        "Dá mb’í aithne an bhitheamhnaigh do bheadh air ní fhéadfá gan cion do bheith agat air: teist, cáil bitheamhnaigh", 
        "Ná bíodh muinghin agat as dhuine gan aithne: duine nách mbeadh eólas agat cad é an saghas é", 
        "“An bhfuil aithne agam air?” “Tá, aithne thar na seacht n-aitheanntaibh”: aithne shármhaith agus le fada", 
        "Cuireadh ó aithne na h-áite me: coisceadh orm teacht ann", 
        "D’imthigh an oiread aimsire agus gur imthigheamair as aithne a chéile: gur dhearmhadamair aon rud ag baint linn a bhéarfadh chun ár gcuimhnte a chéile", 
        "D’ól sé an oiread san ná raibh aithne a bheart aige ag dul amugha a’s ag tabhairt dhá thaobh an bhóthair isteach: ní raibh aon mhotháilt aigne aige ar aon nidh a bhí dhá dhéanamh aige", 
        "Dá mbeadh aithne agat air leigfeá dho: dá mbeadh a fhios agat cad é an saghas (olc) atá ann", 
        "Cuir in aithne dá chéile me féin agus an cailín áluinn sin, led thoil: innis dom cé h-í agus innis di cé mé", 
        "Shaoileas go raibh seanaithne agam air, ach bhí dearmhad orm, ní chuirfinn ó m’aithne air, n-a leith go ndiúltóchadh sé aonne ar shuarachas: aithne an-mhaith", 
        "Dá mbeadh t’aithne agam thabharfainn mo rún duit: dá mbeadh oiread feasa agam id thaobh a’s go dtuigfí dhom go rabhais iontaobha", 
        "Duine cúthail nárbh fhuraiste aithne do chur air dob eadh Árt Ó Gríobhtha: a choidreamh do dhéanamh, a mheón do nochtadh", 
        "“Sagart gan sainnt, ní bhfaighinn ar m’aithne”: ameasc sagart mo choidrimh", 
        "Aithne gan choidreamh atá agat orm: is eól duit m’ainm ach ní h-eól duit mo mheón ná mo shlighte", 
        "Lé faid m’aimsire as an bparóiste téidheann sibh dem aithne: ní fheadar cé sibh féin"]
    },
    {
        word: "athnasc",
        grammar: "firinscneach, an chéad díchlaonadh",
        definition: "aithris, cur iarraidh ar, aithris cainnte duine d’fhonn bheith deimhnightheach di; aithris fhonmhóideach",
        examples: ["Ní dóigh liom gur chualais i gceart cad dubhairt sé, déin an chainnt d’athnasc air d’fhéachaint ar thugais leat i gceart í: aithris na focail do tuigeadh duit adubhairt sé", 
        "Cómhairle! ní théidheann lag orm ach ag athnasc air breis chéille do bheith aige: ag impidhe ’sag iarraidh go láidir", 
        "Go mbínn cortha bhínn ghá athnasc ar mo chlainn fanacht ó dhrochchuideachtain nó gur thinn dóibh: ghá athchuinghe ortha óm chroidhe", 
        "Comá ná tiocfadh olc ar an nduine bocht tutbhéalach nuair chonnaic sé ag athnasc air tu: ag aithris go fonmhóideach"]
    },
    {
        word: "bruachán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "teallaire, duine droichbhéasach; duine ná tugann aire dá ghnóth féin",
        examples: ["Scaoil thart an bruachán san – ná cuir aon eadh n-a dhrochchainnt: duine atá ag cainnt thar ceart lé neamhbhéas", 
        "Dá mbeinn im bhruachán mar thusa, déarfainn leis seasamh dúinn: duine neamhbhéasach", 
        "Tá sé ag imtheacht n-a bhruachán ar fuaid na tíre, lá aige ar thaobh Fianna Fáil, lá ar thaobh na nGaedheal, agus lá eile ar thaobh Fine Gaedheal: gan fuaimeant, ag itheadh a’s ag gearradh ar gach aonne"]
    },
    {
        word: "buaile",
        grammar: "firinscneach - ceathrú díchlaonadh",
        definition: "log bó nó crúidhte; an clós n-a mbíonn aoileach; cródh nó gabhan",
        examples: ["Téidhidh amach ar an mbuaile lé chéile, tugaid náire dhóibh féin os chómhair na gcomharsan: bíd ag troid ’sag achrann lé chéile go poiblidhe; ar an mbán lé chéile", 
        "Is dána é coileach ar a bhuaile féin: cois baile is dána duine", 
        "Caitheadh ’on bhuaile me!: nuair ná raibh aon ghnóth ná aon mheas orm is beag cneastacht fuaireas ó lucht an tighe", 
        "Tá an fheóil sin lobhtha, gan aon mhaith, caith ’on bhuaile í: caith uait í"]
    },
    {
        word: "camchos",
        grammar: "firinscneach - ceathrú díchlaonadh",
        definition: "cos agus cor innte",
        examples: ["Tairng chughat as mo shlighe do chamachosa: cosa (nách mbeadh cam) bheadh ag teacht treasna agat ar dhuine eile", 
        "“Léan id chamachosa!”: deirtear lé duine a shatlóchadh ort, a shiubhalóchadh ar rud shoibhriste nó mar sin"]
    },
    {
        word: "céimeamhail",
        grammar: "aidiacht",
        definition: "oirdhearc, mórtach, árdionadach",
        examples: ["Fuair sé ionad céimeamhail sa chabhlaigh de bhárr a ndeárna sé i gcoimheascar dá raibh sé: ionad anárd go mbeadh mórán measa a’s onóra ag dul leis; ionad oirdhearc",
        "Ghluais an t-arm go céimeamhail chun catha, cóirighthe, gléasta, deighineallta, dóchasach: go fuadrach, mórdhach, deallramhthach", 
        "Budh dheacair Hitlear ná Musailíní ná Deibh do shuathadh ameasc a ndaoine mar bhíodar go céimeamhail aca: árd, anáirde ’n-a meas"]
    },
    {
        word: "cnádánaidhe",
        grammar: "firinscneach - ceathrú díchlaonadh",
        definition: "duine a bhíos ag gearán, cúis nó gan chúis, a bhíos míoshásta, is cuma cad é an aiste do bheadh air",
        examples: ["Léan air, an rud sprionnlaithe, an cnádánaidhe, má chaith sé coróin ar a cháirde, nách air atá an tinneas ’n-a thaobh: an duine beagchroidheach, crádhinntineach"]
    },
    {
        word: "deimhnightheach",
        grammar: "aidiacht",
        definition: "cinnte, dearbhtha",
        examples: ["Dá me thu ní bheinn chómh deimhnightheach díom féin agus go n-éirigheadh liom i gcomhnaidhe: suidhte im aigne; daingean; “talamh slán” do dhéanamh", 
        "Níl neach deimhnightheach de rud ar bith sa tsaoghal so: níl sé i gcumas a réamhinnsint cad thárlóchaidh i ndeireadh dála", 
        "“Gheobhair ullmhughadh breágh, slachtmhar”, ars an mháthair leis an leanbh crosta, “agus bí deimhnightheach de”: ná bíodh aon amhras n-a thaobh ort", 
        "Budh mhór é ár ndíombáidh nuair fuaireamair an toileán gan biadh ná uisce, mar níor dheimhnighthighe sinn ar éirghe gréine ’ná go mbeadh san i bhflúirse ann: níor lugha amhras sinn; suidhte, meáidhte ’n-ár gceann go mbeidís ann", 
        "Táimid deimhnightheach d’aon nidh amháin ar an saoghal so, an bás: fírinne nách féidir do chur ar neamhnidh", 
        "Cuireadh teachtaire deimhnightheach chun scéala cruinn do bhreith go ceann spric: teachtaire iontaobha; teachtaire gur b’fhéidir muinghin do bheith as", 
        "Bain glór as an airgead san, ní dóigh liom gur réal deimhnightheach é: ceann déanta den mhianach cheart", 
        "Seachain an roth san, níl sí ró-dheimhnightheach: roth seadh í ná beidhfeá sásta it aigne ná go gclisfeadh sí ort", 
        "Cómhartha deimhnightheach talmhan seadh uisce (sáile) éadoimhin: cómhartha gur féidir seasamh air"]
    },
    {
        word: "dóighteán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "teine mhór dhíoghbhálach; an chuid den lóchrann go mbíonn an buaiceas ann",
        examples: ["“Murchadh an dóighteáin”: an Murchadh nár choigil an teine ar áitreamh na ndaoine", 
        "Dóighteán seadh an cnoc ar fad: tá sé trí theine", 
        "Deineadh nead dhóighteáin de Bhársá: cuireadh teine a’s loscadh innte ar fad", 
        "Tabharfaidh sé dóighteán don dtigh ’e cheal té: an oiread san buile air", 
        "Ar a mbeidh ólta anocht ges na diabhalaibh úd beidh dóighteán aca: beidh gleódh a’s achrann a’s bruidhean"]
    },
    {
        word: "éagsamhlacht",
        grammar: "baininscneach - an tríú díchlaonadh",
        definition: "coimeascadh rud lé chéile; deifridheacht, claochlódh; ceal cosamhlachta, líon rud nách d’aon saghas; iongtacht, neamhchoitchinne",
        examples: ["Téighimís isteach ’on tsiopa so b’fhéidir go bhfaghaimís an rud atá uainn, tá éagsamhlacht rud dhá dhíol ann: iliomad rud nách den gcineál gcéadna", 
        "Éagsamhlacht éigin ag baint leis lé déidheannaighe ní bhfaghaim é mar gheibheann bliadhanta ó shoin cainnteach, soilbhir: neamhchoitchinne; neamhghnáthacht ag baint leis", 
        "Ní fuláir nó is mór a bhfuil de chulaitheannaibh éadaigh agat, bíonn éagsamhlacht gléasta ort an uile lá bhuailir liom: malairt ghabhtha", 
        "B’é éagsamhlacht an duine seo nár bh’fheas d’aonne cér bh’é ná cár bh’as é: rud ait nár bh’fhéidir le aonne d’fhagháil amach", 
        "Cé gur b’é do dhreatháir é, tá éagsamhlacht agat leis: níl aon deallramh i gclódh ná i meón"]
    },
    {
        word: "éan",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "(iol. éanlaithe, éin) ainmhidhe dá-chosach, cleiteach, sciathánach; ainm chineálach don aicme (ealtain) sciathánach",
        examples: ["Léim sé ar nós an éin: chómh seólta, éadtrom", 
        "“Ní h-éan mé”: deir duine a bhíos ag fagháil leithscéil i dtaobh a mhoille gluaiseachta", 
        "Is breágh an fás atá fén aosánach san, “borradh an éin ghé”: ag fás chómh tapaidh le goislín (gé)", 
        "Gheóbhfá a lán uaidh, bí ag brath air, duine atá “chómh fial leis an éan fionn” (seanfhocal): chómh fial leis an gcromán; gan féile ar bith ann; thógfadh gach aon rud go sprionnlaithe a’s ní scarfadh le frighid", 
        "Éan róin: an rón óg", 
        "An t-éan dearg: éan mara; “pearóid” na mara", 
        "Éan aille (faille) ach ní héan mara an “préachán coisdearg”: lonnuigheann i bhfaillteachaibh ach ní theangmhálann leis an uisce", 
        "“An t-éan beannuighthe”: a ainm toisc an tsíor-fheacadh cinn a’s earbaill", 
        "“Éirigh leis an éan agus luigh leis an uan”: .i. mochóirghe agus dul a chodladh luath", 
        "Ghaibh duine de Shliocht Chobhthaigh (saghas giofóg nó tuinncéiridhe) tímcheall indiugh, shaoileas nár mhair aon éan aca: neach díobh duine éigin aca a choimeádfadh cothughadh ar rátaidhibh a sean", 
        "“Cár chualaís an scéal iongtaiseach so go rabhas-sa ag dul thar lear?” – “ó éan éigin”: duine siubhaltach ná hainmeóchaid", 
        "“Chómh neamhmairgeach leis an éan ar an gcraoibh”: .i. gan faic ag déanamh toirmisc beathaidh dho", 
        "Á, is mór an aire gheibheann an leanbh san ó n-a mháthair agus an pheataidheacht, tá ’n-a éan cuaiche aice: .i. tugann sí aire agus nidhthe dho ná fuil de dhualgas máthar uirthe", 
        "“Éan maith aca seadh é”: deirtear lé duine nách beag aige éalódh ar rud chun a bheith aige nó chuireas slighthe neamhdhlistinneacha roimis chun rud do ghnóthughadh", 
        "“Má leanann na daoine ar bheith ag fágaint an cheanntair a’s gan an óige do bheith ag fásadh is geairrid beidh aonne ann” – “beidh éan éigin i gcómhnaidhe san áit”: fothdhuine", 
        "Is deas baileach d’fhágais t’iothla, budh chuma leat is dóigh liom dá n-imtheóchadh sí ag éanlaithibh an aoir: béal anáirde; gan fasc ná críochnughadh", 
        "Tá sé ag imtheacht ag éanlaithibh an aoir: is féidir le haonne sáthadh chuige; níl a bhac ar aonne cuid de d’árdach leis", 
        "Chómh módhmharach le héan i gcois ar chraoibh (sceich): i ngreim a liodán", 
        "Siubhal nimhe fén mbád seóil, í ag teacht orm mar bheadh éan: chómh luath, seólta", 
        "“Dhá éan do marbhadh leis an aon chloich (urchar)” (seanfhocal): .i. dhá ghnóth do dhéanamh d’aon iarracht"]
    },  
    {
        word: "eanga",
        grammar: "baininscneach - an ceathrú díchlaonadh",
        definition: "gearradh, mannta i maide",
        examples: ["Nuair bhíonn beart mhaith déanta ag duine deirtear, 'cuirtear síos eanga eile dho' (rádh): .i. comhartuightear é sin mar ghníomh maith"]
    },
    {
        word: "eanglais",
        grammar: "baininscneach - an dara díchlaonadh",
        definition: "uiscealach, deoch thanuighthe, marbhán dighe",
        examples: ["Eanglais té, eanglais bainne: té ná beadh a dhóthain den “luibh” ar an uisce; bainne bheadh tanuighthe lé breis uisce",
        "An leann dubh atá ag imtheacht anois níl ann ach eanglais: de bhreis ar an saghas a bhíodh ann roim an gcogadh mór fadó; deoch leamh, lag, gan an suiméar ceart",
        "Níor chuir an bhiotáille láidir air lé neart an duine, ach an oiread lé eanglais meidhg: uiscealach meidhg; meadhg bheadh meascuighthe le uisce"]
    },
    {
        word: "éirightheach",
        grammar: "aidiacht",
        definition: "ádhmharach, rathamhail, árduightheach; géar; spriogamhail; múscaltach",
        examples: ["Níor bh’éirightheach liom cruisteach do chur ar aon rud nár bhain liom féin: tuigeadh dom ná beadh an t-ádh orm ’n-a dhiaidh", 
        "Ar an dtaobh so (de) Chorcaigh ní raibh aon dream tamall dob éirighthighe ’ná iad, bhí gach aon rud aca d’iarrfadh do bhéal: b’ádhmharaighe",
		"B’é an lá éirightheach duit é, a chailín bhoicht, nár phós an meisceóir úd, b’aindeis é do shaoghal aige: rathamhail",
		"Taoiseach éirightheach d’Éirinn, abradh gach aonne pé nidh in Éirinn is maith leis, seadh Deibh, tá sé ag feabhasughadh an uile lá ó tháinig sé i gceannas: ádhmharach; budh mhór an luach ó Dhia dos na daoinibh é",
		"Ní barra éirightheach cruithneacht bliadhain fhliuch: neamhrathamhail; ní thugann an toradh is dual di",
		"An bhfuil an capall san éirightheach leat?: tairbheach: an fearrde thu é?",	
		"An dóigh leat gur éirightheach an rud duit cuid do chómharsan do bheith agat go héagcórach?: gur fearrde thu é; go mbeidh an rath ort ’n-a thaobh",
		"Feirmeóir neamhéirightheach fé bhuaibh é, cailltear cuid aca air, a’s téigheann cuid aca ’n-a choinnibh: ní bhíonn an t-ádh air ’n-a dtaobh; bíonn siar leo",
		"Deirtear gur uimhir éirightheach uimhir a seacht: .i. go mbeireann sí an buaidh",
		"Bóthar árd-éirightheach seadh an Chonair, stráice mór fada i gcoinnibh an chnuic: géar",
		"Caithfeam dul abhaile gan aon tseilg, níl iasc éirightheach indiugh: níl aon fhonn beartha air",
		"Ní mór den righe ná den rath do bhí ormsa de bharr mo thurasa go Mearaice, níor thugas oiread agus coróin as, ní mar sin duit-se b’éirighthighe d’áit duit é thugais pócaidhe airgid as: is mó den ádh a bhí ort ann",
		"Is éirighthighe plúr nuair bhíonn gabháil ann ná gan í bheith: is mó atann sé i mbácáil do",
		"“An raibh do thurus éirighthighe?” – “go hiongtach, tá dachad púnt dá bharr agam”: rathamhail; tairbheach",
		"Faillteacha fiadhaine, éirightheacha mara a chuirfeadh méabhán id cheann féachaint anáirde ortha: géar",]
		},
    {
        word: "eiteán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "cleite beag; sorcóir adhmaid go bhforra ar a dhá cheann go gcastar snáithín air",
        examples: ["Céad míle glóire lé Dia, nách mín, líomhtha iad eiteáin an dreóilín: cleitínidhe beaga, beaga", "Lán eiteáin de shnáithín: eiteán, spóilín"]
    },
    {
        word: "fabhall",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "casadh na taoide, tréis cheathramhan (mó mar sin de) do bheith caithte; cois talmhan mar a mbíonn lúb díreach mar chídhfeá ag sconnadh abhann an t-uisce ag casadh chois an dá phuirt",
        examples: ["“Ar chas an fabhall fós?”: “Níor chas, níl a dhóthain lán (nó tráighthe) dhe”", "Ar chasadh don bhfabhall iascóchaidh do dharadha: .i. lagóchaidh an taoide iar gcasadh uirthe féin ar a dhá faobhar cois talmhan", "Fan i gciumhais an fhabhaill, is ann is ciúine an fharraige: "]
    },
    {
        word: "fiadhach",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "fiadh-charraig, carraig aonair tamall ó thalamh",
        examples: ["Fiadhach an Daingin: carraig tamall ó bhéal an chuain", "Fiadhach an Fhirtéaraigh: carraig go bhfuil bealach idir í agus an mhíntír"]
    },
    {
        word: "geanncas",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "búisteamhlacht, droichmhianach",
        examples: ["Amuigh ’si mbaile ní bhfaghfá uaidh ach geanncas, aon rud go dtagrófá dho ní bheadh ’n-a bhéal a’s ’n-a bhrághaid ach snap: droichmhianach, grodacht, gruamdhacht", 
        "Geanncas an mhadra lé n-a chnámh a gheóbhfá uaidh: scaimh a’s giorraisc a thúisce do chuirfeá cómhrádh air"]
    },
    {
        word: "glugarsach",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "an rud nó duine bog, beathuighthe, neamhchruinnighthe",
        examples: ["Glugarsach ar éigean atá ann an bóthar do chur de: trom, feólmhar, aindeis"]
    },
    {
        word: "halla",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "teach mór poiblidhe mar a mbíonn gnóth nó siamsa ar siubhal; airphortach; an phríomhsheómra i dteach mór; seómra bídh i gcoláisde etc.",
        examples: ["Halla an bhaile mhóir: halla rinnce", "Croch do chasóg a’s do hata sa halla: póirse, an tslighe ón ndoras isteach i dtigh"]
    },
    {
        word: "hólam tró",
        grammar: "firinscneach - n-dh.",
        definition: "trí chéile, achrann; tranglam; duadh",
        examples: ["Beireann hólam tró ar an nduine sin ón saoghal: duadh a’s iomard", 
        "Nuair bhí na daoine go léir bailighthe isteach sa halla chumhang ráinig hólam tró ann d’iarraidh suidheachán do bhaint amach: achrann", 
        "Hólam tró ar bith ní theastuigheann uaim sa tigh seo mara mbíonn ciúnas agaibh amach libh!: tranglam; míoshuaimhneas", 
        "Leanann hólam tró feirmeóireacht i ndrochaimsir: claoidheachtaint mhór lé hobair"]
    },
    {
        word: "iadhaim",
        grammar: "b.a. 7 n-a.",
        definition: "dúnaim, fáiscim, ceanglaim, fálaim, locaim, líonaim",
        examples: ["Ná hiadhadh súil leat i rith na hoidhche ar do chluais: ná tuiteadh aon chodladh ort",
        "Is iomdha rud a chonnaic sé dhá dhéanamh go mícheart gur iaidh sé a shúile air: nár thóg sé aon cheann de",
        "Ní fhéadfainn teacht amach tá iadhta orm: táim fé dhaingniughadh, fé ghlas n-a thaobh ort", 
        "Iaidh do bhéal go fóill, tá cuid mhór ráidhte agat, leig do dhuine eile labhairt: stad de chainnt", 
        "Iadhadh an doras ortha, ní leigfí isteach iad: dúnadh", 
        "Iadhfar an roilig: .i. ní leigfear a thuilleadh d’adhlacadh innte", 
        "D’iaidh na bainnc a’s ní bhfuair na daoine a gcuid airgid: stad sé de thrácht", 
        "Iaidh na puill sin sa bhád: cuir rud éigin ionta a líonfas iad",
        "Tá gach aon áit iadhta anois toisc na deireannaighe: trácht ’n-a stad", 
        "“Ní bhfaghann lámh iadhta ach dorn dúnta”: .i. fé mar tugtar seadh gheibhtear", 
        "Ní raibh neach ann a iadhfadh a shúil: .i. i láthair a bháis", 
        "Nách iadhta atá an spéir: múchta; trom-scamallach", 
        "Ghaibh sé an doras iadhta amach!: an cúldoras; an doras is gnáth bheith dúnta", 
        "Ní bheadh do shúil iadhta agat faid bheadh sé ag teacht ort leis an bhfuinneamh a bhíonn fé: an fhaid do thógfadh sé duilleóga na súl do luighe ar a chéile", 
        "An rud do bhíos a innsint duit iaidh do bhéal air: coimeád ’n-a rún é", 
        "An bhfuil sé in am iadhta?: tráth dóirse do dhúnadh a’s gan a thuilleadh díolta do dhéanamh", 
        "D’iadhfainn-se a shúile dho: d’atfainn iad tímcheall ortha lé buille, i slighe a’s ná beadh sé i ndán feicsint leo", 
        "Ní iadhfadh an doras bhí a chos i gcoinnibh na cómhlan aige: níor bh’féidir é do dhúnadh", 
        "Ní iadhfadh an mála, bhí an oiread san ann: ní thiocfadh a bhéal lé chéile", 
        "Iadhta le feóil: an-bheathuighthe"]
    },
    {
        word: "inneall: (ineall, inneal)",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "gaiste, gléas ceárdaidheachta, iomchar, imtheacht, meón",
        examples: ["Inneall bainte féir: sás iarainn chuige sin",
        "Inneall franncach: gaiste nó sás chun beartha ortha",
        "Seachain an gunna san, tá sé ar tinneall!: réidh leis an urchar d’imtheacht as", 
        "Tá gaiste na luch ar tinneall agam: curtha i dtreó a ngreamuighthe má theangmhaid leis", 
        "Gach nóimint den oidhche mhór fhada san a’s é ag taisteal na leac oighreach a’s an tsneachtaidh bhí sé ar tinneall ar eagla go dteilgfí i gcréacht é: ar aire go himshníomhach", 
        "Bí ar tinneall anois seo chughat an liathróid: ar do bhiorda", 
        "Cuir inneall éigin ort féin go mbeidh deallramh ort ameasc na ndaoine seachas na seanbhranngóididhe sin: éadach", 
        "Gearánann an Fhrainnc an Riaghaltas anois, gur ceal innill (cogaidh) budh bhun lé n-a hintreascairt: pé cóir budh ghábhadh chun cogaidh", 
        "Níl aon inneall gluaiste ort: nílir déanta suas ’n-a chóir", 
        "An dá fhuirinn i lár an chróidh curtha in inneall i gcóir an chluiche: curtha i bhfearas", 
        "Ó, gan aon atharrughadh é, ar an inneall céadna fós: ar an imtheacht a’s clódh céadna", 
        "Ar an slighe do chuireann sé bóthar de tá inneall fir mhaith fé: deallramh", 
        "Is baoghal liom go bhfuil inneall éigin ar bun aca dhuit, dréir mar chuala: beart éigin chun do dhíoghbhála", 
        "Is maith liom inneall an tighe: an chuma ’n-a bhfuil gach rud i dtreó"]
    },
    {
        word: "ím (im)",
        grammar: "firinscneach - an tríú díchlaonadh",
        definition: "toradh smearach a gheibhtear ó uachtar trí shuathadh",
        examples: ["Cuma chómh saonta, neamhurchóideach san ar an gcladhaire gur dhóigh leat air ná leighfeadh an t-ím ’n-a bhéal: .i. neamhdhíoghbhálach", 
        "An talamh chómh saidhbhir sin ann dá siubhaltá go moch ar maidin é go mbeadh sochar íme ar do bhrógaibh: drúcht buidhe a cheanglóchadh díobh",
        "Is fada ó ím sinn: níor éirigh lé n-ár n-iarracht fós",
		"Meall íme: cnapán",
		"An méid sin íme leis an méid sin aráin”: .i. nuair tómhaistear go lom é i gcóir an bhúird",
		"Ní raibh de mhoill air ach bheadh ar mheall íme i mbéal con: .i. a imtheacht go grod",
        "Tá a chuid íme déanta: .i. tá sé in ionad shochrach", 
        "Cuir an t-ím fé: meall lé plámás é"]
    },
    {   
        word: "leadar",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "buille leis an mbais nó lé haon rud a luighfeadh ar chuid mhór den rud do buailtear",
        examples: ["Is iomdha leadar do gheibheann ar scoil toisc gan mo chuid ceacht do bheith saothruighthe: buille sa cheann lé brághaid nó drom na baise", 
        "Fuair an t-asal leadar den sluasaid treasna na n-easnaidheach: stiall",
        "Dhéanfadh leadar nó dhó an-mhaitheas don ngealtán san ná féadfadh glas do chongbháil ar a bhéal: buille",
        "Is annamh lá ná go bhfaigheann Lonndain leadar trom ón aer: buille a luigheas go maith air"]
    },
    {
	    word: "leóithne",
	    grammar: "firinscneach - ceathrú díchlaonadh",
	    definition: "gaoth bhog, mhín, shocair, puth",
        examples: ["“Má thagann aon leóithne anuas leis”: deirtear lé rud ná bíonn aduighthe nó ’n-a sheasamh go daingean", 
        "Níl aon leóithne ann: .i. tá sé meirbh, brothallach", 
        "Oscail an fhuinneóg a’s scaoil isteach an leóithne: an t-aer", 
        "Níl fulang ar aon leóithne aige: .i. tá sé leóchaileach"]
    },
    {
        word: "liath-shúil",
        grammar: "baininscneach",
        definition: "amharc fiar, féachaint gan séimhe",
        examples: ["Tabhair liath-shúil ar ár nduine go bhfeicir an fuadar atá fé, ná feiceadh sé thu: amharc na súl i leathtaoibh gan cor do chur as an gceann", 
        "Ní fhágfadh sé faic sa tsiopa gan fuadach mara mbeadh liath-shúil do choimeád air: é d’amharc i nganfhios do", 
        "Is iomdha liath-shúil ’n-a diaidh aige, dá mb’aon mhaitheas do é: .i. bíonn d’iarraidh bheith ghá thabhairt fé ndeara i nganfhios don sluagh lé héileamh uirthe", 
        "Thug sé liath-shúil orm chómh luath a’s chuireas mo chos thar doras mar is fada roimis sin ó chonnaic ’n-a shiopa me: amharc mear, míshéimh mar bheadh iongadh air", 
        "Caith liath-shúil ar an alt san: amharc tapaidh, scrúduightheach"]
    },
    {
        word: "machaire",
        grammar: "firinscneach - an ceathrú díchlaonadh",
        definition: "talamh réidh, íseal, fairsing, páirc shúgraidh, cúrsa ráis, páirc chatha",
        examples: ["Téighimís ar mhachaire an bhuailte lé chéile a’s ná bíodh aon siar ná aniar air: ar an mbán ag troid lé chéile", 
        "Feóra Fhinn Trágha an machaire ráis a bhíodh annso im óige-se: an cúrsa ráis", 
        "“Ón gcnoc a chídhtear an machaire”: ón árdán a bhíonn radharc ar an gcoimheascar: .i. an té a bhíos i gceann is aige is fearr fios ar na nidhthibh fé n-a chúram", 
        "Ní sheasuigheann sé ar mhachaire an lae seo fear ná go bhfuil sé chómh flaitheamhail leis: ní mhaireann in aon bhall", 
        "Na Machairidhe: líomatáiste fhairsing íseal cois farraige in aice Chaisleáin an Ghreaghaire", 
        "Imirtheoir chómh maith agus sheasaimh ar mhachaire riamh: cródh nó páirc imeartha"]
    },
    {   
        word: "milis-ghob",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "béal cáiréiseach, caoin, cneasta, miochair",
        examples: ["Dréir mar chídhim, ní hé gach aon rud a réidhteóchadh léd mhilis-ghob-sa: cáiréiseach; beadaidhe; ceanamhail ar rudaidhibh soghaile amháin",
        "Nách ort a bhíonn an milis-ghob nuair bhír sa tsoláthar: .i. ag lorg aon ruda dhuit nách tu a bhíos miochair, modhamhail, síbhialta"]
    },
    {
        word: "mionuighthe",
        grammar: "aidiacht",
        definition: "brúighte, briste, luigheaduighthe ar nós na gainimhe nó an phúdair, athruighthe (airgead)",
        examples: ["An t-airgead mionuighthe go maith nuair tá sé go léir ’n-a phingnidhibh: athruighthe ’n-a lia bonn beag", 
        "Táimid chómh mionuighthe anois agat is nách fiú trácht orainn: an chuid is mó agus is fearr againn deighilte linn", 
        "An tobac so chómh mionuighthe ó bheith sa mhealbhóig nách fiú é do chur ’on phíp: ’n-a ghránlach; chómh mín lé min", 
        "Mo thuairm go dtuigfeadh an té is daille annso do scéal, tá sé mionuighthe ar an gcuma san agat: mínighthe, réidhtighthe, léirighthe", 
        "Na garbhóga móra cloch a bhí annsan nách iad atá go mionuighthe níl ionta ach púróga: luigheaduighthe", 
        "Talamh ró-mhionuighthe seadh ár mbaile-ne chun aon tslighe bheathaidh dob fhiú d’áireamh do bheith ag duine ann: roinnte ’n-a chodaibh ró-bheag; gabháltas suarach ag gach tríontaidhe", 
        "Tá an smut (adhmaid) mionuighthe ró-mhór agat chun dola do dhéanamh de: sciotuighthe, snoighte", 
        "Ar an léirscáil tá na bailte is gach aon áit a theastóchadh mionuighthe go han-mhaith: léirighthe"]
    },
    {
        word: "neamh-spleádhachas",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "neamh-bheann; saoirse; préac; gan chuibhreach ná smacht chun an toil do dhéanamh",
        examples: ["Mhaoidh sé ná raibh fear againn go mbeadh eagla aige roimis, sin é an neamh-spleádhachas agat!: beag beann ar cad thárlóchadh do",
        "Bíonn gach éinne i neamh-spleádhachas an duine bhoicht: ní bhíonn iachall aige ortha a thoil do dhéanamh",
        "Níl aon neamh-spleádhachas orm: nílim ag maoidheamh go bhfuilim níos fearr as ’ná cách",
        "Budh mhór an neamh-spleádhachas do cainnt theann do thabhairt uaidh ameasc daoine ná raibh cáirdeamhail: meisneach spiride"]
    },
    {
        word: "Nodlaig",
        grammar: "baininscneach - a-r",
        definition: "féile saoghaluighthe Chríost; an lá céadna; an aimsir as san go deireadh na bliadhna",
        examples: ["Oidhche Nodlag: an tráthnóna is an oidhche a dtuiteann sí ortha", 
        "Lá Nodlag: an cúigeamhadh lá fichead de mhí deiridh na bliadhna",
        "Oidhche Lae Nodlag: oidhche an chúigeamhadh lá fichead",
        "Oidhche Nodlag mór: oidhche an ceathramha lae fichead",
        "An Nodlaig mhór: Nodlaig na bhfear agus Nodlaig bheag", 
        "Is úr gach brobh go Nodlaig: ní thagann an fuacht ceart chun iad d’fheódhachtaint go dtí san", 
        "Is maith an bhliadhain dá dtig an Nodlaig i dtúis gealaighe ach nách claochlódh má thig: bíonn an bhliadhain sin sáith go minic", 
        "Biadh is deoch i gcóir na Nodlag, éadach nuadh i gcóir na Cásca: ", 
        "“Nodlaig na bhfear, Nodlaig mhór mhaith; Nodlaig na mban Nodlaig gan mhaith”: ", 
        "Biadh glan na Nodlaig is éadach glan na Cásca: is maith iad", 
        "“An Nodlaig in aghaidh an ráithe, an Cháisc in aghaidh seachtmhaine, an Domhnach gach re lá, is lá saoire eadartha”: ", 
        "“Is samhradh gach sín go Nodlaig”: is ann .i. is annsan a thagann an fuacht i ndáiríribh", 
        "Saoghaluigheadh ár Slánuighteóir oidhche Nodlag ar uair an mheádhon oidhche i stábla i mBeithil: ", 
        "Ag ceannach comaraitidhe na Nodlag: rudaidhe maithe lé caitheamh; bronntaisidhe na Nodlag",
        "Nodlaig ghlas reilig mhéith: Nodlaig bhocht bás mórán",
        "“Nodlaig ghrianmhar a dhéineann reilig bhiadhmhar, mhéith”: Nodlaig bhreágh tuar mórán bás",
        "Chaitheas dhá lá dhéag na Nodlag sa bhaile: "]
    },
    {
        word: "obann (oban)",
        grammar: "aidiacht",
        definition: "de phreib, de gheit, gan choinne, ceann-uaiscneach, tapaidh, prap",
        examples: ["Thángthas orainn go hobann is sinn i lár na sluide: rugadh sa bhfoghail orainn gan choinne",
                    "Chuala cnag obann ar an ndoras a bhain preab asam: tapaidh, tric", 
                    "Is é is obainne a tháinig riamh orm, an té a shaoileas a bheith sa taobh thiar de Mhearaice do bhualadh an doras isteach chugham: gan aon choinne; gan tuar ná rabhadh",
                    "Nách obann an bás a fuair sé, ní raibh moill nóiminte air: tapaidh; de gheit",
                    "B’obann léi mar thairsgint phósta é is gan ach aithne aon lae aca ar a chéile: lán-thapaidh, gan súil ar bith leis",
                    "Ná bíodh cainnt obann agat pé rud a dhéanfair, meádhaidh i gceart sara labhrair: ná himthigheadh do theanga leat; ná bí béal-luath",
                    "Fuair sé glaodhach obann, is beag coinne a bhí agam tráthnóna airéir go mbeinn ar a thórramh anocht: bás de phreib",
                    "Tháinig an scéal ró-obann orm, ní raibh aon tsoláthar déanta fé n-a chóir agam: ní rabhas ag machtnamh in ao’chor air",
                    "Fuair sé teog obann breoidhteachta: a tháinig in aonfheacht air"]
    },
    {   word: "ógánach",
        grammar: "firinscneach - an chéad díchlaonadh", 
        definition: "buachaill óg, aosánach, fear óg aontumha", 
        examples: ["Is iomdha ógánach súil-ghlas ag tnúth lé n-a pósadh, etc.: fear óg ionphósta",
        "Ní haon ógánach anois tu ná go mbeadh ciall agat: ní duine thu ná fuil tagtha go bliadhantaibh na tuigseana", 
        "Cogar i leith chugham, a ógánaigh, cad iad na geámaidhe crosta iad so fút?: a bharránaigh",
        "Beidh ógánaigh an cheanntair go léir ar barr ithreach an lá úd d’fhéachaint cé go mbeidh an buaidh aige: aosánaigh; buachaillidhe óga", 
        "“Lagófar fós na hógánaigh agus beid cortha agus tuitfid na hóig-fhir ar fad” (Iosaih XL. 30): na daoine in aois bheith ar bhruach feardhachta"]
    },
    {
        word: "pábhaile",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "sraith leac nó bloc cloiche nó adhmaid curtha go dlúth lé n-a chéile ar uachtar na talmhan; an casán díobh so lé hais tighe (tighthe) ar thaobh sráide; tóchar, cabhsa",
        examples: ["Ghaibh sé an pábhaile anuas cois an tighe: ",
        "Ná seasaimh ar mo phábhaile: ná tair in aon ghaobhar dom thigh",
        "Is iomdha fear maith a chuaidh go Mearaice gur shaoil gur ór na pábhailidhe ann!: saidhbhreas i ngach áit ar gach cor", 
        "Deineadh pábhaile treasna an phortaigh de chraoibh is de luachair go sroichfeadh na hainmhidhthe an mhóin air: tóchar, casán"]
    },
    {
        word: "píochánach",
        grammar: "aidiacht",
        definition: "ceóchán, ciach(án); feadán scórnaighe",
        examples: ["Focal ní thuigfinn uaidh lé píochán ort, bail ó Dhia ort: sciúch mhaith chainnte agat", "Ní bheinn ag cur píocháin orm féin leat: ag caitheamh mo chainnte leat"]
    },
    {
        word: "réabadh",
        grammar: "firinscneach (réabtha)",
        definition: "pléascadh, stracadh, stolladh, milleadh, briseadh, etc.",
        examples: ["An réabadh do fuair a seólta sa ghála, bhíodar ar sileadh: lé n-a crannaibh is ó n-a slataibh, is í ag luascadh gan treóir ar ucht na mara; stracadh lé foirneart", 
        "Níl aon teacht anuas lé huathbhás ar an réabadh reilige a dhein na “cranta iarainn” is áthraighe ar chathrachaibh, tighthe ag tuiteam i ngabhal a chéile aca, is créachta móra síos ins na sráideannaibh: milleadh is scrios nách féidir d’áireamh", 
        "Ná bí ag réabadh t’incheann leis an gceann cipín sin, d’iarraidh é do mhúineadh: ghá shuathadh ró-mhór",
        "Dhein an ghaoth réabadh mór ar ghasaibh laga, bóithre tríotha: briseadh is brughadh is milleadh", 
        "Sclábhaidhe ceólmhar é sin, go bhfuil deargadh is réabadh déanta aige ar phrátaidhibh indiu: mórchuid mhór romhartha bainte aige",
        "Gabhair thobac air go bhfuil sé ag réabadh go haon tsiopa ar an mbaile ag baint ramsach amach go bhfaghadh sé é: ag déanamh gleóidh is fothruim ar a chuardach",
        "Tháinig cuthach air gur chrom sé ar a raibh de leabharthaibh san áit do réabadh soir siar: do theilgean go fiadhain",
        "Na madraidhe ag réabadh an dorais ar feadh na hoidhche d’iarraidh teacht isteach: ghá ionnsaidhe go fíochmhar",
        "Bítear gearánach ar na gluaisteáin go dtugaid réabadh ar na bóithribh: go ngearraid is go laitid iad",
        "Ag réabadh na ndlighthe atá sé riamh, gan aon áird aige ortha: ghá mbriseadh",
        "Dlighthe Dé do réabadh gan eagla roim an síorraidheacht: peacaidhe dá dhéanamh go hiomadamhail",
        "An fharraige ag réabadh lé fóirneart: ag briseadh", 
        "An mhuir ag réabadh i gcoinnibh na faille: ag stialladh go hárd is ag briseadh go trom, torannach",
        "Ag réabadh mo bhalcaisidhe, ag gabháil trí aiteann is sceachaibh: ghá stolladh", 
        "Riamh ó éirighis suas it ógánach agam táir ag réabadh mo chroidhe nuair ná deinir rud orm agus ómós máthar do thabhairt dom: ghá chéasadh", 
        "An réabadh atá ar an nduibhch ge coinínidhibh, í lán de rapachaibh is de chnoigéaraibh: an tóch is an tolladh", 
        "Thugadar leó cróidhte is piocóididhe chun réabtha na háite: do bhriseadh is do thóch", 
        "Is cuma leat cá ngaibhir ach bheith ag réabadh rómhat: ag imtheacht gan fiadhain gan áird agat ar faic", 
        "Is mór an réabadh ar airgead é dhá mhíle do chaitheamh in aon bhliadhain: stracadh; caitheamh gan féachaint do phingin de",
        "Déin réabadh annsan, is ann is dóichighe do cuireadh an t-ór i bhfolach: tóch is taighdeadh", 
        "Sibh do réabadh idir cheirt chroiceann as an ndúthaigh budh chóra do dhéanamh: do dhíthshealbhadh is do ruagadh aiste"]
    },
        {
        word: "rothar",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "capall maide, gléas iomchair go n-a dhá roth, ceann i ndiaidh an chinn eile, suidheachán d’éinne amháin, lámha lé n-a n-ionnramháltar an roth thosaigh mar oireann agus troightheáin ar roth bheag i lár lé n-a gcastar an roth dheiridh",
        examples: ["Rothar sáidhte a oibrightear leis na cosaibh:", "Gluais-rothar lé hinneall íle: "]
    },
    {
        word: "scallachán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "gearrcach gan chlúmh",
        examples: ["Ní rabhadar ach ina scallacháin nuair tógadh as an nid iad is níor mhaireadar lé fuacht: "]
    },
    {
        word: "sceamhadh",
        grammar: "firinscneach",
        definition: "uallfartach, bearradh, cáinseamh",
        examples: ["Chloisfeá ón bhfarraige uait isteach ar an dtalamh ist oidhche an sionnach ag sceamhadh go dtaidhbhseófaí dhuit gur mhadra bheadh ann: ag éigheamh", 
        "D’aithnigheas ar sceamhadh an mhadra gur duine a bhí aige: ar an nglór bagarthach (feargach) a rinne sé lé n-a bhéal", 
        "Ag sceamhadh ar nós an mhadra orm ó scur leigeant an lae, is cuma cad dhéanfainn: ag uallfartaigh go míchéadfadh, gomhamhail", 
        "Nuair labhrair liom ná bí ag sceamhadh orm liom mar bheadh madra ar tí beartha orm:", 
        "Tor mór ar do sceamhadh agam: ní leigim orm go gcloisim thu"]
      },
    {
        word: "sceamhaim",
        grammar: "b.a. ⁊ n-a", 
        definition: "tafangaim (madra), liúghaim, scairtim, uallfartuighim, uaillim, easmalaim",
        examples: ["Sceamhann an sionnach díreach ar nós an mhadra ach go caol: deineann sé an glór céadna mar dhéanfadh madra i ndiaidh ainmhidhthe",
        "Sceamh leat, ní fearr linn díomhaoin thu: bí ag tabhairt béil is tarcuisne uait",
        "An sceamhann an madra san?: an léigeann sé béic fheargach, nó bhagarthach",
        "Sceamhann sé, ach ní bheireann sé, madra macánta é: glanann ach ní luighfeadh a fhiacla ar dhuine",
        "“Sceamhfaidh gunnaidhe móra go tiugh san earrach”, arsa Hitlear san Rúis: rúscfaid, déanfaid glór diabhalta nuair beifear ag caitheamh leó",
        "“Má sceamhair airís orm”, arsa an t-oibridhe leis an saoiste, “caithfead m’úirlisidhe is fágfad, táim liath agat ghom ghriogadh”: má bhéicir lé lochtughadh",
        "Mar sceamhann gaoth is farraige adtuaidh orm: mar bhíd ag fuarmáil ar nós madra goimh",
        "Má sceamhann tu air sceamhfaidh ort, agus cloisfir béal: má thugair achmhusán do; ullfairt air"]
    },
    {
        word: "seamsán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "crónán, monabar, glór íseal cómhnaidhtheach",
        examples: ["Seamsán an eitealláin ós mo chionn: glór an innill", "Fiú amháin ist oidhche do bhíodh seamsán an mhuilinn imchluasaibh: an glór a dheineadh an t-inneallradh i rith an lae"]
    },
        {
        word: "slíogach",
        grammar: "aidiacht",
        definition: "gléasmhar, síodamhail, bláthmhar, milis, sleamhain, míonla",
        examples: ["Á, mhuise, is é an mada ruadh é, nách slíogach a chuireann sé chughat rud d’fhagháil: go gasta, milis", 
        "An teanga shlíogach atá aice, mheallfadh sí aon rud: mín, sleamhain", 
        "Níl easbhaidh a choda air seo ar an gcroiceann slíogach atá air: gléasmhar, folláin", 
        "An drom slíogach atá ar an madra: mín féd láimh, bhraithfeadh sé ar nós an tsíoda"]
        },
                {
        word: "sluagh",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "cuid mhór dhaoine, scata, bailiughadh, cruinniughadh mór, trom; arm; tromlucht leanamhna",
        examples: ["D’árduigh an sluagh sidhe leo é: na daoine maithe", 
        "Beidh sluagh sa tsochraid sin, mar duine mór-charaid dob eadh é: bailiughadh mór",
		"Ní mór d’fhear in ionad poiblidhe do bheith aireach ar an sluagh, d’iompóchaidís ina choinnibh de phreib: na daoine i gcoitchinne",
		"Is fada ar shluagh na marbh é, gura mhaith an mhaise dho é: ar shlighe na fírinne; ar an mbuidhin is mó",
        "Fadó lé linn m’óige bhíodh na sluaighte ar na ráiseannaibh, anois chomhaireófá an méid a bhíos ann: díormaidhe móra",
        "Raghaidh sluagh an tighe go léir ar do phósadh: muinntir an tighe",
        "“Is dóigh lé bailithín (dailtín) na gcuach gur mar é féin do bhíonn an sluagh”: an té a bhíos ar meisce ag iomad dighe is dóigh leis go mbíonn gach éinne ar meisce",
        "Bhailigheadh na trom-shluaighte tímcheall fir na gcleas is a mbéal ar leathadh aca: na céadta daoine",
        "Ní raibh ach sluagh éadtrom ar an aonach indiu: beagán",
        "Sluagh mór beithidheach: táin",
        "Seachain thú féin ar bhéal an tsluaigh: ar tháinseamh na coitchiantachta",
        "Cuireadh gairm sluaigh ar an ndúthaigh: fógra an gnáth-arm do theacht go ceannphort",
        "Marbhuigheadh triúr ceann sluaigh in aon chath amháin orainn: cinn urraidh",
        "An tsluagh bhí ag Murchadh an urchair mhóir, i gcath Chluain Tairbh ag treascairt na slógh: na saighdiúiridhe a bhí bailighthe chun a throdta",
        "An dteastuigheann uait an sluagh bheith ag cleith-mhagadh fúm?: na daoine go léir",
        "“An bpósfadh aon bhean thu?” – “na sluaighte”: cuid mhór díobh",
        "Sluagh beach: saithe",
        "I gceannas sluagh Éireann: fir Éireann; ár n-arm uile",
        "Dá mbeadh an sluagh sluaigh aca ní raghaidís i bpáirt mar chuadar: an spirid is an dilseacht cheart d’onóir is leas buidhne",
        "A Dhia na slógh, fóir ar m’anam: daoine an domhain ó thúis deireadh",
        "“Agus abruidh ré Amasa, nách dem chnáimh agus dem fheóilse thusa? go ndeárna Dia sin agus fós níos mó liomsa, muna raibh tusa ad cheannurra an tslóigh agamsa choidhche a n-áit Ióab” (2. Sam. XIX. 13): os chionn gach éinne",
        "Tá deireadh lé sluaighte gluaisteán go dtí thar éis an chogaidh: mór-chuid díobh ag síor-ghluaiseacht",
        "Aon toradh níl agam-sa ort ná ar do shluaightibh: lucht leanamhna"]
		},
        {
        word: "suidheachán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "cathaoir, stól, nó a leithéid eile chun suidhte air; ionad, log, sosún; caibideal; salachar duine",
        examples: ["Cá bhfuil suidheachán ar an arm anois?: cá bhfuil longphort aca", 
        "Bheadh an-shuidheachán sa tsiopa san aige leis an aimsir dá dtugadh sé aire dho féin: ionad maith maireachtana",
		"Leabaidh shuidheacháin: is féidir d’iadhamh nuair ná bíonn in áis agus suidhe uirthi",
		"An uile oidhche bíonn suidheachán againn ar an gcogadh: cruinniughadh daoine a chuireas trí chéile é",
		"Sáipéilín gan aon tsuidheachán ann: stól nó fuarma",
		"Bhí sé ar a shuidheachán: ag follamhughadh a chliabhlaigh",
		"A leithéid d’fhear lé faillighe agus manaois, d’fhanfadh sé sa tsuidheachán chéadna dá mbeadh an tigh trí theine: gan corruighe as an mball go mbeadh",
		"An bhfuil gach éinne agaibh i suidheachán, má tá gluaiseam!: suidhte; ionad fachta aige",
		"“Is beannuighthe an fear nách siubhluigheann a gcómhairle na neamh-dhiadhach, nách seasann a slighe na bpeacach,agus nách suigheann a suigheachán na dtarcuisneach” (Sailm I. 1): áit chun suidhte",
		"Caithfir suidheachán do ghabháil ar an úrlar: suidhe air",
		"Suidheachán na cathaoireach: an chuid di go suidhtear air",
		"Faigh suidheachán san amharclann dom: slighe suidhte",
		"Chaill an teachta dála a shuidheachán: níor toghadh ath-uair é",
		"Is iad na scartacha suidheachán na haicíde aige: is ionta atá a préamh",
		"Annsúd atá suidheachán mo dhaoine-se faid agus tá cur amach air: an áit longuighthe",
		"Is in Áth Cliath atá suidheachán an riaghaltais: is ann a dhéineann a ghnóth",
		"Ní tháinig aon nuadhacht ó shuidheachán an chogaidh indiu: log",]
		},
        {
        word: "taithigheacht",
        grammar: "baininscneach - an chéad díchlaonadh",
        definition: "coidreamhas, áis, gnáthughadh, cleachtadh",
        examples: ["Nuair raghaidh sé i dtaithigheacht na hoibre tiocfaidh sí níos fusa air: nuair bheidh breis den eólas ag teacht chuige de bharr cleachttha", 
        "Caithfead eaga d’fhagháil chun dul i dtaithigheacht na ndaoine, dar ndóigh ní fada ina measc fós me: go dtagad isteach ar a slighthibh is ar a meón", 
        "Táim ag déanamh taithigheachta ar an bhfidil: ag gabháil de sheimint uirthi d’fhonn bheith níos cliste", 
        "Nuair bheidh taithigheacht an tighe agam ní bhead chómh scáinteach: breis choidrimh curtha agam ar an líon tighe", 
        "Is deacair deighilt le haon rud go ndéintear taithigheacht de: cleachtadh; gnáth; béas"]
        },
        {
        word: "taoiseach",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "ceannródaidhe, treóraidhe, flaith, cinnire, ceannurraidh, ceann feadhna, fear cinn riain",
        examples: ["An Taoiseach sluaigh Romail: ceannurruaidh den gcéim is aoirde",
        "Sé taoiseach ár mbaile-ne é: an té go n-iarrtar cómhairle air, go mbítear ag brath air chun na ndaoine do threórughadh",
        "Taoisigh an bhaile mhóir: na daoine gustalacha a bhíos i gceannas de dheóin nó d’aindeóin",
        "Cé hé an taoiseach a bheidh ar an mbád so?: captaen", 
        "Sid é an té is measa a bhí ar an ndream ar fad, sé an taoiseach tána a bhí ortha é: an té a spriog fútha chun achrainn is clampair", 
        "De Bheailéara taoiseach na hÉireann: an ceann; an treóraidhe", 
        "Leanaim ár dtaoiseach: an té atá ag tabhairt eólais dúinn"]
        },
        {
        word: "tlachtmhar",
        grammar: "aidiacht",
        definition: "aoibhinn, deagh-ghnúiseacht, deagh-ghnaoidheach, dathamhail, scléipeamhail",
        examples: ["Cuma bhreágh, thlachtmhar uirthi go deimhin, níl éinne ná go dtabharfadh gean di: dathamhail, taithneamhach", 
        "Duine tlachtmhar atá ann gur mhian leat a choidreamh: deaghghnúiseach; go dtéidheamhófá leis ar fhéachaint air",
        "Phós sé bean thlachtmhar go raibh ádhbhar dá haois tagtha: bean dhathamhail, churanta, lán d’anam is d’anáil",
        "Gheóbhfar amach fós an uile fhocal de, ní gábhadh dhuit bheith chómh tlachtmhar air: foithineamhail, rúnda", 
        "Is tlachtmhar liom suidhe it aice, mar is binn liom choidhche do ghlór: is áthastamhail, sásta"]
    },
    {
        word: "uachtaránacht",
        grammar: "baininscneach - an tríú díchlaonadh",
        definition: "ceannasacht, cómhacht, treóraidheacht, flaitheas, tighearnas, uasacht",
        examples: ["Níor mhaith liom aon uachtaránacht do bheith aige orm, is baoghalach liom go mbeadh sé dian orm: aon chómhacht aige orm", 
        "Is fada riamh go raibh aon uachtaránacht agam-sa sa tigh seo: aon bhuannaidheacht órduighthe do thabhairt ná riar do dhéanamh",
        "“Agus ar na ngairm chuige d’Íosa adubhairt sé, atá a fhios agaibh go bhfuil uachtaránacht aga dtighearnaidhibh ar na cineadhachaibh, agus go bhfuilid na daoine móra tréan ortha” (Matha XX. 25): ceannas iomlán, tighearnas", 
        "Dream leath-fhiadhain dob eadh iad a chuir uachtaránacht i dtarcuisne: ná raibh aon tor aca ar cheannas na dúthaighe", 
        "An “Craoibhín Aoibhinn” atá in uachtaránacht na dúthaighe seo: ina cheann",
        "Tugadh an uachtaránacht d’fhear atá ábalta ar na daoinibh do threórughadh: treóraidheacht; ceannas iomlán"]
    },
    {
	    word: "ubhlúird",
	    grammar: "baininscneach - an dara díchlaonadh",
	    definition: "garrdha, gáirdín nó górt ina bhfásann ubhla",
        examples: []
    },
    {
        word: "urtlach",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "aprún, lán aprúin, mála",
        examples: ["Urtlach scioltán: lán mála a bhíos déanta oireamhnach lé crochadh ar thosach dhuine", "Chaith sé urtlach airgid: cuid mhór"]
    },
    {
        word: "únán",
        grammar: "firinscneach - an chéad díchlaonadh",
        definition: "an cubhar a thagas ar bhainne, uisce (go mbeadh feóil ag beirbhiughadh ann), ar leann dubh, etc.",
        examples: ["Is sia théigheann (is buaine) an t-únán ná an t-anbhruithe: is tairbhighe an bhó ina beathaidh is ag tabhairt bhainne ’ná í do mharbhadh is a cuid anbhruithe d’ól den uair sin", 
        "Bainne fé n-a chuid únáin: ",
        "“Ól siar an piúnt san tá scabhárd ann, féach an t-únán atá air!: an barra geal-bhuidhe lé mianach is suiméar", 
        "Bhinn-se ag obair ghá thuilleamh go cruaidh faid bhíodh daoine eile ag cur únáin ar chodladh!: ag sranntarnaigh"]
    },
    {
        word: "útamálaidhe",
        grammar: "firinscneach - an ceathrú díchlaonadh",
        definition: "ablálaidhe, gíotálaidhe, aindeiseoir, duine neamh-shlachtmhar, neamhchríochnamhail; futarálaidhe",
        examples: ["Seachain as san uaim, a útamálaidhe, ní bheadh aonnidh déanta go deó agat: aindeiseóir chun ruda do dhéanamh", 
        "An t-útamálaidhe bocht, níor cheart obair cháiréiseach mar í do thabhairt in ao’chor do is a luighead a eolais uirthi: duine ná fuil i ndán dul ina feighil mar is ceart",
		"Ó rugadh me ní fheaca aon útamálaidhe mar thu, cathain gheóbhad an t-airgead as do láimh?: duine a chaitheas tamall thar ceart ag ionnramháil lé rud",
		"An mbeadh aon rath go deó ort chun ruda do dhéanamh, a útamálaidhe: ablálaidhe",
		"Nách tú an t-útamálaidhe ná féadfadh leitir do scríobh ina ceart: duine neamh-chruinn, aindeis",
		"Cé déarfaidh gur útamálaidhe me is an méid seo do chur as tóin a chéile?: duine gan dícheall saothair"]
	},

];

function cardClick(){
	let cards = document.querySelectorAll('#item')
	cards.forEach(card=>{
		card.onclick=function(event){
			
			event.stopPropagation()
			console.log('ok')
			this.classList.toggle('item')
			this.classList.toggle('item_hover')
		}
	})
}

function wordGenerator(array, previous='',all=false){
	let container = document.querySelector('#wordContainer')
	container.innerHTML = previous;
	let rest = [...array]
	let first10 = rest.splice(0,10)
	// if(all){
	// 	first5 = array
	// }
	first10.forEach(item=>{
		let htmlString = "";
		let mainKey = item.word;
		htmlString += `<h1 id='word${mainKey}'>` + item.word + "</h1>";
		htmlString += `<button class='show'>+</button>`;
		htmlString += "<p>" + item.grammar + "</p>";
		let lih=''
		let liArray = item.definition.split(';')
		liArray.forEach(i=>{
			lih+=`<p>- ${i}</p>`
		})
		htmlString += `<h3 id='definition${mainKey}'>` + lih + "</h3>";
		let li=''
		item.examples.forEach(example=>{
			if(example.split(':').length<2){
				let [sample,explanation] = example.split('?')
				sample+='? '
				li+=`<li><span>`+sample+'</span><strong><span>'+explanation+'</span></strong></li>'
			}else{
				let [sample,explanation] = example.split(':')
				sample+=': '
				li+=`<li><span>`+sample+'</span><strong><span>'+explanation+'</span></strong></li>'
			}
		})
		htmlString += `<ul id='ul${mainKey}'>${li}</ul>`;
		htmlString+= `<button class="button" id='btn_${mainKey}'>Fill ar an litriú bunaidh</button>`
		htmlString = '<div class="item">'+htmlString+'</div>'
		container.innerHTML += htmlString;
	})
	document.querySelectorAll('.show').forEach(btn=>{
		btn.onclick=function(){
			if(this.innerText=='+'){
				this.innerText='x'
			}else{
				this.innerText='+'
			}
			this.parentNode.classList.toggle('item')
			this.parentNode.classList.toggle('item_hover')
		}
	})
	let showmore = document.querySelector('#showmore')
	let showAll = document.querySelector('#showAll')
	if(array.length){
        showmore.style.display = 'inline';
		showmore.onclick = function(){
			wordGenerator(rest,container.innerHTML)
			let li = document.querySelectorAll('#wordContainer li')
			makeLiClickable(li)
			let elements = document.querySelectorAll('#wordContainer h3,#wordContainer h1')
			makeElementsClickable(elements)
			restoreBtns(wordArray)
		}
	}else{
		showmore.style.display = 'none'
		showAll.style.display = 'none'
	}
}
wordGenerator(wordArray)
function restoreBtns(arr){
	document.querySelectorAll('button[id^="btn_"]').forEach(btn=>{
		btn.onclick = function(){
			let id = this.id.split('_')[1]
			let word = document.querySelector('#word'+id)
			word.innerHTML = id
			word.style.color= 'black';
			let definition = document.querySelector('#definition'+id)
			let lih=''
			let liArray = arr.find(item=>item.word == id).definition.split(';')
			liArray.forEach(i=>{
				lih+=`<p>- ${i}</p>`
			})
				definition.innerHTML = lih;
			definition.style.color= 'black';
			let li=''
			arr.find(item=>item.word == id).examples.forEach(example=>{
				if(example.split(':').length<2){
					let [sample,explanation] = example.split('?')
					sample+='? '
					li+=`<li><span>`+sample+'</span><strong><span>'+explanation+'</span></strong></li>'
				}else{
					let [sample,explanation] = example.split(':')
					sample+=': '
					li+=`<li><span>`+sample+'</span><strong><span>'+explanation+'</span></strong></li>'
				}
				
			})
			document.querySelector('#ul'+id).innerHTML = li
			let lis = document.querySelectorAll('li')
			makeLiClickable(lis)
		}
	})
}
restoreBtns(wordArray)

let elements = document.querySelectorAll('#wordContainer h3,#wordContainer h1')
function makeElementsClickable(elem){
	elem.forEach(i=>
		i.addEventListener('click',function(){
			let value = this.innerText
			let cur = this
			console.log(value)
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {

					let res = JSON.parse(this.responseText);

					let signs = [':',',','.','!','?']
					let innerText = res.reduce((text,i)=>{
						if(signs.includes(i[1])){
							text += i[1]+' '
						}else{
							text += ' '+i[1]
						}
						return text
					},'').replace(/\\n/g,'')
					if (cur.nodeName === 'H3'){
						let newInnerText = ''
						innerText.split('- ').forEach(item=>{
							if(item.length>2){
								newInnerText+=`<p>- ${item}</p>`
							}
						})
						cur.innerHTML = newInnerText
					}else{
						cur.innerHTML = innerText
					}

					cur.style.color = 'green'
				}
			};
			xhttp.open("POST", "https://cadhan.com/api/intergaelic/3.0", true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhttp.setRequestHeader("Accept","application/json");
			xhttp.send("teacs="+encodeURIComponent(value)+"&foinse=ga");
		})
	)
}
makeElementsClickable(elements)

let li = document.querySelectorAll('#wordContainer li')
function makeLiClickable(li){
	li.forEach(i=>
			i.onclick = function(){
				let value = this.innerText
				let cur = this
				var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {

					let res = JSON.parse(this.responseText);
					let signs = [':',',','.','!','?',')']; // characters that add a space after them
					let quotes = ['"','“','”']; // characters that delete a space after them
          let brackets = ['('];
					let innerText = res.reduce((text,i)=>{
						if(signs.includes(i[1])){// if the signs are present, the rule for a space applies to them
							console.log(text.length,i[1],text[text.length-4])
							if(text[text.length-4] == '.'){
								console.log('I work')
								let newText = text.split('')
								let lastLetter = newText.pop()
								newText.pop()
								newText.pop()
								text = newText.join('')
								text+=lastLetter
								// text += `${i[1]}`
							}
							text += i[1]+' '
							
						}else if(quotes.includes(i[1])){
							if(quotes.includes(text[text.length-1])){ // if quotes are present, the following rules apply to them
								text += ` ${i[1]}`// if yes, space is added
							}else if(signs.includes(text[text.length-2])){
								let newText = text.split('')
								newText.pop()
								text = newText.join('')
								text += `${i[1]}`
							}else{
								text += `${i[1]}` //if not, no space added
							}
						}else if(brackets.includes(i[1])){
							text += ` ${i[1]}`
						}else{
							if([...quotes,...brackets].includes(text[text.length-1])){ // if last character is a quote, no space is added before the character
								text += i[1]
							}else{
								text += ' '+i[1] // a space is added
							}
						}
						return text
					},'')
					if(innerText.split(':').length<2){
						let [sample,explanation] = innerText.split('?')
						sample+='? ';
						cur.innerHTML='<span>'+sample+'</span><strong><span>'+explanation.replace('\\n','')+'</span>'
					}else{
						let [sample,explanation] = innerText.split(':')
						sample+=': '
						cur.innerHTML='<span>'+sample+'</span><strong><span>'+explanation.replace('\\n','')+'</span>'
					}

					cur.style.color = 'green'
				}
			};
		xhttp.open("POST", "https://cadhan.com/api/intergaelic/3.0", true);
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhttp.setRequestHeader("Accept","application/json");
		xhttp.send("teacs="+encodeURIComponent(value)+"&foinse=ga");
		}
	)
}
makeLiClickable(li)


let abc = Array.from(
	new Set(
		wordArray.map(i=>
			i.word[0].toUpperCase()
		)
	)
)
let filter = document.querySelector('#filter')
abc.forEach(i=>{
	let button = document.createElement('button')
	button.innerText = i;
	button.onclick = function(){
		let filtered = wordArray.filter(item=>item.word[0].toUpperCase()===i)
		wordGenerator(filtered)
		let li = document.querySelectorAll('#wordContainer li')
		makeLiClickable(li)
		let elements = document.querySelectorAll('#wordContainer h3,#wordContainer h1')
		makeElementsClickable(elements)
		restoreBtns(filtered)
	}
	filter.appendChild(button)
})

document.querySelector('#cuardach').oninput = function(){
	let value = this.value
	let filtered = wordArray.filter(item=>item.word.toUpperCase().includes(value.toUpperCase()))
	wordGenerator(filtered)
	let li = document.querySelectorAll('#wordContainer li')
	makeLiClickable(li)
	let elements = document.querySelectorAll('#wordContainer h3,#wordContainer h1')
	makeElementsClickable(elements)
	restoreBtns(filtered)
}

document.querySelector('#reset').onclick = function(){
	wordGenerator(wordArray)
	let li = document.querySelectorAll('#wordContainer li')
	makeLiClickable(li)
	let elements = document.querySelectorAll('#wordContainer h3,#wordContainer h1')
	makeElementsClickable(elements)
	restoreBtns(wordArray)
}


let gram = Array.from(
	new Set(
		wordArray.map(i=>
			i.grammar.split(' ')[0].replace(',','')
		)
	)
)
let gramFilter = document.querySelector('#gramFilter')
gramFilter.style.display = 'none'
gram.forEach(i=>{
	let button = document.createElement('button')
	button.innerText = i;
	button.onclick = function(){
		let filtered = wordArray.filter(item=>item.grammar.includes(i))
		wordGenerator(filtered)
		let li = document.querySelectorAll('#wordContainer li')
		makeLiClickable(li)
		let elements = document.querySelectorAll('#wordContainer h3,#wordContainer h1')
		makeElementsClickable(elements)
		restoreBtns(filtered)
	}
	gramFilter.appendChild(button)
})


let coverage = document.querySelector('#coverage')
coverage.classList.add('closedbtn')

coverage.onclick = function(){
	if(gramFilter.style.display == 'block'){
		gramFilter.style.display = 'none'
		coverage.innerText = 'SCAG NA FOCAIL'
		coverage.classList.toggle('closedbtn')
		coverage.classList.toggle('openedbtn')
	}else{
		gramFilter.style.display = 'block'
		coverage.innerText = 'FOLAIGH NA CNAIPÍ SEO'
		coverage.classList.toggle('openedbtn')
		coverage.classList.toggle('closedbtn')
	}
}