function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `<strong>São ${horas} horas</strong>`

    if (horas >= 0 && horas < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(horas >= 12 && horas <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}