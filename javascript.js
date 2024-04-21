let prisonerArray = [];
let boxArray = [];
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

for(i = 1; i < 101; i++)
{
    prisonerArray[i] = i;
}

for(p = 1; p < 101; p++)
{
    boxArray[p] = p;
}

loopStrategyButton.addEventListener("click", loopStrategyButtonClicked);

function loopStrategyButtonClicked()
{   
    clearContainer(container);
    randomizeBoxOrder(boxArray);
    getLoopResults(prisonerArray, boxArray);
}

randomStrategyButton.addEventListener("click", randomStrategyButtonClicked)

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



function getLoopResults(prisonerArray, boxArray)
{
    for(a = 1; a < 101; a++)
    {
        createTable(a);
        nextSelection = a;
        count = 1;
        let prisonerNumber = a;

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
                    boxPicked.style.color = "red"
                }

                if(boxArray[nextSelection] == prisonerArray[prisonerNumber])
                {
                    let passFail = document.createElement("div");
                    passFail.textContent = "FAIL: " + count + " guesses";
                    passFail.style.color = "red";
                    container.appendChild(passFail);
                    boxPicked.textContent = prisonerArray[nextSelection];
                    boxValue.textContent = boxArray[nextSelection];
    
                    newTableRow1.appendChild(boxPicked);
                    newTableRow2.appendChild(boxValue);
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

}

function clearContainer(container)
{
    var div = document.querySelector(".container");
    while(div.firstChild)
    {
        div.removeChild(div.firstChild);
    }
}