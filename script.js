var botonEncriptar = document.querySelector(".boton__encriptar");
var botonDesencriptar = document.querySelector(".boton__desencriptar");
var parrafoResultado = document.querySelector(".resultado__texto");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    document.getElementById('encriptador__descifrado__muneco').style.display = 'none';
    document.getElementById('encriptador__descifrado__texto').style.display = 'none';
    document.getElementById('encriptador__cifrado__botones').style.display = 'flex';
    var cajatexto = recuperarTexto();
    parrafoResultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    document.getElementById('encriptador__descifrado__muneco').style.display = 'none';
    document.getElementById('encriptador__descifrado__texto').style.display = 'none';
    document.getElementById('encriptador__cifrado__botones').style.display = 'flex';
    var cajatexto = recuperarTexto();
    parrafoResultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value;
}

function encriptarTexto (mensaje){
    var texto = mensaje;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return textoCifrado;
}

function desencriptarTexto (mensaje){
    var texto = mensaje;
    var textoDescifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return textoDescifrado;
}

const botonCopiar = document.querySelector(".boton__copiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado__texto").textContent;
    navigator.clipboard.writeText(contenido);
});