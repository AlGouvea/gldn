// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

var banner;

var t0 = performance.now()

window.addEventListener("load", function slide(){
    banner = document.getElementById("Banner1")
})

function changeBanner(){
    var src = banner.style.background
    
    var b0 = 'url("/assets/Banner0.jpg")'

    if(src == b0){
        banner.style.background = 'url("/assets/Banner1.jpg")'
    }else{
        banner.style.background = 'url("/assets/Banner0.jpg")'
    }
    
}

var time = setInterval(changeBanner, 2000)