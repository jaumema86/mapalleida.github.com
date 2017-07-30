var size = 0;
var ranges_Deuteperhabitant0 = [[0.000000, 100.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[100.000000, 300.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(209,227,243,1.0)'})
    })]],
[300.000000, 600.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(154,200,225,1.0)'})
    })]],
[600.000000, 1200.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(82,157,204,1.0)'})
    })]],
[1200.000000, 2500.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(28,108,177,1.0)'})
    })]],
[2500.000000, 3879.150000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_Deuteperhabitant0={}
var style_Deuteperhabitant0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Deute per habitant (€)");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = ranges_Deuteperhabitant0[0][2];
    for (i = 0; i < ranges_Deuteperhabitant0.length; i++){
        var range = ranges_Deuteperhabitant0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_Deuteperhabitant0[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Deuteperhabitant0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Deuteperhabitant0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};