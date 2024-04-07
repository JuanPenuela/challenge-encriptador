function encriptar(){

    let texto = document.getElementById('texto').value;

    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    let convertido = document.getElementById('cambiado-texto');

    convertido.innerHTML = textoCifrado;

    document.getElementById('imagen-mensaje').setAttribute('hidden','true');
    document.querySelector('.texto-mensaje').setAttribute('hidden','true');
    document.querySelector('.mensaje-instruccion').setAttribute('hidden','true');

    console.log(texto);
}

function desencriptar(){

    let texto = document.getElementById('texto').value;

    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    let convertido = document.getElementById('cambiado-texto');

    convertido.innerHTML = textoCifrado;

    document.getElementById('imagen-mensaje').setAttribute('hidden','true');
    document.querySelector('.texto-mensaje').setAttribute('hidden','true');
    document.querySelector('.mensaje-instruccion').setAttribute('hidden','true');

    console.log(texto);
}