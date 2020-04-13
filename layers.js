var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ifasg_csv_lake_20_use_1 = new ol.format.GeoJSON();
var features_ifasg_csv_lake_20_use_1 = format_ifasg_csv_lake_20_use_1.readFeatures(json_ifasg_csv_lake_20_use_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ifasg_csv_lake_20_use_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ifasg_csv_lake_20_use_1.addFeatures(features_ifasg_csv_lake_20_use_1);
var lyr_ifasg_csv_lake_20_use_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ifasg_csv_lake_20_use_1, 
                style: style_ifasg_csv_lake_20_use_1,
                interactive: true,
                title: '<img src="styles/legend/ifasg_csv_lake_20_use_1.png" /> ifasg_csv_lake_20_use'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ifasg_csv_lake_20_use_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ifasg_csv_lake_20_use_1];
lyr_ifasg_csv_lake_20_use_1.set('fieldAliases', {'PID': 'PID', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'LOCAL NAME': 'LOCAL NAME', 'OWNER': 'OWNER', 'AREA': 'AREA', 'LOCATION': 'LOCATION', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'DLID': 'DLID', 'TYPE': 'TYPE', 'LAKE AREA': 'LAKE AREA', 'WTCL': 'WTCL', 'ELEVATION (msl)': 'ELEVATION (msl)', });
lyr_ifasg_csv_lake_20_use_1.set('fieldImages', {'PID': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LOCAL NAME': 'TextEdit', 'OWNER': 'TextEdit', 'AREA': 'TextEdit', 'LOCATION': 'TextEdit', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'DLID': 'TextEdit', 'TYPE': 'Range', 'LAKE AREA': 'TextEdit', 'WTCL': 'TextEdit', 'ELEVATION (msl)': 'TextEdit', });
lyr_ifasg_csv_lake_20_use_1.set('fieldLabels', {'PID': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'LOCAL NAME': 'inline label', 'OWNER': 'inline label', 'AREA': 'inline label', 'LOCATION': 'inline label', 'STATE': 'inline label', 'DISTRICT': 'inline label', 'DLID': 'inline label', 'TYPE': 'inline label', 'LAKE AREA': 'inline label', 'WTCL': 'inline label', 'ELEVATION (msl)': 'inline label', });
lyr_ifasg_csv_lake_20_use_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});