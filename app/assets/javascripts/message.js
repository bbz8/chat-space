$(function(){
  function buildHTML(message){
    var html = `<p>
                  <strong>
                    <a href=${message.id}>${message.user_name}</a>
                    ：
                  </strong>
                  ${message.content}
                </p>`
    return html;
  }
  $('#create_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
    })
    .fail(function() {
      alert('error');
    });
  });
});
