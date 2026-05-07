window.onscroll = function() {
    var btn = document.getElementById('scrollBtn');
    if (document.documentElement.scrollTop > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  };