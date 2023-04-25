// Funcion Codificadora
function codificador(texto) {
    // Variable donde se almacenara el String codificado
    var fraseCod = "";
  
   // Loop en el que codificaran las letras del String 
    for (var letra of texto) {
  
      // Condicional modifica las letras del String de acorde a las reglas que se pasaron
      switch (letra) {
        // La letra "e" es convertida para "enter"
        case "e":
          letra = "enter";
          break;
        // La letra "i" es convertida para "imes"
        case "i":
          letra = "imes";
          break;
        // La letra "a" es convertida para "ai"
        case "a":
          letra = "ai";
          break;
        // La letra "o" es convertida para "ober"
        case "o":
          letra = "ober";
          break;
        // La letra "u" es convertida para "ufat"
        case "u":
          letra = "ufat";
          break;
        default:
          break;
      }
  
      // Nested Loop donde se suman las letras codificadas o no en un la variable String vacia fraseCod
      for (var sum of letra) {
        fraseCod += sum;
      } // Fin del Nested Loop
  
    }
  
    return fraseCod;
  }
  // Funcion Decodificadora
  function decodificadora(textoCodificado) {
    // Se crean dos Array para mapear las palabras codificadas con su significado en letra invididual
    var palabrasCodificadas = ["enter", "imes", "ai", "ober", "ufat"];
    var palabrasDecodificadas = ["e", "i", "a", "o", "u"];
  
    // Se inicia un Loop para iterar sobre la texto codificado que ingrese el usuario
    for (var i = 0; i < palabrasCodificadas.length; i++) {
      
      /* Se inicia un Nested Loop de tipo While para realizar la decodificacion siempre que las
      palabras que ingreso el usaurio incluyan alguna de las palabras codificadas
      */
      while (textoCodificado.includes(palabrasCodificadas[i])) {
        textoCodificado = textoCodificado.replace(palabrasCodificadas[i], palabrasDecodificadas[i]);
      }
    }
  
    return textoCodificado;
  }