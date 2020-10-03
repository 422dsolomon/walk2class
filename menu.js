(function () {
    "use strict";
  
    $(function () {
      $(".menu-container").load("menu.html");
    });
  })();


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.22283, lng: 71.07015 },
    zoom: 8,
  });
}

