$("h1").text("Hello World");

$(".first").click(function() {
  $("button").not(".first").slideToggle();
});