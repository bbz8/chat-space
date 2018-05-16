$(function(){
  function buildHTML(message){var picture =((message.image.url)? (`<img class="lower-message__image" src="${message.image.url}">`):(""));
    var html = `<ul data-message-id ="${message.id}">
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
  var lastId = $("ul:last").data("message-id");
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
  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
  $.ajax({
    url: location.href.json,
    type: "GET",
    data: { id : lastId },
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(json) {
    var insertHTML = '';
    json.messages.forEach(function(message) {
      // if (message.id > id ) {
      //   insertHTML += buildHTML(message);
      // }
    });

    $('.content-body').append(insertHTML);
  })
  .fail(function(json) {
    alert('自動更新に失敗しました');
  });
  } else {
    clearInterval(interval);
  }} , 5 * 1000 );
});

