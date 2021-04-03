// eslint-disable-next-line no-undef
$(document).ready(function() {
  // alert("hi hamid");
  // eslint-disable-next-line no-undef
  $(".btn-def").mouseover(function() {
    // eslint-disable-next-line no-undef
    if ($(this).parent().attr("id") == "login") {
      // eslint-disable-next-line no-undef
      animSpan($(this), "-", "+");
    } else {
      // eslint-disable-next-line no-undef
      animSpan($(this), "+", "-");
    }
  });

  function animSpan(elem, signs, signsDif) {
    // eslint-disable-next-line no-undef
    elem
      .parent()
      .children("span")
      .show(1000)
      .animate(
        {
          left: signs + "=10px"
        },
        1000,
        function() {
          // eslint-disable-next-line no-undef
          $(this).css("left", signsDif + "=10px");
        }
      );
  }
});
