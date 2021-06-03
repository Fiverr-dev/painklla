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
            $(".navlinks").addClass("menu-open")
            $('.sticky').addClass('fill');
            $(".bg-overlay").css("display","block")
            status=!status
        }else{
            $(".mobile-icon").addClass("close")
            $(".mobile-icon").removeClass("open")
            $(".navlinks").removeClass("menu-open")
            $(".bg-overlay").css("display","none")
            status=!status
        }
        
        
        
        
    })

    
});
