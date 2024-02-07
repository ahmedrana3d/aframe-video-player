


AFRAME.registerComponent("get-user-data", {
  init: function () {
    // Select DOM elements once during initialization
    this.posX_EL = document.querySelector("#posX");
    this.posY_EL = document.querySelector("#posY");
    this.posZ_EL = document.querySelector("#posZ");
    this.rX_EL = document.querySelector("#rX");
    this.rY_EL = document.querySelector("#rY");
    this.rZ_EL = document.querySelector("#rZ");

// Video Controls Btn

this.forwardBtn = document.getElementById("forward-btn");
this.backwardBtn = document.getElementById("backward-btn");
this.playBtn = document.getElementById("play-btn");


    this.KitchenVideo = false;
    this.windowVideo = false;
    this.videoSphere = document.querySelector("#video-sphere");
    this.panaromaVideo = document.querySelector("#panaroma-video");
  


  },

  tick: function () {
    // Access camera position directly and update DOM elements
    const cameraPosition = this.el.object3D.position;
    const cameraPosX =  3.281 * cameraPosition.x;
    const cameraPosY =  3.281 * cameraPosition.y;
    const cameraPosZ =  3.281 * cameraPosition.z;


    this.posX_EL.innerText = `X : ${cameraPosX.toFixed(2)} |`;
    this.posY_EL.innerText = `Y : ${cameraPosY.toFixed(2)} |`;
    this.posZ_EL.innerText = `Z : ${cameraPosZ.toFixed(2)}`;

    if (this.KitchenVideo == false) {
      if (cameraPosZ.toFixed(2) < -1) {
        this.KitchenVideo = true;
        console.log("Added Kitchen Video", this.KitchenVideo);
        this.panaromaVideo.setAttribute("src", "./assets/VR_Outside.mp4");
        this.playBtn.setAttribute("src", "#pause");
        this.panaromaVideo.play()
        
    }
}

if (this.KitchenVideo == true) {
    if (cameraPosZ > -1) {
        this.KitchenVideo = false;
        console.log("Remove Kitched Video", this.KitchenVideo);
        this.panaromaVideo.setAttribute("src", "./assets/videopanaroma.mp4");
        this.panaromaVideo.play()
        this.playBtn.setAttribute("src", "#pause");
     
      }
    }




    if (this.windowVideo == false) {
      if (cameraPosX > 0.5 && cameraPosZ > 0.5) {
        this.windowVideo = true;
        this.panaromaVideo.setAttribute("src", "./assets/windowvideo.mp4");
        this.panaromaVideo.play()
        this.playBtn.setAttribute("src", "#pause");
        
    }}


    if (this.windowVideo == true) {
        if (cameraPosX < 0.5 && cameraPosZ < 0.5) {
            this.windowVideo = false;
            this.panaromaVideo.setAttribute("src", "./assets/windowvideo.mp4");
            this.panaromaVideo.play()
            this.playBtn.setAttribute("src", "#pause");
        }
        
    }




    this.rX_EL.innerText = `rX : ${this.el.object3D.rotation.x.toFixed(3)} |`;
    this.rY_EL.innerText = `rY : ${this.el.object3D.rotation.y.toFixed(3)} |`;
    this.rZ_EL.innerText = `rZ : ${this.el.object3D.rotation.z.toFixed(3)}`;
  },
});
