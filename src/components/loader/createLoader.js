import './loader.scss';
export function createLoader(containerSelector) {
  if (!containerSelector) {
    console.error('El contenedor especificado no existe');
    return;
  }
  
  const loaderDiv = document.createElement('div');
  loaderDiv.classList.add('loader');
  
  containerSelector.appendChild(loaderDiv);
}

// import { createLoader } from './components/loader/createLoader';
// createLoader(containerProjects);
