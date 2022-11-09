let nav = document.querySelector('.hamburger-menu')
let mobileMenu = document.querySelector('.mobile-menu')
let arrow = document.querySelector('.arrow')
let headerTitle = document.querySelector('.header-title')

let navmenu = () => {

    if(mobileMenu.classList.contains('hidden')){
        arrow.classList.remove('show')
        arrow.classList.add('hidden')
        headerTitle.classList.remove('show')
        headerTitle.classList.add('hidden')   
        mobileMenu.classList.remove('hidden')
        mobileMenu.classList.add('show')   
    } else {
        mobileMenu.classList.remove('show')
        mobileMenu.classList.add('hidden')   
        headerTitle.classList.remove('hidden')
        headerTitle.classList.add('show')   
        arrow.classList.remove('hidden')
        arrow.classList.add('show')   
    }
}

nav.addEventListener('click', navmenu)
