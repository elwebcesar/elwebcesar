import './sass/main.scss';

import { skills, projects } from './components/data/data.js';
import { elementsRemoveStyle } from './components/elementsRemoveStyle';
import { createButtonWithImage } from './components/createButtonWithImage.js';
import { createCardProject } from './components/createCardProject';
import { createCardProjectSkeleton } from './components/createCardProjectSkeleton';
import { filtering } from './components/filtering/filtering';

// General selectors
const containerSkills = document.getElementById('skills');
const containerProjects = document.getElementById('projects');

// General variables
const routeImage = "asset";
const timeInterval = 200;
const dataResetFilters = 'return';


// ------------------------------------------------------------
// Skills
// ------------------------------------------------------------
skills.forEach(skill => {
  createButtonWithImage(skill, containerSkills, routeImage);
});

const elements = containerSkills.querySelectorAll('button');
setTimeout(() => {
  elementsRemoveStyle(elements,'opacity0',timeInterval);
}, timeInterval*4);

createButtonWithImage(dataResetFilters, containerSkills, routeImage);


// ------------------------------------------------------------
// Projects
// ------------------------------------------------------------
createCardProjectSkeleton(projects.projects.length, containerProjects);

const projectsElements = createCardProject(projects);
console.log(projectsElements);


setTimeout(() => {
  containerProjects.innerHTML = "";

  projectsElements.forEach(element => {
    containerProjects.appendChild(element);
  });
}, timeInterval*16);


// ------------------------------------------------------------
// Filtering
// ------------------------------------------------------------
const classNoDisplay = 'opacity0';
const classActive = 'active';
const classShow = 'show';
const classHide = 'hide';

// selectors
const filters = containerSkills.querySelectorAll('button');
const buttonAll = containerSkills.querySelector(`button[data-filter="${dataResetFilters}"]`);

filtering(dataResetFilters, classNoDisplay, classActive, classShow, classHide, filters, buttonAll, projectsElements);
