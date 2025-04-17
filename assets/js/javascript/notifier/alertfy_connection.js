eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
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
    "y(()=>{e.A('D','F','H-L');e.R(\" <6 M='N://s.q.t/l/6' f='5' g='5' h='i' k='9 9-m-n' o='0 0 5 5'><a d='p u 7 0 1 1 8 r 7 0 0 1 0 j v 8 0 1 0 8 w 8 0 0 0 0 5'/><a d='K.J I 1 0 1 1 2 0 1 1 0 0 1-2 G.1 4.E.b.b 0 1 1 1.8 C-.B 3.z.c.c 0 0 1-1.1 x'/></6> اتصال شما قطع شد \")},O);y(()=>{e.A('D','F','H-L');e.Q(\" <6 M='N://s.q.t/l/6' f='5' g='5' h='i' k='9 9-m-n' o='0 0 5 5'><a d='p u 7 0 1 1 8 r 7 0 0 1 0 j v 8 0 1 0 8 w 8 0 0 0 0 5'/><a d='K.J I 1 0 1 1 2 0 1 1 0 0 1-2 G.1 4.E.b.b 0 1 1 1.8 C-.B 3.z.c.c 0 0 1-1.1 x'/></6> اتصال شما وصل شد \")},P);",
    54,
    54,
    "|||||16|svg|||bi|path|905|552||alertify|width|height|fill|currentColor|14m0|class|2000|exclamation|circle|viewBox|M8|w3|1a7|www|org|15A7|1A8|0a8|0z|setTimeout|507a|set|35|0l|notifier|995a|position|0M7|top|11a1|002|M7|right|xmlns|http|40000|60000|success|error".split(
      "|"
    ),
    0,
    {}
  )
);
