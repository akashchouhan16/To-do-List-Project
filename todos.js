// to check-off the li element by clicking. using jQuery.

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on X to delete todo.

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
  console.log("ToDo removed");
});

$("input[type = text]").keypress(function (event) {
  if (event.which === 13) {
    //   grabbing new todo text.
    var todoText = $(this).val();
    $(this).val("");
    //  create a new li to add to todo.

    $("ul").append(
      "<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});
$(".fa-plus").click(function () {
  $("input[type = text]").fadeToggle(200);
});
