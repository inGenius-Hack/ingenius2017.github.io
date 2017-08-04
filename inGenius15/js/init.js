$(document).ready(function() {

	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.tooltipped').tooltip({delay: 50});
    $('.scrolly').smoothScroll();
	// $(".scrolly").scrolly();

    
    $("#typoText").fitText(0.5);
    $("#typoTextYear").fitText(1);
    $("#saveDate").fitText(1, { minFontSize: '15px', maxFontSize: '35px' });
    // $("#typoText").fitText(1 , { minFontSize: '20px', maxFontSize: '105px' });
    // $("#typoTextYear").fitText(1 , { minFontSize: '20px', maxFontSize: '105px' });
	//$('body').addClass('loaded');

    setHeight();
});

$(window).resize(function() {
    setHeight();
});


function setHeight() {

    windowHeight = $(window).height();
    windowWidth = $(window).width();
    totalHeight = windowHeight-$('nav').height();

    //console.log('nav height' + $('nav').height());
    $('.winHeight').height(windowHeight);
    $('#headerHero>div').height(totalHeight);

    if( windowHeight > windowWidth )
    {
        $('#headerHero').addClass("portrait");
    }
    else
    {
        $('#headerHero').removeClass("portrait");
    }
};
