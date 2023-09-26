function expandImage(img) {
  const overlay = document.getElementById('overlay');
  const expandedImage = document.getElementById('expanded-image');
  const expandedImg = document.getElementById('expanded-img');

  expandedImg.src = img.src;
  expandedImage.style.display = 'block';
  overlay.style.display = 'block';
}

function closeImage() {
  const overlay = document.getElementById('overlay');
  const expandedImage = document.getElementById('expanded-image');

  expandedImage.style.display = 'none';
  overlay.style.display = 'none';
}

// Obtén una referencia a los elementos del formulario
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('exampleInputEmail1');
const asuntoInput = document.getElementById('AsuntoCorreo');
const textoInput = document.getElementById('TextoCorreo');

// Obtén una referencia al formulario
const formulario = document.querySelector('form');

// Agrega un manejador de eventos para el evento 'submit' del formulario
formulario.addEventListener('submit', function (event) {
  // Previene el envío predeterminado del formulario (para que no se recargue la página)
  event.preventDefault();

  // Restablece los valores de los campos del formulario
  nombreInput.value = '';
  apellidoInput.value = '';
  emailInput.value = '';
  asuntoInput.value = '';
  textoInput.value = '';

  // Puedes mostrar un mensaje o realizar otras acciones aquí después de enviar el formulario
});



// Función para mostrar el mensaje emergente
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Función para cerrar el mensaje emergente
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Agrega un evento submit al formulario
document.querySelector("form").addEventListener("submit", function (e) {
  // Evita el envío del formulario predeterminado
  e.preventDefault();

  // Aquí puedes agregar la lógica para procesar el formulario
  // Por ahora, simplemente mostraremos el mensaje emergente
  showPopup();
});