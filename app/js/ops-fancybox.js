$(document).ready(function(){
    $('#order_submit').fancybox({
        afterClose : function(){
            $('.order_buttom-input').val('');
        }
    });
});