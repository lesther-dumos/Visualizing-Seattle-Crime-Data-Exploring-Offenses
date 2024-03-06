// assign the access token
mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';

// declare the map object
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 10.6, // starting zoom
    minZoom: 1,
    center: [-122.29, 47.62] // starting center
});

const toggleAboutPage = () => {
    const aboutPage = document.getElementById("aboutPage");
    aboutPage.style.display === "none" ? aboutPage.style.display = "block" : aboutPage.style.display = "none";
};

const showAboutPage = () => {
    const aboutPage = document.getElementById("aboutPage");
    aboutPage.style.display = "block";
};

// Function to hide the about page
const hideAboutPage = () => {
    const aboutPage = document.getElementById("aboutPage");
    aboutPage.style.display = "none";
};

const geojsonFetch = async () => {
    // Fetch the GeoJSON data
    const response = await fetch('assets/neighbor_data.json');
    const crimeData = await response.json();

    map.on('load', () => {
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

    // const layers = [
    //     '0 - 599',
    //     '600 - 1199',
    //     '1200 - 1799',
    //     '1800 - 2399',
    //     '2400 - 2999',
    //     '3000 +'
    // ];
    // const colors = [
    //     '#FFEDA0',
    //     '#FED976',
    //     '#FEB24C',
    //     '#FD8D3C',
    //     '#FC4E2A',
    //     '#E31A1C'
    // ];

    // const legend = document.getElementById('legend');
    // legend.innerHTML = "<b>Reported Crime<br></b><br><br>";

    // layers.forEach((layer, i) => {
    //     const color = colors[i];
    //     const item = document.createElement('div');
    //     const key = document.createElement('span');
    //     key.className = 'legend-key';
    //     key.style.backgroundColor = color;

    //     const value = document.createElement('span');
    //     value.innerHTML = `${layer}`;
    //     value.classList.add('layer-span-class');
    //     item.appendChild(key);
    //     item.appendChild(value);
    //     legend.appendChild(item);
    // });
    const grades = [
        '0 - 599',
        '600 - 1199',
        '1200 - 1799',
        '1800 - 2399',
        '2400 - 2999',
        '3000 +'
    ],
    colors = [
        '#FFEDA0',
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C'
    ];

    const legend = document.getElementById('legend');
    let labels = ['<strong>No. of Crime Reported</strong>'], vbreak;

    for (var i = 0; i < grades.length; i++) {
        vbreak = grades[i];
        square_size = 10
        labels.push(
            '<p class="break"><i class="square" style="background:' + colors[i] + '; width: ' + square_size +
            'px; height: ' +
            square_size + 'px; "></i> <span class="square-label" style="top: ' + square_size / 2 + 'px;">' + vbreak +
            '</span></p>');
    }

    const source =
        '<p style="text-align: right; font-size:10pt">Source: <a href="https://data.seattle.gov/Public-Safety/SPD-Crime-Data-2008-Present/tazs-3rd5/about_data">Seattle Open Data</a></p>';

    // join all the labels and the source to create the legend content.
    legend.innerHTML = labels.join('') + source;

    map.on('mousemove', ({point}) => {
        const crimeRate = map.queryRenderedFeatures(point, {
            layers: ['crimeData-layer']
        });
        document.getElementById('text-description').innerHTML = crimeRate.length ?
            `<h3>${crimeRate[0].properties.L_HOOD}</h3><p><strong><em style="color: red;">${crimeRate[0].properties.CrimeCount}</em></strong>  Crime Reported</p>` :
            `<p>Hover over a neighborhood!</p>`;
    });
};

geojsonFetch();

const reset = document.getElementById('reset');
reset.addEventListener('click', event => {
    map.flyTo({
        zoom: 10.6, // starting zoom
        center: [-122.29, 47.62] // starting center
    });
});