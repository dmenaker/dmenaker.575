
var mymap = L.map('mapid').setView([51.505, -0.09], 13);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery   <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dmenaker/ckf1xkvso09or18mxbq0my1ui',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG1lbmFrZXIiLCJhIjoiY2tmMXd5d2l5MTE5djJzbWtkam1jYTJhdCJ9.bJDMMfX7PQElKly7CNByRQ'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
 
//var circle = L.circle([51.508, -0.11], {
//    color: 'red',
//    fillColor: '#f03',
//    fillOpacity: 0.5,
//    radius: 500
//}).addTo(mymap);

//var polygon = L.polygon([
//    [51.509, -0.08],
//    [51.503, -0.06],
//    [51.51, -0.047]
//]).addTo(mymap);

marker.bindPopup("<b>Hello World!</b><br>I am a popup.").openPopup();
//circle.bindPopup("I am a circle");
//polygon.bindPopup("I am a polygon");

var popup = L.popup()
    
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);
