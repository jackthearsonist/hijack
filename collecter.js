// Function to fetch IP address
function getIP(callback) {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            callback(userIP);
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            callback(null);
        });
}

// Function to send IP address to PHP script
function sendIP(ip) {
    if (ip) {
        const data = { ip: ip };
        fetch('https://your-website.com/collector.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('IP sent successfully:', ip);
        })
        .catch(error => {
            console.error('Error sending IP:', error);
        });
    }
}

// Fetch IP and send it
getIP(sendIP);
