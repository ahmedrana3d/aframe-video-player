AFRAME.registerComponent('hover-effect', {
    init : function () {
        const el = this.el;
        el.addEventListener('mouseenter', function () {
            el.setAttribute('opacity', '0.5');
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('opacity', '1');
        });
    }
})
