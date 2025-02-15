import {
    ag as Rt,
    ah as Ba,
    ai as pt,
    aj as We,
    ak as kn,
    al as ht,
    am as Ua,
    an as Ln,
    ao as za,
    ap as Ha,
    aq as ti,
    ar as Wa,
    as as qa,
    at as ni,
    au as fn,
    av as Fr,
    aw as Yt,
    ax as xn,
    ay as Pr,
    az as ri,
    aA as mr,
    aB as ai,
    aC as si,
    g as Me,
    aD as _r,
    _ as Zn,
    n as ii,
    s as Sn,
    a as jr,
    u as Ga,
    d as oi,
    aE as Ka,
    l as Bn,
    q as Ya,
    i as li,
    aF as $n,
    m as gr,
    H as ui,
    e as Ct,
    z as di
} from './orVGlpMf.js';
import {
    Z as b,
    _ as P,
    x as B,
    I as D,
    b as m,
    N as Zt,
    z as vr,
    L as at,
    d as je,
    o as Rr,
    r as se,
    k as On,
    a as et,
    ar as yr,
    w as Xa,
    i as ci,
    g as Mr,
    s as fi,
    q as we,
    a2 as _e,
    a3 as ae,
    a0 as pn,
    aB as pi,
    $,
    a5 as I,
    a1 as Ye,
    a6 as ie,
    aa as It,
    aE as hi,
    af as br,
    aF as mi,
    U as Q,
    Y as _i,
    ab as Ft,
    a7 as gi,
    ad as ce,
    a8 as ea,
    S as tt,
    an as bt,
    aG as Nr,
    O as vi,
    A as Ja,
    u as Un,
    ac as vn,
    al as or,
    a4 as ta,
    aH as yi,
    E as bi,
    ae as wr,
    am as na,
    D as wi,
    j as ki
} from './Ca8kBgT7.js';
import { _ as Ti } from './CAR1m2_E.js';
import { _ as xi } from './BSAJC9Px.js';
import { u as hn } from './BGjiCQZh.js';
import { H as Si, s as $i, a as Oi } from './ClIrsBkV.js';
import { g as Ai, a as Ci } from './rWh1kmcV.js';
import { D as At, t as Ee, a as Je, g as Ei } from './BAJeilhe.js';
import { s as Ii } from './x_rD_Ya3.js';
import { p as Fi } from './89bumb-6.js';
import { _ as Pi } from './dsn67dQB.js';
var ji = '[object Symbol]';
function Mt(t) {
    return typeof t == 'symbol' || (Rt(t) && Ba(t) == ji);
}
var ra = pt ? pt.prototype : void 0,
    aa = ra ? ra.toString : void 0;
function Qa(t) {
    if (typeof t == 'string') return t;
    if (We(t)) return kn(t, Qa) + '';
    if (Mt(t)) return aa ? aa.call(t) : '';
    var e = t + '';
    return e == '0' && 1 / t == -1 / 0 ? '-0' : e;
}
var Ri = /\s/;
function Mi(t) {
    for (var e = t.length; e-- && Ri.test(t.charAt(e)); );
    return e;
}
var Ni = /^\s+/;
function Di(t) {
    return t && t.slice(0, Mi(t) + 1).replace(Ni, '');
}
var sa = NaN,
    Vi = /^[-+]0x[0-9a-f]+$/i,
    Li = /^0b[01]+$/i,
    Zi = /^0o[0-7]+$/i,
    Bi = parseInt;
function ia(t) {
    if (typeof t == 'number') return t;
    if (Mt(t)) return sa;
    if (ht(t)) {
        var e = typeof t.valueOf == 'function' ? t.valueOf() : t;
        t = ht(e) ? e + '' : e;
    }
    if (typeof t != 'string') return t === 0 ? t : +t;
    t = Di(t);
    var n = Li.test(t);
    return n || Zi.test(t) ? Bi(t.slice(2), n ? 2 : 8) : Vi.test(t) ? sa : +t;
}
function zn(t) {
    return t;
}
var oa = Object.create,
    Ui = (function () {
        function t() {}
        return function (e) {
            if (!ht(e)) return {};
            if (oa) return oa(e);
            t.prototype = e;
            var n = new t();
            return (t.prototype = void 0), n;
        };
    })();
function zi(t, e, n) {
    switch (n.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, n[0]);
        case 2:
            return t.call(e, n[0], n[1]);
        case 3:
            return t.call(e, n[0], n[1], n[2]);
    }
    return t.apply(e, n);
}
var Hi = 800,
    Wi = 16,
    qi = Date.now;
function Gi(t) {
    var e = 0,
        n = 0;
    return function () {
        var r = qi(),
            a = Wi - (r - n);
        if (((n = r), a > 0)) {
            if (++e >= Hi) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
    };
}
function Ki(t) {
    return function () {
        return t;
    };
}
var An = (function () {
        try {
            var t = Ua(Object, 'defineProperty');
            return t({}, '', {}), t;
        } catch {}
    })(),
    Yi = An
        ? function (t, e) {
              return An(t, 'toString', { configurable: !0, enumerable: !1, value: Ki(e), writable: !0 });
          }
        : zn,
    Xi = Gi(Yi);
function Ji(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
}
function es(t, e, n) {
    e == '__proto__' && An ? An(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
}
function Hn(t, e) {
    return t === e || (t !== t && e !== e);
}
var Qi = Object.prototype,
    eo = Qi.hasOwnProperty;
function ts(t, e, n) {
    var r = t[e];
    (!(eo.call(t, e) && Hn(r, n)) || (n === void 0 && !(e in t))) && es(t, e, n);
}
function Wn(t, e, n, r) {
    var a = !n;
    n || (n = {});
    for (var s = -1, i = e.length; ++s < i; ) {
        var o = e[s],
            l = void 0;
        l === void 0 && (l = t[o]), a ? es(n, o, l) : ts(n, o, l);
    }
    return n;
}
var la = Math.max;
function to(t, e, n) {
    return (
        (e = la(e === void 0 ? t.length - 1 : e, 0)),
        function () {
            for (var r = arguments, a = -1, s = la(r.length - e, 0), i = Array(s); ++a < s; ) i[a] = r[e + a];
            a = -1;
            for (var o = Array(e + 1); ++a < e; ) o[a] = r[a];
            return (o[e] = n(i)), zi(t, this, o);
        }
    );
}
function no(t, e) {
    return Xi(to(t, e, zn), t + '');
}
function ua(t, e, n) {
    if (!ht(n)) return !1;
    var r = typeof e;
    return (r == 'number' ? Ln(n) && za(e, n.length) : r == 'string' && e in n) ? Hn(n[e], t) : !1;
}
function ro(t) {
    var e = [];
    if (t != null) for (var n in Object(t)) e.push(n);
    return e;
}
var ao = Object.prototype,
    so = ao.hasOwnProperty;
function io(t) {
    if (!ht(t)) return ro(t);
    var e = Ha(t),
        n = [];
    for (var r in t) (r == 'constructor' && (e || !so.call(t, r))) || n.push(r);
    return n;
}
function Dr(t) {
    return Ln(t) ? ti(t, !0) : io(t);
}
var oo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    lo = /^\w*$/;
function Vr(t, e) {
    if (We(t)) return !1;
    var n = typeof t;
    return n == 'number' || n == 'symbol' || n == 'boolean' || t == null || Mt(t) ? !0 : lo.test(t) || !oo.test(t) || (e != null && t in Object(e));
}
var Xt = Ua(Object, 'create');
function uo() {
    (this.__data__ = Xt ? Xt(null) : {}), (this.size = 0);
}
function co(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
}
var fo = '__lodash_hash_undefined__',
    po = Object.prototype,
    ho = po.hasOwnProperty;
function mo(t) {
    var e = this.__data__;
    if (Xt) {
        var n = e[t];
        return n === fo ? void 0 : n;
    }
    return ho.call(e, t) ? e[t] : void 0;
}
var _o = Object.prototype,
    go = _o.hasOwnProperty;
function vo(t) {
    var e = this.__data__;
    return Xt ? e[t] !== void 0 : go.call(e, t);
}
var yo = '__lodash_hash_undefined__';
function bo(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Xt && e === void 0 ? yo : e), this;
}
function kt(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
    }
}
kt.prototype.clear = uo;
kt.prototype.delete = co;
kt.prototype.get = mo;
kt.prototype.has = vo;
kt.prototype.set = bo;
function wo() {
    (this.__data__ = []), (this.size = 0);
}
function qn(t, e) {
    for (var n = t.length; n--; ) if (Hn(t[n][0], e)) return n;
    return -1;
}
var ko = Array.prototype,
    To = ko.splice;
function xo(t) {
    var e = this.__data__,
        n = qn(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : To.call(e, n, 1), --this.size, !0;
}
function So(t) {
    var e = this.__data__,
        n = qn(e, t);
    return n < 0 ? void 0 : e[n][1];
}
function $o(t) {
    return qn(this.__data__, t) > -1;
}
function Oo(t, e) {
    var n = this.__data__,
        r = qn(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
}
function ct(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
    }
}
ct.prototype.clear = wo;
ct.prototype.delete = xo;
ct.prototype.get = So;
ct.prototype.has = $o;
ct.prototype.set = Oo;
function Ao() {
    (this.size = 0), (this.__data__ = { hash: new kt(), map: new (Wa || ct)(), string: new kt() });
}
function Co(t) {
    var e = typeof t;
    return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? t !== '__proto__' : t === null;
}
function Gn(t, e) {
    var n = t.__data__;
    return Co(e) ? n[typeof e == 'string' ? 'string' : 'hash'] : n.map;
}
function Eo(t) {
    var e = Gn(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
}
function Io(t) {
    return Gn(this, t).get(t);
}
function Fo(t) {
    return Gn(this, t).has(t);
}
function Po(t, e) {
    var n = Gn(this, t),
        r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
}
function ft(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
    }
}
ft.prototype.clear = Ao;
ft.prototype.delete = Eo;
ft.prototype.get = Io;
ft.prototype.has = Fo;
ft.prototype.set = Po;
var jo = 'Expected a function';
function Lr(t, e) {
    if (typeof t != 'function' || (e != null && typeof e != 'function')) throw new TypeError(jo);
    var n = function () {
        var r = arguments,
            a = e ? e.apply(this, r) : r[0],
            s = n.cache;
        if (s.has(a)) return s.get(a);
        var i = t.apply(this, r);
        return (n.cache = s.set(a, i) || s), i;
    };
    return (n.cache = new (Lr.Cache || ft)()), n;
}
Lr.Cache = ft;
var Ro = 500;
function Mo(t) {
    var e = Lr(t, function (r) {
            return n.size === Ro && n.clear(), r;
        }),
        n = e.cache;
    return e;
}
var No = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Do = /\\(\\)?/g,
    Vo = Mo(function (t) {
        var e = [];
        return (
            t.charCodeAt(0) === 46 && e.push(''),
            t.replace(No, function (n, r, a, s) {
                e.push(a ? s.replace(Do, '$1') : r || n);
            }),
            e
        );
    });
function Lo(t) {
    return t == null ? '' : Qa(t);
}
function ns(t, e) {
    return We(t) ? t : Vr(t, e) ? [t] : Vo(Lo(t));
}
function Kn(t) {
    if (typeof t == 'string' || Mt(t)) return t;
    var e = t + '';
    return e == '0' && 1 / t == -1 / 0 ? '-0' : e;
}
function Zr(t, e) {
    e = ns(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Kn(e[n++])];
    return n && n == r ? t : void 0;
}
function kr(t, e, n) {
    var r = t == null ? void 0 : Zr(t, e);
    return r === void 0 ? n : r;
}
function Br(t, e) {
    for (var n = -1, r = e.length, a = t.length; ++n < r; ) t[a + n] = e[n];
    return t;
}
var da = pt ? pt.isConcatSpreadable : void 0;
function Zo(t) {
    return We(t) || qa(t) || !!(da && t && t[da]);
}
function Bo(t, e, n, r, a) {
    var s = -1,
        i = t.length;
    for (n || (n = Zo), a || (a = []); ++s < i; ) {
        var o = t[s];
        n(o) ? Br(a, o) : (a[a.length] = o);
    }
    return a;
}
var rs = ni(Object.getPrototypeOf, Object);
function Uo() {
    (this.__data__ = new ct()), (this.size = 0);
}
function zo(t) {
    var e = this.__data__,
        n = e.delete(t);
    return (this.size = e.size), n;
}
function Ho(t) {
    return this.__data__.get(t);
}
function Wo(t) {
    return this.__data__.has(t);
}
var qo = 200;
function Go(t, e) {
    var n = this.__data__;
    if (n instanceof ct) {
        var r = n.__data__;
        if (!Wa || r.length < qo - 1) return r.push([t, e]), (this.size = ++n.size), this;
        n = this.__data__ = new ft(r);
    }
    return n.set(t, e), (this.size = n.size), this;
}
function nt(t) {
    var e = (this.__data__ = new ct(t));
    this.size = e.size;
}
nt.prototype.clear = Uo;
nt.prototype.delete = zo;
nt.prototype.get = Ho;
nt.prototype.has = Wo;
nt.prototype.set = Go;
function Ko(t, e) {
    return t && Wn(e, fn(e), t);
}
function Yo(t, e) {
    return t && Wn(e, Dr(e), t);
}
var as = typeof exports == 'object' && exports && !exports.nodeType && exports,
    ca = as && typeof module == 'object' && module && !module.nodeType && module,
    Xo = ca && ca.exports === as,
    fa = Xo ? Fr.Buffer : void 0,
    pa = fa ? fa.allocUnsafe : void 0;
function Jo(t, e) {
    if (e) return t.slice();
    var n = t.length,
        r = pa ? pa(n) : new t.constructor(n);
    return t.copy(r), r;
}
function Qo(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, a = 0, s = []; ++n < r; ) {
        var i = t[n];
        e(i, n, t) && (s[a++] = i);
    }
    return s;
}
function ss() {
    return [];
}
var el = Object.prototype,
    tl = el.propertyIsEnumerable,
    ha = Object.getOwnPropertySymbols,
    Ur = ha
        ? function (t) {
              return t == null
                  ? []
                  : ((t = Object(t)),
                    Qo(ha(t), function (e) {
                        return tl.call(t, e);
                    }));
          }
        : ss;
function nl(t, e) {
    return Wn(t, Ur(t), e);
}
var rl = Object.getOwnPropertySymbols,
    is = rl
        ? function (t) {
              for (var e = []; t; ) Br(e, Ur(t)), (t = rs(t));
              return e;
          }
        : ss;
function al(t, e) {
    return Wn(t, is(t), e);
}
function os(t, e, n) {
    var r = e(t);
    return We(t) ? r : Br(r, n(t));
}
function Tr(t) {
    return os(t, fn, Ur);
}
function sl(t) {
    return os(t, Dr, is);
}
var il = Object.prototype,
    ol = il.hasOwnProperty;
