// Chart.js global defaults for our dark aesthetic
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Outfit', sans-serif";
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 23, 42, 0.9)';
Chart.defaults.plugins.tooltip.titleColor = '#f8fafc';
Chart.defaults.plugins.tooltip.bodyColor = '#f8fafc';
Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.boxWidth = 8;
Chart.defaults.scale.grid.color = 'rgba(255, 255, 255, 0.05)';

// Helper to get contexts
const getCtx = (id) => document.getElementById(id).getContext('2d');

// 1. Revenue Over Time (Line Chart)
const revenueCtx = getCtx('revenueChart');
const revenueGradient = revenueCtx.createLinearGradient(0, 0, 0, 400);
revenueGradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
revenueGradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Revenue ($)',
            data: [45000, 52000, 48000, 61000, 59000, 75000, 82000, 78000, 85000, 92000, 105000, 124500],
            borderColor: '#3b82f6',
            backgroundColor: revenueGradient,
            borderWidth: 3,
            tension: 0.4, // Smooth curve
            fill: true,
            pointBackgroundColor: '#0f172a',
            pointBorderColor: '#3b82f6',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, border: { display: false } },
            x: { border: { display: false }, grid: { display: false } }
        }
    }
});

// 2. Sales by Category (Doughnut Chart)
new Chart(getCtx('categoryChart'), {
    type: 'doughnut',
    data: {
        labels: ['Electronics', 'Clothing', 'Software', 'Accessories'],
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                '#3b82f6',
                '#8b5cf6',
                '#ec4899',
                '#10b981'
            ],
            borderWidth: 0,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: { padding: 20 }
            }
        }
    }
});

// 3. Monthly Sales Comparison (Bar Chart)
new Chart(getCtx('comparisonChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'This Year',
                data: [65, 78, 90, 81, 105, 120],
                backgroundColor: '#3b82f6',
                borderRadius: 6,
                barThickness: 12
            },
            {
                label: 'Last Year',
                data: [50, 60, 75, 70, 85, 95],
                backgroundColor: 'rgba(148, 163, 184, 0.2)',
                borderRadius: 6,
                barThickness: 12
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end'
            }
        },
        scales: {
            y: { beginAtZero: true, border: { display: false } },
            x: { border: { display: false }, grid: { display: false } }
        }
    }
});

// 4. Regional Performance (Polar Area Chart)
new Chart(getCtx('regionChart'), {
    type: 'polarArea',
    data: {
        labels: ['North America', 'Europe', 'Asia', 'South America'],
        datasets: [{
            data: [85, 65, 45, 25],
            backgroundColor: [
                'rgba(59, 130, 246, 0.7)',
                'rgba(139, 92, 246, 0.7)',
                'rgba(236, 72, 153, 0.7)',
                'rgba(16, 185, 129, 0.7)'
            ],
            borderColor: 'rgba(15, 23, 42, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                angleLines: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// 5. Customer Acquisition Channels (Radar Chart)
new Chart(getCtx('channelChart'), {
    type: 'radar',
    data: {
        labels: ['Organic Search', 'Social Media', 'Paid Ads', 'Referral', 'Email', 'Direct'],
        datasets: [{
            label: 'Current Month',
            data: [90, 75, 85, 60, 70, 65],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3b82f6',
            pointBackgroundColor: '#3b82f6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#3b82f6',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                angleLines: { color: 'rgba(255, 255, 255, 0.05)' },
                pointLabels: {
                    color: '#94a3b8',
                    font: { family: "'Outfit', sans-serif" }
                },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});
