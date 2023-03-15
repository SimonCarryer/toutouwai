
const script = document.createElement("script")

script.setAttribute(
    'src',
    `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`,
  );
  
script.setAttribute('async', '');
script.setAttribute('defer', '');
document.head.appendChild(script);
