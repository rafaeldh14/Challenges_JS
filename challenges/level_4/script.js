let letrasCompletadas = false;
let contadorLetras = 1; // 1,2,3,4,5,...10 letras 
let contadorNumeros = 1;

const letras = document.getElementById("letras");
const numeros = document.getElementById("numeros");

function setString(boton, borrar) {

    let letra = boton.textContent.charAt(0);
    let numero = parseInt(boton.textContent.charAt(2));

    if(numero == 0 ){
        numero = 10;
    }

    if(!borrar){
        if(!letrasCompletadas){
            if(contadorLetras == numero){
                letras.textContent += letra;
                contadorLetras++;
                if(contadorLetras == 11){
                    letrasCompletadas = true;
                    contadorLetras = 1;
                    //alert("Felicidades, has completado la secuencia de letras");
                }
            }else{
                //alert("No puedes escribir la letra " + letra + " porque no es la siguiente en la secuencia");
                alert("faltan letras")
            }
        }else{
            if(contadorNumeros == numero){
                if(numero == 10){
                    numero = 0;
                }
                numeros.textContent += numero;
                contadorNumeros++;
                
            }else{
                //alert("No puedes escribir el número " + numero + " porque no es el siguiente en la secuencia");
                if(contadorNumeros == 11)
                    alert("Felicidades, has completado el reto");
                else
                    alert("faltan numeros");
            }
            
        }
    }else{
        if(boton.textContent.charAt(2) == "L"){
            letras.textContent = "";
            contadorLetras = 1;
            letrasCompletadas = false;
        }
        if(boton.textContent.charAt(2) == "N"){
            numeros.textContent = "";
            contadorNumeros = 1;
        }
    }
}