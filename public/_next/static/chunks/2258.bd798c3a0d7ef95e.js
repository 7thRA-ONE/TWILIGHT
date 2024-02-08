"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2258],
  {
    82258: function (o, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return b;
          },
        });
      var i = e(26042),
        l = e(85893),
        d = e(28308),
        n = e(52077),
        a = e(399),
        v = e(21123),
        r = e(67294),
        u = e(4433),
        s = e(60546),
        c = e(6604);
      function b(o) {
        var t,
          e,
          b,
          m = o.id,
          p = o.block,
          x = o.website,
          f = o.previousBlock,
          h = o.isSeoHeadline,
          g = o.stickyHeaderOffsetStyle,
          j = null === p || void 0 === p ? void 0 : p.headline,
          k = null === p || void 0 === p ? void 0 : p.content,
          w = (null === p ||
          void 0 === p ||
          null === (t = p.buttons) ||
          void 0 === t
            ? void 0
            : t.items) || [p.button],
          N = (
            null === p ||
            void 0 === p ||
            null === (e = p.buttons) ||
            void 0 === e
              ? void 0
              : e.items
          )
            ? null === p ||
              void 0 === p ||
              null === (b = p.buttons) ||
              void 0 === b
              ? void 0
              : b.enabled
            : !!p.button,
          y = (null === p || void 0 === p ? void 0 : p.align) || "center",
          A = null === p || void 0 === p ? void 0 : p.animation,
          H = null === x || void 0 === x ? void 0 : x.animation,
          S = null === p || void 0 === p ? void 0 : p.divider,
          Z = null === p || void 0 === p ? void 0 : p.border,
          F =
            1 === (null === p || void 0 === p ? void 0 : p.idx) &&
            (null === p || void 0 === p ? void 0 : p.combineWithHeader),
          K = (0, r.useState)("#FFFFFF"),
          T = K[0],
          C = K[1],
          _ = (0, a.Z)(p),
          O = _.minHeight,
          R = _.headerHeight,
          W = (0, r.useRef)(null);
        return (0, l.jsxs)("section", {
          className: "relative",
          children: [
            (0, l.jsxs)("div", {
              ref: W,
              id: m,
              "data-text-color": T,
              className: (0, d.AK)(
                "flex-shrink-0 flex relative break-word",
                (0, d.A2)(null === p || void 0 === p ? void 0 : p.verticalAlign)
              ),
              style: (0, i.Z)(
                { minHeight: O },
                (null === p || void 0 === p ? void 0 : p.combineWithHeader)
                  ? {
                      marginTop: "-".concat(R, "px"),
                      paddingTop: "".concat(R, "px"),
                    }
                  : {},
                (0, u.$h)(p),
                g
              ),
              "data-combine-with-header": F,
              children: [
                (0, l.jsx)(v.Z, { block: p, website: x, setTextColor: C }),
                (0, l.jsx)("div", {
                  className: (0, d.AK)(
                    "relative z-10 container mx-auto",
                    (function (o) {
                      var t,
                        e,
                        i = {
                          none: { top: "pt-0", bottom: "pb-0" },
                          small: {
                            top: "pt-8 lg:pt-32",
                            bottom: "pb-8 lg:pb-32",
                          },
                          medium: {
                            top: "pt-12 lg:pt-40",
                            bottom: "pb-12 lg:pb-40",
                          },
                          large: {
                            top: "pt-20 lg:pt-48",
                            bottom: "pb-20 lg:pb-48",
                          },
                          default: {
                            top: "pt-12 lg:pt-32 xl:pt-40",
                            bottom: "pb-12 lg:pb-32 xl:pb-40",
                          },
                        },
                        l =
                          (null ===
                            (t =
                              i[null === o || void 0 === o ? void 0 : o.top]) ||
                          void 0 === t
                            ? void 0
                            : t.top) || i.default.top,
                        d =
                          (null ===
                            (e =
                              i[
                                null === o || void 0 === o ? void 0 : o.bottom
                              ]) || void 0 === e
                            ? void 0
                            : e.bottom) || i.default.bottom;
                      return "".concat(l, " ").concat(d);
                    })(null === p || void 0 === p ? void 0 : p.spacing)
                  ),
                  children: (0, l.jsxs)(c.Z, {
                    settings: A,
                    globalSettings: H,
                    className: (0, d.AK)(
                      "max-w-3xl",
                      "text-".concat(y),
                      "left" === y
                        ? "ml-0 mr-auto"
                        : "right" === y
                        ? "ml-auto mr-0"
                        : "mx-auto"
                    ),
                    children: [
                      j &&
                        (0, l.jsx)(d.s0, {
                          className: (0, d.AK)(
                            "mb-6 break-word",
                            "text-".concat(y),
                            (0, d.Ae)(
                              null === p || void 0 === p
                                ? void 0
                                : p.headingTextStyle
                            )
                          ),
                          style: (0, i.Z)({ color: T }, (0, d.j2)(x)),
                          h1: h,
                          children: j,
                        }),
                      k &&
                        (0, l.jsx)("p", {
                          className: (0, d.AK)(
                            (0, d.e0)(
                              (null === p || void 0 === p
                                ? void 0
                                : p.bodyTextStyle) ||
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.subtextTextStyle)
                            )
                          ),
                          style: (0, i.Z)({ color: T }, (0, d.SV)(x)),
                          children: k,
                        }),
                      (null === w || void 0 === w ? void 0 : w.length) > 0 &&
                        N &&
                        (0, l.jsx)("div", {
                          className:
                            "flex md:inline-flex flex-col md:flex-row md:gap-4 ",
                          children:
                            null === w || void 0 === w
                              ? void 0
                              : w.map(function (o, t) {
                                  return (0,
                                  l.jsx)(n.Z, { button: o, block: p, website: x, className: (0, d.AK)("xl w-full md:w-max", j || k ? "mt-6 lg:mt-8" : "") }, "banner-button-".concat(t));
                                }),
                        }),
                    ],
                  }),
                }),
                (0, l.jsx)(u.iz, {
                  contentRef: W,
                  divider: S,
                  previousDivider:
                    null === f || void 0 === f ? void 0 : f.divider,
                  border: Z,
                  previousBorder:
                    null === f || void 0 === f ? void 0 : f.border,
                  dividerUniqueId: "".concat(m, "-").concat(S),
                  combinedWithHeaderOffset: F ? R : 0,
                }),
              ],
            }),
            Z &&
              (0, l.jsx)(s.OC, { contentRef: W, border: Z, sectionDivider: S }),
          ],
        });
      }
    },
  },
]);
