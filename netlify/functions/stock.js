const fetch = require('node-fetch');

exports.handler = async (event) => {
  const symbol = event.queryStringParameters.symbol;
  const apiKey = 'vJhPOOzE7kpWAA4huPb6RVLv0Z0D5uu0';  // Replace with your actual FMP API key
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data.error }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};