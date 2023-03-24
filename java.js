const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  const range = Math.random() * 80 + 20;
  const duration = Math.random() * 10 + 8;
  bubble.style.animation = `float ${duration}s ease-in-out infinite alternate`;
  bubble.style.transform = `translate3d(0, ${range}px, 0)`;
});