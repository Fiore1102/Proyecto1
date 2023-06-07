const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
         stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptado
}

var elemento;
var texto;

function btnCopiar(texto) {

    elemento = document.getElementById('mensaje');
    texto = elemento.value;
    navigator.clipboard.writeText(texto)
      .then(function() {
        console.log('Texto copiado al portapapeles.');
      })
      .catch(function(err) {
        console.error('Error al copiar el texto: ', err);
      });

  }