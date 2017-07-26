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

    navigator.mediaDevices.enumerateDevices().then(function(deviceInfos) {
      deviceId = deviceInfos[deviceInfos.length - 1].deviceId;
      console.log(deviceId);
      navigator.getUserMedia(
        {
          audio: false,
          video: { deviceId: { exact: deviceId } }
        }, function(stream) {
          video.src = window.URL.createObjectURL(stream);
        }, function(err) { console.log("Error inside"); }
      );
    });

  } else {
    console.log("ERROR");
  }
});
