
var map = L.map('Map', {
  center: [51.0447, -114.0719],
  zoom:11
});

var token = 'pk.eyJ1Ijoic2FpdmVlcjE5OTYiLCJhIjoiY2ttNXlsb2gyMGl4ZzJvcXNremMzYThuciJ9.gHCefOrtQl5IyKsre0lKKw';
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/saiveer1996/ckm5zfxxf4e3717r2u7yovl2z/tiles/{z}/{x}/{y}?access_token=' + token, {
  tileSize:512,
  zoomOffset:-1,
  attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">StreetMap</a>'
});

var openstreet=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  tileSize:512,
  zoomOffset:-1,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">StreetMap</a> contributors'
})

mapbox.addTo(map);

L.control.layers({
  "Mapbox":mapbox,
  "OpenStreetMap":openstreet,
}, null, {
  collapsed: false
}).addTo(map);
