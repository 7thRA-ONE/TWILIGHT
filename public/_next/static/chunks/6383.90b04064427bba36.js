"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6383],
  {
    76383: function (e, i, l) {
      l.r(i),
        l.d(i, {
          default: function () {
            return x;
          },
        });
      var t = l(26042),
        n = l(85893),
        r = l(28308),
        o = l(29260),
        s = l.n(o),
        d = l(52077),
        a = l(399),
        c = l(67294),
        u = l(21123),
        v = l(4433),
        m = l(60546),
        f = l(6604);
      function x(e) {
        var i = e.id,
          l = e.block,
          o = e.website,
          x = e.previousBlock,
          g = e.stickyHeaderOffsetStyle,
          h = null === l || void 0 === l ? void 0 : l.content,
          b = null === l || void 0 === l ? void 0 : l.align,
          j = null === l || void 0 === l ? void 0 : l.image,
          w = null === l || void 0 === l ? void 0 : l.button,
          p = null === l || void 0 === l ? void 0 : l.animation,
          y = null === o || void 0 === o ? void 0 : o.animation,
          N = null === l || void 0 === l ? void 0 : l.divider,
          k = null === l || void 0 === l ? void 0 : l.border,
          A = (0, c.useRef)(null),
          F = (0, c.useState)("#FFFFFF"),
          K = F[0],
          Z = F[1],
          C = (0, c.useState)({ top: 0, bottom: 0 }),
          R = C[0],
          S = C[1],
          _ = (0, a.Z)(l).minHeight,
          z = function () {
            var e;
            switch (
              null === l ||
              void 0 === l ||
              null === (e = l.image) ||
              void 0 === e
                ? void 0
                : e.align
            ) {
              case "left":
                return "flex-col-reverse lg:flex-row-reverse";
              case "top":
                return "flex-col-reverse";
              case "bottom":
                return "flex-col";
              default:
                return "flex-col lg:flex-row";
            }
          },
          H = function () {
            switch (b) {
              case "left":
                return "justify-start";
              case "center":
                return "justify-center";
              case "right":
                return "justify-end";
              case "middle":
                return "items-center";
              case "bottom":
                return "items-end";
              default:
                return "items-start";
            }
          },
          P = function (e) {
            return (0, r.QW)(null === j || void 0 === j ? void 0 : j.media)
              ? (0, n.jsx)("div", {
                  className: (0, r.AK)(
                    "flex-shrink-0 relative w-full h-full mx-auto",
                    (0, r.n3)(j.aspectRatio)
                  ),
                  children: (0, n.jsx)(s(), {
                    sizes: "200vw",
                    quality: 90,
                    onContextMenu: function (e) {
                      e.preventDefault();
                    },
                    priority:
                      (null === l || void 0 === l ? void 0 : l.idx) <= 1,
                    src: (0, r.QW)(
                      null === j || void 0 === j ? void 0 : j.media
                    ),
                    objectFit: e || !j.imageFit ? "cover" : j.imageFit,
                    objectPosition: ""
                      .concat(j.imagePositionX || "center", " ")
                      .concat(j.imagePositionY || "center"),
                    layout: "fill",
                    alt: j.altText || j.media.description || j.media.author,
                    className: e
                      ? ""
                      : (0, r.yW)(
                          null === j || void 0 === j ? void 0 : j.cornerRadius,
                          null === o || void 0 === o ? void 0 : o.cornerRadius
                        ),
                  }),
                })
              : null;
          },
          T = function () {
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className: "rich-text-block",
                  style: { color: K },
                  dangerouslySetInnerHTML: { __html: h },
                }),
                w &&
                  (0, n.jsx)(d.Z, {
                    button: w,
                    block: l,
                    website: o,
                    className: "lg mt-6 lg:mt-8 w-full md:w-max",
                  }),
              ],
            });
          };
        return (0, n.jsxs)("section", {
          className: "relative",
          children: [
            (null === j || void 0 === j ? void 0 : j.borderless)
              ? (0, n.jsxs)("div", {
                  ref: A,
                  id: i,
                  className: (0, r.AK)("relative flex break-word", z()),
                  style: (0, t.Z)({ minHeight: _ }, (0, v.$h)(l), g),
                  children: [
                    (0, n.jsxs)("div", {
                      className: (0, r.AK)("flex-1 relative"),
                      style: {
                        paddingTop:
                          (null === R || void 0 === R ? void 0 : R.top) || 0,
                        paddingBottom:
                          (null === R || void 0 === R ? void 0 : R.bottom) || 0,
                      },
                      children: [
                        (0, n.jsx)(u.Z, {
                          block: l,
                          website: o,
                          setTextColor: Z,
                        }),
                        (0, n.jsx)("div", {
                          className: (0, r.AK)(
                            "relative z-10 flex !flex-col h-full px-5 lg:px-20",
                            H(),
                            (0, r.A2)(
                              null === l || void 0 === l
                                ? void 0
                                : l.verticalAlign,
                              !0
                            )
                          ),
                          children: (0, n.jsx)(f.Z, {
                            settings: p,
                            globalSettings: y,
                            children: (0, n.jsx)("div", {
                              className: (0, r.AK)(
                                "flex flex-col w-full lg:max-w-[512px] xl:max-w-screen-sm 2xl:max-w-screen-md",
                                "left" ===
                                  (null === j || void 0 === j
                                    ? void 0
                                    : j.align)
                                  ? "lg:mr-auto lg:ml-0"
                                  : "lg:mr-0 lg:ml-auto",
                                (0, r.bG)(
                                  null === l || void 0 === l
                                    ? void 0
                                    : l.spacing
                                )
                              ),
                              children: T(),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex-1 relative",
                      children: P(!0),
                    }),
                    (0, n.jsx)(v.iz, {
                      contentRef: A,
                      divider: N,
                      previousDivider:
                        null === x || void 0 === x ? void 0 : x.divider,
                      border: k,
                      previousBorder:
                        null === x || void 0 === x ? void 0 : x.border,
                      dividerUniqueId: "".concat(i, "-").concat(N),
                      noPadding: !0,
                      onPaddingChange: S,
                    }),
                  ],
                })
              : (0, n.jsxs)("div", {
                  ref: A,
                  id: i,
                  className: (0, r.AK)(
                    "flex flex-none flex-shrink-0 relative break-word",
                    (0, r.A2)(
                      null === l || void 0 === l ? void 0 : l.verticalAlign
                    )
                  ),
                  style: (0, t.Z)({ minHeight: _ }, (0, v.$h)(l)),
                  children: [
                    (0, n.jsx)(u.Z, { block: l, website: o, setTextColor: Z }),
                    (0, n.jsx)("div", {
                      className: (0, r.AK)(
                        "relative z-10 container mx-auto",
                        (0, r.bG)(
                          null === l || void 0 === l ? void 0 : l.spacing
                        )
                      ),
                      children: (0, n.jsxs)(f.Z, {
                        settings: p,
                        globalSettings: y,
                        className: (0, r.AK)(
                          "flex w-full gap-10 lg:gap-20",
                          z(),
                          H()
                        ),
                        children: [
                          (0, n.jsx)("div", {
                            className: (0, r.AK)(
                              "flex-1 flex flex-col max-w-240",
                              (function () {
                                var e;
                                if (
                                  ["left", "right"].includes(
                                    null === l ||
                                      void 0 === l ||
                                      null === (e = l.image) ||
                                      void 0 === e
                                      ? void 0
                                      : e.align
                                  )
                                )
                                  return "items-center lg:items-start";
                                switch (b) {
                                  case "left":
                                    return "items-start";
                                  case "center":
                                    return "items-center text-center mx-auto";
                                  case "right":
                                    return "items-end text-right ml-auto";
                                }
                              })()
                            ),
                            children: T(),
                          }),
                          (0, n.jsx)("div", {
                            className: (0, r.AK)(
                              "flex-1 flex w-full h-full",
                              (function () {
                                var e;
                                if (
                                  ["left", "right"].includes(
                                    null === l ||
                                      void 0 === l ||
                                      null === (e = l.image) ||
                                      void 0 === e
                                      ? void 0
                                      : e.align
                                  )
                                )
                                  return "left" === b
                                    ? "justify-end"
                                    : "justify-center lg:justify-start";
                                switch (b) {
                                  case "left":
                                    return "items-start lg:max-w-1/2";
                                  case "center":
                                    return "items-center lg:max-w-1/2 mx-auto text-center";
                                  case "right":
                                    return "items-end lg:max-w-1/2 ml-auto text-right";
                                }
                              })()
                            ),
                            children: P(!1),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(v.iz, {
                      contentRef: A,
                      divider: N,
                      previousDivider:
                        null === x || void 0 === x ? void 0 : x.divider,
                      border: k,
                      previousBorder:
                        null === x || void 0 === x ? void 0 : x.border,
                      dividerUniqueId: "".concat(i, "-").concat(N),
                    }),
                  ],
                }),
            k &&
              (0, n.jsx)(m.OC, { contentRef: A, border: k, sectionDivider: N }),
          ],
        });
      }
    },
  },
]);
