     document.querySelector('.input-container').addEventListener('submit', async (event) => {
      event.preventDefault();

      const urlInput = document.getElementById('urlInput');
      const longUrl = urlInput.value;

      try {
        const response = await fetch(`https://ulvis.net/API/write/get?url=${encodeURIComponent(longUrl)}`);
        if (response.ok) {
          const data = await response.json();
          const shortUrl = data.short;
          alert(`Shortened URL: ${shortUrl}`);
        } else {
          alert('Error: Unable to shorten URL.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: Unable to shorten URL. Please try again later.');
      }
    });