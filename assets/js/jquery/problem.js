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
    '$(p).o(d(){$("#n-8 a:9-1").0("b","c");$("#m-8 a:9-1").0("b","c");$(".i h").g(d(e){e.f()});$("#j 7:6-1(2)").0("5-4","3");$("#k 7:6-1(2)").0("5-4","3");$("#l 7:6-1(2)").0("5-4","3")});',
    26,
    26,
    "css|child||50px|top|margin|nth|article|options|first||display|none|function||preventDefault|click|botton|drop|order|debt|favorite|news|bestsellers|ready|document".split(
      "|"
    ),
    0,
    {}
  )
);
