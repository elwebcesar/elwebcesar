
import './filtering.scss';

export function filtering(dataResetFilters, classNoDisplay, classActive, classShow, classHide, filters, buttonAll, projects) {
  // console.log('dataResetFilters: ', dataResetFilters)
  // console.log('classNoDisplay: ', classNoDisplay)
  // console.log('classActive: ', classActive)
  // console.log('classShow: ', classShow)
  // console.log('classHide: ', classHide)
  // console.log('filters: ', filters)
  // console.log('buttonAll: ', buttonAll)
  // console.log('projects: ', projects)


  filters.forEach(filter => {

    console.log(filter)

    filter.addEventListener('click', function() {

      console.log('boton filtro')

      filters.forEach(f => {
        f.classList.toggle(classActive, f === filter);
      });
  
      buttonAll.classList.remove(classNoDisplay);
  
      let selectedFilter = filter.getAttribute('data-filter');
      console.log('selectedFilter: ', selectedFilter)
  
      projects.forEach(project => {
        let projectDataFilter = project.getAttribute('data-filter');
        console.log('projectDataFilter: ', projectDataFilter)

        project.classList.remove(classShow, classHide);
        project.classList.add(selectedFilter == dataResetFilters || projectDataFilter.includes(selectedFilter) ? classShow : classHide);
        selectedFilter == dataResetFilters ? buttonAll.classList.add(classNoDisplay) : null;
      });
    });
  });
}

