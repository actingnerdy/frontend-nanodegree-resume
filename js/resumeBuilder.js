

var name = "Julia Langholt"
var role = "UX Analyst"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio  ={
	"name":"Julia",
	"role":"student",
	"contacts":{
		"email":"jlangholt@gmail.com",
		"cell":"216-440-2424",
		"github":"actingnerdy",
		"location": "Cleveland, OH",
	},
	"Welcome":"Hiya",
	"skills":[
	]
	//"bioPic":"imagetbd.jpg"

};
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.Welcome);
var work ={};
work.position="Mechanical Engineering intern";
work.employer="Design Central";
work.years="Summer 2011";
work.city="Columbus,OH";

var education= {
	"Schools": [
		{
		"name": "The Ohio State University",
		"degree": ["BS Mechanical Engineering", "BA Theatre", "minor in Design"],
		"years": "2009-2014"]
    	},
    	{
    	"name": "Udacity.com",
		"degree":["Nanodegree in Front-End Development"],
		"years": "2014-2015",
		}
  	]

}
$("#main").append(work["position"]);
$("#main").append(education.name);
