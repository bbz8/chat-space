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


