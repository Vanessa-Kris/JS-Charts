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
    //     const entry = new Map([['Month'], ['Day']]);
    //     entry.set('Jauary',{Month: 'Jan', Day: '31'});
    //     entry.set('February', 4);
    //     entry.set('March', 6);
    //     entry.set('April', 8);
    //     entry.set('May', 10);
    //     entry.set('June', 16);
    //     entry.set('July', 19);
    //     entry.set('August', 17);
    //     entry.set('September', 13);
    //     entry.set('October', 6);
    //     entry.set('November', 20);
    //     entry.set('December', 31);

    // const entry = new Map();
    // entry.set('Jauary',{Month: 'Jan', Day: '31'});
    // entry.set('Febuary',{Month: 'Feb', Day: '31'});
    // entry.set('March',{Month: 'Mar', Day: '31'});
    // entry.set('April',{Month: 'Apr', Day: '31'});
    // entry.set('May',{Month: 'May', Day: '31'});
    // entry.set('June',{Month: 'Jun', Day: '31'});
    // entry.set('July',{Month: 'Jul', Day: '31'});
    // entry.set('August',{Month: 'Aug', Day: '31'});
    // entry.set('September',{Month: 'Sep', Day: '31'});
    // entry.set('October',{Month: 'Oct', Day: '31'});
    // entry.set('November',{Month: 'Nov', Day: '31'});
    // entry.set('December',{Month: 'Dec', Day: '31'});

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
    
    var data = google.visualization.arrayToDataTable (
        entry.map(function(element){
            result = []
            result.push(element.Month)
            result.push(element.Day)
            return result;
        })
    );
        
    // .entry.Map(function(element){
    //     ['Month', 'Day']
    //     return `${element.Month} ${element.Day}`;
    // C

    // var data = google.visualization.arrayToDataTable([
    // ['Month', 'Day'],
    // ['Jan',entry.get('January')],
    // ['Feb', entry.get('February')],
    // ['Mar', entry.get('March')],
    // ['Apr', entry.get('April')],
    // ['May', entry.get('May')],
    // ['Jun', entry.get('June')],
    // ['Jul', entry.get('July')],
    // ['Aug', entry.get('August')],
    // ['Sep', entry.get('September')],
    // ['Oct', entry.get('October')],
    // ['Nov', entry.get('November')],
    // ['Dec', entry.get('December')]
    // ]);
    

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
        'width': 1000,
        'height': 800
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}