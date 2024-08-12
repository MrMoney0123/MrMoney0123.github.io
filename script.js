// public/script.js

// Replace this with your actual Finazon API key
const apiKey = 'eef3d37cdba74968bb848eafe07c65desu';

// Function to fetch stock data from the serverless function
async function fetchStockData() {
    try {
        const response = await fetch('/.netlify/functions/stock-data?symbol=INTC'); // Adjust the symbol if needed
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
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
    
    // Adjust based on the structure of Finazon API response
    const stock = data.data; // This assumes `data.data` contains the relevant stock info
    const latestData = stock[0]; // Assuming the latest data is at index 0; adjust if necessary
    
    stockSymbolElement.textContent = `Symbol: ${latestData.symbol}`;
    stockTimeElement.textContent = `Time: ${latestData.timestamp}`;
    stockPriceElement.textContent = `Price: ${latestData.price}`; // Adjust field name if needed
}

// Fetch stock data when the page loads
fetchStockData();