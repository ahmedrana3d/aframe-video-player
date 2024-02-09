AFRAME.registerComponent("hotspot-click", {
schema : {
    videoSrc : {type : "string", default : ""}
},
init : function () {
    const el = this.el;
    const panaVideo = document.getElementById("panaroma-video");
 const data = this.data;

 el.addEventListener("click" , ()=>{
    panaVideo.setAttribute("src" , data.videoSrc);
    panaVideo.play();
    console.log("Video is playing", data.videoSrc);
 })

}    

});