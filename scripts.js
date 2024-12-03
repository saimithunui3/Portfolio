// Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate API call (Replace with your API endpoint)
    fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Your message has been sent!');
    })
    .catch(error => {
        alert('There was an error sending your message.');
        console.error('Error:', error);
    });
});

// Skills Chart (Radar Chart)
const ctx = document.getElementById('skills-chart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Java', 'ReactJS', 'Spring Boot', 'AWS', 'SQL', 'Angular'],
        datasets: [{
            label: 'Skills Proficiency',
            data: [90, 85, 80, 75, 70, 80],
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            pointBackgroundColor: 'rgba(0, 123, 255, 1)',
            pointBorderColor: 'rgba(0, 123, 255, 1)',
            pointHoverBackgroundColor: 'rgba(0, 123, 255, 1)',
            pointHoverBorderColor: 'rgba(0, 123, 255, 1)',
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100,
                stepSize: 20
            }
        }
    }
});
