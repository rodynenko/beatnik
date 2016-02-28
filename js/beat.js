// JS to Bit-Generation   --------------------------------------------------
$("#first-page").height(window.innerHeight);
$("#bit-def").height(window.innerHeight);
$(".title-block").css("padding-top", window.innerHeight*0.3);
$(".def-block").css("padding-top", window.innerHeight*0.2);
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
$(".arrow-down").bind("click", pageMove);
//  TimeLine settings  ------------------------------------------------------
d3.json("beat.json", function(err, d){
  var td = { events : [] };
  for (var i=0; i<d.length; i++){
    var s = {
      start_date: {
        year: d[i].year
      },
      text: {
        // header:
        text: d[i].details
      }
    };
    td.events.push(s);
  }
  var t = new TL.Timeline('timeline', td, { height: 150, width: 600, track_events: ['nav_next','nav_previous','zoom_in','zoom_out']});
})
//  Animation Control  ------------------------------------------------------
