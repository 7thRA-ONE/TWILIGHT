"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3509],
  {
    33509: function (e, i, l) {
      l.r(i),
        l.d(i, {
          default: function () {
            return w;
          },
        });
      var o = l(26042),
        n = l(69396),
        t = l(85893),
        s = l(28308),
        r = l(29260),
        a = l.n(r),
        u = l(52077),
        d = l(399),
        c = l(21123),
        v = l(67294),
        m = "below",
        g = { color: "#000000", amount: 80 },
        f = {
          below: "",
          top: "absolute w-full bottom-0 left-0 flex flex-col justify-end",
          covering:
            "absolute w-full h-full top-0 left-0 flex flex-col justify-center",
        },
        h = { below: "py-6", top: "p-6 justify-end", covering: "p-10" };
      var p = l(62246),
        x = l(7004),
        b = l(4433),
        y = l(60546);
      var k = {
        xsmall: {
          small: { nColumns: 1, gap: 16 },
          medium: { nColumns: 1, gap: 40 },
          large: { nColumns: 1, gap: 40 },
        },
        small: {
          small: { nColumns: 3, gap: 24 },
          medium: { nColumns: 2, gap: 40 },
          large: { nColumns: 1, gap: 40 },
        },
        large: {
          small: { nColumns: 4, gap: 24 },
          medium: { nColumns: 3, gap: 40 },
          large: { nColumns: 2, gap: 40 },
        },
        xlarge: {
          small: { nColumns: 4, gap: 40 },
          medium: { nColumns: 3, gap: 40 },
          large: { nColumns: 2, gap: 80 },
        },
      };
      function j(e) {
        var i = (function () {
            var e = (0, s.ac)("(min-width: 640px)"),
              i = (0, s.ac)("(min-width: 1024px)");
            return (0, s.ac)("(min-width: 1280px)")
              ? "xlarge"
              : i
              ? "large"
              : e
              ? "small"
              : "xsmall";
          })(),
          l = (0, v.useState)({}),
          o = l[0],
          n = l[1],
          t = (0, v.useState)({}),
          r = t[0],
          a = t[1];
        return (
          (0, v.useEffect)(
            function () {
              var l = k[i][null !== e && void 0 !== e ? e : "medium"],
                o = l.nColumns,
                t = l.gap;
              n(
                (function (e, i) {
                  return {
                    flex: "0 0 calc("
                      .concat(100 / e, "% - ")
                      .concat(((e - 1) * i) / e, "px"),
                  };
                })(o, t)
              ),
                a({ gap: "".concat(t, "px") });
            },
            [i, e]
          ),
          { itemsContainerStyles: r, itemsStyles: o }
        );
      }
      var C = l(6604);
      function w(e) {
        var i,
          l = e.id,
          r = e.block,
          k = e.website,
          w = e.previousBlock,
          S = e.isSeoHeadline,
          N = e.stickyHeaderOffsetStyle,
          A = null === r || void 0 === r ? void 0 : r.headline,
          Z = null === r || void 0 === r ? void 0 : r.showImage,
          H = null === r || void 0 === r ? void 0 : r.showIcon,
          K = null === r || void 0 === r ? void 0 : r.showHeading,
          R = null === r || void 0 === r ? void 0 : r.showContent,
          F = null === r || void 0 === r ? void 0 : r.showButton,
          W = null === r || void 0 === r ? void 0 : r.fullContentLink,
          z = null === r || void 0 === r ? void 0 : r.aspectRatio,
          I =
            null !== (i = null === r || void 0 === r ? void 0 : r.imageFit) &&
            void 0 !== i
              ? i
              : "cover",
          M = null === r || void 0 === r ? void 0 : r.cornerRadius,
          _ = null === r || void 0 === r ? void 0 : r.align,
          P = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = arguments.length > 1 ? arguments[1] : void 0;
            return (
              (e.position && !i) || (e.position = m),
              (e.background && !i) || (e.background = g),
              e
            );
          })(
            null === r || void 0 === r ? void 0 : r.textSettings,
            !Z || "cover" !== I || (!F && !R && !K)
          ),
          B = null === r || void 0 === r ? void 0 : r.animation,
          D = null === k || void 0 === k ? void 0 : k.animation,
          E = null === r || void 0 === r ? void 0 : r.divider,
          O = null === r || void 0 === r ? void 0 : r.border,
          T = j(null === r || void 0 === r ? void 0 : r.itemsSize),
          $ = T.itemsStyles,
          q = T.itemsContainerStyles,
          G = (0, v.useRef)(null),
          L = (0, v.useState)("#FFFFFF"),
          Q = L[0],
          U = L[1],
          X = (0, v.useState)(
            "below" === (null === P || void 0 === P ? void 0 : P.position)
              ? void 0
              : "0px"
          ),
          Y = X[0],
          J = X[1],
          V = (function (e, i) {
            var l,
              o,
              n = e.position,
              t = e.background,
              r = {},
              a = {};
            return (
              "covering" === n || "top" === n
                ? ((a.backgroundColor = (0, s.mR)(t.color, t.amount)),
                  (r.color = (0, s.$O)(t.color)))
                : (r.color = i),
              {
                containerClasses: null !== (l = f[n]) && void 0 !== l ? l : "",
                containerStyles: a,
                contentClasses: null !== (o = h[n]) && void 0 !== o ? o : "",
                contentStyles: r,
              }
            );
          })(P, Q),
          ee = (0, v.useRef)([]),
          ie = (0, v.useCallback)(
            function () {
              var e,
                i,
                l = ee.current.reduce(function (l, o) {
                  var n, t;
                  return (null !==
                    (e =
                      null === (n = l.current) || void 0 === n
                        ? void 0
                        : n.offsetHeight) && void 0 !== e
                    ? e
                    : 0) >
                    (null !==
                      (i =
                        null === (t = o.current) || void 0 === t
                          ? void 0
                          : t.offsetHeight) && void 0 !== i
                      ? i
                      : 0)
                    ? l
                    : o;
                });
              l.current && J(l.current.offsetHeight + "px");
            },
            [ee]
          );
        (0, p.Z)(
          ie,
          "below" === (null === P || void 0 === P ? void 0 : P.position)
            ? null
            : ee.current
        );
        var le = (0, d.Z)(r).minHeight,
          oe = function () {
            return "left" === _
              ? "text-left"
              : "right" === _
              ? "text-right"
              : "text-center";
          },
          ne = W ? "a" : "div";
        return (0, t.jsxs)("section", {
          className: "relative",
          children: [
            (0, t.jsxs)("div", {
              ref: G,
              id: l,
              className: (0, s.AK)(
                "relative flex flex-none flex-shrink-0 break-word",
                (0, s.A2)(
                  (null === r || void 0 === r ? void 0 : r.verticalAlign) ||
                    "center"
                )
              ),
              style: (0, o.Z)({ minHeight: le }, (0, b.$h)(r), N),
              children: [
                (0, t.jsx)(c.Z, { block: r, website: k, setTextColor: U }),
                (0, t.jsx)("div", {
                  className: (0, s.AK)(
                    "relative z-10 container mx-auto",
                    (0, s.bG)(null === r || void 0 === r ? void 0 : r.spacing)
                  ),
                  children: (0, t.jsxs)("div", {
                    children: [
                      A &&
                        (0, t.jsx)(C.Z, {
                          settings: B,
                          globalSettings: D,
                          children: (0, t.jsx)(s.s0, {
                            className: (0, s.AK)("heading-large mb-6", oe()),
                            style: (0, o.Z)({ color: Q }, (0, s.j2)(k)),
                            h1: S,
                            children: A,
                          }),
                        }),
                      (null === r || void 0 === r ? void 0 : r.items) &&
                        (0, t.jsx)("div", {
                          className: (0, s.AK)(
                            "flex flex-wrap relative",
                            "left" === _
                              ? "justify-start"
                              : "right" === _
                              ? "justify-end"
                              : "justify-center"
                          ),
                          style: q,
                          children: r.items.map(function (e, i) {
                            var d, c, v, m, g, f, h;
                            return (0, t.jsx)(
                              ne,
                              {
                                className: (0, s.AK)(
                                  "group w-full relative overflow-hidden",
                                  (0, s.yW)(
                                    M,
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.cornerRadius
                                  ),
                                  "0px" === Y ? "opacity-0" : "",
                                  W
                                    ? "focus:outline-blue-600 cursor-pointer"
                                    : ""
                                ),
                                onClick: W
                                  ? function (i) {
                                      return (0, x.Gc)(
                                        i,
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.button
                                      );
                                    }
                                  : void 0,
                                target: W
                                  ? (0, x.U9)(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.button,
                                      k
                                    )
                                  : void 0,
                                href: W
                                  ? (0, x.f$)(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.button,
                                      k
                                    )
                                  : void 0,
                                style: $,
                                children: (0, t.jsxs)(C.Z, {
                                  settings: B,
                                  globalSettings: D,
                                  delay: 100 * (i + 1),
                                  children: [
                                    Z &&
                                      e.image &&
                                      (0, t.jsxs)("div", {
                                        className: (0, s.AK)(
                                          "flex-shrink-0 relative",
                                          (0, s.n3)(z)
                                        ),
                                        style: { minHeight: Y },
                                        children: [
                                          "top" ===
                                            (null === P || void 0 === P
                                              ? void 0
                                              : P.position) &&
                                            (0, t.jsx)("span", {
                                              className: "relative block",
                                              style: { height: Y },
                                            }),
                                          (0, s.QW)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.image
                                          ) &&
                                            (0, t.jsx)(a(), {
                                              sizes: "200vw",
                                              quality: 90,
                                              className: (0, s.AK)(
                                                W &&
                                                  "transition-all duration-300 group-hover:scale-110",
                                                (0, s.yW)(
                                                  M,
                                                  null === k || void 0 === k
                                                    ? void 0
                                                    : k.cornerRadius
                                                )
                                              ),
                                              src: (0, s.QW)(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.image
                                              ),
                                              onContextMenu: function (e) {
                                                return e.preventDefault();
                                              },
                                              objectFit: I,
                                              objectPosition: ""
                                                .concat(
                                                  e.imagePositionX || "center",
                                                  " "
                                                )
                                                .concat(
                                                  e.imagePositionY || "center"
                                                ),
                                              layout: "fill",
                                              alt:
                                                e.imageAltText ||
                                                e.title ||
                                                e.image.description ||
                                                e.image.author,
                                            }),
                                        ],
                                      }),
                                    H &&
                                      (null === (d = e.icon) || void 0 === d
                                        ? void 0
                                        : d.media) &&
                                      (0, t.jsx)("div", {
                                        className: (0, s.AK)(
                                          "flex-shrink-0 relative",
                                          (null === r || void 0 === r
                                            ? void 0
                                            : r.iconSize) || "w-12 h-12",
                                          "left" === _
                                            ? "ml-0 mr-auto"
                                            : "right" === _
                                            ? "ml-auto mr-0"
                                            : "mx-auto"
                                        ),
                                        children: (0, t.jsx)("div", {
                                          className: "absolute w-full h-full",
                                          style: {
                                            backgroundColor:
                                              (null === (c = e.icon) ||
                                              void 0 === c
                                                ? void 0
                                                : c.color) || "#1F2937",
                                            WebkitMaskImage: 'url("'.concat(
                                              null === e ||
                                                void 0 === e ||
                                                null === (v = e.icon) ||
                                                void 0 === v ||
                                                null === (m = v.media) ||
                                                void 0 === m
                                                ? void 0
                                                : m.url,
                                              '")'
                                            ),
                                            maskImage: 'url("'.concat(
                                              null === e ||
                                                void 0 === e ||
                                                null === (g = e.icon) ||
                                                void 0 === g ||
                                                null === (f = g.media) ||
                                                void 0 === f
                                                ? void 0
                                                : f.url,
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
                                    (0, t.jsx)("div", {
                                      className: V.containerClasses,
                                      style: (0, n.Z)(
                                        (0, o.Z)({}, V.containerStyles),
                                        { minHeight: Y }
                                      ),
                                      children: (0, t.jsxs)("div", {
                                        ref: function (e) {
                                          return (ee.current[i] = {
                                            current: e,
                                          });
                                        },
                                        className: (0, s.AK)(
                                          "flex flex-col",
                                          oe(),
                                          "left" === _
                                            ? "items-start"
                                            : "right" === _
                                            ? "items-end"
                                            : "items-center",
                                          V.contentClasses
                                        ),
                                        style: V.contentStyles,
                                        children: [
                                          K &&
                                            (0, t.jsx)("p", {
                                              className: (0, s.AK)(
                                                "heading-medium mb-4",
                                                W ? "group-hover:underline" : ""
                                              ),
                                              style: (0, o.Z)(
                                                { color: "currentColor" },
                                                (0, s.j2)(k)
                                              ),
                                              children: e.title,
                                            }),
                                          R &&
                                            (0, t.jsx)("div", {
                                              className: (0, s.AK)(
                                                "rich-text-block",
                                                W && !K
                                                  ? "group-hover:underline"
                                                  : ""
                                              ),
                                              style: { color: "currentColor" },
                                              dangerouslySetInnerHTML: {
                                                __html: e.content,
                                              },
                                            }),
                                          F &&
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.button) &&
                                            (0, t.jsx)(u.Z, {
                                              button: (0, n.Z)(
                                                (0, o.Z)({}, e.button),
                                                {
                                                  style:
                                                    null === (h = r.button) ||
                                                    void 0 === h
                                                      ? void 0
                                                      : h.style,
                                                }
                                              ),
                                              block: r,
                                              website: k,
                                              className: "lg mt-4",
                                            }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              "section-".concat(l, "-item-").concat(i)
                            );
                          }),
                        }),
                    ],
                  }),
                }),
                (0, t.jsx)(b.iz, {
                  contentRef: G,
                  divider: E,
                  previousDivider:
                    null === w || void 0 === w ? void 0 : w.divider,
                  border: O,
                  previousBorder:
                    null === w || void 0 === w ? void 0 : w.border,
                  dividerUniqueId: "".concat(l, "-").concat(E),
                }),
              ],
            }),
            O &&
              (0, t.jsx)(y.OC, { contentRef: G, border: O, sectionDivider: E }),
          ],
        });
      }
    },
  },
]);
