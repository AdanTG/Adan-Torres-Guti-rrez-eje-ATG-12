function agregar(digito) {
    //Por default el + concatena
    display = document.getElementById("display").value;
    digitos = display + digito;
    document.getElementById("display").value = digitos;
}

function limpiarDisplay(){
    document.getElementById("display").value = "";
}

function calcularResultado(){
    //expresion -> 5 + 9 - 89
    expresion = document.getElementById("display").value;
    resultado = eval(expresion);
    document.getElementById("display").value = resultado;
    return resultado;
}

function calcularRaiz(){
    resultado = Math.sqrt(calcularResultado())
    document.getElementById("display").value = resultado;
}

function calcularLogaritmo(){
    resultado = Math.log(calcularResultado())
    document.getElementById("display").value = resultado;
}
