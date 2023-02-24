$(function() {
    $('.saveBtn').on('click', function () {
      var task = $(this).siblings('.description').val();
      var hourblock = $(this).parent().attr('id');
      localStorage.setItem(hourblock, task);
    });
  
    function currenttime() {
      var currenthour = dayjs().hour();
      $('.time-block').each(function () {
        var currentblock = parseInt($(this).attr('id').split('-')[1]);
        if (currentblock < currenthour) {
          $(this).addClass('past');
        } else if (currentblock === currenthour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
    currenttime();
    setInterval(currenttime, 60000);
  
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-1 .description').val(localStorage.getItem('hour-1'));
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  
    $('#currentDay').text(dayjs().format('YYYY, MMMM D, dddd'));
  });