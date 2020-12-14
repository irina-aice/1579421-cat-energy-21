ymaps.ready(initMap);

function initMap() {
  let myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 16
  });

  let myPlacemark = new ymaps.Placemark(
    myMap.getCenter(),
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-marker.png',
      iconImageSize: [57, 53],
      // iconImageOffset: [0, 200]
    });

  myMap.geoObjects.add(myPlacemark);
}
