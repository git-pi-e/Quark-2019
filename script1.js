// Gears Animation

$(".navbar-brand").mouseover(function(){
  $("#gear1").css({"transition": "1s ease-in-out","transform" :"rotate(180deg)"})
  $("#gear2").css({"transition": "1s ease-in-out","transform" :"rotate(-180deg)"})
  $("#gear3").css({"transition": "1s ease-in-out","transform" :"rotate(180deg)"}) 
})
$(".navbar-brand").mouseleave(function(){
  $("#gear1").css({"transition": "1s ease-in-out","transform" :"rotate(-180deg)"})
  $("#gear2").css({"transition": "1s ease-in-out","transform" :"rotate(180deg)"})
  $("#gear3").css({"transition": "1s ease-in-out","transform" :"rotate(-180deg)"}) 
})