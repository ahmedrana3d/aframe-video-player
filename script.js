AFRAME.registerComponent("get-user-data", {
    init: function() {
        // Select DOM elements once during initialization
        this.posX_EL = document.querySelector('#posX');
        this.posY_EL = document.querySelector('#posY');
        this.posZ_EL = document.querySelector('#posZ');
    },

    tick: function() {
        // Access camera position directly and update DOM elements
        const cameraPosition = this.el.object3D.position;
        this.posX_EL.innerText = `X : ${cameraPosition.x.toFixed(2)}`;
        this.posY_EL.innerText = `Y : ${cameraPosition.y.toFixed(2)}`;
        this.posZ_EL.innerText = `Z : ${cameraPosition.z.toFixed(2)}`;
    }
});
