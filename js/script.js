const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-mobile');

burger.addEventListener('click', () => {
    menu.classList.toggle('header-mobile_active');
    burger.classList.toggle('burger_active');
});






// let text = document.querySelector('.signup__content > p');
// let inputEmail = document.querySelector('#input_email');



// btn.addEventListener('click', () => {
//   text.innerHTML = "Ваш e-mail отправлен";
// });










// slick


$('.capabilities__content').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});






// let btn_1 = document.querySelector('#send1');
// let title = document.querySelector('.signup__content > p');

//    btn_1.addEventListener('click', () => {

//     title.innerHTML = "Ваш e-mail отправлен";


 
// $.ajax({
  
//     url: "test.html",

//     data: {"id": 42}, 
 
//     context: document.body,
  
//     success: function(){
  
//       $(this).addClass("done");
       
//     }
    
    
//   });   

  
// });




// let btn_2 = document.querySelector('#send2');

//    btn_2.addEventListener('click', () => {
 
// $.ajax({
  
//     url: "test.html",
 
//     context: document.body,
  
//     success: function(){
  
//       $(this).addClass("done");
      
//     }

//   });   
  
// });




$("#form").submit(function() {
   $.ajax({
    type: "POST",
    url: "test.html",
    data: $(this).serialize()
   }).done(function() {
     alert("Спасибо");
   });
   return false;
});















