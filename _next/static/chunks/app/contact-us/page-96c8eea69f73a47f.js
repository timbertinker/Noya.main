(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    7775: function (t, e, o) {
      Promise.resolve().then(o.bind(o, 4959));
    },
    4959: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, {
          default: function () {
            return p;
          },
        });
      var _ = o(5964),
        s = o(8623),
        n = o(1369),
        r = o.n(n),
        a = o(3415),
        c = o(800),
        u = o(4122),
        l = o(4969),
        i = o(3705);
      let B = ["ZKML", "Omnivaults", "Deposit", "Suggestion", "Other"];
      function x() {
        let [t, e] = (0, c.useState)(!1),
          [o, n] = (0, c.useState)(""),
          [x, y] = (0, c.useState)(""),
          [m, p] = (0, c.useState)(""),
          [d, h] = (0, c.useState)(!1),
          [b, j] = (0, c.useState)(!1),
          f = async () => {
            try {
              j(!0);
              let t = JSON.stringify({
                type: "Contact Form",
                subject: o,
                email: m,
                message: x,
              });
              return (
                await fetch(
                  "https://www.noya.network/noya_space/api/users/contact-form",
                  {
                    body: t,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  }
                )
              ).status;
            } catch (t) {
              return 400;
            } finally {
              j(!1);
            }
          },
          v = (0, c.useRef)(null),
          w = (t) => {
            var o;
            let { target: _ } = t;
            !(function (t) {
              if (!t || !("nodeType" in t)) throw Error("Node expected");
            })(_),
              (
                null === (o = v.current) || void 0 === o
                  ? void 0
                  : o.contains(_)
              )
                ? e((t) => !t)
                : e(!1);
          };
        return (
          (0, c.useEffect)(
            () => (
              document.body.addEventListener("click", w),
              () => {
                document.body.removeEventListener("click", w);
              }
            ),
            []
          ),
          (0, _.jsxs)("section", {
            className: r().BugBounty_container,
            children: [
              d && (0, _.jsx)(i.Z, { type: "contact", onClose: () => h(!1) }),
              (0, _.jsx)("div", { className: r().home_contour_back }),
              (0, _.jsx)("div", { className: r().home_glow_left }),
              (0, _.jsx)("div", { className: r().home_glow_right }),
              (0, _.jsx)("div", { className: r().home_star_back }),
              (0, _.jsx)("div", { className: r().home_star_back2 }),
              (0, _.jsxs)("div", {
                className: r().BugBounty_report_box,
                children: [
                  (0, _.jsxs)("div", {
                    className: r().BugBounty_report_box_text,
                    children: [
                      (0, _.jsx)("h2", {
                        className: "gradient-text",
                        children: "Contact Us",
                      }),
                      (0, _.jsx)("p", { children: "We Listen" }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: r().BugBounty_report_box_selectBox,
                    children: [
                      (0, _.jsx)("p", {
                        className: r().BugBounty_report_box_selectBox_title,
                        children: "Subject",
                      }),
                      (0, _.jsxs)("div", {
                        ref: v,
                        className: r().BugBounty_report_box_selectBox_button,
                        children: [
                          (0, _.jsx)("p", {
                            className:
                              r().BugBounty_report_box_selectBox_button_text,
                            children: "" === o ? "Select a subject" : o,
                          }),
                          (0, _.jsx)(s.default, {
                            style: t ? { rotate: "180deg" } : {},
                            src: a.Z,
                            alt: "arrow",
                            className:
                              r().BugBounty_report_box_selectBox_button_icon,
                          }),
                          (0, _.jsx)(g, {
                            items: B,
                            setSelected: n,
                            open: t,
                            setOpen: e,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: r().BugBounty_report_box_message,
                    children: [
                      (0, _.jsx)("p", {
                        className: r().BugBounty_report_box_message_title,
                        children: "Email",
                      }),
                      (0, _.jsx)("input", {
                        value: m,
                        onChange: (t) => {
                          p(t.target.value);
                        },
                        placeholder: "Write your e-mail here",
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: r().BugBounty_report_box_message,
                    children: [
                      (0, _.jsx)("p", {
                        className: r().BugBounty_report_box_message_title,
                        children: "Message",
                      }),
                      (0, _.jsx)("textarea", {
                        value: x,
                        onChange: (t) => {
                          y(t.target.value);
                        },
                        placeholder: "Write your mail here",
                      }),
                    ],
                  }),
                  (0, _.jsx)("button", {
                    onClick: async () => {
                      if (!b) {
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) {
                          (0, l.x)("Please enter a valid email", "error");
                          return;
                        }
                        if (x.length < 10) {
                          (0, l.x)(
                            "Message should be at least 10 characters long",
                            "error"
                          );
                          return;
                        }
                        if ("" === o) {
                          (0, l.x)("Please select a subject", "error");
                          return;
                        }
                        200 === (await f())
                          ? (h(!0), y(""), n(""))
                          : (0, l.x)("Something went wrong", "error");
                      }
                    },
                    children: b
                      ? (0, _.jsx)(u.Z, { className: "w-5 h-5" })
                      : "Send Mail",
                  }),
                ],
              }),
            ],
          })
        );
      }
      let g = (t) => {
        let { items: e, setSelected: o, open: s, setOpen: n } = t,
          [a, u] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            s
              ? u(!0)
              : setTimeout(() => {
                  u(!1);
                }, 500);
          }, [s]),
          (0, _.jsx)("section", {
            style: { display: a ? "" : "none" },
            className: ""
              .concat(
                r().BugBounty_report_dropDown_container,
                " animate__animated animate__fadeIn "
              )
              .concat(!s && a && "animate__fadeOut"),
            children: e.map((t, e) =>
              (0, _.jsx)(
                "div",
                {
                  onClick: () => o(t),
                  children: (0, _.jsx)("p", { children: t }),
                },
                t
              )
            ),
          })
        );
      };
      var y = o(6647),
        m = o(5195),
        p = () =>
          (0, _.jsxs)("section", {
            style: {
              height: "fitContent",
              width: "100vw",
              minHeight: "100vh",
              backgroundColor: "#000000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            },
            children: [
              (0, _.jsx)(m.Z, {}),
              (0, _.jsx)(x, {}),
              (0, _.jsx)(y.Z, {}),
            ],
          });
    },
    1369: function (t) {
      t.exports = {
        BugBounty_container: "contactus-style_BugBounty_container__qrS3I",
        BugBounty_report_box: "contactus-style_BugBounty_report_box__6JqqN",
        BugBounty_report_box_image:
          "contactus-style_BugBounty_report_box_image__v76TE",
        BugBounty_report_box_text:
          "contactus-style_BugBounty_report_box_text__d_SWT",
        BugBounty_report_box_selectBox:
          "contactus-style_BugBounty_report_box_selectBox__8hBkJ",
        BugBounty_report_box_selectBox_title:
          "contactus-style_BugBounty_report_box_selectBox_title__Ws1yz",
        BugBounty_report_box_selectBox_button:
          "contactus-style_BugBounty_report_box_selectBox_button__CTt6I",
        BugBounty_report_box_selectBox_button_text:
          "contactus-style_BugBounty_report_box_selectBox_button_text__iGUyy",
        BugBounty_report_box_selectBox_button_icon:
          "contactus-style_BugBounty_report_box_selectBox_button_icon__TNPdo",
        BugBounty_report_box_message:
          "contactus-style_BugBounty_report_box_message__FLazb",
        BugBounty_report_box_message_title:
          "contactus-style_BugBounty_report_box_message_title__OjJNE",
        color_1: "contactus-style_color_1__PHERV",
        BugBounty_report_dropDown_container:
          "contactus-style_BugBounty_report_dropDown_container__Hkh2U",
        BugBounty_report_dropDown_container_item_image:
          "contactus-style_BugBounty_report_dropDown_container_item_image__aAsRt",
        home_contour_back: "contactus-style_home_contour_back__xH6sH",
        home_glow_left: "contactus-style_home_glow_left__l8qpB",
        home_glow_right: "contactus-style_home_glow_right__Jlt98",
        home_star_back: "contactus-style_home_star_back__QJouQ",
        home_star_back2: "contactus-style_home_star_back2__H_KvJ",
        BugBounty_glow: "contactus-style_BugBounty_glow__2UCUm",
      };
    },
  },
  function (t) {
    t.O(0, [772, 518, 141, 195, 933, 716, 550, 744], function () {
      return t((t.s = 7775));
    }),
      (_N_E = t.O());
  },
]);
