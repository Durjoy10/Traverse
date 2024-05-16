document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    fetch('/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
        } else {
          alert('Failed to submit the form. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again.');
      });
  });
});
