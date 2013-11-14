
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(55.953252, -3.188267),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    var westRegisterStreet = new google.maps.LatLng(55.9536739, -3.1905992);
    var buccleuchStreet = new google.maps.LatLng(55.9413742, -3.1836634);


    var marker = new google.maps.Marker({
        position: westRegisterStreet,
        map: map,
        title:"18 West Register Street"
    });
    var markerTwo = new google.maps.Marker({
        position: buccleuchStreet,
        map: map,
        title:"118 Buccleuch Street"
    });
}
google.maps.event.addDomListener(window, 'load', initialize);