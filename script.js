function desplegar(imagen, parrafo, texto, texto_desplegar) {
  //ACCEDEMOS A LA FLECHA Y LE AGREGAMOS UN TOGGLE Y UNA CLASE AL CSS
  let image = document.getElementById(imagen);
  image.classList.toggle("clase_image");

  let etiqueta = document.getElementById(texto_desplegar);

  //ACCEDEMOS AL ELEMENTO P ATRAVEZ DE SU ID
  let texto_p = document.getElementById(parrafo);

  //CODICIONAL PARA CUANDO LA CLASE ESTE ACTIVA AGREGAR TEXTO AL P Y CUANDO NO, DISPLAY NONE
  if (image.classList.length === 1) {
    texto_p.innerHTML = texto;
    texto_p.style.display = "block";

    etiqueta.style.fontWeight = "bold";
  } else {
    texto_p.style.display = "none";
    etiqueta.style.fontWeight = "200";
  }
}
