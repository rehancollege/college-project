document.addEventListener('DOMContentLoaded', function () {
    // 1. Universal Chart Colors
    const accent = '#6366f1';
    const accentSoft = '#22d3ee';

    // 2. Global Chart.js Configuration for smooth animations
    Chart.defaults.animation.duration = 2000;
    Chart.defaults.animation.easing = 'easeOutQuart';
    Chart.defaults.color = '#94a3b8'; // Sets default text color for all charts

    // 3. Attention Chart (Line Graph)
    const ctxAttention = document.getElementById("attentionChart");
    if (ctxAttention) {
        new Chart(ctxAttention, {
            type: 'line',
            data: {
                labels: ["0h", "1h", "2h", "3h", "4h", "5h+"],
                datasets: [{
                    label: 'Attention Levels (%)',
                    data: [95, 92, 85, 60, 40, 25],
                    borderColor: accentSoft,
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(34, 211, 238, 0.1)',
                    pointBackgroundColor: accentSoft,
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 4. Sleep Chart (Bar Graph)
    const ctxSleep = document.getElementById("sleepChart");
    if (ctxSleep) {
        new Chart(ctxSleep, {
            type: 'bar',
            data: {
                labels: ["Non-Gamer", "Casual", "Hardcore"],
                datasets: [{
                    label: 'Sleep Quality Score',
                    data: [8.5, 7.2, 4.8],
                    backgroundColor: [accent, accentSoft, '#fb7185'],
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { max: 10, beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    }

    // 5. GPA Chart (Doughnut)
    const ctxGPA = document.getElementById("gpaChart");
    if (ctxGPA) {
        new Chart(ctxGPA, {
            type: 'doughnut',
            data: {
                labels: ["Improved Grades", "No Change", "Declined Grades"],
                datasets: [{
                    data: [15, 35, 50],
                    backgroundColor: ['#4ade80', '#fbbf24', '#fb7185'],
                    borderWidth: 0,
                    hoverOffset: 20
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 20 } }
                }
            }
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});