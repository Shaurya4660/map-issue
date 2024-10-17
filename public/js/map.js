mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // add map style
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom

});

const marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(listing.geometry.coordinates)//listing.geometry/.coordinates
  .setPopup(new mapboxgl.Popup({ offset: 25 })
    // .setLngLat(e.lngLat)
    .setHTML(
     `<h4>${listing.location}</h4><p>Exact Location will be provided after booking</p>`
    )

  )
  .addTo(map);