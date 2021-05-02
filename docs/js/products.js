$(function() {
	
}); //- end ready


function loadPageProducts() {
	var windowWidthProducts = $(window).outerWidth(); 
	
	if( windowWidthProducts >= 768) {
		try { initialiseScrollPane('content__slider-scroll');	} catch (e) {} 
	}	

}//end loadPageProducts
window.addEventListener("load", loadPageProducts);


function resizePageProducts() {
	var windowWidthProducts = $(window).outerWidth(); 

		if( (windowWidthProducts >= 768) && (!$('.content__slider-scroll').hasClass('jspScrollable')) ) {
			try { initialiseScrollPane('content__slider-scroll');	} catch (e) {} 
	}	
		if( windowWidthProducts <= 767) {
			try { 
				$('.content__slider-scroll').data('jsp').destroy().removeClass('scrollPaneInit');	
			} catch (e) {} 
	}	

	
}//end resizePageProducts
window.addEventListener("resize", resizePageProducts);




