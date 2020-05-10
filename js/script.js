(function($) {

  var myIndex = 0;
  carousel();

   $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

  
  function carousel() {
    var i;
    var win= $(window);
    var x = document.getElementsByClassName("mySlides");

      
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      if (myIndex == 1)
        setTimeout(carousel, 5000);
      else
        setTimeout(carousel, 3500);
    
  }


  $(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('.navbar').addClass('nav-scroll-style');
        }
        if($(this).scrollTop() < 50){
            $('.navbar').removeClass('nav-scroll-style');
        }
    });
});

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

    function myscroll(myID){
    var offset = jQuery("#"+myID).offset()
    window.scrollTo(0,offset.top);
}

  var menu = $('.menu'),
    menuLinks = menu.find('a');

  menuLinks.on('click', function(event) {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
    event.preventDefault();
  });
  

})(jQuery);

