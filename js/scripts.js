// 1️⃣Crea un input donde el usuario pueda escribir su nombre y un botón con el texto "Say hello".
// Al pulsar el botón, se debe crear e insertar un elemento h2 con el texto "Hello, [nombre]".

// 💡 Detalles técnicos que deben aplicar:
// El h2 debe generarse dinámicamente con createElement.
// El texto debe construirse a partir del valor del input, si está vacío o tiene menos de 3 letras no se insertará nada.

const textElement = document.getElementById('text');
const buttonElement = document.getElementById('button');
const newName = document.createElement('h3');
const newDiv = document.createElement('h3');

const sayHello = () => {
  const textContentInput = textElement.value;

  if (textContentInput === '' || textContentInput.length < 3) {
    return;
  } else if ((newName.textContent = `Hello ${textContentInput}`));
  newDiv.prepend(newName);
  document.body.append(newDiv);
};
buttonElement.addEventListener('click', sayHello);
textElement.addEventListener('submit', sayHello);
