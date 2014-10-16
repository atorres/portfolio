$(document).ready(function () {
	/* Fix photoset responsiveness bug on iphone */
	function resizePhotosets(){
	    var parentWidth = document.body.querySelector('.html_photoset').offsetWidth; 
	    var photosets = document.body.querySelectorAll('iframe.photoset');
	    for(var i = 0; i < photosets.length; ++i){
	        var photoset = photosets[i];
	        photoset.width = parentWidth;
	    }   
	}
	window.onload = resizePhotosets;
	window.onresize = resizePhotosets;



	$(function() {

		/*******************
		/* Hide/show menu  *
		********************/
			var isMenuActive = false; /* when true, clicking anywhere in the document but the menu will hide the menu */			
			
			/* Define fade in/fade out functions */
			function menuFadeIn() {
				$('.nav-menu').fadeIn({queue: false, duration: '100'});
				$('.nav-menu').animate({ 'margin-bottom': '1.25em' }, '100');					
			}
			
			function menuFadeOut() {
				$('.nav-menu').fadeOut({queue: false, duration: '100'});
				$('.nav-menu').animate({ 'margin-bottom': '-2em' }, '100');			
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
				isMenuActive = !isMenuActive;
				$("#lightbox").toggle();				
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
				$(".nav-menu").slideToggle("fast");
				$("#lightbox").toggle();

				if(isMenuActive) {
					isMenuActive = !isMenuActive;
				} 
			});	

		/***********************
		/* End hide/show menu  *
		************************/
		
	});
});