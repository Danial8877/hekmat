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
    'i 6=9 a(".b",{c:d,e:f,g:{h:".6-7-8",j:".6-7-k",},0:1.2,l:{m:{0:1.5,},n:{0:2.5,},o:{0:3.5,},p:{0:4.5,},},});',
    26,
    26,
    "slidesPerView||||||swiper|button|next|new|Swiper|mySwiper|loop|false|spaceBetween|15|navigation|nextEl|const|prevEl|prev|breakpoints|480|640|960|1200".split(
      "|"
    ),
    0,
    {}
  )
);
