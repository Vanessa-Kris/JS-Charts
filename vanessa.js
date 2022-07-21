// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   console.log(fruits.size);
//   console.log(fruits.get("apples"));

// Load the Visualization API and the corechart package.
google.charts.load('current', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    const entry = new Map();
    entry.set('January', 0);
    entry.set('February', 5);
    entry.set('March', 10);
   

    // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Months');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['January', entry.get('January')],
        ['February', entry.get('February')],
        ['March', entry.get('March')]
      ]);

    // Set chart options
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        // 'width': 1400,
        // 'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}