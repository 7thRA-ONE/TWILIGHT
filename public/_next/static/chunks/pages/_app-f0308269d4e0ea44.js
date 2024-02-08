(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    91118: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(78510);
        },
      ]);
    },
    78510: function (e, n, r) {
      "use strict";
      r.r(n);
      var t = r(26042),
        o = r(85893),
        u = (r(74831), r(57805), r(9008)),
        i = r.n(u);
      "undefined" !== typeof navigator &&
        ((function () {
          var e,
            n,
            r = navigator.userAgent,
            t =
              r.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
              ) || [];
          if (/trident/i.test(t[1]))
            return "IE " + ((n = /\brv[ :]+(\d+)/g.exec(r) || [])[1] || "");
          if ("Chrome" === t[1] && null != (n = r.match(/\b(OPR|Edge)\/(\d+)/)))
            return n.slice(1).join(" ").replace("OPR", "Opera");
          (t = t[2]
            ? [t[1], t[2]]
            : [navigator.appName, navigator.appVersion, "-?"]),
            null != (n = r.match(/version\/(\d+)/i)) && t.splice(1, 1, n[1]);
          var o = { browser: t[0], version: t[1], supported: !0 };
          switch (
            null === (e = t[0]) || void 0 === e ? void 0 : e.toLowerCase()
          ) {
            case "chrome":
            case "firefox":
              o.supported = t[1] >= 80;
              break;
            case "safari":
              o.supported = t[1] >= 15;
              break;
            case "opera":
              o.supported = t[1] >= 66;
              break;
            case "msie":
              o.supported = !1;
              break;
            default:
              o.supported = !0;
          }
          return o;
        })().supported ||
          (window.unsupportedBrowser = !0));
      n.default = function (e) {
        var n,
          r = e.Component,
          u = e.pageProps;
        return (
          r.getLayout ||
          function (e) {
            return e;
          }
        )(
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(r, (0, t.Z)({}, u)),
              (0, o.jsx)(i(), {
                children: (0, o.jsx)("meta", {
                  httpEquiv: "content-language",
                  content:
                    (null === u ||
                    void 0 === u ||
                    null === (n = u.website) ||
                    void 0 === n
                      ? void 0
                      : n.language) || "en",
                }),
              }),
            ],
          })
        );
      };
    },
    57805: function () {},
    74831: function () {},
    9008: function (e, n, r) {
      e.exports = r(5443);
    },
    14924: function (e, n, r) {
      "use strict";
      function t(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      r.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    26042: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = r(14924);
      function o(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            o.forEach(function (n) {
              (0, t.Z)(e, n, r[n]);
            });
        }
        return e;
      }
    },
  },
  function (e) {
    var n = function (n) {
      return e((e.s = n));
    };
    e.O(0, [9774, 179], function () {
      return n(91118), n(90387);
    });
    var r = e.O();
    _N_E = r;
  },
]);
