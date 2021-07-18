document.addEventListener('DOMContentLoaded', function(){
   let form = document.querySelector('#callback-form'),
       orderButtons = document.querySelectorAll('.order-button'),
       overlay = document.querySelector('#overlay'),
       formClose = document.querySelector('#callback-form__close');

   if(form != null){
      if(orderButtons != null && orderButtons.length > 0){
         orderButtons.forEach((item) =>{
            item.addEventListener('click',function (event) {
               event.preventDefault();
               event.stopImmediatePropagation();
               overlay.classList.add('active');
               form.classList.add('active');

            });
         });
      }
      if(formClose != null){
         formClose.addEventListener('click', function () {
            form.classList.remove('active');
            overlay.classList.remove('active');
         });
      }
   }

});