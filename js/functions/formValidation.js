export function formValidation() {
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['auth'];
    const nameInput = form['name'];
    const emailInput = form['email'];
    const passwordInput = form['password'];
    const errorBox = document.querySelector('.error-box');
    console.log(document.location.pathname);

    form.addEventListener('submit', function (event) {
      let errors = [];

      // Name validation if registration
      if (document.location.pathname === '/src/register.html') {
        const name = nameInput.value.trim();
        if (name.length < 2) {
          errors.push('Name must be at least 2 characters long.');
        }
      }

      // Email validation
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@(noroff\.no|stud\.noroff\.no)$/;
      if (!emailRegex.test(email)) {
        errors.push('Email must end with @noroff.no or @stud.noroff.no.');
      }

      // Password validation
      const password = passwordInput.value;
      if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
      }

      // Display errors if any
      if (errors.length > 0) {
        event.preventDefault(); // prevent form from submitting
        errorBox.innerHTML = errors
          .map(
            (err) => `<div class="text-danger"><strong>${err}</strong></div>`
          )
          .join('');
      } else {
        errorBox.innerHTML = ''; // clear errors if valid
      }
    });
  });
}
