// Variables h3
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
// Variables botones
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");
//Variables temp
let letrasTemp = "";
let numerosTemp = "";
let contLetras = 0;
let contNumeros = 0;

//Funciones
const btnA1f = () => {
    if (contLetras == "0") {
        letras.innerHTML = "A";
        letrasTemp = "A";
        contLetras = contLetras + 1;
    } else {
        alert("Digite todas las letras en orden alfabético");
    }
    if (contNumeros == "0" && contLetras == "10"){
        numeros.innerHTML = "1";
        numerosTemp = "1";
        contNumeros = contNumeros + 1;
    }

};
const btnB2f = () => {
    if (contLetras == "1") {
        letras.innerHTML = letras + "B";
        letrasTemp = "B";
        contLetras = contLetras + 1;
    } else {
        alert("Digite las letras en orden alfabético");
    }
    if (contNumeros == "1"){
        numeros.innerHTML = "2";
        numerosTemp = "2";
        contNumeros = contNumeros + 1;
    }

};
// const llenarLetras = () => {
//     if(){

//     }
// };
// const checkLetras = () => {
//     cont = cont + 1;
//     return cont();
// };
const checkNumeros = () => {

};

// Onclick
btnA1.onclick = () => {
    btnA1f();
};
btnB2.onclick = () => {
    btnB2f();
};
btnC3.onclick = () => {
    btnC3f();
};
btnD4.onclick = () => {
    btnD4f();
};
btnE5.onclick = () => {
    btnE5f();
};
btnF6.onclick = () => {
    btnF6f();
};
btnG7.onclick = () => {
    btnG7f();
};
btnH8.onclick = () => {
    btnH8f();
};
btnI9.onclick = () => {
    btnI9f();
};
btnJ0.onclick = () => {
    btnJ0f();
};