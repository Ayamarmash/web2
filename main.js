var students = [];

document.getElementById('submit').addEventListener('click', (e) => 
{
    e.preventDefault();
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
   if ( inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value) )
	{
        // insert student
        insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
        // Show success message
        //alert(`${nameInputEl.value} Has been successfully added.`);
    }

    else alert('Faild to add student');

  
});

document.getElementById('showlist').addEventListener('click', ()=>
{
    for (var i=0 ; i < students.length ; i++)
    {
        var listElement = document.getElementById('list');

        var studentNameElement = document.createElement('div');

        studentNameElement.innerHTML = "  Name: " + students[i]['name'] + "    ID: " + students[i]['id'] + "    GPA: " + students[i]['gdpa'] + "<br> <br>";

        listElement.appendChild(studentNameElement);
    }
});

document.getElementById('editstudent').addEventListener('click' , ()=>
{
    var person = prompt("Please enter Student id.");

if (person != null) 
{
    for(var i=0 ; i<students.length ; i++)
    {
        if(students[i]['id'] == person)
        {
            var newname= prompt("Enter Name: ");
            var newgpa= prompt("Enter gpa: ");
             students[i].Name = newname;
             students[i].gdpa=newgpa;
        }
    }

}



})

document.getElementById('deletestudent').addEventListener('click', ()=>
{

 var person = prompt("Please enter Student id.");

if (person != null) 
{
    for(var i=0 ; i<students.length ; i++)
    {
        if(students[i]['id'] == person)
        {
            students[i].Name = NULL;
            students[i].id = NULL;
            students[i].gdpa=NULL;
        }
    }
    
}
})
function inputValidation(name, id, gdpa) 
{
	// check for the value of each element
    let x = 30;

    var pattern = /[! @ # $ % & * ( ) ~ - _ ]/g;
	if (name == '') {
        alert('Please insert the student name');
        return false;
    }
	 if (id == '') {
        alert('Please insert the student id number');
        return false;
	}
     if (gdpa == '') 
    {
        alert('Please insert the student gdpa');
        return false;
    }  
    if (pattern.test(name)) 
    {
        alert("The Name contains invalid character");
        return false;
    }  
    if (gdpa < 0 || gdpa > 4)
    {
        alert("Invalid gdpa");
        return false;
    }
    else return true;
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}