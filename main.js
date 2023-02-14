var arregloEncriptado = []; //Arreglo para meter las letras encriptadas
var arregloDesencriptado = [];//Arreglo para meter las letras desencriptadas
var letraEncriptada = ""; //variable para letra encriptada
var letraDesencriptada = "";//variable para letra desencriptada
var arregloOriginal = [];//arreglo para meter la palabra inicial para encriptar
var arregloOriginal2 = [];//arreglo para meter la palabra inicial para desencriptar


//Con esta funcion encriptamos las vocales y recorremos el arregloOriginal letra por letra para encontrar y replazar las vocales
function encriptar(letra){
    for(var x = 0; x < letra.length; x++){ 
        if(letra[x] == "a"){
            
            letraEncriptada = "ai";//Asignamos la letra encriptada a la variable letraEncriptada
            arregloEncriptado.push(letraEncriptada);//Metemos la letra encriptada al arregloEncriptado

        }if(letra[x] == "e"){

            letraEncriptada = "enter";
            arregloEncriptado.push(letraEncriptada);
            
        }if(letra[x] == "i"){
            
            letraEncriptada = "imes";
            arregloEncriptado.push(letraEncriptada);
            
        }if(letra[x] == "o"){
            
            letraEncriptada = "ober";
            arregloEncriptado.push(letraEncriptada);
 
        }if(letra[x] == "u"){
            
            letraEncriptada = "ufat";
            arregloEncriptado.push(letraEncriptada);
            
        }if(letra[x] != "a" && letra[x] != "e" && letra[x] != "i" && letra[x] != "o" && letra[x] != "u"  ){

            letraEncriptada = letra[x];
            arregloEncriptado.push(letraEncriptada);
        }
    }
    return(arregloEncriptado);//Retornamos el arregloEncriptado
}

 
//Esta funcion es llamada en el boton del html y lo que hace es que muestra la palabra ya encriptada
function mostrarEncriptado(){
    
    var txtArea = document.getElementById('entrada').value;//obtenemos el valor escrito en el txtArea
    arregloOriginal=txtArea.split('');//Con el split, dividimos la palabra en un arreglo y letra por letra gracias a ('') y lo metemos al arregloOriginal
    var arregloUnionEncriptado = encriptar(arregloOriginal);//utilizamos la funcion encripar y le pasamos de parametro el arregloOriginal y lo retornado se guarda en la variable arregloUnionEncriptado 
    var palabraEncriptada = arregloUnionEncriptado.join('')//El arregloUnionEncriptado lo unimos gracias al .join('') y sus elementos formaran la palabra final (string)
    ocultarDiv();
    document.getElementById('salida').value=palabraEncriptada; //Con esto mostramos la palabra encriptada en el texto con id Salida
}

function desencriptar2(letra2){ 
    for(var l = 0; l < letra2.length; l++){ 
        for(var k = 0; k < 1; k++){
            if(letra2[l] == "a"){

                letraDesencriptada = "a";
                arregloDesencriptado.push(letraDesencriptada);  
                l=l+1;
                break;
            }
            if(letra2[l] == "e"){

                letraDesencriptada = "e";
                arregloDesencriptado.push(letraDesencriptada);  
                l=l+4;
                break;
            }
            if(letra2[l] == "i"){

                letraDesencriptada = "i";
                arregloDesencriptado.push(letraDesencriptada);  
                l=l+3;
                break;
            }
            if(letra2[l] == "o"){

                letraDesencriptada = "o";
                arregloDesencriptado.push(letraDesencriptada);  
                l=l+3;
                break;
            }
            if(letra2[l] == "u"){

                letraDesencriptada = "u";
                arregloDesencriptado.push(letraDesencriptada);  
                l=l+3;
                break;

            }if(letra2[l] != "a" && letra2[l] != "e" && letra2[l] != "i" && letra2[l] != "o" && letra2[l] != "u"  ){
                letraDesencriptada = letra2[l]
                arregloDesencriptado.push(letraDesencriptada);
                break;
            }

        }
    }
    return(arregloDesencriptado);
}

//Esta funcion esta llamada en el boton de html y lo que hace es mostrar la palabra ya desencriptada
function mostrarDesencriptado(){

    var txtArea2 = document.getElementById('entrada').value;//obtenemos los valores del txtArea
    arregloOriginal2=txtArea2.split('');//Con este convertimos en un arreglo la palabra del txtArea y lo guardamos en arregloOriginal2
    var arregloUnionDesencriptado = desencriptar2(arregloOriginal2);//A la funcion desencriptar le pasamos como parametro el arregloOriginal2
    var palabraDesencriptada = arregloUnionDesencriptado.join(''); //Con el .join('') unimos todos los elementos del arregloUnionDesencriptado para formar un solo string y lo guardamos el palabraDesencriptada
    ocultarDiv();
    document.getElementById('salida').value=palabraDesencriptada;//Con esto lo mostramos en el TextArea que tenga el id = "salida"
}

function copiar(){
    var palabraCopiada = document.getElementById('salida').value; //Obtenemos el valor del txtArea
    navigator.clipboard.writeText(palabraCopiada); //Con esto copiamos al portapapeles(clipboard) es importante saber que este metodo espera una promesa y hay que saber usarlo(no se como funciono ahorita)
    ocultarDiv();
    var limpiarEntrada = document.getElementById('form');//Obtenemos el form del html
    limpiarEntrada.reset();//Reseteamos el formulario, para que podamos seguir escribiendo
    arregloEncriptado = [];//Con esto limpiamos el arreglo que esta en la funcion encriptar, ya que si no lo hacemos guarda la palabra anterior y continua metiendo datos desde el indice que se quedo
    arregloDesencriptado=[];//Con esto limpiamos el arreglo que esta en la funcion desencriptar, ya que si no lo hacemos guarda la palabra anterior y continua metiendo datos desde el indice que se quedo
    alert("¡la palabra fue copiada exitosamente!");
}

function ocultarDiv(){
    var ocultar = document.getElementById("ocultar"); 
    if (ocultar.style.display === 'none') {
        ocultar.style.display = 'block';
      } else {
        ocultar.style.display = 'none';
      } 
    var ocultarBoton = document.getElementById("botonCopiarOcultar"); 
    if(ocultarBoton.style.display ==='block'){
        ocultarBoton.style.display = 'none';
    }else{
        ocultarBoton.style.display = 'block';
    }
}
/*Actualizacion más reciente, aqui reparamos la funcion desencriptar porque tenia problemas con las vocales juntas "concluir"-->"ui"
esta funcion ya resuleve este problema y nuestro proyecto ya funciona completamente, solo falta seguir afinando detalles  */