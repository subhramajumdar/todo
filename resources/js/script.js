// Check off specific to dos when clicked
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X to delete To Do
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  // to stop the program from bubbling up to other elements
  e.stopPropagation();
});

$("input[type=text]").keypress(function (e) {
  if (e.which === 13) {
    // take the text from the input
    var todoText = $(this).val();
    // add the to do to the li
    var el = $("ul").append(
      `<li><span><i class="fas fa-trash"></i></span> ${todoText}</li>`
    );
    // clear the input field
    $(this).val("");
  }
});

$("h1 i").on("click", function () {
  $("input[type=text]").fadeToggle();
});
