//scrolling

window.addEventListener('scroll', () => {
   let scrolling = window.pageYOffset;

   //header
   const header = document.querySelector('.header');
   if (scrolling > 150) {
      header.classList.add('header-fixed');
      } else {
      header.classList.remove('header-fixed');
   }
});

// burger
function burger(obj) {

   const body = document.body;
   const burger = document.querySelector(obj.burger);
   const burgerContent = document.querySelector(obj.burgerContent);
   const burgerClose = document.querySelector(obj.burgerClose);

   burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      burgerContent.classList.toggle('bg-active');
      body.classList.toggle('look');
   });
   if (burgerClose && burgerClose !== burger) {
      burger.classList.remove('active');
      burgerClose.classList.remove('bg-active');
      body.classList.remove('look');
   } else if (burgerClose === burger) {
      console.error(`элементы '${obj.burger}' и '${obj.burgerClose}' являются одним элементом`)
   }
}

const bur = burger({
   burger: '.button',
   burgerClose: '.burger-close',
   burgerContent: '.header__nav'
});