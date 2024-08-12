// netlify-functions/stock-data.js

const fetch = require('node-fetch');

exports.handler = async (event) => {
    const apiKey = process.env.FINAZON_API_KEY; // Use environment variable for API key
    const symbol = event.queryStringParameters.symbol || 'AAPL';
    try {
        const response = await fetch(`https://api.finazon.com/stocks?symbol=${intc}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${eef3d37cdba74968bb848eafe07c65desu}`,
                'Content-Type': 'application/json'
            }
        });
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