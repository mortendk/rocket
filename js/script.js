// Drop down menu for mobile
(function ($){
  $(document).ready(function(){

    $(".mobilemenu-icon").bind("click", function(){
      $("header[role=banner]").slideToggle();
      $(this).toggleClass('mobilemenu-icon-active');
    });

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
