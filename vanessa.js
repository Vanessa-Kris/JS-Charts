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
    const entry = new Map();
    entry.set('January', 1);
    entry.set('February', 4);
    entry.set('March', 6);
    entry.set('April', 8);
    entry.set('May', 10);
    entry.set('June', 16);
    entry.set('July', 19);
    entry.set('August', 17);
    entry.set('September', 13);
    entry.set('October', 6);
    entry.set('November', 20);
    entry.set('December', 31);


    // Create the data table.
    // var data = new google.visualization.DataTable();
    // data.addColumn('string', 'Months');
    // data.addColumn('number', 'Subscriber(s)');
    // data.addRows([
        var data = google.visualization.arrayToDataTable([
        ['Month', 'Day'],
        ['Jan', entry.get('January')],
        ['Feb', entry.get('February')],
        ['Mar', entry.get('March')],
        ['Apr', entry.get('April')],
        ['May', entry.get('May')],
        ['Jun', entry.get('June')],
        ['Jul', entry.get('July')],
        ['Aug', entry.get('August')],
        ['Sep', entry.get('September')],
        ['Oct', entry.get('October')],
        ['Nov', entry.get('November')],
        ['Dec', entry.get('December')]
    ]);
    // var data = google.visualization.arrayToDataTable([
    //     ['Subscribers', 'Day'],
    //     ['Jan',1],
    //     ['Feb',8],
    //     ['Mar',8],
    //     ['Apr',9],
    //     ['May',9],
    //     ['Jun',9],
    //     ['Jul',10],
    //     ['Aug',11],
    //     ['sep',14],
    //     ['Oct',14],
    //     ['Nov',15],
    //     ['Dec',15]
    // ]);

    // Ticks 
    // var vAxisRange = data.getColumnRange(1);
    // var ticks = [];
    // for (var i = 0; i <= vAxisRange.max; i++) {
    //     ticks.push(i);
    // }

    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            // format: '0',
            // ticks: ticks,
            // maxValue: 31
        },
        hAxis: {
            title: 'Months'
        },
        //   ticks: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        'width': 1000,
        'height': 800
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}