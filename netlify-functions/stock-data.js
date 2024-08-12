// netlify-functions/stock-data.js

const fetch = require('node-fetch');

exports.handler = async (event) => {
    const apiKey = process.env.GUrYc4HCAwBBRAAm7LvqQAuoipxazpj3; // Use environment variable for API key
    const symbol = event.queryStringParameters.symbol || 'AAPL';
    
    try {
        const response = await fetch(`https://api.polygon.io/v2/quotes/stocks/${symbol}?apiKey=${apiKey}`, {
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
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