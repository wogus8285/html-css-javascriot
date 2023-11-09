const section = document.querySelector('.movie')

window.addEventListener('scroll',function(){
    let value = window.scrollY
    section.style.clipPath = `circle(${value + 50}px)`
})