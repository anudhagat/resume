var bio = {
	"name": "Anu Dhagat",
	"role": "Web Developer",
	"contacts": {
		"email":"anudhagat@yahoo.com",
		"phone": "408-555-1244",
		"github": "https://github.com/anudhagat",
		"blog": "http://painters-table.com/blog-roll/artist-blogs",
		"twitter": "https://twitter.com",
		"location": "San Jose, CA"
	},
	"picture": "images/anuimg2.jpg",
	"welcomeMessage": "Welcome to my Resume Page!",
	"skills": ["C++","Java","JavaScript","HTML/CSS","Python"],
	display: function (){
		/* Adding href attribute to all the links in Contacts collapsible menu. */
		$('#phoneLnk').attr('href','tel: ' + bio.contacts.phone);
		$('#emailLnk').attr('href','mailto: ' +bio.contacts.email);
		$('#githubLnk').attr('href',bio.contacts.github);
		$('#blogLnk').attr('href',bio.contacts.blog);
		$('#twitterLnk').attr('href',bio.contacts.twitter);
		$('#locationLnk').attr('href',"#mapDiv");

		/*Adding Name, role, pic to the header.*/
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var pic = HTMLbioPic.replace("%data%",bio.picture);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(pic);
		$("#header").append(formattedName);
		$("#header").append(formattedRole);

		/*Filling the Contacts section of the header. */
		$("#header").append(HTMLtopContactsStart);
		$("#footer").append(HTMLfooterContactsStart);

		var formattedContact = HTMLmobile.replace("%data%",bio.contacts.phone);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		formattedContact = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		formattedContact = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		formattedContact = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		formattedContact = HTMLblog.replace("%data%",bio.contacts.blog);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		formattedContact = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		/*Adding the welcome msg.*/
		$("#header").append(formattedWelcome);

		/*Adding the skills to the header.*/
		if (bio.skills.length >0){
			$("#skillsTitle").append(HTMLskillsStart);
			for(var i=0;i< bio.skills.length;i++){
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var work ={
	"jobs":[
		{
			"employer": "Clarify",
			"title": "Senior Software Engineer",
			"location": "San Jose, CA",
			"dates": "Jan 96 to Jan 98",
			"description": "In charge of search engine for their CRM software; development done in C++ for Oracle/MSSQL/Sybase databases and Unix/Windows/Mac OS."
		},
		{
			"employer": "University of Massachusetts",
			"title":"Research Assistant",
			"location": "Amherst, MA",
			"dates": "Sept 94 to July 95",
			"description": "Developed compiler in C++/Windows X."
		},
		{
			"employer": "Tata Consultancy Services",
			"title": "Systems Programmer",
			"location": "Mumbai, India",
			"dates": "May 91 to Aug 91",
			"description": "Developed project manangement tool in C on Windows."
		}
	],
	display : function(){
		/*Adding content to display all the information for each job. */
		for(var i=0; i< work.jobs.length;i++){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedEmpTitle = formattedEmployer+formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
			$(".work-entry:last").append(formattedEmpTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var education = {
	"schools": [
		{
		"name": "University of Massachusetts",
		"degree": "M.S.",
		"location": "Amherst, MA",
		"dates": "1995",
		"major": "Computer Science"
		},
		{
		"name": "Smith College",
		"degree": "B.A.",
		"location": "Northamtpon, MA",
		"dates": "1992",
		"major": "Computer Science"
		}
	],
	"onlineCourses": [
		{
		"title":"JavaScript Syntax",
		"school":"Udacity",
		"dates": "Jan 2015",
		"url": "http://www.udacity.com/course/ud804"
		},
		{
		"title":"Responsive Web Design Fundamentals",
		"school":"Udacity",
		"dates": "Jan 2015",
		"url": "http://www.udacity.com/course/ud893"
		}

	],
	display: function (){
		/*Adding content to display each school in the education section.*/
		for(var i=0; i<education.schools.length; i++){
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedDegreeMajorDates = formattedDegree+formattedMajor  + formattedDates;
			var formattedNameLocation = formattedName + formattedLocation;

			$(".education-entry:last").append(formattedDegreeMajorDates);
			$(".education-entry:last").append(formattedNameLocation);
		}

		/*Adding content to the online courses under the education section. */
		if(education.onlineCourses.length >0){
			$('.education-entry:last').append(HTMLonlineClasses);
			for(var i =0; i < education.onlineCourses.length; i++){
				$('.onlineClasses').append(HTMLonlineClass);
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
				var tmpStr = formattedUrl + formattedTitle + formattedSchool;
				$(".online-entry:last").append(tmpStr);
				$(".online-entry:last").append(formattedDates);

			}
		}

	}
};

var projects ={
	"project":[
		{
		"title": "Travel App",
		"dates":"Jan 2015",
		"description":"Mobile app that manages your future travels and gives up to date information about all destinations.",
		"images":["images/travel_app2.png"]
		},
		{
		"title": "Memory Game",
		"dates":"Dec 2014",
		"description":"Children's Mobile game made for Android phones, to boost memory.",
		"images":["images/memory.jpg"]
		}

		],
		display: function() {
			/*Adding content to the project section. Displays all projects and their images.*/
			$("#projects").append(HTMLallProjects);
			for(var i =0; i < projects.project.length; i++){
				$(".projectEntries").append(HTMLprojectStart);
				var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
				var formattedDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
				$(".project-entry:last").append(formattedTitle);
				$(".project-entry:last").append(formattedDates);
				$(".project-entry:last").append(formattedDescription);
				if (projects.project[i].images.length >0){
					for (var j =0; j< projects.project[i].images.length; j++){
						var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[j])
						$(".project-entry:last").append(formattedImage);
					}
				}
				$(".project-entry:last").append(HTMLprojectGauge);
			}
		}
};

/*Calling all display functions to render all the information in the different sections of the resume.*/
bio.display();
work.display();
education.display();
projects.display();

//This creates an internationalize button and changes the name at the top to be in the form: Jane DOE.
//I am choosing not to display this code, although it works fine.

//function inName(name){
//	var nameArray = name.trim().split(" ");
//	var first = nameArray[0];
//	var last = nameArray[1];
//	return first.charAt(0).toUpperCase()+first.slice(1).toLowerCase()+" "+last.toUpperCase();
//}
//$("#main").append(internationalizeButton);

/*Displays the google map. */
$("#mapDiv").append(googleMap);

/*This code adds the content to the google gauge chart under the project section. */
  google.load('visualization', '1', {packages: ['gauge']});
  google.setOnLoadCallback(drawGauge);

  var gaugeOptions = {min: 0, max: 100, yellowFrom: 50, yellowTo: 70,
    greenFrom: 70, greenTo: 100, minorTicks: 5};
  var gauge;

  function drawGauge() {
    gaugeData = new google.visualization.DataTable();
    gaugeData.addColumn('number', 'Travel App');
    gaugeData.addRows(1);
    gaugeData.setCell(0, 0, 80);

    gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));
    gauge.draw(gaugeData, gaugeOptions);
  }