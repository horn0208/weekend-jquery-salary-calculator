$(document).ready(readyNow);

function readyNow(){
    //click handlers
    $('#addEmployeeButton').on('click', addEmployee);
    $('#tbody').on('click', '#deleteEmployeeButton', deleteEmployee);
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
    let allSalaries = 0;
    //empty table body
    let el = $('#tbody');
    el.empty();
    //loop through employees array
    for (let i=0; i<employees.length; i++){
        //add employee to table
        el.append(
            `<tr><td>${employees[i].first}</td>
            <td>${employees[i].last}</td>
            <td>${employees[i].id}</td>
            <td>${employees[i].title}</td>
            <td>${employees[i].salary}</td>
            <td><button id="deleteEmployeeButton">Delete</button></td></tr>`)
        //add salary to allSalaries
        allSalaries += Number(employees[i].salary);
    }
    //calculate monthly and display cost on DOM
    displayCost(allSalaries);
}

function displayCost(allSalaries){
    // console.log('allSalaries:', allSalaries);
    let el = $('#totalMonthly');
    el.empty();
    //calculate monthly cost from annual and display on DOM
    let monthly = (allSalaries/12).toFixed(2);
    el.append(`$${monthly}`);
    // turn monthly cost display red if exceeds 20K
    if (monthly > 20000) {
        el.css('background-color', 'red');
    } else {
        el.css('background-color', 'white');
    }
}

function deleteEmployee(){
    //remove employee from array**stretch goal****
    
    //remove employee from table display
    $(this).parent().parent().fadeOut(200);//not sure if this is best, but it works
    

}