const picVid = document.querySelector(`#main-container > :last-child`)
const closeVid = document.querySelector(`#main-container > :last-child > :first-child`)
const body = document.querySelector("body")

const placeholder = document.querySelector(`#main-container > :last-child > #placeholder`)

const vidMusic = document.querySelector(`#main-container > :last-child > audio`)
let index = 0

console.log(closeVid)
const warna = ["blue", "red", "green"]


window.addEventListener("DOMContentLoaded", randomBG)

function randomBG(){
    let random = Math.floor(Math.random() * 6 )
    picVid.style.background = `url(./../assets/gif/gif-bg${random}.gif)`
    picVid.style.backgroundSize = "cover"
    index = (index + 1) % 6
    setTimeout(randomBG, 5000)
}





function startVideo(){
    
    body.style.overflow = " hidden"
    picVid.classList.add("fixed")
        
    setTimeout(()=>{
        if(picVid.classList.contains("fixed")){
            picVid.classList.remove("hover")
            placeholder.setAttribute("style", "display:none;")
        }
        closeVid.classList.remove("display-none")
    },1)

    setTimeout(()=>{
        vidMusic.play()
    },10)
}

picVid.addEventListener("click", startVideo)


function stopVideo(){
    picVid.classList.remove("fixed")
    setTimeout(()=>{
        picVid.classList.value = "hover"
        body.style.overflow = "auto"
        placeholder.removeAttribute("style")
    },2)
    setTimeout(()=>{
        closeVid.classList.add("display-none") 
    },3)

    setTimeout(()=>{
        vidMusic.pause()
        vidMusic.currentTime = 0
    },11)
    

}

closeVid.addEventListener("click", stopVideo)
