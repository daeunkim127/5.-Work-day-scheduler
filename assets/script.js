//shows current date at the top
var date = moment().format('MMMM Do, YYYY');
$('#currentDay').text(date)
let currentHour = moment().format("HH");
console.log(currentHour)

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var input = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, input);
  });

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
});

  $('#09 .time-block').val(localStorage.getItem('09'));
  $('#10 .time-block').val(localStorage.getItem('10'));
  $('#11 .time-block').val(localStorage.getItem('11'));
  $('#12 .time-block)').val(localStorage.getItem('12'));
  $('#13 .time-block').val(localStorage.getItem('13'));
  $('#14 .time-block').val(localStorage.getItem('14'));
  $('#15 .time-block').val(localStorage.getItem('15'));
  $('#16 .time-block').val(localStorage.getItem('16'));
  $('#17 .time-block').val(localStorage.getItem('17'));


$('.time-div').each(function(){
    var timeDiv = $(this).attr('id');
    if (currentHour>timeDiv) {
        $(this).addClass('past');
    } else if (currentHour==timeDiv){
        $(this).removeClass('past');
        $(this).addClass('present')
    } else if (currentHour < timeDiv){
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})