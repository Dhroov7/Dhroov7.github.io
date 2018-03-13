google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Language', 'Experience'],
        ['JavaScript',     11],
        ['Java',      11],
        ['C/C++',  6],
        ['JSON',1]
    ]);

    var options = {
        title: 'My Programming Languages',
        is3D:true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
