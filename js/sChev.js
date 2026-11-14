(function () {
  function demarrer() {
  var box = document.getElementById('page-body');
  if (!box || !document.querySelector('.salon_layout')) { box = document.querySelector('.main_forum'); }
  if (!box) { return; }
  var chev = document.createElement('div');
  chev.className = 'scroll_chev';
  chev.innerHTML = '<i class="ti ti-chevron-down"></i>';
  document.body.appendChild(chev);
  function maj() {
    var r = box.getBoundingClientRect();
    var reste = box.scrollHeight - box.scrollTop - box.clientHeight;
    var visible = box.scrollHeight > box.clientHeight + 4 && reste > 20;
    chev.style.left = (r.right - 60) + 'px';
    chev.style.top = (Math.min(r.bottom, window.innerHeight) - 60) + 'px';
    chev.className = visible ? 'scroll_chev on' : 'scroll_chev';
  }
  chev.addEventListener('click', function () {
    box.scrollBy({ top: box.clientHeight * 0.8, behavior: 'smooth' });
  });
  box.addEventListener('scroll', maj);
  window.addEventListener('resize', maj);
  setInterval(maj, 500);
  maj();
  }
  if (document.readyState === 'complete') {
    demarrer();
  } else {
    window.addEventListener('load', demarrer);
  }
}());
