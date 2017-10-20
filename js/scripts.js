$(document).ready(function(){

  $("form#which-lang").submit(function(event) {
    var name = $("select#name").val();
    var end = $("select#frnt-or-bk").val();
    var strokes = $("select#strokes").val();
    var platform = $("select#platform").val();
    var device = $("select#device").val();
    var important = $("input:radio[name=important]:checked").val();


    if (end === "front" && strokes === "broad" && platform === "app" && device === "ios" && important === "looks") {
        $("#design").show();
    } else if (end === "back" && strokes === "broad" && platform === "web" || platform === "app" && device === "android" && important === "flex") {
        $("#java").show();
    } else if (end === "back" && strokes === "narrow" && platform === "web" && device === "ios" || device === "android" && important === "function") {
        $("#ruby").show();
    } else {
     $("#confilict").show();
   }



    event.preventDefault();
  });

});
