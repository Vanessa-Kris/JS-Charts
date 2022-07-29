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
        {Month: 'Days', Orange: 'Orange subscribers', Camtel: 'Camtel Subscribers', MTN: 'MTN Subscribers'},
        {Month: 'Day1', Orange: 20, Camtel: 31, MTN: 0},
        {Month: 'Day2', Orange: 20, Camtel: 29, MTN: 6},
        {Month: 'Day3', Orange: 10, Camtel: 31, MTN: 8},
        {Month: 'Day4', Orange: 20, Camtel: 30, MTN: 9},
        {Month: 'Day5', Orange: 22, Camtel: 31, MTN: 12},
        {Month: 'Day6', Orange: 20, Camtel: 30, MTN: 20},
        {Month: 'Day7', Orange: 20, Camtel: 31, MTN: 25},
        {Month: 'Day8', Orange: 20, Camtel: 31, MTN: 0},
        {Month: 'Day9', Orange: 30, Camtel: 30, MTN: 20},
        {Month: 'Day10', Orange: 20, Camtel: 31, MTN: 20},
        {Month: 'Day11', Orange: 20, Camtel: 30, MTN: 20},
        {Month: 'Day12', Orange: 40, Camtel: 31, MTN: 20},
        {Month: 'Day13', Orange: 30, Camtel: 21, MTN: 20},
        {Month: 'Day14', Orange: 40, Camtel: 31, MTN: 20},
        {Month: 'Day15', Orange: 20, Camtel: 21, MTN: 20},
        {Month: 'Day16', Orange: 10, Camtel: 11, MTN: 20},
        {Month: 'Day17', Orange: 40, Camtel: 30, MTN: 20},
        {Month: 'Day18', Orange: 30, Camtel: 31, MTN: 20},
        {Month: 'Day19', Orange: 20, Camtel: 3, MTN: 20},
        {Month: 'Day20', Orange: 10, Camtel: 1, MTN: 20},
        {Month: 'Day21', Orange: 40, Camtel: 1, MTN: 20},
        {Month: 'Day22', Orange: 10, Camtel: 13, MTN: 20},
        {Month: 'Day23', Orange: 20, Camtel: 31, MTN: 20},
        {Month: 'Day24', Orange: 40, Camtel: 4, MTN: 20},
        {Month: 'Day25', Orange: 30, Camtel: 31, MTN: 20},
        {Month: 'Day26', Orange: 21, Camtel: 31, MTN: 20},
        {Month: 'Day27', Orange: 4, Camtel: 8, MTN: 20},
        {Month: 'Day28', Orange: 40, Camtel: 31, MTN: 20,},
        {Month: 'Day29', Orange: 40, Camtel: 31, MTN: 20},
        {Month: 'Day30', Orange: 40, Camtel: 31, MTN: 20}


    ];

    

    // Create the data table.
    // Call data using map
    var data = google.visualization.arrayToDataTable (
        entry.map(function(element){
            result = [ ]
            result.push(element.Month)
            result.push(element.Orange)
            result.push(element.Camtel)
            result.push(element.MTN)
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
            title: 'January'
        },
        // 'width': 1000,
        // 'height': 800
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

