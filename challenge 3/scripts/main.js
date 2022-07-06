// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoianVsbHlhcyIsImEiOiJjbDU4Mzk5cG8wZ3V4M2R1a3BzN3p3N3lvIn0.nZ1jceZkUYDgRT9qKTIDDg';

// building map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [4.322840, 52.067101], // starting position hhs
  zoom: 13.3
});

const start = [4.322840, 52.067101]; //hhs coordinates

map.on('click', (event) => {
  const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };
  if (map.getLayer('end')) {
    map.getSource('end').setData(end);
  } else {
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }
}
