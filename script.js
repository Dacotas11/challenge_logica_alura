
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



var boton_encriptar = document.querySelector('#btn-encriptar');
var boton_desEncriptar = document.querySelector('#btn-desencriptar');
var boton_copiar = document.querySelector('#btn-copy');
var input = document.querySelector('#input-texto');
var text_resultado = document.querySelector('#msg');


function tieneAcentos(string){
    var acentos = ['á','é','í','ó','ú'];
    
    for (const x in acentos) {
        if (string.search(acentos[x]) != -1){
            return true;
        }
    }
    return false;
}

function tieneMayusculasOAcentos(){
    
    if( input.value.toLowerCase() != input.value || tieneAcentos(input.value)){
        return true;
    }else{
    return false;
    }
}

function encriptar(string) {
    /*
        Aqui se itera sobre cada elemento del texto del input si se encuentra
        uno de los indices en codigos que en este caso son a,e,i,o,u se agrega
        su correspondiente codigo al resultado nuevo si no se encuentra se agrega
        el caracter que va en esa posicion y al final se devuelve el resultado
        */

    var codigos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }
    var indices =Object.keys(codigos);

    var resultadoNuevo = '';
   
    for (const x in string) {
        var seEncontro = false;
        for (const y in indices) {
            if (string[x] == indices[y]) {
                resultadoNuevo = resultadoNuevo + codigos[indices[y]]
                seEncontro = true;
            }
        }
        if (seEncontro == false) {
            resultadoNuevo = resultadoNuevo + string[x];
        }
        
    }
    return resultadoNuevo;
}


function boton_encriptarHandler(){    
    text_resultado.value = '';

    if (tieneMayusculasOAcentos()){
        alert('Solo se aceptan mensajes en minusculas y sin acentos');
    } else{  
        text_resultado.value = encriptar(input.value);
    }

}

boton_encriptar.addEventListener('click', boton_encriptarHandler);


function desEncriptar(string) {
    resultado = string;
    var codigos = {
        'ai':'a',
        'enter':'e',
        'imes':'i',
        'ober':'o',
        'ufat':'u'
    }

    var indices = Object.keys(codigos);

    for (const x in indices) {
        resultado = resultado.replaceAll(indices[x], codigos[indices[x]]);
    }
    
    return resultado;
}

function boton_desEncriptarHandler(){
    
    text_resultado.value = '';

    // console.log(tieneAcentos(resultado));
    if (tieneMayusculasOAcentos()){
        alert('Solo se aceptan mensajes en minusculas y sin acentos');
    } else{  
        text_resultado.value = desEncriptar(input.value);
    }
}


boton_desEncriptar.addEventListener('click',boton_desEncriptarHandler)


function boton_copiarHandler() {
 text_resultado.select();
 document.execCommand('copy');
 alert('Copiado!');
}

boton_copiar.addEventListener('click', boton_copiarHandler);