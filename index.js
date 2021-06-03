$(document).ready(function() {

    $(window).scroll(function() {

        var scrollTop = $(window).scrollTop();

        if (scrollTop >=20) {
            $('.sticky').addClass('fill');
        } else {
            $('.sticky').removeClass('fill');
        }

    });
});