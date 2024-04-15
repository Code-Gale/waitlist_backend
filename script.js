const scriptURL = '/api/waitlist'; // Updated to your backend endpoint
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('input[name="email"]');
  const formData = new URLSearchParams();
  formData.append('email', emailInput.value);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      msg.textContent = 'Thank you for subscribing';
      setTimeout(function () {
        msg.textContent = '';
      }, 5000);
      form.reset();
    } else {
      msg.textContent = data.error;
    }
  } catch (error) {
    console.error('Error:', error);
    msg.textContent = 'An error occurred. Please try again later.';
  }
});
