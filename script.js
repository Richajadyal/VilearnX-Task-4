// Initialize Chart.js charts
const revenueChart = new Chart(document.getElementById('revenue-chart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Revenue',
      data: [12000, 15000, 10000, 18000, 16000, 13000, 19000, 14000, 17000, 16000, 12000, 18000],
      backgroundColor: '#34c759',
      borderColor: '#34c759',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const expenseChart = new Chart(document.getElementById('expense-chart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Expense',
      data: [5000, 6000, 4000, 7000, 6000, 5000, 8000, 6000, 7000, 6000, 5000, 7000],
      backgroundColor: '#ff69b4',
      borderColor: '#ff69b4',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const profitChart = new Chart(document.getElementById('profit-chart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Profit',
      data: [7000, 9000, 6000, 11000, 10000, 8000, 11000, 8000, 10000, 10000, 7000, 11000],
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});