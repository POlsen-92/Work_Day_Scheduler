var currentDayEl = $('#currentDay');
var parent = $(".row")
var textAreaEl = $("#task");
var hourEl = $('#hour')
var savebtn= $('.savebtn')

renderTask();

var currentTime = moment().format("H")
console.log(currentTime)

color();
//Create currentDay heading using moment
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Use conditionals and current time to append classes (past, present and future) as the background image to the textArea 

function color() {
    for (let i = 9; i <= 17; i++) {
        var hourID = ($("#" + i).attr("id"))
        console.log(hourID)
        if (hourID === currentTime) {
            $("#" + i).addClass("present");
        } else if (hourID < currentTime) {
            $("#" + i).addClass("past")
        } else if (hourID > currentTime) {
            $("#" + i).addClass("future")
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
