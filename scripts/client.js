$(document).ready(readyNow);

function readyNow(){
    //click handlers
    $('#addEmployeeButton').on('click', addEmployee);
}

const employees = [];

function addEmployee(){
    console.log('in add employee');
    //store input strings in employee object
    let employee = {
        first: $('#firstNameIn').val(),
        last: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val(),
    }
    console.log('employee:', employee);
    //push employee object into array of all employees
    employees.push(employee);
    console.log('employees array:', employees);
    //call function to display employees on DOM table
    addToTable();
    //empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
}

function addToTable(){
    console.log('in add to table');
    //empty table body
    let el = $('#tbody');
    el.empty();
    //loop through employees array
    for (let i=0; i<employees.length; i++){
        //add employee to table
        console.log(employees[i].first);
        el.append(
            `<tr><td>${employees[i].first}</td>
            <td>${employees[i].last}</td>
            <td>${employees[i].id}</td>
            <td>${employees[i].title}</td>
            <td>${employees[i].salary}</td></tr>`)

    }
    //add MONTHLY salary to total cost

    //display cost on DOM
}

function displayCost(){
    console.log('in display cost');
}