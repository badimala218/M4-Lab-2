// CREATE AN ARRAY OF EMPLOYEES
let initialSet = [
    [11111666, "Demon", 1666, "demon@bor.cor", "Executive"],
    [11111122, "Razz", 1111, "razz@bor.cor", "Sales"],
    [11110000, "Battleship", 2222, "bship@bor.cor", "Engineering"],
    [10000002, "OWO", 3333, "owo@bor.cor", "Marketing"],
    [55555555, "Unpaid intern", 4545, "intern@bor.cor", "QA"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let employeeArray;
window.addEventListener("load", function()
{
    "use strict";
    if (this.localStorage.employeesArray)
    {
        employeeArray = JSON.parse(this.localStorage.employeesArray);
    }
    else
    {
        employeeArray = initialSet;
    }
});

// GET DOM ELEMENTS
let tbody = document.getElementsByTagName("tbody");
let table = document.getElementById("empTable");

let count = 0;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener("load", buildTable);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    "use strict";
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    "use strict";
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.remove();

    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement("tbody");

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (row of employeeArray)
    {
        // REBUILDING THE ROW STRUCTURE
        let newRow = document.createElement();
        newRow.innerHTML =
            `<tr><td>${row[0]}</td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td></tr>
            `;
        tbody.appendChild(newRow);
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.innerHTML += tbody;

    // UPDATE EMPLOYEE COUNT
    count = tbody.childNodes.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.employeesArray = JSON.parse(employeeArray);
};