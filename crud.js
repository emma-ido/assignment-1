
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
}


/*Function to add new work experience field in form*/
function addFields() {
    var container = document.getElementById("con");
    var button = document.getElementById("buttonCon");
    var otherSkills = document.getElementById("key");
    //container.removeChild(button);

    /*Creating divs to place the new label, text area and input box*/
    var div = document.createElement("div");
    div.classList.add("row");
    var div1 = document.createElement("div");
    div1.classList.add("col-35");
    var div2 = document.createElement("div");
    div2.classList.add("col-25");
    var div3 = document.createElement("div");
    div3.classList.add("col-25");
    var div4 = document.createElement("div");
    div4.classList.add("col-25");

    /*Creating the text area, label and input field*/
    var textarea = document.createElement("textarea");
    //var otherTextarea = document.getElementsByName("workexperience1");
    var label = document.createElement("label");
    var yearInput = document.createElement("input");
    var locationInput = document.createElement("input");
    yearInput.type = locationInput.type = "text";
    var newName = document.getElementById("wkx1").lastElementChild.lastElementChild.getAttribute("id"); 
    console.log(newName);
    console.log(typeof(newName));
    var Num = parseInt(newName) + 1;
    console.log(Num);
    document.getElementById("wkx1").lastElementChild.lastElementChild.id = toString(Num);
    var initialName = "workyr";
    yearInput.name = initialName.concat(Num);
    console.log(yearInput.name);
    locationInput.name = "workloc".concat(Num);
    locationInput.placeholder = "Location";
    yearInput.placeholder = "month year - month year";
    textarea.placeholder = "Intern at Google\n*Achievement-1\n*Achievement-2";
    textarea.id = "workex".concat(Num);
    textarea.classList.add("workex");
    label.innerText = "Work Experience";

    /*Appending the new elements to the existing div*/
    div1.appendChild(textarea);
    div2.appendChild(yearInput);
    div3.appendChild(label);
    div4.appendChild(locationInput);
    div.appendChild(div3);
    div.appendChild(div1);
    div.appendChild(div4);
    div.appendChild(div2);
    
    //container.insertBefore(div, otherSkills);
    document.getElementById("wkx1").append(div);
    //document.getElementById("wkx1").append(button);
    //container.insertBefore(button, otherSkills);
    //container.insertBefore(document.createElement("br"), otherSkills);
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
    document.getElementById("courses").innerHtml = courses;
    console.log("Relevant Courses: " + courses);
    var achievements = localStorage.getItem("achievements");
    document.getElementById("achievements").innerHTML = achievements;
    var otherSkills = localStorage.getItem("otherSkills");
    document.getElementById("otherSkills").innerHTML = otherSkills;
    var cocurr = localStorage.getItem("cocurr");
    document.getElementById("cocurr").innerHTML = cocurr;
    var references = localStorage.getItem("references");
    document.getElementById("references").innerHTML = references;
}