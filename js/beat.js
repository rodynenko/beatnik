/*
 JS to Bit-Generation
*/
$("#first-page").height(window.innerHeight);
$("#bit-def").height(window.innerHeight);
$(".title-block").css("padding-top", window.innerHeight*0.3);
$(".def-block").css("padding-top", window.innerHeight*0.2);
console.log(window.innerHeight);

/*
Path animation
*/
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
/*
  Page move
*/
function pageMove(){
  window.scrollBy(0, 15);
  if (window.pageYOffset < window.innerHeight) { requestAnimationFrame(pageMove); }
}
$(".arrow-down").bind("click", pageMove);
/*
 TimeLine settings
*/
d3.json("beat.json", function(err, data){
  var timeline_data = { events : [] };
  for (var i=0; i<data.length; i++){
    var slide = {
      start_date: {
        year: data[i].year
      },
      text: {
        // header:
        text: data[i].details
      }
    };
    timeline_data.events.push(slide);
  }
  var timeline = new TL.Timeline('timeline', timeline_data, { height: 150, width: 600, track_events: ['nav_next','nav_previous','zoom_in','zoom_out']});
})
