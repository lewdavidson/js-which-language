$(document).ready(function(){

  $("form#which-lang").submit(function(event){
    var name = $("select#name").val();
    var end = $("select#frnt-or-bk").val();
    var strokes = $("select#strokes").val();
    var platform = $("select#platform").val();
    var device = $("select#device").val();
    var important = $("input:radio[name=important]:checked").val();

    if (end === "front" && strokes === "broad" && platform === "web" || platfrom === "app" && device === "ios")

    $("#design").show ()

    event.preventDefault();
  });








});
