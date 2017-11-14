document.addEventListener("mousemove", function(event) {
  canvas = document.getElementsByClassName("canvas")[0];
  angle = parseInt(event.pageX * (-150 / 1400) + 40);
  transform_property = "perspective(500px) rotate3d(0, 1, 0, " + angle + "deg) translate3d(0, 0, -150px)";
  canvas.style.transform = transform_property;
});

document.addEventListener("DOMContentLoaded", function(event) {
  navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

  video = document.querySelector('video');

  if (navigator.getUserMedia) {

    // desktop -> { facingMode: "user" }
    // mobile -> { facingMode: { exact: "environment" } }

    navigator.getUserMedia(
      { audio: false, video: { facingMode: { exact: "environment" } } },
      function(stream) {
        video.src = window.URL.createObjectURL(stream);
      }, function(err) { console.log("Error inside"); }
    );

  } else {
    console.log("ERROR");
  }
});
