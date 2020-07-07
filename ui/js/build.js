! function(t) {
    var e = {};

    function n(a) {
        if (e[a]) return e[a].exports;
        var o = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(a, o, function(e) {
                return t[e]
            }.bind(null, o));
        return a
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 6)
}([function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map((function(e) {
                var n = function(t, e) {
                    var n = t[1] || "",
                        a = t[3];
                    if (!a) return n;
                    if (e && "function" == typeof btoa) {
                        var o = function(t) {
                                var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                                    n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                                return "/*# ".concat(n, " */")
                            }(a),
                            r = a.sources.map((function(t) {
                                return "/*# sourceURL=".concat(a.sourceRoot).concat(t, " */")
                            }));
                        return [n].concat(r).concat([o]).join("\n")
                    }
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
            })).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var a = 0; a < t.length; a++) {
                var o = [].concat(t[a]);
                n && (o[2] ? o[2] = "".concat(n, " and ").concat(o[2]) : o[2] = n), e.push(o)
            }
        }, e
    }
}, function(t, e, n) {
    "use strict";
    var a, o = {},
        r = function() {
            return void 0 === a && (a = Boolean(window && document && document.all && !window.atob)), a
        },
        i = function() {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var n = document.querySelector(e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }();

    function l(t, e) {
        for (var n = [], a = {}, o = 0; o < t.length; o++) {
            var r = t[o],
                i = e.base ? r[0] + e.base : r[0],
                l = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
            a[i] ? a[i].parts.push(l) : n.push(a[i] = {
                id: i,
                parts: [l]
            })
        }
        return n
    }

    function c(t, e) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n],
                r = o[a.id],
                i = 0;
            if (r) {
                for (r.refs++; i < r.parts.length; i++) r.parts[i](a.parts[i]);
                for (; i < a.parts.length; i++) r.parts.push(h(a.parts[i], e))
            } else {
                for (var l = []; i < a.parts.length; i++) l.push(h(a.parts[i], e));
                o[a.id] = {
                    id: a.id,
                    refs: 1,
                    parts: l
                }
            }
        }
    }

    function p(t) {
        var e = document.createElement("style");
        if (void 0 === t.attributes.nonce) {
            var a = n.nc;
            a && (t.attributes.nonce = a)
        }
        if (Object.keys(t.attributes).forEach((function(n) {
                e.setAttribute(n, t.attributes[n])
            })), "function" == typeof t.insert) t.insert(e);
        else {
            var o = i(t.insert || "head");
            if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            o.appendChild(e)
        }
        return e
    }
    var d, s = (d = [], function(t, e) {
        return d[t] = e, d.filter(Boolean).join("\n")
    });

    function u(t, e, n, a) {
        var o = n ? "" : a.css;
        if (t.styleSheet) t.styleSheet.cssText = s(e, o);
        else {
            var r = document.createTextNode(o),
                i = t.childNodes;
            i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(r, i[e]) : t.appendChild(r)
        }
    }

    function f(t, e, n) {
        var a = n.css,
            o = n.media,
            r = n.sourceMap;
        if (o && t.setAttribute("media", o), r && btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleSheet) t.styleSheet.cssText = a;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(a))
        }
    }
    var b = null,
        m = 0;

    function h(t, e) {
        var n, a, o;
        if (e.singleton) {
            var r = m++;
            n = b || (b = p(e)), a = u.bind(null, n, r, !1), o = u.bind(null, n, r, !0)
        } else n = p(e), a = f.bind(null, n, e), o = function() {
            ! function(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t)
            }(n)
        };
        return a(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    a(t = e)
                } else o()
            }
    }
    t.exports = function(t, e) {
        (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = r());
        var n = l(t, e);
        return c(n, e),
            function(t) {
                for (var a = [], r = 0; r < n.length; r++) {
                    var i = n[r],
                        p = o[i.id];
                    p && (p.refs--, a.push(p))
                }
                t && c(l(t, e), e);
                for (var d = 0; d < a.length; d++) {
                    var s = a[d];
                    if (0 === s.refs) {
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                        delete o[s.id]
                    }
                }
            }
    }
}, function(t, e, n) {
    var a = n(3);
    "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
        [t.i, a, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    n(1)(a, o);
    a.locals && (t.exports = a.locals)
}, function(t, e, n) {
    (e = n(0)(!1)).push([t.i, '.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#105a8b !important}.materialize-red-text.text-darken-4{color:#105a8b !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:rgba(0,0,0,0) !important}.transparent-text{color:rgba(0,0,0,0) !important}/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}button,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default)>li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:flex;align-items:center}.clearfix{clear:both}.z-depth-0{box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-small,.btn-floating,.dropdown-content,.collapsible,.sidenav{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-small:hover,.btn-floating:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}.z-depth-2{box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}.z-depth-3{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}.z-depth-4{box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2)}.z-depth-5,.modal{box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}.hoverable{transition:box-shadow .25s}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^="mdi-"],.breadcrumb [class*="mdi-"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:\'\\E5CC\';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:\'Material Icons\';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;transform:translate3d(0, 0, 0);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 1201px){.hide-on-extra-large-only{display:none !important}}@media only screen and (min-width: 1201px){.show-on-extra-large{display:block !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:flex;align-items:center;justify-content:space-between;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table;border-collapse:collapse;border-spacing:0}table.striped tr{border-bottom:none}table.striped>tbody>tr:nth-child(odd){background-color:rgba(242,242,242,0.5)}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:rgba(242,242,242,0.5)}table.centered thead tr th,table.centered tbody tr td{text-align:center}tr{border-bottom:1px solid rgba(0,0,0,0.12)}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:\'\\00a0\'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:"\\00a0"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{border-bottom:none;padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,0.12)}}.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#105a8b;color:#f7bcbe}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#105a8b}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#105a8b}.collapsible .collection{margin:0;border:none}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#ef787b;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#105a8b;transition:width .3s linear}.progress .indeterminate{background-color:#105a8b}.progress .indeterminate:before{content:\'\';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:\'\';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation-delay:1.15s}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#105a8b;border-radius:2px}span.badge.new:after{content:" new"}span.badge[data-badge-caption]::after{content:" " attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}.collection-item span.badge{margin-top:calc(.75rem - 11px)}.collapsible span.badge{margin-left:auto}.sidenav span.badge{margin-top:calc(24px - 11px)}table span.badge{display:inline-block;float:none;margin-left:auto}.material-icons{text-rendering:optimizeLegibility;font-feature-settings:\'liga\'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.col .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:"";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*="push-"],.row .col[class*="pull-"]{position:relative}.row .col.s1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.33333%}.row .col.pull-s1{right:8.33333%}.row .col.push-s1{left:8.33333%}.row .col.offset-s2{margin-left:16.66667%}.row .col.pull-s2{right:16.66667%}.row .col.push-s2{left:16.66667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.33333%}.row .col.pull-s4{right:33.33333%}.row .col.push-s4{left:33.33333%}.row .col.offset-s5{margin-left:41.66667%}.row .col.pull-s5{right:41.66667%}.row .col.push-s5{left:41.66667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.33333%}.row .col.pull-s7{right:58.33333%}.row .col.push-s7{left:58.33333%}.row .col.offset-s8{margin-left:66.66667%}.row .col.pull-s8{right:66.66667%}.row .col.push-s8{left:66.66667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.33333%}.row .col.pull-s10{right:83.33333%}.row .col.push-s10{left:83.33333%}.row .col.offset-s11{margin-left:91.66667%}.row .col.pull-s11{right:91.66667%}.row .col.push-s11{left:91.66667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.33333%}.row .col.pull-m1{right:8.33333%}.row .col.push-m1{left:8.33333%}.row .col.offset-m2{margin-left:16.66667%}.row .col.pull-m2{right:16.66667%}.row .col.push-m2{left:16.66667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.33333%}.row .col.pull-m4{right:33.33333%}.row .col.push-m4{left:33.33333%}.row .col.offset-m5{margin-left:41.66667%}.row .col.pull-m5{right:41.66667%}.row .col.push-m5{left:41.66667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.33333%}.row .col.pull-m7{right:58.33333%}.row .col.push-m7{left:58.33333%}.row .col.offset-m8{margin-left:66.66667%}.row .col.pull-m8{right:66.66667%}.row .col.push-m8{left:66.66667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.33333%}.row .col.pull-m10{right:83.33333%}.row .col.push-m10{left:83.33333%}.row .col.offset-m11{margin-left:91.66667%}.row .col.pull-m11{right:91.66667%}.row .col.push-m11{left:91.66667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.33333%}.row .col.pull-l1{right:8.33333%}.row .col.push-l1{left:8.33333%}.row .col.offset-l2{margin-left:16.66667%}.row .col.pull-l2{right:16.66667%}.row .col.push-l2{left:16.66667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.33333%}.row .col.pull-l4{right:33.33333%}.row .col.push-l4{left:33.33333%}.row .col.offset-l5{margin-left:41.66667%}.row .col.pull-l5{right:41.66667%}.row .col.push-l5{left:41.66667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.33333%}.row .col.pull-l7{right:58.33333%}.row .col.push-l7{left:58.33333%}.row .col.offset-l8{margin-left:66.66667%}.row .col.pull-l8{right:66.66667%}.row .col.push-l8{left:66.66667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.33333%}.row .col.pull-l10{right:83.33333%}.row .col.push-l10{left:83.33333%}.row .col.offset-l11{margin-left:91.66667%}.row .col.pull-l11{right:91.66667%}.row .col.push-l11{left:91.66667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}@media only screen and (min-width: 1201px){.row .col.xl1{width:8.33333%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.66667%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.33333%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.66667%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.33333%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.66667%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.33333%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.66667%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl1{margin-left:8.33333%}.row .col.pull-xl1{right:8.33333%}.row .col.push-xl1{left:8.33333%}.row .col.offset-xl2{margin-left:16.66667%}.row .col.pull-xl2{right:16.66667%}.row .col.push-xl2{left:16.66667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.33333%}.row .col.pull-xl4{right:33.33333%}.row .col.push-xl4{left:33.33333%}.row .col.offset-xl5{margin-left:41.66667%}.row .col.pull-xl5{right:41.66667%}.row .col.push-xl5{left:41.66667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.33333%}.row .col.pull-xl7{right:58.33333%}.row .col.push-xl7{left:58.33333%}.row .col.offset-xl8{margin-left:66.66667%}.row .col.pull-xl8{right:66.66667%}.row .col.push-xl8{left:66.66667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.33333%}.row .col.pull-xl10{right:83.33333%}.row .col.push-xl10{left:83.33333%}.row .col.offset-xl11{margin-left:91.66667%}.row .col.pull-xl11{right:91.66667%}.row .col.push-xl11{left:91.66667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{min-height:56px;height:auto}nav.nav-extended .nav-content{position:relative;line-height:normal}nav a{color:#fff}nav i,nav [class^="mdi-"],nav [class*="mdi-"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.sidenav-trigger{display:none}}nav .sidenav-trigger{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .sidenav-trigger i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}nav .brand-logo.center{left:50%;transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav .brand-logo i,nav .brand-logo [class^="mdi-"],nav .brand-logo [class*="mdi-"],nav .brand-logo i.material-icons{float:left;margin-right:15px}nav .nav-title{display:inline-block;font-size:32px;padding:28px 0}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-small,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-small>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);transition:color .3s}nav .input-field label.active i{color:#fff}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.sidenav-trigger,nav a.sidenav-trigger i{height:64px;line-height:64px}.navbar-fixed{height:64px}}a{text-decoration:none}html{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.3}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.8rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:2.37333rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.94667rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0}h5{font-size:1.64rem;line-height:110%;margin:1.09333rem 0 .656rem 0}h6{font-size:1.15rem;line-height:110%;margin:.76667rem 0 .46rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light{font-weight:300}.thin{font-weight:200}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.scale-transition{transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}.scale-transition.scale-out{transform:scale(0);transition:transform .2s !important}.scale-transition.scale-in{transform:scale(1)}.card-panel{transition:box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;transition:box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:flex}.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:flex;flex-direction:column;flex:1;position:relative}.card.horizontal .card-stacked .card-content{flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}.card .card-content{padding:24px;border-radius:0 0 2px 2px}.card .card-content p{margin:0}.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}.card .card-content .card-title i{line-height:32px}.card .card-action{background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);position:relative;padding:16px 24px}.card .card-action:last-child{border-radius:0 0 2px 2px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:flex;align-items:center;justify-content:space-between;cursor:default}.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:flex}.tabs.tabs-fixed-width .tab{flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease, background-color .28s ease}.tabs .tab a:focus,.tabs .tab a:focus.active{background-color:rgba(246,178,181,0.2);outline:none}.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.4);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}@media only screen and (max-width: 992px){.tabs{display:flex}.tabs .tab{flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden;background-color:#323232}.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;transform-origin:50% 0%;visibility:hidden}.btn,.btn-large,.btn-small,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.disabled.btn-small,.btn-floating.disabled,.btn-large.disabled,.btn-small.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-small:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-small:disabled,.btn-flat:disabled,.btn[disabled],.btn-large[disabled],.btn-small[disabled],.btn-floating[disabled],.btn-large[disabled],.btn-small[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled:hover,.disabled.btn-large:hover,.disabled.btn-small:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-small.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}.btn,.btn-large,.btn-small,.btn-floating,.btn-large,.btn-small,.btn-flat{font-size:14px;outline:0}.btn i,.btn-large i,.btn-small i,.btn-floating i,.btn-large i,.btn-small i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn:focus,.btn-large:focus,.btn-small:focus,.btn-floating:focus{background-color:#5d0b0d}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#105a8b;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover,.btn-small:hover{filter:brightness(85%)}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#105a8b;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#105a8b}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px 0}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:flex;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#105a8b;border-radius:50%;transform:scale(0)}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,0.1)}.btn-flat.disabled,.btn-flat.btn-flat[disabled]{background-color:transparent !important;color:#b3b3b3 !important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;transform-origin:0 0}.dropdown-content:focus{outline:0}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}.dropdown-content li:hover,.dropdown-content li.active{background-color:#eee}.dropdown-content li:focus{outline:none}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#105a8b;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}body.keyboard-focused .dropdown-content li:focus{background-color:#dadada}.input-field.col .dropdown-content [type="checkbox"]+label{top:1px;left:0;height:18px;transform:none}.dropdown-trigger{cursor:pointer}/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);transition:all 0.7s ease-out;transition-property:transform, opacity;transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type="button"],.waves-effect input[type="reset"],.waves-effect input[type="submit"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{transition:none !important}.waves-circle{transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}.modal:focus{outline:none}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px;max-height:65%;overflow-y:auto;overflow-x:hidden}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small,.modal .modal-footer .btn-flat{margin:6px 0}.modal-overlay{position:absolute;z-index:500 !important;top:0;left:0;bottom:0;right:0;height:100%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}.collapsible-header{display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header:focus{outline:0}.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}.keyboard-focused .collapsible-header:focus{background-color:#eee}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box;padding:2rem}.sidenav .collapsible,.sidenav.fixed .collapsible{border:none;box-shadow:none}.sidenav .collapsible li,.sidenav.fixed .collapsible li{padding:0}.sidenav .collapsible-header,.sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.sidenav .collapsible-header:hover,.sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}.sidenav .collapsible-header i,.sidenav.fixed .collapsible-header i{line-height:inherit}.sidenav .collapsible-body,.sidenav.fixed .collapsible-body{border:0;background-color:#fff}.sidenav .collapsible-body li a,.sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip:focus{outline:none;background-color:#26a69a;color:#fff}.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;box-shadow:none;margin:0 0 8px 0;min-height:45px;outline:none;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:16px;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}.chips .input:focus{border:0 !important;box-shadow:none !important}.chips .autocomplete-content{margin-top:0;margin-bottom:0}.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty ~ label{font-size:0.8rem;transform:translateY(-140%)}.materialboxed{display:block;cursor:zoom-in;position:relative;transition:opacity .4s;-webkit-backface-visibility:hidden}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #f3989b}button:focus{outline:none;background-color:#9d1217}label{font-size:.8rem;color:#9e9e9e}::placeholder{color:#d1d1d1}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:box-shadow .3s, border .3s}input:not([type]):disabled,input:not([type])[readonly="readonly"],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly="readonly"],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly="readonly"],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly="readonly"],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly="readonly"],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly="readonly"],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly="readonly"],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly="readonly"],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly="readonly"],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly="readonly"],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly="readonly"],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly="readonly"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly="readonly"]{color:rgba(0,0,0,0.42);border-bottom:1px dotted rgba(0,0,0,0.42)}input:not([type]):disabled+label,input:not([type])[readonly="readonly"]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly="readonly"]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly="readonly"]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly="readonly"]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly="readonly"]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly="readonly"]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly="readonly"]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly="readonly"]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly="readonly"]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly="readonly"]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly="readonly"]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly="readonly"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly="readonly"]+label{color:rgba(0,0,0,0.42)}input:not([type]):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #105a8b;box-shadow:0 1px 0 0 #105a8b}input:not([type]):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#105a8b}input:not([type]):focus.valid ~ label,input[type=text]:not(.browser-default):focus.valid ~ label,input[type=password]:not(.browser-default):focus.valid ~ label,input[type=email]:not(.browser-default):focus.valid ~ label,input[type=url]:not(.browser-default):focus.valid ~ label,input[type=time]:not(.browser-default):focus.valid ~ label,input[type=date]:not(.browser-default):focus.valid ~ label,input[type=datetime]:not(.browser-default):focus.valid ~ label,input[type=datetime-local]:not(.browser-default):focus.valid ~ label,input[type=tel]:not(.browser-default):focus.valid ~ label,input[type=number]:not(.browser-default):focus.valid ~ label,input[type=search]:not(.browser-default):focus.valid ~ label,textarea.materialize-textarea:focus.valid ~ label{color:#4CAF50}input:not([type]):focus.invalid ~ label,input[type=text]:not(.browser-default):focus.invalid ~ label,input[type=password]:not(.browser-default):focus.invalid ~ label,input[type=email]:not(.browser-default):focus.invalid ~ label,input[type=url]:not(.browser-default):focus.invalid ~ label,input[type=time]:not(.browser-default):focus.invalid ~ label,input[type=date]:not(.browser-default):focus.invalid ~ label,input[type=datetime]:not(.browser-default):focus.invalid ~ label,input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,input[type=tel]:not(.browser-default):focus.invalid ~ label,input[type=number]:not(.browser-default):focus.invalid ~ label,input[type=search]:not(.browser-default):focus.invalid ~ label,textarea.materialize-textarea:focus.invalid ~ label{color:#F44336}input:not([type]).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}input.valid:not([type]),input.valid:not([type]):focus,input.valid[type=text]:not(.browser-default),input.valid[type=text]:not(.browser-default):focus,input.valid[type=password]:not(.browser-default),input.valid[type=password]:not(.browser-default):focus,input.valid[type=email]:not(.browser-default),input.valid[type=email]:not(.browser-default):focus,input.valid[type=url]:not(.browser-default),input.valid[type=url]:not(.browser-default):focus,input.valid[type=time]:not(.browser-default),input.valid[type=time]:not(.browser-default):focus,input.valid[type=date]:not(.browser-default),input.valid[type=date]:not(.browser-default):focus,input.valid[type=datetime]:not(.browser-default),input.valid[type=datetime]:not(.browser-default):focus,input.valid[type=datetime-local]:not(.browser-default),input.valid[type=datetime-local]:not(.browser-default):focus,input.valid[type=tel]:not(.browser-default),input.valid[type=tel]:not(.browser-default):focus,input.valid[type=number]:not(.browser-default),input.valid[type=number]:not(.browser-default):focus,input.valid[type=search]:not(.browser-default),input.valid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus,.select-wrapper.valid>input.select-dropdown{border-bottom:1px solid #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input.invalid:not([type]),input.invalid:not([type]):focus,input.invalid[type=text]:not(.browser-default),input.invalid[type=text]:not(.browser-default):focus,input.invalid[type=password]:not(.browser-default),input.invalid[type=password]:not(.browser-default):focus,input.invalid[type=email]:not(.browser-default),input.invalid[type=email]:not(.browser-default):focus,input.invalid[type=url]:not(.browser-default),input.invalid[type=url]:not(.browser-default):focus,input.invalid[type=time]:not(.browser-default),input.invalid[type=time]:not(.browser-default):focus,input.invalid[type=date]:not(.browser-default),input.invalid[type=date]:not(.browser-default):focus,input.invalid[type=datetime]:not(.browser-default),input.invalid[type=datetime]:not(.browser-default):focus,input.invalid[type=datetime-local]:not(.browser-default),input.invalid[type=datetime-local]:not(.browser-default):focus,input.invalid[type=tel]:not(.browser-default),input.invalid[type=tel]:not(.browser-default):focus,input.invalid[type=number]:not(.browser-default),input.invalid[type=number]:not(.browser-default):focus,input.invalid[type=search]:not(.browser-default),input.invalid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus,.select-wrapper.invalid>input.select-dropdown,.select-wrapper.invalid>input.select-dropdown:focus{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).valid ~ .helper-text[data-success],input:not([type]):focus.valid ~ .helper-text[data-success],input:not([type]).invalid ~ .helper-text[data-error],input:not([type]):focus.invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default).valid ~ .helper-text[data-success],input[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default).valid ~ .helper-text[data-success],input[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default).valid ~ .helper-text[data-success],input[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default).valid ~ .helper-text[data-success],input[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default).valid ~ .helper-text[data-success],input[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default).valid ~ .helper-text[data-success],input[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default).valid ~ .helper-text[data-success],input[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default).valid ~ .helper-text[data-success],input[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],textarea.materialize-textarea.valid ~ .helper-text[data-success],textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],textarea.materialize-textarea.invalid ~ .helper-text[data-error],textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],.select-wrapper.valid .helper-text[data-success],.select-wrapper.invalid ~ .helper-text[data-error]{color:transparent;user-select:none;pointer-events:none}input:not([type]).valid ~ .helper-text:after,input:not([type]):focus.valid ~ .helper-text:after,input[type=text]:not(.browser-default).valid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=password]:not(.browser-default).valid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=email]:not(.browser-default).valid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=url]:not(.browser-default).valid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=time]:not(.browser-default).valid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=date]:not(.browser-default).valid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=tel]:not(.browser-default).valid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=number]:not(.browser-default).valid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=search]:not(.browser-default).valid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,textarea.materialize-textarea.valid ~ .helper-text:after,textarea.materialize-textarea:focus.valid ~ .helper-text:after,.select-wrapper.valid ~ .helper-text:after{content:attr(data-success);color:#4CAF50}input:not([type]).invalid ~ .helper-text:after,input:not([type]):focus.invalid ~ .helper-text:after,input[type=text]:not(.browser-default).invalid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=password]:not(.browser-default).invalid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=email]:not(.browser-default).invalid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=url]:not(.browser-default).invalid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=time]:not(.browser-default).invalid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=date]:not(.browser-default).invalid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=tel]:not(.browser-default).invalid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=number]:not(.browser-default).invalid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=search]:not(.browser-default).invalid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,textarea.materialize-textarea.invalid ~ .helper-text:after,textarea.materialize-textarea:focus.invalid ~ .helper-text:after,.select-wrapper.invalid ~ .helper-text:after{content:attr(data-error);color:#F44336}input:not([type])+label:after,input[type=text]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after,.select-wrapper+label:after{display:block;content:"";position:absolute;top:100%;left:0;opacity:0;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem;margin-bottom:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}.input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;transition:transform .2s ease-out, color .2s ease-out;transform-origin:0% 100%;text-align:initial;transform:translateY(12px)}.input-field>label:not(.label-icon).active{transform:translateY(-14px) scale(0.8);transform-origin:0 0}.input-field>input[type]:-webkit-autofill:not(.browser-default):not([type="search"])+label,.input-field>input[type=date]:not(.browser-default)+label,.input-field>input[type=time]:not(.browser-default)+label{transform:translateY(-14px) scale(0.8);transform-origin:0 0}.input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,0.54)}.input-field .helper-text::after{opacity:1;position:absolute;top:0;left:0}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s;top:.5rem}.input-field .prefix.active{color:#105a8b}.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .helper-text,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;transition:.3s background-color}.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;box-shadow:none}.input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus:not(.browser-default)+label i,.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons{color:#444}.input-field input[type=search]+.label-icon{transform:none;left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0 .8rem 0;resize:none;min-height:3rem;box-sizing:border-box}.hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}.character-counter{min-height:18px}[type="radio"]:not(:checked),[type="radio"]:checked{position:absolute;opacity:0;pointer-events:none}[type="radio"]:not(:checked)+span,[type="radio"]:checked+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;user-select:none}[type="radio"]+span:before,[type="radio"]+span:after{content:\'\';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type="radio"]:not(:checked)+span:before,[type="radio"]:not(:checked)+span:after,[type="radio"]:checked+span:before,[type="radio"]:checked+span:after,[type="radio"].with-gap:checked+span:before,[type="radio"].with-gap:checked+span:after{border-radius:50%}[type="radio"]:not(:checked)+span:before,[type="radio"]:not(:checked)+span:after{border:2px solid #5a5a5a}[type="radio"]:not(:checked)+span:after{transform:scale(0)}[type="radio"]:checked+span:before{border:2px solid transparent}[type="radio"]:checked+span:after,[type="radio"].with-gap:checked+span:before,[type="radio"].with-gap:checked+span:after{border:2px solid #105a8b}[type="radio"]:checked+span:after,[type="radio"].with-gap:checked+span:after{background-color:#105a8b}[type="radio"]:checked+span:after{transform:scale(1.02)}[type="radio"].with-gap:checked+span:after{transform:scale(0.5)}[type="radio"].tabbed:focus+span:before{box-shadow:0 0 0 10px rgba(0,0,0,0.1)}[type="radio"].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,0.42)}[type="radio"].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,0.42)}[type="radio"]:disabled:not(:checked)+span:before,[type="radio"]:disabled:checked+span:before{background-color:transparent;border-color:rgba(0,0,0,0.42)}[type="radio"]:disabled+span{color:rgba(0,0,0,0.42)}[type="radio"]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,0.42)}[type="radio"]:disabled:checked+span:after{background-color:rgba(0,0,0,0.42);border-color:#949494}[type="checkbox"]:not(:checked),[type="checkbox"]:checked{position:absolute;opacity:0;pointer-events:none}[type="checkbox"]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;user-select:none}[type="checkbox"]+span:not(.lever):before,[type="checkbox"]:not(.filled-in)+span:not(.lever):after{content:\'\';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;transition:.2s}[type="checkbox"]:not(.filled-in)+span:not(.lever):after{border:0;transform:scale(0)}[type="checkbox"]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,0.42)}[type="checkbox"].tabbed:focus+span:not(.lever):after{transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}[type="checkbox"]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #105a8b;border-bottom:2px solid #105a8b;transform:rotate(40deg);backface-visibility:hidden;transform-origin:100% 100%}[type="checkbox"]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,0.42);border-bottom:2px solid rgba(0,0,0,0.42)}[type="checkbox"]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #105a8b;border-bottom:none;transform:rotate(90deg);backface-visibility:hidden;transform-origin:100% 100%}[type="checkbox"]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,0.42);background-color:transparent}[type="checkbox"].filled-in+span:not(.lever):after{border-radius:2px}[type="checkbox"].filled-in+span:not(.lever):before,[type="checkbox"].filled-in+span:not(.lever):after{content:\'\';left:0;position:absolute;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type="checkbox"].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;transform:rotateZ(37deg);transform-origin:100% 100%}[type="checkbox"].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type="checkbox"].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotateZ(37deg);transform-origin:100% 100%}[type="checkbox"].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #105a8b;background-color:#105a8b;z-index:0}[type="checkbox"].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}[type="checkbox"].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#105a8b;border-color:#105a8b}[type="checkbox"].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}[type="checkbox"].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}[type="checkbox"].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}[type="checkbox"].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}.switch,.switch *{-webkit-tap-highlight-color:transparent;user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#cb4f53}.switch label input[type=checkbox]:checked+.lever:before,.switch label input[type=checkbox]:checked+.lever:after{left:18px}.switch label input[type=checkbox]:checked+.lever:after{background-color:#105a8b}.switch label .lever{content:"";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,0.38);border-radius:15px;margin-right:10px;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:before,.switch label .lever:after{content:"";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease}.switch label .lever:before{background-color:rgba(139,16,20,0.15)}.switch label .lever:after{background-color:#F1F1F1;box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before{transform:scale(2.4);background-color:rgba(139,16,20,0.15)}input[type=checkbox]:not(:disabled) ~ .lever:active:before,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before{transform:scale(2.4);background-color:rgba(0,0,0,0.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,0.12)}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}select{display:none}select.browser-default{display:block}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper.valid+label,.select-wrapper.invalid+label{width:100%;pointer-events:none}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;display:block;user-select:none;z-index:1}.select-wrapper input.select-dropdown:focus{border-bottom:1px solid #105a8b}.select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,0.87)}.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}select:disabled{color:rgba(0,0,0,0.42)}.select-wrapper.disabled+label{color:rgba(0,0,0,0.42)}.select-wrapper.disabled .caret{fill:rgba(0,0,0,0.42)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.42);cursor:default;user-select:none}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}body.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,0.03)}.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix ~ label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.file-field input[type=file]::-webkit-file-upload-button{display:none}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#105a8b;margin-left:7px;transform-origin:50% 50%;transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#105a8b;font-size:0;transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#105a8b;transition:box-shadow .3s;-webkit-appearance:none;background-color:#105a8b;transform-origin:50% 50%;margin:-5px 0 0 0}.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{box-shadow:0 0 0 10px rgba(139,16,20,0.26)}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-moz-focus-inner{border:0}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#105a8b;transition:box-shadow .3s;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(139,16,20,0.26)}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#105a8b;transition:box-shadow .3s}.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(139,16,20,0.26)}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:16px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:15px;border-left:1px solid #ee6e73}.table-of-contents a.active{font-weight:500;padding-left:14px;border-left:2px solid #ee6e73}.sidenav{position:fixed;width:300px;left:0;top:0;margin:0;transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;backface-visibility:hidden;transform:translateX(-105%)}.sidenav.right-aligned{right:0;transform:translateX(105%);left:auto;transform:translateX(100%)}.sidenav .collapsible{margin:0}.sidenav li{float:none;line-height:48px}.sidenav li.active{background-color:rgba(0,0,0,0.05)}.sidenav li>a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.sidenav li>a:hover{background-color:rgba(0,0,0,0.05)}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-flat,.sidenav li>a.btn-floating{margin:10px 15px}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-floating{color:#fff}.sidenav li>a.btn-flat{color:#343434}.sidenav li>a.btn:hover,.sidenav li>a.btn-large:hover,.sidenav li>a.btn-small:hover,.sidenav li>a.btn-large:hover{background-color:#a21317}.sidenav li>a.btn-floating:hover{background-color:#105a8b}.sidenav li>a>i,.sidenav li>a>[class^="mdi-"],.sidenav li>a li>a>[class*="mdi-"],.sidenav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}.sidenav .divider{margin:8px 0 0 0}.sidenav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}.sidenav .subheader:hover{background-color:transparent}.sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}.sidenav .user-view>a{height:auto;padding:0}.sidenav .user-view>a:hover{background-color:transparent}.sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.sidenav .user-view .circle,.sidenav .user-view .name,.sidenav .user-view .email{display:block}.sidenav .user-view .circle{height:64px;width:64px}.sidenav .user-view .name,.sidenav .user-view .email{font-size:14px;line-height:24px}.sidenav .user-view .name{margin-top:16px;font-weight:500}.sidenav .user-view .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.drag-target.right-aligned{right:0}.sidenav.sidenav-fixed{left:0;transform:translateX(0);position:fixed}.sidenav.sidenav-fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.sidenav.sidenav-fixed{transform:translateX(-105%)}.sidenav.sidenav-fixed.right-aligned{transform:translateX(105%)}.sidenav>a{padding:0 16px}.sidenav .user-view{padding:16px 16px 0}}.sidenav .collapsible-body>ul:not(.collapsible)>li.active,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}.sidenav .collapsible-body{padding:0}.sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;display:none}.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#105a8b}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;perspective:500px;transform-style:preserve-3d;transform-origin:0% 50%}.carousel.carousel-slider{top:0;left:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{visibility:hidden;width:200px;height:200px;position:absolute;top:0;left:0}.carousel .carousel-item>img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.carousel.scrolling .carousel-item .materialboxed,.carousel .carousel-item:not(.active) .materialboxed{pointer-events:none}.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;transition:visibility 0s .3s}.tap-target-wrapper.open{visibility:visible;transition:visibility 0s}.tap-target-wrapper.open .tap-target{transform:scale(1);opacity:.95;transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-wrapper.open .tap-target-wave::before{transform:scale(1)}.tap-target-wrapper.open .tap-target-wave::after{visibility:visible;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;transition:opacity .3s, transform .3s, visibility 0s 1s}.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);width:100%;height:100%;opacity:0;transform:scale(0);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-content{position:relative;display:table-cell}.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}.tap-target-wave::before,.tap-target-wave::after{content:\'\';display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#ffffff}.tap-target-wave::before{transform:scale(0);transition:transform .3s}.tap-target-wave::after{visibility:hidden;transition:opacity .3s, transform .3s, visibility 0s;z-index:-1}.tap-target-origin{top:50%;left:50%;transform:translate(-50%, -50%);z-index:10002;position:absolute !important}.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover{background:none}@media only screen and (max-width: 600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}.pulse{overflow:visible;position:relative}.pulse::before{content:\'\';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;transition:opacity .3s, transform .3s;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}@keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0;transform:scale(1.5)}}.datepicker-modal{max-width:325px;min-width:300px;max-height:none}.datepicker-container.modal-content{display:flex;flex-direction:column;padding:0}.datepicker-controls{display:flex;justify-content:space-between;width:280px;margin:0 auto}.datepicker-controls .selects-container{display:flex}.datepicker-controls .select-wrapper input{border-bottom:none;text-align:center;margin:0}.datepicker-controls .select-wrapper input:focus{border-bottom:none}.datepicker-controls .select-wrapper .caret{display:none}.datepicker-controls .select-year input{width:50px}.datepicker-controls .select-month input{width:70px}.month-prev,.month-next{margin-top:4px;cursor:pointer;background-color:transparent;border:none}.datepicker-date-display{flex:1 auto;background-color:#105a8b;color:#fff;padding:20px 22px;font-weight:500}.datepicker-date-display .year-text{display:block;font-size:1.5rem;line-height:25px;color:rgba(255,255,255,0.7)}.datepicker-date-display .date-text{display:block;font-size:2.8rem;line-height:47px;font-weight:500}.datepicker-calendar-container{flex:2.5 auto}.datepicker-table{width:280px;font-size:1rem;margin:0 auto}.datepicker-table thead{border-bottom:none}.datepicker-table th{padding:10px 5px;text-align:center}.datepicker-table tr{border:none}.datepicker-table abbr{text-decoration:none;color:#999}.datepicker-table td{border-radius:50%;padding:0}.datepicker-table td.is-today{color:#105a8b}.datepicker-table td.is-selected{background-color:#105a8b;color:#fff}.datepicker-table td.is-outside-current-month,.datepicker-table td.is-disabled{color:rgba(0,0,0,0.3);pointer-events:none}.datepicker-day-button{background-color:transparent;border:none;line-height:38px;display:block;width:100%;border-radius:50%;padding:0 5px;cursor:pointer;color:inherit}.datepicker-day-button:focus{background-color:rgba(135,20,24,0.25)}.datepicker-footer{width:280px;margin:0 auto;padding-bottom:5px;display:flex;justify-content:space-between}.datepicker-cancel,.datepicker-clear,.datepicker-today,.datepicker-done{color:#105a8b;padding:0 1rem}.datepicker-clear{color:#F44336}@media only screen and (min-width: 601px){.datepicker-modal{max-width:625px}.datepicker-container.modal-content{flex-direction:row}.datepicker-date-display{flex:0 1 270px}.datepicker-controls,.datepicker-table,.datepicker-footer{width:320px}.datepicker-day-button{line-height:44px}}.timepicker-modal{max-width:325px;max-height:none}.timepicker-container.modal-content{display:flex;flex-direction:column;padding:0}.text-primary{color:#fff}.timepicker-digital-display{flex:1 auto;background-color:#105a8b;padding:10px;font-weight:300}.timepicker-text-container{font-size:4rem;font-weight:bold;text-align:center;color:rgba(255,255,255,0.6);font-weight:400;position:relative;user-select:none}.timepicker-span-hours,.timepicker-span-minutes,.timepicker-span-am-pm div{cursor:pointer}.timepicker-span-hours{margin-right:3px}.timepicker-span-minutes{margin-left:3px}.timepicker-display-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:1rem;font-weight:400}.timepicker-analog-display{flex:2.5 auto}.timepicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:auto;margin-top:25px;margin-bottom:5px;user-select:none}.timepicker-canvas,.timepicker-dial{position:absolute;left:0;right:0;top:0;bottom:0}.timepicker-minutes{visibility:hidden}.timepicker-tick{border-radius:50%;color:rgba(0,0,0,0.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer;font-size:15px}.timepicker-tick.active,.timepicker-tick:hover{background-color:rgba(139,16,20,0.25)}.timepicker-dial{transition:transform 350ms, opacity 350ms}.timepicker-dial-out{opacity:0}.timepicker-dial-out.timepicker-hours{transform:scale(1.1, 1.1)}.timepicker-dial-out.timepicker-minutes{transform:scale(0.8, 0.8)}.timepicker-canvas{transition:opacity 175ms}.timepicker-canvas line{stroke:#105a8b;stroke-width:4;stroke-linecap:round}.timepicker-canvas-out{opacity:0.25}.timepicker-canvas-bearing{stroke:none;fill:#105a8b}.timepicker-canvas-bg{stroke:none;fill:#105a8b}.timepicker-footer{margin:0 auto;padding:5px 1rem;display:flex;justify-content:space-between}.timepicker-clear{color:#F44336}.timepicker-close{color:#105a8b}.timepicker-clear,.timepicker-close{padding:0 20px}@media only screen and (min-width: 601px){.timepicker-modal{max-width:600px}.timepicker-container.modal-content{flex-direction:row}.timepicker-text-container{top:32%}.timepicker-display-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}\n', ""]), t.exports = e
}, function(t, e, n) {
    var a = n(5);
    "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
        [t.i, a, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    n(1)(a, o);
    a.locals && (t.exports = a.locals)
}, function(t, e, n) {
    (e = n(0)(!1)).push([t.i, '.other-0{background:#f9a825 !important}.other-1{background:#f57f17 !important}.other-2{background:#43A047 !important}.other-3{background:#388E3C !important}.other-4{background:#2E7D32 !important}.other-5{background:#1B5E20 !important}.other-6{background:#f4511e !important}.other-7{background:#e64a19 !important}.other-8{background:#d84315 !important}.other-9{background:#bf360c !important}.other-a{background:#00acc1 !important}.other-b{background:#0097a7 !important}.other-c{background:#00838f !important}.other-d{background:#006064 !important}.other-e{background:#d81b60 !important}.other-f{background:#c2185b !important}.other-g{background:#ad1457 !important}.other-h{background:#880e4f !important}.other-i{background:#8e24aa !important}.other-j{background:#7b1fa2 !important}.other-k{background:#6a1b9a !important}.other-l{background:#4a148c !important}.other-m{background:#5e35b1 !important}.other-n{background:#512da8 !important}.other-o{background:#4527a0 !important}.other-p{background:#311b92 !important}.other-q{background:#3949ab !important}.other-r{background:#303f9f !important}.other-s{background:#283593 !important}.other-t{background:#1a237e !important}.other-u{background:#1E88E5 !important}.other-v{background:#1976D2 !important}.other-w{background:#1565C0 !important}.other-x{background:#0D47A1 !important}.other-y{background:#fdd835 !important}.other-z{background:#fbc02d !important}.wrapper{height:100vh;width:100vw;display:none;overflow:hidden}.wrapper .phone-wrapper{position:absolute;bottom:0vh;right:0vh;width:500px;height:1000px;background-size:cover;overflow:hidden}.wrapper .phone-wrapper .phone-img{background-image:url("./imgs/s8.png");position:absolute;z-index:999;width:500px;height:1000px;pointer-events:none;overflow:hidden}.wrapper .phone-wrapper .phone{overflow:hidden;position:absolute;bottom:98px;left:50px;right:49px;top:100px;display:flex;color:#212121;background:#e0e0e0;overflow:hidden}.wrapper .phone-wrapper .phone .phone-header{height:24px;font-size:12px;line-height:24px;padding:0px 10px 0px 10px;width:100%;color:#fff;background-color:#000;position:absolute;z-index:99;transition:background-color ease-in 0.15s}.wrapper .phone-wrapper .phone .phone-header.in-call{background-color:#1B5E20}.wrapper .phone-wrapper .phone .phone-header .header-left,.wrapper .phone-wrapper .phone .phone-header .header-center,.wrapper .phone-wrapper .phone .phone-header .header-right{display:inline-block;width:32.5%}.wrapper .phone-wrapper .phone .phone-header .header-left span{margin-right:3px}.wrapper .phone-wrapper .phone .phone-header .header-left span.mute:hover{transition:all ease-in 0.15s;filter:brightness(60%)}.wrapper .phone-wrapper .phone .phone-header .header-center{text-align:center}.wrapper .phone-wrapper .phone .phone-header .header-center .in-call{margin-right:15px;display:none}.wrapper .phone-wrapper .phone .phone-header .header-center .in-call:hover{transition:all ease-in 0.15s;filter:brightness(60%)}.wrapper .phone-wrapper .phone .phone-header .header-center .player-id{color:#e0e0e0}.wrapper .phone-wrapper .phone .phone-header .header-right{text-align:right}.wrapper .phone-wrapper .phone .phone-header .header-right span{margin-left:3px}.wrapper .phone-wrapper .phone .phone-header .header-right span.simcard{display:none;color:#ea454b}.wrapper .phone-wrapper .phone .phone-header .header-right span.simcard:hover{transition:all ease-in 0.15s;filter:brightness(60%)}.wrapper .phone-wrapper .phone .phone-header .header-right span.sdcard{display:none;color:#e64a19}.wrapper .phone-wrapper .phone .phone-header .header-right span.sdcard.advanced{color:#c2185b}.wrapper .phone-wrapper .phone .phone-header .header-right span.sdcard:hover{transition:all ease-in 0.15s;filter:brightness(60%)}.wrapper .phone-wrapper .phone .phone-screen{background-size:cover !important;background-position:center !important;position:relative;left:0;top:0;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center}.wrapper .phone-wrapper .phone .phone-screen #screen-content{height:100%;width:100%}.wrapper .phone-wrapper .phone .phone-screen #screen-content .app-container{position:absolute;width:100%;height:100%;overflow-y:auto;overflow-x:hidden}.wrapper .phone-wrapper .phone .phone-screen #screen-content .app-container .inner-app{position:absolute;top:24px;width:100%;height:92%;overflow-y:auto;overflow-x:hidden}.wrapper .phone-wrapper .phone .phone-screen #screen-content .app-container .inner-app .btn-flat{color:#212121}.wrapper .phone-wrapper .phone .phone-screen #screen-content .app-container .inner-app input{color:#212121;font-weight:bold}.wrapper .phone-wrapper .phone .phone-screen #remove-sim-conf,.wrapper .phone-wrapper .phone .phone-screen #remove-sdcard-conf{position:absolute;right:0 !important}.wrapper .phone-wrapper .phone .phone-footer{height:40px;font-size:17px;line-height:24px;width:100%;color:#fff;background-color:#000;position:absolute;z-index:99;bottom:0}.wrapper .phone-wrapper .phone .phone-footer .footer-button{width:32.333333333333333%;display:inline-block;text-align:center}.wrapper .phone-wrapper .phone .phone-footer .footer-button i{line-height:40px}.wrapper .phone-wrapper .phone .phone-footer .footer-button.disabled{color:#fff}.wrapper .phone-wrapper .phone .phone-footer .footer-button:hover{transition:all ease-in 0.15s;color:#105a8b}.wrapper input::placeholder{color:#c4c4c4}::-webkit-scrollbar{width:0px;background:transparent}::-webkit-scrollbar-thumb{background:transparent}.modal{position:relative;left:0 !important;right:100px;z-index:1050;display:none;overflow:hidden;outline:0;max-height:100%;width:85%}.modal.show .modal-dialog{-webkit-transform:none;transform:none;width:300px;margin-top:50%}#toast-container{top:35%;pointer-events:none}.phone-notif-container{display:none;width:400px;position:absolute;right:0;background:rgba(0,0,0,0.65);margin-top:24px;padding:15px 15px 15px 15px;font-size:14px;z-index:98;color:#ffffff}#home-container .inner-app{display:flex;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;flex-flow:wrap;align-content:flex-start}#home-container .inner-app .app-button{height:fit-content;width:80px;text-align:center;color:#fff}#home-container .inner-app .app-button .app-icon{height:60px;width:60px;font-size:30px;margin:10px;border-radius:10px;color:#fff;text-shadow:0 0 10px #000000}#home-container .inner-app .app-button .app-icon i{text-align:center;vertical-align:middle;line-height:60px}#home-container .inner-app .app-button .app-icon .badge{font-size:15px;float:left;line-height:25px;margin-left:10px;margin-right:10px;margin-top:10px;height:25px;width:25px;border-radius:70px;text-align:center;color:#fff;font-weight:bold;position:relative;top:-40%;left:53%;background:#D50000;-webkit-transform:translate(0%, 0%);transform:translate(0%, 0%)}#home-container .inner-app .app-button:hover .app-icon{transition:filter ease-in 0.15s;filter:brightness(85%)}#phone-container{background:#e0e0e0}#phone-container .inner-app .phone-app-top{height:92%}#phone-container .inner-app .phone-app-top .inner-phone-container{height:100%;display:none;overflow-y:auto;overflow-x:auto}#phone-container .inner-app .phone-app-top .inner-phone-container.active-section{display:block}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"]{color:#212121}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top{height:37%}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top .contact-display{font-size:30px;position:absolute;font-weight:bold;width:fit-content;top:8%;left:0;right:0;margin-left:auto;margin-right:auto;display:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top .call-type{font-size:15px;position:absolute;width:fit-content;top:27%;left:0;right:0;margin-left:auto;margin-right:auto;display:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top #type{position:absolute;height:10%;width:19%;border:none;top:12%;left:5%;padding:15px 0;font-size:40px;text-align:center;color:#797979}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top #number{padding:15px 0;height:100%;font-size:40px;text-align:center}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top .delete-num-btn{position:absolute;right:2%;top:17.5%;font-size:25px}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-top .delete-num-btn:hover{transition:all ease-in 0.15s;color:#105a8b}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-keys{background:#fff;border-top:1px solid #212121;position:absolute;width:100%;bottom:8.5%}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-keys .keypad-key{width:32%;padding:10px;display:inline-block;text-align:center;font-size:40px;border-radius:15px}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-keys .keypad-key:hover{transition:all ease-in 0.15s;filter:brightness(85%);background:#c4c4c4}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-keys .keypad-key.key-call{width:32% !important;left:34%;height:100%}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-keys .keypad-key.key-call:hover{transition:all ease-in 0.15s;filter:brightness(85%);background:transparent}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="keypad"] .keypad-keys .keypad-key.key-call i{padding:24px;width:85px;background:#1B5E20;border-radius:100px;color:#fff;font-size:35px}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call{padding:10px;background:#fff;color:#212121;border-bottom:1px solid #212121}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call:hover{background:#c4c4c4}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call i{font-size:20px;padding:10px;pointer-events:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call i.icon-outgoing{color:#105a8b}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call i.icon-incoming{color:#1B5E20}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call span{display:inline-block;width:45%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:15px;line-height:15px;pointer-events:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call .timestamp{max-width:44%;text-align:right;float:right;line-height:40px;font-size:14px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call-actions{z-index:998;display:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call-actions i{width:32%;text-align:center;font-size:25px;pointer-events:auto}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call-actions i:hover{transition:all ease-in 0.15s;color:#105a8b}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call-actions i.action-disabled{color:#3f3f3f !important}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="history"] .call-actions i.action-disabled:hover{color:#3f3f3f !important}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list{max-height:89.5%;overflow-y:auto;overflow-x:hidden}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact{padding:10px;background:#fff;color:#212121;border-bottom:1px solid #212121;line-height:35px}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact:hover{transform:all ease-in 0.15s;background:#c4c4c4}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact .phone-avatar{font-size:20px;float:left;line-height:35px;margin-left:10px;margin-right:10px;height:35px;width:35px;border-radius:70px;text-align:center;-webkit-transform:translate(0%, 0%);transform:translate(0%, 0%);background:#105a8b;color:#fff;pointer-events:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact .call-actions{z-index:998;display:none}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact .call-actions i{width:49.5%;text-align:center;font-size:25px;pointer-events:auto}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact .call-actions i:hover{transition:all ease-in 0.15s;color:#105a8b}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact .call-actions i.action-disabled{color:#3f3f3f !important}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contacts-list .phone-contact .call-actions i.action-disabled:hover{color:#3f3f3f !important}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contact-search{border-top:1px solid #212121;width:100%;position:absolute;bottom:8.58%}#phone-container .inner-app .phone-app-top .inner-phone-container[data-section="contacts"] .contact-search input{padding:10px;margin:0}#phone-container .inner-app .inner-phone-nav{position:absolute;bottom:0;color:#212121;width:100%;background:#fff;border-top:1px solid #212121}#phone-container .inner-app .inner-phone-nav .phone-nav-button{display:inline-block;width:32%;text-align:center;padding:15px;font-weight:bold;font-size:18px;border-bottom:5px solid transparent}#phone-container .inner-app .inner-phone-nav .phone-nav-button.active-nav{border-bottom:5px solid #105a8b}#phone-container .inner-app .inner-phone-nav .phone-nav-button:hover{cursor:pointer;transition:all ease-in 0.3s;color:#105a8b;border-bottom:5px solid #105a8b}#phone-call-container{background:#212121}#phone-call-container .inner-app .call-header{text-align:center;height:50%;color:#fff;font-weight:bold;font-size:20px}#phone-call-container .inner-app .call-header .call-avatar{font-size:55px;line-height:120px;height:120px;width:120px;margin-left:auto;margin-right:auto;border-radius:100px;margin-top:30%;background:#fff;color:#212121}#phone-call-container .inner-app .call-header .call-avatar.call-pending{transition:all ease-in 0.3s;filter:brightness(40%)}#phone-call-container .inner-app .call-header .call-avatar.call-connected{transition:all ease-in 0.3s;filter:brightness(100%)}#phone-call-container .inner-app .call-header .call-avatar.call-disconnected{transition:all ease-in 0.3s;color:#fff;background:#105a8b}#phone-call-container .inner-app .call-header .call-number{margin-top:15px}#phone-call-container .inner-app .call-buttons{height:30%;font-size:55px;color:#fff;position:absolute;bottom:15%;left:0;right:0;margin-left:auto;margin-right:auto}#phone-call-container .inner-app .call-buttons .call-button-row{width:100%;text-align:center}#phone-call-container .inner-app .call-buttons .call-button-row .call-button{display:inline-block;width:45%;padding:30px;border-radius:50px}#phone-call-container .inner-app .call-buttons .call-button-row .call-button:hover{transition:all ease-in 0.15s;filter:brightness(85%);background:#212121}#phone-call-container .inner-app .call-buttons .call-button-row .call-button span{display:block;font-size:12px;margin-top:10px;font-weight:bold}#phone-call-container .inner-app .call-buttons .call-button-row .call-button#end-call{height:100%}#phone-call-container .inner-app .call-buttons .call-button-row .call-button#end-call:hover{transition:all ease-in 0.15s;filter:brightness(85%);background:transparent}#phone-call-container .inner-app .call-buttons .call-button-row .call-button#end-call i{padding:24px;width:85px;background:#105a8b;border-radius:100px;color:#fff;font-size:35px}#phone-call-container .inner-app .call-buttons .call-button-row .call-button#answer-call{height:100%}#phone-call-container .inner-app .call-buttons .call-button-row .call-button#answer-call:hover{transition:all ease-in 0.15s;filter:brightness(85%);background:transparent}#phone-call-container .inner-app .call-buttons .call-button-row .call-button#answer-call i{padding:24px;width:85px;background:#1B5E20;border-radius:100px;color:#fff;font-size:35px}#contacts-container{background:#e0e0e0}#contacts-container .inner-app .add-contact{width:100%;padding:10px;text-align:center;background:#105a8b;color:#fff;font-weight:bold;border-bottom:1px solid #212121}#contacts-container .inner-app .add-contact i{margin-left:10px}#contacts-container .inner-app .add-contact:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#contacts-container .inner-app .contacts-list{height:86.4%;overflow-y:auto;overflow-x:hidden}#contacts-container .inner-app .contacts-list .contact{border-bottom:1px solid #212121;padding:10px;display:block;color:#212121;background:#fff}#contacts-container .inner-app .contacts-list .contact .contact-avatar{font-size:20px;float:left;line-height:35px;margin-left:10px;margin-right:10px;margin-top:8px;height:35px;width:35px;border-radius:70px;text-align:center;position:relative;top:15%;-webkit-transform:translate(0%, 0%);transform:translate(0%, 0%);background:#105a8b;color:#fff;pointer-events:none}#contacts-container .inner-app .contacts-list .contact .contact-name{line-height:50px;pointer-events:none}#contacts-container .inner-app .contacts-list .contact .contact-name .contact-name-text{width:50%;display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#contacts-container .inner-app .contacts-list .contact .contact-name .number{font-weight:bold;float:right;padding-right:20px}#contacts-container .inner-app .contacts-list .contact:hover{transition:all ease-in 0.15s;background:#c4c4c4}#contacts-container .inner-app .contacts-list .contact .contact-actions{z-index:998;padding:10px;display:none}#contacts-container .inner-app .contacts-list .contact .contact-actions i{width:25%;text-align:center;font-size:25px;pointer-events:auto}#contacts-container .inner-app .contacts-list .contact .contact-actions i:hover{transition:all ease-in 0.15s;color:#105a8b}#contacts-container .inner-app .contacts-list .contact .contact-actions i.action-disabled{color:#3f3f3f !important}#contacts-container .inner-app .contacts-list .contact .contact-actions i.action-disabled:hover{color:#3f3f3f !important}#contacts-container .inner-app .search-contact{border-top:1px solid #212121}#contacts-container .inner-app .search-contact input{height:5%;width:100%;padding:10px;margin:0}#message-container{background:#0a0a0a}#message-container .inner-app .messages-list .message{border-bottom:1px solid #fff;height:65px;display:block;background:#121212;color:#fff}#message-container .inner-app .messages-list .message .text-avatar{font-size:20px;float:left;line-height:35px;margin-left:10px;margin-right:10px;margin-top:5px;height:35px;width:35px;border-radius:70px;text-align:center;position:relative;top:15%;-webkit-transform:translate(0%, 0%);transform:translate(0%, 0%);background:#105a8b;color:#fff}#message-container .inner-app .messages-list .message .text-name{line-height:30px;width:74%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#message-container .inner-app .messages-list .message .text-message{line-height:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:60.8%}#message-container .inner-app .messages-list .message .text-time{color:#fff;width:24%;text-align:right;display:inline-block;position:relative;left:74%;top:-30px}#message-container .inner-app .messages-list .message:hover{transition:all ease-in 0.15s;background:#5e5e5e}#message-container .inner-app .btn-floating{position:absolute;bottom:2%;right:5%}#message-container #messages-new-modal{overflow:visible}#message-container #messages-new-modal .dropdown-content{max-height:1000%}#message-container #messages-new-modal .dropdown-content li span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#message-convo-container{background:#212121;z-index:5}#message-convo-container .inner-app .convo-top-bar{padding:10px;font-size:15px;color:#fff;font-weight:bold;background:#105a8b}#message-convo-container .inner-app .convo-top-bar i.back-button{float:left;line-height:40px;padding-right:15px}#message-convo-container .inner-app .convo-top-bar i.back-button:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#message-convo-container .inner-app .convo-top-bar .convo-top-number{width:44%;font-size:20px;line-height:35px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}#message-convo-container .inner-app .convo-top-bar .convo-top-actions{display:inline-block;width:49%;line-height:40px;text-align:right}#message-convo-container .inner-app .convo-top-bar .convo-top-actions i{padding:10px}#message-convo-container .inner-app .convo-top-bar .convo-top-actions i:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#message-convo-container .inner-app .convo-texts-list{height:84%;overflow-y:auto;overflow-x:hidden}#message-convo-container .inner-app .convo-texts-list .text{width:fit-content;display:block;padding:0 20px;color:#fff}#message-convo-container .inner-app .convo-texts-list .text:first-child{margin-top:10px}#message-convo-container .inner-app .convo-texts-list .text span{width:fit-content;display:inline-block;padding:10px 20px 10px 20px;border-radius:10px;background:#105a8b}#message-convo-container .inner-app .convo-texts-list .text p{padding:0;margin:0;color:#fff;font-size:10px;opacity:0}#message-convo-container .inner-app .convo-texts-list .text:hover p{transition:all ease-in 0.15s;opacity:100}#message-convo-container .inner-app .convo-texts-list .text.me-sender{margin-left:auto}#message-convo-container .inner-app .convo-texts-list .text.me-sender span{background:#6e6e6e}#message-convo-container .inner-app .convo-texts-list .text.me-sender p{text-align:right}#message-convo-container .inner-app .convo-texts-list .text.other-sender{margin-right:auto}#message-convo-container .inner-app .convo-texts-list .text.other-sender p{text-align:left}#message-convo-container .inner-app .convo-text-input{color:#fff;height:5%;border-top:1px solid #fff}#message-convo-container .inner-app .convo-text-input #convo-new-text{color:#fff;-webkit-margin-after:0;margin-block-end:0}#message-convo-container .inner-app .convo-text-input #convo-new-text .input-field{color:#fff;margin:0;display:inline-block;width:85%}#message-convo-container .inner-app .convo-text-input #convo-new-text .input-field #convo-input{color:#fff;padding:10px;margin:0;height:65%}#message-convo-container .inner-app .convo-text-input #convo-new-text .input-field .character-counter{float:right;font-size:12px;height:1px;position:absolute;bottom:0%;right:1%}#message-convo-container .inner-app .convo-text-input #convo-new-text i{color:#fff;font-size:25px;position:absolute;bottom:1.25%;right:3%}#message-convo-container .inner-app .convo-text-input #convo-new-text i:hover{transition:all ease-in 0.15s;color:#105a8b}.twitter-alert{display:none;width:415px;min-width:415px;max-width:415px;background:#039be5;border-radius:10px;color:#fff;position:absolute;bottom:5%;right:1.5%}.twitter-alert .twitter-alert-header{padding:15px;font-size:20px}.twitter-alert .twitter-alert-body{padding:15px;font-size:14px;border-top:1px solid #fff}#twitter-container{background:#121212}#twitter-container .inner-app .twitter-header{padding:10px 0;width:100%;text-align:center;font-size:30px;background:#121212;color:#fff}#twitter-container .inner-app .twitter-header .fa-plus{position:absolute;right:5%;font-size:20px;line-height:34px}#twitter-container .inner-app .twitter-header:hover{transition:all ease-in 0.3s;filter:brightness(80%)}#twitter-container .twitter-body{height:93.25%;width:100%;position:absolute;bottom:0;overflow-y:auto;overflow-x:hidden;border-top:1px solid #ffffff}#twitter-container .twitter-body .tweet{background:#121212;border-bottom:1px solid #dedede;color:#ffffff;font-size:17}#twitter-container .twitter-body .tweet .avatar{font-size:20px;float:left;line-height:35px;margin-left:10px;margin-right:10px;margin-top:8px;height:35px;width:35px;border-radius:70px;text-align:center;position:relative;top:15%;-webkit-transform:translate(0%, 0%);transform:translate(0%, 0%);background:#105a8b;color:#fff;pointer-events:none}#twitter-container .twitter-body .tweet .author{padding:10px;margin-left:auto;font-weight:bold}#twitter-container .twitter-body .tweet .body{width:91%;padding:5px 20px 0px 20px;margin-left:auto;overflow:hidden;white-space:normal;white-space:-moz-pre-wrap !important;white-space:-webkit-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;white-space:pre-wrap;word-wrap:break-word;word-break:break-all;white-space:normal}#twitter-container .twitter-body .tweet .body .mention{color:#039be5;font-weight:bold}#twitter-container .twitter-body .tweet .body .mention:hover{transition:all ease-in 0.3s;filter:brightness(60%)}#twitter-container .twitter-body .tweet .body .hashtag{color:#105a8b;font-weight:bold}#twitter-container .twitter-body .tweet .body .hashtag:hover{transition:all ease-in 0.3s;filter:brightness(60%)}#twitter-container .twitter-body .tweet .time{padding:0 10px 5px 10px;text-align:right;font-size:12px;font-weight:bold;width:fit-content;margin-left:auto}#twitter-container .btn-floating{position:absolute;bottom:1%;right:2%}#yp-container{background:#121212}#yp-container #yp-search input{color:#fff;height:5%;width:100%;padding:10px;margin:0}#yp-container #yp-body{height:84.5%;overflow-y:auto;overflow-x:hidden}#yp-container #yp-body .yp-post{color:#fff;padding:10px;background:#e65100;border-bottom:1px solid #121212;border-radius: .9em;}#yp-container #yp-body .yp-post .yp-post-header .yp-author{display:block;width:100%;text-align:center;font-size:16px;font-weight:bold;color:#121212}#yp-container #yp-body .yp-post .yp-post-header .yp-phone{display:block;width:100%;text-align:center;font-size:12px}#yp-container #yp-body .yp-post .yp-post-header .yp-phone:hover{color:#e65100;transition:all ease-in 0.15s}#yp-container #yp-body .yp-post .yp-post-body .yp-post-title{display:block;font-size:16px;font-weight:bold;color:#fff;border-bottom:1px solid #fff;width:fit-content}#yp-container #yp-body .yp-post .yp-post-body .yp-post-message{margin:15px 0;overflow:hidden;text-overflow:ellipsis}#yp-container #yp-body .yp-post .yp-post-timestamp{text-align:right;font-size:10px}#yp-container #yp-body .yp-post.yp-post-owned{background:#e65100;color:#fff}#yp-container #yp-body .yp-post.yp-post-owned .yp-author{color:#121212}#yp-container #yp-body .yp-post.yp-post-owned .yp-post-title{color:#fff}#yp-container #yp-body .yp-post.yp-post-owned .yp-phone:hover{color:#c4c4c4;transition:all ease-in 0.15s}#yp-container #yp-controls{padding:10px;text-align:center;background:#121212;border-top:1px solid #fff}#yp-container #yp-controls #delete-ad{display:none}#garage-container{background:#fff}#garage-container #garage-search input{color:#fff;background:#121212;height:5%;width:100%;padding:10px;margin:0}#garage-container #garage-body{height:84.5%;overflow-y:auto;overflow-x:hidden}#garage-container #garage-body .garage-post{color:#fff;margin:5px;background:#121212;border-bottom:1px solid #121212;border-radius: .9em;}#garage-container #garage-body .garage-post .garage-post-header .garage-author{display:block;width:100%;text-align:center;font-size:16px;font-weight:bold;color:#fff}#garage-container #garage-body .garage-post .garage-post-header .garage-phone{display:block;font-weight:bold;width:100%;text-align:center;font-size:12px}#garage-container #garage-body .garage-post .garage-post-header .garage-phone:hover{color:#fff;transition:all ease-in 0.15s}#garage-container #garage-body .garage-post .garage-post-body .garage-post-title{display:block;font-size:16px;font-weight:bold;color:#fff;border-bottom:1px solid #fff;width:fit-content}#garage-container #garage-body .garage-post .garage-post-body .garage-post-message{margin:5px 0;font-weight:bold;overflow:hidden;text-align:center;text-overflow:ellipsis}#garage-container #garage-body .garage-post.garage-post-owned{background:#121212;color:#fff}#garage-container #garage-body .garage-post.garage-post-owned .garage-author{color:#fff}#garage-container #garage-body .garage-post.garage-post-owned .garage-post-title{color:#fff}#garage-container #garage-body .garage-post.garage-post-owned .garage-phone:hover{color:#c4c4c4;transition:all ease-in 0.15s}#garage-container #garage-controls{padding:10px;text-align:center;background:#121212;border-top:1px solid #fff}#garage-container #garage-controls #delete-ad{display:none}#pdm-container{background:#121212}#pdm-container #pdm-search input{color:#fff;background:#121212;height:5%;width:100%;padding:10px;margin:0}#pdm-container #pdm-body{height:84.5%;overflow-y:auto;overflow-x:hidden}#pdm-container #pdm-body .pdm-post{color:#000;margin:5px;background:#1fcfa3;border-bottom:1px solid #121212;border-radius: .9em;}#pdm-container #pdm-body .pdm-post .pdm-post-header .pdm-author{display:block;width:100%;text-align:center;font-size:16px;font-weight:bold;color:#000}#pdm-container #pdm-body .pdm-post .pdm-post-header .pdm-phone{display:block;font-weight:bold;width:100%;text-align:center;font-size:12px}#pdm-container #pdm-body .pdm-post .pdm-post-header .pdm-phone:hover{color:#fff;transition:all ease-in 0.15s}#pdm-container #pdm-body .pdm-post .pdm-post-body .pdm-post-title{display:block;font-weight:bold;width:100%;text-align:center;font-size:12px}#pdm-container #pdm-body .pdm-post .pdm-post-body .pdm-post-message{margin:5px 0;font-weight:bold;overflow:hidden;text-align:center;text-overflow:ellipsis}#pdm-container #pdm-body .pdm-post.pdm-post-owned{background:#121212;color:#fff}#pdm-container #pdm-body .pdm-post.pdm-post-owned .pdm-author{color:#fff}#pdm-container #pdm-body .pdm-post.pdm-post-owned .pdm-post-title{color:#fff}#pdm-container #pdm-body .pdm-post.pdm-post-owned .pdm-phone:hover{color:#c4c4c4;transition:all ease-in 0.15s}#pdm-container #pdm-controls{padding:10px;text-align:center;background:#121212;border-top:1px solid #fff}#pdm-container #pdm-controls #delete-ad{display:none}#tuner-container,#tuner-legal-container,#tuner-quick-container,#tuner-custom-container,#tuner-info-container{background:#212121;font-family:monospace}#tuner-container .inner-app,#tuner-legal-container .inner-app,#tuner-quick-container .inner-app,#tuner-custom-container .inner-app,#tuner-info-container .inner-app{top:0 !important;height:95% !important}#tuner-container .inner-app .tuner-header,#tuner-legal-container .inner-app .tuner-header,#tuner-quick-container .inner-app .tuner-header,#tuner-custom-container .inner-app .tuner-header,#tuner-info-container .inner-app .tuner-header{text-align:center;padding-bottom:5px;padding-bottom:5px;padding-top:14px;border-bottom:5px solid #004d40;background-color:#fff}#tuner-container .inner-app .tuner-header h3,#tuner-legal-container .inner-app .tuner-header h3,#tuner-quick-container .inner-app .tuner-header h3,#tuner-custom-container .inner-app .tuner-header h3,#tuner-info-container .inner-app .tuner-header h3{color:#004d40;font-size:35px;font-weight:bold}#tuner-container .inner-app .tuner-header h5,#tuner-legal-container .inner-app .tuner-header h5,#tuner-quick-container .inner-app .tuner-header h5,#tuner-custom-container .inner-app .tuner-header h5,#tuner-info-container .inner-app .tuner-header h5{color:#212121;text-transform:uppercase;font-size:12px;font-weight:bold;margin:-1.40667rem 0 .656rem 0}#tuner-container .inner-app .splash{display:none;height:100%;width:100%;text-align:center}#tuner-container .inner-app .splash span{height:fit-content;width:fit-content;display:block;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;font-size:25px;color:#fff}#tuner-container .inner-app .splash span .dots{width:100%;position:absolute;text-align:center}#tuner-container .inner-app .no-chip-error{display:none;position:absolute;z-index:98;height:100%;width:100%;background:rgba(0,0,0,0.7)}#tuner-container .inner-app .no-chip-error .error-details{display:none;position:absolute;top:0;bottom:0;left:0;right:0;height:90%;width:90%;background:#212121;color:#fff;padding:20px;margin:auto}#tuner-container .inner-app .no-chip-error .error-details .error-header{font-size:30px;border-bottom:1px solid #fff;padding-bottom:10px;margin-bottom:10px}#tuner-container .inner-app .no-chip-error .error-details .error-body{font-size:14px}#tuner-container .inner-app .no-chip-error .error-details .error-button{position:absolute;bottom:3%;left:5%;text-align:center;width:90%}#tuner-container .inner-app .no-chip-error .error-details .error-button button{width:100%}#tuner-container .inner-app #tuner-home-screen{display:none}#tuner-container .inner-app #tuner-home-screen #tuner-home{display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto;grid-row-gap:15px;grid-column-gap:15px;margin-top:15px;width:fit-content;margin-left:auto;margin-right:auto}#tuner-container .inner-app #tuner-home-screen #tuner-home .tuner-button{font-size:15px;height:128px;width:128px;text-align:center;line-height:normal}#tuner-container .inner-app #tuner-home-screen #tuner-home .tuner-button.tuner-nav span{display:block;height:fit-content;width:fit-content;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}#tuner-container .inner-app #tuner-home-screen #tuner-home .tuner-button.tuner-nav span i{display:block;font-size:35px;margin-bottom:5px}#tuner-container .inner-app #tuner-home-screen .connection-note{width:100%;padding:15px;position:absolute;bottom:0;display:inline-block;text-align:center;background:#004d40;color:#fff;font-weight:500;font-size:19px}#tuner-container .inner-app #tuner-home-screen .connection-note .connected-car{display:inline-block;font-weight:bold}#tuner-quick-container .inner-app #tuner-quick{display:none}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body{height:81.2%;background-color:#212121;overflow-y:auto;overflow-x:hidden}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body .tuner-quick-section{font-size:25px;text-align:center;color:#fff;width:100%;padding:25px}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body .tuner-quick-section .tuner-quick-buttons{width:100%}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body .tuner-quick-section .tuner-quick-buttons button{width:100%;margin-bottom:5px}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body .tuner-quick-section .tuner-quick-buttons button:last-child{margin-bottom:0 !important}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body .tuner-quick-custom-btn{display:block;width:100%;position:absolute;bottom:0;border-top:5px solid #212121;z-index:1}#tuner-quick-container .inner-app #tuner-quick .tuner-quick-body .tuner-quick-custom-btn button{width:100%;display:block}#tuner-custom-container .inner-app{display:none}#tuner-custom-container .inner-app #custom-top{width:90%;margin-top:15px;margin-left:auto;margin-right:auto}#tuner-custom-container .inner-app #custom-top .noUi-connect{background:#004d40}#tuner-custom-container .inner-app #custom-top .tuner-option{margin-bottom:50px}#tuner-custom-container .inner-app #custom-top .tuner-option label{font-size:20px;color:#fff}#tuner-custom-container .inner-app #custom-top .tuner-option small{text-transform:uppercase;font-size:12px;color:#c4c4c4}#tuner-custom-container .inner-app #custom-bottom{width:100%;text-align:center;position:absolute;bottom:0}#tuner-custom-container .inner-app #custom-bottom button{width:45%;margin-bottom:10px}#tuner-custom-container .inner-app #custom-bottom button#tuner-custom-save{display:block;width:92% !important;margin-left:auto;margin-right:auto}#tuner-custom-container #custom-tunes-popup .tabs .tab a{font-size:20px;font-weight:bold;color:#212121}#tuner-custom-container #custom-tunes-popup .tabs .tab a:hover,#tuner-custom-container #custom-tunes-popup .tabs .tab a.active{color:#004d40;background:transparent}#tuner-custom-container #custom-tunes-popup .tabs .indicator{background-color:#004d40}#tuner-custom-container #custom-tunes-popup #car-only,#tuner-custom-container #custom-tunes-popup #generic{margin-top:10px}#tuner-custom-container #custom-tunes-popup #car-only .tuner-options,#tuner-custom-container #custom-tunes-popup #generic .tuner-options{margin-bottom:10px}#tuner-custom-container #custom-tunes-popup #car-only .tuner-options:last-child,#tuner-custom-container #custom-tunes-popup #generic .tuner-options:last-child{margin-bottom:0}#tuner-custom-container #custom-tunes-popup #car-only .tuner-options .quick-tune-button,#tuner-custom-container #custom-tunes-popup #generic .tuner-options .quick-tune-button{width:80%;margin:0;margin-right:-10px}#tuner-custom-container #custom-tunes-popup #car-only .tuner-options .quick-tune-delete,#tuner-custom-container #custom-tunes-popup #generic .tuner-options .quick-tune-delete{width:20%;margin:0}#tuner-custom-container #custom-tunes-popup #car-only .tuner-options .quick-tune-delete.disabled,#tuner-custom-container #custom-tunes-popup #generic .tuner-options .quick-tune-delete.disabled{background-color:#212121 !important;color:#fff !important;border-radius:0 !important;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2) !important}#tuner-legal-container .inner-app{display:none}#tuner-legal-container .inner-app .disclaimer-header{color:#fff;text-align:center;font-weight:bold}#tuner-legal-container .inner-app .disclaimer-header h3{font-size:26px}#tuner-legal-container .inner-app .disclaimer{font-size:13px;font-weight:bold;padding:15px;color:#c4c4c4}#tuner-legal-container .inner-app .disclaimer::before{content:\'*\';color:#004d40}#tuner-container .modal,#tuner-custom-container .modal{background:#212121 !important;border:1px solid #004d40 !important}#tuner-container .modal .modal-content [type="checkbox"]:checked+span:not(.lever)::before,#tuner-custom-container .modal .modal-content [type="checkbox"]:checked+span:not(.lever)::before{border-right:2px solid #004d40 !important;border-bottom:2px solid #004d40 !important}#tuner-container .modal .modal-content input[type=text]:not(.browser-default):focus.invalid ~ label,#tuner-custom-container .modal .modal-content input[type=text]:not(.browser-default):focus.invalid ~ label{color:#fff !important}#tuner-container .modal .modal-content input,#tuner-custom-container .modal .modal-content input{color:#fff !important}#tuner-container .modal .modal-content input.invalid[type=text]:not(.browser-default),#tuner-container .modal .modal-content input.valid[type=text]:not(.browser-default),#tuner-container .modal .modal-content input:not(.browser-default),#tuner-custom-container .modal .modal-content input.invalid[type=text]:not(.browser-default),#tuner-custom-container .modal .modal-content input.valid[type=text]:not(.browser-default),#tuner-custom-container .modal .modal-content input:not(.browser-default){border-bottom:1px solid #004d40 !important;-webkit-box-shadow:0 1px 0 0 #004d40 !important;box-shadow:0 1px 0 0 #004d40 !important}#tuner-container .modal .modal-content label,#tuner-custom-container .modal .modal-content label{color:#fff !important}#tuner-container .modal .modal-footer,#tuner-custom-container .modal .modal-footer{background-color:#212121 !important}#tuner-info-container .tuner-section{display:none;padding:15px}#tuner-info-container .tuner-section .info-header{width:100%;text-align:center}#tuner-info-container .tuner-section .info-header h3{font-size:20px;color:#004d40;font-weight:500}#tuner-info-container .tuner-section .info-table .info-error{width:100%;text-align:center;font-size:18px;font-weight:500;color:#D50000}#tuner-info-container .tuner-section .info-table table{color:#ffffff;font-weight:500;font-size:18px}#tuner-info-container .tuner-section .info-table table tr{border-bottom:none}#bank-container{background:#e0e0e0}#bank-container .accounts{background:#105a8b;height:60%;overflow-y:auto;overflow-x:hidden;padding:15px}#bank-container .accounts .account{height:55px;line-height:60px;padding-left:10px;border-radius:5px;background-color:#650d10;color:#fff;margin-bottom:5px;box-shadow:0px 0px 5px #1e1e1e inset}#bank-container .accounts .account.type-1{border-left:5px solid #1B5E20}#bank-container .accounts .account.type-2{border-left:5px solid #01579b}#bank-container .accounts .account.type-3{border-left:5px solid #f57f17}#bank-container .accounts .account:hover{transition:all ease-in 0.15s;filter:brightness(0.8)}#bank-container .accounts .account:last-child{margin-bottom:0}#bank-container .accounts .account .account-label{pointer-events:none;display:inline-block;width:65%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#bank-container .accounts .account .account-label .bank-label-name{display:inline-block;max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#bank-container .accounts .account .account-label small{pointer-events:none;color:#c4c4c4;margin-left:10px;display:inline-block;max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#bank-container .accounts .account .account-label small::before{content:\'(\'}#bank-container .accounts .account .account-label small::after{content:\')\'}#bank-container .accounts .account .account-balance{pointer-events:none;display:inline-block;width:30%;text-align:right;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#bank-container .message{height:20%}#bank-container .message .colored-header{background:#105a8b;height:30%}#bank-container .message .message-body{padding:15px;background:#fff;color:#105a8b;position:relative;left:0;right:0;top:-35px;margin-left:auto;margin-right:auto;width:90%;border-radius:10px;box-shadow:0 0 10px #000000;font-weight:500;max-height:90%;overflow:hidden}#bank-container .message .message-body .message-header{font-size:22px;border-bottom:1px solid #212121}#bank-container .message .message-body .message-header .message-name{color:#212121}#bank-container .message .message-body .message-text{font-size:13px}#bank-container .quick-actions{border-top:1px solid #212121;padding-top:15px;background:#fff;position:absolute;bottom:0;width:100%;height:100%;text-align:center;display:flex;justify-content:space-evenly}#bank-container .quick-actions .bank-quick-action,#bank-container .quick-actions .bank-quick-nav{display:none;width:32.3%;padding:15px;color:#212121;text-align:center;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#bank-container .quick-actions .bank-quick-action i,#bank-container .quick-actions .bank-quick-nav i{display:block;width:fit-content;margin-left:auto;margin-right:auto;background:#e0e0e0;border-radius:100px;font-size:23px;border:1px solid #212121;height:65px;width:65px;line-height:65px}#bank-container .quick-actions .bank-quick-action:hover,#bank-container .quick-actions .bank-quick-nav:hover{transition:color ease-in 0.3s;color:#105a8b}#bank-container .quick-actions .bank-quick-action:hover i,#bank-container .quick-actions .bank-quick-nav:hover i{transition:all ease-in 0.3s;transition-property:background, border;background:#fff;border:1px solid #105a8b}#bank-transfer-container{background:#fff;color:#fff}#bank-transfer-container .inner-app #bank-app-page{width:100%;height:0%;margin:auto;border-radius:5px;background:#fff;border-bottom:1px solid #212121}#bank-transfer-container .inner-app #bank-app-page .alert{padding:10px;border-radius:5px;background-color:#650d10;margin-bottom:5px;-webkit-box-shadow:0px 0px 5px #1e1e1e inset;box-shadow:0px 0px 5px #1e1e1e inset;font-size:14px;border-left:5px solid #ff0000}#bank-transfer-container .inner-app #bank-app-page .maze-pay-section{padding:15px;height:93.5%;overflow-y:auto;overflow-x:hidden}#bank-transfer-container .inner-app #bank-app-page .maze-pay-section .select-dropdown{max-height:400px !important;overflow-y:auto !important;backface-visibility:hidden !important}#bank-transfer-container .inner-app #bank-app-page .maze-pay-section#maze-pay-history table{table-layout:fixed;width:100%}#bank-transfer-container .inner-app #bank-app-page .maze-pay-section#maze-pay-history table td{width:20%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#bank-mp-container{background:#fff;color:#fff}#bank-mp-container .inner-app #bank-app-page{width:100%;height:0%;margin:auto;border-radius:5px;background:#fff;border-bottom:1px solid #212121}#bank-mp-container .inner-app #bank-app-page .alert{padding:10px;border-radius:5px;background-color:#650d10;margin-bottom:5px;-webkit-box-shadow:0px 0px 5px #1e1e1e inset;box-shadow:0px 0px 5px #1e1e1e inset;font-size:14px;border-left:5px solid #ff0000}#bank-mp-container .inner-app #bank-app-page .col{padding:0}#bank-mp-container .inner-app #bank-app-page .col .tabs{background-color:#105a8b;border-top-left-radius:5px;border-top-right-radius:5px}#bank-mp-container .inner-app #bank-app-page .col .tabs .tab a{color:#fff;font-weight:500}#bank-mp-container .inner-app #bank-app-page .col .tabs .indicator{background-color:#fff;height:5px}#bank-mp-container .inner-app #bank-app-page .maze-pay-section{padding:15px;height:93.5%;overflow-y:auto;overflow-x:hidden}#bank-mp-container .inner-app #bank-app-page .maze-pay-section .select-dropdown{max-height:400px !important;overflow-y:auto !important;backface-visibility:hidden !important}#bank-mp-container .inner-app #bank-app-page .maze-pay-section#maze-pay-history table{table-layout:fixed;width:100%}#bank-mp-container .inner-app #bank-app-page .maze-pay-section#maze-pay-history table td{width:20%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#bank-transaction-container{background:#fff;color:#fff}#bank-transaction-container .inner-app #bank-app-page{width:100%;height:0%;margin:auto;border-radius:5px;background:#fff;border-bottom:1px solid #212121;border-left:10px solid #ffff}#bank-transaction-container .inner-app #bank-app-page.type-1{border-color:#1B5E20}#bank-transaction-container .inner-app #bank-app-page.type-2{border-color:#01579b}#bank-transaction-container .inner-app #bank-app-page.type-3{border-color:#f57f17}#bank-transaction-container .inner-app #bank-app-page .transaction-header{padding:0 15px 0 5px;height:6%}#bank-transaction-container .inner-app #bank-app-page .transaction-header .select-wrapper{display:none}#bank-transaction-container .inner-app #bank-app-page .transaction-header .select-dropdown{max-height:600px !important;overflow-y:auto !important;backface-visibility:hidden !important}#bank-transaction-container .inner-app #bank-app-page .transaction-body{padding:0 15px 0 5px;height:94%;overflow-y:auto;overflow-x:hidden}#bank-transaction-container .inner-app #bank-app-page .transaction-body table td{font-weight:500}#bank-transaction-container .inner-app #bank-app-page .transaction-body table td.trans-negative{color:#105a8b}#bank-transaction-container .inner-app #bank-app-page .transaction-body table td.trans-positive{color:#1B5E20}#bank-transaction-container .inner-app #bank-app-page .transaction-body .no-transactions{position:absolute;width:100%;top:5%;padding:25px;font-size:25px;color:#105a8b;text-align:center;font-weight:500;display:none}#irc-container{background:#101010;color:#fff}#irc-container .inner-app .channel-list{height:100%;overflow-y:auto;overflow-x:hidden}#irc-container .inner-app .channel-list .irc-channel{background:#1e1e1e;padding:15px;font-size:25px;color:#fff;border-bottom:1px solid #333}#irc-container .inner-app .channel-list .irc-channel span{display:block;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}#irc-container .inner-app .channel-list .irc-channel span::before{content:\'#\';font-size:18px;line-height:25px;color:#1be8b5;font-weight:bold}#irc-container .inner-app .channel-list .irc-channel:hover{transition:all ease-in 0.15s;filter:brightness(0.8)}#irc-container .inner-app .channel-list .irc-channel:hover span::before{transition:color ease-in 0.15s;color:#fff}#irc-container .inner-app .btn-floating{position:absolute;bottom:2%;right:2%;background-color:#1be8b5 !important}#irc-container .modal{background:#101010 !important;border:1px solid #1be8b5 !important}#irc-container .modal .modal-content input[type=text]:not(.browser-default):focus.invalid ~ label{color:#ffffff !important}#irc-container .modal .modal-content input{color:#ffffff !important}#irc-container .modal .modal-content input.invalid[type=text]:not(.browser-default){border-bottom:1px solid #1be8b5 !important;-webkit-box-shadow:0 1px 0 0 #1be8b5 !important;box-shadow:0 1px 0 0 #1be8b5 !important}#irc-container .modal .modal-footer{background-color:#101010 !important}#irc-container .teal.accent-3{color:#000000}#irc-convo-container{background:#101010;color:#fff}#irc-convo-container .inner-app .irc-top-bar{padding:10px;font-size:15px;color:#fff;font-weight:bold;border-bottom:1px solid #333;background:#1e1e1e}#irc-convo-container .inner-app .irc-top-bar i.back-button{float:left;line-height:40px;padding-right:15px}#irc-convo-container .inner-app .irc-top-bar i.back-button:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#irc-convo-container .inner-app .irc-top-bar .irc-channel{width:44%;font-size:20px;line-height:35px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}#irc-convo-container .inner-app .irc-top-bar .irc-channel::before{content:\'#\';font-size:18px;line-height:25px;color:#1be8b5;font-weight:bold}#irc-convo-container .inner-app .irc-top-bar .irc-top-actions{display:inline-block;width:49%;line-height:40px;text-align:right}#irc-convo-container .inner-app .irc-top-bar .irc-top-actions i{padding:10px}#irc-convo-container .inner-app .irc-top-bar .irc-top-actions i:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#irc-convo-container .inner-app .message-list{height:83%;overflow-y:auto;overflow-x:hidden}#irc-convo-container .inner-app .message-list .irc-message{padding:15px 15px 0 15px;background:#1e1e1e;border-bottom:1px solid #333}#irc-convo-container .inner-app .message-list .irc-message span.message-text{display:block;font-size:18px}#irc-convo-container .inner-app .message-list .irc-message .message-time{display:block;width:100%;position:relative;right:0;bottom:10px;font-size:13px;color:#1be8b5;text-align:right;line-height:20px;font-weight:500}#irc-convo-container .inner-app .irc-text-input{height:9.5%;border-top:1px solid #333;background:#1e1e1e}#irc-convo-container .inner-app .irc-text-input #irc-new-message{-webkit-margin-after:0;margin-block-end:0}#irc-convo-container .inner-app .irc-text-input #irc-new-message .input-field{margin:0;display:inline-block;width:85%}#irc-convo-container .inner-app .irc-text-input #irc-new-message .input-field #irc-input{padding:10px;margin:0;height:65%;color:#fff}#irc-convo-container .inner-app .irc-text-input #irc-new-message .input-field #irc-input:focus{border-color:#1be8b5 !important}#irc-convo-container .inner-app .irc-text-input #irc-new-message .input-field .character-counter{float:right;font-size:12px;height:1px;position:absolute;bottom:0%;right:1%}#irc-convo-container .inner-app .irc-text-input #irc-new-message i{font-size:25px;position:absolute;bottom:2.5%;right:3%;color:#fff}#irc-convo-container .inner-app .irc-text-input #irc-new-message i:hover{transition:all ease-in 0.15s;color:#1be8b5}#irc-convo-container .modal{background:#101010 !important;border:1px solid #1be8b5 !important}#irc-convo-container .modal .modal-content input[type=text]:not(.browser-default):focus.invalid ~ label{color:#ffffff !important}#irc-convo-container .modal .modal-content input.invalid[type=text]:not(.browser-default){border-bottom:1px solid #1be8b5 !important;-webkit-box-shadow:0 1px 0 0 #1be8b5 !important;box-shadow:0 1px 0 0 #1be8b5 !important}#irc-convo-container .modal .modal-footer{background-color:#101010 !important}#irc-convo-container .teal.accent-3{color:#000000}#settings-container{background:#e0e0e0}#settings-container #phone-settings .settings-section{padding:15px;background:#fff;margin:15px;border-radius:5px;border:1px solid #212121;text-align:center}#settings-container #phone-settings .settings-section h3{color:#212121;font-size:25px;text-align:center;margin-bottom:25px}#settings-container #phone-settings .settings-section:last-child{position:absolute;bottom:0;width:100%;margin:0}#settings-container #phone-settings .settings-section button{width:49.25%} #stocks-container{background:#2b2b2b}#stocks-container #phone-stocks .stocks-section{padding:15px;background:#fff;margin:15px;border-radius:5px;border:1px solid #212121;text-align:center}#stocks-container #phone-stocks .stocks-section h3{color:#212121;font-size:25px;text-align:center;margin-bottom:25px}#stocks-container #phone-stocks .stocks-section:last-child{position:absolute;bottom:0;width:100%;margin:0}#stocks-container #phone-stocks .stocks-section button{width:49.25%} #dumper-container{background:#e0e0e0}#dumper-container .inner-app.error{color:#B71C1C;text-align:center;font-size:20px;padding:15px}#dumper-container .inner-app .dumper-filter-bar{background-color:#ff0073;color:#212121;font-size:0;border-bottom:1px solid #212121}#dumper-container .inner-app .dumper-filter-bar i{width:33.333%;text-align:center;font-size:40px;padding:10px}#dumper-container .inner-app .dumper-filter-bar i.active{background:rgba(0,0,0,0.35);color:#fff}#dumper-container .inner-app .dumper-filter-bar i:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#dumper-container .inner-app .dumper-app-list{height:91.6%;overflow-y:auto;overflow-x:hidden}#dumper-container .inner-app .dumper-app-list .dumper-app{color:#212121;font-size:18px;background:#fff;border-bottom:1px solid #212121;padding:15px}#dumper-container .inner-app .dumper-app-list .dumper-app .dumper-icon{display:inline-block;width:fit-content;margin:10px 20px 10px 0}#dumper-container .inner-app .dumper-app-list .dumper-app .dumper-icon.transfer{color:#f57f17}#dumper-container .inner-app .dumper-app-list .dumper-app .dumper-icon.copy{color:#1B5E20}#dumper-container .inner-app .dumper-app-list .dumper-app .dumper-app-label{display:inline-block;width:80%}#dumper-container .inner-app .dumper-app-list .dumper-app:hover{background:#c4c4c4;transition:all ease-in 0.15s}#dumper-details-container{background:#fff}#dumper-details-container .inner-app .dumper-top-bar{display:flex;padding:10px;font-size:15px;color:#fff;font-weight:bold;background:#105a8b}#dumper-details-container .inner-app .dumper-top-bar i.back-button{float:left;line-height:40px;padding-right:15px}#dumper-details-container .inner-app .dumper-top-bar i.back-button:hover{transition:all ease-in 0.15s;filter:brightness(85%)}#dumper-details-container .inner-app .dumper-top-bar .dumper-top-text{width:73.6%;font-size:20px;line-height:35px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}#dumper-details-container .inner-app .dumper-top-bar .dumper-top-actions{display:inline-block;width:20%;line-height:40px;text-align:right}#dumper-details-container .inner-app .dumper-top-bar .dumper-top-actions i{padding:10px}#dumper-details-container .inner-app .dumper-top-bar .dumper-top-actions i.disabled{color:#212121}#dumper-details-container .inner-app .dumper-top-bar .dumper-top-actions i:hover:not(.disabled){transition:all ease-in 0.15s;filter:brightness(85%)}#dumper-details-container .inner-app .dumper-details-section{padding:10px}#dumper-details-container .inner-app .dumper-details-section .section-header{font-weight:bold;font-size:110%}#dumper-details-container .inner-app .dumper-details-section#legend{border-top:1px solid #212121;padding:0;position:absolute;bottom:0}#dumper-details-container .inner-app .dumper-details-section#legend .dumper-legend-header{width:100%;text-align:center;font-size:20px;font-weight:500}#dumper-details-container .inner-app .dumper-details-section#legend .dumper-legend-part{padding:10px;margin:10px;background:#c4c4c4;border:1px solid #212121}#dumper-details-container .inner-app .dumper-details-section#legend .dumper-legend-part .dumper-legend-key{font-weight:bold;margin-right:5px}\n', ""]), t.exports = e
}, function(t, n, a) {
    "use strict";
    a.r(n);
    var o = {
        ROOT_ADDRESS: "http://8bit_phone",
        Apps: [{
            name: "Contacts",
            container: "contacts",
            icon: '<i class="fas fa-address-book"></i>',
            color: "#006064",
            unread: 0,
            enabled: !0,
            dumpable: 0
        }, {
            name: "Phone",
            container: "phone",
            icon: '<i class="fas fa-phone"></i>',
            color: "#01579b",
            unread: 0,
            enabled: !0,
            dumpable: 0
        }, {
            name: "Messages",
            container: "message",
            icon: '<i class="fas fa-comment-alt"></i>',
            color: "#311b92",
            unread: 0,
            enabled: !0,
            dumpable: 0
        }, {
            name: "Bank",
            container: "bank",
            icon: '<i class="fas fa-university"></i>',
            color: "#d7252a",
            unread: 0,
            enabled: !0,
            customExit: !0,
            dumpable: 0
        }, {
            name: "Twitter",
            container: "twitter",
            icon: '<i class="fab fa-twitter"></i>',
            color: "#039be5",
            unread: 0,
            enabled: !0,
            dumpable: 0
        }, {
            name: "Yellow Pages",
            container: "yp",
            icon: '<i class="fas fa-ad"></i>',
            color: "#f9a825",
            unread: 0,
            enabled: !0,
            dumpable: 0
        }, {
            name: "Settings",
            container: "settings",
            icon: '<i class="fas fa-cogs"></i>',
            color: "#404040",
            unread: 0,
            enabled: !0,
            dumpable: 0
        }, {
            name: "Dumper",
            container: "dumper",
            icon: '<i class="fas fa-download"></i>',
            color: "hsl(333, 100%, 50%)",
            unread: 0,
            enabled: !0,
            dumpable: 1
        }, {
            name: "IRC",
            container: "irc",
            icon: '<i class="fas fa-comment-slash"></i>',
            color: "#1de9b6",
            unread: 0,
            enabled: !0,
            dumpable: 2
        }, {
            name: "Tuner",
            container: "tuner",
            icon: '<i class="fas fa-tools"></i>',
            color: "#004d40",
            unread: 0,
            enabled: !0,
            dumpable: 2
        }]
    };

    function r(t) {
        $.each(t, (function(t, e) {
            window.localStorage.setItem(e.name, JSON.stringify(e.data))
        }))
    }

    function i(t, e) {
        window.localStorage.setItem(t, JSON.stringify(e))
    }

    function l(t, e) {
        var n = c(t);
        n.splice(e, 1), i(t, n)
    }

    function c(t) {
        return JSON.parse(window.localStorage.getItem(t))
    }

    function p() {
        window.localStorage.clear()
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "setup":
                r(t.data.data);
                break;
            case "logout":
                p()
        }
    }));
    var d = {
        SetupData: r,
        StoreData: i,
        AddData: function(t, e) {
            var n = c(t);
            n.push(e), i(t, n)
        },
        RemoveData: l,
        RemoveObjectData: function(t, e, n) {
            var a = c(t);
            $.each(a, (function(a, o) {
                if (o[e] == n) return l(t, a), !1
            }))
        },
        UpdateData: function(t, e, n) {
            var a = c(t);
            a[e] = n, i(t, a)
        },
        UpdateObjectData: function(t, e, n, a, o) {
            var r = c(t);
            $.each(r, (function(l, c) {
                if (c[e] == n) return r[l][a] = o, i(t, r), !1
            }))
        },
        GetData: c,
        ClearData: p,
        StoreDataLua: function(t, e) {
            $.post(o.ROOT_ADDRESS + "/RegiseterData", JSON.stringify({
                key: t,
                data: e
            }))
        },
        GetDataLua: function(t) {
            $.post(o.ROOT_ADDRESS + "/GetData", JSON.stringify({
                key: t
            }), (function(t) {
                return t
            }))
        }
    };

    function s(t) {
        $(".time span").html(t)
    }

    function u(t) {
        t ? ($(".mute").html('<i class="fas fa-volume-mute"></i>'), $(".mute").removeClass("not-muted").addClass("muted"), d.UpdateData("settings", "volume", 0)) : ($(".mute").html('<i class="fas fa-volume-up"></i>'), $(".mute").removeClass("muted").addClass("not-muted"), d.UpdateData("settings", "volume", 100))
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "setmute":
                u(t.data.muted);
                break;
            case "updateTime":
                s(t.data.time)
        }
    }));
    var f = {
            UpdateWallpaper: function(t) {
                $(".phone-screen").css("background-image", t)
            },
            FormatCurrency: function(t) {
                return "$".concat(t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            },
            DateSortNewest: function(t, e) {
                return null != t.time ? t.time < e.time ? 1 : -1 : t.date < e.date ? 1 : -1
            },
            DateSortOldest: function(t, e) {
                return null != t.time ? t.time > e.time ? 1 : -1 : t.date > e.date ? 1 : -1
            },
            UpdateClock: s,
            NotifyAltSim: function(t) {
                t ? $(".simcard").fadeIn() : $(".simcard").fadeOut()
            },
            NotifyPayphone: function(t) {
                t ? $(".payphone").fadeIn() : $(".payphone").fadeOut()
            },
            SetMute: u
        },
        b = null;

    function m(t, e) {
        $(".phone-notif-container").html(t).show("slide", {
            direction: "up"
        }, 500, (function() {
            b = setTimeout((function() {
                $(".phone-notif-container").hide("slide", {
                    direction: "up"
                }, 500, (function() {
                    $(".phone-notif-container").html(""), b = null
                }))
            }), null == e ? 2500 : e)
        }))
    }
    var h = {
        Alert: function(t, e) {
            null != b ? (clearTimeout(b), b = null, $(".phone-notif-container").hide("slide", {
                direction: "up"
            }, 100, (function() {
                m(t, e)
            }))) : m(t, e)
        }
    };

    function g(t, e, n) {
        $.post(o.ROOT_ADDRESS + "/SetUnread", JSON.stringify({
            app: t,
            unread: e
        }), n)
    }
    var x = {
            SetUnread: function(t) {
                var e = d.GetData("apps"),
                    n = qe.GetCurrentApp();
                $.each(e, (function(e, a) {
                    if (a.container === n) return g(n, t, (function(t) {
                        a.unread = t, d.UpdateData("apps", e, a)
                    })), !1
                }))
            },
            AddUnread: function() {
                var t = d.GetData("apps"),
                    e = qe.GetCurrentApp();
                $.each(t, (function(t, n) {
                    if (n.container == e) return g(e, n.unread + 1, (function(e) {
                        n.unread = e, d.UpdateData("apps", t, n)
                    })), !1
                }))
            },
            RemoveUnread: function() {
                var t = d.GetData("apps"),
                    e = qe.GetCurrentApp();
                $.each(t, (function(t, n) {
                    if (n.container == e) return g(e, n.unread - 1, (function(e) {
                        n.unread = e, d.UpdateData("apps", t, n)
                    })), !1
                }))
            },
            ClearUnread: function() {
                var t = d.GetData("apps"),
                    e = qe.GetCurrentApp();
                $.each(t, (function(t, n) {
                    if (n.container == e) return g(e, 0, (function(e) {
                        n.unread = e, d.UpdateData("apps", t, n)
                    })), !1
                }))
            }
        },
        v = null;

    function w() {
        v = d.GetData("apps"), $.each(v, (function(t, e) {
            if (e.enabled) {
                e.unread > 0 ? $(".inner-app").append('<div class="app-button" data-tooltip="'.concat(e.name, '"><div class="app-icon" id="').concat(e.container, '-app" style="background-color: ').concat(e.color, '"> ').concat(e.icon, '<div class="badge pulse">').concat(e.unread, "</div></div></div>")) : $(".inner-app").append('<div class="app-button" data-tooltip="'.concat(e.name, '"><div class="app-icon" id="').concat(e.container, '-app" style="background-color: ').concat(e.color, '"> ').concat(e.icon, "</div></div>"));
                var n = $("#home-container .app-button:last-child");
                n.tooltip({
                    enterDelay: 0,
                    exitDelay: 0,
                    inDuration: 0
                }), n.data("app", e)
            }
        }))
    }

    function y(t, e) {
        null == v && (v = d.GetData("apps")), qe.GetCurrentApp() === t && e > 0 || $.each(v, (function(n, a) {
            if (a.container == t) return $.post(o.ROOT_ADDRESS + "/SetUnread", JSON.stringify({
                app: t,
                unread: e
            }), (function(t) {
                null != t && (a.unread = e, d.StoreData("apps", v), "home" === qe.GetCurrentApp() && w())
            })), !1
        }))
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "Logout":
                window.dispatchEvent(new CustomEvent("reset-closed-notifs"));
                break;
            case "updateUnread":
                y(t.data.app, t.data.unread);
                break;
            case "EditAppState":
                $.each(d.GetData("apps"), (function(e, n) {
                    if (n.container === t.data.app) return d.UpdateObjectData("apps", "container", t.data.app, "enabled", t.data.state), !1
                })), "home" === qe.GetCurrentApp() && w();
                break;
            case "DisableApp":
                $.each(d.GetData("apps"), (function(e, n) {
                    if (n.container === t.data.app) return d.UpdateObjectData("apps", "container", t.data.app, "enabled", !1), !1
                })), "home" === qe.GetCurrentApp() && w();
                break;
            case "SyncUnread":
                $.each(d.GetData("apps"), (function(e, n) {
                    null !== t.data.unread[n.container] && d.UpdateObjectData("apps", "container", n.container, "unread", t.data.unread[n.container])
                }));
                break;
            case "AddClosedAlert":
                e = t.data.app, v = d.GetData("apps"), $.each(v, (function(t, n) {
                    n.container === e && $(".unread-alert").append('<div class="app-button" id="'.concat(n.container, '-unread-notif"><div class="app-icon" id="').concat(n.container, '-app" style="background-color: ').concat(n.color, '"> ').concat(n.icon, "</div></div>"))
                }))
        }
        var e
    })), $(".phone-screen").on("click", "#home-container .app-button", (function(t) {
        var e = $(t.currentTarget).data("app");
        qe.OpenApp(e.container, null, !1, !1, e.customExit)
    })), window.addEventListener("remove-closed-notif", (function(t) {
        $("#".concat(t.detail.app, "-unread-notif")).fadeOut("normal").promise().then((function() {
            $(void 0).remove()
        }))
    })), window.addEventListener("reset-closed-notifs", (function() {
        $(".unread-alert").find(".app-button").fadeOut("normal").promise().then((function() {
            $(void 0).remove()
        }))
    })), window.addEventListener("home-open-app", (function() {
        w()
    }));
    var k = {
            ToggleApp: function(t, e) {
                var n = d.GetData("apps").filter((function(e) {
                    return e.container === t
                }))[0];
                e ? (n.enabled = !0, w()) : ($("#" + n.container + "-app").parent().fadeOut(), n.enabled = !1)
            },
            UpdateUnread: y
        },
        z = null,
        D = null,
        C = null,
        A = new Object;

    function S() {
        clearInterval(D), $(".call-avatar").addClass("call-connected").removeClass("call-pending"), $(".phone-header").removeClass("in-call"), null == C && (A.seconds = 0, A.minutes = 0, A.hours = 0, C = setInterval((function() {
            A.seconds < 59 ? A.seconds++ : A.minutes < 60 ? (A.seconds = 0, A.minutes++) : (A.seconds = 0, A.minutes = 0, A.hours++);
            var t = A.seconds,
                e = A.minutes;
            t < 10 && (t = "0" + t), e < 10 && (e = "0" + e), $(".call-number .call-timer").html(A.hours + ":" + e + ":" + t), $(".phone-header .in-call").html('<i class="fas fa-phone"></i> '.concat(A.hours, ":").concat(e, ":").concat(t))
        }), 1e3), $(".phone-header .in-call").fadeOut())
    }

    function O() {
        $(".call-number .call-timer").html("ENDED"), clearInterval(C), clearInterval(D), C = null, D = null, $(".call-avatar").addClass("call-disconnected").removeClass("call-connected").removeClass("call-pending"), $(".phone-header").attr("class", "phone-header"), $(".phone-header .in-call").fadeOut("fast", (function() {
            $(".phone-header .in-call").html('<i class="fas fa-phone"></i>')
        })), setTimeout((function() {
            $(".call-number .call-timer").html("Calling"), $(".call-avatar").attr("class", "call-avatar"), "phone-call" == qe.GetCurrentApp() && (qe.GoBack(), setTimeout((function() {
                $("#phone-call-container").attr("class", "app-container")
            }), 500))
        }), 2500)
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "receiveCall":
                qe.OpenApp("phone-call", {
                    number: t.data.number,
                    receiver: !0
                }, !1);
                break;
            case "acceptCallSender":
            case "acceptCallReceiver":
                S();
                break;
            case "endCall":
                O()
        }
    })), $("#screen-content").on("click", ".call-action-mutesound", (function(t) {
        $.post(o.ROOT_ADDRESS + "/ToggleHold", JSON.stringify({}), (function(t) {
            t ? $(".call-action-mutesound").html('<i class="fas fa-volume-up"></i><span>Unmute</span>') : $(".call-action-mutesound").html('<i class="fas fa-volume-mute"></i><span>Mute</span>')
        }))
    })), $("#screen-content").on("click", "#end-call", (function(t) {
        $.post(o.ROOT_ADDRESS + "/EndCall", JSON.stringify())
    })), $("#screen-content").on("click", "#answer-call", (function(t) {
        $.post(o.ROOT_ADDRESS + "/AcceptCall", JSON.stringify({}))
    })), window.addEventListener("phone-call-open-app", (function(t) {
        if (null == C && null != t)
            if (z = d.GetData("contacts"), t.receiver) {
                $(".call-button#answer-call").show(), $("#phone-call-container").data("data", t);
                var e = z.filter((function(e) {
                    return e.number == t.number
                }))[0];
                null != e ? ($("#phone-call-container").addClass("other-" + e.name[0].toString().toLowerCase()), $(".call-number .call-number-text").html(e.name), $(".call-number .call-subnumber").html(e.number), $(".call-header .call-avatar").html(e.name[0])) : ($(".call-number .call-number-text").html(t.number), $(".call-number .call-subnumber").html(""), $(".call-header .call-avatar").html("#")), $(".call-avatar").addClass("call-pending");
                var n = "";
                clearInterval(D), D = setInterval((function() {
                    "..." === n ? n = "" : n += ".", $(".call-number .call-timer").html("Incoming " + n)
                }), 500)
            } else {
                $(".call-button#answer-call").hide(), $("#phone-call-container").data("data", t);
                var a = z.filter((function(e) {
                    return e.number == t.number
                }))[0];
                null != a ? ($("#phone-call-container").addClass("other-" + a.name[0].toString().toLowerCase()), $(".call-number .call-number-text").html(a.name), $(".call-number .call-subnumber").html(a.number), $(".call-header .call-avatar").html(a.name[0])) : ($(".call-number .call-number-text").html(t.number), $(".call-number .call-subnumber").html(""), $(".call-header .call-avatar").html("#")), $(".call-avatar").addClass("call-pending");
                var o = "";
                clearInterval(D), D = setInterval((function() {
                    "..." === o ? o = "" : o += ".", $(".call-number .call-timer").html("Calling " + o)
                }), 500)
            }
        else S()
    })), window.addEventListener("phone-call-close-app", (function() {
        if (null != C) return $(".phone-header").addClass("in-call"), void $(".phone-header .in-call").fadeIn();
        z = null, clearInterval(D), D = null, $("#phone-call-container").attr("class", "app-container"), $(".call-avatar").attr("class", "call-avatar"), $(".call-number .call-timer").html("Calling"), $("#phone-call-container").removeData("data"), $(".call-number .call-number-text").html(""), $(".call-number .call-subnumber").html(""), $(".call-action-mutemic").html('<i class="fas fa-microphone-slash"></i><span>Mute Mic</span>'), $(".call-action-mutesound").html('<i class="fas fa-volume-mute"></i><span>Mute Sound</span>')
    }));
    var T = {
            IsCallPending: function() {
                return null != D || null != C
            },
            CallAnswered: S,
            CallHungUp: O
        },
        E = null,
        N = null,
        F = null,
        R = null;

    function I(t) {
        var e = N.filter((function(e) {
            return e.number == t
        }))[0];
        null != e ? ($(".keypad-top .contact-display").html(e.name), $(".keypad-top .contact-display").fadeIn()) : $(".keypad-top .contact-display").fadeOut()
    }

    function q() {
        var t = $(".keypad-top #type").val();
        "#" === t[0] ? ($(".keypad-top .call-type").html("Calling Anonymously"), $(".keypad-top .call-type").is(":hidden") && $(".keypad-top .call-type").fadeIn()) : "*" == t[0] ? ($(".keypad-top .call-type").html("Calling UNK"), $(".keypad-top .call-type").is(":hidden") && $(".keypad-top .call-type").fadeIn()) : $(".keypad-top .call-type").is(":visible") && $(".keypad-top .call-type").fadeOut("fast", (function() {
            $(".keypad-top .call-type").html("CALL TYPE")
        }))
    }

    function L(t, e, n) {
        $.post(o.ROOT_ADDRESS + "/CreateCall", JSON.stringify({
            number: t,
            nonStandard: e
        }), (function(a) {
            a > 0 ? qe.OpenApp("phone-call", {
                number: t,
                nonStandard: e,
                receiver: n
            }) : -2 == a ? h.Alert("Can't Call Yourself, Idiot") : -3 == a ? h.Alert("Number is Busy") : h.Alert("Calling...")
        }))
    }
    $("#screen-content").on("click", ".phone-nav-button", (function(t) {
        if (!$(t.currentTarget).hasClass("active-nav")) {
            var e = $(".active-nav").data("nav");
            $(".active-nav").removeClass("active-nav");
            var n = $(t.currentTarget).data("nav");
            $(t.currentTarget).addClass("active-nav"), $("[data-section=" + e + "]").fadeOut("fast", (function() {
                $("[data-section=" + n + "]").fadeIn()
            }))
        }
    })), $("#screen-content").on("click", "[data-section=keypad] .keypad-top .delete-num-btn", (function(t) {
        var e = $(".keypad-top #number").val();
        if (e.length > 0) {
            var n = e.substring(0, e.length - 1);
            $(".keypad-top #number").val($(".keypad-top #number").masked(n))
        } else null != $(".keypad-top #type").val() && $(".keypad-top #type").val("");
        I($(".keypad-top #number").val()), q()
    })), $("#screen-content").on("mousedown", "[data-section=keypad] .keypad-top .delete-num-btn", (function(t) {
        var e = $(".keypad-top #number").val();
        return R = setInterval((function() {
            if (e.length > 0) {
                var t = e.substring(0, e.length - 1);
                $(".keypad-top #number").val($(".keypad-top #number").masked(t)), e = $(".keypad-top #number").val(), I($(".keypad-top #number").val()), q()
            }
        }), 250), !1
    })), $("#screen-content").on("submit", "[data-section=keypad] #call-number", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray();
        L(e[1].value, "#" === e[0].value || "*" === e[0].value, !1)
    })), $(document).mouseup((function() {
        return clearInterval(R), !1
    })), $("#screen-content").on("click", "[data-section=keypad] .keypad-key", (function(t) {
        if (!$(t.currentTarget).hasClass("key-call")) {
            var e = $(t.currentTarget).data("value"),
                n = $(".keypad-top #number").val();
            "#" === e || "*" === e ? $(".keypad-top #type").val() === e ? $(".keypad-top #type").val("") : $(".keypad-top #type").val(e) : n.length < 12 && (n += e, $(".keypad-top #number").val($(".keypad-top #number").masked(n)))
        }
        I($(".keypad-top #number").val()), q(), $(".keypad-top #number").get(0).focus()
    })), $("#screen-content").on("click", "[data-section=history] .call", (function(t) {
        $(t.currentTarget).find(".call-actions").is(":visible") ? $(t.currentTarget).find(".call-actions").slideUp() : ($(t.currentTarget).parent().find(".call-actions").slideUp(), $(t.currentTarget).find(".call-actions").slideDown())
    })), $("#screen-content").on("click", "[data-section=history] .call-actions .call-action-call", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("data"),
            n = e.sender;
        e.sender == E && (n = e.receiver), L(n, !1, !1)
    })), $("#screen-content").on("click", "[data-section=history] .call-actions .call-action-text", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("data"),
            n = e.sender;
        e.sender == E && (n = e.receiver), qe.OpenApp("message-convo", {
            number: n
        })
    })), $("#screen-content").on("click", "[data-section=history] .call-actions .call-action-delete", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("data");
        $.post(o.ROOT_ADDRESS + "/DeleteCallRecord", JSON.stringify({
            id: e.id
        }), (function(n) {
            n ? $(t.currentTarget).parent().parent().fadeOut("normal", (function() {
                d.RemoveData("history", e.index), qe.RefreshApp(), h.Alert("Call Record Deleted")
            })) : h.Alert("Error Deleting Call Record")
        }))
    })), $("#screen-content").on("keyup", "[data-section=contacts] .contact-search input", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).val();
        "" !== e ? $.each($(t.currentTarget).parent().parent().find(".contacts-list").children(), (function(t, n) {
            var a = $(n).data("data");
            a.name.toUpperCase().includes(e.toUpperCase()) || a.number.includes(e.toUpperCase()) ? $(n).fadeIn() : $(n).fadeOut()
        })) : $.each($(t.currentTarget).parent().parent().find(".contacts-list").children(), (function(t, e) {
            $(e).fadeIn()
        }))
    })), $("#screen-content").on("click", "[data-section=contacts] .phone-contact", (function(t) {
        $(t.currentTarget).find(".call-actions").is(":visible") ? $(t.currentTarget).find(".call-actions").slideUp() : ($(t.currentTarget).parent().find(".call-actions").slideUp(), $(t.currentTarget).find(".call-actions").slideDown())
    })), $("#screen-content").on("click", "[data-section=contacts] .call-actions .call-action-call", (function(t) {
        L($(t.currentTarget).parent().parent().data("data").number, !1, !1)
    })), $("#screen-content").on("click", "[data-section=contacts] .call-actions .call-action-text", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("data");
        qe.OpenApp("message-convo", {
            number: e.number
        })
    })), $("#screen-content").on("click", ".call-action-mute", (function(t) {})), window.addEventListener("phone-open-app", (function(t) {
        E = d.GetData("myData").phone, N = d.GetData("contacts"), F = d.GetData("history"), $("[data-section=contacts").find(".contacts-list").html(""), N.sort(P.SortContacts), $.each(N, (function(t, e) {
            $("[data-section=contacts").find(".contacts-list").append('<div class="phone-contact"><div class="phone-avatar other-' + e.name[0].toString().toLowerCase() + '">' + e.name[0] + "</div>" + e.name + '<div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i></div></div>'), $("[data-section=contacts").find(".contacts-list").find(".phone-contact:last-child").data("data", e)
        })), F.sort(f.DateSortOldest), $("[data-section=history").html(""), $.each(F, (function(t, e) {
            if (e.sender == E) {
                var n = N.filter((function(t) {
                    return t.number == e.receiver
                }))[0];
                0 == e.status ? null != n ? $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone icon-outgoing-missed"></i><span>' + n.name + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>') : $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone icon-outgoing-missed"></i><span>' + e.receiver + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>') : 1 == e.status && (null != n ? $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone icon-outgoing"></i><span>' + n.name + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>') : $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone icon-outgoing"></i><span>' + e.receiver + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>'))
            } else if (0 == e.anon) {
                var a = N.filter((function(t) {
                    return t.number == e.sender
                }))[0];
                0 == e.status ? null != a ? $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone-alt icon-incoming-missed"></i><span>' + a.name + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>') : $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone-alt icon-incoming-missed"></i><span>' + e.sender + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>') : 1 == e.status && (null != a ? $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone-alt icon-incoming"></i><span>' + a.name + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>') : $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone-alt icon-incoming"></i><span>' + e.sender + '</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume call-action-call"></i><i class="fas fa-sms call-action-text"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>'))
            } else e.status, $("[data-section=history").prepend('<div class="call"><i class="fas fa-phone-alt icon-incoming"></i><span>Unknown Number</span><div class="timestamp">' + moment(e.date).calendar() + '</div><div class="call-actions"><i class="fas fa-phone-volume action-disabled"></i><i class="fas fa-sms action-disabled"></i><i class="fas fa-trash-alt call-action-delete"></i></div></div>');
            e.index = t, $("[data-section=history").find(".call:first-child").data("data", e)
        })), setTimeout((function() {
            $(".keypad-top #number").get(0).focus()
        }), 1500)
    }));
    var B = {
            CreateCall: L,
            Call: T
        },
        G = null,
        U = null;

    function _(t, e) {
        var n = t.name.toUpperCase(),
            a = e.name.toUpperCase();
        return n < a ? -1 : n > a ? 1 : 0
    }
    $("#screen-content").on("click", ".contacts-list .contact", (function(t) {
        $(t.currentTarget).find(".contact-actions").is(":visible") ? $(t.currentTarget).find(".contact-actions").slideUp() : ($(t.currentTarget).parent().find(".contact-actions").slideUp(), $(t.currentTarget).find(".contact-actions").slideDown())
    })), $("#screen-content").on("keyup", "#search-contacts", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).val();
        "" !== e ? $.each($(t.currentTarget).parent().parent().find(".contacts-list").children(), (function(t, n) {
            var a = $(n).data("contact");
            a.name.toUpperCase().includes(e.toUpperCase()) || a.number.includes(e.toUpperCase()) ? $(n).fadeIn() : $(n).fadeOut()
        })) : $.each($(t.currentTarget).parent().parent().find(".contacts-list").children(), (function(t, e) {
            $(e).fadeIn()
        }))
    })), $("#screen-content").on("keydown", "#contact-add-number", (function(t) {
        switch (t.which) {
            case 8:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                break;
            default:
                t.preventDefault()
        }
    })), $("#screen-content").on("keydown", "#contact-edit-number", (function(t) {
        switch (t.which) {
            case 8:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                break;
            default:
                t.preventDefault()
        }
    })), $("#screen-content").on("submit", "#contacts-add-contact", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray(),
            n = e[0].value,
            a = e[1].value;
        $.post(o.ROOT_ADDRESS + "/CreateContact", JSON.stringify({
            name: n,
            number: a
        }), (function(t) {
            t ? (M.Modal.getInstance($("#add-contact-modal")).close(), null == G && (G = new Array), d.AddData("contacts", {
                name: n,
                number: a,
                index: G.length
            }), $(".contacts-list").append('<div class="contact waves-effect"><div class="contact-avatar other-' + n[0].toString().toLowerCase() + '">' + n[0] + '</div><div class="contact-name"><div class="contact-name-text">' + n + '</div><div class="number">(' + a + ')</div></div><div class="contact-actions waves-effect"><i class="fas fa-phone-volume action-call"></i><i class="fas fa-sms action-text"></i><i class="fas fa-user-edit action-edit modal-trigger" data-target="edit-contact-modal"></i><i class="fas fa-trash-alt action-delete"></i></div></div>'), $(".contacts-list .contact:last-child").data("contact", {
                name: n,
                number: a,
                index: G.length - 1
            }), $(".contacts-list").animate({
                scrollTop: $(".contacts-list .contact:last-child").offset().top
            }, 2e3), $(".contacts-list .contact:last-child").find(".contact-name").trigger("click"), h.Alert("Contact Added"), $("#contact-add-name").val(""), $("#contact-add-name").next().removeClass("active"), $("#contact-add-number").val(""), $("#contact-add-number").next().removeClass("active")) : h.Alert("Error Adding Contact")
        }))
    })), $("#screen-content").on("submit", "#contacts-edit-contact", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray(),
            n = $(U).data("contact"),
            a = e[0].value,
            r = e[1].value;
        $.post(o.ROOT_ADDRESS + "/EditContact", JSON.stringify({
            originName: n.name,
            originNumber: n.number,
            name: a,
            number: r
        }), (function(t) {
            t ? (M.Modal.getInstance($("#edit-contact-modal")).close(), d.UpdateData("contacts", n.index, {
                name: a,
                number: r,
                index: n.index
            }), $(U).html('<div class="contact-avatar other-' + a[0].toString().toLowerCase() + '">' + a[0] + '</div><div class="contact-name"><div class="contact-name-text">' + a + '</div><div class="number">(' + r + ')</div></div><div class="contact-actions"><i class="fas fa-phone-volume action-call"></i><i class="fas fa-sms action-text"></i><i class="fas fa-user-edit action-edit modal-trigger" data-target="edit-contact-modal"></i><i class="fas fa-trash-alt action-delete"></i></div>'), $(U).data("contact", {
                name: a,
                number: r,
                index: n.index
            }), $(U).find(".contact-name").trigger("click"), h.Alert("Contact Updated"), $("#contact-edit-name").val(""), $("#contact-edit-name").next().removeClass("active"), $("#contact-edit-number").val(""), $("#contact-edit-number").next().removeClass("active")) : h.Alert("Error Updating Contact")
        }))
    })), $("#screen-content").on("click", ".contacts-list .contact-actions .action-call", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("contact");
        B.CreateCall(e.number, !1, !1)
    })), $("#screen-content").on("click", ".contacts-list .contact-actions .action-text", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("contact");
        qe.OpenApp("message-convo", {
            number: e.number
        })
    })), $("#screen-content").on("click", ".contacts-list .contact-actions .action-edit", (function(t) {
        var e = $(t.currentTarget).parent().parent().data("contact");
        U = $(t.currentTarget).parent().parent(), $("#contact-edit-name").val(e.name), $("#contact-edit-number").val(e.number), M.updateTextFields()
    })), $("#screen-content").on("click", ".contacts-list .contact-actions .action-delete", (function(t) {
        var e = $(t.currentTarget),
            n = e.parent().parent().data("contact");
        $.post(o.ROOT_ADDRESS + "/DeleteContact", JSON.stringify({
            name: n.name,
            number: n.number
        }), (function(t) {
            t ? (e.parent().parent().fadeOut("normal", (function() {
                e.parent().parent().remove()
                console.log(JSON.stringify({ name: n.name, number: n.number }))
            })), h.Alert("Contact Deleted"), d.RemoveData("contacts", n.index)) : h.Alert("Error Deleting Contact")
        }))
    })), window.addEventListener("contacts-open-app", (function() {
        (G = d.GetData("contacts")).sort(_), $(".contacts-list").html(""), $.each(G, (function(t, e) {
            $(".contacts-list").append('<div class="contact waves-effect"><div class="contact-avatar other-' + e.name[0].toString().toLowerCase() + '">' + e.name[0] + '</div><div class="contact-name"><div class="contact-name-text">' + e.name + '</div><div class="number">(' + e.number + ')</div></div><div class="contact-actions"><i class="fas fa-phone-volume action-call"></i><i class="fas fa-sms action-text"></i><i class="fas fa-user-edit action-edit  modal-trigger" data-target="edit-contact-modal"></i><i class="fas fa-trash-alt action-delete"></i></div></div>'), e.index = t, $(".contacts-list .contact:last-child").data("contact", e)
        }))
    }));
    var P = {
            SortContacts: _
        },
        j = null,
        J = null,
        Y = null;

    function H(t, e) {
        var n = $("#message-convo-container").data("data");
        if (null != n) {
            var a = J.filter((function(t) {
                return t.number == n.number
            }))[0];
            n.number == e.sender && (null != a ? $(".convo-texts-list").append('<div class="text other-sender"><span class=" other-' + a.name[0] + '">' + e.message + "</span><p>" + moment(Date.now()).fromNowOrNow() + "</p></div>") : $(".convo-texts-list").append('<div class="text other-sender"><span>' + e.message + "</span><p>" + moment(Date.now()).fromNowOrNow() + "</p></div>"), null != $(".convo-texts-list .text:last-child").offset() && $(".convo-texts-list").animate({
                scrollTop: $(".convo-texts-list")[0].scrollHeight - $(".convo-texts-list")[0].clientHeight
            }, 200))
        }
        null == Y && (Y = d.GetData("messages")), null == j && (j = d.GetData("myData").phone), d.AddData("messages", {
            sender: e.sender,
            receiver: j,
            message: e.message,
            sent_time: e.sent_time,
            sender_read: 0,
            receiver_read: 0
        })
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "receiveText":
                H(t.data.data.sender, t.data.data.text)
        }
    })), $("#screen-content").on("click", ".convo-top-bar .convo-action-addcontact", (function(t) {
        var e = $("#message-convo-container").data("data");
        $("#convo-add-contact-number").val(e.number)
    })), $("#screen-content").on("submit", "#convo-add-contact", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray(),
            n = e[0].value,
            a = e[1].value;
        $.post(o.ROOT_ADDRESS + "/CreateContact", JSON.stringify({
            name: n,
            number: a
        }), (function(t) {
            t ? (null == J && (J = new Array), d.AddData("contacts", {
                name: n,
                number: a,
                index: J.length
            }), M.Modal.getInstance($("#convo-add-contact-modal")).close(), $("#convo-add-contact-name").val(""), $("#convo-add-contact-number").val("555-555-5555"), h.Alert("Contact Added"), qe.RefreshApp()) : h.Alert("Error Adding Contact")
        }))
    })), $("#screen-content").on("click", ".convo-top-bar .convo-action-call", (function(t) {
        var e = $("#message-convo-container").data("data");
        $(B.CreateCall((e.number), !1, !1))
    })), $("#screen-content").on("submit", "#convo-new-text", (function(t) {
        t.preventDefault();
        var e = $("#message-convo-container").data("data"),
            n = $(t.currentTarget).serializeArray(),
            a = [{
                value: e.number
            }, {
                value: n[0].value
            }];
        K.SendNewText(a, (function(t) {
            var msg = n[0].value.replace(/</g, '');
            t && ($(".convo-texts-list").append('<div class="text me-sender"><span>' + msg + "</span><p>" + moment(Date.now()).fromNowOrNow() + "</p></div>"), h.Alert("Message Sent"), $("#convo-input").val(""), null != $(".convo-texts-list .text:last-child").offset() && $(".convo-texts-list").animate({
                scrollTop: $(".convo-texts-list")[0].scrollHeight - $(".convo-texts-list")[0].clientHeight
            }, 200))
        }))
    })), $("#screen-content").on("click", "#convo-delete-all", (function(t) {
        t.preventDefault();
        var e = $("#message-convo-container").data("data");
        $.post(o.ROOT_ADDRESS + "/DeleteConversation", JSON.stringify({
            number: e.number
        }), (function(t) {
            if (t) {
                var n = Y.filter((function(t) {
                    return t.sender != e.number && t.receiver != e.number
                }));
                d.StoreData("messages", n), h.Alert("Conversation Deleted"), qe.GoBack()
            } else h.Alert("Error Deleting Conversation")
        }))
    })), window.addEventListener("message-convo-open-app", (function(t) {
        j = d.GetData("myData").phone, J = d.GetData("contacts"), Y = d.GetData("messages"), $("#message-convo-container").data("data", t.detail);
        var e = Y.filter((function(e) {
                return e.sender == t.detail.number && e.receiver == j || e.sender == j && e.receiver == t.detail.number
            })),
            n = J.filter((function(e) {
                return e.number == t.detail.number
            }))[0];
        null != n ? ($(".convo-action-addcontact").hide(), $(".convo-top-number").html(n.name), $(".convo-top-bar").attr("class", "convo-top-bar other-" + n.name[0])) : ($(".convo-action-addcontact").show(), $(".convo-top-number").html(t.detail.number)), $(".convo-texts-list").html(""), $.each(e, (function(t, e) {
            var a = new Date(e.sent_time);
            e.sender == j ? ($(".convo-texts-list").append('<div class="text me-sender"><span>' + e.message + "</span><p>" + moment(a).fromNowOrNow() + "</p></div>"), e.receiver == j && (null != n ? $(".convo-texts-list").append('<div class="text other-sender"><span class=" other-' + n.name[0] + '">' + e.message + "</span><p>" + moment(a).fromNowOrNow() + "</p></div>") : $(".convo-texts-list").append('<div class="text other-sender"><span>' + e.message + "</span><p>" + moment(a).fromNowOrNow() + "</p></div>"))) : null != n ? $(".convo-texts-list").append('<div class="text other-sender"><span class=" other-' + n.name[0] + '">' + e.message + "</span><p>" + moment(a).fromNowOrNow() + "</p></div>") : $(".convo-texts-list").append('<div class="text other-sender"><span>' + e.message + "</span><p>" + moment(a).fromNowOrNow() + "</p></div>")
        })), null != $(".convo-texts-list .text:last-child").offset() && $(".convo-texts-list").animate({
            scrollTop: $(".convo-texts-list .text:last-child").offset().top
        }, 25)
    })), window.addEventListener("message-convo-close-app", (function(t) {
        j = null, J = null, Y = null, $("#message-convo-container").removeData("data"), $(".convo-texts-list").html(""), $(".convo-top-bar").attr("class", "convo-top-bar")
    }));
    var V = {
            ReceiveText: H
        },
        X = null,
        W = null,
        Z = null;

    function Q(t, e) {
        var lol = t[1].value.replace(/</g, '');
        $.post(o.ROOT_ADDRESS + "/SendText", JSON.stringify({
            receiver: t[0].value,
            message: lol
        }), (function(t) {
            null != t ? (null == Z && (Z = new Array), d.AddData("messages", {
                sender: X,
                receiver: t.receiver,
                message: t.message,
                sent_time: t.sent_time,
                sender_read: 0,
                receiver_read: 0
            }), e(!0)) : (h.Alert("Unable To Send Text"), e(!1))
        }))
    }
    $("#screen-content").on("click", ".messages-list .message", (function(t) {
        qe.OpenApp("message-convo", $(t.currentTarget).data("message"), !1, !0)
    })), $("#screen-content").on("change", "#message-new-contact", (function(t) {
        var e = $(t.currentTarget).val();
        $("#message-new-number").val(e)
    })), $("#screen-content").on("submit", "#message-new-msg", (function(t) {
        t.preventDefault(), Q($(t.currentTarget).serializeArray(), (function(t) {
            t && (M.Modal.getInstance($("#messages-new-modal")).close(), h.Alert("Message Sent"), qe.RefreshApp())
        }))
    })), window.addEventListener("message-open-app", (function(t) {
        X = d.GetData("myData").phone, W = d.GetData("contacts"), Z = d.GetData("messages"), $.post(o.ROOT_ADDRESS + "/ClearUnread", JSON.stringify({
            app: "message"
        }));
        var e = new Array;
        $.each(Z, (function(t, n) {
            var a = new Object;
            n.sender == X ? a.number = n.receiver : a.number = n.sender, a.message = n.message, a.receiver = n.receiver, a.sender = n.sender, a.time = new Date(n.sent_time);
            var o = e.filter((function(t) {
                return t.number === a.number
            }))[0];
            null == o ? e.push(a) : a.time > o.time && $.each(e, (function(t, n) {
                if (n == o) return e[t] = a, !1
            }))
        })), e.sort(f.DateSortNewest), $("#message-container .inner-app .messages-list").html(""), $.each(e, (function(t, e) {
            var n = null;
            null != W && (n = W.filter((function(t) {
                return t.number == e.number
            }))[0]), null == n ? $("#message-container .inner-app .messages-list").append('<div class="message waves-effect"><div class="text-avatar">#</div><div class="text-name">' + e.number + '</div><div class="text-message">' + e.message + '</div><div class="text-time">' + moment(e.time).fromNowOrNow() + "</div></div>") : $("#message-container .inner-app .messages-list").append('<div class="message waves-effect"><div class="text-avatar other-' + n.name[0].toString().toLowerCase() + '">' + n.name[0] + '</div><div class="text-name">' + n.name + '</div><div class="text-message"> ' + e.message + '</div><div class="text-time">' + moment(e.time).fromNowOrNow() + "</div></div>"), $(".messages-list .message:last-child").data("message", e)
        }))
    })), window.addEventListener("message-open-app", (function(t) {
        $("#message-new-contact").html(""), $("#message-new-contact").append('<option value="">Choose Contact</option>'), $.each(W, (function(t, e) {
            $("#message-new-contact").append('<option value="' + e.number + '">' + e.name + " (" + e.number + ")</option>")
        })), $("#message-new-number").val(""), $("#message-new-body").val("")
    }));
    var K = {
            SendNewText: Q,
            Convo: V
        },
        tt = null,
        et = null;

    function nt(t) {
        var e = /\B@[a-z0-9_-]+/gi,
            n = t.message.match(e);
        $.each(n, (function(e, n) {
            t.message = t.message.replace(n, '<span class="mention" data-mention="'.concat(n.replace("@", ""), '">').concat(n, "</span>"))
        })), e = /\B#[a-z0-9_-]+/gi, n = t.message.match(e), $.each(n, (function(e, n) {
            t.message = t.message.replace(n, '<span class="hashtag" data-hashtag="'.concat(n.replace("#", ""), '">').concat(n, "</span>"))
        })), $(".twitter-body").prepend('\n        <div class="tweet">\n            <div class="avatar other-'.concat(t.author[0].toString().toLowerCase(), '">').concat(t.author[0], '</div>\n            <div class="author">').concat(t.author, '</div>\n            <div class="body">').concat(t.message, '</div>\n            <div class="time" data-tooltip="').concat(moment(t.time).format("MM/DD/YYYY"), " ").concat(moment(t.time).format("hh:mmA"), '">').concat(moment(t.time).fromNowOrNow(), "</div>\n        </div>")), $(".twitter-body .tweet:first-child .time").tooltip({
            position: top
        }), $(".twitter-body .tweet:first-child").data("data", t)
    }

    function nt2(t) {
        var e = /\B@[a-z0-9_-]+/gi,
            n = t[1].match(e);
        $.each(n, (function(e, n) {
            t[1] = t[1].replace(n, '<span class="mention" data-mention="'.concat(n.replace("@", ""), '">').concat(n, "</span>"))
        })), e = /\B#[a-z0-9_-]+/gi, n = t[1].match(e), $.each(n, (function(e, n) {
            t[1] = t[1].replace(t[1], '<span class="hashtag" data-hashtag="'.concat(n.replace("#", ""), '">').concat(n, "</span>"))
        })), $(".twitter-body").prepend('\n        <div class="tweet">\n            <div class="avatar other-'.concat(t[0][0].toString().toLowerCase(), '">').concat(t[0][0], '</div>\n            <div class="author">').concat(t[0], '</div>\n            <div class="body">').concat(t[1], '</div>\n            <div class="time" data-tooltip="').concat(moment(t.time).format("MM/DD/YYYY"), " ").concat(moment(t[2]).format("hh:mmA"), '">').concat(moment(t[2]).fromNowOrNow(), "</div>\n        </div>")), $(".twitter-body .tweet:first-child .time").tooltip({
            position: top
        }), $(".twitter-body .tweet:first-child").data("data", t)
    }

    function at(t) {
        null != et && clearTimeout(et), null == tt && (tt = d.GetData("tweets")), d.AddData("tweets", t)/*, $(".twitter-alert-header").find("span").html(t.author), $(".twitter-alert-body").html(t.message), $(".twitter-alert").fadeIn(), et = setTimeout((function() {
            $(".twitter-alert").fadeOut("normal", (function() {
                $(".twitter-alert-header").find("span").html(""), $(".twitter-alert-body").html(""), et = null
            }))
        }), 3e3),*/, "twitter" === qe.GetCurrentApp() && nt2(t)
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "ReceiveNewTweet":
                at(t.data.tweet)
        }
    })), $("#screen-content").on("submit", "#new-tweet", (function(t) {
        t.preventDefault();
        var m = d.GetData('myData');
        var e = $(t.currentTarget).serializeArray(),
            n = {
                author: m.name,
                message: e[0].value,
                time: Date.now()
            };
        d.AddData("tweets", n);
        var a = /\B@[a-z0-9_-]+/gi,
            r = n.message.match(a);
        $.each(r, (function(t, e) {
            n.message = n.message.replace(e, '<span class="mention" data-mention="'.concat(e.replace("@", ""), '">').concat(e, "</span>"))
        })), a = /\B#[a-z0-9_-]+/gi;
        var i = n.message.match(a);
        $.each(i, (function(t, e) {
            n.message = n.message.replace(e, '<span class="hashtag" data-hashtag="'.concat(e.replace("#", ""), '">').concat(e, "</span>"))
        })), $.post(o.ROOT_ADDRESS + "/NewTweet", JSON.stringify({
            message: e[0].value,
            time: n.time,
            mentions: r,
            hashtags: i
        }), (function(t) {
            t ? (n.author, /*nt(n),*/ M.Modal.getInstance($("#send-tweet-modal")).close(), $("#new-tweet-msg").val(""), h.Alert("Tweet Sent")) : h.Alert("Failed Sending Tweet")
        }))
    })), $("#screen-content").on("click", ".tweet .mention", (function(t) {
        var e = $(t.currentTarget).data("mention");
        $("#new-tweet-msg").val("@" + e + " "), M.Modal.getInstance($("#send-tweet-modal")).open()
    })), $("#screen-content").on("click", ".twitter-body .author", (function(t) {
        var e = $(t.currentTarget).html();
        $("#new-tweet-msg").val("@" + e + " "), M.Modal.getInstance($("#send-tweet-modal")).open()
    })), window.addEventListener("twitter-open-app", (function(t) {
        null == (tt = d.GetData("tweets")) && (tt = new Array), tt.sort(f.DateSortOldest), $(".twitter-body").html(""), $.each(tt, (function(t, e) {
            nt(e)
        }))
    }));
    var ot = {
            ReceiveNewTweet: at
        },
        rt = null;

    function it(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        $("#advert-".concat(t.id)).length < 1 ? ($("#yp-body").prepend('<div class="yp-post" id="advert-'.concat(t.id, '"><div class="yp-post-header"><span class="yp-author">').concat(t.author, '</span><span class="yp-phone">').concat(t.number, '</span></div><div class="yp-post-body"><div class="yp-post-title">').concat(t.title, '</div><div class="yp-post-message">').concat(t.message, '</div></div><div class="yp-post-timestamp">').concat(moment(t.date).fromNowOrNow(), "</div></div>")), $("#yp-body .yp-post:first-child").data("advert", t), e && lt(t)) : ($("#advert-".concat(t.id)).find(".yp-post-title").html(t.title), $("#advert-".concat(t.id)).find(".yp-post-message").html(t.number), $("#advert-".concat(t.id)).find(".yp-post-timestamp").html(moment(t.date).fromNowOrNow()), $("#advert-".concat(t.id)).data("advert", t), $("#advert-".concat(t.id)).parent().prepend($("#advert-".concat(t.id))), e && function(t, e) {
            null == rt && (rt = d.GetData("adverts"));
            $.each(rt, (function(n, a) {
                a.id !== t || d.UpdateData("adverts", n, e)
            }))
        }(t.id, t))
    }

    function garagesystem(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        $("#garage-".concat(t.id)).length < 1 ? ($("#garage-body").prepend('<div class="garage-post" id="garage-'.concat(t.id, '"><div class="garage-post-header"><span class="garage-author">').concat(t.author, '</span><span class="garage-phone">').concat(t.number, '</span></div><div class="garage-post-body"><div class="garage-post-title">').concat(t.title, '</div><div class="garage-post-message">').concat(t.message, ''), "</div></div>"), $("#garage-body .garage-post:first-child").data("garage", t), e && lt(t)) : ($("#garage-".concat(t.id)).find(".garage-post-title").html(t.title), $("#garage-".concat(t.id)).find(".garage-post-message").html(t.number), $("#garage-".concat(t.id)).find(".garage-post-timestamp").html(moment(t.date).fromNowOrNow()), $("#garage-".concat(t.id)).data("garage", t), $("#garage-".concat(t.id)).parent().prepend($("#garage-".concat(t.id))), e && function(t, e) {
            null == rt && (rt = d.GetData("garage"));
            $.each(rt, (function(n, a) {
                a.id !== t || d.UpdateData("garage", n, e)
            }))
        }(t.id, t))
    }

    function pdmowes(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        $("#pdm-".concat(t.id)).length < 1 ? ($("#pdm-body").prepend('<div class="pdm-post" id="pdm-'.concat(t.id, '"><div class="pdm-post-header"><span class="pdm-author">').concat(t.author, '</span><span class="pdm-phone">').concat(t.number, '</span></div><div class="pdm-post-body"><div class="pdm-post-title">').concat(t.title, '</div><div class="pdm-post-message">').concat(t.message, ''), "</div></div>"), $("#pdm-body .pdm-post:first-child").data("pdm", t), e && lt(t)) : ($("#pdm-".concat(t.id)).find(".pdm-post-title").html(t.title), $("#pdm-".concat(t.id)).find(".pdm-post-message").html(t.number), $("#pdm-".concat(t.id)).find(".pdm-post-timestamp").html(moment(t.date).fromNowOrNow()), $("#pdm-".concat(t.id)).data("pdm", t), $("#pdm-".concat(t.id)).parent().prepend($("#pdm-".concat(t.id))), e && function(t, e) {
            null == rt && (rt = d.GetData("pdm"));
            $.each(rt, (function(n, a) {
                a.id !== t || d.UpdateData("pdm", n, e)
            }))
        }(t.id, t))
    }

    function lt(t) {
        d.AddData("adverts", t)
    }
    $("#screen-content").on("keyup", "#yp-search input", (function(t) {
        t.preventDefault();
        var n = $(t.currentTarget).val().toUpperCase();
        "" !== n ? $.each($(t.currentTarget).parent().parent().find("#yp-body").find(".yp-post"), (function(t, e) {
            var a = $(e).data("advert");
            a.author.toUpperCase().includes(n) || a.phone || a.title.toUpperCase().includes(n) || a.message.toUpperCase().includes(n) ? $(e).fadeIn() : $(e).fadeOut()
        })) : $.each($(t.currentTarget).parent().parent().find("#yp-body").children(), (function(t, e) {
            $(e).fadeIn()
        }))
    })),
    $("#screen-content").on("keyup", "#pdm-search input", (function(t) {
        t.preventDefault();
        var n = $(t.currentTarget).val().toUpperCase();
        "" !== n ? $.each($(t.currentTarget).parent().parent().find("#pdm-body").find(".pdm-post"), (function(t, e) {
            var a = $(e).data("pdm");
            a.author.toUpperCase().includes(n) || a.phone || a.title.toUpperCase().includes(n) || a.message.toUpperCase().includes(n) ? $(e).fadeIn() : $(e).fadeOut()
        })) : $.each($(t.currentTarget).parent().parent().find("#pdm-body").children(), (function(t, e) {
            $(e).fadeIn()
        }))
    })),
        $("#screen-content").on("keyup", "#garage-search input", (function(t) {
            t.preventDefault();
            var n = $(t.currentTarget).val().toUpperCase();
            "" !== n ? $.each($(t.currentTarget).parent().parent().find("#garage-body").find(".garage-post"), (function(t, e) {
                var a = $(e).data("garage");
                a.author.toUpperCase().includes(n) || a.phone || a.title.toUpperCase().includes(n) || a.message.toUpperCase().includes(n) ? $(e).fadeIn() : $(e).fadeOut()
            })) : $.each($(t.currentTarget).parent().parent().find("#garage-body").children(), (function(t, e) {
                $(e).fadeIn()
            }))

        
    })), $("#screen-content").on("click", "#yp-body .yp-phone", (function(t) {
        $(t.currentTarget).html() != d.GetData("myData").phone && (qe.OpenApp("phone", null, !1), B.CreateCall($(t.currentTarget).html(), !1, !1))
    })), $("#screen-content").on("click", "#delete-ad", (function(t) {
        $.post(o.ROOT_ADDRESS + "/DeleteAd", JSON.stringify({}), (function() {
            $("#yp-body").find(".yp-post-owned").fadeOut("normal", (function() {
                $("#yp-body").find(".yp-post-owned").remove(), h.Alert("Advertisement Deleted")
            })), $("#delete-ad").fadeOut()
        }))
    })), $("#screen-content").on("submit", "#new-advert", (function(t) {
        t.preventDefault();
        var n = $(t.currentTarget).serializeArray(),
            a = d.GetData("myData"),
            r = Date.now(),
            i = n[0].value,
            l = n[1].value;
        $.post(o.ROOT_ADDRESS + "/NewAd", JSON.stringify({
            date: r,
            title: i,
            message: l
        }), (function() {
            it({
                id: a.id,
                author: a.name,
                phone: a.phone,
                date: r,
                title: i,
                message: l
            }), M.Modal.getInstance($("#create-advert-modal")).close(), qe.RefreshApp(), $("#new-advert").trigger("reset"), $("#advert-".concat(a.id)).addClass("yp-post-owned"), $("#delete-ad").fadeIn(), h.Alert("Advertisement Posted")
        }))
    })), window.addEventListener("yp-open-app", (function() {
        var t = d.GetData("myData").id;
        y = d.GetData('adverts');

        (rt = y), $("#yp-body").html(""), $.each(rt, (function(e, n) {
            it(n, !1), n.id == t && ($("#yp-body .yp-post:first-child").addClass("yp-post-owned"), $("#delete-ad").show())
        }))
    }));

    $("#screen-content").on("click", "#reload-garage", (function(t) {
        $.post(o.ROOT_ADDRESS + "/RefreshGarage"), h.Alert("Reloaded"), $(t.currentTarget).hasClass("disabled") || ($(".footer-button").addClass("disabled"), Ie()),  qe.OpenApp("garage")
    }))

    window.addEventListener("garage-open-app", (function() {
        var t = d.GetData("myData").id;
        y = d.GetData('garage');

        (rt = y), $("#garage-body").html(""), $.each(rt, (function(e, n) {
            garagesystem(n, !1), n.id == t && ($("#garage-body .yp-post:first-child").addClass("garage-post-owned"))
        }))
    }));

    $("#screen-content").on("click", "#reload-pdm", (function(t) {
        $.post(o.ROOT_ADDRESS + "/RefreshPDM"), h.Alert("Reloaded"), $(t.currentTarget).hasClass("disabled") || ($(".footer-button").addClass("disabled"), Ie()),  qe.OpenApp("pdm")
    }))

    window.addEventListener("pdm-open-app", (function() {
        var t = d.GetData("myData").id;
        y = d.GetData('pdm');

        (rt = y), $("#pdm-body").html(""), $.each(rt, (function(e, n) {
            pdmowes(n, !1), n.id == t && ($("#pdm-body .yp-post:first-child").addClass("pdm-post-owned"))
        }))
    }));

    var ct = {
        ReceiveNewAdvert: function(t) {
            lt(t), "ads" === qe.GetCurrentApp() && it(t)
        },
        DeleteAdvert: function(t) {
            $("#advert-".concat(t)).length < 1 && ("ads" === qe.GetCurrentApp() ? $("#advert-".concat(t)).fadeOut("normal", (function() {
                $("#advert-".concat(t)).remove()
            })) : $("#advert-".concat(t)).remove(), function(t) {
                null == rt && (rt = d.GetData("adverts")), $.each(rt, (function(e, n) {
                    n.id !== t || d.RemoveData("adverts", e)
                }))
            }(t))
        }
    };
    $("#screen-content").on("submit", "#send-quick-pay", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray();
        $.post(o.ROOT_ADDRESS + "/Transfer", JSON.stringify({
            account: e[0].value,
            destination: e[1].value,
            amount: e[2].value
        }), (function(t) {
            t ? (h.Alert("Transfer Submitted, Will Be Processed Within 3 Days (3 hours)"), qe.GoBack()) : h.Alert("Unable To Process Transfer")
        }))
    })), window.addEventListener("bank-transfer-open-app", (function(t) {
        var e = d.GetData("bank-accounts"),
            n = new Array;
        n.push({
            label: "Personal Accounts",
            data: e.filter((function(t) {
                return 1 === t.type
            }))
        }), n.push({
            label: "Business Accounts",
            data: e.filter((function(t) {
                return 2 === t.type
            }))
        }), n.push({
            label: "Government Accounts",
            data: e.filter((function(t) {
                return 3 === t.type
            }))
        }), $.each(n, (function(t, e) {
            $("#bank-transfer-accounts").append('<optgroup label="'.concat(e.label, '"></optgroup>')), $.each(e.data, (function(t, e) {
                $("#bank-transfer-accounts").append('<option value="'.concat(e.id, '">Account #').concat(e.id, " ").concat(f.FormatCurrency(e.balance), "</option>"))
            }))
        })), $("#bank-transfer-accounts").formSelect();
        var a = d.GetData("bank-transfers");
        $.each(a, (function(t, e) {
            $.each(e, (function(t, e) {
                switch (e.status) {
                    case 1:
                        $("#bank-transfer-history table tbody").append('\n                        <tr data-tooltip="Transfered on '.concat(moment(e.date).format("l"), " at ").concat(moment(e.date).format("h:mm a"), '">\n                            <td class="transfer-status completed">Completed</td>\n                            <td>').concat(moment(e.date).format("l"), "</td>\n                            <td>").concat(f.FormatCurrency(e.amount), "</td>\n                            <td>").concat(e.origin, "</td>\n                            <td>").concat(e.destination, "</td>\n                        </tr>\n                    "));
                        break;
                    case 2:
                        $("#bank-transfer-history table tbody").append('\n                        <tr data-tooltip="Cancelled on '.concat(moment(e.date).format("l"), " at ").concat(moment(e.date).format("h:mm a"), '">\n                            <td class="transfer-status cancelled">Cancelled</td>\n                            <td>').concat(moment(e.date).format("l"), "</td>\n                            <td>").concat(f.FormatCurrency(e.amount), "</td>\n                            <td>").concat(e.origin, "</td>\n                            <td>").concat(e.destination, "</td>\n                        </tr>\n                    "));
                        break;
                    default:
                        $("#bank-transfer-history table tbody").append('\n                            <tr data-tooltip="Transfers on '.concat(moment(e.date).format("l"), " at ").concat(moment(e.date).format("h:mm a"), '">\n                                <td class="transfer-status pending">Pending</td>\n                                <td>').concat(moment(e.date).format("l"), "</td>\n                                <td>").concat(f.FormatCurrency(e.amount), "</td>\n                                <td>").concat(e.origin, "</td>\n                                <td>").concat(e.destination, "</td>\n                            </tr>\n                        "))
                }
                $("#bank-transfer-history table tbody tr:last-child").tooltip({
                    enterDelay: 0,
                    exitDelay: 0,
                    inDuration: 0
                })
            }))
        })), $("#bank-app-page").animate({
            height: "100%"
        }, {
            duration: 1e3
        })
    })), window.addEventListener("bank-transfer-custom-close-app", (function(t) {
        $("#bank-app-page").animate({
            height: "0%"
        }, {
            duration: 1e3
        }).promise().then((function() {
            window.dispatchEvent(new CustomEvent("custom-close-finish", {
                detail: t.detail
            }))
        }))
    })), window.addEventListener("bank-transfer-close-app", (function() {}));
    $("#screen-content").on("submit", "#send-maze-pay", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray();
        $.post(o.ROOT_ADDRESS + "/MazePay", JSON.stringify({
            destination: e[0].value,
            amount: e[1].value
        }), (function(t) {
            t ? (d.AddData("maze-pay", t), h.Alert("Money Has Been Transferred"), qe.GoBack()) : h.Alert("Unable To Process Payment")
        }))
    })), window.addEventListener("bank-mp-open-app", (function(t) {
        $("#bank-app-page").animate({
            height: "100%"
        }, {
            duration: 1e3
        })
    })), window.addEventListener("bank-mp-custom-close-app", (function(t) {
        $("#bank-app-page").animate({
            height: "0%"
        }, {
            duration: 1e3
        }).promise().then((function() {
            window.dispatchEvent(new CustomEvent("custom-close-finish", {
                detail: t.detail
            }))
        }))
    })), window.addEventListener("bank-mp-close-app", (function() {})), $("#screen-content").on("change", "#bank-transaction-accounts", (function(t) {
        var e = $(t.currentTarget).val(),
            n = d.GetData("bank-accounts").filter((function(t) {
                return t.id == e
            }))[0];
        qe.OpenApp("bank-transaction", n, !0, !0, !0)
    })), window.addEventListener("bank-transaction-open-app", (function(t) {
        var e = t.detail;
        $.post(o.ROOT_ADDRESS + "/GetBankTransactions", JSON.stringify({
            account: e.id
        }), (function(t) {
            $("#bank-app-page").addClass("type-".concat(e.type));
            var n = d.GetData("bank-accounts"),
                a = new Array;
            a.push({
                label: "Personal Accounts",
                data: n.filter((function(t) {
                    return 1 === t.type
                }))
            }), a.push({
                label: "Business Accounts",
                data: n.filter((function(t) {
                    return 2 === t.type
                }))
            }), a.push({
                label: "Government Accounts",
                data: n.filter((function(t) {
                    return 3 === t.type
                }))
            }), $.each(a, (function(t, n) {
                $("#bank-transaction-accounts").append('<optgroup label="'.concat(n.label, '"></optgroup>')), $.each(n.data, (function(t, n) {
                    $("#bank-transaction-accounts").append('<option value="'.concat(n.id, '">Account #').concat(n.id, " ").concat(f.FormatCurrency(n.balance), "</option>")), n.id == e.id && $("#bank-transaction-accounts option:last-child").attr("selected", "selected")
                }))
            })), $("#bank-transaction-accounts").formSelect(), null != t && t.length > 0 ? $.each(t, (function(t, e) {
                switch (e.type) {
                    case 1:
                    case 2:
                        $(".transaction-body table").append("<tr><td>".concat(moment(e.date).format("l"), " at ").concat(moment(e.date).format("h:mm a"), '</td><td class="trans-negative">').concat(f.FormatCurrency(e.amount), "</td><td>").concat(e.note, "</td></tr>"));
                        break;
                    case 3:
                    default:
                        $(".transaction-body table").append("<tr><td>".concat(moment(e.date).format("l"), " at ").concat(moment(e.date).format("h:mm a"), '</td><td class="trans-positive">').concat(f.FormatCurrency(e.amount), "</td><td>").concat(e.note, "</td></tr>"))
                }
            })) : $(".transaction-body").html('<div class="no-transactions">No Recent Transactions</div>'), $("#bank-app-page").animate({
                height: "100%"
            }, {
                duration: 1e3
            }).promise().then((function() {
                $(".select-wrapper, .no-transactions").fadeIn("fast")
            }))
        }))
    })), window.addEventListener("bank-transaction-custom-close-app", (function(t) {
        $(".select-wrapper, .no-transactions").fadeOut("fast"), $("#bank-app-page").animate({
            height: "0%"
        }, {
            duration: 1e3
        }).promise().then((function() {
            window.dispatchEvent(new CustomEvent("custom-close-finish", {
                detail: t.detail
            }))
        }))
    })), window.addEventListener("bank-transaction-close-app", (function() {}));
    var pt = null;
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "BankBalanceUpdate":
                var e = d.GetData("bank-accounts");
                $.each(e, (function(e, n) {
                    if (n.id === t.data.account) return d.UpdateObjectData("bank-accounts", "id", t.data.account, "balance", n.balance + t.data.balance), !1
                }))
        }
    })), $("#screen-content").on("click", ".account", (function(t) {
        qe.OpenApp("bank-transaction", $(t.currentTarget).data("account"), !1, !0, !0)
    })), $("#screen-content").on("keyup keydown blur", "#target-account", (function(t) {
        switch (t.which) {
            case 69:
            case 107:
            case 109:
            case 110:
            case 187:
            case 189:
            case 190:
                e.preventDefault();
                break;
            default:
                "" != $(t.currentTarget).val() && $(t.currentTarget).val(parseInt($(t.currentTarget).val()))
        }
    })), $("#screen-content").on("click", ".bank-quick-nav", (function(t) {
        if (!$(t.currentTarget).hasClass("disabled")) {
            var e = $(t.currentTarget).data("type");
            if ("back" != e) switch ($(t.currentTarget).addClass("disabled"), e) {
                case "atm":
                    h.Alert("Marked Nearest ATM On Your GPS"), $.post(o.ROOT_ADDRESS + "/FindNearestAtm", JSON.stringify({}));
                    break;
                case "bank":
                    h.Alert("Marked Nearest Branch On Your GPS"), $.post(o.ROOT_ADDRESS + "/FindNearestBranch", JSON.stringify({}))
            }
            $(".quick-actions").animate({
                height: "0%"
            }, {
                duration: 500
            }).promise().then((function() {
                $(".bank-quick-action").show(), $(".bank-quick-nav").hide(), $(".quick-actions").animate({
                    height: "20%"
                }, {
                    duration: 500
                }).promise().then((function() {
                    $(".bank-quick-nav.disabled").removeClass("disabled")
                }))
            }))
        }
    })), $("#screen-content").on("click", ".bank-quick-action", (function(t) {
        if (!$(t.currentTarget).hasClass("disabled")) {
            var e = $(t.currentTarget).data("nav");
            null != e ? ($(t.currentTarget).addClass("disabled"), qe.OpenApp(e, null, !1, !0, !0)) : $(".quick-actions").animate({
                height: "0%"
            }, {
                duration: 500
            }).promise().then((function() {
                $(".bank-quick-action").hide(), $(".bank-quick-nav").show(), $(".quick-actions").animate({
                    height: "20%"
                }, {
                    duration: 500
                }).promise().then((function() {
                    $(void 0).removeClass("disabled")
                }))
            }))
        }
    })), window.addEventListener("bank-open-app", (function() {
        var t = d.GetData("myData");
        $(".message-name").html(t.name), $(".message-text").html("".concat(moment().format("MMMM Do YYYY, h:mm:ss a"))), pt = setInterval((function() {
            $(".message-text").html("".concat(moment().format("MMMM Do YYYY, h:mm:ss a")))
        }), 1e3);
        var e = d.GetData("bank-accounts");
        $(".accounts").html(""), $.each(e, (function(t, e) {
            1 === e.rank ? $(".accounts").append('<div class="account type-'.concat(e.type, '" data-tooltip="Account #').concat(e.id, " - Balance: ").concat(f.FormatCurrency(e.balance), '"><div class="account-label"><div class="bank-label-name">').concat(e.label, '</div><small>Account Owner</small></div><div class="account-balance">').concat(f.FormatCurrency(e.balance), "</div></div>")) : $(".accounts").append('<div class="account type-'.concat(e.type, '" data-tooltip="Account #').concat(e.id, " - Balance: ").concat(f.FormatCurrency(e.balance), '"><div class="account-label"><div class="bank-label-name">').concat(e.label, '</div><small>Authorized User</small></div><div class="account-balance">').concat(f.FormatCurrency(e.balance), "</div></div>")), $(".accounts .account:last-child").data("account", e)
        })), $(".account").tooltip({
            enterDelay: 0,
            exitDelay: 0,
            inDuration: 0
        }), $(".quick-actions").animate({
            height: "20%"
        }, {
            duration: 1e3
        }).promise().then((function() {
            $(".bank-quick-action").fadeIn("normal").css("display", "inline-block")
        })), x.ClearUnread()
    })), window.addEventListener("bank-custom-close-app", (function(t) {
        $("#bank-container").hasClass("disabled") || ($("#bank-container").addClass("disabled"), $(".bank-quick-action").fadeOut("normal").promise().then((function() {
            $(".quick-actions").animate({
                height: "100%"
            }, {
                duration: 1e3
            }).promise().then((function() {
                window.dispatchEvent(new CustomEvent("custom-close-finish", {
                    detail: t.detail
                }))
            }))
        })))
    })), window.addEventListener("bank-close-app", (function() {
        clearInterval(pt)
    }));
    var dt = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0
        },
        st = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
        },
        ut = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
        ft = {
            CSS: {},
            springs: {}
        };

    function bt(t, e, n) {
        return Math.min(Math.max(t, e), n)
    }

    function mt(t, e) {
        return t.indexOf(e) > -1
    }

    function ht(t, e) {
        return t.apply(null, e)
    }
    var gt = {
        arr: function(t) {
            return Array.isArray(t)
        },
        obj: function(t) {
            return mt(Object.prototype.toString.call(t), "Object")
        },
        pth: function(t) {
            return gt.obj(t) && t.hasOwnProperty("totalLength")
        },
        svg: function(t) {
            return t instanceof SVGElement
        },
        inp: function(t) {
            return t instanceof HTMLInputElement
        },
        dom: function(t) {
            return t.nodeType || gt.svg(t)
        },
        str: function(t) {
            return "string" == typeof t
        },
        fnc: function(t) {
            return "function" == typeof t
        },
        und: function(t) {
            return void 0 === t
        },
        hex: function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        },
        rgb: function(t) {
            return /^rgb/.test(t)
        },
        hsl: function(t) {
            return /^hsl/.test(t)
        },
        col: function(t) {
            return gt.hex(t) || gt.rgb(t) || gt.hsl(t)
        },
        key: function(t) {
            return !dt.hasOwnProperty(t) && !st.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
        }
    };

    function xt(t) {
        var e = /\(([^)]+)\)/.exec(t);
        return e ? e[1].split(",").map((function(t) {
            return parseFloat(t)
        })) : []
    }

    function vt(t, e) {
        var n = xt(t),
            a = bt(gt.und(n[0]) ? 1 : n[0], .1, 100),
            o = bt(gt.und(n[1]) ? 100 : n[1], .1, 100),
            r = bt(gt.und(n[2]) ? 10 : n[2], .1, 100),
            i = bt(gt.und(n[3]) ? 0 : n[3], .1, 100),
            l = Math.sqrt(o / a),
            c = r / (2 * Math.sqrt(o * a)),
            p = c < 1 ? l * Math.sqrt(1 - c * c) : 0,
            d = 1,
            s = c < 1 ? (c * l - i) / p : -i + l;

        function u(t) {
            var n = e ? e * t / 1e3 : t;
            return n = c < 1 ? Math.exp(-n * c * l) * (d * Math.cos(p * n) + s * Math.sin(p * n)) : (d + s * n) * Math.exp(-n * l), 0 === t || 1 === t ? t : 1 - n
        }
        return e ? u : function() {
            var e = ft.springs[t];
            if (e) return e;
            for (var n = 0, a = 0;;)
                if (1 === u(n += 1 / 6)) {
                    if (++a >= 16) break
                } else a = 0;
            var o = n * (1 / 6) * 1e3;
            return ft.springs[t] = o, o
        }
    }

    function wt(t) {
        return void 0 === t && (t = 10),
            function(e) {
                return Math.round(e * t) * (1 / t)
            }
    }
    var yt, kt, $t = function() {
            var t = 11,
                e = 1 / (t - 1);

            function n(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
                return 3 * e - 6 * t
            }

            function o(t) {
                return 3 * t
            }

            function r(t, e, r) {
                return ((n(e, r) * t + a(e, r)) * t + o(e)) * t
            }

            function i(t, e, r) {
                return 3 * n(e, r) * t * t + 2 * a(e, r) * t + o(e)
            }
            return function(n, a, o, l) {
                if (0 <= n && n <= 1 && 0 <= o && o <= 1) {
                    var c = new Float32Array(t);
                    if (n !== a || o !== l)
                        for (var p = 0; p < t; ++p) c[p] = r(p * e, n, o);
                    return function(t) {
                        return n === a && o === l ? t : 0 === t || 1 === t ? t : r(d(t), a, l)
                    }
                }

                function d(a) {
                    for (var l = 0, p = 1, d = t - 1; p !== d && c[p] <= a; ++p) l += e;
                    --p;
                    var s = l + (a - c[p]) / (c[p + 1] - c[p]) * e,
                        u = i(s, n, o);
                    return u >= .001 ? function(t, e, n, a) {
                        for (var o = 0; o < 4; ++o) {
                            var l = i(e, n, a);
                            if (0 === l) return e;
                            e -= (r(e, n, a) - t) / l
                        }
                        return e
                    }(a, s, n, o) : 0 === u ? s : function(t, e, n, a, o) {
                        var i, l, c = 0;
                        do {
                            (i = r(l = e + (n - e) / 2, a, o) - t) > 0 ? n = l : e = l
                        } while (Math.abs(i) > 1e-7 && ++c < 10);
                        return l
                    }(a, l, l + e, n, o)
                }
            }
        }(),
        zt = (yt = {
            linear: function() {
                return function(t) {
                    return t
                }
            }
        }, kt = {
            Sine: function() {
                return function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }
            },
            Circ: function() {
                return function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                }
            },
            Back: function() {
                return function(t) {
                    return t * t * (3 * t - 2)
                }
            },
            Bounce: function() {
                return function(t) {
                    for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            },
            Elastic: function(t, e) {
                void 0 === t && (t = 1), void 0 === e && (e = .5);
                var n = bt(t, 1, 10),
                    a = bt(e, .1, 2);
                return function(t) {
                    return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - a / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / a)
                }
            }
        }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(t, e) {
            kt[t] = function() {
                return function(t) {
                    return Math.pow(t, e + 2)
                }
            }
        })), Object.keys(kt).forEach((function(t) {
            var e = kt[t];
            yt["easeIn" + t] = e, yt["easeOut" + t] = function(t, n) {
                return function(a) {
                    return 1 - e(t, n)(1 - a)
                }
            }, yt["easeInOut" + t] = function(t, n) {
                return function(a) {
                    return a < .5 ? e(t, n)(2 * a) / 2 : 1 - e(t, n)(-2 * a + 2) / 2
                }
            }
        })), yt);

    function Dt(t, e) {
        if (gt.fnc(t)) return t;
        var n = t.split("(")[0],
            a = zt[n],
            o = xt(t);
        switch (n) {
            case "spring":
                return vt(t, e);
            case "cubicBezier":
                return ht($t, o);
            case "steps":
                return ht(wt, o);
            default:
                return ht(a, o)
        }
    }

    function Ct(t) {
        try {
            return document.querySelectorAll(t)
        } catch (t) {
            return
        }
    }

    function At(t, e) {
        for (var n = t.length, a = arguments.length >= 2 ? arguments[1] : void 0, o = [], r = 0; r < n; r++)
            if (r in t) {
                var i = t[r];
                e.call(a, i, r, t) && o.push(i)
            } return o
    }

    function St(t) {
        return t.reduce((function(t, e) {
            return t.concat(gt.arr(e) ? St(e) : e)
        }), [])
    }

    function Ot(t) {
        return gt.arr(t) ? t : (gt.str(t) && (t = Ct(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }

    function Tt(t, e) {
        return t.some((function(t) {
            return t === e
        }))
    }

    function Et(t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e
    }

    function Nt(t, e) {
        var n = Et(t);
        for (var a in t) n[a] = e.hasOwnProperty(a) ? e[a] : t[a];
        return n
    }

    function Ft(t, e) {
        var n = Et(t);
        for (var a in e) n[a] = gt.und(t[a]) ? e[a] : t[a];
        return n
    }

    function Mt(t) {
        return gt.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : gt.hex(t) ? function(t) {
            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, a) {
                    return e + e + n + n + a + a
                })),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
        }(t) : gt.hsl(t) ? function(t) {
            var e, n, a, o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                r = parseInt(o[1], 10) / 360,
                i = parseInt(o[2], 10) / 100,
                l = parseInt(o[3], 10) / 100,
                c = o[4] || 1;

            function p(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            if (0 == i) e = n = a = l;
            else {
                var d = l < .5 ? l * (1 + i) : l + i - l * i,
                    s = 2 * l - d;
                e = p(s, d, r + 1 / 3), n = p(s, d, r), a = p(s, d, r - 1 / 3)
            }
            return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * a + "," + c + ")"
        }(t) : void 0;
        var e, n
    }

    function Rt(t) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
        if (e) return e[1]
    }

    function It(t, e) {
        return gt.fnc(t) ? t(e.target, e.id, e.total) : t
    }

    function qt(t, e) {
        return t.getAttribute(e)
    }

    function Lt(t, e, n) {
        if (Tt([n, "deg", "rad", "turn"], Rt(e))) return e;
        var a = ft.CSS[e + n];
        if (!gt.und(a)) return a;
        var o = document.createElement(t.tagName),
            r = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
        r.appendChild(o), o.style.position = "absolute", o.style.width = 100 + n;
        var i = 100 / o.offsetWidth;
        r.removeChild(o);
        var l = i * parseFloat(e);
        return ft.CSS[e + n] = l, l
    }

    function Bt(t, e, n) {
        if (e in t.style) {
            var a = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                o = t.style[e] || getComputedStyle(t).getPropertyValue(a) || "0";
            return n ? Lt(t, o, n) : o
        }
    }

    function Gt(t, e) {
        return gt.dom(t) && !gt.inp(t) && (qt(t, e) || gt.svg(t) && t[e]) ? "attribute" : gt.dom(t) && Tt(ut, e) ? "transform" : gt.dom(t) && "transform" !== e && Bt(t, e) ? "css" : null != t[e] ? "object" : void 0
    }

    function Ut(t) {
        if (gt.dom(t)) {
            for (var e, n = t.style.transform || "", a = /(\w+)\(([^)]*)\)/g, o = new Map; e = a.exec(n);) o.set(e[1], e[2]);
            return o
        }
    }

    function _t(t, e, n, a) {
        var o = mt(e, "scale") ? 1 : 0 + function(t) {
                return mt(t, "translate") || "perspective" === t ? "px" : mt(t, "rotate") || mt(t, "skew") ? "deg" : void 0
            }(e),
            r = Ut(t).get(e) || o;
        return n && (n.transforms.list.set(e, r), n.transforms.last = e), a ? Lt(t, r, a) : r
    }

    function Pt(t, e, n, a) {
        switch (Gt(t, e)) {
            case "transform":
                return _t(t, e, a, n);
            case "css":
                return Bt(t, e, n);
            case "attribute":
                return qt(t, e);
            default:
                return t[e] || 0
        }
    }

    function jt(t, e) {
        var n = /^(\*=|\+=|-=)/.exec(t);
        if (!n) return t;
        var a = Rt(t) || 0,
            o = parseFloat(e),
            r = parseFloat(t.replace(n[0], ""));
        switch (n[0][0]) {
            case "+":
                return o + r + a;
            case "-":
                return o - r + a;
            case "*":
                return o * r + a
        }
    }

    function Jt(t, e) {
        if (gt.col(t)) return Mt(t);
        if (/\s/g.test(t)) return t;
        var n = Rt(t),
            a = n ? t.substr(0, t.length - n.length) : t;
        return e ? a + e : a
    }

    function Yt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function Ht(t) {
        for (var e, n = t.points, a = 0, o = 0; o < n.numberOfItems; o++) {
            var r = n.getItem(o);
            o > 0 && (a += Yt(e, r)), e = r
        }
        return a
    }

    function Vt(t) {
        if (t.getTotalLength) return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
            case "circle":
                return function(t) {
                    return 2 * Math.PI * qt(t, "r")
                }(t);
            case "rect":
                return function(t) {
                    return 2 * qt(t, "width") + 2 * qt(t, "height")
                }(t);
            case "line":
                return function(t) {
                    return Yt({
                        x: qt(t, "x1"),
                        y: qt(t, "y1")
                    }, {
                        x: qt(t, "x2"),
                        y: qt(t, "y2")
                    })
                }(t);
            case "polyline":
                return Ht(t);
            case "polygon":
                return function(t) {
                    var e = t.points;
                    return Ht(t) + Yt(e.getItem(e.numberOfItems - 1), e.getItem(0))
                }(t)
        }
    }

    function Xt(t, e) {
        var n = e || {},
            a = n.el || function(t) {
                for (var e = t.parentNode; gt.svg(e) && gt.svg(e.parentNode);) e = e.parentNode;
                return e
            }(t),
            o = a.getBoundingClientRect(),
            r = qt(a, "viewBox"),
            i = o.width,
            l = o.height,
            c = n.viewBox || (r ? r.split(" ") : [0, 0, i, l]);
        return {
            el: a,
            viewBox: c,
            x: c[0] / 1,
            y: c[1] / 1,
            w: i / c[2],
            h: l / c[3]
        }
    }

    function Wt(t, e) {
        function n(n) {
            void 0 === n && (n = 0);
            var a = e + n >= 1 ? e + n : 0;
            return t.el.getPointAtLength(a)
        }
        var a = Xt(t.el, t.svg),
            o = n(),
            r = n(-1),
            i = n(1);
        switch (t.property) {
            case "x":
                return (o.x - a.x) * a.w;
            case "y":
                return (o.y - a.y) * a.h;
            case "angle":
                return 180 * Math.atan2(i.y - r.y, i.x - r.x) / Math.PI
        }
    }

    function Zt(t, e) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            a = Jt(gt.pth(t) ? t.totalLength : t, e) + "";
        return {
            original: a,
            numbers: a.match(n) ? a.match(n).map(Number) : [0],
            strings: gt.str(t) || e ? a.split(n) : []
        }
    }

    function Qt(t) {
        return At(t ? St(gt.arr(t) ? t.map(Ot) : Ot(t)) : [], (function(t, e, n) {
            return n.indexOf(t) === e
        }))
    }

    function Kt(t) {
        var e = Qt(t);
        return e.map((function(t, n) {
            return {
                target: t,
                id: n,
                total: e.length,
                transforms: {
                    list: Ut(t)
                }
            }
        }))
    }

    function te(t, e) {
        var n = Et(e);
        if (/^spring/.test(n.easing) && (n.duration = vt(n.easing)), gt.arr(t)) {
            var a = t.length;
            2 === a && !gt.obj(t[0]) ? t = {
                value: t
            } : gt.fnc(e.duration) || (n.duration = e.duration / a)
        }
        var o = gt.arr(t) ? t : [t];
        return o.map((function(t, n) {
            var a = gt.obj(t) && !gt.pth(t) ? t : {
                value: t
            };
            return gt.und(a.delay) && (a.delay = n ? 0 : e.delay), gt.und(a.endDelay) && (a.endDelay = n === o.length - 1 ? e.endDelay : 0), a
        })).map((function(t) {
            return Ft(t, n)
        }))
    }

    function ee(t, e) {
        var n = [],
            a = e.keyframes;
        for (var o in a && (e = Ft(function(t) {
                for (var e = At(St(t.map((function(t) {
                        return Object.keys(t)
                    }))), (function(t) {
                        return gt.key(t)
                    })).reduce((function(t, e) {
                        return t.indexOf(e) < 0 && t.push(e), t
                    }), []), n = {}, a = function(a) {
                        var o = e[a];
                        n[o] = t.map((function(t) {
                            var e = {};
                            for (var n in t) gt.key(n) ? n == o && (e.value = t[n]) : e[n] = t[n];
                            return e
                        }))
                    }, o = 0; o < e.length; o++) a(o);
                return n
            }(a), e)), e) gt.key(o) && n.push({
            name: o,
            tweens: te(e[o], t)
        });
        return n
    }

    function ne(t, e) {
        var n;
        return t.tweens.map((function(a) {
            var o = function(t, e) {
                    var n = {};
                    for (var a in t) {
                        var o = It(t[a], e);
                        gt.arr(o) && 1 === (o = o.map((function(t) {
                            return It(t, e)
                        }))).length && (o = o[0]), n[a] = o
                    }
                    return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                }(a, e),
                r = o.value,
                i = gt.arr(r) ? r[1] : r,
                l = Rt(i),
                c = Pt(e.target, t.name, l, e),
                p = n ? n.to.original : c,
                d = gt.arr(r) ? r[0] : p,
                s = Rt(d) || Rt(c),
                u = l || s;
            return gt.und(i) && (i = p), o.from = Zt(d, u), o.to = Zt(jt(i, d), u), o.start = n ? n.end : 0, o.end = o.start + o.delay + o.duration + o.endDelay, o.easing = Dt(o.easing, o.duration), o.isPath = gt.pth(r), o.isColor = gt.col(o.from.original), o.isColor && (o.round = 1), n = o, o
        }))
    }
    var ae = {
        css: function(t, e, n) {
            return t.style[e] = n
        },
        attribute: function(t, e, n) {
            return t.setAttribute(e, n)
        },
        object: function(t, e, n) {
            return t[e] = n
        },
        transform: function(t, e, n, a, o) {
            if (a.list.set(e, n), e === a.last || o) {
                var r = "";
                a.list.forEach((function(t, e) {
                    r += e + "(" + t + ") "
                })), t.style.transform = r
            }
        }
    };

    function oe(t, e) {
        Kt(t).forEach((function(t) {
            for (var n in e) {
                var a = It(e[n], t),
                    o = t.target,
                    r = Rt(a),
                    i = Pt(o, n, r, t),
                    l = jt(Jt(a, r || Rt(i)), i),
                    c = Gt(o, n);
                ae[c](o, n, l, t.transforms, !0)
            }
        }))
    }

    function re(t, e) {
        return At(St(t.map((function(t) {
            return e.map((function(e) {
                return function(t, e) {
                    var n = Gt(t.target, e.name);
                    if (n) {
                        var a = ne(e, t),
                            o = a[a.length - 1];
                        return {
                            type: n,
                            property: e.name,
                            animatable: t,
                            tweens: a,
                            duration: o.end,
                            delay: a[0].delay,
                            endDelay: o.endDelay
                        }
                    }
                }(t, e)
            }))
        }))), (function(t) {
            return !gt.und(t)
        }))
    }

    function ie(t, e) {
        var n = t.length,
            a = function(t) {
                return t.timelineOffset ? t.timelineOffset : 0
            },
            o = {};
        return o.duration = n ? Math.max.apply(Math, t.map((function(t) {
            return a(t) + t.duration
        }))) : e.duration, o.delay = n ? Math.min.apply(Math, t.map((function(t) {
            return a(t) + t.delay
        }))) : e.delay, o.endDelay = n ? o.duration - Math.max.apply(Math, t.map((function(t) {
            return a(t) + t.duration - t.endDelay
        }))) : e.endDelay, o
    }
    var le = 0;
    var ce, pe = [],
        de = [],
        se = function() {
            function t() {
                ce = requestAnimationFrame(e)
            }

            function e(e) {
                var n = pe.length;
                if (n) {
                    for (var a = 0; a < n;) {
                        var o = pe[a];
                        if (o.paused) {
                            var r = pe.indexOf(o);
                            r > -1 && (pe.splice(r, 1), n = pe.length)
                        } else o.tick(e);
                        a++
                    }
                    t()
                } else ce = cancelAnimationFrame(ce)
            }
            return t
        }();

    function ue(t) {
        void 0 === t && (t = {});
        var e, n = 0,
            a = 0,
            o = 0,
            r = 0,
            i = null;

        function l(t) {
            var e = window.Promise && new Promise((function(t) {
                return i = t
            }));
            return t.finished = e, e
        }
        var c = function(t) {
            var e = Nt(dt, t),
                n = Nt(st, t),
                a = ee(n, t),
                o = Kt(t.targets),
                r = re(o, a),
                i = ie(r, n),
                l = le;
            return le++, Ft(e, {
                id: l,
                children: [],
                animatables: o,
                animations: r,
                duration: i.duration,
                delay: i.delay,
                endDelay: i.endDelay
            })
        }(t);
        l(c);

        function p() {
            var t = c.direction;
            "alternate" !== t && (c.direction = "normal" !== t ? "normal" : "reverse"), c.reversed = !c.reversed, e.forEach((function(t) {
                return t.reversed = c.reversed
            }))
        }

        function d(t) {
            return c.reversed ? c.duration - t : t
        }

        function s() {
            n = 0, a = d(c.currentTime) * (1 / ue.speed)
        }

        function u(t, e) {
            e && e.seek(t - e.timelineOffset)
        }

        function f(t) {
            for (var e = 0, n = c.animations, a = n.length; e < a;) {
                var o = n[e],
                    r = o.animatable,
                    i = o.tweens,
                    l = i.length - 1,
                    p = i[l];
                l && (p = At(i, (function(e) {
                    return t < e.end
                }))[0] || p);
                for (var d = bt(t - p.start - p.delay, 0, p.duration) / p.duration, s = isNaN(d) ? 1 : p.easing(d), u = p.to.strings, f = p.round, b = [], m = p.to.numbers.length, h = void 0, g = 0; g < m; g++) {
                    var x = void 0,
                        v = p.to.numbers[g],
                        w = p.from.numbers[g] || 0;
                    x = p.isPath ? Wt(p.value, s * v) : w + s * (v - w), f && (p.isColor && g > 2 || (x = Math.round(x * f) / f)), b.push(x)
                }
                var y = u.length;
                if (y) {
                    h = u[0];
                    for (var k = 0; k < y; k++) {
                        u[k];
                        var $ = u[k + 1],
                            z = b[k];
                        isNaN(z) || (h += $ ? z + $ : z + " ")
                    }
                } else h = b[0];
                ae[o.type](r.target, o.property, h, r.transforms), o.currentValue = h, e++
            }
        }

        function b(t) {
            c[t] && !c.passThrough && c[t](c)
        }

        function m(t) {
            var s = c.duration,
                m = c.delay,
                h = s - c.endDelay,
                g = d(t);
            c.progress = bt(g / s * 100, 0, 100), c.reversePlayback = g < c.currentTime, e && function(t) {
                if (c.reversePlayback)
                    for (var n = r; n--;) u(t, e[n]);
                else
                    for (var a = 0; a < r; a++) u(t, e[a])
            }(g), !c.began && c.currentTime > 0 && (c.began = !0, b("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, b("loopBegin")), g <= m && 0 !== c.currentTime && f(0), (g >= h && c.currentTime !== s || !s) && f(s), g > m && g < h ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, b("changeBegin")), b("change"), f(g)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, b("changeComplete")), c.currentTime = bt(g, 0, s), c.began && b("update"), t >= s && (a = 0, c.remaining && !0 !== c.remaining && c.remaining--, c.remaining ? (n = o, b("loopComplete"), c.loopBegan = !1, "alternate" === c.direction && p()) : (c.paused = !0, c.completed || (c.completed = !0, b("loopComplete"), b("complete"), !c.passThrough && "Promise" in window && (i(), l(c)))))
        }
        return c.reset = function() {
            var t = c.direction;
            c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = "reverse" === t, c.remaining = c.loop, e = c.children;
            for (var n = r = e.length; n--;) c.children[n].reset();
            (c.reversed && !0 !== c.loop || "alternate" === t && 1 === c.loop) && c.remaining++, f(c.reversed ? c.duration : 0)
        }, c.set = function(t, e) {
            return oe(t, e), c
        }, c.tick = function(t) {
            o = t, n || (n = o), m((o + (a - n)) * ue.speed)
        }, c.seek = function(t) {
            m(d(t))
        }, c.pause = function() {
            c.paused = !0, s()
        }, c.play = function() {
            c.paused && (c.completed && c.reset(), c.paused = !1, pe.push(c), s(), ce || se())
        }, c.reverse = function() {
            p(), s()
        }, c.restart = function() {
            c.reset(), c.play()
        }, c.reset(), c.autoplay && c.play(), c
    }

    function fe(t, e) {
        for (var n = e.length; n--;) Tt(t, e[n].animatable.target) && e.splice(n, 1)
    }
    "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
        document.hidden ? (pe.forEach((function(t) {
            return t.pause()
        })), de = pe.slice(0), ue.running = pe = []) : de.forEach((function(t) {
            return t.play()
        }))
    })), ue.version = "3.1.0", ue.speed = 1, ue.running = pe, ue.remove = function(t) {
        for (var e = Qt(t), n = pe.length; n--;) {
            var a = pe[n],
                o = a.animations,
                r = a.children;
            fe(e, o);
            for (var i = r.length; i--;) {
                var l = r[i],
                    c = l.animations;
                fe(e, c), c.length || l.children.length || r.splice(i, 1)
            }
            o.length || r.length || a.pause()
        }
    }, ue.get = Pt, ue.set = oe, ue.convertPx = Lt, ue.path = function(t, e) {
        var n = gt.str(t) ? Ct(t)[0] : t,
            a = e || 100;
        return function(t) {
            return {
                property: t,
                el: n,
                svg: Xt(n),
                totalLength: Vt(n) * (a / 100)
            }
        }
    }, ue.setDashoffset = function(t) {
        var e = Vt(t);
        return t.setAttribute("stroke-dasharray", e), e
    }, ue.stagger = function(t, e) {
        void 0 === e && (e = {});
        var n = e.direction || "normal",
            a = e.easing ? Dt(e.easing) : null,
            o = e.grid,
            r = e.axis,
            i = e.from || 0,
            l = "first" === i,
            c = "center" === i,
            p = "last" === i,
            d = gt.arr(t),
            s = d ? parseFloat(t[0]) : parseFloat(t),
            u = d ? parseFloat(t[1]) : 0,
            f = Rt(d ? t[1] : t) || 0,
            b = e.start || 0 + (d ? s : 0),
            m = [],
            h = 0;
        return function(t, e, g) {
            if (l && (i = 0), c && (i = (g - 1) / 2), p && (i = g - 1), !m.length) {
                for (var x = 0; x < g; x++) {
                    if (o) {
                        var v = c ? (o[0] - 1) / 2 : i % o[0],
                            w = c ? (o[1] - 1) / 2 : Math.floor(i / o[0]),
                            y = v - x % o[0],
                            k = w - Math.floor(x / o[0]),
                            $ = Math.sqrt(y * y + k * k);
                        "x" === r && ($ = -y), "y" === r && ($ = -k), m.push($)
                    } else m.push(Math.abs(i - x));
                    h = Math.max.apply(Math, m)
                }
                a && (m = m.map((function(t) {
                    return a(t / h) * h
                }))), "reverse" === n && (m = m.map((function(t) {
                    return r ? t < 0 ? -1 * t : -t : Math.abs(h - t)
                })))
            }
            return b + (d ? (u - s) / h : s) * (Math.round(100 * m[e]) / 100) + f
        }
    }, ue.timeline = function(t) {
        void 0 === t && (t = {});
        var e = ue(t);
        return e.duration = 0, e.add = function(n, a) {
            var o = pe.indexOf(e),
                r = e.children;

            function i(t) {
                t.passThrough = !0
            }
            o > -1 && pe.splice(o, 1);
            for (var l = 0; l < r.length; l++) i(r[l]);
            var c = Ft(n, Nt(st, t));
            c.targets = c.targets || t.targets;
            var p = e.duration;
            c.autoplay = !1, c.direction = e.direction, c.timelineOffset = gt.und(a) ? p : jt(a, p), i(e), e.seek(c.timelineOffset);
            var d = ue(c);
            i(d), r.push(d);
            var s = ie(r, t);
            return e.delay = s.delay, e.endDelay = s.endDelay, e.duration = s.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
        }, e
    }, ue.easing = Dt, ue.penner = zt, ue.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    };
    var be = {
        boost: document.getElementById("slider-boost"),
        suspension: document.getElementById("slider-suspension"),
        tranny: document.getElementById("slider-tranny"),
        brakes: document.getElementById("slider-brakes"),
        dt: document.getElementById("slider-dt")
    };

    function me(t, e, n, a, o) {
        null != be.boost && (be.boost.noUiSlider.set(t), be.tranny.noUiSlider.set(e), be.suspension.noUiSlider.set(n), be.brakes.noUiSlider.set(a), be.dt.noUiSlider.set(o))
    }

    function he(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        $.each(e, (function(e, a) {
            t.append('\n            <div class="tuner-options">\n                <button type="button" class="btn waves-effect waves-light teal darken-4 quick-tune-button">'.concat(a.label, '</button>\n                <button type="button" class="btn waves-effect waves-light materialize-red darken-4 quick-tune-delete').concat(n ? " disabled" : "", '"><i class="fas fa-trash-alt"></i></button>\n            </div>\n        ')), t.find(".tuner-options:last-child .quick-tune-button").data("tune", a)
        }))
    }

    function ge() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = 0,
            n = 0,
            a = 0,
            r = 0,
            i = 0;
        null != t ? (e = t.boost, n = t.suspension, a = t.tranny, r = t.brakes, i = t.dt) : (e = be.boost.noUiSlider.get(), n = be.suspension.noUiSlider.get(), a = be.tranny.noUiSlider.get(), r = be.brakes.noUiSlider.get(), i = be.dt.noUiSlider.get()), $.post(o.ROOT_ADDRESS + "/ApplyTune", JSON.stringify({
            boost: e,
            suspension: n,
            tranny: a,
            brakes: r,
            dt: i
        }), (function(t) {

                var o = d.GetData("currentVeh");
                o.tune.active = {
                    boost: e,
                    suspension: n,
                    tranny: a,
                    brakes: r,
                    dt: i
                }, d.StoreData("currentVeh", o), h.Alert("Tune Applied")
            
        }))
    }
    $("#screen-content").on("click", "#tuner-custom-reset", (function(t) {
        me(0, 5, 5, 5, 5), h.Alert("Tune Reset")
    })), $("#screen-content").on("submit", "#new-tune", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray();
        $.post(o.ROOT_ADDRESS + "/SaveTune", JSON.stringify({
            label: e[0].value,
            carOnly: null != e[1],
            carModel: null,
            boost: be.boost.noUiSlider.get(),
            suspension: be.suspension.noUiSlider.get(),
            tranny: be.tranny.noUiSlider.get(),
            brakes: be.brakes.noUiSlider.get(),
            dt: be.dt.noUiSlider.get()
        }), (function(t) {
            null != t ? ($("#new-tune")[0].reset(), d.AddData("custom-tunes", t), h.Alert("Tune Saved"), M.Modal.getInstance($("#save-tune-popup")).close()) : h.Alert("Error Saving Tune")
        }))
    })), $("#screen-content").on("click", "#tuner-custom-saved", (function() {
        var t = d.GetData("custom-tunes"),
            e = d.GetData("factory-tunes");
        $("#custom-tunes-popup").find("#car-only").html(""), $("#custom-tunes-popup").find("#generic").html("");
        var n = t.filter((function(t) {
                return t.carOnly && t.carModel === d.GetData("currentVeh").model
            })),
            a = t.filter((function(t) {
                return !t.carOnly
            }));
        n.length > 0 ? he($("#custom-tunes-popup").find("#car-only"), n) : ($("#tab-car-only").removeClass("active"), $("#tab-generic").addClass("active"), M.Tabs.getInstance($("#custom-tunes-tabs")).updateTabIndicator());
        he($("#custom-tunes-popup").find("#generic"), e, !0), he($("#custom-tunes-popup").find("#generic"), a), M.Modal.getInstance($("#custom-tunes-popup")).open()
    })), $("#screen-content").on("click", "#custom-tunes-popup .quick-tune-button", (function(t) {
        var e = $(t.currentTarget).data("tune");
        me(e.boost, e.tranny, e.suspension, e.brakes, e.dt), h.Alert("Tune Loaded, Press Apply To Apply It"), M.Modal.getInstance($("#custom-tunes-popup")).close()
    })), $("#screen-content").on("click", "#custom-tunes-popup .quick-tune-delete", (function(t) {
        var e = $(t.currentTarget).parent().find(".quick-tune-button").data("tune");
        $.post(o.ROOT_ADDRESS + "/DeleteTune", JSON.stringify({
            id: e.id
        }), (function(n) {
            n ? (d.RemoveObjectData("custom-tunes", "id", e.id), $(t.currentTarget).remove(), M.Modal.getInstance($("#custom-tunes-popup")).close(), h.Alert("Tune Deleted")) : h.Alert("Unable To Delete Tune")
        }))
    })), $("#screen-content").on("click", "#tuner-custom-quick", (function() {
        qe.OpenApp("tuner-quick", null, !1, !0)
    })), $("#screen-content").on("click", "#tuner-custom-apply", (function() {
        ge()
    })), window.addEventListener("tuner-custom-open-app", (function(t) {
        if (be = {
                boost: document.getElementById("slider-boost"),
                suspension: document.getElementById("slider-suspension"),
                tranny: document.getElementById("slider-tranny"),
                brakes: document.getElementById("slider-brakes"),
                dt: document.getElementById("slider-dt")
            }, function() {
                for (var t in be) {
                    var e = be[t];
                    noUiSlider.create(e, {
                        start: [5],
                        connect: [!0, !1],
                        step: 1,
                        orientation: "horizontal",
                        range: {
                            min: 0,
                            max: 10
                        },
                        pips: {
                            mode: "steps",
                            stepped: !0,
                            density: 10
                        }
                    })
                }
            }(), null != t.detail && null != t.detail.tune) me(t.detail.tune.boost, t.detail.tune.tranny, t.detail.tune.suspension, t.detail.tune.brakes, t.detail.tune.dt), ge(t.detail.tune), h.Alert("Tune Applied", 1e3);
        else {
            var e = d.GetData("currentVeh");
            me(e.tune.active.boost, e.tune.active.tranny, e.tune.active.suspension, e.tune.active.brakes, e.tune.active.dt)
        }
        $("#tuner-custom-container .inner-app").fadeIn()
    })), window.addEventListener("tuner-custom-close-app", (function() {
        $("#tuner-custom-container .inner-app").fadeOut()
    }));
    var xe = {
            ApplyTune: ge
        },
        ve = null,
        we = null;
    $("#screen-content").on("click", ".quick-tune-button", (function(t) {
        var e = $(t.currentTarget).data("tune");
        xe.ApplyTune(e)
    })), $("#screen-content").on("click", "#quick-custom-open", (function() {
        qe.OpenApp("tuner-custom", null, !1, !0)
    })), window.addEventListener("tuner-quick-open-app", (function() {
        ve = d.GetData("factory-tunes"), we = d.GetData("custom-tunes").filter((function(t) {
            return !t.carOnly || t.carOnly && t.carModel == d.GetData("currentVeh").model
        })), $.each(ve, (function(t, e) {
            $(".tuner-quick-section#factory").find(".tuner-quick-buttons").append('<button type="button" class="btn waves-effect waves-light teal darken-4 quick-tune-button">'.concat(e.label, "</button>")), $(".tuner-quick-section#factory").find(".tuner-quick-buttons .quick-tune-button:last-child").data("tune", e)
        })), $.each(we, (function(t, e) {
            $(".tuner-quick-section#custom").find(".tuner-quick-buttons").append('<button type="button" class="btn waves-effect waves-light teal darken-4 quick-tune-button">'.concat(e.label, "</button>")), $(".tuner-quick-section#custom").find(".tuner-quick-buttons .quick-tune-button:last-child").data("tune", e)
        })), $("#tuner-quick").fadeIn()
    })), window.addEventListener("tuner-quick-close-app", (function() {
        $("#tuner-quick").fadeOut("normal", (function() {
            $(".tuner-quick-section#factory").find(".tuner-quick-buttons").html(""), $(".tuner-quick-section#custom").find(".tuner-quick-buttons").html("")
        }))
    })), window.addEventListener("tuner-legal-open-app", (function() {
        $("#tuner-legal-container .inner-app").fadeIn()
    })), window.addEventListener("tuner-legal-close-app", (function() {
        $("#tuner-legal-container .inner-app").fadeOut()
    })), window.addEventListener("tuner-info-open-app", (function() {
        var t = d.GetData("currentVeh");
        $.post(o.ROOT_ADDRESS + "/GetVehHealth", JSON.stringify({}), (function(e) {
            $("#model-value").html(t.name), $("#plate-value").html(t.plate), e ? ($("#body-value").html(e.body), $("#brakes-value").html(e.brakes), $("#electronics-value").html(e.electronics), $("#engine-value").html(e.engine), $("#suspension-value").html(e.suspension), $("#transmission-value").html(e.transmission)) : $("#veh-health").html('<div class="info-error">Unable To Detect Health Status of Vehicle</div>'), $("#tuner-info-container .tuner-section").fadeIn("fast")
        }))
    })), window.addEventListener("tuner-info-close-app", (function() {}));
    var ye = !1;

    function ke() {
        $(".no-chip-error").fadeIn("fast", (function() {
            $(".error-details").show("scale", (function() {
                $(".tuner-nav").data("disabled", !0)
            }))
        }))
    }

    function $e(t) {
        $(".splash").hide(), t.sameVeh && (t = d.GetData("currentVeh")), null != t.id ? (ye = !0, null != d.GetData("currentVeh") && d.GetData("currentVeh").id == t.id || d.StoreData("currentVeh", t), $(".connected-car").html(t.name), $("#tuner-home-screen").fadeIn("normal")) : ke()
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "ResetVehicle":
                ye = !1
        }
    })), $("#screen-content").on("click", ".tuner-nav", (function(t) {
        if (!$(t.currentTarget).data("disabled")) {
            var e = $(t.currentTarget).data("section");
            qe.OpenApp("tuner-".concat(e), null, !1, !0)
        }
    })), $("#screen-content").on("click", "#no-chip-quit", (function() {
        qe.GoBack()
    }));
    var ze = null;
    window.addEventListener("tuner-open-app", (function() {
        $(".splash").show(), ze = setInterval((function() {
            $(".dots").html().length >= 3 ? $(".dots").html("") : $(".dots").html($(".dots").html() + ".")
        }), 500), ye ? $.post(o.ROOT_ADDRESS + "/CheckInVeh", JSON.stringify({
            veh: d.GetData("currentVeh")
        }), (function(t) {
            clearInterval(ze), null != t && (t.sameVeh ? $e(t) : t ? $.post(o.ROOT_ADDRESS + "/SetupTuner", JSON.stringify({}), (function(t) {
                $(".splash").fadeOut("fast").promise().then((function() {
                    t ? $e(t) : ke()
                }))
            })) : ke())
        })) : $.post(o.ROOT_ADDRESS + "/SetupTuner", JSON.stringify({}), (function(t) {
            clearInterval(ze), $(".splash").fadeOut("fast", (function() {
                t ? $e(t) : ke()
            }))
        }))
    })), window.addEventListener("tuner-close-app", (function() {
        clearInterval(ze), clearTimeout(null), $(".no-chip-error").hide(), $("#tuner-home-screen").hide(), $(".tuner-nav").removeData("disabled"), $.post(o.ROOT_ADDRESS + "/CancelTunerSearch", JSON.stringify({}))
    }));

    function De(t) {
        $.each(t, (function(t, e) {
            $(".message-list").prepend('<div class="irc-message"><span class="message-text">'.concat(e.message, '</span><span class="message-time">').concat(moment(e.date).fromNowOrNow(), "</span></div>"))
        }))
    }

    function Ce(t) {
        var e = d.GetData("irc-channels"),
            n = e.filter((function(e) {
                return e.channel === t
            }))[0];
        (e = e.filter((function(e) {
            return e.channel !== t
        }))).unshift(n), d.StoreData("irc-channels", e)
    }
    window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "receiveIRCChat":
                var e = [{
                    message: t.data.message,
                    date: Date.now()
                }];
                console.log(JSON.stringify(e))
                if ("irc-convo" === qe.GetCurrentApp) {
                    $(".irc-channel").html() === t.data.channel ? De(e) : x.AddUnread(), d.AddData("irc-messages-".concat(t.data.channel), e[0]), Ae.BringChannelToTop(data.event.channel);
                    break
                }
                x.AddUnread(), d.AddData("irc-messages-".concat(t.data.channel), e[0]), Ae.BringChannelToTop(t.data.channel)
        }
    })), $("#screen-content").on("submit", "#irc-new-message", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray();
        $.post(o.ROOT_ADDRESS + "/IRCNewMessage", JSON.stringify({
            channel: $(".irc-channel").html(),
            message: e[0].value
        }), (function(t) {
            if (t) {
                Ae.BringChannelToTop($(".irc-channel").html());
                var n = [{
                    message: e[0].value,
                    date: Date.now()
                }];
                $("#irc-new-message")[0].reset(), De(n), d.AddData("irc-messages-".concat($(".irc-channel").html()), {
                    message: e[0].value,
                    date: Date.now()
                })
            }
        }))
    })), $("#screen-content").on("submit", "#irc-leave-channel", (function(t) {
        t.preventDefault();
        var e = $(t.currentTarget).serializeArray()[0].value;
        $.post(o.ROOT_ADDRESS + "/IRCLeaveChannel", JSON.stringify({
            channel: e
        }), (function(t) {
            t ? (d.RemoveObjectData("irc-channels", "channel", e), h.Alert("Left Channel"), qe.GoBack()) : h.Alert("Unable To Leave Channel")
        }))
    })), window.addEventListener("irc-convo-open-app", (function(t) {
        $(".irc-channel").html(t.detail.channel.channel), $("#irc-channel-name").val(t.detail.channel.channel), $(".message-list").html("");

        var e = d.GetData("irc-messages-".concat(t.detail.channel.channel));

        $.post(o.ROOT_ADDRESS + "/IRCGetMessages", JSON.stringify({
            channel: t.detail.channel.channel
        }), (function(e) {
            //y = d.GetData('irc-channels-msgs');
            d.StoreData("irc-messages-".concat(t.detail.channel.channel), e)
           p = d.GetData("irc-messages-".concat(t.detail.channel.channel));
            De(p)
        }))
    })), window.addEventListener("irc-convo-close-app", (function() {})), $("#screen-content").on("submit", "#irc-join-channel", (function(t) {
        t.preventDefault();
        var e = {
            channel: $(t.currentTarget).serializeArray()[0].value,
            joined: Date.now()
        };
        $.post(o.ROOT_ADDRESS + "/IRCJoinChannel", JSON.stringify({
            channel: e.channel
        }), (function(t) {
            t ? (d.AddData("irc-channels", e), Ce(e), M.Modal.getInstance($("#irc-join-modal")).close(), $(".channel-list").prepend('<div class="irc-channel"><span>'.concat(e.channel, "</span></div>")), $(".channel-list .irc-channel:first-child").data("channel", e), h.Alert("Joined Channel")) : h.Alert("Unable To Join Channel")
        }))
    })), $("#screen-content").on("click", ".irc-channel", (function(t) {
        qe.OpenApp("irc-convo", {
            channel: $(t.currentTarget).data("channel")
        }, !1, !0, !1)
    })), window.addEventListener("irc-open-app", (function() {
        var t = d.GetData("irc-channels");
        $(".channel-list").html(""), $.each(t, (function(t, e) {
            ! function(t) {
                $(".channel-list").append('<div class="irc-channel"><span>'.concat(t.channel, "</span></div>")), $(".channel-list .irc-channel:last-child").data("channel", t)
            }(e)
        })), x.ClearUnread()
    })), window.addEventListener("irc-close-app", (function() {}));
    var Ae = {
        BringChannelToTop: Ce
    };
    window.addEventListener("settings-open-app", (function() {
        $("#phone-settings").on("submit", (function(t) {
            t.preventDefault();
            var e = $(t.currentTarget).serializeArray();
            console.log(JSON.stringify(e));
            var n = {
                volume: parseInt(e[0].value),
                wallpaper: parseInt(e[1].value),
                ringtone: parseInt(e[2].value),
                text: parseInt(e[3].value)
            };
            $.post(o.ROOT_ADDRESS + "/SaveSettings", JSON.stringify(n), (function(t) {
                t ? (d.StoreData("settings", n), f.UpdateWallpaper("url(./imgs/back00".concat(n.wallpaper, ".png)")), f.SetMute(0 === n.volume), h.Alert("Settings Saved")) : h.Alert("Unable To Save Settings")
            }))
        }))
    })), window.addEventListener("settings-open-app", (function(t) {
        var e = d.GetData("settings");
        
        var m = d.GetData("myData").phone
        $("#convo-add-contact-number").val(m)

        $("#settings-volume").val(e.volume), $("#settings-wallpaper").val(e.wallpaper), $("#settings-ringtone").val(e.ringtone), $("#settings-text").val(e.text), $("#settings-volume").formSelect(), $("#settings-wallpaper").formSelect(), $("#settings-ringtone").formSelect(), $("#settings-text").formSelect()
    })), window.addEventListener("settings-close-app", (function() {
        $("#phone-settings").off("submit")
    }));
     window.addEventListener("stocks-open-app", (function(t) {

        $(".namenlast span").html(d.GetData("namenlast"))
        $(".dob span").html(d.GetData("dob"))
        $(".serveridlol span").html(d.GetData("serveridlol"))
        $(".myjob span").html(d.GetData("myjob"))
        $(".bankacunt span").html(d.GetData("bankacunt"))
        $(".property span").html(d.GetData("property"))
        $(".dlicense span").html(d.GetData("dlicense"))
        $(".blicense span").html(d.GetData("blicense"))

    }));
    window.addEventListener("website-open-app", (function(t) {

        Ne()
        $.post("http://8bit_phone/opentablet", JSON.stringify({}))

    }));
    window.addEventListener("camera-open-app", (function(t) {

        Ne()
        $.post("http://8bit_phone/opencamera", JSON.stringify({}))

    }));
    var Se = null;

    function Oe(t, e) {
        $.each($(".dumper-app"), (function(n, a) {
            $(a).data("app").dumpable === t && (e ? $(a).fadeIn() : $(a).fadeOut())
        }))
    }
    window.addEventListener("dumper-details-open-app", (function(t) {
        $("#dumper-transfer").on("click", (function(t) {
            $(t.currentTarget).hasClass("disabled") || $.post(o.ROOT_ADDRESS + "/DumpApp", JSON.stringify({
                type: 1,
                app: Se.container
            }), (function(t) {
                t ? (Se = null, $(".sdcard").fadeOut("fast").promise().then((function() {
                    $(".sdcard").removeClass("advanced")
                })), h.Alert("App Packaged Transferred To SD Card"), qe.GoHome()) : h.Alert("Error Transferring App Package")
            }))
        })), $("#dumper-clone").on("click", (function(t) {
            $(t.currentTarget).hasClass("disabled") || $.post(o.ROOT_ADDRESS + "/DumpApp", JSON.stringify({
                type: 2,
                app: Se.container
            }), (function(t) {
                t ? (Se = null, $(".sdcard").fadeOut("fast").promise().then((function() {
                    $(".sdcard").removeClass("advanced")
                })), h.Alert("App Package Cloned To SD Card"), qe.GoHome()) : h.Alert("Error Cloning App Package")
            }))
        }))
    })), window.addEventListener("dumper-details-open-app", (function(t) {
        switch (Se = t.detail, $(".dumper-top-bar").css("background", Se.color), $(".section-header").css("color", Se.color), $(".dumper-top-text span").html(Se.name), $("#name .section-data").html(Se.name), $("#package .section-data").html(Se.container), +Se.dumpable) {
            case 1:
                $("#dumper-clone, #APP_CLONE, #APP_NONE").remove(), $("#permissions .section-data").html("APP_TRANSFER");
                break;
            case 2:
                $("#APP_NONE").remove(), $(".sdcard").hasClass("advanced") || $("#dumper-clone").addClass("disabled"), $("#permissions .section-data").html("APP_TRANSFER, APP_CLONE");
                break;
            default:
                $("#dumper-clone, #dumper-transfer, #APP_CLONE, #APP_TRANSFER").remove(), $("#permissions .section-data").html("APP_NONE")
        }
        $(".dumper-top-actions i").tooltip({
            enterDelay: 0,
            exitDelay: 0,
            inDuration: 0
        })
    })), window.addEventListener("dumper-details-close-app", (function() {
        $("#dumper-transfer").unbind(), $("#dumper-clone").unbind()
    })), window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "Logout":
                $(".sdcard").fadeOut("fast").promise().then((function() {
                    $(".sdcard").removeClass("advanced")
                }));
                break;
            case "InsertSDCard":
                t.data.advanced && $(".sdcard").addClass("advanced"), $(".sdcard").fadeIn("fast")
        }
    })), $("#remove-sdcard-card").on("click", (function() {
        M.Modal.getInstance($("#remove-sdcard-conf")).close(), $.post(o.ROOT_ADDRESS + "/EjectSDCard", JSON.stringify({
            advanced: $(".sdcard").hasClass("advanced")
        }), (function(t) {
            t ? ($(".sdcard").fadeOut("fast").promise().then((function() {
                $(".sdcard").removeClass("advanced")
            })), h.Alert("SD Card Ejected"), "dumper" === qe.GetCurrentApp() && qe.GoHome()) : h.Alert("Issue Ejectiong SD Card")
        }))
    })), window.addEventListener("dumper-open-app", (function(t) {
        $(".dumper-filter").on("click", (function(t) {
            $(t.currentTarget).hasClass("active") ? ($(t.currentTarget).removeClass("active"), Oe(+$(t.currentTarget).data("filter"), !1)) : ($(t.currentTarget).addClass("active"), Oe(+$(t.currentTarget).data("filter"), !0))
        })), $("#dumper-container").on("click", ".dumper-app", (function(t) {
            if ($(".sdcard").is(":visible")) {
                var e = $(t.currentTarget).data("app");
                qe.OpenApp("dumper-details", e, !1, !0, !1)
            }
        }))
    })), window.addEventListener("dumper-open-app", (function(t) {
        if ($(".sdcard").is(":visible")) {
            var e = d.GetData("apps");
            $.each(e, (function(t, e) {
                if (e.enabled) {
                    switch (e.dumpable) {
                        case 1:
                            $(".dumper-app-list").append('<div class="dumper-app"><div class="dumper-icon transfer"><i class="fas fa-download"></i></div><div class="dumper-app-label">'.concat(e.name, "</div></div>"));
                            break;
                        case 2:
                            $(".dumper-app-list").append('<div class="dumper-app"><div class="dumper-icon copy"><i class="fas fa-copy"></i></div><div class="dumper-app-label">'.concat(e.name, "</div></div>"));
                            break;
                        default:
                            $(".dumper-app-list").append('<div class="dumper-app"><div class="dumper-icon"><i class="fas fa-times-circle"></i></div><div class="dumper-app-label">'.concat(e.name, "</div></div>"))
                    }
                    $(".dumper-app:last-child").data("app", e)
                }
            }))
        } else $("#dumper-container").find(".inner-app").html("No SD Card Found").addClass("error")
    })), window.addEventListener("dumper-close-app", (function() {}));
    var Te = {
            Home: k,
            Contacts: P,
            Phone: B,
            Messages: K,
            Twitter: ot,
            Adverts: ct,
            Bank: {},
            Tuner: {},
            IRC: Ae,
            Settings: {},
            Dumper: {}
        },
        Ee = (a(2), a(4), [{
            app: null,
            data: null,
            fade: null
        }]);

    function Ne() {
        $.post("http://8bit_phone/ClosePhone", JSON.stringify({})), $(".wrapper").hide("slide", {
            direction: "down"
        }, 500, (function() {
            $("#screen-content").trigger("".concat(Ee[Ee.length - 1].app, "-close-app")), $("#toast-container").remove(), $(".material-tooltip").remove(), $(".app-container").hide(), Ee = [{
                app: null,
                data: null,
                fade: null
            }]
        }))
    }

    function Fe(t, e, n, a, o) {
        $.ajax({
            url: "./html/apps/".concat(t, ".html"),
            cache: !1,
            dataType: "html",
            statusCode: {
                404: function() {
                    Ee.push({
                        app: t,
                        data: null,
                        fade: !1,
                        close: o
                    }), h.Alert("App Doesn't Exist", 1e3), Re(), $(".footer-button").removeClass("disabled")
                }
            },
            success: function(r) {
                $("#screen-content").html(r), $(".modal").modal(), $(".dropdown-trigger").dropdown({
                    constrainWidth: !1
                }), $(".tabs").tabs(), $(".char-count-input").characterCounter(), $(".phone-number").mask("000-000-0000", {
                    placeholder: "###-###-####"
                }), window.dispatchEvent(new CustomEvent("".concat(Ee[Ee.length - 1].app, "-close-app"))), n && (Ee.pop(), a = null, Ee.pop()), Ee.push({
                    app: t,
                    data: e,
                    fade: a,
                    close: o
                }), $(".material-tooltip").remove(), window.dispatchEvent(new CustomEvent("remove-closed-notif", {
                    detail: {
                        app: t
                    }
                })), window.dispatchEvent(new CustomEvent("".concat(t, "-open-app"), {
                    detail: e
                })), $("#screen-content").show(), $(".footer-button").removeClass("disabled")
            }
        })
    }

    function Me(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        $("#screen-content .app-container").length <= 0 || a ? Ee[Ee.length - 1].close ? window.dispatchEvent(new CustomEvent("".concat(Ee[Ee.length - 1].app, "-custom-close-app"), {
            detail: {
                app: t,
                data: e,
                pop: n,
                disableFade: a,
                customExit: o
            }
        })) : Fe(t, e, n, a, o) : Ee[Ee.length - 1].close ? window.dispatchEvent(new CustomEvent("".concat(Ee[Ee.length - 1].app, "-custom-close-app"), {
            detail: {
                app: t,
                data: e,
                pop: n,
                disableFade: a,
                customExit: o
            }
        })) : $("#screen-content").fadeOut("fast", (function() {
            Fe(t, e, n, a, o)
        }))
    }

    function Re() {
        "home" !== Ee[Ee.length - 1].app && Me("home")
    }

    function Ie() {
        "home" !== Ee[Ee.length - 1].app && (Ee.length > 1 ? Me(Ee[Ee.length - 2].app, Ee[Ee.length - 2].data, !0, Ee[Ee.length - 1].fade, Ee[Ee.length - 2].close) : Re())
    }
    moment.fn.fromNowOrNow = function(t) {
        return Math.abs(moment().diff(this)) < 6e4 ? "just now" : this.fromNow(t)
    }, window.addEventListener("message", (function(t) {
        switch (t.data.action) {
            case "show":
                $(".wrapper").show("slide", {
                    direction: "down"
                }, 500), Te.Phone.Call.IsCallPending() ? (Ee = [{
                    app: "home",
                    data: null,
                    fade: !1
                }], Me("phone-call", {
                    number: t.data.number,
                    receiver: !t.data.initiator
                }, !1)) : Me("home", null, !0);
                break;
            case "hide":
                Ne();
                break;
            case "SetServerID":
                $(".player-id span").html(t.data.id)
        }
    })), $((function() {
        var t = d.GetData("settings");
        f.UpdateWallpaper("url(./imgs/back00".concat(t.wallpaper, ".png)")), f.SetMute(0 === t.volume), document.onkeyup = function(t) {
            114 != t.which && 27 != t.which || Ne()
        }
    })), $(".phone-header").on("click", ".in-call", (function(t) {
        "phone-call" != Ee[Ee.length - 1].app && Me("phone-call", null, !1)
    })), $(".phone").on("click", ".back-button", (function(t) {
        $(t.currentTarget).hasClass("disabled") || ($(".footer-button").addClass("disabled"), Ie())
    })), $(".phone").on("click", ".home-button", (function(t) {
        $(t.currentTarget).hasClass("disabled") || ($(".footer-button").addClass("disabled"), Re())
    })), $(".phone").on("click", ".close-button", (function(t) {
        Ne()
    })), $("#remove-sim-card").on("click", (function(t) {
        M.Modal.getInstance($("#remove-sim-conf")).close(), f.NotifyAltSim(!1), h.Alert("Sim Removed")
    })), $(".mute").on("click", (function(t) {
        var e = d.GetData("settings").volume;
        $.post(o.ROOT_ADDRESS + "/ToggleMute", JSON.stringify({
            muted: 0 !== e
        }), (function(t) {
            t && (d.UpdateData("settings", "volume", 0 === e ? 100 : 0), f.SetMute(0 !== e))
        }))
    })), window.addEventListener("custom-close-finish", (function(t) {
        t.detail.disableFade ? Fe(t.detail.app, t.detail.data, t.detail.pop, t.detail.disableFade, t.detail.customExit) : $("#screen-content").fadeOut("fast", (function() {
            Fe(t.detail.app, t.detail.data, t.detail.pop, t.detail.disableFade, t.detail.customExit)
        }))
    }));
    var qe = n.default = {
        GoHome: Re,
        GoBack: Ie,
        OpenApp: Me,
        RefreshApp: function() {
            $(".material-tooltip").remove(), $("#screen-content").trigger("".concat(Ee[Ee.length - 1].app, "-open-app"), [Ee[Ee.length - 1].data])
        },
        GetCurrentApp: function() {
            return Ee[Ee.length - 1].app
        }
    }
}]);