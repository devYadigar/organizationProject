

$( document ).ready(function() {
var slideIndex = 1;
    var isFirstTime = 1;
    var isNotFirstTime =0;
showSlides(slideIndex,1);

// Next/previous controls
function plusSlides(n) {
    
  showSlides(slideIndex += n,0);
  
  $('.text').each(function(){
      $(this).fadeIn(function(){ 
        $(this).animate({
            left: "0"
        }, 500);
  })
  });
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n,0);
}

function showSlides(n,firstTime) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
      $('.mySlides').each(function(){
          $(this).hide();
      });
      if(firstTime != 1){
        $('.text').each(function(){
           $(this).css('left' ,'80px'); 
        });
      }
  
  
  slides[slideIndex-1].style.display = "block";
       
}
        // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    
    // Get the offset position of the navbar
    var sticky = 80;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        
      if (window.pageYOffset >= sticky) {
        $('#navbar').addClass('fixed-top');
      } else {
        $('#navbar').removeClass('fixed-top');
      }
    }

    
    });

