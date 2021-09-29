var currentDayEl = $('#currentDay');
var parent = $(".row")
var textAreaEl = $("#task");
var hourEl = $('#hour')
var savebtn= $('.savebtn')

//Create currentDay heading using moment
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Create current time in order to compare for addClass
var currentTime = moment().format("H")


//Run functions to load saved local storage and color of textArea
renderTask();
color();

//Use conditionals and current time to append classes (past, present and future) as the background image to the textArea 
function color() {
    for (let hour = 9; hour <= 17; hour++) {
        console.log(hour)
        if (hour == currentTime) {
            $("#" + hour).addClass("present");
        } else if (hour < currentTime) {
            $("#" + hour).addClass("past")
        } else if (hour > currentTime) {
            $("#" + hour).addClass("future")
        }
    }
}

//On click of the 'savebtn' any text within the textarea will be saved to local storage and rendered to the textarea upon loading the page

savebtn.click(function(event) {
    var task = $(event.target).prev().val();
    var hourID = $(event.target).prev().attr("id")
    localStorage.setItem(hourID, task)
})

function renderTask() {
    for (let i = 9; i <= 17; i++) {
        var getTask = localStorage.getItem(i);
        $('#' + i).val(getTask);
    }
}
