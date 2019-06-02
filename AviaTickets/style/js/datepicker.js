!(function(t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof exports
    ? t(require("jquery"))
    : t(jQuery);
})(function(Nt) {
  "use strict";
  (Nt.DatePicker = function(t, M) {
    var P,
      F,
      Z,
      S,
      x,
      Y,
      I,
      z,
      j,
      m,
      N,
      H,
      O,
      L,
      T,
      R,
      W,
      B,
      E,
      Q,
      J,
      G,
      U,
      V,
      $,
      q,
      d,
      X,
      K,
      tt,
      et,
      st,
      it,
      nt,
      at,
      i,
      rt,
      ot,
      dt,
      ct,
      lt,
      gt,
      c,
      _t,
      ht,
      pt,
      ut = {
        always_visible: !(this.version = "1.9.13"),
        container: Nt("body"),
        current_date: !1,
        custom_classes: !1,
        days: [
          "ВС",
          "ПН",
          "ВТ",
          "СР",
          "ЧТ",
          "ПТ",
          "СБ"
        ],
        days_abbr: !1,
        default_position: "above",
        direction: 0,
        disable_time_picker: !1,
        disabled_dates: !1,
        enabled_dates: !1,
        enabled_hours: !1,
        enabled_minutes: !1,
        enabled_seconds: !1,
        fast_navigation: !0,
        first_day_of_week: 1,
        format: "Y-m-d",
        header_captions: { days: "F, Y", months: "Y", years: "Y1 - Y2" },
        icon_margin: !1,
        icon_position: "right",
        inside: !0,
        lang_clear_date: "Очистить дату",
        months: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        months_abbr: !1,
        navigation: ["&#9664;", "&#9654;", "&#9650;", "&#9660;"],
        offset: [5, -5],
        open_icon_only: !1,
        open_on_focus: !1,
        pair: !1,
        readonly_element: !0,
        rtl: !1,
        select_other_months: !1,
        show_clear_date: 0,
        show_icon: !0,
        show_other_months: !0,
        show_select_today: "Сегодня",
        show_week_number: !1,
        start_date: !1,
        strict: !1,
        view: "days",
        weekend_days: [0, 6],
        zero_pad: !1,
        onChange: null,
        onClear: null,
        onOpen: null,
        onClose: null,
        onSelect: null
      },
      mt = {},
      ft = {},
      bt = !1,
      yt = "",
      vt = !1,
      wt = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
      kt = this,
      Dt = Nt(t),
      e = function(t) {
        var e,
          s,
          i,
          a,
          n = {
            days: ["d", "j", "D"],
            months: ["F", "m", "M", "n", "t"],
            years: ["o", "Y", "y"],
            hours: ["G", "g", "H", "h"],
            minutes: ["i"],
            seconds: ["s"],
            ampm: ["A", "a"]
          },
          r = null,
          o = !1;
        for (i = 0; i < 3; i++)
          yt += Math.floor(65536 * (1 + Math.random())).toString(16);
        if (((L = []), (T = []), !t))
          for (e in ((kt.settings = Nt.extend(
            {},
            ut,
            Nt.fn.DatePicker.defaults,
            M
          )),
          (ft.readonly = Dt.attr("readonly")),
          (ft.style = Dt.attr("style")),
          (ft.padding_left = parseInt(Dt.css("paddingLeft"), 10) || 0),
          (ft.padding_right = parseInt(Dt.css("paddingRight"), 10) || 0),
          Dt.data()))
            0 === e.indexOf("zdp_") &&
              ((e = e.replace(/^zdp\_/, "")),
              void 0 !== ut[e] &&
                (kt.settings[e] =
                  "pair" === e
                    ? Nt(Dt.data("zdp_" + e))
                    : Dt.data("zdp_" + e)));
        for (
          kt.settings.readonly_element
            ? Dt.attr("readonly", "readonly")
            : Dt.removeAttr("readonly"),
            lt = !1,
            ht = [];
          !o;

        ) {
          for (r in n)
            Nt.each(n[r], function(t, e) {
              var s, i;
              if (-1 < kt.settings.format.indexOf(e))
                if ("days" === r) ht.push("days");
                else if ("months" === r) ht.push("months");
                else if ("years" === r) ht.push("years");
                else if (
                  ("hours" === r ||
                    "minutes" === r ||
                    "seconds" === r ||
                    "ampm" === r) &&
                  !kt.settings.disable_time_picker
                )
                  if (
                    (lt || ((lt = { is12hour: !1 }), ht.push("time")),
                    "hours" === r)
                  )
                    for (
                      "g" === (lt.hour_format = e) || "h" === e
                        ? ((i = 12), (lt.is12hour = !0))
                        : (i = 24),
                        lt.hours = [],
                        s = 12 === i ? 1 : 0;
                      s < (12 === i ? 13 : i);
                      s++
                    )
                      (!Nt.isArray(kt.settings.enabled_hours) ||
                        -1 < Nt.inArray(s, kt.settings.enabled_hours)) &&
                        lt.hours.push(s);
                  else if ("minutes" === r)
                    for (lt.minutes = [], s = 0; s < 60; s++)
                      (!Nt.isArray(kt.settings.enabled_minutes) ||
                        -1 < Nt.inArray(s, kt.settings.enabled_minutes)) &&
                        lt.minutes.push(s);
                  else if ("seconds" === r)
                    for (lt.seconds = [], s = 0; s < 60; s++)
                      (!Nt.isArray(kt.settings.enabled_seconds) ||
                        -1 < Nt.inArray(s, kt.settings.enabled_seconds)) &&
                        lt.seconds.push(s);
                  else lt.ampm = ["am", "pm"];
            });
          lt.hour_format && lt.ampm && !1 === lt.is12hour
            ? (kt.settings.format = kt.settings.format.replace(
                lt.hour_format,
                lt.hour_format.toLowerCase()
              ))
            : (o = !0);
        }
        for (i in (0 === ht.length && (ht = ["years", "months", "days"]),
        -1 === Nt.inArray(kt.settings.view, ht) &&
          (kt.settings.view = ht[ht.length - 1]),
        (I = []),
        kt.settings.custom_classes))
          kt.settings.custom_classes.hasOwnProperty(i) &&
            -1 === I.indexOf(i) &&
            I.push(i);
        for (a = 0; a < 2 + I.length; a++)
          (s =
            0 === a
              ? kt.settings.disabled_dates
              : 1 === a
              ? kt.settings.enabled_dates
              : kt.settings.custom_classes[I[a - 2]]),
            Nt.isArray(s) &&
              0 < s.length &&
              Nt.each(s, function() {
                var t,
                  e,
                  s,
                  i,
                  n = this.split(" ");
                for (t = 0; t < 4; t++) {
                  for (
                    n[t] || (n[t] = "*"),
                      n[t] =
                        -1 < n[t].indexOf(",")
                          ? n[t].split(",")
                          : new Array(n[t]),
                      e = 0;
                    e < n[t].length;
                    e++
                  )
                    if (
                      -1 < n[t][e].indexOf("-") &&
                      null !== (i = n[t][e].match(/^([0-9]+)\-([0-9]+)/))
                    ) {
                      for (s = It(i[1]); s <= It(i[2]); s++)
                        -1 === Nt.inArray(s, n[t]) && n[t].push(s + "");
                      n[t].splice(e, 1);
                    }
                  for (e = 0; e < n[t].length; e++)
                    n[t][e] = isNaN(It(n[t][e])) ? n[t][e] : It(n[t][e]);
                }
                0 === a
                  ? L.push(n)
                  : 1 === a
                  ? T.push(n)
                  : (void 0 === mt[I[a - 2]] && (mt[I[a - 2]] = []),
                    mt[I[a - 2]].push(n));
              });
        var d,
          c,
          l =
            !1 !== kt.settings.current_date
              ? new Date(kt.settings.current_date)
              : new Date(),
          g = kt.settings.reference_date
            ? kt.settings.reference_date
            : Dt.data("zdp_reference_date") &&
              void 0 !== Dt.data("zdp_reference_date")
            ? Dt.data("zdp_reference_date")
            : l;
        if (
          ((R = ot = void 0),
          (B = g.getMonth()),
          (x = l.getMonth()),
          (E = g.getFullYear()),
          (Y = l.getFullYear()),
          (W = g.getDate()),
          (S = l.getDate()),
          !0 === kt.settings.direction)
        )
          ot = g;
        else if (!1 === kt.settings.direction)
          (V = (R = g).getMonth()), ($ = R.getFullYear()), (U = R.getDate());
        else if (
          (!Nt.isArray(kt.settings.direction) &&
            Ft(kt.settings.direction) &&
            0 < It(kt.settings.direction)) ||
          (Nt.isArray(kt.settings.direction) &&
            ((d = At(kt.settings.direction[0])) ||
              !0 === kt.settings.direction[0] ||
              (Ft(kt.settings.direction[0]) && 0 < kt.settings.direction[0])) &&
            ((c = At(kt.settings.direction[1])) ||
              !1 === kt.settings.direction[1] ||
              (Ft(kt.settings.direction[1]) && 0 <= kt.settings.direction[1])))
        )
          (ot =
            d ||
            new Date(
              E,
              B,
              W +
                (Nt.isArray(kt.settings.direction)
                  ? It(
                      !0 === kt.settings.direction[0]
                        ? 0
                        : kt.settings.direction[0]
                    )
                  : It(kt.settings.direction))
            )),
            (B = ot.getMonth()),
            (E = ot.getFullYear()),
            (W = ot.getDate()),
            c && +ot <= +c
              ? (R = c)
              : !c &&
                !1 !== kt.settings.direction[1] &&
                Nt.isArray(kt.settings.direction) &&
                (R = new Date(E, B, W + It(kt.settings.direction[1]))),
            R && ((V = R.getMonth()), ($ = R.getFullYear()), (U = R.getDate()));
        else if (
          (!Nt.isArray(kt.settings.direction) &&
            Ft(kt.settings.direction) &&
            It(kt.settings.direction) < 0) ||
          (Nt.isArray(kt.settings.direction) &&
            (!1 === kt.settings.direction[0] ||
              (Ft(kt.settings.direction[0]) && kt.settings.direction[0] < 0)) &&
            ((d = At(kt.settings.direction[1])) ||
              (Ft(kt.settings.direction[1]) && 0 <= kt.settings.direction[1])))
        )
          (R = new Date(
            E,
            B,
            W +
              (Nt.isArray(kt.settings.direction)
                ? It(
                    !1 === kt.settings.direction[0]
                      ? 0
                      : kt.settings.direction[0]
                  )
                : It(kt.settings.direction))
          )),
            (V = R.getMonth()),
            ($ = R.getFullYear()),
            (U = R.getDate()),
            d && +d < +R
              ? (ot = d)
              : !d &&
                Nt.isArray(kt.settings.direction) &&
                (ot = new Date($, V, U - It(kt.settings.direction[1]))),
            ot &&
              ((B = ot.getMonth()), (E = ot.getFullYear()), (W = ot.getDate()));
        else if (
          Nt.isArray(kt.settings.disabled_dates) &&
          0 < kt.settings.disabled_dates.length
        )
          for (var _ in L)
            if (
              -1 < Nt.inArray("*", L[_][0]) &&
              -1 < Nt.inArray("*", L[_][1]) &&
              -1 < Nt.inArray("*", L[_][2]) &&
              -1 < Nt.inArray("*", L[_][3])
            ) {
              var h = [];
              if (
                (Nt.each(T, function() {
                  var t = this;
                  "*" !== t[2][0] &&
                    h.push(
                      parseInt(
                        t[2][0] +
                          ("*" === t[1][0] ? "12" : Yt(t[1][0], 2)) +
                          ("*" === t[0][0]
                            ? "*" === t[1][0]
                              ? "31"
                              : new Date(t[2][0], t[1][0], 0).getDate()
                            : Yt(t[0][0], 2)),
                        10
                      )
                    );
                }),
                h.sort(),
                0 < h.length)
              ) {
                var p = (h[0] + "").match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                (E = parseInt(p[1], 10)),
                  (B = parseInt(p[2], 10) - 1),
                  (W = parseInt(p[3], 10));
              }
              break;
            }
        if (Pt(E, B, W)) {
          for (; Pt(E); ) ot ? (E++, (B = 0)) : (E--, (B = 11));
          for (; Pt(E, B); )
            ot ? (B++, (W = 1)) : (B--, (W = new Date(E, B + 1, 0).getDate())),
              11 < B
                ? (E++, (B = 0), (W = 1))
                : B < 0 &&
                  (E--, (B = 11), (W = new Date(E, B + 1, 0).getDate()));
          for (; Pt(E, B, W); )
            ot ? W++ : W--,
              (l = new Date(E, B, W)),
              (E = l.getFullYear()),
              (B = l.getMonth()),
              (W = l.getDate());
          (l = new Date(E, B, W)),
            (E = l.getFullYear()),
            (B = l.getMonth()),
            (W = l.getDate());
        }
        kt.settings.start_date &&
          "object" == typeof kt.settings.start_date &&
          kt.settings.start_date instanceof Date &&
          (kt.settings.start_date = Mt(kt.settings.start_date));
        var u = At(
          Dt.val() || (kt.settings.start_date ? kt.settings.start_date : "")
        );
        if (
          (u &&
            kt.settings.strict &&
            Pt(u.getFullYear(), u.getMonth(), u.getDate()) &&
            Dt.val(""),
          t || (void 0 === ot && void 0 === u) || zt(void 0 !== u ? u : ot),
          !(kt.settings.always_visible instanceof jQuery))
        ) {
          if (!t) {
            if (kt.settings.show_icon) {
              "firefox" === jt.name &&
                Dt.is('input[type="text"]') &&
                "inline" === Dt.css("display") &&
                Dt.css("display", "inline-block");
              var m = parseInt(Dt.css("marginTop"), 10) || 0,
                f = parseInt(Dt.css("marginRight"), 10) || 0,
                b = parseInt(Dt.css("marginBottom"), 10) || 0,
                y = parseInt(Dt.css("marginLeft"), 10) || 0,
                v = Nt(
                  '<span class="DatePicker_Icon_Wrapper"></span>'
                ).css({
                  display: Dt.css("display"),
                  position:
                    "static" === Dt.css("position")
                      ? "relative"
                      : Dt.css("position"),
                  float: Dt.css("float"),
                  top: Dt.css("top"),
                  right: Dt.css("right"),
                  bottom: Dt.css("bottom"),
                  left: Dt.css("left"),
                  marginTop: m < 0 ? m : 0,
                  marginRight: f < 0 ? f : 0,
                  marginBottom: b < 0 ? b : 0,
                  marginLeft: y < 0 ? y : 0,
                  paddingTop: m,
                  paddingRight: f,
                  paddingBottom: b,
                  paddingLeft: y
                });
              "block" === Dt.css("display") &&
                v.css("width", Dt.outerWidth(!0)),
                Dt.wrap(v).css({
                  position: "relative",
                  float: "none",
                  top: "auto",
                  right: "auto",
                  bottom: "auto",
                  left: "auto",
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0
                }),
                (G = Nt(
                  '<button type="button" class="DatePicker_Icon' +
                    ("disabled" === Dt.attr("disabled")
                      ? " DatePicker_Icon_Disabled"
                      : "") +
                    '">Pick a date</button>'
                )),
                (kt.icon = G),
                (F = kt.settings.open_icon_only ? G : G.add(Dt));
            } else F = Dt;
            F.on(
              "click.DatePicker_" +
                yt +
                (kt.settings.open_on_focus
                  ? " focus.DatePicker_" + yt
                  : ""),
              function() {
                z.hasClass("dp_hidden") &&
                  !Dt.attr("disabled") &&
                  (!vt || kt.settings.readonly_element
                    ? kt.show()
                    : (clearTimeout(dt),
                      (dt = setTimeout(function() {
                        kt.show();
                      }, 600))));
              }
            ),
              F.on("keydown.DatePicker_" + yt, function(t) {
                9 !== t.keyCode || z.hasClass("dp_hidden") || kt.hide();
              }),
              !kt.settings.readonly_element &&
                kt.settings.pair &&
                Dt.on("blur.DatePicker_" + yt, function() {
                  var t;
                  (t = At(Nt(this).val())) &&
                    !Pt(t.getFullYear(), t.getMonth(), t.getDate()) &&
                    zt(t);
                }),
              void 0 !== G && G.insertAfter(Dt);
          }
          if (void 0 !== G) {
            G.attr("style", "");
            var w = Dt.outerWidth(),
              k = Dt.outerHeight(),
              D = G.outerWidth(),
              A = G.outerHeight();
            G.css("top", (k - A) / 2),
              kt.settings.inside
                ? "right" === kt.settings.icon_position
                  ? (G.css(
                      "right",
                      !1 !== kt.settings.icon_margin
                        ? kt.settings.icon_margin
                        : ft.padding_right
                    ),
                    Dt.css(
                      "paddingRight",
                      2 *
                        (!1 !== kt.settings.icon_margin
                          ? kt.settings.icon_margin
                          : ft.padding_right) +
                        D
                    ))
                  : (G.css(
                      "left",
                      !1 !== kt.settings.icon_margin
                        ? kt.settings.icon_margin
                        : ft.padding_left
                    ),
                    Dt.css(
                      "paddingLeft",
                      2 *
                        (!1 !== kt.settings.icon_margin
                          ? kt.settings.icon_margin
                          : ft.padding_left) +
                        D
                    ))
                : G.css(
                    "left",
                    w +
                      (!1 !== kt.settings.icon_margin
                        ? kt.settings.icon_margin
                        : ft.padding_left)
                  ),
              G.removeClass("DatePicker_Icon_Disabled"),
              "disabled" === Dt.attr("disabled") &&
                G.addClass("DatePicker_Icon_Disabled");
          }
        }
        if (
          ((rt =
            !1 !== kt.settings.show_select_today &&
            -1 < Nt.inArray("days", ht) &&
            !Pt(Y, x, S) &&
            kt.settings.show_select_today),
          t)
        )
          return (
            Nt(".dp_previous", z).html(kt.settings.navigation[0]),
            Nt(".dp_next", z).html(kt.settings.navigation[1]),
            Nt(".dp_time_controls_increase .dp_time_control", z).html(
              kt.settings.navigation[2]
            ),
            Nt(".dp_time_controls_decrease .dp_time_control", z).html(
              kt.settings.navigation[3]
            ),
            Nt(".dp_clear", z).html(kt.settings.lang_clear_date),
            Nt(".dp_today", z).html(kt.settings.show_select_today),
            void (
              z.is(":visible") &&
              ((i = kt.settings.view),
              (kt.settings.view = _t),
              kt.show(!1),
              (kt.settings.view = i))
            )
          );
        Nt(window).on(
          "resize.DatePicker_" +
            yt +
            ", orientationchange.DatePicker_" +
            yt,
          function() {
            kt.hide();
          }
        );
        var C =
          '<div class="DatePicker"><table class="dp_header dp_actions"><tr><td class="dp_previous">' +
          kt.settings.navigation[0] +
          (wt ? "&#xFE0E;" : "") +
          '</td><td class="dp_caption"></td><td class="dp_next">' +
          kt.settings.navigation[1] +
          (wt ? "&#xFE0E;" : "") +
          '</td></tr></table><table class="dp_daypicker' +
          (kt.settings.show_week_number ? " dp_week_numbers" : "") +
          ' dp_body"></table><table class="dp_monthpicker dp_body"></table><table class="dp_yearpicker dp_body"></table><table class="dp_timepicker dp_body"></table><table class="dp_footer dp_actions"><tr><td class="dp_today">' +
          rt +
          '</td><td class="dp_clear">' +
          kt.settings.lang_clear_date +
          '</td><td class="dp_view_toggler dp_icon">&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="dp_confirm dp_icon"></td></tr></table></div>';
        (z = Nt(C)),
          (J = Nt("table.dp_header", z)),
          (j = Nt("table.dp_daypicker", z)),
          (q = Nt("table.dp_monthpicker", z)),
          (gt = Nt("table.dp_yearpicker", z)),
          (ct = Nt("table.dp_timepicker", z)),
          (Q = Nt("table.dp_footer", z)),
          (at = Nt("td.dp_today", Q)),
          (P = Nt("td.dp_clear", Q)),
          (st = Nt("td.dp_view_toggler", Q)),
          (Z = Nt("td.dp_confirm", Q)),
          kt.settings.always_visible instanceof jQuery
            ? Dt.attr("disabled") ||
              (kt.settings.always_visible.append(z), kt.show())
            : kt.settings.container.append(z),
          z
            .on("mouseover", "td:not(.dp_disabled)", function() {
              Nt(this).addClass("dp_hover");
            })
            .on("mouseout", "td:not(.dp_disabled)", function() {
              Nt(this).removeClass("dp_hover");
            }),
          Ct(z),
          Nt(kt.settings.rtl ? ".dp_next" : ".dp_previous", J).on(
            "click",
            function() {
              "months" === _t
                ? nt--
                : "years" === _t
                ? (nt -= 12)
                : --it < 0 && ((it = 11), nt--),
                Zt();
            }
          ),
          kt.settings.fast_navigation &&
            Nt(".dp_caption", J).on("click", function() {
              (_t =
                "days" === _t
                  ? -1 < Nt.inArray("months", ht)
                    ? "months"
                    : -1 < Nt.inArray("years", ht)
                    ? "years"
                    : "days"
                  : "months" === _t
                  ? -1 < Nt.inArray("years", ht)
                    ? "years"
                    : -1 < Nt.inArray("days", ht)
                    ? "days"
                    : "months"
                  : -1 < Nt.inArray("days", ht)
                  ? "days"
                  : -1 < Nt.inArray("months", ht)
                  ? "months"
                  : "years"),
                Zt();
            }),
          Nt(kt.settings.rtl ? ".dp_previous" : ".dp_next", J).on(
            "click",
            function() {
              "months" === _t
                ? nt++
                : "years" === _t
                ? (nt += 12)
                : 12 == ++it && ((it = 0), nt++),
                Zt();
            }
          ),
          j.on("click", "td:not(.dp_disabled)", function() {
            var t;
            kt.settings.select_other_months &&
            Nt(this).attr("class") &&
            null !==
              (t = Nt(this)
                .attr("class")
                .match(
                  /date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/
                ))
              ? xt(t[1], t[2] - 1, t[3], "days", Nt(this))
              : xt(nt, it, It(Nt(this).html()), "days", Nt(this));
          }),
          q.on("click", "td:not(.dp_disabled)", function() {
            var t = Nt(this)
              .attr("class")
              .match(/dp\_month\_([0-9]+)/);
            (it = It(t[1])),
              -1 === Nt.inArray("days", ht)
                ? xt(nt, it, 1, "months", Nt(this))
                : ((_t = "days"),
                  kt.settings.always_visible && Dt.val(""),
                  Zt());
          }),
          gt.on("click", "td:not(.dp_disabled)", function() {
            (nt = It(Nt(this).html())),
              -1 === Nt.inArray("months", ht)
                ? xt(nt, 1, 1, "years", Nt(this))
                : ((_t = "months"),
                  kt.settings.always_visible && Dt.val(""),
                  Zt());
          }),
          at.on("click", function(t) {
            var e =
              !1 !== kt.settings.current_date
                ? new Date(kt.settings.current_date)
                : new Date();
            t.preventDefault(),
              xt(
                e.getFullYear(),
                e.getMonth(),
                e.getDate(),
                "days",
                Nt(".dp_current", j)
              );
          }),
          P.on("click", function(t) {
            t.preventDefault(),
              Dt.val(""),
              (O = H = N = null),
              kt.settings.always_visible
                ? Nt("td.dp_selected", z).removeClass("dp_selected")
                : (nt = it = null),
              Dt.focus(),
              kt.hide(),
              kt.settings.onClear &&
                "function" == typeof kt.settings.onClear &&
                kt.settings.onClear.call(Dt);
          }),
          st.on("click", function() {
            "time" !== _t
              ? ((_t = "time"), Zt())
              : Nt(".dp_caption", J).trigger("click");
          }),
          Z.on("click", function() {
            if (
              (Nt(".dp_time_controls_increase td", ct).trigger("click"),
              Nt(".dp_time_controls_decrease td", ct).trigger("click"),
              kt.settings.onSelect && "function" == typeof kt.settings.onSelect)
            ) {
              var t = new Date(
                nt,
                it,
                N,
                lt && lt.hours
                  ? X +
                    (lt.ampm &&
                    (("pm" === et && X < 12) || ("am" === et && 12 === X))
                      ? 12
                      : 0)
                  : 0,
                lt && lt.minutes ? K : 0,
                lt && lt.seconds ? tt : 0
              );
              kt.settings.onSelect.call(
                Dt,
                Mt(t),
                nt +
                  "-" +
                  Yt(it + 1, 2) +
                  "-" +
                  Yt(N, 2) +
                  (lt
                    ? " " +
                      Yt(t.getHours(), 2) +
                      ":" +
                      Yt(t.getMinutes(), 2) +
                      ":" +
                      Yt(t.getSeconds(), 2)
                    : ""),
                t
              );
            }
            kt.hide();
          }),
          z.on(
            "mousedown",
            ".dp_time_controls_increase td, .dp_time_controls_decrease td",
            function() {
              var t = this,
                e = 0;
              St(t),
                (pt = setInterval(
                  function() {
                    St(t),
                      5 < ++e &&
                        (clearInterval(pt),
                        (pt = setInterval(
                          function() {
                            St(t),
                              10 < ++e &&
                                (clearInterval(pt),
                                (pt = setInterval(
                                  function() {
                                    St(t);
                                  },
                                  100,
                                  t
                                )));
                          },
                          200,
                          t
                        )));
                  },
                  400,
                  t
                ));
            }
          ),
          z.on(
            "mouseup mouseleave",
            ".dp_time_controls_increase td, .dp_time_controls_decrease td",
            function() {
              clearInterval(pt);
            }
          ),
          kt.settings.always_visible instanceof jQuery ||
            (Nt(document).on("touchmove.DatePicker_" + yt, function() {
              bt = !0;
            }),
            Nt(document).on(
              "mousedown.DatePicker_" +
                yt +
                " touchend.DatePicker_" +
                yt,
              function(t) {
                if ("touchend" === t.type && bt) return (bt = !(vt = !0));
                (bt = !1),
                  z.hasClass("dp_hidden") ||
                    ((!kt.settings.open_icon_only ||
                      !kt.icon ||
                      Nt(t.target).get(0) === kt.icon.get(0)) &&
                      (kt.settings.open_icon_only ||
                        Nt(t.target).get(0) === Dt.get(0) ||
                        (kt.icon && Nt(t.target).get(0) === kt.icon.get(0)))) ||
                    0 !==
                      Nt(t.target)
                        .parents()
                        .filter(".DatePicker").length ||
                    kt.hide(!0);
              }
            ),
            Nt(document).on("keyup.DatePicker_" + yt, function(t) {
              z.hasClass("dp_hidden") || 27 !== t.which || kt.hide();
            })),
          Zt();
      },
      At = function(t) {
        if (((t += ""), "" !== Nt.trim(t))) {
          var e,
            s,
            i = w(kt.settings.format),
            n = [
              "d",
              "D",
              "j",
              "l",
              "N",
              "S",
              "w",
              "F",
              "m",
              "M",
              "n",
              "Y",
              "y",
              "G",
              "g",
              "H",
              "h",
              "i",
              "s",
              "a",
              "A"
            ],
            a = [],
            r = [],
            o = null,
            d = null;
          for (s = 0; s < n.length; s++)
            -1 < (o = i.indexOf(n[s])) &&
              a.push({ character: n[s], position: o });
          if (
            (a.sort(function(t, e) {
              return t.position - e.position;
            }),
            Nt.each(a, function(t, e) {
              switch (e.character) {
                case "d":
                  r.push("0[1-9]|[12][0-9]|3[01]");
                  break;
                case "D":
                  r.push("[a-z]{3}");
                  break;
                case "j":
                  r.push("[1-9]|[12][0-9]|3[01]");
                  break;
                case "l":
                  r.push("[a-zÀ-ɏ]+");
                  break;
                case "N":
                  r.push("[1-7]");
                  break;
                case "S":
                  r.push("st|nd|rd|th");
                  break;
                case "w":
                  r.push("[0-6]");
                  break;
                case "F":
                  r.push("[a-z]+");
                  break;
                case "m":
                  r.push("0[1-9]|1[012]");
                  break;
                case "M":
                  r.push("[a-z]{3}");
                  break;
                case "n":
                  r.push("[1-9]|1[012]");
                  break;
                case "Y":
                  r.push("[0-9]{4}");
                  break;
                case "y":
                  r.push("[0-9]{2}");
                  break;
                case "G":
                  r.push("[1-9]|1[0-9]|2[0123]");
                  break;
                case "g":
                  r.push("[0-9]|1[012]");
                  break;
                case "H":
                  r.push("0[0-9]|1[0-9]|2[0123]");
                  break;
                case "h":
                  r.push("0[0-9]|1[012]");
                  break;
                case "i":
                case "s":
                  r.push("0[0-9]|[12345][0-9]");
                  break;
                case "a":
                  r.push("am|pm");
                  break;
                case "A":
                  r.push("AM|PM");
              }
            }),
            r.length &&
              (a.reverse(),
              Nt.each(a, function(t, e) {
                i = i.replace(e.character, "(" + r[r.length - t - 1] + ")");
              }),
              (r = new RegExp("^" + i + "$", "ig")),
              (d = r.exec(t))))
          ) {
            var c,
              l,
              g = new Date(),
              _ = 1,
              h = g.getMonth() + 1,
              p = g.getFullYear(),
              u = g.getHours(),
              m = g.getMinutes(),
              f = g.getSeconds(),
              b = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              y = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ],
              v = !0;
            if (
              (a.reverse(),
              Nt.each(a, function(s, i) {
                if (!v) return !0;
                switch (i.character) {
                  case "m":
                  case "n":
                    h = It(d[s + 1]);
                    break;
                  case "d":
                  case "j":
                    _ = It(d[s + 1]);
                    break;
                  case "D":
                  case "l":
                  case "F":
                  case "M":
                    (l =
                      "D" === i.character || "l" === i.character
                        ? kt.settings.days
                        : kt.settings.months),
                      (v = !1),
                      Nt.each(l, function(t, e) {
                        if (v) return !0;
                        if (
                          d[s + 1].toLowerCase() ===
                          e
                            .substring(
                              0,
                              "D" === i.character || "M" === i.character
                                ? 3
                                : e.length
                            )
                            .toLowerCase()
                        ) {
                          switch (i.character) {
                            case "D":
                              d[s + 1] = b[t].substring(0, 3);
                              break;
                            case "l":
                              d[s + 1] = b[t];
                              break;
                            case "F":
                              (d[s + 1] = y[t]), (h = t + 1);
                              break;
                            case "M":
                              (d[s + 1] = y[t].substring(0, 3)), (h = t + 1);
                          }
                          v = !0;
                        }
                      });
                    break;
                  case "Y":
                    p = It(d[s + 1]);
                    break;
                  case "y":
                    p = It("20" + It(d[s + 1]));
                    break;
                  case "G":
                  case "H":
                  case "g":
                  case "h":
                    u = It(d[s + 1]);
                    break;
                  case "i":
                    m = It(d[s + 1]);
                    break;
                  case "s":
                    f = It(d[s + 1]);
                    break;
                  case "a":
                  case "A":
                    c = d[s + 1].toLowerCase();
                }
              }),
              v &&
                (e = new Date(
                  p,
                  (h || 1) - 1,
                  _ || 1,
                  u +
                    ("pm" === c && 12 !== u
                      ? 12
                      : "am" === c && 12 === u
                      ? -12
                      : 0),
                  m,
                  f
                )).getFullYear() === p &&
                e.getDate() === (_ || 1) &&
                e.getMonth() === (h || 1) - 1)
            )
              return e;
          }
          return !1;
        }
      },
      Ct = function(t) {
        "firefox" === jt.name
          ? t.css("MozUserSelect", "none")
          : "explorer" === jt.name
          ? Nt(document).on("selectstart", t, function() {
              return !1;
            })
          : t.mousedown(function() {
              return !1;
            });
      },
      w = function(t) {
        return t.replace(/([-.,*+?^${}()|[\]\/\\])/g, "\\$1");
      },
      Mt = function(t) {
        var e,
          s,
          i = "",
          n = t.getDate(),
          a = t.getDay(),
          r = kt.settings.days[a],
          o = t.getMonth() + 1,
          d = kt.settings.months[o - 1],
          c = t.getFullYear() + "",
          l = t.getHours(),
          g = l % 12 == 0 ? 12 : l % 12,
          _ = t.getMinutes(),
          h = t.getSeconds(),
          p = 12 <= l ? "pm" : "am";
        for (e = 0; e < kt.settings.format.length; e++)
          switch ((s = kt.settings.format.charAt(e))) {
            case "y":
              c = c.substr(2);
            case "Y":
              i += c;
              break;
            case "m":
              o = Yt(o, 2);
            case "n":
              i += o;
              break;
            case "M":
              d =
                Nt.isArray(kt.settings.months_abbr) &&
                void 0 !== kt.settings.months_abbr[o - 1]
                  ? kt.settings.months_abbr[o - 1]
                  : kt.settings.months[o - 1].substr(0, 3);
            case "F":
              i += d;
              break;
            case "d":
              n = Yt(n, 2);
            case "j":
              i += n;
              break;
            case "D":
              r =
                Nt.isArray(kt.settings.days_abbr) &&
                void 0 !== kt.settings.days_abbr[a]
                  ? kt.settings.days_abbr[a]
                  : kt.settings.days[a].substr(0, 3);
            case "l":
              i += r;
              break;
            case "N":
              a++;
            case "w":
              i += a;
              break;
            case "S":
              i +=
                n % 10 == 1 && 11 !== n
                  ? "st"
                  : n % 10 == 2 && 12 !== n
                  ? "nd"
                  : n % 10 == 3 && 13 !== n
                  ? "rd"
                  : "th";
              break;
            case "g":
              i += g;
              break;
            case "h":
              i += Yt(g, 2);
              break;
            case "G":
              i += l;
              break;
            case "H":
              i += Yt(l, 2);
              break;
            case "i":
              i += Yt(_, 2);
              break;
            case "s":
              i += Yt(h, 2);
              break;
            case "a":
              i += p;
              break;
            case "A":
              i += p.toUpperCase();
              break;
            default:
              i += s;
          }
        return i;
      },
      a = function() {
        var t,
          e,
          s,
          i,
          n,
          a,
          r,
          o,
          d,
          c,
          l,
          g,
          _ = new Date(nt, it + 1, 0).getDate(),
          h = new Date(nt, it, 1).getDay(),
          p = new Date(nt, it, 0).getDate(),
          u = h - kt.settings.first_day_of_week;
        for (
          u = u < 0 ? 7 + u : u,
            y(kt.settings.header_captions.days),
            e = "<tr>",
            kt.settings.show_week_number &&
              (e += "<th>" + kt.settings.show_week_number + "</th>"),
            t = 0;
          t < 7;
          t++
        )
          (s =
            (kt.settings.first_day_of_week + (kt.settings.rtl ? 6 - t : t)) %
            7),
            (e +=
              "<th>" +
              (Nt.isArray(kt.settings.days_abbr) &&
              void 0 !== kt.settings.days_abbr[s]
                ? kt.settings.days_abbr[s]
                : kt.settings.days[s].substr(0, 2)) +
              "</th>");
        for (e += "</tr><tr>", t = 0; t < 42; t++)
          (g = kt.settings.rtl ? 6 - (t % 7) * 2 : 0),
            0 < t && t % 7 == 0 && (e += "</tr><tr>"),
            t % 7 == 0 &&
              kt.settings.show_week_number &&
              (e += "<th>" + b(new Date(nt, it, t - u + 1)) + "</th>"),
            (s = g + (t - u + 1)),
            kt.settings.select_other_months &&
              (t < u || _ < s) &&
              ((n = (i = new Date(nt, it, s)).getFullYear()),
              (a = i.getMonth()),
              (r = i.getDate()),
              (i = n + Yt(a + 1, 2) + Yt(r, 2))),
            (o = (kt.settings.first_day_of_week + t) % 7),
            (l = -1 < Nt.inArray(o, kt.settings.weekend_days)),
            (kt.settings.rtl && s < 1) || (!kt.settings.rtl && t < u)
              ? (e +=
                  '<td class="dp_not_in_month ' +
                  (l ? "dp_weekend " : "") +
                  (kt.settings.select_other_months && !Pt(n, a, r)
                    ? "date_" + i
                    : "dp_disabled") +
                  '">' +
                  (kt.settings.select_other_months ||
                  kt.settings.show_other_months
                    ? Yt(g + p - u + t + 1, kt.settings.zero_pad ? 2 : 0)
                    : "&nbsp;") +
                  "</td>")
              : _ < s
              ? (e +=
                  '<td class="dp_not_in_month ' +
                  (l ? "dp_weekend " : "") +
                  (kt.settings.select_other_months && !Pt(n, a, r)
                    ? "date_" + i
                    : "dp_disabled") +
                  '">' +
                  (kt.settings.select_other_months ||
                  kt.settings.show_other_months
                    ? Yt(s - _, kt.settings.zero_pad ? 2 : 0)
                    : "&nbsp;") +
                  "</td>")
              : ((d = ""),
                (c = f(nt, it, s)),
                l && (d = " dp_weekend"),
                it === x && nt === Y && S === s && (d += " dp_current"),
                "" !== c && (d += " " + c),
                it === H && nt === O && N === s && (d += " dp_selected"),
                Pt(nt, it, s) && (d += " dp_disabled"),
                (e +=
                  "<td" +
                  ("" !== d ? ' class="' + Nt.trim(d) + '"' : "") +
                  ">" +
                  ((kt.settings.zero_pad ? Yt(s, 2) : s) || "&nbsp;") +
                  "</td>"));
        (e += "</tr>"),
          j.html(Nt(e)),
          kt.settings.always_visible && (m = Nt("td:not(.dp_disabled)", j)),
          j.show();
      },
      f = function(s, i, n) {
        var a, t, r;
        for (t in (void 0 !== i && (i += 1), I))
          if (
            ((a = I[t]),
            (r = !1),
            Nt.isArray(mt[a]) &&
              Nt.each(mt[a], function() {
                if (!r) {
                  var t,
                    e = this;
                  if (
                    (-1 < Nt.inArray(s, e[2]) || -1 < Nt.inArray("*", e[2])) &&
                    ((void 0 !== i && -1 < Nt.inArray(i, e[1])) ||
                      -1 < Nt.inArray("*", e[1])) &&
                    ((void 0 !== n && -1 < Nt.inArray(n, e[0])) ||
                      -1 < Nt.inArray("*", e[0]))
                  ) {
                    if (-1 < Nt.inArray("*", e[3])) return (r = a);
                    if (
                      ((t = new Date(s, i - 1, n).getDay()),
                      -1 < Nt.inArray(t, e[3]))
                    )
                      return (r = a);
                  }
                }
              }),
            r)
          )
            return r;
        return r || "";
      },
      b = function(t) {
        var e,
          s,
          i,
          n,
          a,
          r,
          o,
          d = t.getFullYear(),
          c = t.getMonth() + 1,
          l = t.getDate();
        return (
          c < 3
            ? ((i =
                (s =
                  (((e = d - 1) / 4) | 0) - ((e / 100) | 0) + ((e / 400) | 0)) -
                ((((e - 1) / 4) | 0) -
                  (((e - 1) / 100) | 0) +
                  (((e - 1) / 400) | 0))),
              (n = 0),
              (a = l - 1 + 31 * (c - 1)))
            : ((n =
                (i =
                  (s =
                    (((e = d) / 4) | 0) - ((e / 100) | 0) + ((e / 400) | 0)) -
                  ((((e - 1) / 4) | 0) -
                    (((e - 1) / 100) | 0) +
                    (((e - 1) / 400) | 0))) + 1),
              (a = l + (((153 * (c - 3) + 2) / 5) | 0) + 58 + i)),
          (o = a + 3 - (l = (a + (r = (e + s) % 7) - n) % 7)) < 0
            ? 53 - (((r - i) / 5) | 0)
            : 364 + i < o
            ? 1
            : 1 + ((o / 7) | 0)
        );
      },
      g = function(t) {
        var e, s;
        if ("explorer" === jt.name && 6 === jt.version)
          switch (
            (i ||
              ((e = It(z.css("zIndex")) - 1),
              (i = Nt("<iframe>", {
                src: 'javascript:document.write("")',
                scrolling: "no",
                frameborder: 0,
                css: {
                  zIndex: e,
                  position: "absolute",
                  top: -1e3,
                  left: -1e3,
                  width: z.outerWidth(),
                  height: z.outerHeight(),
                  filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                  display: "none"
                }
              })),
              Nt("body").append(i)),
            t)
          ) {
            case "hide":
              i.hide();
              break;
            default:
              (s = z.offset()),
                i.css({ top: s.top, left: s.left, display: "block" });
          }
      },
      Pt = function(s, i, n) {
        var t, e, a, r;
        if (
          !(
            (void 0 !== s && !isNaN(s)) ||
            (void 0 !== i && !isNaN(i)) ||
            (void 0 !== n && !isNaN(n))
          )
        )
          return !1;
        if (s < 1e3) return !0;
        if (
          Nt.isArray(kt.settings.direction) ||
          0 !== It(kt.settings.direction)
        ) {
          if (
            8 ===
              (e = (
                (t = It(
                  o(
                    s,
                    void 0 !== i ? Yt(i, 2) : "",
                    void 0 !== n ? Yt(n, 2) : ""
                  )
                )) + ""
              ).length) &&
            ((void 0 !== ot && t < It(o(E, Yt(B, 2), Yt(W, 2)))) ||
              (void 0 !== R && t > It(o($, Yt(V, 2), Yt(U, 2)))))
          )
            return !0;
          if (
            6 === e &&
            ((void 0 !== ot && t < It(o(E, Yt(B, 2)))) ||
              (void 0 !== R && t > It(o($, Yt(V, 2)))))
          )
            return !0;
          if (4 === e && ((void 0 !== ot && t < E) || (void 0 !== R && $ < t)))
            return !0;
        }
        return (
          void 0 !== i && (i += 1),
          (r = a = !1),
          Nt.isArray(L) &&
            L.length &&
            Nt.each(L, function() {
              if (!a) {
                var t,
                  e = this;
                if (
                  (-1 < Nt.inArray(s, e[2]) || -1 < Nt.inArray("*", e[2])) &&
                  ((void 0 !== i && -1 < Nt.inArray(i, e[1])) ||
                    -1 < Nt.inArray("*", e[1])) &&
                  ((void 0 !== n && -1 < Nt.inArray(n, e[0])) ||
                    -1 < Nt.inArray("*", e[0]))
                ) {
                  if (-1 < Nt.inArray("*", e[3])) return (a = !0);
                  if (
                    ((t = new Date(s, i - 1, n).getDay()),
                    -1 < Nt.inArray(t, e[3]))
                  )
                    return (a = !0);
                }
              }
            }),
          T &&
            Nt.each(T, function() {
              if (!r) {
                var t,
                  e = this;
                if (
                  (-1 < Nt.inArray(s, e[2]) || -1 < Nt.inArray("*", e[2])) &&
                  ((r = !0), void 0 !== i)
                )
                  if (
                    ((r = !0),
                    -1 < Nt.inArray(i, e[1]) || -1 < Nt.inArray("*", e[1]))
                  ) {
                    if (void 0 !== n)
                      if (
                        ((r = !0),
                        -1 < Nt.inArray(n, e[0]) || -1 < Nt.inArray("*", e[0]))
                      ) {
                        if (-1 < Nt.inArray("*", e[3])) return (r = !0);
                        if (
                          ((t = new Date(s, i - 1, n).getDay()),
                          -1 < Nt.inArray(t, e[3]))
                        )
                          return (r = !0);
                        r = !1;
                      } else r = !1;
                  } else r = !1;
              }
            }),
          (!T || !r) && !(!L || !a)
        );
      },
      Ft = function(t) {
        return (t + "").match(/^\-?[0-9]+$/);
      },
      y = function(t) {
        !isNaN(parseFloat(it)) &&
          isFinite(it) &&
          (t = t.replace(/\bm\b|\bn\b|\bF\b|\bM\b/, function(t) {
            switch (t) {
              case "m":
                return Yt(it + 1, 2);
              case "n":
                return it + 1;
              case "F":
                return kt.settings.months[it];
              case "M":
                return Nt.isArray(kt.settings.months_abbr) &&
                  void 0 !== kt.settings.months_abbr[it]
                  ? kt.settings.months_abbr[it]
                  : kt.settings.months[it].substr(0, 3);
              default:
                return t;
            }
          })),
          !isNaN(parseFloat(nt)) &&
            isFinite(nt) &&
            (t = t
              .replace(/\bY\b/, nt)
              .replace(/\by\b/, (nt + "").substr(2))
              .replace(/\bY1\b/i, nt - 7)
              .replace(/\bY2\b/i, nt + 4)),
          Nt(".dp_caption", J).html(t);
      },
      Zt = function(t) {
        var e, s, i, n;
        "" === j.text() || "days" === _t
          ? ("" === j.text()
              ? (kt.settings.always_visible instanceof jQuery ||
                  z.css("left", -1e3),
                z.removeClass("hidden"),
                a(),
                (e =
                  void 0 !== j[0].getBoundingClientRect &&
                  void 0 !== j[0].getBoundingClientRect().height
                    ? j[0].getBoundingClientRect().height
                    : j.outerHeight(!0)),
                q.css("height", e),
                gt.css("height", e),
                ct.css("height", e + J.outerHeight(!0)),
                z.css("width", z.outerWidth()),
                z.addClass("dp_hidden"))
              : a(),
            J.show(),
            q.hide(),
            gt.hide(),
            ct.hide(),
            st.hide(),
            Z.hide(),
            lt && st.show().removeClass("dp_calendar"))
          : "months" === _t
          ? (!(function() {
              y(kt.settings.header_captions.months);
              var t,
                e,
                s,
                i = "<tr>";
              for (t = 0; t < 12; t++)
                0 < t && t % 3 == 0 && (i += "</tr><tr>"),
                  (e =
                    "dp_month_" +
                    (s = kt.settings.rtl ? 2 + t - (t % 3) * 2 : t)),
                  Pt(nt, s)
                    ? (e += " dp_disabled")
                    : !1 !== H && H === s && nt === O
                    ? (e += " dp_selected")
                    : x === s && Y === nt && (e += " dp_current"),
                  (i +=
                    '<td class="' +
                    Nt.trim(e) +
                    '">' +
                    (Nt.isArray(kt.settings.months_abbr) &&
                    void 0 !== kt.settings.months_abbr[s]
                      ? kt.settings.months_abbr[s]
                      : kt.settings.months[s].substr(0, 3)) +
                    "</td>");
              (i += "</tr>"),
                q.html(Nt(i)),
                kt.settings.always_visible &&
                  (d = Nt("td:not(.dp_disabled)", q)),
                q.show();
            })(),
            j.hide(),
            gt.hide(),
            ct.hide(),
            st.hide(),
            Z.hide())
          : "years" === _t
          ? (!(function() {
              y(kt.settings.header_captions.years);
              var t,
                e,
                s,
                i = "<tr>";
              for (t = 0; t < 12; t++)
                0 < t && t % 3 == 0 && (i += "</tr><tr>"),
                  (s = kt.settings.rtl ? 2 + t - (t % 3) * 2 : t),
                  (e = ""),
                  Pt(nt - 7 + s)
                    ? (e += " dp_disabled")
                    : O && O === nt - 7 + s
                    ? (e += " dp_selected")
                    : Y === nt - 7 + s && (e += " dp_current"),
                  (i +=
                    "<td" +
                    ("" !== Nt.trim(e) ? ' class="' + Nt.trim(e) + '"' : "") +
                    ">" +
                    (nt - 7 + s) +
                    "</td>");
              (i += "</tr>"),
                gt.html(Nt(i)),
                kt.settings.always_visible &&
                  (c = Nt("td:not(.dp_disabled)", gt)),
                gt.show();
            })(),
            j.hide(),
            q.hide(),
            ct.hide(),
            st.hide(),
            Z.hide())
          : "time" === _t &&
            ((n = lt.hours && lt.minutes && lt.seconds && lt.ampm),
            (i =
              '<tr class="dp_time_controls_increase' +
              (n ? " dp_time_controls_condensed" : "") +
              '">' +
              (kt.settings.rtl && lt.ampm
                ? '<td class="dp_time_ampm dp_time_control">' +
                  kt.settings.navigation[2] +
                  "</td>"
                : "") +
              (lt.hours
                ? '<td class="dp_time_hour dp_time_control">' +
                  kt.settings.navigation[2] +
                  "</td>"
                : "") +
              (lt.minutes
                ? '<td class="dp_time_minute dp_time_control">' +
                  kt.settings.navigation[2] +
                  "</td>"
                : "") +
              (lt.seconds
                ? '<td class="dp_time_second dp_time_control">' +
                  kt.settings.navigation[2] +
                  "</td>"
                : "") +
              (!kt.settings.rtl && lt.ampm
                ? '<td class="dp_time_ampm dp_time_control">' +
                  kt.settings.navigation[2] +
                  "</td>"
                : "") +
              "</tr>"),
            (i +=
              '<tr class="dp_time_segments' +
              (n ? " dp_time_controls_condensed" : "") +
              '">'),
            kt.settings.rtl &&
              lt.ampm &&
              (i +=
                '<td class="dp_time_ampm dp_disabled' +
                (lt.hours || lt.minutes || lt.seconds
                  ? " dp_time_separator"
                  : "") +
                '"><div>' +
                et.toUpperCase() +
                "</div></td>"),
            lt.hours &&
              (i +=
                '<td class="dp_time_hours dp_disabled' +
                (lt.minutes || lt.seconds || (!kt.settings.rtl && lt.ampm)
                  ? " dp_time_separator"
                  : "") +
                '"><div>' +
                ("h" === lt.hour_format || "H" === lt.hour_format
                  ? Yt(X, 2)
                  : X) +
                "</div></td>"),
            lt.minutes &&
              (i +=
                '<td class="dp_time_minutes dp_disabled' +
                (lt.seconds || (!kt.settings.rtl && lt.ampm)
                  ? " dp_time_separator"
                  : "") +
                '"><div>' +
                Yt(K, 2) +
                "</div></td>"),
            lt.seconds &&
              (i +=
                '<td class="dp_time_seconds dp_disabled' +
                (!kt.settings.rtl && lt.ampm ? " dp_time_separator" : "") +
                '"><div>' +
                Yt(tt, 2) +
                "</div></td>"),
            !kt.settings.rtl &&
              lt.ampm &&
              (i +=
                '<td class="dp_time_ampm dp_disabled">' +
                et.toUpperCase() +
                "</td>"),
            (i += "</tr>"),
            (i +=
              '<tr class="dp_time_controls_decrease' +
              (n ? " dp_time_controls_condensed" : "") +
              '">' +
              (kt.settings.rtl && lt.ampm
                ? '<td class="dp_time_ampm dp_time_control">' +
                  kt.settings.navigation[3] +
                  "</td>"
                : "") +
              (lt.hours
                ? '<td class="dp_time_hour dp_time_control">' +
                  kt.settings.navigation[3] +
                  "</td>"
                : "") +
              (lt.minutes
                ? '<td class="dp_time_minute dp_time_control">' +
                  kt.settings.navigation[3] +
                  "</td>"
                : "") +
              (lt.seconds
                ? '<td class="dp_time_second dp_time_control">' +
                  kt.settings.navigation[3] +
                  "</td>"
                : "") +
              (!kt.settings.rtl && lt.ampm
                ? '<td class="dp_time_ampm dp_time_control">' +
                  kt.settings.navigation[3] +
                  "</td>"
                : "") +
              "</tr>"),
            ct.html(Nt(i)),
            ct.show(),
            1 === ht.length
              ? (st.hide(), Z.show())
              : (st.show().addClass("dp_calendar"),
                "" === Dt.val() ? Z.hide() : Z.show()),
            J.hide(),
            j.hide(),
            q.hide(),
            gt.hide()),
          !1 !== t &&
            kt.settings.onChange &&
            "function" == typeof kt.settings.onChange &&
            void 0 !== _t &&
            ((s =
              "days" === _t
                ? j.find("td:not(.dp_disabled)")
                : "months" === _t
                ? q.find("td:not(.dp_disabled)")
                : "years" === _t
                ? gt.find("td:not(.dp_disabled)")
                : ct.find(".dp_time_segments td")).each(function() {
              var t;
              "days" === _t
                ? Nt(this).hasClass("dp_not_in_month") &&
                  !Nt(this).hasClass("dp_disabled")
                  ? ((t = Nt(this)
                      .attr("class")
                      .match(
                        /date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/
                      )),
                    Nt(this).data("date", t[1] + "-" + t[2] + "-" + t[3]))
                  : Nt(this).data(
                      "date",
                      nt +
                        "-" +
                        Yt(it + 1, 2) +
                        "-" +
                        Yt(It(Nt(this).text()), 2)
                    )
                : "months" === _t
                ? ((t = Nt(this)
                    .attr("class")
                    .match(/dp\_month\_([0-9]+)/)),
                  Nt(this).data("date", nt + "-" + Yt(It(t[1]) + 1, 2)))
                : "years" === _t && Nt(this).data("date", It(Nt(this).text()));
            }),
            kt.settings.onChange.call(Dt, _t, s)),
          Q.show(),
          "time" === _t && 1 < ht.length
            ? (at.hide(),
              P.hide(),
              st.css("width", "" === Dt.val() ? "100%" : "50%"))
            : (at.show(),
              P.show(),
              !0 === kt.settings.show_clear_date ||
              (0 === kt.settings.show_clear_date && "" !== Dt.val()) ||
              (kt.settings.always_visible && !1 !== kt.settings.show_clear_date)
                ? rt
                  ? (at.css("width", "50%"), P.css("width", "50%"))
                  : (at.hide(),
                    P.css(
                      "width",
                      -1 < Nt.inArray(ht, "time") ? "50%" : "100%"
                    ))
                : (P.hide(),
                  rt
                    ? at.css("width", "100%")
                    : (at.hide(),
                      (!lt || ("time" !== _t && "days" !== _t)) && Q.hide())));
      },
      St = function(t) {
        var e,
          s = 0 < Nt(t).parent(".dp_time_controls_increase").length,
          i = Nt(t)
            .attr("class")
            .match(/dp\_time\_([^\s]+)/i),
          n = Nt(
            ".dp_time_segments .dp_time_" + i[1] + ("ampm" !== i[1] ? "s" : ""),
            ct
          ),
          a = n.text().toLowerCase(),
          r = lt[i[1] + ("ampm" !== i[1] ? "s" : "")],
          o = Nt.inArray("ampm" !== i[1] ? parseInt(a, 10) : a, r),
          d =
            -1 === o
              ? 0
              : s
              ? o + 1 >= r.length
                ? 0
                : o + 1
              : o - 1 < 0
              ? r.length - 1
              : o - 1;
        "hour" === i[1]
          ? (X = r[d])
          : "minute" === i[1]
          ? (K = r[d])
          : "second" === i[1]
          ? (tt = r[d])
          : (et = r[d]),
          !N &&
            kt.settings.start_date &&
            (e = At(kt.settings.start_date)) &&
            (N = e.getDate()),
          N || (N = W),
          n.text(Yt(r[d], 2).toUpperCase()),
          xt(nt, it, N);
      },
      xt = function(t, e, s, i, n) {
        var a = new Date(
            t,
            e,
            s,
            lt && lt.hours
              ? X +
                (lt.ampm
                  ? "pm" === et && 12 !== X
                    ? 12
                    : "am" === et && 12 === X
                    ? -12
                    : 0
                  : 0)
              : 12,
            lt && lt.minutes ? K : 0,
            lt && lt.seconds ? tt : 0
          ),
          r = "days" === i ? m : "months" === i ? d : c,
          o = Mt(a);
        Dt.val(o),
          (kt.settings.always_visible || lt) &&
            ((H = a.getMonth()),
            (it = a.getMonth()),
            (O = a.getFullYear()),
            (nt = a.getFullYear()),
            (N = a.getDate()),
            n &&
              r &&
              (r.removeClass("dp_selected"),
              n.addClass("dp_selected"),
              "days" === i &&
                n.hasClass("dp_not_in_month") &&
                !n.hasClass("dp_disabled") &&
                kt.show())),
          lt ? ((_t = "time"), Zt()) : (Dt.focus(), kt.hide()),
          zt(a),
          !lt &&
            kt.settings.onSelect &&
            "function" == typeof kt.settings.onSelect &&
            kt.settings.onSelect.call(
              Dt,
              o,
              t + "-" + Yt(e + 1, 2) + "-" + Yt(s, 2),
              a
            );
      },
      o = function() {
        var t,
          e = "";
        for (t = 0; t < arguments.length; t++) e += arguments[t] + "";
        return e;
      },
      Yt = function(t, e) {
        for (t += ""; t.length < e; ) t = "0" + t;
        return t;
      },
      It = function(t) {
        return parseInt(t, 10);
      },
      zt = function(s) {
        kt.settings.pair &&
          Nt.each(kt.settings.pair, function() {
            var t,
              e = Nt(this);
            e.data && e.data("DatePicker")
              ? ((t = e.data("DatePicker")).update({
                  reference_date: s,
                  direction:
                    0 === t.settings.direction ? 1 : t.settings.direction
                }),
                t.settings.always_visible && t.show())
              : e.data("zdp_reference_date", s);
          });
      },
      jt = {
        init: function() {
          (this.name = this.searchString(this.dataBrowser) || ""),
            (this.version =
              this.searchVersion(navigator.userAgent) ||
              this.searchVersion(navigator.appVersion) ||
              "");
        },
        searchString: function(t) {
          var e, s, i;
          for (e = 0; e < t.length; e++)
            if (
              ((s = t[e].string),
              (i = t[e].prop),
              (this.versionSearchString = t[e].versionSearch || t[e].identity),
              s)
            ) {
              if (-1 !== s.indexOf(t[e].subString)) return t[e].identity;
            } else if (i) return t[e].identity;
        },
        searchVersion: function(t) {
          var e = t.indexOf(this.versionSearchString);
          if (-1 !== e)
            return parseFloat(
              t.substring(e + this.versionSearchString.length + 1)
            );
        },
        dataBrowser: [
          {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "firefox"
          },
          {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "explorer",
            versionSearch: "MSIE"
          }
        ]
      };
    (kt.settings = {}),
      (kt.clear_date = function() {
        Nt(P).trigger("click");
      }),
      (kt.destroy = function() {
        void 0 !== kt.icon &&
          (kt.icon.off("click.DatePicker_" + yt),
          kt.icon.off("focus.DatePicker_" + yt),
          kt.icon.off("keydown.DatePicker_" + yt),
          kt.icon.remove()),
          z.off(),
          z.remove(),
          !kt.settings.show_icon ||
            kt.settings.always_visible instanceof jQuery ||
            Dt.unwrap(),
          Dt.off("blur.DatePicker_" + yt),
          Dt.off("click.DatePicker_" + yt),
          Dt.off("focus.DatePicker_" + yt),
          Dt.off("keydown.DatePicker_" + yt),
          Dt.off("mousedown.DatePicker_" + yt),
          Nt(document).off("keyup.DatePicker_" + yt),
          Nt(document).off("mousedown.DatePicker_" + yt),
          Nt(document).off("touchend.DatePicker_" + yt),
          Nt(window).off("resize.DatePicker_" + yt),
          Nt(window).off("orientationchange.DatePicker_" + yt),
          Dt.removeData("DatePicker"),
          Dt.attr("readonly", ft.readonly),
          Dt.attr("style", ft.style ? ft.style : ""),
          Dt.css("paddingLeft", ft.padding_left),
          Dt.css("paddingRight", ft.padding_right);
      }),
      (kt.hide = function(t) {
        z.hasClass("dp_hidden") ||
          (kt.settings.always_visible && !t) ||
          (g("hide"),
          z.addClass("dp_hidden"),
          kt.settings.onClose &&
            "function" == typeof kt.settings.onClose &&
            kt.settings.onClose.call(Dt));
      }),
      (kt.set_date = function(t) {
        var e;
        "object" == typeof t && t instanceof Date && (t = Mt(t)),
          (e = At(t)) &&
            !Pt(e.getFullYear(), e.getMonth(), e.getDate()) &&
            (Dt.val(t), zt(e));
      }),
      (kt.show = function(t) {
        _t = kt.settings.view;
        var e,
          s = At(
            Dt.val() || (kt.settings.start_date ? kt.settings.start_date : "")
          );
        if (
          (s
            ? ((H = s.getMonth()),
              (it = s.getMonth()),
              (O = s.getFullYear()),
              (nt = s.getFullYear()),
              (N = s.getDate()),
              Pt(O, H, N) &&
                (kt.settings.strict && Dt.val(""), (it = B), (nt = E)))
            : ((it = B), (nt = E)),
          lt &&
            ((e = s || new Date()),
            (X = e.getHours()),
            (K = e.getMinutes()),
            (tt = e.getSeconds()),
            (et = 12 <= X ? "pm" : "am"),
            lt.is12hour && (X = X % 12 == 0 ? 12 : X % 12),
            Nt.isArray(kt.settings.enabled_hours) &&
              -1 === Nt.inArray(X, kt.settings.enabled_hours) &&
              (X = kt.settings.enabled_hours[0]),
            Nt.isArray(kt.settings.enabled_minutes) &&
              -1 === Nt.inArray(K, kt.settings.enabled_minutes) &&
              (K = kt.settings.enabled_minutes[0]),
            Nt.isArray(kt.settings.enabled_seconds) &&
              -1 === Nt.inArray(tt, kt.settings.enabled_seconds) &&
              (tt = kt.settings.enabled_seconds[0])),
          Zt(t),
          kt.settings.always_visible instanceof jQuery)
        )
          z.removeClass("dp_hidden");
        else {
          if (kt.settings.container.is("body")) {
            var i = z.outerWidth(),
              n = z.outerHeight(),
              a =
                (void 0 !== G
                  ? G.offset().left + G.outerWidth(!0)
                  : Dt.offset().left + Dt.outerWidth(!0)) +
                kt.settings.offset[0],
              r =
                (void 0 !== G ? G.offset().top : Dt.offset().top) -
                n +
                kt.settings.offset[1],
              o = Nt(window).width(),
              d = Nt(window).height(),
              c = Nt(window).scrollTop(),
              l = Nt(window).scrollLeft();
            "below" === kt.settings.default_position &&
              (r =
                (void 0 !== G ? G.offset().top : Dt.offset().top) +
                kt.settings.offset[1]),
              l + o < a + i && (a = l + o - i),
              a < l && (a = l),
              c + d < r + n && (r = c + d - n),
              r < c && (r = c),
              z.css({ left: a, top: r });
          } else z.css({ left: 0, top: 0 });
          z.removeClass("dp_hidden"), g();
        }
        !1 !== t &&
          kt.settings.onOpen &&
          "function" == typeof kt.settings.onOpen &&
          kt.settings.onOpen.call(Dt);
      }),
      (kt.update = function(t) {
        kt.original_direction && (kt.original_direction = kt.direction),
          (kt.settings = Nt.extend(kt.settings, t)),
          e(!0);
      }),
      jt.init(),
      e();
  }),
    (Nt.fn.DatePicker = function(e) {
      return this.each(function() {
        void 0 !== Nt(this).data("DatePicker") &&
          Nt(this)
            .data("DatePicker")
            .destroy();
        var t = new Nt.DatePicker(this, e);
        Nt(this).data("DatePicker", t);
      });
    }),
    (Nt.fn.DatePicker.defaults = {});
});
