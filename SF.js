 function generateReport() {
                const analyticsOutput = document.getElementById('analyticsOutput');
                analyticsOutput.innerHTML = `
                    <ul>
                        <li>Medication adherence: 95%</li>
                        <li>Missed doses: 2 this month</li>
                        <li>Upcoming appointments: 3</li>
                    </ul>
                `;
            }