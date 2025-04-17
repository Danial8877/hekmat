eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c.toString(36);
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[c.toString(a)] = k[c] || c.toString(a);
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    'c 9=d.h("0-a-1");c 8=d.h("0-a-2");c 7=d.h("0-a-3");i k(e){9.5.f("0-4");8.5.6("0-4");7.5.6("0-4")}i l(e){9.5.6("0-4");8.5.f("0-4");7.5.6("0-4")}i j(e){9.5.6("0-4");8.5.6("0-4");7.5.f("0-4")}9.b("g",k);8.b("g",l);7.b("g",j);',
    22,
    22,
    "btn||||active|classList|remove|btn3|btn2|btn1|nav|addEventListener|let|document||add|click|getElementById|function|btn_3|btn_1|btn_2".split(
      "|"
    ),
    0,
    {}
  )
);
