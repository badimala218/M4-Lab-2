

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
const $ = (id) => document.getElementById(id);
let tbody = document.getElementsByTagName("tbody")[0];
let table = $("empTable");
let form = $("addForm");

let count = 0;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener("load", buildGrid);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    "use strict";
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $("id").value;
    let name = $("name").value;
    let extension = $("extension").value;
    let email = $("email").value;
    let department = $("department").value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [];
    newEmployee.push(id);
    newEmployee.push(name);
    newEmployee.push(extension);
    newEmployee.push(email);
    newEmployee.push(department);

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employeeArray.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    $("id").value = "";
    $("name").value = "";
    $("extension").value = "";
    $("email").value = "";
    $("department").value = "";

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => 
{
    "use strict";
    // CONFIRM THE DELETE
    if (e.target.tagName !== "TH")
    {
        let currentRow;
        if (e.target.tagName === "BUTTON")
        {
            currentRow = e.target.parentNode.parentNode;
        }
        else 
        {
            currentRow = e.target.parentNode;
        }
        if (confirm("Delete user #" + currentRow.firstChild.innerHTML + "?"))
        {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = currentRow.rowIndex - 1;

            // REMOVE EMPLOYEE FROM ARRAY
            employeeArray.splice(rowIndex, 1);

            // UPDATE EMPLOYEE COUNT
            count--;
            $("empCount").innerHTML = "(" + count + ")";

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    "use strict";
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.remove();

    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement("tbody");

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (const row of employeeArray)
    {
        // REBUILDING THE ROW STRUCTURE
        let newRow = document.createElement("tr");
        newRow.innerHTML =
            `<td>${row[0]}</td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
            <td><button class="btn btn-danger">X</td>
            `;
        tbody.appendChild(newRow);
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    count = tbody.childNodes.length;
    $("empCount").innerHTML = "(" + count + ")";

    // STORE THE ARRAY IN STORAGE
    localStorage.employeesArray = JSON.stringify(employeeArray);
};