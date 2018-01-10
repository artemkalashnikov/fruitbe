// pop-up

(function(){
	
	'use strict';

	let button = document.querySelector('.js-getPopup'),
        popUpButton = document.querySelector('.pop-up__close'),
        popUpBg = document.querySelector('.pop-up-background'),
        popUpWindow = document.querySelector('.pop-up-wrapper'),
        // politic
        buttonPolitic = document.querySelector('.js-politic'),
        popUpButtonPolitic = document.querySelector('.pop-up__close-politic'),
        popUpBgPolitic = document.querySelector('.pop-up-background-politic'),
        popUpPolitic = document.querySelector('.pop-up-wrapper-politic'),
        // tm
        buttonTm = document.querySelector('.js-tm'),
        popUpButtonTm = document.querySelector('.pop-up__close-tm'),
        popUpBgTm = document.querySelector('.pop-up-background-tm'),
        popUpTM = document.querySelector('.pop-up-wrapper-tm');

	function showPopUp(){
		popUpBg.classList.toggle('hidden');
		popUpWindow.classList.toggle('hidden');
	}

    function showPopUpPolitic(e){
        e.preventDefault();
        document.body.classList.toggle('body-overflow');
        popUpBgPolitic.classList.toggle('hidden');
        popUpPolitic.classList.toggle('hidden');
    }

    function showPopUpTm(e){
        e.preventDefault();
        document.body.classList.toggle('body-overflow');
        popUpBgTm.classList.toggle('hidden');
        popUpTM.classList.toggle('hidden');
    }

	button.addEventListener('click', showPopUp, false);
	popUpButton.addEventListener('click', showPopUp, false);
    buttonPolitic.addEventListener('click', showPopUpPolitic, false);
    popUpButtonPolitic.addEventListener('click', showPopUpPolitic, false);
    buttonTm.addEventListener('click', showPopUpTm, false);
    popUpButtonTm.addEventListener('click', showPopUpTm, false);
})()

// AJAX Form (jQuery dependent)
$(function() {
    $('form').submit(function(e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function() {
            $('input[type=tel]').val("");
            $('input[type=text]').val("");
			alert('Спасибо, Ваша заявка принята! Наши менеджеры вскоре свяжутся с Вами.');
        }).fail(function() {
            // fail message
        });
        e.preventDefault();
    });
});

$(function(){

$('#download-links__sert-href').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#block-diploma').offset().top }, 1000);
  e.preventDefault();
});

});