let logo = document.querySelector(".logo");

let cont = 0;

setInterval(function (){
    cont = cont + 20;
    console.log(cont);
    logo.style.transform = "rotate("+cont+"deg)";
    if(cont > 360){
        cont = 0;
    }
},1000);
