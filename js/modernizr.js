/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!(function (n, e, s) {
  function o(n) {
    var e = f.className,
      s = Modernizr._config.classPrefix || "";
    if ((l && (e = e.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
      e = e.replace(o, "$1" + s + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((e += " " + s + n.join(" " + s)),
      l ? (f.className.baseVal = e) : (f.className = e));
  }
  function a(n, e) {
    return typeof n === e;
  }
  function i() {
    var n, e, s, o, i, f, l;
    for (var c in r)
      if (r.hasOwnProperty(c)) {
        if (
          ((n = []),
          (e = r[c]),
          e.name &&
            (n.push(e.name.toLowerCase()),
            e.options && e.options.aliases && e.options.aliases.length))
        )
          for (s = 0; s < e.options.aliases.length; s++)
            n.push(e.options.aliases[s].toLowerCase());
        for (o = a(e.fn, "function") ? e.fn() : e.fn, i = 0; i < n.length; i++)
          (f = n[i]),
            (l = f.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            t.push((o ? "" : "no-") + l.join("-"));
      }
  }
  var t = [],
    f = e.documentElement,
    l = "svg" === f.nodeName.toLowerCase(),
    r = [],
    c = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (n, e) {
        var s = this;
        setTimeout(function () {
          e(s[n]);
        }, 0);
      },
      addTest: function (n, e, s) {
        r.push({ name: n, fn: e, options: s });
      },
      addAsyncTest: function (n) {
        r.push({ name: null, fn: n });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = c),
    (Modernizr = new Modernizr()),
    i(),
    o(t),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]();
  n.Modernizr = Modernizr;
})(window, document);
