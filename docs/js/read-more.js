$(function() {
	try { initialiseScrollPane('read__more-scroll');	} catch (e) {} 
}); //- end ready


function resizePageReadMore() {
	var windowWidthProducts = $(window).outerWidth(); 

		if( (windowWidthProducts >= 320) && (!$('.read__more-scroll').hasClass('jspScrollable')) ) {
			setTimeout(function(){
				try { initialiseScrollPane('read__more-scroll');	} catch (e) {} 
			}, 300);
	}	
		if( (windowWidthProducts <= 767) && ($('body').hasClass('landscape')) )  {
			setTimeout(function(){
				try { 
					$('.read__more-scroll').data('jsp').destroy().removeClass('scrollPaneInit');	
				} catch (e) {} 
				
			}, 300);
	}	

	
}//end resizePageReadMore
window.addEventListener("resize", resizePageReadMore);




