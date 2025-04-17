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
    '$(c).b(2(){$(".1").a(2(0){0.6();$("#5-1").4("3","9")});$(".1").8(2(0){0.6();$("#5-1").4("3","7")})});',
    13,
    13,
    "e|search|function|color|css|icon|preventDefault|red|blur|blue|focus|ready|document".split(
      "|"
    ),
    0,
    {}
  )
);
