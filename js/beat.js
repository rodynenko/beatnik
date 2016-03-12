// JS to Bit-Generation   --------------------------------------------------
$("#first-page").height(window.innerHeight);
$("#bit-def").height(window.innerHeight);
$(".title-block").css("padding-top", window.innerHeight*0.2);
$(".def-block").css("padding-top", window.innerHeight*0.15);
//  Path animation    ------------------------------------------------------
var s = d3.select("svg#icon2").selectAll("path").call(transition);

function transition(path){
  path.transition()
    .duration(3000)
    .attrTween("stroke-dasharray", tweenDash);
}

function tweenDash() {
  var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray attr
  return function(t) {
    return i(t);
  };
}
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
