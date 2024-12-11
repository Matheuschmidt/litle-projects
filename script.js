
function carregar(){
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#img');
    var data = new Date();
    var hora = data.getHours();
   //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png';
        document.body.style.backgroundColor = "#64b6e0";
    
}else if(hora >= 12 && hora <= 18){
    //boa tarde
    img.src = 'tarde.png';
    document.body.style.backgroundColor = "#f2b763";
}else{
    //boa noite
    img.src = 'noite.png';
    document.body.style.backgroundColor = "#0358bb";
}

}