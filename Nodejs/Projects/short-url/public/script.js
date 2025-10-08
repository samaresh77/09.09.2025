const shortenForm = document.getElementById('shorten-form');
const longUrlInput = document.getElementById('long-url-input');
const resultContainer = document.getElementById('result-container');
const shortUrlLink = document.getElementById('short-url-link');
const copyButton = document.getElementById('copy-button');

// The backend API endpoint
const API_URL = 'http://localhost:5000/api/shorten';

shortenForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const longUrl = longUrlInput.value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ longUrl: longUrl }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Something went wrong');
        }

        const data = await response.json();

        // Display the result
        shortUrlLink.href = data.shortUrl;
        shortUrlLink.textContent = data.shortUrl;
        resultContainer.classList.remove('hidden');

    } catch (error) {
        alert(error.message);
    }
});

// Add functionality to the copy button
copyButton.addEventListener('click', () => {
    const urlToCopy = shortUrlLink.href;

    navigator.clipboard.writeText(urlToCopy).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000); // Reset button text after 2 seconds
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy URL.');
    });
});