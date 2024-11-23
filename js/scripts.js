const rootStyles = document.documentElement.style;
const containerElement = document.getElementById('container');

const newParagraphElement = document.createElement('p');

newParagraphElement.textContent = 'soy un nuevo parrafo insertado';
containerElement.append(newParagraphElement);
containerElement.prepend(newParagraphElement);

//append lo pone al final como hijo siguiente y prepend delante como hijo anterior
