"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [856],
  {
    7041: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return l;
          },
        });
      var u = r(5893),
        t = r(7294),
        a = r(9656);
      r(9047), r(1855), r(5704);
      function l(e) {
        var n = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(function () {
            n.current && n.current && e.handleChange(n.current.props.value);
          }, []),
          (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(a.Rt, {
              ref: n,
              value:
                "# Demo\n\nTry out Double Great plugins:\n\n[click here](https://double-great.dev)!\n\n![](business-chart.png)",
              options: {
                theme: "material",
                lineNumbers: !0,
                lineWrapping: !0,
                mode: "markdown",
              },
              onChange: function (n) {
                return e.handleChange(n.getValue());
              },
            }),
          })
        );
      }
    },
  },
]);
