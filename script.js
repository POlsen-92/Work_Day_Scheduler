var currentDayEl = $('#currentDay');
var parent = $(".row")
var textAreaEl = $("#task");
var hourEl = $('#hour')
var savebtn= $('.savebtn')

// textAreaEl.parents().siblings().children('textarea').text('Hello')
// currentDayEl.text('Hello')

var currentTime = moment().format("h:m")
console.log(currentTime)

renderTask()
//Create currentDay heading using moment
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Use conditionals and current time to append classes (past, present and future) as the background image to the textArea 



//On click of the 'savebtn' any text within the textarea will be saved to local storage and rendered to the textarea upon loading the page

//closest can be used to 

savebtn.click(function(event) {
    console.log($(event.target).prev())
    console.log(savebtn)
    var task = $(event.target).prev().val();
    console.log('Task:', task)
    localStorage.setItem("taskData", JSON.stringify(task))
})


function renderTask() {
    var taskData = JSON.parse(localStorage.getItem("taskData"))
    savebtn.closest(textAreaEl).append(taskData)
}
