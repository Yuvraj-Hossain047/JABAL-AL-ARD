// Dynamic Nav active
var btnContainer = document.getElementById("myDIV");
var btns = btnContainer.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener("click", function()
  {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Back2Top
var btn = $("#b2tbutton");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } 
    else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
    });