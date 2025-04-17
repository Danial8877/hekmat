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
    '$(d).c(3(){$("#0").b(3(2){2.6();$("#0").5("4","1.a 9 8")});$("#0").7(3(2){2.6();$("#0").5("4","")})});',
    14,
    14,
    "description||e|function|border|css|preventDefault|blur|blue|solid|5px|focus|ready|document".split(
      "|"
    ),
    0,
    {}
  )
);
