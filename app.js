

let inputText = document.getElementById("input-text");
let resultText = document.getElementById("result-text");
let btnEncrypt = document.getElementById("boton-encrypta").addEventListener('click', convertir);
let btnDesencrypt = document.getElementById("boton-des").addEventListener('click', desconvertir);
let btnCopiar =  document.getElementById("btn-copiar").addEventListener('click', copiar)
let copiado = document.getElementById("copiado");
let muneco = document.getElementById("munecotexto");


function convertir(){
    //busca cada letra y las reemplaza con el texto
    let texto = inputText.value
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g, "ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");

    resultText.value = texto;
    inputText.value = "";

    muneco.style.display="none"
}


function desconvertir(){
    //toma los textos y los regresa a letras
        let texto = inputText.value
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ai/g, "a")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
    
        
        resultText.value = texto;
        inputText.value = "";
}

function copiar(){
    if(resultText.value != 0){
        navigator.clipboard.writeText(resultText.value);
        alert("Copiado!")
        resultText.value=""
    } else{
      alert("No hay texto para copiar")
    }
    
    
}
