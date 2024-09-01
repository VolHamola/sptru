/*замена загаловка в форме модал*/ 
$(document).ready(function() {
	$('#zakaz').click(function(){
	$('.ar-modal-title').text('Заказать званок')
	});
	$('#zena').click(function(){
		$('.ar-modal-title').text('Узнать цену')
		});
	
	});	
/*замена загаловка в форме модал*/ 
/*search*/ 
$(document).ready(function() {
$('#ser').click(function(){
$('form').toggleClass('active')
});
});	
/*search*/ 
/*скрипт для фиксированого меню*/ 
$(document).ready(function() {
	// Запуск функции при скролле

	const mediaQueryw = window.matchMedia('(min-width: 350px) and (max-width: 2768px)')
if (mediaQueryw.matches) {
	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop(); // Получаем текущую позицию скролла
		
		// Проверяем условие для изменения класса
		if (scrollTop > 200) {
            $('header').addClass('fix')
			
		} else {
			$('header').removeClass('fix')
		}
	});
}
	
});
/*скрипт для фиксированого меню*/ 
/*скрипт для моб меню меню*/ 
$(function() {
	var $menu_popup = $('.menu-popup');
 
	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	
	$(document).on('click', function(e) {
		var block = $('.menu-popup'); // Выбираем блок, который нужно скрыть
		if (!block.is(e.target) && block.has(e.target).length === 0) {
			block.hide();
			$('.menu-popup').css('right', '')
		}
	});	
	});
/*скрипт для моб меню меню*/ 