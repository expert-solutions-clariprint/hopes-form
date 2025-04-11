/*!
 * Hopes Form (Free Edition)
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 */
const M = document, Z = window, It = M.documentElement, K = M.createElement.bind(M), Tt = K("div"), rt = K("table"), Qt = K("tbody"), _t = K("tr"), { isArray: nt, prototype: zt } = Array, { concat: Zt, filter: ft, indexOf: Lt, map: Ht, push: te, slice: Rt, some: dt, splice: ee } = zt, ne = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ie = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, se = /<.+>/, oe = /^\w+$/;
function ht(t, e) {
  const n = re(e);
  return !t || !n && !U(e) && !S(e) ? [] : !n && ie.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && oe.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class it {
  constructor(e, n) {
    if (!e)
      return;
    if (ct(e))
      return e;
    let i = e;
    if (T(e)) {
      const s = n || M;
      if (i = ne.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : se.test(e) ? kt(e) : ct(s) ? s.find(e) : T(s) ? b(s).find(e) : ht(e, s), !i)
        return;
    } else if (W(e))
      return this.ready(e);
    (i.nodeType || i === Z) && (i = [i]), this.length = i.length;
    for (let s = 0, o = this.length; s < o; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new it(e, n);
  }
}
const d = it.prototype, b = d.init;
b.fn = b.prototype = d;
d.length = 0;
d.splice = ee;
typeof Symbol == "function" && (d[Symbol.iterator] = zt[Symbol.iterator]);
function ct(t) {
  return t instanceof it;
}
function G(t) {
  return !!t && t === t.window;
}
function U(t) {
  return !!t && t.nodeType === 9;
}
function re(t) {
  return !!t && t.nodeType === 11;
}
function S(t) {
  return !!t && t.nodeType === 1;
}
function le(t) {
  return !!t && t.nodeType === 3;
}
function ae(t) {
  return typeof t == "boolean";
}
function W(t) {
  return typeof t == "function";
}
function T(t) {
  return typeof t == "string";
}
function H(t) {
  return t === void 0;
}
function Y(t) {
  return t === null;
}
function Pt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function pt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
b.isWindow = G;
b.isFunction = W;
b.isArray = nt;
b.isNumeric = Pt;
b.isPlainObject = pt;
function F(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (pt(t)) {
    const i = Object.keys(t);
    for (let s = 0, o = i.length; s < o; s++) {
      const r = i[s];
      if (e.call(t[r], r, t[r]) === !1)
        return t;
    }
  } else
    for (let i = 0, s = t.length; i < s; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
b.each = F;
d.each = function(t) {
  return F(this, t);
};
d.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function tt(...t) {
  const e = ae(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return tt(e, b, n);
  for (let s = 0; s < i; s++) {
    const o = t[s];
    for (const r in o)
      e && (nt(o[r]) || pt(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), tt(e, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
b.extend = tt;
d.extend = function(t) {
  return tt(d, t);
};
const ce = /\S+/g;
function st(t) {
  return T(t) ? t.match(ce) || [] : [];
}
d.toggleClass = function(t, e) {
  const n = st(t), i = !H(e);
  return this.each((s, o) => {
    S(o) && F(n, (r, c) => {
      i ? e ? o.classList.add(c) : o.classList.remove(c) : o.classList.toggle(c);
    });
  });
};
d.addClass = function(t) {
  return this.toggleClass(t, !0);
};
d.removeAttr = function(t) {
  const e = st(t);
  return this.each((n, i) => {
    S(i) && F(e, (s, o) => {
      i.removeAttribute(o);
    });
  });
};
function ue(t, e) {
  if (t) {
    if (T(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !S(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Y(n) ? void 0 : n;
      }
      return H(e) ? this : Y(e) ? this.removeAttr(t) : this.each((n, i) => {
        S(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
d.attr = ue;
d.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
d.hasClass = function(t) {
  return !!t && dt.call(this, (e) => S(e) && e.classList.contains(t));
};
d.get = function(t) {
  return H(t) ? Rt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
d.eq = function(t) {
  return b(this.get(t));
};
d.first = function() {
  return this.eq(0);
};
d.last = function() {
  return this.eq(-1);
};
function fe(t) {
  return H(t) ? this.get().map((e) => S(e) || le(e) ? e.textContent : "").join("") : this.each((e, n) => {
    S(n) && (n.textContent = t);
  });
}
d.text = fe;
function O(t, e, n) {
  if (!S(t))
    return;
  const i = Z.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function j(t, e) {
  return parseInt(O(t, e), 10) || 0;
}
function xt(t, e) {
  return j(t, `border${e ? "Left" : "Top"}Width`) + j(t, `padding${e ? "Left" : "Top"}`) + j(t, `padding${e ? "Right" : "Bottom"}`) + j(t, `border${e ? "Right" : "Bottom"}Width`);
}
const lt = {};
function de(t) {
  if (lt[t])
    return lt[t];
  const e = K(t);
  M.body.insertBefore(e, null);
  const n = O(e, "display");
  return M.body.removeChild(e), lt[t] = n !== "none" ? n : "block";
}
function Ct(t) {
  return O(t, "display") === "none";
}
function jt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function ot(t) {
  return T(t) ? (e, n) => jt(n, t) : W(t) ? t : ct(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
d.filter = function(t) {
  const e = ot(t);
  return b(ft.call(this, (n, i) => e.call(n, i, n)));
};
function J(t, e) {
  return e ? t.filter(e) : t;
}
d.detach = function(t) {
  return J(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const he = /^\s*<(\w+)[^>]*>/, pe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, wt = {
  "*": Tt,
  tr: Qt,
  td: _t,
  th: _t,
  thead: rt,
  tbody: rt,
  tfoot: rt
};
function kt(t) {
  if (!T(t))
    return [];
  if (pe.test(t))
    return [K(RegExp.$1)];
  const e = he.test(t) && RegExp.$1, n = wt[e] || wt["*"];
  return n.innerHTML = t, b(n.childNodes).detach().get();
}
b.parseHTML = kt;
d.has = function(t) {
  const e = T(t) ? (n, i) => ht(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
d.not = function(t) {
  const e = ot(t);
  return this.filter((n, i) => (!T(t) || S(i)) && !e.call(i, n, i));
};
function N(t, e, n, i) {
  const s = [], o = W(e), r = i && ot(i);
  for (let c = 0, a = t.length; c < a; c++)
    if (o) {
      const l = e(t[c]);
      l.length && te.apply(s, l);
    } else {
      let l = t[c][e];
      for (; l != null && !(i && r(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function Mt(t) {
  return t.multiple && t.options ? N(ft.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ge(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || Kt.test(n.type)) {
      const s = nt(t) ? Ht.call(t, String) : Y(t) ? [] : [String(t)];
      i ? F(n.options, (o, r) => {
        r.selected = s.indexOf(r.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = H(t) || Y(t) ? "" : t;
  }) : this[0] && Mt(this[0]);
}
d.val = ge;
d.is = function(t) {
  const e = ot(t);
  return dt.call(this, (n, i) => e.call(n, i, n));
};
b.guid = 1;
function k(t) {
  return t.length > 1 ? ft.call(t, (e, n, i) => Lt.call(i, e) === n) : t;
}
b.unique = k;
d.add = function(t, e) {
  return b(k(this.get().concat(b(t, e).get())));
};
d.children = function(t) {
  return J(b(k(N(this, (e) => e.children))), t);
};
d.parent = function(t) {
  return J(b(k(N(this, "parentNode"))), t);
};
d.index = function(t) {
  const e = t ? b(t)[0] : this[0], n = t ? this : b(e).parent().children();
  return Lt.call(n, e);
};
d.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
d.siblings = function(t) {
  return J(b(k(N(this, (e) => b(e).parent().children().not(e)))), t);
};
d.find = function(t) {
  return b(k(N(this, (e) => ht(t, e))));
};
const me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ye = /^$|^module$|\/(java|ecma)script/i, $e = ["type", "src", "nonce", "noModule"];
function be(t, e) {
  const n = b(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (ye.test(s.type) && It.contains(s)) {
      const o = K("script");
      o.text = s.textContent.replace(me, ""), F($e, (r, c) => {
        s[c] && (o[c] = s[c]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function ve(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && be(e, t.ownerDocument);
}
function V(t, e, n, i, s, o, r, c) {
  return F(t, (a, l) => {
    F(b(l), (u, g) => {
      F(b(e), (m, f) => {
        const h = n ? g : f, y = n ? f : g, C = n ? u : m;
        ve(h, C ? y.cloneNode(!0) : y, i, s, !C);
      }, c);
    }, r);
  }, o), e;
}
d.after = function() {
  return V(arguments, this, !1, !1, !1, !0, !0);
};
d.append = function() {
  return V(arguments, this, !1, !1, !0);
};
function Ee(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (H(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    S(i) && (e ? b(i).empty().append(t) : i.innerHTML = t);
  });
}
d.html = Ee;
d.appendTo = function(t) {
  return V(arguments, this, !0, !1, !0);
};
d.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = b(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
d.before = function() {
  return V(arguments, this, !1, !0);
};
d.wrapAll = function(t) {
  let e = b(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
d.wrap = function(t) {
  return this.each((e, n) => {
    const i = b(t)[0];
    b(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
d.insertAfter = function(t) {
  return V(arguments, this, !0, !1, !1, !1, !1, !0);
};
d.insertBefore = function(t) {
  return V(arguments, this, !0, !0);
};
d.prepend = function() {
  return V(arguments, this, !1, !0, !0, !0, !0);
};
d.prependTo = function(t) {
  return V(arguments, this, !0, !0, !0, !1, !1, !0);
};
d.contents = function() {
  return b(k(N(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
d.next = function(t, e, n) {
  return J(b(k(N(this, "nextElementSibling", e, n))), t);
};
d.nextAll = function(t) {
  return this.next(t, !0);
};
d.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
d.parents = function(t, e) {
  return J(b(k(N(this, "parentElement", !0, e))), t);
};
d.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
d.prev = function(t, e, n) {
  return J(b(k(N(this, "previousElementSibling", e, n))), t);
};
d.prevAll = function(t) {
  return this.prev(t, !0);
};
d.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
d.map = function(t) {
  return b(Zt.apply([], Ht.call(this, (e, n) => t.call(e, n, e))));
};
d.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
d.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && O(n, "position") === "static"; )
      n = n.offsetParent;
    return n || It;
  });
};
d.slice = function(t, e) {
  return b(Rt.call(this, t, e));
};
const _e = /-([a-z])/g;
function gt(t) {
  return t.replace(_e, (e, n) => n.toUpperCase());
}
d.ready = function(t) {
  const e = () => setTimeout(t, 0, b);
  return M.readyState !== "loading" ? e() : M.addEventListener("DOMContentLoaded", e), this;
};
d.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = b(e);
    n.replaceWith(n.children());
  }), this;
};
d.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Z.pageYOffset,
    left: e.left + Z.pageXOffset
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
    if (s !== t && S(s)) {
      const o = b(s).offset();
      n.top -= o.top + j(s, "borderTopWidth"), n.left -= o.left + j(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - j(t, "marginTop"),
    left: n.left - j(t, "marginLeft")
  };
};
const Ot = {
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
    if (T(t))
      return t = Ot[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
d.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Ot[t] || t];
  });
};
const xe = /^--/;
function mt(t) {
  return xe.test(t);
}
const at = {}, { style: Ce } = Tt, we = ["webkit", "moz", "ms"];
function Ae(t, e = mt(t)) {
  if (e)
    return t;
  if (!at[t]) {
    const n = gt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${we.join(`${i} `)}${i}`.split(" ");
    F(s, (o, r) => {
      if (r in Ce)
        return at[t] = r, !1;
    });
  }
  return at[t];
}
const Se = {
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
function Nt(t, e, n = mt(t)) {
  return !n && !Se[t] && Pt(e) ? `${e}px` : e;
}
function Fe(t, e) {
  if (T(t)) {
    const n = mt(t);
    return t = Ae(t, n), arguments.length < 2 ? this[0] && O(this[0], t, n) : t ? (e = Nt(t, e, n), this.each((i, s) => {
      S(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
d.css = Fe;
function Jt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Ie = /^\s+|\s+$/;
function At(t, e) {
  const n = t.dataset[e] || t.dataset[gt(e)];
  return Ie.test(n) ? n : Jt(JSON.parse, n);
}
function Te(t, e, n) {
  n = Jt(JSON.stringify, n), t.dataset[gt(e)] = n;
}
function ze(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = At(this[0], i);
    return n;
  }
  if (T(t))
    return arguments.length < 2 ? this[0] && At(this[0], t) : H(e) ? this : this.each((n, i) => {
      Te(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
d.data = ze;
function Vt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
F([!0, !1], (t, e) => {
  F(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    d[s] = function(o) {
      if (this[0])
        return G(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? Vt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (o && e ? j(this[0], `margin${n ? "Top" : "Left"}`) + j(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
F(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  d[n] = function(i) {
    if (!this[0])
      return H(i) ? void 0 : this;
    if (!arguments.length)
      return G(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? Vt(this[0], e) : this[0].getBoundingClientRect()[n] - xt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((o, r) => {
      if (!S(r))
        return;
      const c = O(r, "boxSizing");
      r.style[n] = Nt(n, s + (c === "border-box" ? xt(r, !t) : 0));
    });
  };
});
const St = "___cd";
d.toggle = function(t) {
  return this.each((e, n) => {
    if (!S(n))
      return;
    const i = Ct(n);
    (H(t) ? i : t) ? (n.style.display = n[St] || "", Ct(n) && (n.style.display = de(n.tagName))) : i || (n[St] = O(n, "display"), n.style.display = "none");
  });
};
d.hide = function() {
  return this.toggle(!1);
};
d.show = function() {
  return this.toggle(!0);
};
const Ft = "___ce", yt = ".", $t = { focus: "focusin", blur: "focusout" }, Bt = { mouseenter: "mouseover", mouseleave: "mouseout" }, Le = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function bt(t) {
  return Bt[t] || $t[t] || t;
}
function vt(t) {
  const e = t.split(yt);
  return [e[0], e.slice(1).sort()];
}
d.trigger = function(t, e) {
  if (T(t)) {
    const [i, s] = vt(t), o = bt(i);
    if (!o)
      return this;
    const r = Le.test(o) ? "MouseEvents" : "HTMLEvents";
    t = M.createEvent(r), t.initEvent(o, !0, !0), t.namespace = s.join(yt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in $t;
  return this.each((i, s) => {
    n && W(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Dt(t) {
  return t[Ft] = t[Ft] || {};
}
function He(t, e, n, i, s) {
  const o = Dt(t);
  o[e] = o[e] || [], o[e].push([n, i, s]), t.addEventListener(e, s);
}
function Ut(t, e) {
  return !e || !dt.call(e, (n) => t.indexOf(n) < 0);
}
function et(t, e, n, i, s) {
  const o = Dt(t);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, c, a]) => {
      if (s && a.guid !== s.guid || !Ut(r, n) || i && i !== c)
        return !0;
      t.removeEventListener(e, a);
    }));
  else for (e in o)
    et(t, e, n, i, s);
}
d.off = function(t, e, n) {
  if (H(t))
    this.each((i, s) => {
      !S(s) && !U(s) && !G(s) || et(s);
    });
  else if (T(t))
    W(e) && (n = e, e = ""), F(st(t), (i, s) => {
      const [o, r] = vt(s), c = bt(o);
      this.each((a, l) => {
        !S(l) && !U(l) && !G(l) || et(l, c, r, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
d.remove = function(t) {
  return J(this, t).detach().off(), this;
};
d.replaceWith = function(t) {
  return this.before(t).remove();
};
d.replaceAll = function(t) {
  return b(t).replaceWith(this), this;
};
function Re(t, e, n, i, s) {
  if (!T(t)) {
    for (const o in t)
      this.on(o, e, n, t[o], s);
    return this;
  }
  return T(e) || (H(e) || Y(e) ? e = "" : H(n) ? (n = e, e = "") : (i = n, n = e, e = "")), W(i) || (i = n, n = void 0), i ? (F(st(t), (o, r) => {
    const [c, a] = vt(r), l = bt(c), u = c in Bt, g = c in $t;
    l && this.each((m, f) => {
      if (!S(f) && !U(f) && !G(f))
        return;
      const h = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Ut(a, y.namespace.split(yt)) || !e && (g && (y.target !== f || y.___ot === l) || u && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let C = f;
        if (e) {
          let v = y.target;
          for (; !jt(v, e); )
            if (v === f || (v = v.parentNode, !v))
              return;
          C = v;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return C;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const E = i.call(C, y, y.___td);
        s && et(f, l, a, e, h), E === !1 && (y.preventDefault(), y.stopPropagation());
      };
      h.guid = i.guid = i.guid || b.guid++, He(f, l, a, e, h);
    });
  }), this) : this;
}
d.on = Re;
function Pe(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
d.one = Pe;
const je = /\r?\n/g;
function ke(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(je, `\r
`))}`;
}
const Me = /file|reset|submit|button|image/i, Kt = /radio|checkbox/i;
d.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    F(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Me.test(s.type) || Kt.test(s.type) && !s.checked)
        return;
      const o = Mt(s);
      if (!H(o)) {
        const r = nt(o) ? o : [o];
        F(r, (c, a) => {
          t += ke(s.name, a);
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
window.$ = b;
window.jQuery = window.$;
const Wt = 0;
function p(t, e) {
  Wt >= e && console.log(t);
}
function Oe(t) {
}
function I(t) {
  return t && typeof t == "object" && t.constructor === Object;
}
function qt(t) {
  return `${t}${Math.floor(Math.random() * Date.now()).toString(32)}`;
}
function ut(t, e, n) {
  if (p(`fetchEJS(${t})`), window.fetch) {
    var i = new Headers({
      "Content-Type": "text/plain; charset=UTF-8"
    }), s = {
      method: "GET",
      headers: i,
      mode: "cors",
      cache: "default"
    };
    window.fetch(t, s).then(function(o) {
      return o.text();
    }).then(function(o) {
      typeof o == "string" && n(o, "OK");
    });
  } else
    get(t, e, n);
}
function Gt(t, e, n = null, i = ".") {
  var s = n ? e.split(n).at(-1) : e;
  const o = s.split(i);
  var r = t;
  return o.forEach((c) => {
    if (r[c]) r = r[c];
    else return null;
  }), r === t ? null : r;
}
function Xt(t, e, ...n) {
  if (typeof t != "function")
    throw new TypeError("HU.proxy: le premier argument doit être une fonction");
  return n.length ? function(...i) {
    return t.apply(e, [...n, ...i]);
  } : t.bind(e);
}
function Ne(t, ...e) {
  if (typeof t != "object" || t === null)
    throw new TypeError("HU.extend: le premier argument doit être un objet");
  for (const n of e)
    if (typeof n == "object" && n !== null)
      for (const i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  return t;
}
class B {
  static instances = [];
  static updateFromA(e) {
    const n = e.closest(".bootstrap-select"), i = n.find("select"), s = parseInt(e.attr("aria-index"), 10);
    n.find("div.filter-option-inner-inner").html(e.html()), i[0].selectedIndex = s, i.trigger("change"), n.find(".dropdown-menu").removeClass("show");
  }
  static init(e) {
    let n = e, i = null;
    if (e[0].tagName === "SELECT" && (n = e.parent(), i = e), n.hasClass("bootstrap-select")) {
      i || (i = n.find("select"));
      const s = i[0].selectedIndex, o = $(n.find("a[role=option]")[s]);
      n.find("button .filter-option-inner-inner").html(o.html());
    }
  }
  static initInstances() {
    B.instances.forEach((e) => B.init(e.$snode));
  }
  constructor(e) {
    this.$snode = e, B.instances.push(this), e.each((o, r) => B.init($(r))), e.find("select").hide();
    const i = e.find("button.dropdown-toggle"), s = e.find(".dropdown-menu");
    i.on("click", (o) => {
      o.preventDefault(), s.toggleClass("show");
    }), $(document).on("click", (o) => {
      !$(o.target).closest(e).length && !$(o.target).is(i) && s.removeClass("show");
    }), e.find("a[role=option]").off("click").on("click", (o) => {
      const r = $(o.target).closest("a");
      B.updateFromA(r);
    });
  }
}
const Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtSelect: B,
  alert: Oe,
  extend: Ne,
  fetchEJS: ut,
  isObject: I,
  jpath: Gt,
  log: p,
  proxy: Xt,
  uniqid: qt,
  verbose: Wt
}, Symbol.toStringTag, { value: "Module" }));
/**
 * HForm/samples.js
 * Sample of schema for Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
const Q = {
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
  ],
  JDF_LIST: [
    "F4_1",
    "F6_1",
    "F6_4",
    "F8_1",
    "F8_3",
    "F8_4",
    "F8_5",
    "F10_1",
    "F12_3",
    "F14_1",
    "F16_4",
    "F16_5"
  ],
  JDF_LIST_IMG: [
    "F4_1.png",
    "F6_1.png",
    "F6_4.png",
    "F8_1.png",
    "F8_3.png",
    "F8_4.png",
    "F8_5.png",
    "F10_1.png",
    "F12_3.png",
    "F14_1.png",
    "F16_4.png",
    "F16_5.png"
  ]
}, Ve = {
  MATERIAL_SELECTOR: {
    kind: "multiselect",
    value: "PVC Expanse;WHITE;10",
    options: Q.MATERIAL_CSV,
    labels: ["Kind", "Color", "Thickness"],
    units: ["", "", "mm"],
    separator: ";",
    cols: 3,
    // "datas" : "CALLFUNC(fetch,#POS1_ALIAS�API_GET_POS1_SELECTOR_DATAS)",
    context: {},
    filter: "pos1_selector_filter"
  }
}, Be = [
  {
    title: "",
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
        value: Ve.MATERIAL_SELECTOR
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
        fid: "numShelfs",
        label: "Number of shelfs",
        unit: "",
        help: !0,
        helpTag: "papiers",
        value: {
          kind: "select",
          value: 3,
          options: Q.ITEM_NUMBER
        }
      },
      {
        fid: "JDF",
        label: "Kind of folder",
        value: {
          kind: "select",
          value: "F4_1",
          options: Q.JDF_LIST,
          options_img: Q.JDF_LIST_IMG
        }
      }
    ],
    user_interface_organizer: [
      ["Order", "q"],
      ["Specs", "MATERIAL", "height", "length", "width", "numShelfs", "numWalls", "sideOffset"],
      ["Options", "FL_H", "JDF"]
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
  }
];
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
const De = (t) => {
  const e = t, n = t.fid, i = t.value.value, s = !!t.value.unit && t.value.unit != "", o = t.value.options, r = t.value.options_img, c = !!Array.isArray(r);
  if (c && r.length < o.length)
    for (var u = r.length; u < o.length; u++)
      _img.push("select/default.png");
  const a = e.img_path ? `${e.img_path}/select/` : "/img/select/";
  var l = "product";
  e.translationContext && (l = e.translationContext);
  var u = 0, g = "";
  t.value.options.forEach((f) => {
    var h = "", y = "";
    f.value && f.label ? (h = f.value, y = HForm.transl(f.label, "products")) : typeof f == "number" ? (h = f, y = f) : typeof f == "string" && (h = f, y = HForm.transl(f, l)), g += `
    				<option ${s ? 'style="text-align: right;"' : ""} 
              value="${h}" ${h === i ? "selected" : ""} 
    				${c ? `data-content="<div class='d-flex justify-content-between'><span>${y}</span><img src='${a}${r[u++]}' width='128px' height='128px'/></div>"` : ""}>${y}</option>`;
  });
  var m = "";
  return u = 0, c && t.value.options.forEach((f) => {
    var h = "";
    f.value && f.label ? (f.value, h = HForm.transl(f.label, "products")) : typeof f == "number" ? h = f : typeof f == "string" && (h = HForm.transl(f, l)), m += `
                        <li>
                          <a role="option" class="dropdown-item" id="bs-select-1-0" tabindex="0" aria-index="${u}">
                            <span class="text">
                              <div class="d-flex justify-content-between">
                                <span style="white-space: normal;place-content: center;">${h}</span>
                                <img src="${a}${r[u++]}" style="width:128px;height:128px;">
                              </div>
                            </span>
                          </a>
                        </li>`;
  }), `${c ? `
              <div class="dropdown form-control bootstrap-select" id="${n}">` : ""}
               <select class="form-control" name="${n}zzzvalue" placeholder="" aria-labelledby="label${n}">
              ${g}
               </select>
              ${c ? `
                <button type="button" tabindex="-1" 
                    class="btn dropdown-toggle btn-light" 
                    data-bs-toggle="dropdown" 
                    role="combobox" 
                    aria-owns="bs-select-1" 
                    aria-haspopup="listbox" 
                    aria-expanded="false">
                  <div class="filter-option">
                    <div class="filter-option-inner">
                      <div class="filter-option-inner-inner">

                      </div>
                    </div> 
                  </div>
                </button>
                <div class="dropdown-menu" style="max-height: 511.74px; overflow: hidden; min-height: 0px;">
                  <div class="inner" role="listbox" id="bs-select-1" tabindex="-1" aria-activedescendant="bs-select-1-2" style="max-height: 493.74px; overflow: hidden auto; min-height: 0px;">
                    <ul class="dropdown-inner" role="presentation" style="margin-top: 0px; margin-bottom: 0px;">
				${m}  
                    </ul>
                  </div>
                </div>` : ""}
        ${c ? `
              </div>` : ""}
     ${c ? `
     <script type="text/javascript">
      new HU.BtSelect($("div.bootstrap-select#${n}"));
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
const Ue = (t) => {
  const e = t, n = t.value, i = t.fid, s = t.label;
  var o = e.translationContext ? e.translationContext : "product";
  console.log("field-multiselect"), console.log(e);
  const r = n.value, c = n.separator && n.separator !== "" ? n.separator : ";", a = Array.isArray(r) ? r : r.split(c);
  console.log(a);
  const l = a.length, u = n.units, g = [];
  var m = n.options;
  const f = n.datas, h = typeof multiselect_filter == "object" && typeof n.filter == "string" && typeof multiselect_filter[n.filter] == "function" ? multiselect_filter[n.filter] : null, y = n.labels, C = typeof n.cols == "number" && [1, 2, 3, 4, 6].includes(n.cols) ? n.cols : 1;
  !Array.isArray(m) && typeof h == "function" && (m = h(f));
  var E = 12;
  C === 2 ? E = 6 : C === 3 ? E = 4 : C === 4 ? E = 3 : C === 6 && (E = 2);
  const v = [], R = [];
  v.length = l, R.length = l, g.length = l;
  for (var L = 0, x = 0; x < l; x++)
    v[x] = [], R[x] = [], g[x] = Array.isArray(u) && !!u[x] && u[x] !== "";
  for (var x = 0; L < m.length; L++) {
    const w = Array.isArray(m[L]) ? m[L] : m[L].split(c);
    if (w.length === l)
      for (x = 0; x < l; x++) {
        const A = Array.isArray(w[x]) ? w[x][w.length - 1] : w[x];
        R[x].includes(A) || (R[x].push(A), v[x].push(w[x]));
      }
  }
  console.log(R);
  for (var x = 0; x < l; x++)
    v[x].sort();
  return console.log("coucou multiselect 2"), console.log(v), `
  <div class="row">` + (() => {
    for (var P = "", w = 0; w < l; w++) {
      const A = Array.isArray(y) ? y[w] : null, Yt = v[w];
      console.log("coucou multiselect 3"), P += ` 
    <div class="col-${E}">
      ${A ? `
      <div class="card mt-2 mb-2 border">  
        <div class="card-header h6">
            <label for="${i}_${w}">${HForm.transl(s, o)}${HForm.transl(A, o)}</label>
            <div role="help" field="${i}_${w}"></div>
        </div>` : `
      <div class="card border-0">  `}
        <div class="card-body ${A ? "" : "p-0"}">
            <div class="input-group">
               <select class="form-control" role="multiselect" data-index="${w}" fid="${i}" name="${i}_${w}zzzvalue" placeholder="">
    ` + (() => {
        var Et = "";
        return Yt.forEach((z) => {
          var q = "", X = "";
          Array.isArray(z) && z.length > 1 ? (q = z[1], X = HForm.transl(z[0], "products")) : z.value && z.label ? (q = z.value, X = HForm.transl(z.label, "products")) : typeof z == "number" ? (q = z, X = z) : typeof z == "string" && (q = z, X = HForm.transl(z, o)), Et += `
                    <option ${g[w] ? 'style="text-align: right;"' : ""} 
                        value="${q}" ${q === a[w] ? "selected" : ""}>${X}</option>`;
        }), Et;
      })() + `
               </select>
            ${g[w] ? `
              <span class="input-group-text">${u[w]}</span>` : ""}
          </div>
      </div>
    </div>
  </div>`;
    }
    return P;
  })() + `
    <input type="hidden" role="multiselect" name="${i}" value="${r}"/>
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
const Ke = (t) => {
  const e = t, n = t.value, i = t.fid, s = t.label;
  var o = n.translationContext ? n.translationContext : e.translationContext ? e.translationContext : "product";
  console.log("field-multicontrol"), console.log(e);
  const r = e.label && s !== "";
  return `
    <div class="col-12" role="fieds-multicontrol" id="${i}">
      <input type="hidden" name="${i}[value][kind]" value="${n.askind ? n.askind : n.kind}">
       ${r ? `
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label id="label${i}">${HForm.transl(s, o)}</label>
            <div role="help" field="${i}"></div>
        </div>` : `
      <div class="card border-0 p-0">`}
        <div class="card-body container ${r ? "" : "p-0"}" aria-labelledby="label${i}">
            <div class="row">` + (() => {
    var c = "";
    return Object.entries(n.value).forEach((a) => {
      var [l, u] = a;
      const g = i.search(/zzz/) < 0 ? `${i}zzzvaluezzzvaluezzz${l}` : `${i}zzzvaluezzz${l}`;
      if (u.unit && u.unit != "", u.label && u.label, u.translationContext && u.translationContext, u.kind) {
        const m = { fid: g };
        $.extend(m, u), m.value = ["number", "text"].includes(u.kind) ? u.value : u, u.kind === "multicontrol" && (m.value = u), c += HForm.template.tplField(m);
      }
    }), c;
  })() + `
            </div>
        </div>
      </div>
    </div>`;
}, We = {
  tplKind: {
    text: (t) => `
      	      <input type="text" name="${t.fid}" id="${t.fid}" 
      	      	class="form-control ${t.unit ? "text-end" : ""}" 
      	      	placeholder="${t.placeholder ? HForm.transl(t.placeholder, tContext) : ""}" 
      	      	style="min-width: 50px" 
      	      	value="${t.value}" 
      			 ${t.require ? "require" : ""}
      	      	aria-labelledby="label${t.fid}">
      	`,
    number: (t) => `
      	      <input type="number" name="${t.fid}" id="${t.fid}" 
      	      	class="form-control text-end"
      	      	placeholder="${t.placeholder ? HForm.transl(t.placeholder, tContext) : ""}" 
      	      	style="min-width: 50px" 
      	      	value="${t.value}" 
          			min="${t.min}"
          			max="${t.max}"
          			step="${t.step}"
          		${t.require ? "require" : ""}
      	      	aria-labelledby="label${t.fid}">
      	`,
    select: De,
    multiselect: Ue,
    multicontrol: Ke
  },
  bootstrap5v1: {
    tplField: (t) => {
      const e = t.fid, n = t.value, i = t.translationContext ? t.translationContext : "product", s = !!t.label && t.label !== "", o = !!t.unit && t.unit != "", r = !!n.require && !!n.invalid_msg, c = s ? HForm.transl(t.label, i) : "", a = I(n) && typeof n.kind == "string" ? n.kind : t.min && t.max ? "number" : "text", l = {
        col: () => {
          var y = "col-12";
          return t.bt_nb_cols ? y = `col col-sm-12 col-lg-${t.bt_nb_cols}` : I(n) && n.kind === "multiselect" ? y = "col col-12" : !I(n) || I(n) && ["imgFile"].includes(n.kind) ? y = "col col-sm-12 col-md-6 col-lg-4" : I(n) && n.kind === "select" && (y = "col col-sm-12 col-lg-6"), y;
        },
        card: () => s ? "card mt-2 mb-2 border" : "card border-0",
        cardBody: () => "card-body",
        cardHeader: () => "card-header h6"
      }, u = HForm.templates.tplKind[a] ? HForm.templates.tplKind[a](t) : "", g = u === "" ? "need-content" : "";
      t.toBefilled = u === "";
      const m = s ? `<div class="${l.cardHeader()}">
              <label id="label${e}">${c}</label>
              <div role="help" field="${e}"></div>
          </div>` : "", f = o ? `<span class="input-group-text">${t.unit}</span>` : "", h = r ? `<div class="invalid-feedback">${_val.invalid_msg}</div>` : "";
      return `
                <div class="${l.col()}">
                  <div class="${l.card()}">  
                   ${m}
                    <div class="${l.cardBody()}">
                      <div class="input-group ${g}" id="${e}">
      				        ${u}
                      ${f} 
                      </div>
                    ${h}     
                    </div>
                  </div>
                </div>`;
    },
    tplGroup: (t) => {
      const e = t.gid, n = HForm.transl(e, "products");
      return `
       <div class="col-12" role="fieds-group" id="${e}">
        <div class="card border mt-2 mb-2">  
          <div class="card-header h6">
              <label for="${e}">${n}</label>
              <div role="help" field="${e}"></div>
          </div>
          <div class="card-body container">
              <div class="row">
              ${(() => {
        var s = "";
        return t.fields.forEach((o) => s += HForm.templates.bootstrap5v1.tplField(o)), s;
      })()}
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
      return HForm.sortFields(t.user_interface_organizer, t.fields).forEach((s) => {
        typeof s.fid == "string" ? n += HForm.templates.bootstrap5v1.tplField(s) : I(s) && Object.entries(s).forEach((o) => {
          var [r, c] = o;
          Array.isArray(c) && c.length > 0 && (n += HForm.templates.bootstrap5v1.tplGroup({ gid: r, fields: c }));
        });
      }), n;
    })()}
                </form>
              </div>
            </div>
  `
  }
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
window.HU = Je;
let D = class _ {
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
  static samples = [];
  static getKind(e) {
    return p("getKind()"), p(e), p(typeof e), typeof e == "object" && typeof e.kind == "string" && typeof _.ejsByKind[e.kind] == "string" || typeof e == "object" && typeof e.kind == "string" && typeof _.ejsByKind[e.kind] == "object" && typeof _.ejsByKind[e.kind].url == "string" ? e.kind : typeof e;
  }
  static getRootCss(e) {
    return typeof this.rootcss[e] == "string" ? this.rootcss[e] : typeof e == "string" && this.modules.includes(e) ? `/modules/${e}/css/` : typeof this.rootcss.base == "string" ? this.rootcss.base : "/css/";
  }
  static getRootImg(e) {
    var n = "/img/";
    return typeof this.rootimg[e] == "string" ? n = this.rootimg[e] : typeof e == "string" && this.modules.includes(e) ? n = `/modules/${e}/img/` : typeof this.rootimg.base == "string" && (n = this.rootimg.base), p(`getRootImg(${e}) => typeof:${typeof e}, rootimg:${this.rootimg[e]}, %modules:${this.modules.includes(e)} => ${n}`), n;
  }
  static getRootEjs(e) {
    var n = "/ejs/";
    return typeof this.rootejs[e] == "string" ? n = this.rootejs[e] : typeof e == "string" && this.modules.includes(e) ? n = `/modules/${e}/ejs/` : typeof this.rootejs.base == "string" && (n = this.rootejs.base), p(`getRootEjs(${e}) => typeof:${typeof e}, rootejs:${this.rootejs[e]}, %modules:${this.modules.includes(e)} => ${n}`), n;
  }
  static getEJSbyKind(e) {
    var n = "/ejs/";
    typeof _.rootejs.base == "string" && (n = _.rootejs.base);
    let i = _.ejsByKind[e];
    var s = "base";
    return I(i) && (i.module !== void 0 && (s = i.module.name), i.url !== void 0 && (i = i.url)), n = _.getRootEjs(s), p(`getEJSbyKind(${e}) => modname:${s},url:${i},root:${n}`), typeof i == "string" ? `${n}${i}.ejs` : `${n}${e}.ejs`;
  }
  static getCallBackByKind(e) {
    let n = _.ejsByKind[e], i, s = "";
    return typeof n == "object" && n.module !== void 0 ? typeof n.module.getLocals == "function" ? (s = "got it !", i = n.module.getLocals) : s = `unknown getLocals for ${n.module.name}` : s = "no module for this kind", p(`getCallBackByKind(${e}) : ${s}`), i;
  }
  static getEJSForContent(e) {
    return _.getEJSbyKind(_.getKind(e));
  }
  static onloadHtmlEJS(e, n, i, s, o, r) {
    p(`for ${$(e)} : call render on ${n}`), p(i);
    const c = _.getKind(i.value);
    if (typeof o == "function" && o(), typeof s == "function") s();
    else if (c == "array") {
      var a = 0;
      value.forEach((l) => {
        let u = `#${i.fid}zzz${a}`;
        p(`call htmlEJS on id : ${u}`), _.htmlEJS($(u), _.getEJSForContent(l), { fid: `${u}`, label: "#{gid}", value: l }), a++;
      });
    } else if (c == "object")
      for (const [l, u] of Object.entries(i.value)) {
        let g = `#${i.fid}zzz${l}`;
        p(`call htmlEJS on id : ${g}`), _.htmlEJS($(g), _.getEJSForContent(u), { fid: `${i.fid}zzz${l}`, label: l, value: u });
      }
  }
  static appendEJS(e, n, i, s) {
    p(`appendEJS(${$(e).attr("id")},${n})`);
    var o = 0;
    const r = function() {
      return o++, p(`waitForAllIncludes(${o})`), $(e).find('[role="waitIncludeEJS"]').length === 0 && typeof s == "function" ? s() : o < 6 ? window.setTimeout(r, 200) : null;
    }, c = function(a, l, u) {
      if (p(a), $(e.length > 0)) {
        console.log($(e)), console.log(a), console.log(i);
        const g = ejs.render(a, i);
        if (console.log(g), [`
`, ""].includes(g) ? console.error(`ejs.render bad return, typeof:${typeof g} !!!`) : $(e).append(g), $(e).find('[role="waitIncludeEJS"]').length === 0 && typeof s == "function") return s();
        if (typeof s == "function") return r();
      }
    };
    e !== null && e.length > 0 && n !== "" ? ut(n, "", c) : p("!!!!!!! parent or url undefined !!!!!!!!!!!");
  }
  static htmlEJS(e, n, i, s, o) {
    p(`htmlEJS(${e},${n}})`), p(i);
    var r = 0;
    const c = function() {
      r++;
      const l = $(e).find('[role="waitIncludeEJS"]');
      return p(`waitForAllIncludes(${l.length},${r})`), l.length === 0 ? (p("all includes loaded -> call callbacks"), _.onloadHtmlEJS(e, n, i, s, o)) : r < 6 ? window.setTimeout(c, 200) : console.error(`unable to load waitIncludeEJS : ${l.length}`);
    }, a = async function(l, u, g) {
      p(l);
      var m = i;
      typeof i.kind == "string" && typeof i.callbackGetLocals == "function" && (m = i.callbackGetLocals(i.kind, i)), m.img_path = _.getRootImg();
      const f = await ejs.render(l, m, { debug: !1 });
      return await $(e).html(f), window.setTimeout(c, 200);
    };
    e !== null && e.length > 0 && n !== "" ? ut(n, "", a) : p("!!!!!!! parent or url undefined !!!!!!!!!!!");
  }
  static sortFields(e, n) {
    const i = [], s = n.slice(), o = {};
    return s.forEach((r) => {
      o[r.fid] = r;
    }), Array.isArray(e) && e.forEach((r) => {
      if (Array.isArray(r) && r.length > 1) {
        const c = {}, a = c[r[0]] = [];
        r.shift(), r.forEach((l) => {
          const u = l.split(":"), g = u[0], m = o[g];
          if (I(m)) {
            const f = s.indexOf(m);
            f > -1 && s.splice(f, 1), u.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(u[1])) && (m.bt_nb_cols = parseInt(u[1])), a.push(m);
          }
        }), i.push(c);
      } else if (typeof r == "string") {
        const c = r.split(":"), a = c[0], l = o[a];
        if (I(l)) {
          const u = s.indexOf(l);
          u > -1 && s.splice(u, 1), c.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(c[1])) && (l.bt_nb_cols = parseInt(c[1])), i.push(l);
        }
      }
    }), s.forEach((r) => i.push(r)), i;
  }
  $find(e) {
    const n = $(this.element).find(e);
    return n.length > 0 ? n : typeof _.mainbar == "string" ? $(_.mainbar).find(e) : $([]);
  }
  /*********************************************************
   * 
   * 		Change events workflow utilities
   * 
   * *******************************************************/
  selector_effect_show_target(e) {
    this.$find("#" + e.join(",#")).show();
  }
  selector_effect_enabled_target(e) {
    const n = {};
    e.forEach((i) => {
      const s = i.split(":"), o = s[0];
      s.shift(), n[o] = s;
    }), Object.entries(n).forEach((i) => {
      const [s, o] = i, r = this.$find("input[type=radio][name='" + s + "']");
      o.length > 0 ? o.forEach((a) => {
        r.length > parseInt(a) && (r[parseInt(a)].disabled = !1);
      }) : r.each(function(a, l) {
        l.disabled = !1;
      });
      const c = this.$find("select[name='" + s + "zzzvalue']");
      if (o.length > 0) {
        const a = c.find("option");
        o.forEach((l) => {
          a.length > parseInt(l) && (a[parseInt(o[0])].disabled = !1);
        });
      } else c.length > 0 && (c[0].disabled = !1);
    });
  }
  selector_effect_disabled_target(e) {
    const n = {};
    e.forEach((i) => {
      const s = i.split(":"), o = s[0];
      s.shift(), n[o] = s;
    }), p(n), Object.entries(n).forEach((i) => {
      const [s, o] = i, r = this.$find("input[type=radio][name='" + s + "']");
      o.length > 0 ? o.forEach((a) => {
        r.length > parseInt(a) && (r[parseInt(a)].disabled = !0);
      }) : r.each(function(a, l) {
        l.disabled = !0;
      });
      const c = this.$find("select[name='" + s + "zzzvalue']");
      if (o.length > 0) {
        const a = c.find("option");
        o.forEach((l) => {
          a.length > parseInt(l) && (a[parseInt(o[0])].disabled = !0);
        });
      } else c.length > 0 && (c[0].disabled = !0);
    });
  }
  selector_effect_hide_target(e) {
    p("selector_effect_hide_target"), p(e);
    const n = "#" + e.join(",#");
    p(`selector:${n}`), this.$find(n).hide();
  }
  selector_effect_set_target(e, n) {
    const i = {};
    e.forEach((a) => {
      const l = a.split(":"), u = l[0];
      l.shift(), i[u] = l;
    });
    const s = Object.keys(i), o = "input[name=" + s.join("],input[name=") + "]";
    this.$find(o).each(function(a, l) {
      const u = $(l), g = i[u.attr("name")];
      Array.isArray(g) && g.length > 0 ? u.val(g[0]) : n && u.val(n);
    });
    const r = "select[name=" + s.join("zzzvalue],select[name=") + "zzzvalue]", c = "select[name=" + s.join("zzzvalue] option,select[name=") + "zzzvalue] option";
    this.$find(`${c}`).each(function(a, l) {
      const u = $(l);
      var g = u.parent().attr("name"), m = [];
      g && (m = i[g.split("zzzvalue")[0]]);
      var f = null;
      Array.isArray(m) && m.length > 0 ? f = m : n && (f = n), typeof f == "string" && u.attr("value") === f || Array.isArray(f) && f.length > 0 && u.attr("value") === f[0] ? u.parent()[0].selectedIndex = u[0].index : u.attr("selected", !1);
    }), n !== "stop_propagate" && this.$find(`${r}`).trigger("change");
  }
  selector_effect_select_target(e, n) {
    const i = {};
    e.forEach((s) => {
      const o = s.split(":"), r = o[0];
      o.shift(), i[r] = o;
    }), Object.entries(i).forEach((s) => {
      const [o, r] = s, c = this.$find("input[type=radio][name='" + o + "']");
      r.length > 0 && c.length > parseInt(r[0]) && (c[parseInt(r[0])].checked = !0);
    });
  }
  selector_effect_show_options(e, n) {
    const i = {};
    e.forEach((c) => {
      const a = c.split(":"), l = a[0];
      a.shift(), i[l] = a;
    });
    const s = Object.keys(i), o = "select[name='" + s.join("zzzvalue'] option,select[name='") + "zzzvalue'] option", r = "select[name='" + s.join("'] option,select[name='") + "'] option";
    console.log("selector_effect_show_options()"), console.log(r), console.log(i), this.$find(`${r}, ${o}`).each(function(c, a) {
      const l = $(a), u = a.value ? a.value : l.attr("value"), g = parseInt(u), m = l.parents("select").attr("name").split("zzzvalue"), f = i[m[0]];
      console.log(`branch on ${m[0]}>${u}, args :`), console.log(f);
      var h = null;
      if (Array.isArray(f) && f.length > 0 ? h = f : n && (h = n), typeof h == "string" && l.attr("value") === h)
        l.show();
      else if (Array.isArray(h) && h.length > 0) {
        console.log("toselect"), console.log(h);
        const C = h.slice();
        C.shift(), console.log("valArr"), console.log(C);
        const E = [];
        var y = 0;
        const v = E.length = C.length;
        for (; y < v; y++) E[y] = parseInt(C[y]);
        console.log("valArrInt"), console.log(E), h[0] === "<" && h.length > 1 && g < parseInt(h[1]) || h[0] === "<=" && h.length > 1 && g <= parseInt(h[1]) || h[0] === ">" && h.length > 1 && g > parseInt(h[1]) || h[0] === ">=" && h.length > 1 && g >= parseInt(h[1]) || h[0] === "%" && h.length > 2 && g >= parseInt(h[1]) && g <= parseInt(h[2]) || h[0] === "=" && C.includes(u) || h[0] === "=" && g && E.includes(g) || h[0] === "!=" && g && !E.includes(g) || h[0] === "!=" && !C.includes(u) ? l.show() : l.hide();
      } else l.hide();
    });
  }
  onChangeMultiselect(e, n) {
    console.log(`onChangeMultiselect(${e},${n})`);
    const i = this.locals;
    var s = null, o = null;
    i.fields.forEach((E) => {
      if (console.log(E), E.fid === e) s = E.value;
      else {
        const v = Gt(E, e, E.fid + "zzz", "zzz");
        v && (o = s, s = v);
      }
    });
    const r = this.$find(`select[role=multiselect][fid=${e}]`), c = this.$find(`input[role=multiselect][name=${e}]`);
    var a = parseInt(n);
    console.log(a), console.log(r), console.log(o), console.log(s);
    const l = [];
    r.each(function(E, v) {
      l.push($(v).val());
    }), console.log(l);
    const u = $(r[a + 1]);
    if (s) {
      var g = s.options;
      const E = s.datas;
      var m = s.filter;
      m = typeof multiselect_filter == "object" && typeof m == "string" && typeof multiselect_filter[m] == "function" ? multiselect_filter[m] : null, !Array.isArray(g) && typeof m == "function" && (g = m(E)), s.options = g;
    }
    if (r.length > 0 && a < r.length - 1 && s && Array.isArray(s.options)) {
      const E = [], v = s.options.length, R = s.separator && s.separator !== "" ? s.separator : ";";
      E.length = v;
      for (var f = 0; f < v; f++)
        E[f] = Array.isArray(s.options[f]) ? s.options[f] : s.options[f].split(R);
      console.log(E);
      const L = [];
      for (var h = 0; h < E.length; h++) {
        for (var y = !0, f = 0; f <= a; f++) {
          const A = E[h][f];
          y = y && (Array.isArray(A) && A.at(-1) === l[f] || A === l[f]);
        }
        y && L.push(E[h]);
      }
      console.log(L);
      const x = [];
      L.forEach((w) => {
        const A = w[a + 1];
        x.push(Array.isArray(A) ? A.at(-1) : A);
      }), console.log(x);
      const P = $(u).find("option");
      console.log(P);
      var C = P.length - 1;
      P.each(function(w, A) {
        x.includes(A.value) ? ($(A).show(), C = w < C ? w : C) : $(A).hide();
      }), console.log(u), x.includes(u.val()) || (u[0].selectedIndex = C);
    }
    a < r.length - 2 ? u.trigger("change") : c.val(l.join(";"));
  }
  initMultiSelectEvents() {
    const e = this, n = this.$find("select[role=multiselect]");
    console.log(`initMultiSelectEvents on ${n.length}`), n.off("change").on("change", e, function(i) {
      console.log("multiselect change !"), console.log(i);
      const s = $(i.currentTarget), o = s.attr("data-index");
      e.onChangeMultiselect(s.attr("fid"), o);
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
    function s(o, r, c) {
      console.log(`on ${r} change : ${c}`), console.log(c);
      const a = $(o.target).val(), l = parseFloat(a);
      I(c) && Object.entries(c).forEach((u) => {
        const [g, m] = u, f = g.split("|"), h = [], y = [], C = [], E = [];
        f.forEach((v) => {
          v.length === 0 || (v[0] === "<" ? C.push(parseFloat(v.substring(1, v.length))) : v[0] === ">" ? E.push(parseFloat(v.substring(1, v.length))) : v[0] === "!" ? y.push(v.substring(1, v.length)) : h.push(v));
        }), p("arrValToAvoid vs curval : " + a), p(y), (h.includes(a) || y.length > 0 && !y.includes(a) || l !== NaN && C.length > 0 && l < C[0] || l !== NaN && E.length > 0 && l > E[0]) && I(m) && Object.entries(m).forEach((v) => {
          const [R, L] = v;
          p(`todo:${R}`), p(L);
          const x = R.split(":"), P = i[x[0]];
          p(P);
          var w = x[0];
          x.length > 1 && (w = x[1]), typeof P == "function" && Array.isArray(L) && P.call(e, L, w);
        });
      });
    }
    I(n.user_interface_organizer) && I(n.user_interface_organizer.onchange_effects) && Object.entries(n.user_interface_organizer.onchange_effects).forEach((o) => {
      const [r, c] = o;
      this.$find(`select[name=${r}zzzvalue]`).on("change", function(a) {
        s(a, r, c);
      }).trigger("change"), this.$find(`input[name=${r}]`).on("change", function(a) {
        s(a, r, c);
      }).trigger("change");
    });
  }
  /****************************************************
   * 
   *				loading utilities
   *
   * ***************************************************/
  triggerIfFieldsLoaded() {
    const e = [];
    this.locals.fields.forEach((n) => {
      n.toBefilled && e.push(n.fid);
    }), this.locals.displayed_fields.length === e.length && $(this.element).trigger("HFORM_FIELDS_DISPLAYED");
  }
  add2displayed(e) {
    p(`add2displayed(${e.fid})`), e.fid ? this.locals.displayed_fields.includes(e.fid) ? p(`${e.fid} already added`) : this.locals.displayed_fields.push(e.fid) : (console.error("field with no fid"), this.locals.displayed_fields.push(e)), this.triggerIfFieldsLoaded();
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
    console.log("new HForm()", e, n), _.instances.push(this);
    const i = $(e);
    this.schema = n, this.element = i, _.template = n.template && _.templates[n.template] ? _.templates[n.template] : _.templates.bootstrap5v1, Array.isArray(i) && i.length > 0 ? i[0].hform = this : i && (i.hform = this), this.locals = {
      fields: [],
      fieldIds: [],
      displayed_fields: [],
      malformed_fields: []
    }, $.extend(this.locals, n), Array.isArray(this.locals.fields) && this.locals.fields.forEach((s) => {
      s.fid && !this.locals.fieldIds.includes(s.fid) && this.locals.fieldIds.push(s.fid);
    }), this.onchange = _.debugOnchange, typeof n.onchange == "function" && (this.onchange = n.onchange);
  }
  display(e) {
    p("HForm:display");
    const n = this, i = function() {
      n.setUiCustomizerEvents();
      const c = () => {
        n.onchange(n.getValues());
      };
      n.$find("form").on("change", c), typeof catllback == "function" && e(n), typeof n.locals.onload == "function" && n.locals.onload(n);
    };
    $(this.element).on("HFORM_FIELDS_DISPLAYED", i);
    const s = this.locals;
    p("todo avec load specEJS"), p(s.fields);
    const o = function() {
      var c = s.fields.slice();
      c.forEach((a) => {
        p(`display ${a} ...`);
        const l = _.getKind(a.value), u = _.getCallBackByKind(l);
        var g = a;
        typeof u == "function" && I(g) && (p("calling a callback for getLocals ..."), g.kind = l, g.callbackGetLocals = u);
        var m = _.getEJSForContent(a.value);
        a.unit && (a.max || a.min || a.step) && (m = _.getEJSbyKind("number")), p(`display ${a.fid} -> EJS:${m}`), a.fid ? _.htmlEJS(
          n.$find(`.need-content#${a.fid}`),
          m,
          // HForm.getEJSForContent(field.value),
          g,
          null,
          Xt(n.add2displayed, n, a)
        ) : s.malformed_fields.push(a);
      });
    }, r = s;
    $(this.element).html(_.template.render(r)), this.triggerIfFieldsLoaded(), o();
  }
  setValues(e = {}) {
  }
  getValues() {
    p("HForm:getValues");
    const e = this.locals;
    p(e.fields);
    var n = {};
    e.fields.forEach((s) => n[s.fid] = s.value);
    var i = "";
    return this.$find(`${i} input,textarea,select`).each(function(s, o) {
      var r = null;
      (["INPUT", "TEXTAREA"].includes(o.tagName) || o.tagName === "SELECT") && (r = $(o).val());
      const c = $(o).attr("name");
      if (p(`${o.tagName} : ${c}`), e.fieldIds.includes(c)) {
        if (p("% field > init !"), p(o), o.tagName === "INPUT" && $(o).attr("type") === "file")
          r = n[c], p(" field type FILE !!!!!!!");
        else {
          r = decodeURIComponent(r);
          try {
            r = JSON.parse(r);
          } catch {
          }
        }
        n[c] = r;
      } else if (typeof c == "string" && c.match(/zzz/) && $(o).attr("type") !== "hidden") {
        p("not % field > maj ...");
        const h = c.split("zzz");
        p(h);
        for (var a = n, l = 0; l < h.length - 1; l++) {
          p(a);
          var u = h[l];
          p(u), a[u] !== void 0 ? a = a[u] : a[u] = {};
        }
        p("old value"), p(a[h[h.length - 1]]), a[h[h.length - 1]] = r, p("new value"), p(a[h[h.length - 1]]), p("end maj");
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && !c.match(/[]/) && ($(o).attr("type") === "checkbox" && $(o).attr("checked") || ["text", "hidden"].includes($(o).attr("type")) && r !== "" || ["SELECT", "TEXTAREA"].includes(o.tagName))) {
        var g = c.split("["), m = g.at(-1).split("]");
        m.length === 2 && m[1] !== "" && g.push(m[1]);
        var f = [];
        p(g);
        for (var a = [n], l = 0; l < g.length; l++) {
          p(a), p(g[l]);
          var u = g[l];
          u.at(-1) === "]" && (u = u.slice(0, -1)), f.push(u), typeof a[l][u] == "object" || (a[l][u] = {}), a.push(a[l][u]);
        }
        p("old value"), p(a.at(-2)), a.at(-2)[f.at(-1)] = r, p("new value"), p(a.at(-2)), p("end maj");
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && c.match(/[]/) && ($(o).attr("type") === "checkbox" && $(o).attr("checked") || ["text", "hidden"].includes($(o).attr("type")) && r !== "")) {
        const y = c.split("[]")[0].split("[");
        var f = [];
        p(y);
        for (var a = [n], l = 0; l < y.length - 1; l++) {
          p(a), p(y[l]);
          var u = y[l];
          u.at(-1) === "]" && (u = u.slice(0, -1)), f.push(u), typeof a[l][u] == "object" || (a[l][u] = {}), a.push(a[l][u]);
        }
        p("old value"), p(a.at(-2));
        const v = a.at(-2)[f.at(-1)];
        Array.isArray(v) ? v.push(val) : a.at(-2)[f.at(-1)] = [r], p("new value"), p(a.at(-2)), p("end maj");
      }
    }), Object.entries(n).forEach((s) => {
      const [o, r] = s;
      e.fieldIds.includes(o) ? I(r) && r.value && (n[o] = r.value) : delete n[o];
    }), p(n), e.formJson = n, n;
  }
  static render(e, n, i = {}) {
    $.extend(n, i), new _(e, n).display();
  }
};
window.includeEJS = function(t, e, n = "div", i = "includeEJS") {
  let s = qt("includeEJS"), o = e, r = D.getEJSbyKind(t);
  var c = 0;
  const a = async function(u, g, m) {
    c++, log(`${i}(${t})->todo(${s})`), log(u), log(o);
    const f = $(`#${s}`), h = ejs.render(u, o);
    return f.length > 0 && typeof h == "string" ? f.replaceWith(h) : f.length === 0 && typeof h == "string" && c < 10 ? (console.log(`unable to find includeEJS anchor element from id: ${s} => retry in 200ms`), window.setTimeout(a, 200, u, g, m)) : f.length === 0 && typeof h == "string" ? console.error(`unable to replace includeEJS anchor element from id: ${s}, cause to many try > 10 !!!`) : console.error(`unable to replace includeEJS anchor element from id: ${s}, cause rendering is malformed`), 0;
  }, l = JSON.stringify(e);
  return log(`EJS url: ${r}`), typeof r == "string" && r !== "" && r !== "undefined" && fetchEJS(r, e, a), log(`includeEJS, create tmp element with id: ${s}`), `<${n} id="${s}" role="${i}" kind="${t}" param="${l}"></${n}>`;
};
window.waitIncludeEJS = function(t, e, n = "div") {
  return window.includeEJS(t, e, n, "waitIncludeEJS");
};
D.samples = Be;
D.templates = We;
window.HForm = D;
window.addEventListener("load", () => {
  $('div[role="DemoHopesForm"]').each((t, e) => {
    D.samples.length > 0 ? D.render(e, D.samples[0]) : console.error("HForm dont't have any sample to play !");
  });
});
export {
  D as default
};
