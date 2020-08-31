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
            item.removeClass('team_active');
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
            item.removeClass('menu_active');
            content.css({
                'width' : 0
            });
        }

    });
});