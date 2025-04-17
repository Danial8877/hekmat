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
    'k 5=6 7(".8",{9:0,a:{4:c,d:0,},b:{f:".1-3-g",h:".1-3-i",},2:{j:".1-2",e:0,},});',
    21,
    21,
    "true|swiper|pagination|button|delay|swp_img|new|Swiper|swp|loop|autoplay|navigation|3000|disableOnInteraction|clickable|nextEl|prev|prevEl|next|el|const".split(
      "|"
    ),
    0,
    {}
  )
);
