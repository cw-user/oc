/* 
	jQuery Mobile Boilerplate
	application.js
*/

$(document).bind("mobileinit", function(){
	$.mobile.defaultPageTransition = 'none';
	$.mobile.defaultDialogTransition = 'none';
	$.mobile.useFastClick = true;
});

$( 'div[data-role="page"]' ).live( 'pageinit',function(event){
	var viewportHeight = $(window).height();
	var finalHeight = viewportHeight - 100;
  $('.scrolling-content').height(finalHeight);
});

var previousOrientation = 0;
var checkOrientation = function(){
    if(window.orientation !== previousOrientation){
        previousOrientation = window.orientation;
        var viewportHeight = $(window).height();
        var finalHeight = viewportHeight - 100;	
        $('.scrolling-content').height(finalHeight);

    }
};

window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);

// (optional) Android doesn't always fire orientationChange on 180 degree turns
setInterval(checkOrientation, 2000);