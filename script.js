var dateEl = $('#currentDay');
var timeSlots = $('.time-block');
var today = dayjs();
var currentHour = today.hour();
currentHour = Number(currentHour);
console.log(currentHour);

$(function () {
  timeSlots.on('click', 'button', function (event) {
    var btnClicked = $(event.target);

    var currentHour = btnClicked.parent().parent().attr('id');
    
    localStorage.setItem(currentHour, btnClicked.parent().parent().children(".description").val());
  })

  for(var i = 9; i < 18; i++){
    var blockId = "#hour-" + i;
    if(i < currentHour)
    {
      $(blockId).addClass("past");
      $(blockId).removeClass("present");
      $(blockId).removeClass("future");
    }
    if(currentHour === i)
    {
      $(blockId).removeClass("past");
      $(blockId).addClass("present");
      $(blockId).removeClass("future");
    }
    if(currentHour < i) {
      $(blockId).removeClass("past");
      $(blockId).removeClass("present");
      $(blockId).addClass("future");
    }
    $(blockId).children(".description").text(localStorage.getItem(storeId));
  }
  
  for(var i = 9; i < 18; i++){
    var blockId = "#hour-" + i;
    var storeId = "hour-" + i;
    $(blockId).children(".description").text(localStorage.getItem(storeId));
  }

  dateEl.text(today.format('dddd, MM/DD')); 
});