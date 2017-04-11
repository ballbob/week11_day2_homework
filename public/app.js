var initialise = function(){
  var center = {lat: 33, lng: 34}
  var container = document.querySelector('#main-map')
  var mainMap = new MapWrapper(container,center,10)
  mainMap.addMarker(center)
  mainMap.addClickEvent()
}

window.onload = initialise