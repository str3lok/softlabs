// Touch Detect
function isTouch() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}
    
if (isTouch()) $('html').addClass('is-touch');

$(function() {

		//открыть меню
	$('.btn-nav-js').on('click', function(e) {   
		addAnimeClass($(this)); 

		setTimeout(function() {
			$('.menu__container').fadeIn();  
			$('.menu__container').addClass('menuActive');    
			$('body').addClass('navFix'); 
			$('html').addClass('htmlFix'); 

			setTimeout(function() {
				$('.menu').addClass('mAct');
				$('.m-content').addClass('is-show');
			}, 500);
			setTimeout(function() {$('.menu__box--bottom').addClass('is-show');}, 800);
		}, 200);

		removeAnimeClass('btn-nav-js', 500);
	});
	//закрыть меню
	$('.menu-hide').on('click', function() {           
		hideMenu();
	});

	$('.closeMenu').on('click', function() {  
		addAnimeClass($(this));
		removeAnimeClass('closeMenu', 500);
		setTimeout(function() {
			hideMenu();
		}, 300);
	});
		
}); //- end 


function sliderAnimationInit(slider, slideClass, timerId) {
	$('.'+slider).attr('data-timer', timerId)
	let countSlides = $('.'+slider).find('.'+slideClass).length;
	let activeSlide = $('.'+slider).find('.is-visible');
	var allItems = $('.'+slider).find('li');
	let indexActiveSlide = allItems.index(activeSlide)+1;

	if(indexActiveSlide === countSlides) {
		activeSlide
			.removeClass('is-visible hide-text').addClass('is-hidden')
		allItems.eq(0).removeClass('is-hidden').addClass('is-visible');
	} else {
		activeSlide
			.removeClass('is-visible hide-text').addClass('is-hidden')
			.next()
				.removeClass('is-hidden').addClass('is-visible');
	}

	setTimeout(function (){ $('.'+slider).find('.is-visible').addClass('hide-text') }, 2000);	

}

function sliderAnimationPrevInit(slider) {	
	setTimeout(function (){ $('.'+slider).find('.is-visible').addClass('hide-text') }, 2000);	
}

function sliderAnimationInterval(slider, slideClass) {
	let timerId = setInterval(function() { 
		sliderAnimationInit(slider, slideClass, timerId);
	}, 2800);
}

function addAnimeClass(block) {
	$(block).addClass('cbutton--click');
}

function removeAnimeClass(block, timeout) {
		setTimeout(function() {
			$('.'+block).removeClass('cbutton--click'); 
		}, timeout);		
}

function hideMenu() {
		$('.menu__container').removeClass('menuActive');   
		setTimeout(function() {
			$('.menu__container').fadeOut('slow', function () {
				$('.menu').removeClass('mAct');
				$('.m-content').removeClass('is-show');
				$('.menu__box--bottom').removeClass('is-show');
			}); 
			$('body').removeClass('navFix'); 
			$('html').removeClass('htmlFix');  		
		}, 400);
}

function orientationdevice(widthD, heightD) {
  if(widthD > heightD) {
    $('body, html').removeClass('portrait').addClass('landscape');
  } else {
  		$('body, html').removeClass('landscape').addClass('portrait');
  }
}

try {
 // Inputmask("+7 999 999 9999").mask("input[type=tel]");
} catch (e) {}

function destroyScrollPane(element) {
	var apis = [];
	$('.'+element).each(
		function()	{
			apis.push($(this).removeClass('scrollPaneInit').data('jsp').destroy());
			// $(this).removeClass('scrollPaneInit');
			// $(this).data('jsp').destroy();
		}		
	)
	return false;
}

function initialiseScrollPane(element) {
	var apis = [];
	$('.'+element).each(
		function()	{
			apis.push($(this).addClass('scrollPaneInit').jScrollPane({autoReinitialise: true}).data().jsp);
		}		
	)
	return false;
}



function loadPage() {
	var windowWidth = $(window).outerWidth(); 
	var windowHeight = $(window).outerHeight();

	$('body').addClass('loading');

	orientationdevice(windowWidth, windowHeight);

	setTimeout(function() {
	$('.advantages__slide').each(function(){
			$(this).find('.advant__top-load').removeClass('advant__top-load').addClass('advant__top--first');
			$(this).find('.advant__bottom-load').removeClass('advant__bottom-load').addClass('advant__top--last');
		});

		sliderAnimationPrevInit('triggerSlider');
		sliderAnimationInterval('triggerSlider', 'header__trigger--slide');

	},2000);	

	try { 
		initialiseScrollPane('scroll-pane');	 
	} catch (e) {} 

}//end loadPage
window.addEventListener("load", loadPage);


function resizePage() {
		var windowWidth = $(window).outerWidth(); 
		var windowHeight = $(window).outerHeight();

		orientationdevice(windowWidth, windowHeight);

}//end resizePage
window.addEventListener("resize", resizePage);


