/**
 * @author cuichuanteng 崔传腾
 * @version 1.0.5 
 */
class NickFlex {
    constructor({ width = 750, maxWidth = 500 } = {}) {
        const html = document.documentElement;
        this.getViewport = this.getViewport({ viewports: document.querySelectorAll('meta[name="viewport"]') });
        this.resize = this.resize({ width, maxWidth, html, viewport: this.getViewport() });
        this.resize();
        window.addEventListener('resize', this.resize);
    }
    getViewport({ viewports }) {
        const hasViewport = viewports.length;
        const viewport = hasViewport ? viewports[viewports.length - 1] : document.createElement('meta');
        if (!hasViewport) {
            viewport.name = 'viewport';
            document.querySelector('head').appendChild(viewport);
        }
        return () => viewport
    }
    resize({ width, maxWidth, viewport, html }) {
        function setBodyHeight() {
            document.body.style.cssText += 'height:100%;';
        }
        if (document.body) {
            setBodyHeight();
        } else {
            document.addEventListener('DOMContentLoaded', setBodyHeight);
        }
        return () => {
            viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
            const clientWidth = html.clientWidth;
            const deviceWidth = clientWidth > maxWidth ? maxWidth : clientWidth;
            const scale = 1 / (width / deviceWidth);
            const height = width / deviceWidth * html.clientHeight;
            html.style.cssText += `
                width:${width}px;
                box-sizing:border-box;
                transform-origin:left top;
                transform:scale(${scale}) translateX(-50%);
                position:absolute;
                left:50%;
                top:0;
                height:${height}px;
            `;
        }
    }
}
if (typeof module !== 'undefined') {
    module.exports = NickFlex;
}
//export default NickFlex