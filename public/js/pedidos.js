const mc = document.getElementById('mc');
const bk = document.getElementById('bk');
const kfc = document.getElementById('kfc');
const preguntas = document.getElementsByClassName('preguntas');

function main(){
    kfc.addEventListener('click',()=>{
        blanquear();
        kfc.style.backgroundColor="red";
        rellenarFormulario(preguntas, ["Restaurante: KFC","Pedido: Bucket","Precio: 90.0"]);

    })

    mc.addEventListener('click',()=>{
        blanquear();
        mc.style.backgroundColor="red";
        rellenarFormulario(preguntas, ["Restaurante: McDonald","Pedido: Cajita Feliz","Precio: 100.0"]);
    })

    bk.addEventListener('click',()=>{
        blanquear();
        bk.style.backgroundColor="red";
        rellenarFormulario(preguntas, ["Restaurante: Burger King","Pedido: Stacker Cuadruple","Precio: 120.0"]);
    })
}

function rellenarFormulario(preguntas,respuestas){
    let i=0;

    while(i<respuestas.length){
        preguntas[i].value= respuestas[i];
        i++;
    }
}

function blanquear(){
    kfc.style.backgroundColor="white";
    mc.style.backgroundColor="white";
    bk.style.backgroundColor="white";
}


main();