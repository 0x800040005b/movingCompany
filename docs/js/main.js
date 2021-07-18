document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('#burger'),
        overlay = document.querySelector('#overlay'),
        menuContainer = document.querySelector('#menu-container'),
        body = document.body,
        closeMenu = document.querySelector('#header-menu__close');
    header = document.querySelector('#header');

    let widthScreen = 1200;

    if (burger != null) {
        burger.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            event.preventDefault();
            console.log('clicked burger');
            openAndCloseMenu();

        });
    }
    if (closeMenu != null) {
        closeMenu.addEventListener('click', function () {
            openAndCloseMenu();
        })
    }

    function openAndCloseMenu() {
        menuContainer.classList.toggle('active');
        closeMenu.classList.toggle('active');
        body.classList.toggle('lock');

    }
    window.addEventListener("resize",function () {
        let instance = menuContainer.classList.contains('active') && closeMenu.classList.contains('active') && body.classList.contains('lock');
        if(window.innerWidth >= widthScreen){
            if(instance){
                openAndCloseMenu();
            }

        }
    });


});