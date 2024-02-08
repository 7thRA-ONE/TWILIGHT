"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4814],
  {
    54814: function (e, n, t) {
      t.r(n);
      var u = t(85893),
        s = t(34853),
        i = t(67294);
      n.default = function (e) {
        var n = e.sitekey,
          t = e.onChange,
          c = e.execute,
          r = (0, i.useRef)();
        return (
          (0, i.useEffect)(
            function () {
              c && r.current.execute();
            },
            [c]
          ),
          (0, u.jsx)(s.Z, {
            ref: r,
            className: "hidden",
            size: "invisible",
            badge: "inline",
            sitekey: n,
            onChange: function (e) {
              r.current.reset(), t(e);
            },
          })
        );
      };
    },
  },
]);
