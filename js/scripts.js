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

// 2️⃣Imagina que tienes un control deslizante que te permite elegir el nivel de poder de un encabezado del 1 al 6.
// Cuanto más alto el número… más pequeño el encabezado.
// Cuando hagas clic en el botón, se generará un encabezado con la etiqueta correspondiente (h1...h6) y el texto "I am an hX", donde X es el número elegido.

// Ejemplo: si eliges 2, se insertará un <h2> con el texto "I am an h2".

const rangeElement = document.getElementById('range');
const buttonRangeElement = document.getElementById('buttonRange');

const getHeading = () => {
  const sizeHeading = rangeElement.value;
  const newHeading = document.createElement(`h${sizeHeading}`);

  newHeading.textContent = `I am an h${sizeHeading} `;
  document.body.append(newHeading);
};

buttonRangeElement.addEventListener('click', getHeading);

// # Modo Pro

// 3️⃣ 🎮 Abby y su búsqueda de suministros
// Descripción del ejercicio:
// Abby está en su travesía postapocalíptica y cada día sale en busca de suministros. Tienes que:

// Crear un botón con el texto "Find supplies".

// Debajo, un <ul> vacío con id "supply-history".

// Cada vez que se haga clic en el botón:

// Se incrementa un contador de días.

// Se elige aleatoriamente si encuentra algo o no encuentra nada. (Tendrá una probabilidad del 50% de encontrar algo útil)

// Se inserta un li en el historial con un mensaje narrativo personalizado según el resultado.

const supplyHistoryElement = document.getElementById('supply-history');
const findElement = document.getElementById('find');

const supplies = [
  'a medkit',
  'a flashlight with half battery',
  'some canned food',
  'a rusty knife',
  'a bottle of clean water',
  'a pack of bullets',
  'a piece of cloth (could be used as a bandage)',
  'a lighter',
  'an empty bottle (might be useful)',
  'some herbs (smell weird)',
  'a broken walkie-talkie',
  'a protein bar, still edible',
  'a map with strange markings'
];

const failureTexts = [
  'Nothing but silence and dust. Abby returned empty-handed.',
  'No supplies today. The world remains unforgiving.',
  "She searched everywhere, but luck wasn't on her side."
];

const findAbby = () => {};
