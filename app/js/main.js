// acco_team

$(function (){
    $('.team_bottom-batton').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.team_bottom'),
            item = $this.closest('.team_bottom-list'),
            items = $('.team_bottom-list', container),
            otherContent = $('.team_bottom-block', container),
            content = item.find('.team_bottom-block'),
            reqHeight = item.find('.team_bottom-block-wrapper').outerHeight();

        if  (!item.hasClass('team_active')){
            items.removeClass('team_active');
            item.addClass('team_active');

            otherContent.css({
                'height' : 0
            });

            content.css({
                'height' : reqHeight
            });
        } else {
            item.removeClass('team_active')
            content.css({
                'height' : 0
            });
        }

    });
});

// acco_menu

$(function (){
    $('.menu_list-title').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.menu_list'),
            item = $this.closest('.menu_list-block'),
            items = $('.menu_list-block', container),
            otherContent = $('.menu_list-description', container),
            content = item.find('.menu_list-description'),
            reqWidth = item.find('.menu_list-text').outerWidth();

        if  (!item.hasClass('menu_active')){
            items.removeClass('menu_active');
            item.addClass('menu_active');

            otherContent.css({
                'width' : 0
            });

            content.css({
                'width' : reqWidth
            });
        } else {
            item.removeClass('menu_active')
            content.css({
                'width' : 0
            });
        }

    });
});

// one page scroll

$(function(){

    var sections = $('.section'),
        display = $('.maincontent'),
        inScroll = false,
        screen = 0;

    var scrollToSection = function (sectionEq) {

        var position;

        position = (sections.eq(sectionEq).index() * -100) + '%';

        sections.eq(sectionEq).addClass('active')
            .siblings()
            .removeClass('active');

        display.css({
            'transform' : 'translate3d(0,'+ position +',0)'
        });

        setTimeout(function(){
            inScroll = false;

            $('.fixed_menu-item').eq(sectionEq)
                .addClass('fixed_active')
                .siblings()
                .removeClass('fixed_active');

        }, 1300);

    }

    $(document).on('wheel', function(e){
        var deltaY = e.originalEvent.deltaY;
        var activeSection = sections.filter('.active');
        var nextSection = activeSection.next();
        var prevSection = activeSection.prev();

        if ($(e.target).is('.team_bottom-right-text, .menu_list-text, .reviews_text'))return;

        if(inScroll) return;

        inScroll = true;

        if(deltaY > 0){// скролим вниз
            if(nextSection.length){
                screen = nextSection.index();
            }
            
        }

        if(deltaY < 0){// скролим вверх
            if(prevSection.length){
                screen = prevSection.index();
            }
            
        }

        scrollToSection(screen);

    });

    $('.down_arrow').on('click', function(e){
        e.preventDefault();

        scrollToSection(1);
    });
    
    $('.burgers_right-bottom-right').on('click', function(e){
        e.preventDefault();

        scrollToSection(6);
    });

    $('.fixed_menu-link, .slide_items-slider-click').on('click', function(e){
        e.preventDefault();

        var href = parseInt($(this).attr('href'));

        scrollToSection(href);
    });

    $(document).on('keydown', function(e){

        var activeSection = sections.filter('.active');

        if ($(e.target).is('.order_textarea, .order_buttom-input'))return;

        switch(e.keyCode){
            case 38 : // кнопка вверх
                if(activeSection.prev().length){
                    screen = activeSection.prev().index();
                }
                break;
            
            case 40 : // кнопка вниз
                if(activeSection.next().length){
                    screen = activeSection.next().index();
                }
                break;
        }

        scrollToSection(screen);
    });

});
