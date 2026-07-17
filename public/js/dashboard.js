const ctx = document.getElementById("revenueChart");

if (ctx) {

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: monthNames,

            datasets: [

                {

                    label: "Revenue (₹)",

                    data: monthlyRevenue,

                    borderWidth: 1,

                    borderRadius: 8,

                },

            ],

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false,

                },

            },

            scales: {

                y: {

                    beginAtZero: true,

                },

            },

        },

    });

}