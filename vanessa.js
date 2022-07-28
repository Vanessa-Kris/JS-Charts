// Load the Visualization API and the corechart package.
google.charts.load('current', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the chart, passes in the data and
    // draws it.
    function drawChart() {

    const entry = [
        {Month: 'Month', Day: 'Days'},
        {Month: 'Jan', Day: 31},
        {Month: 'Feb', Day: 29},
        {Month: 'Mar', Day: 31},
        {Month: 'Apr', Day: 30},
        {Month: 'May', Day: 31},
        {Month: 'Jun', Day: 30},
        {Month: 'Jul', Day: 31},
        {Month: 'Aug', Day: 31},
        {Month: 'Sep', Day: 30},
        {Month: 'Oct', Day: 31},
        {Month: 'Nov', Day: 30},
        {Month: 'Dec', Day: 31}
    ];

    // Create the data table.
    // Call data using map
    var data = google.visualization.arrayToDataTable (
        entry.map(function(element){
            result = []
            result.push(element.Month)
            result.push(element.Day)
            return result;
        })
    );

    // Ticks 
    var vAxisRange = data.getColumnRange(1);
    var ticks = [];
    for (var i = 0; i <= vAxisRange.max; i++) {
        ticks.push(i);
    }

    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0',
            ticks: ticks,
            // maxValue: 31
        },
        hAxis: {
            title: 'Months'
        },
        // 'width': 1000,
        // 'height': 800
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}