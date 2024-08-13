async function getStockData() {
  const symbol = document.getElementById('stock-symbol').value;
  if (!symbol) return alert('Please enter a stock symbol');

  const apiKey = 'vJhPOOzE7kpWAA4huPb6RVLv0Z0D5uu0'; // Replace with your API key
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

  try {
    const response = await fetch(url);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert response to text first
    const text = await response.text();

    // Try to parse JSON
    try {
      const data = JSON.parse(text);
      document.getElementById('stock-data').innerText = JSON.stringify(data, null, 2);
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      document.getElementById('stock-data').innerText = 'Failed to parse JSON. Response was: ' + text;
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
    document.getElementById('stock-data').innerText = 'Error fetching stock data: ' + error.message;
  }
}