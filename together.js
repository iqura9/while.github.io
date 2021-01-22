
$("document").ready(function () {
  loadGoods();
  //showCart();
});

function loadGoods() {
  $.getJSON("server/catalog.json", function (data) {
    var out = "";
    var out1 = "";
    var out2 = "";
    var out3 = "";
    for (var key in data) {
      if (data[key]["filter"] == "done2020") {
        out +='<div class="box">';
		out +='<img src="'+ data[key]["img"] +'" alt="">';
		out +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
		out +='</div>';
      }
      if (data[key]["filter"] == "done2021") {
        out1 +='<div class="box">';
		out1 +='<img src="'+ data[key]["img"] +'" alt="">';
		out1 +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
		out1 +='</div>';
      }
      if (data[key]["filter"] == "reading") {
        out2 +='<div class="box">';
		out2 +='<img src="'+ data[key]["img"] +'" alt="">';
		out2 +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
		out2 +='</div>';
      }
      if (data[key]["filter"] == "toread") {
        out3 +='<div class="box">';
		out3 +='<img src="'+ data[key]["img"] +'" alt="">';
		out3 +='<p  class="title"><span>' + data[key]["name"] + '</span><br> '+ data[key]["autor"] +'</p>';
		out3 +='</div>';
      }
    }
    $("#res").html(out);
    $("#res1").html(out1);
    $("#res2").html(out2);
    $("#res3").html(out3);
  });
}

