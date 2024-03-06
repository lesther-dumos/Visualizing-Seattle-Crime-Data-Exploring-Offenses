 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   var data1 = new google.visualization.DataTable();
   data1.addColumn('string', 'Type of Crime');
   data1.addColumn('number', 'Instances');
   data1.addRows([
    ['Larceny-Theft', 22668],
    ['Assault Offenses', 11036],
    ['Motor Vehicle Theft', 9234],
    ['Burglary/Breaking&Entering', 8528],
    ['Destruction/Damage/Vandalism of Property', 7220],
    ['Fraud Offenses', 3161],
    ['Trespass of Real Property', 1798],
    ['Robbery', 1691],
    ['Driving Under the Influence', 1220],
    ['Weapon Law Violations', 867]
   ]);

   var colors = [
    '#FF0000',  // Red
    '#FF4400',
    '#FF6600',
    '#FF8800',
    '#FFA000',
    '#FFBB00',
    '#FFCC33',
    '#FFDD66',
    '#FFEE99',
    '#FFFFCC',  // Lightest Yellow
];

   // Set chart options
   var options1 = {'title':'Top 10 Crime Percentages',
   'backgroundColor': '#201d1d',
   'is3D': true,
   'titleTextStyle': {
       'color': 'white' // Set the text color to white
   },
   'legend': {
    'position': 'none',
  },
  'width': 350, // Set the width of the chart
  'height': 300, // Set the height of the chart
  'colors': colors, // Custom colors for the chart
  'chartArea': {
    'left': 10, // Adjust the space on the left side of the chart
    'top': 10, // Adjust the space on the top side of the chart
    'width': '100%', // Use a percentage to control the width of the chart area
    'height': '100%' // Use a percentage to control the height of the chart area
  }
}

   // Instantiate and draw our chart, passing in some options.
   var chart1 = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart1.draw(data1, options1);
 }