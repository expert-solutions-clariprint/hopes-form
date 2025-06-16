/*!
 * Hopes Form (Free Edition)
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 */
const N = document, Z = window, zt = N.documentElement, K = N.createElement.bind(N), Lt = K("div"), rt = K("table"), te = K("tbody"), xt = K("tr"), { isArray: nt, prototype: Rt } = Array, { concat: ee, filter: ft, indexOf: Ht, map: Pt, push: ne, slice: Ot, some: dt, splice: ie } = Rt, se = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, oe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, re = /<.+>/, le = /^\w+$/;
function ht(t, e) {
  const n = ae(e);
  return !t || !n && !U(e) && !A(e) ? [] : !n && oe.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && le.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class it {
  constructor(e, n) {
    if (!e)
      return;
    if (ct(e))
      return e;
    let i = e;
    if (T(e)) {
      const s = n || N;
      if (i = se.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : re.test(e) ? jt(e) : ct(s) ? s.find(e) : T(s) ? y(s).find(e) : ht(e, s), !i)
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
const d = it.prototype, y = d.init;
y.fn = y.prototype = d;
d.length = 0;
d.splice = ie;
typeof Symbol == "function" && (d[Symbol.iterator] = Rt[Symbol.iterator]);
function ct(t) {
  return t instanceof it;
}
function G(t) {
  return !!t && t === t.window;
}
function U(t) {
  return !!t && t.nodeType === 9;
}
function ae(t) {
  return !!t && t.nodeType === 11;
}
function A(t) {
  return !!t && t.nodeType === 1;
}
function ce(t) {
  return !!t && t.nodeType === 3;
}
function ue(t) {
  return typeof t == "boolean";
}
function W(t) {
  return typeof t == "function";
}
function T(t) {
  return typeof t == "string";
}
function L(t) {
  return t === void 0;
}
function Q(t) {
  return t === null;
}
function kt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function pt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
y.isWindow = G;
y.isFunction = W;
y.isArray = nt;
y.isNumeric = kt;
y.isPlainObject = pt;
function S(t, e, n) {
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
y.each = S;
d.each = function(t) {
  return S(this, t);
};
d.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function tt(...t) {
  const e = ue(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return tt(e, y, n);
  for (let s = 0; s < i; s++) {
    const o = t[s];
    for (const r in o)
      e && (nt(o[r]) || pt(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), tt(e, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
y.extend = tt;
d.extend = function(t) {
  return tt(d, t);
};
const fe = /\S+/g;
function st(t) {
  return T(t) ? t.match(fe) || [] : [];
}
d.toggleClass = function(t, e) {
  const n = st(t), i = !L(e);
  return this.each((s, o) => {
    A(o) && S(n, (r, c) => {
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
    A(i) && S(e, (s, o) => {
      i.removeAttribute(o);
    });
  });
};
function de(t, e) {
  if (t) {
    if (T(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !A(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Q(n) ? void 0 : n;
      }
      return L(e) ? this : Q(e) ? this.removeAttr(t) : this.each((n, i) => {
        A(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
d.attr = de;
d.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
d.hasClass = function(t) {
  return !!t && dt.call(this, (e) => A(e) && e.classList.contains(t));
};
d.get = function(t) {
  return L(t) ? Ot.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function he(t) {
  return L(t) ? this.get().map((e) => A(e) || ce(e) ? e.textContent : "").join("") : this.each((e, n) => {
    A(n) && (n.textContent = t);
  });
}
d.text = he;
function j(t, e, n) {
  if (!A(t))
    return;
  const i = Z.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function O(t, e) {
  return parseInt(j(t, e), 10) || 0;
}
function Ct(t, e) {
  return O(t, `border${e ? "Left" : "Top"}Width`) + O(t, `padding${e ? "Left" : "Top"}`) + O(t, `padding${e ? "Right" : "Bottom"}`) + O(t, `border${e ? "Right" : "Bottom"}Width`);
}
const lt = {};
function pe(t) {
  if (lt[t])
    return lt[t];
  const e = K(t);
  N.body.insertBefore(e, null);
  const n = j(e, "display");
  return N.body.removeChild(e), lt[t] = n !== "none" ? n : "block";
}
function wt(t) {
  return j(t, "display") === "none";
}
function Nt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function ot(t) {
  return T(t) ? (e, n) => Nt(n, t) : W(t) ? t : ct(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
d.filter = function(t) {
  const e = ot(t);
  return y(ft.call(this, (n, i) => e.call(n, i, n)));
};
function J(t, e) {
  return e ? t.filter(e) : t;
}
d.detach = function(t) {
  return J(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ge = /^\s*<(\w+)[^>]*>/, me = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, At = {
  "*": Lt,
  tr: te,
  td: xt,
  th: xt,
  thead: rt,
  tbody: rt,
  tfoot: rt
};
function jt(t) {
  if (!T(t))
    return [];
  if (me.test(t))
    return [K(RegExp.$1)];
  const e = ge.test(t) && RegExp.$1, n = At[e] || At["*"];
  return n.innerHTML = t, y(n.childNodes).detach().get();
}
y.parseHTML = jt;
d.has = function(t) {
  const e = T(t) ? (n, i) => ht(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
d.not = function(t) {
  const e = ot(t);
  return this.filter((n, i) => (!T(t) || A(i)) && !e.call(i, n, i));
};
function M(t, e, n, i) {
  const s = [], o = W(e), r = i && ot(i);
  for (let c = 0, a = t.length; c < a; c++)
    if (o) {
      const l = e(t[c]);
      l.length && ne.apply(s, l);
    } else {
      let l = t[c][e];
      for (; l != null && !(i && r(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function Mt(t) {
  return t.multiple && t.options ? M(ft.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function be(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || qt.test(n.type)) {
      const s = nt(t) ? Pt.call(t, String) : Q(t) ? [] : [String(t)];
      i ? S(n.options, (o, r) => {
        r.selected = s.indexOf(r.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = L(t) || Q(t) ? "" : t;
  }) : this[0] && Mt(this[0]);
}
d.val = be;
d.is = function(t) {
  const e = ot(t);
  return dt.call(this, (n, i) => e.call(n, i, n));
};
y.guid = 1;
function k(t) {
  return t.length > 1 ? ft.call(t, (e, n, i) => Ht.call(i, e) === n) : t;
}
y.unique = k;
d.add = function(t, e) {
  return y(k(this.get().concat(y(t, e).get())));
};
d.children = function(t) {
  return J(y(k(M(this, (e) => e.children))), t);
};
d.parent = function(t) {
  return J(y(k(M(this, "parentNode"))), t);
};
d.index = function(t) {
  const e = t ? y(t)[0] : this[0], n = t ? this : y(e).parent().children();
  return Ht.call(n, e);
};
d.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
d.siblings = function(t) {
  return J(y(k(M(this, (e) => y(e).parent().children().not(e)))), t);
};
d.find = function(t) {
  return y(k(M(this, (e) => ht(t, e))));
};
const ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ve = /^$|^module$|\/(java|ecma)script/i, $e = ["type", "src", "nonce", "noModule"];
function Ee(t, e) {
  const n = y(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (ve.test(s.type) && zt.contains(s)) {
      const o = K("script");
      o.text = s.textContent.replace(ye, ""), S($e, (r, c) => {
        s[c] && (o[c] = s[c]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function _e(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && Ee(e, t.ownerDocument);
}
function V(t, e, n, i, s, o, r, c) {
  return S(t, (a, l) => {
    S(y(l), (u, g) => {
      S(y(e), (m, f) => {
        const h = n ? g : f, b = n ? f : g, w = n ? u : m;
        _e(h, w ? b.cloneNode(!0) : b, i, s, !w);
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
function xe(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (L(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    A(i) && (e ? y(i).empty().append(t) : i.innerHTML = t);
  });
}
d.html = xe;
d.appendTo = function(t) {
  return V(arguments, this, !0, !1, !0);
};
d.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = y(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
d.before = function() {
  return V(arguments, this, !1, !0);
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
  return y(k(M(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
d.next = function(t, e, n) {
  return J(y(k(M(this, "nextElementSibling", e, n))), t);
};
d.nextAll = function(t) {
  return this.next(t, !0);
};
d.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
d.parents = function(t, e) {
  return J(y(k(M(this, "parentElement", !0, e))), t);
};
d.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
d.prev = function(t, e, n) {
  return J(y(k(M(this, "previousElementSibling", e, n))), t);
};
d.prevAll = function(t) {
  return this.prev(t, !0);
};
d.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
d.map = function(t) {
  return y(ee.apply([], Pt.call(this, (e, n) => t.call(e, n, e))));
};
d.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
d.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && j(n, "position") === "static"; )
      n = n.offsetParent;
    return n || zt;
  });
};
d.slice = function(t, e) {
  return y(Ot.call(this, t, e));
};
const Ce = /-([a-z])/g;
function gt(t) {
  return t.replace(Ce, (e, n) => n.toUpperCase());
}
d.ready = function(t) {
  const e = () => setTimeout(t, 0, y);
  return N.readyState !== "loading" ? e() : N.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + Z.pageYOffset,
    left: e.left + Z.pageXOffset
  };
};
d.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = j(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && j(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && A(s)) {
      const o = y(s).offset();
      n.top -= o.top + O(s, "borderTopWidth"), n.left -= o.left + O(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - O(t, "marginTop"),
    left: n.left - O(t, "marginLeft")
  };
};
const Jt = {
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
      return t = Jt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
d.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Jt[t] || t];
  });
};
const we = /^--/;
function mt(t) {
  return we.test(t);
}
const at = {}, { style: Ae } = Lt, Se = ["webkit", "moz", "ms"];
function Ie(t, e = mt(t)) {
  if (e)
    return t;
  if (!at[t]) {
    const n = gt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${Se.join(`${i} `)}${i}`.split(" ");
    S(s, (o, r) => {
      if (r in Ae)
        return at[t] = r, !1;
    });
  }
  return at[t];
}
const Te = {
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
function Vt(t, e, n = mt(t)) {
  return !n && !Te[t] && kt(e) ? `${e}px` : e;
}
function Fe(t, e) {
  if (T(t)) {
    const n = mt(t);
    return t = Ie(t, n), arguments.length < 2 ? this[0] && j(this[0], t, n) : t ? (e = Vt(t, e, n), this.each((i, s) => {
      A(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
d.css = Fe;
function Bt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const ze = /^\s+|\s+$/;
function St(t, e) {
  const n = t.dataset[e] || t.dataset[gt(e)];
  return ze.test(n) ? n : Bt(JSON.parse, n);
}
function Le(t, e, n) {
  n = Bt(JSON.stringify, n), t.dataset[gt(e)] = n;
}
function Re(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = St(this[0], i);
    return n;
  }
  if (T(t))
    return arguments.length < 2 ? this[0] && St(this[0], t) : L(e) ? this : this.each((n, i) => {
      Le(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
d.data = Re;
function Dt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
S([!0, !1], (t, e) => {
  S(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    d[s] = function(o) {
      if (this[0])
        return G(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? Dt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (o && e ? O(this[0], `margin${n ? "Top" : "Left"}`) + O(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
S(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  d[n] = function(i) {
    if (!this[0])
      return L(i) ? void 0 : this;
    if (!arguments.length)
      return G(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? Dt(this[0], e) : this[0].getBoundingClientRect()[n] - Ct(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((o, r) => {
      if (!A(r))
        return;
      const c = j(r, "boxSizing");
      r.style[n] = Vt(n, s + (c === "border-box" ? Ct(r, !t) : 0));
    });
  };
});
const It = "___cd";
d.toggle = function(t) {
  return this.each((e, n) => {
    if (!A(n))
      return;
    const i = wt(n);
    (L(t) ? i : t) ? (n.style.display = n[It] || "", wt(n) && (n.style.display = pe(n.tagName))) : i || (n[It] = j(n, "display"), n.style.display = "none");
  });
};
d.hide = function() {
  return this.toggle(!1);
};
d.show = function() {
  return this.toggle(!0);
};
const Tt = "___ce", bt = ".", yt = { focus: "focusin", blur: "focusout" }, Ut = { mouseenter: "mouseover", mouseleave: "mouseout" }, He = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function vt(t) {
  return Ut[t] || yt[t] || t;
}
function $t(t) {
  const e = t.split(bt);
  return [e[0], e.slice(1).sort()];
}
d.trigger = function(t, e) {
  if (T(t)) {
    const [i, s] = $t(t), o = vt(i);
    if (!o)
      return this;
    const r = He.test(o) ? "MouseEvents" : "HTMLEvents";
    t = N.createEvent(r), t.initEvent(o, !0, !0), t.namespace = s.join(bt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in yt;
  return this.each((i, s) => {
    n && W(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Kt(t) {
  return t[Tt] = t[Tt] || {};
}
function Pe(t, e, n, i, s) {
  const o = Kt(t);
  o[e] = o[e] || [], o[e].push([n, i, s]), t.addEventListener(e, s);
}
function Wt(t, e) {
  return !e || !dt.call(e, (n) => t.indexOf(n) < 0);
}
function et(t, e, n, i, s) {
  const o = Kt(t);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, c, a]) => {
      if (s && a.guid !== s.guid || !Wt(r, n) || i && i !== c)
        return !0;
      t.removeEventListener(e, a);
    }));
  else for (e in o)
    et(t, e, n, i, s);
}
d.off = function(t, e, n) {
  if (L(t))
    this.each((i, s) => {
      !A(s) && !U(s) && !G(s) || et(s);
    });
  else if (T(t))
    W(e) && (n = e, e = ""), S(st(t), (i, s) => {
      const [o, r] = $t(s), c = vt(o);
      this.each((a, l) => {
        !A(l) && !U(l) && !G(l) || et(l, c, r, e, n);
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
  return y(t).replaceWith(this), this;
};
function Oe(t, e, n, i, s) {
  if (!T(t)) {
    for (const o in t)
      this.on(o, e, n, t[o], s);
    return this;
  }
  return T(e) || (L(e) || Q(e) ? e = "" : L(n) ? (n = e, e = "") : (i = n, n = e, e = "")), W(i) || (i = n, n = void 0), i ? (S(st(t), (o, r) => {
    const [c, a] = $t(r), l = vt(c), u = c in Ut, g = c in yt;
    l && this.each((m, f) => {
      if (!A(f) && !U(f) && !G(f))
        return;
      const h = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !Wt(a, b.namespace.split(bt)) || !e && (g && (b.target !== f || b.___ot === l) || u && b.relatedTarget && f.contains(b.relatedTarget)))
          return;
        let w = f;
        if (e) {
          let v = b.target;
          for (; !Nt(v, e); )
            if (v === f || (v = v.parentNode, !v))
              return;
          w = v;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const _ = i.call(w, b, b.___td);
        s && et(f, l, a, e, h), _ === !1 && (b.preventDefault(), b.stopPropagation());
      };
      h.guid = i.guid = i.guid || y.guid++, Pe(f, l, a, e, h);
    });
  }), this) : this;
}
d.on = Oe;
function ke(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
d.one = ke;
const Ne = /\r?\n/g;
function je(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Ne, `\r
`))}`;
}
const Me = /file|reset|submit|button|image/i, qt = /radio|checkbox/i;
d.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    S(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Me.test(s.type) || qt.test(s.type) && !s.checked)
        return;
      const o = Mt(s);
      if (!L(o)) {
        const r = nt(o) ? o : [o];
        S(r, (c, a) => {
          t += je(s.name, a);
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
const Gt = 0;
function p(t, e) {
  Gt >= e && console.log(t);
}
function Je(t) {
}
function I(t) {
  return t && typeof t == "object" && t.constructor === Object;
}
function Yt(t) {
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
function Xt(t, e, n = null, i = ".") {
  var s = n ? e.split(n).at(-1) : e;
  const o = s.split(i);
  var r = t;
  return o.forEach((c) => {
    if (r[c]) r = r[c];
    else return null;
  }), r === t ? null : r;
}
function Qt(t, e, ...n) {
  if (typeof t != "function")
    throw new TypeError("HU.proxy: le premier argument doit être une fonction");
  return n.length ? function(...i) {
    return t.apply(e, [...n, ...i]);
  } : t.bind(e);
}
function Ve(t, ...e) {
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
const Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtSelect: B,
  alert: Je,
  extend: Ve,
  fetchEJS: ut,
  isObject: I,
  jpath: Xt,
  log: p,
  proxy: Qt,
  uniqid: Yt,
  verbose: Gt
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
const X = {
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
  ],
  ADESA_COMBINATORY: [
    "couche permanent;vernis brillant;892",
    "couche permanent;pelliculage brillant;894",
    "pp blanc;vernis brillant;896",
    "pp blanc;pelliculage brillant;898",
    "pp blanc;pelliculage mat;900",
    "pp transparent;vernis brillant;902",
    "pp transparent;pelliculage brillant;904",
    "pp transparent;pelliculage mat;906",
    "pp argent;vernis brillant;908",
    "pp argent;pelliculage brillant;910",
    "pp argent;pelliculage mat;912",
    "couche enlevable;vernis brillant;914",
    "couche enlevable;pelliculage brillant;916",
    "couche enlevable;pelliculage mat;918",
    "tintoretto;sans finition;920",
    "papier perle gaufre;vernis brillant;922",
    "couche permanent;pelliculage mat;928",
    "rush couche permanent;vernis brillant;938",
    "stickers pp blanc;pelliculage mat;946",
    "planches pp blanc;pelliculage brillant;948",
    "planches pp blanc;pelliculage mat;950",
    "pp transparent vitrophanie;vernis brillant;954",
    "planches couche permanent;vernis brillant;958",
    "kraft;sans finition;960",
    "rush couche permanent;pelliculage mat;973",
    "rush couche permanent;pelliculage brillant;975",
    "couche permanent;vernis mat;981",
    "pp blanc;vernis mat;983",
    "rush pp blanc;vernis brillant;985",
    "rush pp blanc;pelliculage brillant;987",
    "rush pp blanc;pelliculage mat;989",
    "pp blanc;pelliculage soft touch;991",
    "fluo jaune;sans finition;1011",
    "couche recycle;sans finition;2025",
    "pla clear;sans finition;2027",
    "pp transparent;vernis mat;2028",
    "couche enlevable;vernis mat;2033",
    "pp blanc opaque dorsal argent;vernis brillant;2035",
    "pp blanc renforce;vernis brillant;2039",
    "couche renforce;pelliculage brillant;2041",
    "couche renforce;pelliculage mat;2043",
    "pp blanc renforce;pelliculage brillant;2045",
    "pp blanc renforce;pelliculage mat;2047",
    "pp blanc renforce;vernis mat;2049"
  ]
}, Ft = {
  MATERIAL_SELECTOR: {
    kind: "multiselect",
    value: "PVC Expanse;WHITE;10",
    options: X.MATERIAL_CSV,
    labels: ["Kind", "Color", "Thickness"],
    units: ["", "", "mm"],
    separator: ";",
    cols: 3,
    hiddenIndexes: [],
    // "datas" : "CALLFUNC(fetch,#POS1_ALIAS§API_GET_POS1_SELECTOR_DATAS)",
    context: {},
    filter: "pos1_selector_filter"
  },
  ADESA_SELECTOR: {
    kind: "multiselect",
    value: "couche permanent;vernis brillant;892",
    options: X.ADESA_COMBINATORY,
    labels: ["Material", "Finish", ""],
    units: ["", "", ""],
    separator: ";",
    cols: 2,
    hiddenIndexes: [2],
    // "datas" : "CALLFUNC(fetch,#POS1_ALIAS§API_GET_POS1_SELECTOR_DATAS)",
    context: {},
    filter: null
  }
}, De = [
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
        value: Ft.MATERIAL_SELECTOR
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
          options: X.ITEM_NUMBER
        }
      },
      {
        fid: "JDF",
        label: "Kind of folder",
        value: {
          kind: "select",
          value: "F4_1",
          options: X.JDF_LIST,
          options_img: X.JDF_LIST_IMG
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
  },
  {
    title: "adesa form",
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
        fid: "height",
        label: "Height",
        unit: "mm",
        value: "50",
        min: "20",
        max: "1000",
        step: "1"
      },
      {
        fid: "width",
        label: "Width",
        unit: "mm",
        value: "50",
        min: "20",
        max: "1000",
        step: "1"
      },
      {
        fid: "model",
        label: "Number of model(s)",
        unit: "ex",
        value: "1",
        min: "1",
        max: "10",
        step: "1"
      },
      {
        fid: "SCENARIO",
        label: "",
        value: Ft.ADESA_SELECTOR
      }
    ],
    onload: (t) => {
      console.log("Form loaded !");
    },
    onchange: (t) => {
      console.log(t);
      const e = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer TOKEN"
        },
        ...body ? { body } : {}
      }, n = "https://api.myadesa.fr/quotes", i = {
        scenario: {
          uid: parseInt(t.SCENARIO.split(";").at(-1))
        },
        application: 1,
        coreSize: 40,
        height: t.height,
        width: t.width,
        orientation: 90,
        quantityPerRoll: 200,
        series: [
          {
            quantity: t.q
          }
        ],
        country: {
          countryCode: "fr"
        },
        shape: {
          id: 1
        }
      };
      e.body = JSON.stringify(i), console.log(e), fetch(n, e).then(async (s) => {
        if (!s.ok) throw new Error(`HTTP ${s.status}`);
        const o = await s.json();
        return console.log(o), o;
      }).catch((s) => {
        throw console.log(s), s;
      });
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
const Ue = (t) => {
  const e = t, n = t.fid, i = t.value.value, s = !!t.value.unit && t.value.unit != "", o = t.value.options, r = t.value.options_img, c = !!Array.isArray(r);
  if (c && r.length < o.length)
    for (var u = r.length; u < o.length; u++)
      _img.push("select/default.png");
  const a = e.img_path ? `${e.img_path}/select/` : "/img/select/";
  var l = "product";
  e.translationContext && (l = e.translationContext);
  var u = 0, g = "";
  t.value.options.forEach((f) => {
    var h = "", b = "";
    f.value && f.label ? (h = f.value, b = HForm.transl(f.label, "products")) : typeof f == "number" ? (h = f, b = f) : typeof f == "string" && (h = f, b = HForm.transl(f, l)), g += `
    				<option ${s ? 'style="text-align: right;"' : ""} 
              value="${h}" ${h === i ? "selected" : ""} 
    				${c ? `data-content="<div class='d-flex justify-content-between'><span>${b}</span><img src='${a}${r[u++]}' width='128px' height='128px'/></div>"` : ""}>${b}</option>`;
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
const Ke = (t) => {
  const e = t, n = t.value, i = t.fid, s = t.label;
  var o = e.translationContext ? e.translationContext : "product";
  console.log("field-multiselect"), console.log(e);
  const r = n.value, c = n.separator && n.separator !== "" ? n.separator : ";", a = Array.isArray(r) ? r : r.split(c);
  console.log(a);
  const l = a.length, u = n.units, g = [];
  var m = n.options;
  const f = n.datas, h = typeof multiselect_filter == "object" && typeof n.filter == "string" && typeof multiselect_filter[n.filter] == "function" ? multiselect_filter[n.filter] : null, b = n.labels, w = typeof n.cols == "number" && [1, 2, 3, 4, 6].includes(n.cols) ? n.cols : 1;
  !Array.isArray(m) && typeof h == "function" && (m = h(f));
  var _ = 12;
  w === 2 ? _ = 6 : w === 3 ? _ = 4 : w === 4 ? _ = 3 : w === 6 && (_ = 2);
  const v = [], H = [];
  v.length = l, H.length = l, g.length = l;
  for (var z = 0, x = 0; x < l; x++)
    v[x] = [], H[x] = [], g[x] = Array.isArray(u) && !!u[x] && u[x] !== "";
  for (var x = 0; z < m.length; z++) {
    const E = Array.isArray(m[z]) ? m[z] : m[z].split(c);
    if (E.length === l)
      for (x = 0; x < l; x++) {
        const P = Array.isArray(E[x]) ? E[x][E.length - 1] : E[x];
        H[x].includes(P) || (H[x].push(P), v[x].push(E[x]));
      }
  }
  console.log(H);
  for (var x = 0; x < l; x++)
    v[x].sort();
  return console.log("coucou multiselect 2"), console.log(v), `
  <div class="row">` + (() => {
    for (var R = "", E = 0; E < l; E++) {
      const P = Array.isArray(b) ? b[E] : null, Zt = v[E], Et = Array.isArray(n.hiddenIndexes) && n.hiddenIndexes.includes(E) ? `<input type="hidden" role="multiselect" data-index="${E}" fid="${i}" name="${i}_${E}zzzvalue" value="${a[E]}"/>` : !1;
      console.log("coucou multiselect 3"), R += Et || ` 
    <div class="col-${_}">
      ${P ? `
      <div class="card mt-2 mb-2 border">  
        <div class="card-header h6">
            <label for="${i}_${E}">${HForm.transl(s, o)}${HForm.transl(P, o)}</label>
            <div role="help" field="${i}_${E}"></div>
        </div>` : `
      <div class="card border-0">  `}
        <div class="card-body ${P ? "" : "p-0"}">
            <div class="input-group">
               <select class="form-control" role="multiselect" data-index="${E}" fid="${i}" name="${i}_${E}zzzvalue" placeholder="">
    ` + (() => {
        var _t = "";
        return Zt.forEach((F) => {
          var q = "", Y = "";
          Array.isArray(F) && F.length > 1 ? (q = F[1], Y = HForm.transl(F[0], "products")) : F.value && F.label ? (q = F.value, Y = HForm.transl(F.label, "products")) : typeof F == "number" ? (q = F, Y = F) : typeof F == "string" && (q = F, Y = HForm.transl(F, o)), _t += `
                    <option ${g[E] ? 'style="text-align: right;"' : ""} 
                        value="${q}" ${q === a[E] ? "selected" : ""}>${Y}</option>`;
        }), _t;
      })() + `
               </select>
            ${g[E] ? `
              <span class="input-group-text">${u[E]}</span>` : ""}
          </div>
      </div>
    </div>
  </div>`;
    }
    return R;
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
const We = (t) => {
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
}, qe = {
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
    select: Ue,
    multiselect: Ke,
    multicontrol: We
  },
  bootstrap5v1: {
    tplField: (t) => {
      const e = t.fid, n = t.value, i = t.translationContext ? t.translationContext : "product", s = !!t.label && t.label !== "", o = !!t.unit && t.unit != "", r = !!n.require && !!n.invalid_msg, c = s ? HForm.transl(t.label, i) : "", a = I(n) && typeof n.kind == "string" ? n.kind : t.min && t.max ? "number" : "text", l = {
        col: () => {
          var b = "col-12";
          return t.bt_nb_cols ? b = `col col-sm-12 col-lg-${t.bt_nb_cols}` : I(n) && n.kind === "multiselect" ? b = "col col-12" : !I(n) || I(n) && ["imgFile"].includes(n.kind) ? b = "col col-sm-12 col-md-6 col-lg-4" : I(n) && n.kind === "select" && (b = "col col-sm-12 col-lg-6"), b;
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
                    <div class="${l.cardBody()}${a === "multiselect" ? " p-0 m-0" : ""}">
                      <div class="${a === "multiselect" ? "container p-0" : "input-group"} ${g}" id="${e}">
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
            <form class="needs-validation" novalidate>
              <div class="container"> 
                <div class="row">
                  ${(() => {
      var n = "";
      return HForm.sortFields(t.user_interface_organizer, t.fields).forEach((s) => {
        typeof s.fid == "string" ? n += HForm.templates.bootstrap5v1.tplField(s) : I(s) && Object.entries(s).forEach((o) => {
          var [r, c] = o;
          Array.isArray(c) && c.length > 0 && (n += HForm.templates.bootstrap5v1.tplGroup({ gid: r, fields: c }));
        });
      }), n;
    })()}
                </div>
              </div>
            </form>
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
window.HU = Be;
let D = class C {
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
    return p("getKind()"), p(e), p(typeof e), typeof e == "object" && typeof e.kind == "string" && typeof C.ejsByKind[e.kind] == "string" || typeof e == "object" && typeof e.kind == "string" && typeof C.ejsByKind[e.kind] == "object" && typeof C.ejsByKind[e.kind].url == "string" ? e.kind : typeof e;
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
    typeof C.rootejs.base == "string" && (n = C.rootejs.base);
    let i = C.ejsByKind[e];
    var s = "base";
    return I(i) && (i.module !== void 0 && (s = i.module.name), i.url !== void 0 && (i = i.url)), n = C.getRootEjs(s), p(`getEJSbyKind(${e}) => modname:${s},url:${i},root:${n}`), typeof i == "string" ? `${n}${i}.ejs` : `${n}${e}.ejs`;
  }
  static getCallBackByKind(e) {
    let n = C.ejsByKind[e], i, s = "";
    return typeof n == "object" && n.module !== void 0 ? typeof n.module.getLocals == "function" ? (s = "got it !", i = n.module.getLocals) : s = `unknown getLocals for ${n.module.name}` : s = "no module for this kind", p(`getCallBackByKind(${e}) : ${s}`), i;
  }
  static getEJSForContent(e) {
    return C.getEJSbyKind(C.getKind(e));
  }
  static onloadHtmlEJS(e, n, i, s, o, r) {
    p(`for ${$(e)} : call render on ${n}`), p(i);
    const c = C.getKind(i.value);
    if (typeof o == "function" && o(), typeof s == "function") s();
    else if (c == "array") {
      var a = 0;
      value.forEach((l) => {
        let u = `#${i.fid}zzz${a}`;
        p(`call htmlEJS on id : ${u}`), C.htmlEJS($(u), C.getEJSForContent(l), { fid: `${u}`, label: "#{gid}", value: l }), a++;
      });
    } else if (c == "object")
      for (const [l, u] of Object.entries(i.value)) {
        let g = `#${i.fid}zzz${l}`;
        p(`call htmlEJS on id : ${g}`), C.htmlEJS($(g), C.getEJSForContent(u), { fid: `${i.fid}zzz${l}`, label: l, value: u });
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
      return p(`waitForAllIncludes(${l.length},${r})`), l.length === 0 ? (p("all includes loaded -> call callbacks"), C.onloadHtmlEJS(e, n, i, s, o)) : r < 6 ? window.setTimeout(c, 200) : console.error(`unable to load waitIncludeEJS : ${l.length}`);
    }, a = async function(l, u, g) {
      p(l);
      var m = i;
      typeof i.kind == "string" && typeof i.callbackGetLocals == "function" && (m = i.callbackGetLocals(i.kind, i)), m.img_path = C.getRootImg();
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
    return n.length > 0 ? n : typeof C.mainbar == "string" ? $(C.mainbar).find(e) : $([]);
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
        const w = h.slice();
        w.shift(), console.log("valArr"), console.log(w);
        const _ = [];
        var b = 0;
        const v = _.length = w.length;
        for (; b < v; b++) _[b] = parseInt(w[b]);
        console.log("valArrInt"), console.log(_), h[0] === "<" && h.length > 1 && g < parseInt(h[1]) || h[0] === "<=" && h.length > 1 && g <= parseInt(h[1]) || h[0] === ">" && h.length > 1 && g > parseInt(h[1]) || h[0] === ">=" && h.length > 1 && g >= parseInt(h[1]) || h[0] === "%" && h.length > 2 && g >= parseInt(h[1]) && g <= parseInt(h[2]) || h[0] === "=" && w.includes(u) || h[0] === "=" && g && _.includes(g) || h[0] === "!=" && g && !_.includes(g) || h[0] === "!=" && !w.includes(u) ? l.show() : l.hide();
      } else l.hide();
    });
  }
  onChangeMultiselect(e, n) {
    console.log(`onChangeMultiselect(${e},${n})`);
    const i = this.locals;
    var s = null, o = null;
    i.fields.forEach((_) => {
      if (console.log(_), _.fid === e) s = _.value;
      else {
        const v = Xt(_, e, _.fid + "zzz", "zzz");
        v && (o = s, s = v);
      }
    });
    const r = this.$find(`select[role="multiselect"][fid="${e}"], input[type="hidden"][role="multiselect"][fid="${e}"]`), c = this.$find(`input[role="multiselect"][name="${e}"]`);
    var a = parseInt(n);
    console.log(a), console.log(r), console.log(o), console.log(s);
    const l = [];
    r.each(function(_, v) {
      l.push($(v).val());
    }), console.log(l);
    const u = $(r[a + 1]);
    if (s) {
      var g = s.options;
      const _ = s.datas;
      var m = s.filter;
      m = typeof multiselect_filter == "object" && typeof m == "string" && typeof multiselect_filter[m] == "function" ? multiselect_filter[m] : null, !Array.isArray(g) && typeof m == "function" && (g = m(_)), s.options = g;
    }
    if (r.length > 0 && a < r.length - 1 && s && Array.isArray(s.options)) {
      const _ = [], v = s.options.length, H = s.separator && s.separator !== "" ? s.separator : ";";
      _.length = v;
      for (var f = 0; f < v; f++)
        _[f] = Array.isArray(s.options[f]) ? s.options[f] : s.options[f].split(H);
      console.log(_);
      const z = [];
      for (var h = 0; h < _.length; h++) {
        for (var b = !0, f = 0; f <= a; f++) {
          const E = _[h][f];
          b = b && (Array.isArray(E) && E.at(-1) === l[f] || E === l[f]);
        }
        b && z.push(_[h]);
      }
      console.log(z);
      const x = [];
      if (z.forEach((R) => {
        const E = R[a + 1];
        x.push(Array.isArray(E) ? E.at(-1) : E);
      }), console.log(x), console.log(u), u[0].tagName === "SELECT") {
        const R = $(u).find("option");
        console.log(R);
        var w = R.length - 1;
        R.each(function(E, P) {
          x.includes(P.value) ? ($(P).show(), w = E < w ? E : w) : $(P).hide();
        }), console.log(u), x.includes(u.val()) || (u[0].selectedIndex = w);
      } else
        u.val(x[0]);
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
        const [g, m] = u, f = g.split("|"), h = [], b = [], w = [], _ = [];
        f.forEach((v) => {
          v.length === 0 || (v[0] === "<" ? w.push(parseFloat(v.substring(1, v.length))) : v[0] === ">" ? _.push(parseFloat(v.substring(1, v.length))) : v[0] === "!" ? b.push(v.substring(1, v.length)) : h.push(v));
        }), p("arrValToAvoid vs curval : " + a), p(b), (h.includes(a) || b.length > 0 && !b.includes(a) || l !== NaN && w.length > 0 && l < w[0] || l !== NaN && _.length > 0 && l > _[0]) && I(m) && Object.entries(m).forEach((v) => {
          const [H, z] = v;
          p(`todo:${H}`), p(z);
          const x = H.split(":"), R = i[x[0]];
          p(R);
          var E = x[0];
          x.length > 1 && (E = x[1]), typeof R == "function" && Array.isArray(z) && R.call(e, z, E);
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
    console.log("new HForm()", e, n), C.instances.push(this);
    const i = $(e);
    this.schema = n, this.element = i, C.template = n.template && C.templates[n.template] ? C.templates[n.template] : C.templates.bootstrap5v1, Array.isArray(i) && i.length > 0 ? i[0].hform = this : i && (i.hform = this), this.locals = {
      fields: [],
      fieldIds: [],
      displayed_fields: [],
      malformed_fields: []
    }, $.extend(this.locals, n), Array.isArray(this.locals.fields) && this.locals.fields.forEach((s) => {
      s.fid && !this.locals.fieldIds.includes(s.fid) && this.locals.fieldIds.push(s.fid);
    }), this.onchange = C.debugOnchange, typeof n.onchange == "function" && (this.onchange = n.onchange);
  }
  display(e) {
    p("HForm:display");
    const n = this, i = function() {
      n.setUiCustomizerEvents();
      const c = () => {
        n.onchange(n.getValues());
      };
      n.$find("input, select").on("change", c), typeof catllback == "function" && e(n), typeof n.locals.onload == "function" && n.locals.onload(n);
    };
    $(this.element).on("HFORM_FIELDS_DISPLAYED", i);
    const s = this.locals;
    p("todo avec load specEJS"), p(s.fields);
    const o = function() {
      var c = s.fields.slice();
      c.forEach((a) => {
        p(`display ${a} ...`);
        const l = C.getKind(a.value), u = C.getCallBackByKind(l);
        var g = a;
        typeof u == "function" && I(g) && (p("calling a callback for getLocals ..."), g.kind = l, g.callbackGetLocals = u);
        var m = C.getEJSForContent(a.value);
        a.unit && (a.max || a.min || a.step) && (m = C.getEJSbyKind("number")), p(`display ${a.fid} -> EJS:${m}`), a.fid ? C.htmlEJS(
          n.$find(`.need-content#${a.fid}`),
          m,
          // HForm.getEJSForContent(field.value),
          g,
          null,
          Qt(n.add2displayed, n, a)
        ) : s.malformed_fields.push(a);
      });
    }, r = s;
    $(this.element).html(C.template.render(r)), this.triggerIfFieldsLoaded(), o();
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
        const b = c.split("[]")[0].split("[");
        var f = [];
        p(b);
        for (var a = [n], l = 0; l < b.length - 1; l++) {
          p(a), p(b[l]);
          var u = b[l];
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
    $.extend(n, i);
    const s = new C(e, n);
    return s.display(), s;
  }
};
window.includeEJS = function(t, e, n = "div", i = "includeEJS") {
  let s = Yt("includeEJS"), o = e, r = D.getEJSbyKind(t);
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
D.samples = De;
D.templates = qe;
window.HForm = D;
window.addEventListener("load", () => {
  $('div[role="DemoHopesForm"]').each((t, e) => {
    D.samples.length > 0 ? D.render(e, D.samples.at(-1)) : console.error("HForm dont't have any sample to play !");
  });
});
export {
  D as default
};
