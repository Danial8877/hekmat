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
    '$(u).j(4(){$("#0-3").h(4(e){e.8();$("#0-2").1("9","6(-i, k.l)");$("#0-2").1("7","c");$("#0-3").1("5","m");$("#0-3").1("5","c f g");$("#0-2").1("b","o");$("#0-2").1("a","p")});$("#0-3").q(4(e){e.8();$("#0-2").1("9","6(-r, s)");$("#0-2").1("7","d");$("#0-2").1("b","t");$("#0-3").1("5","d f g");$("#0-2").1("a","n")})});',
    31,
    31,
    "login|css|lable|input|function|border|translate|color|preventDefault|transform|width|fontSize|blue|red||solid|2px|focus|13px|ready|14|5px|none|150px|14px|45px|blur|15px|43px|17px|document".split(
      "|"
    ),
    0,
    {}
  )
);
