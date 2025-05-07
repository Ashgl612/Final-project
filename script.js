document.addEventListener('DOMContentLoaded', () => {
    const vid = document.querySelector('.hover-audio');
    vid.addEventListener('mouseenter', () => vid.play());
    vid.addEventListener('mouseleave', () => vid.pause());
  });
  