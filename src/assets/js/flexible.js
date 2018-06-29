/* eslint-disable */
(function(e, l) {
    var c, k, d, f = e.document,
        g = f.documentElement,
        h = l.flexible || (l.flexible = {});
    (function() {
        var a, b = f.querySelector('meta[name="viewport"]');
        c = e.devicePixelRatio || 1;
        a = 1 / c;
        g.setAttribute("data-dpr", c);
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var ratio = window.devicePixelRatio || 1;
        var screen = {
            width: window.screen.width * ratio,
            height: window.screen.height * ratio
        };
        if (iOS && screen.width == 1125 && screen.height === 2436) {
            a = "width=device-width, initial-scale=" + a + ", minimum-scale=" + a + ", maximum-scale=" + a + ", user-scalable=no,viewport-fit=cover";
        } else {
            a = "width=device-width, initial-scale=" + a + ", minimum-scale=" + a + ", maximum-scale=" + a + ", user-scalable=no";
        }

        b ? b.setAttribute("content", a) : (b = f.createElement("meta"), b.setAttribute("name", "viewport"), b.setAttribute("content", a), (f.head || g.firstElementChild).appendChild(b))
    })();
    (function() {
        var a = function() {
            var a = g.clientWidth;
            600 < a / c && (a = 600 * c);
            k = Math.floor(a / 375 * 100);
            g.style.fontSize = k + "px"
        };
        e.addEventListener("orientationchange" in e ? "orientationchange" : "resize", function() {
            d && clearTimeout(d);
            d = setTimeout(a, 300)
        }, !1);
        e.addEventListener("pageshow", function(b) {
            b.persisted && (d && clearTimeout(d), d = setTimeout(a, 300))
        }, !1);
        f.addEventListener("DOMContentLoaded", a, !1);
        a()
    })();
    h.dpr = c;
    h.rem = k;
    h.rem2px = function(a) {
        var b = parseFloat(a) * this.rem;
        "string" === typeof a && a.match(/rem$/) && (b += "px");
        return b
    };
    h.px2rem = function(a) {
        var b = parseFloat(a) / this.rem;
        "string" === typeof a && a.match(/px$/) && (b += "rem");
        return b
    }
})(window, window.FT || (window.FT = {}));
