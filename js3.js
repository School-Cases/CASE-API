



let url = "data.json";
let lat;
let long;
let distance;
let size;
let page = 1;
mapboxgl.accessToken =
    'pk.eyJ1Ijoib2xvZmFrc2JlcmciLCJhIjoiY2ttNHV6MDJmMDhiNDJxbjY0d2JoOG9leiJ9.MP0cud4HBGHiOpmXDuD5pg';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-97.9889444178015, 39.73096008064579],
    zoom: 2.7
});

map.on('click', function (e) {
    console.log(e.lngLat.lng, e.lngLat.lat);
    lat = e.lngLat.lat;
    long = e.lngLat.lng;
});