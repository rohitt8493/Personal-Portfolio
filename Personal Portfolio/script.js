document.addEventListener('DOMContentLoaded', function () {
  const visitAlert = document.getElementById('visitAlert');
  visitAlert.addEventListener('click', function () {
    alert('Thank you for visiting Rohit Kumar\'s portfolio!');
  });

  const toggleAbout = document.getElementById('toggleAbout');
  const aboutSection = document.getElementById('about');
  toggleAbout.addEventListener('click', function () {
    if (aboutSection.style.display === 'none') {
      aboutSection.style.display = '';
      toggleAbout.textContent = 'Hide About';
    } else {
      aboutSection.style.display = 'none';
      toggleAbout.textContent = 'Show About';
    }
  });

  const contactBtn = document.getElementById('contactBtn');
  const contactSection = document.getElementById('contact');
  contactBtn.addEventListener('click', function () {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const contactForm = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      feedback.style.color = 'crimson';
      feedback.textContent = 'Please fill in the required fields: Name, Email, Message.';
      return;
    }

    feedback.style.color = 'green';
    feedback.innerHTML = `Thanks, <strong>${escapeHtml(name)}</strong>! Your message has been received. I will contact you at <strong>${escapeHtml(email)}</strong> shortly.`;

    contactForm.reset();

    setTimeout(() => { feedback.textContent = ''; }, 8000);
  });

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }
});