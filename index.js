$(document).ready(function() {

    $(window).scroll(function() {

        var scrollTop = $(window).scrollTop();

        if (scrollTop >=20) {
            $('.sticky').addClass('fill');
        } else {
            $('.sticky').removeClass('fill');
        }

    });

    var status=closed;

    $(".mobile-icon").click(()=>{
        if(status===closed){
            $(".mobile-icon").addClass("open")
            $(".mobile-icon").removeClass("close")
            status=!status
        }else{
            $(".mobile-icon").addClass("close")
            $(".mobile-icon").removeClass("open")
            status=!status
        }
        
        
        
        
    })

    
});
