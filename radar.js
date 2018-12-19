function radarChart() {
  let radarChart = document.getElementById("radarChart").getContext("2d");
  let myRadarChart = new Chart(radarChart, {
    type: "radar",
    data: {
      labels: ["Copenhagen", "Fyn", "Zeeland", "Jutland"],
      datasets: [
        {
          label: "Oak planted",
          data: [20, 12, 14, 17],

          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)"
        },
        {
          label: "Pine Planted",
          data: [18, 17, 9, 19],

          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)"
        }
      ]
    },
    options: {
      elements: {
        line: {
          tension: 0,
          borderWidth: 3
        }
      }
    }
  });
}

//RadarChart
radarChart();

fetch("http://5c04b49cd5f2070013d58166.mockapi.io/users")
  .then(res => res.json())
  .then(user => {
    user.forEach(d => {});
  });
