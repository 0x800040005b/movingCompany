document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu'),
        menuContainer = document.querySelector('#menu-container');
    if (menuContainer != null) {
        if (menu != null) {
            menu.addEventListener('click', function (event) {
                menuCurrent = event.target;
                menuContainer.classList.remove('active');
                document.body.classList.remove('lock');

            });
        }
    }
});