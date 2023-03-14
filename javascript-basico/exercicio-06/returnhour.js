var agora = new Date()
var hora = agora.getHours + agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log('Agora estamos no período da manhã. Bom dia!')
} else if (hora <= 18){
    console.log('Agora estamos no período da tarde. Boa tarde!')
} else {
    console.log('Agora estamos no período da noite. Boa noite!')
} 