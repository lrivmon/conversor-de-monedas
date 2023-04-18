//inicializcion de var, objetos, DOM
const coinInput=document.getElementById('moneda');
const dollarInput=document.getElementById('dollar');
const sterlingInput=document.getElementById('sterling');
const yenInput=document.getElementById('yen');
const error=document.getElementById('error');
const formEntrada=document.getElementById('formEntrada');
const euro = 1;
const mondollar = 1.0922;
const esterlina = 0.88311;
const monyen = 146.89;

//Funciones

function conversor(){

}

//Funciones evento
function comprobarForm(event){
    if(coinInput.value.length===0){
        coinInput.focus();
        event.preventDefault();
        error.innerText="El campo  está vacío, introduzca una cantidad";
        return false;
    }else if(coinInput.value < 1){
        coinInput.focus();
        event.preventDefault();
        error.innerText="No puede introducir valores negativos o iguales a 0";
        return false;
    }else if(isNaN(coinInput.value)){
        coinInput.focus();
        event.preventDefault();
        error.innerText="Introduzca valores númericos";
        return false;    
    }
    console.log((coinInput.value*mondollar)/euro);
    console.log((coinInput.value*esterlina)/euro);
    console.log((coinInput.value*monyen)/euro);

    let resdollar = (coinInput.value*mondollar)/euro;
    let ressterling = (coinInput.value*esterlina)/euro;
    let resyen = (coinInput.value*monyen)/euro;

    dollar.innerText= resdollar;
    sterling.innerText= ressterling;
    yen.innerText= resyen;
    event.preventDefault();

    return true;
}

//Inicio de cargar de eventos
formEntrada.addEventListener('submit',comprobarForm);