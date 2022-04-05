//shows current date at the top
var date = moment().format('MMMM Do, YYYY');
$('#currentDay').text(date)
let currentHour = moment().format("HH");
console.log(currentHour)

$('.time-div').each(function(){
    var timeDiv = $(this).attr('id');
    if (currentHour==timeDiv) {
        $(this).addClass('present');
    } else if (currentHour<timeDiv){
        $(this).removeClass('present');
        $(this).addClass('future')
    } else if (currentHour > timeDiv){
        $(this).removeClass('future');
        $(this).addClass('past');
    }
})