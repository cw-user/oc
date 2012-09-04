/* 
	jQuery Mobile Boilerplate
	application.js
*/

$(document).bind("mobileinit", function(){
	$.mobile.defaultPageTransition = 'none';
	$.mobile.defaultDialogTransition = 'none';
	$.mobile.useFastClick = true;
});
	

$(document).bind("pageinit", function(event){
	//Adjust scroller in fullscreen mode
	if (window.navigator.standalone) {
		function scrollAdjust() {
			$('.scrolling-content').addClass('standalone');
		}
		scrollAdjust();
        
}
});
