const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
  const button = card.querySelector('.details-btn');

  button.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent the card click from also firing
    const extraInfo = card.getAttribute('data-info');
    alert(extraInfo);
  });

  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});