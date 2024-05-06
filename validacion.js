const form = document.querySelector("form");

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("asunto").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }

  // Validación del formato de email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingresa un correo electrónico válido.");
    return false;
  }
  // Validación del tamano de las cadenas
  if (nombre.length > 50 || asunto.length > 50) {
    alert("El nombre y el asunto deben tener un máximo de 50 caracteres.");
    return false;
  }
  // Validacion del tamano del mensaje
  if (mensaje.length > 300) {
    alert("El mensaje debe tener un máximo de 300 caracteres.");
    return false;
  }

  // Aquí puedes agregar más validaciones si es necesario
  console.log("El formulario se validó correctamente.");
  return true; // Si pasa todas las validaciones, se envía el formulario
}

function sendEmail() {
  if (validarFormulario()) {
  const cuerpoCorreo = `${mensaje.value}<br>
                        <br> Enviado por: ${email.value}`;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "dianasantillana24@gmail.com",
      Password: "643E40220652E90BBD81EAC1835AE1D2CB31",
      To: "dianasantillana24@gmail.com",
      From: "dianasantillana24@gmail.com",
      Subject: document.getElementById("asunto").value,
      Body: cuerpoCorreo,
    })
      .then((message) => alert("Tu mensaje fue enviado con éxito."))
      .catch((error) =>alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."));
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});