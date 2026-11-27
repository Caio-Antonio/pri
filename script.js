// Data da viagem: 29 de novembro de 2026, à meia-noite local do navegador.
const departure = new Date('2026-11-29T00:00:00');
const fields = {
  days: document.querySelector('#days'),
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
  seconds: document.querySelector('#seconds')
};
const pad = value => String(value).padStart(2, '0');
function updateCountdown() {
  const remaining = departure - new Date();
  if (remaining <= 0) {
    document.querySelector('#count-note').textContent = 'Chegou o dia';
    Object.values(fields).forEach(field => field.textContent = '00');
    return;
  }
  const totalSeconds = Math.floor(remaining / 1000);
  fields.days.textContent = pad(Math.floor(totalSeconds / 86400));
  fields.hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
  fields.minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
  fields.seconds.textContent = pad(totalSeconds % 60);
}

document.querySelectorAll('.photo-frame img').forEach(image => {
  image.addEventListener('load', () => image.closest('.photo-frame').classList.add('has-photo'));
  image.addEventListener('error', () => image.closest('.photo-frame').classList.remove('has-photo'));
});
updateCountdown();
setInterval(updateCountdown, 1000);
