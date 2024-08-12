// public/script.js

async function fetchStockData() {
    try {
        const response = await fetch('/.netlify/functions/stock-data?symbol=AAPL'); // Adjust the symbol if needed
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
    const stockSymbolElement = document.getElementById('stock-symbol');
    const stockTimeElement = document.getElementById('stock-time');
    const stockPriceElement = document.getElementById('stock-price');
    
    // Polygon's response format might include fields like `last` for the latest price
    // Check the exact structure in the Polygon API documentation
    const latestQuote = data.results[0]; // Adjust this if the structure differs
    if (!latestQuote) {
        stockSymbolElement.textContent = 'No data available';
        stockTimeElement.textContent = '';
        stockPriceElement.textContent = '';
        return;
    }
    
    stockSymbolElement.textContent = `Symbol: ${latestQuote.T || 'N/A'}`;
    stockTimeElement.textContent = `Time: ${latestQuote.t || 'N/A'}`;
    stockPriceElement.textContent = `Price: ${latestQuote.c || 'N/A'}`; // Adjust field names if needed
}

fetchStockData();