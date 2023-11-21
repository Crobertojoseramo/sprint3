//alert("Vienvenidos a Ploteados B.C.!");//

//titulo interactivo//
var txt="Ploteados B.C.  ";
var espera= 100;
var refresca= null;

function titulo(){
document.title = txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
refresca =setTimeout("titulo( )",espera );
}

titulo();


//h4 animado//

function animacion(){
 
    let textoAnimacion=[
    ["V","i","e","n","v","e","n","i","d","o","s"," ","!","! "],
];
    let letraContador = -1;
    let nivelArray = 0;
    const contenedorAnimacion = document.querySelector(".contenedor_texto_animacion");

    function pintarTexto(){
        letraContador++;
        contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];

        if (letraContador === textoAnimacion[nivelArray].length -1){
            clearInterval(intervalo);

            setTimeout(() =>{ 

                intervalo = setInterval(() =>{
                    contenedorAnimacion.textContent="";
                    letraContador --;
                    textoAnimacion[nivelArray].pop();

                    textoAnimacion[nivelArray].forEach((elemento) =>{
                        contenedorAnimacion.textContent += elemento;   
                    });

                    if (letraContador < 0 ){
                        clearInterval(intervalo);
                        nivelArray ++;
                        intervalo = setInterval(pintarTexto,150);

                        if (nivelArray > textoAnimacion.length -1){
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                        }
                    }

                },150);


            },1000);
        }


    }
    let intervalo = setInterval(pintarTexto,150);
}
window.addEventListener("load", animacion);