var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Deuteperhabitant0 = new ol.format.GeoJSON();
var features_Deuteperhabitant0 = format_Deuteperhabitant0.readFeatures(json_Deuteperhabitant0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deuteperhabitant0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Deuteperhabitant0.addFeatures(features_Deuteperhabitant0);var lyr_Deuteperhabitant0 = new ol.layer.Vector({
                source:jsonSource_Deuteperhabitant0, 
                style: style_Deuteperhabitant0,
                title: 'Deute per habitant (€)<br />\
        <img src="styles/legend/Deuteperhabitant0_0.png" />  0 - 100 <br />\
        <img src="styles/legend/Deuteperhabitant0_1.png" />  100 - 300 <br />\
        <img src="styles/legend/Deuteperhabitant0_2.png" />  300 - 600 <br />\
        <img src="styles/legend/Deuteperhabitant0_3.png" />  600 - 1.200 <br />\
        <img src="styles/legend/Deuteperhabitant0_4.png" />  1.200 - 2.500 <br />\
        <img src="styles/legend/Deuteperhabitant0_5.png" /> >2.500<br />'
            });

lyr_Deuteperhabitant0.setVisible(true);
var layersList = [baseLayer,lyr_Deuteperhabitant0];
lyr_Deuteperhabitant0.set('fieldAliases', {'MUNICIPI': 'MUNICIPI', 'COMARCA': 'COMARCA', 'PROVINCIA': 'PROVINCIA', 'NOM_MUNI': 'NOM_MUNI', 'NOMN_MUNI': 'NOMN_MUNI', 'NOMG_MUNI': 'NOMG_MUNI', 'CAP_MUNI': 'CAP_MUNI', 'CAPN_MUNI': 'CAPN_MUNI', 'CAPG_MUNI': 'CAPG_MUNI', 'SUP_MUNI': 'SUP_MUNI', 'ORSUP_MUNI': 'ORSUP_MUNI', 'Codigo': 'Codigo', 'Provinci_1': 'Provinci_1', 'Codigo_Mun': 'Codigo_Mun', 'Municipi': 'Municipi', 'Habitants': 'Habitants', 'Deute (€)': 'Deute (€)', 'Deute per habitant (€)': 'Deute per habitant (€)', });
lyr_Deuteperhabitant0.set('fieldImages', {'MUNICIPI': 'Hidden', 'COMARCA': 'Hidden', 'PROVINCIA': 'Hidden', 'NOM_MUNI': 'Hidden', 'NOMN_MUNI': 'Hidden', 'NOMG_MUNI': 'Hidden', 'CAP_MUNI': 'Hidden', 'CAPN_MUNI': 'Hidden', 'CAPG_MUNI': 'Hidden', 'SUP_MUNI': 'Hidden', 'ORSUP_MUNI': 'Hidden', 'Codigo': 'Hidden', 'Provinci_1': 'Hidden', 'Codigo_Mun': 'Hidden', 'Municipi': 'TextEdit', 'Habitants': 'TextEdit', 'Deute (€)': 'Hidden', 'Deute per habitant (€)': 'TextEdit', });
lyr_Deuteperhabitant0.set('fieldLabels', {'Municipi': 'header label', 'Habitants': 'header label', 'Deute per habitant (€)': 'header label', });
lyr_Deuteperhabitant0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});