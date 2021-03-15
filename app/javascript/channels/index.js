// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
const channels = require.context('.', true, /_channel\.js/)
channels.keys().forEach(channels)

//Banner principal
var banner;
var time;

//Funcao dos botoes do banner
function slideIn(){

}

//Setup quando a pagina carrega
window.addEventListener("load", function setup(){
    //Banner e event listener
    banner = document.getElementById("Banner1")
    banner.style.background = 'url("/assets/Banner0.jpg")'

    banner.addEventListener("mouseover", slideIn)


    //botoes e event listener
    var btn1 = document.getElementById("left-btn")
    var btn2 = document.getElementById("right-btn")

    btn1.addEventListener("click", function back(){
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
        time = setInterval(changeBanner, 6000)
    })

    btn2.addEventListener("click", function fowards(){
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
        time = setInterval(changeBanner, 6000)
    })
})

//Funcao de troca das imagens
function changeBanner(){
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
}

//Tempo pra torcar
time = setInterval(changeBanner, 6000)