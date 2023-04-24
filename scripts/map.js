
// The following example creates five accessible and
// focusable markers.

var infowindow = null

function changeBird(band) {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
    }   
    var next = document.getElementById(band);
    next.className += " active";
}

function addBirdCard(bird) {
  let container = document.getElementsByClassName("birdCards")[0]
  if (Array.from(container.children).filter(elem => elem.id == bird.band).length > 0) {
    changeBird(bird.band)
  }
  else {
    let div = buildCard(bird);
    container.appendChild(div);
  }
}

function makeMarker(bird, map, infoWindow) {
    var url = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    if (bird.confirmed_missing != "") {
        url =  "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
    }
    const icon = {
        url: url,
        scaledSize: new google.maps.Size(40, 40)
    }   
    const marker = new google.maps.Marker({
        position: { lat: bird.territory.lat, lng: bird.territory.lng},
        map: map,
        icon: icon
      });

    

      marker.addListener("click", () => {
        addBirdCard(bird);
        if (infowindow) {
            infowindow.close();
        }
        infowindow = new google.maps.InfoWindow({
            content: bird.band,
          });
        infowindow.open({
            anchor: marker,
            map,
          });      
      });
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: { lat: -41.2900025, lng: 174.7541021 },
      mapTypeId: 'hybrid',
      minZoom: 15,
      maxZoom: 19,
      restriction: {
        latLngBounds: {
          north: -41.29252013624898,
          south: -41.30653554645328,
          east: 174.77082087254317,
          west: 174.73653057868395,
        },
      },
    
    });

    var noPoi = [
      {
          featureType: "poi",
          stylers: [
            { visibility: "off" }
          ]   
        }
      ];
      
    map.setOptions({styles: noPoi});

    const infoWindow = new google.maps.InfoWindow();

    data.forEach(bird =>
        makeMarker(bird, map, infoWindow)
        )

    // Create an info window to share between markers.
  
  }
  window.initMap = initMap;