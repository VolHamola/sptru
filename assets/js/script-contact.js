    /*скрипт для карты*/ 
    ymaps.ready(init);
      function init() {
          var myMap = new ymaps.Map("map", {
              center: [55.883209299559894,37.597345820748586], // Координаты центра карты
              zoom: 10
          });
// Создание метки Москва
          var myPlacemark = new ymaps.Placemark([55.883209299559894,37.597345820748586], {
              // Данные для метки
              // Устанавливает содержимое балуна
             	iconContent: 'Наш адрес',
              hintContent: '<div class="map">' +
                              
                              '<b  class="tef">г.Москва, ул.Бибиревская, д.17Б, эт.1, пом.I, каб. № 2</b><br>' +
                              '</div>'
         
              },{
             preset: 'islands#darkOrangeStretchyIcon'
	});
          myMap.geoObjects.add(myPlacemark);      

          myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
 myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
      }


$('.contact__grid').click(function(){
$('#map').removeClass('active-cart');
});


/*скрипт для карты end*/ 

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