function ll(t) {
    var e = t.length,
        n = new t.constructor(e);
    return e && typeof t[0] == 'string' && ol.call(t, 'index') && ((n.index = t.index), (n.input = t.input)), n;
}
var Cn = Fr.Uint8Array;
function zr(t) {
    var e = new t.constructor(t.byteLength);
    return new Cn(e).set(new Cn(t)), e;
}
function ul(t, e) {
    var n = e ? zr(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
}
var dl = /\w*$/;
function cl(t) {
    var e = new t.constructor(t.source, dl.exec(t));
    return (e.lastIndex = t.lastIndex), e;
}
var ma = pt ? pt.prototype : void 0,
    _a = ma ? ma.valueOf : void 0;
function fl(t) {
    return _a ? Object(_a.call(t)) : {};
}
function pl(t, e) {
    var n = e ? zr(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
}
var hl = '[object Boolean]',
    ml = '[object Date]',
    _l = '[object Map]',
    gl = '[object Number]',
    vl = '[object RegExp]',
    yl = '[object Set]',
    bl = '[object String]',
    wl = '[object Symbol]',
    kl = '[object ArrayBuffer]',
    Tl = '[object DataView]',
    xl = '[object Float32Array]',
    Sl = '[object Float64Array]',
    $l = '[object Int8Array]',
    Ol = '[object Int16Array]',
    Al = '[object Int32Array]',
    Cl = '[object Uint8Array]',
    El = '[object Uint8ClampedArray]',
    Il = '[object Uint16Array]',
    Fl = '[object Uint32Array]';
function Pl(t, e, n) {
    var r = t.constructor;
    switch (e) {
        case kl:
            return zr(t);
        case hl:
        case ml:
            return new r(+t);
        case Tl:
            return ul(t, n);
        case xl:
        case Sl:
        case $l:
        case Ol:
        case Al:
        case Cl:
        case El:
        case Il:
        case Fl:
            return pl(t, n);
        case _l:
            return new r();
        case gl:
        case bl:
            return new r(t);
        case vl:
            return cl(t);
        case yl:
            return new r();
        case wl:
            return fl(t);
    }
}
function jl(t) {
    return typeof t.constructor == 'function' && !Ha(t) ? Ui(rs(t)) : {};
}
var Rl = '[object Map]';
function Ml(t) {
    return Rt(t) && Yt(t) == Rl;
}
var ga = xn && xn.isMap,
    Nl = ga ? Pr(ga) : Ml,
    Dl = '[object Set]';
function Vl(t) {
    return Rt(t) && Yt(t) == Dl;
}
var va = xn && xn.isSet,
    Ll = va ? Pr(va) : Vl,
    Zl = 1,
    Bl = 2,
    Ul = 4,
    ls = '[object Arguments]',
    zl = '[object Array]',
    Hl = '[object Boolean]',
    Wl = '[object Date]',
    ql = '[object Error]',
    us = '[object Function]',
    Gl = '[object GeneratorFunction]',
    Kl = '[object Map]',
    Yl = '[object Number]',
    ds = '[object Object]',
    Xl = '[object RegExp]',
    Jl = '[object Set]',
    Ql = '[object String]',
    eu = '[object Symbol]',
    tu = '[object WeakMap]',
    nu = '[object ArrayBuffer]',
    ru = '[object DataView]',
    au = '[object Float32Array]',
    su = '[object Float64Array]',
    iu = '[object Int8Array]',
    ou = '[object Int16Array]',
    lu = '[object Int32Array]',
    uu = '[object Uint8Array]',
    du = '[object Uint8ClampedArray]',
    cu = '[object Uint16Array]',
    fu = '[object Uint32Array]',
    le = {};
le[ls] = le[zl] = le[nu] = le[ru] = le[Hl] = le[Wl] = le[au] = le[su] = le[iu] = le[ou] = le[lu] = le[Kl] = le[Yl] = le[ds] = le[Xl] = le[Jl] = le[Ql] = le[eu] = le[uu] = le[du] = le[cu] = le[fu] = !0;
le[ql] = le[us] = le[tu] = !1;
function Tn(t, e, n, r, a, s) {
    var i,
        o = e & Zl,
        l = e & Bl,
        u = e & Ul;
    if (i !== void 0) return i;
    if (!ht(t)) return t;
    var d = We(t);
    if (d) {
        if (((i = ll(t)), !o)) return ri(t, i);
    } else {
        var c = Yt(t),
            h = c == us || c == Gl;
        if (mr(t)) return Jo(t, o);
        if (c == ds || c == ls || (h && !a)) {
            if (((i = l || h ? {} : jl(t)), !o)) return l ? al(t, Yo(i, t)) : nl(t, Ko(i, t));
        } else {
            if (!le[c]) return a ? t : {};
            i = Pl(t, c, o);
        }
    }
    s || (s = new nt());
    var g = s.get(t);
    if (g) return g;
    s.set(t, i),
        Ll(t)
            ? t.forEach(function (T) {
                  i.add(Tn(T, e, n, T, t, s));
              })
            : Nl(t) &&
              t.forEach(function (T, C) {
                  i.set(C, Tn(T, e, n, C, t, s));
              });
    var M = u ? (l ? sl : Tr) : l ? Dr : fn,
        G = d ? void 0 : M(t);
    return (
        Ji(G || t, function (T, C) {
            G && ((C = T), (T = t[C])), ts(i, C, Tn(T, e, n, C, t, s));
        }),
        i
    );
}
var pu = 1,
    hu = 4;
function cs(t) {
    return Tn(t, pu | hu);
}
var mu = '__lodash_hash_undefined__';
function _u(t) {
    return this.__data__.set(t, mu), this;
}
function gu(t) {
    return this.__data__.has(t);
}
function En(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.__data__ = new ft(); ++e < n; ) this.add(t[e]);
}
En.prototype.add = En.prototype.push = _u;
En.prototype.has = gu;
function vu(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1;
}
function yu(t, e) {
    return t.has(e);
}
var bu = 1,
    wu = 2;
function fs(t, e, n, r, a, s) {
    var i = n & bu,
        o = t.length,
        l = e.length;
    if (o != l && !(i && l > o)) return !1;
    var u = s.get(t),
        d = s.get(e);
    if (u && d) return u == e && d == t;
    var c = -1,
        h = !0,
        g = n & wu ? new En() : void 0;
    for (s.set(t, e), s.set(e, t); ++c < o; ) {
        var M = t[c],
            G = e[c];
        if (r) var T = i ? r(G, M, c, e, t, s) : r(M, G, c, t, e, s);
        if (T !== void 0) {
            if (T) continue;
            h = !1;
            break;
        }
        if (g) {
            if (
                !vu(e, function (C, ne) {
                    if (!yu(g, ne) && (M === C || a(M, C, n, r, s))) return g.push(ne);
                })
            ) {
                h = !1;
                break;
            }
        } else if (!(M === G || a(M, G, n, r, s))) {
            h = !1;
            break;
        }
    }
    return s.delete(t), s.delete(e), h;
}
function ku(t) {
    var e = -1,
        n = Array(t.size);
    return (
        t.forEach(function (r, a) {
            n[++e] = [a, r];
        }),
        n
    );
}
function Tu(t) {
    var e = -1,
        n = Array(t.size);
    return (
        t.forEach(function (r) {
            n[++e] = r;
        }),
        n
    );
}
var xu = 1,
    Su = 2,
    $u = '[object Boolean]',
    Ou = '[object Date]',
    Au = '[object Error]',
    Cu = '[object Map]',
    Eu = '[object Number]',
    Iu = '[object RegExp]',
    Fu = '[object Set]',
    Pu = '[object String]',
    ju = '[object Symbol]',
    Ru = '[object ArrayBuffer]',
    Mu = '[object DataView]',
    ya = pt ? pt.prototype : void 0,
    lr = ya ? ya.valueOf : void 0;
function Nu(t, e, n, r, a, s, i) {
    switch (n) {
        case Mu:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
            (t = t.buffer), (e = e.buffer);
        case Ru:
            return !(t.byteLength != e.byteLength || !s(new Cn(t), new Cn(e)));
        case $u:
        case Ou:
        case Eu:
            return Hn(+t, +e);
        case Au:
            return t.name == e.name && t.message == e.message;
        case Iu:
        case Pu:
            return t == e + '';
        case Cu:
            var o = ku;
        case Fu:
            var l = r & xu;
            if ((o || (o = Tu), t.size != e.size && !l)) return !1;
            var u = i.get(t);
            if (u) return u == e;
            (r |= Su), i.set(t, e);
            var d = fs(o(t), o(e), r, a, s, i);
            return i.delete(t), d;
        case ju:
            if (lr) return lr.call(t) == lr.call(e);
    }
    return !1;
}
var Du = 1,
    Vu = Object.prototype,
    Lu = Vu.hasOwnProperty;
function Zu(t, e, n, r, a, s) {
    var i = n & Du,
        o = Tr(t),
        l = o.length,
        u = Tr(e),
        d = u.length;
    if (l != d && !i) return !1;
    for (var c = l; c--; ) {
        var h = o[c];
        if (!(i ? h in e : Lu.call(e, h))) return !1;
    }
    var g = s.get(t),
        M = s.get(e);
    if (g && M) return g == e && M == t;
    var G = !0;
    s.set(t, e), s.set(e, t);
    for (var T = i; ++c < l; ) {
        h = o[c];
        var C = t[h],
            ne = e[h];
        if (r) var Fe = i ? r(ne, C, h, e, t, s) : r(C, ne, h, t, e, s);
        if (!(Fe === void 0 ? C === ne || a(C, ne, n, r, s) : Fe)) {
            G = !1;
            break;
        }
        T || (T = h == 'constructor');
    }
    if (G && !T) {
        var ke = t.constructor,
            ge = e.constructor;
        ke != ge && 'constructor' in t && 'constructor' in e && !(typeof ke == 'function' && ke instanceof ke && typeof ge == 'function' && ge instanceof ge) && (G = !1);
    }
    return s.delete(t), s.delete(e), G;
}
var Bu = 1,
    ba = '[object Arguments]',
    wa = '[object Array]',
    yn = '[object Object]',
    Uu = Object.prototype,
    ka = Uu.hasOwnProperty;
function zu(t, e, n, r, a, s) {
    var i = We(t),
        o = We(e),
        l = i ? wa : Yt(t),
        u = o ? wa : Yt(e);
    (l = l == ba ? yn : l), (u = u == ba ? yn : u);
    var d = l == yn,
        c = u == yn,
        h = l == u;
    if (h && mr(t)) {
        if (!mr(e)) return !1;
        (i = !0), (d = !1);
    }
    if (h && !d) return s || (s = new nt()), i || ai(t) ? fs(t, e, n, r, a, s) : Nu(t, e, l, n, r, a, s);
    if (!(n & Bu)) {
        var g = d && ka.call(t, '__wrapped__'),
            M = c && ka.call(e, '__wrapped__');
        if (g || M) {
            var G = g ? t.value() : t,
                T = M ? e.value() : e;
            return s || (s = new nt()), a(G, T, n, r, s);
        }
    }
    return h ? (s || (s = new nt()), Zu(t, e, n, r, a, s)) : !1;
}
function Hr(t, e, n, r, a) {
    return t === e ? !0 : t == null || e == null || (!Rt(t) && !Rt(e)) ? t !== t && e !== e : zu(t, e, n, r, Hr, a);
}
var Hu = 1,
    Wu = 2;
function qu(t, e, n, r) {
    var a = n.length,
        s = a;
    if (t == null) return !s;
    for (t = Object(t); a--; ) {
        var i = n[a];
        if (i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
    }
    for (; ++a < s; ) {
        i = n[a];
        var o = i[0],
            l = t[o],
            u = i[1];
        if (i[2]) {
            if (l === void 0 && !(o in t)) return !1;
        } else {
            var d = new nt(),
                c;
            if (!(c === void 0 ? Hr(u, l, Hu | Wu, r, d) : c)) return !1;
        }
    }
    return !0;
}
function ps(t) {
    return t === t && !ht(t);
}
function Gu(t) {
    for (var e = fn(t), n = e.length; n--; ) {
        var r = e[n],
            a = t[r];
        e[n] = [r, a, ps(a)];
    }
    return e;
}
function hs(t, e) {
    return function (n) {
        return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
    };
}
function Ku(t) {
    var e = Gu(t);
    return e.length == 1 && e[0][2]
        ? hs(e[0][0], e[0][1])
        : function (n) {
              return n === t || qu(n, t, e);
          };
}
function Yu(t, e) {
    return t != null && e in Object(t);
}
function Xu(t, e, n) {
    e = ns(e, t);
    for (var r = -1, a = e.length, s = !1; ++r < a; ) {
        var i = Kn(e[r]);
        if (!(s = t != null && n(t, i))) break;
        t = t[i];
    }
    return s || ++r != a ? s : ((a = t == null ? 0 : t.length), !!a && si(a) && za(i, a) && (We(t) || qa(t)));
}
function Ju(t, e) {
    return t != null && Xu(t, e, Yu);
}
var Qu = 1,
    ed = 2;
function td(t, e) {
    return Vr(t) && ps(e)
        ? hs(Kn(t), e)
        : function (n) {
              var r = kr(n, t);
              return r === void 0 && r === e ? Ju(n, t) : Hr(e, r, Qu | ed);
          };
}
function nd(t) {
    return function (e) {
        return e == null ? void 0 : e[t];
    };
}
function rd(t) {
    return function (e) {
        return Zr(e, t);
    };
}
function ad(t) {
    return Vr(t) ? nd(Kn(t)) : rd(t);
}
function sd(t) {
    return typeof t == 'function' ? t : t == null ? zn : typeof t == 'object' ? (We(t) ? td(t[0], t[1]) : Ku(t)) : ad(t);
}
function id(t) {
    return function (e, n, r) {
        for (var a = -1, s = Object(e), i = r(e), o = i.length; o--; ) {
            var l = i[++a];
            if (n(s[l], l, s) === !1) break;
        }
        return e;
    };
}
var od = id();
function ld(t, e) {
    return t && od(t, e, fn);
}
function ud(t, e) {
    return function (n, r) {
        if (n == null) return n;
        if (!Ln(n)) return t(n, r);
        for (var a = n.length, s = -1, i = Object(n); ++s < a && r(i[s], s, i) !== !1; );
        return n;
    };
}
var dd = ud(ld),
    ur = function () {
        return Fr.Date.now();
    },
    cd = 'Expected a function',
    fd = Math.max,
    pd = Math.min;
function Wr(t, e, n) {
    var r,
        a,
        s,
        i,
        o,
        l,
        u = 0,
        d = !1,
        c = !1,
        h = !0;
    if (typeof t != 'function') throw new TypeError(cd);
    (e = ia(e) || 0), ht(n) && ((d = !!n.leading), (c = 'maxWait' in n), (s = c ? fd(ia(n.maxWait) || 0, e) : s), (h = 'trailing' in n ? !!n.trailing : h));
    function g(re) {
        var ee = r,
            $e = a;
        return (r = a = void 0), (u = re), (i = t.apply($e, ee)), i;
    }
    function M(re) {
        return (u = re), (o = setTimeout(C, e)), d ? g(re) : i;
    }
    function G(re) {
        var ee = re - l,
            $e = re - u,
            Ue = e - ee;
        return c ? pd(Ue, s - $e) : Ue;
    }
    function T(re) {
        var ee = re - l,
            $e = re - u;
        return l === void 0 || ee >= e || ee < 0 || (c && $e >= s);
    }
    function C() {
        var re = ur();
        if (T(re)) return ne(re);
        o = setTimeout(C, G(re));
    }
    function ne(re) {
        return (o = void 0), h && r ? g(re) : ((r = a = void 0), i);
    }
    function Fe() {
        o !== void 0 && clearTimeout(o), (u = 0), (r = l = a = o = void 0);
    }
    function ke() {
        return o === void 0 ? i : ne(ur());
    }
    function ge() {
        var re = ur(),
            ee = T(re);
        if (((r = arguments), (a = this), (l = re), ee)) {
            if (o === void 0) return M(l);
            if (c) return clearTimeout(o), (o = setTimeout(C, e)), g(l);
        }
        return o === void 0 && (o = setTimeout(C, e)), i;
    }
    return (ge.cancel = Fe), (ge.flush = ke), ge;
}
function hd(t, e) {
    var n = -1,
        r = Ln(t) ? Array(t.length) : [];
    return (
        dd(t, function (a, s, i) {
            r[++n] = e(a, s, i);
        }),
        r
    );
}
var md = '[object String]';
function _d(t) {
    return typeof t == 'string' || (!We(t) && Rt(t) && Ba(t) == md);
}
function gd(t, e) {
    var n = t.length;
    for (t.sort(e); n--; ) t[n] = t[n].value;
    return t;
}
function vd(t, e) {
    if (t !== e) {
        var n = t !== void 0,
            r = t === null,
            a = t === t,
            s = Mt(t),
            i = e !== void 0,
            o = e === null,
            l = e === e,
            u = Mt(e);
        if ((!o && !u && !s && t > e) || (s && i && l && !o && !u) || (r && i && l) || (!n && l) || !a) return 1;
        if ((!r && !s && !u && t < e) || (u && n && a && !r && !s) || (o && n && a) || (!i && a) || !l) return -1;
    }
    return 0;
}
function yd(t, e, n) {
    for (var r = -1, a = t.criteria, s = e.criteria, i = a.length, o = n.length; ++r < i; ) {
        var l = vd(a[r], s[r]);
        if (l) {
            if (r >= o) return l;
            var u = n[r];
            return l * (u == 'desc' ? -1 : 1);
        }
    }
    return t.index - e.index;
}
function bd(t, e, n) {
    e.length
        ? (e = kn(e, function (s) {
              return We(s)
                  ? function (i) {
                        return Zr(i, s.length === 1 ? s[0] : s);
                    }
                  : s;
          }))
        : (e = [zn]);
    var r = -1;
    e = kn(e, Pr(sd));
    var a = hd(t, function (s, i, o) {
        var l = kn(e, function (u) {
            return u(s);
        });
        return { criteria: l, index: ++r, value: s };
    });
    return gd(a, function (s, i) {
        return yd(s, i, n);
    });
}
var wd = no(function (t, e) {
    if (t == null) return [];
    var n = e.length;
    return n > 1 && ua(t, e[0], e[1]) ? (e = []) : n > 2 && ua(e[0], e[1], e[2]) && (e = [e[0]]), bd(t, Bo(e), []);
});
const kd = {},
    Td = { class: 'spinner' };
function xd(t, e) {
    return b(), P('div', Td);
}
const Sd = Object.assign(
    Me(kd, [
        ['render', xd],
        ['__scopeId', 'data-v-9d909e91']
    ]),
    { __name: 'AppSpinner' }
);
/**
 * vee-validate v4.15.0
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */ function Ve(t) {
    return typeof t == 'function';
}
function ms(t) {
    return t == null;
}
const Tt = (t) => t !== null && !!t && typeof t == 'object' && !Array.isArray(t);
function qr(t) {
    return Number(t) >= 0;
}
function $d(t) {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
}
function Od(t) {
    return typeof t == 'object' && t !== null;
}
function Ad(t) {
    return t == null ? (t === void 0 ? '[object Undefined]' : '[object Null]') : Object.prototype.toString.call(t);
}
function Ta(t) {
    if (!Od(t) || Ad(t) !== '[object Object]') return !1;
    if (Object.getPrototypeOf(t) === null) return !0;
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
}
function Jt(t, e) {
    return (
        Object.keys(e).forEach((n) => {
            if (Ta(e[n]) && Ta(t[n])) {
                t[n] || (t[n] = {}), Jt(t[n], e[n]);
                return;
            }
            t[n] = e[n];
        }),
        t
    );
}
function Wt(t) {
    const e = t.split('.');
    if (!e.length) return '';
    let n = String(e[0]);
    for (let r = 1; r < e.length; r++) {
        if (qr(e[r])) {
            n += `[${e[r]}]`;
            continue;
        }
        n += `.${e[r]}`;
    }
    return n;
}
const Cd = {};
function Ed(t) {
    return Cd[t];
}
function xa(t, e, n) {
    typeof n.value == 'object' && (n.value = oe(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || e === '__proto__' ? Object.defineProperty(t, e, n) : (t[e] = n.value);
}
function oe(t) {
    if (typeof t != 'object') return t;
    var e = 0,
        n,
        r,
        a,
        s = Object.prototype.toString.call(t);
    if (
        (s === '[object Object]'
            ? (a = Object.create(t.__proto__ || null))
            : s === '[object Array]'
            ? (a = Array(t.length))
            : s === '[object Set]'
            ? ((a = new Set()),
              t.forEach(function (i) {
                  a.add(oe(i));
              }))
            : s === '[object Map]'
            ? ((a = new Map()),
              t.forEach(function (i, o) {
                  a.set(oe(o), oe(i));
              }))
            : s === '[object Date]'
            ? (a = new Date(+t))
            : s === '[object RegExp]'
            ? (a = new RegExp(t.source, t.flags))
            : s === '[object DataView]'
            ? (a = new t.constructor(oe(t.buffer)))
            : s === '[object ArrayBuffer]'
            ? (a = t.slice(0))
            : s.slice(-6) === 'Array]' && (a = new t.constructor(t)),
        a)
    ) {
        for (r = Object.getOwnPropertySymbols(t); e < r.length; e++) xa(a, r[e], Object.getOwnPropertyDescriptor(t, r[e]));
        for (e = 0, r = Object.getOwnPropertyNames(t); e < r.length; e++) (Object.hasOwnProperty.call(a, (n = r[e])) && a[n] === t[n]) || xa(a, n, Object.getOwnPropertyDescriptor(t, n));
    }
    return a || t;
}
const Gr = Symbol('vee-validate-form'),
    Id = Symbol('vee-validate-form-context'),
    Fd = Symbol('vee-validate-field-instance'),
    Sa = Symbol('Default empty value'),
    Pd = typeof window < 'u';
function xr(t) {
    return Ve(t) && !!t.__locatorRef;
}
function qe(t) {
    return !!t && Ve(t.parse) && t.__type === 'VVTypedSchema';
}
function In(t) {
    return !!t && Ve(t.validate);
}
function _s(t) {
    return t === 'checkbox' || t === 'radio';
}
function jd(t) {
    return Tt(t) || Array.isArray(t);
}
function Rd(t) {
    return Array.isArray(t) ? t.length === 0 : Tt(t) && Object.keys(t).length === 0;
}
function mn(t) {
    return /^\[.+\]$/i.test(t);
}
function Md(t) {
    return gs(t) && t.multiple;
}
function gs(t) {
    return t.tagName === 'SELECT';
}
function Nd(t) {
    return vs(t) && t.target && 'submit' in t.target;
}
function vs(t) {
    return t ? !!((typeof Event < 'u' && Ve(Event) && t instanceof Event) || (t && t.srcElement)) : !1;
}
function Pe(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == 'object' && typeof e == 'object') {
        if (t.constructor !== e.constructor) return !1;
        var n, r, a;
        if (Array.isArray(t)) {
            if (((n = t.length), n != e.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Pe(t[r], e[r])) return !1;
            return !0;
        }
        if (t instanceof Map && e instanceof Map) {
            if (t.size !== e.size) return !1;
            for (r of t.entries()) if (!e.has(r[0])) return !1;
            for (r of t.entries()) if (!Pe(r[1], e.get(r[0]))) return !1;
            return !0;
        }
        if (Oa(t) && Oa(e)) return !(t.size !== e.size || t.name !== e.name || t.lastModified !== e.lastModified || t.type !== e.type);
        if (t instanceof Set && e instanceof Set) {
            if (t.size !== e.size) return !1;
            for (r of t.entries()) if (!e.has(r[0])) return !1;
            return !0;
        }
        if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
            if (((n = t.length), n != e.length)) return !1;
            for (r = n; r-- !== 0; ) if (t[r] !== e[r]) return !1;
            return !0;
        }
        if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
        if (((a = Object.keys(t)), (n = a.length - $a(t, a)), n !== Object.keys(e).length - $a(e, Object.keys(e)))) return !1;
        for (r = n; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, a[r])) return !1;
        for (r = n; r-- !== 0; ) {
            var s = a[r];
            if (!Pe(t[s], e[s])) return !1;
        }
        return !0;
    }
    return t !== t && e !== e;
}
function $a(t, e) {
    let n = 0;
    for (let a = e.length; a-- !== 0; ) {
        var r = e[a];
        t[r] === void 0 && n++;
    }
    return n;
}
function Oa(t) {
    return Pd ? t instanceof File : !1;
}
function Yn(t) {
    return mn(t) ? t.replace(/\[|\]/gi, '') : t;
}
function Le(t, e, n) {
    return t
        ? mn(e)
            ? t[Yn(e)]
            : (e || '')
                  .split(/\.|\[(\d+)\]/)
                  .filter(Boolean)
                  .reduce((a, s) => (jd(a) && s in a ? a[s] : n), t)
        : n;
}
function ot(t, e, n) {
    if (mn(e)) {
        t[Yn(e)] = n;
        return;
    }
    const r = e.split(/\.|\[(\d+)\]/).filter(Boolean);
    let a = t;
    for (let s = 0; s < r.length; s++) {
        if (s === r.length - 1) {
            a[r[s]] = n;
            return;
        }
        (!(r[s] in a) || ms(a[r[s]])) && (a[r[s]] = qr(r[s + 1]) ? [] : {}), (a = a[r[s]]);
    }
}
function dr(t, e) {
    if (Array.isArray(t) && qr(e)) {
        t.splice(Number(e), 1);
        return;
    }
    Tt(t) && delete t[e];
}
function Aa(t, e) {
    if (mn(e)) {
        delete t[Yn(e)];
        return;
    }
    const n = e.split(/\.|\[(\d+)\]/).filter(Boolean);
    let r = t;
    for (let s = 0; s < n.length; s++) {
        if (s === n.length - 1) {
            dr(r, n[s]);
            break;
        }
        if (!(n[s] in r) || ms(r[n[s]])) break;
        r = r[n[s]];
    }
    const a = n.map((s, i) => Le(t, n.slice(0, i).join('.')));
    for (let s = a.length - 1; s >= 0; s--)
        if (Rd(a[s])) {
            if (s === 0) {
                dr(t, n[0]);
                continue;
            }
            dr(a[s - 1], n[s - 1]);
        }
}
function Ze(t) {
    return Object.keys(t);
}
function ys(t, e = void 0) {
    const n = Mr();
    return (n == null ? void 0 : n.provides[t]) || ci(t, e);
}
function Dd(t, e, n) {
    if (Array.isArray(t)) {
        const r = [...t],
            a = r.findIndex((s) => Pe(s, e));
        return a >= 0 ? r.splice(a, 1) : r.push(e), r;
    }
    return Pe(t, e) ? n : e;
}
function Ca(t, e = 0) {
    let n = null,
        r = [];
    return function (...a) {
        return (
            n && clearTimeout(n),
            (n = setTimeout(() => {
                const s = t(...a);
                r.forEach((i) => i(s)), (r = []);
            }, e)),
            new Promise((s) => r.push(s))
        );
    };
}
function Vd(t, e) {
    return Tt(e) && e.number ? $d(t) : t;
}
function Sr(t, e) {
    let n;
    return async function (...a) {
        const s = t(...a);
        n = s;
        const i = await s;
        return s !== n ? i : ((n = void 0), e(i, a));
    };
}
function $r(t) {
    return Array.isArray(t) ? t : t ? [t] : [];
}
function bn(t, e) {
    const n = {};
    for (const r in t) e.includes(r) || (n[r] = t[r]);
    return n;
}
function Ld(t) {
    let e = null,
        n = [];
    return function (...r) {
        const a = et(() => {
            if (e !== a) return;
            const s = t(...r);
            n.forEach((i) => i(s)), (n = []), (e = null);
        });
        return (e = a), new Promise((s) => n.push(s));
    };
}
function cr(t) {
    if (bs(t)) return t._value;
}
function bs(t) {
    return '_value' in t;
}
function Zd(t) {
    return t.type === 'number' || t.type === 'range' ? (Number.isNaN(t.valueAsNumber) ? t.value : t.valueAsNumber) : t.value;
}
function Fn(t) {
    if (!vs(t)) return t;
    const e = t.target;
    if (_s(e.type) && bs(e)) return cr(e);
    if (e.type === 'file' && e.files) {
        const n = Array.from(e.files);
        return e.multiple ? n : n[0];
    }
    if (Md(e))
        return Array.from(e.options)
            .filter((n) => n.selected && !n.disabled)
            .map(cr);
    if (gs(e)) {
        const n = Array.from(e.options).find((r) => r.selected);
        return n ? cr(n) : e.value;
    }
    return Zd(e);
}
function ws(t) {
    const e = {};
    return (
        Object.defineProperty(e, '_$$isNormalized', { value: !0, writable: !1, enumerable: !1, configurable: !1 }),
        t
            ? Tt(t) && t._$$isNormalized
                ? t
                : Tt(t)
                ? Object.keys(t).reduce((n, r) => {
                      const a = Bd(t[r]);
                      return t[r] !== !1 && (n[r] = Ea(a)), n;
                  }, e)
                : typeof t != 'string'
                ? e
                : t.split('|').reduce((n, r) => {
                      const a = Ud(r);
                      return a.name && (n[a.name] = Ea(a.params)), n;
                  }, e)
            : e
    );
}
function Bd(t) {
    return t === !0 ? [] : Array.isArray(t) || Tt(t) ? t : [t];
}
function Ea(t) {
    const e = (n) => (typeof n == 'string' && n[0] === '@' ? zd(n.slice(1)) : n);
    return Array.isArray(t) ? t.map(e) : t instanceof RegExp ? [t] : Object.keys(t).reduce((n, r) => ((n[r] = e(t[r])), n), {});
}
const Ud = (t) => {
    let e = [];
    const n = t.split(':')[0];
    return t.includes(':') && (e = t.split(':').slice(1).join(':').split(',')), { name: n, params: e };
};
function zd(t) {
    const e = (n) => {
        var r;
        return (r = Le(n, t)) !== null && r !== void 0 ? r : n[t];
    };
    return (e.__locatorRef = t), e;
}
function Hd(t) {
    return Array.isArray(t)
        ? t.filter(xr)
        : Ze(t)
              .filter((e) => xr(t[e]))
              .map((e) => t[e]);
}
const Wd = { generateMessage: ({ field: t }) => `${t} is not valid.`, bails: !0, validateOnBlur: !0, validateOnChange: !0, validateOnInput: !1, validateOnModelUpdate: !0 };
let qd = Object.assign({}, Wd);
const qt = () => qd;
async function ks(t, e, n = {}) {
    const r = n == null ? void 0 : n.bails,
        a = { name: (n == null ? void 0 : n.name) || '{field}', rules: e, label: n == null ? void 0 : n.label, bails: r ?? !0, formData: (n == null ? void 0 : n.values) || {} },
        s = await Gd(a, t);
    return Object.assign(Object.assign({}, s), { valid: !s.errors.length });
}
async function Gd(t, e) {
    const n = t.rules;
    if (qe(n) || In(n)) return Yd(e, Object.assign(Object.assign({}, t), { rules: n }));
    if (Ve(n) || Array.isArray(n)) {
        const o = { field: t.label || t.name, name: t.name, label: t.label, form: t.formData, value: e },
            l = Array.isArray(n) ? n : [n],
            u = l.length,
            d = [];
        for (let c = 0; c < u; c++) {
            const h = l[c],
                g = await h(e, o);
            if (!(typeof g != 'string' && !Array.isArray(g) && g)) {
                if (Array.isArray(g)) d.push(...g);
                else {
                    const G = typeof g == 'string' ? g : xs(o);
                    d.push(G);
                }
                if (t.bails) return { errors: d };
            }
        }
        return { errors: d };
    }
    const r = Object.assign(Object.assign({}, t), { rules: ws(n) }),
        a = [],
        s = Object.keys(r.rules),
        i = s.length;
    for (let o = 0; o < i; o++) {
        const l = s[o],
            u = await Xd(r, e, { name: l, params: r.rules[l] });
        if (u.error && (a.push(u.error), t.bails)) return { errors: a };
    }
    return { errors: a };
}
function Kd(t) {
    return !!t && t.name === 'ValidationError';
}
function Ts(t) {
    return {
        __type: 'VVTypedSchema',
        async parse(n, r) {
            var a;
            try {
                return { output: await t.validate(n, { abortEarly: !1, context: (r == null ? void 0 : r.formData) || {} }), errors: [] };
            } catch (s) {
                if (!Kd(s)) throw s;
                if (!(!((a = s.inner) === null || a === void 0) && a.length) && s.errors.length) return { errors: [{ path: s.path, errors: s.errors }] };
                const i = s.inner.reduce((o, l) => {
                    const u = l.path || '';
                    return o[u] || (o[u] = { errors: [], path: u }), o[u].errors.push(...l.errors), o;
                }, {});
                return { errors: Object.values(i) };
            }
        }
    };
}
async function Yd(t, e) {
    const r = await (qe(e.rules) ? e.rules : Ts(e.rules)).parse(t, { formData: e.formData }),
        a = [];
    for (const s of r.errors) s.errors.length && a.push(...s.errors);
    return { value: r.value, errors: a };
}
async function Xd(t, e, n) {
    const r = Ed(n.name);
    if (!r) throw new Error(`No such validator '${n.name}' exists.`);
    const a = Jd(n.params, t.formData),
        s = { field: t.label || t.name, name: t.name, label: t.label, value: e, form: t.formData, rule: Object.assign(Object.assign({}, n), { params: a }) },
        i = await r(e, a, s);
    return typeof i == 'string' ? { error: i } : { error: i ? void 0 : xs(s) };
}
function xs(t) {
    const e = qt().generateMessage;
    return e ? e(t) : 'Field is invalid';
}
function Jd(t, e) {
    const n = (r) => (xr(r) ? r(e) : r);
    return Array.isArray(t) ? t.map(n) : Object.keys(t).reduce((r, a) => ((r[a] = n(t[a])), r), {});
}
async function Qd(t, e) {
    const r = await (qe(t) ? t : Ts(t)).parse(oe(e), { formData: oe(e) }),
        a = {},
        s = {};
    for (const i of r.errors) {
        const o = i.errors,
            l = (i.path || '').replace(/\["(\d+)"\]/g, (u, d) => `[${d}]`);
        (a[l] = { valid: !o.length, errors: o }), o.length && (s[l] = o[0]);
    }
    return { valid: !r.errors.length, results: a, errors: s, values: r.value, source: 'schema' };
}
async function ec(t, e, n) {
    const a = Ze(t).map(async (u) => {
        var d, c, h;
        const g = (d = n == null ? void 0 : n.names) === null || d === void 0 ? void 0 : d[u],
            M = await ks(Le(e, u), t[u], { name: (g == null ? void 0 : g.name) || u, label: g == null ? void 0 : g.label, values: e, bails: (h = (c = n == null ? void 0 : n.bailsMap) === null || c === void 0 ? void 0 : c[u]) !== null && h !== void 0 ? h : !0 });
        return Object.assign(Object.assign({}, M), { path: u });
    });
    let s = !0;
    const i = await Promise.all(a),
        o = {},
        l = {};
    for (const u of i) (o[u.path] = { valid: u.valid, errors: u.errors }), u.valid || ((s = !1), (l[u.path] = u.errors[0]));
    return { valid: s, results: o, errors: l, source: 'schema' };
}
let Ia = 0;
function tc(t, e) {
    const { value: n, initialValue: r, setInitialValue: a } = nc(t, e.modelValue, e.form);
    if (!e.form) {
        let l = function (g) {
            var M;
            'value' in g && (n.value = g.value), 'errors' in g && d(g.errors), 'touched' in g && (h.touched = (M = g.touched) !== null && M !== void 0 ? M : h.touched), 'initialValue' in g && a(g.initialValue);
        };
        const { errors: u, setErrors: d } = sc(),
            c = Ia >= Number.MAX_SAFE_INTEGER ? 0 : ++Ia,
            h = ac(n, r, u, e.schema);
        return { id: c, path: t, value: n, initialValue: r, meta: h, flags: { pendingUnmount: { [c]: !1 }, pendingReset: !1 }, errors: u, setState: l };
    }
    const s = e.form.createPathState(t, { bails: e.bails, label: e.label, type: e.type, validate: e.validate, schema: e.schema }),
        i = B(() => s.errors);
    function o(l) {
        var u, d, c;
        'value' in l && (n.value = l.value),
            'errors' in l && ((u = e.form) === null || u === void 0 || u.setFieldError(m(t), l.errors)),
            'touched' in l && ((d = e.form) === null || d === void 0 || d.setFieldTouched(m(t), (c = l.touched) !== null && c !== void 0 ? c : !1)),
            'initialValue' in l && a(l.initialValue);
    }
    return { id: Array.isArray(s.id) ? s.id[s.id.length - 1] : s.id, path: t, value: n, errors: i, meta: s, initialValue: r, flags: s.__flags, setState: o };
}
function nc(t, e, n) {
    const r = se(m(e));
    function a() {
        return n ? Le(n.initialValues.value, m(t), m(r)) : m(r);
    }
    function s(u) {
        if (!n) {
            r.value = u;
            return;
        }
        n.setFieldInitialValue(m(t), u, !0);
    }
    const i = B(a);
    if (!n) return { value: se(a()), initialValue: i, setInitialValue: s };
    const o = rc(e, n, i, t);
    return (
        n.stageInitialValue(m(t), o, !0),
        {
            value: B({
                get() {
                    return Le(n.values, m(t));
                },
                set(u) {
                    n.setFieldValue(m(t), u, !1);
                }
            }),
            initialValue: i,
            setInitialValue: s
        }
    );
}
function rc(t, e, n, r) {
    return at(t) ? m(t) : t !== void 0 ? t : Le(e.values, m(r), m(n));
}
function ac(t, e, n, r) {
    const a = B(() => {
            var i, o, l;
            return (l = (o = (i = D(r)) === null || i === void 0 ? void 0 : i.describe) === null || o === void 0 ? void 0 : o.call(i).required) !== null && l !== void 0 ? l : !1;
        }),
        s = On({ touched: !1, pending: !1, valid: !0, required: a, validated: !!m(n).length, initialValue: B(() => m(e)), dirty: B(() => !Pe(m(t), m(e))) });
    return (
        je(
            n,
            (i) => {
                s.valid = !i.length;
            },
            { immediate: !0, flush: 'sync' }
        ),
        s
    );
}
function sc() {
    const t = se([]);
    return {
        errors: t,
        setErrors: (e) => {
            t.value = $r(e);
        }
    };
}
function _n(t, e, n) {
    return _s(void 0) ? oc(t, e) : Ss(t, e);
}
function Ss(t, e, n) {
    const { initialValue: r, validateOnMount: a, bails: s, type: i, checkedValue: o, label: l, validateOnValueUpdate: u, uncheckedValue: d, controlled: c, keepValueOnUnmount: h, syncVModel: g, form: M } = ic(),
        G = c ? ys(Gr) : void 0,
        T = M || G,
        C = B(() => Wt(D(t))),
        ne = B(() => {
            if (D(T == null ? void 0 : T.schema)) return;
            const x = m(e);
            return In(x) || qe(x) || Ve(x) || Array.isArray(x) ? x : ws(x);
        }),
        Fe = !Ve(ne.value) && qe(D(e)),
        { id: ke, value: ge, initialValue: re, meta: ee, setState: $e, errors: Ue, flags: Oe } = tc(C, { modelValue: r, form: T, bails: s, label: l, type: i, validate: ne.value ? ve : void 0, schema: Fe ? e : void 0 }),
        Te = B(() => Ue.value[0]);
    g && lc({ value: ge, prop: g, handleChange: J, shouldValidate: () => u && !Oe.pendingReset });
    const F = (v, x = !1) => {
        (ee.touched = !0), x && ue();
    };
    async function X(v) {
        var x, W;
        if (T != null && T.validateSchema) {
            const { results: H } = await T.validateSchema(v);
            return (x = H[D(C)]) !== null && x !== void 0 ? x : { valid: !0, errors: [] };
        }
        return ne.value ? ks(ge.value, ne.value, { name: D(C), label: D(l), values: (W = T == null ? void 0 : T.values) !== null && W !== void 0 ? W : {}, bails: s }) : { valid: !0, errors: [] };
    }
    const ue = Sr(
            async () => ((ee.pending = !0), (ee.validated = !0), X('validated-only')),
            (v) => (Oe.pendingUnmount[L.id] || ($e({ errors: v.errors }), (ee.pending = !1), (ee.valid = v.valid)), v)
        ),
        ye = Sr(
            async () => X('silent'),
            (v) => ((ee.valid = v.valid), v)
        );
    function ve(v) {
        return (v == null ? void 0 : v.mode) === 'silent' ? ye() : ue();
    }
    function J(v, x = !0) {
        const W = Fn(v);
        w(W, x);
    }
    Zt(() => {
        if (a) return ue();
        (!T || !T.validateSchema) && ye();
    });
    function ze(v) {
        ee.touched = v;
    }
    function Ne(v) {
        var x;
        const W = v && 'value' in v ? v.value : re.value;
        $e({ value: oe(W), initialValue: oe(W), touched: (x = v == null ? void 0 : v.touched) !== null && x !== void 0 ? x : !1, errors: (v == null ? void 0 : v.errors) || [] }), (ee.pending = !1), (ee.validated = !1), ye();
    }
    const S = Mr();
    function w(v, x = !0) {
        (ge.value = S && g ? Vd(v, S.props.modelModifiers) : v), (x ? ue : ye)();
    }
    function j(v) {
        $e({ errors: Array.isArray(v) ? v : [v] });
    }
    const R = B({
            get() {
                return ge.value;
            },
            set(v) {
                w(v, u);
            }
        }),
        L = {
            id: ke,
            name: C,
            label: l,
            value: R,
            meta: ee,
            errors: Ue,
            errorMessage: Te,
            type: i,
            checkedValue: o,
            uncheckedValue: d,
            bails: s,
            keepValueOnUnmount: h,
            resetField: Ne,
            handleReset: () => Ne(),
            validate: ve,
            handleChange: J,
            handleBlur: F,
            setState: $e,
            setTouched: ze,
            setErrors: j,
            setValue: w
        };
    if (
        (vr(Fd, L),
        at(e) &&
            typeof m(e) != 'function' &&
            je(
                e,
                (v, x) => {
                    Pe(v, x) || (ee.validated ? ue() : ye());
                },
                { deep: !0 }
            ),
        !T)
    )
        return L;
    const N = B(() => {
        const v = ne.value;
        return !v || Ve(v) || In(v) || qe(v) || Array.isArray(v)
            ? {}
            : Object.keys(v).reduce((x, W) => {
                  const H = Hd(v[W])
                      .map((pe) => pe.__locatorRef)
                      .reduce((pe, xe) => {
                          const he = Le(T.values, xe) || T.values[xe];
                          return he !== void 0 && (pe[xe] = he), pe;
                      }, {});
                  return Object.assign(x, H), x;
              }, {});
    });
    return (
        je(N, (v, x) => {
            if (!Object.keys(v).length) return;
            !Pe(v, x) && (ee.validated ? ue() : ye());
        }),
        Rr(() => {
            var v;
            const x = (v = D(L.keepValueOnUnmount)) !== null && v !== void 0 ? v : D(T.keepValuesOnUnmount),
                W = D(C);
            if (x || !T || Oe.pendingUnmount[L.id]) {
                T == null || T.removePathState(W, ke);
                return;
            }
            Oe.pendingUnmount[L.id] = !0;
            const H = T.getPathState(W);
            if (Array.isArray(H == null ? void 0 : H.id) && H != null && H.multiple ? H != null && H.id.includes(L.id) : (H == null ? void 0 : H.id) === L.id) {
                if (H != null && H.multiple && Array.isArray(H.value)) {
                    const xe = H.value.findIndex((he) => Pe(he, D(L.checkedValue)));
                    if (xe > -1) {
                        const he = [...H.value];
                        he.splice(xe, 1), T.setFieldValue(W, he);
                    }
                    Array.isArray(H.id) && H.id.splice(H.id.indexOf(L.id), 1);
                } else T.unsetPathValue(D(C));
                T.removePathState(W, ke);
            }
        }),
        L
    );
}
function ic(t) {
    return Object.assign(Object.assign({}, { initialValue: void 0, validateOnMount: !1, bails: !0, label: void 0, validateOnValueUpdate: !0, keepValueOnUnmount: void 0, syncVModel: !1, controlled: !0 }), { initialValue: void 0 });
}
function oc(t, e, n) {
    const r = ys(Gr),
        a = void 0,
        s = void 0;
    function i(o) {
        const l = o.handleChange,
            u = B(() => {
                const c = D(o.value),
                    h = D(a);
                return Array.isArray(c) ? c.findIndex((g) => Pe(g, h)) >= 0 : Pe(h, c);
            });
        function d(c, h = !0) {
            var g, M;
            if (u.value === ((g = c == null ? void 0 : c.target) === null || g === void 0 ? void 0 : g.checked)) {
                h && o.validate();
                return;
            }
            const G = D(t),
                T = r == null ? void 0 : r.getPathState(G),
                C = Fn(c);
            let ne = (M = D(a)) !== null && M !== void 0 ? M : C;
            r && T != null && T.multiple && T.type === 'checkbox' && (ne = Dd(Le(r.values, G) || [], ne, void 0)), l(ne, h);
        }
        return Object.assign(Object.assign({}, o), { checked: u, checkedValue: a, uncheckedValue: s, handleChange: d });
    }
    return i(Ss(t, e));
}
function lc({ prop: t, value: e, handleChange: n, shouldValidate: r }) {
    const a = Mr();
    if (!a || !t) return;
    const s = typeof t == 'string' ? t : 'modelValue',
        i = `update:${s}`;
    s in a.props &&
        (je(e, (o) => {
            Pe(o, Fa(a, s)) || a.emit(i, o);
        }),
        je(
            () => Fa(a, s),
            (o) => {
                if (o === Sa && e.value === void 0) return;
                const l = o === Sa ? void 0 : o;
                Pe(l, e.value) || n(l, r());
            }
        ));
}
function Fa(t, e) {
    if (t) return t.props[e];
}
let uc = 0;
const wn = ['bails', 'fieldsCount', 'id', 'multiple', 'type', 'validate'];
function $s(t) {
    const e = (t == null ? void 0 : t.initialValues) || {},
        n = Object.assign({}, D(e)),
        r = m(t == null ? void 0 : t.validationSchema);
    return r && qe(r) && Ve(r.cast) ? oe(r.cast(n) || {}) : oe(n);
}
function dc(t) {
    var e;
    const n = uc++,
        r = (t == null ? void 0 : t.name) || 'Form';
    let a = 0;
    const s = se(!1),
        i = se(!1),
        o = se(0),
        l = [],
        u = On($s(t)),
        d = se([]),
        c = se({}),
        h = se({}),
        g = Ld(() => {
            h.value = d.value.reduce((p, f) => ((p[Wt(D(f.path))] = f), p), {});
        });
    function M(p, f) {
        const _ = J(p);
        if (!_) {
            typeof p == 'string' && (c.value[Wt(p)] = $r(f));
            return;
        }
        if (typeof p == 'string') {
            const A = Wt(p);
            c.value[A] && delete c.value[A];
        }
        (_.errors = $r(f)), (_.valid = !_.errors.length);
    }
    function G(p) {
        Ze(p).forEach((f) => {
            M(f, p[f]);
        });
    }
    t != null && t.initialErrors && G(t.initialErrors);
    const T = B(() => {
            const p = d.value.reduce((f, _) => (_.errors.length && (f[D(_.path)] = _.errors), f), {});
            return Object.assign(Object.assign({}, c.value), p);
        }),
        C = B(() =>
            Ze(T.value).reduce((p, f) => {
                const _ = T.value[f];
                return _ != null && _.length && (p[f] = _[0]), p;
            }, {})
        ),
        ne = B(() => d.value.reduce((p, f) => ((p[D(f.path)] = { name: D(f.path) || '', label: f.label || '' }), p), {})),
        Fe = B(() =>
            d.value.reduce((p, f) => {
                var _;
                return (p[D(f.path)] = (_ = f.bails) !== null && _ !== void 0 ? _ : !0), p;
            }, {})
        ),
        ke = Object.assign({}, (t == null ? void 0 : t.initialErrors) || {}),
        ge = (e = t == null ? void 0 : t.keepValuesOnUnmount) !== null && e !== void 0 ? e : !1,
        { initialValues: re, originalInitialValues: ee, setInitialValues: $e } = fc(d, u, t),
        Ue = cc(d, u, ee, C),
        Oe = B(() =>
            d.value.reduce((p, f) => {
                const _ = Le(u, D(f.path));
                return ot(p, D(f.path), _), p;
            }, {})
        ),
        Te = t == null ? void 0 : t.validationSchema;
    function F(p, f) {
        var _, A;
        const U = B(() => Le(re.value, D(p))),
            K = h.value[D(p)],
            Z = (f == null ? void 0 : f.type) === 'checkbox' || (f == null ? void 0 : f.type) === 'radio';
        if (K && Z) {
            K.multiple = !0;
            const He = a++;
            return Array.isArray(K.id) ? K.id.push(He) : (K.id = [K.id, He]), K.fieldsCount++, (K.__flags.pendingUnmount[He] = !1), K;
        }
        const me = B(() => Le(u, D(p))),
            be = D(p),
            Ae = Ne.findIndex((He) => He === be);
        Ae !== -1 && Ne.splice(Ae, 1);
        const de = B(() => {
                var He, zt, rr, ar;
                const sr = D(Te);
                if (qe(sr)) return (zt = (He = sr.describe) === null || He === void 0 ? void 0 : He.call(sr, D(p)).required) !== null && zt !== void 0 ? zt : !1;
                const ir = D(f == null ? void 0 : f.schema);
                return qe(ir) && (ar = (rr = ir.describe) === null || rr === void 0 ? void 0 : rr.call(ir).required) !== null && ar !== void 0 ? ar : !1;
            }),
            Ce = a++,
            De = On({
                id: Ce,
                path: p,
                touched: !1,
                pending: !1,
                valid: !0,
                validated: !!(!((_ = ke[be]) === null || _ === void 0) && _.length),
                required: de,
                initialValue: U,
                errors: fi([]),
                bails: (A = f == null ? void 0 : f.bails) !== null && A !== void 0 ? A : !1,
                label: f == null ? void 0 : f.label,
                type: (f == null ? void 0 : f.type) || 'default',
                value: me,
                multiple: !1,
                __flags: { pendingUnmount: { [Ce]: !1 }, pendingReset: !1 },
                fieldsCount: 1,
                validate: f == null ? void 0 : f.validate,
                dirty: B(() => !Pe(m(me), m(U)))
            });
        return (
            d.value.push(De),
            (h.value[be] = De),
            g(),
            C.value[be] &&
                !ke[be] &&
                et(() => {
                    yt(be, { mode: 'silent' });
                }),
            at(p) &&
                je(p, (He) => {
                    g();
                    const zt = oe(me.value);
                    (h.value[He] = De),
                        et(() => {
                            ot(u, He, zt);
                        });
                }),
            De
        );
    }
    const X = Ca(Jr, 5),
        ue = Ca(Jr, 5),
        ye = Sr(
            async (p) => await (p === 'silent' ? X() : ue()),
            (p, [f]) => {
                const _ = Ze(x.errorBag.value),
                    U = [...new Set([...Ze(p.results), ...d.value.map((K) => K.path), ..._])].sort().reduce(
                        (K, Z) => {
                            var me;
                            const be = Z,
                                Ae = J(be) || ze(be),
                                de = ((me = p.results[be]) === null || me === void 0 ? void 0 : me.errors) || [],
                                Ce = D(Ae == null ? void 0 : Ae.path) || be,
                                De = pc({ errors: de, valid: !de.length }, K.results[Ce]);
                            return (K.results[Ce] = De), De.valid || (K.errors[Ce] = De.errors[0]), Ae && c.value[Ce] && delete c.value[Ce], Ae ? ((Ae.valid = De.valid), f === 'silent' || (f === 'validated-only' && !Ae.validated) || M(Ae, De.errors), K) : (M(Ce, de), K);
                        },
                        { valid: p.valid, results: {}, errors: {}, source: p.source }
                    );
                return (
                    p.values && ((U.values = p.values), (U.source = p.source)),
                    Ze(U.results).forEach((K) => {
                        var Z;
                        const me = J(K);
                        me && f !== 'silent' && ((f === 'validated-only' && !me.validated) || M(me, (Z = U.results[K]) === null || Z === void 0 ? void 0 : Z.errors));
                    }),
                    U
                );
            }
        );
    function ve(p) {
        d.value.forEach(p);
    }
    function J(p) {
        const f = typeof p == 'string' ? Wt(p) : p;
        return typeof f == 'string' ? h.value[f] : f;
    }
    function ze(p) {
        return d.value.filter((_) => p.startsWith(D(_.path))).reduce((_, A) => (_ ? (A.path.length > _.path.length ? A : _) : A), void 0);
    }
    let Ne = [],
        S;
    function w(p) {
        return (
            Ne.push(p),
            S ||
                (S = et(() => {
                    [...Ne]
                        .sort()
                        .reverse()
                        .forEach((_) => {
                            Aa(u, _);
                        }),
                        (Ne = []),
                        (S = null);
                })),
            S
        );
    }
    function j(p) {
        return function (_, A) {
            return function (K) {
                return (
                    K instanceof Event && (K.preventDefault(), K.stopPropagation()),
                    ve((Z) => (Z.touched = !0)),
                    (s.value = !0),
                    o.value++,
                    Ot()
                        .then((Z) => {
                            const me = oe(u);
                            if (Z.valid && typeof _ == 'function') {
                                const be = oe(Oe.value);
                                let Ae = p ? be : me;
                                return (
                                    Z.values && (Ae = Z.source === 'schema' ? Z.values : Object.assign({}, Ae, Z.values)),
                                    _(Ae, { evt: K, controlledValues: be, setErrors: G, setFieldError: M, setTouched: Qn, setFieldTouched: he, setValues: pe, setFieldValue: W, resetForm: er, resetField: Yr })
                                );
                            }
                            !Z.valid && typeof A == 'function' && A({ values: me, evt: K, errors: Z.errors, results: Z.results });
                        })
                        .then(
                            (Z) => ((s.value = !1), Z),
                            (Z) => {
                                throw ((s.value = !1), Z);
                            }
                        )
                );
            };
        };
    }
    const L = j(!1);
    L.withControlled = j(!0);
    function N(p, f) {
        const _ = d.value.findIndex((U) => U.path === p && (Array.isArray(U.id) ? U.id.includes(f) : U.id === f)),
            A = d.value[_];
        if (!(_ === -1 || !A)) {
            if (
                (et(() => {
                    yt(p, { mode: 'silent', warn: !1 });
                }),
                A.multiple && A.fieldsCount && A.fieldsCount--,
                Array.isArray(A.id))
            ) {
                const U = A.id.indexOf(f);
                U >= 0 && A.id.splice(U, 1), delete A.__flags.pendingUnmount[f];
            }
            (!A.multiple || A.fieldsCount <= 0) && (d.value.splice(_, 1), Xr(p), g(), delete h.value[p]);
        }
    }
    function v(p) {
        Ze(h.value).forEach((f) => {
            f.startsWith(p) && delete h.value[f];
        }),
            (d.value = d.value.filter((f) => !f.path.startsWith(p))),
            et(() => {
                g();
            });
    }
    const x = {
        name: r,
        formId: n,
        values: u,
        controlledValues: Oe,
        errorBag: T,
        errors: C,
        schema: Te,
        submitCount: o,
        meta: Ue,
        isSubmitting: s,
        isValidating: i,
        fieldArrays: l,
        keepValuesOnUnmount: ge,
        validateSchema: m(Te) ? ye : void 0,
        validate: Ot,
        setFieldError: M,
        validateField: yt,
        setFieldValue: W,
        setValues: pe,
        setErrors: G,
        setFieldTouched: he,
        setTouched: Qn,
        resetForm: er,
        resetField: Yr,
        handleSubmit: L,
        useFieldModel: Js,
        defineInputBinds: Qs,
        defineComponentBinds: ei,
        defineField: nr,
        stageInitialValue: Ys,
        unsetInitialValue: Xr,
        setFieldInitialValue: tr,
        createPathState: F,
        getPathState: J,
        unsetPathValue: w,
        removePathState: N,
        initialValues: re,
        getAllPathStates: () => d.value,
        destroyPath: v,
        isFieldTouched: Bt,
        isFieldDirty: Ut,
        isFieldValid: Ks
    };
    function W(p, f, _ = !0) {
        const A = oe(f),
            U = typeof p == 'string' ? p : p.path;
        J(U) || F(U), ot(u, U, A), _ && yt(U);
    }
    function H(p, f = !0) {
        Ze(u).forEach((_) => {
            delete u[_];
        }),
            Ze(p).forEach((_) => {
                W(_, p[_], !1);
            }),
            f && Ot();
    }
    function pe(p, f = !0) {
        Jt(u, p), l.forEach((_) => _ && _.reset()), f && Ot();
    }
    function xe(p, f) {
        const _ = J(D(p)) || F(p);
        return B({
            get() {
                return _.value;
            },
            set(A) {
                var U;
                const K = D(p);
                W(K, A, (U = D(f)) !== null && U !== void 0 ? U : !1);
            }
        });
    }
    function he(p, f) {
        const _ = J(p);
        _ && (_.touched = f);
    }
    function Bt(p) {
        const f = J(p);
        return f ? f.touched : d.value.filter((_) => _.path.startsWith(p)).some((_) => _.touched);
    }
    function Ut(p) {
        const f = J(p);
        return f ? f.dirty : d.value.filter((_) => _.path.startsWith(p)).some((_) => _.dirty);
    }
    function Ks(p) {
        const f = J(p);
        return f ? f.valid : d.value.filter((_) => _.path.startsWith(p)).every((_) => _.valid);
    }
    function Qn(p) {
        if (typeof p == 'boolean') {
            ve((f) => {
                f.touched = p;
            });
            return;
        }
        Ze(p).forEach((f) => {
            he(f, !!p[f]);
        });
    }
    function Yr(p, f) {
        var _;
        const A = f && 'value' in f ? f.value : Le(re.value, p),
            U = J(p);
        U && (U.__flags.pendingReset = !0),
            tr(p, oe(A), !0),
            W(p, A, !1),
            he(p, (_ = f == null ? void 0 : f.touched) !== null && _ !== void 0 ? _ : !1),
            M(p, (f == null ? void 0 : f.errors) || []),
            et(() => {
                U && (U.__flags.pendingReset = !1);
            });
    }
    function er(p, f) {
        let _ = oe(p != null && p.values ? p.values : ee.value);
        (_ = f != null && f.force ? _ : Jt(ee.value, _)),
            (_ = qe(Te) && Ve(Te.cast) ? Te.cast(_) : _),
            $e(_, { force: f == null ? void 0 : f.force }),
            ve((A) => {
                var U;
                (A.__flags.pendingReset = !0), (A.validated = !1), (A.touched = ((U = p == null ? void 0 : p.touched) === null || U === void 0 ? void 0 : U[D(A.path)]) || !1), W(D(A.path), Le(_, D(A.path)), !1), M(D(A.path), void 0);
            }),
            f != null && f.force ? H(_, !1) : pe(_, !1),
            G((p == null ? void 0 : p.errors) || {}),
            (o.value = (p == null ? void 0 : p.submitCount) || 0),
            et(() => {
                Ot({ mode: 'silent' }),
                    ve((A) => {
                        A.__flags.pendingReset = !1;
                    });
            });
    }
    async function Ot(p) {
        const f = (p == null ? void 0 : p.mode) || 'force';
        if ((f === 'force' && ve((Z) => (Z.validated = !0)), x.validateSchema)) return x.validateSchema(f);
        i.value = !0;
        const _ = await Promise.all(d.value.map((Z) => (Z.validate ? Z.validate(p).then((me) => ({ key: D(Z.path), valid: me.valid, errors: me.errors, value: me.value })) : Promise.resolve({ key: D(Z.path), valid: !0, errors: [], value: void 0 }))));
        i.value = !1;
        const A = {},
            U = {},
            K = {};
        for (const Z of _) (A[Z.key] = { valid: Z.valid, errors: Z.errors }), Z.value && ot(K, Z.key, Z.value), Z.errors.length && (U[Z.key] = Z.errors[0]);
        return { valid: _.every((Z) => Z.valid), results: A, errors: U, values: K, source: 'fields' };
    }
    async function yt(p, f) {
        var _;
        const A = J(p);
        if ((A && (f == null ? void 0 : f.mode) !== 'silent' && (A.validated = !0), Te)) {
            const { results: U } = await ye((f == null ? void 0 : f.mode) || 'validated-only');
            return U[p] || { errors: [], valid: !0 };
        }
        return A != null && A.validate ? A.validate(f) : (!A && (_ = f == null ? void 0 : f.warn), Promise.resolve({ errors: [], valid: !0 }));
    }
    function Xr(p) {
        Aa(re.value, p);
    }
    function Ys(p, f, _ = !1) {
        tr(p, f), ot(u, p, f), _ && !(t != null && t.initialValues) && ot(ee.value, p, oe(f));
    }
    function tr(p, f, _ = !1) {
        ot(re.value, p, oe(f)), _ && ot(ee.value, p, oe(f));
    }
    async function Jr() {
        const p = m(Te);
        if (!p) return { valid: !0, results: {}, errors: {}, source: 'none' };
        i.value = !0;
        const f = In(p) || qe(p) ? await Qd(p, u) : await ec(p, u, { names: ne.value, bailsMap: Fe.value });
        return (i.value = !1), f;
    }
    const Xs = L((p, { evt: f }) => {
        Nd(f) && f.target.submit();
    });
    Zt(() => {
        if ((t != null && t.initialErrors && G(t.initialErrors), t != null && t.initialTouched && Qn(t.initialTouched), t != null && t.validateOnMount)) {
            Ot();
            return;
        }
        x.validateSchema && x.validateSchema('silent');
    }),
        at(Te) &&
            je(Te, () => {
                var p;
                (p = x.validateSchema) === null || p === void 0 || p.call(x, 'validated-only');
            }),
        vr(Gr, x);
    function nr(p, f) {
        const _ = Ve(f) || f == null ? void 0 : f.label,
            A = J(D(p)) || F(p, { label: _ }),
            U = () => (Ve(f) ? f(bn(A, wn)) : f || {});
        function K() {
            var de;
            (A.touched = !0), ((de = U().validateOnBlur) !== null && de !== void 0 ? de : qt().validateOnBlur) && yt(D(A.path));
        }
        function Z() {
            var de;
            ((de = U().validateOnInput) !== null && de !== void 0 ? de : qt().validateOnInput) &&
                et(() => {
                    yt(D(A.path));
                });
        }
        function me() {
            var de;
            ((de = U().validateOnChange) !== null && de !== void 0 ? de : qt().validateOnChange) &&
                et(() => {
                    yt(D(A.path));
                });
        }
        const be = B(() => {
            const de = { onChange: me, onInput: Z, onBlur: K };
            return Ve(f) ? Object.assign(Object.assign({}, de), f(bn(A, wn)).props || {}) : f != null && f.props ? Object.assign(Object.assign({}, de), f.props(bn(A, wn))) : de;
        });
        return [
            xe(p, () => {
                var de, Ce, De;
                return (De = (de = U().validateOnModelUpdate) !== null && de !== void 0 ? de : (Ce = qt()) === null || Ce === void 0 ? void 0 : Ce.validateOnModelUpdate) !== null && De !== void 0 ? De : !0;
            }),
            be
        ];
    }
    function Js(p) {
        return Array.isArray(p) ? p.map((f) => xe(f, !0)) : xe(p);
    }
    function Qs(p, f) {
        const [_, A] = nr(p, f);
        function U() {
            A.value.onBlur();
        }
        function K(me) {
            const be = Fn(me);
            W(D(p), be, !1), A.value.onInput();
        }
        function Z(me) {
            const be = Fn(me);
            W(D(p), be, !1), A.value.onChange();
        }
        return B(() => Object.assign(Object.assign({}, A.value), { onBlur: U, onInput: K, onChange: Z, value: _.value }));
    }
    function ei(p, f) {
        const [_, A] = nr(p, f),
            U = J(D(p));
        function K(Z) {
            _.value = Z;
        }
        return B(() => {
            const Z = Ve(f) ? f(bn(U, wn)) : f || {};
            return Object.assign({ [Z.model || 'modelValue']: _.value, [`onUpdate:${Z.model || 'modelValue'}`]: K }, A.value);
        });
    }
    const Qr = Object.assign(Object.assign({}, x), { values: yr(u), handleReset: () => er(), submitForm: Xs });
    return vr(Id, Qr), Qr;
}
function cc(t, e, n, r) {
    const a = { touched: 'some', pending: 'some', valid: 'every' },
        s = B(() => !Pe(e, m(n)));
    function i() {
        const l = t.value;
        return Ze(a).reduce((u, d) => {
            const c = a[d];
            return (u[d] = l[c]((h) => h[d])), u;
        }, {});
    }
    const o = On(i());
    return (
        Xa(() => {
            const l = i();
            (o.touched = l.touched), (o.valid = l.valid), (o.pending = l.pending);
        }),
        B(() => Object.assign(Object.assign({ initialValues: m(n) }, o), { valid: o.valid && !Ze(r.value).length, dirty: s.value }))
    );
}
function fc(t, e, n) {
    const r = $s(n),
        a = se(r),
        s = se(oe(r));
    function i(o, l) {
        l != null && l.force ? ((a.value = oe(o)), (s.value = oe(o))) : ((a.value = Jt(oe(a.value) || {}, oe(o))), (s.value = Jt(oe(s.value) || {}, oe(o)))),
            l != null &&
                l.updateFields &&
                t.value.forEach((u) => {
                    if (u.touched) return;
                    const c = Le(a.value, D(u.path));
                    ot(e, D(u.path), oe(c));
                });
    }
    return { initialValues: a, originalInitialValues: s, setInitialValues: i };
}
function pc(t, e) {
    return e ? { valid: t.valid && e.valid, errors: [...t.errors, ...e.errors] } : t;
}
const hc = we({
        __name: 'Select',
        props: { id: {}, name: {}, label: { default: 'Select' }, testId: { default: '' }, disabled: { type: Boolean, default: !1 }, options: { default: () => [] } },
        setup(t) {
            const { value: e, errorMessage: n } = _n(() => t.name);
            return (r, a) => {
                const s = Ti;
                return (
                    b(),
                    _e(s, { modelValue: m(e), 'onUpdate:modelValue': a[0] || (a[0] = (i) => (at(e) ? (e.value = i) : null)), label: r.label, options: r.options, 'error-message': m(n), 'test-id': r.testId }, { helpLinks: ae(() => [pn(r.$slots, 'helpLinks')]), _: 3 }, 8, [
                        'modelValue',
                        'label',
                        'options',
                        'error-message',
                        'test-id'
                    ])
                );
            };
        }
    }),
    mc = Object.assign(hc, { __name: 'FieldSelect' }),
    _c = ['for'],
    gc = { class: 'text-input__wrapper' },
    vc = { key: 0, class: 'text-input__prefix' },
    yc = ['id', 'disabled', 'readonly', 'type', 'placeholder', 'maxlength', 'autocomplete', 'autofocus', 'test-id'],
    bc = ['id', 'disabled', 'readonly', 'type', 'placeholder', 'maxlength', 'autocomplete', 'autofocus', 'max', 'min', 'test-id'],
    wc = { key: 3, class: 'text-input__postfix' },
    kc = { key: 0, class: 'text-input__errors' },
    Tc = { key: 0 },
    xc = we({
        __name: 'Input',
        props: {
            id: {},
            name: {},
            placeholder: { default: '' },
            maxLength: { default: null },
            max: { default: null },
            min: { default: null },
            label: { default: '' },
            prefix: { default: '' },
            postfix: { default: '' },
            testId: { default: '' },
            isArea: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            canCopy: { type: Boolean, default: !1 },
            autocomplete: { default: '' },
            autofocus: { type: Boolean, default: !1 },
            readonly: { type: Boolean, default: !1 },
            fullBorders: { type: Boolean, default: !1 },
            type: { default: 'text' }
        },
        emits: ['focus', 'blur'],
        setup(t, { emit: e }) {
            const n = pi(),
                r = e,
                { value: a, errorMessage: s } = _n(() => t.name),
                i = B(() => !(o.value || a.value)),
                o = se(!1),
                l = B(() => s.value);
            function u() {
                (o.value = !0), r('focus');
            }
            function d() {
                r('blur'), (o.value = !1);
            }
            return (c, h) => (
                b(),
                P(
                    'div',
                    { class: Ye(['text-input', { [`text-input--${c.type}`]: !0 }]) },
                    [
                        $('label', { class: Ye([{ 'text-input__label--placeholder': m(i) && !c.isArea, 'textarea-input__label--placeholder': m(i) && c.isArea, 'text-input__label--transition': !0 }, 'text-input__label']), for: c.id }, I(c.label), 11, _c),
                        $('div', gc, [
                            c.prefix ? (b(), P('span', vc, I(c.prefix), 1)) : ie('', !0),
                            c.isArea
                                ? It(
                                      (b(),
                                      P(
                                          'textarea',
                                          br(
                                              {
                                                  key: 1,
                                                  id: c.id,
                                                  ref: 'input',
                                                  'onUpdate:modelValue': h[0] || (h[0] = (g) => (at(a) ? (a.value = g) : null)),
                                                  'data-test': 'textarea',
                                                  disabled: c.disabled,
                                                  readonly: 'readonly' in c ? c.readonly : m(yr),
                                                  class: [{ 'text-area__field--error': m(l), 'text-area__field--padding-right': c.canCopy }, 'text-area__field unset-global-style'],
                                                  type: c.type,
                                                  placeholder: c.placeholder,
                                                  maxlength: c.maxLength,
                                                  autocomplete: c.autocomplete,
                                                  autofocus: c.autofocus,
                                                  'test-id': c.testId
                                              },
                                              m(n),
                                              { onFocus: u, onBlur: d }
                                          ),
                                          null,
                                          16,
                                          yc
                                      )),
                                      [[hi, m(a)]]
                                  )
                                : It(
                                      (b(),
                                      P(
                                          'input',
                                          br(
                                              {
                                                  key: 2,
                                                  id: c.id,
                                                  ref: 'input',
                                                  'onUpdate:modelValue': h[1] || (h[1] = (g) => (at(a) ? (a.value = g) : null)),
                                                  'data-test': 'textInput',
                                                  disabled: c.disabled,
                                                  readonly: 'readonly' in c ? c.readonly : m(yr),
                                                  class: [
                                                      {
                                                          'text-input__field--error': m(l) && !c.fullBorders,
                                                          'text-input__field--padding-right': c.canCopy || c.postfix || c.type === 'password',
                                                          'text-input__field--align-end': c.prefix,
                                                          'text-input__field--light-border': c.fullBorders && !m(a),
                                                          'text-input__field--dark-border': c.fullBorders && m(a),
                                                          'text-input__field--red-border': c.fullBorders && m(l)
                                                      },
                                                      'text-input__field unset-global-style'
                                                  ],
                                                  type: c.type,
                                                  placeholder: c.placeholder,
                                                  maxlength: c.maxLength,
                                                  autocomplete: c.autocomplete,
                                                  autofocus: c.autofocus,
                                                  max: c.max,
                                                  min: c.min,
                                                  'test-id': c.testId
                                              },
                                              m(n),
                                              { onFocus: u, onBlur: d }
                                          ),
                                          null,
                                          16,
                                          bc
                                      )),
                                      [[mi, m(a)]]
                                  ),
                            c.postfix ? (b(), P('span', wc, I(c.postfix), 1)) : ie('', !0)
                        ]),
                        Q(_i, { name: 'error-expand' }, { default: ae(() => [m(l) ? (b(), P('div', kc, [m(s) ? (b(), P('span', Tc, I(m(s)), 1)) : ie('', !0)])) : ie('', !0)]), _: 1 })
                    ],
                    2
                )
            );
        }
    }),
    Os = Object.assign(Me(xc, [['__scopeId', 'data-v-e03c8174']]), { __name: 'FieldInput' }),
    Sc = ['id'],
    $c = { class: 'file-upload__content' },
    Oc = { class: 'file-upload__main-text' },
    Ac = we({
        __name: 'UploadedFile',
        props: { uuid: {}, name: { default: '' } },
        emits: ['remove'],
        setup(t, { emit: e }) {
            const n = e;
            function r(a) {
                n('remove', a);
            }
            return (a, s) => {
                const i = Zn;
                return (
                    b(),
                    P(
                        'div',
                        { id: 'uuid' in a ? a.uuid : m(_r), class: 'file-upload' },
                        [
                            $('div', $c, [$('div', Oc, I(a.name), 1), s[1] || (s[1] = $('span', { class: 'file-upload__preview-link' }, null, -1))]),
                            Q(i, { name: 'cross-thin', height: '16px', width: '16px', class: 'file-upload__cross', onClick: s[0] || (s[0] = (o) => r('uuid' in a ? a.uuid : m(_r))) })
                        ],
                        8,
                        Sc
                    )
                );
            };
        }
    }),
    Cc = Object.assign(Me(Ac, [['__scopeId', 'data-v-a7646995']]), { __name: 'UploadedFile' }),
    Ec = { class: 'mobile-file-upload__photo-text' },
    Ic = { class: 'mobile-file-upload__error-message-container' },
    Fc = { key: 0, class: 'mobile-file-upload__error-message' },
    Pc = { class: 'mobile-file-upload__or' },
    jc = ['test-id'],
    Rc = { class: 'mobile-file-upload__file-icon' },
    Mc = { class: 'mobile-file-upload__file-text' },
    Nc = { class: 'mobile-file-upload__file-text-top' },
    Dc = { class: 'mobile-file-upload__file-text-bottom' },
    Vc = we({
        __name: 'MobileFileUpload',
        props: { id: {}, fileTypes: { default: () => ['image/png', 'image/jpeg'] }, fileTypesHelperText: { default: 'png or jpg' }, multiple: { type: Boolean, default: !1 }, errorMessage: { default: '' }, name: { default: '' }, testId: { default: '' } },
        emits: ['update:file-data'],
        setup(t, { emit: e }) {
            const n = e,
                r = B(() => !!t.errorMessage);
            function a(i = !1) {
                const o = document.createElement('input');
                if (((o.type = 'file'), (o.hidden = !0), (o.name = t.name || 'file'), (o.multiple = t.multiple), i)) (o.accept = 'image/*'), (o.capture = 'environment');
                else {
                    const l = cs(t.fileTypes);
                    l.includes('image/jpeg') && (l.push('.jpeg'), l.push('.jpg')), (o.accept = l.join(','));
                }
                o.addEventListener('change', (l) => {
                    s(l.target.files);
                }),
                    o.dispatchEvent(new MouseEvent('click'));
            }
            function s(i) {
                n(
                    'update:file-data',
                    [...i].filter((o) => t.fileTypes.includes(o.type))
                );
            }
            return (i, o) => {
                const l = Zn;
                return (
                    b(),
                    P(
                        'div',
                        { class: Ye([{ 'mobile-file-upload--state-error': m(r) }, 'mobile-file-upload mobile-file-upload--state-ready']) },
                        [
                            $('div', { class: 'mobile-file-upload__photo', onClick: o[0] || (o[0] = Ft((u) => a(!0), ['stop'])) }, [
                                Q(l, { name: 'camera', height: '64px', width: '64px', class: 'mobile-file-upload__photo-icon' }),
                                $('div', Ec, I(i.$t('components.mobileFileUpload.takePhotoAction')), 1)
                            ]),
                            $('div', Ic, [m(r) ? (b(), P('div', Fc, I(i.errorMessage), 1)) : ie('', !0)]),
                            $('div', Pc, I(i.$t('components.mobileFileUpload.or')), 1),
                            $(
                                'div',
                                { class: 'mobile-file-upload__file', 'test-id': i.testId, onClick: o[1] || (o[1] = Ft((u) => a(!1), ['prevent'])) },
                                [$('div', Rc, [Q(l, { name: 'upload', height: '64px', width: '64px' })]), $('div', Mc, [$('div', Nc, I(i.$t('components.mobileFileUpload.uploadFileAction')), 1), $('div', Dc, I(i.fileTypesHelperText), 1)])],
                                8,
                                jc
                            )
                        ],
                        2
                    )
                );
            };
        }
    }),
    Lc = Object.assign(Me(Vc, [['__scopeId', 'data-v-02d010c8']]), { __name: 'MobileFileUpload' }),
    Zc = { class: 'file-upload__parent' },
    Bc = ['id', 'test-id'],
    Uc = { class: 'file-upload__content' },
    zc = { class: 'file-upload__main-text' },
    Hc = { class: 'file-upload__subtext' },
    Wc = { class: 'file-upload__other-text' },
    qc = { class: 'file-upload__or' },
    Gc = { key: 0, class: 'file-upload__error-message' },
    Kc = we({
        __name: 'DesktopFileUpload',
        props: { id: { default: '' }, fileTypes: { default: () => ['image/png', 'image/jpeg'] }, fileTypesHelperText: { default: 'png or jpg' }, multiple: { type: Boolean, default: !1 }, errorMessage: { default: '' }, name: { default: '' }, testId: { default: '' } },
        emits: ['update:file-data'],
        setup(t, { emit: e }) {
            const n = e,
                r = se(0),
                a = B(() => t.id || `file-upload__${gi()}`),
                s = B(() => r.value > 0);
            function i() {
                r.value++;
            }
            function o(c) {
                (r.value = 0), u(c.dataTransfer.files);
            }
            function l() {
                const c = document.createElement('input');
                (c.type = 'file'), (c.hidden = !0), (c.name = t.name || 'file'), (c.multiple = t.multiple);
                const h = cs(t.fileTypes);
                h.includes('image/jpeg') && (h.push('.jpeg'), h.push('.jpg')),
                    (c.accept = h.join(',')),
                    c.addEventListener('change', (g) => {
                        u(g.target.files);
                    }),
                    c.dispatchEvent(new MouseEvent('click'));
            }
            function u(c) {
                n(
                    'update:file-data',
                    [...c].filter((h) => t.fileTypes.includes(h.type))
                );
            }
            function d(c) {
                r.value--;
            }
            return (c, h) => {
                const g = Zn;
                return (
                    b(),
                    P('div', Zc, [
                        $(
                            'div',
                            {
                                id: m(a),
                                class: Ye([{ 'file-upload--state-drag': m(s), 'file-upload--state-error': !!c.errorMessage }, 'file-upload file-upload--state-ready']),
                                'test-id': c.testId,
                                onDragenter: Ft(i, ['prevent']),
                                onDragleave: Ft(d, ['prevent']),
                                onDrop: Ft(o, ['prevent']),
                                onDragover: h[3] || (h[3] = Ft(() => {}, ['prevent']))
                            },
                            [
                                Q(g, { name: 'upload', height: '52px', width: '52px' }),
                                $('div', Uc, [
                                    $('div', zc, [ce(I(c.$t('components.fileUpload.dragAndDrop')), 1), $('div', Hc, I(c.fileTypesHelperText), 1)]),
                                    $('div', Wc, [
                                        $('div', qc, I(c.$t('components.fileUpload.or')), 1),
                                        $(
                                            'div',
                                            { class: 'file-upload__browse', tabindex: '0', onClick: h[0] || (h[0] = () => l()), onKeyup: [h[1] || (h[1] = ea(() => l(), ['space'])), h[2] || (h[2] = ea(() => l(), ['enter']))] },
                                            I(c.$t('components.fileUpload.browseFilesAction')),
                                            33
                                        )
                                    ])
                                ])
                            ],
                            42,
                            Bc
                        ),
                        c.errorMessage && !m(s) ? (b(), P('div', Gc, I(c.errorMessage), 1)) : ie('', !0)
                    ])
                );
            };
        }
    }),
    Yc = Object.assign(Me(Kc, [['__scopeId', 'data-v-2b70b4e6']]), { __name: 'DesktopFileUpload' }),
    Xc = { class: 'file-upload__container' },
    Jc = { key: 0, class: 'file-upload__items' },
    Qc = { key: 2, 'test-id': 'limitReached', class: 'file-upload__limit-reached' },
    ef = we({
        __name: 'FileUpload',
        props: {
            name: {},
            useMobile: { type: Boolean, default: !1 },
            showItems: { type: Boolean, default: !1 },
            limit: { default: 1 },
            multiple: { type: Boolean, default: !1 },
            fileTypes: { default: () => ['image/png', 'image/jpeg'] },
            fileTypesHelperText: { default: 'png or jpg' }
        },
        setup(t) {
            const e = se([]),
                { setValue: n } = _n(() => t.name);
            function r(s) {
                s.forEach((i) => {
                    e.value.length < t.limit && e.value.push({ file: i, fileKey: _r(), fileName: i.name });
                }),
                    n(e.value.map((i) => i.file));
            }
            function a(s) {
                (e.value = e.value.filter(({ fileKey: i }) => i !== s)), n(e.value.map((i) => i.file));
            }
            return (s, i) => {
                const o = Cc,
                    l = Lc,
                    u = Yc;
                return (
                    b(),
                    P('div', Xc, [
                        m(e).length > 0
                            ? (b(),
                              P('div', Jc, [
                                  (b(!0),
                                  P(
                                      tt,
                                      null,
                                      bt(m(e), (d) => (b(), _e(o, { key: d.fileKey, uuid: d.fileKey, name: d.fileName, onRemove: a }, null, 8, ['uuid', 'name']))),
                                      128
                                  ))
                              ]))
                            : ie('', !0),
                        m(e).length < s.limit
                            ? (b(),
                              P(
                                  tt,
                                  { key: 1 },
                                  [
                                      s.useMobile
                                          ? (b(), _e(l, { key: 0, name: s.name, multiple: s.multiple, 'file-types': s.fileTypes, 'file-types-helper-text': s.fileTypesHelperText, 'onUpdate:fileData': r }, null, 8, ['name', 'multiple', 'file-types', 'file-types-helper-text']))
                                          : (b(), _e(u, { key: 1, name: s.name, multiple: s.multiple, 'file-types': s.fileTypes, 'file-types-helper-text': s.fileTypesHelperText, 'onUpdate:fileData': r }, null, 8, ['name', 'multiple', 'file-types', 'file-types-helper-text']))
                                  ],
                                  64
                              ))
                            : ie('', !0),
                        s.showItems && m(e).length >= s.limit ? (b(), P('div', Qc, I(s.$t('components.genericFileUpload.maximumFilesLimitError', { limit: s.limit })), 1)) : ie('', !0)
                    ])
                );
            };
        }
    }),
    tf = Object.assign(Me(ef, [['__scopeId', 'data-v-7874121f']]), { __name: 'FieldFileUpload' }),
    nf = we({
        __name: 'Checkbox',
        props: { name: {}, label: { default: '' }, testId: { default: '' }, disabled: { type: Boolean, default: !1 } },
        setup(t) {
            const { value: e, errorMessage: n } = _n(() => t.name);
            return (r, a) => {
                const s = ii;
                return (
                    b(),
                    _e(s, { modelValue: m(e), 'onUpdate:modelValue': a[0] || (a[0] = (i) => (at(e) ? (e.value = i) : null)), label: r.label, 'error-message': m(n) }, { default: ae(() => [pn(r.$slots, 'default', {}, () => [ce(I(r.label), 1)])]), _: 3 }, 8, [
                        'modelValue',
                        'label',
                        'error-message'
                    ])
                );
            };
        }
    }),
    rf = Object.assign(nf, { __name: 'FieldCheckbox' }),
    Pa = 'hcaptcha-api-script-id',
    As = '_hcaptchaOnLoad';
let Or, Cs;
const fr = new Promise((t, e) => {
    (Or = t), (Cs = e);
});
function af(t) {
    if (window.hcaptcha) return Or(), fr;
    if (document.getElementById(Pa)) return fr;
    window[As] = Or;
    const e = sf(t),
        n = document.createElement('script');
    return (
        (n.id = Pa),
        (n.src = e),
        (n.async = !0),
        (n.defer = !0),
        (n.onerror = (r) => {
            console.error('Failed to load api: ' + e, r), Cs('Failed to load api.js');
        }),
        document.head.appendChild(n),
        fr
    );
}
function sf(t) {
    let e = t.apiEndpoint;
    return (
        (e = Qe(e, 'render', 'explicit')),
        (e = Qe(e, 'onload', As)),
        (e = Qe(e, 'recaptchacompat', t.reCaptchaCompat === !1 ? 'off' : null)),
        (e = Qe(e, 'hl', t.language)),
        (e = Qe(e, 'sentry', t.sentry)),
        (e = Qe(e, 'custom', t.custom)),
        (e = Qe(e, 'endpoint', t.endpoint)),
        (e = Qe(e, 'assethost', t.assethost)),
        (e = Qe(e, 'imghost', t.imghost)),
        (e = Qe(e, 'reportapi', t.reportapi)),
        e
    );
}
function Qe(t, e, n) {
    if (n != null) {
        const r = t.includes('?') ? '&' : '?';
        return t + r + e + '=' + encodeURIComponent(n);
    }
    return t;
}
var of = (t, e) => {
    for (const [n, r] of e) t[n] = r;
    return t;
};
const lf = {
        name: 'VueHcaptcha',
        props: {
            sitekey: { type: String, required: !0 },
            theme: { type: String, default: void 0 },
            size: { type: String, default: void 0 },
            tabindex: { type: String, default: void 0 },
            language: { type: String, default: void 0 },
            reCaptchaCompat: { type: Boolean, default: !0 },
            challengeContainer: { type: String, default: void 0 },
            rqdata: { type: String, default: void 0 },
            sentry: { type: Boolean, default: !0 },
            custom: { type: Boolean, default: void 0 },
            apiEndpoint: { type: String, default: '/1/api.js' },
            endpoint: { type: String, default: void 0 },
            reportapi: { type: String, default: void 0 },
            assethost: { type: String, default: void 0 },
            imghost: { type: String, default: void 0 }
        },
        data: () => ({ widgetId: null, hcaptcha: null, renderedCb: null }),
        mounted() {
            return af(this.$props).then(this.onApiLoaded).catch(this.onError);
        },
        unmounted() {
            this.teardown();
        },
        destroyed() {
            this.teardown();
        },
        methods: {
            teardown() {
                this.widgetId && (this.hcaptcha.reset(this.widgetId), this.hcaptcha.remove(this.widgetId));
            },
            onApiLoaded() {
                this.hcaptcha = window.hcaptcha;
                const t = {
                    sitekey: this.sitekey,
                    theme: this.theme,
                    size: this.size,
                    tabindex: this.tabindex,
                    callback: this.onVerify,
                    'expired-callback': this.onExpired,
                    'chalexpired-callback': this.onChallengeExpired,
                    'error-callback': this.onError,
                    'open-callback': this.onOpen,
                    'close-callback': this.onClose
                };
                this.challengeContainer && (t['challenge-container'] = this.challengeContainer), (this.widgetId = this.hcaptcha.render(this.$el, t)), this.rqdata && this.hcaptcha.setData(this.widgetId, { rqdata: this.rqdata }), this.onRendered();
            },
            execute() {
                this.widgetId
                    ? (this.hcaptcha.execute(this.widgetId), this.onExecuted())
                    : (this.renderedCb = () => {
                          (this.renderedCb = null), this.execute();
                      });
            },
            executeAsync() {
                if (this.widgetId) return this.onExecuted(), this.hcaptcha.execute(this.widgetId, { async: !0 });
                let t;
                const e = new Promise((n) => {
                    t = n;
                });
                return (
                    (this.renderedCb = () => {
                        (this.renderedCb = null), t();
                    }),
                    e.then(this.executeAsync)
                );
            },
            reset() {
                this.widgetId ? (this.hcaptcha.reset(this.widgetId), this.onReset()) : this.$emit('error', 'Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.');
            },
            onRendered() {
                this.$emit('rendered'), this.renderedCb && this.renderedCb();
            },
            onExecuted() {
                this.$emit('executed');
            },
            onReset() {
                this.$emit('reset');
            },
            onError(t) {
                this.$emit('error', t), this.reset();
            },
            onVerify() {
                const t = this.hcaptcha.getResponse(this.widgetId),
                    e = this.hcaptcha.getRespKey(this.widgetId);
                this.$emit('verify', t, e);
            },
            onExpired() {
                this.$emit('expired');
            },
            onChallengeExpired() {
                this.$emit('challengeExpired');
            },
            onOpen() {
                this.$emit('opened');
            },
            onClose() {
                this.$emit('closed');
            }
        }
    },
    uf = { id: 'hcap-script' };
function df(t, e, n, r, a, s) {
    return b(), P('div', uf);
}
var cf = of(lf, [['render', df]]);
const ff = ['test-id'],
    pf = { key: 0 },
    hf = { class: 'hcaptcha-link-container' },
    mf = { target: '_blank', class: 'hcaptcha-link hcaptcha-link__left', href: '/privacy' },
    _f = { target: '_blank', class: 'hcaptcha-link', href: '/terms' },
    gf = we({
        __name: 'Hcaptcha',
        props: { siteKey: {}, id: { default: 'h-recaptcha' }, testId: { default: '' }, size: { default: 'normal' }, fieldClasses: { default: () => [] } },
        setup(t) {
            const { setValue: e } = _n('h-recaptcha-response'),
                n = hn(),
                r = B(() => !n.value && t.siteKey),
                a = Nr('invisibleHcaptchaRef'),
                s = B(() => t.size === 'invisible');
            je(a, (o, l) => {
                o && !l && s && o.execute();
            });
            function i(o, l) {
                e(o, l);
            }
            return (o, l) => {
                const u = vi('i18n-t');
                return m(r)
                    ? (b(),
                      P(
                          'div',
                          { key: 0, 'test-id': o.testId, class: Ye(o.fieldClasses) },
                          [
                              Q(m(cf), { id: o.id, ref_key: 'invisibleHcaptchaRef', ref: a, sitekey: o.siteKey, size: o.size, language: 'en', onVerify: i }, null, 8, ['id', 'sitekey', 'size']),
                              m(s)
                                  ? (b(),
                                    P('div', pf, [
                                        $('div', hf, [
                                            Q(
                                                u,
                                                { keypath: 'components.hcaptcha.disclaimer', tag: 'span' },
                                                { privacyPolicyLink: ae(() => [$('a', mf, I(o.$t('components.hcaptcha.privacyPolicyLink')), 1)]), termsLink: ae(() => [$('a', _f, I(o.$t('components.hcaptcha.termsOfServiceLink')), 1)]), _: 1 }
                                            )
                                        ])
                                    ]))
                                  : ie('', !0)
                          ],
                          10,
                          ff
                      ))
                    : ie('', !0);
            };
        }
    }),
    Es = Object.assign(Me(gf, [['__scopeId', 'data-v-21bd5a30']]), { __name: 'FieldHcaptcha' }),
    vf = we({
        __name: 'BtsForm',
        props: { onSubmit: { type: Function }, validationSchema: {}, initialValues: {} },
        emits: ['change'],
        setup(t, { emit: e }) {
            const n = e,
                { handleSubmit: r, values: a, meta: s } = dc({ validationSchema: t.validationSchema, initialValues: t.initialValues }),
                i = r(t.onSubmit),
                o = B(() => s.value.valid);
            return (
                je(a, (l) => {
                    n('change', l);
                }),
                (l, u) => (b(), P('form', { onSubmit: u[0] || (u[0] = (...d) => m(i) && m(i)(...d)) }, [pn(l.$slots, 'default', { isValid: m(o) })], 32))
            );
        }
    }),
    Is = Object.assign(vf, { __name: 'BtsForm' });
var te;
(function (t) {
    t.assertEqual = (a) => a;
    function e(a) {}
    t.assertIs = e;
    function n(a) {
        throw new Error();
    }
    (t.assertNever = n),
        (t.arrayToEnum = (a) => {
            const s = {};
            for (const i of a) s[i] = i;
            return s;
        }),
        (t.getValidEnumValues = (a) => {
            const s = t.objectKeys(a).filter((o) => typeof a[a[o]] != 'number'),
                i = {};
            for (const o of s) i[o] = a[o];
            return t.objectValues(i);
        }),
        (t.objectValues = (a) =>
            t.objectKeys(a).map(function (s) {
                return a[s];
            })),
        (t.objectKeys =
            typeof Object.keys == 'function'
                ? (a) => Object.keys(a)
                : (a) => {
                      const s = [];
                      for (const i in a) Object.prototype.hasOwnProperty.call(a, i) && s.push(i);
                      return s;
                  }),
        (t.find = (a, s) => {
            for (const i of a) if (s(i)) return i;
        }),
        (t.isInteger = typeof Number.isInteger == 'function' ? (a) => Number.isInteger(a) : (a) => typeof a == 'number' && isFinite(a) && Math.floor(a) === a);
    function r(a, s = ' | ') {
        return a.map((i) => (typeof i == 'string' ? `'${i}'` : i)).join(s);
    }
    (t.joinValues = r), (t.jsonStringifyReplacer = (a, s) => (typeof s == 'bigint' ? s.toString() : s));
})(te || (te = {}));
var Ar;
(function (t) {
    t.mergeShapes = (e, n) => ({ ...e, ...n });
})(Ar || (Ar = {}));
const O = te.arrayToEnum(['string', 'nan', 'number', 'integer', 'float', 'boolean', 'date', 'bigint', 'symbol', 'function', 'undefined', 'null', 'array', 'object', 'unknown', 'promise', 'void', 'never', 'map', 'set']),
    ut = (t) => {
        switch (typeof t) {
            case 'undefined':
                return O.undefined;
            case 'string':
                return O.string;
            case 'number':
                return isNaN(t) ? O.nan : O.number;
            case 'boolean':
                return O.boolean;
            case 'function':
                return O.function;
            case 'bigint':
                return O.bigint;
            case 'symbol':
                return O.symbol;
            case 'object':
                return Array.isArray(t)
                    ? O.array
                    : t === null
                    ? O.null
                    : t.then && typeof t.then == 'function' && t.catch && typeof t.catch == 'function'
                    ? O.promise
                    : typeof Map < 'u' && t instanceof Map
                    ? O.map
                    : typeof Set < 'u' && t instanceof Set
                    ? O.set
                    : typeof Date < 'u' && t instanceof Date
                    ? O.date
                    : O.object;
            default:
                return O.unknown;
        }
    },
    y = te.arrayToEnum([
        'invalid_type',
        'invalid_literal',
        'custom',
        'invalid_union',
        'invalid_union_discriminator',
        'invalid_enum_value',
        'unrecognized_keys',
        'invalid_arguments',
        'invalid_return_type',
        'invalid_date',
        'invalid_string',
        'too_small',
        'too_big',
        'invalid_intersection_types',
        'not_multiple_of',
        'not_finite'
    ]),
    yf = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, '$1:');
class Be extends Error {
    get errors() {
        return this.issues;
    }
    constructor(e) {
        super(),
            (this.issues = []),
            (this.addIssue = (r) => {
                this.issues = [...this.issues, r];
            }),
            (this.addIssues = (r = []) => {
                this.issues = [...this.issues, ...r];
            });
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : (this.__proto__ = n), (this.name = 'ZodError'), (this.issues = e);
    }
    format(e) {
        const n =
                e ||
                function (s) {
                    return s.message;
                },
            r = { _errors: [] },
            a = (s) => {
                for (const i of s.issues)
                    if (i.code === 'invalid_union') i.unionErrors.map(a);
                    else if (i.code === 'invalid_return_type') a(i.returnTypeError);
                    else if (i.code === 'invalid_arguments') a(i.argumentsError);
                    else if (i.path.length === 0) r._errors.push(n(i));
                    else {
                        let o = r,
                            l = 0;
                        for (; l < i.path.length; ) {
                            const u = i.path[l];
                            l === i.path.length - 1 ? ((o[u] = o[u] || { _errors: [] }), o[u]._errors.push(n(i))) : (o[u] = o[u] || { _errors: [] }), (o = o[u]), l++;
                        }
                    }
            };
        return a(this), r;
    }
    static assert(e) {
        if (!(e instanceof Be)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, te.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(e = (n) => n.message) {
        const n = {},
            r = [];
        for (const a of this.issues) a.path.length > 0 ? ((n[a.path[0]] = n[a.path[0]] || []), n[a.path[0]].push(e(a))) : r.push(e(a));
        return { formErrors: r, fieldErrors: n };
    }
    get formErrors() {
        return this.flatten();
    }
}
Be.create = (t) => new Be(t);
const Nt = (t, e) => {
    let n;
    switch (t.code) {
        case y.invalid_type:
            t.received === O.undefined ? (n = 'Required') : (n = `Expected ${t.expected}, received ${t.received}`);
            break;
        case y.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(t.expected, te.jsonStringifyReplacer)}`;
            break;
        case y.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${te.joinValues(t.keys, ', ')}`;
            break;
        case y.invalid_union:
            n = 'Invalid input';
            break;
        case y.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${te.joinValues(t.options)}`;
            break;
        case y.invalid_enum_value:
            n = `Invalid enum value. Expected ${te.joinValues(t.options)}, received '${t.received}'`;
            break;
        case y.invalid_arguments:
            n = 'Invalid function arguments';
            break;
        case y.invalid_return_type:
            n = 'Invalid function return type';
            break;
        case y.invalid_date:
            n = 'Invalid date';
            break;
        case y.invalid_string:
            typeof t.validation == 'object'
                ? 'includes' in t.validation
                    ? ((n = `Invalid input: must include "${t.validation.includes}"`), typeof t.validation.position == 'number' && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`))
                    : 'startsWith' in t.validation
                    ? (n = `Invalid input: must start with "${t.validation.startsWith}"`)
                    : 'endsWith' in t.validation
                    ? (n = `Invalid input: must end with "${t.validation.endsWith}"`)
                    : te.assertNever(t.validation)
                : t.validation !== 'regex'
                ? (n = `Invalid ${t.validation}`)
                : (n = 'Invalid');
            break;
        case y.too_small:
            t.type === 'array'
                ? (n = `Array must contain ${t.exact ? 'exactly' : t.inclusive ? 'at least' : 'more than'} ${t.minimum} element(s)`)
                : t.type === 'string'
                ? (n = `String must contain ${t.exact ? 'exactly' : t.inclusive ? 'at least' : 'over'} ${t.minimum} character(s)`)
                : t.type === 'number'
                ? (n = `Number must be ${t.exact ? 'exactly equal to ' : t.inclusive ? 'greater than or equal to ' : 'greater than '}${t.minimum}`)
                : t.type === 'date'
                ? (n = `Date must be ${t.exact ? 'exactly equal to ' : t.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(t.minimum))}`)
                : (n = 'Invalid input');
            break;
        case y.too_big:
            t.type === 'array'
                ? (n = `Array must contain ${t.exact ? 'exactly' : t.inclusive ? 'at most' : 'less than'} ${t.maximum} element(s)`)
                : t.type === 'string'
                ? (n = `String must contain ${t.exact ? 'exactly' : t.inclusive ? 'at most' : 'under'} ${t.maximum} character(s)`)
                : t.type === 'number'
                ? (n = `Number must be ${t.exact ? 'exactly' : t.inclusive ? 'less than or equal to' : 'less than'} ${t.maximum}`)
                : t.type === 'bigint'
                ? (n = `BigInt must be ${t.exact ? 'exactly' : t.inclusive ? 'less than or equal to' : 'less than'} ${t.maximum}`)
                : t.type === 'date'
                ? (n = `Date must be ${t.exact ? 'exactly' : t.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(t.maximum))}`)
                : (n = 'Invalid input');
            break;
        case y.custom:
            n = 'Invalid input';
            break;
        case y.invalid_intersection_types:
            n = 'Intersection results could not be merged';
            break;
        case y.not_multiple_of:
            n = `Number must be a multiple of ${t.multipleOf}`;
            break;
        case y.not_finite:
            n = 'Number must be finite';
            break;
        default:
            (n = e.defaultError), te.assertNever(t);
    }
    return { message: n };
};
let Fs = Nt;
function bf(t) {
    Fs = t;
}
function Pn() {
    return Fs;
}
const jn = (t) => {
        const { data: e, path: n, errorMaps: r, issueData: a } = t,
            s = [...n, ...(a.path || [])],
            i = { ...a, path: s };
        if (a.message !== void 0) return { ...a, path: s, message: a.message };
        let o = '';
        const l = r
            .filter((u) => !!u)
            .slice()
            .reverse();
        for (const u of l) o = u(i, { data: e, defaultError: o }).message;
        return { ...a, path: s, message: o };
    },
    wf = [];
