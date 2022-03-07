 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);
 google.charts.setOnLoadCallback(drawChart2);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {
var b1 = parseInt('34');
var b2 = parseInt('53');
var b3 = parseInt('20');
var b4 = parseInt('12');
var b5 = parseInt('34');
var a1 = 'chocolate';
var a2 = 'fresa';
var a3 = 'coco';
var a4 = 'vainilla';
var a5 = 'queso';
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     [a1, parseInt(b1)],
     [a2, parseInt(b2)],
     [a3, parseInt(b3)],
     [a4, parseInt(b4)],
     [a5, parseInt(b5)],
 
   ]);

   // Set chart options
   var options = {'title':'Se pueden hacer pasteles por sabores',
                  'width':400,
                  'height':300};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }

 function drawChart2() {
  var b1 = parseInt('14');
  var b2 = parseInt('20');
  var b3 = parseInt('20');
  var b4 = parseInt('12');
  var b5 = parseInt('16');
  var a1 = 'flores';
  var a2 = 'casas';
  var a3 = 'bordes';
  var a4 = 'perlas';
  var a5 = 'imagen';
     // Create the data table.
     var data2 = new google.visualization.DataTable();
     data2.addColumn('string', 'Topping');
     data2.addColumn('number', 'Slices');
     data2.addRows([
       [a1, parseInt(b1)],
       [a2, parseInt(b2)],
       [a3, parseInt(b3)],
       [a4, parseInt(b4)],
       [a5, parseInt(b5)],
   
     ]);
  
     // Set chart options
     var optionse = {'title':'Se pueden hacer pasteles por adornos',
                    'width':400,
                    'height':300};
  
     // Instantiate and draw our chart, passing in some options.
     var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
     chart2.draw(data2, optionse);
   }