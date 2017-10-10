(function(){
  // call /api route and get back the response
  $.getJSON('api', updateFeedback);

  $('.feedback-form').submit(function(e){
    e.preventDefault();

    // send request to /api route
    $.post('api', {
      name: $('#feedback-form-name').val(),
      title: $('#feedback-form-title').val(),
      message: $('#feedback-form-message').val()
    }, updateFeedback);
  });

  // send a delete request to the server api
  $('.feedback-messages').on('click', function(e){
    if(e.target.className == 'glyphicon glyphicon-remove') {
      $.ajax({
        url: "api/" + e.target.id,
        type: "DELETE",
        success: updateFeedback
      });
    }
  });


  function updateFeedback(data){
    var output = '';

    $.each(data, function(key, item){
      output += '      <div class="feedback-item item-list media-list">';
      output += '        <div class="feedback-item media">';
      output += '          <div class="media-left"><button class="feedback-delete btn btx-xs btn-danger"><span id="' + key +'" class="glyphicon glyphicon-remove"></span></button></div>';
      output += '          <div class="feedback-info media-body">';
      output += '            <div class="feedback-head">';
      output += '              <div class="feedback-title">' + item.title;
      output += '                <small class="feedback-name label label-info">' + item.name + '</small>';
      output += '              </div>';
      output += '            </div>';
      output += '            <div class="feedback-message">' + item.message;
      output += '            </div>';
      output += '          </div>';
      output += '        </div>';
      output += '      </div>';
    });

    $('.feedback-messages').html(output);

  }
})();
