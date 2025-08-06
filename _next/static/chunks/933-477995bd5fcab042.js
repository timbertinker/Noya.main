(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [933],
  {
    6647: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return b;
        },
        H: function () {
          return m;
        },
      });
      var s = o(5964),
        c = o(9654),
        n = o.n(c),
        a = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        r = o(8623),
        _ = o(214),
        l = o(4141),
        i = o(4839),
        d = o.n(i),
        u = (e) => {
          let { items: t, title: o } = e;
          return (0, s.jsx)("div", {
            className: d().footerLinkContainer,
            children: (0, s.jsx)("div", {
              className: d().wrapperBoxes,
              children: (0, s.jsxs)("div", {
                className: d().sectionBox,
                children: [
                  (0, s.jsx)("p", { className: d().title, children: o }),
                  (0, s.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className: d().linkBox,
                          children: (0, s.jsx)(l.default, {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, s.jsx)("p", { children: e.title }),
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
        x = o(800),
        p = o(4122),
        f = o(4969);
      let h = [
          {
            icon: _.Z,
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
        m = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function b() {
        let [e, t] = (0, x.useState)(""),
          [o, c] = (0, x.useState)(!0),
          [_, l] = (0, x.useState)(!1),
          [i, d] = (0, x.useState)(!1),
          b = () => {
            if (m.test(e)) {
              d(!0);
              let o = JSON.stringify({ email: e });
              fetch(
                "https://www.noya.network/noya_space/api/users/newsletter/subscribe",
                {
                  body: o,
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then((e) => {
                  e.ok
                    ? (l(!0),
                      t(""),
                      (0, f.x)("Email added to newsletter", "success"))
                    : (0, f.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, f.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  d(!1);
                });
            } else c(!1);
          },
          w = {
            Links: [
              { title: "ZKML", url: " },
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
        return (0, s.jsxs)("section", {
          className: n().footer_container,
          id: "newsletter",
          children: [
            (0, s.jsx)("div", { className: n().footer_container_line }),
            (0, s.jsxs)("div", {
              className: n().footer_top_box,
              children: [
                (0, s.jsx)("div", { className: n().footer_top_box_line }),
                (0, s.jsx)("div", {
                  className: n().footer_top_logo_box,
                  children: (0, s.jsx)(r.default, {
                    className: n().footer_top_logo,
                    src: a,
                    alt: "noya-footer",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, s.jsx)(u, { items: w.Links, title: "Links" }),
                }),
                (0, s.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, s.jsx)(u, { items: w.Help, title: "Help" }),
                }),
                (0, s.jsxs)("div", {
                  className: n().footer_top_box_socials,
                  children: [
                    (0, s.jsx)("h3", { children: "Socials" }),
                    (0, s.jsx)("div", {
                      className: n().footer_top_box_socials_image_box,
                      children: h.map((e, t) =>
                        (0, s.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: n().footer_top_box_socials_link,
                            children: (0, s.jsx)(r.default, {
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
                (0, s.jsxs)("div", {
                  className: n().footer_news_letter_container,
                  children: [
                    (0, s.jsx)("h3", { children: "Newsletter" }),
                    (0, s.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, s.jsxs)("div", {
                      className: ""
                        .concat(
                          _ ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(n().footer_news_letter_input_box),
                      children: [
                        (0, s.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            c(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && b();
                          },
                          style: o ? {} : { color: "red" },
                        }),
                        (0, s.jsx)("button", {
                          onClick: b,
                          className: n().color_1,
                          children: i
                            ? (0, s.jsx)(p.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: n().footer_bottom_box,
              children: [
                (0, s.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, s.jsx)("div", {
                  className: n().footer_email_box,
                  children: (0, s.jsx)("div", {
                    className: n().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    4122: function (e, t, o) {
      "use strict";
      var s = o(5964);
      o(800),
        (t.Z = function (e) {
          let { className: t } = e;
          return (0, s.jsxs)("svg", {
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
              (0, s.jsx)("path", {
                fill: "#fff",
                d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
                children: (0, s.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "2s",
                  from: "0 50 50",
                  to: "360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, s.jsx)("path", {
                fill: "#fff",
                d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
                children: (0, s.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "1s",
                  from: "0 50 50",
                  to: "-360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, s.jsx)("path", {
                fill: "#fff",
                d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",
                children: (0, s.jsx)("animateTransform", {
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
    3705: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = o(5964),
        c = o(5278),
        n = o.n(c),
        a = {
          src: "/_next/static/media/success.33cadcbd.svg",
          height: 23,
          width: 23,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = o(8623),
        _ = o(2207),
        l = o(785);
      function i(e) {
        let { type: t, onClose: o } = e,
          c = (0, _.useRouter)();
        return (0, s.jsx)("div", {
          className: n().SuccessModal_wrapper,
          onClick: () => o(),
          children: (0, s.jsxs)("section", {
            className: n().SuccessModal_container,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, s.jsx)(r.default, {
                onClick: () => o(),
                src: l.Z,
                alt: "close-modal",
                className: n().SuccessModal_container_close,
              }),
              (0, s.jsx)("div", { className: n().SuccessModal_glow }),
              (0, s.jsxs)("div", {
                className: n().SuccessModal_content,
                children: [
                  (0, s.jsxs)("div", {
                    className: n().SuccessModal_content_title,
                    children: [
                      (0, s.jsx)("div", {
                        className: n().SuccessModal_content_line,
                      }),
                      "bug" === t
                        ? "Thank you!"
                        : "contact" === t
                        ? "Thank you!"
                        : "borrow" === t
                        ? "Borrowed Successfully"
                        : "Congratulations",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: n().SuccessModal_content_status,
                    children: [
                      (0, s.jsx)(r.default, {
                        src: a,
                        alt: "success",
                        className: n().SuccessModal_content_status_img,
                      }),
                      "bug" === t
                        ? "Report sent"
                        : "contact" === t
                        ? "Mail sent"
                        : "Success",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: n().SuccessModal_content_text1,
                    children: [
                      "bug" === t
                        ? (0, s.jsxs)("p", {
                            children: [
                              "Thank you for actively contributing to our development efforts.",
                              (0, s.jsx)("br", {}),
                              "We appreciate it!",
                            ],
                          })
                        : "contact" === t
                        ? (0, s.jsx)("p", {
                            children:
                              "Thank you for getting in touch with us. We read every email.",
                          })
                        : "borrow" === t
                        ? (0, s.jsxs)("p", {
                            children: [
                              "Borrow operation was ",
                              (0, s.jsx)("span", { children: " Successful" }),
                              ".",
                            ],
                          })
                        : (0, s.jsxs)("p", {
                            children: [
                              "You have been successfully added to our ",
                              (0, s.jsx)("span", { children: " Waitlist" }),
                              ".",
                            ],
                          }),
                      "waitlist" === t &&
                        (0, s.jsx)("div", {
                          className: n().SuccessModal_content_line,
                        }),
                    ],
                  }),
                  "waitlist" === t &&
                    (0, s.jsx)("div", {
                      className: n().SuccessModal_content_text2,
                      children: (0, s.jsxs)("p", {
                        children: [
                          "Please confirm your subscription by clicking the link in",
                          (0, s.jsx)("br", {}),
                          " the email we’ve just sent you.",
                        ],
                      }),
                    }),
                  (0, s.jsxs)("div", {
                    className: n().SuccessModal_content_buttons_box,
                    children: [
                      (0, s.jsx)("button", {
                        onClick: () => {
                          o();
                        },
                        className: ""
                          .concat(n().SuccessModal_content_close_button, " ")
                          .concat(n().color_1),
                        children: "waitlist" === t ? "Okay" : "Close",
                      }),
                      "waitlist" !== t &&
                        (0, s.jsx)("div", {
                          onClick: () => {
                            o(), c.push("/");
                          },
                          className: n().SuccessModal_content_back_wrapper,
                          children: (0, s.jsx)("button", {
                            className: ""
                              .concat(n().SuccessModal_content_back_button, " ")
                              .concat(n().color_1),
                            children: "Back to home",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    4969: function (e, t, o) {
      "use strict";
      o.d(t, {
        x: function () {
          return c;
        },
      });
      var s = o(4065);
      let c = (e, t, o) => {
        (0, s.toast)(e, { type: t, hideProgressBar: o });
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
    5278: function (e) {
      e.exports = {
        SuccessModal_wrapper: "SuccessModal_SuccessModal_wrapper__QzsHE",
        "show-up": "SuccessModal_show-up__YqtEr",
        SuccessModal_container: "SuccessModal_SuccessModal_container__pp6lZ",
        SuccessModal_container_close:
          "SuccessModal_SuccessModal_container_close__wTYg6",
        SuccessModal_glow: "SuccessModal_SuccessModal_glow__dHdtI",
        SuccessModal_content: "SuccessModal_SuccessModal_content__w86Iv",
        SuccessModal_content_title:
          "SuccessModal_SuccessModal_content_title__nfNdr",
        SuccessModal_content_line:
          "SuccessModal_SuccessModal_content_line__jm0yr",
        SuccessModal_content_status:
          "SuccessModal_SuccessModal_content_status__pbqyO",
        SuccessModal_content_status_img:
          "SuccessModal_SuccessModal_content_status_img__9egrp",
        SuccessModal_content_text1:
          "SuccessModal_SuccessModal_content_text1__o1XZL",
        SuccessModal_content_text2:
          "SuccessModal_SuccessModal_content_text2__CAyw_",
        SuccessModal_content_buttons_box:
          "SuccessModal_SuccessModal_content_buttons_box__p1ezU",
        SuccessModal_content_close_button:
          "SuccessModal_SuccessModal_content_close_button__rOv7O",
        color_1: "SuccessModal_color_1__wZu6l",
        SuccessModal_content_back_wrapper:
          "SuccessModal_SuccessModal_content_back_wrapper__1_KtR",
        SuccessModal_content_back_button:
          "SuccessModal_SuccessModal_content_back_button__nUBv5",
      };
    },
    3415: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/arrow.5f6f0b6c.svg",
        height: 8,
        width: 15,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
