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
  function buildHTML(message) {
  var insertImage = '';
  if (message.image.url) {
    insertImage = `<img src="${message.image.url}">`;
  }
  var html = `
    <div class="chat" data-message-id="${message.id}">
      <p class="chat__user">${message.name}</p>
      <p class="chat__date">${message.date}</p>
      <p class="chat__content">${message.body}</p>
      ${insertImage}
    </div>`;
  return html
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
    .done(function(json) {
      var insertHTML = '';
      json.messages.forEach(function(message) {
        insertHTML += buildHTML(message);
      });
      $('.chat-wrapper').html(insertHTML);
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
    .fail(function(data) {
    });
    } else {
      clearInterval(interval);
  } , 5000 );
});
});

