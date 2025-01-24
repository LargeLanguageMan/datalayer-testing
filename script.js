window.dl = (function () {
    var sdl = {
        data: {},
        pos: 0,
        max: 0,

        log: function (message, o) {
            window.console && console.log("SDL: ", message, o == undefined ? "" : o);
        },

        exception: function (e) {
            sdl.log("Exception", e);
        },

        get_var: null,

        get_property: function (k) {
            var v =
                _satellite.getObjectProperty(sdl.data, k) == undefined
                    ? ""
                    : _satellite.getObjectProperty(sdl.data, k);
            return v;
        },

        clear_vars: function () {
            if (window.s) {
                for (p in window.s) {
                    if (p.match(/^(events|products|eVar|prop|list|campaign)/))
                        window.s.clearVars(p);
                }
            }
        },

        tracking_beacon: function (src) {
            var b = document.createElement("img");
            b.src = src;
            b.style.cssText = "width:1px; height:1px; border:0px; display:none";
            document.body.appendChild(b);
        },

        track: function (event, obj) {
            if (event) {
                _satellite.track(event, obj);
            }
        },

        process: function (d) {
            _satellite.logger.log("DataLayer Event Detected: " + d.event, 1);
            sdl.log("processing", d);
            sdl.data = d;
            sdl.track(d.event, d);
        },

        processing: false,

        init: function () {
            window.appEventData = window.appEventData || [];
            window.MAX_appEventData_LENGTH = 200;
            sdl.max = appEventData.length;
            window.appEventData.push = function () {
                try {
                    var result = Array.prototype.push.apply(this, arguments);
                    sdl.max = sdl.max + arguments.length;
                    if (sdl.processing) {
                        return result;
                    }
                    if (
                        result > 0 &&
                        arguments != undefined &&
                        arguments.length > 0 &&
                        arguments[0].event
                    ) {
                        while (sdl.max > sdl.pos) {
                            sdl.processing = true;
                            //sdl.clear_vars();
                            window.dl.process(appEventData[sdl.pos]);
                            sdl.pos++;
                        }
                        while (window.appEventData.length > MAX_appEventData_LENGTH) {
                            window.appEventData.shift();
                            sdl.pos--;
                            sdl.max--;
                        }
                    }
                    sdl.processing = false;
                    return result;
                } catch (e) {
                    sdl.processing = false;
                    sdl.pos++;
                    sdl.exception(e);
                }
            };

            sdl.get_var = _satellite.getVar;
            _satellite.getVar = function (v) {
                result = "";
                try {
                    result = sdl.get_var(v);
                } catch (e) {
                    e.message = "Data Element: " + v + "; " + e.message;
                    sdl.exception(e);
                }
                return result;
            };
            while (sdl.max > sdl.pos) {
                window.dl.process(appEventData[sdl.pos]);
                sdl.pos++;
            }
            while (window.appEventData.length > MAX_appEventData_LENGTH) {
                window.appEventData.shift();
                sdl.pos--;
                sdl.max--;
            }
            sdl.log("Initialised");
        },
    };

    return {
        process: sdl.process,
        get_property: sdl.get_property,
        tracking_beacon: sdl.tracking_beacon,
        init: sdl.init,
        data: function () {
            return sdl.data;
        },
    };
})();

dl.init();