document.getElementById("year").textContent = new Date().getFullYear();

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mar",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const lineData = {
  labels: labels,
  datasets: [
    {
      data: [40, 34, 23, 36, 10, 17, 0, 35, 40, 32, 19, 29],
      fill: true,
      backgroundColor: "rgba(224, 13, 13, 0.2)",
      borderColor: "red",
      tension: 0.1,
    },
  ],
};

const lineConfig = {
  type: "line",
  data: lineData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          min: 0,
          max: 40,
        },
      },
    },
  },
};

new Chart(document.getElementById("lineChart"), lineConfig);



const poloData = {
    datasets: [{
      data: [11, 16, 7, 3, 14, 5, 6],
      backgroundColor: [
        'rgb(214, 21, 63)',
        'rgb(211, 58, 91)',
        'rgb(245, 34, 80)',
        'rgb(214, 21, 63)',
        'rgb(90, 6, 24)',
        'rgb(224, 95, 123)',
        'rgb(174, 9, 45)',
      ]
    }]
  };
  
  const config = {
    type: 'polarArea',
    data: poloData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true
        }
      }
    }
  };
  
  const ctx = document.getElementById('poloChart').getContext('2d');
  const myChart = new Chart(ctx, config);
  
