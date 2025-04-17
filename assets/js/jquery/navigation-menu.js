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
    '$(m).d(4(){$(".6-6").2("3","7");$(".1").e(4(){$(".1 8").2("3","f");$(".1 a i").2("5","9(g)");$(".1 a i").2("c","0.j k-l-h")},4(){$(".1 8").2("3","7");$(".1 a i").2("5","9(b)")})});',
    23,
    23,
    "|parent|css|display|function|transform|sub|none|ul|rotate||0deg|transition|ready|hover|block|180deg|out||5s|ease|in|document".split(
      "|"
    ),
    0,
    {}
  )
);
