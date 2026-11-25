ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-65.961169, -28.400871, -45.969557, -18.670334]);
var wms_layers = [];

var lyr_Base_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa Base<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Base_0.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-81.700000, -36.833333, -36.150000, -10.633333]
        })
    });
var format_testsearch_1 = new ol.format.GeoJSON();
var features_testsearch_1 = format_testsearch_1.readFeatures(json_testsearch_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_testsearch_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_testsearch_1.addFeatures(features_testsearch_1);
var lyr_testsearch_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_testsearch_1, 
                style: style_testsearch_1,
                popuplayertitle: 'testsearch',
                interactive: true,
                title: ''
            });
var format_RotasMonoeiras_2 = new ol.format.GeoJSON();
var features_RotasMonoeiras_2 = format_RotasMonoeiras_2.readFeatures(json_RotasMonoeiras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RotasMonoeiras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotasMonoeiras_2.addFeatures(features_RotasMonoeiras_2);
var lyr_RotasMonoeiras_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RotasMonoeiras_2, 
                style: style_RotasMonoeiras_2,
                popuplayertitle: 'Rotas Monçoeiras',
                interactive: true,
                title: '<img src="styles/legend/RotasMonoeiras_2.png" /> Rotas Monçoeiras'
            });
var format_PontosdeApoio_3 = new ol.format.GeoJSON();
var features_PontosdeApoio_3 = format_PontosdeApoio_3.readFeatures(json_PontosdeApoio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PontosdeApoio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeApoio_3.addFeatures(features_PontosdeApoio_3);
var lyr_PontosdeApoio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosdeApoio_3, 
                style: style_PontosdeApoio_3,
                popuplayertitle: 'Pontos de Apoio',
                interactive: true,
                title: '<img src="styles/legend/PontosdeApoio_3.png" /> Pontos de Apoio Espanhóis'
            });
var format_Cidades_4 = new ol.format.GeoJSON();
var features_Cidades_4 = format_Cidades_4.readFeatures(json_Cidades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cidades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidades_4.addFeatures(features_Cidades_4);
var lyr_Cidades_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidades_4, 
                style: style_Cidades_4,
                popuplayertitle: 'Cidades ',
                interactive: true,
                title: '<img src="styles/legend/Cidades_4.png" /> Vilas Espanholas'
            });
var format_Povoados_5 = new ol.format.GeoJSON();
var features_Povoados_5 = format_Povoados_5.readFeatures(json_Povoados_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Povoados_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Povoados_5.addFeatures(features_Povoados_5);
var lyr_Povoados_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Povoados_5, 
                style: style_Povoados_5,
                popuplayertitle: 'Povoados',
                interactive: true,
                title: '<img src="styles/legend/Povoados_5.png" /> Povoados Seculares (Paraguai)'
            });
var format_MissesFranciscanas_6 = new ol.format.GeoJSON();
var features_MissesFranciscanas_6 = format_MissesFranciscanas_6.readFeatures(json_MissesFranciscanas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MissesFranciscanas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MissesFranciscanas_6.addFeatures(features_MissesFranciscanas_6);
var lyr_MissesFranciscanas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MissesFranciscanas_6, 
                style: style_MissesFranciscanas_6,
                popuplayertitle: 'Missões Franciscanas',
                interactive: true,
                title: '<img src="styles/legend/MissesFranciscanas_6.png" /> Missões Franciscanas'
            });
var format_Randomanotationsonmap_7 = new ol.format.GeoJSON();
var features_Randomanotationsonmap_7 = format_Randomanotationsonmap_7.readFeatures(json_Randomanotationsonmap_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Randomanotationsonmap_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randomanotationsonmap_7.addFeatures(features_Randomanotationsonmap_7);
var lyr_Randomanotationsonmap_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randomanotationsonmap_7, 
                style: style_Randomanotationsonmap_7,
                popuplayertitle: 'Random anotations on map',
                interactive: true,
                title: '<img src="styles/legend/Randomanotationsonmap_7.png" /> Rios'
            });
var format_pontosdeapoiopt_8 = new ol.format.GeoJSON();
var features_pontosdeapoiopt_8 = format_pontosdeapoiopt_8.readFeatures(json_pontosdeapoiopt_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pontosdeapoiopt_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontosdeapoiopt_8.addFeatures(features_pontosdeapoiopt_8);
var lyr_pontosdeapoiopt_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pontosdeapoiopt_8, 
                style: style_pontosdeapoiopt_8,
                popuplayertitle: 'pontos de apoio pt',
                interactive: true,
                title: '<img src="styles/legend/pontosdeapoiopt_8.png" /> Pontos de Apoio Portugueses'
            });
