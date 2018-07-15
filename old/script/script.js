$(document).ready(function() {
    $('.carousel').carousel();
    $("a.scroll").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });


    $('.choise_model-image').click(function () {
        var image = $(this).attr('src');
        $('#image').find('img').attr('src', image);
        $('#image').modal('show');
    })

});

