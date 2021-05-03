$(function() {


}); //- end ready

function loadPageFeatures() {
	var windowWidthFeatures = $(window).outerWidth(); 
	var windowHeightFeatures = $(window).outerHeight();

	if((windowWidthFeatures >= 768) && (windowWidthFeatures <= 991) && (windowHeightFeatures <= 590)) {
		try { initialiseScrollPane('scrollPaneFeatures');	} catch (e) {} 		
	}
	if((windowWidthFeatures >= 768) && (windowWidthFeatures <= 991) && (windowHeightFeatures >= 590)) {
		try { destroyScrollPane('scrollPaneFeatures');	} catch (e) {} 							
	}

	if( (windowWidthFeatures <= 767) && ($('body').hasClass('portrait')) ) {
		try {
			destroyScrollPane('scrollPaneFeatures');	
		} catch (e) {} 		
	}	



}//end loadPageFeatures
window.addEventListener("load", loadPageFeatures);


function resizePageFeatures() {
	var windowWidthFeatures = $(window).outerWidth(); 
	var windowHeightFeatures = $(window).outerHeight();

	if((windowWidthFeatures >= 768) && (windowWidthFeatures <= 991) && (windowHeightFeatures <= 590)) {
			try { initialiseScrollPane('scrollPaneFeatures');	} catch (e) {} 
	}
	if((windowWidthFeatures >= 768) && (windowWidthFeatures <= 991) && (windowHeightFeatures >= 590)) {
		try { destroyScrollPane('scrollPaneFeatures');	} catch (e) {} 
	}	

	if( (windowWidthFeatures <= 767) && ($('body').hasClass('portrait')) ) {
		try {
			destroyScrollPane('scrollPaneFeatures');	
		} catch (e) {} 		
	}	

	
}//end resizePageFeatures
window.addEventListener("resize", resizePageFeatures);