var format_cidadesportuguesas_9 = new ol.format.GeoJSON();
var features_cidadesportuguesas_9 = format_cidadesportuguesas_9.readFeatures(json_cidadesportuguesas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cidadesportuguesas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cidadesportuguesas_9.addFeatures(features_cidadesportuguesas_9);
var lyr_cidadesportuguesas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cidadesportuguesas_9, 
                style: style_cidadesportuguesas_9,
                popuplayertitle: 'cidades portuguesas',
                interactive: true,
                title: '<img src="styles/legend/cidadesportuguesas_9.png" /> Vilas Portuguesas'
            });
var format_povoadosportugueses_10 = new ol.format.GeoJSON();
var features_povoadosportugueses_10 = format_povoadosportugueses_10.readFeatures(json_povoadosportugueses_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_povoadosportugueses_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_povoadosportugueses_10.addFeatures(features_povoadosportugueses_10);
var lyr_povoadosportugueses_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_povoadosportugueses_10, 
                style: style_povoadosportugueses_10,
                popuplayertitle: 'povoados portugueses',
                interactive: true,
                title: '<img src="styles/legend/povoadosportugueses_10.png" /> Povoados Portugueses'
            });
var format_FortificaesPortuguesas_11 = new ol.format.GeoJSON();
var features_FortificaesPortuguesas_11 = format_FortificaesPortuguesas_11.readFeatures(json_FortificaesPortuguesas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FortificaesPortuguesas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FortificaesPortuguesas_11.addFeatures(features_FortificaesPortuguesas_11);
var lyr_FortificaesPortuguesas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FortificaesPortuguesas_11, 
                style: style_FortificaesPortuguesas_11,
                popuplayertitle: 'Fortificações Portuguesas',
                interactive: true,
                title: '<img src="styles/legend/FortificaesPortuguesas_11.png" /> Fortificações Portuguesas'
            });
var format_MissesJesutas_12 = new ol.format.GeoJSON();
var features_MissesJesutas_12 = format_MissesJesutas_12.readFeatures(json_MissesJesutas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MissesJesutas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MissesJesutas_12.addFeatures(features_MissesJesutas_12);
var lyr_MissesJesutas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MissesJesutas_12, 
                style: style_MissesJesutas_12,
                popuplayertitle: 'Missões Jesuítas',
                interactive: true,
                title: '<img src="styles/legend/MissesJesutas_12.png" /> Missões Jesuítas'
            });
var format_razias_13 = new ol.format.GeoJSON();
var features_razias_13 = format_razias_13.readFeatures(json_razias_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_razias_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_razias_13.addFeatures(features_razias_13);
var lyr_razias_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_razias_13, 
                style: style_razias_13,
                popuplayertitle: 'razias',
                interactive: true,
                title: '<img src="styles/legend/razias_13.png" /> Razias e Ataques Guaicurú'
            });
var format_Passoseoutros_14 = new ol.format.GeoJSON();
var features_Passoseoutros_14 = format_Passoseoutros_14.readFeatures(json_Passoseoutros_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passoseoutros_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passoseoutros_14.addFeatures(features_Passoseoutros_14);
var lyr_Passoseoutros_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Passoseoutros_14, 
                style: style_Passoseoutros_14,
                popuplayertitle: 'Passos e outros',
                interactive: true,
                title: '<img src="styles/legend/Passoseoutros_14.png" /> Passos e Vaus'
            });

