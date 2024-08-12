async function fetchStockData() {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=INTC&interval=3min&apikey=VIGVBR6SDFI7FMTI`);
        const data = await response.json();
        displayStockData(data);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

function displayStockData(data) {
    const stockDataElement = document.getElementById('stock-data');
    const latestTime = Object.keys(data['Time Series (1min)'])[0];
    const latestData = data['Time Series (1min)'][latestTime];
    
    stockDataElement.innerHTML = `
        <p>Symbol: AAPL</p>
        <p>Time: ${latestTime}</p>
        <p>Open: ${latestData['1. open']}</p>
        <p>High: ${latestData['2. high']}</p>
        <p>Low: ${latestData['3. low']}</p>
        <p>Close: ${latestData['4. close']}</p>
        <p>Volume: ${latestData['5. volume']}</p>
    `;
}

fetchStockData();