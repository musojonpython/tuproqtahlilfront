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
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      legendText: "Proven Oil Reserves",
      showInLegend: false,
      dataPoints: [
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
      dataPoints: [
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
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
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
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      // legendText: "Proven Oil Reserves",
      showInLegend: false,
      dataPoints: [
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
      dataPoints: [
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
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  // Accordion 1

  var chart = new CanvasJS.Chart("chartContainer3", {
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "line",
      name: "Footfall",
      color: "#369EAD",
      showInLegend: true,
      axisYIndex: 1,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 85.4 },
        { x: new Date(2017, 00, 14), y: 92.7 },
        { x: new Date(2017, 00, 21), y: 64.9 },
        { x: new Date(2017, 00, 28), y: 58.0 },
        { x: new Date(2017, 01, 4), y: 63.4 },
        { x: new Date(2017, 01, 11), y: 69.9 },
        { x: new Date(2017, 01, 18), y: 88.9 },
        { x: new Date(2017, 01, 25), y: 66.3 },
        { x: new Date(2017, 02, 4), y: 82.7 },
        { x: new Date(2017, 02, 11), y: 60.2 },
        { x: new Date(2017, 02, 18), y: 87.3 },
        { x: new Date(2017, 02, 25), y: 98.5 }
      ]
    },
    {
      type: "line",
      name: "Order",
      color: "#C24642",
      axisYIndex: 0,
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 32.3 },
        { x: new Date(2017, 00, 14), y: 33.9 },
        { x: new Date(2017, 00, 21), y: 26.0 },
        { x: new Date(2017, 00, 28), y: 15.8 },
        { x: new Date(2017, 01, 4), y: 18.6 },
        { x: new Date(2017, 01, 11), y: 34.6 },
        { x: new Date(2017, 01, 18), y: 37.7 },
        { x: new Date(2017, 01, 25), y: 24.7 },
        { x: new Date(2017, 02, 4), y: 35.9 },
        { x: new Date(2017, 02, 11), y: 12.8 },
        { x: new Date(2017, 02, 18), y: 38.1 },
        { x: new Date(2017, 02, 25), y: 42.4 }
      ]
    },
    {
      type: "line",
      name: "Revenue",
      color: "#7F6084",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 42.5 },
        { x: new Date(2017, 00, 14), y: 44.3 },
        { x: new Date(2017, 00, 21), y: 28.7 },
        { x: new Date(2017, 00, 28), y: 22.5 },
        { x: new Date(2017, 01, 4), y: 25.6 },
        { x: new Date(2017, 01, 11), y: 45.7 },
        { x: new Date(2017, 01, 18), y: 54.6 },
        { x: new Date(2017, 01, 25), y: 32.0 },
        { x: new Date(2017, 02, 4), y: 43.9 },
        { x: new Date(2017, 02, 11), y: 26.4 },
        { x: new Date(2017, 02, 18), y: 40.3 },
        { x: new Date(2017, 02, 25), y: 54.2 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

  // Accordion 2

  var chart = new CanvasJS.Chart("chartContainer4", {
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "line",
      name: "Footfall",
      color: "#369EAD",
      showInLegend: true,
      axisYIndex: 1,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 85.4 },
        { x: new Date(2017, 00, 14), y: 92.7 },
        { x: new Date(2017, 00, 21), y: 64.9 },
        { x: new Date(2017, 00, 28), y: 58.0 },
        { x: new Date(2017, 01, 4), y: 63.4 },
        { x: new Date(2017, 01, 11), y: 69.9 },
        { x: new Date(2017, 01, 18), y: 88.9 },
        { x: new Date(2017, 01, 25), y: 66.3 },
        { x: new Date(2017, 02, 4), y: 82.7 },
        { x: new Date(2017, 02, 11), y: 60.2 },
        { x: new Date(2017, 02, 18), y: 87.3 },
        { x: new Date(2017, 02, 25), y: 98.5 }
      ]
    },
    {
      type: "line",
      name: "Order",
      color: "#C24642",
      axisYIndex: 0,
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 32.3 },
        { x: new Date(2017, 00, 14), y: 33.9 },
        { x: new Date(2017, 00, 21), y: 26.0 },
        { x: new Date(2017, 00, 28), y: 15.8 },
        { x: new Date(2017, 01, 4), y: 18.6 },
        { x: new Date(2017, 01, 11), y: 34.6 },
        { x: new Date(2017, 01, 18), y: 37.7 },
        { x: new Date(2017, 01, 25), y: 24.7 },
        { x: new Date(2017, 02, 4), y: 35.9 },
        { x: new Date(2017, 02, 11), y: 12.8 },
        { x: new Date(2017, 02, 18), y: 38.1 },
        { x: new Date(2017, 02, 25), y: 42.4 }
      ]
    },
    {
      type: "line",
      name: "Revenue",
      color: "#7F6084",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 42.5 },
        { x: new Date(2017, 00, 14), y: 44.3 },
        { x: new Date(2017, 00, 21), y: 28.7 },
        { x: new Date(2017, 00, 28), y: 22.5 },
        { x: new Date(2017, 01, 4), y: 25.6 },
        { x: new Date(2017, 01, 11), y: 45.7 },
        { x: new Date(2017, 01, 18), y: 54.6 },
        { x: new Date(2017, 01, 25), y: 32.0 },
        { x: new Date(2017, 02, 4), y: 43.9 },
        { x: new Date(2017, 02, 11), y: 26.4 },
        { x: new Date(2017, 02, 18), y: 40.3 },
        { x: new Date(2017, 02, 25), y: 54.2 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

  // Accordion 3

  var chart = new CanvasJS.Chart("chartContainer5", {
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "line",
      name: "Footfall",
      color: "#369EAD",
      showInLegend: true,
      axisYIndex: 1,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 85.4 },
        { x: new Date(2017, 00, 14), y: 92.7 },
        { x: new Date(2017, 00, 21), y: 64.9 },
        { x: new Date(2017, 00, 28), y: 58.0 },
        { x: new Date(2017, 01, 4), y: 63.4 },
        { x: new Date(2017, 01, 11), y: 69.9 },
        { x: new Date(2017, 01, 18), y: 88.9 },
        { x: new Date(2017, 01, 25), y: 66.3 },
        { x: new Date(2017, 02, 4), y: 82.7 },
        { x: new Date(2017, 02, 11), y: 60.2 },
        { x: new Date(2017, 02, 18), y: 87.3 },
        { x: new Date(2017, 02, 25), y: 98.5 }
      ]
    },
    {
      type: "line",
      name: "Order",
      color: "#C24642",
      axisYIndex: 0,
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 32.3 },
        { x: new Date(2017, 00, 14), y: 33.9 },
        { x: new Date(2017, 00, 21), y: 26.0 },
        { x: new Date(2017, 00, 28), y: 15.8 },
        { x: new Date(2017, 01, 4), y: 18.6 },
        { x: new Date(2017, 01, 11), y: 34.6 },
        { x: new Date(2017, 01, 18), y: 37.7 },
        { x: new Date(2017, 01, 25), y: 24.7 },
        { x: new Date(2017, 02, 4), y: 35.9 },
        { x: new Date(2017, 02, 11), y: 12.8 },
        { x: new Date(2017, 02, 18), y: 38.1 },
        { x: new Date(2017, 02, 25), y: 42.4 }
      ]
    },
    {
      type: "line",
      name: "Revenue",
      color: "#7F6084",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 00, 7), y: 42.5 },
        { x: new Date(2017, 00, 14), y: 44.3 },
        { x: new Date(2017, 00, 21), y: 28.7 },
        { x: new Date(2017, 00, 28), y: 22.5 },
        { x: new Date(2017, 01, 4), y: 25.6 },
        { x: new Date(2017, 01, 11), y: 45.7 },
        { x: new Date(2017, 01, 18), y: 54.6 },
        { x: new Date(2017, 01, 25), y: 32.0 },
        { x: new Date(2017, 02, 4), y: 43.9 },
        { x: new Date(2017, 02, 11), y: 26.4 },
        { x: new Date(2017, 02, 18), y: 40.3 },
        { x: new Date(2017, 02, 25), y: 54.2 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

}