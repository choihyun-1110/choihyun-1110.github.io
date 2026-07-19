document.addEventListener('DOMContentLoaded', function () {
  var root = document.documentElement;

  // Theme toggle
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Language toggle
  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'ko' ? 'en' : 'ko';
      root.setAttribute('data-lang', next);
      root.setAttribute('lang', next);
      localStorage.setItem('lang', next);
    });
  }

  // Play project hover videos only on hover (save bandwidth)
  document.querySelectorAll('.project-thumb.has-video').forEach(function (cell) {
    var video = cell.querySelector('video');
    if (!video) return;
    cell.addEventListener('mouseenter', function () { video.play().catch(function () {}); });
    cell.addEventListener('mouseleave', function () { video.pause(); });
  });
});
