let prisonerArray = [];

for(i = 0; i < 100; i++)
{
    prisonerArray[i] = i;
}

randomizePrisonerOrder(prisonerArray);

function randomizePrisonerOrder(prisonerArray)
{
    let randomSelection;
    let oldPrisonerNumber;
    for(x = 99; x >= 0; x--)
    {
        randomSelection = Math.floor(Math.random() * 100);
        oldPrisonerNumber = prisonerArray[x];
        prisonerArray[x] = prisonerArray[randomSelection];
        prisonerArray[randomSelection] = oldPrisonerNumber;
    }

    for(n = 0; n < 100; n++)
    {
        prisonerArray[n] = prisonerArray[n] + 1;
    }

    console.log(prisonerArray);
}