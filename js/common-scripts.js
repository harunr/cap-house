
(function($){
	$(function(){


        $('.hamburger').click(function () {
            $("body").toggleClass("navshown");
        });
        
        
        
        
        $('.btn.large').mouseenter(function(){
            $(this).find('em').eq(0).stop(true, true).animate({
                'width' : '100%'
            },600)
            $(this).find('em').eq(1).stop(true, true).animate({
                'height' : '100%'
            },600)
            $(this).find('em').eq(2).stop(true, true).animate({
                'width' : '100%'
            },600)
            $(this).find('em').eq(3).stop(true, true).animate({
                'height' : '100%'
            },600)
        });

        $('.btn.large').mouseleave(function(){
            $(this).find('em').eq(0).stop(true, true).animate({
                'width' : '0%'
            },600)
            $(this).find('em').eq(1).stop(true, true).animate({
                'height' : '0%'
            },600)
            $(this).find('em').eq(2).stop(true, true).animate({
                'width' : '0%'
            },600)
            $(this).find('em').eq(3).stop(true, true).animate({
                'height' : '0%'
            },600)
        });
        
        
        
        
        //Hero tab//
        $('.hero-tab-triger ul li').click(function(){
            $('.hero-tab-triger ul li').removeClass('hero-active');
            $(this).addClass('hero-active');
            $('.hero-content-wrap .hero-content-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        //Hero tab//
        
        
        //Hero slider//
        if ($('.hero-thumb').length) {
            $('.hero-thumb').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    
                ]
            });
            $(window).on('resize', function () {
                $('.hero-thumb').slick('resize');

            });
        }
        //Hero slider//
        
        
        //Process tab//
        $('.process-left-item-wrap ul li').click(function(){
            $('.process-left-item-wrap ul li').removeClass('process-active');
            $(this).addClass('process-active');
            $('.process-right .process-right-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        //Process tab//
        
        
        //Work slider//
        if($('.landing-client-review-item-wrap').length){
            $('.landing-client-review-item-wrap').slick({
                dots: false,
                arrows:false,
                autoplay: true,
                speed: 1000,
                infinite: true,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 481,
                        
                    },

                ]
            });
            
            $(window).on('resize', function () {
                $('.landing-client-review-item-wrap').slick('resize');

            });
        }
        //Work slider//
        
        
        //Feedback slider//
        if ($('.feedback-item-wrap').length) {
            $('.feedback-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                
            });
            $(window).on('resize', function () {
                $('.feedback-item-wrap').slick('resize');

            });
        }
        //Feedback slider//
        
        
        
        
        $('.landing-order-process-stap-wrap ul li').click(function(){
            $('.landing-order-process-stap-wrap ul li').removeClass('order-active');
            $(this).addClass('order-active');
            $('.landing-order-process-thumb-wrap .landing-order-process-thumb-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        
        
        $(".landing-faq-acordion").each(function(){
            var $this = $(this);
            $this.find(" > .landing-faq-acordion-heading").on("click touch", function(){
                $(".landing-faq-acordion").removeClass("accordion-active")
                $(".landing-faq-acordion-content").slideUp();
                if($this.find(".landing-faq-acordion-content:visible").length){
                    $(".landing-faq-acordion").removeClass("accordion-active")
                    $(".landing-faq-acordion-content").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".landing-faq-acordion-content").slideUp();
                    $this.find(" > .landing-faq-acordion-content").slideDown();
                }
            })
        })
        
        
		
	})// End ready function.
   
    
    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    
    // End the solutin card carousel
    
    

	

})(jQuery)

