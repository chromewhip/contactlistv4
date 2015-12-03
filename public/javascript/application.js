$(function() {
  var handlers = {
    container: $("#list-of-homies").find('tbody'),
    addHomie: function(index, homie) {
      var tr = $("<tr>").appendTo(tr);
      $("<td>").text(homie.name).appendTo(tr);
      $("<td>").text(homie.phone).appendTo(tr);
      $("<td>").text(homie.email).appendTo(tr);
    },
    recieveHomies: function(homies) {
      $.each(homies, handlers.addHomie);
    },
    getHomies: function(data) {
      handlers.container.empty();
      $.getJSON("/homies", handlers.recieveHomies );
    }
  };

  $("#load_homies").on('click', handlers.getHomies);
  $("#new_homie").on('click', function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var homie = {name: name, email: email, phone: phone};

    $.post("/new_homie", homie, function(data){
      if (data.result) {
        handlers.addHomie(0, homie);
      } else {
        alert("unable to create a homie")
      }
    },'json');
    });
  });
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