function k(t, e) {
    const n = Pn(),
        r = jn({ issueData: e, data: t.data, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === Nt ? void 0 : Nt].filter((a) => !!a) });
    t.common.issues.push(r);
}
class Ie {
    constructor() {
        this.value = 'valid';
    }
    dirty() {
        this.value === 'valid' && (this.value = 'dirty');
    }
    abort() {
        this.value !== 'aborted' && (this.value = 'aborted');
    }
    static mergeArray(e, n) {
        const r = [];
        for (const a of n) {
            if (a.status === 'aborted') return z;
            a.status === 'dirty' && e.dirty(), r.push(a.value);
        }
        return { status: e.value, value: r };
    }
    static async mergeObjectAsync(e, n) {
        const r = [];
        for (const a of n) {
            const s = await a.key,
                i = await a.value;
            r.push({ key: s, value: i });
        }
        return Ie.mergeObjectSync(e, r);
    }
    static mergeObjectSync(e, n) {
        const r = {};
        for (const a of n) {
            const { key: s, value: i } = a;
            if (s.status === 'aborted' || i.status === 'aborted') return z;
            s.status === 'dirty' && e.dirty(), i.status === 'dirty' && e.dirty(), s.value !== '__proto__' && (typeof i.value < 'u' || a.alwaysSet) && (r[s.value] = i.value);
        }
        return { status: e.value, value: r };
    }
}
const z = Object.freeze({ status: 'aborted' }),
    Pt = (t) => ({ status: 'dirty', value: t }),
    Re = (t) => ({ status: 'valid', value: t }),
    Cr = (t) => t.status === 'aborted',
    Er = (t) => t.status === 'dirty',
    xt = (t) => t.status === 'valid',
    Qt = (t) => typeof Promise < 'u' && t instanceof Promise;
