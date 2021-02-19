var students = [];

document.getElementById('submit').addEventListener('click', () => 
{
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

        var nameElement = document.createElement("p");
        var idElement = document.createElement("p");
        var gdpaElement = document.createElement("p");

        var node1 = document.createTextNode(students[i].Name);
        var node2 = document.createTextNode(students[i].id);
        var node3 = document.createTextNode(students[i].gdpa);

        nameElement.appendChild(node1);
        idElement.appendChild(node2);
        gdpaElement.appendChild(node3);

        listElement.appendChild(nameElement);
        listElement.appendChild(idElement);
        listElement.appendChild(gdpaElement);

    }

});



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

function insertStudent(name, id, gdpa) 
{
    let student
    {
    Name = name,
    id = id,
    gdpa = gdpa;
    }
	students.push(student);
}  
