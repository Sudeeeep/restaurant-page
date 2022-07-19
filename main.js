(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, {
          Z: () => h
        });
        var r = t(81),
          a = t.n(r),
          c = t(645),
          i = t.n(c),
          o = t(667),
          s = t.n(o),
          d = new URL(t(177), t.b),
          m = new URL(t(767), t.b),
          l = i()(a()),
          p = s()(d),
          u = s()(m);
        l.push([e.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  font-size: 16px;\r\n  background-color: #fff7ed;\r\n  /* color: #6e463b; */\r\n  color: #8b5749;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n}\r\n\r\n.header-img {\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 1.5rem;\r\n}\r\n\r\n.heading-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  gap: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\nul > li {\r\n  font-size: 1.25rem;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli:hover,\r\n.heading-container:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.home-container {\r\n  display: flex;\r\n  gap: 2rem;\r\n  width: 60%;\r\n  margin: 3rem auto;\r\n}\r\n\r\n.home-text-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 4rem;\r\n}\r\n\r\n.home-header-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.home-header-container > h2 {\r\n  color: #9e6454;\r\n}\r\n\r\n.home-image-container {\r\n  background-image: url(" + p + ");\r\n  background-size: cover;\r\n  padding: 9rem;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.home-menu-btn {\r\n  font-size: 1rem;\r\n  padding: 1rem;\r\n  border: none;\r\n  background-color: #e3a76a;\r\n  /* background-color: #f2a55c; */\r\n  color: white;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.home-menu-btn:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  color: white;\r\n  background-color: #8b5749;\r\n}\r\n\r\n.git-hub-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0;\r\n  font-size: 0.75em;\r\n  cursor: pointer;\r\n}\r\n\r\n.git-hub-logo {\r\n  height: 1rem;\r\n  width: 1rem;\r\n}\r\n\r\n.footer-nav-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.footer-nav {\r\n  font-size: 0.75em;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n/* contact Page*/\r\n.contact-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 3rem;\r\n  margin: 3rem auto;\r\n}\r\n\r\n.number-container,\r\n.address-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  background-color: white;\r\n  padding: 5rem 10rem;\r\n  align-items: center;\r\n}\r\n\r\n.call-icon,\r\n.map-icon {\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\n.first-number,\r\n.second-number,\r\n.address {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* About Page*/\r\n.about-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 60%;\r\n  margin: 3rem auto;\r\n}\r\n\r\n.about-img-container {\r\n  background-image: url(" + u + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  padding: 9rem;\r\n}\r\n\r\n.about-text-container {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* Menu Page */\r\n\r\n.menu-container {\r\n  margin: 3rem auto;\r\n  width: 60%;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.chai-header,\r\n.snacks-header {\r\n  padding: 2rem;\r\n}\r\n\r\n.chai-menu-container,\r\n.snacks-menu-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.adrak-chai-container,\r\n.chocolate-chai-container,\r\n.rose-chai-container,\r\n.kesar-chai-container,\r\n.bun-maska-container,\r\n.fries-container,\r\n.masala-toast-container,\r\n.maggie-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 1.25rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.adrak-chai-img,\r\n.chocolate-chai-img,\r\n.rose-chai-img,\r\n.kesar-chai-img,\r\n.bun-maska-img,\r\n.fries-img,\r\n.masala-toast-img,\r\n.maggie-img {\r\n  height: 15rem;\r\n  width: 15rem;\r\n}\r\n", ""]);
        const h = l
      },
      645: e => {
        e.exports = function (e) {
          var n = [];
          return n.toString = function () {
            return this.map((function (n) {
              var t = "",
                r = void 0 !== n[5];
              return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
            })).join("")
          }, n.i = function (e, t, r, a, c) {
            "string" == typeof e && (e = [
              [null, e, void 0]
            ]);
            var i = {};
            if (r)
              for (var o = 0; o < this.length; o++) {
                var s = this[o][0];
                null != s && (i[s] = !0)
              }
            for (var d = 0; d < e.length; d++) {
              var m = [].concat(e[d]);
              r && i[m[0]] || (void 0 !== c && (void 0 === m[5] || (m[1] = "@layer".concat(m[5].length > 0 ? " ".concat(m[5]) : "", " {").concat(m[1], "}")), m[5] = c), t && (m[2] ? (m[1] = "@media ".concat(m[2], " {").concat(m[1], "}"), m[2] = t) : m[2] = t), a && (m[4] ? (m[1] = "@supports (".concat(m[4], ") {").concat(m[1], "}"), m[4] = a) : m[4] = "".concat(a)), n.push(m))
            }
          }, n
        }
      },
      667: e => {
        e.exports = function (e, n) {
          return n || (n = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), n.hash && (e += n.hash), /["'() \t\n]|(%20)/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
        }
      },
      81: e => {
        e.exports = function (e) {
          return e[1]
        }
      },
      379: e => {
        var n = [];

        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break
            } return t
        }

        function r(e, r) {
          for (var c = {}, i = [], o = 0; o < e.length; o++) {
            var s = e[o],
              d = r.base ? s[0] + r.base : s[0],
              m = c[d] || 0,
              l = "".concat(d, " ").concat(m);
            c[d] = m + 1;
            var p = t(l),
              u = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5]
              };
            if (-1 !== p) n[p].references++, n[p].updater(u);
            else {
              var h = a(u, r);
              r.byIndex = o, n.splice(o, 0, {
                identifier: l,
                updater: h,
                references: 1
              })
            }
            i.push(l)
          }
          return i
        }

        function a(e, n) {
          var t = n.domAPI(n);
          return t.update(e),
            function (n) {
              if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
                t.update(e = n)
              } else t.remove()
            }
        }
        e.exports = function (e, a) {
          var c = r(e = e || [], a = a || {});
          return function (e) {
            e = e || [];
            for (var i = 0; i < c.length; i++) {
              var o = t(c[i]);
              n[o].references--
            }
            for (var s = r(e, a), d = 0; d < c.length; d++) {
              var m = t(c[d]);
              0 === n[m].references && (n[m].updater(), n.splice(m, 1))
            }
            c = s
          }
        }
      },
      569: e => {
        var n = {};
        e.exports = function (e, t) {
          var r = function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head
              } catch (e) {
                t = null
              }
              n[e] = t
            }
            return n[e]
          }(e);
          if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(t)
        }
      },
      216: e => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
        }
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n)
        }
      },
      795: e => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              ! function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
                var a = void 0 !== t.layer;
                a && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, a && (r += "}"), t.media && (r += "}"), t.supports && (r += "}");
                var c = t.sourceMap;
                c && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c)))), " */")), n.styleTagTransform(r, e, n.options)
              }(n, e, t)
            },
            remove: function () {
              ! function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
              }(n)
            }
          }
        }
      },
      589: e => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e))
          }
        }
      },
      767: (e, n, t) => {
        e.exports = t.p + "f1ffb1cb46d13c9dd588.png"
      },
      177: (e, n, t) => {
        e.exports = t.p + "90b622fc8bcbf788d173.png"
      }
    },
    n = {};

  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var c = n[r] = {
      id: r,
      exports: {}
    };
    return e[r](c, c.exports, t), c.exports
  }
  t.m = e, t.n = e => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, {
      a: n
    }), n
  }, t.d = (e, n) => {
    for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: n[r]
    })
  }, t.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
    var e;
    t.g.importScripts && (e = t.g.location + "");
    var n = t.g.document;
    if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
      var r = n.getElementsByTagName("script");
      r.length && (e = r[r.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), t.p = e
  })(), t.b = document.baseURI || self.location.href, t.nc = void 0;
  var r = {};
  (() => {
    t.d(r, {
      k: () => qe
    });
    var e = t(379),
      n = t.n(e),
      a = t(795),
      c = t.n(a),
      i = t(569),
      o = t.n(i),
      s = t(565),
      d = t.n(s),
      m = t(216),
      l = t.n(m),
      p = t(589),
      u = t.n(p),
      h = t(426),
      g = {};
    g.styleTagTransform = u(), g.setAttributes = d(), g.insert = o().bind(null, "head"), g.domAPI = c(), g.insertStyleElement = l(), n()(h.Z, g), h.Z && h.Z.locals && h.Z.locals;
    const f = document.createElement("header"),
      v = document.createElement("div"),
      E = document.createElement("h1"),
      b = document.createElement("img"),
      L = document.createElement("nav"),
      x = document.createElement("ul"),
      T = document.createElement("li"),
      k = document.createElement("li"),
      y = document.createElement("li"),
      A = document.createElement("li"),
      w = document.createElement("footer"),
      S = document.createElement("div"),
      C = document.createElement("img"),
      I = document.createElement("span"),
      M = document.createElement("div"),
      O = document.createElement("span"),
      H = document.createElement("span"),
      R = document.createElement("span"),
      N = document.createElement("span"),
      j = document.createElement("div"),
      z = document.createElement("div"),
      U = document.createElement("div"),
      B = document.createElement("h1"),
      P = document.createElement("h2"),
      D = document.createElement("div"),
      _ = document.createElement("button"),
      F = document.createElement("div");
    const G = document.createElement("div"),
      K = document.createElement("div"),
      Z = document.createElement("div"),
      $ = document.createElement("img"),
      q = document.createElement("div"),
      Q = document.createElement("p"),
      V = document.createElement("p"),
      J = document.createElement("p"),
      W = document.createElement("img"),
      Y = document.createElement("div"),
      X = document.createElement("div"),
      ee = document.createElement("div"),
      ne = document.createElement("p"),
      te = document.createElement("div"),
      re = document.createElement("h1"),
      ae = document.createElement("div"),
      ce = document.createElement("div"),
      ie = document.createElement("div"),
      oe = document.createElement("img"),
      se = document.createElement("div"),
      de = document.createElement("p"),
      me = document.createElement("div"),
      le = document.createElement("div"),
      pe = document.createElement("img"),
      ue = document.createElement("div"),
      he = document.createElement("p"),
      ge = document.createElement("div"),
      fe = document.createElement("div"),
      ve = document.createElement("img"),
      Ee = document.createElement("div"),
      be = document.createElement("p"),
      Le = document.createElement("div"),
      xe = document.createElement("div"),
      Te = document.createElement("img"),
      ke = document.createElement("div"),
      ye = document.createElement("p"),
      Ae = document.createElement("h1"),
      we = document.createElement("div"),
      Se = document.createElement("div"),
      Ce = document.createElement("div"),
      Ie = document.createElement("img"),
      Me = document.createElement("div"),
      Oe = document.createElement("p"),
      He = document.createElement("div"),
      Re = document.createElement("div"),
      Ne = document.createElement("img"),
      je = document.createElement("div"),
      ze = document.createElement("p"),
      Ue = document.createElement("div"),
      Be = document.createElement("div"),
      Pe = document.createElement("img"),
      De = document.createElement("div"),
      _e = document.createElement("p"),
      Fe = document.createElement("div"),
      Ge = document.createElement("div"),
      Ke = document.createElement("img"),
      Ze = document.createElement("div"),
      $e = document.createElement("p"),
      qe = document.querySelector("#content");

    function Qe() {
      G.remove(), Y.remove(), te.remove(), b.src = "../assets/chai-tea.png", b.classList.add("header-img"), v.classList.add("heading-container"), E.innerText = "CHAI TAPRI", T.innerText = "HOME", k.innerText = "MENU", y.innerText = "ABOUT", A.innerText = "CONTACT", qe.append(f), f.append(v), v.append(b, E), f.append(L), L.append(x), x.append(T, k, y, A), j.classList.add("home-container"), z.classList.add("home-text-container"), U.classList.add("home-header-container"), F.classList.add("home-image-container"), D.classList.add("home-menu-btn-container"), _.classList.add("home-menu-btn"), B.innerText = "GET READY TO TASTE THE BEST CHAI IN THE WORLD.", P.innerText = "AND GRAB A QUICK BITE", _.innerText = "DISCOVER MENU", j.append(z, F), z.append(U, D), U.append(B, P), D.append(_), qe.append(j), C.src = "../assets/github.png", I.innerText = "@Sudeeeep", O.innerText = "HOME", H.innerText = "MENU", R.innerText = "ABOUT", N.innerText = "CONTACT", S.classList.add("git-hub-container"), C.classList.add("git-hub-logo"), I.classList.add("git-hub-username"), M.classList.add("footer-nav-container"), O.classList.add("footer-nav"), H.classList.add("footer-nav"), R.classList.add("footer-nav"), N.classList.add("footer-nav"), qe.appendChild(w), w.append(M, S), M.append(O, H, R, N), S.append(C, I)
    }

    function Ve() {
      j.remove(), G.remove(), Y.remove(), re.innerText = "CHAI", Ae.innerText = "SNACKS", de.innerText = "ADRAK CHAI", he.innerText = "CHOCOLATE CHAI", be.innerText = "ROSE CHAI", ye.innerText = "KESAR CHAI", Oe.innerText = "BUN MASKA", ze.innerText = "MASALA FRIES", _e.innerText = "MASALA TOAST", $e.innerText = "VEGETABLE MAGGIE", oe.src = "../assets/adrak-chai.png", pe.src = "../assets/chocolate-chai.png", ve.src = "../assets/rose-chai.png", Te.src = "../assets/kesar-chai.png", Ie.src = "../assets/bun-maska.png", Ne.src = "../assets/fries.png", Pe.src = "../assets/masala-toast.png", Ke.src = "../assets/masala-maggi.png", te.classList.add("menu-container"), re.classList.add("chai-header"), ae.classList.add("chai-menu-container"), ce.classList.add("adrak-chai-container"), ie.classList.add("adrak-chai-img-container"), oe.classList.add("adrak-chai-img"), se.classList.add("adrak-chai-text-container"), de.classList.add("adrak-chai-text"), me.classList.add("chocolate-chai-container"), le.classList.add("chocolate-chai-img-container"), pe.classList.add("chocolate-chai-img"), ue.classList.add("chocolate-chai-text-container"), he.classList.add("chocolate-chai-text"), ge.classList.add("rose-chai-container"), fe.classList.add("rose-chai-img-container"), ve.classList.add("rose-chai-img"), Ee.classList.add("rose-chai-text-container"), be.classList.add("rose-chai-text"), Le.classList.add("kesar-chai-container"), xe.classList.add("kesar-chai-img-container"), Te.classList.add("kesar-chai-img"), ke.classList.add("kesar-chai-text-container"), ye.classList.add("kesar-chai-text"), Ae.classList.add("snacks-header"), we.classList.add("snacks-menu-container"), Se.classList.add("bun-maska-container"), Ce.classList.add("bun-maska-img-container"), Ie.classList.add("bun-maska-img"), Me.classList.add("bun-maska-text-container"), Oe.classList.add("bun-maska-text"), He.classList.add("fries-container"), Re.classList.add("fries-img-container"), Ne.classList.add("fries-img"), je.classList.add("fries-text-container"), ze.classList.add("fries-text"), Ue.classList.add("masala-toast-container"), Be.classList.add("masala-toast-img-container"), Pe.classList.add("masala-toast-img"), De.classList.add("masala-toast-text-container"), _e.classList.add("masala-toast-text"), Fe.classList.add("maggie-container"), Ge.classList.add("maggie-img-container"), Ke.classList.add("maggie-img"), Ze.classList.add("maggie-text-container"), $e.classList.add("maggie-text"), qe.append(te), te.append(re, ae, Ae, we), ae.append(ce, me, ge, Le), we.append(Se, He, Ue, Fe), ce.append(ie, se), ie.append(oe), se.append(de), me.append(le, ue), le.append(pe), ue.append(he), ge.append(fe, Ee), fe.append(ve), Ee.append(be), Le.append(xe, ke), xe.append(Te), ke.append(ye), Se.append(Ce, Me), Ce.append(Ie), Me.append(Oe), He.append(Re, je), Re.append(Ne), je.append(ze), Ue.append(Be, De), Be.append(Pe), De.append(_e), Fe.append(Ge, Ze), Ge.append(Ke), Ze.append($e)
    }
    T.addEventListener("click", Qe), A.addEventListener("click", (function () {
      j.remove(), Y.remove(), te.remove(), $.src = "../assets/call_FILL.png", W.src = "../assets/pin_drop.png", Q.innerText = "+91 44855221", V.innerText = "+91 44865331", J.innerText = "221B, Baker Street", G.classList.add("contact-container"), K.classList.add("number-container"), Z.classList.add("address-container"), q.classList.add("contact-number-container"), Q.classList.add("first-number"), V.classList.add("second-number"), $.classList.add("call-icon"), W.classList.add("map-icon"), J.classList.add("address"), qe.append(G), G.append(K, Z), Z.append(W, J), K.append($, q), q.append(Q, V)
    })), y.addEventListener("click", (function () {
      j.remove(), G.remove(), te.remove(), ne.innerText = "Being somebody who loves chai, I've come across varied chai-lovers. Some like it kadak, while some like it with more milk. Some like it plain & simple while others like it with masala! Among these categories, are those who only like the classic cutting chai that the chai wala bhaiya sell on the tapris. Our aim at CHAI TAPRI is to provide customers the experience of the beloved  local tapri chai and a few quick snacks to go with the chai.", Y.classList.add("about-container"), X.classList.add("about-img-container"), ee.classList.add("about-text-container"), ne.classList.add("about-text"), qe.append(Y), Y.append(X, ee), ee.append(ne)
    })), k.addEventListener("click", Ve), v.addEventListener("click", Qe), _.addEventListener("click", Ve), Qe()
  })()
})();