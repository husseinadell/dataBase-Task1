$("#btnchangeColor").click(function(){$("body").css("background-color","red");});
$("#btnchangetext").click(function() {$("#certain").text("Hey There!");});
$("#btnAtoggle").click(function() {
	$("#btnchangeColor").toggle();
	$("#btnchangetext").toggle();
});