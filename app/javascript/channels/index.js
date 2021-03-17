// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
const channels = require.context('.', true, /_channel\.js/)
channels.keys().forEach(channels)

//Variables
var banner;
var fake;
var time;
var opacity;
var s;

//Setup quando a pagina carrega
window.onload = function setup(){
    //Banner e event listener
    banner = document.getElementById("Banner1")
    fake = document.getElementById("Banner2")
    
    banner.style.background = 'url("/assets/Banner0.jpg")'
    fake.style.background = 'url("/assets/Banner0.jpg")'


    banner.addEventListener("mouseenter", slideIn)
    banner.addEventListener("mouseleave", slideOut)


    //botoes e event listener
    var btn1 = document.getElementById("left-btn")
    var btn2 = document.getElementById("right-btn")

    btn1.style.marginLeft = "-170px"
    btn2.style.marginLeft = "100vw"

    btn1.addEventListener("click", function back(){
        transitionDown()
    })

    btn2.addEventListener("click", function fowards(){
        transitionUp()
    })
}

$(document).ready(function(){
    setup()
    alert("Foi")
})


//Funcao dos botoes do banner
function slideIn(){
    //botoes
    var slide = 0;
    clearInterval(s)
    s = setInterval(arrows, 10)

    var btn1 = document.getElementById("left-btn")
    var btn2 = document.getElementById("right-btn")

    function arrows(){
        if(slide == 100){
            clearInterval(s)
            return
        }else{
            slide++
            var left = (slide-50)+"px"
            var right = "calc(100vw "+"- "+(slide+30)+"px)"

            btn1.style.marginLeft = left
            btn2.style.marginLeft = right
        }
    }
    
}


function slideOut(){
    //botoes
    var slide = 0;
    clearInterval(s)

    var btn1 = document.getElementById("left-btn")
    var btn2 = document.getElementById("right-btn")

    btn1.style.marginLeft = "-150px"
    btn2.style.marginLeft = "100vw"
}


function changeUp(){
    var src = banner.style.background

    var b0 = 'url("/assets/Banner0.jpg")'
    var b1 = 'url("/assets/Banner1.jpg")'
    var b2 = 'url("/assets/Banner2.jpg")'
    var b3 = 'url("/assets/Banner3.jpg")'


    if(src == b0){
        banner.style.background = b1
    }else if(src == b1){
        banner.style.background = b2
    }else if(src == b2){
        banner.style.background = b3
    }else{
        banner.style.background = b0
    }

    clearInterval(time)
    time = setInterval(changeBanner, 3000)
}

function transitionUp(){
    banner.style.opacity = 1;
    opacity = 1;
    var flag = 0;
    var f = setInterval(trans, 25);
    changeOtherUp()

    function changeOtherUp(){
        var src = fake.style.background

        var b0 = 'url("/assets/Banner0.jpg")'
        var b1 = 'url("/assets/Banner1.jpg")'
        var b2 = 'url("/assets/Banner2.jpg")'
        var b3 = 'url("/assets/Banner3.jpg")'
    
    
        if(src == b0){
            fake.style.background = b1
        }else if(src == b1){
            fake.style.background = b2
        }else if(src == b2){
            fake.style.background = b3
        }else{
            fake.style.background = b0
        }        
    }

    function trans(){
        if(flag == 1 && opacity == 1){
            clearInterval(f)
            return
        }else if(flag == 0 && opacity >= 0.4){
            opacity -= 0.1
            if(opacity <= 0.4){
                opacity = 0.4;
                flag = 1

                changeUp()
            }
        }else{
            opacity += 0.1
        }

        banner.style.opacity = opacity
    }
}


function changeDown(){
    var src = banner.style.background

    var b0 = 'url("/assets/Banner0.jpg")'
    var b1 = 'url("/assets/Banner1.jpg")'
    var b2 = 'url("/assets/Banner2.jpg")'
    var b3 = 'url("/assets/Banner3.jpg")'


    if(src == b0){
        banner.style.background = b3
    }else if(src == b1){
        banner.style.background = b0
    }else if(src == b2){
        banner.style.background = b1
    }else{
        banner.style.background = b2
    }

    clearInterval(time)
    time = setInterval(changeBanner, 3000)
}

function transitionDown(){
    banner.style.opacity = 1;
    opacity = 1;
    var flag = 0;
    var f = setInterval(trans, 25);
    changeOtherDown()

    function changeOtherDown(){
        var src = fake.style.background

        var b0 = 'url("/assets/Banner0.jpg")'
        var b1 = 'url("/assets/Banner1.jpg")'
        var b2 = 'url("/assets/Banner2.jpg")'
        var b3 = 'url("/assets/Banner3.jpg")'
    
    
        if(src == b0){
            fake.style.background = b3
        }else if(src == b1){
            fake.style.background = b0
        }else if(src == b2){
            fake.style.background = b1
        }else{
            fake.style.background = b2
        }        
    }

    function trans(){
        if(flag == 1 && opacity == 1){
            clearInterval(f)
            return
        }else if(flag == 0 && opacity >= 0.4){
            opacity -= 0.1
            if(opacity <= 0.4){
                opacity = 0.4;
                flag = 1

                changeDown()
            }
        }else{
            opacity += 0.1
        }

        banner.style.opacity = opacity
    }
}

//Funcao de troca das imagens
function changeBanner(){
    transitionUp()
}

//Tempo pra torcar
time = setInterval(changeBanner, 3000)