var lista = [4, 2, 3, 4, 5, 6, 20, 90, 6, 1]
var comparadorMaior, comparadorMenor, maior, menor
comparadorMaior = 0
comparadorMenor = lista[6]


for(i = 0; i < lista.length; i++){
    if (comparadorMaior < lista[i]){
        comparadorMaior = lista[i]
        maior = i
        console.log(`Na posição ${i}, a posição ${maior} é maior por enquanto...`)
    }else{

        console.log(`continua sendo ${maior} na posição ${i}...`)
    }
    
    if (comparadorMenor > lista[i]){
        comparadorMenor = lista[i]
        menor = i
        console.log(`Na posição ${i}, a posição ${menor} é menor por enquanto...`)
    }else{

        console.log(`continua sendo ${menor} na posição ${i}...`)
    }
}

console.log(`O maior valor do array está na posição ${maior}`)
console.log(`O menor valor do array está na posição ${menor}`)