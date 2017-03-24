jQuery.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=jQuery('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

function scrollOnClick(clickedEl) {
    var clickedEl = $(clickedEl),
    	navBar = $('.navbar');
    clickedEl.each(function(){
        $(this).find('a[href*="\\#"]:not([href="\\#"])').each(function(){
            var t = $(this);
            t.on("click", function(){
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        if (t.parents(".nav")) {
                            clickedEl.each(function () {
                                $(this).removeClass("active");
                            });
                            t.parents("li").addClass("active");
                        }

                        $('html,body').animate({
                            scrollTop: target.offset().top 
                        }, 1000);

                        return false;
                    }
                }
            });
        });
    });
}

function sameHeight() {
	var planBlock = $('.plan').find('.row > div[class*="col-"]'),
		blockHeight, h = 0, padBottom = 50;
	
	planBlock.each(function(){
		$(this).height('auto');

		if ($(this).height() > h) {
			h = $(this).height();
		}
	});

	if ($(window).width() > 768 - jQuery.scrollbarWidth()) {
	  planBlock.height(h + padBottom);
	} else {
		planBlock.height('auto');
	}
}

function counter() {
  $('.amount').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        }
    });
  });
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	nav: true,
  	navText: ['', '']
  });

  var navWidth = $('.nav-menu').width();

  $('body').css('padding-right', navWidth);
  $('.menu-close').on('click', function(){
    $('body').css('padding-right', '0');
    $('.nav-menu').addClass('nav-hidden');
  });

  $('.menu-btn').on('click', function(){
    $('.nav-menu').removeClass('nav-hidden');
    $('body').css('padding-right', navWidth);
  })

  var map = new google.maps.Map($('#map')[0], {
    center: {lat: -37.817202, lng: 144.959794},
    zoom: 15,
    mapTypeId: 'roadmap'
  });

   scrollOnClick('.next-block');
   scrollOnClick('.nav>li');
   sameHeight();
   counter();
});


$(window).resize(function(){
   sameHeight();	
})
