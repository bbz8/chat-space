$(function() {
  let searchName = $("#user-search-result");
  let chatMember = $("#chat-group-users");
  function appendUser(user)  {
    let html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
               </div>`
    searchName.append(html);
  }
  function appendGroupUser(user)  {
    let html =`<div class="chat-group-user clearfix">
                <input name='group[user_ids][]' type='hidden' value='${user.id}'>
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--remove" data-user-id="${user.id}" data-user-name="${user.name}">削除</a>
               </div>`
    chatMember.append(html);
  }
  $("#user-search-field").on('keyup', function() {
    let input = $("#user-search-field").val();

    if (input.length !== 0) {
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users){
        $(searchName).empty();
          users.forEach(function(user){
            appendUser(user);
          });
      });
    }else if (input.length === 0){
      return false;
    }else{
      alert("ユーザー検索に失敗しました");
    }
  });
  searchName.on('click','.chat-group-user__btn--add',function(){
    let user = {};
    user.name = $(this).data('user-name');
    user.id = $(this).data('user-id');
    appendGroupUser(user);
    $(this).parent().remove();
  });
  chatMember.on("click", '.chat-group-user__btn--remove', function(){
    $(this).parent().remove();
  });
});
