$(document).ready(function(){

  $("form#which-lang").submit(function(event){
    var name = $("select#name").val();
    var end = $("select#frnt-or-bk").val();
    var strokes = $("select#strokes").val();
    var platform = $("select#platform").val();
    var device = $("select#device").val();
    var important = $("input:radio[name=important]:checked").val();

      if (important === "looks" && end === "front" && strokes === "broad" && platform === "app" && device === "ios") {
        $("#design").show();
  }
      else if (important === "diverse" && end === "back" && strokes === "broad" && platform === "web" || platform === "app" && device === "android") {
        $("#java").show();
    }
      else if (important === "function" && end === "back" && strokes === "narrow" && platform === "web" && device === "ios" || device === "android") {
        $("#ruby").show();
    }
     else {
       $("#confilict").show();
     }

    event.preventDefault();
  });

});
/*
var css = 0;
var java = 0;
var ruby = 0;

if (end === "front") {
      css++;
    }
if (strokes === "broad") {
    css++;
}
if (platform === "web" || platform === "app") {
    css++;
}
if (device === "ios") {
    css++;
}
if (important === "design") {
    css++;
}
if (end === "back") {
      java++;
    }
if (strokes === "broad") {
      java++;
}
if (platform === "web" || platform === "app") {
      java++;
}
if (device === "android") {
      java++;
}
if (important === "diverse") {
      java++;
}


    if (css >= 3) {
      $("#design").show();
        }
    if (java >= 3) {
      ("#java").show();
    }*/
