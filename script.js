// document.querySelector(".burger-menu").

//first graph
let usersJanuary = 0;
let usersFebruary = 0;
let usersMarch = 0;
let usersApril = 0;
let usersJune = 0;
let usersJuly = 0;
let usersAugust = 0;
let usersSeptember = 0;
let usersOctober = 0;
let usersNovember = 0;
let usersDecember = 0;
let usersMay = 0;

//donut chart
let volunteers = 0;
let donator = 0;
let plantingUser = 0;
let inactiveUser = 0;

//line Chart

let treeMar = 0;
let treeApril = 0;
let treeMay = 0;
let treeJun = 0;
let treeJully = 0;
let treeAug = 0;
let treeSept = 0;
let treeOct = 0;

function donutChart() {
  // all donut chart
  let chart2 = document.getElementById("pieChart").getContext("2d");
  let myPieChart = new Chart(chart2, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [plantingUser, donator, inactiveUser, volunteers],
          backgroundColor: ["#3498DB", "#381968", "#BDC3C7", "#C19AB7"],
          borderColor: ["#3498DB", "#381968", "#BDC3C7", "#C19AB7"],
          hoverBackgroundColor: ["#308BC8", "#241043", "#BDC3C7", "#B08CA7"]
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Customers", "Donors", "Inactive", "Volunteers"]
    },
    options: {
      animation: {
        animateRotate: "false"
      }
    }
  });
}

function lineChart() {
  let lineChart = document.getElementById("lineChart").getContext("2d");
  let myLineChart = new Chart(lineChart, {
    type: "line",

    data: {
      labels: ["Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct"],
      datasets: [
        {
          label: "Trees planted",
          data: [
            treeMar,
            treeApril,
            treeMay,
            treeJun,
            treeJully,
            treeOct,
            treeSept,
            treeOct
          ],
          backgroundColor: "rgba(38,185,154,0.31)",
          borderColor: "rgba(38,183,154,0.7)",
          pointBorderColor: "rgba(38,185,154,0.7)",
          pointBackgroundColor: "rgba(38,185,154,0.7)",
          pointHoverBackgroundColor: "rgba(#fff)",

          pointBorderWidth: 1
        },
        {
          label: "Objective of trees planted ",
          data: [5, 9, 6, 8, 5, 7, 6, 5],
          backgroundColor: "rgb(192,192,192,0.31)",
          borderColor: "rgb(192,192,192,0.7)",
          pointBorderColor: "rgb(192,192,192,0.7)",
          pointBackgroundColor: "rgb(192,192,192,0.7)",
          pointHoverBackgroundColor: "rgba(#fff)",
          borderColor: "rgb(168,168,168)",
          pointBorderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              max: 20,
              min: 0,
              stepSize: 2
            }
          }
        ]
      }
    }
  });
}

//feching

fetch("http://5c04b49cd5f2070013d58166.mockapi.io/users")
  .then(res => res.json())
  .then(user => {
    user.forEach(d => {
      // radarChart

      if (d.month == "January") {
        usersJanuary++;
      }
      if (d.month === "February") {
        usersFebruary++;
      }
      if (d.month === "March") {
        usersMarch++;
      }
      if (d.month === "April") {
        usersApril++;
      }
      if (d.month === "May") {
        usersMay++;
      }
      if (d.month === "June") {
        usersJune++;
      }
      if (d.month === "July") {
        usersJuly++;
      }
      if (d.month === "August") {
        usersAugust++;
      }
      if (d.month === "September") {
        usersSeptember++;
      }
      if (d.month === "October") {
        usersOctober++;
      }
      if (d.month === "November") {
        usersNovember++;
      }
      if (d.month === "December") {
        usersDecember++;
      }
      monthUserChart();

      //   console.log(d.tree["index"].month);

      for (let i = 0; i < d.tree.length; i++) {
        // console.log(d.tree[i].month);

        if (d.tree[i].month === "March") {
          treeMar++;
        }
        if (d.tree[i].month === "April") {
          treeApril++;
        }
        if (d.tree[i].month === "May") {
          treeMay++;
        }
        if (d.tree[i].month === "June") {
          treeJun++;
        }
        if (d.tree[i].month === "July") {
          treeJully++;
        }
        if (d.tree[i].month === "August") {
          treeAug++;
        }
        if (d.tree[i].month === "September") {
          treeSept++;
        }
        if (d.tree[i].month === "October") {
          treeOct++;
        }
      }

      for (let i = 0; i < d.tree.length; i++) {
        //tree branch
        if ((d.tree[i].length = 1)) {
          plantingUser++;
        }
      }

      lineChart();
      //donator branch
      for (let i = 0; i < d.donator.length; i++) {
        if (d.donator[i].length) {
          donator++;
        }
      }
      //volunteer branch
      for (let i = 0; i < d.volunteer.length; i++) {
        if (d.volunteer[i].length) {
          volunteers++;
        }
      }

      //   users;
      document.querySelector(".user-continer-number h1").innerHTML = d.id;

      //chart donut

      if (d.tree.length) {
        plantingUser++;
      }
      if (d.volunteer.length) {
        volunteers++;
      }
      if (d.donator.length) {
        donator++;
      }

      if (
        d.volunteer.length == 0 &&
        d.donator.length == 0 &&
        d.tree.length == 0
      ) {
        inactiveUser++;
      }
      donutChart();
    });
  });

function monthUserChart() {
  let ctx = document.getElementById("myChart").getContext("2d");
  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Number of User Joining by Month",
          backgroundColor: " #B9D9FB",

          borderColor: " #4e3955",
          borderWidth: 2,
          data: [
            usersJanuary,
            usersFebruary,
            usersMarch,
            usersApril,
            usersMay,
            usersJune,
            usersJuly,
            usersAugust,
            usersSeptember,
            usersOctober,
            usersNovember,
            usersDecember
          ]
        }
      ]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 10,
              min: 0,
              stepSize: 2
            }
          }
        ]
      }
    }
  });
}
