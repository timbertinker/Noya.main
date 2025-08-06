(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5301: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 9254));
    },
    6647: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return f;
        },
        H: function () {
          return y;
        },
      });
      var o = i(5964),
        a = i(9654),
        s = i.n(a),
        n = {
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
        x = i.n(_),
        d = (e) => {
          let { items: t, title: i } = e;
          return (0, o.jsx)("div", {
            className: x().footerLinkContainer,
            children: (0, o.jsx)("div", {
              className: x().wrapperBoxes,
              children: (0, o.jsxs)("div", {
                className: x().sectionBox,
                children: [
                  (0, o.jsx)("p", { className: x().title, children: i }),
                  (0, o.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, o.jsx)(
                        "div",
                        {
                          className: x().linkBox,
                          children: (0, o.jsx)(c.default, {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, o.jsx)("p", { children: e.title }),
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
        m = i(800),
        h = i(4122),
        p = i(4969);
      let u = [
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
        y = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function f() {
        let [e, t] = (0, m.useState)(""),
          [i, a] = (0, m.useState)(!0),
          [l, c] = (0, m.useState)(!1),
          [_, x] = (0, m.useState)(!1),
          f = () => {
            if (y.test(e)) {
              x(!0);
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
                      (0, p.x)("Email added to newsletter", "success"))
                    : (0, p.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, p.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  x(!1);
                });
            } else a(!1);
          },
          g = {
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
        return (0, o.jsxs)("section", {
          className: s().footer_container,
          id: "newsletter",
          children: [
            (0, o.jsx)("div", { className: s().footer_container_line }),
            (0, o.jsxs)("div", {
              className: s().footer_top_box,
              children: [
                (0, o.jsx)("div", { className: s().footer_top_box_line }),
                (0, o.jsx)("div", {
                  className: s().footer_top_logo_box,
                  children: (0, o.jsx)(r.default, {
                    className: s().footer_top_logo,
                    src: n,
                    alt: "noya-footer",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: s().footer_links_box,
                  children: (0, o.jsx)(d, { items: g.Links, title: "Links" }),
                }),
                (0, o.jsx)("div", {
                  className: s().footer_links_box,
                  children: (0, o.jsx)(d, { items: g.Help, title: "Help" }),
                }),
                (0, o.jsxs)("div", {
                  className: s().footer_top_box_socials,
                  children: [
                    (0, o.jsx)("h3", { children: "Socials" }),
                    (0, o.jsx)("div", {
                      className: s().footer_top_box_socials_image_box,
                      children: u.map((e, t) =>
                        (0, o.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: s().footer_top_box_socials_link,
                            children: (0, o.jsx)(r.default, {
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
                (0, o.jsxs)("div", {
                  className: s().footer_news_letter_container,
                  children: [
                    (0, o.jsx)("h3", { children: "Newsletter" }),
                    (0, o.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, o.jsxs)("div", {
                      className: ""
                        .concat(
                          l ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(s().footer_news_letter_input_box),
                      children: [
                        (0, o.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            a(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && f();
                          },
                          style: i ? {} : { color: "red" },
                        }),
                        (0, o.jsx)("button", {
                          onClick: f,
                          className: s().color_1,
                          children: _
                            ? (0, o.jsx)(h.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: s().footer_bottom_box,
              children: [
                (0, o.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, o.jsx)("div", {
                  className: s().footer_email_box,
                  children: (0, o.jsx)("div", {
                    className: s().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    5827: function (e, t, i) {
      "use strict";
      var o = i(5964);
      i(800);
      var a = i(4742),
        s = i.n(a);
      t.Z = (e) => {
        let {
          children: t,
          raiseContours: i = !1,
          hasSecondContour: a = !0,
          isContainer: n = !0,
          noContour: r = !1,
        } = e;
        return (0, o.jsxs)("div", {
          className: n ? "n-container" : "",
          children: [
            !r &&
              (0, o.jsx)("div", {
                className: ""
                  .concat(i && s().raise_contour, " ")
                  .concat(s().home_contour_back),
              }),
            a && (0, o.jsx)("div", { className: s().home_contour_back2 }),
            (0, o.jsx)("div", { className: s().home_glow_left }),
            a &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("div", { className: s().home_glow_lowest_fees }),
                  (0, o.jsx)("div", { className: s().home_glow_AI }),
                  (0, o.jsx)("div", { className: s().home_glow_AI_Image }),
                ],
              }),
            (0, o.jsx)("div", { className: s().home_glow_chart }),
            (0, o.jsx)("div", { className: s().home_glow_right }),
            (0, o.jsx)("div", { className: s().home_star_back }),
            (0, o.jsx)("div", { className: s().home_star_back2 }),
            a &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("div", { className: s().home_star_back3 }),
                  (0, o.jsx)("div", { className: s().home_star_back4 }),
                  (0, o.jsx)("div", { className: s().home_star_back5 }),
                ],
              }),
            t,
          ],
        });
      };
    },
    9254: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return ec;
          },
        });
      var o = i(5964),
        a = i(800),
        s = i(5827),
        n = i(8623),
        r = i(8381),
        l = i.n(r),
        c = i(7016),
        _ = i.n(c),
        x = i(8327),
        d = JSON.parse(
          '{"v":"5.10.2","fr":24,"ip":0,"op":37,"w":500,"h":500,"nm":"391-scroll-down-3-auto","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"02092020","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-105,15,0],"ix":2,"l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"02092020002","np":3,"mn":"ADBE Checkbox Control","ix":1,"en":1,"ef":[{"ty":7,"nm":"Checkbox","mn":"ADBE Checkbox Control-0001","ix":1,"v":{"a":0,"k":0,"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"lordicon.com Outlines","cl":"com","sr":1,"ks":{"o":{"a":0,"k":20,"ix":11,"x":"var $bm_rt;\\nvar checkbox = thisComp.layer(\'02092020\').effect(\'02092020002\')(\'Checkbox\');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[249.934,481.369,0],"ix":2,"l":2},"a":{"a":0,"k":[79.934,0.369,0],"ix":1,"l":2},"s":{"a":0,"k":[265.159,265.159,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],"c":true},"ix":2},"nm":"l","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],"o":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],"v":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],"o":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],"v":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"r","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],"o":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],"v":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],"o":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],"v":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"d","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"i","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"n","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],"c":true},"ix":2},"nm":".","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":".","np":3,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],"c":true},"ix":2},"nm":"m","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"m","np":3,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":10,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[1,1,1,1],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.490196079016,0.435294121504,0.964705884457,1],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":70,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"l":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"NULL","parent":4,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[60,60,0],"ix":1,"l":2},"s":{"a":0,"k":[450,450,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 10","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.26,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[60,59.5,0],"to":[0,5.25,0],"ti":[-0.125,-4.75,0]},{"i":{"x":0.26,"y":1},"o":{"x":0.74,"y":0},"t":13,"s":[60,91,0],"to":[0,-4.5,0],"ti":[0,9.917,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.74,"y":0},"t":24,"s":[60,28.5,0],"to":[-0.25,4.708,0],"ti":[0,-5.167,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[60,64.5,0],"to":[0,5.167,0],"ti":[0,0.833,0]},{"t":36,"s":[60,59.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":8,"s":[8,8]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":13,"s":[8,1]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0.167]},"t":24,"s":[8,1]},{"t":29,"s":[8,8]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.03137254902,0.658823529412,0.541176470588,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":4,"x":"var $bm_rt;\\n$bm_rt = content(\'Ellipse 1\').content(\'Stroke 1\').color;"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":21,"op":143,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 8","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.26,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[60,59.5,0],"to":[0,5.25,0],"ti":[-0.125,-4.75,0]},{"i":{"x":0.26,"y":1},"o":{"x":0.74,"y":0},"t":13,"s":[60,91,0],"to":[0,-4.5,0],"ti":[0,9.917,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.74,"y":0},"t":24,"s":[60,28.5,0],"to":[-0.25,4.708,0],"ti":[0,-5.167,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[60,64.5,0],"to":[0,5.167,0],"ti":[0,0.833,0]},{"t":36,"s":[60,59.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":8,"s":[8,8]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":13,"s":[8,1]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0.167]},"t":24,"s":[8,1]},{"t":29,"s":[8,8]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.03137254902,0.658823529412,0.541176470588,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":4,"x":"var $bm_rt;\\n$bm_rt = content(\'Ellipse 1\').content(\'Stroke 1\').color;"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":16,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[60,60,0],"to":[0,0.417,0],"ti":[0,0.542,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":13,"s":[60,62.5,0],"to":[0,-0.542,0],"ti":[0,0.417,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":24,"s":[60,56.75,0],"to":[0,-0.417,0],"ti":[0,-0.542,0]},{"t":32,"s":[60,60,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[49,49],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":54,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.03137254902,0.658823529412,0.541176470588,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":38,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":4,"ct":1,"bm":0}],"markers":[]}'
        ),
        m = i(3598),
        h = i(7358),
        p = i(5195),
        u = i(785),
        y = i(8893),
        f = i.n(y),
        g = (e) => {
          let { setWatchVideoPopup: t } = e,
            i = (0, a.useRef)(null),
            s = !1,
            r = (e) => {
              var o;
              let { target: a } = e;
              !(function (e) {
                if (!e || !("nodeType" in e)) throw Error("Node expected");
              })(a),
                (null !== (o = i.current) && void 0 !== o && o.contains(a)) ||
                  (s ? t(!1) : (s = !0));
            };
          (0, a.useEffect)(
            () => (
              (document.body.style.overflowY = "hidden"),
              document.body.addEventListener("click", r),
              () => {
                (document.body.style.overflowY = "scroll"),
                  document.body.removeEventListener("click", r);
              }
            ),
            []
          );
          let l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              l.current && l.current.play();
            }, []),
            (0, o.jsx)("div", {
              className: f().WV_Popup_Wrapper,
              children: (0, o.jsxs)("section", {
                ref: i,
                className: f().WV_Popup_Container,
                children: [
                  (0, o.jsx)(n.default, {
                    onClick: () => t(!1),
                    src: u.Z,
                    alt: "close",
                    className: f().WV_Popup_close,
                  }),
                  (0, o.jsxs)("video", {
                    controls: !0,
                    ref: l,
                    style: { width: "100%", height: "100%" },
                    loop: !0,
                    children: [
                      (0, o.jsx)("source", {
                        src: "presentation.mp4",
                        type: "video/mp4",
                      }),
                      "Your browser does not support the video tag.",
                    ],
                  }),
                ],
              }),
            })
          );
        },
        k = () => {
          let e = (0, h.i)(),
            [t, i] = (0, a.useState)(!1);
          return (0, o.jsxs)("div", {
            className: _().Banner_Container,
            children: [
              t && (0, o.jsx)(g, { setWatchVideoPopup: i }),
              (0, o.jsx)(p.Z, {}),
              (0, o.jsxs)("div", {
                className: _().Banner_Content_Box,
                children: [
                  (0, o.jsx)(l(), {
                    animationData: d,
                    className: _().Banner_Scroll_Down_Lottie,
                  }),
                  (0, o.jsxs)("div", {
                    className: _().Banner_Content_Texts_Box,
                    children: [
                      (0, o.jsxs)("h1", {
                        className: _().Banner_Content_Title,
                        children: [
                          (0, o.jsx)("span", {
                            className: "gradient-text",
                            children: "Trustless Omnichain",
                          }),
                          " ",
                          (0, o.jsx)("span", {
                            className: "gradient-text",
                            children: "AI Agents",
                          }),
                        ],
                      }),
                      (0, o.jsxs)("p", {
                        className: _().Banner_Content_Description,
                        children: [
                          "NOYA's AI Agents direct omnichain liquidity trustlessly using ZKML.",
                          (0, o.jsx)("br", {}),
                          "These agent execute multiple intents like yield aggregation, borrowing optimization, liquidity provisioning, and collateral management.",
                          (0, o.jsx)("br", {}),
                          (0, o.jsx)("br", {}),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: _().Banner_Content_Action_Box,
                        children: [
                          (0, o.jsx)("div", {
                            className: _().Banner_Content_Action_button_wrapper,
                            children: (0, o.jsx)("a", {
                              href: "https://app.noya.ai",
                              target: "_blank",
                              className: ""
                                .concat(
                                  _().Banner_Content_Action_button,
                                  " cursor-pointer "
                                )
                                .concat(_().color_1),
                              children: "Go to dApp",
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            onClick: () => i(!0),
                            className: _().Banner_Content_Watch_Action,
                            children: [
                              (0, o.jsx)(n.default, {
                                style: { marginRight: 10 },
                                width: 25,
                                height: 23,
                                src: x.Z,
                                alt: "play",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: _().Banner_Image_Box,
                    children: (0, o.jsx)(m.Z, {
                      src: "Android" === e ? "/hero.webm" : "/hero.mp4",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        A = i(7363),
        b = i.n(A),
        w = i(7987),
        v = i(8701),
        j = () => {
          let { width: e } = (0, v.Z)(),
            t = (0, h.i)(),
            [i, { entry: s }] = (0, w.S)(),
            n = s && s.isIntersecting,
            [r, l] = (0, a.useState)(!1);
          (0, a.useEffect)(() => {
            n && l(!0);
          }, [n]);
          let c = (0, o.jsx)("p", {
            className: b().AI_Description,
            children:
              "Our AI Agents leverage a vast array of on-chain data points to accurately forecast yields, volatility, and liquidity trends. This eliminates the need for manual liquidity allocation, as the AI Agents autonomously manage all aspects of the process in a proactive and predictive manner.",
          });
          return (0, o.jsxs)("div", {
            className: b().AI_Container,
            children: [
              (0, o.jsxs)("div", {
                className: b().AI_Wrapper_Box,
                children: [
                  (0, o.jsx)("div", { className: b().AI_intersector, ref: i }),
                  (0, o.jsxs)("div", {
                    className: b().AI_Content_Box,
                    children: [
                      (0, o.jsxs)("h3", {
                        children: [
                          "Say goodbye to manual DeFi Operations ",
                          (0, o.jsx)("br", {}),
                          "AI ",
                          (0, o.jsx)("span", {
                            className: "gradient-text",
                            children: " got you covered",
                          }),
                        ],
                      }),
                      c,
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: b().AI_Image_Box,
                    children: [
                      c,
                      (0, o.jsx)("div", {
                        className: b().Banner_Content_Action_button_wrapper,
                        children: (0, o.jsx)("a", {
                          href: "https://noya-detail.vercel.app/space-race-onboarding",
                          target: "_blank",
                          className: ""
                            .concat(
                              b().Banner_Content_Action_button,
                              " cursor-pointer "
                            )
                            .concat(b().color_1),
                          children: "Join the Space Race",
                        }),
                      }),
                      (0, o.jsx)(m.Z, {
                        src:
                          "iOS" === t || "unknown" === t
                            ? "/AI.mp4"
                            : "/AI.webm",
                        playWithIntersection: n,
                        loop: r,
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: b().AI_Video_Box,
                children: (0, o.jsx)(m.Z, {
                  style: {
                    zIndex: 3,
                    objectFit: e && e > 1200 ? "cover" : "contain",
                  },
                  src: "iOS" === t || "unknown" === t ? "/AI.mp4" : "/AI.webm",
                  playWithIntersection: n,
                  loop: r,
                }),
              }),
            ],
          });
        },
        B = i(5215),
        C = i.n(B),
        N = function (e) {
          let { className: t } = e;
          return (0, o.jsx)("svg", {
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, o.jsx)("path", {
              d: "M0.999756 1L15.9998 16M0.999756 16L15.9998 1",
              stroke: "white",
              strokeWidth: "2",
            }),
          });
        },
        S = i(6647),
        E = i(4969),
        F = i(4122),
        I = function (e, t) {
          let i = a.useRef(null),
            o = [{ opacity: 1, offset: 0 }, { opacity: 0 }],
            s = { duration: 350, iterations: 1 },
            n = () => {
              i.current && i.current.animate(o, s),
                setTimeout(() => {
                  e();
                }, s.duration);
            };
          return (
            (0, a.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && t && n();
              };
              return (
                document.addEventListener("keydown", e),
                () => {
                  document.removeEventListener("keydown", e);
                }
              );
            }, [n]),
            (0, a.useEffect)(() => {
              document.body.style.overflowY = t ? "hidden" : "auto";
            }, [t]),
            { dialogRef: i, handleClose: n }
          );
        },
        D = function (e) {
          let { onClose: t, open: i, closeAnnouncement: s } = e,
            [n, r] = a.useState(""),
            [l, c] = a.useState(!0),
            [_, x] = (0, a.useState)(!1),
            [d, m] = (0, a.useState)(!1),
            h = () => {
              if (S.H.test(n)) {
                m(!0);
                let e = JSON.stringify({ email: n });
                fetch(
                  "https://www.noya.network/noya_space/api/users/newsletter/subscribe",
                  {
                    body: e,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  }
                )
                  .then((e) => {
                    e.ok
                      ? (x(!0),
                        r(""),
                        (0, E.x)("Email added to newsletter", "success", !0),
                        t(),
                        s())
                      : (0, E.x)(
                          "Error adding email to newsletter",
                          "error",
                          !0
                        );
                  })
                  .catch((e) => {
                    (0, E.x)("Error adding email to newsletter", "error", !0);
                  })
                  .finally(() => {
                    m(!1);
                  });
              } else c(!1);
            },
            { dialogRef: p, handleClose: u } = I(t, i);
          return (0, o.jsx)("div", {
            ref: p,
            className:
              "fixed inset-0 z-[100] bg-[#000000a0] flex items-center justify-center animate-fadeinFast ".concat(
                i ? "block" : "hidden"
              ),
            onClick: u,
            children: (0, o.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), h();
              },
              onClick: (e) => e.stopPropagation(),
              className:
                "w-[450px] shadow-gradient shadow-2xl max-w-[90%] bg-black rounded-md relative flex justify-center items-center flex-col py-6 lg:py-8 px-6 lg:px-8",
              children: [
                (0, o.jsx)("button", {
                  className:
                    "absolute top-2 right-2 w-3 h-3 bg-transparent border-none outline-none cursor-pointer",
                  onClick: u,
                  children: (0, o.jsx)(N, {}),
                }),
                (0, o.jsxs)("p", {
                  className:
                    "text-white text-[18px] font-EuclidCircularB font-bold text-center",
                  children: [
                    "Subscribe to our newsletter to get notified when our",
                    " ",
                    (0, o.jsx)("span", {
                      className:
                        "font-bold gradient-text font-EuclidCircularB text-[18px]",
                      children: "Space Race",
                    }),
                    " ",
                    "is live!",
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "".concat(
                    _ ? "glow-button-success" : "glow-button",
                    " mt-6 lg:mt-8 w-full rounded-lg gradient-wrapper-extra p-px"
                  ),
                  children: (0, o.jsx)("input", {
                    className:
                      "w-full h-[40px] bg-black border-none outline-none text-white text-[14px] font-EuclidCircularB font-normal text-center rounded-lg",
                    type: "email",
                    value: n,
                    required: !0,
                    onChange: (e) => {
                      r(e.target.value), c(!0);
                    },
                    placeholder: "Enter your email address",
                    style: l ? {} : { color: "red" },
                  }),
                }),
                (0, o.jsx)("button", {
                  type: "submit",
                  className:
                    "moving-bg mt-3 h-[35px] lg:mt-4 w-full rounded-lg px-4 py-2 cursor-pointer",
                  children: d
                    ? (0, o.jsx)(F.Z, { className: "w-5 h-5" })
                    : (0, o.jsx)("p", {
                        className: "text-[14px] font-RussoOne text-white",
                        children: "Subscribe",
                      }),
                }),
              ],
            }),
          });
        },
        L = i(4141),
        V = function (e) {
          let { visible: t, closeAnnouncement: i, showAnnouncement: s } = e,
            [n, r] = a.useState(!1);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(D, {
                closeAnnouncement: i,
                open: n,
                onClose: () => r(!1),
              }),
            ],
          });
        },
        W = () => {
          let [e, { entry: t }] = (0, w.S)(),
            [i, s] = (0, a.useState)(!0);
          (0, a.useEffect)(() => {
            let e = window.localStorage.getItem("showAnnouncement");
            s(!JSON.parse(null != e ? e : "false"));
          }, []);
          let n = (0, h.i)();
          return (0, o.jsxs)("div", {
            className: C().Liquidity_Flows_Container,
            ref: e,
            children: [
              (0, o.jsx)(V, {
                showAnnouncement: i,
                closeAnnouncement: () => {
                  s(!1),
                    window.localStorage.setItem("showAnnouncement", "true");
                },
                visible: !!(t && t.boundingClientRect.y < 0),
              }),
              (0, o.jsxs)("div", {
                className: C().Liquidity_Flows_Wrapper,
                children: [
                  (0, o.jsx)("div", {
                    className: C().Liquidity_Flows_intersector,
                  }),
                  (0, o.jsxs)("div", {
                    className: C().Liquidity_Flows_Content_Box,
                    children: [
                      (0, o.jsx)("h3", {
                        className: "gradient-text",
                        children: "AI Agents you can trust",
                      }),
                      (0, o.jsxs)("p", {
                        children: [
                          "NOYA's ",
                          (0, o.jsx)("span", { children: "ZKML" }),
                          " implementation enables",
                          " ",
                          (0, o.jsx)("span", {
                            className: "gradient-text",
                            children: "on-chain",
                          }),
                          " ",
                          (0, o.jsx)("span", {
                            className: "gradient-text",
                            children: "proving",
                          }),
                          " of private & predictive AI models which enables",
                          " ",
                          (0, o.jsx)("span", {
                            className: "gradient-text",
                            children: "trustless & verifiable",
                          }),
                          " ",
                          "strategy execution.",
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: C().Liquidity_Flows_Image_Box,
                    children: (0, o.jsx)(m.Z, {
                      src: "Android" === n ? "ai-into.webm" : "ai-into.mp4",
                      playWithIntersection: !0,
                      className: "w-full object-contain",
                      loop: !0,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        T = i(7489),
        G = i.n(T),
        O = () => {
          let e = (0, h.i)(),
            [t, { entry: i }] = (0, w.S)(),
            s = i && i.isIntersecting,
            [n, r] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              s && r(!0);
            }, [s]),
            (0, o.jsx)("div", {
              className: G().Lowest_Fees_Container,
              children: (0, o.jsxs)("div", {
                className: G().Lowest_Fees_Wrapper,
                ref: t,
                children: [
                  (0, o.jsx)("div", { className: G().Lowest_Fees_intersector }),
                  (0, o.jsx)("div", {
                    className: G().Lowest_Fees_Image_Box,
                    children: (0, o.jsx)(m.Z, {
                      src:
                        "iOS" === e || "unknown" === e
                          ? "/lowest-fees.mp4"
                          : "/lowest-fees.webm",
                      playWithIntersection: s,
                      loop: n,
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: G().Lowest_Fees_Content_Box,
                    children: [
                      (0, o.jsx)("h3", {
                        className: "gradient-text",
                        children:
                          "The lowest fees possible through DEX & Bridge aggregators",
                      }),
                      (0, o.jsx)("p", {
                        children:
                          "NOYA elevates the DeFi experience by minimizing slippage and fees through the seamless integration of bridge and DEX aggregators.",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        q = i(9008),
        P = i.n(q),
        M = () => {
          let e = (0, h.i)(),
            [t, { entry: i }] = (0, w.S)(),
            s = i && i.isIntersecting,
            [n, r] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              s && r(!0);
            }, [s]),
            (0, o.jsxs)("div", {
              className: P().Liquidity_Flows_Container,
              children: [
                (0, o.jsx)("div", { ref: t }),
                (0, o.jsxs)("div", {
                  className: P().Liquidity_Flows_Wrapper,
                  children: [
                    (0, o.jsxs)("div", {
                      className: P().Liquidity_Flows_Content_Box,
                      children: [
                        (0, o.jsx)("h3", {
                          className: "gradient-text",
                          children:
                            "Liquidity flows to where it's needed the most",
                        }),
                        (0, o.jsx)("p", {
                          children:
                            "Self learning and predictive AI Agents allocate liquidity across multiple chains, assets, and protocols, ensuring sustainable growth in an ever-evolving DeFi landscape.",
                        }),
                        (0, o.jsx)("div", {
                          className: P().Banner_Content_Action_button_wrapper,
                          children: (0, o.jsx)("a", {
                            href: "https://app.noya.ai",
                            target: "_blank",
                            className: ""
                              .concat(
                                P().Banner_Content_Action_button,
                                " cursor-pointer "
                              )
                              .concat(P().color_1),
                            children: "Go to dApp",
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: P().Liquidity_Flows_Image_Box,
                      children: (0, o.jsx)(m.Z, {
                        src:
                          "iOS" === e || "unknown" === e
                            ? "liquidity-flows.mp4"
                            : "liquidity-flows.webm",
                        playWithIntersection: s,
                        loop: n,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Z = function (e) {
          let {
            position: t = "left",
            icon: i = "uni",
            first: a = !1,
            short: s,
            title: r,
            link: l,
            description: c,
          } = e;
          return (0, o.jsx)("div", {
            className: "flex "
              .concat(
                "right" == t && "flex-row-reverse",
                " justify-end items-center mt-[50px] "
              )
              .concat(a && "mb-[50px]"),
            children: (0, o.jsxs)("div", {
              className: "flex items-start justify-start",
              children: [
                "right" == t &&
                  (0, o.jsx)(n.default, {
                    fill: !0,
                    alt: "dashed line",
                    src: "/dashed-line-short.svg",
                    className:
                      "!relative h-[2px] flex-1 !w-[70px] mt-[27px] object-cover",
                  }),
                (0, o.jsx)(n.default, {
                  src: "/".concat(i, ".svg"),
                  alt: "".concat(i),
                  height: 58,
                  width: 58,
                  className: "object-contain skew-x-[20deg]  mr-2",
                }),
                (0, o.jsxs)("div", {
                  className: "w-fit",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, o.jsx)("p", {
                          className:
                            "skew-x-[20deg] line-clamp-1  gradient-text-short font-EuclidCircularB font-semibold text-[18px] md:text-[21px]",
                          children: r,
                        }),
                        "left" == t &&
                          (0, o.jsx)(n.default, {
                            fill: !0,
                            alt: "dashed line",
                            src: "/dashed-line-long.svg",
                            className: "!relative h-px flex-1 !w-[70px] ml-1",
                          }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "flex items-center ml-3 mt-1 gap-2",
                      children: (0, o.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, o.jsxs)("p", {
                                className:
                                  "skew-x-[20deg] font-semibold uppercase text-white font-EuclidCircularB text-[20px]",
                                children: ["(", null != s ? s : i, ")"],
                              }),
                              (0, o.jsx)("div", {
                                className:
                                  "w-[5px] h-[5px] skew-x-[20deg] rounded-full bg-white",
                              }),
                            ],
                          }),
                          (0, o.jsx)("p", {
                            className:
                              "skew-x-[20deg] font-normal line-clamp-2 max-w-[430px] text-white font-EuclidCircularB text-[14px] md:text-[16px] tracking-wider leading-6",
                            children: c,
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsx)(L.default, {
                      href: l,
                      passHref: !0,
                      target: "_blank",
                      className:
                        "hover-button-wrapper skew-x-[20deg] ml-6 !mt-3 !rounded-[8px]",
                      children: (0, o.jsx)("button", {
                        className:
                          "text-[#F9F9FF] opacity-90 cursor-pointer hover-button select-none hover:shadow-lg hover:-translate-[1px] !w-fit !h-fit px-2 py-2 !rounded-[8px] font-RussoOne",
                        children: "Learn More",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        R = function (e) {
          let { description: t, title: i, icon: a, link: s } = e;
          return (0, o.jsx)(L.default, {
            href: s,
            passHref: !0,
            className:
              "gradient-wrapper block max-w-[min(420px,90vw)] mx-auto !rounded-md overflow-hidden mb-8",
            children: (0, o.jsxs)("div", {
              className: "w-full bg-[#19171F] !rounded-md overflow-hidden",
              children: [
                (0, o.jsxs)("div", {
                  className:
                    "w-full flex justify-start items-center py-3 px-2 gap-2",
                  children: [
                    (0, o.jsx)(n.default, {
                      src: "/".concat(a, ".svg"),
                      alt: "".concat(a),
                      height: 30,
                      width: 30,
                      className: "object-contain",
                    }),
                    (0, o.jsx)("p", {
                      className:
                        "text-[16px] gradient-text font-EuclidCircularB font-semibold",
                      children: i,
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: "gradient-border !h-[2px]" }),
                (0, o.jsx)("div", {
                  className: "py-4 px-2",
                  children: (0, o.jsx)("div", {
                    className: "flex items-start gap-2",
                    children: (0, o.jsx)("p", {
                      className:
                        " font-normal line-clamp-2 max-w-[430px] text-white font-EuclidCircularB text-[14px] md:text-[16px] tracking-wider leading-6",
                      children: t,
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Q = function () {
          let e = [
            {
              title: "Trustless Uniswap Liquidity Provisioning",
              description: " Multi-Tier, Multi-Chain, Multi-Asset pools",
              icon: "uni",
              short: "tulp",
              first: !0,
              link: "/trustless-uniswap",
            },
            {
              title: "Native Omnichain Borrowing Optimizer",
              description: " Optimizing borrowing rates",
              icon: "nobo",
              first: !1,
              link: "/native-borrowing",
            },
            {
              title: "Leveraged Yield Farming Aggregator",
              description: " LTV management using ZKML",
              icon: "lyfa",
              first: !0,
              link: "/leveraged-yield",
            },
            {
              title: "Native Omnichain Yield Aggregator",
              description:
                " Aggregating yield and diversifying risk across multiple chains",
              icon: "noya",
              first: !1,
              link: "/native-yield",
            },
          ];
          return (0, o.jsxs)("section", {
            className:
              "overflow-x-hidden w-full relative -mt-[160px] pt-[100px] pb-[250px]  bg-[url('/protocol-bg.png')] bg-cover bg-center",
            children: [
              (0, o.jsx)("div", {
                className:
                  "absolute top-0 left-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#000000] to-[#00000033]",
              }),
              (0, o.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#000000] to-[#00000033]",
              }),
              (0, o.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 right-0 w-full top-0 h-full bg-[#000000a6]",
              }),
              (0, o.jsxs)("p", {
                className:
                  "text-[25px] max-w-[min(646px,95vw)] mx-auto mb-[50px] text-white text-center font-RussoOne font-semibold relative",
                children: [
                  
                  " ",
                  (0, o.jsx)("span", {
                    className:
                      "gradient-text-short text-[25px] text-white text-center font-EuclidCircularB font-semibold",
                    children: "NOYA",
                  }),
                  ": ",
                  "0x0000000000"
                ],
              }),
              (0, o.jsxs)("div", {
                className:
                  "w-full max-w-[1440px] mx-auto hidden min-[1100px]:flex skew-x-[-20deg] justify-center items-center min-h-full relative",
                children: [
                  (0, o.jsx)("div", {
                    className: "flex-1",
                    children: [e[0], e[1]].map((e) =>
                      (0, o.jsx)(
                        Z,
                        {
                          link: e.link,
                          first: e.first,
                          icon: e.icon,
                          short: e.short,
                          title: e.title,
                          description: e.description,
                        },
                        e.title
                      )
                    ),
                  }),
                  (0, o.jsx)("div", {
                    className: "gradient-border-vertical !h-[450px]",
                  }),
                  (0, o.jsx)("div", {
                    className: "flex-1 mt-[120px]",
                    children: [e[2], e[3]].map((e) =>
                      (0, o.jsx)(
                        Z,
                        {
                          link: e.link,
                          first: e.first,
                          icon: e.icon,
                          short: e.short,
                          title: e.title,
                          description: e.description,
                          position: "right",
                        },
                        e.title
                      )
                    ),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className:
                  "w-full max-w-[1440px] mx-auto relative block min-[1100px]:hidden [&>*:last-child]:!mb-0",
                children: e.map((e) =>
                  (0, o.jsx)(
                    R,
                    {
                      icon: e.icon,
                      link: e.link,
                      title: e.title,
                      description: e.description,
                    },
                    e.title
                  )
                ),
              }),
            ],
          });
        },
        Y = i(6484),
        H = i(6274),
        U = i.n(H),
        z = {
          src: "/_next/static/media/8protocols.28687953.svg",
          height: 27,
          width: 46,
          blurWidth: 0,
          blurHeight: 0,
        },
        J = {
          src: "/_next/static/media/31pools.af8979f5.svg",
          height: 44,
          width: 44,
          blurWidth: 0,
          blurHeight: 0,
        },
        $ = {
          src: "/_next/static/media/ethStrategy.5ab55591.png",
          height: 576,
          width: 1196,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEWPor+Ucru+1+ykAAAAAnRSTlMED4JAFa0AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAWSURBVHicY2AAA0ZGKA3hQLggGsQCAADNAA5OdDeOAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        X = {
          src: "/_next/static/media/stables.e88aab07.png",
          height: 562,
          width: 1106,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEWKc7Sqm8oLxW1qAAAAAnRSTlMOA3EZsQwAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAXSURBVHicY2CEAAYGGMXAyAACIDYUAAABtQARoB5eRAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        };
      let K = (e) => {
        let { icon: t, title: i } = e;
        return (0, o.jsxs)("div", {
          className: U().Strategy_Item,
          children: [t, (0, o.jsx)("p", { children: i })],
        });
      };
      var ee = () => {
          let e = [
            {
              title: "10+ chains",
              icon: (0, o.jsx)(Y.Wlb, {
                className: U().Strategy_Icon,
                color: "#fff",
                style: { marginRight: 20 },
              }),
            },
            {
              title: "40+ protocols",
              icon: (0, o.jsx)(n.default, {
                src: z,
                alt: "protocols",
                className: U().Strategy_Icon,
                color: "#fff",
                style: { marginRight: 20 },
              }),
            },
            {
              title: "500+ pools",
              icon: (0, o.jsx)(n.default, {
                src: J,
                alt: "protocols",
                className: U().Strategy_Icon,
                color: "#fff",
                style: { marginRight: 20 },
              }),
            },
          ];
          return (0, o.jsxs)("div", {
            className: U().Strategy_Container,
            children: [
              (0, o.jsx)("div", { className: U().Strategy_Shadow }),
              (0, o.jsx)("div", {
                className: U().Strategy_Title_Box,
                children: (0, o.jsxs)("p", {
                  children: [
                    "Unleash exceptional returns with",
                    " ",
                    (0, o.jsx)("span", {
                      className: "gradient-text",
                      children: "NOYA",
                    }),
                    "'s game-changing",
                    " ",
                    (0, o.jsx)("br", {}),
                    "game-changing agent-first approach",
                  ],
                }),
              }),
              (0, o.jsxs)("div", {
                className: U().Strategy_Chart_Box,
                children: [
                  (0, o.jsxs)("div", {
                    className: U().Strategy_ETH_Chart_Box,
                    children: [
                      (0, o.jsx)("div", {
                        className: U().Strategy_Chart_Title_Box,
                        children: (0, o.jsx)("h3", {
                          children: "ETH Strategy",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: U().Strategy_Chart_Section,
                        children: (0, o.jsx)(n.default, {
                          className: U().Strategy_Chart_image,
                          alt: "ethStrategy",
                          src: $,
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: U().Strategy_Chart_Legend_Wrapper,
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: U().Strategy_Stables_Chart_Box,
                    children: [
                      (0, o.jsx)("div", {
                        className: U().Strategy_Chart_Title_Box,
                        children: (0, o.jsx)("h3", {
                          children: "Stables Strategy",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: U().Strategy_Chart_Section,
                        children: (0, o.jsx)(n.default, {
                          className: U().Strategy_Chart_image,
                          alt: "stables",
                          src: X,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: U().Strategy_Info_Container,
                children: (0, o.jsx)("div", {
                  className: U().Strategy_Info_Wrapper,
                  children: e.map((t, i) =>
                    (0, o.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, o.jsx)(K, { icon: t.icon, title: t.title }, i),
                          e.length - 1 !== i &&
                            (0, o.jsx)("div", {
                              className: U().Strategy_Divder,
                            }),
                        ],
                      },
                      i
                    )
                  ),
                }),
              }),
            ],
          });
        },
        et = i(5799),
        ei = i.n(et),
        eo = i(3300),
        ea = i.n(eo),
        es = {
          src: "/_next/static/media/arrow-details.00aee55a.svg",
          height: 13,
          width: 27,
          blurWidth: 0,
          blurHeight: 0,
        },
        en = (e) => {
          let { title: t, description: i, style: s } = e,
            [r, l] = (0, a.useState)(!1),
            [c, _] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              r ? _(!0) : _(!1);
            }, [r]),
            (0, o.jsxs)("div", {
              style: { ...s, height: r ? "" : "77px" },
              className: ea().Accordion_Container,
              children: [
                (0, o.jsxs)("div", {
                  onClick: () => {
                    l((e) => !e);
                  },
                  className: ea().Accordion_Title_Box,
                  style: { borderRadius: r ? "10px 10px 0 0" : "10px" },
                  children: [
                    (0, o.jsx)("h6", {
                      className: ea().Accordion_Title,
                      children: t,
                    }),
                    t &&
                      (0, o.jsx)(n.default, {
                        style: { rotate: r ? "0deg" : "180deg" },
                        className: ea().Accordion_Arrow_Icon,
                        alt: "",
                        src: es,
                      }),
                  ],
                }),
                (0, o.jsx)("div", {
                  style: { display: c ? "" : "none" },
                  className: ""
                    .concat(
                      ea().Accordion_Content_Box,
                      " animate__animated animate__fadeInDown "
                    )
                    .concat(c && !r && "animate__fadeOutUp"),
                  children: (0, o.jsx)("p", {
                    className: "".concat(ea().Accordion_Description),
                    children: i,
                  }),
                }),
              ],
            })
          );
        };
      let er = [
        {
          title: "How do I get real yields?",
          description:
            "At NOYA, our Omnivaults provide an AI-powered yield optimization solution that enables you to earn high risk-adjusted yields across multiple chains. With our exhaustive list of signals from on-chain and off-chain data feeds, you can farm the most optimal chain, protocol, and pool relative to your risk preference and strategy. Say goodbye to missing out on yield opportunities and start earning more today.",
        },
        {
          title: "What are Omnivaults?",
          description:
            "Omnivaults are advanced yield-bearing instruments that utilize AI technology to optimize your returns. Our solution makes it easy for you to earn high risk-adjusted yield across multiple chains, regardless of your technical knowledge or experience. With NOYA, you can take advantage of the latest in yield optimization technology and maximize your returns.",
        },
        {
          title: "What are the signals in an Omnivault?",
          description:
            "Our Omnivaults constantly monitor an exhaustive list of signals from on-chain and off-chain data feeds, ensuring you're always farming the most optimal chain, protocol, and pool. With NOYA, you can rest assured that your funds are constantly working for you, earning the highest yields possible.",
        },
        {
          title: "What is Omnichain+?",
          description:
            "Omnichain+ is NOYA's unique approach to bridging and exchanging assets across multiple chains. Instead of relying on a single bridge, we use multiple bridges and dex aggregators to ensure that you always get the safest, fastest, and cheapest option. With our solution, you can enjoy seamless asset exchange across multiple chains and maximize your returns with ease.",
        },
        {
          title: "How can I ensure that NOYA's system is safe?",
          description:
            "NOYA takes the safety and security of your funds seriously. Our architecture undergoes rigorous stress testing, and we only use the safest bridges. We also constantly monitor withdrawals and deposits, and underperforming Omnivaults are automatically paused to protect your investments.",
        },
        {
          title: "Is it custodial?",
          description:
            "NOYA is committed to the safety and security of your funds, which is why we do not hold your assets. With our solution, you have full control over your investments, and you can rest easy knowing that your funds are safe and secure.",
        },
      ];
      var el = () =>
          (0, o.jsx)("div", {
            className: ei().FAQ_Conatiner,
            children: (0, o.jsxs)("div", {
              className: ei().FAQ_Box_Wrapper,
              children: [
                (0, o.jsxs)("div", {
                  className: ei().FAQ_Title_Box,
                  children: [
                    (0, o.jsx)("h3", { children: "FAQ" }),
                    (0, o.jsx)("p", { children: "Frequently Asked Questions" }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: ei().FAQ_Details_Container,
                  children: (0, o.jsx)("div", {
                    className: ei().FAQ_Details_Wrapper,
                    children: er.map((e, t) =>
                      (0, o.jsx)(
                        en,
                        {
                          title: "".concat(t + 1, ". ").concat(e.title),
                          description: e.description,
                          style: { marginBottom: 20 },
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
        ec = function () {
          return (0, o.jsxs)("main", {
            children: [
              (0, o.jsxs)(s.Z, {
                isContainer: !1,
                children: [
                  (0, o.jsxs)("div", {
                    className: "w-full max-w-[1440px] mx-auto",
                    children: [
                      (0, o.jsx)(k, {}),
                      (0, o.jsx)(j, {}),
                      (0, o.jsx)(W, {}),
                      (0, o.jsx)(O, {}),
                      (0, o.jsx)(M, {}),
                    ],
                  }),
                  (0, o.jsx)(Q, {}),
                  (0, o.jsxs)("div", {
                    className: "w-full max-w-[1440px] mx-auto -mt-36 md:-mt-10",
                    children: [(0, o.jsx)(ee, {}), (0, o.jsx)(el, {})],
                  }),
                ],
              }),
              (0, o.jsx)(S.Z, {}),
            ],
          });
        };
    },
    4122: function (e, t, i) {
      "use strict";
      var o = i(5964);
      i(800),
        (t.Z = function (e) {
          let { className: t } = e;
          return (0, o.jsxs)("svg", {
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
              (0, o.jsx)("path", {
                fill: "#fff",
                d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
                children: (0, o.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "2s",
                  from: "0 50 50",
                  to: "360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, o.jsx)("path", {
                fill: "#fff",
                d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
                children: (0, o.jsx)("animateTransform", {
                  attributeName: "transform",
                  attributeType: "XML",
                  type: "rotate",
                  dur: "1s",
                  from: "0 50 50",
                  to: "-360 50 50",
                  repeatCount: "indefinite",
                }),
              }),
              (0, o.jsx)("path", {
                fill: "#fff",
                d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",
                children: (0, o.jsx)("animateTransform", {
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
      var o = i(5964),
        a = i(7358),
        s = i(800);
      t.Z = (e) => {
        let {
            src: t,
            style: i = {},
            loop: n,
            mute: r,
            playWithIntersection: l,
            className: c,
          } = e,
          _ = (0, s.useRef)(null),
          x = (0, a.i)();
        return (
          (0, s.useEffect)(() => {
            void 0 !== l
              ? !0 === l && _.current && _.current.play()
              : _.current && _.current.play();
          }, [l]),
          (0, o.jsx)("video", {
            playsInline: !0,
            muted: void 0 === r,
            ref: _,
            style: { width: "100%", height: "100%", ...i },
            loop: void 0 === n || !0 === n,
            className: c,
            children: (0, o.jsx)("source", {
              src: t,
              type: "Android" === x ? "video/webm" : "video/mp4",
            }),
          })
        );
      };
    },
    4969: function (e, t, i) {
      "use strict";
      i.d(t, {
        x: function () {
          return a;
        },
      });
      var o = i(4065);
      let a = (e, t, i) => {
        (0, o.toast)(e, { type: t, hideProgressBar: i });
      };
    },
    8701: function (e, t, i) {
      "use strict";
      var o = i(800);
      t.Z = () => {
        let [e, t] = (0, o.useState)({ width: void 0, height: void 0 });
        return (
          (0, o.useEffect)(() => {
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
    7363: function (e) {
      e.exports = {
        AI_Container: "AI-style_AI_Container__7gj1n",
        AI_Wrapper_Box: "AI-style_AI_Wrapper_Box__Jb9iu",
        AI_intersector: "AI-style_AI_intersector__lH7VC",
        AI_Content_Box: "AI-style_AI_Content_Box__TnMIx",
        AI_Description: "AI-style_AI_Description__6CObx",
        AI_Image_Box: "AI-style_AI_Image_Box__WOXlM",
        AI_Video_Box: "AI-style_AI_Video_Box___ytXI",
        Banner_Content_Action_button_wrapper:
          "AI-style_Banner_Content_Action_button_wrapper__9tIKt",
        Banner_Content_Action_button:
          "AI-style_Banner_Content_Action_button__yNiEd",
        color_1: "AI-style_color_1__b_HZV",
      };
    },
    3300: function (e) {
      e.exports = {
        Accordion_Container: "accordion-style_Accordion_Container__WAl0X",
        Accordion_Title_Box: "accordion-style_Accordion_Title_Box__AfFh7",
        Accordion_Arrow_Icon: "accordion-style_Accordion_Arrow_Icon__HwcJo",
        Accordion_Title: "accordion-style_Accordion_Title__PIZoL",
        Accordion_Content_Box: "accordion-style_Accordion_Content_Box__p36Dr",
        Accordion_Description: "accordion-style_Accordion_Description__1CVs_",
        fadeInAnimation: "accordion-style_fadeInAnimation__b_400",
      };
    },
    7016: function (e) {
      e.exports = {
        Banner_Container: "banner-style_Banner_Container__Zygun",
        home_contour_back: "banner-style_home_contour_back__ellsd",
        Banner_Navbar_Box: "banner-style_Banner_Navbar_Box__GvZW_",
        Banner_Content_Box: "banner-style_Banner_Content_Box__g_MWt",
        Banner_Content_Texts_Box:
          "banner-style_Banner_Content_Texts_Box__vT6x4",
        Banner_Content_Title: "banner-style_Banner_Content_Title___pLRd",
        Banner_Content_Description:
          "banner-style_Banner_Content_Description__xi_i0",
        Banner_Content_Description_Underline:
          "banner-style_Banner_Content_Description_Underline__R2RDY",
        Banner_Content_Action_Box:
          "banner-style_Banner_Content_Action_Box__1XsFs",
        footer_news_letter_input_box:
          "banner-style_footer_news_letter_input_box__CKk12",
        color_1: "banner-style_color_1__hxZLI",
        Banner_Content_Action_button_wrapper:
          "banner-style_Banner_Content_Action_button_wrapper__U_MyX",
        Banner_Content_Action_button:
          "banner-style_Banner_Content_Action_button__qDJg_",
        Banner_Content_Watch_Action:
          "banner-style_Banner_Content_Watch_Action__Q_9Oj",
        Banner_Scroll_Down_Lottie:
          "banner-style_Banner_Scroll_Down_Lottie__RZVnp",
        Banner_Image_Box: "banner-style_Banner_Image_Box__i7RVl",
      };
    },
    5215: function (e) {
      e.exports = {
        Liquidity_Flows_Container:
          "blockchain-style_Liquidity_Flows_Container__SLPyG",
        Liquidity_Flows_Wrapper:
          "blockchain-style_Liquidity_Flows_Wrapper__jGn89",
        Liquidity_Flows_intersector:
          "blockchain-style_Liquidity_Flows_intersector__xizyC",
        Liquidity_Flows_Content_Box:
          "blockchain-style_Liquidity_Flows_Content_Box__PqcZJ",
        Liquidity_Flows_Image_Box:
          "blockchain-style_Liquidity_Flows_Image_Box__I4AxH",
      };
    },
    5799: function (e) {
      e.exports = {
        FAQ_Conatiner: "FAQ-style_FAQ_Conatiner__ukTUP",
        FAQ_Box_Wrapper: "FAQ-style_FAQ_Box_Wrapper__MPpBB",
        FAQ_Title_Box: "FAQ-style_FAQ_Title_Box__6CMen",
        FAQ_Details_Container: "FAQ-style_FAQ_Details_Container__Zoysf",
        FAQ_Details_Wrapper: "FAQ-style_FAQ_Details_Wrapper__jQsOq",
        FAQ_Details_Arrow_Icon: "FAQ-style_FAQ_Details_Arrow_Icon__PZkdA",
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
    9008: function (e) {
      e.exports = {
        Liquidity_Flows_Container:
          "liquidity-flows-style_Liquidity_Flows_Container__YYwA4",
        Liquidity_Flows_Wrapper:
          "liquidity-flows-style_Liquidity_Flows_Wrapper__xOm0v",
        Liquidity_Flows_intersector:
          "liquidity-flows-style_Liquidity_Flows_intersector__SVmJ4",
        Liquidity_Flows_Content_Box:
          "liquidity-flows-style_Liquidity_Flows_Content_Box__mcBT4",
        Liquidity_Flows_Image_Box:
          "liquidity-flows-style_Liquidity_Flows_Image_Box__4foiA",
        Banner_Content_Action_button_wrapper:
          "liquidity-flows-style_Banner_Content_Action_button_wrapper__58Jo0",
        Banner_Content_Action_button:
          "liquidity-flows-style_Banner_Content_Action_button__dwiTX",
        color_1: "liquidity-flows-style_color_1__opIbr",
      };
    },
    7489: function (e) {
      e.exports = {
        Lowest_Fees_Container: "lowest-fees-style_Lowest_Fees_Container__J2cSW",
        Lowest_Fees_Wrapper: "lowest-fees-style_Lowest_Fees_Wrapper__klU3V",
        Lowest_Fees_intersector:
          "lowest-fees-style_Lowest_Fees_intersector__tuZa1",
        Lowest_Fees_Content_Box:
          "lowest-fees-style_Lowest_Fees_Content_Box__bOzY_",
        Lowest_Fees_Image_Box: "lowest-fees-style_Lowest_Fees_Image_Box__BpiOw",
      };
    },
    6274: function (e) {
      e.exports = {
        Strategy_Container: "strategy-style_Strategy_Container__oItdt",
        Strategy_Shadow: "strategy-style_Strategy_Shadow__Rh_zb",
        Strategy_Title_Box: "strategy-style_Strategy_Title_Box__0_vL4",
        Strategy_Chart_Box: "strategy-style_Strategy_Chart_Box__FGpvd",
        Strategy_Chart_Title_Box:
          "strategy-style_Strategy_Chart_Title_Box__uguDE",
        Strategy_Stables_Chart_Box:
          "strategy-style_Strategy_Stables_Chart_Box__C7W75",
        Strategy_ETH_Chart_Box: "strategy-style_Strategy_ETH_Chart_Box__P2MgO",
        Strategy_Chart_Section: "strategy-style_Strategy_Chart_Section__Ifr6g",
        Strategy_Chart_image: "strategy-style_Strategy_Chart_image__FL1M1",
        Strategy_Chart_Legend_Wrapper:
          "strategy-style_Strategy_Chart_Legend_Wrapper__iMjUb",
        Strategy_Chart_Legend_Box:
          "strategy-style_Strategy_Chart_Legend_Box__z8SrR",
        Strategy_Info_Container:
          "strategy-style_Strategy_Info_Container__mG5Nz",
        Strategy_Info_Wrapper: "strategy-style_Strategy_Info_Wrapper__gt6PM",
        Strategy_Item: "strategy-style_Strategy_Item__sBkKQ",
        Strategy_Divder: "strategy-style_Strategy_Divder__1Eu6Y",
        Strategy_Icon: "strategy-style_Strategy_Icon__MHJ8C",
      };
    },
    8893: function (e) {
      e.exports = {
        WV_Popup_Wrapper: "watch-video-popup-style_WV_Popup_Wrapper__oBgjT",
        "show-up": "watch-video-popup-style_show-up__n2aIj",
        WV_Popup_Container: "watch-video-popup-style_WV_Popup_Container__YGqOf",
        WV_Popup_close: "watch-video-popup-style_WV_Popup_close__7neWI",
      };
    },
    8327: function (e, t) {
      "use strict";
      // 
    },
  },
  function (e) {
    e.O(0, [16, 986, 772, 518, 141, 155, 195, 284, 716, 550, 744], function () {
      return e((e.s = 5301));
    }),
      (_N_E = e.O());
  },
]);
