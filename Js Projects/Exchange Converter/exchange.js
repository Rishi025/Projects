function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // You can replace the conversion rates with real-time rates from an API
    const conversionRates = {
        usd: 1, // 1 USD to USD
        eur: 0.85, // Example: 1 USD to EUR rate
        // Add more rates as needed
        gbp: 0.75,
    jpy: 110.23,
    inr: 74.48,
    };

    const result = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
    
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
}
