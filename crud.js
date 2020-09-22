
/*Function to retrieve data from cv form and place it in local storage*/
function processForm() {
    var fullName = document.getElementById("fname").value;
    if (fullName == '') { fullName = "John Deeney Doe"; }
    console.log(fullName);

    /*Storing data from cv forms into variables*/
    var gender = document.getElementById("gen").value;
    var phoneNumber = document.getElementById("phonenum").value;
    var email = document.getElementById("email").value;
    console.log(email);
    var address = document.getElementById("add").value;
    var objective = document.getElementById("obj").value;
    console.log(objective);
    var institution = document.getElementById("edu").value;
    var major = document.getElementById("maj").value;
    var eduLocation = document.getElementById("loc").value;
    var eduYr = document.getElementById("year").value;
    var courses = document.getElementById("courses").value;
    console.log("relevant courses: " + courses);
    var achievements = document.getElementById("ach").value;
    var othSkills = document.getElementById("oth").value;
    var cocurr = document.getElementById("cocurr").value;
    var references = document.getElementById("ref").value;

    /*Saving objects in the local storage*/
    localStorage.setItem("objective", objective);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("gender", gender);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
    localStorage.setItem("institution", institution);
    localStorage.setItem("major", major);
    localStorage.setItem("eduLocation", eduLocation);
    localStorage.setItem("eduYr", eduYr);
    localStorage.setItem("courses", courses);
    localStorage.setItem("achievements", achievements);
    localStorage.setItem("otherSkills", othSkills);
    localStorage.setItem("cocurr", cocurr);
    localStorage.setItem("references", references);


    /* Saving the data from work experience fields */
    var i = document.getElementById("wkx1").lastElementChild.lastElementChild.getAttribute("id");
    var workExperience = document.getElementById("workex1").value;
    console.log(workExperience);
    var workLocation = document.getElementById("workloc1").value;
    var workYear = document.getElementById("workyr1").value;
    localStorage.setItem("workExperience", workExperience);
    localStorage.setItem("workLocation", workLocation);
    localStorage.setItem("workYear", workYear);
}


/*Function to retrieve form details from local storage*/
function loadData() {
    var fullName = localStorage.getItem("fullName");
    console.log(fullName);
    document.getElementById("header").innerHTML = fullName;
    var address = localStorage.getItem("address");
    document.getElementById("add").innerHTML = address;
    var phoneNumber = localStorage.getItem("phoneNumber");
    document.getElementById("phonenum").innerHTML = phoneNumber;
    var email = localStorage.getItem("email");
    document.getElementById("email").innerHTML = email;
    var objective = localStorage.getItem("objective");
    document.getElementById("obj").innerHTML = objective;
    var institution = localStorage.getItem("institution");
    document.getElementById("institution").innerHTML = institution.toUpperCase();
    var major = localStorage.getItem("major");
    document.getElementById("major").innerHTML = major;
    var eduLocation = localStorage.getItem("eduLocation");
    document.getElementById("eduLocation").innerHTML = eduLocation;
    var eduYr = localStorage.getItem("eduYr");
    document.getElementById("eduYr").innerHTML = eduYr;
    var courses = localStorage.getItem("courses");
    window.onload = function(){
        document.getElementById("courses").innerHTML=courses;
    }
    // document.getElementById("courses").innerHtml = courses;
    console.log("Relevant Courses: " + courses);
    var achievements = localStorage.getItem("achievements");
    document.getElementById("achievements").innerHTML = achievements;
    var otherSkills = localStorage.getItem("otherSkills");
    document.getElementById("otherSkills").innerHTML = otherSkills;
    var cocurr = localStorage.getItem("cocurr");
    document.getElementById("cocurr").innerHTML = cocurr;
    var references = localStorage.getItem("references");
    document.getElementById("references").innerHTML = references;

    /* Loading the data from work experience fields */
    var workExperience = localStorage.getItem("workExperience");
    document.getElementById("workex").innerHTML = workExperience;
    var workYear = localStorage.getItem("workYear");
    document.getElementById("workyr").innerHTML = workYear;
    var workLocation = localStorage.getItem("workLocation");
    document.getElementById("workloc").innerHTML = workLocation;
    
}