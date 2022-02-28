const menuHover = document.querySelectorAll('.nav-menu');
const drop_down_div = document.querySelectorAll('.drop-down');
const mobile_menu = document.querySelector('#menu-icon')
const side_bar = document.querySelector('#mobile-drop-down')



for(let i = 0; i < menuHover.length; i++){
    menuHover[i].addEventListener('mouseover', () => {
        menuHover[i].classList.add('hover')
        drop_down_div[i].style.display = 'block'
    
        drop_down_div[i].addEventListener('mouseover', () => {
            menuHover[i].classList.add('hover')
            drop_down_div[i].style.display = 'block'
        })

        drop_down_div[i].addEventListener('mouseout', () => {
            menuHover[i].classList.remove('hover');
            drop_down_div[i].style.display = 'none'
        })
    })

    menuHover[i].addEventListener('mouseout', () => {
        menuHover[i].classList.remove('hover');
        drop_down_div[i].style.display = 'none'
    })
}


mobile_menu.addEventListener('click', () => {
    const slide = document.querySelector('.slide');
    if(slide.style.marginLeft === '0px'){
        slide.style.marginLeft = '-1000px';
    }
    else{
        slide.style.marginLeft = '0px'
    }
})