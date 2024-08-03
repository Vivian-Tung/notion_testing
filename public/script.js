fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const container = document.getElementById('quotes-container');
    data.slice(0, 10).forEach(quote => { // Limiting to 10 quotes for display
      const quoteDiv = document.createElement('div');
      quoteDiv.className = 'quote';
      quoteDiv.innerHTML = `<p><strong>Quote:</strong> ${quote.text}</p><p><strong>Author:</strong> ${quote.author ? quote.author : 'Unknown'}</p>`;
      container.appendChild(quoteDiv);
    });
  })
  .catch(function(error) {
    console.error("Error fetching quotes:", error);
  });