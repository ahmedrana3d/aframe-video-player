
AFRAME.registerComponent("play-pause", {
  schema: {
    type: "selector",
  },
  init: function () {
    var video = this.data;
    const el = this.el;
    const popUp = document.querySelector("#pop-up");
    const learnBtn = document.querySelector("#learn-btn");
    const forwardBtn = document.querySelector("#forward-btn");
    const backwardBtn = document.querySelector("#backward-btn");
    

    var messageLogged = false;

    // Add an event listener to the 'timeupdate' event
    video.addEventListener("timeupdate", function () {
      if (video.currentTime <= 10 && messageLogged) {
        messageLogged = false;
        popUp.setAttribute("visible", "false");
        popUp.setAttribute("scale", "0 0 0");
      }

      if (video.currentTime >= 10 && !messageLogged) {
        popUp.setAttribute("visible", "true");
        popUp.setAttribute("scale", "10 10 10");

        video.pause();
        el.setAttribute("src", "#play");

        messageLogged = true;
      }
    });

    // Forward And Backward Logic

    forwardBtn.addEventListener("click", function () {
      video.currentTime += 5;
    });

    backwardBtn.addEventListener("click", function () {
      video.currentTime -= 5;
    });

    learnBtn.addEventListener("click", () => {
      popUp.setAttribute("visible", false);
      popUp.setAttribute("scale", "0 0 0 ");
      el.setAttribute("src", "#pause");
      video.currentTime = 5;
      video.play();
    });

    const secondsDisplay = document.getElementById("vid-seconds");

    // Add event listener to update range input and seconds display when video time is changed
    video.addEventListener("timeupdate", function () {
      updateSecondsDisplay();
    });

    // Function to update the seconds display
    function updateSecondsDisplay() {
      const currentTimeFormatted = formatTime(video.currentTime);
      const durationFormatted = formatTime(video.duration);
      secondsDisplay.textContent = `${currentTimeFormatted} / ${durationFormatted}`;
    }

    // Function to format time in seconds to MM:SS format
    function formatTime(timeInSeconds) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formattedMinutes}:${formattedSeconds}`;
    }

    this.el.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        el.setAttribute("src", "#pause");
        popUp.setAttribute("visible", "false");
        popUp.setAttribute("scale", "0 0 0");
      } else {
        video.pause();
        el.setAttribute("src", "#play");
      }
    });
  },
});
