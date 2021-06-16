const prompt = require('prompt-sync')({ sigint: true });
console.log("Welcome to the To-Do List Manager Application! ")
console.log("==============================================")
console.log("   ")



let itemArray = []
let completeArray =[]
while (true) {
     console.log("You have " +itemArray.length + " to-do item(s)");
    let action = prompt("Select an action: [1] Create a to-do item  [2] Complete a to-do list:  ");
    console.log("   ")
    console.log("==============================================")
    let numberAction = Number(action)

   
    console.log("   ")
    console.log(itemArray)
    if (numberAction === 1) {
        console.log("~ Creating a new to-do item ~");
        console.log("   ")
        let itemName = prompt("What is this to-do item called?  ");
        console.log("   ")
        itemArray.push("[incomplete] " +itemName)
        console.log("   ")       
        console.log(itemArray)
        console.log("   ")
        console.log(completeArray)
        console.log("   ")
        console.log("==============================================")
    }

    else if (numberAction === 2) {
        console.log("~ Completing a to-do item ~")
        console.log("   ")
        console.log(itemArray)
        console.log("   ")
        let completeItem = prompt("Please select the number of the item that you would like to have marked as complete:  ");
        let numberCompleteItem = Number(completeItem);
        let completePosition = numberCompleteItem -1;
      //  completeArray = itemArray.splice(completePosition, 1) --- Got lost on these two lines of code and was able to convert it to a single line below.
      //  completeArray[0] = ("[complete]"+completeArray[0].slice(12)) ---
        completeArray.push("[complete]"+itemArray.splice(completePosition, 1)[0].slice(12));
        console.log(completeArray)
        console.log("   ")
        console.log(itemArray)
        console.log("   ")
        console.log("==============================================")
        
    }

}