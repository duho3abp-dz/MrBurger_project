$(document).ready(function() {

	$('.maincontent').fullpage({
		//options here
		autoScrolling: true,
        scrollHorizontally: true,
        scrollingSpeed: 950,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'lastPage'],
        menu: '.fixed_menu',
        loopHorizontal: false,
        // navigation: true,
        // responsiveWidth: 940,
        normalScrollElements: '.team_bottom-right-text, .menu_list-text, .hidden_text, .ymaps-2-1-76-balloon__content'
        
    });
    
    $('.down_arrow').on('click', function(e){
        e.preventDefault();

        fullpage_api.moveSectionDown();
    });
    
    $('.hero_slide-order-button, .burgers_right-button').on('click', function(e){
        e.preventDefault();

        fullpage_api.moveTo(7);
    });
    
    // $('.burgers_right-button').on('click', function(e){
    //     e.preventDefault();

    //     fullpage_api.moveTo(7);
    // });

    $('.fixed_menu-item, .slide_items-slider-click').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            href = parseInt($this.attr('href')) + 1;
        
        $.fn.fullpage.moveTo(href);

        // $this.closest('.fixed_menu-item').addClass('active')
        //     .siblings()
        //     .removeClass('active');
        
        $this.closest('li').addClass('active')
            .siblings()
            .removeClass('active');
        
    });

    // if ($(e.target).is('.team_bottom-right-text, .menu_list-text, .reviews_text'))return;

	// //methods
	// $.fn.fullpage.setAllowScrolling(false);
});