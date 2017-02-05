$(document).ready(function(){
var max_text=160;
$("#textarea_remaining").text(max_text+""+" characters remaining");




$("#textarea").keyup(function(){

var text_length=$("#textarea").val().length;
var text_remains=max_text-text_length;



$("#textarea_remaining").text(text_remains+""+" characters remaining");



/*$('jQuery selector').css({"css property name":"css property value"});*/

if (text_remains< 0) {
	$("#textarea_remaining").css({"color":"red"});
} 

else {
	$("#textarea_remaining").css({"color":"green"});
}

});   

});