const prompt = require('prompt-sync')();
console.log("Welcome to the To-Do List Manager Application! ")
console.log("==============================================")
console.log("   ")
console.log("Your to-do list is empty.")

let action = prompt("Select an action: [1] Create a to-do item  [2] Complete a to-do list:  ");

while(action = 1){
    console.log("~ Creating a new to-do item ~");
    let itemName = prompt("What is this to-do item called?  ");
    console.log("You have") // add tally of inputed "itemName" and then "to-do item(s)""
    console.log("[incomplete] "+ itemName );


}