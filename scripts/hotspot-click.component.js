AFRAME.registerComponent("hotspot-click", {
schema : {
    videoSrc : {type : "string", default : ""}
},
init : function () {
    const el = this.el;
    const panaVideo = document.getElementById("panaroma-video");
    const playBtn = document.getElementById("play-btn");
 const data = this.data;

 el.addEventListener("click" , ()=>{
    panaVideo.setAttribute("src" , data.videoSrc);

    panaVideo.play();
    playBtn.setAttribute("src" , "#pause");
    console.log("Video is playing", data.videoSrc);
 })

}    

});