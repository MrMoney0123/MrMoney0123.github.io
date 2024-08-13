async function getStockData() {
    const symbol = document.getElementById('stock-symbol').value;
    if (!symbol) return alert('Please enter a stock symbol');
  
    try {
      const response = await fetch(`/api/stock?symbol=${symbol}`);
      const data = await response.json();
      document.getElementById('stock-data').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  }