function Rn(t, e, n, r) {
    if (typeof e == 'function' ? t !== e || !0 : !e.has(t)) throw new TypeError('Cannot read private member from an object whose class did not declare it');
    return e.get(t);
}
function Ps(t, e, n, r, a) {
    if (typeof e == 'function' ? t !== e || !0 : !e.has(t)) throw new TypeError('Cannot write private member to an object whose class did not declare it');
    return e.set(t, n), n;
}
var E;
(function (t) {
    (t.errToObj = (e) => (typeof e == 'string' ? { message: e } : e || {})), (t.toString = (e) => (typeof e == 'string' ? e : e == null ? void 0 : e.message));
})(E || (E = {}));
var Gt, Kt;
class st {
    constructor(e, n, r, a) {
        (this._cachedPath = []), (this.parent = e), (this.data = n), (this._path = r), (this._key = a);
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
}
const ja = (t, e) => {
    if (xt(e)) return { success: !0, data: e.value };
    if (!t.common.issues.length) throw new Error('Validation failed but no issues detected.');
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const n = new Be(t.common.issues);
            return (this._error = n), this._error;
        }
    };
};
function q(t) {
    if (!t) return {};
    const { errorMap: e, invalid_type_error: n, required_error: r, description: a } = t;
    if (e && (n || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e
        ? { errorMap: e, description: a }
        : {
              errorMap: (i, o) => {
                  var l, u;
                  const { message: d } = t;
                  return i.code === 'invalid_enum_value'
                      ? { message: d ?? o.defaultError }
                      : typeof o.data > 'u'
                      ? { message: (l = d ?? r) !== null && l !== void 0 ? l : o.defaultError }
                      : i.code !== 'invalid_type'
                      ? { message: o.defaultError }
                      : { message: (u = d ?? n) !== null && u !== void 0 ? u : o.defaultError };
              },
              description: a
          };
}
class Y {
    get description() {
        return this._def.description;
    }
    _getType(e) {
        return ut(e.data);
    }
    _getOrReturnCtx(e, n) {
        return n || { common: e.parent.common, data: e.data, parsedType: ut(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent };
    }
    _processInputParams(e) {
        return { status: new Ie(), ctx: { common: e.parent.common, data: e.data, parsedType: ut(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent } };
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (Qt(n)) throw new Error('Synchronous parse encountered promise.');
        return n;
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n);
    }
    parse(e, n) {
        const r = this.safeParse(e, n);
        if (r.success) return r.data;
        throw r.error;
    }
    safeParse(e, n) {
        var r;
        const a = {
                common: { issues: [], async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1, contextualErrorMap: n == null ? void 0 : n.errorMap },
                path: (n == null ? void 0 : n.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: ut(e)
            },
            s = this._parseSync({ data: e, path: a.path, parent: a });
        return ja(a, s);
    }
    '~validate'(e) {
        var n, r;
        const a = { common: { issues: [], async: !!this['~standard'].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: ut(e) };
        if (!this['~standard'].async)
            try {
                const s = this._parseSync({ data: e, path: [], parent: a });
                return xt(s) ? { value: s.value } : { issues: a.common.issues };
            } catch (s) {
                !((r = (n = s == null ? void 0 : s.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || r === void 0) && r.includes('encountered') && (this['~standard'].async = !0), (a.common = { issues: [], async: !0 });
            }
        return this._parseAsync({ data: e, path: [], parent: a }).then((s) => (xt(s) ? { value: s.value } : { issues: a.common.issues }));
    }
    async parseAsync(e, n) {
        const r = await this.safeParseAsync(e, n);
        if (r.success) return r.data;
        throw r.error;
    }
    async safeParseAsync(e, n) {
        const r = { common: { issues: [], contextualErrorMap: n == null ? void 0 : n.errorMap, async: !0 }, path: (n == null ? void 0 : n.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: ut(e) },
            a = this._parse({ data: e, path: r.path, parent: r }),
            s = await (Qt(a) ? a : Promise.resolve(a));
        return ja(r, s);
    }
    refine(e, n) {
        const r = (a) => (typeof n == 'string' || typeof n > 'u' ? { message: n } : typeof n == 'function' ? n(a) : n);
        return this._refinement((a, s) => {
            const i = e(a),
                o = () => s.addIssue({ code: y.custom, ...r(a) });
            return typeof Promise < 'u' && i instanceof Promise ? i.then((l) => (l ? !0 : (o(), !1))) : i ? !0 : (o(), !1);
        });
    }
    refinement(e, n) {
        return this._refinement((r, a) => (e(r) ? !0 : (a.addIssue(typeof n == 'function' ? n(r, a) : n), !1)));
    }
    _refinement(e) {
        return new Xe({ schema: this, typeName: V.ZodEffects, effect: { type: 'refinement', refinement: e } });
    }
    superRefine(e) {
        return this._refinement(e);
    }
    constructor(e) {
        (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this['~standard'] = { version: 1, vendor: 'zod', validate: (n) => this['~validate'](n) });
    }
    optional() {
        return rt.create(this, this._def);
    }
    nullable() {
        return vt.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return Ke.create(this);
    }
    promise() {
        return Vt.create(this, this._def);
    }
    or(e) {
        return rn.create([this, e], this._def);
    }
    and(e) {
        return an.create(this, e, this._def);
    }
    transform(e) {
        return new Xe({ ...q(this._def), schema: this, typeName: V.ZodEffects, effect: { type: 'transform', transform: e } });
    }
    default(e) {
        const n = typeof e == 'function' ? e : () => e;
        return new Lt({ ...q(this._def), innerType: this, defaultValue: n, typeName: V.ZodDefault });
    }
    brand() {
        return new Kr({ typeName: V.ZodBranded, type: this, ...q(this._def) });
    }
    catch(e) {
        const n = typeof e == 'function' ? e : () => e;
        return new dn({ ...q(this._def), innerType: this, catchValue: n, typeName: V.ZodCatch });
    }
    describe(e) {
        const n = this.constructor;
        return new n({ ...this._def, description: e });
    }
    pipe(e) {
        return gn.create(this, e);
    }
    readonly() {
        return cn.create(this);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const kf = /^c[^\s-]{8,}$/i,
    Tf = /^[0-9a-z]+$/,
    xf = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    Sf = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    $f = /^[a-z0-9_-]{21}$/i,
    Of = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    Af =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    Cf = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    Ef = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let pr;
const If = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    Ff = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    Pf =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    jf =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    Rf = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    Mf = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    js = '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
    Nf = new RegExp(`^${js}$`);
function Rs(t) {
    let e = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
    return t.precision ? (e = `${e}\\.\\d{${t.precision}}`) : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Df(t) {
    return new RegExp(`^${Rs(t)}$`);
}
function Ms(t) {
    let e = `${js}T${Rs(t)}`;
    const n = [];
    return n.push(t.local ? 'Z?' : 'Z'), t.offset && n.push('([+-]\\d{2}:?\\d{2})'), (e = `${e}(${n.join('|')})`), new RegExp(`^${e}$`);
}
function Vf(t, e) {
    return !!(((e === 'v4' || !e) && If.test(t)) || ((e === 'v6' || !e) && Pf.test(t)));
}
function Lf(t, e) {
    if (!Of.test(t)) return !1;
    try {
        const [n] = t.split('.'),
            r = n
                .replace(/-/g, '+')
                .replace(/_/g, '/')
                .padEnd(n.length + ((4 - (n.length % 4)) % 4), '='),
            a = JSON.parse(atob(r));
        return !(typeof a != 'object' || a === null || !a.typ || !a.alg || (e && a.alg !== e));
    } catch {
        return !1;
    }
}
function Zf(t, e) {
    return !!(((e === 'v4' || !e) && Ff.test(t)) || ((e === 'v6' || !e) && jf.test(t)));
}
class Ge extends Y {
    _parse(e) {
        if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== O.string)) {
            const s = this._getOrReturnCtx(e);
            return k(s, { code: y.invalid_type, expected: O.string, received: s.parsedType }), z;
        }
        const r = new Ie();
        let a;
        for (const s of this._def.checks)
            if (s.kind === 'min') e.data.length < s.value && ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.too_small, minimum: s.value, type: 'string', inclusive: !0, exact: !1, message: s.message }), r.dirty());
            else if (s.kind === 'max') e.data.length > s.value && ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.too_big, maximum: s.value, type: 'string', inclusive: !0, exact: !1, message: s.message }), r.dirty());
            else if (s.kind === 'length') {
                const i = e.data.length > s.value,
                    o = e.data.length < s.value;
                (i || o) &&
                    ((a = this._getOrReturnCtx(e, a)),
                    i ? k(a, { code: y.too_big, maximum: s.value, type: 'string', inclusive: !0, exact: !0, message: s.message }) : o && k(a, { code: y.too_small, minimum: s.value, type: 'string', inclusive: !0, exact: !0, message: s.message }),
                    r.dirty());
            } else if (s.kind === 'email') Cf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'email', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'emoji') pr || (pr = new RegExp(Ef, 'u')), pr.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'emoji', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'uuid') Sf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'uuid', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'nanoid') $f.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'nanoid', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'cuid') kf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'cuid', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'cuid2') Tf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'cuid2', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'ulid') xf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'ulid', code: y.invalid_string, message: s.message }), r.dirty());
            else if (s.kind === 'url')
                try {
                    new URL(e.data);
                } catch {
                    (a = this._getOrReturnCtx(e, a)), k(a, { validation: 'url', code: y.invalid_string, message: s.message }), r.dirty();
                }
            else
                s.kind === 'regex'
                    ? ((s.regex.lastIndex = 0), s.regex.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'regex', code: y.invalid_string, message: s.message }), r.dirty()))
                    : s.kind === 'trim'
                    ? (e.data = e.data.trim())
                    : s.kind === 'includes'
                    ? e.data.includes(s.value, s.position) || ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.invalid_string, validation: { includes: s.value, position: s.position }, message: s.message }), r.dirty())
                    : s.kind === 'toLowerCase'
                    ? (e.data = e.data.toLowerCase())
                    : s.kind === 'toUpperCase'
                    ? (e.data = e.data.toUpperCase())
                    : s.kind === 'startsWith'
                    ? e.data.startsWith(s.value) || ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.invalid_string, validation: { startsWith: s.value }, message: s.message }), r.dirty())
                    : s.kind === 'endsWith'
                    ? e.data.endsWith(s.value) || ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.invalid_string, validation: { endsWith: s.value }, message: s.message }), r.dirty())
                    : s.kind === 'datetime'
                    ? Ms(s).test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.invalid_string, validation: 'datetime', message: s.message }), r.dirty())
                    : s.kind === 'date'
                    ? Nf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.invalid_string, validation: 'date', message: s.message }), r.dirty())
                    : s.kind === 'time'
                    ? Df(s).test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.invalid_string, validation: 'time', message: s.message }), r.dirty())
                    : s.kind === 'duration'
                    ? Af.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'duration', code: y.invalid_string, message: s.message }), r.dirty())
                    : s.kind === 'ip'
                    ? Vf(e.data, s.version) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'ip', code: y.invalid_string, message: s.message }), r.dirty())
                    : s.kind === 'jwt'
                    ? Lf(e.data, s.alg) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'jwt', code: y.invalid_string, message: s.message }), r.dirty())
                    : s.kind === 'cidr'
                    ? Zf(e.data, s.version) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'cidr', code: y.invalid_string, message: s.message }), r.dirty())
                    : s.kind === 'base64'
                    ? Rf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'base64', code: y.invalid_string, message: s.message }), r.dirty())
                    : s.kind === 'base64url'
                    ? Mf.test(e.data) || ((a = this._getOrReturnCtx(e, a)), k(a, { validation: 'base64url', code: y.invalid_string, message: s.message }), r.dirty())
                    : te.assertNever(s);
        return { status: r.value, value: e.data };
    }
    _regex(e, n, r) {
        return this.refinement((a) => e.test(a), { validation: n, code: y.invalid_string, ...E.errToObj(r) });
    }
    _addCheck(e) {
        return new Ge({ ...this._def, checks: [...this._def.checks, e] });
    }
    email(e) {
        return this._addCheck({ kind: 'email', ...E.errToObj(e) });
    }
    url(e) {
        return this._addCheck({ kind: 'url', ...E.errToObj(e) });
    }
    emoji(e) {
        return this._addCheck({ kind: 'emoji', ...E.errToObj(e) });
    }
    uuid(e) {
        return this._addCheck({ kind: 'uuid', ...E.errToObj(e) });
    }
    nanoid(e) {
        return this._addCheck({ kind: 'nanoid', ...E.errToObj(e) });
    }
    cuid(e) {
        return this._addCheck({ kind: 'cuid', ...E.errToObj(e) });
    }
    cuid2(e) {
        return this._addCheck({ kind: 'cuid2', ...E.errToObj(e) });
    }
    ulid(e) {
        return this._addCheck({ kind: 'ulid', ...E.errToObj(e) });
    }
    base64(e) {
        return this._addCheck({ kind: 'base64', ...E.errToObj(e) });
    }
    base64url(e) {
        return this._addCheck({ kind: 'base64url', ...E.errToObj(e) });
    }
    jwt(e) {
        return this._addCheck({ kind: 'jwt', ...E.errToObj(e) });
    }
    ip(e) {
        return this._addCheck({ kind: 'ip', ...E.errToObj(e) });
    }
    cidr(e) {
        return this._addCheck({ kind: 'cidr', ...E.errToObj(e) });
    }
    datetime(e) {
        var n, r;
        return typeof e == 'string'
            ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: e })
            : this._addCheck({
                  kind: 'datetime',
                  precision: typeof (e == null ? void 0 : e.precision) > 'u' ? null : e == null ? void 0 : e.precision,
                  offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
                  local: (r = e == null ? void 0 : e.local) !== null && r !== void 0 ? r : !1,
                  ...E.errToObj(e == null ? void 0 : e.message)
              });
    }
    date(e) {
        return this._addCheck({ kind: 'date', message: e });
    }
    time(e) {
        return typeof e == 'string'
            ? this._addCheck({ kind: 'time', precision: null, message: e })
            : this._addCheck({ kind: 'time', precision: typeof (e == null ? void 0 : e.precision) > 'u' ? null : e == null ? void 0 : e.precision, ...E.errToObj(e == null ? void 0 : e.message) });
    }
    duration(e) {
        return this._addCheck({ kind: 'duration', ...E.errToObj(e) });
    }
    regex(e, n) {
        return this._addCheck({ kind: 'regex', regex: e, ...E.errToObj(n) });
    }
    includes(e, n) {
        return this._addCheck({ kind: 'includes', value: e, position: n == null ? void 0 : n.position, ...E.errToObj(n == null ? void 0 : n.message) });
    }
    startsWith(e, n) {
        return this._addCheck({ kind: 'startsWith', value: e, ...E.errToObj(n) });
    }
    endsWith(e, n) {
        return this._addCheck({ kind: 'endsWith', value: e, ...E.errToObj(n) });
    }
    min(e, n) {
        return this._addCheck({ kind: 'min', value: e, ...E.errToObj(n) });
    }
    max(e, n) {
        return this._addCheck({ kind: 'max', value: e, ...E.errToObj(n) });
    }
    length(e, n) {
        return this._addCheck({ kind: 'length', value: e, ...E.errToObj(n) });
    }
    nonempty(e) {
        return this.min(1, E.errToObj(e));
    }
    trim() {
        return new Ge({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
    }
    toLowerCase() {
        return new Ge({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
    }
    toUpperCase() {
        return new Ge({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
    }
    get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === 'datetime');
    }
    get isDate() {
        return !!this._def.checks.find((e) => e.kind === 'date');
    }
    get isTime() {
        return !!this._def.checks.find((e) => e.kind === 'time');
    }
    get isDuration() {
        return !!this._def.checks.find((e) => e.kind === 'duration');
    }
    get isEmail() {
        return !!this._def.checks.find((e) => e.kind === 'email');
    }
    get isURL() {
        return !!this._def.checks.find((e) => e.kind === 'url');
    }
    get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === 'emoji');
    }
    get isUUID() {
        return !!this._def.checks.find((e) => e.kind === 'uuid');
    }
    get isNANOID() {
        return !!this._def.checks.find((e) => e.kind === 'nanoid');
    }
    get isCUID() {
        return !!this._def.checks.find((e) => e.kind === 'cuid');
    }
    get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === 'cuid2');
    }
    get isULID() {
        return !!this._def.checks.find((e) => e.kind === 'ulid');
    }
    get isIP() {
        return !!this._def.checks.find((e) => e.kind === 'ip');
    }
    get isCIDR() {
        return !!this._def.checks.find((e) => e.kind === 'cidr');
    }
    get isBase64() {
        return !!this._def.checks.find((e) => e.kind === 'base64');
    }
    get isBase64url() {
        return !!this._def.checks.find((e) => e.kind === 'base64url');
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'min' && (e === null || n.value > e) && (e = n.value);
        return e;
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
        return e;
    }
}
Ge.create = (t) => {
    var e;
    return new Ge({ checks: [], typeName: V.ZodString, coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1, ...q(t) });
};
function Bf(t, e) {
    const n = (t.toString().split('.')[1] || '').length,
        r = (e.toString().split('.')[1] || '').length,
        a = n > r ? n : r,
        s = parseInt(t.toFixed(a).replace('.', '')),
        i = parseInt(e.toFixed(a).replace('.', ''));
    return (s % i) / Math.pow(10, a);
}
class mt extends Y {
    constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
    }
    _parse(e) {
        if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== O.number)) {
            const s = this._getOrReturnCtx(e);
            return k(s, { code: y.invalid_type, expected: O.number, received: s.parsedType }), z;
        }
        let r;
        const a = new Ie();
        for (const s of this._def.checks)
            s.kind === 'int'
                ? te.isInteger(e.data) || ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.invalid_type, expected: 'integer', received: 'float', message: s.message }), a.dirty())
                : s.kind === 'min'
                ? (s.inclusive ? e.data < s.value : e.data <= s.value) && ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.too_small, minimum: s.value, type: 'number', inclusive: s.inclusive, exact: !1, message: s.message }), a.dirty())
                : s.kind === 'max'
                ? (s.inclusive ? e.data > s.value : e.data >= s.value) && ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.too_big, maximum: s.value, type: 'number', inclusive: s.inclusive, exact: !1, message: s.message }), a.dirty())
                : s.kind === 'multipleOf'
                ? Bf(e.data, s.value) !== 0 && ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.not_multiple_of, multipleOf: s.value, message: s.message }), a.dirty())
                : s.kind === 'finite'
                ? Number.isFinite(e.data) || ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.not_finite, message: s.message }), a.dirty())
                : te.assertNever(s);
        return { status: a.value, value: e.data };
    }
    gte(e, n) {
        return this.setLimit('min', e, !0, E.toString(n));
    }
    gt(e, n) {
        return this.setLimit('min', e, !1, E.toString(n));
    }
    lte(e, n) {
        return this.setLimit('max', e, !0, E.toString(n));
    }
    lt(e, n) {
        return this.setLimit('max', e, !1, E.toString(n));
    }
    setLimit(e, n, r, a) {
        return new mt({ ...this._def, checks: [...this._def.checks, { kind: e, value: n, inclusive: r, message: E.toString(a) }] });
    }
    _addCheck(e) {
        return new mt({ ...this._def, checks: [...this._def.checks, e] });
    }
    int(e) {
        return this._addCheck({ kind: 'int', message: E.toString(e) });
    }
    positive(e) {
        return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: E.toString(e) });
    }
    negative(e) {
        return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: E.toString(e) });
    }
    nonpositive(e) {
        return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: E.toString(e) });
    }
    nonnegative(e) {
        return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: E.toString(e) });
    }
    multipleOf(e, n) {
        return this._addCheck({ kind: 'multipleOf', value: e, message: E.toString(n) });
    }
    finite(e) {
        return this._addCheck({ kind: 'finite', message: E.toString(e) });
    }
    safe(e) {
        return this._addCheck({ kind: 'min', inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: E.toString(e) })._addCheck({ kind: 'max', inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: E.toString(e) });
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'min' && (e === null || n.value > e) && (e = n.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
        return e;
    }
    get isInt() {
        return !!this._def.checks.find((e) => e.kind === 'int' || (e.kind === 'multipleOf' && te.isInteger(e.value)));
    }
    get isFinite() {
        let e = null,
            n = null;
        for (const r of this._def.checks) {
            if (r.kind === 'finite' || r.kind === 'int' || r.kind === 'multipleOf') return !0;
            r.kind === 'min' ? (n === null || r.value > n) && (n = r.value) : r.kind === 'max' && (e === null || r.value < e) && (e = r.value);
        }
        return Number.isFinite(n) && Number.isFinite(e);
    }
}
mt.create = (t) => new mt({ checks: [], typeName: V.ZodNumber, coerce: (t == null ? void 0 : t.coerce) || !1, ...q(t) });
class _t extends Y {
    constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data);
            } catch {
                return this._getInvalidInput(e);
            }
        if (this._getType(e) !== O.bigint) return this._getInvalidInput(e);
        let r;
        const a = new Ie();
        for (const s of this._def.checks)
            s.kind === 'min'
                ? (s.inclusive ? e.data < s.value : e.data <= s.value) && ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.too_small, type: 'bigint', minimum: s.value, inclusive: s.inclusive, message: s.message }), a.dirty())
                : s.kind === 'max'
                ? (s.inclusive ? e.data > s.value : e.data >= s.value) && ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.too_big, type: 'bigint', maximum: s.value, inclusive: s.inclusive, message: s.message }), a.dirty())
                : s.kind === 'multipleOf'
                ? e.data % s.value !== BigInt(0) && ((r = this._getOrReturnCtx(e, r)), k(r, { code: y.not_multiple_of, multipleOf: s.value, message: s.message }), a.dirty())
                : te.assertNever(s);
        return { status: a.value, value: e.data };
    }
    _getInvalidInput(e) {
        const n = this._getOrReturnCtx(e);
        return k(n, { code: y.invalid_type, expected: O.bigint, received: n.parsedType }), z;
    }
    gte(e, n) {
        return this.setLimit('min', e, !0, E.toString(n));
    }
    gt(e, n) {
        return this.setLimit('min', e, !1, E.toString(n));
    }
    lte(e, n) {
        return this.setLimit('max', e, !0, E.toString(n));
    }
    lt(e, n) {
        return this.setLimit('max', e, !1, E.toString(n));
    }
    setLimit(e, n, r, a) {
        return new _t({ ...this._def, checks: [...this._def.checks, { kind: e, value: n, inclusive: r, message: E.toString(a) }] });
    }
    _addCheck(e) {
        return new _t({ ...this._def, checks: [...this._def.checks, e] });
    }
    positive(e) {
        return this._addCheck({ kind: 'min', value: BigInt(0), inclusive: !1, message: E.toString(e) });
    }
    negative(e) {
        return this._addCheck({ kind: 'max', value: BigInt(0), inclusive: !1, message: E.toString(e) });
    }
    nonpositive(e) {
        return this._addCheck({ kind: 'max', value: BigInt(0), inclusive: !0, message: E.toString(e) });
    }
    nonnegative(e) {
        return this._addCheck({ kind: 'min', value: BigInt(0), inclusive: !0, message: E.toString(e) });
    }
    multipleOf(e, n) {
        return this._addCheck({ kind: 'multipleOf', value: e, message: E.toString(n) });
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'min' && (e === null || n.value > e) && (e = n.value);
        return e;
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
        return e;
    }
}
_t.create = (t) => {
    var e;
    return new _t({ checks: [], typeName: V.ZodBigInt, coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1, ...q(t) });
};
class en extends Y {
    _parse(e) {
        if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== O.boolean)) {
            const r = this._getOrReturnCtx(e);
            return k(r, { code: y.invalid_type, expected: O.boolean, received: r.parsedType }), z;
        }
        return Re(e.data);
    }
}
en.create = (t) => new en({ typeName: V.ZodBoolean, coerce: (t == null ? void 0 : t.coerce) || !1, ...q(t) });
class St extends Y {
    _parse(e) {
        if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== O.date)) {
            const s = this._getOrReturnCtx(e);
            return k(s, { code: y.invalid_type, expected: O.date, received: s.parsedType }), z;
        }
        if (isNaN(e.data.getTime())) {
            const s = this._getOrReturnCtx(e);
            return k(s, { code: y.invalid_date }), z;
        }
        const r = new Ie();
        let a;
        for (const s of this._def.checks)
            s.kind === 'min'
                ? e.data.getTime() < s.value && ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.too_small, message: s.message, inclusive: !0, exact: !1, minimum: s.value, type: 'date' }), r.dirty())
                : s.kind === 'max'
                ? e.data.getTime() > s.value && ((a = this._getOrReturnCtx(e, a)), k(a, { code: y.too_big, message: s.message, inclusive: !0, exact: !1, maximum: s.value, type: 'date' }), r.dirty())
                : te.assertNever(s);
        return { status: r.value, value: new Date(e.data.getTime()) };
    }
    _addCheck(e) {
        return new St({ ...this._def, checks: [...this._def.checks, e] });
    }
    min(e, n) {
        return this._addCheck({ kind: 'min', value: e.getTime(), message: E.toString(n) });
    }
    max(e, n) {
        return this._addCheck({ kind: 'max', value: e.getTime(), message: E.toString(n) });
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'min' && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null;
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks) n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null;
    }
}
St.create = (t) => new St({ checks: [], coerce: (t == null ? void 0 : t.coerce) || !1, typeName: V.ZodDate, ...q(t) });
class Mn extends Y {
    _parse(e) {
        if (this._getType(e) !== O.symbol) {
            const r = this._getOrReturnCtx(e);
            return k(r, { code: y.invalid_type, expected: O.symbol, received: r.parsedType }), z;
        }
        return Re(e.data);
    }
}
Mn.create = (t) => new Mn({ typeName: V.ZodSymbol, ...q(t) });
class tn extends Y {
    _parse(e) {
        if (this._getType(e) !== O.undefined) {
            const r = this._getOrReturnCtx(e);
            return k(r, { code: y.invalid_type, expected: O.undefined, received: r.parsedType }), z;
        }
        return Re(e.data);
    }
}
tn.create = (t) => new tn({ typeName: V.ZodUndefined, ...q(t) });
class nn extends Y {
    _parse(e) {
        if (this._getType(e) !== O.null) {
            const r = this._getOrReturnCtx(e);
            return k(r, { code: y.invalid_type, expected: O.null, received: r.parsedType }), z;
        }
        return Re(e.data);
    }
}
nn.create = (t) => new nn({ typeName: V.ZodNull, ...q(t) });
class Dt extends Y {
    constructor() {
        super(...arguments), (this._any = !0);
    }
    _parse(e) {
        return Re(e.data);
    }
}
Dt.create = (t) => new Dt({ typeName: V.ZodAny, ...q(t) });
class wt extends Y {
    constructor() {
        super(...arguments), (this._unknown = !0);
    }
    _parse(e) {
        return Re(e.data);
    }
}
wt.create = (t) => new wt({ typeName: V.ZodUnknown, ...q(t) });
class dt extends Y {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return k(n, { code: y.invalid_type, expected: O.never, received: n.parsedType }), z;
    }
}
dt.create = (t) => new dt({ typeName: V.ZodNever, ...q(t) });
class Nn extends Y {
    _parse(e) {
        if (this._getType(e) !== O.undefined) {
            const r = this._getOrReturnCtx(e);
            return k(r, { code: y.invalid_type, expected: O.void, received: r.parsedType }), z;
        }
        return Re(e.data);
    }
}
Nn.create = (t) => new Nn({ typeName: V.ZodVoid, ...q(t) });
class Ke extends Y {
    _parse(e) {
        const { ctx: n, status: r } = this._processInputParams(e),
            a = this._def;
        if (n.parsedType !== O.array) return k(n, { code: y.invalid_type, expected: O.array, received: n.parsedType }), z;
        if (a.exactLength !== null) {
            const i = n.data.length > a.exactLength.value,
                o = n.data.length < a.exactLength.value;
            (i || o) && (k(n, { code: i ? y.too_big : y.too_small, minimum: o ? a.exactLength.value : void 0, maximum: i ? a.exactLength.value : void 0, type: 'array', inclusive: !0, exact: !0, message: a.exactLength.message }), r.dirty());
        }
        if (
            (a.minLength !== null && n.data.length < a.minLength.value && (k(n, { code: y.too_small, minimum: a.minLength.value, type: 'array', inclusive: !0, exact: !1, message: a.minLength.message }), r.dirty()),
            a.maxLength !== null && n.data.length > a.maxLength.value && (k(n, { code: y.too_big, maximum: a.maxLength.value, type: 'array', inclusive: !0, exact: !1, message: a.maxLength.message }), r.dirty()),
            n.common.async)
        )
            return Promise.all([...n.data].map((i, o) => a.type._parseAsync(new st(n, i, n.path, o)))).then((i) => Ie.mergeArray(r, i));
        const s = [...n.data].map((i, o) => a.type._parseSync(new st(n, i, n.path, o)));
        return Ie.mergeArray(r, s);
    }
    get element() {
        return this._def.type;
    }
    min(e, n) {
        return new Ke({ ...this._def, minLength: { value: e, message: E.toString(n) } });
    }
    max(e, n) {
        return new Ke({ ...this._def, maxLength: { value: e, message: E.toString(n) } });
    }
    length(e, n) {
        return new Ke({ ...this._def, exactLength: { value: e, message: E.toString(n) } });
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
Ke.create = (t, e) => new Ke({ type: t, minLength: null, maxLength: null, exactLength: null, typeName: V.ZodArray, ...q(e) });
function Et(t) {
    if (t instanceof fe) {
        const e = {};
        for (const n in t.shape) {
            const r = t.shape[n];
            e[n] = rt.create(Et(r));
        }
        return new fe({ ...t._def, shape: () => e });
    } else return t instanceof Ke ? new Ke({ ...t._def, type: Et(t.element) }) : t instanceof rt ? rt.create(Et(t.unwrap())) : t instanceof vt ? vt.create(Et(t.unwrap())) : t instanceof it ? it.create(t.items.map((e) => Et(e))) : t;
}
class fe extends Y {
    constructor() {
        super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend);
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const e = this._def.shape(),
            n = te.objectKeys(e);
        return (this._cached = { shape: e, keys: n });
    }
    _parse(e) {
        if (this._getType(e) !== O.object) {
            const u = this._getOrReturnCtx(e);
            return k(u, { code: y.invalid_type, expected: O.object, received: u.parsedType }), z;
        }
        const { status: r, ctx: a } = this._processInputParams(e),
            { shape: s, keys: i } = this._getCached(),
            o = [];
        if (!(this._def.catchall instanceof dt && this._def.unknownKeys === 'strip')) for (const u in a.data) i.includes(u) || o.push(u);
        const l = [];
        for (const u of i) {
            const d = s[u],
                c = a.data[u];
            l.push({ key: { status: 'valid', value: u }, value: d._parse(new st(a, c, a.path, u)), alwaysSet: u in a.data });
        }
        if (this._def.catchall instanceof dt) {
            const u = this._def.unknownKeys;
            if (u === 'passthrough') for (const d of o) l.push({ key: { status: 'valid', value: d }, value: { status: 'valid', value: a.data[d] } });
            else if (u === 'strict') o.length > 0 && (k(a, { code: y.unrecognized_keys, keys: o }), r.dirty());
            else if (u !== 'strip') throw new Error('Internal ZodObject error: invalid unknownKeys value.');
        } else {
            const u = this._def.catchall;
            for (const d of o) {
                const c = a.data[d];
                l.push({ key: { status: 'valid', value: d }, value: u._parse(new st(a, c, a.path, d)), alwaysSet: d in a.data });
            }
        }
        return a.common.async
            ? Promise.resolve()
                  .then(async () => {
                      const u = [];
                      for (const d of l) {
                          const c = await d.key,
                              h = await d.value;
                          u.push({ key: c, value: h, alwaysSet: d.alwaysSet });
                      }
                      return u;
                  })
                  .then((u) => Ie.mergeObjectSync(r, u))
            : Ie.mergeObjectSync(r, l);
    }
    get shape() {
        return this._def.shape();
    }
    strict(e) {
        return (
            E.errToObj,
            new fe({
                ...this._def,
                unknownKeys: 'strict',
                ...(e !== void 0
                    ? {
                          errorMap: (n, r) => {
                              var a, s, i, o;
                              const l = (i = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
                              return n.code === 'unrecognized_keys' ? { message: (o = E.errToObj(e).message) !== null && o !== void 0 ? o : l } : { message: l };
                          }
                      }
                    : {})
            })
        );
    }
    strip() {
        return new fe({ ...this._def, unknownKeys: 'strip' });
    }
    passthrough() {
        return new fe({ ...this._def, unknownKeys: 'passthrough' });
    }
    extend(e) {
        return new fe({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
    }
    merge(e) {
        return new fe({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => ({ ...this._def.shape(), ...e._def.shape() }), typeName: V.ZodObject });
    }
    setKey(e, n) {
        return this.augment({ [e]: n });
    }
    catchall(e) {
        return new fe({ ...this._def, catchall: e });
    }
    pick(e) {
        const n = {};
        return (
            te.objectKeys(e).forEach((r) => {
                e[r] && this.shape[r] && (n[r] = this.shape[r]);
            }),
            new fe({ ...this._def, shape: () => n })
        );
    }
    omit(e) {
        const n = {};
        return (
            te.objectKeys(this.shape).forEach((r) => {
                e[r] || (n[r] = this.shape[r]);
            }),
            new fe({ ...this._def, shape: () => n })
        );
    }
    deepPartial() {
        return Et(this);
    }
    partial(e) {
        const n = {};
        return (
            te.objectKeys(this.shape).forEach((r) => {
                const a = this.shape[r];
                e && !e[r] ? (n[r] = a) : (n[r] = a.optional());
            }),
            new fe({ ...this._def, shape: () => n })
        );
    }
    required(e) {
        const n = {};
        return (
            te.objectKeys(this.shape).forEach((r) => {
                if (e && !e[r]) n[r] = this.shape[r];
                else {
                    let s = this.shape[r];
                    for (; s instanceof rt; ) s = s._def.innerType;
                    n[r] = s;
                }
            }),
            new fe({ ...this._def, shape: () => n })
        );
    }
    keyof() {
        return Ns(te.objectKeys(this.shape));
    }
}
fe.create = (t, e) => new fe({ shape: () => t, unknownKeys: 'strip', catchall: dt.create(), typeName: V.ZodObject, ...q(e) });
fe.strictCreate = (t, e) => new fe({ shape: () => t, unknownKeys: 'strict', catchall: dt.create(), typeName: V.ZodObject, ...q(e) });
fe.lazycreate = (t, e) => new fe({ shape: t, unknownKeys: 'strip', catchall: dt.create(), typeName: V.ZodObject, ...q(e) });
class rn extends Y {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e),
            r = this._def.options;
        function a(s) {
            for (const o of s) if (o.result.status === 'valid') return o.result;
            for (const o of s) if (o.result.status === 'dirty') return n.common.issues.push(...o.ctx.common.issues), o.result;
            const i = s.map((o) => new Be(o.ctx.common.issues));
            return k(n, { code: y.invalid_union, unionErrors: i }), z;
        }
        if (n.common.async)
            return Promise.all(
                r.map(async (s) => {
                    const i = { ...n, common: { ...n.common, issues: [] }, parent: null };
                    return { result: await s._parseAsync({ data: n.data, path: n.path, parent: i }), ctx: i };
                })
            ).then(a);
        {
            let s;
            const i = [];
            for (const l of r) {
                const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
                    d = l._parseSync({ data: n.data, path: n.path, parent: u });
                if (d.status === 'valid') return d;
                d.status === 'dirty' && !s && (s = { result: d, ctx: u }), u.common.issues.length && i.push(u.common.issues);
            }
            if (s) return n.common.issues.push(...s.ctx.common.issues), s.result;
            const o = i.map((l) => new Be(l));
            return k(n, { code: y.invalid_union, unionErrors: o }), z;
        }
    }
    get options() {
        return this._def.options;
    }
}
rn.create = (t, e) => new rn({ options: t, typeName: V.ZodUnion, ...q(e) });
const lt = (t) =>
    t instanceof on
        ? lt(t.schema)
        : t instanceof Xe
        ? lt(t.innerType())
        : t instanceof ln
        ? [t.value]
        : t instanceof gt
        ? t.options
        : t instanceof un
        ? te.objectValues(t.enum)
        : t instanceof Lt
        ? lt(t._def.innerType)
        : t instanceof tn
        ? [void 0]
        : t instanceof nn
        ? [null]
        : t instanceof rt
        ? [void 0, ...lt(t.unwrap())]
        : t instanceof vt
        ? [null, ...lt(t.unwrap())]
        : t instanceof Kr || t instanceof cn
        ? lt(t.unwrap())
        : t instanceof dn
        ? lt(t._def.innerType)
        : [];
class Xn extends Y {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        if (n.parsedType !== O.object) return k(n, { code: y.invalid_type, expected: O.object, received: n.parsedType }), z;
        const r = this.discriminator,
            a = n.data[r],
            s = this.optionsMap.get(a);
        return s ? (n.common.async ? s._parseAsync({ data: n.data, path: n.path, parent: n }) : s._parseSync({ data: n.data, path: n.path, parent: n })) : (k(n, { code: y.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [r] }), z);
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    static create(e, n, r) {
        const a = new Map();
        for (const s of n) {
            const i = lt(s.shape[e]);
            if (!i.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const o of i) {
                if (a.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
                a.set(o, s);
            }
        }
        return new Xn({ typeName: V.ZodDiscriminatedUnion, discriminator: e, options: n, optionsMap: a, ...q(r) });
    }
}
function Ir(t, e) {
    const n = ut(t),
        r = ut(e);
    if (t === e) return { valid: !0, data: t };
    if (n === O.object && r === O.object) {
        const a = te.objectKeys(e),
            s = te.objectKeys(t).filter((o) => a.indexOf(o) !== -1),
            i = { ...t, ...e };
        for (const o of s) {
            const l = Ir(t[o], e[o]);
            if (!l.valid) return { valid: !1 };
            i[o] = l.data;
        }
        return { valid: !0, data: i };
    } else if (n === O.array && r === O.array) {
        if (t.length !== e.length) return { valid: !1 };
        const a = [];
        for (let s = 0; s < t.length; s++) {
            const i = t[s],
                o = e[s],
                l = Ir(i, o);
            if (!l.valid) return { valid: !1 };
            a.push(l.data);
        }
        return { valid: !0, data: a };
    } else return n === O.date && r === O.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class an extends Y {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e),
            a = (s, i) => {
                if (Cr(s) || Cr(i)) return z;
                const o = Ir(s.value, i.value);
                return o.valid ? ((Er(s) || Er(i)) && n.dirty(), { status: n.value, value: o.data }) : (k(r, { code: y.invalid_intersection_types }), z);
            };
        return r.common.async
            ? Promise.all([this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }), this._def.right._parseAsync({ data: r.data, path: r.path, parent: r })]).then(([s, i]) => a(s, i))
            : a(this._def.left._parseSync({ data: r.data, path: r.path, parent: r }), this._def.right._parseSync({ data: r.data, path: r.path, parent: r }));
    }
}
an.create = (t, e, n) => new an({ left: t, right: e, typeName: V.ZodIntersection, ...q(n) });
class it extends Y {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== O.array) return k(r, { code: y.invalid_type, expected: O.array, received: r.parsedType }), z;
        if (r.data.length < this._def.items.length) return k(r, { code: y.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: 'array' }), z;
        !this._def.rest && r.data.length > this._def.items.length && (k(r, { code: y.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: 'array' }), n.dirty());
        const s = [...r.data]
            .map((i, o) => {
                const l = this._def.items[o] || this._def.rest;
                return l ? l._parse(new st(r, i, r.path, o)) : null;
            })
            .filter((i) => !!i);
        return r.common.async ? Promise.all(s).then((i) => Ie.mergeArray(n, i)) : Ie.mergeArray(n, s);
    }
    get items() {
        return this._def.items;
    }
    rest(e) {
        return new it({ ...this._def, rest: e });
    }
}
it.create = (t, e) => {
    if (!Array.isArray(t)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
    return new it({ items: t, typeName: V.ZodTuple, rest: null, ...q(e) });
};
class sn extends Y {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== O.object) return k(r, { code: y.invalid_type, expected: O.object, received: r.parsedType }), z;
        const a = [],
            s = this._def.keyType,
            i = this._def.valueType;
        for (const o in r.data) a.push({ key: s._parse(new st(r, o, r.path, o)), value: i._parse(new st(r, r.data[o], r.path, o)), alwaysSet: o in r.data });
        return r.common.async ? Ie.mergeObjectAsync(n, a) : Ie.mergeObjectSync(n, a);
    }
    get element() {
        return this._def.valueType;
    }
    static create(e, n, r) {
        return n instanceof Y ? new sn({ keyType: e, valueType: n, typeName: V.ZodRecord, ...q(r) }) : new sn({ keyType: Ge.create(), valueType: e, typeName: V.ZodRecord, ...q(n) });
    }
}
class Dn extends Y {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== O.map) return k(r, { code: y.invalid_type, expected: O.map, received: r.parsedType }), z;
        const a = this._def.keyType,
            s = this._def.valueType,
            i = [...r.data.entries()].map(([o, l], u) => ({ key: a._parse(new st(r, o, r.path, [u, 'key'])), value: s._parse(new st(r, l, r.path, [u, 'value'])) }));
        if (r.common.async) {
            const o = new Map();
            return Promise.resolve().then(async () => {
                for (const l of i) {
                    const u = await l.key,
                        d = await l.value;
                    if (u.status === 'aborted' || d.status === 'aborted') return z;
                    (u.status === 'dirty' || d.status === 'dirty') && n.dirty(), o.set(u.value, d.value);
                }
                return { status: n.value, value: o };
            });
        } else {
            const o = new Map();
            for (const l of i) {
                const u = l.key,
                    d = l.value;
                if (u.status === 'aborted' || d.status === 'aborted') return z;
                (u.status === 'dirty' || d.status === 'dirty') && n.dirty(), o.set(u.value, d.value);
            }
            return { status: n.value, value: o };
        }
    }
}
Dn.create = (t, e, n) => new Dn({ valueType: e, keyType: t, typeName: V.ZodMap, ...q(n) });
class $t extends Y {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== O.set) return k(r, { code: y.invalid_type, expected: O.set, received: r.parsedType }), z;
        const a = this._def;
        a.minSize !== null && r.data.size < a.minSize.value && (k(r, { code: y.too_small, minimum: a.minSize.value, type: 'set', inclusive: !0, exact: !1, message: a.minSize.message }), n.dirty()),
            a.maxSize !== null && r.data.size > a.maxSize.value && (k(r, { code: y.too_big, maximum: a.maxSize.value, type: 'set', inclusive: !0, exact: !1, message: a.maxSize.message }), n.dirty());
        const s = this._def.valueType;
        function i(l) {
            const u = new Set();
            for (const d of l) {
                if (d.status === 'aborted') return z;
                d.status === 'dirty' && n.dirty(), u.add(d.value);
            }
            return { status: n.value, value: u };
        }
        const o = [...r.data.values()].map((l, u) => s._parse(new st(r, l, r.path, u)));
        return r.common.async ? Promise.all(o).then((l) => i(l)) : i(o);
    }
    min(e, n) {
        return new $t({ ...this._def, minSize: { value: e, message: E.toString(n) } });
    }
    max(e, n) {
        return new $t({ ...this._def, maxSize: { value: e, message: E.toString(n) } });
    }
    size(e, n) {
        return this.min(e, n).max(e, n);
    }
    nonempty(e) {
        return this.min(1, e);
    }
}
$t.create = (t, e) => new $t({ valueType: t, minSize: null, maxSize: null, typeName: V.ZodSet, ...q(e) });
class jt extends Y {
    constructor() {
        super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        if (n.parsedType !== O.function) return k(n, { code: y.invalid_type, expected: O.function, received: n.parsedType }), z;
        function r(o, l) {
            return jn({ data: o, path: n.path, errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Pn(), Nt].filter((u) => !!u), issueData: { code: y.invalid_arguments, argumentsError: l } });
        }
        function a(o, l) {
            return jn({ data: o, path: n.path, errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Pn(), Nt].filter((u) => !!u), issueData: { code: y.invalid_return_type, returnTypeError: l } });
        }
        const s = { errorMap: n.common.contextualErrorMap },
            i = n.data;
        if (this._def.returns instanceof Vt) {
            const o = this;
            return Re(async function (...l) {
                const u = new Be([]),
                    d = await o._def.args.parseAsync(l, s).catch((g) => {
                        throw (u.addIssue(r(l, g)), u);
                    }),
                    c = await Reflect.apply(i, this, d);
                return await o._def.returns._def.type.parseAsync(c, s).catch((g) => {
                    throw (u.addIssue(a(c, g)), u);
                });
            });
        } else {
            const o = this;
            return Re(function (...l) {
                const u = o._def.args.safeParse(l, s);
                if (!u.success) throw new Be([r(l, u.error)]);
                const d = Reflect.apply(i, this, u.data),
                    c = o._def.returns.safeParse(d, s);
                if (!c.success) throw new Be([a(d, c.error)]);
                return c.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...e) {
        return new jt({ ...this._def, args: it.create(e).rest(wt.create()) });
    }
    returns(e) {
        return new jt({ ...this._def, returns: e });
    }
    implement(e) {
        return this.parse(e);
    }
    strictImplement(e) {
        return this.parse(e);
    }
    static create(e, n, r) {
        return new jt({ args: e || it.create([]).rest(wt.create()), returns: n || wt.create(), typeName: V.ZodFunction, ...q(r) });
    }
}
class on extends Y {
    get schema() {
        return this._def.getter();
    }
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
    }
}
on.create = (t, e) => new on({ getter: t, typeName: V.ZodLazy, ...q(e) });
class ln extends Y {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return k(n, { received: n.data, code: y.invalid_literal, expected: this._def.value }), z;
        }
        return { status: 'valid', value: e.data };
    }
    get value() {
        return this._def.value;
    }
}
ln.create = (t, e) => new ln({ value: t, typeName: V.ZodLiteral, ...q(e) });
function Ns(t, e) {
    return new gt({ values: t, typeName: V.ZodEnum, ...q(e) });
}
class gt extends Y {
    constructor() {
        super(...arguments), Gt.set(this, void 0);
    }
    _parse(e) {
        if (typeof e.data != 'string') {
            const n = this._getOrReturnCtx(e),
                r = this._def.values;
            return k(n, { expected: te.joinValues(r), received: n.parsedType, code: y.invalid_type }), z;
        }
        if ((Rn(this, Gt) || Ps(this, Gt, new Set(this._def.values)), !Rn(this, Gt).has(e.data))) {
            const n = this._getOrReturnCtx(e),
                r = this._def.values;
            return k(n, { received: n.data, code: y.invalid_enum_value, options: r }), z;
        }
        return Re(e.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const e = {};
        for (const n of this._def.values) e[n] = n;
        return e;
    }
    get Values() {
        const e = {};
        for (const n of this._def.values) e[n] = n;
        return e;
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values) e[n] = n;
        return e;
    }
    extract(e, n = this._def) {
        return gt.create(e, { ...this._def, ...n });
    }
    exclude(e, n = this._def) {
        return gt.create(
            this.options.filter((r) => !e.includes(r)),
            { ...this._def, ...n }
        );
    }
}
Gt = new WeakMap();
gt.create = Ns;
class un extends Y {
    constructor() {
        super(...arguments), Kt.set(this, void 0);
    }
    _parse(e) {
        const n = te.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
        if (r.parsedType !== O.string && r.parsedType !== O.number) {
            const a = te.objectValues(n);
            return k(r, { expected: te.joinValues(a), received: r.parsedType, code: y.invalid_type }), z;
        }
        if ((Rn(this, Kt) || Ps(this, Kt, new Set(te.getValidEnumValues(this._def.values))), !Rn(this, Kt).has(e.data))) {
            const a = te.objectValues(n);
            return k(r, { received: r.data, code: y.invalid_enum_value, options: a }), z;
        }
        return Re(e.data);
    }
    get enum() {
        return this._def.values;
    }
}
Kt = new WeakMap();
un.create = (t, e) => new un({ values: t, typeName: V.ZodNativeEnum, ...q(e) });
class Vt extends Y {
    unwrap() {
        return this._def.type;
    }
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        if (n.parsedType !== O.promise && n.common.async === !1) return k(n, { code: y.invalid_type, expected: O.promise, received: n.parsedType }), z;
        const r = n.parsedType === O.promise ? n.data : Promise.resolve(n.data);
        return Re(r.then((a) => this._def.type.parseAsync(a, { path: n.path, errorMap: n.common.contextualErrorMap })));
    }
}
Vt.create = (t, e) => new Vt({ type: t, typeName: V.ZodPromise, ...q(e) });
class Xe extends Y {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === V.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e),
            a = this._def.effect || null,
            s = {
                addIssue: (i) => {
                    k(r, i), i.fatal ? n.abort() : n.dirty();
                },
                get path() {
                    return r.path;
                }
            };
        if (((s.addIssue = s.addIssue.bind(s)), a.type === 'preprocess')) {
            const i = a.transform(r.data, s);
            if (r.common.async)
                return Promise.resolve(i).then(async (o) => {
                    if (n.value === 'aborted') return z;
                    const l = await this._def.schema._parseAsync({ data: o, path: r.path, parent: r });
                    return l.status === 'aborted' ? z : l.status === 'dirty' || n.value === 'dirty' ? Pt(l.value) : l;
                });
            {
                if (n.value === 'aborted') return z;
                const o = this._def.schema._parseSync({ data: i, path: r.path, parent: r });
                return o.status === 'aborted' ? z : o.status === 'dirty' || n.value === 'dirty' ? Pt(o.value) : o;
            }
        }
        if (a.type === 'refinement') {
            const i = (o) => {
                const l = a.refinement(o, s);
                if (r.common.async) return Promise.resolve(l);
                if (l instanceof Promise) throw new Error('Async refinement encountered during synchronous parse operation. Use .parseAsync instead.');
                return o;
            };
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
                return o.status === 'aborted' ? z : (o.status === 'dirty' && n.dirty(), i(o.value), { status: n.value, value: o.value });
            } else return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => (o.status === 'aborted' ? z : (o.status === 'dirty' && n.dirty(), i(o.value).then(() => ({ status: n.value, value: o.value })))));
        }
        if (a.type === 'transform')
            if (r.common.async === !1) {
                const i = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
                if (!xt(i)) return i;
                const o = a.transform(i.value, s);
                if (o instanceof Promise) throw new Error('Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.');
                return { status: n.value, value: o };
            } else return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => (xt(i) ? Promise.resolve(a.transform(i.value, s)).then((o) => ({ status: n.value, value: o })) : i));
        te.assertNever(a);
    }
}
Xe.create = (t, e, n) => new Xe({ schema: t, typeName: V.ZodEffects, effect: e, ...q(n) });
Xe.createWithPreprocess = (t, e, n) => new Xe({ schema: e, effect: { type: 'preprocess', transform: t }, typeName: V.ZodEffects, ...q(n) });
class rt extends Y {
    _parse(e) {
        return this._getType(e) === O.undefined ? Re(void 0) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
rt.create = (t, e) => new rt({ innerType: t, typeName: V.ZodOptional, ...q(e) });
class vt extends Y {
    _parse(e) {
        return this._getType(e) === O.null ? Re(null) : this._def.innerType._parse(e);
    }
    unwrap() {
        return this._def.innerType;
    }
}
vt.create = (t, e) => new vt({ innerType: t, typeName: V.ZodNullable, ...q(e) });
class Lt extends Y {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        let r = n.data;
        return n.parsedType === O.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({ data: r, path: n.path, parent: n });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
Lt.create = (t, e) => new Lt({ innerType: t, typeName: V.ZodDefault, defaultValue: typeof e.default == 'function' ? e.default : () => e.default, ...q(e) });
class dn extends Y {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e),
            r = { ...n, common: { ...n.common, issues: [] } },
            a = this._def.innerType._parse({ data: r.data, path: r.path, parent: { ...r } });
        return Qt(a)
            ? a.then((s) => ({
                  status: 'valid',
                  value:
                      s.status === 'valid'
                          ? s.value
                          : this._def.catchValue({
                                get error() {
                                    return new Be(r.common.issues);
                                },
                                input: r.data
                            })
              }))
            : {
                  status: 'valid',
                  value:
                      a.status === 'valid'
                          ? a.value
                          : this._def.catchValue({
                                get error() {
                                    return new Be(r.common.issues);
                                },
                                input: r.data
                            })
              };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
dn.create = (t, e) => new dn({ innerType: t, typeName: V.ZodCatch, catchValue: typeof e.catch == 'function' ? e.catch : () => e.catch, ...q(e) });
class Vn extends Y {
    _parse(e) {
        if (this._getType(e) !== O.nan) {
            const r = this._getOrReturnCtx(e);
            return k(r, { code: y.invalid_type, expected: O.nan, received: r.parsedType }), z;
        }
        return { status: 'valid', value: e.data };
    }
}
Vn.create = (t) => new Vn({ typeName: V.ZodNaN, ...q(t) });
const Uf = Symbol('zod_brand');
class Kr extends Y {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e),
            r = n.data;
        return this._def.type._parse({ data: r, path: n.path, parent: n });
    }
    unwrap() {
        return this._def.type;
    }
}
class gn extends Y {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.common.async)
            return (async () => {
                const s = await this._def.in._parseAsync({ data: r.data, path: r.path, parent: r });
                return s.status === 'aborted' ? z : s.status === 'dirty' ? (n.dirty(), Pt(s.value)) : this._def.out._parseAsync({ data: s.value, path: r.path, parent: r });
            })();
        {
            const a = this._def.in._parseSync({ data: r.data, path: r.path, parent: r });
            return a.status === 'aborted' ? z : a.status === 'dirty' ? (n.dirty(), { status: 'dirty', value: a.value }) : this._def.out._parseSync({ data: a.value, path: r.path, parent: r });
        }
    }
    static create(e, n) {
        return new gn({ in: e, out: n, typeName: V.ZodPipeline });
    }
}
class cn extends Y {
    _parse(e) {
        const n = this._def.innerType._parse(e),
            r = (a) => (xt(a) && (a.value = Object.freeze(a.value)), a);
        return Qt(n) ? n.then((a) => r(a)) : r(n);
    }
    unwrap() {
        return this._def.innerType;
    }
}
cn.create = (t, e) => new cn({ innerType: t, typeName: V.ZodReadonly, ...q(e) });
function Ds(t, e = {}, n) {
    return t
        ? Dt.create().superRefine((r, a) => {
              var s, i;
              if (!t(r)) {
                  const o = typeof e == 'function' ? e(r) : typeof e == 'string' ? { message: e } : e,
                      l = (i = (s = o.fatal) !== null && s !== void 0 ? s : n) !== null && i !== void 0 ? i : !0,
                      u = typeof o == 'string' ? { message: o } : o;
                  a.addIssue({ code: 'custom', ...u, fatal: l });
              }
          })
        : Dt.create();
}
const zf = { object: fe.lazycreate };
var V;
(function (t) {
    (t.ZodString = 'ZodString'),
        (t.ZodNumber = 'ZodNumber'),
        (t.ZodNaN = 'ZodNaN'),
        (t.ZodBigInt = 'ZodBigInt'),
        (t.ZodBoolean = 'ZodBoolean'),
        (t.ZodDate = 'ZodDate'),
        (t.ZodSymbol = 'ZodSymbol'),
        (t.ZodUndefined = 'ZodUndefined'),
        (t.ZodNull = 'ZodNull'),
        (t.ZodAny = 'ZodAny'),
        (t.ZodUnknown = 'ZodUnknown'),
        (t.ZodNever = 'ZodNever'),
        (t.ZodVoid = 'ZodVoid'),
        (t.ZodArray = 'ZodArray'),
        (t.ZodObject = 'ZodObject'),
        (t.ZodUnion = 'ZodUnion'),
        (t.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
        (t.ZodIntersection = 'ZodIntersection'),
        (t.ZodTuple = 'ZodTuple'),
        (t.ZodRecord = 'ZodRecord'),
        (t.ZodMap = 'ZodMap'),
        (t.ZodSet = 'ZodSet'),
        (t.ZodFunction = 'ZodFunction'),
        (t.ZodLazy = 'ZodLazy'),
        (t.ZodLiteral = 'ZodLiteral'),
        (t.ZodEnum = 'ZodEnum'),
        (t.ZodEffects = 'ZodEffects'),
        (t.ZodNativeEnum = 'ZodNativeEnum'),
        (t.ZodOptional = 'ZodOptional'),
        (t.ZodNullable = 'ZodNullable'),
        (t.ZodDefault = 'ZodDefault'),
        (t.ZodCatch = 'ZodCatch'),
        (t.ZodPromise = 'ZodPromise'),
        (t.ZodBranded = 'ZodBranded'),
        (t.ZodPipeline = 'ZodPipeline'),
        (t.ZodReadonly = 'ZodReadonly');
})(V || (V = {}));
const Hf = (t, e = { message: `Input not instance of ${t.name}` }) => Ds((n) => n instanceof t, e),
    Vs = Ge.create,
    Ls = mt.create,
    Wf = Vn.create,
    qf = _t.create,
    Zs = en.create,
    Gf = St.create,
    Kf = Mn.create,
    Yf = tn.create,
    Xf = nn.create,
    Jf = Dt.create,
    Qf = wt.create,
    ep = dt.create,
    tp = Nn.create,
    np = Ke.create,
    rp = fe.create,
    ap = fe.strictCreate,
    sp = rn.create,
    ip = Xn.create,
    op = an.create,
    lp = it.create,
    up = sn.create,
    dp = Dn.create,
    cp = $t.create,
    fp = jt.create,
    pp = on.create,
    hp = ln.create,
    mp = gt.create,
    _p = un.create,
    gp = Vt.create,
    Ra = Xe.create,
    vp = rt.create,
    yp = vt.create,
    bp = Xe.createWithPreprocess,
    wp = gn.create,
    kp = () => Vs().optional(),
    Tp = () => Ls().optional(),
    xp = () => Zs().optional(),
    Sp = { string: (t) => Ge.create({ ...t, coerce: !0 }), number: (t) => mt.create({ ...t, coerce: !0 }), boolean: (t) => en.create({ ...t, coerce: !0 }), bigint: (t) => _t.create({ ...t, coerce: !0 }), date: (t) => St.create({ ...t, coerce: !0 }) },
    $p = z;
var Se = Object.freeze({
    __proto__: null,
    defaultErrorMap: Nt,
    setErrorMap: bf,
    getErrorMap: Pn,
    makeIssue: jn,
    EMPTY_PATH: wf,
    addIssueToContext: k,
    ParseStatus: Ie,
    INVALID: z,
    DIRTY: Pt,
    OK: Re,
    isAborted: Cr,
    isDirty: Er,
    isValid: xt,
    isAsync: Qt,
    get util() {
        return te;
    },
    get objectUtil() {
        return Ar;
    },
    ZodParsedType: O,
    getParsedType: ut,
    ZodType: Y,
    datetimeRegex: Ms,
    ZodString: Ge,
    ZodNumber: mt,
    ZodBigInt: _t,
    ZodBoolean: en,
    ZodDate: St,
    ZodSymbol: Mn,
    ZodUndefined: tn,
    ZodNull: nn,
    ZodAny: Dt,
    ZodUnknown: wt,
    ZodNever: dt,
    ZodVoid: Nn,
    ZodArray: Ke,
    ZodObject: fe,
    ZodUnion: rn,
    ZodDiscriminatedUnion: Xn,
    ZodIntersection: an,
    ZodTuple: it,
    ZodRecord: sn,
    ZodMap: Dn,
    ZodSet: $t,
    ZodFunction: jt,
    ZodLazy: on,
    ZodLiteral: ln,
    ZodEnum: gt,
    ZodNativeEnum: un,
    ZodPromise: Vt,
    ZodEffects: Xe,
    ZodTransformer: Xe,
    ZodOptional: rt,
    ZodNullable: vt,
    ZodDefault: Lt,
    ZodCatch: dn,
    ZodNaN: Vn,
    BRAND: Uf,
    ZodBranded: Kr,
    ZodPipeline: gn,
    ZodReadonly: cn,
    custom: Ds,
    Schema: Y,
    ZodSchema: Y,
    late: zf,
    get ZodFirstPartyTypeKind() {
        return V;
    },
    coerce: Sp,
    any: Jf,
    array: np,
    bigint: qf,
    boolean: Zs,
    date: Gf,
    discriminatedUnion: ip,
    effect: Ra,
    enum: mp,
    function: fp,
    instanceof: Hf,
    intersection: op,
    lazy: pp,
    literal: hp,
    map: dp,
    nan: Wf,
    nativeEnum: _p,
    never: ep,
    null: Xf,
    nullable: yp,
    number: Ls,
    object: rp,
    oboolean: xp,
    onumber: Tp,
    optional: vp,
    ostring: kp,
    pipeline: wp,
    preprocess: bp,
    promise: gp,
    record: up,
    set: cp,
    strictObject: ap,
    string: Vs,
    symbol: Kf,
    transformer: Ra,
    tuple: lp,
    undefined: Yf,
    union: sp,
    unknown: Qf,
    void: tp,
    NEVER: $p,
    ZodIssueCode: y,
    quotelessJson: yf,
    ZodError: Be
});
/**
 * vee-validate v4.15.0
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */ const Ma = (t) => t !== null && !!t && typeof t == 'object' && !Array.isArray(t);
function Bs(t) {
    return Number(t) >= 0;
}
function Op(t) {
    return typeof t == 'object' && t !== null;
}
function Ap(t) {
    return t == null ? (t === void 0 ? '[object Undefined]' : '[object Null]') : Object.prototype.toString.call(t);
}
function Na(t) {
    if (!Op(t) || Ap(t) !== '[object Object]') return !1;
    if (Object.getPrototypeOf(t) === null) return !0;
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
}
function Us(t, e) {
    return (
        Object.keys(e).forEach((n) => {
            if (Na(e[n]) && Na(t[n])) {
                t[n] || (t[n] = {}), Us(t[n], e[n]);
                return;
            }
            t[n] = e[n];
        }),
        t
    );
}
function Cp(t) {
    const e = t.split('.');
    if (!e.length) return '';
    let n = String(e[0]);
    for (let r = 1; r < e.length; r++) {
        if (Bs(e[r])) {
            n += `[${e[r]}]`;
            continue;
        }
        n += `.${e[r]}`;
    }
    return n;
}
function zs(t, e) {
    return {
        __type: 'VVTypedSchema',
        async parse(r) {
            const a = await t.safeParseAsync(r, e);
            if (a.success) return { value: a.data, errors: [] };
            const s = {};
            return Hs(a.error.issues, s), { errors: Object.values(s) };
        },
        cast(r) {
            try {
                return t.parse(r);
            } catch {
                const s = Ws(t);
                return Ma(s) && Ma(r) ? Us(s, r) : r;
            }
        },
        describe(r) {
            try {
                if (!r) return { required: !t.isOptional(), exists: !0 };
                const a = Ep(r, t);
                return a ? { required: !a.isOptional(), exists: !0 } : { required: !1, exists: !1 };
            } catch {
                return { required: !1, exists: !1 };
            }
        }
    };
}
function Hs(t, e) {
    t.forEach((n) => {
        const r = Cp(n.path.join('.'));
        (n.code === 'invalid_union' &&
            (Hs(
                n.unionErrors.flatMap((a) => a.issues),
                e
            ),
            !r)) ||
            (e[r] || (e[r] = { errors: [], path: r }), e[r].errors.push(n.message));
    });
}
function Ws(t) {
    if (t instanceof fe) return Object.fromEntries(Object.entries(t.shape).map(([e, n]) => (n instanceof Lt ? [e, n._def.defaultValue()] : n instanceof fe ? [e, Ws(n)] : [e, void 0])));
}
function Ep(t, e) {
    if (!Da(e)) return null;
    if (mn(t)) return e.shape[Yn(t)];
    const n = (t || '').split(/\.|\[(\d+)\]/).filter(Boolean);
    let r = e;
    for (let a = 0; a <= n.length; a++) {
        const s = n[a];
        if (!s || !r) return r;
        if (Da(r)) {
            r = r.shape[s] || null;
            continue;
        }
        Bs(s) && Ip(r) && (r = r._def.type);
    }
    return null;
}
function qs(t) {
    return t._def.typeName;
}
function Ip(t) {
    return qs(t) === V.ZodArray;
}
function Da(t) {
    return qs(t) === V.ZodObject;
}
const Fp = { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 483 285' };
function Pp(t, e) {
    return (
        b(),
        P(
            'svg',
            Fp,
            e[0] ||
                (e[0] = [
                    Ja(
                        '<path fill="#E3E7E3" d="M473.333 265.533h-48.397c-5.33 0-9.667-4.337-9.667-9.668s4.337-9.667 9.667-9.667h48.397c5.33 0 9.667 4.337 9.667 9.667a9.66 9.66 0 0 1-9.667 9.668"></path><path fill="#00FF94" d="m156.5 96.5-11-8.5-1.193-.874-28.12 16.232 40.175 23.159 40.174-23.159-27.986-16.154L167 88.5zm-.138 30.017v46.349l40.175-23.16v-46.348z"></path><path fill="#00FF94" d="M156.362 126.517v46.349l-40.175-23.16v-46.348z"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="m121.126 161.09 35.236 20.329m-21.563-97.366-26.02 15.028v38.79m95.166-38.79-27.496-15.87m14.125 78.452-34.212 19.756v-54.902m0 0 47.583-27.436v38.79m-47.583-11.354-47.583-27.436"></path><path fill="#00FF94" d="m309.5 27.5-2-4.377-29.349 16.931 40.145 23.19 40.174-23.19-30.97-17.853 1 5.299z"></path><path fill="#00FF94" d="M318.296 63.243v46.349l40.174-23.19V40.055l-40.174 23.19Zm0 0v46.349l-40.145-23.19V40.055l40.145 23.19Z"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="m283.09 97.817 35.206 20.328m-20.811-97.787-26.743 15.45v38.79m95.137-38.791-27.496-16.593m14.155 79.175-34.242 19.756V63.244m0-.001 47.583-27.436v38.79m-47.583-11.354-47.554-27.436"></path><path fill="#00FF94" d="m298.239 182.543-3.825-.543-36.35 20.982 40.175 23.159 40.144-23.159L303 182.543z"></path><path fill="#00FF94" d="M298.238 226.141v46.348l40.145-23.159v-46.349z"></path><path fill="#00FF94" d="M298.239 226.141v46.348l-40.175-23.159v-46.349z"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="m263.003 260.714 35.236 20.329m-17.558-99.685-30.026 17.347v38.79m95.137-38.79-27.496-15.871m14.154 78.452-34.212 19.756v-54.901m0 0 47.553-27.436v38.79m-47.552-11.354-47.584-27.436"></path><path fill="#003D2E" d="M143.261 82.246q.045 0 0 0c.121-.06.211-.12.301-.15l1.717-.783 1.506-.693 1.747-.783 1.475-.663 1.747-.783 1.476-.662 1.716-.783 1.265-.572c.03-.03.09-.06.151-.03v13.552c0 .06 0 .12-.03.18-.392-.24-.783-.451-1.175-.692l-10.149-5.993z"></path><path fill="#004734" d="M156.422 90.016V60.713c0-.06-.03-.12.06-.18.271.482.572.933.843 1.415l12.167 20.208c.03.03.061.09.091.15-.061.03-.121 0-.151-.03l-.994-.451-1.957-.904-1.958-.903-1.987-.904-1.928-.873-1.988-.903-1.927-.874-.06-.03c-.06-.03-.091 0-.091.06v13.372c-.06 0-.09.06-.12.15"></path><path fill="#004734" d="M156.422 89.986V76.404c0-.15 0-.15.151-.09l2.259 1.024c.512.24.993.451 1.505.692l2.169.994 1.234.572 1.777.813 1.235.572 1.747.784.964.421c.03 0 .03 0 .06.03 0 .06-.06.06-.091.09l-6.595 3.886-6.264 3.704c-.03.06-.09.09-.151.09m0 4.036 2.741-1.626 7.8-4.608 2.469-1.446c.03-.03.061-.06.091-.03 0 .03-.03.06-.061.09-4.336 6.084-8.643 12.198-12.98 18.281-.03.03-.03.09-.09.09-.03-.06-.03-.12-.03-.18v-10.39c0-.06 0-.15.06-.181"></path><path fill="#003D2E" d="M156.422 94.022c-.03.06-.03.09-.03.15v10.571c-.181-.241-.331-.482-.512-.723-1.506-2.108-2.982-4.216-4.487-6.324l-4.488-6.294-3.553-5.03-.091-.12c.091.03.121.06.181.09l7.74 4.578 5.15 3.041c.03.03.06.06.09.06Zm.03-33.519c-.03.03-.03.09-.03.12v15.51c0 .06.03.09-.03.15-.03-.03-.03-.06-.03-.12v-15.45c0-.09 0-.18.03-.27h.03z"></path><path fill="#003D2E" d="M156.422 60.473v15.81c-.602.272-1.235.573-1.837.844-.663.301-1.295.602-1.958.873l-3.373 1.536-2.379 1.085-3.493 1.596h-.06c.18-.332.391-.663.572-.994l4.999-8.312 6.415-10.631 1.054-1.747c.03-.03.03-.06.06-.06"></path><path fill="#003C2E" d="m318.296 0-18.04 31.14h36.049zm0 13.07 6.655 11.505H311.64z"></path><path fill="#E3E7E3" d="M448.156 248.397h-69.568a13.87 13.87 0 0 1-13.884-13.884 13.87 13.87 0 0 1 13.884-13.883h69.568a13.87 13.87 0 0 1 13.883 13.883c0 7.68-6.204 13.884-13.883 13.884"></path><path fill="#00FF94" d="M86.613 70.29h-49.36a9.833 9.833 0 0 1-9.848-9.847 9.833 9.833 0 0 1 9.848-9.848h49.36a9.83 9.83 0 0 1 9.848 9.848c0 5.42-4.427 9.848-9.848 9.848Z"></path><path fill="#00FF94" d="M69.478 51.86H11.565C5.18 51.86 0 46.68 0 40.295S5.18 28.73 11.565 28.73h57.943c6.384 0 11.564 5.18 11.564 11.565-.03 6.385-5.21 11.565-11.594 11.565"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M237.886 45.867a5.541 5.541 0 1 0 0-11.083 5.541 5.541 0 0 0 0 11.083m-137.179-.844a7.83 7.83 0 1 0 0-15.66 7.83 7.83 0 0 0 0 15.66m15.24 202.019h15.208m-26.773 0h3.824"></path><path stroke="#00FF94" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M100.708 284.054h7.499"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M69.237 265.533h54.419"></path><path stroke="#00FF94" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M117.934 284.024h30.417"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M405.662 136.486h-15.208m26.743 0h-3.825m38.97-18.522h-54.39"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="m381.93 30.387 8.523-4.909m8.493 4.909-3.764-2.169m-4.728-2.74V15.57"></path><path stroke="#163B2F" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="m162.355 199.157 5.27 5.27m3.855 3.825 5.24 5.27m-14.365 0 5.27-5.27m3.855-3.825 5.24-5.27"></path><path fill="#003C2E" d="M237.344 111.941a1.295 1.295 0 1 0 0-2.59 1.295 1.295 0 0 0 0 2.59"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M227.165 81.192c3.072-2.047 6.535-3.613 10.299-3.523 3.373.09 6.686 1.777 8.614 4.608 1.475 2.168 1.867 4.999.783 7.408-1.597 3.584-5.09 5.722-7.349 8.824-1.174 1.596-2.138 3.584-2.198 5.572"></path><path fill="#003C2E" d="M338.383 171.089a1.295 1.295 0 1 0 0-2.59 1.295 1.295 0 0 0 0 2.59"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M328.234 140.34c3.072-2.047 6.535-3.614 10.3-3.523 3.373.09 6.686 1.777 8.613 4.608 1.476 2.168 1.867 4.999.783 7.408-1.596 3.584-5.09 5.722-7.348 8.824-1.175 1.596-2.139 3.584-2.199 5.572"></path><path fill="#003C2E" d="M210.661 212.408a1.295 1.295 0 1 0 0-2.59 1.295 1.295 0 0 0 0 2.59"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.52" d="M200.512 181.659c3.072-2.048 6.535-3.614 10.299-3.523 3.373.09 6.686 1.777 8.614 4.608 1.475 2.168 1.867 4.999.783 7.408-1.597 3.584-5.09 5.722-7.349 8.824-1.174 1.596-2.138 3.584-2.198 5.572"></path><path fill="#003C2E" d="M313.026 175.757c-.392-4.487-4.548-5.933-9.788-6.234l.09-6.264-4.065.09-.091 6.083c-1.084.031-2.168.061-3.252.121l.09-6.114-4.065.091-.091 6.264-2.59.09v-.03l-5.631.121-.061 4.065s3.012-.12 2.952-.06c1.656-.03 2.168.843 2.319 1.626l-.121 7.138c.121 0 .271 0 .422.03h-.422l-.15 9.968c-.091.482-.392 1.265-1.536 1.295.06.03-2.952.06-2.952.06l-.873 4.578 5.3-.12c.994-.031 1.958-.031 2.922-.031l-.091 6.325 4.066-.09.09-6.265c1.115 0 2.199-.03 3.253-.03l-.091 6.234 4.066-.09.09-6.324c6.867-.512 11.685-2.229 12.378-8.252.542-4.849-1.837-6.957-5.722-7.74 2.349-1.235 3.855-3.253 3.554-6.535m-5.903 13.642c-.06 4.729-8.734 4.367-11.504 4.427l.12-8.372c2.771-.06 11.474-.964 11.384 3.945m-1.717-11.775c-.06 4.307-7.288 3.945-9.576 4.005l.12-7.589c2.289-.06 9.517-.903 9.456 3.584"></path>',
                        34
                    )
                ])
        )
    );
}
const jp = { render: Pp },
    Rp = { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 503 248' };
function Mp(t, e) {
    return (
        b(),
        P(
            'svg',
            Rp,
            e[0] ||
                (e[0] = [
                    Ja(
                        '<path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M444.707 177.772a5.347 5.347 0 1 0 0-10.695 5.347 5.347 0 0 0 0 10.695m52.064-103.409a5.347 5.347 0 1 0 0-10.694 5.347 5.347 0 0 0 0 10.694M222.353 187.569h-17.296V40.952h17.296m-21.159 132.523h-14.457V55.045h14.457m-18.615 108.528h-12.015V64.948h12.015"></path><path fill="#03FD9E" d="M256.679 73.002h-6.469v15.744h6.469zm16.536-7.493h-6.47v23.237h6.47zm16.503 10.595h-6.469v12.642h6.469zm16.538-21.685h-6.47v34.36h6.47zm16.535 9.043h-6.469V88.78h6.469zm16.538 8.12h-6.47v17.164h6.47z"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M250.638 105.909h54.264m-54.264 18.616h54.264m-54.264 18.616h54.264m-54.264 18.616h54.264m58.39-62.383V29.729H226.247v169.062h137.045v-27.495"></path><path fill="#E3E7E3" d="M383.917 15.348h38.453c4.247 0 7.69-3.436 7.69-7.674S426.617 0 422.37 0h-38.453c-4.248 0-7.691 3.436-7.691 7.674s3.443 7.674 7.691 7.674"></path><path fill="#00FF94" d="M403.721 35.483h61.228c6.744 0 12.212-5.468 12.212-12.213s-5.468-12.213-12.212-12.213h-61.228c-6.745 0-12.213 5.468-12.213 12.213s5.468 12.213 12.213 12.213"></path><path stroke="#163B2F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="m425.241 4.258 4.423 4.39m3.234 3.234 4.423 4.423m-12.08 0 4.423-4.423m3.234-3.234 4.423-4.39"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="m392 67.664 3.928 1.287m2.904.924 3.961 1.287m-7.13 3.664 1.255-3.96m.924-2.906L399.13 64"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M225.644 227.072h37.958m-66.806 0h9.572"></path><path stroke="#00FF94" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M138.341 241.529h101.728"></path><path fill="#00FF94" d="M7.99 120.166h47.563a7.426 7.426 0 1 0 0-14.853H7.99a7.427 7.427 0 0 0 0 14.853"></path><path fill="#00FF94" d="M30.105 109.439h52.613c6.526 0 11.816-5.291 11.816-11.817s-5.29-11.816-11.816-11.816H30.105c-6.527 0-11.817 5.29-11.817 11.816s5.29 11.817 11.817 11.817"></path><path stroke="#163B2F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="m89.982 215.07 4.423 4.423m3.233 3.235 4.423 4.423m-12.08 0 4.423-4.423m3.234-3.234 4.423-4.423M57.467 102.739l4.423 4.423m3.234 3.234 4.423 4.423m-12.08 0 4.423-4.423m3.234-3.234 4.423-4.423"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M102.049 25.979h6.073m7.791-.033h24.458"></path><path stroke="#003D2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="m140.371 4.986 8.153 4.588m8.12-4.588-4.786 2.707m-3.333 1.881v9.308"></path><path fill="#E3E7E3" d="M89.03 185.653h48.686a6.149 6.149 0 1 0 0-12.297H89.03a6.149 6.149 0 0 0 0 12.297"></path><path fill="#00FF94" d="M420.538 238.931h47.061c3.282 0 5.943-2.655 5.943-5.93s-2.661-5.929-5.943-5.929h-47.061c-3.283 0-5.944 2.654-5.944 5.929s2.661 5.93 5.944 5.93"></path><path fill="#00FF94" d="M438.675 248h47.061c3.283 0 5.944-2.733 5.944-6.104s-2.661-6.104-5.944-6.104h-47.061c-3.282 0-5.943 2.733-5.943 6.104s2.661 6.104 5.943 6.104"></path><path fill="#E3E7E3" d="M65.103 176.168h58.993c5.4 0 9.778-4.377 9.778-9.777s-4.378-9.778-9.778-9.778H65.103c-5.4 0-9.777 4.378-9.777 9.778s4.377 9.777 9.777 9.777"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M456.054 130.138h-6.041"></path><path stroke="#00FF94" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M481.336 114.757h-43.734"></path><path stroke="#003C2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.52" d="M442.192 130.105h-24.458"></path>',
                        21
                    )
                ])
        )
    );
}
const Np = { render: Mp },
    Jn = () => Sn('configLoaded', () => !1);
function Gs() {
    const t = Jn(),
        e = hn();
    return B(() => (!e.value && t.value ? window.Bitstamp.constants.hcaptchaKey ?? '' : ''));
}
const Dp = { key: 0, class: 'public-support-form__loading' },
    Vp = { class: 'form-title' },
    Lp = { key: 0, class: 'public-support-form__more-info' },
    Zp = { key: 0, class: 'public-support-form__info-links public-support-form__info-links--single' },
    Bp = { key: 1, class: 'public-support-form__info-links public-support-form__info-links--multiple' },
    Up = { class: 'public-support-form__name-and-email' },
    zp = { class: 'public-support-form__terms' },
    Hp = { key: 1 },
    Wp = { class: 'public-support-form__title' },
    qp = { class: 'public-support-form__text' },
    Gp = { key: 0 },
    Kp = { key: 1 },
    Yp = { class: 'public-support-form__contact' },
    Xp = { key: 2 },
    Jp = { class: 'public-support-form__title' },
    Qp = { class: 'public-support-form__text' },
    eh = 1014,
    th = 140002,
    nh = we({
        __name: 'SupportForm',
        setup(t) {
            const e = se({}),
                n = se(!1),
                r = se(!1),
                a = se(!1),
                s = se(!1),
                i = se(''),
                o = se([]),
                l = se([]),
                u = Jn(),
                d = hn(),
                c = Un(),
                { t: h } = jr(),
                g = Gs(),
                M = zs(
                    Se.object({
                        category: Se.number(),
                        subcategory: Se.number(),
                        full_name: Se.string()
                            .max(100, { message: h('validation.textTooBig', [100]) })
                            .optional(),
                        email: Se.string()
                            .email('Invalid email')
                            .min(1, { message: h('validation.fieldIsRequired') })
                            .max(150, { message: h('validation.fieldIsRequired', [150]) }),
                        description: Se.string().min(1, { message: h('validation.fieldIsRequired') }),
                        attachments: Se.any(),
                        confirm: Se.boolean(),
                        'h-recaptcha-response': Se.string().optional()
                    })
                ),
                G = B(() => l.value.map((F) => ({ id: F.id, text: F.name, value: F.id, subcategories: F.subcategories }))),
                T = B(() => {
                    const F = e.value.category;
                    if (F) {
                        for (const X of G.value) if (X.id === F) return X.subcategories.map((ue) => ({ id: ue.id, text: ue.name, value: ue.id, helpLinks: ue.helpLinks }));
                    }
                    return [];
                }),
                C = B(() => {
                    const F = e.value.subcategory;
                    if (F) {
                        for (const X of T.value) if (X.id === F) return (X == null ? void 0 : X.helpLinks) ?? [];
                    }
                    return [];
                }),
                ne = B(() => [...new Set(o.value)].join(', ').replaceAll('image/', ''));
            async function Fe() {
                var F, X, ue, ye;
                try {
                    const { data: ve } = await oi(c.$buildApiUrl('publicSupportForm'), '$P8YhEUiIKC');
                    (o.value = (X = (F = ve.value) == null ? void 0 : F.data) == null ? void 0 : X.allowedFileTypes), (l.value = (ye = (ue = ve.value) == null ? void 0 : ue.data) == null ? void 0 : ye.categories);
                } catch (ve) {
                    console.log(ve);
                }
            }
            Zt(async () => {
                d.value || (await Fe());
            }),
                je(d, async (F, X) => {
                    !F && X && (await Fe());
                }),
                je(u, (F, X) => {
                    F && !X && (g.value = window.Bitstamp.constants.hcaptchaKey ?? '');
                });
            function ke(F) {
                e.value = F;
            }
            async function ge(F) {
                var X, ue, ye, ve;
                try {
                    const J = new FormData(),
                        { attachments: ze, ...Ne } = F;
                    ze &&
                        ze.forEach((S, w) => {
                            J.append(`file_${w}`, S);
                        }),
                        J.append('data', JSON.stringify(Ne)),
                        (a.value = !0),
                        await $fetch(c.$buildApiUrl('publicSupportTicketResource'), { method: 'POST', body: J, headers: { 'X-CSRFToken': Ka('csrftoken').value } }),
                        (r.value = !0);
                } catch ({ response: J }) {
                    (s.value = !0),
                        (J == null ? void 0 : J.status) === 429
                            ? (i.value = h('components.supportForm.formError429'))
                            : (i.value =
                                  (((ye = (ue = (X = J == null ? void 0 : J.data) == null ? void 0 : X.errors) == null ? void 0 : ue[0]) == null ? void 0 : ye.message) ?? ((ve = J == null ? void 0 : J.data) == null ? void 0 : ve.message)) ||
                                  h('components.supportForm.formError'));
                } finally {
                    (r.value = !0), (a.value = !1);
                }
            }
            function re() {
                n.value = !0;
            }
            function ee() {
                (n.value = !1), (r.value = !1);
            }
            function $e() {
                (s.value = !1), (r.value = !1);
            }
            const Ue = Ga(),
                Oe = B(() => {
                    var F;
                    return ((F = Ue.query) == null ? void 0 : F.type) === 'documents-form';
                }),
                Te = B(() => ({ email: Ue.query.email ?? '', category: eh, subcategory: th }));
            return (
                Xa(() => {
                    Oe.value && re();
                }),
                (F, X) => {
                    const ue = Bn,
                        ye = Sd,
                        ve = mc,
                        J = xi,
                        ze = Os,
                        Ne = tf,
                        S = rf,
                        w = Es,
                        j = Is,
                        R = Ya;
                    return (
                        b(),
                        P(
                            tt,
                            null,
                            [
                                Q(ue, { 'btn-style': 'button--brand-dark', 'as-link': !1, onClick: re }, { default: ae(() => [ce(I(F.$t('components.supportForm.contactUsButton')), 1)]), _: 1 }),
                                Q(
                                    R,
                                    { 'is-open': m(n), 'onUpdate:isOpen': X[0] || (X[0] = (L) => (at(n) ? (n.value = L) : null)), onClose: ee },
                                    {
                                        default: ae(() => [
                                            !m(r) && !m(s)
                                                ? (b(),
                                                  _e(
                                                      j,
                                                      { key: 0, 'validation-schema': m(M), 'on-submit': ge, 'initial-values': m(Te), onChange: ke },
                                                      {
                                                          default: ae((L) => [
                                                              m(a) ? (b(), P('div', Dp, [Q(ye, { class: 'public-support-form__spinner' })])) : ie('', !0),
                                                              $('div', Vp, I(m(Oe) ? F.$t('components.supportForm.titleDocumentsForm') : F.$t('components.supportForm.title')), 1),
                                                              $('div', null, [
                                                                  It(Q(ve, { id: 'category', name: 'category', label: m(h)('components.supportForm.formSelectCategory'), options: m(G) }, null, 8, ['label', 'options']), [[vn, !m(Oe)]]),
                                                                  It(
                                                                      Q(
                                                                          ve,
                                                                          { id: 'subcategory', name: 'subcategory', label: m(h)('components.supportForm.formSelectSubcategory'), options: m(T) },
                                                                          {
                                                                              helpLinks: ae(() => [
                                                                                  m(C).length > 0
                                                                                      ? (b(),
                                                                                        P('div', Lp, [
                                                                                            m(C).length === 1
                                                                                                ? (b(),
                                                                                                  P('div', Zp, [
                                                                                                      ce(I(F.$t('components.supportForm.helpLinkSingleMoreInfo')) + ' ', 1),
                                                                                                      Q(J, { to: m(C)[0].url, external: '', 'new-tab': '' }, { default: ae(() => [ce(I(m(C)[0].text), 1)]), _: 1 }, 8, ['to'])
                                                                                                  ]))
                                                                                                : m(C).length > 1
                                                                                                ? (b(),
                                                                                                  P('div', Bp, [
                                                                                                      ce(I(F.$t('components.supportForm.helpLinksMultipleMoreInfo')) + ' ', 1),
                                                                                                      $('ul', null, [
                                                                                                          (b(!0),
                                                                                                          P(
                                                                                                              tt,
                                                                                                              null,
                                                                                                              bt(m(C), (N) => (b(), P('li', { key: N.url }, [Q(J, { to: N.url, external: '', 'new-tab': '' }, { default: ae(() => [ce(I(N.text), 1)]), _: 2 }, 1032, ['to'])]))),
                                                                                                              128
                                                                                                          ))
                                                                                                      ])
                                                                                                  ]))
                                                                                                : ie('', !0),
                                                                                            ce(' ' + I(F.$t('components.supportForm.helpLinksSendMessage')), 1)
                                                                                        ]))
                                                                                      : ie('', !0)
                                                                              ]),
                                                                              _: 1
                                                                          },
                                                                          8,
                                                                          ['label', 'options']
                                                                      ),
                                                                      [[vn, !m(Oe)]]
                                                                  ),
                                                                  $('div', Up, [
                                                                      It(Q(ze, { id: 'full_name', type: 'text', label: F.$t('components.supportForm.formEnterName'), name: 'full_name', 'test-id': 'name', 'max-length': '100' }, null, 8, ['label']), [[vn, !m(Oe)]]),
                                                                      It(Q(ze, { id: 'email', type: 'text', label: F.$t('components.supportForm.formEnterEmail'), name: 'email', autocomplete: 'email', 'test-id': 'email', 'max-length': '150' }, null, 8, ['label']), [[vn, !m(Oe)]])
                                                                  ]),
                                                                  Q(ze, { id: 'description', 'is-area': '', type: 'textarea', label: F.$t('components.supportForm.formMessage'), name: 'description' }, null, 8, ['label']),
                                                                  Q(Ne, { multiple: '', name: 'attachments', limit: 10, 'file-types': m(o), 'file-types-helper-text': m(ne) }, null, 8, ['file-types', 'file-types-helper-text']),
                                                                  Q(
                                                                      S,
                                                                      { name: 'confirm', 'test-id': 'terms-agree' },
                                                                      {
                                                                          default: ae(() => [
                                                                              $('div', zp, [
                                                                                  ce(I(F.$t('components.supportForm.submitPrivacyPolicyTextStart')) + ' ', 1),
                                                                                  Q(J, { to: m(c).$buildUrl('privacyPolicy'), external: '', 'new-tab': '' }, { default: ae(() => [ce(I(F.$t('components.supportForm.submitPrivacyPolicyTextLink')), 1)]), _: 1 }, 8, ['to']),
                                                                                  ce(' ' + I(F.$t('components.supportForm.submitPrivacyPolicyTextEnd')), 1)
                                                                              ])
                                                                          ]),
                                                                          _: 1
                                                                      }
                                                                  ),
                                                                  m(g) ? (b(), _e(w, { key: 0, 'site-key': m(g), size: 'invisible' }, null, 8, ['site-key'])) : ie('', !0),
                                                                  Q(ue, { class: 'public-support-form__submit-button', 'as-link': !1, disabled: !L.isValid }, { default: ae(() => [ce(I(F.$t('components.supportForm.submitButton')), 1)]), _: 2 }, 1032, ['disabled'])
                                                              ])
                                                          ]),
                                                          _: 1
                                                      },
                                                      8,
                                                      ['validation-schema', 'initial-values']
                                                  ))
                                                : ie('', !0),
                                            m(r) && m(s)
                                                ? (b(),
                                                  P('div', Hp, [
                                                      $('div', Wp, I(F.$t('components.supportForm.formSubmitFailedTitle')), 1),
                                                      Q(m(jp), { class: 'public-support-form__image' }),
                                                      $('div', qp, [
                                                          m(i) ? (b(), P('p', Gp, I(m(i)), 1)) : (b(), P('p', Kp, I(F.$t('components.supportForm.formSubmitFailedText')), 1)),
                                                          $('p', null, I(F.$t('components.supportForm.thankYou')), 1),
                                                          $('p', null, I(F.$t('components.supportForm.bitstampTeam')), 1)
                                                      ]),
                                                      Q(ue, { class: 'public-support-form__submit-button', 'as-link': !1, onClick: $e }, { default: ae(() => [ce(I(F.$t('components.supportForm.tryAgain')), 1)]), _: 1 }),
                                                      $('div', Yp, [
                                                          X[1] || (X[1] = ce(' US: ')),
                                                          X[2] || (X[2] = $('a', { href: 'tel:0018007125702' }, '+1 800 712 5702', -1)),
                                                          X[3] || (X[3] = ce(' EU: ')),
                                                          X[4] || (X[4] = $('a', { href: 'tel:0035220881096' }, '+352 20 88 10 96', -1)),
                                                          ce(' ' + I(F.$t('components.supportForm.global')) + ' ', 1),
                                                          X[5] || (X[5] = $('a', { href: 'tel:00442038689628' }, '+44 20 3868 9628', -1)),
                                                          X[6] || (X[6] = $('br', null, null, -1)),
                                                          ce(' ' + I(F.$t('components.supportForm.customerSupportLiveAssist')), 1)
                                                      ])
                                                  ]))
                                                : ie('', !0),
                                            m(r) && !m(s)
                                                ? (b(),
                                                  P('div', Xp, [
                                                      $('div', Jp, I(F.$t('components.supportForm.formSubmitSuccessTitle')), 1),
                                                      Q(m(Np), { class: 'public-support-form__image' }),
                                                      $('div', Qp, [$('p', null, I(F.$t('components.supportForm.formSubmitSuccessText')), 1), $('p', null, I(F.$t('components.supportForm.bitstampTeam')), 1)])
                                                  ]))
                                                : ie('', !0)
                                        ]),
                                        _: 1
                                    },
                                    8,
                                    ['is-open']
                                )
                            ],
                            64
                        )
                    );
                }
            );
        }
    }),
    rh = Object.assign(Me(nh, [['__scopeId', 'data-v-7320715e']]), { __name: 'FormsSupportForm' }),
    ah = { key: 0 },
    sh = we({
        __name: 'PublicSupportFormV2',
        setup(t) {
            const { isAuthenticated: e, isLoading: n } = li();
            return (r, a) => {
                const s = Bn,
                    i = rh;
                return m(n)
                    ? ie('', !0)
                    : (b(), P('div', ah, [m(e) ? (b(), _e(s, { key: 0, 'btn-style': 'button--brand-dark', link: r.$buildUrl('support') }, { default: ae(() => [ce(I(r.$t('components.publicSupportForm.contactUsButton')), 1)]), _: 1 }, 8, ['link'])) : (b(), _e(i, { key: 1 }))]));
            };
        }
    }),
    ih = Object.assign(sh, { __name: 'PublicSupportFormV2' }),
    oh = { class: 'price-change__value' },
    lh = we({
        __name: 'PriceChangeColumn',
        props: { changeAbsolute: { default: 0 }, changeAbsoluteDisplay: { default: '' }, changeRelativeDisplay: { default: '' } },
        setup(t) {
            const e = B(() => t.changeAbsolute < 0);
            return (n, r) => (b(), P('div', { class: Ye(['price-change', { 'price-change--negative': m(e) }]) }, [$('div', null, I(n.changeRelativeDisplay), 1), $('div', oh, I(n.changeAbsoluteDisplay), 1)], 2));
        }
    }),
    uh = Object.assign(Me(lh, [['__scopeId', 'data-v-9d3ba207']]), { __name: 'PriceChangeColumn' }),
    dh = we({
        __name: 'ChartColumn',
        props: { asset: {}, isPositiveChange: { type: Boolean }, isSmallTable: { type: Boolean, default: !1 }, scaleChart: { type: Boolean, default: !1 }, priceHistory: { default: () => [] }, ticker: { default: () => ({}) } },
        setup(t) {
            const e = Nr('chartRef');
            let n = () => {};
            const r = se(null),
                a = se({
                    chart: { margin: 0, className: 'asset-highcharts-wrapper', backgroundColor: 'transparent' },
                    title: '',
                    legend: { enabled: !1 },
                    xAxis: { visible: !1, type: 'datetime', minPadding: 0, maxPadding: 0 },
                    yAxis: { visible: !1 },
                    series: [{ title: '', type: 'area', data: null, lineWidth: 2, enableMouseTracking: !1, fillColor: 'rgba(255, 255, 255, 0)' }],
                    plotOptions: { series: { marker: { enabled: !1 } } },
                    tooltip: { enabled: !1 },
                    credits: { enabled: !1 },
                    pane: { size: '100%' },
                    accessibility: { enabled: !1 }
                }),
                s = B(() => {
                    const o = t.priceHistory.map(({ time: u, close: d }) => ({ x: Ai(u).getTime(), y: parseFloat(d) }));
                    let l = new Date().getTime();
                    return t.ticker && t.ticker.time instanceof Date && (l = t.ticker.time.getTime()), o.push({ x: l, y: parseFloat(t.ticker.last) }), o;
                });
            Zt(() => {
                (r.value = Si.chart(e.value, a.value, null)),
                    (n = Wr(
                        function () {
                            const o = i(s.value);
                            r.value.update({ series: [{ type: 'area', data: [...s.value], color: t.isPositiveChange ? 'var(--positive-color)' : 'var(--negative-color)', fillOpacity: 0 }], yAxis: [{ min: o.min, max: o.max }] });
                        },
                        1e3,
                        { leading: !0, trailing: !1 }
                    )),
                    n();
            }),
                Rr(() => {
                    var o;
                    (o = r.value) == null || o.destroy();
                }),
                je(
                    () => [t.priceHistory, t.ticker],
                    () => {
                        n();
                    }
                );
            function i(o) {
                const l = wd(o, (u) => u.y);
                return { min: t.scaleChart ? l[0].y * 0.5 : l[0].y, max: t.scaleChart ? l[l.length - 1].y * 1.5 : l[l.length - 1].y, direction: s.value[0].y - o[o.length - 1].y > 0 ? 'negative' : 'positive' };
            }
            return (o, l) => (
                b(),
                P(
                    'div',
                    { class: Ye(['chart-column__wrapper', { 'chart-column__wrapper--small': o.isSmallTable }]) },
                    [$('div', { class: Ye(['chart-column', { 'chart-column--small': o.isSmallTable }]) }, [$('div', { ref_key: 'chartRef', ref: e, class: 'chart-column__chart' }, null, 512)], 2)],
                    2
                )
            );
        }
    }),
    ch = Object.assign(Me(dh, [['__scopeId', 'data-v-aeaada1c']]), { __name: 'ChartColumn' }),
    fh = { class: 'combo-column' },
    ph = we({
        __name: 'PriceAndChangeColumn',
        props: { priceDisplay: { default: '' }, changeRelativeDisplay: { default: '' }, changeAbsolute: { default: 0 } },
        setup(t) {
            const e = B(() => t.changeAbsolute < 0);
            return (n, r) => (b(), P('div', fh, [$('div', null, I(n.priceDisplay), 1), $('div', { class: Ye(['combo-column__price-change', { 'combo-column__price-change--negative': m(e) }]) }, [$('div', null, I(n.changeRelativeDisplay), 1)], 2)]));
        }
    }),
    hh = Object.assign(Me(ph, [['__scopeId', 'data-v-b0698112']]), { __name: 'PriceAndChangeColumn' }),
    mh = we({
        __name: 'AppTag',
        props: { colorScheme: { default: '' }, variant: { default: '' }, isSmall: { type: Boolean, default: !1 } },
        setup(t) {
            const e = B(() => {
                const r = ['tag'];
                return t.colorScheme && t.colorScheme !== 'default' && n(r, t.colorScheme), t.isSmall && n(r, 'small'), t.variant && n(r, `variant-${t.variant}`), r.join(' ');
            });
            function n(r, a) {
                r.push(`${r[0]}--${a}`);
            }
            return (r, a) => (b(), P('div', { class: Ye(m(e)) }, [pn(r.$slots, 'default', {}, void 0, !0)], 2));
        }
    }),
    _h = Object.assign(Me(mh, [['__scopeId', 'data-v-62de599a']]), { __name: 'AppTag' }),
    gh = we({
        __name: 'AssetTags',
        props: { values: {}, areSmall: { type: Boolean, default: !1 }, variant: { default: '' } },
        setup(t) {
            function e(n) {
                return t.areSmall && n.smallText ? `${n.smallText}` : `${n.text}`;
            }
            return (n, r) => {
                const a = _h;
                return (
                    b(!0),
                    P(
                        tt,
                        null,
                        bt(n.values, (s, i) => (b(), _e(a, { key: i, 'color-scheme': s.colorScheme, 'is-small': n.areSmall, variant: n.variant }, { default: ae(() => [ce(I(e(s)), 1)]), _: 2 }, 1032, ['color-scheme', 'is-small', 'variant']))),
                        128
                    )
                );
            };
        }
    }),
    vh = Object.assign(gh, { __name: 'AssetTags' }),
    yh = { class: 'assets-table__column' },
    bh = ['title'],
    wh = { key: 0, class: 'assets-table__column' },
    kh = { key: 0 },
    Th = { key: 'assetsTable' },
    xh = { class: 'assets-table__column' },
    Sh = { class: 'assets-table__asset-icon' },
    $h = ['src', 'alt', 'title'],
    Oh = { class: 'assets-table__asset-info' },
    Ah = { class: 'assets-table__asset-name' },
    Ch = { class: 'assets-table__asset-name-subsection' },
    Eh = { class: 'assets-table__asset-key' },
    Ih = { class: 'assets-table__tags' },
    Fh = { key: 0, class: 'assets-table__column' },
    Ph = { class: 'assets-table__actions-wrapper' },
    jh = { key: 2, class: 'assets-table__footer' },
    Rh = ['href'],
    Mh = we({
        __name: 'AssetsTable',
        props: {
            smallBreakPoint: { default: 576 },
            mediumBreakPoint: { default: 768 },
            loadingPlaceholderNum: { default: 3 },
            variant: { default: '' },
            wideLastTitleColumn: { type: Boolean, default: !1 },
            loading: { type: Boolean, default: !0 },
            columns: { default: () => [] },
            assets: { default: () => [] },
            getAssetLink: { type: Function, default: () => '' },
            ctaText: { default: 'Buy' },
            numberOfCurrencies: { default: 0 }
        },
        setup(t) {
            const e = Un(),
                n = hn(),
                r = Nr('table'),
                a = se(null),
                s = B(() => a.value <= t.smallBreakPoint),
                i = B(() => a.value <= t.mediumBreakPoint),
                o = B(() => t.columns.filter((h) => !(h.hideOnSmall && s.value) && (!h.onlyOnSmall || s.value)));
            let l = u;
            Zt(() => {
                n.value || u(), (l = Wr(u, 100)), window.addEventListener('resize', l);
            }),
                Rr(() => {
                    window.removeEventListener('resize', l);
                }),
                je(n, (h, g) => {
                    !h && g && u();
                });
            function u() {
                var h;
                a.value = ((h = r.value) == null ? void 0 : h.clientWidth) ?? null;
            }
            function d(h) {
                const g = '1.5fr',
                    M = h.map((T) => (s.value && T.smallGridWidth ? T.smallGridWidth : i.value && T.mediumGridWidth ? T.mediumGridWidth : T.gridWidth ? T.gridWidth : '1fr')).join(' '),
                    G = i.value ? '' : '10.25rem';
                return { gridTemplateColumns: `${g} ${M} ${G}` };
            }
            function c(h) {
                return t.wideLastTitleColumn && i.value && h === o.value.length - 1 ? `grid-column:${o.value.length + 1}/span 2; padding-right: 0.5rem` : '';
            }
            return (h, g) => {
                const M = vh,
                    G = Bn,
                    T = Zn;
                return (
                    b(),
                    P(
                        'div',
                        { ref: 'table', class: Ye(['assets-table', { 'assets-table--small': m(s), 'assets-table--medium': m(i) }]) },
                        [
                            $(
                                'div',
                                { class: 'assets-table__row assets-table__row--title', style: or([d(m(o))]) },
                                [
                                    $('div', yh, I(h.$t('components.landingAssetsTable.assets')), 1),
                                    (b(!0),
                                    P(
                                        tt,
                                        null,
                                        bt(m(o), ({ smallTitle: C, title: ne, slotKey: Fe, description: ke }, ge) => (b(), P('div', { key: Fe, class: 'assets-table__column', style: or(c(ge)), title: ke }, [$('span', null, I((m(s) && C) || ne), 1)], 12, bh))),
                                        128
                                    )),
                                    !m(i) && !h.wideLastTitleColumn ? (b(), P('div', wh)) : ie('', !0)
                                ],
                                4
                            ),
                            h.loading
                                ? (b(),
                                  P('ul', kh, [
                                      (b(!0),
                                      P(
                                          tt,
                                          null,
                                          bt(
                                              h.loadingPlaceholderNum,
                                              (C) => (
                                                  b(),
                                                  P(
                                                      'li',
                                                      { key: C, class: 'assets-table__row' },
                                                      g[0] || (g[0] = [$('div', { class: 'assets-table__column' }, [$('div', { class: 'assets-table__asset-icon assets-table__loading-icon' }), $('div', { class: 'assets-table__loading-title' })], -1)])
                                                  )
                                              )
                                          ),
                                          128
                                      ))
                                  ]))
                                : (b(),
                                  _e(
                                      yi,
                                      { key: 1, name: 'assets-table__row' },
                                      {
                                          default: ae(() => [
                                              $('ul', Th, [
                                                  (b(!0),
                                                  P(
                                                      tt,
                                                      null,
                                                      bt(
                                                          h.assets,
                                                          (C) => (
                                                              b(),
                                                              P('li', { key: C.asset }, [
                                                                  (b(),
                                                                  _e(
                                                                      ta(m(i) ? 'a' : 'div'),
                                                                      { class: 'assets-table__row', style: or([d(m(o))]), href: m(i) ? h.getAssetLink(C.asset) : !1 },
                                                                      {
                                                                          default: ae(() => [
                                                                              $('div', xh, [
                                                                                  (b(),
                                                                                  _e(
                                                                                      ta(m(i) ? 'div' : 'a'),
                                                                                      { class: 'assets-table__asset', title: h.getAssetLink(C.asset), href: m(i) ? !1 : h.getAssetLink(C.asset) },
                                                                                      {
                                                                                          default: ae(() => [
                                                                                              $('div', Sh, [$('img', { src: C.logo, alt: C.asset, title: C.asset }, null, 8, $h)]),
                                                                                              $('div', Oh, [
                                                                                                  $('span', Ah, I(C.name), 1),
                                                                                                  $('div', Ch, [
                                                                                                      $('span', Eh, I(C.asset), 1),
                                                                                                      $('div', Ih, [C.tags ? (b(), _e(M, { key: 0, values: C.tags, 'are-small': m(i), variant: h.variant }, null, 8, ['values', 'are-small', 'variant'])) : ie('', !0)])
                                                                                                  ])
                                                                                              ])
                                                                                          ]),
                                                                                          _: 2
                                                                                      },
                                                                                      1032,
                                                                                      ['title', 'href']
                                                                                  ))
                                                                              ]),
                                                                              (b(!0),
                                                                              P(
                                                                                  tt,
                                                                                  null,
                                                                                  bt(m(o), ({ slotKey: ne }) => (b(), P('div', { key: ne, class: 'assets-table__column' }, [pn(h.$slots, ne, { asset: C, isSmallTable: m(s) }, void 0, !0)]))),
                                                                                  128
                                                                              )),
                                                                              m(i)
                                                                                  ? ie('', !0)
                                                                                  : (b(),
                                                                                    P('div', Fh, [
                                                                                        $('div', Ph, [
                                                                                            h.getAssetLink(C.asset)
                                                                                                ? (b(), _e(G, { key: 0, class: 'assets-table__trade-button', link: h.getAssetLink(C.asset) }, { default: ae(() => [ce(I(h.ctaText) + ' ' + I(C.name), 1)]), _: 2 }, 1032, ['link']))
                                                                                                : ie('', !0)
                                                                                        ])
                                                                                    ]))
                                                                          ]),
                                                                          _: 2
                                                                      },
                                                                      1032,
                                                                      ['style', 'href']
                                                                  ))
                                                              ])
                                                          )
                                                      ),
                                                      128
                                                  ))
                                              ])
                                          ]),
                                          _: 3
                                      }
                                  )),
                            h.loading
                                ? ie('', !0)
                                : (b(),
                                  P('div', jh, [
                                      $(
                                          'a',
                                          { class: 'assets-table__link', href: m(e).$buildUrl('markets') },
                                          [ce(I(h.$t('components.landingAssetsTable.exploreAllAvailableAssets', [h.numberOfCurrencies])) + ' ', 1), Q(T, { class: 'assets-table__footer-caret', name: 'arrow-down', size: '12' })],
                                          8,
                                          Rh
                                      )
                                  ]))
                        ],
                        2
                    )
                );
            };
        }
    }),
    Nh = Object.assign(Me(Mh, [['__scopeId', 'data-v-3bde94f9']]), { __name: 'AssetsTable' }),
    Dh = [
        [1e12, 'T'],
        [1e9, 'B'],
        [1e6, 'M'],
        [1e3, 'k']
    ];
class Vh {
    decimal({ value: e, decimals: n = 2, rounding: r = At.ROUND_HALF_UP, skipRounding: a = !1, smartStripTrailingZeros: s = !1 }) {
        (typeof e == 'string' || typeof e == 'number') && (e = new At(e));
        try {
            const i = e.isNegative(),
                o = e.abs(),
                l = a ? o.toFixed() : o.toFixed(n, r);
            let [u, d = ''] = l.split('.'),
                c = '';
            const h = u.length;
            for (let g = h - 1; g >= 0; g--) {
                const M = g !== h - 1 && (h - 1 - g) % 3 === 0;
                c = `${u[g]}${M ? ',' : ''}${c}`;
            }
            if (s && d.length > 0) {
                let g = d.replace(/0*$/, '');
                g.length === 0 && h > 3 && (g = '0'), (d = g);
            }
            return `${i ? '-' : ''}${c}${n > 0 && d.length > 0 ? `.${d}` : ''}`;
        } catch (i) {
            return console.error('Failed to format.', i), '';
        }
    }
    formatZeroPaddedWithoutRounding({ value: e, minimumDecimals: n }) {
        const r = this.decimal({ value: e, skipRounding: !0 });
        if (n < 1 || r === '') return r;
        const [a, s = ''] = r.split('.'),
            i = n - s.length;
        return `${a}.${s}${i >= 0 ? '0'.repeat(i) : ''}`;
    }
    addCurrency({ formattedValue: e, currencySymbol: n = '', currencyCode: r = '' }) {
        const a = e.startsWith('-');
        a && (e = e.substring(1));
        const s = n ? `${n}${e}` : `${e} ${r}`;
        return a ? `-${s}` : s;
    }
    groupedPrice({ value: e, decimals: n = 1, currencySymbol: r = '', currencyCode: a = '', smartStripTrailingZeros: s = !1, spacer: i = '' }) {
        let o = '';
        for (const [u, d] of Dh)
            if (e.greaterThanOrEqualTo(u)) {
                (o = d), (e = e.div(u));
                break;
            }
        const l = this.decimal({ value: e, decimals: n, smartStripTrailingZeros: s });
        return r ? `${r}${l}${i}${o}` : `${l}${i}${o}${a ? ` ${a}` : ''}`;
    }
    price({ value: e, decimals: n = 2, currencySymbol: r = '', currencyCode: a = '', rounding: s = At.ROUND_HALF_UP }) {
        (typeof e == 'string' || typeof e == 'number') && (e = new At(e));
        try {
            const i = e != null && e.isNegative() ? '-' : '',
                o = e == null ? void 0 : e.abs(),
                l = this.decimal({ value: o, decimals: n, rounding: s });
            return r ? `${i}${r}${l}` : `${i}${l} ${a}`;
        } catch {
            return '';
        }
    }
    amount({ value: e, decimals: n = 2, currencyCode: r = '', markAsApprox: a = !1, rounding: s = At.ROUND_HALF_UP }) {
        return `${a ? '≈ ' : ''}${this.decimal({ value: e, decimals: n, rounding: s })}${r ? ` ${r}` : ''}`;
    }
    percentageChange(e, n = !1, r = !1) {
        (typeof e == 'string' || typeof e == 'number') && (e = new At(e));
        const a = this.decimal({ value: e, decimals: 2 });
        return (r ? e.isPositive() : e.greaterThanOrEqualTo(0)) ? `${n ? '' : '+'}${a}%` : `${a}%`;
    }
    toFixedWithoutRounding(e, n) {
        const r = new RegExp(`^-?\\d+(?:\\.\\d{0,${n}})?`, 'g'),
            a = e.toString().match(r)[0],
            s = a.indexOf('.');
        if (s === -1 && n > 0) return `${a}.${'0'.repeat(n)}`;
        const i = n - (a.length - s) + 1;
        return i > 0 ? a + '0'.repeat(i) : a;
    }
    removeThousandSeparatorsFromString(e) {
        return _d(e) ? `${e}`.replace(/,/g, '.').replace(/[.](?=.*[.])/g, '') : '';
    }
    formatWithStrippedTrailingZeros(e, n) {
        return Ee(e).toDecimalPlaces(n).toString();
    }
}
const Va = new Vh(),
    La = (t, e) => `${t.toUpperCase()}/${e.toUpperCase()}`,
    Za = (t, e) => {
        const n = `${t.step[0].toLowerCase()}${t.step[1].toLowerCase()}`;
        return e[n];
    },
    Ht = (t, e) => {
        let n = Ee(1),
            r = Ee(1),
            a = null;
        if (!t || (!t.identity && $n(t.path))) return { price: null, change: { relative: null, absolute: null }, time: new Date() };
        for (const { step: i, inverse: o } of t.path)
            if (i && !$n(i)) {
                const [l, u] = i,
                    d = `${l.toLowerCase()}${u.toLowerCase()}`;
                if (gr.CONVERSION_PATH_IDENTITY_PAIRS.has(d)) continue;
                if (!e[d]) return { price: null, change: { relative: null, absolute: null }, time: new Date() };
                const c = e[d].last,
                    h = e[d].last24;
                (!a || a <= e[d].time) && (a = e[d].time), o ? ((n = c.isZero() ? Ee(0) : n.div(c)), h.equals(-100) ? (r = Ee(0)) : (r = r.mul(Ee(1).div(h.div(100).plus(1))))) : ((n = n.mul(c)), (r = r.mul(h.div(100).plus(1))));
            }
        const s = r.equals(1) ? Ee(0) : n.div(r);
        return { price: n, change: { relative: r.minus(1).mul(100), absolute: n.minus(s) }, time: a || new Date() };
    };
function Lh(t) {
    const e = hn();
    Zt(() => {
        e.value || t();
    }),
        je(e, (n, r) => {
            !n && r && t();
        });
}
const Zh = 60,
    Bh = 5 * 60,
    Uh = 60,
    hr = 7,
    zh = 'Stablecoins',
    Hh = we({
        __name: 'LandingAssetTable.client',
        setup(t) {
            const e = [
                    ['BTC', 0],
                    ['ETH', 0],
                    ['USDT', 0],
                    ['USDC', 0],
                    ['XRP', 0],
                    ['ADA', 0],
                    ['SOL', 0],
                    ['DOT', 0],
                    ['MATIC', 0],
                    ['UNI', 0],
                    ['LTC', 0]
                ],
                n = Un(),
                { t: r } = jr(),
                a = Jn(),
                s = se(!1),
                i = se(!1),
                o = se([]),
                l = se({}),
                u = B(() => [
                    { title: r('components.landingAssetsTable.price'), hideOnSmall: !0, slotKey: 'price' },
                    { title: r('components.landingAssetsTable.change24'), hideOnSmall: !0, slotKey: 'change' },
                    { title: '', slotKey: 'chart' },
                    { title: '', onlyOnSmall: !0, slotKey: 'priceChange' }
                ]);
            let d = 'USD';
            const c = {},
                h = {};
            let g = {},
                M = null,
                G = null,
                T = null,
                C = ee;
            Lh(async () => {
                (s.value = !0), (C = Wr(ee, Zh * 1e3, { leading: !0, trailing: !1 }));
            }),
                bi(() => {
                    clearTimeout(M), clearTimeout(G), clearInterval(T);
                }),
                je([s, a], async (S) => {
                    var w, j;
                    if (S[0] && S[1]) {
                        const R = window.Bitstamp.constants.marketConfig,
                            L = window.Bitstamp.constants.currencyConfig;
                        R &&
                            R.forEach((N) => {
                                c[N.key] = { ...N };
                            }),
                            L &&
                                L.forEach((N) => {
                                    h[N.code] = { ...N };
                                }),
                            (d = ((j = (w = window == null ? void 0 : window.Bitstmap) == null ? void 0 : w.preloaded) == null ? void 0 : j.preferredCurrencyResource) ?? 'USD'),
                            await X();
                    }
                });
            function ne(S) {
                const w = S.toLowerCase(),
                    j = d.toLowerCase();
                return `${w}${j}` in c
                    ? n.$buildUrl('productDetails', { base: w, counter: j })
                    : `${d.toLowerCase()}${S.toLowerCase()}` in c
                    ? n.$buildUrl('productDetails', { base: j, counter: w })
                    : `${S.toLowerCase()}usd` in c
                    ? n.$buildUrl('productDetails', { base: w, counter: 'usd' })
                    : null;
            }
            async function Fe() {
                try {
                    return (await $fetch(n.$buildApiUrl('availableSupply'))).data.reduce((w, j) => ({ ...w, [j.currency]: Ee(j.availableSupply) }), {});
                } catch {
                    return {};
                }
            }
            function ke(S) {
                const w = h[S];
                return !w || !(w != null && w.code) || !(w != null && w.type) || w.categories.includes(zh) ? !1 : w.type === 'crypto' && !gr.STAKING_ASSETS.includes(w.code) && w.code !== d;
            }
            function ge(S, w) {
                const j = [];
                for (const [R, L] of S)
                    if (ke(R)) {
                        const N = w[La(R, d)],
                            v = Ht(N, g).price;
                        v != null && j.push({ asset: R, conversionPath: N, marketCap: v.mul(L), tags: kr(h, `${R}.tags`, []), logo: h[R].logo_svg, name: h[R].name });
                    }
                o.value = j.slice(0, hr);
            }
            async function re(S) {
                try {
                    const w = (await $fetch(`${n.$buildApiUrl('conversionPaths')}?toCurrencies=${d}&${S.map((R) => `fromCurrencies=${R}`).join('&')}`)).data,
                        j = {};
                    for (const R of w) {
                        const L = R.fromCurrency,
                            N = R.toCurrency,
                            v = La(L, N);
                        j[v] = { identity: L === N, path: R.conversionPath };
                    }
                    return j;
                } catch {
                    return {};
                }
            }
            async function ee() {
                try {
                    const S = await $fetch(n.$buildApiUrl('tickers')),
                        w = {};
                    if (!S.data) return w;
                    for (const { high: j, low: R, market: L, microtimestamp: N, open: v, last: x, volume: W, vwap: H } of S.data) {
                        const pe = parseInt(N);
                        if (L) {
                            const xe = x ? new Je(x) : new Je('0'),
                                he = v ? new Je(v) : new Je('0');
                            w[L] = Object.freeze({
                                high: new Je(j),
                                low: new Je(R),
                                last: xe,
                                delta: he.greaterThan(0) ? xe.minus(he) : new Je(0),
                                last24: Ei({ oldPrice: he, newPrice: xe }),
                                volume: new Je(W),
                                open: he,
                                time: new Date(pe / 1e3),
                                microtimestamp: pe,
                                vwap: Ee(H)
                            });
                        }
                    }
                    return (g = w), w;
                } catch {
                    return {};
                }
            }
            function $e(S, w = 1800) {
                if (S && S.length > 0 && S[0].close <= 0) {
                    let W = 0;
                    for (const { close: H } of S)
                        if (H > 0) {
                            W = H;
                            break;
                        }
                    S[0].close = W;
                }
                let j = 0,
                    R = null,
                    L = null,
                    N = null;
                const v = w / 60,
                    x = S.map(({ open: W, close: H, time: pe, high: xe, low: he }) => {
                        H <= 0 ? (H = j) : (j = H), pe && !pe.includes('+') && !pe.includes('Z') && (pe += '+00'), (pe = Oi(Fi(pe), v)), (pe = Ci(pe, "yyyy-MM-dd'T'HH:mm:ssXXXX"));
                        const Bt = Ee(xe);
                        Bt.isPositive() && (R === null || R.lt(Bt)) && (R = Bt);
                        const Ut = Ee(he);
                        return Ut.isPositive() && (L === null || L.gt(Ut)) && (L = Ut), N === null && Ee(W).isPositive() && (N = Ee(W)), { close: H, time: pe };
                    });
                return { open: N, high: R, low: L, history: x };
            }
            async function Ue(S, w, j, R) {
                const L = S.reduce((x, { key: W }) => `${x}&markets=${W}`, ''),
                    N = `${n.$buildApiUrl('pricesListResource')}?step=${R}&start=${w}&end=${j}${L}`;
                return (await $fetch(N)).data.map(({ pair: x, market: W, price: H, history: pe, delta: xe }) => {
                    const he = $e(pe, R);
                    return { pair: x.replace('/', '').toLowerCase(), market: W.replace('/', '').toLowerCase(), price: parseFloat(H), delta: parseFloat(xe), history: he.history, open: he.open ?? Ee(H), high: he.high ?? Ee(H), low: he.low ?? Ee(H) };
                });
            }
            function Oe(S, w) {
                return w.priceFactor !== null ? S.map(({ close: j, time: R }) => ({ close: j * w.priceFactor.toNumber(), time: R })) : S;
            }
            async function Te() {
                const S = new Date(),
                    w = $i(S).toISOString(),
                    j = S.toISOString(),
                    R = o.value.reduce((N, v) => {
                        const x = v.conversionPath.path;
                        if (x.length > 0) {
                            const W = Za(x[0], c);
                            N[W.key] = { asset: v.asset, apiPair: W, priceFactor: null };
                            const H = Ht({ identity: !1, path: x.slice(1) }, g).price;
                            H !== null && !H.isZero() && (N[W.key].priceFactor = H);
                        }
                        return N;
                    }, {});
                let L = [];
                if (!$n(R))
                    try {
                        L = await Ue(
                            Object.values(R).map((N) => N.apiPair),
                            w,
                            j,
                            1800
                        );
                    } catch {
                        clearTimeout(M), (M = setTimeout(Te, Bh * 1e3));
                    }
                l.value = L.reduce((N, v) => {
                    const x = R[v.pair];
                    return (N[x.asset] = Oe(v.history, R[v.pair])), N;
                }, {});
            }
            function F() {
                const w = 1800 - ((new Date().getMinutes() * 60) % 1800),
                    j = Math.round(Math.random() * Uh);
                G = setTimeout(() => {
                    Te(), F();
                }, (w + j) * 1e3);
            }
            async function X() {
                let S = Object.entries(await Fe());
                if (S.length < 1) {
                    const L = Object.entries(await ee())
                            .map(([v, x]) => ({ ...x, market: v }))
                            .sort((v, x) => x.volume.mul(x.last).sub(v.volume.mul(v.last)).toNumber()),
                        N = [];
                    for (const { market: v } of L) {
                        if ((c[v] && c[v].counter === 'USD' && !N.includes(c[v].base) && N.push(c[v].base), N.length >= hr)) break;
                        S = N.map((x) => [x, 0]);
                    }
                }
                S.length < 1 && (S = e.filter(([R]) => h[R]));
                const w = S.map(([R]) => R),
                    [j] = await Promise.all([re(w), C()]);
                ge(S, j),
                    await Te(),
                    F(),
                    (i.value = !0),
                    clearInterval(T),
                    (T = Ii(async () => {
                        await ee(), ge(S, j);
                    }, 10 * 1e3));
            }
            function ue({ asset: S, priceCurrencyCode: w, priceCurrencyDecimals: j, availableMarkets: R }) {
                let L = j,
                    N = `${S.toLowerCase()}${w.toLowerCase()}`,
                    v = R[N];
                return v ? (L = v.counterDecimals) : ((N = `${w.toLowerCase()}${S.toLowerCase()}`), (v = R[N]), v ? (L = v.baseDecimals) : ((N = `${S.toLowerCase()}usd`), (v = R[N]), v && (L = Math.max(v.counterDecimals, j)))), L;
            }
            function ye(S, w) {
                const j = h[d];
                if (!j) return '';
                const R = ue({ asset: w.asset, priceCurrencyCode: j.code, priceCurrencyDecimals: j.decimals, availableMarkets: c });
                return Va.price({ value: S, decimals: R, currencySymbol: j.symbol });
            }
            function ve(S) {
                const w = Ht(S.conversionPath, g).price;
                return w.isZero() ? '' : ye(w, S);
            }
            function J(S) {
                const w = Ht(S.conversionPath, g);
                let j = '';
                return w.price && !w.price.isZero() && (j = ye(w.price, S)), { priceDisplay: j, changeAbsolute: w.change.absolute ? w.change.absolute.toNumber() : 0, changeRelativeDisplay: w.change.relative ? Va.percentageChange(w.change.relative) : '' };
            }
            function ze(S) {
                const w = S.conversionPath.path;
                if ($n(w)) return { time: new Date(), last: new Je(1) };
                if (w.length === 1) {
                    const j = Za(w[0], c),
                        R = { time: new Date(), last: new Je(0) };
                    return kr(g, j.key, R);
                } else {
                    const j = Ht(S.conversionPath, g);
                    return { time: j.time, last: j.price };
                }
            }
            function Ne(S) {
                return gr.STABLE_COINS.includes(S.asset) && d !== 'BTC';
            }
            return (S, w) => {
                const j = uh,
                    R = ch,
                    L = ui,
                    N = hh,
                    v = Nh;
                return (
                    b(),
                    _e(
                        v,
                        { columns: m(u), assets: m(o), loading: !m(i), 'loading-placeholder-num': hr, 'cta-text': m(r)('components.landingAssetsTable.buy'), 'get-asset-link': ne, 'number-of-currencies': Object.values(h).length },
                        {
                            price: ae(({ asset: x }) => [ce(I(ve(x)), 1)]),
                            change: ae(({ asset: x }) => [Q(j, wr(na(J(x))), null, 16)]),
                            chart: ae(({ asset: x, isSmallTable: W }) => [
                                Q(
                                    L,
                                    null,
                                    {
                                        default: ae(() => [
                                            Q(R, { asset: x.asset, 'price-history': m(l)[x.asset], ticker: ze(x), 'is-small-table': W, 'scale-chart': Ne(x), 'is-positive-change': J(x).changeAbsolute >= 0 }, null, 8, [
                                                'asset',
                                                'price-history',
                                                'ticker',
                                                'is-small-table',
                                                'scale-chart',
                                                'is-positive-change'
                                            ])
                                        ]),
                                        _: 2
                                    },
                                    1024
                                )
                            ]),
                            priceChange: ae(({ asset: x }) => [Q(N, wr(na(J(x))), null, 16)]),
                            _: 1
                        },
                        8,
                        ['columns', 'assets', 'loading', 'cta-text', 'number-of-currencies']
                    )
                );
            };
        }
    }),
    Wh = Object.assign(Hh, { __name: 'LandingAssetTable' }),
    qh = () => Sn('institutionalForm', () => !1),
    Gh = { class: 'form-title' },
    Kh = { class: 'dialog-form' },
    Yh = { key: 1, class: 'form-submitted' },
    Xh = we({
        __name: 'Institutional',
        props: { formType: { default: Ct.INSTITUTIONAL_FORM_TYPE.INSTITUTIONAL } },
        setup(t) {
            const e = t,
                n = qh(),
                r = se(!1),
                a = Gs(),
                s = Un(),
                { t: i } = jr(),
                o = zs(
                    Se.object({
                        first_name: Se.string()
                            .min(1, { message: i('validation.fieldIsRequired') })
                            .max(50, { message: i('validation.textTooBig', [50]) }),
                        last_name: Se.string()
                            .min(1, { message: i('validation.fieldIsRequired') })
                            .max(50, { message: i('validation.textTooBig', [50]) }),
                        job_title: Se.string()
                            .min(1, { message: i('validation.fieldIsRequired') })
                            .max(50, { message: i('validation.textTooBig', [50]) }),
                        phone_number: Se.string()
                            .min(1, { message: i('validation.fieldIsRequired') })
                            .max(50, { message: i('validation.textTooBig', [50]) })
                            .refine((d) => /^\+?[\s\d]+$/.test(d ?? ''), i('validation.invalidPhoneNumber')),
                        company: Se.string()
                            .min(1, { message: i('validation.fieldIsRequired') })
                            .max(50, { message: i('validation.textTooBig', [50]) }),
                        email: Se.string()
                            .email('Invalid email')
                            .min(1, { message: i('validation.fieldIsRequired') })
                            .max(70, { message: i('validation.textTooBig', [70]) }),
                        message: Se.string().min(1, { message: i('validation.fieldIsRequired') }),
                        'h-recaptcha-response': Se.string().optional()
                    })
                );
            async function l(d) {
                try {
                    await $fetch(s.$buildApiUrl('institutionalPartnerSignup'), { method: 'POST', body: { ...d, form_type: e.formType }, credentials: 'include', headers: { 'X-CSRFToken': Ka('csrftoken').value } }), (r.value = !0);
                } catch (c) {
                    console.log(c);
                }
            }
            function u() {
                (n.value = !1), (r.value = !1);
            }
            return (d, c) => {
                const h = Os,
                    g = Es,
                    M = Bn,
                    G = Is,
                    T = Ya;
                return (
                    b(),
                    _e(
                        T,
                        { 'is-open': m(n), 'onUpdate:isOpen': c[0] || (c[0] = (C) => (at(n) ? (n.value = C) : null)), onClose: u },
                        {
                            default: ae(() => [
                                m(r)
                                    ? (b(),
                                      P('div', Yh, [ce(I(d.$t('components.institutionalForm.submitMessage1')) + ' ', 1), c[1] || (c[1] = $('br', null, null, -1)), c[2] || (c[2] = $('br', null, null, -1)), ce(' ' + I(d.$t('components.institutionalForm.submitMessage2')), 1)]))
                                    : (b(),
                                      _e(
                                          G,
                                          { key: 0, 'validation-schema': m(o), 'on-submit': l },
                                          {
                                              default: ae((C) => [
                                                  $('div', Gh, I(d.$t('components.institutionalForm.title')), 1),
                                                  $('div', Kh, [
                                                      Q(h, { id: 'firstName', type: 'text', label: d.$t('components.institutionalForm.firstName'), name: 'first_name', autocomplete: 'given-name', 'test-id': 'first-name', 'max-length': '50' }, null, 8, ['label']),
                                                      Q(h, { id: 'lastName', type: 'text', label: d.$t('components.institutionalForm.lastName'), name: 'last_name', autocomplete: 'family-name', 'test-id': 'family-name', 'max-length': '50' }, null, 8, ['label']),
                                                      Q(h, { id: 'jobTitle', type: 'text', label: d.$t('components.institutionalForm.jobTitle'), name: 'job_title', autocomplete: 'job-title', 'test-id': 'job-title', 'max-length': '50' }, null, 8, ['label']),
                                                      Q(h, { id: 'email', type: 'text', label: d.$t('components.institutionalForm.email'), name: 'email', autocomplete: 'email', 'test-id': 'email', 'max-length': '70' }, null, 8, ['label']),
                                                      Q(h, { id: 'phone_number', type: 'tel', label: d.$t('components.institutionalForm.phone'), name: 'phone_number', autocomplete: 'phone', 'test-id': 'phone', 'max-length': '50' }, null, 8, ['label']),
                                                      Q(h, { id: 'company', type: 'text', label: d.$t('components.institutionalForm.company'), name: 'company', autocomplete: 'company', 'test-id': 'company', 'max-length': '50' }, null, 8, ['label'])
                                                  ]),
                                                  Q(h, { id: 'message', 'is-area': '', type: 'textarea', label: d.$t('components.institutionalForm.message'), name: 'message', autocomplete: 'message', 'test-id': 'message' }, null, 8, ['label']),
                                                  m(a) ? (b(), _e(g, { key: 0, 'site-key': m(a), size: 'invisible' }, null, 8, ['site-key'])) : ie('', !0),
                                                  Q(M, { class: 'submit-button', 'as-link': !1, disabled: !C.isValid }, { default: ae(() => [ce(I(d.$t('components.institutionalForm.submit')), 1)]), _: 2 }, 1032, ['disabled'])
                                              ]),
                                              _: 1
                                          },
                                          8,
                                          ['validation-schema']
                                      ))
                            ]),
                            _: 1
                        },
                        8,
                        ['is-open']
                    )
                );
            };
        }
    }),
    Jh = Object.assign(Me(Xh, [['__scopeId', 'data-v-7d1155e4']]), { __name: 'FormsInstitutional' }),
    Qh = di(Wh),
    em = { key: 0, class: 'landing-asset-table-wrapper' },
    tm = we({
        __name: 'WidgetSection',
        props: { component: {}, widget: { default: void 0 }, props: { default: void 0 } },
        setup(t) {
            const e = Ga(),
                n = ki(),
                r = Sn('wasConfigApiFetchedInWidgetSection', () => !1),
                a = Sn('loadingInWidgetSection', () => !1),
                s = Jn();
            return (
                wi(async () => {
                    var i;
                    if (!r.value) {
                        (a.value = !0), (r.value = !0);
                        const o = e.fullPath[e.fullPath.length - 1] === '/' ? e.fullPath : `${e.fullPath}/`;
                        try {
                            let l = `${n.public.apiHost}${o}config/`;
                            n.public.useRelativeBuildUrl && (l = `${o}config/`);
                            const d = (await $fetch(l)).data;
                            d == null || delete d.constants.widgetsTags,
                                (i = d == null ? void 0 : d.constants) != null && i.castleAppId && delete d.constants.castleAppId,
                                d && ((d.constants.resetWidgetsState = !0), (window.Bitstamp = d), (window.BitstampConstants = window.Bitstamp.constants), (window.BitstampApiEndpoints = window.Bitstamp.constants), (window.BitstampPages = window.Bitstamp.constants)),
                                (a.value = !1),
                                (s.value = !0);
                        } catch {
                            a.value = !1;
                        }
                    }
                }),
                (i, o) => {
                    const l = ih,
                        u = Qh,
                        d = Jh,
                        c = Pi;
                    return i.widget === m(Ct).STRAPI.WIDGETS.PUBLIC_SUPPORT_FORM_V2
                        ? (b(), P(tt, { key: 0 }, [m(a) ? ie('', !0) : (b(), _e(l, { key: 0 }))], 64))
                        : (b(),
                          _e(
                              c,
                              wr(br({ key: 1 }, i.props)),
                              {
                                  default: ae(() => [
                                      i.widget === m(Ct).STRAPI.WIDGETS.ASSETS_TABLE_V2 ? (b(), P('div', em, [Q(u)])) : ie('', !0),
                                      i.widget === m(Ct).STRAPI.WIDGETS.INSTITUTIONAL_FORM ? (b(), _e(d, { key: 1 })) : ie('', !0),
                                      i.widget === m(Ct).STRAPI.WIDGETS.OTC_FORM ? (b(), _e(d, { key: 2, 'form-type': m(Ct).INSTITUTIONAL_FORM_TYPE.OTC }, null, 8, ['form-type'])) : ie('', !0)
                                  ]),
                                  _: 1
                              },
                              16
                          ));
                }
            );
        }
    }),
    nm = Object.assign(Me(tm, [['__scopeId', 'data-v-1ab1f3df']]), { __name: 'WidgetSection' }),
    hm = Object.freeze(Object.defineProperty({ __proto__: null, default: nm }, Symbol.toStringTag, { value: 'Module' }));
export { hm as W, nm as _, qh as u };
