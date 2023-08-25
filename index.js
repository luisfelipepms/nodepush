const axios = require('axios');

let count = 1;

// Function to make the GET request
const fetchData = async () => {
    try {
        const response = await axios.get('https://www.spsp.com.br/hosp/GL/agente-transporte/notificar.php?count=' + count);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Call fetchData initially
fetchData();

// Set interval to call fetchData every 5 minutes (300,000 milliseconds)
setInterval(fetchData, 100000);
