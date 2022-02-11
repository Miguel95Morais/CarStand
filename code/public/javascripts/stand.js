/*
Add an event listener that runs
  when a user clicks on the map element.
*/
/*map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['standspt'] // replace with your layer name
    });
    if (!features.length) {
        return;
    }
    const feature = features[0];*/

    // Code from the next step will go here.

/*
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
/*const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
        `<h3>${feature.properties.nome}</h3><p>${feature.properties.morada}</p>`
    )
    .addTo(map);
});*/
