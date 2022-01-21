// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [
//               12500000, 
//               25000000,
//               37500000, 
//               50000000, 
//               62500000, 
//               75000000, 
//               87500000, 
//               100000000, 
//               112500000, 
//               125000000, 
//               137500000, 
//               150000000, 
//               162500000, 
//               175000000, 
//               187500000, 
//               200000000];
// var barColors = ["red", "green","blue","orange","brown"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "World Wine Production 2018"
//     }
//   }
// });

window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    toolTip: {
      shared: true
    },
    legend: {
      cursor:"pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      legendText: "Proven Oil Reserves",
      showInLegend: false, 
      dataPoints:[
        { label: "Saudi", y: 266.21 },
        { label: "Venezuela", y: 302.25 },
        { label: "Iran", y: 157.20 },
        { label: "Iraq", y: 148.77 },
        { label: "Kuwait", y: 101.50 },
        { label: "UAE", y: 97.8 }
      ]
    },
    {
      type: "column",	
      name: "Oil Production (million/day)",
      // legendText: "Oil Production",
      axisYType: "secondary",
      showInLegend: false,
      dataPoints:[
        { label: "Saudi", y: 2.46 },
        { label: "Venezuela", y: 2.27 },
        { label: "Iran", y: 3.99 },
        { label: "Iraq", y: 4.45 },
        { label: "Kuwait", y: 2.92 },
        { label: "UAE", y: 3.1 }
      ]
    }]
  });
  chart.render();
  
  function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
  

  var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,	
    toolTip: {
      shared: true
    },
    legend: {
      cursor:"pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      // legendText: "Proven Oil Reserves",
      showInLegend: false, 
      dataPoints:[
        { label: "Saudi", y: 266.21 },
        { label: "Venezuela", y: 302.25 },
        { label: "Iran", y: 157.20 },
        { label: "Iraq", y: 148.77 },
        { label: "Kuwait", y: 101.50 },
        { label: "UAE", y: 97.8 }
      ]
    },
    {
      type: "column",	
      name: "Oil Production (million/day)",
      // legendText: "Oil Production",
      axisYType: "secondary",
      showInLegend: false,
      dataPoints:[
        { label: "Saudi", y: 10.46 },
        { label: "Venezuela", y: 2.27 },
        { label: "Iran", y: 3.99 },
        { label: "Iraq", y: 4.45 },
        { label: "Kuwait", y: 2.92 },
        { label: "UAE", y: 3.1 }
      ]
    }]
  });
  chart.render();
  
  function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  }