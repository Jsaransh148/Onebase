document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("typing-text");
  if (!el) return;

  var text = "Coming soon to Indore";
  var i = 0;
  var speed = 80;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
});
