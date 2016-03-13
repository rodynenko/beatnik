// JS to Bit-Generation   --------------------------------------------------
$("#first-page").height(window.innerHeight);
$("#bit-def").height(window.innerHeight);
$(".title-block").css("padding-top", window.innerHeight*0.2);
$(".def-block").css("padding-top", window.innerHeight*0.15);
//  Page move   -------------------------------------------------------------
function pageMove(){
  window.scrollBy(0, 15);
  if (window.pageYOffset < window.innerHeight) { requestAnimationFrame(pageMove); }
}
function pageMove2(){
  window.scrollBy(0, 15);
  if (window.pageYOffset < window.innerHeight*2) { requestAnimationFrame(pageMove2); }
}

$(".arrow-down").bind("click", pageMove);
$(".arrow-down-forward").bind("click", pageMove2);
//  Animation Control  ------------------------------------------------------
function AnimationElementHandler(e){
    var el = $(e), tp = el.offset().top;
    if (tp < $(window).height() + $("body").scrollTop() - 100){
      el.css("visibility","visible");
      el.addClass("animated fadeInUp");
    };
};

var es = [".def-text", ".keruak",".gins",".berrous",".icons1",".icons2",".icons3",".icons4"];

$(window).scroll(function(){
  $.each(es, function(j, v){
    if (!$(v).hasClass("animated")) {
      AnimationElementHandler(v);
    };
  });
});
$(document).ready(function() {
  $('#inneriframe').on('load', function(){
    setTimeout(function(){
      $('#inneriframe').contents().find('div.tl-text-content-container h2.tl-headline').css('font-size', '24px');
      $('#inneriframe').contents().find('div.tl-text-content-container h2.tl-headline').css('line-height', '28px');
      $('#inneriframe').contents().find('div.tl-text-content-container h2.tl-headline').css('font-family', '"Roboto", sans-serif');
      $('#inneriframe').contents().find('div.tl-text-content p').css('font-family', '"Roboto", sans-serif');
      $('#inneriframe').contents().find('div.tl-text-content p').css('font-size', '14px');
      $('#inneriframe').contents().find('h3.tl-headline-date').css('font-size', '16px');
      $('#inneriframe').contents().find('div.tl-credit').css('width', '25%');
      $('#inneriframe').contents().find('div.tl-text').css('width', '75%');
    }, 1500);
  });
});
