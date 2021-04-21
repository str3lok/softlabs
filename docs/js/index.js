$(function() {

}); //- end ready


function loadPageIndex() {
	var windowWidthIndex = $(window).outerWidth(); 
	var windowHeightIndex = $(window).outerHeight();

	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex <= 900)) {
		try { initialiseScrollPane('scrollPaneIndex');	} catch (e) {} 		
	}
	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex >= 900)) {
		try { destroyScrollPane('scrollPaneIndex');	} catch (e) {} 							
	}
	
	// if( (windowWidthIndex <= 767) && ($('body').hasClass('landscape')) ) {
	// 	try { initialiseScrollPane('page__content');	} catch (e) {} 				
	// }	

	if( (windowWidthIndex <= 767) && ($('body').hasClass('portrait')) ) {
		try {
			// destroyScrollPane('page__content');	
			destroyScrollPane('scrollPaneIndex');	
		} catch (e) {} 		
	}	


}//end loadPageIndex
window.addEventListener("load", loadPageIndex);


function resizePageIndex() {
	var windowWidthIndex = $(window).outerWidth(); 
	var windowHeightIndex = $(window).outerHeight();

	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex <= 900)) {
			try { initialiseScrollPane('scrollPaneIndex');	} catch (e) {} 
	}
	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex >= 900)) {
		try { destroyScrollPane('scrollPaneIndex');	} catch (e) {} 
	}	

	// if( (windowWidthIndex <= 767) && ($('body').hasClass('landscape')) ) {
	// 	try { initialiseScrollPane('page__content');	} catch (e) {} 			
	// }	

	if( (windowWidthIndex <= 767) && ($('body').hasClass('portrait')) ) {
		try {
			// destroyScrollPane('page__content');	
			destroyScrollPane('scrollPaneIndex');	
		} catch (e) {} 		
	}	


}//end resizePageIndex
window.addEventListener("resize", resizePageIndex);




