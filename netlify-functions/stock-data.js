// netlify-functions/stock-data.js

const fetch = require('node-fetch');

exports.handler = async (event) => {
    const apiKey = process.env.vJhPOOzE7kpWAA4huPb6RVLv0Z0D5uu0; // Use environment variable for API key
    const symbol = event.queryStringParameters.symbol || 'AAPL';
    
    try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Function Response:', data); // Log response for debugging
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error fetching stock data',
        };
    }
};