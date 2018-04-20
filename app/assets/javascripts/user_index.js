$(function() {
  let inputName = $("#user-search-field")
  let searchName = $("#user-search-result");
  function appendUser(user)  {
      let html =`<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                 </div>`
    searchName.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();

    if (input.length !== 0) {
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users){
        console.log(users)
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
});


