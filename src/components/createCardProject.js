const routeImagePorject = "./asset/projects/";

export function createCardProject(projects, containerProjects) {
  const projectElements = [];

  projects.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    const skills = project.skills.join(' ');

    projectDiv.setAttribute('data-filter', skills.toLowerCase());

    projectDiv.innerHTML = `
      <div class="projects__info" tabindex="0">
      <span><span></span></span>
        <div class="projects__info--items">
          <div>
            <h3>${project.name}</h3>
            <ul>
              ${project.details.map(skill => `<li>${skill}</li>`).join('')}
            </ul>    
          </div>
        </div>
        <div class="projects__info--image">
          <div><span></span></div>
          <img src="${routeImagePorject}${project.image}" alt="${project.name}">
        </div>
        <div class="projects__info--links">
          <a href="${project.link}" target="_blank"><img src="./asset/link.svg" alt="View project"></a>
          ${project.figma !== '' ? `<a href="${project.figma}" target="_blank"><img src="./asset/figma-white.svg" alt="View in Figma"></a>` : ''}
          ${project.github !== '' ? `<a href="${project.github}" target="_blank"><img src="./asset/github.svg" alt="View in Github"></a>` : ''}
        </div>
      </div>
    `;
    projectElements.push(projectDiv);
  });

  return projectElements;
}

