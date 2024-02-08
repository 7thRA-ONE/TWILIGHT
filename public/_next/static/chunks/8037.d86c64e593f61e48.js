"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8037],
  {
    98037: function (i, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return y;
          },
        });
      var l = n(26042),
        o = n(69396),
        t = n(85893),
        d = n(28308),
        r = n(67294),
        c = n(29260),
        a = n.n(c),
        s = n(33752),
        u = n.n(s),
        v = n(41984),
        g = n(3677),
        m = n(11355),
        h = n(94053),
        p = n(43751);
      function x(i) {
        var e = i.pictures,
          n = i.selected,
          l = i.aspectRatio,
          o = i.cornerRadius,
          c = i.open,
          s = i.background,
          x = i.setOpen,
          f = (0, d.ac)("(min-width: 1920px)"),
          j = (0, d.ac)("(min-width: 1440px)"),
          w = (0, d.ac)("(min-width: 1280px)"),
          b = (0, d.ac)("(min-width: 1024px)"),
          N = (0, d.ac)("(min-width: 768px)");
        return (0, t.jsx)(m.u, {
          appear: !0,
          show: c,
          as: r.Fragment,
          children: (0, t.jsxs)(h.V, {
            as: "div",
            className: "relative z-[2000]",
            onClose: function () {
              return x(!1);
            },
            children: [
              (0, t.jsx)(m.u.Child, {
                as: r.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, t.jsx)("div", {
                  className: (0, d.AK)("fixed inset-0 backdrop-blur-xl"),
                  children: (0, t.jsx)("div", {
                    className: "fixed inset-0 bg-white opacity-50",
                    style: { backgroundColor: s },
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className:
                    "flex w-full min-h-screen items-center justify-center text-center",
                  children: (0, t.jsx)(m.u.Child, {
                    as: r.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, t.jsxs)(h.V.Panel, {
                      className:
                        "w-full transform overflow-hidden transition-all gallery-carousel",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-right p-6",
                          children: (0, t.jsx)("button", {
                            type: "button",
                            className:
                              "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                            style: { color: (0, d.$O)(s) },
                            onClick: function () {
                              return x(!1);
                            },
                            children: (0, t.jsx)(p.Z, {
                              className: "h-6 w-6 lg:h-12 lg:w-12",
                              "aria-hidden": "true",
                            }),
                          }),
                        }),
                        (null === e || void 0 === e ? void 0 : e.length) > 0 &&
                          (0, t.jsx)(u(), {
                            slideIndex: n,
                            cellSpacing: b ? 40 : N ? 32 : 12,
                            cellAlign: "center",
                            slidesToShow: (function (i) {
                              return "1:1" === i
                                ? f
                                  ? 3
                                  : b
                                  ? 2.5
                                  : 1.25
                                : "2:3" === i
                                ? f
                                  ? 3.5
                                  : j
                                  ? 3
                                  : w
                                  ? 2.5
                                  : 3
                                : w
                                ? 1.5
                                : b
                                ? 1.25
                                : 1.15;
                            })(l),
                            wrapAround: !0,
                            transitionMode: "scroll",
                            defaultControlsConfig: {
                              nextButtonClassName: N ? "" : "hidden",
                              nextButtonStyle: { background: "transparent" },
                              nextButtonText: (0, t.jsx)(v.Z, {
                                className: "w-6 lg:w-12 h-6 lg:h-12",
                              }),
                              prevButtonClassName: N ? "" : "hidden",
                              prevButtonStyle: { background: "transparent" },
                              prevButtonText: (0, t.jsx)(g.Z, {
                                className: "w-6 lg:w-12 h-6 lg:h-12",
                              }),
                            },
                            renderBottomCenterControls: function (i) {
                              return (0, t.jsx)("ul", {
                                className:
                                  "flex items-center gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                children: e.map(function (e, n) {
                                  return (0, t.jsx)(
                                    "li",
                                    {
                                      className: (0, d.AK)(
                                        "flex items-center justify-center rounded-full transition-all duration-300",
                                        i.currentSlide === n
                                          ? "w-4 h-4"
                                          : "w-2.5 h-2.5"
                                      ),
                                      style:
                                        i.currentSlide === n
                                          ? {
                                              backgroundColor: (0, d.mR)(
                                                (0, d.$O)(s),
                                                20
                                              ),
                                            }
                                          : {},
                                      children: (0, t.jsx)("button", {
                                        className: (0, d.AK)(
                                          "w-2.5 h-2.5 rounded-full transition-all"
                                        ),
                                        style: {
                                          backgroundColor: (0, d.$O)(s),
                                          opacity:
                                            i.currentSlide !== n
                                              ? "35%"
                                              : "100%",
                                        },
                                        onClick: function () {
                                          return i.goToSlide(n);
                                        },
                                      }),
                                    },
                                    "fullscreen-carousel-dots-".concat(n)
                                  );
                                }),
                              });
                            },
                            children: e.map(function (i, e) {
                              return (0, t.jsx)(
                                "div",
                                {
                                  className: (0, d.AK)(
                                    "relative overflow-hidden",
                                    (0, d.n3)(l),
                                    o
                                  ),
                                  children:
                                    (0, d.QW)(i.media) &&
                                    (0, t.jsx)(a(), {
                                      sizes: "200vw",
                                      quality: 90,
                                      src: (0, d.QW)(i.media),
                                      layout: "fill",
                                      objectFit: "cover",
                                      alt:
                                        i.altText ||
                                        i.media.description ||
                                        i.media.author,
                                      onContextMenu: function (i) {
                                        i.preventDefault();
                                      },
                                      objectPosition: ""
                                        .concat(
                                          (null === i || void 0 === i
                                            ? void 0
                                            : i.positionX) || "center",
                                          " "
                                        )
                                        .concat(
                                          (null === i || void 0 === i
                                            ? void 0
                                            : i.positionY) || "center"
                                        ),
                                      className: (0, d.AK)(
                                        "w-full h-full object-center object-cover"
                                      ),
                                    }),
                                },
                                "fullscreen-carousel-picture-"
                                  .concat(i._id, "-")
                                  .concat(e)
                              );
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var f = n(399),
        j = n(21123),
        w = n(4433),
        b = n(60546),
        N = n(6604);
      function y(i) {
        var e,
          n,
          c,
          s,
          m = i.id,
          h = i.website,
          p = i.block,
          y = i.previousBlock,
          A = i.isSeoHeadline,
          C = i.stickyHeaderOffsetStyle,
          K =
            "gallery" !==
            (null === p ||
            void 0 === p ||
            null === (e = p.WebsiteBlock) ||
            void 0 === e
              ? void 0
              : e.type)
              ? null === p ||
                void 0 === p ||
                null === (n = p.WebsiteBlock) ||
                void 0 === n
                ? void 0
                : n.type
              : "image-".concat(
                  (null === p || void 0 === p ? void 0 : p.style) || "grid"
                ),
          k = null === p || void 0 === p ? void 0 : p.headline,
          F = null === p || void 0 === p ? void 0 : p.align,
          S = (null === p || void 0 === p ? void 0 : p.pictures) || [],
          _ = null === p || void 0 === p ? void 0 : p.aspectRatio,
          B = null === p || void 0 === p ? void 0 : p.cornerRadius,
          G = null === p || void 0 === p ? void 0 : p.animation,
          T = null === h || void 0 === h ? void 0 : h.animation,
          R = null === p || void 0 === p ? void 0 : p.divider,
          W = null === p || void 0 === p ? void 0 : p.border,
          Z = (0, r.useRef)(null),
          O = (0, r.useState)("#FFFFFF"),
          z = O[0],
          H = O[1],
          $ = (0, r.useState)("#000000"),
          D = $[0],
          M = $[1],
          q = (0, r.useState)(!1),
          P = q[0],
          Q = q[1],
          E = (0, r.useState)(null),
          I = E[0],
          V = E[1],
          X = (0, d.ac)("(min-width: 1920px)"),
          Y = (0, d.ac)("(min-width: 1280px)"),
          U = (0, d.ac)("(min-width: 1024px)"),
          J = (0, d.ac)("(min-width: 768px)"),
          L = (0, f.Z)(p).minHeight,
          ii = function (i) {
            (null === p || void 0 === p ? void 0 : p.allowFullscreen) &&
              U &&
              (Q(!0), V(i));
          },
          ei = function () {
            return (null === p || void 0 === p ? void 0 : p.allowFullscreen) &&
              U
              ? "hover:opacity-70 cursor-pointer transition-opacity"
              : "";
          },
          ni = function (i, e) {
            var n = (0, d.QW)(null === i || void 0 === i ? void 0 : i.media);
            return n
              ? (0, t.jsx)(a(), {
                  sizes: "200vw",
                  quality: 90,
                  src: n,
                  layout: "fill",
                  objectFit: "cover",
                  alt: i.altText || i.media.description || i.media.author,
                  onContextMenu: function (i) {
                    return i.preventDefault();
                  },
                  objectPosition: ""
                    .concat(
                      (null === i || void 0 === i ? void 0 : i.positionX) ||
                        "center",
                      " "
                    )
                    .concat(
                      (null === i || void 0 === i ? void 0 : i.positionY) ||
                        "center"
                    ),
                  className: (0, d.AK)(
                    "w-full h-full object-center object-cover",
                    !e &&
                      (0, d.yW)(
                        B,
                        null === h || void 0 === h ? void 0 : h.cornerRadius
                      )
                  ),
                })
              : (0, t.jsx)(t.Fragment, {});
          };
        return (
          (null === p || void 0 === p ? void 0 : p.fullHeight) &&
            ((null === p || void 0 === p ? void 0 : p.spacing) ||
              (p.spacing = {}),
            (p.spacing = (0, o.Z)((0, l.Z)({}, p.spacing), {
              top: "none",
              bottom: "none",
            }))),
          (null === p ||
          void 0 === p ||
          null === (c = p.pictures) ||
          void 0 === c
            ? void 0
            : c.length) > 0 &&
            !(null ===
              (s = null === p || void 0 === p ? void 0 : p.pictures[0]) ||
            void 0 === s
              ? void 0
              : s.media) &&
            (p.pictures = p.pictures.map(function (i) {
              return { media: i, altText: i.description };
            })),
          (0, t.jsxs)("section", {
            className: "relative",
            children: [
              (0, t.jsxs)("div", {
                ref: Z,
                id: m,
                className: (0, d.AK)(
                  "flex flex-none flex-shrink-0 relative break-word",
                  (0, d.A2)(
                    (null === p || void 0 === p ? void 0 : p.verticalAlign) ||
                      "center"
                  )
                ),
                style: (0, l.Z)({ minHeight: L }, (0, w.$h)(p), C),
                children: [
                  (0, t.jsx)(j.Z, {
                    block: p,
                    website: h,
                    onChange: function (i) {
                      var e, n;
                      H(
                        (null === i ||
                        void 0 === i ||
                        null === (e = i.overlay) ||
                        void 0 === e
                          ? void 0
                          : e.color1) || "#FFFFFF"
                      ),
                        M(
                          (0, d.$O)(
                            (null === i ||
                            void 0 === i ||
                            null === (n = i.overlay) ||
                            void 0 === n
                              ? void 0
                              : n.color1) || "#FFFFFF"
                          )
                        );
                    },
                  }),
                  (0, t.jsx)("div", {
                    className: (0, d.AK)(
                      "relative z-10",
                      "image-carousel" === K ||
                        (null === p || void 0 === p ? void 0 : p.fullWidth)
                        ? "w-full"
                        : "container mx-auto",
                      (0, d.bG)(null === p || void 0 === p ? void 0 : p.spacing)
                    ),
                    children: (0, t.jsxs)(N.Z, {
                      settings: G,
                      globalSettings: T,
                      children: [
                        (0, t.jsx)("div", {
                          className: (0, d.AK)(
                            ("image-carousel" === K ||
                              (null === p || void 0 === p
                                ? void 0
                                : p.fullWidth)) &&
                              "container mx-auto"
                          ),
                          children:
                            k &&
                            (0, t.jsx)(d.s0, {
                              className: (0, d.AK)(
                                "heading-large mb-6",
                                "text-".concat(F)
                              ),
                              style: (0, l.Z)({ color: D }, (0, d.j2)(h)),
                              h1: A,
                              children: k,
                            }),
                        }),
                        (0, t.jsx)("div", {
                          className: (0, d.AK)(
                            "image-carousel" === K && "gallery-carousel",
                            "image-carousel" !== K &&
                              !(null === p || void 0 === p
                                ? void 0
                                : p.noGutters) &&
                              (null === p || void 0 === p
                                ? void 0
                                : p.fullWidth) &&
                              "md:px-6"
                          ),
                          children:
                            "image-carousel" === K
                              ? (0, t.jsx)(t.Fragment, {
                                  children:
                                    (null === S || void 0 === S
                                      ? void 0
                                      : S.length) > 0 &&
                                    (0, t.jsx)(u(), {
                                      cellSpacing: U ? 40 : J ? 32 : 12,
                                      cellAlign: "center",
                                      slidesToShow: (function (i) {
                                        return "1:1" === i
                                          ? X
                                            ? 3
                                            : U
                                            ? 2.5
                                            : 1.25
                                          : "2:3" === i
                                          ? X
                                            ? 4
                                            : Y
                                            ? 3.5
                                            : U
                                            ? 3
                                            : J
                                            ? 2.5
                                            : 1.5
                                          : "3:2" === i && X
                                          ? 1.75
                                          : Y
                                          ? 1.5
                                          : U
                                          ? 1.25
                                          : 1.15;
                                      })(_),
                                      wrapAround: !0,
                                      transitionMode: "scroll",
                                      enableKeyboardControls: !0,
                                      keyCodeConfig: {
                                        previousSlide: [37],
                                        nextSlide: [39],
                                      },
                                      defaultControlsConfig: {
                                        nextButtonClassName: J ? "" : "hidden",
                                        nextButtonStyle: {
                                          background: "transparent",
                                        },
                                        nextButtonText: (0, t.jsx)(v.Z, {
                                          className: "w-6 lg:w-12 h-6 lg:h-12",
                                        }),
                                        prevButtonClassName: J ? "" : "hidden",
                                        prevButtonStyle: {
                                          background: "transparent",
                                        },
                                        prevButtonText: (0, t.jsx)(g.Z, {
                                          className: "w-6 lg:w-12 h-6 lg:h-12",
                                        }),
                                      },
                                      renderBottomCenterControls: function (i) {
                                        return (0, t.jsx)("ul", {
                                          className:
                                            "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                          children: S.map(function (e, n) {
                                            return (0, t.jsx)(
                                              "li",
                                              {
                                                children: (0, t.jsx)("button", {
                                                  className: (0, d.AK)(
                                                    "w-2.5 h-2.5 rounded-full transition-all",
                                                    i.currentSlide === n &&
                                                      "bg-gray-900 ring-4 ring-gray-200",
                                                    i.currentSlide > n &&
                                                      ("#111827" === D
                                                        ? "bg-gray-600"
                                                        : "bg-gray-200"),
                                                    i.currentSlide < n &&
                                                      ("#111827" === D
                                                        ? "bg-gray-900"
                                                        : "bg-gray-50")
                                                  ),
                                                  onClick: function () {
                                                    return i.goToSlide(n);
                                                  },
                                                }),
                                              },
                                              "image-carousel-dots-"
                                                .concat(p.idx, "-")
                                                .concat(n)
                                            );
                                          }),
                                        });
                                      },
                                      children: S.map(function (i, e) {
                                        return (0,
                                        t.jsx)("div", { className: (0, d.AK)("relative overflow-hidden cursor-auto", (0, d.n3)(_), (0, d.yW)(B, null === h || void 0 === h ? void 0 : h.cornerRadius)), children: ni(i, !0) }, "image-carousel-picture-".concat(p.idx, "-").concat(i._id, "-").concat(e));
                                      }),
                                    }),
                                })
                              : (0, t.jsx)(t.Fragment, {
                                  children:
                                    (1 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsx)("div", {
                                        className: (0, d.AK)(
                                          !(null === p || void 0 === p
                                            ? void 0
                                            : p.fullWidth) && "max-w-3xl"
                                        ),
                                        children: (0, t.jsx)("div", {
                                          className: (0, d.AK)(
                                            "relative overflow-hidden",
                                            (0, d.n3)(_),
                                            ei()
                                          ),
                                          onClick: function () {
                                            return ii(0);
                                          },
                                          children: ni(S[0]),
                                        }),
                                      })) ||
                                    (2 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsx)("div", {
                                        className: (0, d.AK)(
                                          "grid grid-cols-1 md:grid-cols-2",
                                          !(null === p || void 0 === p
                                            ? void 0
                                            : p.noGutters) && "gap-6 md:gap-10"
                                        ),
                                        children: S.map(function (i, e) {
                                          return (0, t.jsx)(
                                            "div",
                                            {
                                              className: (0, d.AK)(
                                                "relative overflow-hidden",
                                                (0, d.n3)(_),
                                                ei()
                                              ),
                                              onClick: function () {
                                                return ii(e);
                                              },
                                              children: ni(i),
                                            },
                                            "image-grid-picture-"
                                              .concat(p.idx, "-")
                                              .concat(i._id, "-")
                                              .concat(e)
                                          );
                                        }),
                                      })) ||
                                    ((3 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) ||
                                      6 ===
                                        (null === S || void 0 === S
                                          ? void 0
                                          : S.length) ||
                                      9 ===
                                        (null === S || void 0 === S
                                          ? void 0
                                          : S.length) ||
                                      12 ===
                                        (null === S || void 0 === S
                                          ? void 0
                                          : S.length)) &&
                                      (0, t.jsx)("div", {
                                        className: (0, d.AK)(
                                          "grid grid-cols-1 lg:grid-cols-3",
                                          !(null === p || void 0 === p
                                            ? void 0
                                            : p.noGutters) &&
                                            "gap-6 md:gap-10 mb-6 md:mb-10"
                                        ),
                                        children: S.map(function (i, e) {
                                          return (0, t.jsx)(
                                            "div",
                                            {
                                              className: (0, d.AK)(
                                                "relative overflow-hidden",
                                                (0, d.n3)(_),
                                                ei()
                                              ),
                                              onClick: function () {
                                                return ii(e);
                                              },
                                              children: ni(i),
                                            },
                                            "image-grid-picture-"
                                              .concat(p.idx, "-")
                                              .concat(i._id, "-")
                                              .concat(e)
                                          );
                                        }),
                                      })) ||
                                    (4 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsx)("div", {
                                        className: (0, d.AK)(
                                          "grid grid-cols-1 md:grid-cols-2",
                                          !(null === p || void 0 === p
                                            ? void 0
                                            : p.noGutters) && "gap-6 md:gap-10"
                                        ),
                                        children: S.map(function (i, e) {
                                          return (0, t.jsx)(
                                            "div",
                                            {
                                              className: (0, d.AK)(
                                                "relative overflow-hidden",
                                                (0, d.n3)(_),
                                                ei()
                                              ),
                                              onClick: function () {
                                                return ii(e);
                                              },
                                              children: ni(i),
                                            },
                                            "image-grid-picture-"
                                              .concat(p.idx, "-")
                                              .concat(i._id, "-")
                                              .concat(e)
                                          );
                                        }),
                                      })) ||
                                    (5 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: S.slice(0, 3).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: S.slice(3, 5).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                        ],
                                      })) ||
                                    (7 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: S.slice(0, 3).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: S.slice(3, 7).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                        ],
                                      })) ||
                                    (8 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: S.slice(0, 6).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: S.slice(6, 8).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                        ],
                                      })) ||
                                    (10 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: S.slice(0, 6).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: S.slice(6, 10).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                        ],
                                      })) ||
                                    (11 ===
                                      (null === S || void 0 === S
                                        ? void 0
                                        : S.length) &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: S.slice(0, 9).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                          (0, t.jsx)("div", {
                                            className: (0, d.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === p || void 0 === p
                                                ? void 0
                                                : p.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: S.slice(9, 11).map(
                                              function (i, e) {
                                                return (0, t.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, d.AK)(
                                                      "relative overflow-hidden",
                                                      (0, d.n3)(_),
                                                      ei()
                                                    ),
                                                    onClick: function () {
                                                      return ii(e);
                                                    },
                                                    children: ni(i),
                                                  },
                                                  "image-grid-picture-"
                                                    .concat(p.idx, "-")
                                                    .concat(i._id, "-")
                                                    .concat(e)
                                                );
                                              }
                                            ),
                                          }),
                                        ],
                                      })),
                                }),
                        }),
                      ],
                    }),
                  }),
                  (null === p || void 0 === p ? void 0 : p.allowFullscreen) &&
                    (0, t.jsx)(x, {
                      website: h,
                      pictures: S,
                      selected: I,
                      aspectRatio: _,
                      cornerRadius: (0, d.yW)(
                        B,
                        null === h || void 0 === h ? void 0 : h.cornerRadius
                      ),
                      background: z,
                      open: P,
                      setOpen: Q,
                    }),
                  (0, t.jsx)(w.iz, {
                    contentRef: Z,
                    divider: R,
                    previousDivider:
                      null === y || void 0 === y ? void 0 : y.divider,
                    border: W,
                    previousBorder:
                      null === y || void 0 === y ? void 0 : y.border,
                    dividerUniqueId: "".concat(m, "-").concat(R),
                  }),
                ],
              }),
              W &&
                (0, t.jsx)(b.OC, {
                  contentRef: Z,
                  border: W,
                  sectionDivider: R,
                }),
            ],
          })
        );
      }
    },
  },
]);
