let modeBtn = document.querySelector(".modeBtn")
let port = document.querySelector(".port")
let name1 = document.querySelector(".name")
let mob = document.querySelector(".mob")
let email = document.querySelector(".email")
let btn = document.querySelector(".btn")
let mode = 0
let root = document.querySelector('html')
modeBtn.addEventListener('click',()=>{
    if (mode==0) {
        modeBtn.innerHTML='<i class="fa fa-lightbulb-o" aria-hidden="true"></i>'
        mode=mode+1
        root.style.color = 'white'
        root.style.backgroundColor = 'black'
    }
    else{
        modeBtn.innerHTML='<i class="fa fa-moon-o" aria-hidden="true"></i>'
        mode=mode-1
        root.style.color = 'black'
        root.style.backgroundColor = 'white'
    }
})
port.addEventListener('click',()=>{
    window.location.replace('./index.html')
})
btn.addEventListener('click',()=>{
    name1.value = mob.value = email.value = ""
})