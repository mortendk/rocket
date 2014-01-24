// Drop down menu for small devices
(function ($){

  $(document).ready(function(){

    //small devices icon for toggeling navigation
    $(".smalldevice-icon").bind("click", function(){
      $("header[role=banner] nav").slideToggle();
      $(this).toggleClass('active');
    });

  });

  //header logo animation
  $(document).on('scroll',function(){  

    if($(document).scrollTop()>100){
      $('header[role="banner"]').removeClass("headlarge").addClass("headsmall");
    } else{
       $('header[role="banner"]').addClass("headlarge").removeClass("headsmall");
    }


  });    

})(jQuery);



/*
Fix the rotate issue with viewports
http://webdesignerwall.com/tutorials/iphone-safari-viewport-scaling-bug
*/
(function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }

}(document));

/*
scrolle down below the adressbar
 */
/*
window.addEventListener("load",function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 0);
});
*/
