const prompt = require('prompt-sync')({ sigint: true });
console.log("Welcome to the To-Do List Manager Application! ")
console.log("==============================================")
console.log("   ")
console.log("Your to-do list is empty.")


let itemArray = []
let completeArray =[]
while (true) {
    let action = prompt("Select an action: [1] Create a to-do item  [2] Complete a to-do list:  ");
    console.log("   ")
    let numberAction = Number(action)
    console.log(itemArray)

    if (numberAction === 1) {
        console.log("~ Creating a new to-do item ~");
        console.log("   ")
        let itemName = prompt("What is this to-do item called?  ");
        console.log("   ")
        itemArray.push(itemName)
        console.log("You have "); //Insert count of total items/strings in array.
        console.log("   ")
        console.log("[incomplete] " + itemName);
        console.log("   ")
        console.log(itemArray)
    }

    else if (numberAction === 2) {
        console.log("~ Completing a to-do item ~")
        console.log("   ")
        console.log(itemArray)
        console.log("   ")
        let completeItem = prompt("Please select the number of the item that you would like to have marked as complete:  ");
        let numberCompleteItem = Number(completeItem);
        let completePosition = numberCompleteItem -1;
        completeArray = itemArray.splice(completePosition, 1)
        console.log(completeArray)

    }

}

