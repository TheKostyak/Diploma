! function() {
    function l(l, n) { var u = l.split("."),
            d = Z;
        u[0] in d || !d.execScript || d.execScript("var " + u[0]); for (var $; u.length && ($ = u.shift());) u.length || void 0 === n ? d = d[$] ? d[$] : d[$] = {} : d[$] = n }

    function n(l, n) {
        function u() {}
        u.prototype = n.prototype, l.M = n.prototype, l.prototype = new u, l.prototype.constructor = l, l.N = function(l, u, d) { for (var $ = Array(arguments.length - 2), t = 2; t < arguments.length; t++) $[t - 2] = arguments[t]; return n.prototype[u].apply(l, $) } }

    function u(l, n) { null != l && this.a.apply(this, arguments) }

    function d(l) { l.b = "" }

    function $(l, n) { l.sort(n || t) }

    function t(l, n) { return l > n ? 1 : l < n ? -1 : 0 }

    function e(l) { var n, u = [],
            d = 0; for (n in l) u[d++] = l[n]; return u }

    function r(l, n) { this.b = l, this.a = {}; for (var u = 0; u < n.length; u++) { var d = n[u];
            this.a[d.b] = d } }

    function i(l) { return l = e(l.a), $(l, function(l, n) { return l.b - n.b }), l }

    function a(l, n) { switch (this.b = l, this.g = !!n.v, this.a = n.c, this.i = n.type, this.h = !1, this.a) {
            case w:
            case x:
            case J:
            case Q:
            case X:
            case Y:
            case W:
                this.h = !0 }
        this.f = n.defaultValue }

    function o() { this.a = {}, this.f = this.j().a, this.b = this.g = null }

    function C(l, n) { for (var u = i(l.j()), d = 0; d < u.length; d++) { var $ = u[d],
                t = $.b; if (null != n.a[t]) { l.b && delete l.b[$.b]; var e = 11 == $.a || 10 == $.a; if ($.g)
                    for (var $ = s(n, t) || [], r = 0; r < $.length; r++) { var a = l,
                            o = t,
                            f = e ? $[r].clone() : $[r];
                        a.a[o] || (a.a[o] = []), a.a[o].push(f), a.b && delete a.b[o] } else $ = s(n, t), e ? (e = s(l, t)) ? C(e, $) : h(l, t, $.clone()) : h(l, t, $) } } }

    function s(l, n) { var u = l.a[n]; if (null == u) return null; if (l.g) { if (!(n in l.b)) { var d = l.g,
                    $ = l.f[n]; if (null != u)
                    if ($.g) { for (var t = [], e = 0; e < u.length; e++) t[e] = d.b($, u[e]);
                        u = t } else u = d.b($, u);
                return l.b[n] = u } return l.b[n] } return u }

    function f(l, n, u) { var d = s(l, n); return l.f[n].g ? d[u || 0] : d }

    function p(l, n) { var u; if (null != l.a[n]) u = f(l, n, void 0);
        else l: { if (u = l.f[n], void 0 === u.f) { var d = u.i; if (d === Boolean) u.f = !1;
                else if (d === Number) u.f = 0;
                else { if (d !== String) { u = new d; break l }
                    u.f = u.h ? "0" : "" } }
            u = u.f }
        return u }

    function c(l, n) { return l.f[n].g ? null != l.a[n] ? l.a[n].length : 0 : null != l.a[n] ? 1 : 0 }

    function h(l, n, u) { l.a[n] = u, l.b && (l.b[n] = u) }

    function g(l, n) { var u, d = []; for (u in n) 0 != u && d.push(new a(u, n[u])); return new r(l, d) }
    /*

     Protocol Buffer 2 Copyright 2008 Google Inc.
     All other code copyright its respective owners.
     Copyright (C) 2010 The Libphonenumber Authors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function S() { o.call(this) }

    function M() { o.call(this) }

    function A() { o.call(this) }

    function m() {}

    function b() {}

    function G() {}
    /*

     Copyright (C) 2010 The Libphonenumber Authors.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function y() { this.a = {} }

    function T(l) { return 0 == l.length || tl.test(l) }

    function N(l, n) { if (null == n) return null;
        n = n.toUpperCase(); var u = l.a[n]; if (null == u) { if (u = nl[n], null == u) return null;
            u = (new G).a(A.j(), u), l.a[n] = u } return u }

    function B(l) { return l = ll[l], null == l ? "ZZ" : l[0] }

    function E(l) { this.H = RegExp(" "), this.C = "", this.m = new u, this.w = "", this.i = new u, this.u = new u, this.l = !0, this.A = this.o = this.F = !1, this.G = y.b(), this.s = 0, this.b = new u, this.B = !1, this.h = "", this.a = new u, this.f = [], this.D = l, this.J = this.g = v(this, this.D) }

    function v(l, n) { var u; if (null != n && isNaN(n) && n.toUpperCase() in nl) { if (u = N(l.G, n), null == u) throw Error("Invalid region code: " + n);
            u = p(u, 10) } else u = 0; return u = N(l.G, B(u)), null != u ? u : el }

    function R(l) { for (var n = l.f.length, u = 0; u < n; ++u) { var $ = l.f[u],
                t = p($, 1); if (l.w == t) return !1; var e;
            e = l; var r = $,
                i = p(r, 1); if (-1 != i.indexOf("|")) e = !1;
            else { i = i.replace(rl, "\\d"), i = i.replace(il, "\\d"), d(e.m); var a;
                a = e; var r = p(r, 2),
                    o = "999999999999999".match(i)[0];
                o.length < a.a.b.length ? a = "" : (a = o.replace(new RegExp(i, "g"), r), a = a.replace(RegExp("9", "g"), " ")), 0 < a.length ? (e.m.a(a), e = !0) : e = !1 } if (e) return l.w = t, l.B = ol.test(f($, 4)), l.s = 0, !0 } return l.l = !1 }

    function I(l, n) { for (var u = [], d = n.length - 3, $ = l.f.length, t = 0; t < $; ++t) { var e = l.f[t];
            0 == c(e, 3) ? u.push(l.f[t]) : (e = f(e, 3, Math.min(d, c(e, 3) - 1)), 0 == n.search(e) && u.push(l.f[t])) }
        l.f = u }

    function K(l, n) { l.i.a(n); var u = n; if ($l.test(u) || 1 == l.i.b.length && dl.test(u)) { var $, u = n; "+" == u ? ($ = u, l.u.a(u)) : ($ = ul[u], l.u.a($), l.a.a($)), n = $ } else l.l = !1, l.F = !0; if (!l.l) { if (!l.F)
                if (U(l)) { if (O(l)) return L(l) } else if (0 < l.h.length && (u = l.a.toString(), d(l.a), l.a.a(l.h), l.a.a(u), u = l.b.toString(), $ = u.lastIndexOf(l.h), d(l.b), l.b.a(u.substring(0, $))), l.h != H(l)) return l.b.a(" "), L(l); return l.i.toString() } switch (l.u.b.length) {
            case 0:
            case 1:
            case 2:
                return l.i.toString();
            case 3:
                if (!U(l)) return l.h = H(l), F(l);
                l.A = !0;
            default:
                return l.A ? (O(l) && (l.A = !1), l.b.toString() + l.a.toString()) : 0 < l.f.length ? (u = V(l, n), $ = _(l), 0 < $.length ? $ : (I(l, l.a.toString()), R(l) ? D(l) : l.l ? P(l, u) : l.i.toString())) : F(l) } }

    function L(l) { return l.l = !0, l.A = !1, l.f = [], l.s = 0, d(l.m), l.w = "", F(l) }

    function _(l) { for (var n = l.a.toString(), u = l.f.length, d = 0; d < u; ++d) { var $ = l.f[d],
                t = p($, 1); if (new RegExp("^(?:" + t + ")$").test(n)) return l.B = ol.test(f($, 4)), n = n.replace(new RegExp(t, "g"), f($, 2)), P(l, n) } return "" }

    function P(l, n) { var u = l.b.b.length; return l.B && 0 < u && " " != l.b.toString().charAt(u - 1) ? l.b + " " + n : l.b + n }

    function F(l) { var n = l.a.toString(); if (3 <= n.length) { for (var u = l.o && 0 == l.h.length && 0 < c(l.g, 20) ? s(l.g, 20) || [] : s(l.g, 19) || [], d = u.length, $ = 0; $ < d; ++$) { var t = u[$];
                0 < l.h.length && T(p(t, 4)) && !f(t, 6) && null == t.a[5] || (0 != l.h.length || l.o || T(p(t, 4)) || f(t, 6)) && al.test(p(t, 2)) && l.f.push(t) } return I(l, n), n = _(l), 0 < n.length ? n : R(l) ? D(l) : l.i.toString() } return P(l, n) }

    function D(l) { var n = l.a.toString(),
            u = n.length; if (0 < u) { for (var d = "", $ = 0; $ < u; $++) d = V(l, n.charAt($)); return l.l ? P(l, d) : l.i.toString() } return l.b.toString() }

    function H(l) { var n, u = l.a.toString(),
            $ = 0; return 1 != f(l.g, 10) ? n = !1 : (n = l.a.toString(), n = "1" == n.charAt(0) && "0" != n.charAt(1) && "1" != n.charAt(1)), n ? ($ = 1, l.b.a("1").a(" "), l.o = !0) : null != l.g.a[15] && (n = new RegExp("^(?:" + f(l.g, 15) + ")"), n = u.match(n), null != n && null != n[0] && 0 < n[0].length && (l.o = !0, $ = n[0].length, l.b.a(u.substring(0, $)))), d(l.a), l.a.a(u.substring($)), u.substring(0, $) }

    function U(l) { var n = l.u.toString(),
            u = new RegExp("^(?:\\+|" + f(l.g, 11) + ")"),
            u = n.match(u); return null != u && null != u[0] && 0 < u[0].length && (l.o = !0, u = u[0].length, d(l.a), l.a.a(n.substring(u)), d(l.b), l.b.a(n.substring(0, u)), "+" != n.charAt(0) && l.b.a(" "), !0) }

    function O(l) { if (0 == l.a.b.length) return !1; var n, $ = new u;
        l: { if (n = l.a.toString(), 0 != n.length && "0" != n.charAt(0))
                for (var t, e = n.length, r = 1; 3 >= r && r <= e; ++r)
                    if (t = parseInt(n.substring(0, r), 10), t in ll) { $.a(n.substring(r)), n = t; break l }
            n = 0 }
        return 0 != n && (d(l.a), l.a.a($.toString()), $ = B(n), "001" == $ ? l.g = N(l.G, "" + n) : $ != l.D && (l.g = v(l, $)), l.b.a("" + n).a(" "), l.h = "", !0) }

    function V(l, n) { var u = l.m.toString(); if (0 <= u.substring(l.s).search(l.H)) { var $ = u.search(l.H),
                u = u.replace(l.H, n); return d(l.m), l.m.a(u), l.s = $, u.substring(0, l.s + 1) } return 1 == l.f.length && (l.l = !1), l.w = "", l.i.toString() }
    var Z = this;
    u.prototype.b = "", u.prototype.set = function(l) { this.b = "" + l }, u.prototype.a = function(l, n, u) { if (this.b += String(l), null != n)
            for (var d = 1; d < arguments.length; d++) this.b += arguments[d]; return this }, u.prototype.toString = function() { return this.b };
    var W = 1,
        Y = 2,
        w = 3,
        x = 4,
        J = 6,
        Q = 16,
        X = 18;
    o.prototype.set = function(l, n) { h(this, l.b, n) }, o.prototype.clone = function() { var l = new this.constructor; return l != this && (l.a = {}, l.b && (l.b = {}), C(l, this)), l }, n(S, o);
    var j = null;
    n(M, o);
    var q = null;
    n(A, o);
    var k = null;
    S.prototype.j = function() { var l = j; return l || (j = l = g(S, { 0: { name: "NumberFormat", I: "i18n.phonenumbers.NumberFormat" }, 1: { name: "pattern", required: !0, c: 9, type: String }, 2: { name: "format", required: !0, c: 9, type: String }, 3: { name: "leading_digits_pattern", v: !0, c: 9, type: String }, 4: { name: "national_prefix_formatting_rule", c: 9, type: String }, 6: { name: "national_prefix_optional_when_formatting", c: 8, defaultValue: !1, type: Boolean }, 5: { name: "domestic_carrier_code_formatting_rule", c: 9, type: String } })), l }, S.j = S.prototype.j, M.prototype.j = function() { var l = q; return l || (q = l = g(M, { 0: { name: "PhoneNumberDesc", I: "i18n.phonenumbers.PhoneNumberDesc" }, 2: { name: "national_number_pattern", c: 9, type: String }, 9: { name: "possible_length", v: !0, c: 5, type: Number }, 10: { name: "possible_length_local_only", v: !0, c: 5, type: Number }, 6: { name: "example_number", c: 9, type: String } })), l }, M.j = M.prototype.j, A.prototype.j = function() { var l = k; return l || (k = l = g(A, { 0: { name: "PhoneMetadata", I: "i18n.phonenumbers.PhoneMetadata" }, 1: { name: "general_desc", c: 11, type: M }, 2: { name: "fixed_line", c: 11, type: M }, 3: { name: "mobile", c: 11, type: M }, 4: { name: "toll_free", c: 11, type: M }, 5: { name: "premium_rate", c: 11, type: M }, 6: { name: "shared_cost", c: 11, type: M }, 7: { name: "personal_number", c: 11, type: M }, 8: { name: "voip", c: 11, type: M }, 21: { name: "pager", c: 11, type: M }, 25: { name: "uan", c: 11, type: M }, 27: { name: "emergency", c: 11, type: M }, 28: { name: "voicemail", c: 11, type: M }, 29: { name: "short_code", c: 11, type: M }, 30: { name: "standard_rate", c: 11, type: M }, 31: { name: "carrier_specific", c: 11, type: M }, 33: { name: "sms_services", c: 11, type: M }, 24: { name: "no_international_dialling", c: 11, type: M }, 9: { name: "id", required: !0, c: 9, type: String }, 10: { name: "country_code", c: 5, type: Number }, 11: { name: "international_prefix", c: 9, type: String }, 17: { name: "preferred_international_prefix", c: 9, type: String }, 12: { name: "national_prefix", c: 9, type: String }, 13: { name: "preferred_extn_prefix", c: 9, type: String }, 15: { name: "national_prefix_for_parsing", c: 9, type: String }, 16: { name: "national_prefix_transform_rule", c: 9, type: String }, 18: { name: "same_mobile_and_fixed_line_pattern", c: 8, defaultValue: !1, type: Boolean }, 19: { name: "number_format", v: !0, c: 11, type: S }, 20: { name: "intl_number_format", v: !0, c: 11, type: S }, 22: { name: "main_country_for_code", c: 8, defaultValue: !1, type: Boolean }, 23: { name: "leading_digits", c: 9, type: String }, 26: { name: "leading_zero_possible", c: 8, defaultValue: !1, type: Boolean } })), l }, A.j = A.prototype.j, m.prototype.a = function(l) { throw new l.b, Error("Unimplemented") }, m.prototype.b = function(l, n) { if (11 == l.a || 10 == l.a) return n instanceof o ? n : this.a(l.i.prototype.j(), n); if (14 == l.a) { if ("string" == typeof n && z.test(n)) { var u = Number(n); if (0 < u) return u } return n } if (!l.h) return n; if (u = l.i, u === String) { if ("number" == typeof n) return String(n) } else if (u === Number && "string" == typeof n && ("Infinity" === n || "-Infinity" === n || "NaN" === n || z.test(n))) return Number(n); return n };
    var z = /^-?[0-9]+$/;
    n(b, m), b.prototype.a = function(l, n) { var u = new l.b; return u.g = this, u.a = n, u.b = {}, u }, n(G, b), G.prototype.b = function(l, n) { return 8 == l.a ? !!n : m.prototype.b.apply(this, arguments) }, G.prototype.a = function(l, n) { return G.M.a.call(this, l, n) };
    /*

     Copyright (C) 2010 The Libphonenumber Authors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var ll = { 1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "), 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 800: ["001"], 808: ["001"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 870: ["001"], 878: ["001"], 880: ["BD"], 881: ["001"], 882: ["001"], 883: ["001"], 886: ["TW"], 888: ["001"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 979: ["001"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] },
        nl = {
            800: [null, [null, null, "\\d{8}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "\\d{8}", null, null, null, "12345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "001", 800, null, null, null, null, null, null, null, 1, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            808: [null, [null, null, "\\d{8}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "\\d{8}", null, null, null, "12345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "001", 808, null, null, null, null, null, null, null, 1, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            870: [null, [null, null, "[35-7]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:[356]\\d|7[6-8])\\d{7}", null, null, null, "301234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "001", 870, null, null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            878: [null, [null, null, "10\\d{10}", null, null, null, null, null, null, [12]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "10\\d{10}", null, null, null, "101234567890"], "001", 878, null, null, null, null, null, null, null, 1, [
                    [null, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            881: [null, [null, null, "[67]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "[67]\\d{8}", null, null, null, "612345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "001", 881, null, null, null, null, null, null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            882: [null, [null, null, "[13]\\d{6}(?:\\d{2,5})?|1\\d{7}", null, null, null, null, null, null, [7, 8, 9, 10, 11, 12]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "3(?:(?:(?:2|7\\d{3})\\d|37)\\d\\d|4(?:2|7\\d{3}))\\d{4}", null, null, null, "3421234", null, null, [7, 9, 10, 12]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])|6\\d{1,6})|3(?:45|9\\d{3})\\d{3})\\d{4}", null, null, null, "390123456789"], "001", 882, null, null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                    [null, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]],
                    [null, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                    [null, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                    [null, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[13]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "348[57]\\d{7}", null, null, null, "34851234567", null, null, [11]]
            ],
            883: [null, [null, null, "51\\d{7}(?:\\d{3})?", null, null, null, null, null, null, [9, 12]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "51[013]0\\d{8}|5100\\d{5}", null, null, null, "510012345"], "001", 883, null, null, null, null, null, null, null, 1, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
                    [null, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            888: [null, [null, null, "\\d{11}", null, null, null, null, null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "001", 888, null, null, null, null, null, null, null, 1, [
                    [null, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "\\d{11}", null, null, null, "12345678901"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            979: [null, [null, null, "\\d{9}", null, null, null, null, null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "\\d{9}", null, null, null, "123456789"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "001", 979, null, null, null, null, null, null, null, 1, [
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AC: [null, [null, null, "(?:[01589]\\d|[46])\\d{4}", null, null, null, null, null, null, [5, 6]],
                [null, null, "6[2-467]\\d{3}", null, null, null, "62889", null, null, [5]],
                [null, null, "4\\d{4}", null, null, null, "40123", null, null, [5]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AC", 247, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "[01589]\\d{5}", null, null, null, "542011", null, null, [6]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AD: [null, [null, null, "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", null, null, null, null, null, null, [6, 8, 9]],
                [null, null, "[78]\\d{5}", null, null, null, "712345", null, null, [6]],
                [null, null, "690\\d{6}|[36]\\d{5}", null, null, null, "312345", null, null, [6, 9]],
                [null, null, "180[02]\\d{4}", null, null, null, "18001234", null, null, [8]],
                [null, null, "[19]\\d{5}", null, null, null, "912345", null, null, [6]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AD", 376, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "1800\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AE: [null, [null, null, "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 10, 11, 12]],
                [null, null, "[2-4679][2-8]\\d{6}", null, null, null, "22345678", null, null, [8],
                    [7]
                ],
                [null, null, "5[024-68]\\d{7}", null, null, null, "501234567", null, null, [9]],
                [null, null, "400\\d{6}|800\\d{2,9}", null, null, null, "800123456"],
                [null, null, "900[02]\\d{5}", null, null, null, "900234567", null, null, [9]],
                [null, null, "700[05]\\d{5}", null, null, null, "700012345", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AE", 971, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                    [null, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "600[25]\\d{5}", null, null, null, "600212345", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AF: [null, [null, null, "[2-7]\\d{8}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", null, null, null, "234567890", null, null, null, [7]],
                [null, null, "7(?:[014-9]\\d|2[89]|3[01])\\d{6}", null, null, null, "701234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AF", 93, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                ],
                [
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AG: [null, [null, null, "(?:268|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", null, null, null, "2684601234", null, null, null, [7]],
                [null, null, "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}", null, null, null, "2684641234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, "26848[01]\\d{4}", null, null, null, "2684801234", null, null, null, [7]], "AG", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, "26840[69]\\d{4}", null, null, null, "2684061234", null, null, null, [7]], null, "268", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AI: [null, [null, null, "(?:264|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "2644(?:6[12]|9[78])\\d{4}", null, null, null, "2644612345", null, null, null, [7]],
                [null, null, "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", null, null, null, "2642351234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "AI", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "264", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AL: [null, [null, null, "(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}", null, null, null, null, null, null, [6, 7, 8, 9],
                    [5]
                ],
                [null, null, "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}", null, null, null, "22345678", null, null, [8],
                    [5, 6, 7]
                ],
                [null, null, "6(?:[689][2-9]|7[2-6])\\d{6}", null, null, null, "662123456", null, null, [9]],
                [null, null, "800\\d{4}", null, null, null, "8001234", null, null, [7]],
                [null, null, "900[1-9]\\d\\d", null, null, null, "900123", null, null, [6]],
                [null, null, "808[1-9]\\d\\d", null, null, null, "808123", null, null, [6]],
                [null, null, "700[2-9]\\d{4}", null, null, null, "70021234", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AL", 355, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AM: [null, [null, null, "(?:[1-489]\\d|55|60|77)\\d{6}", null, null, null, null, null, null, [8],
                    [5, 6]
                ],
                [null, null, "(?:(?:1[0-2]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", null, null, null, "10123456", null, null, null, [5, 6]],
                [null, null, "(?:4[1349]|55|77|88|9[13-9])\\d{6}", null, null, null, "77123456"],
                [null, null, "800\\d{5}", null, null, null, "80012345"],
                [null, null, "90[016]\\d{5}", null, null, null, "90012345"],
                [null, null, "80[1-4]\\d{5}", null, null, null, "80112345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}", null, null, null, "60271234"], "AM", 374, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"],
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["[4-7]|88|9[13-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]"], "0 $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AO: [null, [null, null, "[29]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}", null, null, null, "222123456"],
                [null, null, "9[1-49]\\d{7}", null, null, null, "923123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AO", 244, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AR: [null, [null, null, "(?:11|(?:[2368]|9\\d)\\d)\\d{8}", null, null, null, null, null, null, [10, 11],
                    [6, 7, 8]
                ],
                [null, null, "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:[07]\\d|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|6[013-9])|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[012789]\\d|3[1-6]|4[02-9]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:0[0124-9]|[1-357]\\d|4[24-7]|6[02-9]|8[0-79]|9[1236-8])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[069]\\d|1[1568]|2[013-9]|3[145]|4[0-35-9]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[01578]\\d|2[15-7]|3[0-24-9]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}", null, null, null, "1123456789", null, null, [10],
                    [6, 7, 8]
                ],
                [null, null, "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|(?:2(?:2(?:02|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8])|47[3-578]|6(?:2[24-6]|4[6-8]|5[15-8])|9(?:0[1-3]|2\\d|3[1-6]|4[02568]|5[2-4]|6[2-46]|72|8[23]))|3(?:3(?:2[79]|8[2578])|4(?:0[0-24-9]|4[24-7]|6[02-9]|7[126]|9[1-36-8])|5(?:2[1245]|3[237]|4[1-46-9]|6[2-4]|7[1-6]|8[2-5])|7(?:1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:2[15-7]|3[2578]|4[13-6]|5[4-8]|6[1-357-9]|9[124])))[2-9]\\d{5})", null, null, null, "91123456789", null, null, null, [6, 7, 8]],
                [null, null, "800\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "60[04579]\\d{7}", null, null, null, "6001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AR", 54, "00", "0", null, null, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1", null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                    [null, "(\\d{2})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                    [null, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", null, 1],
                    [null, "(\\d{3})", "$1", ["1[0-2]|911"], "$1"]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                    [null, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["911"]],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]],
                    [null, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9[23]"]],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", null, 1]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "810\\d{7}", null, null, null, null, null, null, [10]],
                [null, null, "810\\d{7}", null, null, null, "8101234567", null, null, [10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AS: [null, [null, null, "(?:[58]\\d\\d|684|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "6846(?:22|33|44|55|77|88|9[19])\\d{4}", null, null, null, "6846221234", null, null, null, [7]],
                [null, null, "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", null, null, null, "6847331234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "AS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "684", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AT: [null, [null, null, "[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{6}|[135-7]\\d{5}|[15]\\d{4}|1\\d{3}", null, null, null, null, null, null, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    [3]
                ],
                [null, null, "(?:1(?:11|[2-9]\\d{2,10})|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,9}|4(?:(?:2[1-8]|35|7[1368]|8[2457])\\d{3,9}|63\\d{2,9})|5(?:12\\d{2,9}|(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])\\d{3,9})|6(?:(?:13|2[1-47]|4[135-8]|5[468])\\d{3,9}|62\\d{2,9}))\\d|(?:316|732)\\d{3}", null, null, null, "1234567890", null, null, null, [3]],
                [null, null, "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", null, null, null, "664123456", null, null, [7, 8, 9, 10, 11, 12, 13]],
                [null, null, "800\\d{6,10}", null, null, null, "800123456", null, null, [9, 10, 11, 12, 13]],
                [null, null, "9(?:0[01]|3[019])\\d{6,10}", null, null, null, "900123456", null, null, [9, 10, 11, 12, 13]],
                [null, null, "8(?:10|2[018])\\d{6,10}|828\\d{5}", null, null, null, "810123456", null, null, [8, 9, 10, 11, 12, 13]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", null, null, null, "780123456", null, null, [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                    [null, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                    [null, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                    [null, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                    [null, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AU: [null, [null, null, "1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 10]],
                [null, null, "(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", null, null, null, "212345678", null, null, [9],
                    [8]
                ],
                [null, null, "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", null, null, null, "412345678", null, null, [9]],
                [null, null, "180(?:0\\d{3}|2)\\d{3}", null, null, null, "1800123456", null, null, [7, 10]],
                [null, null, "190[0-26]\\d{6}", null, null, null, "1900123456", null, null, [10]],
                [null, null, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", null, null, null, "1300123456", null, null, [6, 8, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:14(?:5\\d|71)|550\\d)\\d{5}", null, null, null, "550123456", null, null, [9]], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", null, null, "0", null, "0011", null, [
                    [null, "(\\d{3})(\\d{3})", "$1 $2", ["19"]],
                    [null, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]],
                    [null, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]],
                    [null, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                ],
                [
                    [null, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                ],
                [null, null, "16\\d{3,7}", null, null, null, "1612345", null, null, [5, 6, 7, 8, 9]], 1, null, [null, null, "1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}", null, null, null, null, null, null, [6, 7, 8, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AW: [null, [null, null, "(?:[25-79]\\d\\d|800)\\d{4}", null, null, null, null, null, null, [7]],
                [null, null, "5(?:2\\d|8[1-9])\\d{4}", null, null, null, "5212345"],
                [null, null, "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", null, null, null, "5601234"],
                [null, null, "800\\d{4}", null, null, null, "8001234"],
                [null, null, "900\\d{4}", null, null, null, "9001234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:28\\d|501)\\d{4}", null, null, null, "5011234"], "AW", 297, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AX: [null, [null, null, "(?:(?:[1247]\\d|3[0-46-9]|[56]0)\\d\\d|800)\\d{4,6}|(?:[1-47]\\d|50)\\d{4,5}|2\\d{4}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 10]],
                [null, null, "18[1-8]\\d{3,6}", null, null, null, "181234567", null, null, [6, 7, 8, 9]],
                [null, null, "(?:4[0-8]|50)\\d{4,8}", null, null, null, "412345678", null, null, [6, 7, 8, 9, 10]],
                [null, null, "800\\d{4,6}", null, null, null, "800123456", null, null, [7, 8, 9]],
                [null, null, "[67]00\\d{5,6}", null, null, null, "600123456", null, null, [8, 9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", null, null, "0", null, "00", null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "18", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", null, null, null, "10112345"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            AZ: [null, [null, null, "(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "(?:(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}", null, null, null, "123123456", null, null, null, [7]],
                [null, null, "(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}", null, null, null, "401234567"],
                [null, null, "88\\d{7}", null, null, null, "881234567"],
                [null, null, "900200\\d{3}", null, null, null, "900200123"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "AZ", 994, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                ],
                [
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BA: [null, [null, null, "(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}", null, null, null, null, null, null, [8, 9],
                    [6]
                ],
                [null, null, "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", null, null, null, "30212345", null, null, [8],
                    [6]
                ],
                [null, null, "6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}", null, null, null, "61123456"],
                [null, null, "8[08]\\d{6}", null, null, null, "80123456", null, null, [8]],
                [null, null, "9[0246]\\d{6}", null, null, null, "90123456", null, null, [8]],
                [null, null, "8[12]\\d{6}", null, null, null, "82123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BA", 387, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                ],
                [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70(?:3[0146]|[56]0)\\d{4}", null, null, null, "70341234", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BB: [null, [null, null, "(?:246|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", null, null, null, "2464123456", null, null, null, [7]],
                [null, null, "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", null, null, null, "2462501234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "(?:246976|900[2-9]\\d\\d)\\d{4}", null, null, null, "9002123456", null, null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, "24631\\d{5}", null, null, null, "2463101234", null, null, null, [7]], "BB", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "246", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}", null, null, null, "2464301234", null, null, null, [7]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BD: [null, [null, null, "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9, 10]],
                [null, null, "(?:(?:2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[13][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))|7(?:02|21\\d|[3-589]1|6[12]|72[24])\\d|8(?:(?:[01]|217|3[12])\\d|4[12]|[5-7](?:1\\d|2)))\\d|3(?:(?:0(?:2[348]\\d|3[2-6])|(?:1(?:2[5-7]|[5-7])|3(?:1|24)|[5-7]1)\\d)\\d|2(?:1\\d\\d|2(?:[35]\\d\\d|4))|4(?:1\\d\\d|2(?:[25]\\d\\d|[47]))|8(?:1\\d\\d|2(?:(?:2\\d|4)\\d|3)))|4(?:0(?:2(?:[09]\\d|7)|33\\d\\d)|(?:1\\d|4(?:2[2-46]|5[25])|8(?:23|54))\\d\\d|2(?:1\\d\\d|2(?:[25]|[67]\\d\\d))|3(?:1\\d\\d(?:\\d{2})?|(?:2[236-9]|32)\\d\\d)|525|6(?:(?:[18]|2[3-6]|62)\\d\\d|5(?:[38]|[5-7]\\d\\d))|9(?:(?:[18]|2[2-5])\\d\\d|53\\d\\d?))|5(?:(?:02[03489]|1|22[2457]|32[35-79]|42[46]|[58]26|724)\\d\\d|6(?:(?:[18]|53)\\d\\d|2))|6(?:(?:(?:[04]2[34]|32[3478]|52[47]|[78]2[2-5]|92[2-6])\\d|6(?:[18]\\d|6(?:2(?:2|[34]\\d)|5[245]\\d)))\\d|2(?:(?:2[2-5]|8)\\d\\d|5(?:[3-5]\\d\\d|7)))|9(?:[24]1\\d\\d|[35]1))\\d{3}|(?:3(?:0(?:2[02-9]\\d|3[56])|(?:22[1-5]|32[2-6]|422)\\d|529)|(?:4(?:22[2-8]|32[02-9]|(?:[48][18]|71)\\d|5(?:1\\d|23)|6(?:2[467]|5[3-57]))|5(?:[2-47-9]1\\d|5(?:1\\d|26))|6(?:0(?:1\\d|24)|[3-589]1\\d|665[35])|81|9(?:[024]2|1\\d|81))\\d|732)\\d{3}|(?:4[46]23|5(?:222|32[37]))\\d{3}", null, null, null, "27111234"],
                [null, null, "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", null, null, null, "1812345678", null, null, [10]],
                [null, null, "80[03]\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", null, null, null, "9604123456", null, null, [10]], "BD", 880, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"],
                    [null, "(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[2-5]1|[67]|8[013-9])|4(?:[235]1|4[01346-9]|6[168]|7|[89][18])|5(?:[2-578]1|6[128]|9)|6(?:[0389]1|28|4[14]|5|6[01346-9])|7(?:[2-589]|61)|8(?:0[014-9]|[12]|[3-7]1)|9(?:[24]1|[358])"], "0$1"],
                    [null, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
                    [null, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BE: [null, [null, null, "4\\d{8}|[1-9]\\d{7}", null, null, null, null, null, null, [8, 9]],
                [null, null, "(?:(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|9[2-4])\\d|8(?:0[2-8]|[1-79]\\d))\\d{5}", null, null, null, "12345678", null, null, [8]],
                [null, null, "4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}", null, null, null, "470123456", null, null, [9]],
                [null, null, "800[1-9]\\d{4}", null, null, null, "80012345", null, null, [8]],
                [null, null, "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}", null, null, null, "90012345", null, null, [8]],
                [null, null, "7879\\d{4}", null, null, null, "78791234", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BE", 32, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-7]|8(?:0[2-8]|[1-79])"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}", null, null, null, "78102345", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BF: [null, [null, null, "[25-7]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", null, null, null, "20491234"],
                [null, null, "(?:5[124-8]|[67]\\d)\\d{6}", null, null, null, "70123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BF", 226, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25-7]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BG: [null, [null, null, "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9],
                    [4, 5]
                ],
                [null, null, "(?:(?:[236]\\d|5[1-9]|8[1-6]|9[1-7])\\d|4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}|2\\d{5}", null, null, null, "2123456", null, null, [6, 7, 8],
                    [4, 5]
                ],
                [null, null, "(?:4(?:3[07-9]|8\\d)|(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d)\\d{5}", null, null, null, "48123456", null, null, [8, 9]],
                [null, null, "800\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, "90\\d{6}", null, null, null, "90123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "700\\d{5}", null, null, null, "70012345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BG", 359, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|70[1-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["7|80"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BH: [null, [null, null, "[136-9]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}", null, null, null, "17001234"],
                [null, null, "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}", null, null, null, "36001234"],
                [null, null, "80\\d{6}", null, null, null, "80123456"],
                [null, null, "(?:87|9[014578])\\d{6}", null, null, null, "90123456"],
                [null, null, "84\\d{6}", null, null, null, "84123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BH", 973, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[1367]|8[047]|9[014578]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BI: [null, [null, null, "(?:[267]\\d|31)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "22\\d{6}", null, null, null, "22201234"],
                [null, null, "(?:29|31|6[189]|7[125-9])\\d{6}", null, null, null, "79561234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BI", 257, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|6[189]|7[125-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BJ: [null, [null, null, "[2689]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:02|1[037]|2[45]|3[68])\\d{5}", null, null, null, "20211234"],
                [null, null, "(?:6\\d|9[03-9])\\d{6}", null, null, null, "90011234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "857[58]\\d{4}", null, null, null, "85751234"], "BJ", 229, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "81\\d{6}", null, null, null, "81123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BL: [null, [null, null, "(?:590|69\\d)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "590(?:2[7-9]|5[12]|87)\\d{4}", null, null, null, "590271234"],
                [null, null, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", null, null, null, "690001234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BL", 590, "00", "0", null, null, "0", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BM: [null, [null, null, "(?:441|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}", null, null, null, "4412345678", null, null, null, [7]],
                [null, null, "441(?:[37]\\d|5[0-39])\\d{5}", null, null, null, "4413701234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "BM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "441", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BN: [null, [null, null, "[2-578]\\d{6}", null, null, null, null, null, null, [7]],
                [null, null, "(?:2(?:[013-9]\\d|2[0-7])|[3-5]\\d\\d)\\d{4}", null, null, null, "2345678"],
                [null, null, "(?:22[89]|[78]\\d\\d)\\d{4}", null, null, null, "7123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BN", 673, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BO: [null, [null, null, "(?:[2-467]\\d{3}|80017)\\d{4}", null, null, null, null, null, null, [8, 9],
                    [7]
                ],
                [null, null, "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", null, null, null, "22123456", null, null, [8],
                    [7]
                ],
                [null, null, "[67]\\d{7}", null, null, null, "71234567", null, null, [8]],
                [null, null, "80017\\d{4}", null, null, null, "800171234", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BO", 591, "00(?:1\\d)?", "0", null, null, "0(1\\d)?", null, null, null, [
                    [null, "(\\d)(\\d{7})", "$1 $2", ["[2-4]"], null, "0$CC $1"],
                    [null, "(\\d{8})", "$1", ["[67]"], null, "0$CC $1"],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"], null, "0$CC $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BQ: [null, [null, null, "(?:[34]1|7\\d)\\d{5}", null, null, null, null, null, null, [7]],
                [null, null, "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", null, null, null, "7151234"],
                [null, null, "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", null, null, null, "3181234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BQ", 599, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "[347]", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BR: [null, [null, null, "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", null, null, null, null, null, null, [8, 9, 10, 11]],
                [null, null, "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", null, null, null, "1123456789", null, null, [10],
                    [8]
                ],
                [null, null, "(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}", null, null, null, "11961234567", null, null, [10, 11],
                    [8]
                ],
                [null, null, "800\\d{6,7}", null, null, null, "800123456", null, null, [9, 10]],
                [null, null, "(?:300|[59]00\\d?)\\d{6}", null, null, null, "300123456", null, null, [9, 10]],
                [null, null, "(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}", null, null, null, "40041234", null, null, [8, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", null, null, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "300|4(?:0(?:0|20)|370)"]],
                    [null, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
                    [null, "(\\d{3,5})", "$1", ["1[125689]"]],
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:0[1-9]|[1-9])"]],
                    [null, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:0[1-9]|[1-9])"]],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"],
                    [null, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)", "0 $CC ($1)"]
                ],
                [
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "300|4(?:0(?:0|20)|370)"]],
                    [null, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"],
                    [null, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)", "0 $CC ($1)"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:300\\d|40(?:0\\d|20))\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BS: [null, [null, null, "(?:242|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", null, null, null, "2423456789", null, null, null, [7]],
                [null, null, "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", null, null, null, "2423591234", null, null, null, [7]],
                [null, null, "(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}", null, null, null, "8002123456", null, null, null, [7]],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "BS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "242", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "242225[0-46-9]\\d{3}", null, null, null, "2422250123"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BT: [null, [null, null, "[17]\\d{7}|[2-8]\\d{6}", null, null, null, null, null, null, [7, 8],
                    [6]
                ],
                [null, null, "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", null, null, null, "2345678", null, null, [7],
                    [6]
                ],
                [null, null, "(?:1[67]|77)\\d{6}", null, null, null, "17123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BT", 975, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[23568]|4[5-7]|7[246]"]],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BW: [null, [null, null, "(?:(?:[2-6]|7\\d)\\d|90)\\d{5}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", null, null, null, "2401234", null, null, [7]],
                [null, null, "7(?:[1-6]\\d{3}|7(?:[014-8]\\d\\d|200))\\d{3}", null, null, null, "71123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "90\\d{5}", null, null, null, "9012345", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}", null, null, null, "79101234", null, null, [8]], "BW", 267, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BY: [null, [null, null, "(?:(?:[12]|8[0-7]\\d)\\d|33|44|902)\\d{7}|8(?:[05-79]\\d|1[0-489])\\d{7}|8[0-79]\\d{5,7}|8\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9, 10, 11],
                    [5]
                ],
                [null, null, "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", null, null, null, "152450911", null, null, [9],
                    [5, 6, 7]
                ],
                [null, null, "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", null, null, null, "294911911", null, null, [9]],
                [null, null, "8(?:0[013]|20\\d)\\d{7}|800\\d{3,6}", null, null, null, "8011234567"],
                [null, null, "(?:810|902)\\d{7}", null, null, null, "9021234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "249\\d{6}", null, null, null, "249123456", null, null, [9]], "BY", 375, "810", "8", null, null, "0|80?", null, "8~10", null, [
                    [null, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"],
                    [null, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:[56]|7[179])|2[1-3]", "1(?:[56]|7(?:1[3-9]|7|9[2-7]))|2[1-3]"], "8 0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                    [null, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:8(?:0[013]|10|20\\d)|902)\\d{7}|800\\d{3,6}"],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            BZ: [null, [null, null, "(?:0800\\d|[2-8])\\d{6}", null, null, null, null, null, null, [7, 11]],
                [null, null, "(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}", null, null, null, "2221234", null, null, [7]],
                [null, null, "6[0-35-7]\\d{5}", null, null, null, "6221234", null, null, [7]],
                [null, null, "0800\\d{7}", null, null, null, "08001234123", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "BZ", 501, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                    [null, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CA: [null, [null, null, "(?:[2-8]\\d|90)\\d{8}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, null, null, "5062345678", null, null, null, [7]],
                [null, null, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, null, null, "5062345678", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, "600[2-9]\\d{6}", null, null, null, "6002012345"], "CA", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CC: [null, [null, null, "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", null, null, null, null, null, null, [6, 7, 8, 9, 10]],
                [null, null, "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", null, null, null, "891621234", null, null, [9],
                    [8]
                ],
                [null, null, "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", null, null, null, "412345678", null, null, [9]],
                [null, null, "180(?:0\\d{3}|2)\\d{3}", null, null, null, "1800123456", null, null, [7, 10]],
                [null, null, "190[0-26]\\d{6}", null, null, null, "1900123456", null, null, [10]],
                [null, null, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", null, null, null, "1300123456", null, null, [6, 8, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:14(?:5\\d|71)|550\\d)\\d{5}", null, null, null, "550123456", null, null, [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", null, null, "0|([59]\\d{7})$", "8$1", "0011", null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CD: [null, [null, null, "[189]\\d{8}|[1-68]\\d{6}", null, null, null, null, null, null, [7, 9]],
                [null, null, "12\\d{7}|[1-6]\\d{6}", null, null, null, "1234567"],
                [null, null, "(?:8(?:[0-2459]\\d\\d|8)|9[017-9]\\d\\d)\\d{5}", null, null, null, "991234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CD", 243, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CF: [null, [null, null, "(?:[27]\\d{3}|8776)\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, "2[12]\\d{6}", null, null, null, "21612345"],
                [null, null, "7[0257]\\d{6}", null, null, null, "70012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "8776\\d{4}", null, null, null, "87761234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CF", 236, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CG: [null, [null, null, "(?:(?:0\\d|80)\\d|222)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "222[1-589]\\d{5}", null, null, null, "222123456"],
                [null, null, "0[14-6]\\d{7}", null, null, null, "061234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "80(?:0\\d\\d|11[0-4])\\d{4}", null, null, null, "800123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CG", 242, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CH: [null, [null, null, "8\\d{11}|[2-9]\\d{8}", null, null, null, null, null, null, [9, 12]],
                [null, null, "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", null, null, null, "212345678", null, null, [9]],
                [null, null, "7[35-9]\\d{7}", null, null, null, "781234567", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "90[016]\\d{6}", null, null, null, "900123456", null, null, [9]],
                [null, null, "84[0248]\\d{6}", null, null, null, "840123456", null, null, [9]],
                [null, null, "878\\d{6}", null, null, null, "878123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CH", 41, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|9"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                ], null, [null, null, "74[0248]\\d{6}", null, null, null, "740123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5[18]\\d{7}", null, null, null, "581234567", null, null, [9]], null, null, [null, null, "860\\d{9}", null, null, null, "860123456789", null, null, [12]]
            ],
            CI: [null, [null, null, "[02-8]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", null, null, null, "21234567"],
                [null, null, "(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}", null, null, null, "01234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CI", 225, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CK: [null, [null, null, "[2-8]\\d{4}", null, null, null, null, null, null, [5]],
                [null, null, "(?:2\\d|3[13-7]|4[1-5])\\d{3}", null, null, null, "21234"],
                [null, null, "[5-8]\\d{4}", null, null, null, "71234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CK", 682, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CL: [null, [null, null, "(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}", null, null, null, null, null, null, [9, 10, 11]],
                [null, null, "(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}", null, null, null, "221234567", null, null, [9]],
                [null, null, "(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}", null, null, null, "221234567", null, null, [9]],
                [null, null, "(?:1230\\d|800)\\d{6}", null, null, null, "800123456", null, null, [9, 11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "600\\d{7,8}", null, null, null, "6001234567", null, null, [10, 11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "44\\d{7}", null, null, null, "441234567", null, null, [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", null, null, null, null, null, null, 1, [
                    [null, "(\\d{4})", "$1", ["1(?:[03-58]|[29]1)"]],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2(?:2|32)", "2(?:2|32[0-46-8])"], "($1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                    [null, "(\\d{5})(\\d{4})", "$1 $2", ["2"], "($1)"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"]],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"]],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ],
                [
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2(?:2|32)", "2(?:2|32[0-46-8])"], "($1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                    [null, "(\\d{5})(\\d{4})", "$1 $2", ["2"], "($1)"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"]],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"]],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "600\\d{7,8}", null, null, null, null, null, null, [10, 11]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CM: [null, [null, null, "(?:[26]\\d\\d|88)\\d{6}", null, null, null, null, null, null, [8, 9]],
                [null, null, "2(?:22|33|4[23])\\d{6}", null, null, null, "222123456", null, null, [9]],
                [null, null, "6[5-9]\\d{7}", null, null, null, "671234567", null, null, [9]],
                [null, null, "88\\d{6}", null, null, null, "88012345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CM", 237, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                    [null, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CN: [null, [null, null, "(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}", null, null, null, null, null, null, [7, 8, 9, 10, 11, 12],
                    [5, 6]
                ],
                [null, null, "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})", null, null, null, "1012345678", null, null, null, [5, 6]],
                [null, null, "1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|6[267]\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[189]\\d{2})\\d{6}", null, null, null, "13123456789", null, null, [11]],
                [null, null, "(?:10)?800\\d{7}", null, null, null, "8001234567", null, null, [10, 12]],
                [null, null, "16[08]\\d{5}", null, null, null, "16812345", null, null, [8]],
                [null, null, "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", null, null, null, "4001234567", null, null, [7, 8, 9, 10, 11],
                    [5, 6]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CN", 86, "(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00", "0", null, null, "0|(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))", null, "00", null, [
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                    [null, "(\\d{5,6})", "$1", ["100|95"]],
                    [null, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                    [null, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1", "$CC $1"],
                    [null, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"]],
                    [null, "(\\d{2})(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|6[267])"], null, "$CC $1"],
                    [null, "(\\d{5})(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                    [null, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                    [null, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                    [null, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1", "$CC $1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|6[267])"], null, "$CC $1"],
                    [null, "(\\d{5})(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                    [null, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}", null, null, null, null, null, null, [10, 11, 12]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CO: [null, [null, null, "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", null, null, null, null, null, null, [8, 10, 11],
                    [7]
                ],
                [null, null, "[124-8][2-9]\\d{6}", null, null, null, "12345678", null, null, [8],
                    [7]
                ],
                [null, null, "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", null, null, null, "3211234567", null, null, [10]],
                [null, null, "1800\\d{7}", null, null, null, "18001234567", null, null, [11]],
                [null, null, "19(?:0[01]|4[78])\\d{7}", null, null, null, "19001234567", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", null, null, "0([3579]|4(?:[14]4|56))?", null, null, null, [
                    [null, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[24-8]"], "($1)", "0$CC $1"],
                    [null, "(\\d{3})(\\d{7})", "$1 $2", ["3"], null, "0$CC $1"],
                    [null, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1"]
                ],
                [
                    [null, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[24-8]"], "($1)", "0$CC $1"],
                    [null, "(\\d{3})(\\d{7})", "$1 $2", ["3"], null, "0$CC $1"],
                    [null, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9)", "1(?:800|9)"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CR: [null, [null, null, "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", null, null, null, null, null, null, [8, 10]],
                [null, null, "2(?:[024-7]\\d\\d|1(?:0[7-9]|[1-9]\\d))\\d{4}", null, null, null, "22123456", null, null, [8]],
                [null, null, "(?:(?:5(?:0[01]|7[0-3])|(?:7[0-3]|8[3-9])\\d)\\d\\d|6(?:[0-4]\\d{3}|500[01]))\\d{3}", null, null, null, "83123456", null, null, [8]],
                [null, null, "800\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "90[059]\\d{7}", null, null, null, "9001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:210[0-6]|4\\d{3}|5100)\\d{4}", null, null, null, "40001234", null, null, [8]], "CR", 506, "00", null, null, null, "(19(?:0[0-2468]|1[09]|20|66|77|99))", null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], null, "$CC $1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"], null, "$CC $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CU: [null, [null, null, "[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}", null, null, null, null, null, null, [6, 7, 8],
                    [4, 5]
                ],
                [null, null, "(?:2[1-4]|7\\d)\\d{5,6}|(?:3[1-3]|4[1-35-8])\\d{6}|3[23]\\d{4,5}|4[12578]\\d{5}|4[78]\\d{4}", null, null, null, "71234567", null, null, null, [4, 5]],
                [null, null, "5\\d{7}", null, null, null, "51234567", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CU", 53, "119", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"],
                    [null, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                    [null, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CV: [null, [null, null, "[2-59]\\d{6}", null, null, null, null, null, null, [7]],
                [null, null, "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", null, null, null, "2211234"],
                [null, null, "(?:[34][36]|5[1-389]|9\\d)\\d{5}", null, null, null, "9911234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CV", 238, "0", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CW: [null, [null, null, "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", null, null, null, null, null, null, [7, 8]],
                [null, null, "9(?:(?:[48]\\d|50)\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", null, null, null, "94151234"],
                [null, null, "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", null, null, null, "95181234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "60[0-2]\\d{4}", null, null, null, "6001234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "CW", 599, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                ], null, [null, null, "955\\d{5}", null, null, null, "95581234", null, null, [8]], 1, "[69]", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CX: [null, [null, null, "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", null, null, null, null, null, null, [6, 7, 8, 9, 10]],
                [null, null, "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", null, null, null, "891641234", null, null, [9],
                    [8]
                ],
                [null, null, "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", null, null, null, "412345678", null, null, [9]],
                [null, null, "180(?:0\\d{3}|2)\\d{3}", null, null, null, "1800123456", null, null, [7, 10]],
                [null, null, "190[0-26]\\d{6}", null, null, null, "1900123456", null, null, [10]],
                [null, null, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", null, null, null, "1300123456", null, null, [6, 8, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:14(?:5\\d|71)|550\\d)\\d{5}", null, null, null, "550123456", null, null, [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", null, null, "0|([59]\\d{7})$", "8$1", "0011", null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CY: [null, [null, null, "(?:[279]\\d|[58]0)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "2[2-6]\\d{6}", null, null, null, "22345678"],
                [null, null, "9[4-79]\\d{6}", null, null, null, "96123456"],
                [null, null, "800\\d{5}", null, null, null, "80001234"],
                [null, null, "90[09]\\d{5}", null, null, null, "90012345"],
                [null, null, "80[1-9]\\d{5}", null, null, null, "80112345"],
                [null, null, "700\\d{5}", null, null, null, "70012345"],
                [null, null, null, null, null, null, null, null, null, [-1]], "CY", 357, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:50|77)\\d{6}", null, null, null, "77123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            CZ: [null, [null, null, "(?:[2-578]\\d|60|9\\d{1,4})\\d{7}", null, null, null, null, null, null, [9, 10, 11, 12]],
                [null, null, "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", null, null, null, "212345678", null, null, [9]],
                [null, null, "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", null, null, null, "601123456", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "9(?:0[05689]|76)\\d{6}", null, null, null, "900123456", null, null, [9]],
                [null, null, "8[134]\\d{7}", null, null, null, "811234567", null, null, [9]],
                [null, null, "70[01]\\d{6}", null, null, null, "700123456", null, null, [9]],
                [null, null, "9[17]0\\d{6}", null, null, null, "910123456", null, null, [9]], "CZ", 420, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "9(?:5\\d|7[2-4])\\d{6}", null, null, null, "972123456", null, null, [9]], null, null, [null, null, "9(?:3\\d{9}|6\\d{7,10})", null, null, null, "93123456789"]
            ],
            DE: [null, [null, null, "(?:1|[235-9]\\d{11}|4(?:[0-8]\\d{2,10}|9(?:[05]\\d{7}|[46][1-8]\\d{2,6})))\\d{3}|[1-35-9]\\d{6,13}|49(?:(?:[0-25]\\d|3[1-689])\\d{4,8}|4[1-8]\\d{4}|6[0-8]\\d{3,4}|7[1-7]\\d{5,8})|497[0-7]\\d{4}|49(?:[0-2579]\\d|[34][1-9])\\d{3}|[1-9]\\d{5}|[13468]\\d{4}", null, null, null, null, null, null, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [3]
                ],
                [null, null, "(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-3589]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|[29]\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{4,12}|3(?:(?:[03569]\\d|4[0-79]|7[1-7]|8[1-8])\\d{4,12}|2\\d{9})|4(?:(?:[02-48]\\d|1[02-9]|5[0-6]|6[0-8]|7[0-79])\\d{4,12}|9(?:[0-37]\\d{4,9}|[4-6]\\d{4,10}))|(?:2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:0\\d?|[35-9][15]|4[015])|4(?:0\\d?|[2-9]1)|[57][1-9]1|[68](?:[1-8]1|9\\d?)|9(?:06|[1-9]1))\\d{3}", null, null, null, "30123456", null, null, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [3, 4]
                ],
                [null, null, "1(?:5[0-25-9]\\d{8}|(?:6[023]|7\\d)\\d{7,8})", null, null, null, "15123456789", null, null, [10, 11]],
                [null, null, "800\\d{7,12}", null, null, null, "8001234567890", null, null, [10, 11, 12, 13, 14, 15]],
                [null, null, "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", null, null, null, "9001234567", null, null, [10, 11]],
                [null, null, "1(?:3(?:7[1-6]\\d\\d|8)|80\\d{1,7})\\d{4}", null, null, null, "18012345", null, null, [7, 8, 9, 10, 11, 12, 13, 14]],
                [null, null, "700\\d{8}", null, null, null, "70012345678", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]], "DE", 49, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                    [null, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)", "2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)"], "0$1"],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                    [null, "(\\d{4})(\\d{3,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])"], "0$1"],
                    [null, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                    [null, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                    [null, "(\\d{5})(\\d{3,10})", "$1 $2", ["3"], "0$1"],
                    [null, "(\\d{3})(\\d{7,8})", "$1 $2", ["1(?:6[02-489]|7)"], "0$1"],
                    [null, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                    [null, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                    [null, "(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    [null, "(\\d{3})(\\d{8})", "$1 $2", ["18[2-579]", "18[2-579]", "18(?:[2-479]|5(?:0[1-9]|[1-9]))"], "0$1"],
                    [null, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                    [null, "(\\d{5})(\\d{6})", "$1 $2", ["18"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"], "0$1"],
                    [null, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15"], "0$1"]
                ], null, [null, null, "16(?:4\\d{1,10}|[89]\\d{1,11})", null, null, null, "16412345", null, null, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "18(?:1\\d{5,11}|[2-9]\\d{8})", null, null, null, "18500123456", null, null, [8, 9, 10, 11, 12, 13, 14]], null, null, [null, null, "1(?:5(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)|(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d?)\\d{7}", null, null, null, "177991234567", null, null, [12, 13]]
            ],
            DJ: [null, [null, null, "(?:2\\d|77)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:1[2-5]|7[45])\\d{5}", null, null, null, "21360003"],
                [null, null, "77\\d{6}", null, null, null, "77831001"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "DJ", 253, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            DK: [null, [null, null, "[2-9]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", null, null, null, "32123456"],
                [null, null, "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", null, null, null, "32123456"],
                [null, null, "80\\d{6}", null, null, null, "80123456"],
                [null, null, "90\\d{6}", null, null, null, "90123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "DK", 45, "00", null, null, null, null, null, null, 1, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            DM: [null, [null, null, "(?:[58]\\d\\d|767|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", null, null, null, "7674201234", null, null, null, [7]],
                [null, null, "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", null, null, null, "7672251234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "DM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "767", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            DO: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", null, null, null, "8092345678", null, null, null, [7]],
                [null, null, "8[024]9[2-9]\\d{6}", null, null, null, "8092345678", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "DO", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "8[024]9", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            DZ: [null, [null, null, "(?:[1-4]|[5-79]\\d|80)\\d{7}", null, null, null, null, null, null, [8, 9]],
                [null, null, "(?:(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d|9619)\\d{5}", null, null, null, "12345678"],
                [null, null, "(?:(?:5[4-6]|7[7-9])\\d|6(?:[569]\\d|7[0-6]))\\d{6}", null, null, null, "551234567", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "80[3-689]1\\d{5}", null, null, null, "808123456", null, null, [9]],
                [null, null, "80[12]1\\d{5}", null, null, null, "801123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "98[23]\\d{6}", null, null, null, "983123456", null, null, [9]], "DZ", 213, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            EC: [null, [null, null, "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", null, null, null, null, null, null, [8, 9, 10, 11],
                    [7]
                ],
                [null, null, "[2-7][2-7]\\d{6}", null, null, null, "22123456", null, null, [8],
                    [7]
                ],
                [null, null, "9(?:(?:39|[57][89]|[89]\\d)\\d|6(?:[0-27-9]\\d|30))\\d{5}", null, null, null, "991234567", null, null, [9]],
                [null, null, "1800\\d{6,7}", null, null, null, "18001234567", null, null, [10, 11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "[2-7]890\\d{4}", null, null, null, "28901234", null, null, [8]], "EC", 593, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]],
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                ],
                [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            EE: [null, [null, null, "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", null, null, null, null, null, null, [7, 8, 10]],
                [null, null, "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", null, null, null, "3212345", null, null, [7]],
                [null, null, "(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", null, null, null, "51234567", null, null, [7, 8]],
                [null, null, "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", null, null, null, "80012345"],
                [null, null, "(?:40\\d\\d|900)\\d{4}", null, null, null, "9001234", null, null, [7, 8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70[0-2]\\d{5}", null, null, null, "70012345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], "EE", 372, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                    [null, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]],
                    [null, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "800[2-9]\\d{3}", null, null, null, null, null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            EG: [null, [null, null, "(?:[189]\\d?|[24-6])\\d{8}|[13]\\d{7}", null, null, null, null, null, null, [8, 9, 10],
                    [6, 7]
                ],
                [null, null, "(?:1(?:3[23]|5\\d?)|(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|5(?:0[2-7]|5\\d|7[23])|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}", null, null, null, "234567890", null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "1[0-25]\\d{8}", null, null, null, "1001234567", null, null, [10]],
                [null, null, "800\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "900\\d{7}", null, null, null, "9001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "EG", 20, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                    [null, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            EH: [null, [null, null, "[5-8]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, "528[89]\\d{5}", null, null, null, "528812345"],
                [null, null, "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}", null, null, null, "650123456"],
                [null, null, "80\\d{7}", null, null, null, "801234567"],
                [null, null, "89\\d{7}", null, null, null, "891234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5924[01]\\d{4}", null, null, null, "592401234"], "EH", 212, "00", "0", null, null, "0", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "528[89]", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ER: [null, [null, null, "[178]\\d{6}", null, null, null, null, null, null, [7],
                    [6]
                ],
                [null, null, "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", null, null, null, "8370362", null, null, null, [6]],
                [null, null, "(?:17[1-3]|7\\d\\d)\\d{4}", null, null, null, "7123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "ER", 291, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ES: [null, [null, null, "(?:51|[6-9]\\d)\\d{7}", null, null, null, null, null, null, [9]],
                [null, null, "(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{4}|9(?:(?:(?:[135]\\d|[28][0-8]|4[1-9])\\d\\d|7(?:[124-9]\\d\\d|3(?:[0-8]\\d|9[1-9])))\\d\\d|6(?:[0-8]\\d{4}|9(?:0(?:[0-57-9]\\d\\d|6(?:0[0-8]|1[1-9]|[2-9]\\d))|[1-9]\\d{3}))))\\d\\d", null, null, null, "810123456"],
                [null, null, "(?:(?:6\\d|7[1-48])\\d{5}|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d", null, null, null, "612345678"],
                [null, null, "[89]00\\d{6}", null, null, null, "800123456"],
                [null, null, "80[367]\\d{6}", null, null, null, "803123456"],
                [null, null, "90[12]\\d{6}", null, null, null, "901123456"],
                [null, null, "70\\d{7}", null, null, null, "701234567"],
                [null, null, null, null, null, null, null, null, null, [-1]], "ES", 34, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|7[0-48]|9(?:0[12]|[1-8])"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "51\\d{7}", null, null, null, "511234567"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ET: [null, [null, null, "(?:11|[2-59]\\d)\\d{7}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", null, null, null, "111112345", null, null, null, [7]],
                [null, null, "9\\d{8}", null, null, null, "911234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "ET", 251, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            FI: [null, [null, null, "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 10]],
                [null, null, "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", null, null, null, "131234567", null, null, [5, 6, 7, 8, 9]],
                [null, null, "(?:4[0-8]|50)\\d{4,8}", null, null, null, "412345678", null, null, [6, 7, 8, 9, 10]],
                [null, null, "800\\d{4,6}", null, null, null, "800123456", null, null, [7, 8, 9]],
                [null, null, "[67]00\\d{5,6}", null, null, null, "600123456", null, null, [8, 9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", null, null, "0", null, "00", null, [
                    [null, "(\\d{5})", "$1", ["7"], "0$1"],
                    [null, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                    [null, "(\\d{2})(\\d{4,8})", "$1 $2", ["1(?:0[1-9]|[3-79][1-8]|8)|2(?:0[1-9]|9)|[45]|7[135]"], "0$1"],
                    [null, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:1|20)0|[36-8]"], "0$1"]
                ],
                [
                    [null, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                    [null, "(\\d{2})(\\d{4,8})", "$1 $2", ["1(?:0[1-9]|[3-79][1-8]|8)|2(?:0[1-9]|9)|[45]|7[135]"], "0$1"],
                    [null, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:1|20)0|[36-8]"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], 1, "1[03-79]|[2-9]", [null, null, "[13]00\\d{3,7}|20(?:0\\d{3,7}|(?:2[023]|9[89])\\d{1,6})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})"],
                [null, null, "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", null, null, null, "10112345"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            FJ: [null, [null, null, "(?:(?:0800\\d|[235-9])\\d|45)\\d{5}", null, null, null, null, null, null, [7, 11]],
                [null, null, "(?:(?:3[0-5]|8[58])\\d|6(?:03|[25-7]\\d))\\d{4}", null, null, null, "3212345", null, null, [7]],
                [null, null, "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", null, null, null, "7012345", null, null, [7]],
                [null, null, "0800\\d{7}", null, null, null, "08001234567", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "FJ", 679, "0(?:0|52)", null, null, null, null, null, "00", null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            FK: [null, [null, null, "[2-7]\\d{4}", null, null, null, null, null, null, [5]],
                [null, null, "[2-47]\\d{4}", null, null, null, "31234"],
                [null, null, "[56]\\d{4}", null, null, null, "51234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "FK", 500, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            FM: [null, [null, null, "[39]\\d{6}", null, null, null, null, null, null, [7]],
                [null, null, "(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}", null, null, null, "3201234"],
                [null, null, "(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}", null, null, null, "3501234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "FM", 691, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["3(?:20|[357])|9", "3(?:20[1-9]|[357])|9"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            FO: [null, [null, null, "(?:[2-8]\\d|90)\\d{4}", null, null, null, null, null, null, [6]],
                [null, null, "(?:20|[34]\\d|8[19])\\d{4}", null, null, null, "201234"],
                [null, null, "(?:[27][1-9]|5\\d)\\d{4}", null, null, null, "211234"],
                [null, null, "80[257-9]\\d{3}", null, null, null, "802123"],
                [null, null, "90(?:[13-5][15-7]|2[125-7]|99)\\d\\d", null, null, null, "901123"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:6[0-36]|88)\\d{4}", null, null, null, "601234"], "FO", 298, "00", null, null, null, "(10(?:01|[12]0|88))", null, null, null, [
                    [null, "(\\d{6})", "$1", ["[2-9]"], null, "$CC $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            FR: [null, [null, null, "[1-9]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, "[1-5]\\d{8}", null, null, null, "123456789"],
                [null, null, "(?:6\\d\\d|7(?:00|[3-9]\\d))\\d{6}", null, null, null, "612345678"],
                [null, null, "80[0-5]\\d{6}", null, null, null, "801234567"],
                [null, null, "8[129]\\d{7}", null, null, null, "891123456"],
                [null, null, "884\\d{6}", null, null, null, "884012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "9\\d{8}", null, null, null, "912345678"], "FR", 33, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})", "$1 $2", ["11"]],
                    [null, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                ],
                [
                    [null, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "80[6-9]\\d{6}", null, null, null, "806123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GA: [null, [null, null, "(?:0\\d|[2-7])\\d{6}", null, null, null, null, null, null, [7, 8]],
                [null, null, "01\\d{6}", null, null, null, "01441234", null, null, [8]],
                [null, null, "(?:0[2-7]|[2-7])\\d{6}", null, null, null, "06031234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GA", 241, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GB: [null, [null, null, "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", null, null, null, null, null, null, [7, 9, 10],
                    [4, 5, 6, 8]
                ],
                [null, null, "(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", null, null, null, "1212345678", null, null, [9, 10],
                    [4, 5, 6, 7, 8]
                ],
                [null, null, "7(?:(?:[1-3]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|8(?:[014-9]\\d|[23][0-8]))\\d|4(?:[0-46-9]\\d\\d|5(?:[0-689]\\d|7[0-57-9]))|7(?:0(?:0[01]|[1-9]\\d)|(?:[1-7]\\d|8[02-9]|9[0-689])\\d)|9(?:(?:[024-9]\\d|3[0-689])\\d|1(?:[02-9]\\d|1[028])))\\d{5}", null, null, null, "7400123456", null, null, [10]],
                [null, null, "80[08]\\d{7}|800\\d{6}|8001111", null, null, null, "8001234567"],
                [null, null, "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", null, null, null, "9012345678", null, null, [7, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70\\d{8}", null, null, null, "7012345678", null, null, [10]],
                [null, null, "56\\d{8}", null, null, null, "5612345678", null, null, [10]], "GB", 44, "00", "0", " x", null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                    [null, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                    [null, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-79][02-9]|8)", "1(?:[24][02-9]|3(?:[02-79]|8[0-46-9])|5(?:[04-9]|2[024-9]|3[014-689])|6(?:[02-8]|9[0-24578])|7(?:[02-57-9]|6[013-9])|8|9(?:[0235-9]|4[2-9]))", "1(?:[24][02-9]|3(?:[02-79]|8(?:[0-4689]|7[0-24-9]))|5(?:[04-9]|2(?:[025-9]|4[013-9])|3(?:[014-68]|9[0-37-9]))|6(?:[02-8]|9(?:[0-2458]|7[0-25689]))|7(?:[02-57-9]|6(?:[013-79]|8[0-25689]))|8|9(?:[0235-9]|4(?:[2-57-9]|6[0-689])))"], "0$1"],
                    [null, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|7|94)"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
                    [null, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"]
                ], null, [null, null, "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", null, null, null, "7640123456", null, null, [10]], 1, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:3[0347]|55)\\d{8}", null, null, null, "5512345678", null, null, [10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GD: [null, [null, null, "(?:473|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", null, null, null, "4732691234", null, null, null, [7]],
                [null, null, "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", null, null, null, "4734031234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "GD", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "473", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GE: [null, [null, null, "(?:[3-57]\\d\\d|800)\\d{6}", null, null, null, null, null, null, [9],
                    [6]
                ],
                [null, null, "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", null, null, null, "322123456", null, null, null, [6]],
                [null, null, "(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}", null, null, null, "555123456"],
                [null, null, "800\\d{6}", null, null, null, "800123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "706\\d{6}", null, null, null, "706123456"], "GE", 995, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5|79"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "706\\d{6}"],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GF: [null, [null, null, "[56]94\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}", null, null, null, "594101234"],
                [null, null, "694(?:[0-249]\\d|3[0-48])\\d{4}", null, null, null, "694201234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GF", 594, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GG: [null, [null, null, "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", null, null, null, null, null, null, [7, 9, 10],
                    [6]
                ],
                [null, null, "1481[25-9]\\d{5}", null, null, null, "1481256789", null, null, [10],
                    [6]
                ],
                [null, null, "7(?:(?:781|839)\\d|911[17])\\d{5}", null, null, null, "7781123456", null, null, [10]],
                [null, null, "80[08]\\d{7}|800\\d{6}|8001111", null, null, null, "8001234567"],
                [null, null, "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", null, null, null, "9012345678", null, null, [7, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70\\d{8}", null, null, null, "7012345678", null, null, [10]],
                [null, null, "56\\d{8}", null, null, null, "5612345678", null, null, [10]], "GG", 44, "00", "0", null, null, "0|([25-9]\\d{5})$", "1481$1", null, null, null, null, [null, null, "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", null, null, null, "7640123456", null, null, [10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:3[0347]|55)\\d{8}", null, null, null, "5512345678", null, null, [10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GH: [null, [null, null, "(?:[235]\\d{3}|800)\\d{5}", null, null, null, null, null, null, [8, 9],
                    [7]
                ],
                [null, null, "3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", null, null, null, "302345678", null, null, [9],
                    [7]
                ],
                [null, null, "(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]))\\d{6}", null, null, null, "231234567", null, null, [9]],
                [null, null, "800\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GH", 233, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|80"]],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                ],
                [
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "800\\d{5}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GI: [null, [null, null, "(?:[25]\\d\\d|629)\\d{5}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:(?:00\\d|2(?:2[2457]|50))\\d|1(?:6[24-7]\\d|90[0-2]))\\d{3}", null, null, null, "20012345"],
                [null, null, "(?:5[46-8]\\d|629)\\d{5}", null, null, null, "57123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GI", 350, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GL: [null, [null, null, "(?:19|[2-689]\\d)\\d{4}", null, null, null, null, null, null, [6]],
                [null, null, "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}", null, null, null, "321000"],
                [null, null, "(?:[25][1-9]|4[2-9])\\d{4}", null, null, null, "221234"],
                [null, null, "80\\d{4}", null, null, null, "801234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "3[89]\\d{4}", null, null, null, "381234"], "GL", 299, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GM: [null, [null, null, "[2-9]\\d{6}", null, null, null, null, null, null, [7]],
                [null, null, "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", null, null, null, "5661234"],
                [null, null, "[23679]\\d{6}", null, null, null, "3012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GM", 220, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GN: [null, [null, null, "(?:30|6\\d\\d|722)\\d{6}", null, null, null, null, null, null, [8, 9]],
                [null, null, "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", null, null, null, "30241234", null, null, [8]],
                [null, null, "6[02356]\\d{7}", null, null, null, "601123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "722\\d{6}", null, null, null, "722123456", null, null, [9]], "GN", 224, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GP: [null, [null, null, "(?:590|69\\d)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", null, null, null, "590201234"],
                [null, null, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", null, null, null, "690001234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GP", 590, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], 1, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GQ: [null, [null, null, "(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "3(?:3(?:[0-24-9]\\d[46]|3\\d[7-9])|5\\d\\d[7-9])\\d{4}", null, null, null, "333091234"],
                [null, null, "(?:222|55[015])\\d{6}", null, null, null, "222123456"],
                [null, null, "80\\d[1-9]\\d{5}", null, null, null, "800123456"],
                [null, null, "90\\d[1-9]\\d{5}", null, null, null, "900123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GQ", 240, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                    [null, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GR: [null, [null, null, "(?:[268]\\d|[79]0)\\d{8}", null, null, null, null, null, null, [10]],
                [null, null, "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", null, null, null, "2123456789"],
                [null, null, "6(?:8[57-9]|9\\d)\\d{7}", null, null, null, "6912345678"],
                [null, null, "800\\d{7}", null, null, null, "8001234567"],
                [null, null, "90[19]\\d{7}", null, null, null, "9091234567"],
                [null, null, "8(?:0[16]|12|25)\\d{7}", null, null, null, "8011234567"],
                [null, null, "70\\d{8}", null, null, null, "7012345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "GR", 30, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[3-8]1|[689]"]],
                    [null, "(\\d{4})(\\d{6})", "$1 $2", ["2"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GT: [null, [null, null, "(?:1\\d{3}|[2-7])\\d{7}", null, null, null, null, null, null, [8, 11]],
                [null, null, "[267][2-9]\\d{6}", null, null, null, "22456789", null, null, [8]],
                [null, null, "[3-5]\\d{7}", null, null, null, "51234567", null, null, [8]],
                [null, null, "18[01]\\d{8}", null, null, null, "18001112222", null, null, [11]],
                [null, null, "19\\d{9}", null, null, null, "19001112222", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GT", 502, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GU: [null, [null, null, "(?:[58]\\d\\d|671|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", null, null, null, "6713001234", null, null, null, [7]],
                [null, null, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", null, null, null, "6713001234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "GU", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "671", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GW: [null, [null, null, "[49]\\d{8}|4\\d{6}", null, null, null, null, null, null, [7, 9]],
                [null, null, "443\\d{6}", null, null, null, "443201234", null, null, [9]],
                [null, null, "9(?:5\\d|6[569]|77)\\d{6}", null, null, null, "955012345", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "40\\d{5}", null, null, null, "4012345", null, null, [7]], "GW", 245, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            GY: [null, [null, null, "(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}", null, null, null, null, null, null, [7]],
                [null, null, "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", null, null, null, "2201234"],
                [null, null, "6\\d{6}", null, null, null, "6091234"],
                [null, null, "(?:289|862)\\d{4}", null, null, null, "2891234"],
                [null, null, "9008\\d{3}", null, null, null, "9008123"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "GY", 592, "001", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            HK: [null, [null, null, "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 11]],
                [null, null, "(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}", null, null, null, "21234567", null, null, [8]],
                [null, null, "(?:46(?:0[0-6]|10|4[0-57-9])|5(?:(?:[1-59][0-46-9]|6[0-4689])\\d|7(?:[0-2469]\\d|30))|6(?:(?:0[1-9]|[13-59]\\d|[68][0-57-9]|7[0-79])\\d|2(?:[0-57-9]\\d|6[01]))|707[1-5]|8480|9(?:(?:0[1-9]|1[02-9]|[358][0-8]|[467]\\d)\\d|2(?:[0-8]\\d|9[03-9])))\\d{4}", null, null, null, "51234567", null, null, [8]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "900(?:[0-24-9]\\d{7}|3\\d{1,4})", null, null, null, "90012345678", null, null, [5, 6, 7, 8, 11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", null, null, null, "81123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)", null, null, null, null, null, "00", null, [
                    [null, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                    [null, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                ], null, [null, null, "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", null, null, null, "71123456", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", null, null, null, "30161234", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            HN: [null, [null, null, "[237-9]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|64|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", null, null, null, "22123456"],
                [null, null, "[37-9]\\d{7}", null, null, null, "91234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "HN", 504, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            HR: [null, [null, null, "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", null, null, null, null, null, null, [6, 7, 8, 9]],
                [null, null, "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", null, null, null, "12345678", null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "9(?:(?:01|[12589]\\d)\\d|7(?:[0679]\\d|51))\\d{5}|98\\d{6}", null, null, null, "921234567", null, null, [8, 9]],
                [null, null, "80[01]\\d{4,6}", null, null, null, "800123456", null, null, [7, 8, 9]],
                [null, null, "6[01459]\\d{6}|6[01]\\d{4,5}", null, null, null, "611234", null, null, [6, 7, 8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "7[45]\\d{6}", null, null, null, "74123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], "HR", 385, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:62\\d?|72)\\d{6}", null, null, null, "62123456", null, null, [8, 9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            HT: [null, [null, null, "[2-489]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", null, null, null, "22453300"],
                [null, null, "[34]\\d{7}", null, null, null, "34101234"],
                [null, null, "8\\d{7}", null, null, null, "80012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", null, null, null, "98901234"], "HT", 509, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            HU: [null, [null, null, "[2357]\\d{8}|[1-9]\\d{7}", null, null, null, null, null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", null, null, null, "12345678", null, null, [8],
                    [6, 7]
                ],
                [null, null, "(?:[257]0|3[01])\\d{7}", null, null, null, "201234567", null, null, [9]],
                [null, null, "[48]0\\d{6}", null, null, null, "80123456", null, null, [8]],
                [null, null, "9[01]\\d{6}", null, null, null, "90123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "21\\d{7}", null, null, null, "211234567", null, null, [9]], "HU", 36, "00", "06", null, null, "06", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "[48]0\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "38\\d{7}", null, null, null, "381234567", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ID: [null, [null, null, "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", null, null, null, null, null, null, [7, 8, 9, 10, 11, 12],
                    [5, 6]
                ],
                [null, null, "2(?:[124]\\d{7,8}|(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])\\d{5,8})|(?:3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}|6(?:1(?:[0-8]\\d{4,7}|9\\d{4,8})|(?:[25]\\d|3[1-69]|4[1-6])\\d{5,8})|2(?:1(?:14|500)|2\\d{3})\\d{3}", null, null, null, "218350123", null, null, [7, 8, 9, 10, 11],
                    [5, 6]
                ],
                [null, null, "8[1-35-9]\\d{7,10}", null, null, null, "812345678", null, null, [9, 10, 11, 12]],
                [null, null, "(?:177\\d|800)\\d{5,7}", null, null, null, "8001234567", null, null, [8, 9, 10, 11]],
                [null, null, "809\\d{7}", null, null, null, "8091234567", null, null, [10]],
                [null, null, "804\\d{7}", null, null, null, "8041234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "ID", 62, "0(?:0[17-9]|10(?:00|1[67]))", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                    [null, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                    [null, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                    [null, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                    [null, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                    [null, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "8071\\d{6}", null, null, null, null, null, null, [10]],
                [null, null, "(?:1500|8071\\d{3})\\d{3}", null, null, null, "8071123456", null, null, [7, 10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            IE: [null, [null, null, "[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}", null, null, null, null, null, null, [7, 8, 9, 10],
                    [5, 6]
                ],
                [null, null, "(?:1\\d{2,3}|2(?:[13]\\d\\d|[24-9])|4(?:0[24]|(?:(?:[1-469]|8[0-46-9])\\d|5)\\d|7)|5(?:0[45]|(?:1|[23679]\\d)\\d|8)|6(?:[237-9]|[4-6]\\d\\d)|7[14]\\d\\d|9(?:[04]\\d\\d|[35-9]))\\d{5}|[269]1\\d{6}", null, null, null, "2212345", null, null, null, [5, 6]],
                [null, null, "8(?:22|[35-9]\\d)\\d{6}", null, null, null, "850123456", null, null, [9]],
                [null, null, "1800\\d{6}", null, null, null, "1800123456", null, null, [10]],
                [null, null, "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", null, null, null, "1520123456", null, null, [10]],
                [null, null, "18[59]0\\d{6}", null, null, null, "1850123456", null, null, [10]],
                [null, null, "700\\d{6}", null, null, null, "700123456", null, null, [9]],
                [null, null, "76\\d{7}", null, null, null, "761234567", null, null, [9]], "IE", 353, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                    [null, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[235-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                    [null, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "18[59]0\\d{6}", null, null, null, null, null, null, [10]],
                [null, null, "818\\d{6}", null, null, null, "818123456", null, null, [9]], null, null, [null, null, "8[35-9]5\\d{7}", null, null, null, "8551234567", null, null, [10]]
            ],
            IL: [null, [null, null, "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", null, null, null, null, null, null, [7, 8, 9, 10, 11, 12]],
                [null, null, "(?:153\\d\\d?|[2-489])\\d{7}", null, null, null, "21234567", null, null, [8, 11, 12],
                    [7]
                ],
                [null, null, "5(?:(?:[0-489][2-9]|6\\d)\\d|5(?:01|2[2-5]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", null, null, null, "502345678", null, null, [9]],
                [null, null, "1(?:255|80[019]\\d{3})\\d{3}", null, null, null, "1800123456", null, null, [7, 10]],
                [null, null, "1(?:2(?:00\\d\\d|12)|9(?:0[01]|19)\\d\\d)\\d{4}", null, null, null, "1919123456", null, null, [8, 10]],
                [null, null, "1700\\d{6}", null, null, null, "1700123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "7(?:(?:18|2[23]|3[237]|47|6[58]|7\\d|9[2357-9])\\d|8(?:2\\d|33|55|77|81))\\d{5}", null, null, null, "771234567", null, null, [9]], "IL", 972, "0(?:0|1[2-9])", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                    [null, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                    [null, "(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                    [null, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "1700\\d{6}", null, null, null, null, null, null, [10]],
                [null, null, "1599\\d{6}", null, null, null, "1599123456", null, null, [10]], null, null, [null, null, "151\\d{8,9}", null, null, null, "15112340000", null, null, [11, 12]]
            ],
            IM: [null, [null, null, "(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}", null, null, null, null, null, null, [10],
                    [6]
                ],
                [null, null, "1624[5-8]\\d{5}", null, null, null, "1624756789", null, null, null, [6]],
                [null, null, "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", null, null, null, "7924123456"],
                [null, null, "808162\\d{4}", null, null, null, "8081624567"],
                [null, null, "(?:8(?:4(?:40[49]06|5624\\d)|7(?:0624|2299)\\d)|90[0167]624\\d)\\d{3}", null, null, null, "9016247890"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70\\d{8}", null, null, null, "7012345678"],
                [null, null, "56\\d{8}", null, null, null, "5612345678"], "IM", 44, "00", "0", null, null, "0|([5-8]\\d{5})$", "1624$1", null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:3(?:(?:08162|3\\d{4}|7(?:0624|2299))\\d|4(?:40[49]06|5624\\d))|55\\d{5})\\d{3}", null, null, null, "5512345678"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            IN: [null, [null, null, "(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}", null, null, null, null, null, null, [8, 9, 10, 11, 12, 13],
                    [6, 7]
                ],
                [null, null, "(?:1(?:1[2-7]\\d\\d|2(?:[0-249][2-7]\\d|[35-8]\\d[2-7])|3(?:[0-25][2-7]\\d|[346-9]\\d[2-7])|4(?:[145][2-7]\\d|[236-9]\\d[2-7])|[59](?:[0235-9]\\d[2-7]|[14][2-7]\\d)|6(?:[014][2-7]\\d|[235-9]\\d[2-7])|7(?:(?:0[24]|[1257][2-7])\\d|[34689]\\d[2-7])|8(?:[01346][2-7]\\d|[257-9]\\d[2-7]))|2(?:[02][2-7]\\d\\d|1(?:[134689]\\d[2-7]|[257][2-7]\\d)|3(?:[013][2-7]\\d|[24-8]\\d[2-7])|4(?:[01][2-7]\\d|[2-8]\\d[2-7])|5(?:[0137][2-7]\\d|[25689]\\d[2-7])|6(?:[0158][2-7]\\d|[2-4679]\\d[2-7])|7(?:[13-79]\\d[2-7]|8[2-7]\\d)|8(?:(?:0[13468]|[1568][2-7])\\d|[2-479]\\d[2-7])|9(?:(?:0\\d|[14][2-7])\\d|[235-9]\\d[2-7]))|3(?:(?:01|1[79])\\d[2-7]|2(?:[1-5]\\d[2-7]|6[2-7]\\d)|3[2-7]\\d\\d|4(?:[13][2-7]\\d|2(?:[0189][2-7]|[2-7]\\d)|[5-8]\\d[2-7])|5(?:[125689]\\d[2-7]|[34][2-7]\\d)|6(?:[01489][2-7]\\d|[235-7]\\d[2-7])|7(?:[02-46][2-7]\\d|[157-9]\\d[2-7])|8(?:(?:0\\d|[159][2-7])\\d|[2-46-8]\\d[2-7]))|4(?:[04][2-7]\\d\\d|1(?:[14578]\\d[2-7]|[36][2-7]\\d)|2(?:(?:0[24]|[1-47][2-7])\\d|[5689]\\d[2-7])|3(?:[15][2-7]\\d|[2-467]\\d[2-7])|5(?:[12][2-7]\\d|[4-7]\\d[2-7])|6(?:[0-26-9][2-7]\\d|[35]\\d[2-7])|7(?:(?:[014-9][2-7]|2[2-8])\\d|3\\d[2-7])|8(?:[013-57][2-7]\\d|[2689]\\d[2-7])|9(?:[014-7][2-7]\\d|[2389]\\d[2-7]))|5(?:1(?:[025][2-7]\\d|[146-9]\\d[2-7])|2(?:[14-8]\\d[2-7]|2[2-7]\\d)|3(?:[1346]\\d[2-7]|[25][2-7]\\d)|4(?:[14-69]\\d[2-7]|[28][2-7]\\d)|5(?:(?:1[2-7]|2[1-7])\\d|[46]\\d[2-7])|6(?:[146-9]\\d[2-7]|[25][2-7]\\d)|7(?:1[2-7]\\d|[2-4]\\d[2-7])|8(?:1[2-7]\\d|[2-8]\\d[2-7])|9(?:[15][2-7]\\d|[246]\\d[2-7]))|6(?:1(?:[1358]\\d[2-7]|2[2-7]\\d)|2(?:1[2-7]\\d|[2457]\\d[2-7])|3(?:1[2-7]\\d|[2-4]\\d[2-7])|4(?:1[2-7]\\d|[235-7]\\d[2-7])|5(?:[17][2-7]\\d|[2-689]\\d[2-7])|6(?:[13][2-7]\\d|[24578]\\d[2-7])|7(?:1[2-7]\\d|[235689]\\d[2-7]|4(?:[0189][2-7]|[2-7]\\d))|8(?:0[2-7]\\d|[1-6]\\d[2-7]))|7(?:1(?:[013-9]\\d[2-7]|2[2-7]\\d)|2(?:[0235-9]\\d[2-7]|[14][2-7]\\d)|3(?:[134][2-7]\\d|[2679]\\d[2-7])|4(?:[1-35689]\\d[2-7]|[47][2-7]\\d)|5(?:[15][2-7]\\d|[2-46-9]\\d[2-7])|[67](?:[02-9]\\d[2-7]|1[2-7]\\d)|8(?:(?:[013-7]\\d|2[0-6])[2-7]|8(?:[0189][2-7]|[2-7]\\d))|9(?:[0189]\\d[2-7]|[2-7]\\d\\d))|8(?:0[2-7]\\d\\d|1(?:[1357-9]\\d[2-7]|6[2-7]\\d)|2(?:[014][2-7]\\d|[235-8]\\d[2-7])|3(?:[03-57-9]\\d[2-7]|[126][2-7]\\d)|(?:4[0-24-9]|5\\d)\\d[2-7]|6(?:[136][2-7]\\d|[2457-9]\\d[2-7])|7(?:[078][2-7]\\d|[1-6]\\d[2-7])|8(?:[1256]\\d[2-7]|[34][2-7]\\d)|9(?:1[2-7]\\d|[2-4]\\d[2-7])))\\d{5}", null, null, null, "7410410123", null, null, [10],
                    [6, 7, 8]
                ],
                [null, null, "(?:6(?:(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|9(?:0[019]|13))\\d|1279|3(?:(?:0[0-79]|6[0-4679]|7[0-24-9]|[89]\\d)\\d|5(?:0[0-6]|[1-9]\\d)))|7(?:(?:0\\d\\d|19[0-5])\\d|2(?:(?:[0235-79]\\d|[14][017-9])\\d|8(?:[0-59]\\d|[6-8][089]))|3(?:(?:[05-8]\\d|3[017-9])\\d|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d\\d|1(?:[015-9]\\d|[2-4][089])|[29](?:[0-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|[47](?:[089]\\d|11|7[02-8])|[56]\\d[089]|8(?:[0-24-7][089]|[389]\\d))|5(?:(?:[0346-8]\\d|5[017-9])\\d|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[1-3][089])|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d\\d)|8(?:[0-79]\\d\\d|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d\\d|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:(?:[01589]\\d|6[67])\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d\\d|6(?:[089]\\d|7[02-8]))|2(?:[014](?:[089]\\d|7[02-8])|[235-9]\\d\\d)|3(?:[03-57-9]\\d\\d|[126](?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d\\d|[136](?:[089]\\d|7[02-8]))|7(?:(?:0[07-9]|[1-69]\\d)\\d|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d\\d|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d\\d|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}", null, null, null, "8123456789", null, null, [10]],
                [null, null, "(?:00800\\d|1(?:600|80[03]\\d{3}))\\d{6}|1800\\d{4,8}", null, null, null, "1800123456"],
                [null, null, "186[12]\\d{9}", null, null, null, "1861123456789", null, null, [13]],
                [null, null, "1860\\d{7}", null, null, null, "18603451234", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "IN", 91, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{8})", "$1", ["5[0236-8]"], null, null, 1],
                    [null, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], null, null, 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)", "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])", "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"], "0$1", null, 1],
                    [null, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["14"], null, null, 1],
                    [null, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], null, null, 1],
                    [null, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["0"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["1"], null, null, 1]
                ],
                [
                    [null, "(\\d{8})", "$1", ["5[0236-8]"], null, null, 1],
                    [null, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], null, null, 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)", "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])", "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"], "0$1", null, 1],
                    [null, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["14"], null, null, 1],
                    [null, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], null, null, 1],
                    [null, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["1"], null, null, 1]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:00800\\d|1(?:600|8(?:0[03]\\d\\d|6(?:0|[12]\\d\\d))\\d))\\d{6}|1800\\d{4,8}"],
                [null, null, "140\\d{7}", null, null, null, "1409305260", null, null, [10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            IO: [null, [null, null, "3\\d{6}", null, null, null, null, null, null, [7]],
                [null, null, "37\\d{5}", null, null, null, "3709100"],
                [null, null, "38\\d{5}", null, null, null, "3801234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "IO", 246, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            IQ: [null, [null, null, "(?:1|[2-6]\\d?|7\\d\\d)\\d{7}", null, null, null, null, null, null, [8, 9, 10],
                    [6, 7]
                ],
                [null, null, "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", null, null, null, "12345678", null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "7[3-9]\\d{8}", null, null, null, "7912345678", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "IQ", 964, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            IR: [null, [null, null, "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", null, null, null, null, null, null, [4, 5, 6, 7, 10],
                    [8]
                ],
                [null, null, "(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])\\d{4}|94(?:(?:000|(?:11|2\\d)\\d|30[01])\\d|4(?:111|40\\d)))\\d{4}|(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[16]|[289]\\d?)\\d{3}", null, null, null, "2123456789", null, null, [6, 7, 10],
                    [4, 5, 8]
                ],
                [null, null, "9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[01]\\d|44)\\d|510|8(?:1[01]|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}", null, null, null, "9123456789", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "993\\d{7}", null, null, null, "9932123456", null, null, [10]], "IR", 98, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{4,5})", "$1", ["96"], "0$1"],
                    [null, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "9(?:4(?:11[1-7]|440)\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))", null, null, null, null, null, null, [4, 5, 10]],
                [null, null, "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", null, null, null, "9601", null, null, [4, 5]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            IS: [null, [null, null, "(?:38\\d|[4-9])\\d{6}", null, null, null, null, null, null, [7, 9]],
                [null, null, "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", null, null, null, "4101234", null, null, [7]],
                [null, null, "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}", null, null, null, "6111234"],
                [null, null, "800\\d{4}", null, null, null, "8001234", null, null, [7]],
                [null, null, "90\\d{5}", null, null, null, "9011234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "49\\d{5}", null, null, null, "4921234", null, null, [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", null, null, null, null, null, "00", null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "809\\d{4}", null, null, null, "8091234", null, null, [7]], null, null, [null, null, "(?:689|8(?:7[0189]|80)|95[48])\\d{4}", null, null, null, "6891234", null, null, [7]]
            ],
            IT: [null, [null, null, "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", null, null, null, null, null, null, [6, 7, 8, 9, 10, 11]],
                [null, null, "0(?:(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d|6(?:[0-57-9]\\d\\d|6(?:[0-8]\\d|9[0-79])))\\d{1,6}", null, null, null, "0212345678"],
                [null, null, "33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", null, null, null, "3123456789", null, null, [9, 10, 11]],
                [null, null, "80(?:0\\d{3}|3)\\d{3}", null, null, null, "800123456", null, null, [6, 9]],
                [null, null, "(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", null, null, null, "899123456", null, null, [6, 8, 9, 10]],
                [null, null, "84(?:[08]\\d{3}|[17])\\d{3}", null, null, null, "848123456", null, null, [6, 9]],
                [null, null, "1(?:78\\d|99)\\d{6}", null, null, null, "1781234567", null, null, [9, 10]],
                [null, null, "55\\d{8}", null, null, null, "5512345678", null, null, [10]], "IT", 39, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                    [null, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                    [null, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                    [null, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[67]|99)|[38]"]],
                    [null, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
                    [null, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], 1, null, [null, null, "848\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            JE: [null, [null, null, "(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}", null, null, null, null, null, null, [10],
                    [6]
                ],
                [null, null, "1534[0-24-8]\\d{5}", null, null, null, "1534456789", null, null, null, [6]],
                [null, null, "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}", null, null, null, "7797712345"],
                [null, null, "80(?:07(?:35|81)|8901)\\d{4}", null, null, null, "8007354567"],
                [null, null, "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", null, null, null, "9018105678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "701511\\d{4}", null, null, null, "7015115678"],
                [null, null, "56\\d{8}", null, null, null, "5612345678"], "JE", 44, "00", "0", null, null, "0|([0-24-8]\\d{5})$", "1534$1", null, null, null, null, [null, null, "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", null, null, null, "7640123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}", null, null, null, "5512345678"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            JM: [null, [null, null, "(?:[58]\\d\\d|658|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", null, null, null, "8765230123", null, null, null, [7]],
                [null, null, "876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", null, null, null, "8762101234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "JM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "658|876", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            JO: [null, [null, null, "(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}", null, null, null, null, null, null, [8, 9]],
                [null, null, "(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[05]0|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}", null, null, null, "62001234", null, null, [8]],
                [null, null, "7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}", null, null, null, "790123456", null, null, [9]],
                [null, null, "80\\d{6}", null, null, null, "80012345", null, null, [8]],
                [null, null, "900\\d{5}", null, null, null, "90012345", null, null, [8]],
                [null, null, "85\\d{6}", null, null, null, "85012345", null, null, [8]],
                [null, null, "70\\d{7}", null, null, null, "700123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]], "JO", 962, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                    [null, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["7"], "0$1"]
                ], null, [null, null, "74(?:66|77)\\d{5}", null, null, null, "746612345", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "8(?:10|8\\d)\\d{5}", null, null, null, "88101234", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            JP: [null, [null, null, "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", null, null, null, null, null, null, [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
                [null, null, "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", null, null, null, "312345678", null, null, [9]],
                [null, null, "[7-9]0[1-9]\\d{7}", null, null, null, "9012345678", null, null, [10]],
                [null, null, "(?:00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)|(?:120|800\\d)\\d{4})\\d\\d", null, null, null, "120123456"],
                [null, null, "990\\d{6}", null, null, null, "990123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "60\\d{7}", null, null, null, "601234567", null, null, [9]],
                [null, null, "50[1-9]\\d{7}", null, null, null, "5012345678", null, null, [10]], "JP", 81, "010", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                    [null, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2[2-9]|4|7[235-9]|9[49]"], "0$1"],
                    [null, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007"]],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                    [null, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]],
                    [null, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]],
                    [null, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]],
                    [null, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0"]]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                    [null, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2[2-9]|4|7[235-9]|9[49]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
                ],
                [null, null, "20\\d{8}", null, null, null, "2012345678", null, null, [10]], null, null, [null, null, "00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d"],
                [null, null, "570\\d{6}", null, null, null, "570123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KE: [null, [null, null, "(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}", null, null, null, null, null, null, [7, 8, 9, 10]],
                [null, null, "20\\d{6,7}|(?:4[0-6]|5\\d|6[0-24-9])\\d{7}|(?:4[0245]|6[014-9])\\d{6}|5[1-79]\\d{5,6}|(?:4[245]|6[01457-9])\\d{5}", null, null, null, "202012345", null, null, [7, 8, 9]],
                [null, null, "7\\d{8}", null, null, null, "712123456", null, null, [9]],
                [null, null, "800[24-8]\\d{5,6}", null, null, null, "800223456", null, null, [9, 10]],
                [null, null, "900[02-9]\\d{5}", null, null, null, "900223456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "KE", 254, "000", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                    [null, "(\\d{3})(\\d{6})", "$1 $2", ["7"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KG: [null, [null, null, "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}", null, null, null, null, null, null, [9, 10],
                    [5, 6]
                ],
                [null, null, "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", null, null, null, "312123456", null, null, [9],
                    [5, 6]
                ],
                [null, null, "(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}", null, null, null, "700123456", null, null, [9]],
                [null, null, "800\\d{6,7}", null, null, null, "800123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "KG", 996, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-79]|31[25]"], "0$1"],
                    [null, "(\\d{4})(\\d{5})", "$1 $2", ["3"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KH: [null, [null, null, "1\\d{9}|[1-9]\\d{7,8}", null, null, null, null, null, null, [8, 9, 10],
                    [6, 7]
                ],
                [null, null, "(?:2(?:3(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)|[4-6](?:4[56]|[56]\\d)\\d)|(?:3[2-6]|4[2-4]|[5-7][2-5])(?:4[56]|[56]\\d)\\d)\\d{4}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])[236-9]\\d{5}", null, null, null, "23756789", null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "(?:(?:(?:1[28]|9[67])\\d|8(?:[013-79]|8\\d))\\d|(?:2[3-6]|4[2-4]|[56][2-5])48|3(?:[18]\\d\\d|[2-6]48)|7(?:(?:[07-9]|[16]\\d)\\d|[2-5]48))\\d{5}|(?:1\\d|6[016-9]|9[0-57-9])\\d{6}", null, null, null, "91234567", null, null, [8, 9]],
                [null, null, "1800(?:1\\d|2[019])\\d{4}", null, null, null, "1800123456", null, null, [10]],
                [null, null, "1900(?:1\\d|2[09])\\d{4}", null, null, null, "1900123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "KH", 855, "00[14-9]", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KI: [null, [null, null, "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", null, null, null, null, null, null, [5, 8]],
                [null, null, "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", null, null, null, "31234"],
                [null, null, "(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}", null, null, null, "72001234", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", null, null, null, "30010000", null, null, [8]], "KI", 686, "00", "0", null, null, "0", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KM: [null, [null, null, "[3478]\\d{6}", null, null, null, null, null, null, [7]],
                [null, null, "7[4-7]\\d{5}", null, null, null, "7712345"],
                [null, null, "[34]\\d{6}", null, null, null, "3212345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "8\\d{6}", null, null, null, "8001234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "KM", 269, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KN: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", null, null, null, "8692361234", null, null, null, [7]],
                [null, null, "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", null, null, null, "8697652917", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "KN", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "869", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KP: [null, [null, null, "(?:(?:19\\d|2)\\d|85)\\d{6}", null, null, null, null, null, null, [8, 10],
                    [6, 7]
                ],
                [null, null, "(?:2\\d|85)\\d{6}", null, null, null, "21234567", null, null, [8],
                    [6, 7]
                ],
                [null, null, "19[1-3]\\d{7}", null, null, null, "1921234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "KP", 850, "00|99", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "2(?:[0-24-9]\\d\\d|3(?:[0-79]\\d|8[02-9]))\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KR: [null, [null, null, "(?:00[1-9]\\d{2,4}|[12]|5\\d{3})\\d{7}|(?:(?:00|[13-6])\\d|70)\\d{8}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}", null, null, null, null, null, null, [5, 6, 8, 9, 10, 11, 12, 13, 14],
                    [3, 7]
                ],
                [null, null, "2[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})", null, null, null, "22123456", null, null, [5, 6, 8, 9, 10],
                    [3, 7]
                ],
                [null, null, "1[0-26-9]\\d{7,8}", null, null, null, "1000000000", null, null, [9, 10]],
                [null, null, "(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}", null, null, null, "801234567", null, null, [9, 11, 12, 13, 14]],
                [null, null, "60[2-9]\\d{6}", null, null, null, "602345678", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "50\\d{8,9}", null, null, null, "5012345678", null, null, [10, 11]],
                [null, null, "70\\d{8}", null, null, null, "7012345678", null, null, [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", null, null, "0(8[1-46-8]|85\\d{2})?", null, null, null, [
                    [null, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"],
                    [null, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1", "0$CC-$1"],
                    [null, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["50"], "0$1", "0$CC-$1"],
                    [null, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030", "00308"], "$1", "0$CC-$1"],
                    [null, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["00[37]", "00(?:36|79)", "00(?:36|79)8"], "$1", "0$CC-$1"],
                    [null, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["007", "0079", "00798"], "$1", "0$CC-$1"]
                ],
                [
                    [null, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"],
                    [null, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1", "0$CC-$1"],
                    [null, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"], "0$1", "0$CC-$1"],
                    [null, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["50"], "0$1", "0$CC-$1"]
                ],
                [null, null, "15\\d{7,8}", null, null, null, "1523456789", null, null, [9, 10]], null, null, [null, null, "00(?:3(?:08|68\\d)|798\\d{1,3})\\d{6}", null, null, null, null, null, null, [11, 12, 13, 14]],
                [null, null, "1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}", null, null, null, "15441234", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KW: [null, [null, null, "(?:18|[2569]\\d\\d)\\d{5}", null, null, null, null, null, null, [7, 8]],
                [null, null, "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", null, null, null, "22345678", null, null, [8]],
                [null, null, "(?:5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25]))|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|222|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|4[01479]|55|6[0679]|8[057-9]|9\\d)\\d|11[01]|7(?:02|[1-9]\\d)))\\d{4}", null, null, null, "50012345", null, null, [8]],
                [null, null, "18\\d{5}", null, null, null, "1801234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "KW", 965, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KY: [null, [null, null, "(?:345|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", null, null, null, "3452221234", null, null, null, [7]],
                [null, null, "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", null, null, null, "3453231234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "(?:345976|900[2-9]\\d\\d)\\d{4}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "KY", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, "345849\\d{4}", null, null, null, "3458491234"], null, "345", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            KZ: [null, [null, null, "(?:33622|(?:7\\d|80)\\d{3})\\d{5}", null, null, null, null, null, null, [10]],
                [null, null, "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", null, null, null, "7123456789"],
                [null, null, "7(?:0[0-2578]|47|6[02-4]|7[15-8]|85)\\d{7}", null, null, null, "7710009998"],
                [null, null, "800\\d{7}", null, null, null, "8001234567"],
                [null, null, "809\\d{7}", null, null, null, "8091234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "808\\d{7}", null, null, null, "8081234567"],
                [null, null, "751\\d{7}", null, null, null, "7511234567"], "KZ", 7, "810", "8", null, null, "8", null, "8~10", null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "33|7", [null, null, "751\\d{7}"],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LA: [null, [null, null, "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", null, null, null, null, null, null, [8, 9, 10],
                    [6]
                ],
                [null, null, "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", null, null, null, "21212862", null, null, [8],
                    [6]
                ],
                [null, null, "20(?:2[2389]|5[24-689]|7[6-8]|9[1-35-9])\\d{6}", null, null, null, "2023123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LA", 856, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "30\\d{7}", null, null, null, "301234567", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LB: [null, [null, null, "[7-9]\\d{7}|[13-9]\\d{6}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}", null, null, null, "1123456", null, null, [7]],
                [null, null, "(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}", null, null, null, "71123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "9[01]\\d{6}", null, null, null, "90123456", null, null, [8]],
                [null, null, "80\\d{6}", null, null, null, "80123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LB", 961, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LC: [null, [null, null, "(?:[58]\\d\\d|758|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", null, null, null, "7584305678", null, null, null, [7]],
                [null, null, "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", null, null, null, "7582845678", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "LC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "758", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LI: [null, [null, null, "(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}", null, null, null, null, null, null, [7, 9]],
                [null, null, "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", null, null, null, "2345678", null, null, [7]],
                [null, null, "(?:6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}", null, null, null, "660234567"],
                [null, null, "80(?:02[28]|9\\d\\d)\\d\\d", null, null, null, "8002222", null, null, [7]],
                [null, null, "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", null, null, null, "9002222", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LI", 423, "00", "0", null, null, "0|(10(?:01|20|66))", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"], null, "$CC $1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], null, "$CC $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "870(?:28|87)\\d\\d", null, null, null, "8702812", null, null, [7]], null, null, [null, null, "697(?:42|56|[78]\\d)\\d{4}", null, null, null, "697861234", null, null, [9]]
            ],
            LK: [null, [null, null, "(?:[1-7]\\d|[89]1)\\d{7}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", null, null, null, "112345678", null, null, null, [7]],
                [null, null, "7[0-25-8]\\d{7}", null, null, null, "712345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LK", 94, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "1973\\d{5}", null, null, null, "197312345"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LR: [null, [null, null, "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[45])\\d{6}", null, null, null, null, null, null, [7, 8, 9]],
                [null, null, "(?:2\\d{3}|33333)\\d{4}", null, null, null, "21234567", null, null, [8, 9]],
                [null, null, "(?:(?:(?:20|77|88)\\d|330|555)\\d|4[67])\\d{5}|5\\d{6}", null, null, null, "770123456", null, null, [7, 9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "332(?:02|[34]\\d)\\d{4}", null, null, null, "332021234", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LR", 231, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LS: [null, [null, null, "(?:[256]\\d\\d|800)\\d{5}", null, null, null, null, null, null, [8]],
                [null, null, "2\\d{7}", null, null, null, "22123456"],
                [null, null, "[56]\\d{7}", null, null, null, "50123456"],
                [null, null, "800[256]\\d{4}", null, null, null, "80021234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LS", 266, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LT: [null, [null, null, "(?:[3469]\\d|52|[78]0)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "(?:3[1478]|4[124-6]|52)\\d{6}", null, null, null, "31234567"],
                [null, null, "6\\d{7}", null, null, null, "61234567"],
                [null, null, "800\\d{5}", null, null, null, "80012345"],
                [null, null, "9(?:0[0239]|10)\\d{5}", null, null, null, "90012345"],
                [null, null, "808\\d{5}", null, null, null, "80812345"],
                [null, null, "700\\d{5}", null, null, null, "70012345"],
                [null, null, null, null, null, null, null, null, null, [-1]], "LT", 370, "00", "8", null, null, "[08]", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", null, 1],
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", null, 1],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", null, 1],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", null, 1]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70[67]\\d{5}", null, null, null, "70712345"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LU: [null, [null, null, "[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}", null, null, null, null, null, null, [4, 5, 6, 7, 8, 9, 10, 11]],
                [null, null, "(?:(?:2[2-9]|[457]\\d)\\d|3(?:[0-46-9]\\d|5[013-9])|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}", null, null, null, "27123456"],
                [null, null, "6(?:[269][18]|5[158]|7[189]|81)\\d{6}", null, null, null, "628123456", null, null, [9]],
                [null, null, "800\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, "90[015]\\d{5}", null, null, null, "90012345", null, null, [8]],
                [null, null, "801\\d{5}", null, null, null, "80112345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "20(?:1\\d{5}|[2-689]\\d{1,7})", null, null, null, "20201234", null, null, [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", null, null, null, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", null, null, null, [
                    [null, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|3(?:[0-46-9]|5[013-9])|[457]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|3(?:[0-46-9]|5[013-9])|[457]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:0[1-689]|[367]|4[3-8])"], null, "$CC $1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20[2-689]"], null, "$CC $1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:0[2-689]|[367]|4[3-8])"], null, "$CC $1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["2[2-9]|3(?:[0-46-9]|5[013-9])|[457]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], null, "$CC $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LV: [null, [null, null, "(?:[268]\\d|90)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "6\\d{7}", null, null, null, "63123456"],
                [null, null, "2\\d{7}", null, null, null, "21234567"],
                [null, null, "80\\d{6}", null, null, null, "80123456"],
                [null, null, "90\\d{6}", null, null, null, "90123456"],
                [null, null, "81\\d{6}", null, null, null, "81123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LV", 371, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            LY: [null, [null, null, "(?:[2569]\\d|71)\\d{7}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}", null, null, null, "212345678", null, null, null, [7]],
                [null, null, "9[1-6]\\d{7}", null, null, null, "912345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "LY", 218, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MA: [null, [null, null, "[5-8]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, "5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", null, null, null, "520123456"],
                [null, null, "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}", null, null, null, "650123456"],
                [null, null, "80\\d{7}", null, null, null, "801234567"],
                [null, null, "89\\d{7}", null, null, null, "891234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5924[01]\\d{4}", null, null, null, "592401234"], "MA", 212, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"],
                    [null, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|9)|892"], "0$1"],
                    [null, "(\\d{5})(\\d{4})", "$1-$2", ["5[23]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], 1, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MC: [null, [null, null, "(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}", null, null, null, null, null, null, [8, 9]],
                [null, null, "(?:870|9[2-47-9]\\d)\\d{5}", null, null, null, "99123456", null, null, [8]],
                [null, null, "(?:(?:3|6\\d)\\d\\d|4(?:4\\d|5[1-9]))\\d{5}", null, null, null, "612345678"],
                [null, null, "90\\d{6}", null, null, null, "90123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MC", 377, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                    [null, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                ],
                [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                    [null, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "870\\d{5}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MD: [null, [null, null, "(?:[235-7]\\d|[89]0)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", null, null, null, "22212345"],
                [null, null, "(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}", null, null, null, "62112345"],
                [null, null, "800\\d{5}", null, null, null, "80012345"],
                [null, null, "90[056]\\d{5}", null, null, null, "90012345"],
                [null, null, "808\\d{5}", null, null, null, "80812345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "3[08]\\d{6}", null, null, null, "30123456"], "MD", 373, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "803\\d{5}", null, null, null, "80312345"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ME: [null, [null, null, "(?:20|[3-79]\\d|80\\d?)\\d{6}", null, null, null, null, null, null, [8, 9],
                    [6]
                ],
                [null, null, "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}", null, null, null, "30234567", null, null, [8],
                    [6]
                ],
                [null, null, "6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}", null, null, null, "67622901", null, null, [8]],
                [null, null, "80(?:[0-2578]|9\\d)\\d{5}", null, null, null, "80080002"],
                [null, null, "9(?:4[1568]|5[178])\\d{5}", null, null, null, "94515151", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "78[1-49]\\d{5}", null, null, null, "78108780", null, null, [8]], "ME", 382, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "77[1-9]\\d{5}", null, null, null, "77273012", null, null, [8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MF: [null, [null, null, "(?:590|69\\d)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}", null, null, null, "590271234"],
                [null, null, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", null, null, null, "690001234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MF", 590, "00", "0", null, null, "0", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MG: [null, [null, null, "[23]\\d{8}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "20(?:(?:2\\d|4[47]|5[3467]|6[279]|8[268]|9[245])\\d|7(?:2[29]|[35]\\d))\\d{4}", null, null, null, "202123456", null, null, null, [7]],
                [null, null, "3[2-49]\\d{7}", null, null, null, "321234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "22\\d{7}", null, null, null, "221234567"], "MG", 261, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MH: [null, [null, null, "(?:(?:[256]\\d|45)\\d|329)\\d{4}", null, null, null, null, null, null, [7]],
                [null, null, "(?:247|528|625)\\d{4}", null, null, null, "2471234"],
                [null, null, "(?:(?:23|54)5|329|45[56])\\d{4}", null, null, null, "2351234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "635\\d{4}", null, null, null, "6351234"], "MH", 692, "011", "1", null, null, "1", null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MK: [null, [null, null, "[2-578]\\d{7}", null, null, null, null, null, null, [8],
                    [6, 7]
                ],
                [null, null, "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", null, null, null, "22012345", null, null, null, [6, 7]],
                [null, null, "7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|421)\\d{4}", null, null, null, "72345678"],
                [null, null, "800\\d{5}", null, null, null, "80012345"],
                [null, null, "5[02-9]\\d{6}", null, null, null, "50012345"],
                [null, null, "8(?:0[1-9]|[1-9]\\d)\\d{5}", null, null, null, "80123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MK", 389, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                    [null, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ML: [null, [null, null, "(?:[246-9]\\d|50)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "(?:2(?:0(?:2\\d|7[0-8])|1(?:2[67]|[4-689]\\d))|4(?:0[0-4]|4[1-39])\\d)\\d{4}", null, null, null, "20212345"],
                [null, null, "(?:2(?:079|17\\d)|(?:50|[679]\\d|8[239])\\d\\d)\\d{4}", null, null, null, "65012345"],
                [null, null, "80\\d{6}", null, null, null, "80012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "ML", 223, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-79]|8[0239]"]]
                ],
                [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-79]|8[0239]"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "80\\d{6}"],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MM: [null, [null, null, "(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9, 10],
                    [5]
                ],
                [null, null, "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|6[25]|7[01])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|62|7[01])|51\\d\\d)|4(?:2(?:2\\d\\d|480)|3(?:20\\d|470|56)|420\\d|5470)|5(?:2(?:2\\d\\d?|470)|4(?:2(?:1|86)|470)|522\\d|7(?:20\\d|480)|[89](?:20\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|42[04]|[56]2\\d)\\d|3(?:20\\d|470)|7(?:(?:3\\d|8[01459])\\d|4(?:39|[67]0)))|7(?:0470|1(?:20\\d?|470)|4(?:25\\d|470)|5(?:202|470|96\\d))|8(?:[13](?:2\\d\\d|470)|[25]2\\d\\d))\\d{4}|(?:(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4]))\\d|25\\d{2,3}|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[2-689]|2[2-8]|3[24]|4[24-7]|5[245]|6[23]))\\d{4}", null, null, null, "1234567", null, null, [6, 7, 8, 9],
                    [5]
                ],
                [null, null, "(?:17[01]|9(?:2(?:[0-4]|(?:5\\d|6[0-5])\\d)|(?:3(?:[0-36]|4[069])|[68]9\\d|7(?:3|5[0-2]|[6-9]\\d))\\d|4(?:(?:0[0-4]|[1379]|[25]\\d|4[0-589])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}", null, null, null, "92123456", null, null, [7, 8, 9, 10]],
                [null, null, "80080(?:[01][1-9]|2\\d)\\d{3}", null, null, null, "8008001234", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:1(?:333|468)|2468)\\d{4}", null, null, null, "13331234", null, null, [8]], "MM", 95, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                    [null, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MN: [null, [null, null, "[12]\\d{8,9}|[1257-9]\\d{7}", null, null, null, null, null, null, [8, 9, 10],
                    [4, 5, 6]
                ],
                [null, null, "(?:[12](?:1|2[1-37]|(?:3[2-8]|4[2-68]|5[1-4689])\\d?)|5[0568])\\d{6}|[12]2[1-3]\\d{5}", null, null, null, "50123456", null, null, null, [4, 5, 6]],
                [null, null, "(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}", null, null, null, "88123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "7[05-8]\\d{6}", null, null, null, "75123456", null, null, [8]], "MN", 976, "001", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                    [null, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                    [null, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                    [null, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MO: [null, [null, null, "(?:28|[68]\\d)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}", null, null, null, "28212345"],
                [null, null, "6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}", null, null, null, "66123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MO", 853, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MP: [null, [null, null, "(?:[58]\\d\\d|(?:67|90)0)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", null, null, null, "6702345678", null, null, null, [7]],
                [null, null, "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", null, null, null, "6702345678", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "MP", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "670", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MQ: [null, [null, null, "(?:596|69\\d)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}", null, null, null, "596301234"],
                [null, null, "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}", null, null, null, "696201234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MQ", 596, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MR: [null, [null, null, "(?:[2-4]\\d\\d|800)\\d{5}", null, null, null, null, null, null, [8]],
                [null, null, "(?:25[08]|35\\d|45[1-7])\\d{5}", null, null, null, "35123456"],
                [null, null, "[2-4][0-46-9]\\d{6}", null, null, null, "22123456"],
                [null, null, "800\\d{5}", null, null, null, "80012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MR", 222, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MS: [null, [null, null, "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "664491\\d{4}", null, null, null, "6644912345", null, null, null, [7]],
                [null, null, "66449[2-6]\\d{4}", null, null, null, "6644923456", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "MS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "664", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MT: [null, [null, null, "(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d\\d)\\d{4}", null, null, null, "21001234"],
                [null, null, "(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}", null, null, null, "96961234"],
                [null, null, "800[3467]\\d{4}", null, null, null, "80071234"],
                [null, null, "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}", null, null, null, "50037123"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "3550\\d{4}", null, null, null, "35501234"], "MT", 356, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                ], null, [null, null, "7117\\d{4}", null, null, null, "71171234"], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "501\\d{5}", null, null, null, "50112345"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MU: [null, [null, null, "(?:[2-468]|5\\d)\\d{6}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:4\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", null, null, null, "54480123"],
                [null, null, "5(?:(?:2[589]|7\\d|9[0-8])\\d|4(?:2[1-389]|[489]\\d|7[1-9])|8(?:[0-689]\\d|7[15-8]))\\d{4}", null, null, null, "52512345", null, null, [8]],
                [null, null, "80[0-2]\\d{4}", null, null, null, "8001234", null, null, [7]],
                [null, null, "30\\d{5}", null, null, null, "3012345", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "3(?:20|9\\d)\\d{4}", null, null, null, "3201234", null, null, [7]], "MU", 230, "0(?:0|[24-7]0|3[03])", null, null, null, null, null, "020", null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8(?:0[0-2]|14|3[129])"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["5"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MV: [null, [null, null, "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", null, null, null, null, null, null, [7, 10]],
                [null, null, "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", null, null, null, "6701234", null, null, [7]],
                [null, null, "(?:46[46]|(?:7[2-9]|9[14-9])\\d)\\d{4}", null, null, null, "7712345", null, null, [7]],
                [null, null, "800\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "900\\d{7}", null, null, null, "9001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MV", 960, "0(?:0|19)", null, null, null, null, null, "00", null, [
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[367]|4(?:00|[56])|9[14-9]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "4[05]0\\d{4}", null, null, null, "4001234", null, null, [7]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MW: [null, [null, null, "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", null, null, null, null, null, null, [7, 9]],
                [null, null, "(?:1[2-9]|21\\d\\d)\\d{5}", null, null, null, "1234567"],
                [null, null, "(?:111|(?:77|88|99)\\d)\\d{6}", null, null, null, "991234567", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "31\\d{7}", null, null, null, "310123456", null, null, [9]], "MW", 265, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MX: [null, [null, null, "(?:1\\d|[2-9])\\d{9}", null, null, null, null, null, null, [10, 11],
                    [7, 8]
                ],
                [null, null, "(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", null, null, null, "2221234567", null, null, [10],
                    [7, 8]
                ],
                [null, null, "1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", null, null, null, "12221234567", null, null, [11]],
                [null, null, "8(?:00|88)\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "900\\d{7}", null, null, null, "9001234567", null, null, [10]],
                [null, null, "300\\d{7}", null, null, null, "3001234567", null, null, [10]],
                [null, null, "500\\d{7}", null, null, null, "5001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MX", 52, "0[09]", "01", null, null, "0[12]|04[45]([2-9]\\d{9})$", "1$1", "00", null, [
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", null, 1],
                    [null, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], "044 $1"],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], "044 $1"]
                ],
                [
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", null, 1],
                    [null, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|5[56]|81)"]],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MY: [null, [null, null, "(?:1\\d\\d?|3\\d|[4-9])\\d{7}", null, null, null, null, null, null, [8, 9, 10],
                    [6, 7]
                ],
                [null, null, "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", null, null, null, "323856789", null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "1(?:(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|59\\d)\\d)\\d|4(?:[235-9]\\d\\d|400)|8(?:(?:1[23]|[236]\\d|5[7-9]|7[016-9]|9[0-8])\\d|4(?:[06]\\d|7[0-4])|8(?:[01]\\d|[27][0-4])))\\d{4}", null, null, null, "123456789", null, null, [9, 10]],
                [null, null, "1[378]00\\d{6}", null, null, null, "1300123456", null, null, [10]],
                [null, null, "1600\\d{6}", null, null, null, "1600123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", null, null, null, "1546012345", null, null, [10]], "MY", 60, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"],
                    [null, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            MZ: [null, [null, null, "(?:2|8\\d)\\d{7}", null, null, null, null, null, null, [8, 9]],
                [null, null, "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", null, null, null, "21123456", null, null, [8]],
                [null, null, "8[2-7]\\d{7}", null, null, null, "821234567", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "MZ", 258, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NA: [null, [null, null, "[68]\\d{7,8}", null, null, null, null, null, null, [8, 9]],
                [null, null, "6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}", null, null, null, "61221234"],
                [null, null, "(?:60|8[1245])\\d{7}", null, null, null, "811234567", null, null, [9]],
                [null, null, "80\\d{7}", null, null, null, "800123456", null, null, [9]],
                [null, null, "8701\\d{5}", null, null, null, "870123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "8(?:3\\d\\d|86)\\d{5}", null, null, null, "88612345"], "NA", 264, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[0-5]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NC: [null, [null, null, "[2-57-9]\\d{5}", null, null, null, null, null, null, [6]],
                [null, null, "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", null, null, null, "201234"],
                [null, null, "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", null, null, null, "751234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "36\\d{4}", null, null, null, "366711"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NC", 687, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[247-9]|3[0-6]|5[0-4]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NE: [null, [null, null, "[0289]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:0(?:20|3[1-7]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", null, null, null, "20201234"],
                [null, null, "(?:8[04589]|9\\d)\\d{6}", null, null, null, "93123456"],
                [null, null, "08\\d{6}", null, null, null, "08123456"],
                [null, null, "09\\d{6}", null, null, null, "09123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NE", 227, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|2[01]|8[04589]|9"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NF: [null, [null, null, "[13]\\d{5}", null, null, null, null, null, null, [6],
                    [5]
                ],
                [null, null, "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", null, null, null, "106609", null, null, null, [5]],
                [null, null, "3[58]\\d{4}", null, null, null, "381234", null, null, null, [5]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NF", 672, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                    [null, "(\\d)(\\d{5})", "$1 $2", ["3"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NG: [null, [null, null, "[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", null, null, null, null, null, null, [7, 8, 10, 11, 12, 13, 14],
                    [5, 6]
                ],
                [null, null, "(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}", null, null, null, "18040123", null, null, [7, 8],
                    [5, 6]
                ],
                [null, null, "(?:1(?:(?:7[34]|95)\\d|8(?:04|[124579]\\d|8[0-3]))|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:6[1-5]|8[5-9]))|4(?:[28]8[0-2]|6(?:7[1-9]|8[02-47]))|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:0(?:[1-689]\\d|7[0-3])\\d\\d|38[0-7]|69[1-8]|78[2-4])|8(?:(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))\\d\\d|28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|9(?:0[235-9]\\d\\d|8[07])\\d)\\d{4}", null, null, null, "8021234567", null, null, [8, 10],
                    [6, 7]
                ],
                [null, null, "800\\d{7,11}", null, null, null, "80017591759", null, null, [10, 11, 12, 13, 14]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NG", 234, "009", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                    [null, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "700\\d{7,11}", null, null, null, "7001234567", null, null, [10, 11, 12, 13, 14]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NI: [null, [null, null, "(?:1800|[25-8]\\d{3})\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, "2\\d{7}", null, null, null, "21234567"],
                [null, null, "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", null, null, null, "81234567"],
                [null, null, "1800\\d{4}", null, null, null, "18001234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NI", 505, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NL: [null, [null, null, "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 10]],
                [null, null, "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", null, null, null, "101234567", null, null, [9]],
                [null, null, "6[1-58]\\d{7}", null, null, null, "612345678", null, null, [9]],
                [null, null, "800\\d{4,7}", null, null, null, "8001234", null, null, [7, 8, 9, 10]],
                [null, null, "90[069]\\d{4,7}", null, null, null, "9061234", null, null, [7, 8, 9, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:85|91)\\d{7}", null, null, null, "851234567", null, null, [9]], "NL", 31, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]],
                    [null, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-5]"], "0$1"],
                    [null, "(\\d)(\\d{8})", "$1 $2", ["6[1-58]"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["6"], "0$1"]
                ],
                [
                    [null, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-5]"], "0$1"],
                    [null, "(\\d)(\\d{8})", "$1 $2", ["6[1-58]"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["6"], "0$1"]
                ],
                [null, null, "66\\d{7}", null, null, null, "662345678", null, null, [9]], null, null, [null, null, "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", null, null, null, null, null, null, [5, 6]],
                [null, null, "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}", null, null, null, "14020", null, null, [5, 6, 9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NO: [null, [null, null, "(?:0|[2-9]\\d{3})\\d{4}", null, null, null, null, null, null, [5, 8]],
                [null, null, "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", null, null, null, "21234567", null, null, [8]],
                [null, null, "(?:4[015-8]|5[89]|9\\d)\\d{6}", null, null, null, "40612345", null, null, [8]],
                [null, null, "80[01]\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, "82[09]\\d{5}", null, null, null, "82012345", null, null, [8]],
                [null, null, "810(?:0[0-6]|[2-8]\\d)\\d{3}", null, null, null, "81021234", null, null, [8]],
                [null, null, "880\\d{5}", null, null, null, "88012345", null, null, [8]],
                [null, null, "85[0-5]\\d{5}", null, null, null, "85012345", null, null, [8]], "NO", 47, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], 1, "[02-689]|7[0-8]", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", null, null, null, "01234"], null, null, [null, null, "81[23]\\d{5}", null, null, null, "81212345", null, null, [8]]
            ],
            NP: [null, [null, null, "9\\d{9}|[1-9]\\d{7}", null, null, null, null, null, null, [8, 10],
                    [6, 7]
                ],
                [null, null, "(?:1[0-6]\\d|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6])\\d{5}", null, null, null, "14567890", null, null, [8],
                    [6, 7]
                ],
                [null, null, "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", null, null, null, "9841234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NP", 977, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                    [null, "(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                    [null, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NR: [null, [null, null, "(?:444|55\\d|888)\\d{4}", null, null, null, null, null, null, [7]],
                [null, null, "(?:444|888)\\d{4}", null, null, null, "4441234"],
                [null, null, "55[4-9]\\d{4}", null, null, null, "5551234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NR", 674, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NU: [null, [null, null, "(?:[47]|888\\d)\\d{3}", null, null, null, null, null, null, [4, 7]],
                [null, null, "[47]\\d{3}", null, null, null, "7012", null, null, [4]],
                [null, null, "888[4-9]\\d{3}", null, null, null, "8884012", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NU", 683, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            NZ: [null, [null, null, "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", null, null, null, null, null, null, [8, 9, 10],
                    [7]
                ],
                [null, null, "(?:24099|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{3})\\d{3}", null, null, null, "32345678", null, null, [8],
                    [7]
                ],
                [null, null, "2(?:[0-28]\\d?|[79])\\d{7}|21\\d{6}", null, null, null, "211234567"],
                [null, null, "508\\d{6,7}|80\\d{6,8}", null, null, null, "800123456"],
                [null, null, "90\\d{6,7}", null, null, null, "900123456", null, null, [8, 9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70\\d{7}", null, null, null, "701234567", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]], "NZ", 64, "0(?:0|161)", "0", null, null, "0", null, "00", null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80|9"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                    [null, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["[278]"], "0$1"]
                ], null, [null, null, "[28]6\\d{6,7}", null, null, null, "26123456", null, null, [8, 9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            OM: [null, [null, null, "(?:[279]\\d{3}|500|8007\\d?)\\d{4}", null, null, null, null, null, null, [7, 8, 9]],
                [null, null, "2[2-6]\\d{6}", null, null, null, "23123456", null, null, [8]],
                [null, null, "(?:7[129]\\d|9(?:0[1-9]|[1-9]\\d))\\d{5}", null, null, null, "92123456", null, null, [8]],
                [null, null, "(?:500|8007\\d?)\\d{4}", null, null, null, "80071234"],
                [null, null, "900\\d{5}", null, null, null, "90012345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "OM", 968, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PA: [null, [null, null, "(?:[1-57-9]|6\\d)\\d{6}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", null, null, null, "2001234", null, null, [7]],
                [null, null, "(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-5])\\d|8(?:1[01]|7[23]))\\d{4}", null, null, null, "61234567"],
                [null, null, "800\\d{4}", null, null, null, "8001234", null, null, [7]],
                [null, null, "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", null, null, null, "8601234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PA", 507, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                    [null, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PE: [null, [null, null, "(?:[14-8]|9\\d)\\d{7}", null, null, null, null, null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", null, null, null, "11234567", null, null, [8],
                    [6, 7]
                ],
                [null, null, "9\\d{8}", null, null, null, "912345678", null, null, [9]],
                [null, null, "800\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, "805\\d{5}", null, null, null, "80512345", null, null, [8]],
                [null, null, "801\\d{5}", null, null, null, "80112345", null, null, [8]],
                [null, null, "80[24]\\d{5}", null, null, null, "80212345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", null, "0", null, null, null, [
                    [null, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PF: [null, [null, null, "[48]\\d{7}|4\\d{5}", null, null, null, null, null, null, [6, 8]],
                [null, null, "4(?:[09][4-689]\\d|4)\\d{4}", null, null, null, "40412345"],
                [null, null, "8[79]\\d{6}", null, null, null, "87123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PF", 689, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "44\\d{4}", null, null, null, null, null, null, [6]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PG: [null, [null, null, "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9])\\d{4}", null, null, null, "3123456"],
                [null, null, "(?:7(?:[0-689]\\d|75)|81\\d)\\d{5}", null, null, null, "70123456", null, null, [8]],
                [null, null, "180\\d{4}", null, null, null, "1801234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "2(?:0[0-47]|7[568])\\d{4}", null, null, null, "2751234", null, null, [7]], "PG", 675, "00|140[1-3]", null, null, null, null, null, "00", null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PH: [null, [null, null, "(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}", null, null, null, null, null, null, [6, 8, 9, 10, 11, 12, 13],
                    [4, 5, 7]
                ],
                [null, null, "(?:2\\d(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|8[2-8]\\d{7}", null, null, null, "21234567", null, null, [6, 8, 9, 10],
                    [4, 5, 7]
                ],
                [null, null, "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[3-79]|89|9[4-9]))\\d{7}", null, null, null, "9051234567", null, null, [10]],
                [null, null, "1800\\d{7,9}", null, null, null, "180012345678", null, null, [11, 12, 13]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PH", 63, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                    [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-68]|4[2-9]|[5-7]|8[2-8]", "3(?:[23568]|4(?:[0-57-9]|6[02-8]))|4(?:2(?:[0-689]|7[0-8])|[3-8]|9(?:[0-246-9]|3[1-9]|5[0-57-9]))|[5-7]|8(?:[2-7]|8(?:[0-24-9]|3[0-35-9]))"], "(0$1)"],
                    [null, "(\\d{5})(\\d{4})", "$1 $2", ["[34]|88"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                    [null, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PK: [null, [null, null, "(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", null, null, null, null, null, null, [8, 9, 10, 11, 12],
                    [5, 6, 7]
                ],
                [null, null, "2(?:(?:1[2-9]\\d|[25][2-9])\\d{6}|(?:3[2358]|4[2-4]|9[2-8])[2-9]\\d{5,6})|4(?:(?:[0146-9][2-9]|2[2-9]\\d)\\d{6}|5[3479][2-9]\\d{5,6})|5(?:(?:[1-35-7][2-9]|8[126]\\d)\\d{6}|4[2-467][2-9]\\d{5,6})|6(?:0[468][2-9]\\d{5,6}|[1-8][2-9]\\d{6})|7(?:[14][2-9]\\d{6}|2[236][2-9]\\d{5,6})|8(?:[16][2-9]\\d{6}|(?:2[2-689]|3[23578]|4[3478]|5[2356])[2-9]\\d{5,6})|9(?:1[2-9]\\d{6}|(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])[2-9]\\d{5,6})", null, null, null, "2123456789", null, null, [9, 10],
                    [5, 6, 7, 8]
                ],
                [null, null, "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", null, null, null, "3012345678", null, null, [10]],
                [null, null, "800\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, "900\\d{5}", null, null, null, "90012345", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "122\\d{6}", null, null, null, "122044444", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PK", 92, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
                    [null, "(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                    [null, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356]))[2-9]|9(?:2(?:2[2-9]|[3-8])|(?:3[27-9]|4[2-6]|6[3569])[2-9]|9(?:[25-7][2-9]|8))"], "(0$1)"],
                    [null, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                    [null, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", null, null, null, "21111825888", null, null, [11, 12]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PL: [null, [null, null, "[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?", null, null, null, null, null, null, [6, 7, 8, 9]],
                [null, null, "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19\\d{3}", null, null, null, "123456789", null, null, [7, 9]],
                [null, null, "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", null, null, null, "512345678", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "70[01346-8]\\d{6}", null, null, null, "701234567", null, null, [9]],
                [null, null, "801\\d{6}", null, null, null, "801234567", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "39\\d{7}", null, null, null, "391234567", null, null, [9]], "PL", 48, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{5})", "$1", ["19"]],
                    [null, "(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                    [null, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                    [null, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|2|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3-8]"]]
                ], null, [null, null, "64\\d{4,7}", null, null, null, "641234567"], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "804\\d{6}", null, null, null, "804123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PM: [null, [null, null, "[45]\\d{5}", null, null, null, null, null, null, [6]],
                [null, null, "(?:4[1-3]|50)\\d{4}", null, null, null, "430123"],
                [null, null, "(?:4[02-4]|5[05])\\d{4}", null, null, null, "551234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PM", 508, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PR: [null, [null, null, "(?:[589]\\d\\d|787)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "(?:787|939)[2-9]\\d{6}", null, null, null, "7872345678", null, null, null, [7]],
                [null, null, "(?:787|939)[2-9]\\d{6}", null, null, null, "7872345678", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "PR", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "787|939", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PS: [null, [null, null, "(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}", null, null, null, null, null, null, [8, 9, 10],
                    [7]
                ],
                [null, null, "(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}", null, null, null, "22234567", null, null, [8],
                    [7]
                ],
                [null, null, "5[69]\\d{7}", null, null, null, "599123456", null, null, [9]],
                [null, null, "1800\\d{6}", null, null, null, "1800123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "1700\\d{6}", null, null, null, "1700123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PS", 970, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PT: [null, [null, null, "(?:[26-9]\\d|30)\\d{7}", null, null, null, null, null, null, [9]],
                [null, null, "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", null, null, null, "212345678"],
                [null, null, "9(?:[1-36]\\d\\d|480)\\d{5}", null, null, null, "912345678"],
                [null, null, "80[02]\\d{6}", null, null, null, "800123456"],
                [null, null, "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", null, null, null, "760123456"],
                [null, null, "80(?:8\\d|9[1579])\\d{5}", null, null, null, "808123456"],
                [null, null, "884[0-4689]\\d{5}", null, null, null, "884123456"],
                [null, null, "30\\d{7}", null, null, null, "301234567"], "PT", 351, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70(?:7\\d|8[17])\\d{5}", null, null, null, "707123456"], null, null, [null, null, "600\\d{6}", null, null, null, "600110000"]
            ],
            PW: [null, [null, null, "(?:[25-8]\\d\\d|345|488|900)\\d{4}", null, null, null, null, null, null, [7]],
                [null, null, "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", null, null, null, "2771234"],
                [null, null, "(?:6[2-4689]0|77\\d|88[0-4])\\d{4}", null, null, null, "6201234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "PW", 680, "01[12]", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            PY: [null, [null, null, "(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}", null, null, null, null, null, null, [6, 7, 8, 9],
                    [5]
                ],
                [null, null, "(?:2(?:1\\d|2[4-68]|7[15]|9[1-5])|5(?:[1-4]\\d|5[02-4])|6(?:1\\d|3[1-3]|44|7[1-46-8]))\\d{5,6}|3(?:(?:18|3[167]|4[2357]|51)\\d{5,6}|[289]\\d{5,7})|4(?:[1246-8]\\d{5,7}|(?:3[12]|5[13]|9[1-47])\\d{5,6})|7(?:[1-3]\\d{5,7}|(?:4[0-4]|6[1-578]|75|8[0-8])\\d{5,6})|8(?:[1-36]\\d{5,7}|58\\d{5,6})|[26]1\\d{5}", null, null, null, "212345678", null, null, [7, 8, 9],
                    [5, 6]
                ],
                [null, null, "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", null, null, null, "961456789", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "8700[0-4]\\d{4}", null, null, null, "870012345", null, null, [9]], "PY", 595, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-7]|85"], "0$1"],
                    [null, "(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "[2-9]0\\d{4,7}", null, null, null, "201234567"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            QA: [null, [null, null, "(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}", null, null, null, null, null, null, [7, 8]],
                [null, null, "4[04]\\d{6}", null, null, null, "44123456", null, null, [8]],
                [null, null, "[35-7]\\d{7}", null, null, null, "33123456", null, null, [8]],
                [null, null, "800\\d{4}", null, null, null, "8001234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "QA", 974, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                ], null, [null, null, "2(?:[12]\\d|61)\\d{4}", null, null, null, "2123456", null, null, [7]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            RE: [null, [null, null, "(?:26|[68]\\d)\\d{7}", null, null, null, null, null, null, [9]],
                [null, null, "262\\d{6}", null, null, null, "262161234"],
                [null, null, "69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}", null, null, null, "692123456"],
                [null, null, "80\\d{7}", null, null, null, "801234567"],
                [null, null, "89[1-37-9]\\d{6}", null, null, null, "891123456"],
                [null, null, "8(?:1[019]|2[0156]|84|90)\\d{6}", null, null, null, "810123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "RE", 262, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], 1, "262|69|8", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            RO: [null, [null, null, "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", null, null, null, null, null, null, [6, 9]],
                [null, null, "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d", null, null, null, "211234567"],
                [null, null, "7(?:(?:[02-7]\\d|8[03-8]|99)\\d|1(?:[01]\\d|20))\\d{5}", null, null, null, "712034567", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "90[036]\\d{6}", null, null, null, "900123456", null, null, [9]],
                [null, null, "801\\d{6}", null, null, null, "801123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "RO", 40, "00", "0", " int ", null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                    [null, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "37\\d{7}", null, null, null, "372123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            RS: [null, [null, null, "[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9, 10, 11, 12],
                    [4, 5]
                ],
                [null, null, "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:0[2-9]|[2-9]\\d)))\\d{3,8}", null, null, null, "10234567", null, null, [7, 8, 9, 10, 11, 12],
                    [4, 5, 6]
                ],
                [null, null, "6(?:[0-689]|7\\d)\\d{6,7}", null, null, null, "601234567", null, null, [8, 9, 10]],
                [null, null, "800\\d{3,9}", null, null, null, "80012345"],
                [null, null, "(?:78\\d|90[0169])\\d{3,7}", null, null, null, "90012345", null, null, [6, 7, 8, 9, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "RS", 381, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "7[06]\\d{4,10}", null, null, null, "700123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            RU: [null, [null, null, "[347-9]\\d{9}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", null, null, null, "3011234567", null, null, null, [7]],
                [null, null, "9\\d{9}", null, null, null, "9123456789"],
                [null, null, "80[04]\\d{7}", null, null, null, "8001234567"],
                [null, null, "80[39]\\d{7}", null, null, null, "8091234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "808\\d{7}", null, null, null, "8081234567"],
                [null, null, null, null, null, null, null, null, null, [-1]], "RU", 7, "810", "8", null, null, "8", null, "8~10", null, [
                    [null, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", null, 1]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", null, 1]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], 1, "3[04-689]|[489]", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            RW: [null, [null, null, "(?:06|[27]\\d\\d|[89]00)\\d{6}", null, null, null, null, null, null, [8, 9]],
                [null, null, "(?:06|2[258]\\d)\\d{6}", null, null, null, "250123456"],
                [null, null, "7[238]\\d{7}", null, null, null, "720123456", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "900\\d{6}", null, null, null, "900123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "RW", 250, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SA: [null, [null, null, "(?:(?:[15]|8\\d)\\d|92)\\d{7}", null, null, null, null, null, null, [9, 10],
                    [7]
                ],
                [null, null, "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", null, null, null, "112345678", null, null, [9],
                    [7]
                ],
                [null, null, "5(?:[013-689]\\d|7[0-36-8])\\d{6}", null, null, null, "512345678", null, null, [9]],
                [null, null, "800\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "925\\d{6}", null, null, null, "925012345", null, null, [9]],
                [null, null, "920\\d{6}", null, null, null, "920012345", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SA", 966, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                    [null, "(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "811\\d{7}", null, null, null, "8110123456", null, null, [10]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SB: [null, [null, null, "(?:[1-6]|[7-9]\\d\\d)\\d{4}", null, null, null, null, null, null, [5, 7]],
                [null, null, "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", null, null, null, "40123", null, null, [5]],
                [null, null, "(?:48|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d)\\d{3}", null, null, null, "7421234"],
                [null, null, "1[38]\\d{3}", null, null, null, "18123", null, null, [5]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5[12]\\d{3}", null, null, null, "51123", null, null, [5]], "SB", 677, "0[01]", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["7[1-9]|8[4-9]|9(?:1[2-9]|2[013-9]|3[0-2]|[46]|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SC: [null, [null, null, "(?:(?:(?:[24]\\d|64)\\d|971)\\d|8000)\\d{3}", null, null, null, null, null, null, [7]],
                [null, null, "4[2-46]\\d{5}", null, null, null, "4217123"],
                [null, null, "2[5-8]\\d{5}", null, null, null, "2510123"],
                [null, null, "8000\\d{3}", null, null, null, "8000000"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:64\\d|971)\\d{4}", null, null, null, "6412345"], "SC", 248, "0(?:[02]|10?)", null, null, null, null, null, "00", null, [
                    [null, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SD: [null, [null, null, "[19]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, "1(?:5\\d|8[35-7])\\d{6}", null, null, null, "151231234"],
                [null, null, "(?:1[0-2]|9[0-3569])\\d{7}", null, null, null, "911231234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SD", 249, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SE: [null, [null, null, "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9, 10, 12]],
                [null, null, "1(?:0[1-8]\\d{6}|(?:[13689]\\d|2[0-35]|4[0-4]|5[0-25-9]|7[13-6])\\d{5,6})|(?:2(?:[136]\\d|2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|[1356]\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01]))\\d{5,6}|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})|(?:[12][136]|3[356])\\d{5}", null, null, null, "8123456", null, null, [7, 8, 9]],
                [null, null, "7[02369]\\d{7}", null, null, null, "701234567", null, null, [9]],
                [null, null, "20\\d{4,7}", null, null, null, "20123456", null, null, [6, 7, 8, 9]],
                [null, null, "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", null, null, null, "9001234567", null, null, [7, 8, 9, 10]],
                [null, null, "77[0-7]\\d{6}", null, null, null, "771234567", null, null, [9]],
                [null, null, "75[1-8]\\d{6}", null, null, null, "751234567", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SE", 46, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1"],
                    [null, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                    [null, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
                    [null, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"],
                    [null, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:0|39|44)"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]
                ],
                [
                    [null, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
                    [null, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44)"]],
                    [null, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                    [null, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
                    [null, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],
                    [null, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:0|39|44)"]],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                    [null, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                ],
                [null, null, "74[02-9]\\d{6}", null, null, null, "740123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:25[245]|67[3-68])\\d{9}", null, null, null, "254123456789", null, null, [12]]
            ],
            SG: [null, [null, null, "(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}", null, null, null, null, null, null, [8, 10, 11]],
                [null, null, "6[1-9]\\d{6}", null, null, null, "61234567", null, null, [8]],
                [null, null, "(?:8[1-8]|9[0-8])\\d{6}", null, null, null, "81234567", null, null, [8]],
                [null, null, "(?:18|8)00\\d{7}", null, null, null, "18001234567", null, null, [10, 11]],
                [null, null, "1900\\d{7}", null, null, null, "19001234567", null, null, [11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "3[12]\\d{6}", null, null, null, "31234567", null, null, [8]], "SG", 65, "0[0-3]\\d", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                    [null, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"]],
                    [null, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["70"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "7000\\d{7}", null, null, null, "70001234567", null, null, [11]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SH: [null, [null, null, "(?:[256]\\d|8)\\d{3}", null, null, null, null, null, null, [4, 5]],
                [null, null, "2(?:[0-57-9]\\d|6[4-9])\\d\\d", null, null, null, "22158"],
                [null, null, "[56]\\d{4}", null, null, null, "51234", null, null, [5]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "262\\d\\d", null, null, null, "26212", null, null, [5]], "SH", 290, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], 1, "[256]", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SI: [null, [null, null, "[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}", null, null, null, null, null, null, [5, 6, 7, 8]],
                [null, null, "(?:[1-357][2-8]|4[24-8])\\d{6}", null, null, null, "12345678", null, null, [8],
                    [7]
                ],
                [null, null, "(?:(?:[37][01]|4[0139]|51)\\d\\d|6(?:[48]\\d\\d|5(?:1\\d|55|[67]0)|9(?:10|[69]\\d)))\\d{4}", null, null, null, "31234567", null, null, [8]],
                [null, null, "80\\d{4,6}", null, null, null, "80123456", null, null, [6, 7, 8]],
                [null, null, "89[1-3]\\d{2,5}|90\\d{4,6}", null, null, null, "90123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}", null, null, null, "59012345", null, null, [8]], "SI", 386, "00|10(?:22|66|88|99)", "0", null, null, "0", null, "00", null, [
                    [null, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[357][2-8]|4[24-8]"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3467]|51"], "0$1"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[58]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SJ: [null, [null, null, "(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}", null, null, null, null, null, null, [5, 8]],
                [null, null, "79\\d{6}", null, null, null, "79123456", null, null, [8]],
                [null, null, "(?:4[015-8]|5[89]|9\\d)\\d{6}", null, null, null, "41234567", null, null, [8]],
                [null, null, "80[01]\\d{5}", null, null, null, "80012345", null, null, [8]],
                [null, null, "82[09]\\d{5}", null, null, null, "82012345", null, null, [8]],
                [null, null, "810(?:0[0-6]|[2-8]\\d)\\d{3}", null, null, null, "81021234", null, null, [8]],
                [null, null, "880\\d{5}", null, null, null, "88012345", null, null, [8]],
                [null, null, "85[0-5]\\d{5}", null, null, null, "85012345", null, null, [8]], "SJ", 47, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "79", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", null, null, null, "01234"], null, null, [null, null, "81[23]\\d{5}", null, null, null, "81212345", null, null, [8]]
            ],
            SK: [null, [null, null, "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", null, null, null, null, null, null, [6, 7, 9]],
                [null, null, "(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", null, null, null, "221234567"],
                [null, null, "9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}", null, null, null, "912123456", null, null, [9]],
                [null, null, "800\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "9(?:00|[78]\\d)\\d{6}", null, null, null, "900123456", null, null, [9]],
                [null, null, "8[5-9]\\d{7}", null, null, null, "850123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "6(?:02|5[0-4]|9[0-6])\\d{6}", null, null, null, "690123456", null, null, [9]], "SK", 421, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"]
                ],
                [
                    [null, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                    [null, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                    [null, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"]
                ],
                [null, null, "9090\\d{3}", null, null, null, "9090123", null, null, [7]], null, null, [null, null, "(?:(?:602|8(?:00|[5-9]\\d))\\d{3}|9(?:0(?:0\\d{3}|90)|[78]\\d{4}))\\d{3}", null, null, null, null, null, null, [7, 9]],
                [null, null, "96\\d{7}", null, null, null, "961234567", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SL: [null, [null, null, "(?:[2-578]\\d|66|99)\\d{6}", null, null, null, null, null, null, [8],
                    [6]
                ],
                [null, null, "[235]2[2-4][2-9]\\d{4}", null, null, null, "22221234", null, null, null, [6]],
                [null, null, "(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}", null, null, null, "25123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SL", 232, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["[2-9]"], "(0$1)"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SM: [null, [null, null, "(?:0549|[5-7]\\d)\\d{6}", null, null, null, null, null, null, [8, 10],
                    [6]
                ],
                [null, null, "0549(?:8[0157-9]|9\\d)\\d{4}", null, null, null, "0549886377", null, null, [10],
                    [6]
                ],
                [null, null, "6[16]\\d{6}", null, null, null, "66661212", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "7[178]\\d{6}", null, null, null, "71123456", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5[158]\\d{6}", null, null, null, "58001110", null, null, [8]], "SM", 378, "00", null, null, null, "([89]\\d{5})$", "0549$1", null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                    [null, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SN: [null, [null, null, "(?:[378]\\d{4}|93330)\\d{4}", null, null, null, null, null, null, [9]],
                [null, null, "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", null, null, null, "301012345"],
                [null, null, "7(?:[06-8]\\d|21|90)\\d{6}", null, null, null, "701234567"],
                [null, null, "800\\d{6}", null, null, null, "800123456"],
                [null, null, "88[4689]\\d{6}", null, null, null, "884123456"],
                [null, null, "81[02468]\\d{6}", null, null, null, "810123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:3(?:392|9[01]\\d)\\d|93330)\\d{4}", null, null, null, "933301234"], "SN", 221, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
                    [null, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SO: [null, [null, null, "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", null, null, null, null, null, null, [6, 7, 8, 9]],
                [null, null, "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}", null, null, null, "4012345", null, null, [6, 7]],
                [null, null, "(?:(?:15|(?:3[59]|4[89]|6[1-9]|79|8[08])\\d|9(?:0[67]|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:6\\d|7[1-9])\\d{6}", null, null, null, "71123456", null, null, [7, 8, 9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SO", 252, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                    [null, "(\\d{6})", "$1", ["[134]"]],
                    [null, "(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                    [null, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]],
                    [null, "(\\d{2})(\\d{5,7})", "$1 $2", ["[12679]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SR: [null, [null, null, "(?:[2-5]|68|[78]\\d)\\d{5}", null, null, null, null, null, null, [6, 7]],
                [null, null, "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", null, null, null, "211234"],
                [null, null, "(?:7[124-7]|8[125-9])\\d{5}", null, null, null, "7412345", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "56\\d{4}", null, null, null, "561234", null, null, [6]], "SR", 597, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]],
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["5"]],
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SS: [null, [null, null, "[19]\\d{8}", null, null, null, null, null, null, [9]],
                [null, null, "18\\d{7}", null, null, null, "181234567"],
                [null, null, "(?:12|9[1257])\\d{7}", null, null, null, "977123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SS", 211, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ST: [null, [null, null, "(?:22|9\\d)\\d{5}", null, null, null, null, null, null, [7]],
                [null, null, "22\\d{5}", null, null, null, "2221234"],
                [null, null, "9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d\\d)\\d{3}", null, null, null, "9812345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "ST", 239, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SV: [null, [null, null, "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", null, null, null, null, null, null, [7, 8, 11]],
                [null, null, "2[1-6]\\d{6}", null, null, null, "21234567", null, null, [8]],
                [null, null, "[67]\\d{7}", null, null, null, "70123456", null, null, [8]],
                [null, null, "800\\d{4}(?:\\d{4})?", null, null, null, "8001234", null, null, [7, 11]],
                [null, null, "900\\d{4}(?:\\d{4})?", null, null, null, "9001234", null, null, [7, 11]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SV", 503, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                    [null, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SX: [null, [null, null, "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "7215(?:4[2-8]|8[239]|9[056])\\d{4}", null, null, null, "7215425678", null, null, null, [7]],
                [null, null, "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", null, null, null, "7215205678", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "SX", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "721", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SY: [null, [null, null, "[1-39]\\d{8}|[1-5]\\d{7}", null, null, null, null, null, null, [8, 9],
                    [6, 7]
                ],
                [null, null, "(?:1[14]\\d|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}|1[1-356]\\d{6}", null, null, null, "112345678", null, null, null, [6, 7]],
                [null, null, "9(?:22|[3-589]\\d|6[024-9])\\d{6}", null, null, null, "944567890", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "SY", 963, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", null, 1]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            SZ: [null, [null, null, "(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}", null, null, null, null, null, null, [8, 9]],
                [null, null, "[23][2-5]\\d{6}", null, null, null, "22171234", null, null, [8]],
                [null, null, "7[6-9]\\d{6}", null, null, null, "76123456", null, null, [8]],
                [null, null, "0800\\d{4}", null, null, null, "08001234", null, null, [8]],
                [null, null, "900\\d{6}", null, null, null, "900012345", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70\\d{6}", null, null, null, "70012345", null, null, [8]], "SZ", 268, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                    [null, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "0800\\d{4}", null, null, null, null, null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TA: [null, [null, null, "8\\d{3}", null, null, null, null, null, null, [4]],
                [null, null, "8\\d{3}", null, null, null, "8999"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TA", 290, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "8", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TC: [null, [null, null, "(?:[58]\\d\\d|649|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "649(?:712|9(?:4\\d|50))\\d{4}", null, null, null, "6497121234", null, null, null, [7]],
                [null, null, "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", null, null, null, "6492311234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, "64971[01]\\d{4}", null, null, null, "6497101234", null, null, null, [7]], "TC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "649", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TD: [null, [null, null, "(?:22|[69]\\d|77)\\d{6}", null, null, null, null, null, null, [8]],
                [null, null, "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", null, null, null, "22501234"],
                [null, null, "(?:6[023568]|77|9\\d)\\d{6}", null, null, null, "63012345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TD", 235, "00|16", null, null, null, null, null, "00", null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TG: [null, [null, null, "[279]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", null, null, null, "22212345"],
                [null, null, "(?:7[09]|9[0-36-9])\\d{6}", null, null, null, "90112345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TG", 228, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TH: [null, [null, null, "(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}", null, null, null, null, null, null, [8, 9, 10]],
                [null, null, "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", null, null, null, "21234567", null, null, [8]],
                [null, null, "(?:14|6[1-6]|[89]\\d)\\d{7}", null, null, null, "812345678", null, null, [9]],
                [null, null, "1800\\d{6}", null, null, null, "1800123456", null, null, [10]],
                [null, null, "1900\\d{6}", null, null, null, "1900123456", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "6[08]\\d{7}", null, null, null, "601234567", null, null, [9]], "TH", 66, "00[1-9]", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                    [null, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TJ: [null, [null, null, "(?:[3-59]\\d|77|88)\\d{7}", null, null, null, null, null, null, [9],
                    [3, 5, 6, 7]
                ],
                [null, null, "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", null, null, null, "372123456", null, null, null, [3, 5, 6, 7]],
                [null, null, "(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}", null, null, null, "917123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TJ", 992, "810", "8", null, null, "8", null, "8~10", null, [
                    [null, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])", "3(?:[1245]|3(?:1[0-689]|2))"], null, null, 1],
                    [null, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["33"], null, null, 1],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[0-69])"], null, null, 1],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[349]"], null, null, 1]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TK: [null, [null, null, "[2-47]\\d{3,6}", null, null, null, null, null, null, [4, 5, 6, 7]],
                [null, null, "(?:2[2-4]|[34]\\d)\\d{2,5}", null, null, null, "3101"],
                [null, null, "7[2-4]\\d{2,5}", null, null, null, "7290"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TK", 690, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TL: [null, [null, null, "(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", null, null, null, "2112345", null, null, [7]],
                [null, null, "7[3-8]\\d{6}", null, null, null, "77212345", null, null, [8]],
                [null, null, "80\\d{5}", null, null, null, "8012345", null, null, [7]],
                [null, null, "90\\d{5}", null, null, null, "9012345", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "70\\d{5}", null, null, null, "7012345", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TL", 670, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TM: [null, [null, null, "[1-6]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", null, null, null, "12345678"],
                [null, null, "6[1-9]\\d{6}", null, null, null, "66123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TM", 993, "810", "8", null, null, "8", null, "8~10", null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                    [null, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
                    [null, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TN: [null, [null, null, "[2-57-9]\\d{7}", null, null, null, null, null, null, [8]],
                [null, null, "(?:(?:3[0-2]|7\\d)\\d{3}|81200)\\d{3}", null, null, null, "30010123"],
                [null, null, "(?:(?:[259]\\d|4[0-6])\\d\\d|3(?:001|1(?:[1-35]\\d|40)|240|(?:6[0-4]|91)\\d))\\d{4}", null, null, null, "20123456"],
                [null, null, "8010\\d{4}", null, null, null, "80101234"],
                [null, null, "88\\d{6}", null, null, null, "88123456"],
                [null, null, "8[12]10\\d{4}", null, null, null, "81101234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TN", 216, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TO: [null, [null, null, "(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}", null, null, null, null, null, null, [5, 7]],
                [null, null, "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", null, null, null, "20123", null, null, [5]],
                [null, null, "(?:7[578]|8[46-9])\\d{5}", null, null, null, "7715123", null, null, [7]],
                [null, null, "0800\\d{3}", null, null, null, "0800222", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TO", 676, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{3})", "$1-$2", ["[2-6]|7[014]|8[05]"]],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["7[578]|8"]],
                    [null, "(\\d{4})(\\d{3})", "$1 $2", ["0"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TR: [null, [null, null, "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", null, null, null, null, null, null, [7, 10]],
                [null, null, "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", null, null, null, "2123456789", null, null, [10]],
                [null, null, "5(?:(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d\\d|6161)\\d{5}", null, null, null, "5012345678", null, null, [10]],
                [null, null, "800\\d{7}", null, null, null, "8001234567", null, null, [10]],
                [null, null, "(?:8[89]8|900)\\d{7}", null, null, null, "9001234567", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "592(?:21[12]|461)\\d{4}", null, null, null, "5922121234", null, null, [10]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TR", 90, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"], null, null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-4]"], "(0$1)", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|[89]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1", null, 1]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-4]"], "(0$1)", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|[89]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1", null, 1]
                ],
                [null, null, "512\\d{7}", null, null, null, "5123456789", null, null, [10]], null, null, [null, null, "444\\d{4}", null, null, null, null, null, null, [7]],
                [null, null, "(?:444|850\\d{3})\\d{4}", null, null, null, "4441444"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TT: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", null, null, null, "8682211234", null, null, null, [7]],
                [null, null, "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}", null, null, null, "8682911234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "TT", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "868", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "868619\\d{4}", null, null, null, "8686191234", null, null, null, [7]]
            ],
            TV: [null, [null, null, "(?:2|7\\d\\d|90)\\d{4}", null, null, null, null, null, null, [5, 6, 7]],
                [null, null, "2[02-9]\\d{3}", null, null, null, "20123", null, null, [5]],
                [null, null, "(?:7[01]\\d|90)\\d{4}", null, null, null, "901234", null, null, [6, 7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "TV", 688, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TW: [null, [null, null, "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", null, null, null, null, null, null, [7, 8, 9, 10]],
                [null, null, "(?:(?:2[2-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9])\\d\\d|8(?:2(?:3\\d|66)|[7-9]\\d\\d))\\d{4}|24\\d{6}", null, null, null, "221234567", null, null, [8, 9]],
                [null, null, "9[0-8]\\d{7}", null, null, null, "912345678", null, null, [9]],
                [null, null, "80[0-79]\\d{6}", null, null, null, "800123456", null, null, [9]],
                [null, null, "20(?:[013-9]\\d\\d|2)\\d{4}", null, null, null, "203123456", null, null, [7, 9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "99\\d{7}", null, null, null, "990123456", null, null, [9]],
                [null, null, "70\\d{8}", null, null, null, "7012345678", null, null, [10]], "TW", 886, "0(?:0[25-79]|19)", "0", "#", null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                    [null, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[27-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "50[0-46-9]\\d{6}", null, null, null, "500123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            TZ: [null, [null, null, "(?:[26-8]\\d|41|90)\\d{7}", null, null, null, null, null, null, [9]],
                [null, null, "2[2-8]\\d{7}", null, null, null, "222345678"],
                [null, null, "(?:6[2-9]|7[13-9])\\d{7}", null, null, null, "621234567"],
                [null, null, "80[08]\\d{6}", null, null, null, "800123456"],
                [null, null, "90\\d{7}", null, null, null, "900123456"],
                [null, null, "8(?:40|6[01])\\d{6}", null, null, null, "840123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "41\\d{7}", null, null, null, "412345678"], "TZ", 255, "00[056]", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
                    [null, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            UA: [null, [null, null, "[3-9]\\d{8}", null, null, null, null, null, null, [9],
                    [5, 6, 7]
                ],
                [null, null, "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", null, null, null, "311234567", null, null, null, [5, 6, 7]],
                [null, null, "(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}", null, null, null, "391234567"],
                [null, null, "800\\d{6}", null, null, null, "800123456"],
                [null, null, "900[2-49]\\d{5}", null, null, null, "900212345"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "89[1-579]\\d{6}", null, null, null, "891234567"], "UA", 380, "00", "0", null, null, "0", null, "0~0", null, [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0"], "0$1"],
                    [null, "(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-9]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            UG: [null, [null, null, "(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}", null, null, null, null, null, null, [9],
                    [5, 6, 7]
                ],
                [null, null, "(?:20(?:(?:(?:[0147]\\d|5[0-4]|8[0-2])\\d|2(?:40|[5-9]\\d)|3(?:0[0-4]|[2367]\\d))\\d|6(?:00[0-2]|30[0-4]|[5-9]\\d\\d))|[34]\\d{5})\\d{3}", null, null, null, "312345678", null, null, null, [5, 6, 7]],
                [null, null, "7(?:(?:[0157-9]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}", null, null, null, "712345678"],
                [null, null, "800[1-3]\\d{5}", null, null, null, "800123456"],
                [null, null, "90[1-3]\\d{6}", null, null, null, "901123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "UG", 256, "00[057]", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[0-5]|6[0-36-9])"], "0$1"],
                    [null, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                    [null, "(\\d{3})(\\d{6})", "$1 $2", ["[247-9]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            US: [null, [null, null, "[2-9]\\d{9}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", null, null, null, "2015550123", null, null, null, [7]],
                [null, null, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", null, null, null, "2015550123", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "US", 1, "011", "1", null, null, "1", null, null, 1, [
                    [null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]],
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], null, null, 1]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], 1, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "710[2-9]\\d{6}", null, null, null, "7102123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            UY: [null, [null, null, "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:2\\d|4[2-7])\\d{6}", null, null, null, "21231234", null, null, [8],
                    [7]
                ],
                [null, null, "9[1-9]\\d{6}", null, null, null, "94231234", null, null, [8]],
                [null, null, "80[05]\\d{4}", null, null, null, "8001234", null, null, [7]],
                [null, null, "90[0-8]\\d{4}", null, null, null, "9001234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", null, "0", null, "00", null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
                    [null, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]],
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            UZ: [null, [null, null, "[679]\\d{8}", null, null, null, null, null, null, [9],
                    [7]
                ],
                [null, null, "(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", null, null, null, "669050123", null, null, null, [7]],
                [null, null, "(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}", null, null, null, "912345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "UZ", 998, "810", "8", null, null, "8", null, "8~10", null, [
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VA: [null, [null, null, "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", null, null, null, null, null, null, [6, 7, 8, 9, 10, 11]],
                [null, null, "06698\\d{1,6}", null, null, null, "0669812345"],
                [null, null, "33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", null, null, null, "3123456789", null, null, [9, 10, 11]],
                [null, null, "80(?:0\\d{3}|3)\\d{3}", null, null, null, "800123456", null, null, [6, 9]],
                [null, null, "(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", null, null, null, "899123456", null, null, [6, 8, 9, 10]],
                [null, null, "84(?:[08]\\d{3}|[17])\\d{3}", null, null, null, "848123456", null, null, [6, 9]],
                [null, null, "1(?:78\\d|99)\\d{6}", null, null, null, "1781234567", null, null, [9, 10]],
                [null, null, "55\\d{8}", null, null, null, "5512345678", null, null, [10]], "VA", 39, "00", null, null, null, null, null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "06698", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VC: [null, [null, null, "(?:[58]\\d\\d|784|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", null, null, null, "7842661234", null, null, null, [7]],
                [null, null, "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}", null, null, null, "7844301234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "VC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "784", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VE: [null, [null, null, "(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}", null, null, null, "2121234567", null, null, null, [7]],
                [null, null, "4(?:1[24-8]|2[46])\\d{7}", null, null, null, "4121234567"],
                [null, null, "800\\d{7}", null, null, null, "8001234567"],
                [null, null, "900\\d{7}", null, null, null, "9001234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "VE", 58, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1", "$CC $1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VG: [null, [null, null, "(?:284|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}", null, null, null, "2842291234", null, null, null, [7]],
                [null, null, "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}", null, null, null, "2843001234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "VG", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "284", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VI: [null, [null, null, "(?:(?:34|90)0|[58]\\d\\d)\\d{7}", null, null, null, null, null, null, [10],
                    [7]
                ],
                [null, null, "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", null, null, null, "3406421234", null, null, null, [7]],
                [null, null, "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", null, null, null, "3406421234", null, null, null, [7]],
                [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"],
                [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"],
                [null, null, null, null, null, null, null, null, null, [-1]], "VI", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "340", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VN: [null, [null, null, "[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}", null, null, null, null, null, null, [7, 8, 9, 10]],
                [null, null, "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}", null, null, null, "2101234567", null, null, [10]],
                [null, null, "(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5689]|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}", null, null, null, "912345678", null, null, [9]],
                [null, null, "1800\\d{4,6}", null, null, null, "1800123456", null, null, [8, 9, 10]],
                [null, null, "1900\\d{4,6}", null, null, null, "1900123456", null, null, [8, 9, 10]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:67|99)2\\d{6}", null, null, null, "992012345", null, null, [9]], "VN", 84, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], null, null, 1],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", null, 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", null, 1]
                ],
                [
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", null, 1],
                    [null, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], null, null, 1],
                    [null, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", null, 1],
                    [null, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", null, 1],
                    [null, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", null, 1]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "(?:[17]99|69\\d\\d?)\\d{4}", null, null, null, null, null, null, [7, 8]],
                [null, null, "(?:[17]99|69\\d\\d?|80\\d)\\d{4}", null, null, null, "1992000", null, null, [7, 8]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            VU: [null, [null, null, "(?:(?:[23]|(?:[57]\\d|90)\\d)\\d|[48]8)\\d{3}", null, null, null, null, null, null, [5, 7]],
                [null, null, "(?:(?:2[02-9]|88)\\d|3(?:[5-7]\\d|8[0-8])|48[4-9])\\d\\d", null, null, null, "22123", null, null, [5]],
                [null, null, "(?:5(?:[0-689]\\d|7[2-5])|7[013-7]\\d)\\d{4}", null, null, null, "5912345", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "90[1-9]\\d{4}", null, null, null, "9010123", null, null, [7]], "VU", 678, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "(?:3[03]|900\\d)\\d{3}", null, null, null, "30123"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            WF: [null, [null, null, "(?:[45]0|68|72|8\\d)\\d{4}", null, null, null, null, null, null, [6]],
                [null, null, "(?:50|68|72)\\d{4}", null, null, null, "501234"],
                [null, null, "(?:50|68|72|8[23])\\d{4}", null, null, null, "501234"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "WF", 681, "00", null, null, null, null, null, null, null, [
                    [null, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "[48]0\\d{4}", null, null, null, "401234"]
            ],
            WS: [null, [null, null, "(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}", null, null, null, null, null, null, [5, 6, 7, 10]],
                [null, null, "(?:[2-5]\\d|6[1-9])\\d{3}", null, null, null, "22123", null, null, [5]],
                [null, null, "(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}", null, null, null, "7212345", null, null, [7, 10]],
                [null, null, "800\\d{3}", null, null, null, "800123", null, null, [6]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "WS", 685, "0", null, null, null, null, null, null, null, [
                    [null, "(\\d{5})", "$1", ["[2-6]"]],
                    [null, "(\\d{3})(\\d{3,7})", "$1 $2", ["8"]],
                    [null, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            XK: [null, [null, null, "(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}", null, null, null, null, null, null, [8, 9]],
                [null, null, "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}", null, null, null, "28012345"],
                [null, null, "4[3-79]\\d{6}", null, null, null, "43201234", null, null, [8]],
                [null, null, "800\\d{5}", null, null, null, "80001234", null, null, [8]],
                [null, null, "900\\d{5}", null, null, null, "90001234", null, null, [8]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "XK", 383, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                    [null, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            YE: [null, [null, null, "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", null, null, null, null, null, null, [7, 8, 9],
                    [6]
                ],
                [null, null, "17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", null, null, null, "1234567", null, null, [7, 8],
                    [6]
                ],
                [null, null, "7[0137]\\d{7}", null, null, null, "712345678", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "YE", 967, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            YT: [null, [null, null, "(?:(?:26|63)9|80\\d)\\d{6}", null, null, null, null, null, null, [9]],
                [null, null, "269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}", null, null, null, "269601234"],
                [null, null, "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}", null, null, null, "639012345"],
                [null, null, "80\\d{7}", null, null, null, "801234567"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "YT", 262, "00", "0", null, null, "0", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "269|63", [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ZA: [null, [null, null, "[1-9]\\d{8}|8\\d{4,7}", null, null, null, null, null, null, [5, 6, 7, 8, 9]],
                [null, null, "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", null, null, null, "101234567", null, null, [9]],
                [null, null, "(?:6\\d|7[0-46-9]|8[1-5])\\d{7}|8[1-4]\\d{3,6}", null, null, null, "711234567"],
                [null, null, "80\\d{7}", null, null, null, "801234567", null, null, [9]],
                [null, null, "(?:86[2-9]|9[0-2]\\d)\\d{6}", null, null, null, "862345678", null, null, [9]],
                [null, null, "860\\d{6}", null, null, null, "860123456", null, null, [9]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "87\\d{7}", null, null, null, "871234567", null, null, [9]], "ZA", 27, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "861\\d{6}", null, null, null, "861123456", null, null, [9]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ZM: [null, [null, null, "(?:(?:21|76|9\\d)\\d|800)\\d{6}", null, null, null, null, null, null, [9],
                    [6]
                ],
                [null, null, "21[1-8]\\d{6}", null, null, null, "211234567", null, null, null, [6]],
                [null, null, "(?:76|9[5-8])\\d{7}", null, null, null, "955123456"],
                [null, null, "800\\d{6}", null, null, null, "800123456"],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], "ZM", 260, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d{3})(\\d{3})", "$1 $2"],
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                ],
                [
                    [null, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                ],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ],
            ZW: [null, [null, null, "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", null, null, null, null, null, null, [5, 6, 7, 8, 9, 10],
                    [3, 4]
                ],
                [null, null, "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|(?:4\\d\\d|9[2-9])\\d\\d?|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}", null, null, null, "1312345", null, null, null, [3, 4]],
                [null, null, "(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}", null, null, null, "712345678", null, null, [9, 10]],
                [null, null, "80(?:[01]\\d|20|8[0-8])\\d{3}", null, null, null, "8001234", null, null, [7]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, "86(?:1[12]|30|55|77|8[368])\\d{6}", null, null, null, "8686123456", null, null, [10]], "ZW", 263, "00", "0", null, null, "0", null, null, null, [
                    [null, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                    [null, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78]|75)"], "0$1"],
                    [null, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                    [null, "(\\d{2})(\\d{7})", "$1 $2", ["2(?:[05-79]2|4)|(?:39|5[45]|6[15-8])2|8[13-59]", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                    [null, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    [null, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                    [null, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                    [null, "(\\d{2})(\\d{3,5})", "$1 $2", ["[16]|2(?:[0-256]|9[0-79])|3(?:[09][0-79]|1[0-689]|[24-6]|3[0-69])|5[0-35-9]"], "0$1"],
                    [null, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29|3|54"], "0$1"],
                    [null, "(\\d{4})(\\d{3,5})", "$1 $2", ["[25]"], "0$1"]
                ], null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]],
                [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]
            ]
        };
    y.b = function() { return y.a ? y.a : y.a = new y };
    var ul = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9" },
        dl = RegExp("[+＋]+"),
        $l = RegExp("([0-9０-９٠-٩۰-۹])"),
        tl = /^\(?\$1\)?$/,
        el = new A;
    h(el, 11, "NA");
    var rl = /\[([^\[\]])*\]/g,
        il = /\d(?=[^,}][^,}])/g,
        al = RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),
        ol = /[- ]/;
    E.prototype.K = function() { this.C = "", d(this.i), d(this.u), d(this.m), this.s = 0, this.w = "", d(this.b), this.h = "", d(this.a), this.l = !0, this.A = this.o = this.F = !1, this.f = [], this.B = !1, this.g != this.J && (this.g = v(this, this.D)) }, E.prototype.L = function(l) { return this.C = K(this, l) }, l("Cleave.AsYouTypeFormatter", E), l("Cleave.AsYouTypeFormatter.prototype.inputDigit", E.prototype.L), l("Cleave.AsYouTypeFormatter.prototype.clear", E.prototype.K)
}.call("object" == typeof global && global ? global : window);