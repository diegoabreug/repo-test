 // Initialize Chart.js for History of Consumption
const rmsChartCtx = document.getElementById('rmsChart').getContext('2d');
const rmsChart = new Chart(rmsChartCtx, {
  type: 'line',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      label: 'I_RMS',
      data: [1, 2, 1.5, 2.5, 3, 2.8, 4, 3.5, 2.5, 3, 2, 1.5],
      borderColor: 'blue'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Initialize Chart.js for Consumption per Device
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieChartCtx, {
  type: 'doughnut',
  data: {
    labels: ['Blender 1.9 kWh', 'Lights 4.32 kWh', 'Fan 4.7 kWh', 'WM 7 kWh'],
    datasets: [{
      data: [1.9, 4.32, 4.7, 7],
      backgroundColor: ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});