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
    'g 1=3.4("0");5 0(e){e.6();7.2({8:" گزارش شما ثبت شد ",a:" فروشگاه مجازی حکمت ",b:"c",d:" تایید ",})}1.f("9",0);',
    17,
    17,
    "low_price|lowPrice|fire|document|getElementById|function|preventDefault|Swal|title|click|text|icon|warning|confirmButtonText||addEventListener|let".split(
      "|"
    ),
    0,
    {}
  )
);
