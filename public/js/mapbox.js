/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2VjaXBla2UiLCJhIjoiY2syYW85bGZ3MzFkZzNvbjBtcTk5OWVlNCJ9.Tzy_YcVwHk54sCRbft0VCw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/cecipeke/ck2aogkv2011k1co3519oxbjg',
  scrollZoom: false
  /*
  center: [-118.113491, 34.111745],
  zoom: 10,
  interactive: false
  */
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  const el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});
