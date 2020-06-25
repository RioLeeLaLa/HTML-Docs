const firstname = document.getElementById("firstname");

firstname.addEventListener("input", function (event) {
  if (firstname.validity.typeMismatch) {
    firstname.setCustomValidity("Please enter first name to proceed!");
  } else {
    firstname.setCustomValidity("");
  }
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);