const rootStyles = document.documentElement.style;
const containerElement = document.getElementById('container');

const newParagraphElement = document.createElement('p');

newParagraphElement.textContent = 'soy un nuevo parrafo insertado';

containerElement.prepend(newParagraphElement);

//append lo pone al final como hijo siguiente y prepend delante como hijo anterior
// esto en caso de una insercion múltiple puede consumir muchos recursos. Para ello se utiliza la inserción de fragmentos:

const numbers = [1, 2, 3, 4, 5];

const insertNumbers = () => {
  const fragment = document.createDocumentFragment();
  numbers.forEach((number) => {
    const newNumber = document.createElement('h2');
    newNumber.textContent = number;
    fragment.append(newNumber);
  });
  containerElement.append(fragment);
};

insertNumbers(numbers);
