var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype = {
  addMarker: function(coords){
      var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  },

  addDetroitMarkerAndWindow: function(){
    var detroitPos = {lat: 42.331427, lng: -83.045754}
    
    var detroitMarker = new google.maps.Marker({position: detroitPos,map: this.googleMap})

    var windowContents = 
    '<div id="infowindow">'+
    '<h2>Detroit</h2>'+
    '<p>This is Detroit. Located 1,200 feet under the streets of Motor City is an enormous salt mine. Operated by the Detroit Salt Company, the mine sprawls across 1,500 acres and contains more than 100 miles of road. How do you get to the mine? The entrance can be found at 12841 Sanders Street.</p>'+
    '<p>Sources: http://www.dailydetroit.com/2014/12/01/10-unbelievable-cool-facts-detroit/, http://detroitsalt.com/</p>'

    var detroitWindow = new google.maps.InfoWindow({
      content:windowContents
    })

    detroitMarker.addListener('click',function(){
      detroitWindow.open(this.googleMap,detroitMarker)
      })
  },

  addPittsMarkerAndWindow: function(){
    var pittPos = {lat: 40.440625, lng: -79.995886}
    
    var pittMarker = new google.maps.Marker({position: pittPos,map: this.googleMap})

    var windowContents = 
    '<div id="infowindow">'+
    '<h2>Pittsburgh</h2>'+
    '<p>Pittsburgh was the site of many inventions: besides its great steel industry, the Big Mac, the first polio vaccine, the smiiley face emoticon and the game of Bingo were invented here. Apparently.</p>'+
    '<p>Source: http://www.onlyinyourstate.com/pennsylvania/pittsburgh/fun-facts-pittsburgh/</p>'

    var pittWindow = new google.maps.InfoWindow({
      content:windowContents
    })

    pittMarker.addListener('click',function(){
      pittWindow.open(this.googleMap,detroitMarker)
      })
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap,'click',function(event){
      console.log(event)
    })
  },

  handleButtonClick: function(){

  }

}