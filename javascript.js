let prisonerArray = [];
let boxArray = [];
const prisonerNumberDiv = document.querySelector(".prisonerNumber");
const boxPickedTR = document.querySelector(".boxPicked");
const boxValueTR = document.querySelector(".boxValue");
const loopStrategyButton = document.querySelector(".loopStrategyButton");
const randomStrategyButton = document.querySelector(".randomStrategyButton");

for(i = 1; i < 101; i++)
{
    prisonerArray[i] = i;
}

for(p = 0; p < 100; p++)
{
    boxArray[p] = p;
}

loopStrategyButton.addEventListener("click", loopStrategyButtonClicked)

function loopStrategyButtonClicked()
{
    randomizeBoxOrder(boxArray);
    getLoopResults(prisonerArray, boxArray);
}

randomStrategyButton.addEventListener("click", randomStrategyButtonClicked)

function randomStrategyButtonClicked()
{
    randomizeBoxOrder(boxArray);
    getRandomResults(prisonerArray, boxArray);
}

function randomizeBoxOrder(boxArray)
{
    let randomSelection;
    let oldBoxNumber;
    for(l = 99; l >= 0; l--)
    {
        randomSelection = Math.floor(Math.random() * 100);
        oldBoxNumber = boxArray[l];
        boxArray[l] = boxArray[randomSelection];
        boxArray[randomSelection] = oldBoxNumber;
    }

    for(j = 0; j < 100; j++)
    {
        boxArray[j] = boxArray[j] + 1;
    }

    return boxArray;
}

function getLoopResults(prisonerArray, boxArray)
{
    for(a = 1; a < 101; a++)
    {
        let nextSelection = a;
        let count = 1;

        const prisonerNumber = document.createElement("div");

        prisonerNumber.textContent = "Prisoner Number: " + a;
        prisonerNumberDiv.appendChild(prisonerNumber);

        while(count < 101)
        {
            if(count < 51 && prisonerArray[a] == boxArray[nextSelection])
            {
                const passFail = document.createElement("div");
                const boxPicked = document.createElement("th");
                const boxValue = document.createElement("th");
            
                boxPicked.textContent = prisonerArray[count];
                boxValue.textContent = boxArray[nextSelection];
                passFail.textContent = "PASS";
                passFail.style.color = "green";
                boxValue.style.color = "green";
                boxPicked.style.color = "green";

                prisonerNumberDiv.appendChild(passFail);
                boxValueTR.appendChild(boxValue);
                boxPickedTR.appendChild(boxPicked);

                count = 102;
                a = 102;
            }
            else if(count > 50)
            {
                const passFail = document.createElement("div");
                const boxPicked = document.createElement("th");
                const boxValue = document.createElement("th");

                boxPicked.textContent = prisonerArray[count];
                boxValue.textContent = boxArray[nextSelection];
                passFail.textContent = "FAIL";
                passFail.style.color = "red";
                boxValue.style.color = "red";
                boxPicked.style.color = "red";

                prisonerNumberDiv.appendChild(passFail);
                boxValueTR.appendChild(boxValue);
                boxPickedTR.appendChild(boxPicked);

                a = 102;
                count = 102;
            }

            else
            {
                const boxPicked = document.createElement("th");
                const boxValue = document.createElement("th");

                boxPicked.textContent = prisonerArray[count];
                boxValue.textContent = boxArray[nextSelection];

                boxValueTR.appendChild(boxValue);
                boxPickedTR.appendChild(boxPicked);

                nextSelection = boxArray[nextSelection];
                count++;
            }
        }
    }
}

function getRandomResults()
{

}