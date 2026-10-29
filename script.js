function filterSkillsByCategory(skills, category) {
  if (category === 'All') {
    return skills;
  }
  return skills.filter(skill => skill.category === category);
}

const allSkills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20, provider: 'Marcus T.' },
  { title: 'Guitar Lessons', category: 'Music', price: 15, provider: 'Jake L.' },
  { title: 'Resume Review', category: 'Career', price: 0, provider: 'Aisha R.' },
  { title: 'Web Development', category: 'Programming', price: 25, provider: 'Sarah K.' }
];

const skillsContainer = document.getElementById('skills-container');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderSkills(skills) {
  skillsContainer.innerHTML = '';

  if (skills.length === 0) {
    skillsContainer.innerHTML = '<p>No skills found in this category.</p>';
    return;
  }

  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <h3>${skill.title}</h3>
      <p class="description">${skill.category}</p>
      <p class="price">$${skill.price} / hour</p>
      <p class="provider">Provider: ${skill.provider}</p>
      <button class="details-btn">More Info</button>
    `;
    skillsContainer.appendChild(card);
  });
}

renderSkills(allSkills);

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    const filtered = filterSkillsByCategory(allSkills, category);
    renderSkills(filtered);
  });
});