// Counter Animation
const counters = document.querySelectorAll('[data-count]');

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.count;
    let count = 0;
    const increment = target / 80;

    function update() {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }

    update();
  });
}

window.addEventListener('load', animateCounters);

// Scroll to Top Button
const scrollTop = document.createElement('div');
scrollTop.id = 'scrollTop';
scrollTop.innerHTML = '↑';
document.body.appendChild(scrollTop);

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
});

// Hamburger Menu Toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('nav').appendChild(hamburger);

const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');

  // Toggle X
  if (hamburger.classList.contains('active')) {
    hamburger.innerHTML = '<div style="transform: rotate(45deg) translate(5px,5px)"></div><div style="opacity:0"></div><div style="transform: rotate(-45deg) translate(6px,-6px)"></div>';
  } else {
    hamburger.innerHTML = '<div></div><div></div><div></div>';
  }
});
