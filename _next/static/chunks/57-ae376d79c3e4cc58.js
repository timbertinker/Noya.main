(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [57],
  {
    5138: function (e, o, t) {
      "use strict";
      var _ = t(5964);
      t(800);
      var r = t(8623),
        n = t(5195),
        a = t(808),
        s = t.n(a);
      o.Z = (e) => {
        let {
          title: o,
          description: t,
          headerImage: a,
          showHeader: l = !0,
          customButton: i,
          noButton: c,
          className: m,
          firstTextClassName: d,
          secondTextClassName: h,
          contentBoxClassName: x,
          video: u,
          button: p = {
            text: "Explore Vaults",
            icon: "/vault.svg",
            onClick: () => {
              window.open("https://app.noya.ai", "_blank");
            },
            color: "color_1",
            border: "gradient",
          },
          secondButton: f,
        } = e;
        return (0, _.jsxs)("div", {
          className: "".concat(s().D_Banner_Container, " ").concat(m),
          children: [
            l && (0, _.jsx)(n.Z, {}),
            (0, _.jsxs)("div", {
              className: "".concat(s().D_Banner_Content_Box, " ").concat(x),
              children: [
                a &&
                  (0, _.jsx)(r.default, {
                    src: "/".concat(a),
                    alt: "horse",
                    width: 50,
                    height: 50,
                  }),
                "string" == typeof o
                  ? (0, _.jsx)("h1", {
                      className: "gradient-text "
                        .concat(d, " ")
                        .concat(s().D_Banner_Content_Title),
                      children: o,
                    })
                  : o,
                (0, _.jsx)("p", {
                  className: "!leading-6 "
                    .concat(h, " ")
                    .concat(s().D_Banner_Content_Description),
                  children: t,
                }),
                u &&
                  (0, _.jsx)("video", {
                    playsInline: !0,
                    autoPlay: !0,
                    muted: !0,
                    style: {
                      width: "100%",
                      aspectRatio: "16/14",
                      maxHeight: "80vh",
                    },
                    loop: !0,
                    children: (0, _.jsx)("source", {
                      src: u,
                      type: "video/mp4",
                    }),
                  }),
                !c &&
                  (i ||
                    (0, _.jsxs)("div", {
                      className:
                        "w-full flex flex-col sm:flex-row items-center justify-center gap-4",
                      children: [
                        p &&
                          (0, _.jsx)("div", {
                            className: "".concat(
                              "solid" == p.border
                                ? "border border-solid border-[#ffffff47] rounded-xl mt-6 hover-opacity"
                                : s().D_Banner_Content_Action_button_wrapper
                            ),
                            children: (0, _.jsxs)("button", {
                              className: ""
                                .concat(s().D_Banner_Content_Action_button, " ")
                                .concat(s()[p.color || "color_1"], " ")
                                .concat("solid" == p.border && "py-6", " px-4"),
                              onClick: p.onClick || (() => {}),
                              children: [
                                (0, _.jsx)(r.default, {
                                  src: p.icon || "/vault.svg",
                                  alt: "vault",
                                  width: 20,
                                  height: 20,
                                  style: { marginRight: 15 },
                                }),
                                p.text || "Explore Vaults",
                              ],
                            }),
                          }),
                        f &&
                          (0, _.jsx)("a", {
                            target: "_blank",
                            href: f.link,
                            className: "".concat(
                              "solid" == f.border
                                ? "border border-solid border-[#ffffff47] rounded-xl mt-6 hover-opacity"
                                : s().D_Banner_Content_Action_button_wrapper
                            ),
                            children: (0, _.jsxs)("button", {
                              className: ""
                                .concat(s().D_Banner_Content_Action_button, " ")
                                .concat(s()[f.color || "color_1"], " ")
                                .concat("solid" == f.border && "py-6", " px-4"),
                              children: [
                                (0, _.jsx)(r.default, {
                                  src: f.icon || "/vault.svg",
                                  alt: "vault",
                                  width: 20,
                                  height: 20,
                                  style: { marginRight: 15 },
                                }),
                                f.text || "Explore Vaults",
                              ],
                            }),
                          }),
                      ],
                    })),
              ],
            }),
          ],
        });
      };
    },
    6647: function (e, o, t) {
      "use strict";
      t.d(o, {
        Z: function () {
          return b;
        },
        H: function () {
          return f;
        },
      });
      var _ = t(5964),
        r = t(9654),
        n = t.n(r),
        a = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        s = t(8623),
        l = t(214),
        i = t(4141),
        c = t(4839),
        m = t.n(c),
        d = (e) => {
          let { items: o, title: t } = e;
          return (0, _.jsx)("div", {
            className: m().footerLinkContainer,
            children: (0, _.jsx)("div", {
              className: m().wrapperBoxes,
              children: (0, _.jsxs)("div", {
                className: m().sectionBox,
                children: [
                  (0, _.jsx)("p", { className: m().title, children: t }),
                  (0, _.jsx)("div", {
                    children: o.map((e, o) =>
                      (0, _.jsx)(
                        "div",
                        {
                          className: m().linkBox,
                          children: (0, _.jsx)(i.default, {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, _.jsx)("p", { children: e.title }),
                          }),
                        },
                        o
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        h = t(800),
        x = t(4122),
        u = t(4969);
      let p = [
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
            classFName:
              "h-[54px] w-[54px] select-none cursor-pointer transition-all duration-250 ease-in-out mr-[10px]",
          },
        ],
        f = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function b() {
        let [e, o] = (0, h.useState)(""),
          [t, r] = (0, h.useState)(!0),
          [l, i] = (0, h.useState)(!1),
          [c, m] = (0, h.useState)(!1),
          b = () => {
            if (f.test(e)) {
              m(!0);
              let t = JSON.stringify({ email: e });
              fetch(
                "https://www.noya.network/noya_space/api/users/newsletter/subscribe",
                {
                  body: t,
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then((e) => {
                  e.ok
                    ? (i(!0),
                      o(""),
                      (0, u.x)("Email added to newsletter", "success"))
                    : (0, u.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, u.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  m(!1);
                });
            } else r(!1);
          },
          w = {
            Links: [
              { title: "ZKML", url: "https://noya-detail.vercel.app/" },
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
        return (0, _.jsxs)("section", {
          className: n().footer_container,
          iD: "newsletter",
          children: [
            (0, _.jsx)("div", { className: n().footer_container_line }),
            (0, _.jsxs)("div", {
              className: n().footer_top_box,
              children: [
                (0, _.jsx)("div", { className: n().footer_top_box_line }),
                (0, _.jsx)("div", {
                  className: n().footer_top_logo_box,
                  children: (0, _.jsx)(s.default, {
                    className: n().footer_top_logo,
                    src: a,
                    alt: "noya-footer",
                  }),
                }),
                (0, _.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, _.jsx)(d, { items: w.Links, title: "Links" }),
                }),
                (0, _.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, _.jsx)(d, { items: w.Help, title: "Help" }),
                }),
                (0, _.jsxs)("div", {
                  className: n().footer_top_box_socials,
                  children: [
                    (0, _.jsx)("h3", { children: "Socials" }),
                    (0, _.jsx)("div", {
                      className: n().footer_top_box_socials_image_box,
                      children: p.map((e, o) =>
                        (0, _.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: n().footer_top_box_socials_link,
                            children: (0, _.jsx)(s.default, {
                              src: e.icon,
                              alt: "social".concat(o),
                              className: e.className,
                            }),
                          },
                          o
                        )
                      ),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: n().footer_news_letter_container,
                  children: [
                    (0, _.jsx)("h3", { children: "Newsletter" }),
                    (0, _.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, _.jsxs)("div", {
                      className: ""
                        .concat(
                          l ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(n().footer_news_letter_input_box),
                      children: [
                        (0, _.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            r(!0), o(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && b();
                          },
                          style: t ? {} : { color: "red" },
                        }),
                        (0, _.jsx)("button", {
                          onClick: b,
                          className: n().color_1,
                          children: c
                            ? (0, _.jsx)(x.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: n().footer_bottom_box,
              children: [
                (0, _.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, _.jsx)("div", {
                  className: n().footer_email_box,
                  children: (0, _.jsx)("div", {
                    className: n().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    5827: function (e, o, t) {
      "use strict";
      var _ = t(5964);
      t(800);
      var r = t(4742),
        n = t.n(r);
      o.Z = (e) => {
        let {
          children: o,
          raiseContours: t = !1,
          hasSecondContour: r = !0,
          isContainer: a = !0,
          noContour: s = !1,
        } = e;
        return (0, _.jsxs)("div", {
          className: a ? "n-container" : "",
          children: [
            !s &&
              (0, _.jsx)("div", {
                className: ""
                  .concat(t && n().raise_contour, " ")
                  .concat(n().home_contour_back),
              }),
            r && (0, _.jsx)("div", { className: n().home_contour_back2 }),
            (0, _.jsx)("div", { className: n().home_glow_left }),
            r &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", { className: n().home_glow_lowest_fees }),
                  (0, _.jsx)("div", { className: n().home_glow_AI }),
                  (0, _.jsx)("div", { className: n().home_glow_AI_Image }),
                ],
              }),
            (0, _.jsx)("div", { className: n().home_glow_chart }),
            (0, _.jsx)("div", { className: n().home_glow_right }),
            (0, _.jsx)("div", { className: n().home_star_back }),
            (0, _.jsx)("div", { className: n().home_star_back2 }),
            r &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", { className: n().home_star_back3 }),
                  (0, _.jsx)("div", { className: n().home_star_back4 }),
                  (0, _.jsx)("div", { className: n().home_star_back5 }),
                ],
              }),
            o,
          ],
        });
      };
    },
    4122: function (e, o, t) {
      "use strict";
      var _ = t(5964);
      t(800),
        (o.Z = function (e) {
          let { className: o } = e;
          return (0, _.jsxs)("svg", {
            className: o,
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
              (0, _.jsx)("path", {
                fill: "#fff",
                d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
                children: (0, _.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "2s",
                  from: "0 50 50",
                  to: "360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, _.jsx)("path", {
                fill: "#fff",
                d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
                children: (0, _.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "1s",
                  from: "0 50 50",
                  to: "-360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, _.jsx)("path", {
                fill: "#fff",
                d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",
                children: (0, _.jsx)("animateTransform", {
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
    4969: function (e, o, t) {
      "use strict";
      t.d(o, {
        x: function () {
          return r;
        },
      });
      var _ = t(4065);
      let r = (e, o, t) => {
        (0, _.toast)(e, { type: o, hideProgressBar: t });
      };
    },
    808: function (e) {
      e.exports = {
        D_Banner_Container: "dynamic-banner_D_Banner_Container__Eq26y",
        D_Banner_Content_Box: "dynamic-banner_D_Banner_Content_Box__y9ElC",
        D_Banner_Content_Title: "dynamic-banner_D_Banner_Content_Title__1wZ__",
        D_Banner_Content_Description:
          "dynamic-banner_D_Banner_Content_Description__nbOdx",
        D_Banner_Content_Action_button_wrapper:
          "dynamic-banner_D_Banner_Content_Action_button_wrapper__d4ZRz",
        D_Banner_Content_Action_button:
          "dynamic-banner_D_Banner_Content_Action_button__U2qLv",
        color_2: "dynamic-banner_color_2__mawlh",
        color_1: "dynamic-banner_color_1__1XyC8",
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
    4742: function (e) {
      e.exports = {
        home_glow_right: "home-layout-style_home_glow_right__za7PN",
        home_glow_left: "home-layout-style_home_glow_left__7kKav",
        home_glow_lowest_fees: "home-layout-style_home_glow_lowest_fees__CtoBq",
        home_glow_AI: "home-layout-style_home_glow_AI__02Lfc",
        home_glow_AI_Image: "home-layout-style_home_glow_AI_Image__buNMq",
        home_glow_chat: "home-layout-style_home_glow_chat__k2Eeu",
        home_glow_Postes: "home-layout-style_home_glow_Postes__b0Zdc",
        home_star_back: "home-layout-style_home_star_back__xhV7k",
        home_star_back2: "home-layout-style_home_star_back2__BTrah",
        home_star_back3: "home-layout-style_home_star_back3__UaSKI",
        home_star_back4: "home-layout-style_home_star_back4__pPBNf",
        home_star_back5: "home-layout-style_home_star_back5__M_6KX",
        home_contour_back: "home-layout-style_home_contour_back__Ak9cI",
        raise_contour: "home-layout-style_raise_contour__0LbPR",
        home_contour_back2: "home-layout-style_home_contour_back2__JHbZt",
        home_glow_chart: "home-layout-style_home_glow_chart__JRlf_",
        home_circles: "home-layout-style_home_circles__23qQZ",
      };
    },
  },
]);
