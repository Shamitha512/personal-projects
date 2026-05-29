// MOBILE MENU

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// PROJECT DATA

const projectsData = [
  {
    name: "Student Grievance Portal",
    desc: "Full stack grievance management system for students.",
    icon: "fas fa-graduation-cap",
    link: "https://github.com/Peng-uinni/fsd-pbl-student-grievance.git"
  },

  {
    name: "AI Chatbot",
    desc: "Conversational AI assistant using NLP.",
    icon: "fas fa-robot",
    link: "https://github.com/ShawnDsa/custom-bot.git"

  },

  {
    name: "Plant Disease Detection",
    desc: "ML based plant disease detection system.",
    icon: "fas fa-leaf",
    link: "https://github.com/Shamitha512/Plant-Disease-Detection.git"
  }
];

const projectsGrid = document.getElementById('projectsGrid');

function loadProjects() {

  projectsData.forEach(project => {

    const card = document.createElement('div');

    card.className = 'project-card';

    card.innerHTML = `
      <div class="project-icon">
        <i class="${project.icon}"></i>
      </div>

      <h3>${project.name}</h3>

      <p>${project.desc}</p>

      <a href="${project.link}" target="_blank" class="project-link-btn">
        View Project →
      </a>
    `;

    projectsGrid.appendChild(card);
  });
}

loadProjects();


// CONTACT FORM

const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

contactForm.addEventListener('submit', (e) => {

  e.preventDefault();

  formAlert.innerHTML = "✓ Message Sent Successfully!";

  contactForm.reset();

  setTimeout(() => {
    formAlert.innerHTML = "";
  }, 3000);
});