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
    'c 3=b a(".3-2",{9:{8:7,6:0,},1:{5:".2-1",4:0,},});',
    13,
    13,
    "true|pagination|swiper|swp|clickable|el|disableOnInteraction|3000|delay|autoplay|Swiper|new|const".split(
      "|"
    ),
    0,
    {}
  )
);
