export function createCardProjectSkeleton(projects, containerProjects) {
  for (let i = 0; i < projects; i++) {
    const projectDiv = document.createElement('div');

    projectDiv.innerHTML = '<div class="projects__skeleton"></div>';

    containerProjects.appendChild(projectDiv);
  }
}
