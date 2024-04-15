function shortenUrl(longUrl) {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;

      fetch(apiUrl)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Failed to shorten URL');
          }
        })
        .then(shortenedUrl => {
          resolve(shortenedUrl);
        })
        .catch(error => {
          console.error('Error:', error);
          reject(error);
        });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-container');
    const urlInput = document.getElementById('urlInput');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const longUrl = urlInput.value;

      try {
        const shortUrl = await shortenUrl(longUrl);
        if (shortUrl) {
          alert(`Shortened URL: ${shortUrl}`);

        } else {
          alert('Error: Unable to shorten URL');
        }
      } catch (error) {
        alert('Error: Unable to shorten URL. Please try again later.');
      }
    });
  });
