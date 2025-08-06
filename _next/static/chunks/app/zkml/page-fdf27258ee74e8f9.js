(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [281],
  {
    6805: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 5245));
    },
    7987: function (e, t, i) {
      "use strict";
      i.d(t, {
        S: function () {
          return r;
        },
      });
      var n,
        o = i(800),
        a = [0],
        s =
          ((n = new Map()),
          {
            getObserver: function (e) {
              var t = e.root,
                i = e.rootMargin,
                o = e.threshold,
                a = n.get(t);
              a || ((a = new Map()), n.set(t, a));
              var s = JSON.stringify({ rootMargin: i, threshold: o }),
                r = a.get(s);
              if (!r) {
                var l = new Map();
                (r = {
                  observer: new IntersectionObserver(
                    function (e) {
                      e.forEach(function (e) {
                        var t = l.get(e.target);
                        null == t || t(e);
                      });
                    },
                    { root: t, rootMargin: i, threshold: o }
                  ),
                  entryCallbacks: l,
                }),
                  a.set(s, r);
              }
              return {
                observe: function (e, t) {
                  var i, n;
                  null == (i = r) || i.entryCallbacks.set(e, t),
                    null == (n = r) || n.observer.observe(e);
                },
                unobserve: function (e) {
                  var t, i;
                  null == (t = r) || t.entryCallbacks.delete(e),
                    null == (i = r) || i.observer.unobserve(e);
                },
              };
            },
          });
      function r(e) {
        var t,
          i,
          n = null != (t = null == e ? void 0 : e.rootMargin) ? t : "0px",
          r = null != (i = null == e ? void 0 : e.threshold) ? i : a,
          l = (0, o.useRef)(null),
          c = (0, o.useRef)(null),
          _ = (0, o.useRef)(null),
          d = (0, o.useState)(),
          m = d[0],
          u = d[1],
          h = (0, o.useCallback)(
            function () {
              var e = l.current;
              if (!e) {
                u(void 0);
                return;
              }
              var t = s.getObserver({
                root: c.current,
                rootMargin: n,
                threshold: r,
              });
              t.observe(e, function (e) {
                u(e);
              }),
                (_.current = t);
            },
            [n, r]
          ),
          b = (0, o.useCallback)(function () {
            var e = _.current,
              t = l.current;
            t && (null == e || e.unobserve(t)), (_.current = null);
          }, []);
        return [
          (0, o.useCallback)(
            function (e) {
              b(), (l.current = e), h();
            },
            [h, b]
          ),
          {
            entry: m,
            rootRef: (0, o.useCallback)(
              function (e) {
                b(), (c.current = e), h();
              },
              [h, b]
            ),
          },
        ];
      }
    },
    5245: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return e_;
          },
        });
      var n = i(5964),
        o = i(5195),
        a = i(5820),
        s = i.n(a),
        r = i(6560),
        l = i.n(r),
        c = {
          src: "/_next/static/media/docs.01c335d6.svg",
          height: 21,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = i(8623),
        d = i(8327);
      function m(e) {
        let { setOpenZkmlPopUp: t } = e;
        return (0, n.jsxs)("section", {
          className: l().ZKMLDesc_container,
          children: [
            (0, n.jsxs)("h1", {
              children: [
                "The future is ",
                (0, n.jsx)("span", { children: "ZKML" }),
              ],
            }),
            (0, n.jsx)("h3", { children: "Here’s how we’ve implemented it" }),
            (0, n.jsxs)("p", {
              children: [
                "NOYA executes Scalable Omnichain DeFi Strategies using Smart Liquidity. It's using AI to predict and",
                (0, n.jsx)("br", {}),
                "optimize yields, bridging fees, slippage, and rewards.",
              ],
            }),
            (0, n.jsxs)("div", {
              className: l().ZKMLDesc_buttons_box,
              children: [
                (0, n.jsxs)("div", {
                  className: l().ZKMLDesc_buttons_box_watch_video,
                  onClick: () => t(!0),
                  children: [
                    (0, n.jsx)(_.default, {
                      className: l().ZKMLDesc_buttons_box_watch_video_icon,
                      src: d.Z,
                      alt: "play",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: l().ZKMLDesc_button_wrapper,
                  children: (0, n.jsxs)("button", {
                    onClick: () =>
                      window.open(
                        "https://docs.noya.network/noyas-zkml/why-zkml",
                        "_blank"
                      ),
                    className: ""
                      .concat(l().ZKMLDesc_button_docs, " ")
                      .concat(l().color_1),
                    children: [
                      (0, n.jsx)(_.default, {
                        src: c,
                        alt: "docs",
                        className: l().ZKMLDesc_button_image,
                      }),
                      "Official Docs",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var u = i(800),
        h = i(291),
        b = i.n(h),
        x = {
          src: "/_next/static/media/USDC.0e57196c.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/_next/static/media/Tether.b2c45bc0.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/Frax.b222e553.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/VST.d5df1ac7.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        };
      let k = [
        {
          title: "Predictive",
          span: "Embrace Predictive Brilliance:",
          content:
            "Leverage the potent capabilities of Machine Learning, enabling predictive precision to guide your future decisions",
          img: {
            src: "/_next/static/media/predictive.5a65042e.svg",
            height: 75,
            width: 107,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          title: "Private",
          span: "Your Secrets Stay Secret:",
          content:
            "Embrace NOYA's provision for model weight privacy, ensuring that those building on our platform can maintain the confidentiality of their unique strategies",
          img: {
            src: "/_next/static/media/privacy.482bbe10.svg",
            height: 102,
            width: 146,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          title: "Trustless Operations",
          span: "No Trust? No Problem:",
          content:
            "In the world of NOYA, your liquidity is untouched until the output of the model is verified, embodying the essence of trustless functionality",
          img: {
            src: "/_next/static/media/trustless.03c67a0a.svg",
            height: 101,
            width: 108,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          title: "Verifiable Backtesting Results",
          span: "Evidence of Excellence:",
          content:
            "All backtesting results can be independently verified, ensuring transparency and building trust in our system's effectiveness",
          img: {
            src: "/_next/static/media/verifiable.8ba97b95.svg",
            height: 120,
            width: 119,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
      ];
      function v() {
        return (0, n.jsxs)("section", {
          className: b().zkml_benefits_container,
          children: [
            (0, n.jsxs)("div", {
              className: b().zkml_benefits_title,
              children: [
                (0, n.jsxs)("h1", {
                  children: [
                    "Benefits of ",
                    (0, n.jsx)("span", { children: "ZKML" }),
                  ],
                }),
                (0, n.jsx)("p", {
                  children:
                    "Unmatched performance with the power of Machine Learning",
                }),
              ],
            }),
            k.map((e, t) =>
              (0, n.jsx)(
                j,
                {
                  title: e.title,
                  span: e.span,
                  content: e.content,
                  img: e.img,
                  index: t,
                },
                e.title
              )
            ),
          ],
        });
      }
      let j = (e) => {
        let { title: t, span: i, content: o, img: a, index: s } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("section", {
            className: b().zkml_benefitBox_container,
            style: s % 2 != 0 ? { direction: "rtl" } : {},
            children: [
              (0, n.jsx)("div", {
                className: b().zkml_benefitBox_container_line,
                style:
                  s % 2 == 0
                    ? { rotate: "-7deg" }
                    : { display: 3 === s ? "none" : "" },
              }),
              (0, n.jsx)("div", {
                className: b().zkml_benefitBox_container_glow,
                style: s % 2 == 0 ? { right: "0%", left: "unset" } : {},
              }),
              (0, n.jsxs)("div", {
                className: b().zkml_benefitBox_data,
                children: [
                  (0, n.jsx)("h1", { children: t }),
                  (0, n.jsxs)("p", {
                    children: [(0, n.jsx)("span", { children: i }), " ", o],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: b().zkml_benefitBox_img_box,
                children: (0, n.jsx)(_.default, {
                  src: a,
                  alt: "".concat(i),
                  className: b().zkml_benefitBox_img,
                }),
              }),
            ],
          }),
        });
      };
      var y = i(6647),
        w = i(6473),
        L = i.n(w),
        N = {
          src: "/_next/static/media/page-arrow.a2999a2f.svg",
          height: 12,
          width: 9,
          blurWidth: 0,
          blurHeight: 0,
        };
      let B = [5, 10, 25];
      function M(e) {
        let {
            length: t,
            setSlice1: i,
            setSlice2: o,
            tableRef: a,
            showRows: s,
            className: r,
          } = e,
          [l, c] = (0, u.useState)(5),
          [d, m] = (0, u.useState)([]),
          [h, b] = (0, u.useState)(1);
        return ((0, u.useEffect)(() => {
          let e = [];
          if ((b(1), i(0), o(l), null == a || a.current, t % l == 0)) {
            let i = t / l;
            for (let t = 1; t <= i; t++) e.push(t);
            m(e);
          } else {
            let i = t / l + 1;
            for (let t = 1; t <= i; t++) e.push(t);
            m(e);
          }
        }, [l, t]),
        t < l)
          ? (0, n.jsx)(n.Fragment, {})
          : (0, n.jsxs)("section", {
              className: "".concat(L().Pagination_container, " ").concat(r),
              children: [
                (0, n.jsxs)("div", {
                  style: { display: !1 === s ? "none" : "" },
                  className: L().Pagination_rows_container,
                  children: [
                    (0, n.jsx)("p", { children: "Number of rows displayed:" }),
                    (0, n.jsx)("div", {
                      className: L().Pagination_rows_box,
                      children: B.map((e) =>
                        (0, n.jsx)(
                          "div",
                          {
                            style: l === e ? { background: "#7d6ff6" } : {},
                            onClick: () => {
                              (t < 10 && 10 === e) ||
                                (t < 25 && 25 === e) ||
                                c(e);
                            },
                            children: e,
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: L().Pagination_pages_container,
                  children: [
                    (0, n.jsx)(_.default, {
                      className: L().Pagination_pages_container_arrow,
                      src: N,
                      alt: "left-arrow",
                      style: { rotate: "180deg" },
                      onClick: () => {
                        h === d[0] ||
                          (i((h - 1) * l - l), o((h - 1) * l), b(h - 1));
                      },
                    }),
                    (0, n.jsx)("div", {
                      className: L().Pagination_pages_box,
                      style: d.length < 5 ? { justifyContent: "center" } : {},
                      children:
                        d.length > 5
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                d
                                  .slice(
                                    d[d.length - 1] - h <= 4
                                      ? d.length - 5
                                      : h -
                                          d[
                                            d.length % 2 == 0
                                              ? d.length / 2
                                              : d.length - 0.5
                                          ] >=
                                        0
                                      ? 0
                                      : h - 1,
                                    d[d.length - 1] - h <= 4
                                      ? d.length - 2
                                      : h -
                                          d[
                                            d.length % 2 == 0
                                              ? d.length / 2
                                              : d.length - 0.5
                                          ] >=
                                        0
                                      ? 2
                                      : h + 1
                                  )
                                  .map((e, t) =>
                                    (0, n.jsx)(
                                      "div",
                                      {
                                        onClick: () => {
                                          b(e),
                                            1 === e
                                              ? (i(0), o(l))
                                              : (i(e * l - l), o(e * l));
                                        },
                                        style:
                                          h === e
                                            ? {
                                                background: "#7d6ff6",
                                                margin: d.length < 5 ? 15 : 0,
                                              }
                                            : { margin: d.length < 5 ? 15 : 0 },
                                        children: e,
                                      },
                                      "page".concat(e)
                                    )
                                  ),
                                h < d[d.length - 5] &&
                                  (0, n.jsx)("p", { children: "..." }),
                                d
                                  .slice(
                                    d[d.length - 1] - h <= 4
                                      ? d.length - 2
                                      : h -
                                          d[
                                            d.length % 2 == 0
                                              ? d.length / 2
                                              : d.length - 0.5
                                          ] >=
                                        0
                                      ? h - 2
                                      : d.length - 2,
                                    d[d.length - 1] - h <= 4
                                      ? d.length
                                      : h -
                                          d[
                                            d.length % 2 == 0
                                              ? d.length / 2
                                              : d.length - 0.5
                                          ] >=
                                        0
                                      ? h
                                      : d.length
                                  )
                                  .map((e, t) =>
                                    (0, n.jsx)(
                                      "div",
                                      {
                                        onClick: () => {
                                          b(e),
                                            1 === e
                                              ? (i(0), o(l))
                                              : (i(e * l - l), o(e * l));
                                        },
                                        style:
                                          h === e
                                            ? {
                                                background: "#7d6ff6",
                                                margin: d.length < 5 ? 15 : 0,
                                              }
                                            : { margin: d.length < 5 ? 15 : 0 },
                                        children: e,
                                      },
                                      "page".concat(e)
                                    )
                                  ),
                              ],
                            })
                          : (0, n.jsx)(n.Fragment, {
                              children: d.map((e) =>
                                (0, n.jsx)(
                                  "div",
                                  {
                                    onClick: () => {
                                      b(e),
                                        1 === e
                                          ? (i(0), o(l))
                                          : (i(e * l - l), o(e * l));
                                    },
                                    style:
                                      h === e
                                        ? {
                                            background: "#7d6ff6",
                                            margin: d.length < 5 ? 15 : 0,
                                          }
                                        : { margin: d.length < 5 ? 15 : 0 },
                                    children: e,
                                  },
                                  "page".concat(e)
                                )
                              ),
                            }),
                    }),
                    (0, n.jsx)(_.default, {
                      className: L().Pagination_pages_container_arrow,
                      src: N,
                      alt: "left-arrow",
                      onClick: () => {
                        h === d[d.length - 1] ||
                          (i((h + 1) * l - l), o((h + 1) * l), b(h + 1));
                      },
                    }),
                  ],
                }),
              ],
            });
      }
      var I = i(2212),
        A = i.n(I),
        z = i(6498),
        q = i.n(z);
      function Z(e) {
        let { data: t, lastItem: i, background: o } = e;
        return (0, n.jsxs)("section", {
          className: q().LiquidityItem_container,
          style: {
            border: i ? "none" : "",
            borderRadius: i ? "0 0 5px 5px" : "",
            background: o,
          },
          children: [
            (0, n.jsx)("div", {
              className: q().LiquidityItem_cell,
              children: (0, n.jsx)("p", { children: t.date }),
            }),
            (0, n.jsx)("div", {
              className: q().LiquidityItem_cell,
              children: (0, n.jsx)("p", { children: t.chain }),
            }),
            (0, n.jsx)("div", {
              className: q().LiquidityItem_cell,
              children: (0, n.jsx)("p", { children: t.protocol }),
            }),
            (0, n.jsx)("div", {
              className: q().LiquidityItem_cell,
              children: (0, n.jsx)("p", { children: t.pool }),
            }),
            (0, n.jsx)("div", {
              className: q().LiquidityItem_cell,
              children:
                t.hasProof &&
                (0, n.jsx)("section", {
                  className: q().LiquidityItem_proof_wrapper,
                  children: (0, n.jsx)("button", {
                    onClick: () => {},
                    className: ""
                      .concat(q().LiquidityItem_proof_button, " ")
                      .concat("" === o ? q().color_1 : q().color_2),
                    children: "Verify Proof",
                  }),
                }),
            }),
          ],
        });
      }
      var T = {
          src: "/_next/static/media/eth.a8d90e19.svg",
          height: 34,
          width: 35,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/_next/static/media/avax.ce8de8ca.svg",
          height: 34,
          width: 34,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = i(6942),
        P = i.n(C),
        D = {
          src: "/_next/static/media/clock.4276bd77.svg",
          height: 11,
          width: 11,
          blurWidth: 0,
          blurHeight: 0,
        };
      function F(e) {
        let { data: t, lastItem: i, background: o } = e;
        return (0, n.jsxs)(
          "section",
          {
            className: P().MLI_container,
            style: {
              border: i ? "none" : "",
              borderRadius: i ? "0 0 5px 5px" : "",
              background: o,
            },
            children: [
              (0, n.jsxs)("div", {
                className: P().top,
                children: [
                  (0, n.jsxs)("div", {
                    className: P().time,
                    children: [
                      (0, n.jsx)(_.default, { src: D, alt: "time" }),
                      t.date,
                    ],
                  }),
                  t.hasProof &&
                    (0, n.jsx)("section", {
                      onClick: () => {},
                      className: P().VaultLocation_prev_proof_wrapper,
                      children: (0, n.jsx)("button", {
                        className: ""
                          .concat(P().VaultLocation_prev_proof_button, " ")
                          .concat("" === o ? P().color_1 : P().color_2),
                        children: "Verify",
                      }),
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: P().bottom,
                children: [
                  (0, n.jsx)("div", { className: P().info, children: t.chain }),
                  (0, n.jsx)("div", {
                    className: P().info,
                    children: t.protocol,
                  }),
                  (0, n.jsx)("div", { className: P().info, children: t.pool }),
                ],
              }),
            ],
          },
          "-".concat(t.date, "-")
        );
      }
      var E = i(8701);
      let K = [
          {
            time: { date: "Monday, April 27, 2023" },
            from: { img: [f, g], name: "VST-FRAX" },
            to: void 0,
            proof: "xgnbnaynas178daa",
            chain: { name: "Ethereum", img: T },
          },
          {
            time: { date: "Monday, April 25, 2023" },
            from: { img: [x, p], name: "USDC-USDT" },
            to: { img: [f, g], name: "VST-FRAX" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Ethereum", img: T },
          },
          {
            time: { date: "Monday, April 23, 2023" },
            from: { img: [g, x], name: "FRAX-USDC" },
            to: { img: [x, p], name: "USDC-USDT" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Avax", img: S },
          },
          {
            time: { date: "Monday, April 19, 2023" },
            from: { img: [f, g], name: "VST-FRAX" },
            to: { img: [g, x], name: "FRAX-USDC" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Avax", img: S },
          },
          {
            time: { date: "Monday, April 15, 2023" },
            from: { img: [x, p], name: "USDC-USDT" },
            to: { img: [f, g], name: "VST-FRAX" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Avax", img: S },
          },
        ],
        R = ["Time of Occurence", "Chain", "Protocol", "Pool", "Proof"];
      function V(e) {
        let { tableData: t } = e,
          [i, o] = (0, u.useState)(0),
          [a, s] = (0, u.useState)(5),
          { width: r } = (0, E.Z)(),
          l = (0, u.useRef)(null),
          c = "",
          _ =
            "linear-gradient(90deg, rgba(125, 111, 246, 0.1) 0%, rgba(88, 225, 217, 0.1) 100%)";
        return (0, n.jsxs)("section", {
          ref: l,
          className: A().LiquidityTable_container,
          children: [
            (0, n.jsx)("div", {
              className: A().LiquidityTable_title,
              children: (0, n.jsx)("h3", {
                children: "Liqudity Movement Records",
              }),
            }),
            (0, n.jsxs)("div", {
              className: A().LiquidityTable_box,
              children: [
                (0, n.jsxs)("div", {
                  className: A().LiquidityTable_box_header,
                  children: [
                    r && r > 600
                      ? (0, n.jsx)(n.Fragment, {
                          children: R.map((e, t) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className: A().LiquidityTable_box_header_item,
                                children: (0, n.jsx)("p", {
                                  style:
                                    t === R.length - 1
                                      ? { position: "unset" }
                                      : {},
                                  children: e,
                                }),
                              },
                              t
                            )
                          ),
                        })
                      : (0, n.jsx)(n.Fragment, {
                          children: "Liqudity Movement Records",
                        }),
                    (0, n.jsx)("div", {
                      className: A().LiquidityTable_box_header_line,
                    }),
                  ],
                }),
                0 === t.length &&
                  (0, n.jsx)("div", {
                    className:
                      "flex w-full mt-8 mb-8 lg:mb-0 items-center justify-center ",
                    children: (0, n.jsx)("p", {
                      className:
                        "gradient-text font-RussoOne text-md lg:text-xl font-bold",
                      children: "Coming Soon",
                    }),
                  }),
                r && r > 600
                  ? (0, n.jsx)(n.Fragment, {
                      children: t.slice(i, a).map((e, o) => {
                        let s = 0 === o ? null : t.slice(i, a)[o - 1].date;
                        return (
                          (c =
                            0 === o
                              ? ""
                              : 1 === o
                              ? e.date === s
                                ? _
                                : ""
                              : e.date === s
                              ? c === _
                                ? _
                                : ""
                              : c === _
                              ? ""
                              : _),
                          (0, n.jsx)(
                            Z,
                            {
                              data: e,
                              lastItem: o === K.slice(i, a).length - 1,
                              background: 0 === o ? _ : c,
                            },
                            e.proof
                          )
                        );
                      }),
                    })
                  : (0, n.jsx)(n.Fragment, {
                      children: t.slice(i, a).map((e, o) => {
                        let s = 0 === o ? null : t.slice(i, a)[o - 1].date;
                        return (
                          (c =
                            0 === o
                              ? ""
                              : 1 === o
                              ? e.date === s
                                ? _
                                : ""
                              : e.date === s
                              ? c === _
                                ? _
                                : ""
                              : c === _
                              ? ""
                              : _),
                          (0, n.jsx)(
                            F,
                            {
                              data: e,
                              lastItem: o === K.slice(i, a).length - 1,
                              background: 0 === o ? _ : c,
                            },
                            e.proof
                          )
                        );
                      }),
                    }),
              ],
            }),
            (0, n.jsx)(M, {
              setSlice1: o,
              setSlice2: s,
              length: t.length,
              tableRef: l,
            }),
          ],
        });
      }
      var H = i(491),
        W = i.n(H),
        O = i(5265),
        U = i.n(O);
      function Y(e) {
        let { data: t, index: i, lastItem: o, background: a } = e;
        return (0, n.jsxs)("section", {
          className: U().BascketingItem_container,
          style: {
            border: o ? "none" : "",
            borderRadius: o ? "0 0 5px 5px" : "",
            background: a,
          },
          children: [
            (0, n.jsx)("div", {
              className: U().BascketingItem_cell,
              children: (0, n.jsx)("p", { children: t.date }),
            }),
            (0, n.jsx)("div", {
              className: U().BascketingItem_cell,
              children: (0, n.jsx)("p", { children: t.chain }),
            }),
            (0, n.jsx)("div", {
              className: U().BascketingItem_cell,
              children: (0, n.jsx)("p", { children: t.protocol }),
            }),
            (0, n.jsx)("div", {
              className: U().BascketingItem_cell,
              children: (0, n.jsx)("p", { children: t.pool }),
            }),
            (0, n.jsx)("div", {
              className: U().BascketingItem_cell,
              children:
                t.hasProof &&
                (0, n.jsx)("section", {
                  className: U().BascketingItem_proof_wrapper,
                  children: (0, n.jsx)("button", {
                    onClick: () => {},
                    className: ""
                      .concat(U().BascketingItem_proof_button, " ")
                      .concat("" === a ? U().color_1 : U().color_2),
                    children: "Verify Proof",
                  }),
                }),
            }),
          ],
        });
      }
      var X = i(2101),
        G = i.n(X);
      function J(e) {
        let { data: t, index: i, lastItem: o, background: a } = e;
        return (0, n.jsxs)(
          "section",
          {
            className: G().MBI_container,
            style: {
              border: o ? "none" : "",
              borderRadius: o ? "0 0 5px 5px" : "",
              background: a,
            },
            children: [
              (0, n.jsxs)("div", {
                className: G().top,
                children: [
                  (0, n.jsxs)("div", {
                    className: G().time,
                    children: [
                      (0, n.jsx)(_.default, { src: D, alt: "time" }),
                      t.date,
                    ],
                  }),
                  t.hasProof &&
                    (0, n.jsx)("section", {
                      onClick: () => {},
                      className: G().VaultLocation_prev_proof_wrapper,
                      children: (0, n.jsx)("button", {
                        className: ""
                          .concat(G().VaultLocation_prev_proof_button, " ")
                          .concat("" === a ? G().color_1 : G().color_2),
                        children: "Verify",
                      }),
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: G().bottom,
                children: [
                  (0, n.jsx)("div", { className: G().info, children: t.chain }),
                  (0, n.jsx)("div", {
                    className: G().info,
                    children: t.protocol,
                  }),
                  (0, n.jsx)("div", { className: G().info, children: t.pool }),
                ],
              }),
            ],
          },
          "".concat(t.date, "-").concat(i)
        );
      }
      let Q = ["Time of Occurence", "Chain", "Protocol", "Pool", "Proof"];
      function $(e) {
        let { tableData: t } = e,
          [i, o] = (0, u.useState)(0),
          [a, s] = (0, u.useState)(5),
          { width: r } = (0, E.Z)(),
          l = (0, u.useRef)(null),
          [c, _] = (0, u.useState)([]);
        (0, u.useEffect)(() => {}, []);
        let d = "",
          m =
            "linear-gradient(90deg, rgba(125, 111, 246, 0.1) 0%, rgba(88, 225, 217, 0.1) 100%)";
        return (0, n.jsxs)("section", {
          ref: l,
          className: W().BascketingTable_container,
          children: [
            (0, n.jsx)("div", {
              className: W().BascketingTable_title,
              children: "Backtesting Records",
            }),
            (0, n.jsxs)("div", {
              className: "relative ".concat(W().BascketingTable_box),
              children: [
                (0, n.jsxs)("div", {
                  className: W().BascketingTable_box_header,
                  children: [
                    r && r > 600
                      ? (0, n.jsx)(n.Fragment, {
                          children: Q.map((e, t) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className: W().BascketingTable_box_header_item,
                                children: (0, n.jsx)("p", {
                                  style:
                                    t === Q.length - 1 || t === Q.length - 2
                                      ? { position: "unset" }
                                      : {},
                                  children: e,
                                }),
                              },
                              t
                            )
                          ),
                        })
                      : (0, n.jsx)(n.Fragment, {
                          children: "Backtesting Records",
                        }),
                    (0, n.jsx)("div", {
                      className: W().BascketingTable_box_header_line,
                    }),
                  ],
                }),
                0 === t.length &&
                  (0, n.jsx)("div", {
                    className:
                      "flex w-full items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    children: (0, n.jsx)("p", {
                      className:
                        "gradient-text font-RussoOne text-md lg:text-xl font-bold",
                      children: "Coming Soon",
                    }),
                  }),
                r && r > 600
                  ? (0, n.jsx)(n.Fragment, {
                      children: t.slice(i, a).map((e, o) => {
                        let s = 0 === o ? null : t.slice(i, a)[o - 1].date;
                        return (
                          (d =
                            0 === o
                              ? ""
                              : 1 === o
                              ? e.date === s
                                ? m
                                : ""
                              : e.date === s
                              ? d === m
                                ? m
                                : ""
                              : d === m
                              ? ""
                              : m),
                          (0, n.jsx)(
                            Y,
                            {
                              data: e,
                              index: o,
                              lastItem: o === c.slice(i, a).length - 1,
                              background: 0 === o ? m : d,
                            },
                            e.proof
                          )
                        );
                      }),
                    })
                  : (0, n.jsx)(n.Fragment, {
                      children: t.slice(i, a).map((e, o) => {
                        let s = 0 === o ? null : t.slice(i, a)[o - 1].date;
                        return (
                          (d =
                            0 === o
                              ? ""
                              : 1 === o
                              ? e.date === s
                                ? m
                                : ""
                              : e.date === s
                              ? d === m
                                ? m
                                : ""
                              : d === m
                              ? ""
                              : m),
                          (0, n.jsx)(
                            J,
                            {
                              data: e,
                              index: o,
                              lastItem: o === c.slice(i, a).length - 1,
                              background: 0 === o ? m : d,
                            },
                            e.publicInputs
                          )
                        );
                      }),
                    }),
              ],
            }),
            (0, n.jsx)(M, {
              setSlice1: o,
              setSlice2: s,
              length: t.length,
              tableRef: l,
            }),
          ],
        });
      }
      var ee = i(2780),
        et = i.n(ee),
        ei = i(3598),
        en = i(7987),
        eo = i(7358),
        ea = () => {
          let e = (0, eo.i)(),
            [t, { entry: i }] = (0, en.S)(),
            o = i && i.isIntersecting,
            [a, s] = (0, u.useState)(!1);
          return (
            (0, u.useEffect)(() => {
              o && s(!0);
            }, [o]),
            (0, n.jsxs)("div", {
              className: et().Animation_Container,
              children: [
                (0, n.jsx)("div", {
                  className: et().Animation_Container_intersector,
                  ref: t,
                }),
                (0, n.jsx)(ei.Z, {
                  src:
                    "iOS" === e || "unknown" === e ? "/zkml.mp4" : "/zkml.webm",
                  style: { objectFit: "cover" },
                  playWithIntersection: o,
                  loop: a,
                }),
              ],
            })
          );
        },
        es = i(3854),
        er = i.n(es),
        el = i(785);
      function ec(e) {
        let { setOpenZkmlPopUp: t } = e,
          i = (0, u.useRef)(null),
          o = !1,
          a = (e) => {
            var n;
            let { target: a } = e;
            !(function (e) {
              if (!e || !("nodeType" in e)) throw Error("Node expected");
            })(a),
              (null !== (n = i.current) && void 0 !== n && n.contains(a)) ||
                (o ? t(!1) : (o = !0));
          };
        (0, u.useEffect)(
          () => (
            (document.body.style.overflowY = "hidden"),
            document.body.addEventListener("click", a),
            () => {
              (document.body.style.overflowY = "scroll"),
                document.body.removeEventListener("click", a);
            }
          ),
          []
        );
        let s = (0, u.useRef)(null);
        return (
          (0, u.useEffect)(() => {
            s.current && s.current.play();
          }, []),
          (0, n.jsx)("div", {
            className: er().ZKML_video_wrapper,
            children: (0, n.jsxs)("section", {
              ref: i,
              className: er().ZKML_video_Container,
              children: [
                (0, n.jsx)(_.default, {
                  onClick: () => t(!1),
                  src: el.Z,
                  alt: "close",
                  className: er().ZKML_video_close,
                }),
                (0, n.jsx)("iframe", {
                  width: "100%",
                  height: "100%",
                  src: "https://www.youtube.com/embed/Z52gBVVC_D8",
                  title: "YouTube video player",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              ],
            }),
          })
        );
      }
      function e_() {
        let [e, t] = (0, u.useState)([]),
          [i, a] = (0, u.useState)([]),
          [r, l] = (0, u.useState)(!1),
          c = async () => {
            await fetch(
              "https://www.noya.network/noya_data/vaultData/Curve%20Pool/"
            )
              .then((e) => e.json())
              .then((e) => {
                a(
                  e.data.backtestingData.map((t) => ({
                    ...t,
                    verifierLink: e.data.verifierContract,
                  }))
                ),
                  t(
                    e.data.prevLocationsData.map((t) => ({
                      ...t,
                      verifierLink: e.data.verifierContract,
                    }))
                  );
              })
              .catch((e) => console.error(e));
          };
        return (
          (0, u.useEffect)(() => {
            c();
          }, []),
          (0, n.jsxs)("section", {
            className: s().zkml_container,
            children: [
              (0, n.jsx)("div", { className: s().zkml_star_back }),
              (0, n.jsx)("div", { className: s().zkml_star_back2 }),
              (0, n.jsx)("div", { className: s().zkml_star_back3 }),
              (0, n.jsx)("div", { className: s().zkml_star_back4 }),
              (0, n.jsx)("div", { className: s().zkml_star_back5 }),
              (0, n.jsx)("div", { className: s().zkml_star_back6 }),
              (0, n.jsx)("div", { className: s().zkml_glow }),
              (0, n.jsx)("div", { className: s().zkml_left_glow }),
              (0, n.jsx)("div", { className: s().zkml_contour_back }),
              r && (0, n.jsx)(ec, { setOpenZkmlPopUp: l }),
              (0, n.jsx)(o.Z, {}),
              (0, n.jsx)(m, { setOpenZkmlPopUp: l }),
              (0, n.jsx)(v, {}),
              (0, n.jsx)(ea, {}),
              (0, n.jsx)(V, { tableData: e }),
              (0, n.jsx)($, { tableData: i }),
              (0, n.jsx)(y.Z, {}),
            ],
          })
        );
      }
    },
    6647: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return g;
        },
        H: function () {
          return p;
        },
      });
      var n = i(5964),
        o = i(9654),
        a = i.n(o),
        s = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        r = i(8623),
        l = i(214),
        c = i(4141),
        _ = i(4839),
        d = i.n(_),
        m = (e) => {
          let { items: t, title: i } = e;
          return (0, n.jsx)("div", {
            className: d().footerLinkContainer,
            children: (0, n.jsx)("div", {
              className: d().wrapperBoxes,
              children: (0, n.jsxs)("div", {
                className: d().sectionBox,
                children: [
                  (0, n.jsx)("p", { className: d().title, children: i }),
                  (0, n.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className: d().linkBox,
                          children: (0, n.jsx)(c.default, {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, n.jsx)("p", { children: e.title }),
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        u = i(800),
        h = i(4122),
        b = i(4969);
      let x = [
          {
            icon: l.Z,
            link: "https://x.com/networknoya",
            className:
              "h-[54px] w-[34px] object-contain object-right-center select-none cursor-pointer transition-all duration-250 ease-in-out mr-[10px]",
          },
          {
            icon: {
              src: "/telegram.png",
              height: 54,
              width: 54,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://discord.gg/BGS5qX6fPj",
            className:
              "h-[54px] w-[54px] select-none cursor-pointer transition-all duration-250 ease-in-out mr-[10px]",
          },
        ],
        p = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function g() {
        let [e, t] = (0, u.useState)(""),
          [i, o] = (0, u.useState)(!0),
          [l, c] = (0, u.useState)(!1),
          [_, d] = (0, u.useState)(!1),
          g = () => {
            if (p.test(e)) {
              d(!0);
              let i = JSON.stringify({ email: e });
              fetch(
                "https://www.noya.network/noya_space/api/users/newsletter/subscribe",
                {
                  body: i,
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then((e) => {
                  e.ok
                    ? (c(!0),
                      t(""),
                      (0, b.x)("Email added to newsletter", "success"))
                    : (0, b.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, b.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  d(!1);
                });
            } else o(!1);
          },
          f = {
            Links: [
              { title: "ZKML", url: "/zkml" },
              { title: "Docs", url: "https://docs.noya.network" },
            ],
            Help: [
              {
                title: "Terms of Service",
                url: "https://docs.noya.network/audits-and-risk/disclaimer-and-terms",
              },
              {
                title: "Privacy Policy",
                url: "https://docs.noya.network/audits-and-risk/privacy-policy",
              },
            ],
          };
        return (0, n.jsxs)("section", {
          className: a().footer_container,
          id: "newsletter",
          children: [
            (0, n.jsx)("div", { className: a().footer_container_line }),
            (0, n.jsxs)("div", {
              className: a().footer_top_box,
              children: [
                (0, n.jsx)("div", { className: a().footer_top_box_line }),
                (0, n.jsx)("div", {
                  className: a().footer_top_logo_box,
                  children: (0, n.jsx)(r.default, {
                    className: a().footer_top_logo,
                    src: s,
                    alt: "noya-footer",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: a().footer_links_box,
                  children: (0, n.jsx)(m, { items: f.Links, title: "Links" }),
                }),
                (0, n.jsx)("div", {
                  className: a().footer_links_box,
                  children: (0, n.jsx)(m, { items: f.Help, title: "Help" }),
                }),
                (0, n.jsxs)("div", {
                  className: a().footer_top_box_socials,
                  children: [
                    (0, n.jsx)("h3", { children: "Socials" }),
                    (0, n.jsx)("div", {
                      className: a().footer_top_box_socials_image_box,
                      children: x.map((e, t) =>
                        (0, n.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: a().footer_top_box_socials_link,
                            children: (0, n.jsx)(r.default, {
                              src: e.icon,
                              alt: "social".concat(t),
                              className: e.className,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: a().footer_news_letter_container,
                  children: [
                    (0, n.jsx)("h3", { children: "Newsletter" }),
                    (0, n.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, n.jsxs)("div", {
                      className: ""
                        .concat(
                          l ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(a().footer_news_letter_input_box),
                      children: [
                        (0, n.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            o(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && g();
                          },
                          style: i ? {} : { color: "red" },
                        }),
                        (0, n.jsx)("button", {
                          onClick: g,
                          className: a().color_1,
                          children: _
                            ? (0, n.jsx)(h.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: a().footer_bottom_box,
              children: [
                (0, n.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, n.jsx)("div", {
                  className: a().footer_email_box,
                  children: (0, n.jsx)("div", {
                    className: a().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    4122: function (e, t, i) {
      "use strict";
      var n = i(5964);
      i(800),
        (t.Z = function (e) {
          let { className: t } = e;
          return (0, n.jsxs)("svg", {
            className: t,
            version: "1.1",
            id: "L7",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
            xmlSpace: "preserve",
            children: [
              (0, n.jsx)("path", {
                fill: "#fff",
                d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
                children: (0, n.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "2s",
                  from: "0 50 50",
                  to: "360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, n.jsx)("path", {
                fill: "#fff",
                d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
                children: (0, n.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "1s",
                  from: "0 50 50",
                  to: "-360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, n.jsx)("path", {
                fill: "#fff",
                d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",
                children: (0, n.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "2s",
                  from: "0 50 50",
                  to: "360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
            ],
          });
        });
    },
    3598: function (e, t, i) {
      "use strict";
      var n = i(5964),
        o = i(7358),
        a = i(800);
      t.Z = (e) => {
        let {
            src: t,
            style: i = {},
            loop: s,
            mute: r,
            playWithIntersection: l,
            className: c,
          } = e,
          _ = (0, a.useRef)(null),
          d = (0, o.i)();
        return (
          (0, a.useEffect)(() => {
            void 0 !== l
              ? !0 === l && _.current && _.current.play()
              : _.current && _.current.play();
          }, [l]),
          (0, n.jsx)("video", {
            playsInline: !0,
            muted: void 0 === r,
            ref: _,
            style: { width: "100%", height: "100%", ...i },
            loop: void 0 === s || !0 === s,
            className: c,
            children: (0, n.jsx)("source", {
              src: t,
              type: "Android" === d ? "video/webm" : "video/mp4",
            }),
          })
        );
      };
    },
    4969: function (e, t, i) {
      "use strict";
      i.d(t, {
        x: function () {
          return o;
        },
      });
      var n = i(4065);
      let o = (e, t, i) => {
        (0, n.toast)(e, { type: t, hideProgressBar: i });
      };
    },
    8701: function (e, t, i) {
      "use strict";
      var n = i(800);
      t.Z = () => {
        let [e, t] = (0, n.useState)({ width: void 0, height: void 0 });
        return (
          (0, n.useEffect)(() => {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener("resize", e),
              e(),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      };
    },
    5820: function (e) {
      e.exports = {
        zkml_container: "zkml_zkml_container__pRkpV",
        zkml_star_back: "zkml_zkml_star_back__Eau6x",
        zkml_star_back2: "zkml_zkml_star_back2__npY26",
        zkml_star_back3: "zkml_zkml_star_back3__Yf7Py",
        zkml_star_back4: "zkml_zkml_star_back4__qkwZU",
        zkml_star_back5: "zkml_zkml_star_back5__WHU_6",
        zkml_star_back6: "zkml_zkml_star_back6__YRNfr",
        zkml_glow: "zkml_zkml_glow__oq32Q",
        zkml_left_glow: "zkml_zkml_left_glow__6pOEs",
        zkml_contour_back: "zkml_zkml_contour_back__ZhFdE",
      };
    },
    9654: function (e) {
      e.exports = {
        footer_container: "Footer_footer_container__Op3HX",
        footer_container_line: "Footer_footer_container_line__K5d78",
        footer_top_box: "Footer_footer_top_box__up0Z2",
        footer_top_box_line: "Footer_footer_top_box_line__cMhzp",
        footer_top_logo_box: "Footer_footer_top_logo_box__tjtRZ",
        footer_top_logo: "Footer_footer_top_logo__whUEs",
        footer_news_letter_container:
          "Footer_footer_news_letter_container__GfbdJ",
        footer_top_box_socials: "Footer_footer_top_box_socials__HHw__",
        footer_top_box_socials_image_box:
          "Footer_footer_top_box_socials_image_box___rItH",
        footer_top_box_socials_image:
          "Footer_footer_top_box_socials_image__ft36n",
        footer_bottom_box: "Footer_footer_bottom_box__MkT9j",
        footer_news_letter_input_box:
          "Footer_footer_news_letter_input_box__v0Pyn",
        color_1: "Footer_color_1__baVD_",
        footer_email_icon: "Footer_footer_email_icon__8DIh4",
        footer_email_wrapper: "Footer_footer_email_wrapper__QpJLS",
        footer_links_box: "Footer_footer_links_box__9xabF",
        footer_top_box_socials_link:
          "Footer_footer_top_box_socials_link__CXNQ3",
      };
    },
    4839: function (e) {
      e.exports = {
        footerLinkContainer: "FooterLinks_footerLinkContainer__KWXJY",
        title: "FooterLinks_title__EYpiq",
        linkBox: "FooterLinks_linkBox__5uI4y",
        wrapperBoxes: "FooterLinks_wrapperBoxes__5C2At",
        sectionBox: "FooterLinks_sectionBox__0wx0d",
      };
    },
    2780: function (e) {
      e.exports = {
        Animation_Container: "animation-style_Animation_Container__fpvSo",
        Animation_Container_intersector:
          "animation-style_Animation_Container_intersector__nuXcJ",
      };
    },
    291: function (e) {
      e.exports = {
        zkml_benefits_container: "Benefits_zkml_benefits_container__cg5pm",
        zkml_benefits_title: "Benefits_zkml_benefits_title__sw6Qy",
        zkml_benefitBox_container: "Benefits_zkml_benefitBox_container__b9o4i",
        zkml_benefitBox_container_glow:
          "Benefits_zkml_benefitBox_container_glow__5LW1E",
        zkml_benefitBox_container_line:
          "Benefits_zkml_benefitBox_container_line__SJ3JS",
        zkml_benefitBox_data: "Benefits_zkml_benefitBox_data__0MW4b",
        zkml_benefitBox_img_box: "Benefits_zkml_benefitBox_img_box__llrH6",
        zkml_benefitBox_img: "Benefits_zkml_benefitBox_img__pZUqj",
      };
    },
    6560: function (e) {
      e.exports = {
        ZKMLDesc_container: "Description_ZKMLDesc_container__dNoP5",
        ZKMLDesc_buttons_box: "Description_ZKMLDesc_buttons_box__KVO1o",
        ZKMLDesc_buttons_box_watch_video:
          "Description_ZKMLDesc_buttons_box_watch_video__pESKo",
        ZKMLDesc_buttons_box_watch_video_icon:
          "Description_ZKMLDesc_buttons_box_watch_video_icon__w_gj6",
        ZKMLDesc_button_wrapper: "Description_ZKMLDesc_button_wrapper__jERhe",
        ZKMLDesc_button_image: "Description_ZKMLDesc_button_image__Ul2pz",
        ZKMLDesc_button_gitHub: "Description_ZKMLDesc_button_gitHub__kw_8l",
        color_1: "Description_color_1__7zKTc",
        ZKMLDesc_button_docs: "Description_ZKMLDesc_button_docs__w6mRk",
      };
    },
    491: function (e) {
      e.exports = {
        BascketingTable_container:
          "Bascketing_BascketingTable_container__AjEBm",
        BascketingTable_title: "Bascketing_BascketingTable_title__AwRFC",
        BascketingTable_box: "Bascketing_BascketingTable_box__GjCwx",
        BascketingTable_box_header:
          "Bascketing_BascketingTable_box_header__NmBC7",
        BascketingTable_box_header_line:
          "Bascketing_BascketingTable_box_header_line__gY1ey",
        BascketingTable_box_header_item:
          "Bascketing_BascketingTable_box_header_item__ajMZa",
      };
    },
    5265: function (e) {
      e.exports = {
        BascketingItem_container:
          "BascketingItem_BascketingItem_container__dEBBs",
        BascketingItem_cell: "BascketingItem_BascketingItem_cell__2xrkR",
        BascketingItem_proof_wrapper:
          "BascketingItem_BascketingItem_proof_wrapper__hfMu3",
        BascketingItem_proof_button:
          "BascketingItem_BascketingItem_proof_button__SHgq6",
        color_1: "BascketingItem_color_1__YABQg",
        color_2: "BascketingItem_color_2__bgO8Q",
      };
    },
    2101: function (e) {
      e.exports = {
        MBI_container: "MobileBascketingItem_MBI_container__ASIEY",
        top: "MobileBascketingItem_top__LV_3k",
        time: "MobileBascketingItem_time__CdoPv",
        VaultLocation_prev_proof_wrapper:
          "MobileBascketingItem_VaultLocation_prev_proof_wrapper__ZWBGv",
        VaultLocation_prev_proof_button:
          "MobileBascketingItem_VaultLocation_prev_proof_button__8oKEy",
        bottom: "MobileBascketingItem_bottom__OtLo8",
        info: "MobileBascketingItem_info___lyN3",
        color_1: "MobileBascketingItem_color_1__Nsv3a",
        color_2: "MobileBascketingItem_color_2__YGXHM",
      };
    },
    2212: function (e) {
      e.exports = {
        LiquidityTable_container: "Liquidity_LiquidityTable_container__qR1cD",
        LiquidityTable_container_blur:
          "Liquidity_LiquidityTable_container_blur__1lsGf",
        LiquidityTable_title: "Liquidity_LiquidityTable_title__WLZkZ",
        LiquidityTable_box: "Liquidity_LiquidityTable_box__7RxZf",
        LiquidityTable_box_header: "Liquidity_LiquidityTable_box_header__sSlGu",
        LiquidityTable_box_header_line:
          "Liquidity_LiquidityTable_box_header_line__T0fwk",
        LiquidityTable_box_header_item:
          "Liquidity_LiquidityTable_box_header_item___Zt0q",
        LiquidityItem_container_toolTip:
          "Liquidity_LiquidityItem_container_toolTip__ooY9e",
      };
    },
    6498: function (e) {
      e.exports = {
        LiquidityItem_container: "LiquidityItem_LiquidityItem_container__8yv5g",
        LiquidityItem_cell: "LiquidityItem_LiquidityItem_cell__e_vdd",
        LiquidityItem_proof_wrapper:
          "LiquidityItem_LiquidityItem_proof_wrapper__D_T_R",
        LiquidityItem_proof_button:
          "LiquidityItem_LiquidityItem_proof_button__Agd4P",
        color_1: "LiquidityItem_color_1__pSxq_",
        color_2: "LiquidityItem_color_2__nN2FF",
      };
    },
    6942: function (e) {
      e.exports = {
        MLI_container: "MobileLiquidityItem_MLI_container__jSUxv",
        top: "MobileLiquidityItem_top__uG0ry",
        time: "MobileLiquidityItem_time__bVVeU",
        VaultLocation_prev_proof_wrapper:
          "MobileLiquidityItem_VaultLocation_prev_proof_wrapper__97i7I",
        VaultLocation_prev_proof_button:
          "MobileLiquidityItem_VaultLocation_prev_proof_button__ESh_8",
        bottom: "MobileLiquidityItem_bottom__pEAbf",
        info: "MobileLiquidityItem_info__cP1U7",
        color_1: "MobileLiquidityItem_color_1__4pcz2",
        color_2: "MobileLiquidityItem_color_2__5JFq4",
      };
    },
    6473: function (e) {
      e.exports = {
        Pagination_container: "Pagination_Pagination_container__JtvWy",
        Pagination_rows_container:
          "Pagination_Pagination_rows_container__ia8_3",
        Pagination_rows_box: "Pagination_Pagination_rows_box__KMBBx",
        Pagination_pages_container:
          "Pagination_Pagination_pages_container__FV0MJ",
        Pagination_pages_box: "Pagination_Pagination_pages_box__V_3v3",
        Pagination_pages_container_arrow:
          "Pagination_Pagination_pages_container_arrow__LEFMv",
      };
    },
    3854: function (e) {
      e.exports = {
        ZKML_video_wrapper: "ZkmlVideo_ZKML_video_wrapper__14h4y",
        "show-up": "ZkmlVideo_show-up__aPqZw",
        ZKML_video_Container: "ZkmlVideo_ZKML_video_Container__yjNs7",
        ZKML_video_close: "ZkmlVideo_ZKML_video_close___9mtn",
      };
    },
    8327: function (e, t) {
      "none";
      
    },
  },
  function (e) {
    e.O(0, [772, 518, 141, 195, 716, 550, 744], function () {
      return e((e.s = 6805));
    }),
      (_N_E = e.O());
  },
]);