lyr_Base_0.setVisible(true);lyr_testsearch_1.setVisible(false);lyr_RotasMonoeiras_2.setVisible(true);lyr_PontosdeApoio_3.setVisible(true);lyr_Cidades_4.setVisible(true);lyr_Povoados_5.setVisible(true);lyr_MissesFranciscanas_6.setVisible(true);lyr_Randomanotationsonmap_7.setVisible(true);lyr_pontosdeapoiopt_8.setVisible(true);lyr_cidadesportuguesas_9.setVisible(true);lyr_povoadosportugueses_10.setVisible(true);lyr_FortificaesPortuguesas_11.setVisible(true);lyr_MissesJesutas_12.setVisible(true);lyr_razias_13.setVisible(true);lyr_Passoseoutros_14.setVisible(false);
var layersList = [lyr_Base_0,lyr_testsearch_1,lyr_RotasMonoeiras_2,lyr_PontosdeApoio_3,lyr_Cidades_4,lyr_Povoados_5,lyr_MissesFranciscanas_6,lyr_Randomanotationsonmap_7,lyr_pontosdeapoiopt_8,lyr_cidadesportuguesas_9,lyr_povoadosportugueses_10,lyr_FortificaesPortuguesas_11,lyr_MissesJesutas_12,lyr_razias_13,lyr_Passoseoutros_14];
lyr_testsearch_1.set('fieldAliases', {'Name': 'Name', });
lyr_RotasMonoeiras_2.set('fieldAliases', {'id': 'id', });
lyr_PontosdeApoio_3.set('fieldAliases', {'Nome': 'Nome', 'Fundador': 'Fundador', 'Notas': 'Notas', 'começo': 'começo', 'fim': 'fim', });
lyr_Cidades_4.set('fieldAliases', {'Nome': 'Nome', 'começo': 'começo', 'fim': 'fim', 'Fundador': 'Fundador', 'Notas': 'Notas', });
lyr_Povoados_5.set('fieldAliases', {'nome': 'nome', 'começo': 'começo', 'fim': 'fim', 'Fonte': 'Fonte'});
lyr_MissesFranciscanas_6.set('fieldAliases', {'nome': 'nome', 'começo': 'começo', 'fim': 'fim', 'Fontes': 'Fontes', });
lyr_Randomanotationsonmap_7.set('fieldAliases', {'nome': 'nome', });
lyr_pontosdeapoiopt_8.set('fieldAliases', {'nome': 'nome', 'fonte': 'fonte', 'começo': 'começo', 'fim': 'fim', });
lyr_cidadesportuguesas_9.set('fieldAliases', {'nome': 'nome', 'fonte': 'fonte', 'começo': 'começo', 'fim': 'fim', });
lyr_povoadosportugueses_10.set('fieldAliases', {'nome': 'nome', 'fonte': 'fonte', 'começo': 'começo', 'fim': 'fim', });
lyr_FortificaesPortuguesas_11.set('fieldAliases', {'Nome': 'Nome', 'Fonte': 'Fonte', 'começo': 'começo', 'fim': 'fim', 'a': 'a', 'b': 'b', });
lyr_MissesJesutas_12.set('fieldAliases', {'nome': 'nome', 'começo': 'começo', 'fim': 'fim', 'fonte': 'fonte', });
lyr_razias_13.set('fieldAliases', {'ano': 'ano', 'fonte': 'fonte', 'descrição': 'descrição', });
lyr_Passoseoutros_14.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Fonte': 'Fonte', });
lyr_testsearch_1.set('fieldImages', {'Name': '', });
lyr_RotasMonoeiras_2.set('fieldImages', {'id': 'TextEdit', });
lyr_PontosdeApoio_3.set('fieldImages', {'Nome': 'TextEdit', 'Fundador': 'TextEdit', 'Notas': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', });
lyr_Cidades_4.set('fieldImages', {'Nome': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', 'Fundador': 'TextEdit', 'Notas': 'TextEdit', });
lyr_Povoados_5.set('fieldImages', {'nome': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', });
lyr_MissesFranciscanas_6.set('fieldImages', {'nome': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', 'Fontes': 'TextEdit', });
lyr_Randomanotationsonmap_7.set('fieldImages', {'nome': 'TextEdit', });
lyr_pontosdeapoiopt_8.set('fieldImages', {'nome': 'TextEdit', 'fonte': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', });
lyr_cidadesportuguesas_9.set('fieldImages', {'nome': 'TextEdit', 'fonte': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', });
lyr_povoadosportugueses_10.set('fieldImages', {'nome': 'TextEdit', 'fonte': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', });
lyr_FortificaesPortuguesas_11.set('fieldImages', {'Nome': 'TextEdit', 'Fonte': 'TextEdit', 'começo': 'TextEdit', 'fim': 'TextEdit', 'a': 'DateTime', 'b': 'DateTime', });
lyr_MissesJesutas_12.set('fieldImages', {'nome': 'TextEdit', 'começo': 'DateTime', 'fim': 'DateTime', 'fonte': 'TextEdit', });
lyr_razias_13.set('fieldImages', {'ano': 'DateTime', 'fonte': 'TextEdit', 'descrição': 'TextEdit', });
lyr_Passoseoutros_14.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });

lyr_testsearch_1.set('fieldLabels', {'Name': 'no label', });
lyr_RotasMonoeiras_2.set('fieldLabels', {'id': 'no label', });
lyr_PontosdeApoio_3.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Fundador': 'inline label - visible with data', 'Notas': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', });
lyr_Cidades_4.set('fieldLabels', {'Nome': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', 'Fundador': 'inline label - visible with data', 'Notas': 'inline label - visible with data', });
lyr_Povoados_5.set('fieldLabels', {'nome': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', 'Fonte': 'inline label - visible with data'});
lyr_MissesFranciscanas_6.set('fieldLabels', {'nome': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', 'Fontes': 'inline label - visible with data', });
lyr_Randomanotationsonmap_7.set('fieldLabels', {'nome': 'inline label - visible with data', });
lyr_pontosdeapoiopt_8.set('fieldLabels', {'nome': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', });
lyr_cidadesportuguesas_9.set('fieldLabels', {'nome': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', });
lyr_povoadosportugueses_10.set('fieldLabels', {'nome': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', });
lyr_FortificaesPortuguesas_11.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', 'a': 'inline label - visible with data', 'b': 'inline label - visible with data', });
lyr_MissesJesutas_12.set('fieldLabels', {'nome': 'inline label - visible with data', 'começo': 'inline label - visible with data', 'fim': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_razias_13.set('fieldLabels', {'ano': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'descrição': 'inline label - visible with data', });
lyr_Passoseoutros_14.set('fieldLabels', {'id': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data'});
lyr_Passoseoutros_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});