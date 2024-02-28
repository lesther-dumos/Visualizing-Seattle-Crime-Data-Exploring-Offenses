// assign the access token
mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';

// declare the map object
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 10.6, // starting zoom
    minZoom: 1,
    center: [-122.25, 47.6002614] // starting center
});

async function geojsonFetch() {
    // Fetch the GeoJSON data
    let response = await fetch('assets/neighbor_data.json');
    let crimeData = await response.json();

    map.on('load', function loadingData() {
        // Add layer
        // Add legend
        map.addSource('crimeData', {
            type: 'geojson',
            data: crimeData
        });

        map.addLayer({
            'id': 'crimeData-layer',
            'type': 'fill',  // Change type to 'fill'
            'source': 'crimeData',
            'paint': {
                'fill-color': [
                    'step',
                    ['get', 'CrimeCount'],
                    '#FFEDA0',
                    0,
                    '#FED976',
                    599,
                    '#FEB24C',
                    1199,
                    '#FD8D3C',
                    1799,
                    '#FC4E2A',
                    2399,
                    '#E31A1C',
                    2999,
                    '#BD0026'
                ],
                'fill-opacity': 0.7,
                'fill-outline-color': '#BBBBBB'
            }
        });
    });

    const layers = [
        '0-599',
        '600 - 1199',
        '1200 - 1799',
        '1800 - 2399',
        '2400 - 2999',
        '3000 +'

    ];
    const colors = [
        '#FFEDA0',
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C'
    ];

    const legend = document.getElementById('legend');
    legend.innerHTML = "<b>Reported Crime<br></b><br><br>";

    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    });

    map.on('mousemove', ({point}) => {
        const crimeRate = map.queryRenderedFeatures(point, {
            layers: ['crimeData-layer']
        });
        document.getElementById('text-description').innerHTML = crimeRate.length ?
            `<h3>${crimeRate[0].properties.L_HOOD}</h3><p><strong><em style="color: red;">${crimeRate[0].properties.CrimeCount}</em></strong>  Crime Reported</p>` :
            `<p>Hover over a neighborhood!</p>`;
    });  

}

geojsonFetch();