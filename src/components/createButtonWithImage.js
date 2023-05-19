export function createButtonWithImage(name, containerButtons, routeImage) {
    const Button = document.createElement('button');
    Button.setAttribute('data-filter', name.toLowerCase());
    Button.setAttribute('title', `Projects with: ${name}`);
    Button.classList.add('opacity0'); // style to animation - fade in

    const image = document.createElement('img');
    image.src = `${routeImage}/${name.toLowerCase()}.svg`;
    Button.appendChild(image);

    containerButtons.appendChild(Button);
}
