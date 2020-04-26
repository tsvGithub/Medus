//======================================
//Timer
//=========================================
// Set the date we're counting down to
var countDownDate = new Date("Jul 15, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  //   document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("timer").innerHTML = `${days}days <br> ${hours}hours  ${minutes}min   ${seconds}sec`;

  // If the count down is over, write the text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "We've just got honey!!!";
  }
}, 1000);
//==============================================

//height
// $(function () {
//   //   $(".seasons, .hero, .about").css({ height: $(window).innerHeight() });
//   $(window).resize(function () {
//     $(".seasons, .hero, .about").css({ height: $(window).innerHeight() });
//   });
// });
//===========================================

//MAP
mapboxgl.accessToken = "pk.eyJ1IjoidHN2IiwiYSI6ImNrOHN1OXAzMjBqODAzbXA5dnAwZ3EzY2gifQ.TEdkb68GkCuBsk9qetH_oQ";

let map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/tsv/ck8ufgjbn1b6z1iqkyl816ajz", // stylesheet location
  center: [27.644, 56.943], // the initial centerpoint of the map in [lng, lat] format
  zoom: 11.19, // starting zoom
});
//This code declares a variable geojson that is set equal to GeoJSON data.
let geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [27.642, 56.944],
      },
      properties: {
        title: '"Doka", Baltinavas pagasts, Baltinavas novads, LV-4594',
        description: "Busy Bee",
      },
    },
  ],
};

geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
  var el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        // add popups
        .setHTML("<h3>" + marker.properties.title + "</h3><p>" + marker.properties.description + "</p>")
    )
    .addTo(map);
});
// let marker = new mapboxgl.Marker().setLngLat([27.644, 56.943]).addTo(map);
/*=====================*/

//Navbar
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").each(function () {
      // $(this).parent("li").css("background", "#5bb648");
      $(this).css("color", "#277e15");
    });
    $(this).css("color", "#A7E59A");
    // $(this).parent("li").css("background", "#fff");
  });
});
