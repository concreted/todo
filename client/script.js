$(document).ready(function() {
  $('#new_status form').submit(function(e) {
    //debugger;
    e.preventDefault();
    $.ajax({
      url: '/status',
      type: 'POST',
      dataType: 'json',
      data: { text: $('#new_status').find('textarea').val() },
      success: function(data) {
        console.log('here');
        // append submitted data to the dom
        $('#statuses').append('<li>' + data.message + '</li>');
        // clear textarea
        $('#new_status').find('textarea').val('');
      },
      error: function(err) {
        console.log("Error! " + JSON.stringify(err));
      },
    });
  });
});
