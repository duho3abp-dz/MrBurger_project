ymaps.ready(init);
var myMap,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3,
    myPlacemark4;

function init(){
    myMap = new ymaps.Map("map-id", {
        center: [55.74586296, 37.58164042],
        zoom: 14
    });

    myMap.controls
        .remove('geolocationControl')
        .remove('trafficControl')
        .remove('typeSelector')
        .remove('fullscreenControl')
        .remove('rulerControl')
        .remove('searchControl');

    myMap.behaviors.disable('scrollZoom');

    myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        // iconImageClipRect: [[0,0], [26, 46]],
        iconImageHref: 'pictures/icons/map-marker.svg',
        iconImageSize: [45, 60],
        iconImageOffset: [-25, -55]
        
    });

    myPlacemark1 = new ymaps.Placemark([55.74523334, 37.58205885],{
        balloonContentHeader: '<img src="pictures/icons/logo.svg" alt="Лого Бургеров" class="balloon_logo"><span class="balloon_title">Mr.Burger</span>',
        balloonContentBody: '<div class="baloon_text">Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы рады нашим гостям и всегда стремимся их приятно удивить.</div>',
        balloonContentFooter: '<div class="baloon_footer">Смоленский бульвар, дом 3</div>',
        hintContent: '<div class="hint_title">Смоленский бульвар, дом 3</div>'
    });

    myPlacemark2 = new ymaps.Placemark([55.74475265, 37.56689901],{
        balloonContentHeader: '<img src="pictures/icons/logo.svg" alt="Лого Бургеров" class="balloon_logo"><span class="balloon_title">Mr.Burger</span>',
        balloonContentBody: '<div class="baloon_text">Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы рады нашим гостям и всегда стремимся их приятно удивить.</div>',
        balloonContentFooter: '<div class="baloon_footer">Смоленский бульвар, дом 3</div>',
        hintContent: '<div class="hint_title">Смоленский бульвар, дом 3</div>'
    });

    myPlacemark3 = new ymaps.Placemark([55.74976334, 37.56669516],{
        balloonContentHeader: '<img src="pictures/icons/logo.svg" alt="Лого Бургеров" class="balloon_logo"><span class="balloon_title">Mr.Burger</span>',
        balloonContentBody: '<div class="baloon_text">Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы рады нашим гостям и всегда стремимся их приятно удивить.</div>',
        balloonContentFooter: '<div class="baloon_footer">Смоленский бульвар, дом 3</div>',
        hintContent: '<div class="hint_title">Смоленский бульвар, дом 3</div>'
    });

    myPlacemark4 = new ymaps.Placemark([55.74558106, 37.60151580],{
        balloonContentHeader: '<img src="pictures/icons/logo.svg" alt="Лого Бургеров" class="balloon_logo"><span class="balloon_title">Mr.Burger</span>',
        balloonContentBody: '<div class="baloon_text">Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы рады нашим гостям и всегда стремимся их приятно удивить.</div>',
        balloonContentFooter: '<div class="baloon_footer">Смоленский бульвар, дом 3</div>',
        hintContent: '<div class="hint_title">Смоленский бульвар, дом 3</div>'
    });

    myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4);
    myMap.geoObjects.add(myPin);
}