let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// // OU

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// BUSCAR VALORES DENTRO DO VETOR

let pos = valores.indexOf(9)
console.log(`O valor 8 está na posição ${pos}`)