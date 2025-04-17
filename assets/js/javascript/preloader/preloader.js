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
    '7 3=6.5("c");7 2=6.5("b");3.1.0="";2.1.0="4";a.9=8(){3.1.0="4";2.1.0=""};',
    13,
    13,
    "display|style|after|before|none|getElementById|document|let|function|onload|window|after_loader|before_loader".split(
      "|"
    ),
    0,
    {}
  )
);
