/* eslint-disable */
import '@babel/polyfill';

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGV0ZXJoeXBlcmF1bmciLCJhIjoiY2x3MzlkdXFnMHN0NTJrcGh0YWFwd2h1NiJ9.udsNCgmusmPkfxbWmyoBbg';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/peterhyperaung/clw3aimdl02ig01qv2i071dva',
    scrollZoom: false
    //   center: [locations]
    //   zoom: 5
    //   interactive: false
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

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 200,
      left: 100,
      right: 100
    }
  });
};
