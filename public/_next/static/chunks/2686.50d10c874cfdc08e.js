"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2686],
  {
    52686: function (e, l, i) {
      i.r(l),
        i.d(l, {
          default: function () {
            return g;
          },
        });
      var n = i(26042),
        o = i(85893),
        s = i(67294),
        d = i(41125),
        t = i(5152),
        a = i.n(t),
        r = {
          dark: "dark-v11",
          light: "light-v11",
          outdoors: "outdoors-v12",
          satellite: "satellite-v9",
          streets: "streets-v12",
        },
        x = function (e) {
          var l,
            n = e.latLng,
            t = e.markerColor,
            x = void 0 === t ? d.theme.extend.colors.indigo[600] : t,
            p = e.theme,
            u = void 0 === p ? "light" : p,
            c = e.className,
            v = e.zoom,
            h = void 0 === v ? 10 : v,
            m = (0, s.useState)(null),
            g = m[0],
            f = m[1];
          return (
            (0, s.useEffect)(function () {
              f(
                a()(
                  function () {
                    return i
                      .e(6348)
                      .then(i.bind(i, 16348))
                      .then(function (e) {
                        return e.StaticMap;
                      });
                  },
                  {
                    loadableGenerated: {
                      webpack: function () {
                        return [16348];
                      },
                    },
                  }
                )
              );
            }, []),
            g
              ? (0, o.jsx)(g, {
                  latLng:
                    null !== n && void 0 !== n
                      ? n
                      : { lat: 37.0902, lng: -95.7129 },
                  markerColor: x,
                  theme: null !== (l = r[u]) && void 0 !== l ? l : r.light,
                  className: c,
                  zoom: h,
                })
              : null
          );
        },
        p = i(399),
        u = i(21123),
        c = i(28308),
        v = i(4433),
        h = i(60546),
        m = i(6604);
      function g(e) {
        var l,
          i,
          d,
          t,
          a,
          r,
          g,
          f,
          y,
          j,
          b = e.id,
          w = e.website,
          k = e.block,
          N = e.previousBlock,
          A = e.isSeoHeadline,
          F = e.stickyHeaderOffsetStyle,
          z = (0, s.useState)("#FFFFFF"),
          S = z[0],
          H = z[1],
          Z = null === k || void 0 === k ? void 0 : k.align,
          C =
            null !==
              (y = null === k || void 0 === k ? void 0 : k.cornerRadius) &&
            void 0 !== y
              ? y
              : "no-rounded",
          K = null === k || void 0 === k ? void 0 : k.address,
          _ =
            null !== (j = null === k || void 0 === k ? void 0 : k.latLng) &&
            void 0 !== j
              ? j
              : { lat: 37.0902, lng: -95.7129 },
          L = null === k || void 0 === k ? void 0 : k.animation,
          D = null === w || void 0 === w ? void 0 : w.animation;
        !k ||
          (null !== k.headline && void 0 !== k.headline) ||
          (k.headline = "Location");
        var R,
          E,
          I = null === k || void 0 === k ? void 0 : k.divider,
          M = null === k || void 0 === k ? void 0 : k.border,
          P = (0, s.useRef)(null),
          B = (0, p.Z)(k).minHeight,
          O = function () {
            var e, l;
            if (
              null === k ||
              void 0 === k ||
              null === (e = k.layers) ||
              void 0 === e
                ? void 0
                : e.palette
            ) {
              var i, n, o;
              if (
                "custom" ===
                (null === k ||
                void 0 === k ||
                null === (i = k.layers) ||
                void 0 === i
                  ? void 0
                  : i.palette)
              )
                return null === k ||
                  void 0 === k ||
                  null === (n = k.layers) ||
                  void 0 === n ||
                  null === (o = n.foreground) ||
                  void 0 === o
                  ? void 0
                  : o.accent;
              var s,
                d,
                t =
                  (null === w ||
                  void 0 === w ||
                  null === (s = w.colorPalette) ||
                  void 0 === s
                    ? void 0
                    : s.Palette) ||
                  (null === w || void 0 === w ? void 0 : w.colorPalette);
              return (0, c.ow)(
                t,
                null === k ||
                  void 0 === k ||
                  null === (d = k.layers) ||
                  void 0 === d
                  ? void 0
                  : d.palette,
                "accent"
              );
            }
            return null !==
              (l = null === k || void 0 === k ? void 0 : k.marker) &&
              void 0 !== l
              ? l
              : w.primaryColor;
          },
          T = function (e) {
            var l;
            H(
              (0, c.$O)(
                (null === e ||
                void 0 === e ||
                null === (l = e.overlay) ||
                void 0 === l
                  ? void 0
                  : l.color1) || "#FFFFFF"
              )
            );
          };
        return (0, o.jsxs)("section", {
          className: "relative",
          children: [
            (0, o.jsxs)("div", {
              ref: P,
              id: b,
              className: (0, c.AK)(
                "relative flex break-word",
                "min-h-screen" !==
                  (null === k ||
                  void 0 === k ||
                  null === (l = k.spacing) ||
                  void 0 === l
                    ? void 0
                    : l.minHeight) &&
                  "background" ===
                    (null === k || void 0 === k ? void 0 : k.style)
                  ? "!min-h-80vh md:!min-h-50vh"
                  : ""
              ),
              style: (0, n.Z)(
                {
                  minHeight:
                    "min-h-screen" ===
                    (null === k ||
                    void 0 === k ||
                    null === (i = k.spacing) ||
                    void 0 === i
                      ? void 0
                      : i.minHeight)
                      ? B
                      : "",
                },
                (0, v.$h)(k),
                F
              ),
              children: [
                "background" === (null === k || void 0 === k ? void 0 : k.style)
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(m.Z, {
                          settings: L,
                          globalSettings: D,
                          className: "absolute inset-0 w-full",
                          children:
                            _ &&
                            (0, o.jsx)(x, {
                              latLng: _,
                              className: (0, c.AK)(
                                "min-h-screen" ===
                                  (null === k ||
                                  void 0 === k ||
                                  null === (d = k.spacing) ||
                                  void 0 === d
                                    ? void 0
                                    : d.minHeight) && "h-full w-full",
                                "!absolute inset-0 z-5"
                              ),
                              theme:
                                null !==
                                  (R =
                                    null === k || void 0 === k
                                      ? void 0
                                      : k.theme) && void 0 !== R
                                  ? R
                                  : "light",
                              markerColor: O(),
                              zoom: 17,
                            }),
                        }),
                        (0, o.jsx)(m.Z, {
                          settings: L,
                          globalSettings: D,
                          className: (0, c.AK)(
                            "relative z-10 container mx-auto py-12 lg:py-14 xl:py-20",
                            "min-h-screen" ===
                              (null === k ||
                              void 0 === k ||
                              null === (t = k.spacing) ||
                              void 0 === t
                                ? void 0
                                : t.minHeight)
                              ? "h-full flex ".concat(
                                  (0, c.A2)(k.verticalAlign)
                                )
                              : ""
                          ),
                          children: (0, o.jsx)("div", {
                            className: (0, c.AK)(
                              "flex flex-row w-full",
                              "left" !== Z && "md:flex-row-reverse"
                            ),
                            children: (0, o.jsxs)("div", {
                              className: (0, c.AK)(
                                "relative z-10 w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow overflow-hidden",
                                (0, c.yW)(
                                  C,
                                  null === w || void 0 === w
                                    ? void 0
                                    : w.cornerRadius
                                )
                              ),
                              children: [
                                (0, o.jsx)(u.Z, {
                                  block: k,
                                  website: w,
                                  onChange: T,
                                }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "relative z-10 flex flex-col gap-4",
                                  children: [
                                    (0, o.jsxs)("div", {
                                      children: [
                                        (null === k || void 0 === k
                                          ? void 0
                                          : k.headline) &&
                                          (0, o.jsx)(c.s0, {
                                            className: "heading-medium mb-2",
                                            style: (0, n.Z)(
                                              { color: S },
                                              (0, c.j2)(w)
                                            ),
                                            h1: A,
                                            children: k.headline,
                                          }),
                                        (0, o.jsx)("pre", {
                                          className: "body-normal",
                                          style: (0, n.Z)(
                                            { color: S },
                                            (0, c.SV)(w)
                                          ),
                                          children: K,
                                        }),
                                      ],
                                    }),
                                    null === k ||
                                    void 0 === k ||
                                    null === (a = k.additional) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map(function (e, l) {
                                          return (0,
                                          o.jsxs)("div", { children: [(0, o.jsx)("p", { className: "heading-medium mb-2", style: (0, n.Z)({ color: S }, (0, c.j2)(w)), children: e.title }), (0, o.jsx)("div", { className: (0, c.AK)("rich-text-block website-wysiwyg"), style: { color: S }, dangerouslySetInnerHTML: { __html: e.content } })] }, l);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    })
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(u.Z, { block: k, website: w, onChange: T }),
                        (0, o.jsx)("div", {
                          className: (0, c.AK)(
                            "relative z-10 container mx-auto flex-grow",
                            (0, c.bG)(
                              null === k || void 0 === k ? void 0 : k.spacing
                            )
                          ),
                          children: (0, o.jsxs)(m.Z, {
                            settings: L,
                            globalSettings: D,
                            className: (0, c.AK)(
                              "flex flex-col w-full h-full gap-10 lg:gap-20",
                              "left" === Z
                                ? "lg:flex-row"
                                : "lg:!flex-row-reverse"
                            ),
                            children: [
                              (0, o.jsx)("div", {
                                className: (0, c.AK)(
                                  "w-full md:w-1/2  h-full overflow-hidden",
                                  (0, c.yW)(
                                    C,
                                    null === w || void 0 === w
                                      ? void 0
                                      : w.cornerRadius
                                  )
                                ),
                                children: (0, o.jsx)(x, {
                                  latLng: _,
                                  className: (0, c.AK)(
                                    "  w-full z-5",
                                    "min-h-screen" ===
                                      (null === k ||
                                      void 0 === k ||
                                      null === (r = k.spacing) ||
                                      void 0 === r
                                        ? void 0
                                        : r.minHeight)
                                      ? "h-full"
                                      : "h-40 md:h-72 lg:h-96"
                                  ),
                                  theme:
                                    null !==
                                      (E =
                                        null === k || void 0 === k
                                          ? void 0
                                          : k.theme) && void 0 !== E
                                      ? E
                                      : "light",
                                  markerColor: O(),
                                  zoom: 17,
                                }),
                              }),
                              (0, o.jsxs)("div", {
                                className: (0, c.AK)(
                                  "w-full md:w-1/2 flex flex-col gap-4",
                                  (0, c.A2)(
                                    "min-h-screen" ===
                                      (null === k ||
                                      void 0 === k ||
                                      null === (g = k.spacing) ||
                                      void 0 === g
                                        ? void 0
                                        : g.minHeight)
                                      ? k.verticalAlign
                                      : "center",
                                    !0
                                  )
                                ),
                                children: [
                                  (0, o.jsxs)("div", {
                                    children: [
                                      (null === k || void 0 === k
                                        ? void 0
                                        : k.headline) &&
                                        (0, o.jsx)(c.s0, {
                                          className: "heading-medium mb-2",
                                          style: (0, n.Z)(
                                            { color: S },
                                            (0, c.j2)(w)
                                          ),
                                          h1: A,
                                          children: k.headline,
                                        }),
                                      (0, o.jsx)("pre", {
                                        className: "body-normal",
                                        style: (0, n.Z)(
                                          { color: S },
                                          (0, c.SV)(w)
                                        ),
                                        children: K,
                                      }),
                                    ],
                                  }),
                                  null === k ||
                                  void 0 === k ||
                                  null === (f = k.additional) ||
                                  void 0 === f
                                    ? void 0
                                    : f.map(function (e, l) {
                                        return (0,
                                        o.jsxs)("div", { children: [(0, o.jsx)("p", { className: "heading-medium mb-2", style: (0, n.Z)({ color: S }, (0, c.j2)(w)), children: e.title }), (0, o.jsx)("div", { className: (0, c.AK)("rich-text-block website-wysiwyg"), style: { color: S }, dangerouslySetInnerHTML: { __html: e.content } })] }, l);
                                      }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                (0, o.jsx)(v.iz, {
                  contentRef: P,
                  divider: I,
                  previousDivider:
                    null === N || void 0 === N ? void 0 : N.divider,
                  border: M,
                  previousBorder:
                    null === N || void 0 === N ? void 0 : N.border,
                  dividerUniqueId: "".concat(b, "-").concat(I),
                }),
              ],
            }),
            M &&
              (0, o.jsx)(h.OC, { contentRef: P, border: M, sectionDivider: I }),
          ],
        });
      }
    },
    41125: function (e, l, i) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = i(50337).Z,
        o = i(75874);
      e.exports = {
        mode: "jit",
        purge: {
          content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./components/**/**/*.{js,ts,jsx,tsx}",
            "./hooks/**/*.{js,ts,jsx,tsx}",
            "./utils/**/*.{js,ts,jsx,tsx}",
          ],
          safelist: [
            "hidden",
            "h-12",
            "h-24",
            "h-45",
            "h-48",
            "h-53",
            "h-54",
            "h-64",
            "h-72",
            "h-80",
            "h-85",
            "h-90",
            "h-96",
            "h-106",
            "h-120",
            "h-128",
            "h-132",
            "h-144",
            "h-160",
            "h-192",
            "h-240",
            "w-12",
            "h-36",
            "w-36",
            "w-24",
            "w-48",
            "w-80",
            "w-96",
            "w-128",
            "mx-auto",
            "ml-auto",
            "mr-auto",
            "justify-start",
            "justify-end",
            "justify-center",
            "align-start",
            "align-end",
            "align-center",
            "flex",
            "flex-col",
            "flex-row",
            "h-150",
            "z-100",
            "max-w-full",
            "items-start",
            "items-end",
            "items-center",
            "min-h-screen",
            "min-h-80vh",
            "min-h-50vh",
            "min-h-100",
            "delay-100",
            "delay-200",
            "delay-300",
            "delay-400",
            "delay-500",
            "delay-600",
            "delay-700",
            "delay-800",
            "delay-900",
            "delay-1000",
            "delay-1100",
            "delay-1200",
            "delay-1300",
          ],
        },
        darkMode: !1,
        theme: {
          fontFamily: {
            sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
          },
          screens: n({ xs: "440px" }, o.screens),
          container: {
            padding: { DEFAULT: "1.25rem", md: "1.5rem" },
            screens: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1536px",
            },
          },
          zIndex: {
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            25: 25,
            60: 60,
            70: 70,
            75: 75,
            80: 80,
            90: 90,
            100: 100,
            max: 999999,
            auto: "auto",
          },
          customForms: function (e) {
            return {
              default: {
                checkbox: {
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                    borderColor: "none",
                  },
                },
              },
            };
          },
          extend: {
            fontSize: {
              base: ["16px", "16px"],
              "label-sm": ["10px", "12px"],
              label: ["14px", "16px"],
              "label-lg": ["16px", "16px"],
              "body-sm": ["12px", "16px"],
              body: ["16px", "20px"],
              "body-lg": ["20px", "24px"],
              h6: ["16px", "28px"],
              h5: ["20px", "28px"],
              h4: ["24px", "32px"],
              h3: ["32px", "40px"],
              h2: ["40px", "48px"],
              h1: ["48px", "56px"],
              display: ["64px", "72px"],
              xxl: ["16rem", "1"],
            },
            padding: { 18: "4.5rem" },
            width: {
              18: "4.5rem",
              20: "80px",
              22: "5.5rem",
              30: "120px",
              40: "160px",
              50: "200px",
              60: "240px",
              75: "300px",
              80: "320px",
              90: "360px",
              96: "384px",
              100: "400px",
              120: "480px",
              128: "512px",
              140: "560px",
              150: "600px",
              160: "640px",
              240: "960px",
              "0/1": "0%",
              "1/1": "100%",
            },
            height: {
              0.75: "3px",
              9.5: "38px",
              22: "5.5rem",
              45: "180px",
              53: "212px",
              54: "216px",
              64: "256px",
              72: "288px",
              80: "320px",
              85: "340px",
              90: "360px",
              96: "384px",
              100: "400px",
              106: "424px",
              120: "480px",
              128: "512px",
              132: "528px",
              144: "576px",
              150: "600px",
              160: "640px",
              192: "768px",
              200: "800px",
              210: "840px",
              220: "880px",
              230: "920px",
              240: "960px",
              250: "1000px",
              260: "1040px",
            },
            backgroundSize: { full: "100%" },
            backgroundPosition: {
              "-top-4": "center top -1rem",
              "-top-20": "center top -5rem",
            },
            minHeight: {
              0: "0",
              "1/4": "25%",
              "1/2": "50%",
              "3/4": "75%",
              full: "100%",
              20: "80px",
              80: "320px",
              90: "360px",
              120: "480px",
              130: "520px",
              150: "600px",
              160: "640px",
              240: "960px",
              screen: "100vh",
              "50vh": "50vh",
              "80vh": "80vh",
            },
            maxHeight: {
              0: "0",
              "1/4": "25%",
              "1/2": "50%",
              "3/4": "75%",
              full: "100%",
              20: "80px",
              40: "160px",
              50: "200px",
              60: "240px",
              70: "280px",
              80: "320px",
              90: "360px",
              100: "400px",
              150: "600px",
              160: "640px",
              240: "960px",
              250: "1000px",
            },
            maxWidth: {
              20: "80px",
              30: "120px",
              40: "160px",
              50: "200px",
              60: "240px",
              70: "280px",
              80: "320px",
              90: "360px",
              100: "400px",
              110: "440px",
              120: "480px",
              140: "560px",
              160: "640px",
              200: "800px",
              220: "860px",
              240: "960px",
              250: "1000px",
              "1/2": "50%",
              full: "100%",
            },
            flex: { 0: "0 0 auto", "col-1": "flex 1 1 10%" },
            borderRadius: { "4xl": "2rem" },
            outline: { "blue-600": ["2px solid #007CDB", "8px"] },
            colors: { indigo: { 600: "#4C35DE" } },
            transitionDuration: { 250: "250ms", 750: "750ms" },
            backdropBlur: { "2xs": "1px", xs: "2px" },
            transitionDelay: {
              100: "100ms",
              200: "200ms",
              300: "300ms",
              400: "400ms",
              500: "500ms",
              600: "600ms",
              700: "700ms",
              800: "800ms",
              900: "900ms",
              1e3: "1000ms",
              1100: "1100ms",
              1200: "1200ms",
              1300: "1300ms",
            },
          },
        },
        variants: { extend: {} },
        plugins: [i(64221), i(50130)],
      };
    },
  },
]);
