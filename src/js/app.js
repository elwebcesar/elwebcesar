import { skills, projects } from './data.js';

const containerSkills = document.getElementById('skills');
const containerProjects = document.getElementById('projects');


skills.forEach(skill => {
  const skillButton = document.createElement('button');
  skillButton.textContent = skill;
  skillButton.setAttribute('data-filter', skill);

  const image = document.createElement('img');
  image.src = `ruta/${skill.toLowerCase()}.svg`;

  skillButton.appendChild(image);

  containerSkills.appendChild(skillButton);
});

const resetButton = document.createElement('button');
resetButton.textContent = "all";
resetButton.setAttribute('data-filter', "all");
containerSkills.appendChild(resetButton);


projects.projects.forEach(project => {
  const projectDiv = document.createElement('div');
  const skills = project.skills.join(' ');

  projectDiv.innerHTML = `
    <h2>${project.name}</h2>
    <img src="${project.image}" alt="${project.name}">
    ${project.skills.map(skill => `${skill} `).join('')}
    <ul>
      ${project.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
    <a href="${project.figma}">Figma</a>
    <a href="${project.link}">Link</a>
    <a href="${project.github}">GitHub</a>
  `;

  projectDiv.setAttribute('data-filter', skills.toLowerCase());
  containerProjects.appendChild(projectDiv);
});




