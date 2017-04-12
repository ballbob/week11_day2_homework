var initialise = function(){
  var center = {lat: 42.331427, lng: -83.045754}
  var container = document.querySelector('#main-map')
  var mainMap = new MapWrapper(container,center,10)
  mainMap.addClickEvent()
  mainMap.addDetroitMarkerAndWindow()
  mainMap.addPittsMarkerAndWindow()

  var button = document.querySelector('button')
  button.onclick = mainMap.handleButtonClick.bind(mainMap)
}

window.onload = initialise