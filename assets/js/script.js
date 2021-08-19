
function scrollButton(){
    const scrollLink = document.querySelector(".scroll__home")

    if(this.scrollY >= 100) scrollLink.classList.add('hidden-scroll'); else scrollLink.classList.remove('hidden-scroll')
}

window.addEventListener('scroll', scrollButton)


const hamburguer = document.querySelector('.hamburguer')


hamburguer.addEventListener('click', () => {
    const aside = document.querySelector('aside')
    aside.classList.toggle('show-menu')
})



const links = document.querySelectorAll('.aside__link')

links.forEach(link => {
    link.addEventListener('click', () => {
        const aside = document.querySelector('aside')
        aside.classList.remove('show-menu')
    })
})
