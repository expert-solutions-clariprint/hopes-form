const k = document, X = window, Tt = k.documentElement, V = k.createElement.bind(k), St = V("div"), it = V("table"), Wt = V("tbody"), $t = V("tr"), { isArray: Z, prototype: It } = Array, { concat: qt, filter: lt, indexOf: Lt, map: zt, push: Kt, slice: Rt, some: ct, splice: Gt } = It, Xt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Yt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Qt = /<.+>/, Zt = /^\w+$/;
function ut(t, e) {
  const n = te(e);
  return !t || !n && !J(e) && !T(e) ? [] : !n && Yt.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Zt.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class tt {
  constructor(e, n) {
    if (!e)
      return;
    if (ot(e))
      return e;
    let i = e;
    if (L(e)) {
      const s = n || k;
      if (i = Xt.test(e) && J(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Qt.test(e) ? Pt(e) : ot(s) ? s.find(e) : L(s) ? y(s).find(e) : ut(e, s), !i)
        return;
    } else if (U(e))
      return this.ready(e);
    (i.nodeType || i === X) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new tt(e, n);
  }
}
const h = tt.prototype, y = h.init;
y.fn = y.prototype = h;
h.length = 0;
h.splice = Gt;
typeof Symbol == "function" && (h[Symbol.iterator] = It[Symbol.iterator]);
function ot(t) {
  return t instanceof tt;
}
function q(t) {
  return !!t && t === t.window;
}
function J(t) {
  return !!t && t.nodeType === 9;
}
function te(t) {
  return !!t && t.nodeType === 11;
}
function T(t) {
  return !!t && t.nodeType === 1;
}
function ee(t) {
  return !!t && t.nodeType === 3;
}
function ne(t) {
  return typeof t == "boolean";
}
function U(t) {
  return typeof t == "function";
}
function L(t) {
  return typeof t == "string";
}
function R(t) {
  return t === void 0;
}
function G(t) {
  return t === null;
}
function Ft(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ft(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
y.isWindow = q;
y.isFunction = U;
y.isArray = Z;
y.isNumeric = Ft;
y.isPlainObject = ft;
function I(t, e, n) {
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
y.each = I;
h.each = function(t) {
  return I(this, t);
};
h.empty = function() {
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
h.extend = function(t) {
  return Y(h, t);
};
const ie = /\S+/g;
function et(t) {
  return L(t) ? t.match(ie) || [] : [];
}
h.toggleClass = function(t, e) {
  const n = et(t), i = !R(e);
  return this.each((s, r) => {
    T(r) && I(n, (o, c) => {
      i ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
h.addClass = function(t) {
  return this.toggleClass(t, !0);
};
h.removeAttr = function(t) {
  const e = et(t);
  return this.each((n, i) => {
    T(i) && I(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function se(t, e) {
  if (t) {
    if (L(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !T(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return G(n) ? void 0 : n;
      }
      return R(e) ? this : G(e) ? this.removeAttr(t) : this.each((n, i) => {
        T(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
h.attr = se;
h.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
h.hasClass = function(t) {
  return !!t && ct.call(this, (e) => T(e) && e.classList.contains(t));
};
h.get = function(t) {
  return R(t) ? Rt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
h.eq = function(t) {
  return y(this.get(t));
};
h.first = function() {
  return this.eq(0);
};
h.last = function() {
  return this.eq(-1);
};
function re(t) {
  return R(t) ? this.get().map((e) => T(e) || ee(e) ? e.textContent : "").join("") : this.each((e, n) => {
    T(n) && (n.textContent = t);
  });
}
h.text = re;
function N(t, e, n) {
  if (!T(t))
    return;
  const i = X.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function H(t, e) {
  return parseInt(N(t, e), 10) || 0;
}
function vt(t, e) {
  return H(t, `border${e ? "Left" : "Top"}Width`) + H(t, `padding${e ? "Left" : "Top"}`) + H(t, `padding${e ? "Right" : "Bottom"}`) + H(t, `border${e ? "Right" : "Bottom"}Width`);
}
const st = {};
function oe(t) {
  if (st[t])
    return st[t];
  const e = V(t);
  k.body.insertBefore(e, null);
  const n = N(e, "display");
  return k.body.removeChild(e), st[t] = n !== "none" ? n : "block";
}
function Et(t) {
  return N(t, "display") === "none";
}
function Ht(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function nt(t) {
  return L(t) ? (e, n) => Ht(n, t) : U(t) ? t : ot(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
h.filter = function(t) {
  const e = nt(t);
  return y(lt.call(this, (n, i) => e.call(n, i, n)));
};
function B(t, e) {
  return e ? t.filter(e) : t;
}
h.detach = function(t) {
  return B(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ae = /^\s*<(\w+)[^>]*>/, le = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, xt = {
  "*": St,
  tr: Wt,
  td: $t,
  th: $t,
  thead: it,
  tbody: it,
  tfoot: it
};
function Pt(t) {
  if (!L(t))
    return [];
  if (le.test(t))
    return [V(RegExp.$1)];
  const e = ae.test(t) && RegExp.$1, n = xt[e] || xt["*"];
  return n.innerHTML = t, y(n.childNodes).detach().get();
}
y.parseHTML = Pt;
h.has = function(t) {
  const e = L(t) ? (n, i) => ut(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
h.not = function(t) {
  const e = nt(t);
  return this.filter((n, i) => (!L(t) || T(i)) && !e.call(i, n, i));
};
function M(t, e, n, i) {
  const s = [], r = U(e), o = i && nt(i);
  for (let c = 0, l = t.length; c < l; c++)
    if (r) {
      const a = e(t[c]);
      a.length && Kt.apply(s, a);
    } else {
      let a = t[c][e];
      for (; a != null && !(i && o(-1, a)); )
        s.push(a), a = n ? a[e] : null;
    }
  return s;
}
function Ot(t) {
  return t.multiple && t.options ? M(lt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ce(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || Vt.test(n.type)) {
      const s = Z(t) ? zt.call(t, String) : G(t) ? [] : [String(t)];
      i ? I(n.options, (r, o) => {
        o.selected = s.indexOf(o.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = R(t) || G(t) ? "" : t;
  }) : this[0] && Ot(this[0]);
}
h.val = ce;
h.is = function(t) {
  const e = nt(t);
  return ct.call(this, (n, i) => e.call(n, i, n));
};
y.guid = 1;
function P(t) {
  return t.length > 1 ? lt.call(t, (e, n, i) => Lt.call(i, e) === n) : t;
}
y.unique = P;
h.add = function(t, e) {
  return y(P(this.get().concat(y(t, e).get())));
};
h.children = function(t) {
  return B(y(P(M(this, (e) => e.children))), t);
};
h.parent = function(t) {
  return B(y(P(M(this, "parentNode"))), t);
};
h.index = function(t) {
  const e = t ? y(t)[0] : this[0], n = t ? this : y(e).parent().children();
  return Lt.call(n, e);
};
h.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
h.siblings = function(t) {
  return B(y(P(M(this, (e) => y(e).parent().children().not(e)))), t);
};
h.find = function(t) {
  return y(P(M(this, (e) => ut(t, e))));
};
const ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, fe = /^$|^module$|\/(java|ecma)script/i, de = ["type", "src", "nonce", "noModule"];
function he(t, e) {
  const n = y(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (fe.test(s.type) && Tt.contains(s)) {
      const r = V("script");
      r.text = s.textContent.replace(ue, ""), I(de, (o, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function pe(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && he(e, t.ownerDocument);
}
function D(t, e, n, i, s, r, o, c) {
  return I(t, (l, a) => {
    I(y(a), (u, p) => {
      I(y(e), (g, d) => {
        const f = n ? p : d, m = n ? d : p, w = n ? u : g;
        pe(f, w ? m.cloneNode(!0) : m, i, s, !w);
      }, c);
    }, o);
  }, r), e;
}
h.after = function() {
  return D(arguments, this, !1, !1, !1, !0, !0);
};
h.append = function() {
  return D(arguments, this, !1, !1, !0);
};
function ge(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (R(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    T(i) && (e ? y(i).empty().append(t) : i.innerHTML = t);
  });
}
h.html = ge;
h.appendTo = function(t) {
  return D(arguments, this, !0, !1, !0);
};
h.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = y(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
h.before = function() {
  return D(arguments, this, !1, !0);
};
h.wrapAll = function(t) {
  let e = y(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
h.wrap = function(t) {
  return this.each((e, n) => {
    const i = y(t)[0];
    y(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
h.insertAfter = function(t) {
  return D(arguments, this, !0, !1, !1, !1, !1, !0);
};
h.insertBefore = function(t) {
  return D(arguments, this, !0, !0);
};
h.prepend = function() {
  return D(arguments, this, !1, !0, !0, !0, !0);
};
h.prependTo = function(t) {
  return D(arguments, this, !0, !0, !0, !1, !1, !0);
};
h.contents = function() {
  return y(P(M(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
h.next = function(t, e, n) {
  return B(y(P(M(this, "nextElementSibling", e, n))), t);
};
h.nextAll = function(t) {
  return this.next(t, !0);
};
h.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
h.parents = function(t, e) {
  return B(y(P(M(this, "parentElement", !0, e))), t);
};
h.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
h.prev = function(t, e, n) {
  return B(y(P(M(this, "previousElementSibling", e, n))), t);
};
h.prevAll = function(t) {
  return this.prev(t, !0);
};
h.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
h.map = function(t) {
  return y(qt.apply([], zt.call(this, (e, n) => t.call(e, n, e))));
};
h.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
h.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && N(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Tt;
  });
};
h.slice = function(t, e) {
  return y(Rt.call(this, t, e));
};
const me = /-([a-z])/g;
function dt(t) {
  return t.replace(me, (e, n) => n.toUpperCase());
}
h.ready = function(t) {
  const e = () => setTimeout(t, 0, y);
  return k.readyState !== "loading" ? e() : k.addEventListener("DOMContentLoaded", e), this;
};
h.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = y(e);
    n.replaceWith(n.children());
  }), this;
};
h.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + X.pageYOffset,
    left: e.left + X.pageXOffset
  };
};
h.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = N(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && N(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && T(s)) {
      const r = y(s).offset();
      n.top -= r.top + H(s, "borderTopWidth"), n.left -= r.left + H(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - H(t, "marginTop"),
    left: n.left - H(t, "marginLeft")
  };
};
const jt = {
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
h.prop = function(t, e) {
  if (t) {
    if (L(t))
      return t = jt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
h.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[jt[t] || t];
  });
};
const ye = /^--/;
function ht(t) {
  return ye.test(t);
}
const rt = {}, { style: be } = St, $e = ["webkit", "moz", "ms"];
function ve(t, e = ht(t)) {
  if (e)
    return t;
  if (!rt[t]) {
    const n = dt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${$e.join(`${i} `)}${i}`.split(" ");
    I(s, (r, o) => {
      if (o in be)
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
function kt(t, e, n = ht(t)) {
  return !n && !Ee[t] && Ft(e) ? `${e}px` : e;
}
function xe(t, e) {
  if (L(t)) {
    const n = ht(t);
    return t = ve(t, n), arguments.length < 2 ? this[0] && N(this[0], t, n) : t ? (e = kt(t, e, n), this.each((i, s) => {
      T(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
h.css = xe;
function Nt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const we = /^\s+|\s+$/;
function wt(t, e) {
  const n = t.dataset[e] || t.dataset[dt(e)];
  return we.test(n) ? n : Nt(JSON.parse, n);
}
function Ae(t, e, n) {
  n = Nt(JSON.stringify, n), t.dataset[dt(e)] = n;
}
function Ce(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = wt(this[0], i);
    return n;
  }
  if (L(t))
    return arguments.length < 2 ? this[0] && wt(this[0], t) : R(e) ? this : this.each((n, i) => {
      Ae(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
h.data = Ce;
function Mt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
I([!0, !1], (t, e) => {
  I(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    h[s] = function(r) {
      if (this[0])
        return q(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : J(this[0]) ? Mt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? H(this[0], `margin${n ? "Top" : "Left"}`) + H(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
I(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  h[n] = function(i) {
    if (!this[0])
      return R(i) ? void 0 : this;
    if (!arguments.length)
      return q(this[0]) ? this[0].document.documentElement[`client${e}`] : J(this[0]) ? Mt(this[0], e) : this[0].getBoundingClientRect()[n] - vt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, o) => {
      if (!T(o))
        return;
      const c = N(o, "boxSizing");
      o.style[n] = kt(n, s + (c === "border-box" ? vt(o, !t) : 0));
    });
  };
});
const At = "___cd";
h.toggle = function(t) {
  return this.each((e, n) => {
    if (!T(n))
      return;
    const i = Et(n);
    (R(t) ? i : t) ? (n.style.display = n[At] || "", Et(n) && (n.style.display = oe(n.tagName))) : i || (n[At] = N(n, "display"), n.style.display = "none");
  });
};
h.hide = function() {
  return this.toggle(!1);
};
h.show = function() {
  return this.toggle(!0);
};
const Ct = "___ce", pt = ".", gt = { focus: "focusin", blur: "focusout" }, Bt = { mouseenter: "mouseover", mouseleave: "mouseout" }, _e = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function mt(t) {
  return Bt[t] || gt[t] || t;
}
function yt(t) {
  const e = t.split(pt);
  return [e[0], e.slice(1).sort()];
}
h.trigger = function(t, e) {
  if (L(t)) {
    const [i, s] = yt(t), r = mt(i);
    if (!r)
      return this;
    const o = _e.test(r) ? "MouseEvents" : "HTMLEvents";
    t = k.createEvent(o), t.initEvent(r, !0, !0), t.namespace = s.join(pt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in gt;
  return this.each((i, s) => {
    n && U(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Dt(t) {
  return t[Ct] = t[Ct] || {};
}
function Te(t, e, n, i, s) {
  const r = Dt(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function Jt(t, e) {
  return !e || !ct.call(e, (n) => t.indexOf(n) < 0);
}
function Q(t, e, n, i, s) {
  const r = Dt(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, c, l]) => {
      if (s && l.guid !== s.guid || !Jt(o, n) || i && i !== c)
        return !0;
      t.removeEventListener(e, l);
    }));
  else for (e in r)
    Q(t, e, n, i, s);
}
h.off = function(t, e, n) {
  if (R(t))
    this.each((i, s) => {
      !T(s) && !J(s) && !q(s) || Q(s);
    });
  else if (L(t))
    U(e) && (n = e, e = ""), I(et(t), (i, s) => {
      const [r, o] = yt(s), c = mt(r);
      this.each((l, a) => {
        !T(a) && !J(a) && !q(a) || Q(a, c, o, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
h.remove = function(t) {
  return B(this, t).detach().off(), this;
};
h.replaceWith = function(t) {
  return this.before(t).remove();
};
h.replaceAll = function(t) {
  return y(t).replaceWith(this), this;
};
function Se(t, e, n, i, s) {
  if (!L(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return L(e) || (R(e) || G(e) ? e = "" : R(n) ? (n = e, e = "") : (i = n, n = e, e = "")), U(i) || (i = n, n = void 0), i ? (I(et(t), (r, o) => {
    const [c, l] = yt(o), a = mt(c), u = c in Bt, p = c in gt;
    a && this.each((g, d) => {
      if (!T(d) && !J(d) && !q(d))
        return;
      const f = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Jt(l, m.namespace.split(pt)) || !e && (p && (m.target !== d || m.___ot === a) || u && m.relatedTarget && d.contains(m.relatedTarget)))
          return;
        let w = d;
        if (e) {
          let b = m.target;
          for (; !Ht(b, e); )
            if (b === d || (b = b.parentNode, !b))
              return;
          w = b;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return d;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const v = i.call(w, m, m.___td);
        s && Q(d, a, l, e, f), v === !1 && (m.preventDefault(), m.stopPropagation());
      };
      f.guid = i.guid = i.guid || y.guid++, Te(d, a, l, e, f);
    });
  }), this) : this;
}
h.on = Se;
function Ie(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
h.one = Ie;
const Le = /\r?\n/g;
function ze(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Le, `\r
`))}`;
}
const Re = /file|reset|submit|button|image/i, Vt = /radio|checkbox/i;
h.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    I(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Re.test(s.type) || Vt.test(s.type) && !s.checked)
        return;
      const r = Ot(s);
      if (!R(r)) {
        const o = Z(r) ? r : [r];
        I(o, (c, l) => {
          t += ze(s.name, l);
        });
      }
    });
  }), t.slice(1);
};
window.$ = y;
window.jQuery = window.$;
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
    Pe(t, e);
}
function C(t) {
  return t && typeof t == "object" && t.constructor === Object;
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
window.translateDictionnary = function(t, e) {
  if (typeof gTransl != "function") return void 0;
  const n = sugarcrepeHL.dictionnary;
  if (sugarcrepeHL.numberOfTranslationTodo = 0, sugarcrepeHL.numberOfTranslationDone = 0, sugarcrepeHL.numberOfTranslationFail = 0, !C(n)) return n;
  const i = {
    schl: "en",
    categories: "en",
    products: "en",
    clariprint: "en",
    materials: "fr"
  };
  var s = ["schl", "categories", "products", "clariprint", "materials"], r = ["es", "de", "it", "nl", "pl", "pt", "sv"];
  Array.isArray(t) && (s = t), Array.isArray(e) && (r = e);
  function o() {
    sugarcrepeHL.numberOfTranslationTodo === sugarcrepeHL.numberOfTranslationDone + sugarcrepeHL.numberOfTranslationFail && (`${sugarcrepeHL.numberOfTranslationTodo}${sugarcrepeHL.numberOfTranslationFail}`, void 0);
  }
  s.forEach((c) => {
    const l = i[c];
    C(n[c]) || (n[c] = {}), r.forEach((a) => {
      C(n[c][a]) || (n[c][a] = {});
      const u = n[c][a];
      ["en", "fr"].includes(l) && C(n[c][l]) && Object.entries(n[c][l]).forEach((p) => {
        const [g, d] = p;
        sugarcrepeHL.numberOfTranslationTodo++, gTransl(
          d,
          l,
          a,
          function(f) {
            const m = f.data;
            C(m) && Array.isArray(m.translations) && m.translations.length > 0 && typeof m.translations[0].translatedText == "string" ? (u[g] = m.translations[0].translatedText, sugarcrepeHL.numberOfTranslationDone++) : (u[g] = d, sugarcrepeHL.numberOfTranslationFail++), o();
          },
          function() {
            u[g] = d, sugarcrepeHL.numberOfTranslationFail++, o();
          }
        );
      });
    });
  });
};
const He = function(t = {}) {
  const {
    url: e,
    method: n = t.type || "GET",
    data: i = null,
    dataType: s = "json",
    contentType: r = "application/x-www-form-urlencoded",
    headers: o = {},
    beforeSend: c = () => {
    },
    success: l = () => {
    },
    error: a = () => {
    }
  } = t;
  let u;
  console.log(`ajax(${n},${e})`), i && n.toUpperCase() !== "GET" && (r === "application/json" ? u = JSON.stringify(i) : u = new URLSearchParams(i).toString());
  try {
    c();
  } catch (f) {
    console.warn("[HU.ajax] beforeSend() error:", f);
  }
  const p = {
    method: n.toUpperCase(),
    headers: {
      "Content-Type": r,
      ...o
    },
    ...u ? { body: u } : {}
  };
  let g = e;
  if (i && n.toUpperCase() === "GET") {
    const f = new URLSearchParams(i).toString();
    g += (e.includes("?") ? "&" : "?") + f;
  }
  if (console.log(`finaleUrl: ${g}`), !g) return console.error("ajax error : url is undefined !");
  const d = fetch(g, p).then(async (f) => {
    if (!f.ok) throw new Error(`HTTP ${f.status}`);
    const m = s === "json" ? await f.json() : await f.text();
    return l(m), m;
  }).catch((f) => {
    throw a(f), f;
  });
  return d.done = (f) => (d.then(f), d), d.fail = (f) => (d.catch(f), d), d;
}, Pe = (t, e) => He({ url: t, method: "GET", success: e });
function Oe(t, e, ...n) {
  if (typeof t != "function")
    throw new TypeError("HU.proxy: le premier argument doit être une fonction");
  return n.length ? function(...i) {
    return t.apply(e, [...n, ...i]);
  } : t.bind(e);
}
$.fn.modal = function(t = "toggle") {
  return this.each((e, n) => {
    if (n instanceof HTMLElement) {
      if (t === "show") {
        n.classList.add("show"), n.style.display = "block", document.body.classList.add("modal-open");
        let i = document.createElement("div");
        i.className = "modal-backdrop fade show", i.dataset.huBackdrop = "true", document.body.appendChild(i);
      }
      if (t === "hide") {
        n.classList.remove("show"), n.style.display = "none", document.body.classList.remove("modal-open");
        const i = document.querySelector(".modal-backdrop[data-hu-backdrop]");
        i && i.remove();
      }
      t === "toggle" && $(n).modal(n.classList.contains("show") ? "hide" : "show");
    }
  }), this;
};
$.fn.tooltip = function() {
  return this.each((t, e) => {
    if (!(e instanceof HTMLElement)) return;
    const n = e.getAttribute("title");
    n && (e.setAttribute("data-tooltip", n), e.removeAttribute("title"), e.addEventListener("mouseenter", () => {
      const i = document.createElement("div");
      i.className = "hu-tooltip", i.textContent = e.getAttribute("data-tooltip"), document.body.appendChild(i);
      const s = e.getBoundingClientRect();
      i.style.position = "absolute", i.style.top = `${s.top - 30}px`, i.style.left = `${s.left + s.width / 2}px`, i.style.transform = "translateX(-50%)", i.style.padding = "5px 10px", i.style.background = "rgba(0,0,0,0.75)", i.style.color = "white", i.style.fontSize = "0.8rem", i.style.borderRadius = "4px", i.style.pointerEvents = "none", i.style.zIndex = 9999, i.dataset.huTooltip = "true";
    }), e.addEventListener("mouseleave", () => {
      document.querySelectorAll("[data-hu-tooltip]").forEach((i) => i.remove());
    }));
  }), this;
};
const je = (t) => {
  const e = t, n = t.fid, i = t.value.value, s = !!t.value.unit && t.value.unit != "", r = t.value.options, o = t.value.options_img, c = !!Array.isArray(o);
  if (c && o.length < r.length)
    for (var u = o.length; u < r.length; u++)
      _img.push("select/default.png");
  const l = e.img_path ? `${e.img_path}/select/` : "/img/select/";
  var a = "product";
  e.translationContext && (a = e.translationContext);
  var u = 0, p = "";
  t.value.options.forEach((d) => {
    var f = "", m = "";
    d.value && d.label ? (f = d.value, m = HForm.transl(d.label, "products")) : typeof d == "number" ? (f = d, m = d) : typeof d == "string" && (f = d, m = HForm.transl(d, a)), p += `
    				<option ${s ? 'style="text-align: right;"' : ""} value="${f}" ${f === i ? "selected" : ""} 
    				${c ? `data-content="<div class='d-flex justify-content-between'><span>${m}</span><img src='${l}${o[u++]}' width='128px' height='128px'/></div>` : ""}
                  	>${m}</option>`;
  });
  var g = "";
  return u = 0, c && t.value.options.forEach((d) => {
    var f = "";
    d.value && d.label ? (d.value, f = HForm.transl(d.label, "products")) : typeof d == "number" ? f = d : typeof d == "string" && (f = HForm.transl(d, a)), g += `
                        <li>
                          <a role="option" class="dropdown-item" id="bs-select-1-0" tabindex="0" aria-index="${u}">
                            <span class="text">
                              <div class="d-flex justify-content-between">
                                <span style="white-space: normal;place-content: center;">${f}</span>
                                <img src="${l}${o[u++]}" style="width:128px;height:128px;">
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
}, ke = (t) => {
  const e = t, n = t.value, i = t.fid, s = t.label;
  var r = e.translationContext ? e.translationContext : "product";
  console.log("field-multiselect"), console.log(e);
  const o = n.value, c = n.separator && n.separator !== "" ? n.separator : ";", l = Array.isArray(o) ? o : o.split(c);
  console.log(l);
  const a = l.length, u = n.units, p = [];
  var g = n.options;
  const d = n.datas, f = typeof multiselect_filter == "object" && typeof n.filter == "string" && typeof multiselect_filter[n.filter] == "function" ? multiselect_filter[n.filter] : null, m = n.labels, w = typeof n.cols == "number" && [1, 2, 3, 4, 6].includes(n.cols) ? n.cols : 1;
  !Array.isArray(g) && typeof f == "function" && (g = f(d));
  var v = 12;
  w === 2 ? v = 6 : w === 3 ? v = 4 : w === 4 ? v = 3 : w === 6 && (v = 2);
  const b = [], O = [];
  b.length = a, O.length = a, p.length = a;
  for (var F = 0, x = 0; x < a; x++)
    b[x] = [], O[x] = [], p[x] = Array.isArray(u) && !!u[x] && u[x] !== "";
  for (var x = 0; F < g.length; F++) {
    const A = Array.isArray(g[F]) ? g[F] : g[F].split(c);
    if (A.length === a)
      for (x = 0; x < a; x++) {
        const _ = Array.isArray(A[x]) ? A[x][A.length - 1] : A[x];
        O[x].includes(_) || (O[x].push(_), b[x].push(A[x]));
      }
  }
  console.log(O);
  for (var x = 0; x < a; x++)
    b[x].sort();
  return console.log("coucou multiselect 2"), console.log(b), `
  <div class="row">` + (() => {
    for (var j = "", A = 0; A < a; A++) {
      const _ = Array.isArray(m) ? m[A] : null, Ut = b[A];
      console.log("coucou multiselect 3"), j += ` 
    <div class="col-${v}">
      ${_ ? `
      <div class="card mt-2 mb-2 border">  
        <div class="card-header h6">
            <label for="${i}_${A}">${HForm.transl(s, r)}${HForm.transl(_, r)}</label>
            <div role="help" field="${i}_${A}"></div>
        </div>` : `
      <div class="card border-0">  `}
        <div class="card-body ${_ ? "" : "p-0"}">
            <div class="input-group">
               <select class="form-control" role="multiselect" data-index="${A}" fid="${i}" name="${i}_${A}zzzvalue" placeholder="">
    ` + (() => {
        var bt = "";
        return Ut.forEach((z) => {
          var W = "", K = "";
          Array.isArray(z) && z.length > 1 ? (W = z[1], K = HForm.transl(z[0], "products")) : z.value && z.label ? (W = z.value, K = HForm.transl(z.label, "products")) : typeof z == "number" ? (W = z, K = z) : typeof z == "string" && (W = z, K = HForm.transl(z, r)), bt += `
                    <option ${p[A] ? 'style="text-align: right;"' : ""} 
                        value="${W}" ${W === l[A] ? "selected" : ""}>${K}</option>`;
        }), bt;
      })() + `
               </select>
            ${p[A] ? `
              <span class="input-group-text">${u[A]}</span>` : ""}
          </div>
      </div>
    </div>
  </div>`;
    }
    return j;
  })() + `
    <input type="hidden" role="multiselect" name="${i}" value="${o}"/>
  </div>`;
}, Ne = (t) => {
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
    return Object.entries(n.value).forEach((l) => {
      var [a, u] = l;
      const p = i.search(/zzz/) < 0 ? `${i}zzzvaluezzzvaluezzz${a}` : `${i}zzzvaluezzz${a}`;
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
}, Me = (t) => `
            <input type="file" accept="image/png, image/jpeg"
                    class="form-control" role="${value.role}"
                    name="${fid}" 
                    aria-labelledby="label${fid}"
                    onchange="
                        const $loadbtn = sugarcrepeHL.instance(this).$find('button[role=loadTexture]');
                        $loadbtn.attr('disabled',true);
                        const c3D = sugarcrepeHL.instance(this).$find('canvas[role=viewer3D]');
                        const img = $(this).next()[0];
                        const config = {
                              quality: 0.1,
                              maxWidth: 300,
                              maxHeight: 300,
                              debug: true,
                              mimeType:'image/png'
                            };
                        // Note: A single file comes from event.target.files on <input>
                        BrowserImageResizer.readAndCompressImage(this.files[0], config)
                          .then(resizedImage => {
                            const reader = new FileReader();
                            reader.addEventListener('load',() => {
                               // console.log(reader.result);    
                                img.src=reader.result;
                                img.style='display: block;';
                                img.onload = function(){
                                    if (c3D !== undefined) {
                                        $loadbtn.attr('disabled',false);
                                    //    c3D.attr('reload_textures','1');
                                    //    c3D.trigger('click');
                                    }
                                };
                            });
                            reader.readAsDataURL(resizedImage);
                          });


  /*
                        const FR1  = new FileReader();
                        this.reader = FR1;
                        // FR1.readAsDataURL(this.files[0]);
                        FR1.readAsBinaryString(this.files[0]);
                        FR1.addEventListener('loadend', $.proxy(function() { 
                            
                          img.src=FR1.result;
                            img.style='display: block;';
                            if (c3D !== undefined) {
                                c3D.attr('reload_textures','1');
                                c3D.trigger('click');
                            } 
                        },this)); */
                        "
                    placeholder="" value="" ${locals.require ? "required" : ""}>
            <img role="${value.role}" style="display: none;" width="100px" height="100px"/>`, Be = (t) => `
              <input type="file" accept="archive/zip"
                    class="form-control" role="${value.role}"
                    name="${fid}"  
                    aria-labelledby="label${fid}"
                    onchange="
                        const $loadbtn = sugarcrepeHL.instance(this).$find('button[role=loadTexture]');
                        $loadbtn.attr('disabled',true);
                        const c3D = sugarcrepeHL.instance(this).$find('canvas[role=viewer3D]');
                        const $divImg = $(this).next();
                        $divImg.html('');
                        const FR1  = new FileReader();
                        this.reader = FR1;
                       // FR1.readAsDataURL(this.files[0]);
                        FR1.readAsBinaryString(this.files[0]);
                        FR1.addEventListener('loadend', $.proxy(function() { 
                            const content = FR1.result;
                            var new_zip = new JSZip();
                            var img_counter = 0;
                            var img_file = 0;
                            // more files !
                            new_zip.loadAsync(content)
                            .then(function(zip) {
                                // you now have every files contained in the loaded zip
                                var imgIndex = 0;
                                zip.forEach(function (relativePath, zipEntry) { 
                                    const firstFileChar = relativePath.split('/').at(-1)[0];
                                    const matchPngExt = relativePath.match(/.png/);
                                    const matchJpgExt = relativePath.match(/.jpg/);
                                    const matchJpegExt = relativePath.match(/.jpeg/);
                                    console.log(\`try to load ${relativePath} / first filename char: '${firstFileChar}' / match png ext ? ${matchPngExt}\`);
                                    if (firstFileChar === '.' || !matchPngExt && !matchJpgExt && !matchJpegExt) return;
                                    img_file++;
                                   
//                                    zipEntry.async('base64').then(function(b64){
                                    zipEntry.async('blob').then(function(b64){
                                        const config = {
                                          quality: 0.05,
                                          maxWidth: 200,
                                          maxHeight: 200,
                                          debug: true,
                                          mimeType:'image/png'
                                        };

                                        // Note: A single file comes from event.target.files on <input>
                                        BrowserImageResizer.readAndCompressImage(b64, config)
                                          .then(resizedImage => {
                                            const reader = new FileReader();
                                            reader.addEventListener('load',() => {
                                               // console.log(reader.result);    
                                                const $img = $(\`<img role='${value.role}-${++imgIndex}' style='display: inline-flex;' width='100px' height='100px'/>\`);
                                                $divImg.append($img);
                                                const img = $img[0];
                                                img.src=reader.result;
                                                img.onload = function(){
                                                    img_counter++;
                                                    if (img_counter === img_file && c3D !== undefined) {
                                                        $loadbtn.attr('disabled',false);
                                                  //      c3D.attr('reload_textures','1');
                                                   //     c3D.trigger('click');
                                                    }
                                                }
                                                img.onerror = function(){
                                                    img_counter++;
                                                    if (img_counter === img_file && c3D !== undefined) 
                                                        $loadbtn.attr('disabled',false);
                                                };
                                            });
                                            reader.readAsDataURL(resizedImage);
                                          });
/*
                                        Jimp.read(Buffer.from(b64,'base64'))
                                          .then((image) => {
                                            image.resize(250, Jimp.AUTO);
                                            image.quality(30);
                                            image.getBase64(Jimp.MIME_PNG,function(cb64){
                                                const $img = $(\`<img role='${value.role}-${++imgIndex}' style='display: inline-flex;' width='100px' height='100px'/>\`);
                                                $divImg.append($img);
                                                const img = $img[0];
                                                img.src='data:image/png;base64,' + cb64;
                                                img.onload = function(){
                                                    img_counter++;
                                                    if (img_counter === img_file && c3D !== undefined) {
                                                        c3D.attr('reload_textures','1');
                                                        c3D.trigger('click');
                                                    }
                                                };
                                            });
                                            // Do stuff with the image.
                                          })
                                          .catch((err) => {
                                            console.log('!!!!!!!!!!!! error on read img buffer !!!!!!!!!!!!!!!!');
                                            console.log(err);
                                            // Handle an exception.
                                          }); */
                                    })
                                });
                            });
                        },this));"
                    placeholder="" value="" ${locals.require ? "required" : ""}>
            <div role="archive-img" archive-role="${value.role}"></div>`;
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
    return C(i) && (i.module !== void 0 && (s = i.module.name), i.url !== void 0 && (i = i.url)), n = E.getRootEjs(s), typeof i == "string" ? `${n}${i}.ejs` : `${n}${e}.ejs`;
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
      var l = 0;
      value.forEach((a) => {
        let u = `#${i.fid}zzz${l}`;
        E.htmlEJS($(u), E.getEJSForContent(a), { fid: `${u}`, label: "#{gid}", value: a }), l++;
      });
    } else if (c == "object")
      for (const [a, u] of Object.entries(i.value)) {
        let p = `#${i.fid}zzz${a}`;
        E.htmlEJS($(p), E.getEJSForContent(u), { fid: `${i.fid}zzz${a}`, label: a, value: u });
      }
  }
  static appendEJS(e, n, i, s) {
    `${$(e).attr("id")}${n}`;
    var r = 0;
    const o = function() {
      return r++, $(e).find('[role="waitIncludeEJS"]').length === 0 && typeof s == "function" ? s() : r < 6 ? window.setTimeout(o, 200) : null;
    }, c = function(l, a, u) {
      if ($(e.length > 0)) {
        console.log($(e)), console.log(l), console.log(i);
        const p = ejs.render(l, i);
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
      const a = $(e).find('[role="waitIncludeEJS"]');
      return `${a.length}${o}`, a.length === 0 ? E.onloadHtmlEJS(e, n, i, s, r) : o < 6 ? window.setTimeout(c, 200) : console.error(`unable to load waitIncludeEJS : ${a.length}`);
    }, l = async function(a, u, p) {
      var g = i;
      typeof i.kind == "string" && typeof i.callbackGetLocals == "function" && (g = i.callbackGetLocals(i.kind, i)), g.img_path = E.getRootImg();
      const d = await ejs.render(a, g, { debug: !1 });
      return await $(e).html(d), window.setTimeout(c, 200);
    };
    e !== null && e.length > 0 && n !== "" && _t(n, "", l);
  }
  static sortFields(e, n) {
    const i = [], s = n.slice(), r = {};
    return s.forEach((o) => {
      r[o.fid] = o;
    }), Array.isArray(e) && e.forEach((o) => {
      if (Array.isArray(o) && o.length > 1) {
        const c = {}, l = c[o[0]] = [];
        o.shift(), o.forEach((a) => {
          const u = a.split(":"), p = u[0], g = r[p];
          if (C(g)) {
            const d = s.indexOf(g);
            d > -1 && s.splice(d, 1), u.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(u[1])) && (g.bt_nb_cols = parseInt(u[1])), l.push(g);
          }
        }), i.push(c);
      } else if (typeof o == "string") {
        const c = o.split(":"), l = c[0], a = r[l];
        if (C(a)) {
          const u = s.indexOf(a);
          u > -1 && s.splice(u, 1), c.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(c[1])) && (a.bt_nb_cols = parseInt(c[1])), i.push(a);
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
      r.length > 0 ? r.forEach((l) => {
        o.length > parseInt(l) && (o[parseInt(l)].disabled = !1);
      }) : o.each(function(l, a) {
        a.disabled = !1;
      });
      const c = this.$find("select[name='" + s + "zzzvalue']");
      if (r.length > 0) {
        const l = c.find("option");
        r.forEach((a) => {
          l.length > parseInt(a) && (l[parseInt(r[0])].disabled = !1);
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
      r.length > 0 ? r.forEach((l) => {
        o.length > parseInt(l) && (o[parseInt(l)].disabled = !0);
      }) : o.each(function(l, a) {
        a.disabled = !0;
      });
      const c = this.$find("select[name='" + s + "zzzvalue']");
      if (r.length > 0) {
        const l = c.find("option");
        r.forEach((a) => {
          l.length > parseInt(a) && (l[parseInt(r[0])].disabled = !0);
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
    e.forEach((l) => {
      const a = l.split(":"), u = a[0];
      a.shift(), i[u] = a;
    });
    const s = Object.keys(i), r = "input[name=" + s.join("],input[name=") + "]";
    this.$find(r).each(function(l, a) {
      const u = $(a), p = i[u.attr("name")];
      Array.isArray(p) && p.length > 0 ? u.val(p[0]) : n && u.val(n);
    });
    const o = "select[name=" + s.join("zzzvalue],select[name=") + "zzzvalue]", c = "select[name=" + s.join("zzzvalue] option,select[name=") + "zzzvalue] option";
    this.$find(`${c}`).each(function(l, a) {
      const u = $(a);
      var p = u.parent().attr("name"), g = [];
      p && (g = i[p.split("zzzvalue")[0]]);
      var d = null;
      Array.isArray(g) && g.length > 0 ? d = g : n && (d = n), typeof d == "string" && u.attr("value") === d || Array.isArray(d) && d.length > 0 && u.attr("value") === d[0] ? u.parent()[0].selectedIndex = u[0].index : u.attr("selected", !1);
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
      const l = c.split(":"), a = l[0];
      l.shift(), i[a] = l;
    });
    const s = Object.keys(i), r = "select[name='" + s.join("zzzvalue'] option,select[name='") + "zzzvalue'] option", o = "select[name='" + s.join("'] option,select[name='") + "'] option";
    console.log("selector_effect_show_options()"), console.log(o), console.log(i), this.$find(`${o}, ${r}`).each(function(c, l) {
      const a = $(l), u = l.value ? l.value : a.attr("value"), p = parseInt(u), g = a.parents("select").attr("name").split("zzzvalue"), d = i[g[0]];
      console.log(`branch on ${g[0]}>${u}, args :`), console.log(d);
      var f = null;
      if (Array.isArray(d) && d.length > 0 ? f = d : n && (f = n), typeof f == "string" && a.attr("value") === f)
        a.show();
      else if (Array.isArray(f) && f.length > 0) {
        console.log("toselect"), console.log(f);
        const w = f.slice();
        w.shift(), console.log("valArr"), console.log(w);
        const v = [];
        var m = 0;
        const b = v.length = w.length;
        for (; m < b; m++) v[m] = parseInt(w[m]);
        console.log("valArrInt"), console.log(v), f[0] === "<" && f.length > 1 && p < parseInt(f[1]) || f[0] === "<=" && f.length > 1 && p <= parseInt(f[1]) || f[0] === ">" && f.length > 1 && p > parseInt(f[1]) || f[0] === ">=" && f.length > 1 && p >= parseInt(f[1]) || f[0] === "%" && f.length > 2 && p >= parseInt(f[1]) && p <= parseInt(f[2]) || f[0] === "=" && w.includes(u) || f[0] === "=" && p && v.includes(p) || f[0] === "!=" && p && !v.includes(p) || f[0] === "!=" && !w.includes(u) ? a.show() : a.hide();
      } else a.hide();
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
    var l = parseInt(n);
    console.log(l), console.log(o), console.log(r), console.log(s);
    const a = [];
    o.each(function(v, b) {
      a.push($(b).val());
    }), console.log(a);
    const u = $(o[l + 1]);
    if (s) {
      var p = s.options;
      const v = s.datas;
      var g = s.filter;
      g = typeof multiselect_filter == "object" && typeof g == "string" && typeof multiselect_filter[g] == "function" ? multiselect_filter[g] : null, !Array.isArray(p) && typeof g == "function" && (p = g(v)), s.options = p;
    }
    if (o.length > 0 && l < o.length - 1 && s && Array.isArray(s.options)) {
      const v = [], b = s.options.length, O = s.separator && s.separator !== "" ? s.separator : ";";
      v.length = b;
      for (var d = 0; d < b; d++)
        v[d] = Array.isArray(s.options[d]) ? s.options[d] : s.options[d].split(O);
      console.log(v);
      const F = [];
      for (var f = 0; f < v.length; f++) {
        for (var m = !0, d = 0; d <= l; d++) {
          const _ = v[f][d];
          m = m && (Array.isArray(_) && _.at(-1) === a[d] || _ === a[d]);
        }
        m && F.push(v[f]);
      }
      console.log(F);
      const x = [];
      F.forEach((A) => {
        const _ = A[l + 1];
        x.push(Array.isArray(_) ? _.at(-1) : _);
      }), console.log(x);
      const j = $(u).find("option");
      console.log(j);
      var w = j.length - 1;
      j.each(function(A, _) {
        x.includes(_.value) ? ($(_).show(), w = A < w ? A : w) : $(_).hide();
      }), console.log(u), x.includes(u.val()) || (u[0].selectedIndex = w);
    }
    l < o.length - 2 ? u.trigger("change") : c.val(a.join(";"));
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
      const l = $(r.target).val(), a = parseFloat(l);
      C(c) && Object.entries(c).forEach((u) => {
        const [p, g] = u, d = p.split("|"), f = [], m = [], w = [], v = [];
        d.forEach((b) => {
          b.length === 0 || (b[0] === "<" ? w.push(parseFloat(b.substring(1, b.length))) : b[0] === ">" ? v.push(parseFloat(b.substring(1, b.length))) : b[0] === "!" ? m.push(b.substring(1, b.length)) : f.push(b));
        }), (f.includes(l) || m.length > 0 && !m.includes(l) || a !== NaN && w.length > 0 && a < w[0] || a !== NaN && v.length > 0 && a > v[0]) && C(g) && Object.entries(g).forEach((b) => {
          const [O, F] = b, x = O.split(":"), j = i[x[0]];
          var A = x[0];
          x.length > 1 && (A = x[1]), typeof j == "function" && Array.isArray(F) && j.call(e, F, A);
        });
      });
    }
    C(n.user_interface_organizer) && C(n.user_interface_organizer.onchange_effects) && Object.entries(n.user_interface_organizer.onchange_effects).forEach((r) => {
      const [o, c] = r;
      this.$find(`select[name=${o}zzzvalue]`).on("change", function(l) {
        s(l, o, c);
      }).trigger("change"), this.$find(`input[name=${o}]`).on("change", function(l) {
        s(l, o, c);
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
    console.log(e), alert(JSON.stringify(e.getValues()));
  }
  constructor(e, n) {
    E.instances.push(this), this.tpl = n, this.element = e, E.template = n.template && E.templates[n.template] ? E.templates[n.template] : E.templates[0], Array.isArray(e) && e.length > 0 ? e[0].hform = this : e && (e.hform = this), this.locals = {
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
      n.setUiCustomizerEvents(), typeof catllback == "function" && e(n), typeof n.locals.onload == "function" && n.locals.onload(n);
    };
    $(this.element).on("HFORM_FIELDS_DISPLAYED", i);
    const s = this.locals;
    s.fields;
    const r = function() {
      var c = s.fields.slice();
      c.forEach((l) => {
        const a = E.getKind(l.value), u = E.getCallBackByKind(a);
        var p = l;
        typeof u == "function" && C(p) && (p.kind = a, p.callbackGetLocals = u);
        var g = E.getEJSForContent(l.value);
        l.unit && (l.max || l.min || l.step) && (g = E.getEJSbyKind("number")), `${l.fid}${g}`, l.fid ? E.htmlEJS(
          n.$find(`.need-content#${l.fid}`),
          g,
          // HForm.getEJSForContent(field.value),
          p,
          null,
          Oe(n.add2displayed, n, l)
        ) : s.malformed_fields.push(l);
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
        const f = c.split("zzz");
        for (var l = n, a = 0; a < f.length - 1; a++) {
          var u = f[a];
          l[u] !== void 0 ? l = l[u] : l[u] = {};
        }
        l[f[f.length - 1]], l[f[f.length - 1]] = o, l[f[f.length - 1]];
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && !c.match(/[]/) && ($(r).attr("type") === "checkbox" && $(r).attr("checked") || ["text", "hidden"].includes($(r).attr("type")) && o !== "" || ["SELECT", "TEXTAREA"].includes(r.tagName))) {
        var p = c.split("["), g = p.at(-1).split("]");
        g.length === 2 && g[1] !== "" && p.push(g[1]);
        for (var d = [], l = [n], a = 0; a < p.length; a++) {
          p[a];
          var u = p[a];
          u.at(-1) === "]" && (u = u.slice(0, -1)), d.push(u), typeof l[a][u] == "object" || (l[a][u] = {}), l.push(l[a][u]);
        }
        l.at(-2), l.at(-2)[d.at(-1)] = o, l.at(-2);
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && c.match(/[]/) && ($(r).attr("type") === "checkbox" && $(r).attr("checked") || ["text", "hidden"].includes($(r).attr("type")) && o !== "")) {
        const m = c.split("[]")[0].split("[");
        for (var d = [], l = [n], a = 0; a < m.length - 1; a++) {
          m[a];
          var u = m[a];
          u.at(-1) === "]" && (u = u.slice(0, -1)), d.push(u), typeof l[a][u] == "object" || (l[a][u] = {}), l.push(l[a][u]);
        }
        l.at(-2);
        const b = l.at(-2)[d.at(-1)];
        Array.isArray(b) ? b.push(val) : l.at(-2)[d.at(-1)] = [o], l.at(-2);
      }
    }), Object.entries(n).forEach((s) => {
      const [r, o] = s;
      e.fieldIds.includes(r) ? C(o) && o.value && (n[r] = o.value) : delete n[r];
    }), e.formJson = n, n;
  }
  static render(e, n, i = {}) {
    $.extend(n, i), new E(e, n).display();
  }
};
window.includeEJS = function(t, e, n = "div", i = "includeEJS") {
  let s = uniqid("includeEJS"), r = e, o = S.getEJSbyKind(t);
  var c = 0;
  const l = async function(u, p, g) {
    c++, log(`${i}(${t})->todo(${s})`), log(u), log(r);
    const d = $(`#${s}`), f = ejs.render(u, r);
    return d.length > 0 && typeof f == "string" ? d.replaceWith(f) : d.length === 0 && typeof f == "string" && c < 10 ? (console.log(`unable to find includeEJS anchor element from id: ${s} => retry in 200ms`), window.setTimeout(l, 200, u, p, g)) : d.length === 0 && typeof f == "string" ? console.error(`unable to replace includeEJS anchor element from id: ${s}, cause to many try > 10 !!!`) : console.error(`unable to replace includeEJS anchor element from id: ${s}, cause rendering is malformed`), 0;
  }, a = JSON.stringify(e);
  return log(`EJS url: ${o}`), typeof o == "string" && o !== "" && o !== "undefined" && fetchEJS(o, e, l), log(`includeEJS, create tmp element with id: ${s}`), `<${n} id="${s}" role="${i}" kind="${t}" param="${a}"></${n}>`;
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
    imgFile: Me,
    imgFileArchive: Be,
    "tatoo-img": (t) => "",
    "tatoo-text": (t) => "",
    select: je,
    multiselect: ke,
    multicontrol: Ne
  }
};
S.templates.bootstrap5v1 = {
  tplField: (t) => {
    const e = t.fid, n = t.value, i = t.translationContext ? t.translationContext : "product", s = !!t.label && t.label !== "", r = !!t.unit && t.unit != "", o = !!n.require && !!n.invalid_msg, c = {
      col: () => {
        var f = "col-12";
        return t.bt_nb_cols ? f = `col col-sm-12 col-lg-${t.bt_nb_cols}` : C(n) && n.kind === "multiselect" ? f = "col col-12" : !C(n) || C(n) && ["imgFile"].includes(n.kind) ? f = "col col-sm-12 col-md-6 col-lg-4" : C(n) && n.kind === "select" && (f = "col col-sm-12 col-lg-6"), f;
      },
      card: () => s ? "card mt-2 mb-2 border" : "card border-0",
      cardBody: () => "card-body",
      cardHeader: () => "card-header h6"
    }, l = s ? `<div class="${c.cardHeader()}">
            <label id="label${e}">${S.transl(t.label, i)}</label>
            <div role="help" field="${e}"></div>
        </div>` : "", a = r ? `<span class="input-group-text">${t.unit}</span>` : "", u = o ? `<div class="invalid-feedback">${_val.invalid_msg}</div>` : "", p = C(n) && typeof n.kind == "string" ? n.kind : t.min && t.max ? "number" : "text", g = S.templates.common.tplKind[p] ? S.templates.common.tplKind[p](t) : "", d = g === "";
    return t.toBefilled = d, `
              <div class="${c.col()}">
                <div class="${c.card()}">  
                 ${l}
                  <div class="${c.cardBody()}">
                    <div class="input-group ${d ? "need-content" : ""}" id="${e}">
    				${g}
                    ${a} 
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
      typeof s.fid == "string" ? n += S.templates.bootstrap5v1.tplField(s) : C(s) && Object.entries(s).forEach((r) => {
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
const at = {
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
}, De = {
  MATERIAL_SELECTOR: {
    kind: "multiselect",
    value: "PVC Expanse;WHITE;10",
    options: at.MATERIAL_CSV,
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
      value: De.MATERIAL_SELECTOR
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
        options: at.ITEM_NUMBER
      }
    },
    {
      fid: "numWalls",
      label: "Number of vertical walls",
      unit: "",
      value: {
        kind: "select",
        value: 2,
        options: at.ITEM_NUMBER
      }
    }
  ],
  user_interface_organizer: [
    ["Order", "q"],
    ["Specs", "MATERIAL", "height", "length", "width", "numShelfs", "numWalls", "sideOffset"],
    ["Options", "FL_H", "FT_H", "cornerRadius", "FSA"]
  ],
  onchange_effects: [],
  onload: function() {
    alert("Form loaded !");
  },
  onchange: null,
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
