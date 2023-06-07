var inputStudents = [
    {name:"Saqib", dob:"10-12-1998", email: "saqib@gmail.com"},
    {name:"Zain", dob:"23-01-1999", email: "zain@gmail.com"},
    {name:"Ali", dob:"20-07-1996", email: "ali@gmail.com"}
 ]

 var currentDate = new Date();

 var fullYears = currentDate.getFullYear();

 for (let index = 0; index < inputStudents.length; index++) {
    
    var students = inputStudents[index];
    

    var dobGet = students.dob.split("-");
    console.log("dobGet" + " " + dobGet);

    var dob = new Date (dobGet[2], dobGet[1] - 1, dobGet[0]);
    console.log("dob" + " " + dob);
    var ageDifference = Date.now() - dob.getTime();

    console.log("ageDifference" + " " + ageDifference);
    
    var age = ageDifference / (24 * 3600 * 1000 * 365.25);
    age = Math.round(age);
    console.log("age" + " " + age);

    for (let i = 0; i< inputStudents.length; i++) {
        students.age = age;
        
    }

 }

 console.log("inputStudents", inputStudents);