/*
*  Цели метрики 49711711
*  goal:  @string
*  Use: setGoal('goal');
*/
function setGoal(object){
    yaCounter49711711.reachGoal(object);
    console.log('PageView: 49711711 Params '+object); // Логируем срабатывание цели
    return true;
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

