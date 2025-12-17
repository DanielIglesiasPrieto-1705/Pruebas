var texto =  prompt("Introduce cualquier texto, por favor: ");
alert("El número de vocales de 'a' en el texto es: " + contarVocalesa(texto));
alert("El número de vocales de 'A' en el texto es: " + contarVocalesA(texto));

function contarVocalesa(texto){
    let contador = 0;
    for(let letra of texto){
        if(letra =="a"){
            contador++;
        }
    }
    return contador;
} 

function contarVocalesA(texto){
    let contador = 0;
    for(let letra of texto){
        if(letra =="A"){
            contador++;
        }
    }
    return contador;
} 