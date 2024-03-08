// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data2 = google.visualization.arrayToDataTable([
        ['Month', 'Crime Report', { role: 'style' } ],
        ['JAN', 5716, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['FEB', 4908, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['MAR', 4929, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['APR', 6154, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['MAY', 6146, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['JUN', 5562, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['JUL', 6061, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['AUG', 6423, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['SEPT', 5902, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['OCT', 6428, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['NOV', 5792, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
        ['DEC', 5565, 'stroke-color: #FFA500; stroke-opacity: 0.6; stroke-width: 8; fill-color: #FFD700; fill-opacity: 0.2'],
    ]);

    // Create and draw the chart
    var options2 = {
        title: 'Number of Crime Reported and Month (2023)',
        legend: { position: 'none' }, 
        'width': 340, // Set the width of the chart
        'height': 330,
        'chartArea': {
          'left': 50, // Adjust the space on the left side of the chart
          'top': 40, // Adjust the space on the top side of the chart
          'width': '90%', // Use a percentage to control the width of the chart area
          'height': '80%' // Use a percentage to control the height of the chart area
        },
        orientation: 'vertical',
        hAxis: {
            viewWindow: {
                max: 6500 // Set the maximum value for the vertical axis
            }
        }
    };

    var chart2 = new google.visualization.ColumnChart(document.getElementById('bar_graph'));
    chart2.draw(data2, options2);
}