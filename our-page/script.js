function pad(n) { return n.toString().padStart(2, '0'); }
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerHTML =
        pad(now.getHours()) + '<span class="colon">:</span>' + pad(now.getMinutes()) + '<span class="colon">:</span>' + pad(now.getSeconds());
    document.getElementById('clock-date').textContent =
        now.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
}
updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll('.bio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        const isOpen = target.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        btn.textContent = isOpen ? 'Elrejtés' : 'Bemutatkozás';
    });
});

const slides = [
    {
        caption: 'hegyvonulat alkonyatkor', svg: `
      <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="360" fill="#131313"/>
        <circle cx="470" cy="120" r="42" fill="#FF5A1F" opacity="0.85"/>
        <polygon points="0,260 140,120 260,260" fill="#1A1A1A"/>
        <polygon points="180,280 340,100 480,280" fill="#212120"/>
        <polygon points="380,270 520,150 640,270" fill="#1A1A1A"/>
        <rect y="270" width="640" height="90" fill="#0A0A0A"/>
      </svg>`},
    {
        caption: 'csillagos éjszaka', svg: `
      <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="360" fill="#0A0A0A"/>
        <g fill="#F2F1EE">
          <circle cx="60" cy="50" r="1.4"/><circle cx="120" cy="90" r="1"/><circle cx="200" cy="40" r="1.6"/>
          <circle cx="300" cy="70" r="1.2"/><circle cx="380" cy="30" r="1"/><circle cx="460" cy="60" r="1.5"/>
          <circle cx="540" cy="45" r="1.1"/><circle cx="600" cy="90" r="1.3"/><circle cx="90" cy="130" r="1"/>
        </g>
        <circle cx="500" cy="80" r="22" fill="#FF5A1F" opacity="0.9"/>
        <polygon points="0,300 100,190 200,300" fill="#1A1A1A"/>
        <polygon points="150,320 320,170 480,320" fill="#212120"/>
        <polygon points="420,300 550,210 640,300" fill="#1A1A1A"/>
        <rect y="300" width="640" height="60" fill="#050505"/>
      </svg>`},
    {
        caption: 'erdei ösvény', svg: `
      <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="360" fill="#161616"/>
        <rect y="240" width="640" height="120" fill="#0A0A0A"/>
        <g fill="#1F1F1E" stroke="#3A3A38" stroke-width="0.6">
          <polygon points="60,260 90,150 120,260"/>
          <polygon points="150,260 190,120 230,260"/>
          <polygon points="260,260 300,160 340,260"/>
          <polygon points="380,260 420,130 460,260"/>
          <polygon points="480,260 515,170 550,260"/>
          <polygon points="560,260 595,150 640,260"/>
        </g>
        <polygon points="270,360 320,230 370,360" fill="#FF5A1F" opacity="0.15"/>
      </svg>`},
    {
        caption: 'napkelte a technikum felett', svg: `
      <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="360" fill="#161616"/>
        <circle cx="320" cy="230" r="66" fill="#FF5A1F" opacity="0.35"/>
        <rect x="230" y="200" width="180" height="100" fill="#0A0A0A"/>
        <rect x="255" y="220" width="24" height="30" fill="#FF5A1F" opacity="0.5"/>
        <rect x="300" y="220" width="24" height="30" fill="#3A3A38"/>
        <rect x="345" y="220" width="24" height="30" fill="#3A3A38"/>
        <polygon points="210,200 320,150 430,200" fill="#1A1A1A"/>
        <rect y="300" width="640" height="60" fill="#050505"/>
      </svg>`}
];

let slideIndex = -1;
const frame = document.getElementById('gallery-frame');
const caption = document.getElementById('gallery-caption');
const revealBtn = document.getElementById('reveal-btn');
const dotsWrap = document.getElementById('dots');
slides.forEach(() => {
    const d = document.createElement('div');
    d.className = 'dot';
    dotsWrap.appendChild(d);
});
const dotEls = dotsWrap.querySelectorAll('.dot');

revealBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    frame.innerHTML = slides[slideIndex].svg;
    caption.textContent = (slideIndex + 1) + '/' + slides.length + ' — ' + slides[slideIndex].caption;
    dotEls.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
    revealBtn.textContent = slideIndex === slides.length - 1 ? 'Kezdés elölről' : 'Következő kép';
});
