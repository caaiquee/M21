var a = 3, b = 15, multiplos = [], somaa
for(i = 0; i < 1000; i++){
    if(i%a === 0 || i%b === 0){
        multiplos.push(i)
    }
}
somaa = multiplos.reduce(function(accumulator, value){
    return accumulator + value
})
for (i = 0; i < multiplos.length; i++) {
}

module.exports = somaa
console.log(`A soma do conjuntos de multiplos entre ${a} e ${b} é: ${somaa}`)
