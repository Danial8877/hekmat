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
    '2 n=3.4("u-5-6");2 h=3.4("5-6");7 p(e){e.8();9.b({c:" خرید شما انجام شد ",d:" فروشگاه مجازی حکمت ",f:"r",o:"<a i=\'j: k;\' l=\'./s.g\' > تایید </a>",})}7 0(e){e.8();9.b({c:" خرید شما لغو شد ",d:" فروشگاه مجازی حکمت ",f:"q",o:"<a i=\'j: k;\' l=\'./t.g\' > تایید </a>",})}h.m("1",p);n.m("1",0);',
    31,
    31,
    "not_ok_buy|click|let|document|getElementById|ok|buy|function|preventDefault|Swal||fire|title|text||icon|html|okBuy|style|color|white|href|addEventListener|notOkBuy|confirmButtonText|ok_buy|error|success|orders|index|not".split(
      "|"
    ),
    0,
    {}
  )
);
