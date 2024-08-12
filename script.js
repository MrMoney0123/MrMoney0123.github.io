// public/script.js

// Replace this with your actual Finazon API key
const apiKey = 'eef3d37cdba74968bb848eafe07c65desuY';

async function fetchStockData() {
    try {
        // Construct the API URL for Finazon
        const response = await fetch('https://api.finazon.com/stocks?symbol=INTC', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${eef3d37cdba74968bb848eafe07c65desu}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayStockData(data);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

function displayStockData(data) {
    const stockDataElement = document.getElementById('stock-data');

    // Adjust based on the structure of Finazon API response
    // Example assumes response contains a `data` object with the required details
    const stock = data.data; // Adjust this based on actual response structure
    
    stockDataElement.innerHTML = `
        <p>Symbol: ${stock.symbol}</p>
        <p>Time: ${stock.timestamp}</p>
        <p>Open: ${stock.open}</p>
        <p>High: ${stock.high}</p>
        <p>Low: ${stock.low}</p>
        <p>Close: ${stock.close}</p>
        <p>Volume: ${stock.volume}</p>
    `;
}

fetchStockData();