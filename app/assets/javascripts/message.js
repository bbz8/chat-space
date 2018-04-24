$(function(){
  function buildHTML(message){var picture =((message.image.url)? (`<img class="lower-message__image" src="${message.image.url}">`):(""));
    var html = `<ul>
                  <li class="name">
                    ${message.user_name}
                  </li>
                  <li class="date">
                    ${message.created_at}
                  </li>
                  <li class="lower-meesage">
                  </li>
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                    ${picture}
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
  setInterval(function() {
    $.ajax({
      url: location.href.json,
    })
    .done(function(data) {
    })
    .fail(function(data) {
    });
    } else {
      clearInterval(interval);
  } , 5000 );
});
});

