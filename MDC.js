function calcularMDC(a, b) {
    while (b !== 0) {
        var aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}

var n1 = 8;
var n2 = 12;
var MDC = calcularMDC(n1, n2);
console.log(`O MDC entre ${n1} e ${n2} é ${MDC}.`);