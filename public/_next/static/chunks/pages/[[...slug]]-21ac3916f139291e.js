(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6120],
  {
    69805: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...slug]]",
        function () {
          return t(33290);
        },
      ]);
    },
    6604: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var o = t(828),
        i = t(85893),
        r = t(67294),
        a = t(26042),
        c = t(69396),
        l = t(28308),
        u = {
          250: "duration-250",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          750: "duration-750",
        },
        d = {
          fadeIn: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 !block",
            enterTo: "opacity-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
          },
          slideFromBottom: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 translate-y-8",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-8",
          },
          slideFromRight: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 translate-x-8",
            enterTo: "opacity-100 translate-x-0",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 translate-x-0",
            leaveTo: "opacity-0 translate-x-8",
          },
          slideFromLeft: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 -translate-x-8",
            enterTo: "opacity-100 translate-x-0",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 translate-x-0",
            leaveTo: "opacity-0 -translate-x-8",
          },
          fadeAndGrow: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
          },
          zoomOut: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-105",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-105",
          },
          zoomIn: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
          },
          popUp: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-0",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-0",
          },
          none: {
            enter: "",
            enterFrom: "",
            enterTo: "",
            leave: "",
            leaveFrom: "",
            leaveTo: "",
          },
        },
        s = function (e) {
          var n,
            t = e.show,
            o = void 0 === t || t,
            s = (e.appear, e.children),
            v = e.animation,
            f = void 0 === v ? "none" : v,
            h = e.duration,
            m = void 0 === h ? 300 : h,
            p = (e.asChild, e.unmount, e.style),
            b = e.delay,
            g = e.className,
            y = (0, r.useState)(!1),
            x = y[0],
            w = y[1],
            k = null !== (n = d[f]) && void 0 !== n ? n : d.none,
            j = (0, c.Z)((0, a.Z)({}, k), {
              enter: ""
                .concat(k.enter, " ")
                .concat(u[m], " ")
                .concat(b ? "delay-".concat(b) : ""),
              leave: ""
                .concat(k.leave, " ")
                .concat(u[m], " ")
                .concat(b ? "delay-".concat(b) : ""),
            });
          return (
            (0, r.useEffect)(
              function () {
                if (o) {
                  var e = setTimeout(function () {
                    return w(!0);
                  }, 150);
                  return function () {
                    e && clearTimeout(e);
                  };
                }
              },
              [o]
            ),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("div", {
                className: (0, l.AK)(
                  "transition-all",
                  x
                    ? "".concat(j.enter, " ").concat(j.enterTo)
                    : "".concat(j.enter, " ").concat(j.enterFrom),
                  g
                ),
                style: p,
                children: s,
              }),
            })
          );
        },
        v = t(42708),
        f = "default",
        h = "medium",
        m = "none",
        p = "medium";
      var b = { slow: 750, medium: 500, fast: 250 },
        g = function (e) {
          var n = e.children,
            t = e.settings,
            a = e.globalSettings,
            c = e.unmount,
            l = void 0 !== c && c,
            u = e.delay,
            d = e.className,
            g = e.style,
            y = (function (e, n) {
              var t = e || {},
                o = t.type,
                i = void 0 === o ? f : o,
                r = t.speed,
                a = void 0 === r ? h : r;
              return (
                "default" === i &&
                  ((i = (null === n || void 0 === n ? void 0 : n.type) || m),
                  (a = (null === n || void 0 === n ? void 0 : n.speed) || p)),
                { type: i, speed: a }
              );
            })(t, a),
            x = y.type,
            w = y.speed,
            k = (0, r.useState)(!1),
            j = k[0],
            Z = k[1],
            F = (0, o.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            T = F[0],
            E = F[1];
          F[2];
          return (
            (0, r.useEffect)(
              function () {
                E && Z(!0);
              },
              [E]
            ),
            "none" === x
              ? (0, i.jsx)("div", { className: d, style: g, children: n })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    !j &&
                      (0, i.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: T,
                      }),
                    (0, i.jsx)(s, {
                      show: j,
                      animation: x,
                      duration: b[w],
                      unmount: l,
                      disableLeave: !0,
                      delay: u,
                      className: d,
                      style: g,
                      children: n,
                    }),
                  ],
                })
          );
        };
    },
    60546: function (e, n, t) {
      "use strict";
      t.d(n, {
        OC: function () {
          return u;
        },
      });
      var o = t(85893),
        i = t(67294),
        r = t(62246),
        a = t(4433),
        c = [
          {
            id: "slantLeft",
            getPath: function (e, n) {
              return "M".concat(e, " 0L-0 ").concat(n);
            },
          },
          {
            id: "slantRight",
            getPath: function (e, n) {
              return "M0 0L".concat(e, " ").concat(n);
            },
          },
          {
            id: "pointUp",
            getPath: function (e, n) {
              return "M0 0"
                .concat(n, "L")
                .concat(e / 2, " 0L")
                .concat(e, " ")
                .concat(n, "L")
                .concat(1.5 * e, " 0V0");
            },
          },
          {
            id: "pointDown",
            getPath: function (e, n) {
              return "M0 0L"
                .concat(e / 2, " ")
                .concat(n, "L")
                .concat(e, " 0");
            },
          },
          {
            id: "curveUp",
            getPath: function (e, n) {
              return "M0 0 C"
                .concat(e / 2, " ")
                .concat(n, " ")
                .concat(e - e / 2, " ")
                .concat(n, " ")
                .concat(e, " 0");
            },
          },
          {
            id: "curveDown",
            getPath: function (e, n) {
              return "M0 "
                .concat(n, " C")
                .concat(e / 2, " 0 ")
                .concat(e - e / 2, " 0 ")
                .concat(e, " ")
                .concat(n);
            },
          },
          {
            id: "waveLeft",
            getPath: function (e, n) {
              return "M0 0C0 0 "
                .concat(0.2023 * e, " ")
                .concat(n, " ")
                .concat(0.3333 * e, " ")
                .concat(n, "C")
                .concat(0.4681 * e, " ")
                .concat(n, " ")
                .concat(0.5318 * e, " 0 ")
                .concat(0.6667 * e, " 0C")
                .concat(0.8015 * e, " 0 ")
                .concat(e, " ")
                .concat(n, " ")
                .concat(e, " ")
                .concat(n);
            },
          },
          {
            id: "waveRight",
            getPath: function (e, n) {
              return "M"
                .concat(e, " 0C")
                .concat(e, " 0 ")
                .concat(0.8 * e, " ")
                .concat(n, " ")
                .concat(0.666 * e, " ")
                .concat(n, "C")
                .concat(0.547 * e, " ")
                .concat(n, " ")
                .concat(0.483 * e, " 0 ")
                .concat(0.333 * e, " 0C")
                .concat(0.184 * e, " 0 -0.00012207 ")
                .concat(n, " -0.00012207 ")
                .concat(n);
            },
          },
          {
            id: "jaggedLeft",
            getPath: function (e, n) {
              return "M0 0L"
                .concat(e / 3, " ")
                .concat(n, "L")
                .concat(e / 1.5, " 0L")
                .concat(e, " ")
                .concat(n);
            },
          },
          {
            id: "jaggedRight",
            getPath: function (e, n) {
              return "M"
                .concat(e, " 0L")
                .concat(e / 1.5, " ")
                .concat(n, "L")
                .concat(e / 3, " 0L0 ")
                .concat(n);
            },
          },
          {
            id: "swoopLeft",
            getPath: function (e, n) {
              return "M0 "
                .concat(n, "C")
                .concat(e, " 0 ")
                .concat(2 * e, " 0 ")
                .concat(2 * e, " 0");
            },
          },
          {
            id: "swoopRight",
            getPath: function (e, n) {
              return "M"
                .concat(e, " ")
                .concat(n, "C")
                .concat(e / 2, " 0 0 0 0 0");
            },
          },
          {
            id: "none",
            getPath: function (e, n) {
              return "M0 ".concat(n, "H").concat(e);
            },
          },
        ],
        l = function (e) {
          var n = e.width,
            t = e.shape,
            i = e.strokeWidth,
            r = e.strokeColor,
            l = e.strokeType,
            u = c.find(function (e) {
              return e.id === (null !== t && void 0 !== t ? t : "none");
            }),
            d = Math.floor(n),
            s = "none" === u.id ? Math.floor(i) : Math.floor(d / a.c8),
            v = u.getPath(d, s);
          return (0, o.jsx)("svg", {
            className: "absolute bottom-0 left-0 z-50 overflow-visible",
            fill: "transparent",
            width: d,
            height: s,
            viewBox: "0 0 ".concat(d, " ").concat(s),
            children: (0, o.jsx)("path", {
              d: v,
              stroke: r,
              strokeWidth: i,
              strokeDasharray: "dashed" === l ? "40 20" : void 0,
            }),
          });
        },
        u = function (e) {
          var n = e.contentRef,
            t = e.border,
            a = e.sectionDivider,
            c = t || {},
            u = c.type,
            d = c.width,
            s = c.color,
            v = (0, i.useState)(0),
            f = v[0],
            h = v[1],
            m = (0, i.useCallback)(
              function () {
                var e;
                h(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [n]
            );
          return (
            (0, r.Z)(m, t ? n : null),
            t
              ? (0, o.jsx)(l, {
                  width: f,
                  shape: a,
                  strokeType: u,
                  strokeWidth: d,
                  strokeColor: s,
                })
              : null
          );
        };
    },
    22875: function (e, n, t) {
      "use strict";
      t.d(n, {
        z: function () {
          return a;
        },
      });
      var o = t(828),
        i = t(67294),
        r = t(28308);
      function a(e) {
        (0, i.useEffect)(
          function () {
            var n,
              t,
              i,
              a,
              c,
              l,
              u,
              d,
              s,
              v,
              f,
              h,
              m,
              p,
              b,
              g,
              y,
              x,
              w = null === e || void 0 === e ? void 0 : e.fonts;
            if ("custom" === (null === w || void 0 === w ? void 0 : w.source))
              (w =
                null === e ||
                void 0 === e ||
                null === (h = e.fonts) ||
                void 0 === h
                  ? void 0
                  : h.custom),
                Object.entries(
                  null !==
                    (y = (0, r.s4)(
                      null === (m = e.fonts) ||
                        void 0 === m ||
                        null === (p = m.custom) ||
                        void 0 === p
                        ? void 0
                        : p.head
                    )) && void 0 !== y
                    ? y
                    : {}
                ).forEach(function (e) {
                  var n = (0, o.Z)(e, 2),
                    t = n[0],
                    i = n[1];
                  return document.documentElement.style.setProperty(
                    "--head-".concat(t),
                    i
                  );
                }),
                Object.entries(
                  null !==
                    (x = (0, r.s4)(
                      null === (b = e.fonts) ||
                        void 0 === b ||
                        null === (g = b.custom) ||
                        void 0 === g
                        ? void 0
                        : g.body
                    )) && void 0 !== x
                    ? x
                    : {}
                ).forEach(function (e) {
                  var n = (0, o.Z)(e, 2),
                    t = n[0],
                    i = n[1];
                  return document.documentElement.style.setProperty(
                    "--body-".concat(t),
                    i
                  );
                });
            else if (
              (null === w ||
              void 0 === w ||
              null === (n = w.head) ||
              void 0 === n
                ? void 0
                : n.name) &&
              (null === w ||
              void 0 === w ||
              null === (t = w.body) ||
              void 0 === t
                ? void 0
                : t.name)
            ) {
              var k, j;
              Object.entries(
                null !== (k = (0, r.s4)(w.body)) && void 0 !== k ? k : {}
              ).forEach(function (e) {
                var n = (0, o.Z)(e, 2),
                  t = n[0],
                  i = n[1];
                return document.documentElement.style.setProperty(
                  "--body-".concat(t),
                  i
                );
              }),
                Object.entries(
                  null !== (j = (0, r.s4)(w.head)) && void 0 !== j ? j : {}
                ).forEach(function (e) {
                  var n = (0, o.Z)(e, 2),
                    t = n[0],
                    i = n[1];
                  return document.documentElement.style.setProperty(
                    "--head-".concat(t),
                    i
                  );
                });
            }
            var Z = {
              fontFamily:
                (null === e ||
                void 0 === e ||
                null === (i = e.header) ||
                void 0 === i ||
                null === (a = i.logo) ||
                void 0 === a ||
                null === (c = a.font) ||
                void 0 === c
                  ? void 0
                  : c.family) ||
                (null === w ||
                void 0 === w ||
                null === (l = w.head) ||
                void 0 === l
                  ? void 0
                  : l.family) ||
                '"Inter", sans-serif',
              fontWeight:
                (null === e ||
                void 0 === e ||
                null === (u = e.header) ||
                void 0 === u ||
                null === (d = u.logo) ||
                void 0 === d ||
                null === (s = d.font) ||
                void 0 === s
                  ? void 0
                  : s.weight) ||
                (null === w ||
                void 0 === w ||
                null === (v = w.head) ||
                void 0 === v
                  ? void 0
                  : v.weight) ||
                500,
            };
            if (
              (Object.entries(Z).forEach(function (e) {
                var n = (0, o.Z)(e, 2),
                  t = n[0],
                  i = n[1];
                return document.documentElement.style.setProperty(
                  "--header-logo-".concat(t),
                  i
                );
              }),
              "footer" ===
                (null === e ||
                void 0 === e ||
                null === (f = e.footer) ||
                void 0 === f
                  ? void 0
                  : f.logoFrom))
            ) {
              var F,
                T,
                E,
                N,
                C,
                P,
                _,
                L,
                G = {
                  fontFamily:
                    (null === e ||
                    void 0 === e ||
                    null === (F = e.footer) ||
                    void 0 === F ||
                    null === (T = F.logo) ||
                    void 0 === T ||
                    null === (E = T.font) ||
                    void 0 === E
                      ? void 0
                      : E.family) ||
                    (null === w ||
                    void 0 === w ||
                    null === (N = w.head) ||
                    void 0 === N
                      ? void 0
                      : N.family) ||
                    '"Inter", sans-serif',
                  fontWeight:
                    (null === e ||
                    void 0 === e ||
                    null === (C = e.footer) ||
                    void 0 === C ||
                    null === (P = C.logo) ||
                    void 0 === P ||
                    null === (_ = P.font) ||
                    void 0 === _
                      ? void 0
                      : _.weight) ||
                    (null === w ||
                    void 0 === w ||
                    null === (L = w.head) ||
                    void 0 === L
                      ? void 0
                      : L.weight) ||
                    500,
                };
              Object.entries(G).forEach(function (e) {
                var n = (0, o.Z)(e, 2),
                  t = n[0],
                  i = n[1];
                return document.documentElement.style.setProperty(
                  "--footer-logo-".concat(t),
                  i
                );
              });
            }
          },
          [e]
        );
      }
    },
    399: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var o = t(67294),
        i = "website-header";
      function r(e) {
        var n;
        return e && 1 === e.idx
          ? (null ===
              (n =
                null === document || void 0 === document
                  ? void 0
                  : document.getElementById(i)) || void 0 === n
              ? void 0
              : n.offsetHeight) || 80
          : 0;
      }
      function a(e) {
        var n,
          t,
          i = (0, o.useState)(0),
          a = i[0],
          c = i[1],
          l = (0, o.useState)([0, 0]),
          u = l[0],
          d = l[1];
        return (
          (0, o.useEffect)(function () {
            var n,
              t = function () {
                d([window.innerWidth, window.innerHeight]);
              };
            try {
              var o = document.getElementById("website-header");
              (n = new ResizeObserver(function () {
                e && c(r(e));
              })),
                o && n.observe(o);
            } catch (i) {}
            return (
              window.addEventListener("resize", t),
              t(),
              function () {
                window.removeEventListener("resize", t), n && n.disconnect();
              }
            );
          }, []),
          (0, o.useEffect)(
            function () {
              e && c(r(e));
            },
            [e, u]
          ),
          {
            minHeight: (
              null === e ||
              void 0 === e ||
              null === (n = e.spacing) ||
              void 0 === n
                ? void 0
                : n.minHeight
            )
              ? "calc("
                  .concat(
                    "min-h-screen" ===
                      (null === e ||
                      void 0 === e ||
                      null === (t = e.spacing) ||
                      void 0 === t
                        ? void 0
                        : t.minHeight)
                      ? "100vh"
                      : "134px",
                    " - "
                  )
                  .concat(
                    (null === e || void 0 === e ? void 0 : e.combineWithHeader)
                      ? 0
                      : a,
                    "px)"
                  )
              : "134px",
            headerHeight: a,
          }
        );
      }
    },
    33290: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return J;
          },
          default: function () {
            return Q;
          },
        });
      var o = t(26042),
        i = t(69396),
        r = t(85893),
        a = t(28308),
        c = t(5152),
        l = t.n(c),
        u = t(67294),
        d = t(9008),
        s = t.n(d);
      function v(e) {
        var n = e.block,
          t = e.idx,
          o = e.order,
          i = (0, u.useState)(!1),
          a = i[0],
          c = i[1],
          l = (0, u.useRef)(null),
          d = (0, u.useRef)(null),
          v = null;
        if (n) {
          var f,
            h = new RegExp(
              /<div class="commonninja_component pid-(.*?)"><\/div>/,
              "igm"
            ).exec(
              null === n ||
                void 0 === n ||
                null === (f = n.embedCode) ||
                void 0 === f
                ? void 0
                : f.html
            );
          h &&
            (null === h || void 0 === h ? void 0 : h.length) > 0 &&
            (v = h.find(function (e) {
              return e.startsWith("<div");
            }));
        }
        var m = function () {
          clearTimeout(d.current),
            (d.current = setTimeout(function () {
              v && window.CommonNinja
                ? (window.CommonNinja.reload(
                    null === n || void 0 === n ? void 0 : n.externalId
                  ),
                  clearTimeout(l.current),
                  (l.current = setTimeout(function () {
                    var e,
                      t =
                        null ===
                          (e = document.querySelector(
                            ".pid-".concat(
                              null === n || void 0 === n ? void 0 : n.externalId
                            )
                          )) || void 0 === e
                          ? void 0
                          : e.shadowRoot;
                    if (t) {
                      var i = t.querySelector("#stacking-script");
                      if (i)
                        i.innerHTML =
                          ".chat-button-container { bottom: ".concat(
                            80 * o,
                            "px !important; }"
                          );
                      else {
                        var r = document.createElement("style");
                        (r.id = "stacking-script"),
                          (r.innerHTML =
                            ".chat-button-container { bottom: ".concat(
                              80 * o,
                              "px !important; }"
                            )),
                          t.appendChild(r);
                      }
                    }
                  }, 1500)))
                : (c(!0), m());
            }, 1e3));
        };
        return (
          (0, u.useEffect)(
            function () {
              m();
            },
            [v]
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(s(), {
                children:
                  a &&
                  (0, r.jsx)("script", {
                    src: "https://cdn.commoninja.com/sdk/latest/commonninja.js",
                    defer: !0,
                  }),
              }),
              v &&
                (0, r.jsx)("div", {
                  style: { zIndex: "".concat(100 - 10 * t + 1e4) },
                  className: "absolute",
                  dangerouslySetInnerHTML: { __html: v },
                }),
            ],
          })
        );
      }
      var f = t(21123),
        h = t(6604),
        m = t(52077),
        p = {
          left: "left-6",
          right: "right-6",
          center: "left-0 right-0 flex justify-center",
        };
      function b(e) {
        var n = e.block,
          t = e.website,
          o = e.idx,
          i =
            (null === n || void 0 === n ? void 0 : n.content) ||
            "This website uses cookies",
          c = null === n || void 0 === n ? void 0 : n.button,
          l = (null === n || void 0 === n ? void 0 : n.position) || "center",
          d = null === n || void 0 === n ? void 0 : n.animation,
          s = null === t || void 0 === t ? void 0 : t.animation,
          v = btoa("cookie-notice"),
          b = btoa("true"),
          g = (0, u.useState)("#FFFFFF"),
          y = g[0],
          x = g[1],
          w = (0, u.useState)(!0),
          k = w[0],
          j = w[1];
        return (
          (0, u.useEffect)(function () {
            (0, a.ej)(v) === b && j(!1);
          }, []),
          k
            ? (0, r.jsx)("div", {
                style: { zIndex: "".concat(100 - 10 * o + 1e4) },
                className: (0, a.AK)("fixed bottom-6", p[l]),
                children: (0, r.jsxs)(h.Z, {
                  settings: d,
                  globalSettings: s,
                  delay: 500,
                  className:
                    "relative rounded-lg overflow-hidden shadow-md max-w-[90vw]",
                  children: [
                    (0, r.jsx)(f.Z, { block: n, website: t, setTextColor: x }),
                    (0, r.jsxs)("div", {
                      className:
                        "relative z-10 flex flex-wrap gap-6 items-center justify-center p-2 pl-4 text-center",
                      children: [
                        (0, r.jsx)("div", {
                          className: "rich-text-block website-wysiwyg",
                          style: { color: y },
                          dangerouslySetInnerHTML: { __html: i },
                        }),
                        c &&
                          (0, r.jsx)(m.Z, {
                            className: "cursor-pointer",
                            button: c,
                            block: n,
                            website: t,
                            onClick: function () {
                              j(!1), (0, a.d8)(v, b);
                            },
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : null
        );
      }
      var g = t(22875),
        y = t(75871),
        x = t(399),
        w = t(4433),
        k = t(60546),
        j = t(62246),
        Z = t(34715),
        F = t(10990),
        T = function (e) {
          var n = e.pictures,
            t = e.style,
            o = e.removeColor,
            i = e.speed,
            c = e.align,
            l = e.direction,
            d = (0, u.useRef)(),
            s = (0, u.useRef)(),
            v = (0, u.useRef)(),
            f = "right" === l ? 1 : -1,
            h = (0, u.useState)(1),
            m = h[0],
            p = h[1],
            b = (0, u.useCallback)(
              function () {
                for (
                  var e = function (e) {
                      n.forEach(function (n, i) {
                        var c, l;
                        o.push(
                          (0, r.jsx)(
                            "div",
                            {
                              className: (0, a.AK)(
                                "relative flex flex-shrink-0 h-12 md:h-16 w-auto",
                                "carousel" === t ? "pr-20" : ""
                              ),
                              children: (0, r.jsx)("img", {
                                className: "h-full",
                                src:
                                  null === n ||
                                  void 0 === n ||
                                  null === (c = n.media) ||
                                  void 0 === c
                                    ? void 0
                                    : c.url,
                                alt:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.altText,
                              }),
                            },
                            "picture-"
                              .concat(e, "-")
                              .concat(i, "-")
                              .concat(
                                null === n ||
                                  void 0 === n ||
                                  null === (l = n.media) ||
                                  void 0 === l
                                  ? void 0
                                  : l.url
                              )
                          )
                        );
                      });
                    },
                    o = [],
                    i = 0;
                  i < m;
                  i++
                )
                  e(i);
                return (0, r.jsx)(r.Fragment, { children: o });
              },
              [n, m, t]
            );
          return (
            (0, j.Z)(
              function () {
                var e,
                  t,
                  o,
                  i,
                  r,
                  a =
                    null === (e = d.current) || void 0 === e
                      ? void 0
                      : e.offsetWidth,
                  c =
                    null ===
                      (i =
                        null ===
                          (o = Array.from(
                            null !==
                              (r =
                                null === (t = s.current) || void 0 === t
                                  ? void 0
                                  : t.children) && void 0 !== r
                              ? r
                              : []
                          )) || void 0 === o
                          ? void 0
                          : o.slice(0, n.length)) || void 0 === i
                      ? void 0
                      : i.reduce(function (e, n) {
                          return e + n.offsetWidth;
                        }, 0);
                if (c > 0) {
                  var l = Math.max(1, Math.ceil(a / c));
                  p(2 * l);
                }
              },
              "carousel" === t ? d : null
            ),
            (0, Z.V)(
              function () {
                "carousel" === t &&
                  i > 0 &&
                  (v.current = F.p8.to(s.current, {
                    x: "-50%",
                    duration: 60 - 0.3 * i,
                    repeat: -1,
                    ease: "none",
                    runBackwards: 1 === f,
                  }));
              },
              { scope: s, dependencies: [t, f, i], revertOnUpdate: !0 }
            ),
            (0, u.useEffect)(
              function () {
                "grid" === t && p(1);
              },
              [t]
            ),
            (0, r.jsx)("div", {
              className: "flex overflow-hidden w-full",
              style:
                "carousel" === t
                  ? {
                      WebkitMask:
                        "linear-gradient(90deg, transparent, white 5% 95%, transparent)",
                      mask: "linear-gradient(90deg, transparent, white 5% 95%, transparent)",
                    }
                  : {},
              ref: d,
              children: (0, r.jsx)("div", {
                className: (0, a.AK)(
                  "flex items-center w-full",
                  "carousel" === t ? "" : "flex-wrap gap-20",
                  "center" === c ? "justify-center" : "",
                  o ? "grayscale" : ""
                ),
                ref: s,
                style: "carousel" === t ? { minWidth: "max-content" } : {},
                children: b(),
              }),
            })
          );
        };
      function E(e) {
        var n = e.id,
          t = e.block,
          c = e.website,
          l = e.previousBlock,
          d = e.stickyHeaderOffsetStyle,
          s = null === t || void 0 === t ? void 0 : t.headline,
          v = null === t || void 0 === t ? void 0 : t.align,
          m = null === t || void 0 === t ? void 0 : t.style,
          p = null === t || void 0 === t ? void 0 : t.speed,
          b = null === t || void 0 === t ? void 0 : t.direction,
          g = null === t || void 0 === t ? void 0 : t.fullWidth,
          y = null === t || void 0 === t ? void 0 : t.animation,
          j = null === c || void 0 === c ? void 0 : c.animation,
          Z = null === t || void 0 === t ? void 0 : t.divider,
          F = null === t || void 0 === t ? void 0 : t.border,
          E = (null === t || void 0 === t ? void 0 : t.pictures) || [],
          N = null === t || void 0 === t ? void 0 : t.removeColor,
          C = (0, u.useState)("#FFFFFF"),
          P = C[0],
          _ = C[1],
          L = (0, x.Z)(t).minHeight,
          G = (0, u.useRef)(null);
        return (
          (null === t || void 0 === t ? void 0 : t.fullHeight) &&
            ((null === t || void 0 === t ? void 0 : t.spacing) ||
              (t.spacing = {}),
            (t.spacing = (0, i.Z)((0, o.Z)({}, t.spacing), {
              top: "none",
              bottom: "none",
            }))),
          (0, r.jsxs)("section", {
            className: "relative",
            children: [
              (0, r.jsxs)("div", {
                ref: G,
                id: n,
                className: (0, a.AK)(
                  "flex flex-none relative",
                  (0, a.A2)(
                    (null === t || void 0 === t ? void 0 : t.verticalAlign) ||
                      "center"
                  )
                ),
                style: (0, o.Z)({ minHeight: L }, (0, w.$h)(t), d),
                children: [
                  (0, r.jsx)(f.Z, { block: t, website: c, setTextColor: _ }),
                  (0, r.jsx)("div", {
                    className: (0, a.AK)(
                      "relative z-10 mx-auto",
                      (0, a.bG)(
                        null === t || void 0 === t ? void 0 : t.spacing
                      ),
                      "carousel" === m && g ? "w-full" : "container"
                    ),
                    children: (0, r.jsxs)(h.Z, {
                      settings: y,
                      globalSettings: j,
                      children: [
                        s &&
                          (0, r.jsx)("h2", {
                            className: (0, a.AK)(
                              "heading-large mb-20 break-word transition-all duration-300",
                              "carousel" === m && g ? "container mx-auto" : "",
                              "center" === v ? "text-center" : ""
                            ),
                            style: (0, o.Z)({ color: P }, a.j2),
                            children: s,
                          }),
                        (0, r.jsx)(T, {
                          pictures: E,
                          style: m,
                          removeColor: N,
                          speed: p,
                          direction: b,
                          align: v,
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(w.iz, {
                    contentRef: G,
                    divider: Z,
                    previousDivider:
                      null === l || void 0 === l ? void 0 : l.divider,
                    border: F,
                    previousBorder:
                      null === l || void 0 === l ? void 0 : l.border,
                    dividerUniqueId: "".concat(n, "-").concat(Z),
                  }),
                ],
              }),
              F &&
                (0, r.jsx)(k.OC, {
                  contentRef: G,
                  border: F,
                  sectionDivider: Z,
                }),
            ],
          })
        );
      }
      var N = (0, r.jsx)("div", {
          className: "min-h-150 flex-shrink-0 flex-grow",
        }),
        C = l()(
          function () {
            return Promise.resolve().then(t.bind(t, 165));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [165];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !1,
          }
        ),
        P = l()(
          function () {
            return t.e(529).then(t.bind(t, 60529));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [60529];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !1,
          }
        ),
        _ = l()(
          function () {
            return t.e(2258).then(t.bind(t, 82258));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82258];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        L = l()(
          function () {
            return Promise.all([t.e(3752), t.e(258)]).then(t.bind(t, 10258));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [10258];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        G = l()(
          function () {
            return Promise.all([t.e(3752), t.e(8037)]).then(t.bind(t, 98037));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [98037];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !1,
          }
        ),
        M = l()(
          function () {
            return t.e(6383).then(t.bind(t, 76383));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [76383];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        S = l()(
          function () {
            return t.e(866).then(t.bind(t, 50866));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [50866];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        W = l()(
          function () {
            return t.e(3509).then(t.bind(t, 33509));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [33509];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        B = l()(
          function () {
            return t.e(1202).then(t.bind(t, 71202));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [71202];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !1,
          }
        ),
        H = l()(
          function () {
            return Promise.all([t.e(1940), t.e(2686)]).then(t.bind(t, 52686));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [52686];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !1,
          }
        ),
        R = l()(
          function () {
            return Promise.all([t.e(120), t.e(696), t.e(6162)]).then(
              t.bind(t, 6162)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6162];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        O = l()(
          function () {
            return Promise.all([t.e(120), t.e(696), t.e(1552)]).then(
              t.bind(t, 71552)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [71552];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        I = l()(
          function () {
            return t.e(7626).then(t.bind(t, 27626));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [27626];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        z = l()(
          function () {
            return t.e(6848).then(t.bind(t, 16848));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [16848];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !1,
          }
        ),
        A = l()(
          function () {
            return t.e(7033).then(t.bind(t, 97033));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [97033];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        K = l()(
          function () {
            return t.e(3090).then(t.bind(t, 63090));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [63090];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        U = l()(
          function () {
            return t.e(9078).then(t.bind(t, 29078));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [29078];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        D = l()(
          function () {
            return t.e(5268).then(t.bind(t, 5268));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5268];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        q = l()(
          function () {
            return t.e(6232).then(t.bind(t, 86232));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [86232];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        V = l()(
          function () {
            return t.e(721).then(t.bind(t, 40721));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [40721];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        X = l()(
          function () {
            return t.e(2037).then(t.bind(t, 22037));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [22037];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        $ = l()(
          function () {
            return t.e(5500).then(t.bind(t, 25500));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [25500];
              },
            },
            loading: function () {
              return N;
            },
            ssr: !0,
          }
        ),
        Y = function (e) {
          var n,
            t,
            c,
            l,
            d = e.page,
            s = e.website,
            f = e.apiUrl,
            h = e.captchaKey;
          e.ipAddress, e.pt;
          (0, g.z)(s);
          var m = (0, u.useMemo)(
              function () {
                return (0, y.M)(s);
              },
              [s]
            ),
            p = function (e, n, t) {
              var a;
              if (
                "durable" ===
                (null === n ||
                void 0 === n ||
                null === (a = n.WebsiteBlock) ||
                void 0 === a
                  ? void 0
                  : a.source)
              ) {
                var c,
                  l,
                  u = (function (e) {
                    if (e) {
                      var n = 0,
                        t = !0,
                        o = !1,
                        i = void 0;
                      try {
                        for (
                          var r, a = e[Symbol.iterator]();
                          !(t = (r = a.next()).done);
                          t = !0
                        ) {
                          var c = r.value;
                          if (
                            ["contact", "hero", "text"].includes(
                              c.WebsiteBlock.type
                            )
                          ) {
                            var l,
                              u =
                                null === c ||
                                void 0 === c ||
                                null === (l = c.content) ||
                                void 0 === l
                                  ? void 0
                                  : l.match(/<h1(.*?)>(.+?)<\/h1>/gi);
                            if (
                              (null === u || void 0 === u ? void 0 : u.length) >
                              0
                            )
                              return n;
                          } else if (
                            ![
                              "embed",
                              "image",
                              "instagram",
                              "quote",
                              "video",
                            ].includes(c.WebsiteBlock.type) &&
                            c.headline
                          )
                            return n;
                          n++;
                        }
                      } catch (d) {
                        (o = !0), (i = d);
                      } finally {
                        try {
                          t || null == a.return || a.return();
                        } finally {
                          if (o) throw i;
                        }
                      }
                    }
                    return null;
                  })(null === d || void 0 === d ? void 0 : d.blocks),
                  v = u === e,
                  p =
                    (null === n ||
                    void 0 === n ||
                    null === (c = n.WebsiteBlock) ||
                    void 0 === c
                      ? void 0
                      : c.type) || "",
                  b = ""
                    .concat(
                      null === d || void 0 === d ? void 0 : d.slug,
                      "-website-block-"
                    )
                    .concat(
                      null === (l = n.WebsiteBlock) || void 0 === l
                        ? void 0
                        : l._id,
                      "-"
                    )
                    .concat(e),
                  g = "".concat(p, "-").concat(e),
                  y = {
                    "data-type-id": g,
                    block: n,
                    id: n._id || g,
                    isSeoHeadline: v,
                    key: b,
                    page: d,
                    previousBlock: t,
                    stickyHeaderOffsetStyle: m,
                    website: s,
                  };
                switch (p) {
                  case "banner":
                    return (0, r.jsx)(_, (0, o.Z)({}, y));
                  case "contact":
                    return 2 === n.version
                      ? (0, r.jsx)(
                          O,
                          (0, i.Z)((0, o.Z)({}, y), {
                            captchaKey: h,
                            apiUrl: f,
                          })
                        )
                      : (0, r.jsx)(
                          R,
                          (0, i.Z)((0, o.Z)({}, y), {
                            captchaKey: h,
                            apiUrl: f,
                          })
                        );
                  case "gallery":
                  case "image-carousel":
                  case "image-grid":
                    return (0, r.jsx)(G, (0, o.Z)({}, y));
                  case "hero":
                    return (0, r.jsx)(M, (0, o.Z)({}, y));
                  case "list":
                  case "service-list":
                  case "team-list":
                    return (0, r.jsx)(W, (0, o.Z)({}, y));
                  case "location":
                    return (0, r.jsx)(H, (0, o.Z)({}, y));
                  case "quote":
                    return (0, r.jsx)(L, (0, o.Z)({}, y));
                  case "text":
                    return (0, r.jsx)(S, (0, o.Z)({}, y));
                  case "video":
                    return (0, r.jsx)(B, (0, o.Z)({}, y));
                  case "embed":
                    return (0, r.jsx)(I, (0, o.Z)({}, y));
                  case "image":
                    return (0, r.jsx)(z, (0, o.Z)({}, y));
                  case "calendly-scheduling":
                    return (0, r.jsx)(A, (0, o.Z)({}, y));
                  case "instagram":
                    return (null === n || void 0 === n ? void 0 : n.native)
                      ? (0, r.jsx)(U, (0, o.Z)({}, y))
                      : (0, r.jsx)(K, (0, o.Z)({}, y));
                  case "pricing-table":
                    return (0, r.jsx)(q, (0, o.Z)({}, y));
                  case "faq":
                    return (0, r.jsx)(V, (0, o.Z)({}, y));
                  case "google-reviews":
                    return (0, r.jsx)(X, (0, o.Z)({}, y));
                  case "cta":
                    return (0, r.jsx)($, (0, o.Z)({}, y));
                  case "logo-showcase":
                    return (0, r.jsx)(E, (0, o.Z)({}, y));
                }
              } else {
                var x, w, k;
                if (
                  "common-ninja" ===
                  (null === n ||
                  void 0 === n ||
                  null === (x = n.WebsiteBlock) ||
                  void 0 === x
                    ? void 0
                    : x.source)
                )
                  return (0, r.jsx)(
                    D,
                    {
                      id:
                        n._id ||
                        "common-ninja-"
                          .concat(
                            null === n ||
                              void 0 === n ||
                              null === (w = n.WebsiteBlock) ||
                              void 0 === w
                              ? void 0
                              : w.type,
                            "-"
                          )
                          .concat(e),
                      block: n,
                      website: s,
                      previousBlock: t,
                    },
                    ""
                      .concat(
                        null === d || void 0 === d ? void 0 : d.slug,
                        "-website-block-"
                      )
                      .concat(
                        null === (k = n.WebsiteBlock) || void 0 === k
                          ? void 0
                          : k._id,
                        "-"
                      )
                      .concat(e)
                  );
              }
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              d && "parent" !== d.type
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      null === (n = d.blocks) || void 0 === n
                        ? void 0
                        : n.map(function (e, n) {
                            return p(n, e, n > 0 ? d.blocks[n - 1] : null);
                          }),
                      (null === s ||
                      void 0 === s ||
                      null === (t = s.widgets) ||
                      void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        (function (e) {
                          var n = (0, a.p$)(e).reverse(),
                            t = 0;
                          return (
                            n.forEach(function (e) {
                              "cookie_bar" === e.type
                                ? (e.idx = 0)
                                : ((e.idx = t), t++);
                            }),
                            n
                          );
                        })(s.widgets).map(function (e, n) {
                          return "cookie-notice" === e.type
                            ? (0, r.jsx)(
                                b,
                                { idx: n, order: e.idx, block: e, website: s },
                                "widget-".concat(n)
                              )
                            : (0, r.jsx)(
                                v,
                                { idx: n, order: e.idx, block: e },
                                "page-"
                                  .concat(
                                    null === d || void 0 === d ? void 0 : d._id,
                                    "-"
                                  )
                                  .concat(
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.externalId
                                  )
                              );
                        }),
                    ],
                  })
                : (0, r.jsx)(P, { website: s }),
              (0, r.jsx)(
                C,
                {
                  website: s,
                  previousBlock:
                    (null === d ||
                    void 0 === d ||
                    null === (c = d.blocks) ||
                    void 0 === c
                      ? void 0
                      : c.length) > 0
                      ? null === d || void 0 === d
                        ? void 0
                        : d.blocks[
                            (null === d ||
                            void 0 === d ||
                            null === (l = d.blocks) ||
                            void 0 === l
                              ? void 0
                              : l.length) - 1
                          ]
                      : null,
                },
                "footer-page-".concat(
                  null === d || void 0 === d ? void 0 : d._id
                )
              ),
            ],
          });
        };
      Y.getLayout = function (e) {
        return (0, a.G0)(e, { hideFooter: !0 });
      };
      var J = !0,
        Q = Y;
    },
  },
  function (e) {
    e.O(0, [8802, 2379, 6907, 8308, 9774, 2888, 179], function () {
      return (n = 69805), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
