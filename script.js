// Publication abstract toggles.
// Abstracts are visible in the HTML so they stay readable without JS;
// this script collapses them and reveals the toggle buttons.
document.querySelectorAll('.pub__toggle').forEach(function (btn) {
  var abstract = document.getElementById(btn.getAttribute('aria-controls'));
  if (!abstract) return;

  function set(open) {
    abstract.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Hide abstract ↑' : 'Read abstract ↓';
  }

  set(false);
  btn.hidden = false;
  btn.addEventListener('click', function () {
    set(btn.getAttribute('aria-expanded') !== 'true');
  });
});
