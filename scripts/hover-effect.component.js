AFRAME.registerComponent('hover-effect', {

    schema : {
type : "number"
    },

    init : function () {
        const el = this.el;
        const value = this.data;
        el.addEventListener('mouseenter', function () {
            el.setAttribute('opacity', value);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('opacity', '1');
        });
    }
})



AFRAME.registerComponent('hover-effect-hotspot', {

    schema : {
type : "vec3"
    },

    init : function () {
        const el = this.el;
        const value = this.data;
        el.addEventListener('mouseenter', function () {
            el.setAttribute('scale', value);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('scale', '0.5 0.5 0.5');
        });
    }
})



