async function getStockData() {
    const symbol = document.getElementById('stock-symbol').value;
    if (!symbol) return alert('Please enter a stock symbol');
  
    try {
      const response = await fetch(`/api/stock?symbol=${symbol}`);
      const text = await response.text(); // Get response as text
  
      try {
        const data = JSON.parse(text); // Attempt to parse JSON
        document.getElementById('stock-data').innerText = JSON.stringify(data, null, 2);
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
        document.getElementById('stock-data').innerText = 'Failed to parse JSON. Response was: ' + text;
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  }