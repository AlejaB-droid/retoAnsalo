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

//Contadores
let contLetras = 0;
let contNumeros = 0;

//Funciones
const btnA1f = () => {
    if (contLetras == "0") {
        letrasTemp += "A";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "1" && contLetras == "10"){
            numerosTemp += "1";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else {
            check();
        };
    };
};

const btnB2f = () => {
    if (contLetras == "1") {
        letrasTemp += "B";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "2" && contLetras == "10"){
            numerosTemp += "2";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnC3f = () => {
    if (contLetras == "2") {
        letrasTemp += "C";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "3" && contLetras == "10"){
            numerosTemp += "3";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnD4f = () => {
    if (contLetras == "3") {
        letrasTemp += "D";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "4" && contLetras == "10"){
            numerosTemp += "4";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnE5f = () => {
    if (contLetras == "4") {
        letrasTemp += "E";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "5" && contLetras == "10"){
            numerosTemp += "5";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnF6f = () => {
    if (contLetras == "5") {
        letrasTemp += "F";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "6" && contLetras == "10"){
            numerosTemp += "6";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnG7f = () => {
    if (contLetras == "6") {
        letrasTemp += "G";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "7" && contLetras == "10"){
            numerosTemp += "7";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnH8f = () => {
    if (contLetras == "7") {
        letrasTemp += "H";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "8" && contLetras == "10"){
            numerosTemp += "8";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnI9f = () => {
    if (contLetras == "8") {
        letrasTemp += "I";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "9" && contLetras == "10"){
            numerosTemp += "9";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const btnJ0f = () => {
    if (contLetras == "9") {
        letrasTemp += "J";
        letras.innerHTML = letrasTemp;
        contLetras = contLetras + 1;
    } else {
        if (contNumeros == "0" && contLetras == "10"){
            numerosTemp += "0";
            numeros.innerHTML = numerosTemp;
            contNumeros = contNumeros + 1;
        }else{
            check();
        };
    };
};

const check = () =>{
    if (contLetras == "10" && contNumeros  == "10") {
        alert("Ya digitó todas las letras y números correctamente :D");
        }
        else{
            if (contNumeros != "10" && contLetras == "10"){
                alert("Digite los números de forma ascendente y sin repetir");
            }else{
                if (contLetras != "10") {
                    alert("Digite las letras en orden alfabético y sin repetir");
            };
        };
    };
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