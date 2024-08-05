async function fetchQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const quotes = await response.json();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = randomQuote.text + (randomQuote.author ? ` - ${randomQuote.author.slice(0, -10)}` : '');
    document.getElementById('quote-text').innerText = quoteText;
  } catch (error) {
    console.error('Error fetching quote:', error);
    document.getElementById('quote-text').innerText = 'Failed to load quote.';
  }
}

async function fetchImage() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=Mq108tiIew1r7sz4__ybvV_TuowqDzHK1t_Cf82A5n8');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const imgUrl = data.urls.regular; // Extracting the image URL
    const imgElement = document.getElementById('quote-image');
    imgElement.onload = () => console.log('Image loaded successfully');
    imgElement.onerror = (e) => console.error('Error loading image', e);
    imgElement.src = imgUrl;
    imgElement.style.display = 'block';
  } catch (error) {
    console.error('Error fetching image:', error);
    document.getElementById('quote-image').style.display = 'none';
  }
}

async function displayQuoteAndImage() {
  await fetchQuote();
  await fetchImage();
}

document.getElementById('new-quote-button').addEventListener('click', displayQuoteAndImage);

// Initial load
displayQuoteAndImage();