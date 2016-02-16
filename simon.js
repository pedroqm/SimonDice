var nivel=0;
var aRandom=new Array(0); 
var	falso=true;
var record=0; // maximo record que a logrado un jugador;
var contador=0 ;
var i=0;
var aux=0;

window.onload = function(){

	// En primer lugar creamos la cookie del jugador

/*var cad=prompt("Nombre del jugador");
console.log(cad);

			cad = cad + "=record,"+record ; 

document.cookie=cad;*/

// esto hay que cambiarlo, ya que crea muchas cookies, una para cada jugador, lo suyo es una cookie para todos los jugadores y mostrar las puntuaciones mas altas

document.getElementById("boton").addEventListener("click",function(){comenzar()});

document.getElementById("rojo").addEventListener("click",function(){comprobar("rojo")});
 		
document.getElementById("azul").addEventListener("click",function(){comprobar("azul")});
 	
document.getElementById("verde").addEventListener("click",function(){comprobar("verde")});
 		
document.getElementById("amarillo").addEventListener("click",function(){comprobar("amarillo")});

}

function comenzar(){
	fallo=false;
	nivel++;
	aux= nivel;
	document.getElementById("boton").disabled=true;
	
	document.getElementById("nivel").innerHTML= "Nivel : " + nivel;
	i=0;
 
 		CambiaColor();
	

}


function CambiaColor(){

	aRandom[aRandom.length]= getRandom(1,4);
	numRan=aRandom[i];
	i++;
//esta funcion se tiene que ejecutar tantas veces como el nivel en el que estemos
//a nivel 1 una vez, a nivel 2 dos veces y viceversa 



	switch(numRan){ //aqui recorremos el array aRandom[i] por cada nivel
				case 1:
				document.getElementById("rojo").style.background= "#F00";
				window.setTimeout(function(){     
					document.getElementById("rojo").style.background= "#8A0808";	
					
				},1000);
				break;
				case 2:
				document.getElementById("azul").style.background= "#00F";
				window.setTimeout(function(){ 
					document.getElementById("azul").style.background= "#0B0B61";
				 },1000);
				break;
				case 3: 
				document.getElementById("verde").style.background= "#0F0";
				window.setTimeout(function(){ 
					document.getElementById("verde").style.background= "#0B610B";
				 },1000);
				break;
				case 4:
				document.getElementById("amarillo").style.background= "#FF0";
				window.setTimeout(function(){ 
					document.getElementById("amarillo").style.background= "#868A08";
				 },1000);
				break;
			}
		

// aqui hay que llamar otra vez a la funcion una vez que se haya encendido una luz, para que se encienda la siguiente sin que se pisen entre ellas

//hay que cojer el nivel por el que vamos al principio, una vez encendida la luz decrementarlo en 1 y volver a llamar a la funcion hasta que el nivel sea 0 

aux--;

	if (aux > 0) {		
	 	window.setTimeout(function(){
	 		CambiaColor();
	 			}, 1200);
	}else{
		i=0;
	}

}


function comprobar(color){

	switch(color){ //aqui recorremos el array aRandom[i] por cada nivel
				case "rojo":
					if (aRandom[contador]!= 1){
						
						fallo=true;
					}	
				break;
				case "azul":
					if (aRandom[contador]!= 2){
						
						fallo=true;
					}	
				break;
				case "verde":
					if (aRandom[contador]!= 3){
						
						fallo=true;
					}	
				break;
				case "amarillo":
					if (aRandom[contador]!= 4){
						
						fallo=true;
					}	
				break;
				}

		
	contador++;
	if (fallo == true){
		fin();
	}else{
		if (nivel==contador) {
		 	contador=0;
		 	comenzar();
		 }
		record++;
				 
	}	
}
 		

function fin(){

	//aqui hay que modificar la cookie y guardar el record si es mayor que la puntuacion que estaba guardada
	
	alert("Has perdido. Aciertos = "+record);
	document.getElementById("boton").disabled=false;
	 nivel=0;
 	aRandom=new Array(0); 
	falso=true;
	record=0; // maximo record que a logrado un jugador;
 	contador=0 ;
 	i=0;
	aux=0;
}

function getRandom(min, max) {
	n= Math.floor(Math.random() * (max - min)) + min;	 		
  return n;
}