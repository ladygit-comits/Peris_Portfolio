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
