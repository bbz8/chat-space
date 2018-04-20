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
