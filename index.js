// Function to shorten URL
async function shortenURL(longURL, customName = null) {
  const baseURL = 'https://ulvis.net/api.php';
  let url = `${baseURL}?url=${encodeURIComponent(longURL)}`;

  if (customName) {
      url += `&custom=${customName}`;
  }

  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.success === 1) {
          console.log('URL Shortened:', data.data.url);
          trackURLShortening();
          return data.data.url;
      } else {
          console.error('Error shortening URL:', data.error.msg);
          return null;
      }
  } catch (error) {
      console.error('Error shortening URL:', error);
      return null;
  }
}

// Function to track URL shortening
async function trackURLShortening() {
  // You can implement tracking logic here, such as updating a counter or sending analytics data
  // For demonstration purposes, let's increment a counter
  if (!localStorage.getItem('shortenedURLCount')) {
      localStorage.setItem('shortenedURLCount', '1');
  } else {
      let count = parseInt(localStorage.getItem('shortenedURLCount'));
      count++;
      localStorage.setItem('shortenedURLCount', count.toString());
  }
}

// Example usage
const longURL = 'https://www.youtube.com/watch?v=';
const customName = 'mycustomname';

shortenURL(longURL, customName);
