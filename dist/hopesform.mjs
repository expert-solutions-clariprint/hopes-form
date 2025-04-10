/*!
 * Hopes Form (Free Edition)
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 */
const j = document, X = window, St = j.documentElement, U = j.createElement.bind(j), Tt = U("div"), it = U("table"), Dt = U("tbody"), bt = U("tr"), { isArray: Z, prototype: It } = Array, { concat: Kt, filter: at, indexOf: zt, map: Rt, push: qt, slice: Lt, some: ct, splice: Gt } = It, Xt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Yt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Qt = /<.+>/, Zt = /^\w+$/;
function ut(t, e) {
  const n = te(e);
  return !t || !n && !J(e) && !_(e) ? [] : !n && Yt.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Zt.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class tt {
  constructor(e, n) {
    if (!e)
      return;
    if (ot(e))
      return e;
    let i = e;
    if (z(e)) {
      const s = n || j;
      if (i = Xt.test(e) && J(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Qt.test(e) ? Ht(e) : ot(s) ? s.find(e) : z(s) ? y(s).find(e) : ut(e, s), !i)
        return;
    } else if (W(e))
      return this.ready(e);
    (i.nodeType || i === X) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new tt(e, n);
  }
}
const d = tt.prototype, y = d.init;
y.fn = y.prototype = d;
d.length = 0;
d.splice = Gt;
typeof Symbol == "function" && (d[Symbol.iterator] = It[Symbol.iterator]);
function ot(t) {
  return t instanceof tt;
}
function K(t) {
  return !!t && t === t.window;
}
function J(t) {
  return !!t && t.nodeType === 9;
}
function te(t) {
  return !!t && t.nodeType === 11;
}
function _(t) {
  return !!t && t.nodeType === 1;
}
function ee(t) {
  return !!t && t.nodeType === 3;
}
function ne(t) {
  return typeof t == "boolean";
}
function W(t) {
  return typeof t == "function";
}
function z(t) {
  return typeof t == "string";
}
function L(t) {
  return t === void 0;
}
function G(t) {
  return t === null;
}
function Pt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ft(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
y.isWindow = K;
y.isFunction = W;
y.isArray = Z;
y.isNumeric = Pt;
y.isPlainObject = ft;
function T(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (ft(t)) {
    const i = Object.keys(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const o = i[s];
      if (e.call(t[o], o, t[o]) === !1)
        return t;
    }
  } else
    for (let i = 0, s = t.length; i < s; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
y.each = T;
d.each = function(t) {
  return T(this, t);
};
d.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Y(...t) {
  const e = ne(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return Y(e, y, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const o in r)
      e && (Z(r[o]) || ft(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Y(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
y.extend = Y;
d.extend = function(t) {
  return Y(d, t);
};
const ie = /\S+/g;
function et(t) {
  return z(t) ? t.match(ie) || [] : [];
}
d.toggleClass = function(t, e) {
  const n = et(t), i = !L(e);
  return this.each((s, r) => {
    _(r) && T(n, (o, c) => {
      i ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
d.addClass = function(t) {
  return this.toggleClass(t, !0);
};
d.removeAttr = function(t) {
  const e = et(t);
  return this.each((n, i) => {
    _(i) && T(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function se(t, e) {
  if (t) {
    if (z(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !_(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return G(n) ? void 0 : n;
      }
      return L(e) ? this : G(e) ? this.removeAttr(t) : this.each((n, i) => {
        _(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
d.attr = se;
d.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
d.hasClass = function(t) {
  return !!t && ct.call(this, (e) => _(e) && e.classList.contains(t));
};
d.get = function(t) {
  return L(t) ? Lt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
d.eq = function(t) {
  return y(this.get(t));
};
d.first = function() {
  return this.eq(0);
};
d.last = function() {
  return this.eq(-1);
};
function re(t) {
  return L(t) ? this.get().map((e) => _(e) || ee(e) ? e.textContent : "").join("") : this.each((e, n) => {
    _(n) && (n.textContent = t);
  });
}
d.text = re;
function O(t, e, n) {
  if (!_(t))
    return;
  const i = X.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function F(t, e) {
  return parseInt(O(t, e), 10) || 0;
}
function vt(t, e) {
  return F(t, `border${e ? "Left" : "Top"}Width`) + F(t, `padding${e ? "Left" : "Top"}`) + F(t, `padding${e ? "Right" : "Bottom"}`) + F(t, `border${e ? "Right" : "Bottom"}Width`);
}
const st = {};
function oe(t) {
  if (st[t])
    return st[t];
  const e = U(t);
  j.body.insertBefore(e, null);
  const n = O(e, "display");
  return j.body.removeChild(e), st[t] = n !== "none" ? n : "block";
}
function Et(t) {
  return O(t, "display") === "none";
}
function Ft(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function nt(t) {
  return z(t) ? (e, n) => Ft(n, t) : W(t) ? t : ot(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
d.filter = function(t) {
  const e = nt(t);
  return y(at.call(this, (n, i) => e.call(n, i, n)));
};
function V(t, e) {
  return e ? t.filter(e) : t;
}
d.detach = function(t) {
  return V(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const le = /^\s*<(\w+)[^>]*>/, ae = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, xt = {
  "*": Tt,
  tr: Dt,
  td: bt,
  th: bt,
  thead: it,
  tbody: it,
  tfoot: it
};
function Ht(t) {
  if (!z(t))
    return [];
  if (ae.test(t))
    return [U(RegExp.$1)];
  const e = le.test(t) && RegExp.$1, n = xt[e] || xt["*"];
  return n.innerHTML = t, y(n.childNodes).detach().get();
}
y.parseHTML = Ht;
d.has = function(t) {
  const e = z(t) ? (n, i) => ut(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
d.not = function(t) {
  const e = nt(t);
  return this.filter((n, i) => (!z(t) || _(i)) && !e.call(i, n, i));
};
function k(t, e, n, i) {
  const s = [], r = W(e), o = i && nt(i);
  for (let c = 0, a = t.length; c < a; c++)
    if (r) {
      const l = e(t[c]);
      l.length && qt.apply(s, l);
    } else {
      let l = t[c][e];
      for (; l != null && !(i && o(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function Mt(t) {
  return t.multiple && t.options ? k(at.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ce(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || Ut.test(n.type)) {
      const s = Z(t) ? Rt.call(t, String) : G(t) ? [] : [String(t)];
      i ? T(n.options, (r, o) => {
        o.selected = s.indexOf(o.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = L(t) || G(t) ? "" : t;
  }) : this[0] && Mt(this[0]);
}
d.val = ce;
d.is = function(t) {
  const e = nt(t);
  return ct.call(this, (n, i) => e.call(n, i, n));
};
y.guid = 1;
function H(t) {
  return t.length > 1 ? at.call(t, (e, n, i) => zt.call(i, e) === n) : t;
}
y.unique = H;
d.add = function(t, e) {
  return y(H(this.get().concat(y(t, e).get())));
};
d.children = function(t) {
  return V(y(H(k(this, (e) => e.children))), t);
};
d.parent = function(t) {
  return V(y(H(k(this, "parentNode"))), t);
};
d.index = function(t) {
  const e = t ? y(t)[0] : this[0], n = t ? this : y(e).parent().children();
  return zt.call(n, e);
};
d.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
d.siblings = function(t) {
  return V(y(H(k(this, (e) => y(e).parent().children().not(e)))), t);
};
d.find = function(t) {
  return y(H(k(this, (e) => ut(t, e))));
};
const ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, fe = /^$|^module$|\/(java|ecma)script/i, de = ["type", "src", "nonce", "noModule"];
function he(t, e) {
  const n = y(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (fe.test(s.type) && St.contains(s)) {
      const r = U("script");
      r.text = s.textContent.replace(ue, ""), T(de, (o, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function pe(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && he(e, t.ownerDocument);
}
function B(t, e, n, i, s, r, o, c) {
  return T(t, (a, l) => {
    T(y(l), (u, p) => {
      T(y(e), (g, f) => {
        const h = n ? p : f, m = n ? f : p, C = n ? u : g;
        pe(h, C ? m.cloneNode(!0) : m, i, s, !C);
      }, c);
    }, o);
  }, r), e;
}
d.after = function() {
  return B(arguments, this, !1, !1, !1, !0, !0);
};
d.append = function() {
  return B(arguments, this, !1, !1, !0);
};
function ge(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (L(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    _(i) && (e ? y(i).empty().append(t) : i.innerHTML = t);
  });
}
d.html = ge;
d.appendTo = function(t) {
  return B(arguments, this, !0, !1, !0);
};
d.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = y(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
d.before = function() {
  return B(arguments, this, !1, !0);
};
d.wrapAll = function(t) {
  let e = y(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
d.wrap = function(t) {
  return this.each((e, n) => {
    const i = y(t)[0];
    y(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
d.insertAfter = function(t) {
  return B(arguments, this, !0, !1, !1, !1, !1, !0);
};
d.insertBefore = function(t) {
  return B(arguments, this, !0, !0);
};
d.prepend = function() {
  return B(arguments, this, !1, !0, !0, !0, !0);
};
d.prependTo = function(t) {
  return B(arguments, this, !0, !0, !0, !1, !1, !0);
};
d.contents = function() {
  return y(H(k(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
d.next = function(t, e, n) {
  return V(y(H(k(this, "nextElementSibling", e, n))), t);
};
d.nextAll = function(t) {
  return this.next(t, !0);
};
d.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
d.parents = function(t, e) {
  return V(y(H(k(this, "parentElement", !0, e))), t);
};
d.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
d.prev = function(t, e, n) {
  return V(y(H(k(this, "previousElementSibling", e, n))), t);
};
d.prevAll = function(t) {
  return this.prev(t, !0);
};
d.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
d.map = function(t) {
  return y(Kt.apply([], Rt.call(this, (e, n) => t.call(e, n, e))));
};
d.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
d.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && O(n, "position") === "static"; )
      n = n.offsetParent;
    return n || St;
  });
};
d.slice = function(t, e) {
  return y(Lt.call(this, t, e));
};
const me = /-([a-z])/g;
function dt(t) {
  return t.replace(me, (e, n) => n.toUpperCase());
}
d.ready = function(t) {
  const e = () => setTimeout(t, 0, y);
  return j.readyState !== "loading" ? e() : j.addEventListener("DOMContentLoaded", e), this;
};
d.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = y(e);
    n.replaceWith(n.children());
  }), this;
};
d.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + X.pageYOffset,
    left: e.left + X.pageXOffset
  };
};
d.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = O(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && O(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && _(s)) {
      const r = y(s).offset();
      n.top -= r.top + F(s, "borderTopWidth"), n.left -= r.left + F(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - F(t, "marginTop"),
    left: n.left - F(t, "marginLeft")
  };
};
const Nt = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
d.prop = function(t, e) {
  if (t) {
    if (z(t))
      return t = Nt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
d.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Nt[t] || t];
  });
};
const ye = /^--/;
function ht(t) {
  return ye.test(t);
}
const rt = {}, { style: $e } = Tt, be = ["webkit", "moz", "ms"];
function ve(t, e = ht(t)) {
  if (e)
    return t;
  if (!rt[t]) {
    const n = dt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${be.join(`${i} `)}${i}`.split(" ");
    T(s, (r, o) => {
      if (o in $e)
        return rt[t] = o, !1;
    });
  }
  return rt[t];
}
const Ee = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function jt(t, e, n = ht(t)) {
  return !n && !Ee[t] && Pt(e) ? `${e}px` : e;
}
function xe(t, e) {
  if (z(t)) {
    const n = ht(t);
    return t = ve(t, n), arguments.length < 2 ? this[0] && O(this[0], t, n) : t ? (e = jt(t, e, n), this.each((i, s) => {
      _(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
d.css = xe;
function Ot(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Ce = /^\s+|\s+$/;
function Ct(t, e) {
  const n = t.dataset[e] || t.dataset[dt(e)];
  return Ce.test(n) ? n : Ot(JSON.parse, n);
}
function Ae(t, e, n) {
  n = Ot(JSON.stringify, n), t.dataset[dt(e)] = n;
}
function we(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Ct(this[0], i);
    return n;
  }
  if (z(t))
    return arguments.length < 2 ? this[0] && Ct(this[0], t) : L(e) ? this : this.each((n, i) => {
      Ae(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
d.data = we;
function kt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
T([!0, !1], (t, e) => {
  T(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    d[s] = function(r) {
      if (this[0])
        return K(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : J(this[0]) ? kt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? F(this[0], `margin${n ? "Top" : "Left"}`) + F(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
T(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  d[n] = function(i) {
    if (!this[0])
      return L(i) ? void 0 : this;
    if (!arguments.length)
      return K(this[0]) ? this[0].document.documentElement[`client${e}`] : J(this[0]) ? kt(this[0], e) : this[0].getBoundingClientRect()[n] - vt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, o) => {
      if (!_(o))
        return;
      const c = O(o, "boxSizing");
      o.style[n] = jt(n, s + (c === "border-box" ? vt(o, !t) : 0));
    });
  };
});
const At = "___cd";
d.toggle = function(t) {
  return this.each((e, n) => {
    if (!_(n))
      return;
    const i = Et(n);
    (L(t) ? i : t) ? (n.style.display = n[At] || "", Et(n) && (n.style.display = oe(n.tagName))) : i || (n[At] = O(n, "display"), n.style.display = "none");
  });
};
d.hide = function() {
  return this.toggle(!1);
};
d.show = function() {
  return this.toggle(!0);
};
const wt = "___ce", pt = ".", gt = { focus: "focusin", blur: "focusout" }, Vt = { mouseenter: "mouseover", mouseleave: "mouseout" }, _e = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function mt(t) {
  return Vt[t] || gt[t] || t;
}
function yt(t) {
  const e = t.split(pt);
  return [e[0], e.slice(1).sort()];
}
d.trigger = function(t, e) {
  if (z(t)) {
    const [i, s] = yt(t), r = mt(i);
    if (!r)
      return this;
    const o = _e.test(r) ? "MouseEvents" : "HTMLEvents";
    t = j.createEvent(o), t.initEvent(r, !0, !0), t.namespace = s.join(pt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in gt;
  return this.each((i, s) => {
    n && W(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Bt(t) {
  return t[wt] = t[wt] || {};
}
function Se(t, e, n, i, s) {
  const r = Bt(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function Jt(t, e) {
  return !e || !ct.call(e, (n) => t.indexOf(n) < 0);
}
function Q(t, e, n, i, s) {
  const r = Bt(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, c, a]) => {
      if (s && a.guid !== s.guid || !Jt(o, n) || i && i !== c)
        return !0;
      t.removeEventListener(e, a);
    }));
  else for (e in r)
    Q(t, e, n, i, s);
}
d.off = function(t, e, n) {
  if (L(t))
    this.each((i, s) => {
      !_(s) && !J(s) && !K(s) || Q(s);
    });
  else if (z(t))
    W(e) && (n = e, e = ""), T(et(t), (i, s) => {
      const [r, o] = yt(s), c = mt(r);
      this.each((a, l) => {
        !_(l) && !J(l) && !K(l) || Q(l, c, o, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
d.remove = function(t) {
  return V(this, t).detach().off(), this;
};
d.replaceWith = function(t) {
  return this.before(t).remove();
};
d.replaceAll = function(t) {
  return y(t).replaceWith(this), this;
};
function Te(t, e, n, i, s) {
  if (!z(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return z(e) || (L(e) || G(e) ? e = "" : L(n) ? (n = e, e = "") : (i = n, n = e, e = "")), W(i) || (i = n, n = void 0), i ? (T(et(t), (r, o) => {
    const [c, a] = yt(o), l = mt(c), u = c in Vt, p = c in gt;
    l && this.each((g, f) => {
      if (!_(f) && !J(f) && !K(f))
        return;
      const h = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Jt(a, m.namespace.split(pt)) || !e && (p && (m.target !== f || m.___ot === l) || u && m.relatedTarget && f.contains(m.relatedTarget)))
          return;
        let C = f;
        if (e) {
          let b = m.target;
          for (; !Ft(b, e); )
            if (b === f || (b = b.parentNode, !b))
              return;
          C = b;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return C;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const v = i.call(C, m, m.___td);
        s && Q(f, l, a, e, h), v === !1 && (m.preventDefault(), m.stopPropagation());
      };
      h.guid = i.guid = i.guid || y.guid++, Se(f, l, a, e, h);
    });
  }), this) : this;
}
d.on = Te;
function Ie(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
d.one = Ie;
const ze = /\r?\n/g;
function Re(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(ze, `\r
`))}`;
}
const Le = /file|reset|submit|button|image/i, Ut = /radio|checkbox/i;
d.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    T(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Le.test(s.type) || Ut.test(s.type) && !s.checked)
        return;
      const r = Mt(s);
      if (!L(r)) {
        const o = Z(r) ? r : [r];
        T(o, (c, a) => {
          t += Re(s.name, a);
        });
      }
    });
  }), t.slice(1);
};
/**
 * HForm/utils.js
 * Utils module for Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
window.$ = y;
window.jQuery = window.$;
function I(t) {
  return t && typeof t == "object" && t.constructor === Object;
}
function Pe(t) {
  return `${t}${Math.floor(Math.random() * Date.now()).toString(32)}`;
}
function _t(t, e, n) {
  if (window.fetch) {
    var i = new Headers({
      "Content-Type": "text/plain; charset=UTF-8"
    }), s = {
      method: "GET",
      headers: i,
      mode: "cors",
      cache: "default"
    };
    window.fetch(t, s).then(function(r) {
      return r.text();
    }).then(function(r) {
      typeof r == "string" && n(r, "OK");
    });
  } else
    get(t, e, n);
}
function Fe(t, e, n = null, i = ".") {
  var s = n ? e.split(n).at(-1) : e;
  const r = s.split(i);
  var o = t;
  return r.forEach((c) => {
    if (o[c]) o = o[c];
    else return null;
  }), o === t ? null : o;
}
function He(t, e, ...n) {
  if (typeof t != "function")
    throw new TypeError("HU.proxy: le premier argument doit être une fonction");
  return n.length ? function(...i) {
    return t.apply(e, [...n, ...i]);
  } : t.bind(e);
}
/**
 * HForm/field-imgfile.js
 * Template file for select fields in Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
const Me = (t) => {
  const e = t, n = t.fid, i = t.value.value, s = !!t.value.unit && t.value.unit != "", r = t.value.options, o = t.value.options_img, c = !!Array.isArray(o);
  if (c && o.length < r.length)
    for (var u = o.length; u < r.length; u++)
      _img.push("select/default.png");
  const a = e.img_path ? `${e.img_path}/select/` : "/img/select/";
  var l = "product";
  e.translationContext && (l = e.translationContext);
  var u = 0, p = "";
  t.value.options.forEach((f) => {
    var h = "", m = "";
    f.value && f.label ? (h = f.value, m = HForm.transl(f.label, "products")) : typeof f == "number" ? (h = f, m = f) : typeof f == "string" && (h = f, m = HForm.transl(f, l)), p += `
    				<option ${s ? 'style="text-align: right;"' : ""} value="${h}" ${h === i ? "selected" : ""} 
    				${c ? `data-content="<div class='d-flex justify-content-between'><span>${m}</span><img src='${a}${o[u++]}' width='128px' height='128px'/></div>` : ""}
                  	>${m}</option>`;
  });
  var g = "";
  return u = 0, c && t.value.options.forEach((f) => {
    var h = "";
    f.value && f.label ? (f.value, h = HForm.transl(f.label, "products")) : typeof f == "number" ? h = f : typeof f == "string" && (h = HForm.transl(f, l)), g += `
                        <li>
                          <a role="option" class="dropdown-item" id="bs-select-1-0" tabindex="0" aria-index="${u}">
                            <span class="text">
                              <div class="d-flex justify-content-between">
                                <span style="white-space: normal;place-content: center;">${h}</span>
                                <img src="${a}${o[u++]}" style="width:128px;height:128px;">
                              </div>
                            </span>
                          </a>
                        </li>`;
  }), `${c ? `
              <div class="dropdown form-control bootstrap-select" id="${n}">` : ""}
               <select class="form-control" name="<%= fid %>zzzvalue" placeholder="" aria-labelledby="label<%= fid %>">
              ${p}
               </select>
              ${c ? `
                <button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="boite �tuis">
                  <div class="filter-option">
                    <div class="filter-option-inner">
                      <div class="filter-option-inner-inner">

                      </div>
                    </div> 
                  </div>
                </button>
                <div class="dropdown-menu" style="max-height: 511.74px; overflow: hidden; min-height: 0px;">
                  <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1" aria-activedescendant="bs-select-1-2" style="max-height: 493.74px; overflow: hidden auto; min-height: 0px;">
                    <ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;">
				${g}  
                    </ul>
                  </div>
                </div>` : ""}
        ${c ? `
              </div>` : ""}
     ${c ? `
     <script type="text/javascript">
      new HU.BtSelect($("div.bootstrap-select#<%= fid %>"));
    <\/script>` : ""}`;
};
/**
 * HForm/field-imgfile.js
 * Template file for multiselect fields in Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
const Ne = (t) => {
  const e = t, n = t.value, i = t.fid, s = t.label;
  var r = e.translationContext ? e.translationContext : "product";
  console.log("field-multiselect"), console.log(e);
  const o = n.value, c = n.separator && n.separator !== "" ? n.separator : ";", a = Array.isArray(o) ? o : o.split(c);
  console.log(a);
  const l = a.length, u = n.units, p = [];
  var g = n.options;
  const f = n.datas, h = typeof multiselect_filter == "object" && typeof n.filter == "string" && typeof multiselect_filter[n.filter] == "function" ? multiselect_filter[n.filter] : null, m = n.labels, C = typeof n.cols == "number" && [1, 2, 3, 4, 6].includes(n.cols) ? n.cols : 1;
  !Array.isArray(g) && typeof h == "function" && (g = h(f));
  var v = 12;
  C === 2 ? v = 6 : C === 3 ? v = 4 : C === 4 ? v = 3 : C === 6 && (v = 2);
  const b = [], M = [];
  b.length = l, M.length = l, p.length = l;
  for (var P = 0, x = 0; x < l; x++)
    b[x] = [], M[x] = [], p[x] = Array.isArray(u) && !!u[x] && u[x] !== "";
  for (var x = 0; P < g.length; P++) {
    const A = Array.isArray(g[P]) ? g[P] : g[P].split(c);
    if (A.length === l)
      for (x = 0; x < l; x++) {
        const w = Array.isArray(A[x]) ? A[x][A.length - 1] : A[x];
        M[x].includes(w) || (M[x].push(w), b[x].push(A[x]));
      }
  }
  console.log(M);
  for (var x = 0; x < l; x++)
    b[x].sort();
  return console.log("coucou multiselect 2"), console.log(b), `
  <div class="row">` + (() => {
    for (var N = "", A = 0; A < l; A++) {
      const w = Array.isArray(m) ? m[A] : null, Wt = b[A];
      console.log("coucou multiselect 3"), N += ` 
    <div class="col-${v}">
      ${w ? `
      <div class="card mt-2 mb-2 border">  
        <div class="card-header h6">
            <label for="${i}_${A}">${HForm.transl(s, r)}${HForm.transl(w, r)}</label>
            <div role="help" field="${i}_${A}"></div>
        </div>` : `
      <div class="card border-0">  `}
        <div class="card-body ${w ? "" : "p-0"}">
            <div class="input-group">
               <select class="form-control" role="multiselect" data-index="${A}" fid="${i}" name="${i}_${A}zzzvalue" placeholder="">
    ` + (() => {
        var $t = "";
        return Wt.forEach((R) => {
          var D = "", q = "";
          Array.isArray(R) && R.length > 1 ? (D = R[1], q = HForm.transl(R[0], "products")) : R.value && R.label ? (D = R.value, q = HForm.transl(R.label, "products")) : typeof R == "number" ? (D = R, q = R) : typeof R == "string" && (D = R, q = HForm.transl(R, r)), $t += `
                    <option ${p[A] ? 'style="text-align: right;"' : ""} 
                        value="${D}" ${D === a[A] ? "selected" : ""}>${q}</option>`;
        }), $t;
      })() + `
               </select>
            ${p[A] ? `
              <span class="input-group-text">${u[A]}</span>` : ""}
          </div>
      </div>
    </div>
  </div>`;
    }
    return N;
  })() + `
    <input type="hidden" role="multiselect" name="${i}" value="${o}"/>
  </div>`;
};
/**
 * HForm/field-imgfile.js
 * Template file for multicontrol fields in Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
const je = (t) => {
  const e = t, n = t.value, i = t.fid, s = t.label;
  var r = n.translationContext ? n.translationContext : e.translationContext ? e.translationContext : "product";
  console.log("field-multicontrol"), console.log(e);
  const o = e.label && s !== "";
  return `
    <div class="col-12" role="fieds-multicontrol" id="${i}">
      <input type="hidden" name="${i}[value][kind]" value="${n.askind ? n.askind : n.kind}">
       ${o ? `
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label id="label${i}">${HForm.transl(s, r)}</label>
            <div role="help" field="${i}"></div>
        </div>` : `
      <div class="card border-0 p-0">`}
        <div class="card-body container ${o ? "" : "p-0"}" aria-labelledby="label${i}">
            <div class="row">` + (() => {
    var c = "";
    return Object.entries(n.value).forEach((a) => {
      var [l, u] = a;
      const p = i.search(/zzz/) < 0 ? `${i}zzzvaluezzzvaluezzz${l}` : `${i}zzzvaluezzz${l}`;
      if (u.unit && u.unit != "", u.label && u.label, u.translationContext && u.translationContext, u.kind) {
        const g = { fid: p };
        $.extend(g, u), g.value = ["number", "text"].includes(u.kind) ? u.value : u, u.kind === "multicontrol" && (g.value = u), c += HForm.template.tplField(g);
      }
    }), c;
  })() + `
            </div>
        </div>
      </div>
    </div>`;
};
/**
 * HForm/form.js
 * Core rendering class for Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
let S = class E {
  static instances = [];
  static modules = [];
  static rootejs = { base: "/ejs/" };
  static rootimg = { base: "/img/" };
  static rootcss = { base: "/css/" };
  static rootlang = { base: "/lang/" };
  static mainbar = null;
  static ejsByKind = {
    form: "field-form",
    imgFile: "field-imgfile",
    imgFileArchive: "field-imgfileArchive",
    "tatoo-img": "field-tatoo-img",
    "tatoo-text": "field-tatoo-text",
    number: "field-number",
    text: "field-text",
    string: "field-text",
    select: "field-select",
    multiselect: "field-multiselect",
    multicontrol: "field-multicontrol",
    object: "field-object",
    array: "field-array"
  };
  static transl = (e, n) => e;
  static templates = [];
  static template = null;
  static getKind(e) {
    return typeof e == "object" && typeof e.kind == "string" && typeof E.ejsByKind[e.kind] == "string" || typeof e == "object" && typeof e.kind == "string" && typeof E.ejsByKind[e.kind] == "object" && typeof E.ejsByKind[e.kind].url == "string" ? e.kind : typeof e;
  }
  static getRootCss(e) {
    return typeof this.rootcss[e] == "string" ? this.rootcss[e] : typeof e == "string" && this.modules.includes(e) ? `/modules/${e}/css/` : typeof this.rootcss.base == "string" ? this.rootcss.base : "/css/";
  }
  static getRootImg(e) {
    var n = "/img/";
    return typeof this.rootimg[e] == "string" ? n = this.rootimg[e] : typeof e == "string" && this.modules.includes(e) ? n = `/modules/${e}/img/` : typeof this.rootimg.base == "string" && (n = this.rootimg.base), `${e}`, `${this.rootimg[e]}${this.modules.includes(e)}${n}`, n;
  }
  static getRootEjs(e) {
    var n = "/ejs/";
    return typeof this.rootejs[e] == "string" ? n = this.rootejs[e] : typeof e == "string" && this.modules.includes(e) ? n = `/modules/${e}/ejs/` : typeof this.rootejs.base == "string" && (n = this.rootejs.base), `${e}`, `${this.rootejs[e]}${this.modules.includes(e)}${n}`, n;
  }
  static getEJSbyKind(e) {
    var n = "/ejs/";
    typeof E.rootejs.base == "string" && (n = E.rootejs.base);
    let i = E.ejsByKind[e];
    var s = "base";
    return I(i) && (i.module !== void 0 && (s = i.module.name), i.url !== void 0 && (i = i.url)), n = E.getRootEjs(s), typeof i == "string" ? `${n}${i}.ejs` : `${n}${e}.ejs`;
  }
  static getCallBackByKind(e) {
    let n = E.ejsByKind[e], i;
    return typeof n == "object" && n.module !== void 0 && (typeof n.module.getLocals == "function" ? i = n.module.getLocals : `${n.module.name}`), i;
  }
  static getEJSForContent(e) {
    return E.getEJSbyKind(E.getKind(e));
  }
  static onloadHtmlEJS(e, n, i, s, r, o) {
    `${$(e)}${n}`;
    const c = E.getKind(i.value);
    if (typeof r == "function" && r(), typeof s == "function") s();
    else if (c == "array") {
      var a = 0;
      value.forEach((l) => {
        let u = `#${i.fid}zzz${a}`;
        E.htmlEJS($(u), E.getEJSForContent(l), { fid: `${u}`, label: "#{gid}", value: l }), a++;
      });
    } else if (c == "object")
      for (const [l, u] of Object.entries(i.value)) {
        let p = `#${i.fid}zzz${l}`;
        E.htmlEJS($(p), E.getEJSForContent(u), { fid: `${i.fid}zzz${l}`, label: l, value: u });
      }
  }
  static appendEJS(e, n, i, s) {
    `${$(e).attr("id")}${n}`;
    var r = 0;
    const o = function() {
      return r++, $(e).find('[role="waitIncludeEJS"]').length === 0 && typeof s == "function" ? s() : r < 6 ? window.setTimeout(o, 200) : null;
    }, c = function(a, l, u) {
      if ($(e.length > 0)) {
        console.log($(e)), console.log(a), console.log(i);
        const p = ejs.render(a, i);
        if (console.log(p), [`
`, ""].includes(p) ? console.error(`ejs.render bad return, typeof:${typeof p} !!!`) : $(e).append(p), $(e).find('[role="waitIncludeEJS"]').length === 0 && typeof s == "function") return s();
        if (typeof s == "function") return o();
      }
    };
    e !== null && e.length > 0 && n !== "" && _t(n, "", c);
  }
  static htmlEJS(e, n, i, s, r) {
    var o = 0;
    const c = function() {
      o++;
      const l = $(e).find('[role="waitIncludeEJS"]');
      return `${l.length}${o}`, l.length === 0 ? E.onloadHtmlEJS(e, n, i, s, r) : o < 6 ? window.setTimeout(c, 200) : console.error(`unable to load waitIncludeEJS : ${l.length}`);
    }, a = async function(l, u, p) {
      var g = i;
      typeof i.kind == "string" && typeof i.callbackGetLocals == "function" && (g = i.callbackGetLocals(i.kind, i)), g.img_path = E.getRootImg();
      const f = await ejs.render(l, g, { debug: !1 });
      return await $(e).html(f), window.setTimeout(c, 200);
    };
    e !== null && e.length > 0 && n !== "" && _t(n, "", a);
  }
  static sortFields(e, n) {
    const i = [], s = n.slice(), r = {};
    return s.forEach((o) => {
      r[o.fid] = o;
    }), Array.isArray(e) && e.forEach((o) => {
      if (Array.isArray(o) && o.length > 1) {
        const c = {}, a = c[o[0]] = [];
        o.shift(), o.forEach((l) => {
          const u = l.split(":"), p = u[0], g = r[p];
          if (I(g)) {
            const f = s.indexOf(g);
            f > -1 && s.splice(f, 1), u.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(u[1])) && (g.bt_nb_cols = parseInt(u[1])), a.push(g);
          }
        }), i.push(c);
      } else if (typeof o == "string") {
        const c = o.split(":"), a = c[0], l = r[a];
        if (I(l)) {
          const u = s.indexOf(l);
          u > -1 && s.splice(u, 1), c.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(c[1])) && (l.bt_nb_cols = parseInt(c[1])), i.push(l);
        }
      }
    }), s.forEach((o) => i.push(o)), i;
  }
  $find(e) {
    const n = $(this.element).find(e);
    return n.length > 0 ? n : typeof E.mainbar == "string" ? $(E.mainbar).find(e) : $([]);
  }
  selector_effect_show_target(e) {
    this.$find("#" + e.join(",#")).show();
  }
  selector_effect_enabled_target(e) {
    const n = {};
    e.forEach((i) => {
      const s = i.split(":"), r = s[0];
      s.shift(), n[r] = s;
    }), Object.entries(n).forEach((i) => {
      const [s, r] = i, o = this.$find("input[type=radio][name='" + s + "']");
      r.length > 0 ? r.forEach((a) => {
        o.length > parseInt(a) && (o[parseInt(a)].disabled = !1);
      }) : o.each(function(a, l) {
        l.disabled = !1;
      });
      const c = this.$find("select[name='" + s + "zzzvalue']");
      if (r.length > 0) {
        const a = c.find("option");
        r.forEach((l) => {
          a.length > parseInt(l) && (a[parseInt(r[0])].disabled = !1);
        });
      } else c.length > 0 && (c[0].disabled = !1);
    });
  }
  selector_effect_disabled_target(e) {
    const n = {};
    e.forEach((i) => {
      const s = i.split(":"), r = s[0];
      s.shift(), n[r] = s;
    }), Object.entries(n).forEach((i) => {
      const [s, r] = i, o = this.$find("input[type=radio][name='" + s + "']");
      r.length > 0 ? r.forEach((a) => {
        o.length > parseInt(a) && (o[parseInt(a)].disabled = !0);
      }) : o.each(function(a, l) {
        l.disabled = !0;
      });
      const c = this.$find("select[name='" + s + "zzzvalue']");
      if (r.length > 0) {
        const a = c.find("option");
        r.forEach((l) => {
          a.length > parseInt(l) && (a[parseInt(r[0])].disabled = !0);
        });
      } else c.length > 0 && (c[0].disabled = !0);
    });
  }
  selector_effect_hide_target(e) {
    const n = "#" + e.join(",#");
    this.$find(n).hide();
  }
  selector_effect_set_target(e, n) {
    const i = {};
    e.forEach((a) => {
      const l = a.split(":"), u = l[0];
      l.shift(), i[u] = l;
    });
    const s = Object.keys(i), r = "input[name=" + s.join("],input[name=") + "]";
    this.$find(r).each(function(a, l) {
      const u = $(l), p = i[u.attr("name")];
      Array.isArray(p) && p.length > 0 ? u.val(p[0]) : n && u.val(n);
    });
    const o = "select[name=" + s.join("zzzvalue],select[name=") + "zzzvalue]", c = "select[name=" + s.join("zzzvalue] option,select[name=") + "zzzvalue] option";
    this.$find(`${c}`).each(function(a, l) {
      const u = $(l);
      var p = u.parent().attr("name"), g = [];
      p && (g = i[p.split("zzzvalue")[0]]);
      var f = null;
      Array.isArray(g) && g.length > 0 ? f = g : n && (f = n), typeof f == "string" && u.attr("value") === f || Array.isArray(f) && f.length > 0 && u.attr("value") === f[0] ? u.parent()[0].selectedIndex = u[0].index : u.attr("selected", !1);
    }), n !== "stop_propagate" && this.$find(`${o}`).trigger("change");
  }
  selector_effect_select_target(e, n) {
    const i = {};
    e.forEach((s) => {
      const r = s.split(":"), o = r[0];
      r.shift(), i[o] = r;
    }), Object.entries(i).forEach((s) => {
      const [r, o] = s, c = this.$find("input[type=radio][name='" + r + "']");
      o.length > 0 && c.length > parseInt(o[0]) && (c[parseInt(o[0])].checked = !0);
    });
  }
  selector_effect_show_options(e, n) {
    const i = {};
    e.forEach((c) => {
      const a = c.split(":"), l = a[0];
      a.shift(), i[l] = a;
    });
    const s = Object.keys(i), r = "select[name='" + s.join("zzzvalue'] option,select[name='") + "zzzvalue'] option", o = "select[name='" + s.join("'] option,select[name='") + "'] option";
    console.log("selector_effect_show_options()"), console.log(o), console.log(i), this.$find(`${o}, ${r}`).each(function(c, a) {
      const l = $(a), u = a.value ? a.value : l.attr("value"), p = parseInt(u), g = l.parents("select").attr("name").split("zzzvalue"), f = i[g[0]];
      console.log(`branch on ${g[0]}>${u}, args :`), console.log(f);
      var h = null;
      if (Array.isArray(f) && f.length > 0 ? h = f : n && (h = n), typeof h == "string" && l.attr("value") === h)
        l.show();
      else if (Array.isArray(h) && h.length > 0) {
        console.log("toselect"), console.log(h);
        const C = h.slice();
        C.shift(), console.log("valArr"), console.log(C);
        const v = [];
        var m = 0;
        const b = v.length = C.length;
        for (; m < b; m++) v[m] = parseInt(C[m]);
        console.log("valArrInt"), console.log(v), h[0] === "<" && h.length > 1 && p < parseInt(h[1]) || h[0] === "<=" && h.length > 1 && p <= parseInt(h[1]) || h[0] === ">" && h.length > 1 && p > parseInt(h[1]) || h[0] === ">=" && h.length > 1 && p >= parseInt(h[1]) || h[0] === "%" && h.length > 2 && p >= parseInt(h[1]) && p <= parseInt(h[2]) || h[0] === "=" && C.includes(u) || h[0] === "=" && p && v.includes(p) || h[0] === "!=" && p && !v.includes(p) || h[0] === "!=" && !C.includes(u) ? l.show() : l.hide();
      } else l.hide();
    });
  }
  onChangeMultiselect(e, n) {
    console.log(`onChangeMultiselect(${e},${n})`);
    const i = this.locals;
    var s = null, r = null;
    i.fields.forEach((v) => {
      if (console.log(v), v.fid === e) s = v.value;
      else {
        const b = Fe(v, e, v.fid + "zzz", "zzz");
        b && (r = s, s = b);
      }
    });
    const o = this.$find(`select[role=multiselect][fid=${e}]`), c = this.$find(`input[role=multiselect][name=${e}]`);
    var a = parseInt(n);
    console.log(a), console.log(o), console.log(r), console.log(s);
    const l = [];
    o.each(function(v, b) {
      l.push($(b).val());
    }), console.log(l);
    const u = $(o[a + 1]);
    if (s) {
      var p = s.options;
      const v = s.datas;
      var g = s.filter;
      g = typeof multiselect_filter == "object" && typeof g == "string" && typeof multiselect_filter[g] == "function" ? multiselect_filter[g] : null, !Array.isArray(p) && typeof g == "function" && (p = g(v)), s.options = p;
    }
    if (o.length > 0 && a < o.length - 1 && s && Array.isArray(s.options)) {
      const v = [], b = s.options.length, M = s.separator && s.separator !== "" ? s.separator : ";";
      v.length = b;
      for (var f = 0; f < b; f++)
        v[f] = Array.isArray(s.options[f]) ? s.options[f] : s.options[f].split(M);
      console.log(v);
      const P = [];
      for (var h = 0; h < v.length; h++) {
        for (var m = !0, f = 0; f <= a; f++) {
          const w = v[h][f];
          m = m && (Array.isArray(w) && w.at(-1) === l[f] || w === l[f]);
        }
        m && P.push(v[h]);
      }
      console.log(P);
      const x = [];
      P.forEach((A) => {
        const w = A[a + 1];
        x.push(Array.isArray(w) ? w.at(-1) : w);
      }), console.log(x);
      const N = $(u).find("option");
      console.log(N);
      var C = N.length - 1;
      N.each(function(A, w) {
        x.includes(w.value) ? ($(w).show(), C = A < C ? A : C) : $(w).hide();
      }), console.log(u), x.includes(u.val()) || (u[0].selectedIndex = C);
    }
    a < o.length - 2 ? u.trigger("change") : c.val(l.join(";"));
  }
  initMultiSelectEvents() {
    const e = this, n = this.$find("select[role=multiselect]");
    console.log(`initMultiSelectEvents on ${n.length}`), n.off("change").on("change", e, function(i) {
      console.log("multiselect change !"), console.log(i);
      const s = $(i.currentTarget), r = s.attr("data-index");
      e.onChangeMultiselect(s.attr("fid"), r);
    }), this.$find('select[role="multiselect"][data-index="0"]').trigger("change");
  }
  setUiCustomizerEvents() {
    console.log("setUiCustomizerEvents"), this.initMultiSelectEvents();
    const e = this, n = this.locals, i = {
      show: e.selector_effect_show_target,
      hide: e.selector_effect_hide_target,
      set: e.selector_effect_set_target,
      select: e.selector_effect_select_target,
      enabled: e.selector_effect_enabled_target,
      disabled: e.selector_effect_disabled_target,
      show_options: e.selector_effect_show_options
    };
    function s(r, o, c) {
      console.log(`on ${o} change : ${c}`), console.log(c);
      const a = $(r.target).val(), l = parseFloat(a);
      I(c) && Object.entries(c).forEach((u) => {
        const [p, g] = u, f = p.split("|"), h = [], m = [], C = [], v = [];
        f.forEach((b) => {
          b.length === 0 || (b[0] === "<" ? C.push(parseFloat(b.substring(1, b.length))) : b[0] === ">" ? v.push(parseFloat(b.substring(1, b.length))) : b[0] === "!" ? m.push(b.substring(1, b.length)) : h.push(b));
        }), (h.includes(a) || m.length > 0 && !m.includes(a) || l !== NaN && C.length > 0 && l < C[0] || l !== NaN && v.length > 0 && l > v[0]) && I(g) && Object.entries(g).forEach((b) => {
          const [M, P] = b, x = M.split(":"), N = i[x[0]];
          var A = x[0];
          x.length > 1 && (A = x[1]), typeof N == "function" && Array.isArray(P) && N.call(e, P, A);
        });
      });
    }
    I(n.user_interface_organizer) && I(n.user_interface_organizer.onchange_effects) && Object.entries(n.user_interface_organizer.onchange_effects).forEach((r) => {
      const [o, c] = r;
      this.$find(`select[name=${o}zzzvalue]`).on("change", function(a) {
        s(a, o, c);
      }).trigger("change"), this.$find(`input[name=${o}]`).on("change", function(a) {
        s(a, o, c);
      }).trigger("change");
    });
  }
  triggerIfFieldsLoaded() {
    const e = [];
    this.locals.fields.forEach((n) => {
      n.toBefilled && e.push(n.fid);
    }), this.locals.displayed_fields.length === e.length && $(this.element).trigger("HFORM_FIELDS_DISPLAYED");
  }
  add2displayed(e) {
    `${e.fid}`, e.fid ? this.locals.displayed_fields.includes(e.fid) ? (`${e.fid}`, void 0) : this.locals.displayed_fields.push(e.fid) : (console.error("field with no fid"), this.locals.displayed_fields.push(e)), this.triggerIfFieldsLoaded();
  }
  /****************************************************
   * 
   *					APIs
   *
   * ***************************************************/
  static debugOnchange(e) {
    console.log(e), alert(JSON.stringify(e));
  }
  constructor(e, n) {
    E.instances.push(this), this.tpl = n, this.element = e, E.template = n.template && E.templates[n.template] ? E.templates[n.template] : E.templates.bootstrap5v1, Array.isArray(e) && e.length > 0 ? e[0].hform = this : e && (e.hform = this), this.locals = {
      fields: [],
      fieldIds: [],
      displayed_fields: [],
      malformed_fields: []
    }, $.extend(this.locals, n), Array.isArray(this.locals.fields) && this.locals.fields.forEach((i) => {
      i.fid && !this.locals.fieldIds.includes(i.fid) && this.locals.fieldIds.push(i.fid);
    }), this.onchange = E.debugOnchange, typeof n.onchange == "function" && (this.onchange = n.onchange);
  }
  display(e) {
    const n = this, i = function() {
      n.setUiCustomizerEvents();
      const c = () => {
        n.onchange(n.getValues());
      };
      n.$find("form").on("change", c), typeof catllback == "function" && e(n), typeof n.locals.onload == "function" && n.locals.onload(n);
    };
    $(this.element).on("HFORM_FIELDS_DISPLAYED", i);
    const s = this.locals;
    s.fields;
    const r = function() {
      var c = s.fields.slice();
      c.forEach((a) => {
        const l = E.getKind(a.value), u = E.getCallBackByKind(l);
        var p = a;
        typeof u == "function" && I(p) && (p.kind = l, p.callbackGetLocals = u);
        var g = E.getEJSForContent(a.value);
        a.unit && (a.max || a.min || a.step) && (g = E.getEJSbyKind("number")), `${a.fid}${g}`, a.fid ? E.htmlEJS(
          n.$find(`.need-content#${a.fid}`),
          g,
          // HForm.getEJSForContent(field.value),
          p,
          null,
          He(n.add2displayed, n, a)
        ) : s.malformed_fields.push(a);
      });
    }, o = s;
    $(this.element).html(E.template.render(o)), this.triggerIfFieldsLoaded(), r();
  }
  setValues(e = {}) {
  }
  getValues() {
    const e = this.locals;
    e.fields;
    var n = {};
    e.fields.forEach((s) => n[s.fid] = s.value);
    var i = "";
    return this.$find(`${i} input,textarea,select`).each(function(s, r) {
      var o = null;
      (["INPUT", "TEXTAREA"].includes(r.tagName) || r.tagName === "SELECT") && (o = $(r).val());
      const c = $(r).attr("name");
      if (`${r.tagName}${c}`, e.fieldIds.includes(c)) {
        if (r.tagName === "INPUT" && $(r).attr("type") === "file")
          o = n[c];
        else {
          o = decodeURIComponent(o);
          try {
            o = JSON.parse(o);
          } catch {
          }
        }
        n[c] = o;
      } else if (typeof c == "string" && c.match(/zzz/) && $(r).attr("type") !== "hidden") {
        const h = c.split("zzz");
        for (var a = n, l = 0; l < h.length - 1; l++) {
          var u = h[l];
          a[u] !== void 0 ? a = a[u] : a[u] = {};
        }
        a[h[h.length - 1]], a[h[h.length - 1]] = o, a[h[h.length - 1]];
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && !c.match(/[]/) && ($(r).attr("type") === "checkbox" && $(r).attr("checked") || ["text", "hidden"].includes($(r).attr("type")) && o !== "" || ["SELECT", "TEXTAREA"].includes(r.tagName))) {
        var p = c.split("["), g = p.at(-1).split("]");
        g.length === 2 && g[1] !== "" && p.push(g[1]);
        for (var f = [], a = [n], l = 0; l < p.length; l++) {
          p[l];
          var u = p[l];
          u.at(-1) === "]" && (u = u.slice(0, -1)), f.push(u), typeof a[l][u] == "object" || (a[l][u] = {}), a.push(a[l][u]);
        }
        a.at(-2), a.at(-2)[f.at(-1)] = o, a.at(-2);
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && c.match(/[]/) && ($(r).attr("type") === "checkbox" && $(r).attr("checked") || ["text", "hidden"].includes($(r).attr("type")) && o !== "")) {
        const m = c.split("[]")[0].split("[");
        for (var f = [], a = [n], l = 0; l < m.length - 1; l++) {
          m[l];
          var u = m[l];
          u.at(-1) === "]" && (u = u.slice(0, -1)), f.push(u), typeof a[l][u] == "object" || (a[l][u] = {}), a.push(a[l][u]);
        }
        a.at(-2);
        const b = a.at(-2)[f.at(-1)];
        Array.isArray(b) ? b.push(val) : a.at(-2)[f.at(-1)] = [o], a.at(-2);
      }
    }), Object.entries(n).forEach((s) => {
      const [r, o] = s;
      e.fieldIds.includes(r) ? I(o) && o.value && (n[r] = o.value) : delete n[r];
    }), e.formJson = n, n;
  }
  static render(e, n, i = {}) {
    $.extend(n, i), new E(e, n).display();
  }
};
window.includeEJS = function(t, e, n = "div", i = "includeEJS") {
  let s = Pe("includeEJS"), r = e, o = S.getEJSbyKind(t);
  var c = 0;
  const a = async function(u, p, g) {
    c++, log(`${i}(${t})->todo(${s})`), log(u), log(r);
    const f = $(`#${s}`), h = ejs.render(u, r);
    return f.length > 0 && typeof h == "string" ? f.replaceWith(h) : f.length === 0 && typeof h == "string" && c < 10 ? (console.log(`unable to find includeEJS anchor element from id: ${s} => retry in 200ms`), window.setTimeout(a, 200, u, p, g)) : f.length === 0 && typeof h == "string" ? console.error(`unable to replace includeEJS anchor element from id: ${s}, cause to many try > 10 !!!`) : console.error(`unable to replace includeEJS anchor element from id: ${s}, cause rendering is malformed`), 0;
  }, l = JSON.stringify(e);
  return log(`EJS url: ${o}`), typeof o == "string" && o !== "" && o !== "undefined" && fetchEJS(o, e, a), log(`includeEJS, create tmp element with id: ${s}`), `<${n} id="${s}" role="${i}" kind="${t}" param="${l}"></${n}>`;
};
window.waitIncludeEJS = function(t, e, n = "div") {
  return window.includeEJS(t, e, n, "waitIncludeEJS");
};
S.templates.common = {
  tplKind: {
    text: (t) => `
        	      <input type="text" name="${t.fid}" id="${t.fid}" 
        	      	class="form-control ${t.unit ? "text-end" : ""}" 
        	      	placeholder="${t.placeholder ? S.transl(filed.placeholder, tContext) : ""}" 
        	      	style="min-width: 50px" 
        	      	value="${t.value}" 
        			${t.require ? "require" : ""}
        	      	aria-labelledby="label${t.fid}">
        	`,
    number: (t) => `
        	      <input type="number" name="${t.fid}" id="${t.fid}" 
        	      	class="form-control text-end"
        	      	placeholder="${t.placeholder ? S.transl(filed.placeholder, tContext) : ""}" 
        	      	style="min-width: 50px" 
        	      	value="${t.value}" 
        			min="${t.min}"
        			max="${t.max}"
        			step="${t.step}"
        			${t.require ? "require" : ""}
        	      	aria-labelledby="label${t.fid}">
        	`,
    select: Me,
    multiselect: Ne,
    multicontrol: je
  }
};
S.templates.bootstrap5v1 = {
  tplField: (t) => {
    const e = t.fid, n = t.value, i = t.translationContext ? t.translationContext : "product", s = !!t.label && t.label !== "", r = !!t.unit && t.unit != "", o = !!n.require && !!n.invalid_msg, c = {
      col: () => {
        var h = "col-12";
        return t.bt_nb_cols ? h = `col col-sm-12 col-lg-${t.bt_nb_cols}` : I(n) && n.kind === "multiselect" ? h = "col col-12" : !I(n) || I(n) && ["imgFile"].includes(n.kind) ? h = "col col-sm-12 col-md-6 col-lg-4" : I(n) && n.kind === "select" && (h = "col col-sm-12 col-lg-6"), h;
      },
      card: () => s ? "card mt-2 mb-2 border" : "card border-0",
      cardBody: () => "card-body",
      cardHeader: () => "card-header h6"
    }, a = s ? `<div class="${c.cardHeader()}">
            <label id="label${e}">${S.transl(t.label, i)}</label>
            <div role="help" field="${e}"></div>
        </div>` : "", l = r ? `<span class="input-group-text">${t.unit}</span>` : "", u = o ? `<div class="invalid-feedback">${_val.invalid_msg}</div>` : "", p = I(n) && typeof n.kind == "string" ? n.kind : t.min && t.max ? "number" : "text", g = S.templates.common.tplKind[p] ? S.templates.common.tplKind[p](t) : "", f = g === "";
    return t.toBefilled = f, `
              <div class="${c.col()}">
                <div class="${c.card()}">  
                 ${a}
                  <div class="${c.cardBody()}">
                    <div class="input-group ${f ? "need-content" : ""}" id="${e}">
    				${g}
                    ${l} 
                    </div>
                  ${u}     
                  </div>
                </div>
              </div>`;
  },
  tplGroup: (t) => {
    const e = t.gid, n = () => {
      var i = "";
      return t.fields.forEach((s) => i += S.templates.bootstrap5v1.tplField(s)), i;
    };
    return `
     <div class="col-12" role="fieds-group" id="${e}">
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label for="${e}">${S.transl(e, "products")}</label>
            <div role="help" field="${e}"></div>
        </div>
        <div class="card-body container">
            <div class="row">
     ${n()}
            </div>
        </div>
    </div>
    </div>`;
  },
  render: (t) => `
          <div class="container"> 
            <div class="row">
              <form class="needs-validation" novalidate>
              ${(() => {
    var n = "";
    return S.sortFields(t.user_interface_organizer, t.fields).forEach((s) => {
      typeof s.fid == "string" ? n += S.templates.bootstrap5v1.tplField(s) : I(s) && Object.entries(s).forEach((r) => {
        var [o, c] = r;
        Array.isArray(c) && c.length > 0 && (n += S.templates.bootstrap5v1.tplGroup({ gid: o, fields: c }));
      });
    }), n;
  })()}
              </form>
            </div>
          </div>
`
};
const lt = {
  ITEM_NUMBER: [1, 2, 3, 4, 5, 7, 8, 9, 10],
  MATERIAL_CSV: [
    "PVC Expanse;WHITE;2",
    "PVC Expanse;WHITE;3",
    "PVC Expanse;WHITE;4",
    "PVC Expanse;WHITE;5",
    "PVC Expanse;WHITE;6",
    "PVC Expanse;WHITE;10",
    "PVC Expanse;BLACK;3",
    "PVC Expanse;BLACK;5",
    "PVC Expanse;BLACK;8",
    "PVC Expanse;BLACK;10",
    "PVC Expanse;BLACK;19",
    "PVC Expanse;BLUE;3",
    "PVC Expanse;BLUE;5",
    "PVC Expanse;BLUE;8",
    "PVC Expanse;RED;3",
    "PVC Expanse;RED;5",
    "PVC Expanse;RED;8",
    "PVC Expanse;GREY;3",
    "PVC Expanse;GREY;5",
    "PVC Expanse;GREY;8",
    "PVC Compact;BLUE;2",
    "PVC Compact;WHITE;2",
    "PVC Compact;WHITE;3",
    "PVC Compact;BLACK;2",
    "PVC Compact;BLACK;3",
    "PVC Compact;RED;2",
    "PVC Compact;RED;3",
    "PVC Compact;YELLOW;2",
    "PVC Compact;YELLOW;3",
    "PMMA;TRANSPARENT;2",
    "PMMA;TRANSPARENT;3",
    "PMMA;TRANSPARENT;4",
    "PMMA;TRANSPARENT;5",
    "PMMA;TRANSPARENT;6",
    "PMMA;TRANSPARENT;8",
    "PMMA;TRANSPARENT;10",
    "PMMA;TRANSPARENT;12",
    "Corrugated Cardboard;WHITE;10",
    "Corrugated Cardboard;WHITE;16",
    "Corrugated Cardboard;WHITE;19",
    "Cardboard;WHITE;2",
    "Cardboard;WHITE;3",
    "Cardboard;WHITE;5"
  ]
}, Oe = {
  MATERIAL_SELECTOR: {
    kind: "multiselect",
    value: "PVC Expanse;WHITE;10",
    options: lt.MATERIAL_CSV,
    labels: ["Kind", "Color", "Thickness"],
    units: ["", "", "mm"],
    separator: ";",
    cols: 3,
    // "datas" : "CALLFUNC(fetch,#POS1_ALIAS�API_GET_POS1_SELECTOR_DATAS)",
    context: {},
    filter: "pos1_selector_filter"
  }
};
S.tpl_case1 = {
  template: "bootstrap5v1",
  fields: [
    {
      fid: "q",
      label: "Quantity",
      unit: "ex",
      value: "1",
      min: "1",
      max: "10000",
      step: "1"
    },
    {
      fid: "MATERIAL",
      label: "",
      value: Oe.MATERIAL_SELECTOR
    },
    {
      fid: "height",
      label: "Height",
      unit: "mm",
      value: "1000",
      min: "300",
      max: "3000",
      step: "1"
    },
    {
      fid: "length",
      label: "Length",
      unit: "mm",
      value: "400",
      min: "100",
      max: "1500",
      step: "1"
    },
    {
      fid: "width",
      label: "Width",
      unit: "mm",
      value: "1000",
      min: "300",
      max: "3000",
      step: "1"
    },
    {
      fid: "sideOffset",
      label: "Side Offset",
      unit: "mm",
      value: "0",
      min: "0",
      max: "400",
      step: "1"
    },
    {
      fid: "cornerRadius",
      label: "Corner radius",
      unit: "mm",
      value: "40",
      min: "0",
      max: "400",
      step: "1"
    },
    {
      fid: "FSA",
      label: "Front Side Angle",
      unit: "degree",
      value: "15",
      min: "0",
      max: "30",
      step: "1"
    },
    {
      fid: "FL_H",
      label: "Low Front panel",
      unit: "mm",
      value: "80",
      min: "0",
      max: "300",
      step: "1"
    },
    {
      fid: "FT_H",
      label: "Top Front panel",
      unit: "mm",
      value: "100",
      min: "50",
      max: "300",
      step: "1"
    },
    {
      fid: "numShelfs",
      label: "Number of shelfs",
      unit: "",
      help: !0,
      helpTag: "papiers",
      value: {
        kind: "select",
        value: 3,
        options: lt.ITEM_NUMBER
      }
    },
    {
      fid: "numWalls",
      label: "Number of vertical walls",
      unit: "",
      value: {
        kind: "select",
        value: 2,
        options: lt.ITEM_NUMBER
      }
    }
  ],
  user_interface_organizer: [
    ["Order", "q"],
    ["Specs", "MATERIAL", "height", "length", "width", "numShelfs", "numWalls", "sideOffset"],
    ["Options", "FL_H", "FT_H", "cornerRadius", "FSA"]
  ],
  onchange_effects: [],
  onload: (t) => {
    alert("Form loaded !");
  },
  onchange: (t) => {
    console.log(t);
  },
  buttonConfirm: {
    label: "yes",
    action: function() {
      alert("coucou");
    }
  },
  helper: function() {
    return "popopo";
  }
};
window.HForm = S;
window.addEventListener("load", () => {
  $('div[role="DemoHopesForm"]').each((t, e) => {
    S.render(e, S.tpl_case1);
  });
});
export {
  S as default
};
