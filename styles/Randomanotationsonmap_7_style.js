var size = 0;
var placement = 'point';

var style_Randomanotationsonmap_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("nome") !== null) {
        labelText = feature.get("nome").split('').join(' '); 
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(125,139,143,1.0)', 
            lineDash: null, 
            lineCap: 'square', 
            lineJoin: 'bevel', 
            width: 0.988
        }),
        text: new ol.style.Text({
            text: labelText,
            font: 'expanded 13px "Open Sans", sans-serif',
            placement: 'line',
			textBaseline: 'bottom',
			offsetY: -1,
			maxAngle: 0.2, 
            overflow: true,
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 1.0)'
            }),
        })
    })];

    return style;
};
