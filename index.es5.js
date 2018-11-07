/**
 * @author cuichuanteng 崔传腾
 * @version 1.0.3 
 */
function NickFlex(config) {
    config = config || { width: 750, maxWidth: 500 };
    var width = config.width || 750;
    var maxWidth = config.maxWidth || 500;
    var html = document.documentElement;
    this.getViewport = this.getViewport({ viewports: document.querySelectorAll('meta[name="viewport"]') });
    this.resize = this.resize({ width: width, maxWidth: maxWidth, html: html, viewport: this.getViewport() });
    this.resize();
    window.addEventListener('resize', this.resize);
}
NickFlex.prototype = {
    getViewport: function (config) {
        var viewports = config.viewports;
        var hasViewport = viewports.length;
        var viewport = hasViewport ? viewports[viewports.length - 1] : document.createElement('meta');
        if (!hasViewport) {
            viewport.name = 'viewport';
            document.querySelector('head').appendChild(viewport);
        }
        return function () {
            return viewport;
        }
    },
    resize: function (config) {
        var width = config.width;
        var maxWidth = config.maxWidth;
        var viewport = config.viewport;
        var html = config.html;
        return function () {
            viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
            var clientWidth = html.clientWidth;
            var deviceWidth = clientWidth > maxWidth ? maxWidth : clientWidth;
            var scale = 1 / (width / deviceWidth);
            var height = width / deviceWidth * html.clientHeight;
            html.style.cssText = 'width:' + width + 'px;box-sizing:border-box;transform-origin:left top;transform:scale(' + scale + ') translateX(-50%);position:absolute;left:50%;top:0;height:' + height + 'px;';
        }
    }
}
