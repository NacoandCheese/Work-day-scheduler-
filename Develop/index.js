var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("today's date and time", currentDay)
// selecting current day ID from HTML. this is a querySelector
document.getElementById("currentDay").textContent = "Today's date and time: " + currentDay

//1: make the buttons do something when clicked
// select buttons using query selector just like you did with the currentDay
// but remember, there are 9 buttons, not just 1. You have to select all buttons
// once you have selected all buttons, you have to loop over them
// in the loop, you can add an event listener ("click", console.log)
// you can test this on just one button to start.

// event listener for multiple buttons

document.getElementById("demo").addEventListener("click", saveButton);

function saveButton() {
    document.getElementById("demo").innerHTML = "You Clicked Me!";
}



btns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

    })
}



//2. Make the table look better (wider, better spacing, whatever)




//3. Color the rows based on the current time of day
// You will do this by adding a css class in javascript (start with this)
//       do this just for random HTML elements first
// Add a data- attiribute (google for that) to all your td tags in the 'time' column
// each data- attirbute will be something like 'data-time='9'', 'data-time="10"'
 