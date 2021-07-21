document.addEventListener('DOMContentLoaded', function () {
    let button_reviews = document.querySelector('#reviews-button'),
        reviews__items = document.querySelectorAll('.reviews-item');

    if(button_reviews != null && reviews__items != null && reviews__items.length >0){
        hideItems();
        button_reviews.addEventListener('click', (event)=>{
            checkHide();
        });
    }
    function checkHide() {
        button_reviews.classList.toggle('review--active');
        if(button_reviews.classList.contains('review--active')){
            button_reviews.textContent = 'Скрыть отзывы';
            hideItems();
        }else{
            button_reviews.textContent = 'Все отзывы';
            hideItems();

        }

    }
    function hideItems() {
        if(window.innerWidth <= 768){
            reviews__items.forEach((item,index)=>{
                if(index > 0){
                    item.classList.toggle('reviews-hide');
                }
            });
        }else{
            reviews__items.forEach((item,index)=>{
                if(index > 2){
                    item.classList.toggle('reviews-hide');
                }
            });

        }
    }
});