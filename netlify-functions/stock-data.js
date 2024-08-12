// public/script.js

async function fetchStockData() {
    try {
        console.log('Fetching stock data...');
        const response = await fetch('/.netlify/functions/stock-data?symbol=AAPL');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('Data fetched:', data); // Debugging: Log data
        displayStockData(data);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

function displayStockData(data) {
    const stockSymbolElement = document.getElementById('stock-symbol');
    const stockTimeElement = document.getElementById('stock-time');
    const stockPriceElement = document.getElementById('stock-price');
    
    if (!data || data.length === 0) {
        stockSymbolElement.textContent = 'No data available';
        stockTimeElement.textContent = '';
        stockPriceElement.textContent = '';
        return;
    }
    
    const latestQuote = data[0]; // FMP returns an array with stock data
    
    stockSymbolElement.textContent = `Symbol: ${latestQuote.symbol || 'N/A'}`;
    stockTimeElement.textContent = `Time: ${new Date().toLocaleTimeString()}`;
    stockPriceElement.textContent = `Price: ${latestQuote.price || 'N/A'}`;
}

// Fetch stock data initially
fetchStockData();

// Set interval to fetch stock data every 100 seconds (100,000 milliseconds)
setInterval(() => {
    console.log('Fetching stock data at interval...');
    fetchStockData();
}, 100000);