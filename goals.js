/*
*  Цели метрики 49711711
*  goal:  @string
*  Use: setGoal('goal');
*/
function setGoal(object){
    yaCounter49711711.reachGoal(object);
    console.log('PageView: 49711711 Params '+object); // Логируем срабатывание цели
}

/*
* Кнопка номера телефона +7(863) 303 51 55
*/
$( 'a[href="tel:+7(863)303-51-55"]' ).on( "click", function(event) {
    setGoal('phone_1');
    $( this ).off(event);
    return true;
});

/*
* Кнопка номера телефона +7(905)451-06-11
*/
$( 'a[href="tel:+7(905)451-06-11"]' ).on( "click", function(event) {
    setGoal('phone_2');
    $( this ).off(event);
    return true;
});

/*
* Цель для кнопки почты в шапке сайта
*/
$( 'header a[href="mailto:shop@gw-market.ru"]' ).on( "click", function(event) {
    setGoal('mail_1');
    $( this ).off(event);
    return true;
});

/*
* Цель для кнопки «Оформить заказ» в шапке сайта
*/
$( 'form.cart-form a.uk-button' ).on( "click", function(event) {
    setGoal('oformlenie_zakaza');
    $( this ).off(event);
    return true;
});

/*
* Цель для формы при взаимодействии
*/
$( '#js-order-form button.wa-button' ).on( "click", function(event) {
    setGoal('vzaimiod_form_zakaz');
    $( this ).off(event);
    return true;
});



