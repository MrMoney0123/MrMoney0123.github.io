// public/script.js

// Function to fetch stock data
async function fetchStockData() {
    try {
        const response = await fetch('/.netlify/functions/stock-data?symbol=AAPL');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Frontend Data:', data); // Log data for debugging
        displayStockData(data);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

// Function to display stock data
function displayStockData(data) {
    const stockSymbolElement = document.getElementById('stock-symbol');
    const stockTimeElement = document.getElementById('stock-time');
    const stockPriceElement = document.getElementById('stock-price');
    
    const latestQuote = data[0]; // FMP returns an array with stock data
    if (!latestQuote) {
        stockSymbolElement.textContent = 'No data available';
        stockTimeElement.textContent = '';
        stockPriceElement.textContent = '';
        return;
    }
    
    stockSymbolElement.textContent = `Symbol: ${latestQuote.symbol || 'N/A'}`;
    stockTimeElement.textContent = `Time: ${new Date().toLocaleTimeString()}`; // Real-time, so use current time
    stockPriceElement.textContent = `Price: ${latestQuote.price || 'N/A'}`; // FMP returns 'price' for the latest price
}

// Fetch stock data initially
fetchStockData();

// Set interval to fetch stock data every 100 seconds (100,000 milliseconds)
setInterval(fetchStockData, 100000);