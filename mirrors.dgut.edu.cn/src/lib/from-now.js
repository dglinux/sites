let s = 1;
let m = s * 60;
let h = m * 60;
let d = h * 24;

function format(delta, abs, n, unit) {
  let m = Math.round(abs / n);
  return (delta > 0 ? 'in ' : '') +
    m + ' ' + unit + (m > 1 ? 's' : '') +
    (delta < 0 ? ' ago' : '');
}

export default function fromNow(unix) {
  if (unix == -62135596800) {
    return '';
  }
  let now = Math.round(new Date().getTime() / 1000);
  let delta = unix - now;
  let abs = Math.abs(delta);
  if (abs >= d) {
    return format(delta, abs, d, 'day');
  }
  if (abs >= h) {
    return format(delta, abs, h, 'hour');
  }
  if (abs >= m) {
    return format(delta, abs, m, 'minute');
  }
  return delta > 0 ? 'soon' : 'just now';
}
