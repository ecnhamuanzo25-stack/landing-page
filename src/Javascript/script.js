$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })
    /* (header)Para fazer com que ao clicar, mostre as opcoes do menu */

     const sections = $('section');
     const navItems = $('.nav-item');

     $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosiion = $(window).scrollTop() - header.outerHeight();

        if(scrollPosiion <= 0){
            header.css('box-shadow','none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
            if(scrollPosiion>= sectionTop &&scrollPosiion < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        });

       $(navItems[activeSectionIndex]).addClass('active');
        
     });
})   
