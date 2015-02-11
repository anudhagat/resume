/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1><hr>';
var HTMLheaderRole = '<h3>%data%</h3>';

var HTMLmobileGly = '<span class="glyphicon glyphicon-earphone"></span>';
var HTMLemailGly = '<span class="glyphicon glyphicon-envelope"></span>';

var HTMLtopContactsStart = '<ul id="topContacts" class="flex-box"></ul>';
var HTMLfooterContactsStart = '<ul id="footerContacts" class="flex-box"></ul>';
var HTMLmobile = '<li class="flex-item"><a href="tel: %data%"><span class="glyphicon glyphicon-earphone"></span> Phone</a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto: %data%"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Mail</a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="%data%"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Twitter</a></li>';
var HTMLgithub = '<li class="flex-item"><a href="%data%"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span> GitHub</a></li>';
var HTMLblog = '<li class="flex-item"><a href="%data%"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Blog</a></li>';
var HTMLlocation = '<li class="flex-item"><a href="#"><span class="glyphicon glyphicon-globe" aria-hidden="true"></span>%data%</a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="Resume Picture">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills</h3><ul id="skills"></ul>';
var HTMLskills = '<li>%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="work-title">%data%';
var HTMLworkTitle = ' - %data%</div>';
var HTMLworkDates = '<span class="date-text">%data%</span>';
var HTMLworkLocation = '<span class="location-text">%data%</span>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLallProjects = '<div class="projectEntries"></div>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<div class="project-title">%data%</div><br>';
var HTMLprojectDates = '<span class="date-text">%data%</span>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-img" src="%data%">';
var HTMLprojectGauge = '<div id="gauge_div"></div>'

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolDegree = '<div class="school-title">%data% in';
var HTMLschoolMajor = ' %data%, ';
var HTMLschoolDates = '%data%</div>';
var HTMLschoolName = '%data%, ';
var HTMLschoolLocation = '%data%';


var HTMLonlineClasses = '<div class="onlineClasses"><h4>Online Classes</h4></div>';
var HTMLonlineClass = '<div class="online-entry"></div>'
var HTMLonlineURL = '<a href="%data%">';
var HTMLonlineTitle = '%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var cursorX = loc.pageX;
  var cursorY = loc.pageY;
  logClicks(cursorX,cursorY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(-33, 151),
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.TERRAIN
      ]
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };

  /*{
    disableDefaultUI: true
  };*/

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
       infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
