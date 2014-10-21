	/* Bind the swipebox behaviour on every link with the "swipebox" class. */

		
	
$(document).ready(function () {
	
	/* stuff for gallery pages */ 	
	$( '.swipebox' ).swipebox({
		hideBarsDelay : 10000, // delay before hiding bars on desktop
	});
	
	$(".thumbnail,.photothumb").fadeTo("slow", 0.8); // Set opacity of thumbnails to fade down to 90% on page load
	
	$(".thumbnail,.photothumb").hover(function(){
			$(this).fadeTo("fast", 1.0);  // Opacity to 100% on hover
		},function(){
			$(this).fadeTo("slow", 0.8); // Opacity back to 90% on mouseout
	});
	
	
	
	
	
	/*******************
	/* Hide/show menu  *
	********************/
	$(function() {

		
			var isMenuActive = false; /* when true, clicking anywhere in the document but the menu will hide the menu */			
			
			/* Define fade in/fade out functions */
			function menuFadeIn() {
				$('.nav-menu').fadeIn({queue: false, duration: '100'});
				$('.nav-menu').animate({ 'margin-bottom': '.25em' }, '100');
				isMenuActive = !isMenuActive;
				$("#lightbox").toggle();					
			}
			
			function menuFadeOut() {
				$('.nav-menu').fadeOut({queue: false, duration: '100'});
				$('.nav-menu').animate({ 'margin-bottom': '-5em' }, '100');
				isMenuActive = !isMenuActive;			
				$("#lightbox").toggle();
			}
			
			/* Click handler */
			$(".nav-menu-button").click(function(event) {

				if(isMenuActive) { /* then fade the menu out */
					menuFadeOut();
				}
				else { /* then fade the menu in */
					menuFadeIn();
				}
				
				event.stopPropagation(); /* prevent click event from bubbling up dom tree and activating document click handler to hide menu */				
			});
			
			/* Hover handler */
			$(".nav-container").hover(
				function () {
					menuFadeIn();
				},  function () {
					menuFadeOut();	
			});
			
			$(".nav-menu").click(function(event){
				event.stopPropagation();				
			});	
			
			/* Clicking outside the menu (i.e. clicking the lightbox) will hide the menu  */
			$("#lightbox").click(function(event) {
				if(isMenuActive) { /* then fade the menu out */
					menuFadeOut();
				}
				
				
			});	

		/***********************
		/* End hide/show menu  *
		************************/
		
	});
});