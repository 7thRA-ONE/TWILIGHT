"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8308],
  {
    52077: function (e, o, l) {
      l.d(o, {
        Z: function () {
          return v;
        },
      });
      var n = l(26042),
        t = l(69396),
        i = l(85893),
        r = l(41664),
        a = l.n(r),
        s = l(16494),
        d = l(28308),
        c = l(67294),
        u = l(7004);
      function v(e) {
        var o = e.button,
          l = e.type,
          r = e.block,
          v = e.website,
          f = e.action,
          m = e.loading,
          h = e.className,
          g = e.onClick,
          p = (0, c.useState)({
            borderWidth: 2,
            borderStyle: "solid",
            boxShadow: "none",
            fontFamily: "var(--body-fontFamily)",
            fontWeight: "var(--body-fontWeight)",
            fontStyle: "var(--body-fontStyle)",
          }),
          x = p[0],
          y = p[1];
        return (
          (0, c.useEffect)(
            function () {
              if (o && r && v) {
                var e,
                  l,
                  i,
                  a =
                    (null === (e = v.colorPalette) ||
                    void 0 === e ||
                    null === (l = e.Palette) ||
                    void 0 === l
                      ? void 0
                      : l.colors) ||
                    (null === (i = v.colorPalette) || void 0 === i
                      ? void 0
                      : i.colors) ||
                    [];
                if (a.length > 0 && !v.noPaletteSupport) {
                  var s,
                    c,
                    u,
                    f,
                    m,
                    h,
                    g =
                      a[
                        (0, d.dz)(
                          null === (s = r.layers) || void 0 === s
                            ? void 0
                            : s.palette
                        )
                      ] || a[0];
                  if (!o.style) {
                    var p = v.button || {
                      background: v.secondaryColor,
                      cornerRadius: 8,
                      style: "solid",
                    };
                    p.background || (p.background = v.secondaryColor),
                      (o.style = {
                        type: p.style,
                        cornerRadius: p.cornerRadius,
                        name: "custom",
                      });
                  }
                  if (
                    "custom" ===
                    (null === (c = r.layers) || void 0 === c
                      ? void 0
                      : c.palette)
                  )
                    g = {
                      color:
                        null === (u = r.layers) ||
                        void 0 === u ||
                        null === (f = u.overlay) ||
                        void 0 === f
                          ? void 0
                          : f.color1,
                      accent:
                        null === (m = r.layers) ||
                        void 0 === m ||
                        null === (h = m.foreground) ||
                        void 0 === h
                          ? void 0
                          : h.accent,
                    };
                  if ("custom" === o.style.name)
                    y(function (e) {
                      return (0,
                      t.Z)((0, n.Z)({}, e), { backgroundColor: "outline" === o.style.type ? "transparent" : g.accent, color: "outline" === o.style.type ? (0, d.$O)(g.color) : (0, d.$O)(g.accent), borderRadius: o.style.cornerRadius, borderColor: "outline" === o.style.type ? (0, d.$O)(g.color) : g.accent });
                    });
                  else {
                    var x = (v.buttons && v.buttons[o.style.name]) || {
                      type: "solid",
                      cornerRadius: 0,
                    };
                    y(function (e) {
                      return (0,
                      t.Z)((0, n.Z)({}, e), { backgroundColor: "outline" === x.type ? "transparent" : g.accent, color: "outline" === x.type ? (0, d.$O)(g.color) : (0, d.$O)(g.accent), borderRadius: x.cornerRadius, borderColor: "outline" === x.type ? (0, d.$O)(g.color) : g.accent });
                    });
                  }
                } else {
                  var b = v.button || {
                    background: v.secondaryColor,
                    cornerRadius: 8,
                    style: "solid",
                  };
                  b.background || (b.background = v.secondaryColor),
                    y(function (e) {
                      return (0,
                      t.Z)((0, n.Z)({}, e), { backgroundColor: "outline" === b.style ? "transparent" : b.background, color: "outline" === b.style ? b.background : (0, d.$O)(b.background), borderRadius: isNaN(b.cornerRadius) ? 8 : b.cornerRadius, borderColor: b.background });
                    });
                }
              }
            },
            [o, r, v]
          ),
          f || "submit" === l || "section" === o.type
            ? (0, i.jsx)("button", {
                type: "submit" === l ? "submit" : "button",
                onClick: function (e) {
                  return (0, u.Gc)(e, o, f);
                },
                className: (0, d.AK)("button", h),
                style: x,
                disabled: m,
                children: m ? (0, i.jsx)(s.Z, {}) : o.label,
              })
            : g
            ? (0, i.jsx)("a", {
                className: (0, d.AK)("button", h),
                style: x,
                onClick: g,
                children: o.label,
              })
            : (0, i.jsx)(a(), {
                href: (0, u.f$)(o, v),
                children: (0, i.jsx)("a", {
                  className: (0, d.AK)("button", h),
                  target: (0, u.U9)(o, v),
                  rel:
                    "_blank" === (0, u.U9)(o, v) ? "noopener noreferrer" : null,
                  style: x,
                  children: o.label,
                }),
              })
        );
      }
    },
    4433: function (e, o, l) {
      l.d(o, {
        $h: function () {
          return c;
        },
        c8: function () {
          return s;
        },
        iz: function () {
          return v;
        },
      });
      var n = l(26042),
        t = l(69396),
        i = l(85893),
        r = l(67294),
        a = l(62246),
        s = 1928 / 118,
        d = [
          {
            id: "slantLeft",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M".concat(e, " 0L-0 ").concat(o, "V0H").concat(e);
            },
          },
          {
            id: "slantRight",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 0L".concat(e, " ").concat(o, "V0H0");
            },
          },
          {
            id: "pointUp",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 0V"
                .concat(o, "L")
                .concat(e / 2, " 0L")
                .concat(e, " ")
                .concat(o, "L")
                .concat(1.5 * e, " 0V0H0");
            },
          },
          {
            id: "pointDown",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 0L"
                .concat(e / 2, " ")
                .concat(o, "L")
                .concat(e, " 0H0");
            },
          },
          {
            id: "curveUp",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 0 C"
                .concat(e / 2, " ")
                .concat(o, " ")
                .concat(e - e / 2, " ")
                .concat(o, " ")
                .concat(e, " 0 L")
                .concat(e, " 0 L0 0");
            },
          },
          {
            id: "curveDown",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 "
                .concat(o, " C")
                .concat(e / 2, " 0 ")
                .concat(e - e / 2, " 0 ")
                .concat(e, " ")
                .concat(o, " L")
                .concat(e, " 0 L0 0");
            },
          },
          {
            id: "waveLeft",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 0C0 0 "
                .concat(0.2023 * e, " ")
                .concat(o, " ")
                .concat(0.3333 * e, " ")
                .concat(o, "C")
                .concat(0.4681 * e, " ")
                .concat(o, " ")
                .concat(0.5318 * e, " 0 ")
                .concat(0.6667 * e, " 0C")
                .concat(0.8015 * e, " 0 ")
                .concat(e, " ")
                .concat(o, " ")
                .concat(e, " ")
                .concat(o, "V0H0Z");
            },
          },
          {
            id: "waveRight",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M"
                .concat(e, " 0C")
                .concat(e, " 0 ")
                .concat(0.8 * e, " ")
                .concat(o, " ")
                .concat(0.666 * e, " ")
                .concat(o, "C")
                .concat(0.547 * e, " ")
                .concat(o, " ")
                .concat(0.483 * e, " 0 ")
                .concat(0.333 * e, " 0C")
                .concat(0.184 * e, " 0 -0.00012207 ")
                .concat(o, " -0.00012207 ")
                .concat(o, "V0H")
                .concat(e);
            },
          },
          {
            id: "jaggedLeft",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 0L"
                .concat(e / 3, " ")
                .concat(o, "L")
                .concat(e / 1.5, " 0L")
                .concat(e, " ")
                .concat(o, "V0H0");
            },
          },
          {
            id: "jaggedRight",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M"
                .concat(e, " 0L")
                .concat(e / 1.5, " ")
                .concat(o, "L")
                .concat(e / 3, " 0L0 ")
                .concat(o, "V0H")
                .concat(e);
            },
          },
          {
            id: "swoopLeft",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M0 "
                .concat(o, "C")
                .concat(e, " 0 ")
                .concat(2 * e, " 0 ")
                .concat(2 * e, " 0H0V")
                .concat(o);
            },
          },
          {
            id: "swoopRight",
            getPath: function (e) {
              var o = Math.floor(e / s);
              return "M"
                .concat(e, " ")
                .concat(o, "C")
                .concat(e / 2, " 0 0 0 0 0H")
                .concat(2 * e, "V")
                .concat(o);
            },
          },
        ];
      function c(e) {
        return { zIndex: 40 - (null === e || void 0 === e ? void 0 : e.idx) };
      }
      var u = function (e) {
          var o = e.uniqueId,
            l = e.width,
            n = e.height,
            t = e.divider,
            r = Math.floor(l / s),
            a = Math.floor(l),
            c = Math.floor(n),
            u = Math.floor(n - r),
            v = d.find(function (e) {
              return e.id === t;
            });
          return (0, i.jsx)("svg", {
            className: "absolute bottom-0 left-0",
            width: a,
            height: c,
            viewBox: "0 0 ".concat(a, " ").concat(c),
            children: (0, i.jsxs)("clipPath", {
              id: o,
              children: [
                (0, i.jsx)("rect", {
                  width: a,
                  height: u,
                  fill: "transparent",
                }),
                (0, i.jsx)("path", {
                  d: v.getPath(a),
                  transform: "translate(0, ".concat(u, ")"),
                  fill: "transparent",
                }),
              ],
            }),
          });
        },
        v = function (e) {
          var o = e.contentRef,
            l = e.divider,
            d = e.previousDivider,
            c = e.border,
            v = e.previousBorder,
            f = e.combinedWithHeaderOffset,
            m = e.dividerUniqueId,
            h = e.noPadding,
            g = e.onPaddingChange,
            p = function (e) {
              var o,
                l,
                n = getComputedStyle(e);
              return (
                parseInt(
                  null !== (o = n.paddingTop) && void 0 !== o ? o : "0"
                ) +
                parseInt(
                  null !== (l = n.paddingBottom) && void 0 !== l ? l : "0"
                )
              );
            },
            x = (0, r.useState)({ width: 0, height: 0 }),
            y = x[0],
            b = x[1],
            w = (0, r.useState)({ top: 0, bottom: 0 }),
            j = w[0],
            N = w[1],
            k = !!l,
            C = !!d;
          (0, r.useEffect)(
            function () {
              if (C) {
                var e = Math.floor((y.width || window.innerWidth) / s);
                (o.current.style.marginTop = "-" + (e + 1) + "px"),
                  (o.current.style.paddingTop = h ? "" : e + 1 + "px"),
                  N(function (o) {
                    return (0, t.Z)((0, n.Z)({}, o), { top: e + 1 });
                  });
              } else if (void 0 !== f)
                N(function (e) {
                  return (0, t.Z)((0, n.Z)({}, e), { top: f });
                });
              else if (v) {
                var l = v.width / 2;
                (o.current.style.paddingTop = "".concat(l, "px")),
                  N(function (e) {
                    return (0, t.Z)((0, n.Z)({}, e), { top: l });
                  });
              } else
                (o.current.style.marginTop = ""),
                  (o.current.style.paddingTop = ""),
                  N(function (e) {
                    return (0, t.Z)((0, n.Z)({}, e), { top: 0 });
                  });
            },
            [C, y.width, f, h, v]
          ),
            (0, r.useEffect)(
              function () {
                if (k) {
                  var e = Math.floor((y.width || window.innerWidth) / s);
                  (o.current.style.paddingBottom = h ? "" : e + "px"),
                    (o.current.style.clipPath = "url(#".concat(m, ")")),
                    (o.current.style.WebkitClipPath = "url(#".concat(m, ")")),
                    o.current.classList.add("fix-safari-flickering"),
                    N(function (o) {
                      return (0, t.Z)((0, n.Z)({}, o), { bottom: e });
                    });
                } else {
                  if (c) {
                    var l = c.width / 2;
                    (o.current.style.paddingBottom = "".concat(l, "px")),
                      N(function (e) {
                        return (0, t.Z)((0, n.Z)({}, e), { bottom: l });
                      });
                  } else
                    (o.current.style.paddingBottom = ""),
                      N(function (e) {
                        return (0, t.Z)((0, n.Z)({}, e), { bottom: 0 });
                      });
                  o.current.style.clipPath = "";
                }
              },
              [k, y.width, h, c]
            );
          var F = (0, r.useCallback)(
            function () {
              var e, l;
              b({
                width:
                  null !== (e = o.current.offsetWidth) && void 0 !== e ? e : 0,
                height:
                  (null !== (l = o.current.offsetHeight) && void 0 !== l
                    ? l
                    : 0) - p(o.current),
              });
            },
            [o]
          );
          return (
            (0, r.useEffect)(
              function () {
                "function" === typeof g && g(j);
              },
              [j]
            ),
            (0, a.Z)(F, k || C ? o : null),
            l
              ? (0, i.jsx)(u, {
                  uniqueId: m,
                  width: y.width,
                  height: y.height + (h ? 0 : j.top + j.bottom),
                  divider: l,
                })
              : null
          );
        };
    },
    74007: function (e, o, l) {
      l.d(o, {
        Z: function () {
          return c;
        },
      });
      var n = l(85893),
        t = l(67294),
        i = l(72510),
        r = l(11355),
        a = l(28308),
        s = l(40944),
        d = l(13880);
      function c(e) {
        var o = e.className,
          l = e.icon,
          c = e.iconClassName,
          u = e.button,
          v = e.buttonClassName,
          f = e.openClassName,
          m = e.iconOpenClassName,
          h = e.children,
          g = e.inline,
          p = e.itemsContainerClass,
          x = e.disabled,
          y = e.itemsContainerStyle,
          b = e.openUp,
          w = void 0 !== b && b,
          j = function () {
            F(
              (function (e) {
                if (!e) return !1;
                var o = e.getBoundingClientRect();
                return !(
                  o.left >= 0 &&
                  o.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
                );
              })(N.current)
            );
          },
          N = (0, t.useRef)(),
          k = (0, t.useState)(!1),
          C = k[0],
          F = k[1];
        return (0, n.jsx)(i.v, {
          as: "div",
          className: (0, a.AK)("relative inline-block text-left", o),
          onClick: function (e) {
            return e.stopPropagation();
          },
          children: function (e) {
            var o = e.open;
            return (0, n.jsxs)(d.bv, {
              portal: !0,
              children: [
                (0, n.jsx)(i.v.Button, {
                  className: (0, a.AK)(
                    v,
                    o ? f : "",
                    "cursor-pointer z-5 focus:outline-none"
                  ),
                  disabled: x,
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children:
                    u ||
                    (0, n.jsx)(s.Z, {
                      icon: l || "DotsVerticalIcon",
                      className: (0, a.AK)(
                        c,
                        "h-5 w-5",
                        o ? m || "text-indigo-500" : "text-gray-500"
                      ),
                    }),
                }),
                (0, n.jsx)(r.u, {
                  show: o,
                  as: t.Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  ref: N,
                  beforeEnter: j,
                  afterLeave: function () {
                    return F(!1);
                  },
                  children: (0, n.jsx)(i.v.Items, {
                    className: (0, a.AK)(
                      p,
                      "z-100 max-h-60 py-3 px-6 rounded-lg bg-white focus:outline-none overflow-y-auto space-y-2 shadow-lg",
                      g ? "static" : "absolute",
                      w ? "bottom-full mb-10" : "mt-2",
                      C ? "right-0" : "left-0"
                    ),
                    style: y,
                    children: h,
                  }),
                }),
              ],
            });
          },
        });
      }
    },
    40944: function (e, o, l) {
      var n = l(40872),
        t = l(85893),
        i = l(91874);
      o.Z = function (e) {
        var o = (0, n.Z)({}, i)[e.icon];
        return o
          ? (0, t.jsx)(o, {
              className: e.className,
              onClick: e.onClick,
              "aria-hidden": "true",
            })
          : "<></>";
      };
    },
    7004: function (e, o, l) {
      l.d(o, {
        Gc: function () {
          return i;
        },
        U9: function () {
          return t;
        },
        f$: function () {
          return n;
        },
      });
      var n = function (e, o) {
          if (e) {
            if ("email" === e.type) return "mailto:" + e.link;
            if ("phone" === e.type) return "tel:" + e.link;
            if ("page" === e.type) {
              var l,
                n,
                t,
                i =
                  null === o ||
                  void 0 === o ||
                  null === (l = o.pages) ||
                  void 0 === l
                    ? void 0
                    : l.find(function (o) {
                        return o._id === e.page;
                      }),
                r = (null === i || void 0 === i ? void 0 : i.Parent)
                  ? null === o ||
                    void 0 === o ||
                    null === (n = o.pages) ||
                    void 0 === n
                    ? void 0
                    : n.find(function (e) {
                        return (
                          e._id ===
                          (null === i || void 0 === i ? void 0 : i.Parent)
                        );
                      })
                  : null,
                a = "";
              return (
                r && (a += "".concat(r.slug, "/")),
                (a +=
                  null !== (t = null === i || void 0 === i ? void 0 : i.slug) &&
                  void 0 !== t
                    ? t
                    : "/")
              );
            }
            return "section" === e.type
              ? "#" + e.link
              : (null === e ||
                void 0 === e ||
                null === (s = e.link) ||
                void 0 === s
                  ? void 0
                  : s.includes("http")) ||
                (null === e ||
                void 0 === e ||
                null === (d = e.link) ||
                void 0 === d
                  ? void 0
                  : d.includes("https"))
              ? e.link
              : (null === e || void 0 === e ? void 0 : e.link) &&
                "#" !== (null === e || void 0 === e ? void 0 : e.link)
              ? "/" === (null === e || void 0 === e ? void 0 : e.link)
                ? "/"
                : "https://" + (null === e || void 0 === e ? void 0 : e.link)
              : "#";
            var s, d;
          }
          return "#";
        },
        t = function (e, o) {
          var l,
            n,
            t,
            i =
              null === o ||
              void 0 === o ||
              null === (l = o.pages) ||
              void 0 === l
                ? void 0
                : l.find(function (o) {
                    return (
                      o._id === (null === e || void 0 === e ? void 0 : e.page)
                    );
                  });
          return (null === e || void 0 === e ? void 0 : e.newPage)
            ? "_blank"
            : (null === i || void 0 === i ? void 0 : i.forceRender)
            ? "_parent"
            : (
                null === o ||
                void 0 === o ||
                null === (n = o.button) ||
                void 0 === n
                  ? void 0
                  : n.target
              )
            ? null === o ||
              void 0 === o ||
              null === (t = o.button) ||
              void 0 === t
              ? void 0
              : t.target
            : "_self";
        };
      var i = function (e, o, l) {
        var n = function () {
          t = !0;
        };
        if ("function" !== typeof l) {
          if ("section" === (null === o || void 0 === o ? void 0 : o.type)) {
            e.preventDefault();
            var t = !1,
              i = document.getElementById(o.link);
            i &&
              ((parent = (function (e, o) {
                var l = getComputedStyle(e),
                  n = "absolute" === l.position,
                  t = o ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
                if ("fixed" === l.position) return document.body;
                for (var i = e; (i = i.parentElement); )
                  if (
                    ((l = getComputedStyle(i)),
                    (!n || "static" !== l.position) &&
                      t.test(l.overflow + l.overflowY + l.overflowX))
                  )
                    return i;
                return document.body;
              })(i)),
              parent.addEventListener("scroll", n),
              i.scrollIntoView({ behavior: "smooth" }),
              setTimeout(function () {
                if ((parent.removeEventListener("scroll", n), !t)) {
                  parent.style["scroll-behavior"] = "smooth";
                  var e = document.createElement("a");
                  (e.href = "#" + o.link), e.click();
                }
              }, 50));
          }
        } else l(e);
      };
    },
    16494: function (e, o, l) {
      l.d(o, {
        Z: function () {
          return i;
        },
      });
      var n = l(85893),
        t = l(28308);
      function i(e) {
        var o = e.text,
          l = e.className,
          i = e.classNameChild;
        switch (e.variant) {
          case "form":
            return (0, n.jsx)("div", {
              className: "w-full max-w-screen-sm my-8",
              children: (0, n.jsxs)("div", {
                className: "animate-pulse flex space-y-8 flex-col",
                children: [
                  (0, n.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, n.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/2",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-5/6",
                      }),
                    ],
                  }),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, n.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/4",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-1/2",
                      }),
                    ],
                  }),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, n.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/4",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-1/2",
                      }),
                    ],
                  }),
                  (0, n.jsx)("hr", {}),
                  (0, n.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, n.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/6",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-3/4",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4",
                  }),
                ],
              }),
            });
          case "skeleton":
            return (0, n.jsx)("div", {
              className: l,
              children: (0, n.jsx)("div", {
                className: "animate-pulse",
                children: (0, n.jsx)("div", {
                  className: (0, t.AK)("h-6 bg-gray-200 rounded", i),
                }),
              }),
            });
          case "table":
            return (0, n.jsx)("div", {
              className: "w-full my-8",
              children: (0, n.jsxs)("div", {
                className: "animate-pulse flex space-y-2 flex-col",
                children: [
                  (0, n.jsxs)("div", {
                    className: "space-x-2 flex",
                    children: [
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, n.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                    ],
                  }),
                  [1, 2, 3, 4, 5, 6].map(function (e) {
                    return (0,
                    n.jsxs)("div", { className: "space-x-2 flex", children: [(0, n.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, n.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, n.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, n.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, n.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, n.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" })] }, e);
                  }),
                ],
              }),
            });
          default:
            return (0, n.jsxs)("div", {
              className: (0, t.AK)("inline-flex items-center", l),
              children: [
                (0, n.jsxs)("svg", {
                  className: (0, t.AK)(
                    "animate-spin ml-1 mr-3 h-4 w-4",
                    l && "text-indigo-600"
                  ),
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    (0, n.jsx)("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    (0, n.jsx)("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                o || "" === o ? o : "Loading...",
              ],
            });
        }
      }
    },
    10198: function (e, o, l) {
      l.d(o, {
        TR: function () {
          return c;
        },
        i6: function () {
          return d;
        },
        yA: function () {
          return u;
        },
      });
      var n = l(26042),
        t = l(85893),
        i = l(28308),
        r = l(41664),
        a = l.n(r),
        s = l(67294),
        d = function (e, o) {
          var l,
            n,
            t,
            r = (0, i.p$)(e);
          return (
            (r.siteName = r.siteName || r.businessName || ""),
            (r.logo = {
              type:
                (null === e || void 0 === e ? void 0 : e.showLogo) &&
                ((null === o || void 0 === o ? void 0 : o.logo) ||
                  (null === e || void 0 === e ? void 0 : e.customLogo))
                  ? "image"
                  : "text-icon",
              showText: !!r.siteName,
              font:
                null === o ||
                void 0 === o ||
                null === (l = o.fonts) ||
                void 0 === l
                  ? void 0
                  : l.head,
              showIcon: !1,
              source:
                (null === e || void 0 === e ? void 0 : e.source) || "branding",
              media: null === e || void 0 === e ? void 0 : e.customLogo,
              height: {
                desktop:
                  (null === e ||
                  void 0 === e ||
                  null === (n = e.logoDesktop) ||
                  void 0 === n
                    ? void 0
                    : n.height) || 80,
                mobile:
                  (null === e ||
                  void 0 === e ||
                  null === (t = e.logoMobile) ||
                  void 0 === t
                    ? void 0
                    : t.height) || 40,
              },
            }),
            r
          );
        },
        c = function (e) {
          var o,
            l,
            r,
            d = e.className,
            c = e.text,
            u = e.logo,
            v = e.color,
            f = e.forceRender,
            m = e.location,
            h = void 0 === m ? "header" : m,
            g = function () {
              var e = document.createRange(),
                o = x.current.childNodes[0];
              (x.current.style.width = "auto"),
                e.setStartBefore(o),
                e.setEndAfter(o);
              var l = e.getBoundingClientRect(),
                n = Math.min(Math.max(l.width, 0), 200);
              x.current.style.width = "".concat(n, "px");
            },
            p = (0, i.ac)("(max-width: 1023px)"),
            x = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(
              function () {
                if (
                  x.current &&
                  (null === u || void 0 === u ? void 0 : u.showIcon) &&
                  (null === u || void 0 === u ? void 0 : u.icon)
                )
                  return (
                    setTimeout(function () {
                      g();
                    }, 100),
                    window.addEventListener("resize", g),
                    function () {
                      window.removeEventListener("resize", g);
                    }
                  );
              },
              [x, c]
            ),
            ((null === u || void 0 === u ? void 0 : u.showIcon) &&
              (null === u || void 0 === u ? void 0 : u.icon)) ||
            ((null === u || void 0 === u ? void 0 : u.showText) && c)
              ? (0, t.jsx)(a(), {
                  href: "/",
                  children: (0, t.jsxs)("a", {
                    className: (0, i.AK)(
                      (null === u || void 0 === u ? void 0 : u.showIcon) &&
                        (null === u ||
                        void 0 === u ||
                        null === (o = u.icon) ||
                        void 0 === o
                          ? void 0
                          : o.url)
                        ? "flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left"
                        : "grid max-w-full",
                      d
                    ),
                    target: f ? "_parent" : "_self",
                    children: [
                      (null === u || void 0 === u ? void 0 : u.showIcon) &&
                        (null === u || void 0 === u ? void 0 : u.icon) &&
                        (0, t.jsx)("div", {
                          className:
                            "flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12",
                          children: (0, t.jsx)("div", {
                            className: "absolute w-full h-full",
                            style: {
                              backgroundColor: v || "#1F2937",
                              WebkitMaskImage: 'url("'.concat(
                                null === u ||
                                  void 0 === u ||
                                  null === (l = u.icon) ||
                                  void 0 === l
                                  ? void 0
                                  : l.url,
                                '")'
                              ),
                              maskImage: 'url("'.concat(
                                null === u ||
                                  void 0 === u ||
                                  null === (r = u.icon) ||
                                  void 0 === r
                                  ? void 0
                                  : r.url,
                                '")'
                              ),
                              WebkitMaskPosition: "center",
                              maskPosition: "center",
                              WebkitMaskRepeat: "no-repeat",
                              maskRepeat: "no-repeat",
                              WebkitMaskSize: "contain",
                              maskSize: "contain",
                            },
                          }),
                        }),
                      (null === u || void 0 === u ? void 0 : u.showText) &&
                        c &&
                        (0, t.jsx)("h2", {
                          ref: x,
                          className: (0, i.AK)(
                            "heading-small lg:heading-medium",
                            !(
                              (null === u || void 0 === u
                                ? void 0
                                : u.showIcon) &&
                              (null === u || void 0 === u ? void 0 : u.icon)
                            ) &&
                              "whitespace-nowrap overflow-hidden overflow-ellipsis"
                          ),
                          style: (0, n.Z)(
                            { color: v },
                            (function () {
                              var e;
                              if (
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.showText) &&
                                c &&
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.showIcon) &&
                                (null === u ||
                                void 0 === u ||
                                null === (e = u.icon) ||
                                void 0 === e
                                  ? void 0
                                  : e.url)
                              ) {
                                var o =
                                    (6 / (c.length || 0) + 0.66) *
                                    (p ? 18 : 22),
                                  l = Math.min(Math.max(o, 16), 40);
                                return {
                                  fontSize: "".concat(l, "px"),
                                  lineHeight: 1.2,
                                };
                              }
                              return {};
                            })(),
                            {
                              fontFamily: "var(--".concat(
                                h,
                                "-logo-fontFamily)"
                              ),
                              fontWeight: "var(--".concat(
                                h,
                                "-logo-fontWeight)"
                              ),
                            }
                          ),
                          children: c,
                        }),
                    ],
                  }),
                })
              : null
          );
        };
      function u(e) {
        var o = e.src,
          l = e.text,
          n = e.height;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("img", {
              className: "hidden lg:block transition-all object-contain",
              src: o,
              alt: l,
              style: {
                height:
                  ((null === n || void 0 === n ? void 0 : n.desktop) || 80) +
                  "px",
              },
            }),
            (0, t.jsx)("img", {
              className: "lg:hidden transition-all object-contain",
              src: o,
              alt: l,
              style: {
                height:
                  ((null === n || void 0 === n ? void 0 : n.mobile) || 40) +
                  "px",
              },
            }),
          ],
        });
      }
    },
    21123: function (e, o, l) {
      l.d(o, {
        Z: function () {
          return c;
        },
      });
      var n = l(26042),
        t = l(69396),
        i = l(85893),
        r = l(67294),
        a = l(28308),
        s = l(29260),
        d = l.n(s);
      function c(e) {
        var o,
          l,
          s,
          c = e.block,
          u = e.website,
          v = e.setTextColor,
          f = e.onChange,
          m = (0, r.useState)(null),
          h = m[0],
          g = m[1];
        return (
          (0, r.useEffect)(
            function () {
              if (u && c) {
                var e,
                  o,
                  l,
                  i,
                  r =
                    (null === u ||
                    void 0 === u ||
                    null === (e = u.colorPalette) ||
                    void 0 === e ||
                    null === (o = e.Palette) ||
                    void 0 === o
                      ? void 0
                      : o.colors) ||
                    (null === u ||
                    void 0 === u ||
                    null === (l = u.colorPalette) ||
                    void 0 === l
                      ? void 0
                      : l.colors) ||
                    [];
                if (
                  null === (i = c.layers) || void 0 === i ? void 0 : i.palette
                )
                  if ("custom" === c.layers.palette)
                    g(null === c || void 0 === c ? void 0 : c.layers);
                  else {
                    var s,
                      d,
                      v,
                      f,
                      m,
                      h,
                      p,
                      x,
                      y = (0, a.dz)(c.layers.palette),
                      b = {};
                    if (
                      "gradient" ===
                      (null === (s = c.layers.overlay) || void 0 === s
                        ? void 0
                        : s.type)
                    )
                      b = {
                        type: "gradient",
                        color1:
                          null === (f = r[y]) || void 0 === f
                            ? void 0
                            : f.color,
                        color2:
                          null === (m = r[y % 2 === 0 ? y + 1 : y - 1]) ||
                          void 0 === m
                            ? void 0
                            : m.color,
                        accent:
                          null === (h = r[y]) || void 0 === h
                            ? void 0
                            : h.accent,
                      };
                    else
                      b = {
                        type: "solid",
                        color1:
                          null === (p = r[y]) || void 0 === p
                            ? void 0
                            : p.color,
                        accent:
                          null === (x = r[y]) || void 0 === x
                            ? void 0
                            : x.accent,
                      };
                    g(
                      (0, t.Z)(
                        (0, n.Z)(
                          {},
                          null === c || void 0 === c ? void 0 : c.layers
                        ),
                        {
                          overlay: (0, n.Z)(
                            {},
                            null === c ||
                              void 0 === c ||
                              null === (d = c.layers) ||
                              void 0 === d
                              ? void 0
                              : d.overlay,
                            b
                          ),
                          foreground: {
                            accent:
                              (null === (v = r[y]) || void 0 === v
                                ? void 0
                                : v.accent) || (0, a.$O)(b.color1 || "#FFFFFF"),
                          },
                        }
                      )
                    );
                  }
                else {
                  var w,
                    j,
                    N,
                    k,
                    C,
                    F,
                    Z,
                    S,
                    A,
                    R,
                    P,
                    _ = { type: "solid" },
                    M = { enabled: !1 };
                  if (
                    "object" ===
                    typeof (null === c || void 0 === c ? void 0 : c.background)
                  )
                    if (
                      "image" ===
                      (null === c ||
                      void 0 === c ||
                      null === (j = c.background) ||
                      void 0 === j
                        ? void 0
                        : j.type)
                    )
                      (_.color1 = (
                        null === (k = c.background.overlay) || void 0 === k
                          ? void 0
                          : k.color.includes("rgba")
                      )
                        ? (0, a.s)(
                            null === (C = c.background.overlay) || void 0 === C
                              ? void 0
                              : C.color
                          )
                        : null === (F = c.background.overlay) || void 0 === F
                        ? void 0
                        : F.color),
                        (M.enabled = !0),
                        (M.media =
                          null === c ||
                          void 0 === c ||
                          null === (Z = c.background) ||
                          void 0 === Z
                            ? void 0
                            : Z.image),
                        (M.positionX =
                          (null === (S = c.background) || void 0 === S
                            ? void 0
                            : S.imagePositionX) || "50%"),
                        (M.positionY =
                          (null === (A = c.background) || void 0 === A
                            ? void 0
                            : A.imagePositionY) || "50%"),
                        (M.opacity =
                          (null === (R = c.background) ||
                          void 0 === R ||
                          null === (P = R.overlay) ||
                          void 0 === P
                            ? void 0
                            : P.amount) || 50);
                    else if (
                      "gradient" ===
                      (null === c ||
                      void 0 === c ||
                      null === (N = c.background) ||
                      void 0 === N
                        ? void 0
                        : N.type)
                    ) {
                      var L, I, T;
                      (_.type = "gradient"),
                        (_.color1 =
                          null === c ||
                          void 0 === c ||
                          null === (L = c.background) ||
                          void 0 === L
                            ? void 0
                            : L.color),
                        (_.color2 =
                          null === c ||
                          void 0 === c ||
                          null === (I = c.background) ||
                          void 0 === I
                            ? void 0
                            : I.color2),
                        (_.direction =
                          null ===
                            (T = a.mQ.find(function (e) {
                              var o;
                              return (
                                e.value ===
                                (null === c ||
                                void 0 === c ||
                                null === (o = c.background) ||
                                void 0 === o
                                  ? void 0
                                  : o.direction)
                              );
                            })) || void 0 === T
                            ? void 0
                            : T.id);
                    } else {
                      var E;
                      _.color1 =
                        null === c ||
                        void 0 === c ||
                        null === (E = c.background) ||
                        void 0 === E
                          ? void 0
                          : E.color;
                    }
                  else
                    _.color1 =
                      (null === c || void 0 === c ? void 0 : c.background) ||
                      "#FFFFFF";
                  g({
                    palette: "custom",
                    image: M,
                    overlay: _,
                    foreground: {
                      accent:
                        (null === (w = r[0]) || void 0 === w
                          ? void 0
                          : w.accent) || (0, a.$O)(_.color1 || "#FFFFFF"),
                    },
                  });
                }
              }
            },
            [c, u]
          ),
          (0, r.useEffect)(
            function () {
              h &&
                ("function" === typeof v &&
                  v((0, a.$O)(h.overlay.color1 || "#FFFFFF")),
                "function" === typeof f && f(h));
            },
            [h]
          ),
          (0, i.jsx)(i.Fragment, {
            children:
              h &&
              (0, i.jsxs)("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                  (0, i.jsx)("div", {
                    className: "absolute inset-0 z-10",
                    style: (function () {
                      var e,
                        o,
                        l,
                        n,
                        t,
                        i,
                        r,
                        s = {};
                      "solid" ===
                      (null === h ||
                      void 0 === h ||
                      null === (e = h.overlay) ||
                      void 0 === e
                        ? void 0
                        : e.type)
                        ? (s = {
                            backgroundColor:
                              null === h ||
                              void 0 === h ||
                              null === (l = h.overlay) ||
                              void 0 === l
                                ? void 0
                                : l.color1,
                          })
                        : (s = {
                            backgroundImage: "linear-gradient("
                              .concat(
                                a.mQ.find(function (e) {
                                  var o;
                                  return (
                                    e.id ===
                                    ((null === h ||
                                    void 0 === h ||
                                    null === (o = h.overlay) ||
                                    void 0 === o
                                      ? void 0
                                      : o.direction) || "top-down")
                                  );
                                }).value,
                                ", "
                              )
                              .concat(
                                null !==
                                  (i =
                                    null === h ||
                                    void 0 === h ||
                                    null === (n = h.overlay) ||
                                    void 0 === n
                                      ? void 0
                                      : n.color1) && void 0 !== i
                                  ? i
                                  : "#FFFFFF",
                                ", "
                              )
                              .concat(
                                null !==
                                  (r =
                                    null === h ||
                                    void 0 === h ||
                                    null === (t = h.overlay) ||
                                    void 0 === t
                                      ? void 0
                                      : t.color2) && void 0 !== r
                                  ? r
                                  : "#D1D5DB",
                                ")"
                              ),
                          });
                      if (
                        null === h ||
                        void 0 === h ||
                        null === (o = h.image) ||
                        void 0 === o
                          ? void 0
                          : o.enabled
                      ) {
                        var d,
                          c,
                          u = isNaN(
                            null === h ||
                              void 0 === h ||
                              null === (d = h.image) ||
                              void 0 === d
                              ? void 0
                              : d.opacity
                          )
                            ? 50
                            : null === h ||
                              void 0 === h ||
                              null === (c = h.image) ||
                              void 0 === c
                            ? void 0
                            : c.opacity;
                        s.opacity = u / 100;
                      }
                      return s;
                    })(),
                  }),
                  (null === (o = h.image) || void 0 === o
                    ? void 0
                    : o.enabled) &&
                    h.image.media &&
                    (0, i.jsx)("div", {
                      className: "absolute inset-0 z-0 bg-white",
                      children: (0, i.jsx)(d(), {
                        sizes: "200vw",
                        quality: 90,
                        priority:
                          (null === c || void 0 === c ? void 0 : c.idx) <= 1,
                        alt: "background",
                        src:
                          (null === (l = h.image.media) || void 0 === l
                            ? void 0
                            : l.preview) ||
                          (null === (s = h.image.media) || void 0 === s
                            ? void 0
                            : s.url) ||
                          h.image.media,
                        layout: "fill",
                        objectFit: "cover",
                        objectPosition: ""
                          .concat(h.image.positionX || "center", " ")
                          .concat(h.image.positionY || "center"),
                      }),
                    }),
                ],
              }),
          })
        );
      }
    },
    75654: function (e, o, l) {
      l.d(o, {
        Q: function () {
          return N;
        },
        W: function () {
          return j;
        },
      });
      var n = l(85893),
        t = l(28308),
        i = l(71029),
        r = l(85296),
        a = l(44171),
        s = l(43180),
        d = l(10151),
        c = l(36234),
        u = l(66909),
        v = l(49791),
        f = l(28239),
        m = l(48192),
        h = l(94206),
        g = l(95115),
        p = l(13487),
        x = l(23863),
        y = l(14892),
        b = l(62458),
        w = function (e) {
          var o = e.type,
            l = e.className,
            t = e.style;
          switch (o) {
            case "angi":
              return (0, n.jsx)(i.Z, { className: l, style: t });
            case "behance":
              return (0, n.jsx)(r.Z, { className: l, style: t });
            case "dribbble":
              return (0, n.jsx)(a.Z, { className: l, style: t });
            case "facebook":
              return (0, n.jsx)(s.Z, { className: l, style: t });
            case "homeadvisor":
              return (0, n.jsx)(d.Z, { className: l, style: t });
            case "instagram":
              return (0, n.jsx)(c.Z, { className: l, style: t });
            case "linkedin":
              return (0, n.jsx)(u.Z, { className: l, style: t });
            case "pinterest":
              return (0, n.jsx)(v.Z, { className: l, style: t });
            case "tiktok":
              return (0, n.jsx)(f.Z, { className: l, style: t });
            case "thumbtack":
              return (0, n.jsx)(m.Z, { className: l, style: t });
            case "twitter":
              return (0, n.jsx)(h.Z, { className: l, style: t });
            case "twitterold":
              return (0, n.jsx)(g.Z, { className: l, style: t });
            case "youtube":
              return (0, n.jsx)(p.Z, { className: l, style: t });
            case "medium":
              return (0, n.jsx)(x.Z, { className: l, style: t });
            case "threads":
              return (0, n.jsx)(y.Z, { className: l, style: t });
            case "telegram":
              return (0, n.jsx)(b.Z, { className: l, style: t });
            default:
              return null;
          }
        },
        j = [
          { id: "facebook", host: "facebook.com" },
          { id: "twitter", host: "twitter.com" },
          { id: "twitterold", host: "twitter.com" },
          { id: "linkedin", host: "linkedin.com" },
          { id: "youtube", host: "youtube.com" },
          { id: "pinterest", host: "pinterest.com" },
          { id: "instagram", host: "instagram.com" },
          { id: "tiktok", host: "tiktok.com" },
          { id: "thumbtack", host: "thumbtack.com" },
          { id: "homeadvisor", host: "homeadvisor.com" },
          { id: "angi", host: "angi.com" },
          { id: "behance", host: "behance.net" },
          { id: "dribbble", host: "dribbble.com" },
          { id: "medium", host: "medium.com" },
          { id: "threads", host: "threads.net" },
          { id: "telegram", host: "t.me" },
        ],
        N = function (e) {
          var o,
            l,
            i,
            r,
            a,
            s,
            d,
            c,
            u = e.icon,
            v = e.color,
            f = e.settings,
            m = void 0 === f ? {} : f,
            h = (m.size = null !== (r = m.size) && void 0 !== r ? r : "large"),
            g = (m.shape = null !== (a = m.shape) && void 0 !== a ? a : "none"),
            p = (m.style =
              null !== (s = m.style) && void 0 !== s ? s : "solid"),
            x =
              "large" === h
                ? "w-8 h-8"
                : "medium" === h
                ? "w-7 h-7"
                : "w-6 h-6",
            y = {};
          return (
            "none" !== g &&
              (y = (function () {
                var e =
                    "large" === h
                      ? "w-12 h-12"
                      : "medium" === h
                      ? "w-10 h-10"
                      : "w-8 h-8",
                  o =
                    "circle" === g
                      ? "rounded-full"
                      : "square" === g
                      ? "rounded-none"
                      : "rounded" === g
                      ? "rounded-md"
                      : "",
                  l = "solid" === p ? v : "outline" === p ? "transparent" : "",
                  n = "outline" === p ? "border" : "";
                return {
                  classes: (0, t.AK)(e, o, n),
                  styles: { backgroundColor: l, borderColor: v },
                };
              })()),
            (0, n.jsxs)("div", {
              className: (0, t.AK)(
                "flex justify-center items-center",
                null !== (d = y.classes) && void 0 !== d ? d : ""
              ),
              style: null !== (c = y.styles) && void 0 !== c ? c : {},
              children: [
                "custom" !== u.type &&
                  (0, n.jsx)(w, {
                    type: u.type,
                    className: (0, t.AK)(x),
                    style: {
                      color: "none" === g || "outline" === p ? v : (0, t.$O)(v),
                    },
                  }),
                "custom" === u.type &&
                  (null === (o = u.icon) || void 0 === o ? void 0 : o._id) &&
                  (0, n.jsx)("div", {
                    className: (0, t.AK)("flex-shrink-0 relative", x),
                    children: (0, n.jsx)("div", {
                      className: "absolute w-full h-full",
                      style: {
                        backgroundColor:
                          "none" === g || "outline" === p ? v : (0, t.$O)(v),
                        WebkitMaskImage: 'url("'.concat(
                          null === (l = u.icon) || void 0 === l
                            ? void 0
                            : l.url,
                          '")'
                        ),
                        maskImage: 'url("'.concat(
                          null === (i = u.icon) || void 0 === i
                            ? void 0
                            : i.url,
                          '")'
                        ),
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      },
                    }),
                  }),
              ],
            })
          );
        };
    },
    165: function (e, o, l) {
      l.r(o),
        l.d(o, {
          default: function () {
            return w;
          },
        });
      var n = l(26042),
        t = l(85893),
        i = l(28308),
        r = l(67294),
        a = l(41664),
        s = l.n(a),
        d = l(90387),
        c = l(52077),
        u = l(90434),
        v = l(41984),
        f = l(43751),
        m = l(72510),
        h = l(94053),
        g = l(74007),
        p = l(75654),
        x = l(21123),
        y = l(4433),
        b = l(10198);
      function w(e) {
        var o,
          l,
          a,
          w,
          j = e.website,
          N = e.previousBlock,
          k = (0, r.useState)(!1),
          C = k[0],
          F = k[1],
          Z = (0, r.useState)(""),
          S = Z[0],
          A = Z[1],
          R = (0, r.useState)(null),
          P = R[0],
          _ = R[1],
          M = (0, r.useState)("#FFFFFF"),
          L = M[0],
          I = M[1],
          T = (0, r.useState)("#000000"),
          E = T[0],
          z = T[1],
          D = (0, r.useRef)(null),
          B = (0, d.useRouter)(),
          W = null === j || void 0 === j ? void 0 : j.footer;
        W &&
          W.showName &&
          (null === W.businessName || void 0 === W.businessName) &&
          (W.businessName =
            null === j ||
            void 0 === j ||
            null === (w = j.Business) ||
            void 0 === w
              ? void 0
              : w.name);
        !W ||
          (null !== W.businessAddress && void 0 !== W.businessAddress) ||
          (W.businessAddress = "");
        var K = null === j || void 0 === j ? void 0 : j.header,
          O =
            null === j || void 0 === j || null === (o = j.pages) || void 0 === o
              ? void 0
              : o.find(function (e) {
                  return !e.slug && e.default;
                }),
          $ =
            null ===
              (a =
                null === (l = j.pages) || void 0 === l
                  ? void 0
                  : l.filter(function (e) {
                      return !0 === e.showOnFooter || void 0 === e.showOnFooter;
                    })) || void 0 === a
              ? void 0
              : a
                  .map(function (e) {
                    var o = {
                      href: "/".concat(e.slug || ""),
                      name: e.label,
                      current:
                        B.asPath === "/".concat(e.slug || "") ||
                        B.asPath.includes("/".concat(e.slug, "/")),
                      type: e.type,
                      forceRender: e.forceRender,
                    };
                    return "parent" === o.type &&
                      ((o.nests = j.pages
                        .filter(function (o) {
                          return o.Parent === e._id;
                        })
                        .map(function (o) {
                          return {
                            href: "/".concat(e.slug, "/").concat(o.slug || ""),
                            name: o.label,
                            current:
                              B.asPath ===
                              "/".concat(e.slug, "/").concat(o.slug || ""),
                            forceRender: o.forceRender,
                          };
                        })),
                      0 === o.nests.length)
                      ? null
                      : o;
                  })
                  .filter(function (e) {
                    return null !== e;
                  }),
          H = function () {
            var e,
              o,
              l,
              n,
              r,
              a = W;
            ((0, i.$K)(null === a || void 0 === a ? void 0 : a.logo) &&
              (0, i.$K)(null === a || void 0 === a ? void 0 : a.siteName)) ||
              !j ||
              (a = (0, b.i6)(W, j)),
              "header" === W.logoFrom &&
                (a = (0, i.$K)(null === K || void 0 === K ? void 0 : K.logo)
                  ? K
                  : (0, b.i6)(K, j));
            var d = "";
            if (
              ("stacked-right" ===
              (null === W || void 0 === W ? void 0 : W.style)
                ? (d = "justify-end")
                : "stacked-center" ===
                  (null === W || void 0 === W ? void 0 : W.style)
                ? (d = "justify-center")
                : "simple-center" ===
                    (null === W || void 0 === W ? void 0 : W.style) &&
                  (d = "justify-center lg:justify-end mx-auto lg:mx-0"),
              "image" ===
                (null === a ||
                void 0 === a ||
                null === (e = a.logo) ||
                void 0 === e
                  ? void 0
                  : e.type) &&
                "branding" ===
                  (null === a ||
                  void 0 === a ||
                  null === (o = a.logo) ||
                  void 0 === o
                    ? void 0
                    : o.source) &&
                (null === j || void 0 === j ? void 0 : j.logo))
            ) {
              var c,
                u = (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo);
              return (0, t.jsx)(s(), {
                href: "/",
                children: (0, t.jsx)("a", {
                  className: (0, i.AK)("flex", d),
                  target: (null === O || void 0 === O ? void 0 : O.forceRender)
                    ? "_parent"
                    : "_self",
                  children:
                    u &&
                    (0, t.jsx)(b.yA, {
                      src: u,
                      text: null === a || void 0 === a ? void 0 : a.siteName,
                      height:
                        null === a ||
                        void 0 === a ||
                        null === (c = a.logo) ||
                        void 0 === c
                          ? void 0
                          : c.height,
                    }),
                }),
              });
            }
            if (
              "image" ===
                (null === a ||
                void 0 === a ||
                null === (l = a.logo) ||
                void 0 === l
                  ? void 0
                  : l.type) &&
              "upload" ===
                (null === a ||
                void 0 === a ||
                null === (n = a.logo) ||
                void 0 === n
                  ? void 0
                  : n.source) &&
              (null === a ||
              void 0 === a ||
              null === (r = a.logo) ||
              void 0 === r
                ? void 0
                : r.media)
            ) {
              var v,
                f,
                m = (0, i.QW)(
                  null === a ||
                    void 0 === a ||
                    null === (v = a.logo) ||
                    void 0 === v
                    ? void 0
                    : v.media
                );
              return (0, t.jsx)(s(), {
                href: "/",
                children: (0, t.jsx)("a", {
                  className: (0, i.AK)("flex", d),
                  target: (null === O || void 0 === O ? void 0 : O.forceRender)
                    ? "_parent"
                    : "_self",
                  children:
                    m &&
                    (0, t.jsx)(b.yA, {
                      src: m,
                      text: null === a || void 0 === a ? void 0 : a.siteName,
                      height:
                        null === a ||
                        void 0 === a ||
                        null === (f = a.logo) ||
                        void 0 === f
                          ? void 0
                          : f.height,
                    }),
                }),
              });
            }
            return (0, t.jsx)(b.TR, {
              className: d,
              logo: null === a || void 0 === a ? void 0 : a.logo,
              text: null === a || void 0 === a ? void 0 : a.siteName,
              location: W.logoFrom || "footer",
              color: E,
              forceRender: null === O || void 0 === O ? void 0 : O.forceRender,
            });
          },
          q = function () {
            if (0 === (null === $ || void 0 === $ ? void 0 : $.length))
              return (0, t.jsx)(t.Fragment, {});
            var e = (0, i.h)(L, -10);
            return (
              (e !== E && e !== L) || (e = (0, i.h)(L, 10)),
              (0, t.jsx)("ul", {
                className: (0, i.AK)(
                  "flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6",
                  "stacked-right" ===
                    (null === W || void 0 === W ? void 0 : W.style) &&
                    "justify-end items-end",
                  ("stacked-center" ===
                    (null === W || void 0 === W ? void 0 : W.style) ||
                    "simple-center" ===
                      (null === W || void 0 === W ? void 0 : W.style)) &&
                    "justify-center items-center"
                ),
                style: { color: E },
                children:
                  null === $ || void 0 === $
                    ? void 0
                    : $.filter(function (e) {
                        return "nested" !== e.type;
                      }).map(function (o) {
                        var l;
                        return (0, t.jsx)(
                          "li",
                          {
                            className: "border-b-2",
                            style: {
                              borderColor: o.current
                                ? "".concat(E)
                                : "transparent",
                            },
                            children:
                              "parent" === o.type
                                ? (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(g.Z, {
                                        className: "!hidden lg:!inline-block",
                                        openUp: !0,
                                        buttonClassName:
                                          "inline-flex items-center gap-2 pb-1.5",
                                        itemsContainerClass:
                                          "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                        button: (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "body-normal whitespace-nowrap",
                                              children: o.name,
                                            }),
                                            (0, t.jsx)(u.Z, {
                                              className: "w-4 h-4",
                                            }),
                                          ],
                                        }),
                                        itemsContainerStyle: {
                                          backgroundColor: e,
                                          color: E,
                                        },
                                        children:
                                          null === (l = o.nests) || void 0 === l
                                            ? void 0
                                            : l.map(function (e) {
                                                return (0,
                                                t.jsx)(m.v.Item, { children: (0, t.jsx)(s(), { href: e.href, legacyBehavior: !1, className: "block py-2 body-normal border-b-2", style: { borderColor: e.current ? "".concat(E) : "transparent" }, target: e.forceRender ? "_parent" : "_self", children: e.name }) }, "page-link-".concat(e.href));
                                              }),
                                      }),
                                      (0, t.jsxs)("button", {
                                        className:
                                          "inline-flex lg:hidden items-center gap-2",
                                        onClick: function () {
                                          F(!0), _(o.nests);
                                        },
                                        children: [
                                          (0, t.jsx)("span", {
                                            className: "body-normal",
                                            children: o.name,
                                          }),
                                          (0, t.jsx)(v.Z, {
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, t.jsx)(s(), {
                                    href: o.href,
                                    children: (0, t.jsx)("a", {
                                      className: "block pb-1.5 body-normal",
                                      target: o.forceRender
                                        ? "_parent"
                                        : "_self",
                                      children: o.name,
                                    }),
                                  }),
                          },
                          "footer-page-link-".concat(o.href)
                        );
                      }),
              })
            );
          },
          U = function () {
            return (null === j || void 0 === j ? void 0 : j.social) &&
              0 !== (null === j || void 0 === j ? void 0 : j.social.length)
              ? (0, t.jsx)("ul", {
                  className: (0, i.AK)(
                    "flex items-center gap-x-4 gap-y-2 flex-wrap",
                    "stacked-right" ===
                      (null === W || void 0 === W ? void 0 : W.style) &&
                      "justify-end",
                    ("stacked-center" ===
                      (null === W || void 0 === W ? void 0 : W.style) ||
                      "simple-center" ===
                        (null === W || void 0 === W ? void 0 : W.style)) &&
                      "justify-center"
                  ),
                  children:
                    Array.isArray(j.social) &&
                    j.social.map(function (e, o) {
                      var l = p.W.find(function (o) {
                          return o.id === e.type;
                        }),
                        n = e.link;
                      return (
                        "custom" !== e.type &&
                          ((n = (n = e.link
                            .replace(
                              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,
                              ""
                            )
                            .replace(/https?:/g, "")
                            .replace(/^\/\/?/g, "")).replace(
                            null === l || void 0 === l ? void 0 : l.host,
                            ""
                          )),
                          (n = "https://"
                            .concat(
                              null === l || void 0 === l ? void 0 : l.host,
                              "/"
                            )
                            .concat(n))),
                        (0, t.jsx)(
                          "li",
                          {
                            children: (0, t.jsx)(s(), {
                              href: n,
                              children: (0, t.jsx)("a", {
                                target: "_blank",
                                children: (0, t.jsx)(p.Q, {
                                  icon: e,
                                  color: E,
                                  settings: j.socialSettings,
                                }),
                              }),
                            }),
                          },
                          "social-icon-header-".concat(o)
                        )
                      );
                    }),
                })
              : (0, t.jsx)(t.Fragment, {});
          },
          V = function () {
            return !1 === W.madeWithDurable
              ? (0, t.jsx)(t.Fragment, {})
              : (0, t.jsxs)("p", {
                  className: (0, i.AK)(
                    "body-normal lg:text-right whitespace-nowrap",
                    ("stacked-center" ===
                      (null === W || void 0 === W ? void 0 : W.style) ||
                      "simple-center" ===
                        (null === W || void 0 === W ? void 0 : W.style)) &&
                      "!text-center",
                    "stacked-left" ===
                      (null === W || void 0 === W ? void 0 : W.style) &&
                      "!text-left"
                  ),
                  children: [
                    (0, t.jsx)("span", { children: "Made with\xa0" }),
                    (0, t.jsx)(s(), {
                      href: "https://durable.co?referrer=".concat(
                        encodeURIComponent(S)
                      ),
                      children: (0, t.jsx)("a", {
                        target: "_blank",
                        className: "underline",
                        style: { color: E },
                        children: "Durable",
                      }),
                    }),
                  ],
                });
          },
          Q = function () {
            return (0, t.jsx)(c.Z, {
              className: "lg !py-2 break-normal",
              button: W.button,
              block: W,
              website: j,
            });
          },
          G = function () {
            F(!1), _(null);
          };
        return (
          (0, r.useEffect)(
            function () {
              B && G();
            },
            [B]
          ),
          (0, r.useEffect)(function () {
            A(
              null === location || void 0 === location
                ? void 0
                : location.origin
            );
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("footer", {
                className: "flex flex-1",
                children: (0, t.jsxs)("div", {
                  ref: D,
                  id: "website-footer",
                  className: "relative flex-1 z-10 break-word",
                  style: { color: E },
                  children: [
                    (0, t.jsx)(x.Z, {
                      block: W,
                      website: j,
                      onChange: function (e) {
                        var o, l;
                        I(
                          (null === e ||
                          void 0 === e ||
                          null === (o = e.overlay) ||
                          void 0 === o
                            ? void 0
                            : o.color1) || "#FFFFFF"
                        ),
                          z(
                            (0, i.$O)(
                              (null === e ||
                              void 0 === e ||
                              null === (l = e.overlay) ||
                              void 0 === l
                                ? void 0
                                : l.color1) || "#FFFFFF"
                            )
                          );
                      },
                    }),
                    (0, t.jsx)("div", {
                      className: (0, i.AK)(
                        "relative z-10 container mx-auto",
                        (0, i.bG)(
                          null === W || void 0 === W ? void 0 : W.spacing
                        )
                      ),
                      children:
                        "split-left" ===
                        (null === W || void 0 === W ? void 0 : W.style)
                          ? (0, t.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row lg:justify-between gap-12",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start gap-12 lg:gap-6",
                                  children: [
                                    H(),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col lg:flex-row lg:items-center gap-12",
                                      children: [
                                        q(),
                                        W.showSocial && U(),
                                        (null === W || void 0 === W
                                          ? void 0
                                          : W.button) && Q(),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-6",
                                  children: [
                                    !!W.additionalDetails &&
                                      (0, t.jsx)("div", {
                                        className:
                                          "body-normal lg:max-w-70 xl:max-w-120 lg:text-right",
                                        style: { color: E },
                                        children:
                                          null === W || void 0 === W
                                            ? void 0
                                            : W.additionalDetails,
                                      }),
                                    V(),
                                  ],
                                }),
                              ],
                            })
                          : "stacked-right" === W.style
                          ? (0, t.jsxs)("div", {
                              className:
                                "flex flex-col justify-end items-end gap-12 text-right",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col items-end gap-6",
                                  children: [
                                    H(),
                                    !!W.additionalDetails &&
                                      (0, t.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: E },
                                        children:
                                          null === W || void 0 === W
                                            ? void 0
                                            : W.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-end gap-12 lg:gap-14",
                                  children: [
                                    q(),
                                    W.showSocial && U(),
                                    (null === W || void 0 === W
                                      ? void 0
                                      : W.button) &&
                                      (0, t.jsx)("div", { children: Q() }),
                                  ],
                                }),
                                V(),
                              ],
                            })
                          : "stacked-center" === W.style
                          ? (0, t.jsxs)("div", {
                              className:
                                "flex flex-col justify-center gap-12 text-center",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col items-center gap-6",
                                  children: [
                                    H(),
                                    !!W.additionalDetails &&
                                      (0, t.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: E },
                                        children:
                                          null === W || void 0 === W
                                            ? void 0
                                            : W.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-center gap-12 lg:gap-14",
                                  children: [
                                    q(),
                                    W.showSocial && U(),
                                    (null === W || void 0 === W
                                      ? void 0
                                      : W.button) &&
                                      (0, t.jsx)("div", { children: Q() }),
                                  ],
                                }),
                                V(),
                              ],
                            })
                          : "stacked-left" === W.style
                          ? (0, t.jsxs)("div", {
                              className:
                                "flex flex-col items-start gap-12 text-left",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col items-start gap-6",
                                  children: [
                                    H(),
                                    !!W.additionalDetails &&
                                      (0, t.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: E },
                                        children:
                                          null === W || void 0 === W
                                            ? void 0
                                            : W.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start gap-12 lg:gap-14",
                                  children: [
                                    q(),
                                    W.showSocial && U(),
                                    (null === W || void 0 === W
                                      ? void 0
                                      : W.button) &&
                                      (0, t.jsx)("div", { children: Q() }),
                                  ],
                                }),
                                V(),
                              ],
                            })
                          : "simple-right" === W.style
                          ? (0, t.jsxs)("div", {
                              className: "flex flex-col lg:flex-row gap-12",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: (0, i.AK)(
                                    "flex flex-col lg:flex-row items-start lg:items-center gap-6",
                                    (
                                      null === W || void 0 === W
                                        ? void 0
                                        : W.showLogo
                                    )
                                      ? "lg:gap-10"
                                      : "lg:gap-2"
                                  ),
                                  children: [
                                    H(),
                                    !!W.additionalDetails &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          !(null === W || void 0 === W
                                            ? void 0
                                            : W.showLogo) &&
                                            (0, t.jsx)("span", {
                                              className:
                                                "hidden lg:inline-block",
                                              children: "\xb7",
                                            }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "body-normal lg:max-w-70 xl:max-w-120",
                                            style: { color: E },
                                            children:
                                              null === W || void 0 === W
                                                ? void 0
                                                : W.additionalDetails,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                      children: [
                                        q(),
                                        W.showSocial && U(),
                                        (null === W || void 0 === W
                                          ? void 0
                                          : W.button) && Q(),
                                      ],
                                    }),
                                    V(),
                                  ],
                                }),
                              ],
                            })
                          : "simple-center" === W.style
                          ? (0, t.jsxs)("div", {
                              className:
                                "flex flex-col justify-center gap-12 text-center",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: (0, i.AK)(
                                    "flex flex-col justify-center lg:items-center gap-6",
                                    (
                                      null === W || void 0 === W
                                        ? void 0
                                        : W.showLogo
                                    )
                                      ? "lg:gap-6"
                                      : "lg:flex-row lg:gap-2"
                                  ),
                                  children: [
                                    H(),
                                    !!W.additionalDetails &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          !(null === W || void 0 === W
                                            ? void 0
                                            : W.showLogo) &&
                                            (0, t.jsx)("span", {
                                              className:
                                                "hidden lg:inline-block",
                                              children: "\xb7",
                                            }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "body-normal lg:max-w-[50vw]",
                                            style: { color: E },
                                            children:
                                              null === W || void 0 === W
                                                ? void 0
                                                : W.additionalDetails,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                  children: [
                                    q(),
                                    W.showSocial && U(),
                                    (null === W || void 0 === W
                                      ? void 0
                                      : W.button) && Q(),
                                    V(),
                                  ],
                                }),
                              ],
                            })
                          : (0, t.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex flex-col gap-6 items-start lg:max-w-[30vw]",
                                  children: [
                                    H(),
                                    !!(null === W || void 0 === W
                                      ? void 0
                                      : W.additionalDetails) &&
                                      (0, t.jsx)("div", {
                                        className:
                                          "body-normal lg:max-w-70 xl:max-w-120",
                                        style: { color: E },
                                        children:
                                          null === W || void 0 === W
                                            ? void 0
                                            : W.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-12 lg:gap-6",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                      children: [
                                        q(),
                                        W.showSocial && U(),
                                        (null === W || void 0 === W
                                          ? void 0
                                          : W.button) && Q(),
                                      ],
                                    }),
                                    V(),
                                  ],
                                }),
                              ],
                            }),
                    }),
                    (0, t.jsx)(y.iz, {
                      contentRef: D,
                      previousDivider:
                        null === N || void 0 === N ? void 0 : N.divider,
                      previousBorder:
                        null === N || void 0 === N ? void 0 : N.border,
                      dividerUniqueId: "website-footer-divider",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)(h.V, {
                open: C,
                onClose: G,
                className: "relative z-[30000] h-full",
                children: (0, t.jsx)(h.V.Panel, {
                  className: "fixed inset-0 flex flex-col h-full",
                  style: { backgroundColor: L, color: E },
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex-1 flex flex-col h-full container mx-auto pb-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className: (0, i.AK)(
                          "items-center gap-3 py-6",
                          "left" !==
                            (null === K || void 0 === K ? void 0 : K.style)
                            ? "grid"
                            : "flex justify-between"
                        ),
                        style:
                          "left" !==
                          (null === K || void 0 === K ? void 0 : K.style)
                            ? { gridTemplateColumns: "1fr auto 1fr" }
                            : {},
                        children: [
                          ("center" ===
                            (null === K || void 0 === K ? void 0 : K.style) ||
                            "full-center" ===
                              (null === K || void 0 === K
                                ? void 0
                                : K.style)) &&
                            (0, t.jsx)("div", {}),
                          (function () {
                            var e,
                              o,
                              l,
                              n,
                              r,
                              a = (0, i.$K)(
                                null === K || void 0 === K ? void 0 : K.logo
                              )
                                ? K
                                : (0, b.i6)(K, j);
                            if (
                              "image" ===
                                (null === a ||
                                void 0 === a ||
                                null === (e = a.logo) ||
                                void 0 === e
                                  ? void 0
                                  : e.type) &&
                              "branding" ===
                                (null === a ||
                                void 0 === a ||
                                null === (o = a.logo) ||
                                void 0 === o
                                  ? void 0
                                  : o.source) &&
                              (null === j || void 0 === j ? void 0 : j.logo)
                            ) {
                              var d,
                                c = (0, i.QW)(
                                  null === j || void 0 === j ? void 0 : j.logo
                                );
                              return (0, t.jsx)(s(), {
                                href: "/",
                                children: (0, t.jsx)("a", {
                                  target: (
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.forceRender
                                  )
                                    ? "_parent"
                                    : "_self",
                                  children:
                                    c &&
                                    (0, t.jsx)(b.yA, {
                                      src: c,
                                      text:
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.siteName,
                                      height:
                                        null === a ||
                                        void 0 === a ||
                                        null === (d = a.logo) ||
                                        void 0 === d
                                          ? void 0
                                          : d.height,
                                    }),
                                }),
                              });
                            }
                            if (
                              "image" ===
                                (null === a ||
                                void 0 === a ||
                                null === (l = a.logo) ||
                                void 0 === l
                                  ? void 0
                                  : l.type) &&
                              "upload" ===
                                (null === a ||
                                void 0 === a ||
                                null === (n = a.logo) ||
                                void 0 === n
                                  ? void 0
                                  : n.source) &&
                              (null === a ||
                              void 0 === a ||
                              null === (r = a.logo) ||
                              void 0 === r
                                ? void 0
                                : r.media)
                            ) {
                              var u,
                                v,
                                f = (0, i.QW)(
                                  null === a ||
                                    void 0 === a ||
                                    null === (u = a.logo) ||
                                    void 0 === u
                                    ? void 0
                                    : u.media
                                );
                              return (0, t.jsx)(s(), {
                                href: "/",
                                children: (0, t.jsx)("a", {
                                  target: (
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.forceRender
                                  )
                                    ? "_parent"
                                    : "_self",
                                  children:
                                    f &&
                                    (0, t.jsx)(b.yA, {
                                      src: f,
                                      text:
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.siteName,
                                      height:
                                        null === a ||
                                        void 0 === a ||
                                        null === (v = a.logo) ||
                                        void 0 === v
                                          ? void 0
                                          : v.height,
                                    }),
                                }),
                              });
                            }
                            return (0, t.jsx)(b.TR, {
                              logo:
                                null === a || void 0 === a ? void 0 : a.logo,
                              text:
                                null === a || void 0 === a
                                  ? void 0
                                  : a.siteName,
                              color: E,
                              forceRender:
                                null === O || void 0 === O
                                  ? void 0
                                  : O.forceRender,
                            });
                          })(),
                          (0, t.jsx)("div", {
                            className: "ml-auto lg:hidden",
                            children: (0, t.jsx)("button", {
                              className:
                                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                              style: { color: E },
                              onClick: G,
                              children: (0, t.jsx)(f.Z, {
                                className: "block h-5 w-5",
                                "aria-hidden": "true",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("ul", {
                        className: (0, i.AK)(
                          "flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto",
                          "center" ===
                            (null === W || void 0 === W ? void 0 : W.style) ||
                            "full-center" ===
                              (null === W || void 0 === W ? void 0 : W.style)
                            ? "text-center"
                            : ""
                        ),
                        style: (0, n.Z)({ color: E }, (0, i.SV)(j)),
                        children:
                          null === P || void 0 === P
                            ? void 0
                            : P.map(function (e) {
                                return (0,
                                t.jsx)("li", { className: (0, i.AK)("body-large py-2 border-b-2"), style: { borderColor: e.current ? "".concat(E) : "transparent" }, children: (0, t.jsx)(s(), { href: e.href, children: (0, t.jsx)("a", { className: "block w-full", target: e.forceRender ? "_parent" : "_self", children: e.name }) }) }, "page-link-".concat(e.href));
                              }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    62246: function (e, o, l) {
      var n = l(67294),
        t = (l(28308), l(91033));
      o.Z = function (e, o) {
        var l = (0, n.useState)(!1),
          i = l[0],
          r = l[1],
          a = (0, n.useRef)(e);
        a.current = e;
        var s = function (e) {
          var o = !0,
            l = !1,
            n = void 0;
          try {
            for (
              var t, s = e[Symbol.iterator]();
              !(o = (t = s.next()).done);
              o = !0
            ) {
              var d = t.value;
              document.body.contains(d.target) || r(!i), a.current(d.target);
            }
          } catch (c) {
            (l = !0), (n = c);
          } finally {
            try {
              o || null == s.return || s.return();
            } finally {
              if (l) throw n;
            }
          }
        };
        (0, n.useEffect)(
          function () {
            if (o) {
              var e = new t.Z(s),
                l = Array.isArray(o) ? o : [o];
              return (
                l.forEach(function (o) {
                  return o.current && e.observe(o.current);
                }),
                function () {
                  l.forEach(function (o) {
                    return o.current && e.unobserve(o.current);
                  }),
                    e.disconnect();
                }
              );
            }
          },
          [o, i]
        );
      };
    },
    23226: function (e, o, l) {
      var n = l(47568),
        t = l(51438),
        i = l(14924),
        r = l(20414),
        a = l(9669),
        s = l.n(a),
        d = l(83454);
      o.Z = function e(o, l) {
        (0, t.Z)(this, e);
        var a = this;
        (0, i.Z)(
          this,
          "get",
          (function () {
            var e = (0, n.Z)(function (e, o) {
              return (0, r.__generator)(this, function (l) {
                return [
                  2,
                  new Promise(function (l, t) {
                    s()
                      .get(e, {
                        baseURL: a.baseURL,
                        params: o || {},
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "*/*",
                        },
                      })
                      .then(
                        (function () {
                          var e = (0, n.Z)(function (e) {
                            return (0, r.__generator)(this, function (o) {
                              return l(e.data), [2];
                            });
                          });
                          return function (o) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                      .catch(function (e) {
                        e.response
                          ? l({ status: !1, message: e.response.data.message })
                          : e.request
                          ? l({ status: !1, message: e.request.message })
                          : l({ status: !1, message: e.message }),
                          l({ status: !1, message: e.config });
                      });
                  }),
                ];
              });
            });
            return function (o, l) {
              return e.apply(this, arguments);
            };
          })()
        );
        var c = this;
        (0, i.Z)(
          this,
          "post",
          (function () {
            var e = (0, n.Z)(function (e, o, l) {
              return (0, r.__generator)(this, function (n) {
                return [
                  2,
                  new Promise(function (n, t) {
                    s()
                      .post(e, o || {}, {
                        baseURL: c.baseURL,
                        headers: {
                          "Content-Type": l
                            ? "multipart/form-data"
                            : "application/json",
                          Accept: "*/*",
                        },
                      })
                      .then(function (e) {
                        n(e.data);
                      })
                      .catch(function (e) {
                        e.response
                          ? n(e.response.data)
                          : e.request
                          ? n({ status: !1, message: e.request })
                          : n({ status: !1, message: e.message }),
                          n({ status: !1, message: e.config });
                      });
                  }),
                ];
              });
            });
            return function (o, l, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
          (s().defaults.withCredentials = null === l || void 0 === l || l),
          (this.baseURL = o || d.env.API_URL || "https://api.durable.co");
      };
    },
    28308: function (e, o, l) {
      l.d(o, {
        mQ: function () {
          return X;
        },
        $O: function () {
          return le;
        },
        s0: function () {
          return Ze;
        },
        h: function () {
          return ve;
        },
        SV: function () {
          return se;
        },
        AK: function () {
          return ee;
        },
        p$: function () {
          return re;
        },
        n3: function () {
          return he;
        },
        e0: function () {
          return ye;
        },
        sd: function () {
          return be;
        },
        dz: function () {
          return je;
        },
        ej: function () {
          return Ce;
        },
        yW: function () {
          return me;
        },
        s4: function () {
          return de;
        },
        Ae: function () {
          return xe;
        },
        QW: function () {
          return we;
        },
        Qm: function () {
          return fe;
        },
        G0: function () {
          return ce;
        },
        ow: function () {
          return Ne;
        },
        bG: function () {
          return pe;
        },
        A2: function () {
          return ge;
        },
        j2: function () {
          return ae;
        },
        mR: function () {
          return ne;
        },
        jn: function () {
          return ue;
        },
        $K: function () {
          return ke;
        },
        s: function () {
          return te;
        },
        d8: function () {
          return Fe;
        },
        ac: function () {
          return ie;
        },
        oH: function () {
          return oe;
        },
      });
      var n = l(26042),
        t = l(69396),
        i = l(85893),
        r = l(67294),
        a = (l(79981), l(47568)),
        s = l(99534),
        d = l(29815),
        c = l(20414),
        u = l(9008),
        v = l.n(u),
        f = l(25935),
        m = l(23226),
        h = l(85518),
        g = l(11163),
        p = l.n(g),
        x = (l(40993), l(42419)),
        y = l(28521),
        b = l(41968),
        w = l(28666),
        j = l(47041),
        N = l(52077),
        k = l(90387),
        C = l(41664),
        F = l.n(C),
        Z = l(72510),
        S = l(11355),
        A = l(94053),
        R = l(32713),
        P = l(43751),
        _ = l(41984),
        M = l(3677),
        L = l(92122),
        I = l(59956),
        T = l(72434),
        E = l(73423),
        z = l(83339),
        D = l(74007),
        B = l(75654),
        W = l(10198),
        K = l(75871);
      function O(e) {
        var o,
          l,
          t,
          a,
          s,
          d,
          c,
          u,
          v,
          f,
          m,
          h,
          g,
          p,
          x = e.website,
          y = ie("(max-width: 1023px)"),
          b = ie("(max-width: 767px)"),
          w = (0, r.useState)(!1),
          j = w[0],
          C = w[1],
          O = (0, r.useState)("#FFFFFF"),
          $ = O[0],
          H = O[1],
          q = (0, r.useState)("#000000"),
          U = q[0],
          V = q[1],
          Q = (0, r.useState)(null),
          G = Q[0],
          Y = Q[1],
          J = (0, r.useState)(!1),
          X = J[0],
          oe = J[1],
          te = (0, r.useState)({ combine: !1 }),
          re = te[0],
          ae = te[1],
          de = (0, r.useState)(null),
          ce = de[0],
          ue = de[1],
          fe = (0, r.useState)(!1),
          me = fe[0],
          he = fe[1],
          ge = (0, k.useRouter)(),
          pe = (0, r.useRef)(null),
          xe = (0, r.useRef)(null),
          ye =
            null === x || void 0 === x || null === (o = x.pages) || void 0 === o
              ? void 0
              : o.find(function (e) {
                  return !e.slug && e.default;
                }),
          be = null === x || void 0 === x ? void 0 : x.header,
          je =
            null ===
              (t =
                null === (l = x.pages) || void 0 === l
                  ? void 0
                  : l.filter(function (e) {
                      return (
                        (!0 === e.showOnHeader || void 0 === e.showOnHeader) &&
                        null !== e.slug
                      );
                    })) || void 0 === t
              ? void 0
              : t
                  .map(function (e) {
                    var o = {
                      href: "/".concat(e.slug || ""),
                      name: e.label,
                      current:
                        ge.asPath === "/".concat(e.slug || "") ||
                        ge.asPath.includes("/".concat(e.slug, "/")),
                      type: e.type,
                      forceRender: e.forceRender,
                    };
                    return "parent" === o.type &&
                      ((o.nests = x.pages
                        .filter(function (o) {
                          var l;
                          return (
                            o.Parent === e._id ||
                            (null === (l = o.Parent) || void 0 === l
                              ? void 0
                              : l._id) === e._id
                          );
                        })
                        .map(function (o) {
                          return {
                            href: "/".concat(e.slug, "/").concat(o.slug || ""),
                            name: o.label,
                            current:
                              ge.asPath ===
                              "/".concat(e.slug, "/").concat(o.slug || ""),
                            forceRender: o.forceRender,
                          };
                        })),
                      0 === o.nests.length)
                      ? null
                      : o;
                  })
                  .filter(function (e) {
                    return null !== e && "nested" !== e.type;
                  });
        (null === be || void 0 === be ? void 0 : be.showHomeInNav) &&
          (je = [{ href: "/", type: "nests", name: "Home" }].concat(je));
        var Ce =
            (null === re || void 0 === re ? void 0 : re.combine) &&
            (!(null === be || void 0 === be ? void 0 : be.sticky) || !X),
          Fe = null === be || void 0 === be ? void 0 : be.style,
          Ze =
            (null === be || void 0 === be ? void 0 : be.navStyle) || "default",
          Se = function () {
            return (
              (null === ce || void 0 === ce ? void 0 : ce.length) > 0 &&
              me &&
              (0, i.jsx)("div", {
                className: "hidden lg:flex items-center flex-shrink-0 gap-4",
                children:
                  null === ce || void 0 === ce
                    ? void 0
                    : ce.map(function (e, o) {
                        return (0,
                        i.jsx)(N.Z, { button: e, block: be, website: x, className: "xl xl:!text-2xl !py-1.5 flex" }, "banner-button-".concat(o));
                      }),
              })
            );
          },
          Ae = function (e) {
            return (0, i.jsx)("ul", {
              className: ee(
                "lg:flex items-center gap-x-4 gap-y-2 flex-wrap",
                "full-center" !== Fe ? "justify-end" : "",
                !e && "hidden"
              ),
              children:
                Array.isArray(x.social) &&
                x.social.map(function (e, o) {
                  var l = B.W.find(function (o) {
                      return o.id === e.type;
                    }),
                    n = e.link;
                  return (
                    "custom" !== e.type &&
                      ((n = (n = e.link
                        .replace(
                          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,
                          ""
                        )
                        .replace(/https?:/g, "")
                        .replace(/^\/\/?/g, "")).replace(
                        null === l || void 0 === l ? void 0 : l.host,
                        ""
                      )),
                      (n = "https://"
                        .concat(
                          null === l || void 0 === l ? void 0 : l.host,
                          "/"
                        )
                        .concat(n))),
                    (0, i.jsx)(
                      "li",
                      {
                        children: (0, i.jsx)(F(), {
                          href: n,
                          children: (0, i.jsx)("a", {
                            target: "_blank",
                            children: (0, i.jsx)(B.Q, {
                              icon: e,
                              color: Ce ? re.textColor : U,
                              settings: x.socialSettings,
                            }),
                          }),
                        }),
                      },
                      "social-icon-header-".concat(o)
                    )
                  );
                }),
            });
          },
          Re = function (e) {
            var o = null === be || void 0 === be ? void 0 : be.logo;
            if (
              (!ke(o) && x && (o = (0, W.i6)(be, x).logo),
              "image" === (null === o || void 0 === o ? void 0 : o.type) &&
                "branding" ===
                  (null === o || void 0 === o ? void 0 : o.source) &&
                (null === x || void 0 === x ? void 0 : x.logo))
            ) {
              var l = we(null === x || void 0 === x ? void 0 : x.logo);
              return (0, i.jsx)(F(), {
                href: "/",
                children: (0, i.jsx)("a", {
                  className: "max-w-full overflow-hidden grid",
                  target: (
                    null === ye || void 0 === ye ? void 0 : ye.forceRender
                  )
                    ? "_parent"
                    : "_self",
                  children:
                    l &&
                    (0, i.jsx)(W.yA, {
                      src: l,
                      text: null === be || void 0 === be ? void 0 : be.siteName,
                      height: null === o || void 0 === o ? void 0 : o.height,
                    }),
                }),
              });
            }
            if (
              "image" === (null === o || void 0 === o ? void 0 : o.type) &&
              "upload" === (null === o || void 0 === o ? void 0 : o.source) &&
              (null === o || void 0 === o ? void 0 : o.media)
            ) {
              var n = we(null === o || void 0 === o ? void 0 : o.media);
              return (0, i.jsx)(F(), {
                href: "/",
                children: (0, i.jsx)("a", {
                  className: "max-w-full overflow-hidden grid",
                  target: (
                    null === ye || void 0 === ye ? void 0 : ye.forceRender
                  )
                    ? "_parent"
                    : "_self",
                  children:
                    n &&
                    (0, i.jsx)(W.yA, {
                      src: n,
                      text: null === be || void 0 === be ? void 0 : be.siteName,
                      height: null === o || void 0 === o ? void 0 : o.height,
                    }),
                }),
              });
            }
            return (0, i.jsx)(W.TR, {
              text: null === be || void 0 === be ? void 0 : be.siteName,
              logo: o,
              color: Ce && !e ? re.textColor : U,
              forceRender:
                null === ye || void 0 === ye ? void 0 : ye.forceRender,
            });
          },
          Pe = function (e, o) {
            var l = ne(
              o,
              (null === Ze || void 0 === Ze ? void 0 : Ze.includes("subtle"))
                ? 10
                : 80
            );
            return {
              borderColor: e.current ? o : "transparent",
              backgroundColor:
                e.current && "default" !== Ze ? l : "transparent",
              color: e.current && Ze.includes("bold") ? le(o) : "currentColor",
            };
          },
          _e = function () {
            var e;
            if (0 === (null === je || void 0 === je ? void 0 : je.length))
              return (0, i.jsx)(i.Fragment, {});
            var o = ve($, -10);
            (o !== U && o !== $) || (o = ve($, 10));
            var l = Ce ? re.textColor : U;
            return (0, i.jsx)("ul", {
              className: ee(
                "hidden items-center flex-wrap",
                !(null === be ||
                void 0 === be ||
                null === (e = be.menu) ||
                void 0 === e
                  ? void 0
                  : e.collapse) && "lg:flex",
                "left" === Fe && "justify-end",
                "full-center" === Fe && "justify-center",
                "default" === Ze ? "gap-x-6" : "gap-x-2"
              ),
              style: { color: l },
              children:
                null === je || void 0 === je
                  ? void 0
                  : je.map(function (e) {
                      var n;
                      return (0, i.jsx)(
                        "li",
                        {
                          className: ee(
                            "default" === Ze ? "border-b-2" : "",
                            (null === Ze || void 0 === Ze
                              ? void 0
                              : Ze.includes("round")) && "rounded-lg"
                          ),
                          style: Pe(e, l),
                          children:
                            "parent" === e.type
                              ? (0, i.jsx)(D.Z, {
                                  buttonClassName: ee(
                                    "inline-flex items-center gap-2",
                                    "default" === Ze ? "py-1.5" : "py-2 px-3"
                                  ),
                                  itemsContainerClass: ee(
                                    "!p-4 !pr-6 w-max max-w-120 !max-h-[80vh] no-scrollbar",
                                    (null === Ze || void 0 === Ze
                                      ? void 0
                                      : Ze.includes("square")) &&
                                      "!rounded-none",
                                    "default" === Ze && "mt-0.5"
                                  ),
                                  button: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("span", {
                                        className:
                                          "body-normal whitespace-nowrap",
                                        children: e.name,
                                      }),
                                      (0, i.jsx)(R.Z, { className: "w-4 h-4" }),
                                    ],
                                  }),
                                  itemsContainerStyle: {
                                    backgroundColor: o,
                                    color: l,
                                  },
                                  children:
                                    null === (n = e.nests) || void 0 === n
                                      ? void 0
                                      : n.map(function (e) {
                                          return (0,
                                          i.jsx)(Z.v.Item, { children: (0, i.jsx)(F(), { className: ee("block py-2 body-normal", "default" === Ze ? "border-b-2" : "px-3", (null === Ze || void 0 === Ze ? void 0 : Ze.includes("round")) && "rounded-lg"), href: e.href, legacyBehavior: !1, target: e.forceRender ? "_parent" : "_self", style: Pe(e, l), children: e.name }) }, "page-link-".concat(e.href));
                                        }),
                                })
                              : (0, i.jsx)(F(), {
                                  className: ee(
                                    "block body-normal whitespace-nowrap",
                                    "default" === Ze ? "py-1.5" : "py-2 px-3"
                                  ),
                                  legacyBehavior: !1,
                                  href: e.href,
                                  target: e.forceRender ? "_parent" : "_self",
                                  children: e.name,
                                }),
                        },
                        "header-page-link-".concat(e.href)
                      );
                    }),
            });
          },
          Me = function () {
            var e;
            return 0 === (null === je || void 0 === je ? void 0 : je.length)
              ? (0, i.jsx)(i.Fragment, {})
              : (
                  null === be ||
                  void 0 === be ||
                  null === (e = be.menu) ||
                  void 0 === e
                    ? void 0
                    : e.collapse
                )
              ? (0, i.jsxs)("button", {
                  className: ee(
                    "hidden lg:inline-flex items-center justify-center p-2 rounded-md font-light gap-2 ",
                    j ? "pointer-events-none" : "hover:opacity-80"
                  ),
                  style: { color: Ce ? re.textColor : U },
                  onClick: function () {
                    return C(!0);
                  },
                  children: ["Menu ", Le()],
                })
              : null;
          },
          Le = function () {
            var e,
              o = "block h-5 w-5";
            switch (
              null === be ||
              void 0 === be ||
              null === (e = be.menu) ||
              void 0 === e
                ? void 0
                : e.icon
            ) {
              case "bars-3-bottom-left":
                return (0, i.jsx)(L.Z, { className: o, "aria-hidden": "true" });
              case "bars-3-bottom-right":
                return (0, i.jsx)(I.Z, { className: o, "aria-hidden": "true" });
              case "bars-3-center-left":
                return (0, i.jsx)(T.Z, { className: o, "aria-hidden": "true" });
              case "bars-2":
                return (0, i.jsx)(E.Z, { className: o, "aria-hidden": "true" });
              default:
                return (0, i.jsx)(z.Z, { className: o, "aria-hidden": "true" });
            }
          },
          Ie = function (e) {
            var o,
              l,
              n =
                (null ===
                  (o = K.b[null === e || void 0 === e ? void 0 : e.top]) ||
                void 0 === o
                  ? void 0
                  : o.top) || K.b.medium.top,
              t =
                (null ===
                  (l = K.b[null === e || void 0 === e ? void 0 : e.bottom]) ||
                void 0 === l
                  ? void 0
                  : l.bottom) || K.b.medium.bottom;
            return "".concat(n, " ").concat(t);
          },
          Te = function () {
            var e;
            oe(
              (null === (e = document.querySelector("#main-body")) ||
              void 0 === e
                ? void 0
                : e.scrollTop) > 20
            );
          },
          Ee = function (e) {
            var o = document.querySelector("[data-combine-with-header]");
            if (o) {
              var l =
                null === o || void 0 === o
                  ? void 0
                  : o.getAttribute("data-combine-with-header");
              ae(function (n) {
                return (
                  e < 10 &&
                    (null === o || void 0 === o
                      ? void 0
                      : o.getAttribute("data-text-color")) !== n.textColor &&
                    setTimeout(function () {
                      Ee(e + 1);
                    }, 100 * e),
                  {
                    combine: !0 === l || "true" === l,
                    textColor:
                      null === o || void 0 === o
                        ? void 0
                        : o.getAttribute("data-text-color"),
                  }
                );
              });
            } else
              ae(function (l) {
                return (
                  e < 10 &&
                    (!o ||
                      (null === o || void 0 === o
                        ? void 0
                        : o.getAttribute("data-text-color")) !== l.textColor) &&
                    setTimeout(function () {
                      Ee(e + 1);
                    }, 15 * e),
                  { combine: !1, textColor: null }
                );
              });
          };
        return (
          (0, r.useEffect)(
            function () {
              if (be) {
                var e, o, l, n, t, i;
                if (
                  (ue(
                    (null === be ||
                    void 0 === be ||
                    null === (e = be.buttons) ||
                    void 0 === e
                      ? void 0
                      : e.items) || [be.button]
                  ),
                  he(
                    (
                      null === be ||
                      void 0 === be ||
                      null === (o = be.buttons) ||
                      void 0 === o
                        ? void 0
                        : o.items
                    )
                      ? null === be ||
                        void 0 === be ||
                        null === (l = be.buttons) ||
                        void 0 === l
                        ? void 0
                        : l.enabled
                      : !!be.button
                  ),
                  be.layers)
                )
                  if ("custom" === be.layers.palette) {
                    var r;
                    H(
                      (null === (r = be.layers.overlay) || void 0 === r
                        ? void 0
                        : r.color1) || "#FFFFFF"
                    );
                  } else {
                    var a,
                      s,
                      d =
                        (null === x ||
                        void 0 === x ||
                        null === (a = x.colorPalette) ||
                        void 0 === a
                          ? void 0
                          : a.Palette) ||
                        (null === x || void 0 === x ? void 0 : x.colorPalette);
                    H(
                      Ne(
                        d,
                        null === (s = be.layers) || void 0 === s
                          ? void 0
                          : s.palette,
                        "color"
                      )
                    );
                  }
                else H(be.background || "#FFFFFF");
                if (null === be.siteName || void 0 === be.siteName)
                  be.siteName =
                    null === x ||
                    void 0 === x ||
                    null === (i = x.Business) ||
                    void 0 === i
                      ? void 0
                      : i.name;
                be.style || (be.style = "left"),
                  (null === (n = be.logoDesktop) || void 0 === n
                    ? void 0
                    : n.height) || (be.logoDesktop = { height: 80 }),
                  (null === (t = be.logoMobile) || void 0 === t
                    ? void 0
                    : t.height) || (be.logoMobile = { height: 40 }),
                  be.sticky &&
                    (null === pe || void 0 === pe ? void 0 : pe.current) &&
                    (document.documentElement.style.scrollPaddingTop =
                      pe.current.clientHeight + "px");
              }
            },
            [be]
          ),
          (0, r.useEffect)(
            function () {
              Ee(0);
            },
            [ge.asPath]
          ),
          (0, r.useEffect)(
            function () {
              $ && V(le($));
            },
            [$]
          ),
          (0, r.useEffect)(
            function () {
              C(!1), Y(null);
            },
            [ge.asPath, y]
          ),
          (0, r.useEffect)(function () {
            var e;
            return (
              null === (e = document.querySelector("#main-body")) ||
                void 0 === e ||
                e.addEventListener("scroll", Te),
              function () {
                var e;
                null === (e = document.querySelector("#main-body")) ||
                  void 0 === e ||
                  e.removeEventListener("scroll", Te);
              }
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("header", {
                id: "website-header",
                ref: pe,
                className: ee(
                  "!z-[2000]",
                  (null === be || void 0 === be ? void 0 : be.sticky)
                    ? "sticky top-0 transition-colors"
                    : "",
                  ((null === be || void 0 === be ? void 0 : be.sticky) &&
                    !re.combine &&
                    X) ||
                    ((null === be || void 0 === be ? void 0 : be.sticky) && X)
                    ? "shadow-md"
                    : ""
                ),
                style: {
                  backgroundColor: Ce ? "transparent" : $,
                  color: Ce ? re.textColor : U,
                },
                children: (0, i.jsx)("div", {
                  className: ee(
                    "grid items-center lg:gap-6 xl:gap-10 mx-auto",
                    Ie(null === be || void 0 === be ? void 0 : be.spacing),
                    (null === be || void 0 === be ? void 0 : be.fullWidth)
                      ? "px-6 lg:px-12"
                      : "container"
                  ),
                  style: (function (e) {
                    return "center" === e
                      ? { gridTemplateColumns: "1fr auto 1fr" }
                      : "full-center" === e
                      ? (null === je || void 0 === je ? void 0 : je.length) > 6
                        ? { gridTemplateColumns: "1fr 4fr 1fr" }
                        : { gridTemplateColumns: "1fr auto 1fr" }
                      : { gridTemplateColumns: "auto auto auto" };
                  })(Fe),
                  children:
                    "center" === Fe
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsxs)("div", {
                              className: "lg:w-auto whitespace-nowrap",
                              children: [_e(), Me()],
                            }),
                            (0, i.jsx)("div", {
                              className: "flex justify-center",
                              children: Re(),
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex justify-end",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "hidden lg:flex item-center gap-10",
                                  children: [
                                    (null === be || void 0 === be
                                      ? void 0
                                      : be.showSocial) && Ae(),
                                    me && Se(),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "ml-auto lg:hidden",
                                  children: [
                                    (me ||
                                      (null === je || void 0 === je
                                        ? void 0
                                        : je.length) > 0 ||
                                      ((null === be || void 0 === be
                                        ? void 0
                                        : be.showSocial) &&
                                        Array.isArray(
                                          null === x || void 0 === x
                                            ? void 0
                                            : x.social
                                        ) &&
                                        (null === x ||
                                        void 0 === x ||
                                        null === (a = x.social) ||
                                        void 0 === a
                                          ? void 0
                                          : a.length) > 1)) &&
                                      (0, i.jsx)("button", {
                                        className:
                                          "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                        style: { color: Ce ? re.textColor : U },
                                        onClick: function () {
                                          return C(!0);
                                        },
                                        children: Le(),
                                      }),
                                    !me &&
                                      0 ===
                                        (null === je || void 0 === je
                                          ? void 0
                                          : je.length) &&
                                      (null === be || void 0 === be
                                        ? void 0
                                        : be.showSocial) &&
                                      Array.isArray(
                                        null === x || void 0 === x
                                          ? void 0
                                          : x.social
                                      ) &&
                                      1 ===
                                        (null === x ||
                                        void 0 === x ||
                                        null === (s = x.social) ||
                                        void 0 === s
                                          ? void 0
                                          : s.length) &&
                                      Ae(!0),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : "full-center" === Fe
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              className: "lg:w-auto whitespace-nowrap",
                              children:
                                (null === be || void 0 === be
                                  ? void 0
                                  : be.showSocial) && Ae(),
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "flex-1 flex flex-col items-center gap-4 whitespace-nowrap",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-center gap-4 w-full",
                                  children: [Re(), Me()],
                                }),
                                _e(),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex justify-end whitespace-nowrap",
                              children: [
                                me && Se(),
                                (0, i.jsxs)("div", {
                                  className: "ml-auto lg:hidden",
                                  children: [
                                    (me ||
                                      (null === je || void 0 === je
                                        ? void 0
                                        : je.length) > 0 ||
                                      ((null === be || void 0 === be
                                        ? void 0
                                        : be.showSocial) &&
                                        Array.isArray(
                                          null === x || void 0 === x
                                            ? void 0
                                            : x.social
                                        ) &&
                                        (null === x ||
                                        void 0 === x ||
                                        null === (d = x.social) ||
                                        void 0 === d
                                          ? void 0
                                          : d.length) > 1)) &&
                                      (0, i.jsx)("button", {
                                        className:
                                          "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                        style: { color: Ce ? re.textColor : U },
                                        onClick: function () {
                                          return C(!0);
                                        },
                                        children: Le(),
                                      }),
                                    !me &&
                                      0 ===
                                        (null === je || void 0 === je
                                          ? void 0
                                          : je.length) &&
                                      (null === be || void 0 === be
                                        ? void 0
                                        : be.showSocial) &&
                                      Array.isArray(
                                        null === x || void 0 === x
                                          ? void 0
                                          : x.social
                                      ) &&
                                      1 ===
                                        (null === x ||
                                        void 0 === x ||
                                        null === (c = x.social) ||
                                        void 0 === c
                                          ? void 0
                                          : c.length) &&
                                      Ae(!0),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              className: "col-span-2 lg:col-span-1",
                              children: Re(),
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                              children: [
                                Me(),
                                _e(),
                                (null === be || void 0 === be
                                  ? void 0
                                  : be.showSocial) && Ae(),
                                me && Se(),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "ml-auto lg:hidden",
                              children: [
                                (me ||
                                  (null === je || void 0 === je
                                    ? void 0
                                    : je.length) > 0 ||
                                  ((null === be || void 0 === be
                                    ? void 0
                                    : be.showSocial) &&
                                    Array.isArray(
                                      null === x || void 0 === x
                                        ? void 0
                                        : x.social
                                    ) &&
                                    (null === x ||
                                    void 0 === x ||
                                    null === (u = x.social) ||
                                    void 0 === u
                                      ? void 0
                                      : u.length) > 1)) &&
                                  (0, i.jsx)("button", {
                                    className:
                                      "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                    style: { color: Ce ? re.textColor : U },
                                    onClick: function () {
                                      return C(!0);
                                    },
                                    children: Le(),
                                  }),
                                !me &&
                                  0 ===
                                    (null === je || void 0 === je
                                      ? void 0
                                      : je.length) &&
                                  (null === be || void 0 === be
                                    ? void 0
                                    : be.showSocial) &&
                                  Array.isArray(
                                    null === x || void 0 === x
                                      ? void 0
                                      : x.social
                                  ) &&
                                  1 ===
                                    (null === x ||
                                    void 0 === x ||
                                    null === (v = x.social) ||
                                    void 0 === v
                                      ? void 0
                                      : v.length) &&
                                  Ae(!0),
                              ],
                            }),
                          ],
                        }),
                }),
              }),
              (0, i.jsx)(S.u, {
                show: !!j,
                as: "div",
                children: (0, i.jsxs)(A.V, {
                  className: "relative z-[30000] h-full",
                  initialFocus: xe,
                  onClose: function () {
                    return C(!1);
                  },
                  children: [
                    (0, i.jsx)(S.u.Child, {
                      as: r.Fragment,
                      enter: "ease-in-out duration-500",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in-out duration-500",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, i.jsx)(A.V.Overlay, {
                        className:
                          "fixed inset-0 bg-black bg-opacity-5 transition-opacity",
                      }),
                    }),
                    (0, i.jsx)(S.u.Child, {
                      as: r.Fragment,
                      enter:
                        "transform transition transition-all ease-in-out duration-350",
                      enterFrom:
                        (null === be ||
                        void 0 === be ||
                        null === (f = be.menu) ||
                        void 0 === f
                          ? void 0
                          : f.collapse) && !y
                          ? "left" !== Fe
                            ? "-translate-x-full"
                            : "translate-x-full"
                          : "translate-x-0 opacity-0",
                      enterTo: "translate-x-0 opacity-100",
                      leave:
                        "transform transition transition-all ease-in-out duration-350",
                      leaveFrom: "translate-x-0 opacity-100",
                      leaveTo:
                        (null === be ||
                        void 0 === be ||
                        null === (m = be.menu) ||
                        void 0 === m
                          ? void 0
                          : m.collapse) && !y
                          ? "left" !== Fe
                            ? "-translate-x-full"
                            : "translate-x-full"
                          : "translate-x-0 opacity-0",
                      children: (0, i.jsx)(A.V.Panel, {
                        className: ee(
                          "fixed flex flex-col shadow-lg",
                          (null === be ||
                          void 0 === be ||
                          null === (h = be.menu) ||
                          void 0 === h
                            ? void 0
                            : h.collapse) && !y
                            ? "left" !== Fe
                              ? "top-0 left-0 bottom-0 w-80"
                              : "top-0 bottom-0 right-0 w-80"
                            : (!me ||
                                0 !==
                                  (null === je || void 0 === je
                                    ? void 0
                                    : je.length) ||
                                (null === be || void 0 === be
                                  ? void 0
                                  : be.showSocial)) &&
                              !(
                                0 ===
                                  (null === je || void 0 === je
                                    ? void 0
                                    : je.length) &&
                                (null === be || void 0 === be
                                  ? void 0
                                  : be.showSocial) &&
                                Array.isArray(
                                  null === x || void 0 === x ? void 0 : x.social
                                ) &&
                                (null === x || void 0 === x
                                  ? void 0
                                  : x.social.length) > 1
                              ) &&
                              (me ||
                                be.showSocial ||
                                1 !==
                                  (null === je || void 0 === je
                                    ? void 0
                                    : je.length)) &&
                              (1 !==
                                (null === je || void 0 === je
                                  ? void 0
                                  : je.length) ||
                                (!me && !be.showSocial))
                            ? "inset-0 h-full"
                            : "top-0 left-0 right-0"
                        ),
                        style: { backgroundColor: $, color: U },
                        children: (0, i.jsxs)("div", {
                          ref: xe,
                          className: ee(
                            "flex-1 flex flex-col h-full mx-auto pb-6",
                            (
                              null === be || void 0 === be
                                ? void 0
                                : be.fullWidth
                            )
                              ? "w-full px-6"
                              : "container"
                          ),
                          children: [
                            (0, i.jsxs)("div", {
                              className: ee(
                                "items-center",
                                Ie(
                                  null === be || void 0 === be
                                    ? void 0
                                    : be.spacing
                                ),
                                "left" !== Fe ? "grid" : "flex justify-between"
                              ),
                              style:
                                "left" !== Fe
                                  ? { gridTemplateColumns: "1fr auto 1fr" }
                                  : {},
                              children: [
                                ["center", "full-center"].includes(Fe) &&
                                  (0, i.jsx)("div", {}),
                                (0, i.jsx)("div", {
                                  className: "lg:invisible",
                                  children: Re(!0),
                                }),
                                (0, i.jsx)("div", {
                                  className: "ml-auto",
                                  children: (0, i.jsx)("button", {
                                    className:
                                      "inline-flex items-center justify-center p-2 rounded-md outline-none",
                                    style: { color: U },
                                    onClick: function () {
                                      return C(!1);
                                    },
                                    children: (0, i.jsx)(P.Z, {
                                      className: "block h-5 w-5",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (null === je || void 0 === je
                              ? void 0
                              : je.length) > 0 &&
                              (0, i.jsxs)("div", {
                                className: "flex-1 py-6 overflow-auto",
                                children: [
                                  (0, i.jsx)(S.u, {
                                    as: "div",
                                    show: !G,
                                    enter: "transition-opacity",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    children: (0, i.jsx)("ul", {
                                      className: ee(
                                        "flex flex-col justify-center lg:justify-start gap-3 w-full",
                                        y &&
                                          ["center", "full-center"].includes(Fe)
                                          ? "text-center"
                                          : ""
                                      ),
                                      style: (0, n.Z)({ color: U }, se(x)),
                                      children:
                                        1 === je.length &&
                                        "parent" === je[0].type
                                          ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                (0, i.jsx)(
                                                  "li",
                                                  {
                                                    className:
                                                      "text-xl lg:!text-sm font-medium py-2",
                                                    style: {
                                                      borderColor: je[0].current
                                                        ? "".concat(U)
                                                        : "transparent",
                                                    },
                                                    children: (0, i.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "block w-full",
                                                        children: je[0].name,
                                                      }
                                                    ),
                                                  },
                                                  "page-link-".concat(
                                                    je[0].href
                                                  )
                                                ),
                                                null === (g = je[0].nests) ||
                                                void 0 === g
                                                  ? void 0
                                                  : g.map(function (e) {
                                                      return (0,
                                                      i.jsx)("li", { className: ee("relative body-large py-2", "default" !== Ze ? "px-3" : "", ["center", "full-center"].includes(Fe) && "default" === Ze ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === Ze ? "active-menu-item" : ""), style: Pe(e, U), children: (0, i.jsx)(F(), { className: "block w-full", href: e.href, legacyBehavior: !1, target: e.forceRender ? "_parent" : "_self", children: e.name }) }, "page-link-".concat(e.href));
                                                    }),
                                              ],
                                            })
                                          : (0, i.jsx)(i.Fragment, {
                                              children:
                                                null === je || void 0 === je
                                                  ? void 0
                                                  : je.map(function (e) {
                                                      return (0, i.jsx)(
                                                        "li",
                                                        {
                                                          className: ee(
                                                            "relative body-large lg:!text-body py-2",
                                                            "default" !== Ze
                                                              ? "px-3"
                                                              : "",
                                                            [
                                                              "center",
                                                              "full-center",
                                                            ].includes(Fe) &&
                                                              "default" === Ze
                                                              ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0"
                                                              : "",
                                                            e.current &&
                                                              "default" === Ze
                                                              ? "active-menu-item"
                                                              : ""
                                                          ),
                                                          style: Pe(e, U),
                                                          children:
                                                            "parent" ===
                                                              e.type &&
                                                            e.nests.length > 0
                                                              ? (0, i.jsxs)(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "inline-flex items-center gap-2",
                                                                    onClick:
                                                                      function () {
                                                                        return Y(
                                                                          e.nests
                                                                        );
                                                                      },
                                                                    children: [
                                                                      (0,
                                                                      i.jsx)(
                                                                        "span",
                                                                        {
                                                                          children:
                                                                            e.name,
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      i.jsx)(
                                                                        _.Z,
                                                                        {
                                                                          className:
                                                                            "w-4 h-4",
                                                                          "aria-hidden":
                                                                            "true",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, i.jsx)(
                                                                  F(),
                                                                  {
                                                                    className:
                                                                      "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior:
                                                                      !1,
                                                                    target:
                                                                      e.forceRender
                                                                        ? "_parent"
                                                                        : "_self",
                                                                    children:
                                                                      e.name,
                                                                  }
                                                                ),
                                                        },
                                                        "page-link-".concat(
                                                          e.href
                                                        )
                                                      );
                                                    }),
                                            }),
                                    }),
                                  }),
                                  (0, i.jsx)(S.u, {
                                    as: "div",
                                    show: !!G,
                                    enter: "transition-opacity",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    children: (0, i.jsx)("ul", {
                                      className: ee(
                                        "flex flex-col justify-center lg:justify-start gap-3 w-full",
                                        y &&
                                          ["center", "full-center"].includes(Fe)
                                          ? "text-center"
                                          : ""
                                      ),
                                      style: (0, n.Z)({ color: U }, se(x)),
                                      children: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          G &&
                                            (0, i.jsx)("li", {
                                              children: (0, i.jsxs)("button", {
                                                className: ee(
                                                  "flex items-center gap-2 w-full py-2 body-large lg:!text-body",
                                                  "default" !== Ze
                                                    ? "px-3"
                                                    : "",
                                                  y &&
                                                    [
                                                      "center",
                                                      "full-center",
                                                    ].includes(Fe)
                                                    ? "justify-center"
                                                    : ""
                                                ),
                                                onClick: function () {
                                                  return Y(null);
                                                },
                                                children: [
                                                  (0, i.jsx)(M.Z, {
                                                    className: "w-4 h-4",
                                                    "aria-hidden": "true",
                                                  }),
                                                  (0, i.jsx)("span", {
                                                    children: "Back",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          null === G || void 0 === G
                                            ? void 0
                                            : G.map(function (e) {
                                                return (0,
                                                i.jsx)("li", { className: ee("relative body-large lg:!text-body py-2", "default" !== Ze ? "px-3" : "", ["center", "full-center"].includes(Fe) && "default" === Ze ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === Ze ? "active-menu-item" : ""), style: Pe(e, U), children: (0, i.jsx)(F(), { className: "block w-full", href: e.href, legacyBehavior: !1, target: e.forceRender ? "_parent" : "_self", children: e.name }) }, "page-link-".concat(e.href));
                                              }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            (0, i.jsxs)("div", {
                              className: ee(
                                "flex flex-col max-w-[100vw] lg:hidden",
                                ["center", "full-center"].includes(Fe)
                                  ? "items-center"
                                  : "",
                                (null === je || void 0 === je
                                  ? void 0
                                  : je.length) > 0
                                  ? ""
                                  : "h-full justify-center"
                              ),
                              children: [
                                (null === be || void 0 === be
                                  ? void 0
                                  : be.showSocial) &&
                                  (null === (p = x.social) || void 0 === p
                                    ? void 0
                                    : p.length) > 0 &&
                                  (0, i.jsx)("ul", {
                                    className:
                                      "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                    children:
                                      Array.isArray(x.social) &&
                                      x.social.map(function (e, o) {
                                        var l = B.W.find(function (o) {
                                            return o.id === e.type;
                                          }),
                                          n = e.link;
                                        return (
                                          "custom" !== e.type &&
                                            ((n = (n = e.link
                                              .replace(
                                                /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,
                                                ""
                                              )
                                              .replace(/https?:/g, "")
                                              .replace(/^\/\/?/g, "")).replace(
                                              null === l || void 0 === l
                                                ? void 0
                                                : l.host,
                                              ""
                                            )),
                                            (n = "https://"
                                              .concat(
                                                null === l || void 0 === l
                                                  ? void 0
                                                  : l.host,
                                                "/"
                                              )
                                              .concat(n))),
                                          (0, i.jsx)(
                                            "li",
                                            {
                                              children: (0, i.jsx)(F(), {
                                                href: n,
                                                children: (0, i.jsx)("a", {
                                                  target: "_blank",
                                                  children: (0, i.jsx)(B.Q, {
                                                    icon: e,
                                                    color:
                                                      Ce && !b
                                                        ? re.textColor
                                                        : U,
                                                    settings: x.socialSettings,
                                                  }),
                                                }),
                                              }),
                                            },
                                            "social-icon-header-".concat(o)
                                          )
                                        );
                                      }),
                                  }),
                                (null === ce || void 0 === ce
                                  ? void 0
                                  : ce.length) > 0 &&
                                  me &&
                                  (0, i.jsx)("div", {
                                    className: ee(
                                      "flex items-center flex-shrink-0 flex-wrap gap-4",
                                      ["center", "full-center"].includes(Fe)
                                        ? "items-center justify-center"
                                        : ""
                                    ),
                                    children:
                                      null === ce || void 0 === ce
                                        ? void 0
                                        : ce.map(function (e, o) {
                                            return (0,
                                            i.jsx)(N.Z, { button: e, block: be, website: x, className: ee("xl !font-normal !py-1.5", ["center", "full-center"].includes(Fe) ? "text-center" : "") }, "banner-button-".concat(o));
                                          }),
                                  }),
                                (null === be || void 0 === be
                                  ? void 0
                                  : be.button) &&
                                  (0, i.jsx)("div", {
                                    className: "py-6",
                                    children: (0, i.jsx)(N.Z, {
                                      className: "xl !font-normal !py-1.5",
                                      button: be.button,
                                      block: be,
                                      website: x,
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var $,
        H = l(165),
        q = l(40782),
        U = l(83457),
        V = l.n(U),
        Q = {
          success: {
            color: "bg-green-50 text-green-800",
            icon: (0, i.jsx)(x.Z, { className: "h-5 w-5 text-green-400" }),
            progress: "bg-green-700",
          },
          error: {
            color: "bg-red-50 text-red-800",
            icon: (0, i.jsx)(y.Z, { className: "h-5 w-5 text-red-400" }),
            progress: "bg-red-700",
          },
          info: {
            color: "bg-indigo-50 text-indigo-800",
            icon: (0, i.jsx)(b.Z, { className: "h-5 w-5 text-indigo-400" }),
            progress: "bg-indigo-700",
          },
          warning: {
            color: "bg-yellow-50 text-yellow-800",
            icon: (0, i.jsx)(w.Z, { className: "h-5 w-5 text-yellow-400" }),
            progress: "bg-yellow-700",
          },
          default: {
            color: "bg-gray-50 text-gray-800",
            icon: (0, i.jsx)(x.Z, { className: "h-5 w-5 text-gray-400" }),
            progress: "bg-gray-700",
          },
          dark: {
            color: "bg-white-600 font-gray-300",
            icon: (0, i.jsx)(x.Z, { className: "h-5 w-5 text-gray-400" }),
            progress: "bg-gray-300",
          },
        },
        G = [],
        Y = function (e) {
          var o,
            t,
            u,
            g,
            x,
            y,
            b,
            w,
            N,
            k,
            C,
            F,
            Z,
            S,
            A = e.children,
            R = e.website,
            P = e.page,
            _ = e.apiUrl,
            M = e.ipAddress,
            L = e.hideFooter,
            I = p().useRouter(),
            T = (0, r.useState)(0),
            E = T[0],
            z = T[1],
            D = (0, r.useState)(!1),
            B = D[0],
            W = D[1],
            K = (0, r.useState)(null),
            U = K[0],
            Y = K[1],
            J = (0, r.useState)(0),
            X = J[0],
            ee = J[1],
            oe = new m.Z(_),
            le = null !== (S = R.seo) && void 0 !== S ? S : {},
            ne = le.headCode,
            te = le.footerCode,
            ie = (0, s.Z)(le, ["headCode", "footerCode"]),
            re = (0, n.Z)(
              { globalHeadCode: ne, globalFooterCode: te },
              ie,
              null === P || void 0 === P ? void 0 : P.seo
            ),
            ae = (0, r.useCallback)(
              (function () {
                var e = (0, a.Z)(function (e) {
                  return (0, c.__generator)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (0 !== e.target.scrollTop && 0 !== E) ||
                            z(e.target.scrollTop),
                          B ? [3, 2] : [4, ce("scroll")]
                        );
                      case 1:
                        o.sent(), W(!0), (o.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
                return function (o) {
                  return e.apply(this, arguments);
                };
              })(),
              [B]
            ),
            de = r.Children.map(A, function (e) {
              return r.isValidElement(e)
                ? r.cloneElement(e, (0, n.Z)({}, e.props))
                : e;
            }),
            ce = (function () {
              var e = (0, a.Z)(function (e) {
                var o, n, t, i, r, a, s, d, u, v, f, m, g;
                return (0, c.__generator)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return (
                        (s = JSON.parse(localStorage.getItem("user") || "{}")),
                        (d = Math.abs(new Date() - new Date(s.date)) / 36e5),
                        s && s.ip && !(d > 24) && s.hash
                          ? [3, 4]
                          : ((u = M || "0.0.0.0"),
                            window.unsupportedBrowser || M
                              ? [3, 3]
                              : [4, l.e(6216).then(l.bind(l, 76216))])
                      );
                    case 1:
                      return [4, c.sent().publicIpv4()];
                    case 2:
                      (u = c.sent()), (c.label = 3);
                    case 3:
                      (v = new Date().getTime()),
                        (f = new Date().getTime()),
                        (m = new Date(f - (f % 864e5))),
                        localStorage.setItem(
                          "user",
                          JSON.stringify({
                            ip: u,
                            date: m.toISOString(),
                            hash: v,
                          })
                        ),
                        (s.ip = u),
                        (s.hash = v),
                        (c.label = 4);
                    case 4:
                      (g = {
                        idWebsite: R._id,
                        url: document.location.pathname,
                        event: e,
                        platform: (
                          null === window ||
                          void 0 === window ||
                          null === (o = window.navigator) ||
                          void 0 === o
                            ? void 0
                            : o.platform
                        )
                          ? null === window ||
                            void 0 === window ||
                            null === (n = window.navigator) ||
                            void 0 === n ||
                            null === (t = n.platform) ||
                            void 0 === t
                            ? void 0
                            : t.toString()
                          : (
                              null === window ||
                              void 0 === window ||
                              null === (i = window.navigator) ||
                              void 0 === i
                                ? void 0
                                : i.oscpu
                            )
                          ? null === window ||
                            void 0 === window ||
                            null === (r = window.navigator) ||
                            void 0 === r
                            ? void 0
                            : r.oscpu
                          : "bot",
                        title: document.title.split(" - ")[0] || "Home",
                        device:
                          /bot|googlebot|crawler|spider|robot|crawling/i.test(
                            null === window ||
                              void 0 === window ||
                              null === (a = window.navigator) ||
                              void 0 === a
                              ? void 0
                              : a.userAgent
                          )
                            ? "bot"
                            : h.tq
                            ? "mobile"
                            : "desktop",
                        ip: s.ip,
                        hash: s.hash,
                      }),
                        G.find(function (e) {
                          return e.event === g.event;
                        }) || G.push(g),
                        (c.label = 5);
                    case 5:
                      return [2];
                  }
                });
              });
              return function (o) {
                return e.apply(this, arguments);
              };
            })(),
            ue = function () {
              var e,
                o,
                l,
                n,
                t,
                i,
                r,
                a,
                s,
                c,
                u,
                v,
                f,
                m,
                h,
                g,
                p,
                x,
                y,
                b,
                w,
                j,
                N,
                k,
                C,
                F,
                Z,
                S,
                A,
                P,
                _,
                M,
                L,
                I,
                T,
                E,
                z,
                D,
                B,
                W,
                K,
                O,
                $,
                H,
                q,
                U,
                V = [];
              if (
                "custom" ===
                (null === R ||
                void 0 === R ||
                null === (e = R.fonts) ||
                void 0 === e
                  ? void 0
                  : e.source)
              )
                V.push(
                  "family="
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (f = R.fonts) ||
                        void 0 === f ||
                        null === (m = f.custom) ||
                        void 0 === m ||
                        null === (h = m.head) ||
                        void 0 === h ||
                        null === (g = h.name) ||
                        void 0 === g
                        ? void 0
                        : g.replace(/ /gi, "+"),
                      ":"
                    )
                    .concat(
                      "italic" ===
                        (null === R ||
                        void 0 === R ||
                        null === (p = R.fonts) ||
                        void 0 === p ||
                        null === (x = p.custom) ||
                        void 0 === x ||
                        null === (y = x.head) ||
                        void 0 === y
                          ? void 0
                          : y.style)
                        ? "ital,"
                        : "",
                      "wght@"
                    )
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (b = R.fonts) ||
                        void 0 === b ||
                        null === (w = b.custom) ||
                        void 0 === w ||
                        null === (j = w.head) ||
                        void 0 === j
                        ? void 0
                        : j.weight
                    )
                ),
                  V.push(
                    "family="
                      .concat(
                        null === R ||
                          void 0 === R ||
                          null === (N = R.fonts) ||
                          void 0 === N ||
                          null === (k = N.custom) ||
                          void 0 === k ||
                          null === (C = k.body) ||
                          void 0 === C ||
                          null === (F = C.name) ||
                          void 0 === F
                          ? void 0
                          : F.replace(/ /gi, "+"),
                        ":"
                      )
                      .concat(
                        "italic" ===
                          (null === R ||
                          void 0 === R ||
                          null === (Z = R.fonts) ||
                          void 0 === Z ||
                          null === (S = Z.custom) ||
                          void 0 === S ||
                          null === (A = S.body) ||
                          void 0 === A
                            ? void 0
                            : A.style)
                          ? "ital,"
                          : "",
                        "wght@"
                      )
                      .concat(
                        null === R ||
                          void 0 === R ||
                          null === (P = R.fonts) ||
                          void 0 === P ||
                          null === (_ = P.custom) ||
                          void 0 === _ ||
                          null === (M = _.body) ||
                          void 0 === M
                          ? void 0
                          : M.weight
                      )
                  );
              else if (
                (null === R ||
                void 0 === R ||
                null === (o = R.fonts) ||
                void 0 === o ||
                null === (l = o.head) ||
                void 0 === l
                  ? void 0
                  : l.name) &&
                (null === R ||
                void 0 === R ||
                null === (n = R.fonts) ||
                void 0 === n ||
                null === (t = n.body) ||
                void 0 === t
                  ? void 0
                  : t.name)
              ) {
                var Q, G, Y, J, X, ee, oe, le, ne, te;
                V.push(
                  "family="
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (Q = R.fonts) ||
                        void 0 === Q ||
                        null === (G = Q.head) ||
                        void 0 === G ||
                        null === (Y = G.name) ||
                        void 0 === Y
                        ? void 0
                        : Y.replace(/ /gi, "+"),
                      ":wght@"
                    )
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (J = R.fonts) ||
                        void 0 === J ||
                        null === (X = J.head) ||
                        void 0 === X
                        ? void 0
                        : X.weight
                    )
                ),
                  V.push(
                    "family="
                      .concat(
                        null === R ||
                          void 0 === R ||
                          null === (ee = R.fonts) ||
                          void 0 === ee ||
                          null === (oe = ee.body) ||
                          void 0 === oe ||
                          null === (le = oe.name) ||
                          void 0 === le
                          ? void 0
                          : le.replace(/ /gi, "+"),
                        ":wght@"
                      )
                      .concat(
                        null === R ||
                          void 0 === R ||
                          null === (ne = R.fonts) ||
                          void 0 === ne ||
                          null === (te = ne.body) ||
                          void 0 === te
                          ? void 0
                          : te.weight
                      )
                  );
              }
              (null === R ||
              void 0 === R ||
              null === (i = R.header) ||
              void 0 === i ||
              null === (r = i.logo) ||
              void 0 === r ||
              null === (a = r.font) ||
              void 0 === a
                ? void 0
                : a.name) &&
                V.push(
                  "family="
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (L = R.header) ||
                        void 0 === L ||
                        null === (I = L.logo) ||
                        void 0 === I ||
                        null === (T = I.font) ||
                        void 0 === T ||
                        null === (E = T.name) ||
                        void 0 === E
                        ? void 0
                        : E.replace(/ /gi, "+"),
                      ":wght@"
                    )
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (z = R.header) ||
                        void 0 === z ||
                        null === (D = z.logo) ||
                        void 0 === D ||
                        null === (B = D.font) ||
                        void 0 === B
                        ? void 0
                        : B.weight
                    )
                );
              "header" !==
                (null === R ||
                void 0 === R ||
                null === (s = R.footer) ||
                void 0 === s
                  ? void 0
                  : s.logoFrom) &&
                (null === R ||
                void 0 === R ||
                null === (c = R.footer) ||
                void 0 === c ||
                null === (u = c.logo) ||
                void 0 === u ||
                null === (v = u.font) ||
                void 0 === v
                  ? void 0
                  : v.name) &&
                V.push(
                  "family="
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (W = R.footer) ||
                        void 0 === W ||
                        null === (K = W.logo) ||
                        void 0 === K ||
                        null === (O = K.font) ||
                        void 0 === O ||
                        null === ($ = O.name) ||
                        void 0 === $
                        ? void 0
                        : $.replace(/ /gi, "+"),
                      ":wght@"
                    )
                    .concat(
                      null === R ||
                        void 0 === R ||
                        null === (H = R.footer) ||
                        void 0 === H ||
                        null === (q = H.logo) ||
                        void 0 === q ||
                        null === (U = q.font) ||
                        void 0 === U
                        ? void 0
                        : U.weight
                    )
                );
              return (0, d.Z)(new Set(V));
            };
          return (
            (0, r.useEffect)(
              function () {
                return (
                  X < 6 &&
                    (clearInterval($),
                    ($ = setInterval(
                      (0, a.Z)(function () {
                        return (0, c.__generator)(this, function (e) {
                          return ce("ping"), ee(X + 1), [2];
                        });
                      }),
                      3e4
                    ))),
                  U !== I.asPath && (ce("open"), Y(I.asPath), ee(0), W(!1)),
                  function () {
                    X >= 6 && ee(0), clearInterval($), W(!1);
                  }
                );
              },
              [I, X]
            ),
            (0, r.useEffect)(
              function () {
                var e,
                  o = (function () {
                    var e = (0, a.Z)(function () {
                      var e;
                      return (0, c.__generator)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return (null === G || void 0 === G
                              ? void 0
                              : G.length) > 0 && (e = G.shift())
                              ? [4, oe.post("/website/register-user-action", e)]
                              : [3, 2];
                          case 1:
                            o.sent(), (o.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    });
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })();
                return (
                  o(),
                  (e = setInterval(function () {
                    o();
                  }, 500)),
                  document
                    .querySelector("#main-body")
                    .addEventListener("scroll", ae),
                  function () {
                    clearInterval(e),
                      document
                        .querySelector("#main-body")
                        .removeEventListener("scroll", ae);
                  }
                );
              },
              [B]
            ),
            (0, r.useEffect)(function () {
              var e = function () {
                var e = document.querySelector("#main-body");
                e &&
                  ((e.style.scrollBehavior = "auto"),
                  (e.scrollTop = 0),
                  (e.style.scrollBehavior = "smooth"));
              };
              return (
                I.events.on("routeChangeComplete", e),
                function () {
                  I.events.off("routeChangeComplete", e);
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                var e;
                window.cnDisableCache = !0;
                var o = (0, j.getCookie)("pt");
                o &&
                  (null === I ||
                  void 0 === I ||
                  null === (e = I.query) ||
                  void 0 === e
                    ? void 0
                    : e.pt) !== o &&
                  "public" !== R.status &&
                  I.replace("".concat(I.asPath, "?pt=").concat(o), void 0, {
                    shallow: !0,
                  });
              },
              [I, R]
            ),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(v(), {
                  children: [
                    (0, i.jsx)("link", {
                      rel: "icon",
                      href:
                        (null === (o = R.favicon) || void 0 === o
                          ? void 0
                          : o.url) || "",
                    }),
                    (null === P || void 0 === P ? void 0 : P.isCanonical) &&
                      (0, i.jsx)("link", {
                        rel: "canonical",
                        href: "https://"
                          .concat("to-www" === R.redirect ? "www." : "")
                          .concat(R.rawDomain)
                          .concat(I.asPath),
                      }),
                    (0, i.jsx)("title", {
                      children: (
                        null === re || void 0 === re ? void 0 : re.title
                      )
                        ? re.title
                        : (null === (t = R.Business) || void 0 === t
                            ? void 0
                            : t.name) +
                          " | " +
                          (null === (u = R.Business) ||
                          void 0 === u ||
                          null === (g = u.type) ||
                          void 0 === g
                            ? void 0
                            : g.name),
                    }),
                    (0, i.jsx)("meta", {
                      httpEquiv: "Content-Language",
                      content:
                        (null === R || void 0 === R ? void 0 : R.language) ||
                        "en",
                    }),
                    (0, i.jsx)("meta", {
                      name: "keywords",
                      content: (
                        null === re || void 0 === re ? void 0 : re.keywords
                      )
                        ? re.keywords
                        : (null === R ||
                          void 0 === R ||
                          null === (x = R.Business) ||
                          void 0 === x ||
                          null === (y = x.name) ||
                          void 0 === y
                            ? void 0
                            : y.split(" ").join(",")) +
                          "," +
                          (null === R ||
                          void 0 === R ||
                          null === (b = R.Business) ||
                          void 0 === b ||
                          null === (w = b.type) ||
                          void 0 === w ||
                          null === (N = w.name) ||
                          void 0 === N
                            ? void 0
                            : N.split(" ").join(",")),
                    }),
                    (0, i.jsx)("meta", {
                      name: "title",
                      property: "og:title",
                      content: (
                        null === re || void 0 === re ? void 0 : re.title
                      )
                        ? re.title
                        : (null === (k = R.Business) || void 0 === k
                            ? void 0
                            : k.name) +
                          " | " +
                          (null === (C = R.Business) ||
                          void 0 === C ||
                          null === (F = C.type) ||
                          void 0 === F
                            ? void 0
                            : F.name),
                    }),
                    (0, i.jsx)("meta", {
                      property: "og:type",
                      content: "website",
                    }),
                    (0, i.jsx)("meta", {
                      property: "og:url",
                      content: "https://"
                        .concat("to-www" === R.redirect ? "www." : "")
                        .concat(R.rawDomain)
                        .concat(I.asPath),
                    }),
                    (0, i.jsx)("meta", {
                      name: "description",
                      property: "og:description",
                      content: (
                        null === re || void 0 === re ? void 0 : re.description
                      )
                        ? re.description
                        : "",
                    }),
                    (null === re ||
                    void 0 === re ||
                    null === (Z = re.Image) ||
                    void 0 === Z
                      ? void 0
                      : Z.url) &&
                      (0, i.jsx)("meta", {
                        name: "image",
                        property: "og:image",
                        content: re.Image.url,
                      }),
                    (0, i.jsx)("meta", {
                      name: "twitter:card",
                      content: "summary",
                    }),
                    (null === re || void 0 === re
                      ? void 0
                      : re.globalHeadCode) && (0, f.ZP)(re.globalHeadCode),
                    (null === re || void 0 === re ? void 0 : re.headCode) &&
                      (0, f.ZP)(re.headCode),
                    ue().length > 0 &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com",
                          }),
                          (0, i.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: !0,
                          }),
                          (0, i.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?".concat(
                              ue().join("&"),
                              "&display=swap"
                            ),
                            rel: "stylesheet",
                          }),
                        ],
                      }),
                    (null === R || void 0 === R ? void 0 : R.searchIndexing)
                      ? (0, i.jsx)("meta", { name: "robots", content: "all" })
                      : (0, i.jsx)("meta", {
                          name: "robots",
                          content: "noindex,nofollow",
                        }),
                  ],
                }),
                (0, i.jsx)(V(), {
                  color: (function () {
                    var e,
                      o,
                      l,
                      n,
                      t =
                        (null === R ||
                        void 0 === R ||
                        null === (e = R.colorPalette) ||
                        void 0 === e ||
                        null === (o = e.Palette) ||
                        void 0 === o
                          ? void 0
                          : o.colors) ||
                        (null === R ||
                        void 0 === R ||
                        null === (l = R.colorPalette) ||
                        void 0 === l
                          ? void 0
                          : l.colors) ||
                        [];
                    return 0 ===
                      (null === t || void 0 === t ? void 0 : t.length)
                      ? "#333"
                      : (null === (n = t[0]) || void 0 === n
                          ? void 0
                          : n.accent) || "#333";
                  })(),
                  startPosition: 0.3,
                  options: { showSpinner: !1, trickle: !0, trickleSpeed: 100 },
                }),
                (0, i.jsxs)("div", {
                  id: "main-body",
                  onScroll: function (e) {
                    return ae(e);
                  },
                  className:
                    "flex flex-col h-full overflow-y-auto overflow-x-hidden smooth-scroll transition-all",
                  style: se(R),
                  children: [
                    (0, i.jsx)(O, { scrollY: E, website: R }),
                    de,
                    !L && (0, i.jsx)(H.default, { website: R }),
                    (0, i.jsx)(q.ToastContainer, {
                      toastClassName: function (e) {
                        var o = e.type;
                        return (
                          Q[o || "default"].color +
                          " relative p-4 rounded-md justify-between overflow-hidden cursor-pointer text-sm font-medium my-2.5 shadow-md flex"
                        );
                      },
                      bodyClassName: function () {
                        return "flex text-sm font-white font-medium items-center w-full max-w-xs";
                      },
                      icon: function (e) {
                        var o = e.type;
                        return Q[o || "default"].icon;
                      },
                      position: "bottom-center",
                      autoClose: 8e3,
                      hideProgressBar: !0,
                      newestOnTop: !0,
                      closeOnClick: !0,
                      rtl: !1,
                      pauseOnFocusLoss: !0,
                      draggable: !0,
                      pauseOnHover: !0,
                      closeButton: !1,
                    }),
                    (null === re || void 0 === re
                      ? void 0
                      : re.globalFooterCode) && (0, f.ZP)(re.globalFooterCode),
                    (null === re || void 0 === re ? void 0 : re.footerCode) &&
                      (0, f.ZP)(re.footerCode),
                  ],
                }),
              ],
            })
          );
        },
        J = l(31955),
        X =
          (l(83454),
          [
            { id: "top-down", value: "180deg", icon: "ArrowDownIcon" },
            { id: "left-right", value: "90deg", icon: "ArrowRightIcon" },
            {
              id: "bottom-left-top-right",
              value: "45deg",
              icon: "ArrowUpRightIcon",
            },
            {
              id: "bottom-right-top-left",
              value: "315deg",
              icon: "ArrowUpLeftIcon",
            },
          ]);
      function ee() {
        for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
          o[l] = arguments[l];
        return o.filter(Boolean).join(" ");
      }
      function oe(e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e
        );
      }
      function le(e) {
        var o = !1;
        if (!e || !e[0]) return e;
        "#" === e[0] && ((e = e.slice(1)), (o = !0));
        var l = parseInt(
            6 === (null === e || void 0 === e ? void 0 : e.length)
              ? e
              : ""
                  .concat(e[0])
                  .concat(e[0])
                  .concat(e[1])
                  .concat(e[1])
                  .concat(e[2])
                  .concat(e[2]),
            16
          ),
          n = ((l >> 16) + (255 & l) + ((l >> 8) & 255)) / 3;
        return (o ? "#" : "") + (n = n > 128 ? "111827" : "FFFFFF");
      }
      var ne = function (e, o) {
        var l;
        return (
          (o /= 100),
          /^#([A-Fa-f0-9]{3}){1,2}$/.test(e)
            ? (3 ===
                (null === (l = e.substring(1).split("")) || void 0 === l
                  ? void 0
                  : l.length) && (l = [l[0], l[0], l[1], l[1], l[2], l[2]]),
              "rgba(" +
                [
                  ((l = "0x" + l.join("")) >> 16) & 255,
                  (l >> 8) & 255,
                  255 & l,
                ].join(",") +
                "," +
                o +
                ")")
            : e
        );
      };
      function te(e) {
        var o = e
            .replace(/\s/g, "")
            .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
          l = o
            ? (256 | o[1]).toString(16).slice(1) +
              (256 | o[2]).toString(16).slice(1) +
              (256 | o[3]).toString(16).slice(1)
            : e;
        return "#".concat(l);
      }
      function ie(e) {
        var o = (0, r.useState)(!0),
          l = o[0],
          n = o[1];
        return (
          (0, r.useEffect)(
            function () {
              var o = window.matchMedia(e);
              o.matches !== l && n(o.matches);
              var t = function () {
                n(o.matches);
              };
              return (
                o.addListener(t),
                function () {
                  return o.removeListener(t);
                }
              );
            },
            [l, e]
          ),
          l
        );
      }
      function re(e) {
        return JSON.parse(JSON.stringify(e));
      }
      var ae = function (e) {
          return {};
        },
        se = function (e) {
          return {};
        },
        de = function (e) {
          var o = {
            fontFamily:
              (null === e || void 0 === e ? void 0 : e.family) ||
              '"Inter", sans-serif',
            fontWeight: (null === e || void 0 === e ? void 0 : e.weight) || 500,
          };
          return (
            (null === e || void 0 === e ? void 0 : e.style) &&
              (o.fontStyle = e.style),
            (null === e || void 0 === e ? void 0 : e.size) &&
              (o.fontSize = e.size),
            (null === e || void 0 === e ? void 0 : e.lineHeight) &&
              (o.fontHeight = e.lineHeight),
            o
          );
        };
      function ce(e) {
        var o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = e.props.children[0].props.website,
          r = e.props.children[0].props.page,
          a = e.props.children[0].props.apiUrl;
        return (0, i.jsx)(
          Y,
          (0, t.Z)((0, n.Z)({ page: r, website: l, apiUrl: a }, o), {
            children: e,
          })
        );
      }
      function ue(e) {
        var o, l, n;
        return (
          e.match(/^rgb/)
            ? ((o = (e = e.match(
                /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
              ))[1]),
              (l = e[2]),
              (n = e[3]))
            : ((o =
                (e = +(
                  "0x" + e.slice(1).replace(e.length < 5 && /./g, "$&$&")
                )) >> 16),
              (l = (e >> 8) & 255),
              (n = 255 & e)),
          Math.sqrt(o * o * 0.299 + l * l * 0.587 + n * n * 0.114) <= 127.5
        );
      }
      function ve(e, o) {
        if (!e) return "#FFFFFF";
        var l = parseInt(e.replace("#", ""), 16),
          n = Math.round(2.55 * o),
          t = (l >> 16) + n,
          i = ((l >> 8) & 255) + n,
          r = (255 & l) + n;
        return (
          "#" +
          (
            16777216 +
            65536 * (t < 255 ? (t < 1 ? 0 : t) : 255) +
            256 * (i < 255 ? (i < 1 ? 0 : i) : 255) +
            (r < 255 ? (r < 1 ? 0 : r) : 255)
          )
            .toString(16)
            .slice(1)
        );
      }
      function fe(e) {
        if (!e) return "";
        var o = e.split(" ");
        return o.length > 1 && "" !== o[1] ? o[0][0] + o[1][0] : e[0] + e[1];
      }
      var me = function (e, o) {
          var l = {
              small: "rounded-sm md:rounded-md lg:rounded-lg",
              medium: "rounded-lg md:rounded-xl lg:rounded-2xl",
              large: "rounded-2xl md:rounded-3xl lg:rounded-4xl",
              "no-rounded": "",
            },
            n = String(e);
          return (
            (e && "default" !== e) || !o || (n = o), l[n] || l["no-rounded"]
          );
        },
        he = function (e) {
          return "1:1" === e
            ? "aspect-w-1 aspect-h-1"
            : "2:3" === e
            ? "aspect-w-2 aspect-h-3"
            : "3:2" === e
            ? "aspect-w-3 aspect-h-2"
            : "aspect-w-16 aspect-h-9";
        },
        ge = function (e) {
          var o,
            l,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = {
              top: { row: "items-start", col: "justify-start" },
              center: { row: "items-center", col: "justify-center" },
              bottom: { row: "items-end", col: "justify-end" },
            };
          return n
            ? (null === (o = t[e]) || void 0 === o ? void 0 : o.col) ||
                t.center.col
            : (null === (l = t[e]) || void 0 === l ? void 0 : l.row) ||
                t.center.row;
        },
        pe = function (e) {
          var o,
            l,
            n = {
              none: { top: "pt-0", bottom: "pb-0" },
              small: { top: "pt-8 lg:pt-12", bottom: "pb-8 lg:pb-12" },
              medium: { top: "pt-12 lg:pt-20", bottom: "pb-12 lg:pb-20" },
              large: { top: "pt-16 lg:pt-32", bottom: "pb-16 lg:pb-32" },
              default: {
                top: "pt-12 lg:pt-14 xl:pt-20",
                bottom: "pb-12 lg:pb-14 xl:pb-20",
              },
            },
            t =
              (null === (o = n[null === e || void 0 === e ? void 0 : e.top]) ||
              void 0 === o
                ? void 0
                : o.top) || n.default.top,
            i =
              (null ===
                (l = n[null === e || void 0 === e ? void 0 : e.bottom]) ||
              void 0 === l
                ? void 0
                : l.bottom) || n.default.bottom;
          return "".concat(t, " ").concat(i);
        },
        xe = function (e) {
          var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "xl",
            l = {
              sm: "heading-small",
              md: "heading-medium",
              lg: "heading-large",
              xl: "heading-xlarge",
            };
          return l[e] || l[o];
        },
        ye = function (e) {
          var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "lg",
            l = { sm: "body-small", md: "body-medium", lg: "body-large" };
          return l[e] || l[o];
        },
        be = function (e) {
          return "".concat("https://cdn.durable.co", "/assets/").concat(e);
        },
        we = function (e) {
          return (
            (null === e || void 0 === e ? void 0 : e.url) ||
            (null === e || void 0 === e ? void 0 : e.preview)
          );
        },
        je = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "color1";
          return (
            parseInt(
              (null === e || void 0 === e
                ? void 0
                : e.replace(/[^0-9]/gi, "")) || 1,
              10
            ) - 1
          );
        },
        Ne = function (e, o, l) {
          var n,
            t = je(o);
          return (null === e || void 0 === e ? void 0 : e.colors) && !isNaN(t)
            ? null === (n = e.colors[t]) || void 0 === n
              ? void 0
              : n[l]
            : "#FFFFFF";
        },
        ke = function (e) {
          return null !== e && void 0 !== e;
        };
      function Ce(e) {
        return J.Z.get(e);
      }
      function Fe(e, o) {
        var l =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        J.Z.set(e, o, l);
      }
      var Ze = function (e) {
        var o = e.h1,
          l = e.className,
          n = e.style,
          t = e.children;
        return o
          ? (0, i.jsx)("h1", { className: l, style: n, children: t })
          : (0, i.jsx)("h2", { className: l, style: n, children: t });
      };
    },
    75871: function (e, o, l) {
      l.d(o, {
        M: function () {
          return r;
        },
        b: function () {
          return t;
        },
      });
      var n = l(85518),
        t = {
          none: { top: "pt-0", bottom: "pb-0" },
          small: { top: "pt-4", bottom: "pb-4" },
          medium: { top: "pt-6", bottom: "pb-6" },
          large: { top: "pt-8", bottom: "pb-8" },
        };
      function i(e) {
        switch (e) {
          case "small":
            return 1;
          case "medium":
            return 1.5;
          case "large":
            return 2;
          default:
            return 0;
        }
      }
      function r(e) {
        var o,
          l,
          t,
          r = e.header;
        if (!r || !(null === r || void 0 === r ? void 0 : r.sticky)) return {};
        var a,
          s,
          d = "2rem";
        "image" ===
          (null === r || void 0 === r || null === (o = r.logo) || void 0 === o
            ? void 0
            : o.type) &&
          (d =
            (d = n.tq
              ? null === (a = r.logo.height) || void 0 === a
                ? void 0
                : a.mobile
              : null === (s = r.logo.height) || void 0 === s
              ? void 0
              : s.desktop) < 32
              ? "2rem"
              : "".concat(d, "px"));
        var c =
          i(
            null === r ||
              void 0 === r ||
              null === (l = r.spacing) ||
              void 0 === l
              ? void 0
              : l.top
          ) +
          i(
            null === r ||
              void 0 === r ||
              null === (t = r.spacing) ||
              void 0 === t
              ? void 0
              : t.bottom
          );
        return { scrollMarginTop: "calc(".concat(c, "rem + ").concat(d, ")") };
      }
    },
  },
]);
