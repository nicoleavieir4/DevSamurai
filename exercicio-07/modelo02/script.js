function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'babyboy.png')
            } else if (idade < 21){
                img.setAttribute('src', 'youngman.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultman.png')
            } else {
                img.setAttribute('src', 'elderlyman.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'babygirl.png')
            } else if (idade < 21){
                img.setAttribute('src', 'youngwoman.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultwoman.png')
            } else {
                img.setAttribute('src', 'elderlywoman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}