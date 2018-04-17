$(function(){
  function buildHTML(message){
    var html = `<ul>
                  <li class="name">
                    ${message.user_name}
                  </li>
                  <li class="date">
                    ${message.time}
                  </li>
                  <li class="lower-meesage">
                  </li>
                  <p class="lower-message__content">
                    ${message.text}
                  </p>
                </ul>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.content-body').append(html)
      $('.form__message').val('')
      $('.content-body').animate({scrollTop: $('.content-body')[0].scrollHeight})
    })
    .fail(function() {
      alert('error');
    })
return false
  })
});
