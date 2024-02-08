"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [258],
  {
    10258: function (e, i, l) {
      l.r(i),
        l.d(i, {
          default: function () {
            return h;
          },
        });
      var t = l(26042),
        o = l(85893),
        n = l(28308),
        d = l(33752),
        r = l.n(d),
        s = l(40944),
        a = l(29260),
        u = l.n(a),
        v = l(399),
        c = l(21123),
        m = l(67294),
        x = l(4433),
        g = l(60546),
        f = l(6604);
      function h(e) {
        var i,
          l,
          d,
          a,
          h,
          y,
          j,
          b,
          p,
          w,
          N,
          A,
          k,
          C,
          K = e.id,
          S = e.website,
          F = e.block,
          Z = e.previousBlock,
          B = e.stickyHeaderOffsetStyle;
        Array.isArray(F.items) ||
          (F.items = [{ content: F.content, by: F.by }]);
        var T = null === F || void 0 === F ? void 0 : F.align,
          z = null === F || void 0 === F ? void 0 : F.animation,
          D = null === S || void 0 === S ? void 0 : S.animation,
          H = null === F || void 0 === F ? void 0 : F.divider,
          Q = null === F || void 0 === F ? void 0 : F.border,
          R = (0, m.useRef)(null),
          W = (0, m.useState)("#FFFFFF"),
          _ = W[0],
          q = W[1],
          I = (0, v.Z)(F).minHeight;
        return (0, o.jsxs)("section", {
          className: "relative",
          children: [
            (0, o.jsxs)("div", {
              ref: R,
              id: K,
              className: (0, n.AK)(
                "relative flex flex-none flex-shrink-0 break-word",
                (0, n.A2)(
                  (null === F || void 0 === F ? void 0 : F.verticalAlign) ||
                    "center"
                )
              ),
              style: (0, t.Z)({ minHeight: I }, (0, x.$h)(F), B),
              children: [
                (0, o.jsx)(c.Z, { block: F, website: S, setTextColor: q }),
                (0, o.jsx)("div", {
                  className: (0, n.AK)(
                    "relative z-10 container mx-auto testimonials-carousel",
                    (0, n.bG)(null === F || void 0 === F ? void 0 : F.spacing)
                  ),
                  children: (0, o.jsx)(f.Z, {
                    settings: z,
                    globalSettings: D,
                    children:
                      (null === F ||
                      void 0 === F ||
                      null === (i = F.items) ||
                      void 0 === i
                        ? void 0
                        : i.length) > 1
                        ? (0, o.jsx)(r(), {
                            cellAlign: "center",
                            slidesToShow: 1,
                            autoplay: !0,
                            pauseOnHover: !0,
                            wrapAround: !0,
                            transitionMode: "scroll",
                            defaultControlsConfig: {
                              nextButtonStyle: { background: "transparent" },
                              nextButtonText: (0, o.jsx)(s.Z, {
                                icon: "ChevronRightIcon",
                                className: (0, n.AK)(
                                  "w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0",
                                  "#111827" === _
                                    ? "text-gray-900"
                                    : "text-white"
                                ),
                              }),
                              prevButtonStyle: { background: "transparent" },
                              prevButtonText: (0, o.jsx)(s.Z, {
                                icon: "ChevronLeftIcon",
                                className: (0, n.AK)(
                                  "w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0",
                                  "#111827" === _
                                    ? "text-gray-900"
                                    : "text-white"
                                ),
                              }),
                            },
                            renderBottomCenterControls: function (e) {
                              var i;
                              return (0, o.jsx)("ul", {
                                className: (0, n.AK)(
                                  "flex gap-4 lg:gap-5 w-full",
                                  "right" === T
                                    ? "justify-end"
                                    : "left" === T
                                    ? "justify-start"
                                    : "justify-center"
                                ),
                                children:
                                  null === F ||
                                  void 0 === F ||
                                  null === (i = F.items) ||
                                  void 0 === i
                                    ? void 0
                                    : i.map(function (i, l) {
                                        return (0, o.jsx)(
                                          "li",
                                          {
                                            children: (0, o.jsx)("button", {
                                              className: (0, n.AK)(
                                                "w-2.5 h-2.5 rounded-full transition-all",
                                                e.currentSlide === l
                                                  ? "bg-gray-900 ring-4 ring-gray-200"
                                                  : "",
                                                e.currentSlide > l
                                                  ? "bg-gray-900"
                                                  : "",
                                                e.currentSlide < l
                                                  ? "bg-gray-400"
                                                  : ""
                                              ),
                                              onClick: function () {
                                                return e.goToSlide(l);
                                              },
                                            }),
                                          },
                                          l
                                        );
                                      }),
                              });
                            },
                            children:
                              null === F ||
                              void 0 === F ||
                              null === (l = F.items) ||
                              void 0 === l
                                ? void 0
                                : l.map(function (e, i) {
                                    var l;
                                    return (0, o.jsx)(
                                      "div",
                                      {
                                        className: (0, n.AK)(
                                          "px-8 md:px-28 my-auto h-full flex"
                                        ),
                                        children: (0, o.jsxs)("div", {
                                          className: (0, n.AK)(
                                            "flex flex-col gap-4 justify-center lg:max-w-5xl break-word",
                                            "text-".concat(T),
                                            "".concat(
                                              "left" === T
                                                ? "ml-0 mr-auto items-start"
                                                : "right" === T
                                                ? "ml-auto mr-0 items-end"
                                                : "mx-auto items-center"
                                            )
                                          ),
                                          children: [
                                            (null === (l = e.image) ||
                                            void 0 === l
                                              ? void 0
                                              : l.url) &&
                                              (0, o.jsx)("div", {
                                                className: (0, n.AK)(
                                                  "relative w-24 h-24 rounded-full overflow-hidden"
                                                ),
                                                children:
                                                  (0, n.QW)(
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.image
                                                  ) &&
                                                  (0, o.jsx)(u(), {
                                                    sizes: "200vw",
                                                    quality: 90,
                                                    onContextMenu: function (
                                                      e
                                                    ) {
                                                      e.preventDefault();
                                                    },
                                                    src: (0, n.QW)(
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e.image
                                                    ),
                                                    alt:
                                                      e.by ||
                                                      e.image.description ||
                                                      e.image.author,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                  }),
                                              }),
                                            e.content &&
                                              (0, o.jsx)("p", {
                                                className: "heading-medium",
                                                style: (0, t.Z)(
                                                  { color: _ },
                                                  (0, n.j2)(S)
                                                ),
                                                children: e.content,
                                              }),
                                            e.by &&
                                              (0, o.jsx)("p", {
                                                className: "body-large",
                                                style: { color: _ },
                                                children: e.by,
                                              }),
                                          ],
                                        }),
                                      },
                                      "testimonial-item-".concat(i)
                                    );
                                  }),
                          })
                        : (0, o.jsx)("div", {
                            className: "flex h-full my-auto",
                            children: (0, o.jsxs)("div", {
                              className: (0, n.AK)(
                                "max-w-5xl flex flex-col gap-4 justify-center",
                                "text-".concat(T),
                                "".concat(
                                  "left" === T
                                    ? "ml-0 mr-auto items-start"
                                    : "right" === T
                                    ? "ml-auto mr-0 items-end"
                                    : "mx-auto items-center"
                                )
                              ),
                              children: [
                                (null ===
                                  (d =
                                    null === F || void 0 === F
                                      ? void 0
                                      : F.items[0]) || void 0 === d
                                  ? void 0
                                  : d.image) &&
                                  (0, o.jsx)("div", {
                                    className: (0, n.AK)(
                                      "relative w-24 h-24 rounded-full overflow-hidden"
                                    ),
                                    children:
                                      (0, n.QW)(
                                        null ===
                                          (a =
                                            null === F || void 0 === F
                                              ? void 0
                                              : F.items[0]) || void 0 === a
                                          ? void 0
                                          : a.image
                                      ) &&
                                      (0, o.jsx)(u(), {
                                        sizes: "200vw",
                                        quality: 90,
                                        onContextMenu: function (e) {
                                          e.preventDefault();
                                        },
                                        src: (0, n.QW)(
                                          null ===
                                            (h =
                                              null === F || void 0 === F
                                                ? void 0
                                                : F.items[0]) || void 0 === h
                                            ? void 0
                                            : h.image
                                        ),
                                        alt:
                                          (null ===
                                            (y =
                                              null === F || void 0 === F
                                                ? void 0
                                                : F.items[0]) || void 0 === y
                                            ? void 0
                                            : y.by) ||
                                          (null ===
                                            (j =
                                              null === F || void 0 === F
                                                ? void 0
                                                : F.items[0]) ||
                                          void 0 === j ||
                                          null === (b = j.image) ||
                                          void 0 === b
                                            ? void 0
                                            : b.description) ||
                                          (null ===
                                            (p =
                                              null === F || void 0 === F
                                                ? void 0
                                                : F.items[0]) ||
                                          void 0 === p ||
                                          null === (w = p.image) ||
                                          void 0 === w
                                            ? void 0
                                            : w.author),
                                        layout: "fill",
                                        objectFit: "cover",
                                      }),
                                  }),
                                (null ===
                                  (N =
                                    null === F || void 0 === F
                                      ? void 0
                                      : F.items[0]) || void 0 === N
                                  ? void 0
                                  : N.content) &&
                                  (0, o.jsx)("p", {
                                    className: "heading-medium",
                                    style: (0, t.Z)({ color: _ }, (0, n.j2)(S)),
                                    children:
                                      null ===
                                        (A =
                                          null === F || void 0 === F
                                            ? void 0
                                            : F.items[0]) || void 0 === A
                                        ? void 0
                                        : A.content,
                                  }),
                                (null ===
                                  (k =
                                    null === F || void 0 === F
                                      ? void 0
                                      : F.items[0]) || void 0 === k
                                  ? void 0
                                  : k.by) &&
                                  (0, o.jsx)("p", {
                                    className: "body-large",
                                    style: { color: _ },
                                    children:
                                      null ===
                                        (C =
                                          null === F || void 0 === F
                                            ? void 0
                                            : F.items[0]) || void 0 === C
                                        ? void 0
                                        : C.by,
                                  }),
                              ],
                            }),
                          }),
                  }),
                }),
                (0, o.jsx)(x.iz, {
                  contentRef: R,
                  divider: H,
                  previousDivider:
                    null === Z || void 0 === Z ? void 0 : Z.divider,
                  border: Q,
                  previousBorder:
                    null === Z || void 0 === Z ? void 0 : Z.border,
                  dividerUniqueId: "".concat(K, "-").concat(H),
                }),
              ],
            }),
            Q &&
              (0, o.jsx)(g.OC, { contentRef: R, border: Q, sectionDivider: H }),
          ],
        });
      }
    },
  },
]);
