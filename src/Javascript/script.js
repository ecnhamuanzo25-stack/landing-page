$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })
})    /* (header)Para fazer com que ao clicar, mostre as opcoes do menu */