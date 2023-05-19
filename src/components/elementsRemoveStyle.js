
export function elementsRemoveStyle(elements,styleRemove,interval) {
  let index = 0;

  const intervalId = setInterval(() => {
    if (index >= elements.length) {
      clearInterval(intervalId);
      return;
    }

    elements[index].classList.remove(styleRemove);
    
    index++;
  }, interval);
}
