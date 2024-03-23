var wms_layers = [];

var format_latitudelongitudetype_of_labor_0 = new ol.format.GeoJSON();
var features_latitudelongitudetype_of_labor_0 = format_latitudelongitudetype_of_labor_0.readFeatures(json_latitudelongitudetype_of_labor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_latitudelongitudetype_of_labor_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_latitudelongitudetype_of_labor_0.addFeatures(features_latitudelongitudetype_of_labor_0);
var lyr_latitudelongitudetype_of_labor_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_latitudelongitudetype_of_labor_0, 
                style: style_latitudelongitudetype_of_labor_0,
                popuplayertitle: "latitude,longitude,type_of_labor",
                interactive: true,
                title: '<img src="styles/legend/latitudelongitudetype_of_labor_0.png" /> latitude,longitude,type_of_labor'
            });
var format_maharashtra_highway_1 = new ol.format.GeoJSON();
var features_maharashtra_highway_1 = format_maharashtra_highway_1.readFeatures(json_maharashtra_highway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maharashtra_highway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maharashtra_highway_1.addFeatures(features_maharashtra_highway_1);
var lyr_maharashtra_highway_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_maharashtra_highway_1, 
                style: style_maharashtra_highway_1,
                popuplayertitle: "maharashtra_highway",
                interactive: true,
                title: '<img src="styles/legend/maharashtra_highway_1.png" /> maharashtra_highway'
            });
var format_latitudelongitudetype_of_labor_2 = new ol.format.GeoJSON();
var features_latitudelongitudetype_of_labor_2 = format_latitudelongitudetype_of_labor_2.readFeatures(json_latitudelongitudetype_of_labor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_latitudelongitudetype_of_labor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_latitudelongitudetype_of_labor_2.addFeatures(features_latitudelongitudetype_of_labor_2);
var lyr_latitudelongitudetype_of_labor_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_latitudelongitudetype_of_labor_2, 
                style: style_latitudelongitudetype_of_labor_2,
                popuplayertitle: "latitude,longitude,type_of_labor",
                interactive: true,
                title: '<img src="styles/legend/latitudelongitudetype_of_labor_2.png" /> latitude,longitude,type_of_labor'
            });
var format_maharashtra_natural_3 = new ol.format.GeoJSON();
var features_maharashtra_natural_3 = format_maharashtra_natural_3.readFeatures(json_maharashtra_natural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maharashtra_natural_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maharashtra_natural_3.addFeatures(features_maharashtra_natural_3);
var lyr_maharashtra_natural_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_maharashtra_natural_3, 
                style: style_maharashtra_natural_3,
                popuplayertitle: "maharashtra_natural",
                interactive: false,
                title: '<img src="styles/legend/maharashtra_natural_3.png" /> maharashtra_natural'
            });

lyr_latitudelongitudetype_of_labor_0.setVisible(true);lyr_maharashtra_highway_1.setVisible(true);lyr_latitudelongitudetype_of_labor_2.setVisible(true);lyr_maharashtra_natural_3.setVisible(false);
var layersList = [lyr_latitudelongitudetype_of_labor_0,lyr_maharashtra_highway_1,lyr_latitudelongitudetype_of_labor_2,lyr_maharashtra_natural_3];
lyr_latitudelongitudetype_of_labor_0.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'type_of_labor': 'type_of_labor', 'age_of_child': 'age_of_child', 'date_of_observation': 'date_of_observation', 'notes': 'notes', });
lyr_maharashtra_highway_1.set('fieldAliases', {'TYPE': 'TYPE', 'NAME': 'NAME', 'ONEWAY': 'ONEWAY', 'LANES': 'LANES', });
lyr_latitudelongitudetype_of_labor_2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'type_of_labor': 'type_of_labor', 'age_of_child': 'age_of_child', 'date_of_observation': 'date_of_observation', 'notes': 'notes', });
lyr_maharashtra_natural_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', });
lyr_latitudelongitudetype_of_labor_0.set('fieldImages', {'latitude': '', 'longitude': '', 'type_of_labor': '', 'age_of_child': '', 'date_of_observation': '', 'notes': '', });
lyr_maharashtra_highway_1.set('fieldImages', {'TYPE': '', 'NAME': '', 'ONEWAY': '', 'LANES': '', });
lyr_latitudelongitudetype_of_labor_2.set('fieldImages', {'latitude': '', 'longitude': '', 'type_of_labor': '', 'age_of_child': '', 'date_of_observation': '', 'notes': '', });
lyr_maharashtra_natural_3.set('fieldImages', {'NAME': '', 'TYPE': '', });
lyr_latitudelongitudetype_of_labor_0.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'type_of_labor': 'no label', 'age_of_child': 'no label', 'date_of_observation': 'no label', 'notes': 'no label', });
lyr_maharashtra_highway_1.set('fieldLabels', {'TYPE': 'no label', 'NAME': 'no label', 'ONEWAY': 'no label', 'LANES': 'no label', });
lyr_latitudelongitudetype_of_labor_2.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'type_of_labor': 'no label', 'age_of_child': 'no label', 'date_of_observation': 'no label', 'notes': 'no label', });
lyr_maharashtra_natural_3.set('fieldLabels', {'NAME': 'no label', 'TYPE': 'no label', });
lyr_maharashtra_natural_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});