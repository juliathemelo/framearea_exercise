var button_frame1 = parent.document.frame1.document.getElementById("button1")
var textarea_frame1 = parent.document.frame1.document.getElementById("textarea1")

var button_frame2 = parent.document.frame2.document.getElementById("button2")
var textarea_frame2 = parent.document.frame2.document.getElementById("textarea2")

button_frame1.addEventListener('click', function () {
  textarea_frame2.value = textarea_frame1.value;
});

button_frame2.addEventListener('click', function () {
  textarea_frame1.value = textarea_frame2.value;
});