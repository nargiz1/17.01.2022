$(document).ready(function(){
    AOS.init();

    NavbarScrolled();
    ScrollTop();

    $(window).scroll(function(){
        NavbarScrolled();
        ScrollTop();
    });
    $(document).on("click",".scroll",function(){
        $(window).scrollTop(0);
      })
    $(document).on({
        mouseenter: function () {
            $(".pages").slideDown();
        },
        mouseleave: function () {
            setTimeout(
                function() 
                {
                    $(".pages").slideUp();
                }, 5000);
        },
    },
    ".page", function(){   
    });
    $(document).on("click", ".all", function(){
        $("button").removeClass("btn-active");
        $(".all").addClass("btn-active");
        $(".all-post").removeClass("d-none");
    });
    $(document).on("click", ".branding", function(){
        $("#case-study button").removeClass("btn-active");
        $(".branding").addClass("btn-active");
        $(".all-post").addClass("d-none");
        $(".branding-post").removeClass("d-none");
    });
    $(document).on("click", ".marketing", function(){
        $("#case-study button").removeClass("btn-active");
        $(".marketing").addClass("btn-active");
        $(".all-post").addClass("d-none");
        $(".marketing-post").removeClass("d-none");
    });
    $(document).on("click", ".web-design", function(){
        $("#case-study button").removeClass("btn-active");
        $(".web-design").addClass("btn-active");
        $(".all-post").addClass("d-none");
        $(".web-design-post").removeClass("d-none");
    });
    $(document).on("click", ".graphic-design", function(){
        $("#case-study button").removeClass("btn-active");
        $(".graphic-design").addClass("btn-active");
        $(".all-post").addClass("d-none");
        $(".graphic-design-post").removeClass("d-none");
    });
    $(document).on({
            mouseenter: function () {
            $(this).children(".social-media").slideDown();
        },
            mouseleave: function () {
            $(this).children(".social-media").slideUp();
        },
    },
    ".team-item", function(){   
    });
    $(".testimonial-carousel").owlCarousel({
        loop: false,
        dots: true,
        margin: 10,
        responsive: {
            0:{
                items: 1
            },
            781:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
    $(document).on("click",".accordions1 .accordion-head", function(){
        $(".accordions1 .accordion-body").slideUp();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children("i").removeClass("bi-x").addClass("bi-plus");
        }else{
            $(".accordions1 .accordion-head").children("i").removeClass("bi-x").addClass("bi-plus");
            $(".accordions1 .accordion-head").removeClass("active")
            $(this).addClass("active");
            $(this).next(".accordions1 .accordion-body").slideDown();
            $(this).children("i").removeClass("bi-plus").addClass("bi-x");
        }
    });
    $(document).on("click",".accordions2 .accordion-head", function(){
        $(".accordions2 .accordion-body").slideUp();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children("i").removeClass("bi-x").addClass("bi-plus");
        }else{
            $(".accordions2 .accordion-head").children("i").removeClass("bi-x").addClass("bi-plus");
            $(".accordions2 .accordion-head").removeClass("active")
            $(this).addClass("active");
            $(this).next(".accordions2 .accordion-body").slideDown();
            $(this).children("i").removeClass("bi-plus").addClass("bi-x");
        }
    });




    function NavbarScrolled(){
        if($(window).scrollTop()>30){
            $("#navbar").addClass("scrolled");
            $("#navbar img").attr("src", "img/navbar.svg");
            $("#navbar .bi-justify").addClass("scrolled");
        }else{
            $("#navbar").removeClass("scrolled");
            $("#navbar img").attr("src", "img/white-logo.svg");
            $("#navbar .bi-justify").removeClass("scrolled");
        }
    }
    function ScrollTop(){
        if($(window).scrollTop()>100){
            $(".scroll").fadeIn(200);
        }else{
            $(".scroll").fadeOut(100);
        }
    }
})