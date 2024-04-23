let prisonerArray = createArray();
let boxArray = createArray();
let newBoxArray = [];
let passCount = 0;
var spacer;
var tableHeading;
var newTable;
var newTableRow1;
var newTableRow2;
var rowHeading1;
var rowHeading2;
var nextSelection;
var count;

const container = document.querySelector(".container");
let loopStrategyButton = document.querySelector(".loopStrategyButton");
let randomStrategyButton = document.querySelector(".randomStrategyButton");

loopStrategyButton.addEventListener("click", loopStrategyButtonClicked);

randomStrategyButton.addEventListener("click", randomStrategyButtonClicked)

function createArray()
{
    var newArray = [];
    for(i = 1; i < 101; i++)
    {
        newArray[i] = i;
    }
    return newArray;
}

function loopStrategyButtonClicked()
{   
    passCount = 0;
    clearContainer(container);
    randomizeBoxOrder(boxArray);
    getLoopResults(prisonerArray, boxArray);
}

function randomStrategyButtonClicked()
{
    clearContainer(container);
    randomizeBoxOrder(boxArray);
    getRandomResults(prisonerArray, boxArray);
}

function randomizeBoxOrder(boxArray)
{
    let randomSelection;
    let oldBoxNumber;
    for(l = 100; l > 0; l--)
    {
        randomSelection = Math.floor((Math.random() * 100) + 1);
        oldBoxNumber = boxArray[l];
        boxArray[l] = boxArray[randomSelection];
        boxArray[randomSelection] = oldBoxNumber;
    }

    return boxArray;
}

function createTable(a)
{
    tableHeading = document.createElement("h4");
    newTable = document.createElement("table");
    newTableRow1 = document.createElement("tr");
    newTableRow2 = document.createElement("tr");
    rowHeading1 = document.createElement("th");
    rowHeading2 = document.createElement("th");
    tableHeading.textContent = "Prisoner Number: " + a;
    rowHeading1.textContent = "Box Picked";
    rowHeading2.textContent = "Box Value";
    newTableRow1.appendChild(rowHeading1);
    newTableRow2.appendChild(rowHeading2);
    newTable.appendChild(newTableRow1);
    newTable.appendChild(newTableRow2);
    container.appendChild(tableHeading);
    container.appendChild(newTable);
}

function passFunction(count)
{
    let boxPicked = document.createElement("th");
    let boxValue = document.createElement("th");
    let passFail = document.createElement("div");

    boxPicked.textContent = prisonerArray[nextSelection];
    boxValue.textContent = boxArray[nextSelection];
    passFail.textContent = "PASS: " + count + " guesses";

    passFail.style.color = "green";
    boxValue.style.color = "green";
    boxPicked.style.color = "green";

    newTableRow1.appendChild(boxPicked);
    newTableRow2.appendChild(boxValue);
    container.appendChild(passFail);
}

function failFunction(count)
{
    let boxPicked = document.createElement("td");
    let boxValue = document.createElement("td");
    let passFail = document.createElement("div");
    passFail.textContent = "FAIL: " + count + " guesses";
    passFail.style.color = "red";
    container.appendChild(passFail);
}


function getLoopResults(prisonerArray, boxArray)
{
    for(a = 1; a < 101; a++)
    {
        createTable(a);
        nextSelection = a;
        count = 1;
        let prisonerNumber = a;
        if(passCount == 99)
        {
            const fullTestPass = document.createElement("div");
            fullTestPass.textContent = "PASS";
            fullTestPass.style.color = "green";
            fullTestPass.style.fontSize = "24px";
            container.insertBefore(fullTestPass, container.firstChild);
        }
        if (a == 100 && passCount < 99)
        {
            const fullTestPass = document.createElement("div");
            fullTestPass.textContent = "FAIL";
            fullTestPass.style.color = "red";
            fullTestPass.style.fontSize = "24px";
            container.insertBefore(fullTestPass, container.firstChild);
        }

        while(count < 101)
        {
            if(boxArray[nextSelection] == prisonerArray[prisonerNumber] && count < 51)
            {
                passCount++;
                passFunction(count);
                count = 102;
            }
            else
            {
                let boxPicked = document.createElement("td");
                let boxValue = document.createElement("td");

                if(count > 50)
                {
                    boxPicked.style.color = "red";
                    boxValue.style.color = "red";
                }

                if(boxArray[nextSelection] == prisonerArray[prisonerNumber])
                {
                    failFunction(count);
                    count = 102;
                }

                boxPicked.textContent = prisonerArray[nextSelection];
                boxValue.textContent = boxArray[nextSelection];

                newTableRow1.appendChild(boxPicked);
                newTableRow2.appendChild(boxValue);

                nextSelection = boxArray[nextSelection];
                count++;
            }
        }
    }
}

function getRandomResults()
{
    for(a = 1; a < 101; a++)
    {
        newBoxArray = createArray();
        createTable(a);
        count = 1;
        let prisonerNumber = a;
        randomBoxSelection();
        if(passCount == 99)
        {
            const fullTestPass = document.createElement("div");
            fullTestPass.textContent = "PASS";
            fullTestPass.style.color = "green";
            fullTestPass.style.fontSize = "24px";
            container.insertBefore(fullTestPass, container.firstChild);
        }
        if (a == 100 && passCount < 99)
        {
            const fullTestPass = document.createElement("div");
            fullTestPass.textContent = "FAIL";
            fullTestPass.style.color = "red";
            fullTestPass.style.fontSize = "24px";
            container.insertBefore(fullTestPass, container.firstChild);
        }

        while(count < 101)
        {
            if(boxArray[nextSelection] == prisonerArray[prisonerNumber] && count < 51)
            {
                passFunction(count);
                count = 102;
            }
            else
            {
                let boxPicked = document.createElement("td");
                let boxValue = document.createElement("td");

                if(count > 50)
                {
                    boxPicked.style.color = "red";
                    boxValue.style.color = "red";
                }

                if(boxArray[nextSelection] == prisonerArray[prisonerNumber])
                {
                    failFunction(count);
                    count = 102;
                }

                boxPicked.textContent = prisonerArray[nextSelection];
                boxValue.textContent = boxArray[nextSelection];

                newTableRow1.appendChild(boxPicked);
                newTableRow2.appendChild(boxValue);

                randomBoxSelection(newBoxArray);
                
                count++;
            }
        }
    }
}

function clearContainer(container)
{
    var div = document.querySelector(".container");
    while(div.firstChild)
    {
        div.removeChild(div.firstChild);
    }
}

function randomBoxSelection()
{
    let randomBox = Math.floor((Math.random() * (newBoxArray.length - 1)) + 1)
    nextSelection = newBoxArray[randomBox]
    for(z = 1; z < newBoxArray.length + 1; z++)
    {
        if(newBoxArray[z] == newBoxArray[randomBox])
        {
            newBoxArray.splice(z, 1);
        }
    }

    return nextSelection, newBoxArray;
}