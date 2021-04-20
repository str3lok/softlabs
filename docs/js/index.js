$(function() {

}); //- end ready


function destroyScrollPaneIndex() {
	var apis = [];
	$('.scrollPaneIndex').each(
		function()	{
			$(this).removeClass('scrollPaneInit');
			$(this).data('jsp').destroy();
		}		
	)
	return false;
}

function initialiseScrollPaneIndex() {
	var apis = [];
	$('.scrollPaneIndex').each(
		function()	{
			apis.push($(this).addClass('scrollPaneInit').jScrollPane({autoReinitialise: true}).data().jsp);
		}		
	)
	return false;
}


function loadPageIndex() {
	var windowWidthIndex = $(window).outerWidth(); 
	var windowHeightIndex = $(window).outerHeight();

	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex <= 900)) {
		initialiseScrollPaneIndex();
	}
	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex >= 900)) {
		destroyScrollPaneIndex();
	}

		try {

		} catch (e) {}


}//end loadPageIndex
window.addEventListener("load", loadPageIndex);


function resizePageIndex() {
	var windowWidthIndex = $(window).outerWidth(); 
	var windowHeightIndex = $(window).outerHeight();

	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex <= 900)) {
		initialiseScrollPaneIndex();
	}
	if((windowWidthIndex >= 768) && (windowWidthIndex <= 991) && (windowHeightIndex >= 900)) {
		destroyScrollPaneIndex();
	}	

try {
	

		} catch (e) {}

}//end resizePageIndex
window.addEventListener("resize", resizePageIndex);




