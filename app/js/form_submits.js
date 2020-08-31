$(document).ready(function(){
    $('#order_form-id').submit(function(e){
        e.preventDefault();

        var form = $(this),
            formDatas = form.serialize();

        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: formDatas
        }).done(function(){
            form.trigger('reset');
        });
        return false;
    });
});

$(document).ready(function(){
    $(".order_bottom-right-submit").on('click', function() {

        var form = $(this);
  
        $.fancybox.open({
          src  : '#done',
          type : 'inline',
          opts : {
            afterClose: function (){
                form.trigger('reset');
                console.log('close!');
            }
          }
        });
    });
});