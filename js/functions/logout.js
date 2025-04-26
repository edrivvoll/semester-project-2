export function logout() {
  const logoutBtn = document.getElementById('logout');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (event) {
      event.preventDefault();
      localStorage.clear();
      window.location.replace('../src/index.html');
    });
  }
}
