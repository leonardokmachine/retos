function sumar() {
    let suma=0;
    let contador=0;
    let number1=Number (document.getElementById('pa11').value);

    let resultado= number1+number2;
        document.getElementById('resultado').textContent = 'la suma es: ' + resultado;
}

function multiplicar() {
    let suma=0;
    let contador=0;
    let number1=Number (document.getElementById('pa11').value);
    
    let resultado= number1*number2;
        document.getElementById('resultado').textContent = 'la multiplicacion es: ' + resultado;
}

function resta() {
    let suma=0;
    let contador=0;
    let number1=Number (document.getElementById('pa11').value);
        
    let resultado= number1-number2;
        document.getElementById('resultado').textContent = 'la resta es: ' + resultado;
}

function division() {
    let suma=0;
    let contador=0;
    let number1=Number (document.getElementById('pa11').value);
            
    let resultado= number1/number2;
    document.getElementById('resultado').textContent = 'la division es: ' + resultado;
}