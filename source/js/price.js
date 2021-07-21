document.addEventListener('DOMContentLoaded', function () {
    let button_price = document.querySelector('#price-button'),
        card__items = document.querySelectorAll('.card-item');

    if(button_price != null && card__items != null && card__items.length >0){
        hideItems();
        button_price.addEventListener('click', (event)=>{
            checkHide();
        });
    }
    function checkHide() {
        button_price.classList.toggle('card-more--active');
        if(button_price.classList.contains('card-more--active')){
            button_price.textContent = 'Скрыть цены';
            hideItems();
        }else{
            button_price.textContent = 'Все цены';
            hideItems();

        }

    }
    function hideItems() {
        if(window.innerWidth <= 768){
            card__items.forEach((item,index)=>{
                if(index > 0){
                    item.classList.toggle('card-hide');
                }
            });
        }
    }
});