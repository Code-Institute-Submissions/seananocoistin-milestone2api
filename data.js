$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$('#example').tooltip(options)

let wordArray = [
{    
word : "ábhacht",
gender : "b.3.",
definition : "caitheamh aimsire, aoibhneas",
examples: ["Chuirfeadh iarthar Chiarraighe ábhacht ar chroidhe aonne lé n-a bhreághthacht: aoibhneas agus éirighe croidhe.", "Ag ábhacht seadh bhí na buachaillidhe nuair goirtigheadh duine aca: ag déanamh seóidh.", "Bímíd bailighthe sa tigh seo gach oidhche ag ábhacht: ag déanamh cuideachtan, grinn a's seóidh.", "Scéal ró-stuama dho seadh é chun ábhachta do dhéanamh de .i. chun magaidh do dhéanamh de."]
},
{ 
  word : "abair",
  gender : "m.ó.",
  definition : "deirim, cuirimís i gcás, admhuighimís, bíodh agus go",
  examples: ["Abair go mbeadh dhá mhíle púnt agat, an gceannófá gluaisteán?: cuir i gcás go mbeadh etc.", "Ná stad fós, abair leat: labhair a thuilleadh.", "Cad thug sé ar an gcoin? – ní fheadar, fiche púnt abair: b’fhéidir.", "“Is maith an fear tú, dar leat” – “abair é!”: bí lándeimhnightheach de.", "Nuair castar daoine ar a chéile deir duine dhíobh – abair, nó abraidh, a fheara, a mhná, a gharsúna, a ghearrchailidhe: innis nó innsidh do (bhur) scéal.", "“Tá ár seanchara Tomás caillte” – “níl? ná habair é”: is deacair é do chreideamhaint.", "B’fhearr liom lúidín coise Sheáin Mhistéal ’ná corp Dhómhnaill Uí Chonaill ar fad” – “déarfainn é”: d’aontóchainn leat go fonnmhar.", "“Ní abrann galar fada bréag”: tagann an bás dá dhruim.", "“Deirim go niomcharóchainn dathad cloch ar mo dhrom” – “deireann tusa rud”: ní mór an fhuaimeant led chuid cainnte.", "Abair Scéal Mhadra na n-Ocht gCos dúinn: innis é; aithris é."]
},
{ 
  word : "acfuinn",
  gender : "b.2.",
  definition : "maoin, cómhacht, ionmhas, flúirse, neart, buaidh fuilngtheachta, feisteas",
  examples: ["Is mó acfuinn capaill ’ná acfuinn asail: neart.", "As acfuinn a chéile do dhein muinntir an bhaile an bóthar san: lé cabhair a chéile.", "As m’acfuinn féin do rugas an bórd aníos an staighre: gan aonne bheith ag cabhrughadh liom.", "Do thug gach aonne a shíntiús dréir a acfuinne: dréir mar bhí gustal nó neart aige air.", "Ní raibh sé ar m’acfuinn pingin do thabhairt don mbochtán direóil: ní raibh sé agam lé tabhairt do.", "Dá mb’acfuinn dom iasacht mo rothair do thabhairt duit do dhéanfainn sin: dá bhféadfainn é.", "Níl aon acfuinn ar bháistigh aige, tá sé ró-leice: níl fulang aige uirthe.", "An bhfuil acfuinn fuachta ionat?: an féidir leat fuacht d’ fhulang?", "Láidir go maith as a ghéagaibh do bhí sé ach ní raibh aon acfuinn cabhlach ann: tímcheall a chuirp ní raibh neart dá réir ann.", "Déarfainn go bhfuil acfuinn i leathar na mbróg san: buanas agus fulang.", "“Is fada sheasaimh sé an bhreóidhteacht” – “ní h-iongadh san, cá ngeobhadh a acfuinn?”: a neart agus a chómhacht fuilngthe ná caithfidís iad féin do chur in iúil.","Dá bhfaighinn acfuinn ón Riaghaltas do dhéanfainn talamh mín den ngairbhthean san: dá bhfaighinn úirlisidhe oibre a’s airgead.", "Lé haois níl acfuinn ag fanacht ionam: neart, luadar a’s fulang.", "Tháinig taom obann air nár fhág aon acfuinn n-a ghéagaibh: aon lúth ná luadar.", "Ná bí ag cainnt ar acfuinn na dtonn, ná feicir gur scoilteadar an chloch dhubh: cómhacht, luighe.", "Níor chaith an slabhradh ar feadh na mbliadhan lé n-a acfuinn: buanas.", "Bíodh acfuinn id bhuille nó ní bhrisfir an charraig: fuinneamh agus cómhacht.", "Speach go raibh acfuinn innte do chuir an chaid leathchéad slat: ceól a’s fuinneamh.", "Connus leagadh na crainn seo go léir? lé hacfuinn ghaoithe: neart a’s cómhacht a’s fulaingtheacht.", "Ná bíodh aon dochma ort teacht linn chun ólacháin; tá acfuinn airgid agamsa: tarang ar airgead.", "Níl mórán acfuinne i bhfaobhar na scine sin: faobhar seadh é ná fuil aon tseasamh fada ann.", "Bímis ag gluaiseacht chun iascaigh anois, tá an acfuinn ar fad againn: an feisteas, gach nidh atá ag teastáil uainn.", "Níl faic is fearr ’ná acfuinn sláinte: sláinte mhaith.", "Cuir ding leis an gcúilín sin agus déanfaidh sé breis acfuinne air: neartóchaidh sé é.", "Ní haon acfuinn dom do chabhair: aon mhaitheas.", "Biadh gan acfuinn do dhuine seadh tornapaidhe: gan scabhárd.", "Ní thabharfadh an talamh san cruithneacht níl an acfuinn ann: an saidhbhreas nó an mianach ceart.", "Cuir acfuinn ionat féin: luathuigh, brostuigh.", "Acfuinn id iarracht!: neartuigh t’iarracht.", "M’acfuinn thu!: taithnigheann do ghníomh liom.",]
}
];