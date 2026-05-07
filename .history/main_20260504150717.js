function sendMsg() {
  const name = document.getElementById('inp-name').value.trim();
  const email = document.getElementById('inp-email').value.trim();
  const msg = document.getElementById('inp-msg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all required fields!');
    return;
  }

  document.getElementById('success-msg').classList.add('show');
}

/* تعديل: scroll to top button */
window.onscroll = function() {
  var btn = document.getElementById('scrollBtn');
  if (document.documentElement.scrollTop > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};