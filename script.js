function acadCarouselShow(idx){
    var viewport = document.querySelector('.academics-carousel .carousel-viewport');
    var wrap = document.querySelector('.academics-carousel');
    if(!viewport || !wrap) return;
    var slides = viewport.querySelectorAll('.carousel-slide');
    var dots = wrap.querySelectorAll('.dot');
    var caption = wrap.querySelector('.carousel-caption');
    var captions = [
      'Receiving the SOF National Science Olympiad medal and certificate',
      'LogIQids Mental Aptitude Olympiad \u2014 International Rank 105'
    ];
    idx = (idx + slides.length) % slides.length;
    slides.forEach(function(s,i){ s.classList.toggle('active', i===idx); });
    dots.forEach(function(d,i){ d.classList.toggle('active', i===idx); });
    if(caption) caption.textContent = captions[idx] || '';
    wrap.setAttribute('data-index', idx);
    document.querySelectorAll('.acad-win').forEach(function(w,i){ if(wrap.classList.contains('academics-carousel')) w.classList.toggle('on', i===idx); });
  }
  function acadCarouselMove(dir){
    var wrap = document.querySelector('.academics-carousel');
    var current = parseInt(wrap.getAttribute('data-index') || '0', 10);
    acadCarouselShow(current + dir);
  }
  function acadCarouselGo(idx){ acadCarouselShow(idx); }
  function athleticsCarouselShow(idx){
    var wrap = document.querySelector('.athletics-carousel');
    if(!wrap) return;
    var viewport = wrap.querySelector('.carousel-viewport');
    var slides = viewport.querySelectorAll('.carousel-slide');
    var dots = wrap.querySelectorAll('.dot');
    var caption = wrap.querySelector('.carousel-caption');
    var captions = [
      'Winner, Christ-Chavara Invitational Basketball Tournament (U17 Boys)',
      'Letter of recommendation \u2014 Tiger Kim\u2019s Tae Kwon Do',
      'USA Swimming Athlete Member Card \u2014 SC-RAYS'
    ];
    idx = (idx + slides.length) % slides.length;
    slides.forEach(function(s,i){ s.classList.toggle('active', i===idx); });
    dots.forEach(function(d,i){ d.classList.toggle('active', i===idx); });
    if(caption) caption.textContent = captions[idx] || '';
    wrap.setAttribute('data-index', idx);
  }
  function athleticsCarouselMove(dir){
    var wrap = document.querySelector('.athletics-carousel');
    var current = parseInt(wrap.getAttribute('data-index') || '0', 10);
    athleticsCarouselShow(current + dir);
  }
  function athleticsCarouselGo(idx){ athleticsCarouselShow(idx); }
