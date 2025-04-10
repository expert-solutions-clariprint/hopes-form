const K = document, fe = window, qe = K.documentElement, ne = K.createElement.bind(K), Ke = ne("div"), $e = ne("table"), pt = ne("tbody"), He = ne("tr"), { isArray: pe, prototype: Xe } = Array, { concat: gt, filter: xe, indexOf: Ge, map: Ye, push: mt, slice: Ze, some: Ce, splice: vt } = Xe, yt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, bt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, $t = /<.+>/, Et = /^\w+$/;
function Le(e, t) {
  const n = _t(t);
  return !e || !n && !te(t) && !N(t) ? [] : !n && bt.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Et.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class ge {
  constructor(t, n) {
    if (!t)
      return;
    if (Ae(t))
      return t;
    let r = t;
    if (J(t)) {
      const i = n || K;
      if (r = yt.test(t) && te(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : $t.test(t) ? tt(t) : Ae(i) ? i.find(t) : J(i) ? x(i).find(t) : Le(t, i), !r)
        return;
    } else if (ie(t))
      return this.ready(t);
    (r.nodeType || r === fe) && (r = [r]), this.length = r.length;
    for (let i = 0, s = this.length; i < s; i++)
      this[i] = r[i];
  }
  init(t, n) {
    return new ge(t, n);
  }
}
const b = ge.prototype, x = b.init;
x.fn = x.prototype = b;
b.length = 0;
b.splice = vt;
typeof Symbol == "function" && (b[Symbol.iterator] = Xe[Symbol.iterator]);
function Ae(e) {
  return e instanceof ge;
}
function re(e) {
  return !!e && e === e.window;
}
function te(e) {
  return !!e && e.nodeType === 9;
}
function _t(e) {
  return !!e && e.nodeType === 11;
}
function N(e) {
  return !!e && e.nodeType === 1;
}
function wt(e) {
  return !!e && e.nodeType === 3;
}
function At(e) {
  return typeof e == "boolean";
}
function ie(e) {
  return typeof e == "function";
}
function J(e) {
  return typeof e == "string";
}
function B(e) {
  return e === void 0;
}
function le(e) {
  return e === null;
}
function Qe(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Se(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
x.isWindow = re;
x.isFunction = ie;
x.isArray = pe;
x.isNumeric = Qe;
x.isPlainObject = Se;
function D(e, t, n) {
  if (n) {
    let r = e.length;
    for (; r--; )
      if (t.call(e[r], r, e[r]) === !1)
        return e;
  } else if (Se(e)) {
    const r = Object.keys(e);
    for (let i = 0, s = r.length; i < s; i++) {
      const l = r[i];
      if (t.call(e[l], l, e[l]) === !1)
        return e;
    }
  } else
    for (let r = 0, i = e.length; r < i; r++)
      if (t.call(e[r], r, e[r]) === !1)
        return e;
  return e;
}
x.each = D;
b.each = function(e) {
  return D(this, e);
};
b.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function de(...e) {
  const t = At(e[0]) ? e.shift() : !1, n = e.shift(), r = e.length;
  if (!n)
    return {};
  if (!r)
    return de(t, x, n);
  for (let i = 0; i < r; i++) {
    const s = e[i];
    for (const l in s)
      t && (pe(s[l]) || Se(s[l])) ? ((!n[l] || n[l].constructor !== s[l].constructor) && (n[l] = new s[l].constructor()), de(t, n[l], s[l])) : n[l] = s[l];
  }
  return n;
}
x.extend = de;
b.extend = function(e) {
  return de(b, e);
};
const Tt = /\S+/g;
function me(e) {
  return J(e) ? e.match(Tt) || [] : [];
}
b.toggleClass = function(e, t) {
  const n = me(e), r = !B(t);
  return this.each((i, s) => {
    N(s) && D(n, (l, c) => {
      r ? t ? s.classList.add(c) : s.classList.remove(c) : s.classList.toggle(c);
    });
  });
};
b.addClass = function(e) {
  return this.toggleClass(e, !0);
};
b.removeAttr = function(e) {
  const t = me(e);
  return this.each((n, r) => {
    N(r) && D(t, (i, s) => {
      r.removeAttribute(s);
    });
  });
};
function xt(e, t) {
  if (e) {
    if (J(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !N(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return le(n) ? void 0 : n;
      }
      return B(t) ? this : le(t) ? this.removeAttr(e) : this.each((n, r) => {
        N(r) && r.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
b.attr = xt;
b.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
b.hasClass = function(e) {
  return !!e && Ce.call(this, (t) => N(t) && t.classList.contains(e));
};
b.get = function(e) {
  return B(e) ? Ze.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
b.eq = function(e) {
  return x(this.get(e));
};
b.first = function() {
  return this.eq(0);
};
b.last = function() {
  return this.eq(-1);
};
function Ct(e) {
  return B(e) ? this.get().map((t) => N(t) || wt(t) ? t.textContent : "").join("") : this.each((t, n) => {
    N(n) && (n.textContent = e);
  });
}
b.text = Ct;
function X(e, t, n) {
  if (!N(e))
    return;
  const r = fe.getComputedStyle(e, null);
  return n ? r.getPropertyValue(t) || void 0 : r[t] || e.style[t];
}
function W(e, t) {
  return parseInt(X(e, t), 10) || 0;
}
function Me(e, t) {
  return W(e, `border${t ? "Left" : "Top"}Width`) + W(e, `padding${t ? "Left" : "Top"}`) + W(e, `padding${t ? "Right" : "Bottom"}`) + W(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Ee = {};
function Lt(e) {
  if (Ee[e])
    return Ee[e];
  const t = ne(e);
  K.body.insertBefore(t, null);
  const n = X(t, "display");
  return K.body.removeChild(t), Ee[e] = n !== "none" ? n : "block";
}
function De(e) {
  return X(e, "display") === "none";
}
function et(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function ve(e) {
  return J(e) ? (t, n) => et(n, e) : ie(e) ? e : Ae(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
b.filter = function(e) {
  const t = ve(e);
  return x(xe.call(this, (n, r) => t.call(n, r, n)));
};
function Z(e, t) {
  return t ? e.filter(t) : e;
}
b.detach = function(e) {
  return Z(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const St = /^\s*<(\w+)[^>]*>/, It = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ke = {
  "*": Ke,
  tr: pt,
  td: He,
  th: He,
  thead: $e,
  tbody: $e,
  tfoot: $e
};
function tt(e) {
  if (!J(e))
    return [];
  if (It.test(e))
    return [ne(RegExp.$1)];
  const t = St.test(e) && RegExp.$1, n = ke[t] || ke["*"];
  return n.innerHTML = e, x(n.childNodes).detach().get();
}
x.parseHTML = tt;
b.has = function(e) {
  const t = J(e) ? (n, r) => Le(e, r).length : (n, r) => r.contains(e);
  return this.filter(t);
};
b.not = function(e) {
  const t = ve(e);
  return this.filter((n, r) => (!J(e) || N(r)) && !t.call(r, n, r));
};
function G(e, t, n, r) {
  const i = [], s = ie(t), l = r && ve(r);
  for (let c = 0, d = e.length; c < d; c++)
    if (s) {
      const u = t(e[c]);
      u.length && mt.apply(i, u);
    } else {
      let u = e[c][t];
      for (; u != null && !(r && l(-1, u)); )
        i.push(u), u = n ? u[t] : null;
    }
  return i;
}
function nt(e) {
  return e.multiple && e.options ? G(xe.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Rt(e) {
  return arguments.length ? this.each((t, n) => {
    const r = n.multiple && n.options;
    if (r || ut.test(n.type)) {
      const i = pe(e) ? Ye.call(e, String) : le(e) ? [] : [String(e)];
      r ? D(n.options, (s, l) => {
        l.selected = i.indexOf(l.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = B(e) || le(e) ? "" : e;
  }) : this[0] && nt(this[0]);
}
b.val = Rt;
b.is = function(e) {
  const t = ve(e);
  return Ce.call(this, (n, r) => t.call(n, r, n));
};
x.guid = 1;
function q(e) {
  return e.length > 1 ? xe.call(e, (t, n, r) => Ge.call(r, t) === n) : e;
}
x.unique = q;
b.add = function(e, t) {
  return x(q(this.get().concat(x(e, t).get())));
};
b.children = function(e) {
  return Z(x(q(G(this, (t) => t.children))), e);
};
b.parent = function(e) {
  return Z(x(q(G(this, "parentNode"))), e);
};
b.index = function(e) {
  const t = e ? x(e)[0] : this[0], n = e ? this : x(t).parent().children();
  return Ge.call(n, t);
};
b.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
b.siblings = function(e) {
  return Z(x(q(G(this, (t) => x(t).parent().children().not(t)))), e);
};
b.find = function(e) {
  return x(q(G(this, (t) => Le(e, t))));
};
const Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ft = /^$|^module$|\/(java|ecma)script/i, Ot = ["type", "src", "nonce", "noModule"];
function jt(e, t) {
  const n = x(e);
  n.filter("script").add(n.find("script")).each((r, i) => {
    if (Ft.test(i.type) && qe.contains(i)) {
      const s = ne("script");
      s.text = i.textContent.replace(Pt, ""), D(Ot, (l, c) => {
        i[c] && (s[c] = i[c]);
      }), t.head.insertBefore(s, null), t.head.removeChild(s);
    }
  });
}
function zt(e, t, n, r, i) {
  r ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && jt(t, e.ownerDocument);
}
function Q(e, t, n, r, i, s, l, c) {
  return D(e, (d, u) => {
    D(x(u), (o, p) => {
      D(x(t), (g, a) => {
        const f = n ? p : a, y = n ? a : p, T = n ? o : g;
        zt(f, T ? y.cloneNode(!0) : y, r, i, !T);
      }, c);
    }, l);
  }, s), t;
}
b.after = function() {
  return Q(arguments, this, !1, !1, !1, !0, !0);
};
b.append = function() {
  return Q(arguments, this, !1, !1, !0);
};
function Nt(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (B(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, r) => {
    N(r) && (t ? x(r).empty().append(e) : r.innerHTML = e);
  });
}
b.html = Nt;
b.appendTo = function(e) {
  return Q(arguments, this, !0, !1, !0);
};
b.wrapInner = function(e) {
  return this.each((t, n) => {
    const r = x(n), i = r.contents();
    i.length ? i.wrapAll(e) : r.append(e);
  });
};
b.before = function() {
  return Q(arguments, this, !1, !0);
};
b.wrapAll = function(e) {
  let t = x(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
b.wrap = function(e) {
  return this.each((t, n) => {
    const r = x(e)[0];
    x(n).wrapAll(t ? r.cloneNode(!0) : r);
  });
};
b.insertAfter = function(e) {
  return Q(arguments, this, !0, !1, !1, !1, !1, !0);
};
b.insertBefore = function(e) {
  return Q(arguments, this, !0, !0);
};
b.prepend = function() {
  return Q(arguments, this, !1, !0, !0, !0, !0);
};
b.prependTo = function(e) {
  return Q(arguments, this, !0, !0, !0, !1, !1, !0);
};
b.contents = function() {
  return x(q(G(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
b.next = function(e, t, n) {
  return Z(x(q(G(this, "nextElementSibling", t, n))), e);
};
b.nextAll = function(e) {
  return this.next(e, !0);
};
b.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
b.parents = function(e, t) {
  return Z(x(q(G(this, "parentElement", !0, t))), e);
};
b.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
b.prev = function(e, t, n) {
  return Z(x(q(G(this, "previousElementSibling", t, n))), e);
};
b.prevAll = function(e) {
  return this.prev(e, !0);
};
b.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
b.map = function(e) {
  return x(gt.apply([], Ye.call(this, (t, n) => e.call(t, n, t))));
};
b.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
b.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && X(n, "position") === "static"; )
      n = n.offsetParent;
    return n || qe;
  });
};
b.slice = function(e, t) {
  return x(Ze.call(this, e, t));
};
const Ht = /-([a-z])/g;
function Ie(e) {
  return e.replace(Ht, (t, n) => n.toUpperCase());
}
b.ready = function(e) {
  const t = () => setTimeout(e, 0, x);
  return K.readyState !== "loading" ? t() : K.addEventListener("DOMContentLoaded", t), this;
};
b.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = x(t);
    n.replaceWith(n.children());
  }), this;
};
b.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + fe.pageYOffset,
    left: t.left + fe.pageXOffset
  };
};
b.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = X(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const r = e.ownerDocument;
    let i = e.offsetParent || r.documentElement;
    for (; (i === r.body || i === r.documentElement) && X(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && N(i)) {
      const s = x(i).offset();
      n.top -= s.top + W(i, "borderTopWidth"), n.left -= s.left + W(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - W(e, "marginTop"),
    left: n.left - W(e, "marginLeft")
  };
};
const it = {
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
b.prop = function(e, t) {
  if (e) {
    if (J(e))
      return e = it[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, r) => {
        r[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
b.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[it[e] || e];
  });
};
const Mt = /^--/;
function Re(e) {
  return Mt.test(e);
}
const _e = {}, { style: Dt } = Ke, kt = ["webkit", "moz", "ms"];
function Jt(e, t = Re(e)) {
  if (t)
    return e;
  if (!_e[e]) {
    const n = Ie(e), r = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${kt.join(`${r} `)}${r}`.split(" ");
    D(i, (s, l) => {
      if (l in Dt)
        return _e[e] = l, !1;
    });
  }
  return _e[e];
}
const Ut = {
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
function rt(e, t, n = Re(e)) {
  return !n && !Ut[e] && Qe(t) ? `${t}px` : t;
}
function Bt(e, t) {
  if (J(e)) {
    const n = Re(e);
    return e = Jt(e, n), arguments.length < 2 ? this[0] && X(this[0], e, n) : e ? (t = rt(e, t, n), this.each((r, i) => {
      N(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
b.css = Bt;
function st(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Vt = /^\s+|\s+$/;
function Je(e, t) {
  const n = e.dataset[t] || e.dataset[Ie(t)];
  return Vt.test(n) ? n : st(JSON.parse, n);
}
function Wt(e, t, n) {
  n = st(JSON.stringify, n), e.dataset[Ie(t)] = n;
}
function qt(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const r in this[0].dataset)
      n[r] = Je(this[0], r);
    return n;
  }
  if (J(e))
    return arguments.length < 2 ? this[0] && Je(this[0], e) : B(t) ? this : this.each((n, r) => {
      Wt(r, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
b.data = qt;
function ot(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
D([!0, !1], (e, t) => {
  D(["Width", "Height"], (n, r) => {
    const i = `${t ? "outer" : "inner"}${r}`;
    b[i] = function(s) {
      if (this[0])
        return re(this[0]) ? t ? this[0][`inner${r}`] : this[0].document.documentElement[`client${r}`] : te(this[0]) ? ot(this[0], r) : this[0][`${t ? "offset" : "client"}${r}`] + (s && t ? W(this[0], `margin${n ? "Top" : "Left"}`) + W(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
D(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  b[n] = function(r) {
    if (!this[0])
      return B(r) ? void 0 : this;
    if (!arguments.length)
      return re(this[0]) ? this[0].document.documentElement[`client${t}`] : te(this[0]) ? ot(this[0], t) : this[0].getBoundingClientRect()[n] - Me(this[0], !e);
    const i = parseInt(r, 10);
    return this.each((s, l) => {
      if (!N(l))
        return;
      const c = X(l, "boxSizing");
      l.style[n] = rt(n, i + (c === "border-box" ? Me(l, !e) : 0));
    });
  };
});
const Ue = "___cd";
b.toggle = function(e) {
  return this.each((t, n) => {
    if (!N(n))
      return;
    const r = De(n);
    (B(e) ? r : e) ? (n.style.display = n[Ue] || "", De(n) && (n.style.display = Lt(n.tagName))) : r || (n[Ue] = X(n, "display"), n.style.display = "none");
  });
};
b.hide = function() {
  return this.toggle(!1);
};
b.show = function() {
  return this.toggle(!0);
};
const Be = "___ce", Pe = ".", Fe = { focus: "focusin", blur: "focusout" }, at = { mouseenter: "mouseover", mouseleave: "mouseout" }, Kt = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Oe(e) {
  return at[e] || Fe[e] || e;
}
function je(e) {
  const t = e.split(Pe);
  return [t[0], t.slice(1).sort()];
}
b.trigger = function(e, t) {
  if (J(e)) {
    const [r, i] = je(e), s = Oe(r);
    if (!s)
      return this;
    const l = Kt.test(s) ? "MouseEvents" : "HTMLEvents";
    e = K.createEvent(l), e.initEvent(s, !0, !0), e.namespace = i.join(Pe), e.___ot = r;
  }
  e.___td = t;
  const n = e.___ot in Fe;
  return this.each((r, i) => {
    n && ie(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function lt(e) {
  return e[Be] = e[Be] || {};
}
function Xt(e, t, n, r, i) {
  const s = lt(e);
  s[t] = s[t] || [], s[t].push([n, r, i]), e.addEventListener(t, i);
}
function ct(e, t) {
  return !t || !Ce.call(t, (n) => e.indexOf(n) < 0);
}
function he(e, t, n, r, i) {
  const s = lt(e);
  if (t)
    s[t] && (s[t] = s[t].filter(([l, c, d]) => {
      if (i && d.guid !== i.guid || !ct(l, n) || r && r !== c)
        return !0;
      e.removeEventListener(t, d);
    }));
  else for (t in s)
    he(e, t, n, r, i);
}
b.off = function(e, t, n) {
  if (B(e))
    this.each((r, i) => {
      !N(i) && !te(i) && !re(i) || he(i);
    });
  else if (J(e))
    ie(t) && (n = t, t = ""), D(me(e), (r, i) => {
      const [s, l] = je(i), c = Oe(s);
      this.each((d, u) => {
        !N(u) && !te(u) && !re(u) || he(u, c, l, t, n);
      });
    });
  else
    for (const r in e)
      this.off(r, e[r]);
  return this;
};
b.remove = function(e) {
  return Z(this, e).detach().off(), this;
};
b.replaceWith = function(e) {
  return this.before(e).remove();
};
b.replaceAll = function(e) {
  return x(e).replaceWith(this), this;
};
function Gt(e, t, n, r, i) {
  if (!J(e)) {
    for (const s in e)
      this.on(s, t, n, e[s], i);
    return this;
  }
  return J(t) || (B(t) || le(t) ? t = "" : B(n) ? (n = t, t = "") : (r = n, n = t, t = "")), ie(r) || (r = n, n = void 0), r ? (D(me(e), (s, l) => {
    const [c, d] = je(l), u = Oe(c), o = c in at, p = c in Fe;
    u && this.each((g, a) => {
      if (!N(a) && !te(a) && !re(a))
        return;
      const f = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !ct(d, y.namespace.split(Pe)) || !t && (p && (y.target !== a || y.___ot === u) || o && y.relatedTarget && a.contains(y.relatedTarget)))
          return;
        let T = a;
        if (t) {
          let _ = y.target;
          for (; !et(_, t); )
            if (_ === a || (_ = _.parentNode, !_))
              return;
          T = _;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return T;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return a;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const E = r.call(T, y, y.___td);
        i && he(a, u, d, t, f), E === !1 && (y.preventDefault(), y.stopPropagation());
      };
      f.guid = r.guid = r.guid || x.guid++, Xt(a, u, d, t, f);
    });
  }), this) : this;
}
b.on = Gt;
function Yt(e, t, n, r) {
  return this.on(e, t, n, r, !0);
}
b.one = Yt;
const Zt = /\r?\n/g;
function Qt(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(Zt, `\r
`))}`;
}
const en = /file|reset|submit|button|image/i, ut = /radio|checkbox/i;
b.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    D(n.elements || [n], (r, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || en.test(i.type) || ut.test(i.type) && !i.checked)
        return;
      const s = nt(i);
      if (!B(s)) {
        const l = pe(s) ? s : [s];
        D(l, (c, d) => {
          e += Qt(i.name, d);
        });
      }
    });
  }), e.slice(1);
};
window.$ = x;
window.jQuery = window.$;
function Ve(e, t, n) {
  if (window.fetch) {
    var r = new Headers({
      "Content-Type": "text/plain; charset=UTF-8"
    }), i = {
      method: "GET",
      headers: r,
      mode: "cors",
      cache: "default"
    };
    window.fetch(e, i).then(function(s) {
      return s.text();
    }).then(function(s) {
      typeof s == "string" && n(s, "OK");
    });
  } else
    rn(e, t);
}
function z(e) {
  return e && typeof e == "object" && e.constructor === Object;
}
function tn(e, t, n = null, r = ".") {
  var i = n ? t.split(n).at(-1) : t;
  const s = i.split(r);
  var l = e;
  return s.forEach((c) => {
    if (l[c]) l = l[c];
    else return null;
  }), l === e ? null : l;
}
window.translateDictionnary = function(e, t) {
  if (typeof gTransl != "function") return void 0;
  const n = sugarcrepeHL.dictionnary;
  if (sugarcrepeHL.numberOfTranslationTodo = 0, sugarcrepeHL.numberOfTranslationDone = 0, sugarcrepeHL.numberOfTranslationFail = 0, !z(n)) return n;
  const r = {
    schl: "en",
    categories: "en",
    products: "en",
    clariprint: "en",
    materials: "fr"
  };
  var i = ["schl", "categories", "products", "clariprint", "materials"], s = ["es", "de", "it", "nl", "pl", "pt", "sv"];
  Array.isArray(e) && (i = e), Array.isArray(t) && (s = t);
  function l() {
    sugarcrepeHL.numberOfTranslationTodo === sugarcrepeHL.numberOfTranslationDone + sugarcrepeHL.numberOfTranslationFail && (`${sugarcrepeHL.numberOfTranslationTodo}${sugarcrepeHL.numberOfTranslationFail}`, void 0);
  }
  i.forEach((c) => {
    const d = r[c];
    z(n[c]) || (n[c] = {}), s.forEach((u) => {
      z(n[c][u]) || (n[c][u] = {});
      const o = n[c][u];
      ["en", "fr"].includes(d) && z(n[c][d]) && Object.entries(n[c][d]).forEach((p) => {
        const [g, a] = p;
        sugarcrepeHL.numberOfTranslationTodo++, gTransl(
          a,
          d,
          u,
          function(f) {
            const y = f.data;
            z(y) && Array.isArray(y.translations) && y.translations.length > 0 && typeof y.translations[0].translatedText == "string" ? (o[g] = y.translations[0].translatedText, sugarcrepeHL.numberOfTranslationDone++) : (o[g] = a, sugarcrepeHL.numberOfTranslationFail++), l();
          },
          function() {
            o[g] = a, sugarcrepeHL.numberOfTranslationFail++, l();
          }
        );
      });
    });
  });
};
const nn = function(e = {}) {
  const {
    url: t,
    method: n = e.type || "GET",
    data: r = null,
    dataType: i = "json",
    contentType: s = "application/x-www-form-urlencoded",
    headers: l = {},
    beforeSend: c = () => {
    },
    success: d = () => {
    },
    error: u = () => {
    }
  } = e;
  let o;
  console.log(`ajax(${n},${t})`), r && n.toUpperCase() !== "GET" && (s === "application/json" ? o = JSON.stringify(r) : o = new URLSearchParams(r).toString());
  try {
    c();
  } catch (f) {
    console.warn("[HU.ajax] beforeSend() error:", f);
  }
  const p = {
    method: n.toUpperCase(),
    headers: {
      "Content-Type": s,
      ...l
    },
    ...o ? { body: o } : {}
  };
  let g = t;
  if (r && n.toUpperCase() === "GET") {
    const f = new URLSearchParams(r).toString();
    g += (t.includes("?") ? "&" : "?") + f;
  }
  if (console.log(`finaleUrl: ${g}`), !g) return console.error("ajax error : url is undefined !");
  const a = fetch(g, p).then(async (f) => {
    if (!f.ok) throw new Error(`HTTP ${f.status}`);
    const y = i === "json" ? await f.json() : await f.text();
    return d(y), y;
  }).catch((f) => {
    throw u(f), f;
  });
  return a.done = (f) => (a.then(f), a), a.fail = (f) => (a.catch(f), a), a;
}, rn = (e, t) => nn({ url: e, method: "GET", success: t });
function sn(e, t, ...n) {
  if (typeof e != "function")
    throw new TypeError("HU.proxy: le premier argument doit être une fonction");
  return n.length ? function(...r) {
    return e.apply(t, [...n, ...r]);
  } : e.bind(t);
}
$.fn.modal = function(e = "toggle") {
  return this.each((t, n) => {
    if (n instanceof HTMLElement) {
      if (e === "show") {
        n.classList.add("show"), n.style.display = "block", document.body.classList.add("modal-open");
        let r = document.createElement("div");
        r.className = "modal-backdrop fade show", r.dataset.huBackdrop = "true", document.body.appendChild(r);
      }
      if (e === "hide") {
        n.classList.remove("show"), n.style.display = "none", document.body.classList.remove("modal-open");
        const r = document.querySelector(".modal-backdrop[data-hu-backdrop]");
        r && r.remove();
      }
      e === "toggle" && $(n).modal(n.classList.contains("show") ? "hide" : "show");
    }
  }), this;
};
$.fn.tooltip = function() {
  return this.each((e, t) => {
    if (!(t instanceof HTMLElement)) return;
    const n = t.getAttribute("title");
    n && (t.setAttribute("data-tooltip", n), t.removeAttribute("title"), t.addEventListener("mouseenter", () => {
      const r = document.createElement("div");
      r.className = "hu-tooltip", r.textContent = t.getAttribute("data-tooltip"), document.body.appendChild(r);
      const i = t.getBoundingClientRect();
      r.style.position = "absolute", r.style.top = `${i.top - 30}px`, r.style.left = `${i.left + i.width / 2}px`, r.style.transform = "translateX(-50%)", r.style.padding = "5px 10px", r.style.background = "rgba(0,0,0,0.75)", r.style.color = "white", r.style.fontSize = "0.8rem", r.style.borderRadius = "4px", r.style.pointerEvents = "none", r.style.zIndex = 9999, r.dataset.huTooltip = "true";
    }), t.addEventListener("mouseleave", () => {
      document.querySelectorAll("[data-hu-tooltip]").forEach((r) => r.remove());
    }));
  }), this;
};
function ue(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var we = { exports: {} }, We;
function on() {
  return We || (We = 1, function(e, t) {
    (function(n) {
      e.exports = n();
    })(function() {
      return (/* @__PURE__ */ function() {
        function n(r, i, s) {
          function l(u, o) {
            if (!i[u]) {
              if (!r[u]) {
                var p = typeof ue == "function" && ue;
                if (!o && p) return p(u, !0);
                if (c) return c(u, !0);
                var g = new Error("Cannot find module '" + u + "'");
                throw g.code = "MODULE_NOT_FOUND", g;
              }
              var a = i[u] = { exports: {} };
              r[u][0].call(a.exports, function(f) {
                var y = r[u][1][f];
                return l(y || f);
              }, a, a.exports, n, r, i, s);
            }
            return i[u].exports;
          }
          for (var c = typeof ue == "function" && ue, d = 0; d < s.length; d++) l(s[d]);
          return l;
        }
        return n;
      }())({ 1: [function(n, r, i) {
        var s = n("fs"), l = n("path"), c = n("./utils"), d = !1, u = n("../package.json").version, o = "<", p = ">", g = "%", a = "locals", f = "ejs", y = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)", T = ["delimiter", "scope", "context", "debug", "compileDebug", "client", "_with", "rmWhitespace", "strict", "filename", "async"], E = T.concat("cache"), _ = /^\uFEFF/, I = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
        i.cache = c.cache, i.fileLoader = s.readFileSync, i.localsName = a, i.promiseImpl = new Function("return this;")().Promise, i.resolveInclude = function(m, A, h) {
          var v = l.dirname, L = l.extname, F = l.resolve, k = F(h ? A : v(A), m), Y = L(m);
          return Y || (k += ".ejs"), k;
        };
        function C(m, A) {
          var h;
          if (A.some(function(v) {
            return h = i.resolveInclude(m, v, !0), s.existsSync(h);
          }))
            return h;
        }
        function w(m, A) {
          var h, v, L = A.views, F = /^[A-Za-z]+:\\|^\//.exec(m);
          if (F && F.length)
            m = m.replace(/^\/*/, ""), Array.isArray(A.root) ? h = C(m, A.root) : h = i.resolveInclude(m, A.root || "/", !0);
          else if (A.filename && (v = i.resolveInclude(m, A.filename), s.existsSync(v) && (h = v)), !h && Array.isArray(L) && (h = C(m, L)), !h && typeof A.includer != "function")
            throw new Error('Could not find the include file "' + A.escapeFunction(m) + '"');
          return h;
        }
        function O(m, A) {
          var h, v = m.filename, L = arguments.length > 1;
          if (m.cache) {
            if (!v)
              throw new Error("cache option requires a filename");
            if (h = i.cache.get(v), h)
              return h;
            L || (A = j(v).toString().replace(_, ""));
          } else if (!L) {
            if (!v)
              throw new Error("Internal EJS error: no file name or template provided");
            A = j(v).toString().replace(_, "");
          }
          return h = i.compile(A, m), m.cache && i.cache.set(v, h), h;
        }
        function R(m, A, h) {
          var v;
          if (h) {
            try {
              v = O(m)(A);
            } catch (L) {
              return h(L);
            }
            h(null, v);
          } else {
            if (typeof i.promiseImpl == "function")
              return new i.promiseImpl(function(L, F) {
                try {
                  v = O(m)(A), L(v);
                } catch (k) {
                  F(k);
                }
              });
            throw new Error("Please provide a callback function");
          }
        }
        function j(m) {
          return i.fileLoader(m);
        }
        function ye(m, A) {
          var h = c.shallowCopy(c.createNullProtoObjWherePossible(), A);
          if (h.filename = w(m, h), typeof A.includer == "function") {
            var v = A.includer(m, h.filename);
            if (v && (v.filename && (h.filename = v.filename), v.template))
              return O(h, v.template);
          }
          return O(h);
        }
        function se(m, A, h, v, L) {
          var F = A.split(`
`), k = Math.max(v - 3, 0), Y = Math.min(F.length, v + 3), V = L(h), ee = F.slice(k, Y).map(function(oe, ce) {
            var ae = ce + k + 1;
            return (ae == v ? " >> " : "    ") + ae + "| " + oe;
          }).join(`
`);
          throw m.path = V, m.message = (V || "ejs") + ":" + v + `
` + ee + `

` + m.message, m;
        }
        function H(m) {
          return m.replace(/;(\s*$)/, "$1");
        }
        i.compile = function(A, h) {
          var v;
          return h && h.scope && (d || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), d = !0), h.context || (h.context = h.scope), delete h.scope), v = new P(A, h), v.compile();
        }, i.render = function(m, A, h) {
          var v = A || c.createNullProtoObjWherePossible(), L = h || c.createNullProtoObjWherePossible();
          return arguments.length == 2 && c.shallowCopyFromList(L, v, T), O(L, m)(v);
        }, i.renderFile = function() {
          var m = Array.prototype.slice.call(arguments), A = m.shift(), h, v = { filename: A }, L, F;
          return typeof arguments[arguments.length - 1] == "function" && (h = m.pop()), m.length ? (L = m.shift(), m.length ? c.shallowCopy(v, m.pop()) : (L.settings && (L.settings.views && (v.views = L.settings.views), L.settings["view cache"] && (v.cache = !0), F = L.settings["view options"], F && c.shallowCopy(v, F)), c.shallowCopyFromList(v, L, E)), v.filename = A) : L = c.createNullProtoObjWherePossible(), R(v, L, h);
        }, i.Template = P, i.clearCache = function() {
          i.cache.reset();
        };
        function P(m, A) {
          var h = c.hasOwnOnlyObject(A), v = c.createNullProtoObjWherePossible();
          this.templateText = m, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", v.client = h.client || !1, v.escapeFunction = h.escape || h.escapeFunction || c.escapeXML, v.compileDebug = h.compileDebug !== !1, v.debug = !!h.debug, v.filename = h.filename, v.openDelimiter = h.openDelimiter || i.openDelimiter || o, v.closeDelimiter = h.closeDelimiter || i.closeDelimiter || p, v.delimiter = h.delimiter || i.delimiter || g, v.strict = h.strict || !1, v.context = h.context, v.cache = h.cache || !1, v.rmWhitespace = h.rmWhitespace, v.root = h.root, v.includer = h.includer, v.outputFunctionName = h.outputFunctionName, v.localsName = h.localsName || i.localsName || a, v.views = h.views, v.async = h.async, v.destructuredLocals = h.destructuredLocals, v.legacyInclude = typeof h.legacyInclude < "u" ? !!h.legacyInclude : !0, v.strict ? v._with = !1 : v._with = typeof h._with < "u" ? h._with : !0, this.opts = v, this.regex = this.createRegex();
        }
        P.modes = { EVAL: "eval", ESCAPED: "escaped", RAW: "raw", COMMENT: "comment", LITERAL: "literal" }, P.prototype = { createRegex: function() {
          var m = y, A = c.escapeRegExpChars(this.opts.delimiter), h = c.escapeRegExpChars(this.opts.openDelimiter), v = c.escapeRegExpChars(this.opts.closeDelimiter);
          return m = m.replace(/%/g, A).replace(/</g, h).replace(/>/g, v), new RegExp(m);
        }, compile: function() {
          var m, A, h = this.opts, v = "", L = "", F = h.escapeFunction, k, Y = h.filename ? JSON.stringify(h.filename) : "undefined";
          if (!this.source) {
            if (this.generateSource(), v += `  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`, h.outputFunctionName) {
              if (!I.test(h.outputFunctionName))
                throw new Error("outputFunctionName is not a valid JS identifier.");
              v += "  var " + h.outputFunctionName + ` = __append;
`;
            }
            if (h.localsName && !I.test(h.localsName))
              throw new Error("localsName is not a valid JS identifier.");
            if (h.destructuredLocals && h.destructuredLocals.length) {
              for (var V = "  var __locals = (" + h.localsName + ` || {}),
`, ee = 0; ee < h.destructuredLocals.length; ee++) {
                var oe = h.destructuredLocals[ee];
                if (!I.test(oe))
                  throw new Error("destructuredLocals[" + ee + "] is not a valid JS identifier.");
                ee > 0 && (V += `,
  `), V += oe + " = __locals." + oe;
              }
              v += V + `;
`;
            }
            h._with !== !1 && (v += "  with (" + h.localsName + ` || {}) {
`, L += `  }
`), L += `  return __output;
`, this.source = v + this.source + L;
          }
          h.compileDebug ? m = `var __line = 1
  , __lines = ` + JSON.stringify(this.templateText) + `
  , __filename = ` + Y + `;
try {
` + this.source + `} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
` : m = this.source, h.client && (m = "escapeFn = escapeFn || " + F.toString() + `;
` + m, h.compileDebug && (m = "rethrow = rethrow || " + se.toString() + `;
` + m)), h.strict && (m = `"use strict";
` + m), h.debug && console.log(m), h.compileDebug && h.filename && (m = m + `
//# sourceURL=` + Y + `
`);
          try {
            if (h.async)
              try {
                k = new Function("return (async function(){}).constructor;")();
              } catch (U) {
                throw U instanceof SyntaxError ? new Error("This environment does not support async/await") : U;
              }
            else
              k = Function;
            A = new k(h.localsName + ", escapeFn, include, rethrow", m);
          } catch (U) {
            throw U instanceof SyntaxError && (h.filename && (U.message += " in " + h.filename), U.message += ` while compiling ejs

`, U.message += `If the above error is not helpful, you may want to try EJS-Lint:
`, U.message += "https://github.com/RyanZim/EJS-Lint", h.async || (U.message += `
`, U.message += "Or, if you meant to create an async function, pass `async: true` as an option.")), U;
          }
          var ce = h.client ? A : function(ze) {
            var dt = function(ht, Ne) {
              var be = c.shallowCopy(c.createNullProtoObjWherePossible(), ze);
              return Ne && (be = c.shallowCopy(be, Ne)), ye(ht, h)(be);
            };
            return A.apply(h.context, [ze || c.createNullProtoObjWherePossible(), F, dt, se]);
          };
          if (h.filename && typeof Object.defineProperty == "function") {
            var ae = h.filename, ft = l.basename(ae, l.extname(ae));
            try {
              Object.defineProperty(ce, "name", { value: ft, writable: !1, enumerable: !1, configurable: !0 });
            } catch {
            }
          }
          return ce;
        }, generateSource: function() {
          var m = this.opts;
          m.rmWhitespace && (this.templateText = this.templateText.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
          var A = this, h = this.parseTemplateText(), v = this.opts.delimiter, L = this.opts.openDelimiter, F = this.opts.closeDelimiter;
          h && h.length && h.forEach(function(k, Y) {
            var V;
            if (k.indexOf(L + v) === 0 && k.indexOf(L + v + v) !== 0 && (V = h[Y + 2], !(V == v + F || V == "-" + v + F || V == "_" + v + F)))
              throw new Error('Could not find matching close tag for "' + k + '".');
            A.scanLine(k);
          });
        }, parseTemplateText: function() {
          for (var m = this.templateText, A = this.regex, h = A.exec(m), v = [], L; h; )
            L = h.index, L !== 0 && (v.push(m.substring(0, L)), m = m.slice(L)), v.push(h[0]), m = m.slice(h[0].length), h = A.exec(m);
          return m && v.push(m), v;
        }, _addOutput: function(m) {
          if (this.truncate && (m = m.replace(/^(?:\r\n|\r|\n)/, ""), this.truncate = !1), !m)
            return m;
          m = m.replace(/\\/g, "\\\\"), m = m.replace(/\n/g, "\\n"), m = m.replace(/\r/g, "\\r"), m = m.replace(/"/g, '\\"'), this.source += '    ; __append("' + m + `")
`;
        }, scanLine: function(m) {
          var A = this, h = this.opts.delimiter, v = this.opts.openDelimiter, L = this.opts.closeDelimiter, F = 0;
          switch (F = m.split(`
`).length - 1, m) {
            case v + h:
            case v + h + "_":
              this.mode = P.modes.EVAL;
              break;
            case v + h + "=":
              this.mode = P.modes.ESCAPED;
              break;
            case v + h + "-":
              this.mode = P.modes.RAW;
              break;
            case v + h + "#":
              this.mode = P.modes.COMMENT;
              break;
            case v + h + h:
              this.mode = P.modes.LITERAL, this.source += '    ; __append("' + m.replace(v + h + h, v + h) + `")
`;
              break;
            case h + h + L:
              this.mode = P.modes.LITERAL, this.source += '    ; __append("' + m.replace(h + h + L, h + L) + `")
`;
              break;
            case h + L:
            case "-" + h + L:
            case "_" + h + L:
              this.mode == P.modes.LITERAL && this._addOutput(m), this.mode = null, this.truncate = m.indexOf("-") === 0 || m.indexOf("_") === 0;
              break;
            default:
              if (this.mode) {
                switch (this.mode) {
                  case P.modes.EVAL:
                  case P.modes.ESCAPED:
                  case P.modes.RAW:
                    m.lastIndexOf("//") > m.lastIndexOf(`
`) && (m += `
`);
                }
                switch (this.mode) {
                  case P.modes.EVAL:
                    this.source += "    ; " + m + `
`;
                    break;
                  case P.modes.ESCAPED:
                    this.source += "    ; __append(escapeFn(" + H(m) + `))
`;
                    break;
                  case P.modes.RAW:
                    this.source += "    ; __append(" + H(m) + `)
`;
                    break;
                  case P.modes.COMMENT:
                    break;
                  case P.modes.LITERAL:
                    this._addOutput(m);
                    break;
                }
              } else
                this._addOutput(m);
          }
          A.opts.compileDebug && F && (this.currentLine += F, this.source += "    ; __line = " + this.currentLine + `
`);
        } }, i.escapeXML = c.escapeXML, i.__express = i.renderFile, i.VERSION = u, i.name = f, typeof window < "u" && (window.ejs = i);
      }, { "../package.json": 6, "./utils": 2, fs: 3, path: 4 }], 2: [function(n, r, i) {
        var s = /[|\\{}()[\]^$+*?.]/g, l = Object.prototype.hasOwnProperty, c = function(a, f) {
          return l.apply(a, [f]);
        };
        i.escapeRegExpChars = function(a) {
          return a ? String(a).replace(s, "\\$&") : "";
        };
        var d = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#34;", "'": "&#39;" }, u = /[&<>'"]/g;
        function o(a) {
          return d[a] || a;
        }
        var p = `var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;
        i.escapeXML = function(a) {
          return a == null ? "" : String(a).replace(u, o);
        };
        function g() {
          return Function.prototype.toString.call(this) + `;
` + p;
        }
        try {
          typeof Object.defineProperty == "function" ? Object.defineProperty(i.escapeXML, "toString", { value: g }) : i.escapeXML.toString = g;
        } catch {
          console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
        }
        i.shallowCopy = function(a, f) {
          if (f = f || {}, a != null)
            for (var y in f)
              c(f, y) && (y === "__proto__" || y === "constructor" || (a[y] = f[y]));
          return a;
        }, i.shallowCopyFromList = function(a, f, y) {
          if (y = y || [], f = f || {}, a != null)
            for (var T = 0; T < y.length; T++) {
              var E = y[T];
              if (typeof f[E] < "u") {
                if (!c(f, E) || E === "__proto__" || E === "constructor")
                  continue;
                a[E] = f[E];
              }
            }
          return a;
        }, i.cache = { _data: {}, set: function(a, f) {
          this._data[a] = f;
        }, get: function(a) {
          return this._data[a];
        }, remove: function(a) {
          delete this._data[a];
        }, reset: function() {
          this._data = {};
        } }, i.hyphenToCamel = function(a) {
          return a.replace(/-[a-z]/g, function(f) {
            return f[1].toUpperCase();
          });
        }, i.createNullProtoObjWherePossible = function() {
          return typeof Object.create == "function" ? function() {
            return /* @__PURE__ */ Object.create(null);
          } : { __proto__: null } instanceof Object ? function() {
            return {};
          } : function() {
            return { __proto__: null };
          };
        }(), i.hasOwnOnlyObject = function(a) {
          var f = i.createNullProtoObjWherePossible();
          for (var y in a)
            c(a, y) && (f[y] = a[y]);
          return f;
        };
      }, {}], 3: [function(n, r, i) {
      }, {}], 4: [function(n, r, i) {
        (function(s) {
          function l(o, p) {
            for (var g = 0, a = o.length - 1; a >= 0; a--) {
              var f = o[a];
              f === "." ? o.splice(a, 1) : f === ".." ? (o.splice(a, 1), g++) : g && (o.splice(a, 1), g--);
            }
            if (p)
              for (; g--; g)
                o.unshift("..");
            return o;
          }
          i.resolve = function() {
            for (var o = "", p = !1, g = arguments.length - 1; g >= -1 && !p; g--) {
              var a = g >= 0 ? arguments[g] : s.cwd();
              if (typeof a != "string")
                throw new TypeError("Arguments to path.resolve must be strings");
              if (!a)
                continue;
              o = a + "/" + o, p = a.charAt(0) === "/";
            }
            return o = l(d(o.split("/"), function(f) {
              return !!f;
            }), !p).join("/"), (p ? "/" : "") + o || ".";
          }, i.normalize = function(o) {
            var p = i.isAbsolute(o), g = u(o, -1) === "/";
            return o = l(d(o.split("/"), function(a) {
              return !!a;
            }), !p).join("/"), !o && !p && (o = "."), o && g && (o += "/"), (p ? "/" : "") + o;
          }, i.isAbsolute = function(o) {
            return o.charAt(0) === "/";
          }, i.join = function() {
            var o = Array.prototype.slice.call(arguments, 0);
            return i.normalize(d(o, function(p, g) {
              if (typeof p != "string")
                throw new TypeError("Arguments to path.join must be strings");
              return p;
            }).join("/"));
          }, i.relative = function(o, p) {
            o = i.resolve(o).substr(1), p = i.resolve(p).substr(1);
            function g(I) {
              for (var C = 0; C < I.length && I[C] === ""; C++)
                ;
              for (var w = I.length - 1; w >= 0 && I[w] === ""; w--)
                ;
              return C > w ? [] : I.slice(C, w - C + 1);
            }
            for (var a = g(o.split("/")), f = g(p.split("/")), y = Math.min(a.length, f.length), T = y, E = 0; E < y; E++)
              if (a[E] !== f[E]) {
                T = E;
                break;
              }
            for (var _ = [], E = T; E < a.length; E++)
              _.push("..");
            return _ = _.concat(f.slice(T)), _.join("/");
          }, i.sep = "/", i.delimiter = ":", i.dirname = function(o) {
            if (typeof o != "string" && (o = o + ""), o.length === 0) return ".";
            for (var p = o.charCodeAt(0), g = p === 47, a = -1, f = !0, y = o.length - 1; y >= 1; --y)
              if (p = o.charCodeAt(y), p === 47) {
                if (!f) {
                  a = y;
                  break;
                }
              } else
                f = !1;
            return a === -1 ? g ? "/" : "." : g && a === 1 ? "/" : o.slice(0, a);
          };
          function c(o) {
            typeof o != "string" && (o = o + "");
            var p = 0, g = -1, a = !0, f;
            for (f = o.length - 1; f >= 0; --f)
              if (o.charCodeAt(f) === 47) {
                if (!a) {
                  p = f + 1;
                  break;
                }
              } else g === -1 && (a = !1, g = f + 1);
            return g === -1 ? "" : o.slice(p, g);
          }
          i.basename = function(o, p) {
            var g = c(o);
            return p && g.substr(-1 * p.length) === p && (g = g.substr(0, g.length - p.length)), g;
          }, i.extname = function(o) {
            typeof o != "string" && (o = o + "");
            for (var p = -1, g = 0, a = -1, f = !0, y = 0, T = o.length - 1; T >= 0; --T) {
              var E = o.charCodeAt(T);
              if (E === 47) {
                if (!f) {
                  g = T + 1;
                  break;
                }
                continue;
              }
              a === -1 && (f = !1, a = T + 1), E === 46 ? p === -1 ? p = T : y !== 1 && (y = 1) : p !== -1 && (y = -1);
            }
            return p === -1 || a === -1 || y === 0 || y === 1 && p === a - 1 && p === g + 1 ? "" : o.slice(p, a);
          };
          function d(o, p) {
            if (o.filter) return o.filter(p);
            for (var g = [], a = 0; a < o.length; a++)
              p(o[a], a, o) && g.push(o[a]);
            return g;
          }
          var u = "ab".substr(-1) === "b" ? function(o, p, g) {
            return o.substr(p, g);
          } : function(o, p, g) {
            return p < 0 && (p = o.length + p), o.substr(p, g);
          };
        }).call(this, n("_process"));
      }, { _process: 5 }], 5: [function(n, r, i) {
        var s = r.exports = {}, l, c;
        function d() {
          throw new Error("setTimeout has not been defined");
        }
        function u() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            typeof setTimeout == "function" ? l = setTimeout : l = d;
          } catch {
            l = d;
          }
          try {
            typeof clearTimeout == "function" ? c = clearTimeout : c = u;
          } catch {
            c = u;
          }
        })();
        function o(C) {
          if (l === setTimeout)
            return setTimeout(C, 0);
          if ((l === d || !l) && setTimeout)
            return l = setTimeout, setTimeout(C, 0);
          try {
            return l(C, 0);
          } catch {
            try {
              return l.call(null, C, 0);
            } catch {
              return l.call(this, C, 0);
            }
          }
        }
        function p(C) {
          if (c === clearTimeout)
            return clearTimeout(C);
          if ((c === u || !c) && clearTimeout)
            return c = clearTimeout, clearTimeout(C);
          try {
            return c(C);
          } catch {
            try {
              return c.call(null, C);
            } catch {
              return c.call(this, C);
            }
          }
        }
        var g = [], a = !1, f, y = -1;
        function T() {
          !a || !f || (a = !1, f.length ? g = f.concat(g) : y = -1, g.length && E());
        }
        function E() {
          if (!a) {
            var C = o(T);
            a = !0;
            for (var w = g.length; w; ) {
              for (f = g, g = []; ++y < w; )
                f && f[y].run();
              y = -1, w = g.length;
            }
            f = null, a = !1, p(C);
          }
        }
        s.nextTick = function(C) {
          var w = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var O = 1; O < arguments.length; O++)
              w[O - 1] = arguments[O];
          g.push(new _(C, w)), g.length === 1 && !a && o(E);
        };
        function _(C, w) {
          this.fun = C, this.array = w;
        }
        _.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {};
        function I() {
        }
        s.on = I, s.addListener = I, s.once = I, s.off = I, s.removeListener = I, s.removeAllListeners = I, s.emit = I, s.prependListener = I, s.prependOnceListener = I, s.listeners = function(C) {
          return [];
        }, s.binding = function(C) {
          throw new Error("process.binding is not supported");
        }, s.cwd = function() {
          return "/";
        }, s.chdir = function(C) {
          throw new Error("process.chdir is not supported");
        }, s.umask = function() {
          return 0;
        };
      }, {}], 6: [function(n, r, i) {
        r.exports = { name: "ejs", description: "Embedded JavaScript templates", keywords: ["template", "engine", "ejs"], version: "3.1.9", author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)", license: "Apache-2.0", bin: { ejs: "./bin/cli.js" }, main: "./lib/ejs.js", jsdelivr: "ejs.min.js", unpkg: "ejs.min.js", repository: { type: "git", url: "git://github.com/mde/ejs.git" }, bugs: "https://github.com/mde/ejs/issues", homepage: "https://github.com/mde/ejs", dependencies: { jake: "^10.8.5" }, devDependencies: { browserify: "^16.5.1", eslint: "^6.8.0", "git-directory-deploy": "^1.5.1", jsdoc: "^4.0.2", "lru-cache": "^4.0.1", mocha: "^10.2.0", "uglify-js": "^3.3.16" }, engines: { node: ">=0.10.0" }, scripts: { test: "npx jake test" } };
      }, {}] }, {}, [1])(1);
    });
  }(we)), we.exports;
}
on();
const an = (e) => {
  const t = e, n = e.fid, r = e.value.value, i = !!e.value.unit && e.value.unit != "", s = e.value.options, l = e.value.options_img, c = !!Array.isArray(l);
  if (c && l.length < s.length)
    for (var o = l.length; o < s.length; o++)
      _img.push("select/default.png");
  const d = t.img_path ? `${t.img_path}/select/` : "/img/select/";
  var u = "product";
  t.translationContext && (u = t.translationContext);
  var o = 0, p = "";
  e.value.options.forEach((a) => {
    var f = "", y = "";
    a.value && a.label ? (f = a.value, y = HForm.transl(a.label, "products")) : typeof a == "number" ? (f = a, y = a) : typeof a == "string" && (f = a, y = HForm.transl(a, u)), p += `
    				<option ${i ? 'style="text-align: right;"' : ""} value="${f}" ${f === r ? "selected" : ""} 
    				${c ? `data-content="<div class='d-flex justify-content-between'><span>${y}</span><img src='${d}${l[o++]}' width='128px' height='128px'/></div>` : ""}
                  	>${y}</option>`;
  });
  var g = "";
  return o = 0, c && e.value.options.forEach((a) => {
    var f = "";
    a.value && a.label ? (a.value, f = HForm.transl(a.label, "products")) : typeof a == "number" ? f = a : typeof a == "string" && (f = HForm.transl(a, u)), g += `
                        <li>
                          <a role="option" class="dropdown-item" id="bs-select-1-0" tabindex="0" aria-index="${o}">
                            <span class="text">
                              <div class="d-flex justify-content-between">
                                <span style="white-space: normal;place-content: center;">${f}</span>
                                <img src="${d}${l[o++]}" style="width:128px;height:128px;">
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
              </div>
     ${c ? `
     <script type="text/javascript">
      new HU.BtSelect($("div.bootstrap-select#<%= fid %>"));
    <\/script>` : ""}`;
}, ln = (e) => {
  const t = e, n = e.value, r = e.fid, i = e.label;
  var s = t.translationContext ? t.translationContext : "product";
  console.log("field-multiselect"), console.log(t);
  const l = n.value, c = n.separator && n.separator !== "" ? n.separator : ";", d = Array.isArray(l) ? l : l.split(c);
  console.log(d);
  const u = d.length, o = n.units, p = [];
  var g = n.options;
  const a = n.datas, f = typeof multiselect_filter == "object" && typeof n.filter == "string" && typeof multiselect_filter[n.filter] == "function" ? multiselect_filter[n.filter] : null, y = n.labels, T = typeof n.cols == "number" && [1, 2, 3, 4, 6].includes(n.cols) ? n.cols : 1;
  !Array.isArray(g) && typeof f == "function" && (g = f(a));
  var E = 12;
  T === 2 ? E = 6 : T === 3 ? E = 4 : T === 4 ? E = 3 : T === 6 && (E = 2);
  const _ = [], I = [];
  _.length = u, I.length = u, p.length = u;
  for (var C = 0, w = 0; w < u; w++)
    _[w] = [], I[w] = [], p[w] = Array.isArray(o) && !!o[w] && o[w] !== "";
  for (var w = 0; C < g.length; C++) {
    const R = Array.isArray(g[C]) ? g[C] : g[C].split(c);
    if (R.length === u)
      for (w = 0; w < u; w++) {
        const j = Array.isArray(R[w]) ? R[w][R.length - 1] : R[w];
        I[w].includes(j) || (I[w].push(j), _[w].push(R[w]));
      }
  }
  console.log(I);
  for (var w = 0; w < u; w++)
    _[w].sort();
  return console.log("coucou multiselect 2"), console.log(_), `
  <div class="row">` + (() => {
    for (var O = "", R = 0; R < u; R++) {
      const j = Array.isArray(y) ? y[R] : null, ye = _[R];
      console.log("coucou multiselect 3"), O += ` 
    <div class="col-${E}">
      ${j ? `
      <div class="card mt-2 mb-2 border">  
        <div class="card-header h6">
            <label for="${r}_${R}">${HForm.transl(i, s)}${HForm.transl(j, s)}</label>
            <div role="help" field="${r}_${R}"></div>
        </div>` : `
      <div class="card border-0">  `}
        <div class="card-body ${j ? "" : "p-0"}">
            <div class="input-group">
               <select class="form-control" role="multiselect" data-index="${R}" fid="${r}" name="${r}_${R}zzzvalue" placeholder="">
    ` + (() => {
        var se = "";
        return ye.forEach((H) => {
          var P = "", m = "";
          Array.isArray(H) && H.length > 1 ? (P = H[1], m = HForm.transl(H[0], "products")) : H.value && H.label ? (P = H.value, m = HForm.transl(H.label, "products")) : typeof H == "number" ? (P = H, m = H) : typeof H == "string" && (P = H, m = HForm.transl(H, s)), se += `
                    <option ${p[R] ? 'style="text-align: right;"' : ""} 
                        value="${P}" ${P === d[R] ? "selected" : ""}>${m}</option>`;
        }), se;
      })() + `
               </select>
            ${p[R] ? `
              <span class="input-group-text">${o[R]}</span>` : ""}
          </div>
      </div>
    </div>
  </div>`;
    }
    return O;
  })() + `
    <input type="hidden" role="multiselect" name="${r}" value="${l}"/>
  </div>`;
}, cn = (e) => {
  const t = e, n = e.value, r = e.fid, i = e.label;
  var s = n.translationContext ? n.translationContext : t.translationContext ? t.translationContext : "product";
  console.log("field-multicontrol"), console.log(t);
  const l = t.label && i !== "";
  return `
    <div class="col-12" role="fieds-multicontrol" id="${r}">
      <input type="hidden" name="${r}[value][kind]" value="${n.askind ? n.askind : n.kind}">
       ${l ? `
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label id="label${r}">${HForm.transl(i, s)}</label>
            <div role="help" field="${r}"></div>
        </div>` : `
      <div class="card border-0 p-0">`}
        <div class="card-body container ${l ? "" : "p-0"}" aria-labelledby="label${r}">
            <div class="row">` + (() => {
    var c = "";
    return Object.entries(n.value).forEach((d) => {
      var [u, o] = d;
      const p = r.search(/zzz/) < 0 ? `${r}zzzvaluezzzvaluezzz${u}` : `${r}zzzvaluezzz${u}`;
      if (o.unit && o.unit != "", o.label && o.label, o.translationContext && o.translationContext, o.kind) {
        const g = { fid: p };
        $.extend(g, o), g.value = ["number", "text"].includes(o.kind) ? o.value : o, o.kind === "multicontrol" && (g.value = o), c += HForm.template.tplField(g);
      }
    }), c;
  })() + `
            </div>
        </div>
      </div>
    </div>`;
}, un = (e) => `
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
            <img role="${value.role}" style="display: none;" width="100px" height="100px"/>`, fn = (e) => `
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
let M = class S {
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
  static transl = (t, n) => t;
  static templates = [];
  static template = null;
  static getKind(t) {
    return typeof t == "object" && typeof t.kind == "string" && typeof S.ejsByKind[t.kind] == "string" || typeof t == "object" && typeof t.kind == "string" && typeof S.ejsByKind[t.kind] == "object" && typeof S.ejsByKind[t.kind].url == "string" ? t.kind : typeof t;
  }
  static getRootCss(t) {
    return typeof this.rootcss[t] == "string" ? this.rootcss[t] : typeof t == "string" && this.modules.includes(t) ? `/modules/${t}/css/` : typeof this.rootcss.base == "string" ? this.rootcss.base : "/css/";
  }
  static getRootImg(t) {
    var n = "/img/";
    return typeof this.rootimg[t] == "string" ? n = this.rootimg[t] : typeof t == "string" && this.modules.includes(t) ? n = `/modules/${t}/img/` : typeof this.rootimg.base == "string" && (n = this.rootimg.base), `${t}`, `${this.rootimg[t]}${this.modules.includes(t)}${n}`, n;
  }
  static getRootEjs(t) {
    var n = "/ejs/";
    return typeof this.rootejs[t] == "string" ? n = this.rootejs[t] : typeof t == "string" && this.modules.includes(t) ? n = `/modules/${t}/ejs/` : typeof this.rootejs.base == "string" && (n = this.rootejs.base), `${t}`, `${this.rootejs[t]}${this.modules.includes(t)}${n}`, n;
  }
  static getEJSbyKind(t) {
    var n = "/ejs/";
    typeof S.rootejs.base == "string" && (n = S.rootejs.base);
    let r = S.ejsByKind[t];
    var i = "base";
    return z(r) && (r.module !== void 0 && (i = r.module.name), r.url !== void 0 && (r = r.url)), n = S.getRootEjs(i), typeof r == "string" ? `${n}${r}.ejs` : `${n}${t}.ejs`;
  }
  static getCallBackByKind(t) {
    let n = S.ejsByKind[t], r;
    return typeof n == "object" && n.module !== void 0 && (typeof n.module.getLocals == "function" ? r = n.module.getLocals : `${n.module.name}`), r;
  }
  static getEJSForContent(t) {
    return S.getEJSbyKind(S.getKind(t));
  }
  static onloadHtmlEJS(t, n, r, i, s, l) {
    `${$(t)}${n}`;
    const c = S.getKind(r.value);
    if (typeof s == "function" && s(), typeof i == "function") i();
    else if (c == "array") {
      var d = 0;
      value.forEach((u) => {
        let o = `#${r.fid}zzz${d}`;
        S.htmlEJS($(o), S.getEJSForContent(u), { fid: `${o}`, label: "#{gid}", value: u }), d++;
      });
    } else if (c == "object")
      for (const [u, o] of Object.entries(r.value)) {
        let p = `#${r.fid}zzz${u}`;
        S.htmlEJS($(p), S.getEJSForContent(o), { fid: `${r.fid}zzz${u}`, label: u, value: o });
      }
  }
  static appendEJS(t, n, r, i) {
    `${$(t).attr("id")}${n}`;
    var s = 0;
    const l = function() {
      return s++, $(t).find('[role="waitIncludeEJS"]').length === 0 && typeof i == "function" ? i() : s < 6 ? window.setTimeout(l, 200) : null;
    }, c = function(d, u, o) {
      if ($(t.length > 0)) {
        console.log($(t)), console.log(d), console.log(r);
        const p = ejs.render(d, r);
        if (console.log(p), [`
`, ""].includes(p) ? console.error(`ejs.render bad return, typeof:${typeof p} !!!`) : $(t).append(p), $(t).find('[role="waitIncludeEJS"]').length === 0 && typeof i == "function") return i();
        if (typeof i == "function") return l();
      }
    };
    t !== null && t.length > 0 && n !== "" && Ve(n, "", c);
  }
  static htmlEJS(t, n, r, i, s) {
    var l = 0;
    const c = function() {
      l++;
      const u = $(t).find('[role="waitIncludeEJS"]');
      return `${u.length}${l}`, u.length === 0 ? S.onloadHtmlEJS(t, n, r, i, s) : l < 6 ? window.setTimeout(c, 200) : console.error(`unable to load waitIncludeEJS : ${u.length}`);
    }, d = async function(u, o, p) {
      var g = r;
      typeof r.kind == "string" && typeof r.callbackGetLocals == "function" && (g = r.callbackGetLocals(r.kind, r)), g.img_path = S.getRootImg();
      const a = await ejs.render(u, g, { debug: !1 });
      return await $(t).html(a), window.setTimeout(c, 200);
    };
    t !== null && t.length > 0 && n !== "" && Ve(n, "", d);
  }
  static sortFields(t, n) {
    const r = [], i = n.slice(), s = {};
    return i.forEach((l) => {
      s[l.fid] = l;
    }), Array.isArray(t) && t.forEach((l) => {
      if (Array.isArray(l) && l.length > 1) {
        const c = {}, d = c[l[0]] = [];
        l.shift(), l.forEach((u) => {
          const o = u.split(":"), p = o[0], g = s[p];
          if (z(g)) {
            const a = i.indexOf(g);
            a > -1 && i.splice(a, 1), o.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(o[1])) && (g.bt_nb_cols = parseInt(o[1])), d.push(g);
          }
        }), r.push(c);
      } else if (typeof l == "string") {
        const c = l.split(":"), d = c[0], u = s[d];
        if (z(u)) {
          const o = i.indexOf(u);
          o > -1 && i.splice(o, 1), c.length > 1 && [3, 4, 5, 6, 7, 8, 9, 12].includes(parseInt(c[1])) && (u.bt_nb_cols = parseInt(c[1])), r.push(u);
        }
      }
    }), i.forEach((l) => r.push(l)), r;
  }
  $find(t) {
    const n = $(this.element).find(t);
    return n.length > 0 ? n : typeof S.mainbar == "string" ? $(S.mainbar).find(t) : $([]);
  }
  selector_effect_show_target(t) {
    this.$find("#" + t.join(",#")).show();
  }
  selector_effect_enabled_target(t) {
    const n = {};
    t.forEach((r) => {
      const i = r.split(":"), s = i[0];
      i.shift(), n[s] = i;
    }), Object.entries(n).forEach((r) => {
      const [i, s] = r, l = this.$find("input[type=radio][name='" + i + "']");
      s.length > 0 ? s.forEach((d) => {
        l.length > parseInt(d) && (l[parseInt(d)].disabled = !1);
      }) : l.each(function(d, u) {
        u.disabled = !1;
      });
      const c = this.$find("select[name='" + i + "zzzvalue']");
      if (s.length > 0) {
        const d = c.find("option");
        s.forEach((u) => {
          d.length > parseInt(u) && (d[parseInt(s[0])].disabled = !1);
        });
      } else c.length > 0 && (c[0].disabled = !1);
    });
  }
  selector_effect_disabled_target(t) {
    const n = {};
    t.forEach((r) => {
      const i = r.split(":"), s = i[0];
      i.shift(), n[s] = i;
    }), Object.entries(n).forEach((r) => {
      const [i, s] = r, l = this.$find("input[type=radio][name='" + i + "']");
      s.length > 0 ? s.forEach((d) => {
        l.length > parseInt(d) && (l[parseInt(d)].disabled = !0);
      }) : l.each(function(d, u) {
        u.disabled = !0;
      });
      const c = this.$find("select[name='" + i + "zzzvalue']");
      if (s.length > 0) {
        const d = c.find("option");
        s.forEach((u) => {
          d.length > parseInt(u) && (d[parseInt(s[0])].disabled = !0);
        });
      } else c.length > 0 && (c[0].disabled = !0);
    });
  }
  selector_effect_hide_target(t) {
    const n = "#" + t.join(",#");
    this.$find(n).hide();
  }
  selector_effect_set_target(t, n) {
    const r = {};
    t.forEach((d) => {
      const u = d.split(":"), o = u[0];
      u.shift(), r[o] = u;
    });
    const i = Object.keys(r), s = "input[name=" + i.join("],input[name=") + "]";
    this.$find(s).each(function(d, u) {
      const o = $(u), p = r[o.attr("name")];
      Array.isArray(p) && p.length > 0 ? o.val(p[0]) : n && o.val(n);
    });
    const l = "select[name=" + i.join("zzzvalue],select[name=") + "zzzvalue]", c = "select[name=" + i.join("zzzvalue] option,select[name=") + "zzzvalue] option";
    this.$find(`${c}`).each(function(d, u) {
      const o = $(u);
      var p = o.parent().attr("name"), g = [];
      p && (g = r[p.split("zzzvalue")[0]]);
      var a = null;
      Array.isArray(g) && g.length > 0 ? a = g : n && (a = n), typeof a == "string" && o.attr("value") === a || Array.isArray(a) && a.length > 0 && o.attr("value") === a[0] ? o.parent()[0].selectedIndex = o[0].index : o.attr("selected", !1);
    }), n !== "stop_propagate" && this.$find(`${l}`).trigger("change");
  }
  selector_effect_select_target(t, n) {
    const r = {};
    t.forEach((i) => {
      const s = i.split(":"), l = s[0];
      s.shift(), r[l] = s;
    }), Object.entries(r).forEach((i) => {
      const [s, l] = i, c = this.$find("input[type=radio][name='" + s + "']");
      l.length > 0 && c.length > parseInt(l[0]) && (c[parseInt(l[0])].checked = !0);
    });
  }
  selector_effect_show_options(t, n) {
    const r = {};
    t.forEach((c) => {
      const d = c.split(":"), u = d[0];
      d.shift(), r[u] = d;
    });
    const i = Object.keys(r), s = "select[name='" + i.join("zzzvalue'] option,select[name='") + "zzzvalue'] option", l = "select[name='" + i.join("'] option,select[name='") + "'] option";
    console.log("selector_effect_show_options()"), console.log(l), console.log(r), this.$find(`${l}, ${s}`).each(function(c, d) {
      const u = $(d), o = d.value ? d.value : u.attr("value"), p = parseInt(o), g = u.parents("select").attr("name").split("zzzvalue"), a = r[g[0]];
      console.log(`branch on ${g[0]}>${o}, args :`), console.log(a);
      var f = null;
      if (Array.isArray(a) && a.length > 0 ? f = a : n && (f = n), typeof f == "string" && u.attr("value") === f)
        u.show();
      else if (Array.isArray(f) && f.length > 0) {
        console.log("toselect"), console.log(f);
        const T = f.slice();
        T.shift(), console.log("valArr"), console.log(T);
        const E = [];
        var y = 0;
        const _ = E.length = T.length;
        for (; y < _; y++) E[y] = parseInt(T[y]);
        console.log("valArrInt"), console.log(E), f[0] === "<" && f.length > 1 && p < parseInt(f[1]) || f[0] === "<=" && f.length > 1 && p <= parseInt(f[1]) || f[0] === ">" && f.length > 1 && p > parseInt(f[1]) || f[0] === ">=" && f.length > 1 && p >= parseInt(f[1]) || f[0] === "%" && f.length > 2 && p >= parseInt(f[1]) && p <= parseInt(f[2]) || f[0] === "=" && T.includes(o) || f[0] === "=" && p && E.includes(p) || f[0] === "!=" && p && !E.includes(p) || f[0] === "!=" && !T.includes(o) ? u.show() : u.hide();
      } else u.hide();
    });
  }
  onChangeMultiselect(t, n) {
    console.log(`onChangeMultiselect(${t},${n})`);
    const r = this.locals;
    var i = null, s = null;
    r.fields.forEach((E) => {
      if (console.log(E), E.fid === t) i = E.value;
      else {
        const _ = tn(E, t, E.fid + "zzz", "zzz");
        _ && (s = i, i = _);
      }
    });
    const l = this.$find(`select[role=multiselect][fid=${t}]`), c = this.$find(`input[role=multiselect][name=${t}]`);
    var d = parseInt(n);
    console.log(d), console.log(l), console.log(s), console.log(i);
    const u = [];
    l.each(function(E, _) {
      u.push($(_).val());
    }), console.log(u);
    const o = $(l[d + 1]);
    if (i) {
      var p = i.options;
      const E = i.datas;
      var g = i.filter;
      g = typeof multiselect_filter == "object" && typeof g == "string" && typeof multiselect_filter[g] == "function" ? multiselect_filter[g] : null, !Array.isArray(p) && typeof g == "function" && (p = g(E)), i.options = p;
    }
    if (l.length > 0 && d < l.length - 1 && i && Array.isArray(i.options)) {
      const E = [], _ = i.options.length, I = i.separator && i.separator !== "" ? i.separator : ";";
      E.length = _;
      for (var a = 0; a < _; a++)
        E[a] = Array.isArray(i.options[a]) ? i.options[a] : i.options[a].split(I);
      console.log(E);
      const C = [];
      for (var f = 0; f < E.length; f++) {
        for (var y = !0, a = 0; a <= d; a++) {
          const j = E[f][a];
          y = y && (Array.isArray(j) && j.at(-1) === u[a] || j === u[a]);
        }
        y && C.push(E[f]);
      }
      console.log(C);
      const w = [];
      C.forEach((R) => {
        const j = R[d + 1];
        w.push(Array.isArray(j) ? j.at(-1) : j);
      }), console.log(w);
      const O = $(o).find("option");
      console.log(O);
      var T = O.length - 1;
      O.each(function(R, j) {
        w.includes(j.value) ? ($(j).show(), T = R < T ? R : T) : $(j).hide();
      }), console.log(o), w.includes(o.val()) || (o[0].selectedIndex = T);
    }
    d < l.length - 2 ? o.trigger("change") : c.val(u.join(";"));
  }
  initMultiSelectEvents() {
    const t = this, n = this.$find("select[role=multiselect]");
    console.log(`initMultiSelectEvents on ${n.length}`), n.off("change").on("change", t, function(r) {
      console.log("multiselect change !"), console.log(r);
      const i = $(r.currentTarget), s = i.attr("data-index");
      t.onChangeMultiselect(i.attr("fid"), s);
    }), this.$find('select[role="multiselect"][data-index="0"]').trigger("change");
  }
  setUiCustomizerEvents() {
    console.log("setUiCustomizerEvents"), this.initMultiSelectEvents();
    const t = this, n = this.locals, r = {
      show: t.selector_effect_show_target,
      hide: t.selector_effect_hide_target,
      set: t.selector_effect_set_target,
      select: t.selector_effect_select_target,
      enabled: t.selector_effect_enabled_target,
      disabled: t.selector_effect_disabled_target,
      show_options: t.selector_effect_show_options
    };
    function i(s, l, c) {
      console.log(`on ${l} change : ${c}`), console.log(c);
      const d = $(s.target).val(), u = parseFloat(d);
      z(c) && Object.entries(c).forEach((o) => {
        const [p, g] = o, a = p.split("|"), f = [], y = [], T = [], E = [];
        a.forEach((_) => {
          _.length === 0 || (_[0] === "<" ? T.push(parseFloat(_.substring(1, _.length))) : _[0] === ">" ? E.push(parseFloat(_.substring(1, _.length))) : _[0] === "!" ? y.push(_.substring(1, _.length)) : f.push(_));
        }), (f.includes(d) || y.length > 0 && !y.includes(d) || u !== NaN && T.length > 0 && u < T[0] || u !== NaN && E.length > 0 && u > E[0]) && z(g) && Object.entries(g).forEach((_) => {
          const [I, C] = _, w = I.split(":"), O = r[w[0]];
          var R = w[0];
          w.length > 1 && (R = w[1]), typeof O == "function" && Array.isArray(C) && O.call(t, C, R);
        });
      });
    }
    z(n.user_interface_organizer) && z(n.user_interface_organizer.onchange_effects) && Object.entries(n.user_interface_organizer.onchange_effects).forEach((s) => {
      const [l, c] = s;
      this.$find(`select[name=${l}zzzvalue]`).on("change", function(d) {
        i(d, l, c);
      }).trigger("change"), this.$find(`input[name=${l}]`).on("change", function(d) {
        i(d, l, c);
      }).trigger("change");
    });
  }
  triggerIfFieldsLoaded() {
    const t = [];
    this.locals.fields.forEach((n) => {
      n.toBefilled && t.push(n.fid);
    }), this.locals.displayed_fields.length === t.length && $(this.element).trigger("HFORM_FIELDS_DISPLAYED");
  }
  add2displayed(t) {
    `${t.fid}`, t.fid ? this.locals.displayed_fields.includes(t.fid) ? (`${t.fid}`, void 0) : this.locals.displayed_fields.push(t.fid) : (console.error("field with no fid"), this.locals.displayed_fields.push(t)), this.triggerIfFieldsLoaded();
  }
  /****************************************************
   * 
   *					APIs
   *
   * ***************************************************/
  static debugOnchange(t) {
    console.log(t), alert(JSON.stringify(t.getValues()));
  }
  constructor(t, n) {
    S.instances.push(this), this.tpl = n, this.element = t, S.template = n.template && S.templates[n.template] ? S.templates[n.template] : S.templates[0], Array.isArray(t) && t.length > 0 ? t[0].hform = this : t && (t.hform = this), this.locals = {
      fields: [],
      fieldIds: [],
      displayed_fields: [],
      malformed_fields: []
    }, $.extend(this.locals, n), Array.isArray(this.locals.fields) && this.locals.fields.forEach((r) => {
      r.fid && !this.locals.fieldIds.includes(r.fid) && this.locals.fieldIds.push(r.fid);
    }), this.onchange = S.debugOnchange, typeof n.onchange == "function" && (this.onchange = n.onchange);
  }
  display(t) {
    const n = this, r = function() {
      n.setUiCustomizerEvents(), typeof catllback == "function" && t(n), typeof n.locals.onload == "function" && n.locals.onload(n);
    };
    $(this.element).on("HFORM_FIELDS_DISPLAYED", r);
    const i = this.locals;
    i.fields;
    const s = function() {
      var c = i.fields.slice();
      c.forEach((d) => {
        const u = S.getKind(d.value), o = S.getCallBackByKind(u);
        var p = d;
        typeof o == "function" && z(p) && (p.kind = u, p.callbackGetLocals = o);
        var g = S.getEJSForContent(d.value);
        d.unit && (d.max || d.min || d.step) && (g = S.getEJSbyKind("number")), `${d.fid}${g}`, d.fid ? S.htmlEJS(
          n.$find(`.need-content#${d.fid}`),
          g,
          // HForm.getEJSForContent(field.value),
          p,
          null,
          sn(n.add2displayed, n, d)
        ) : i.malformed_fields.push(d);
      });
    }, l = i;
    $(this.element).html(S.template.render(l)), this.triggerIfFieldsLoaded(), s();
  }
  setValues(t = {}) {
  }
  getValues() {
    const t = this.locals;
    t.fields;
    var n = {};
    t.fields.forEach((i) => n[i.fid] = i.value);
    var r = "";
    return this.$find(`${r} input,textarea,select`).each(function(i, s) {
      var l = null;
      (["INPUT", "TEXTAREA"].includes(s.tagName) || s.tagName === "SELECT") && (l = $(s).val());
      const c = $(s).attr("name");
      if (`${s.tagName}${c}`, t.fieldIds.includes(c)) {
        if (s.tagName === "INPUT" && $(s).attr("type") === "file")
          l = n[c];
        else {
          l = decodeURIComponent(l);
          try {
            l = JSON.parse(l);
          } catch {
          }
        }
        n[c] = l;
      } else if (typeof c == "string" && c.match(/zzz/) && $(s).attr("type") !== "hidden") {
        const f = c.split("zzz");
        for (var d = n, u = 0; u < f.length - 1; u++) {
          var o = f[u];
          d[o] !== void 0 ? d = d[o] : d[o] = {};
        }
        d[f[f.length - 1]], d[f[f.length - 1]] = l, d[f[f.length - 1]];
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && !c.match(/[]/) && ($(s).attr("type") === "checkbox" && $(s).attr("checked") || ["text", "hidden"].includes($(s).attr("type")) && l !== "" || ["SELECT", "TEXTAREA"].includes(s.tagName))) {
        var p = c.split("["), g = p.at(-1).split("]");
        g.length === 2 && g[1] !== "" && p.push(g[1]);
        for (var a = [], d = [n], u = 0; u < p.length; u++) {
          p[u];
          var o = p[u];
          o.at(-1) === "]" && (o = o.slice(0, -1)), a.push(o), typeof d[u][o] == "object" || (d[u][o] = {}), d.push(d[u][o]);
        }
        d.at(-2), d.at(-2)[a.at(-1)] = l, d.at(-2);
      } else if (typeof c == "string" && c.match(/[\[\w\]+]/) && c.match(/[]/) && ($(s).attr("type") === "checkbox" && $(s).attr("checked") || ["text", "hidden"].includes($(s).attr("type")) && l !== "")) {
        const y = c.split("[]")[0].split("[");
        for (var a = [], d = [n], u = 0; u < y.length - 1; u++) {
          y[u];
          var o = y[u];
          o.at(-1) === "]" && (o = o.slice(0, -1)), a.push(o), typeof d[u][o] == "object" || (d[u][o] = {}), d.push(d[u][o]);
        }
        d.at(-2);
        const _ = d.at(-2)[a.at(-1)];
        Array.isArray(_) ? _.push(val) : d.at(-2)[a.at(-1)] = [l], d.at(-2);
      }
    }), Object.entries(n).forEach((i) => {
      const [s, l] = i;
      t.fieldIds.includes(s) ? z(l) && l.value && (n[s] = l.value) : delete n[s];
    }), t.formJson = n, n;
  }
};
window.includeEJS = function(e, t, n = "div", r = "includeEJS") {
  let i = uniqid("includeEJS"), s = t, l = M.getEJSbyKind(e);
  var c = 0;
  const d = async function(o, p, g) {
    c++, log(`${r}(${e})->todo(${i})`), log(o), log(s);
    const a = $(`#${i}`), f = ejs.render(o, s);
    return a.length > 0 && typeof f == "string" ? a.replaceWith(f) : a.length === 0 && typeof f == "string" && c < 10 ? (console.log(`unable to find includeEJS anchor element from id: ${i} => retry in 200ms`), window.setTimeout(d, 200, o, p, g)) : a.length === 0 && typeof f == "string" ? console.error(`unable to replace includeEJS anchor element from id: ${i}, cause to many try > 10 !!!`) : console.error(`unable to replace includeEJS anchor element from id: ${i}, cause rendering is malformed`), 0;
  }, u = JSON.stringify(t);
  return log(`EJS url: ${l}`), typeof l == "string" && l !== "" && l !== "undefined" && fetchEJS(l, t, d), log(`includeEJS, create tmp element with id: ${i}`), `<${n} id="${i}" role="${r}" kind="${e}" param="${u}"></${n}>`;
};
window.waitIncludeEJS = function(e, t, n = "div") {
  return window.includeEJS(e, t, n, "waitIncludeEJS");
};
M.templates.common = {
  tplKind: {
    text: (e) => `
        	      <input type="text" name="${e.fid}" id="${e.fid}" 
        	      	class="form-control ${e.unit ? "text-end" : ""}" 
        	      	placeholder="${e.placeholder ? M.transl(filed.placeholder, tContext) : ""}" 
        	      	style="min-width: 50px" 
        	      	value="${e.value}" 
        			${e.require ? "require" : ""}
        	      	aria-labelledby="label${e.fid}">
        	`,
    number: (e) => `
        	      <input type="number" name="${e.fid}" id="${e.fid}" 
        	      	class="form-control text-end"
        	      	placeholder="${e.placeholder ? M.transl(filed.placeholder, tContext) : ""}" 
        	      	style="min-width: 50px" 
        	      	value="${e.value}" 
        			min="${e.min}"
        			max="${e.max}"
        			step="${e.step}"
        			${e.require ? "require" : ""}
        	      	aria-labelledby="label${e.fid}">
        	`,
    imgFile: un,
    imgFileArchive: fn,
    "tatoo-img": (e) => "",
    "tatoo-text": (e) => "",
    select: an,
    multiselect: ln,
    multicontrol: cn
  }
};
M.templates.bootstrap5v1 = {
  tplField: (e) => {
    const t = e.fid, n = e.value, r = e.translationContext ? e.translationContext : "product", i = !!e.label && e.label !== "", s = !!e.unit && e.unit != "", l = !!n.require && !!n.invalid_msg, c = {
      col: () => {
        var f = "col-12";
        return e.bt_nb_cols ? f = `col col-sm-12 col-lg-${e.bt_nb_cols}` : z(n) && n.kind === "multiselect" ? f = "col col-12" : !z(n) || z(n) && ["imgFile"].includes(n.kind) ? f = "col col-sm-12 col-md-6 col-lg-4" : z(n) && n.kind === "select" && (f = "col col-sm-12 col-lg-6"), f;
      },
      card: () => i ? "card mt-2 mb-2 border" : "card border-0",
      cardBody: () => "card-body",
      cardHeader: () => "card-header h6"
    }, d = i ? `<div class="${c.cardHeader()}">
            <label id="label${t}">${M.transl(e.label, r)}</label>
            <div role="help" field="${t}"></div>
        </div>` : "", u = s ? `<span class="input-group-text">${e.unit}</span>` : "", o = l ? `<div class="invalid-feedback">${_val.invalid_msg}</div>` : "", p = z(n) && typeof n.kind == "string" ? n.kind : e.min && e.max ? "number" : "text", g = M.templates.common.tplKind[p] ? M.templates.common.tplKind[p](e) : "", a = g === "";
    return e.toBefilled = a, `
              <div class="${c.col()}">
                <div class="${c.card()}">  
                 ${d}
                  <div class="${c.cardBody()}">
                    <div class="input-group ${a ? "need-content" : ""}" id="${t}">
    				${g}
                    ${u} 
                    </div>
                  ${o}     
                  </div>
                </div>
              </div>`;
  },
  tplGroup: (e) => {
    const t = e.gid, n = () => {
      var r = "";
      return e.fields.forEach((i) => r += M.templates.bootstrap5v1.tplField(i)), r;
    };
    return `
     <div class="col-12" role="fieds-group" id="${t}">
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label for="${t}">${M.transl(t, "products")}</label>
            <div role="help" field="${t}"></div>
        </div>
        <div class="card-body container">
            <div class="row">
     ${n()}
            </div>
        </div>
    </div>
    </div>`;
  },
  render: (e) => `
          <div class="container"> 
            <div class="row">
              <form class="needs-validation" novalidate>
              ${(() => {
    var n = "";
    return M.sortFields(e.user_interface_organizer, e.fields).forEach((i) => {
      typeof i.fid == "string" ? n += M.templates.bootstrap5v1.tplField(i) : z(i) && Object.entries(i).forEach((s) => {
        var [l, c] = s;
        Array.isArray(c) && c.length > 0 && (n += M.templates.bootstrap5v1.tplGroup({ gid: l, fields: c }));
      });
    }), n;
  })()}
              </form>
            </div>
          </div>
`
};
const Te = {
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
}, dn = {
  MATERIAL_SELECTOR: {
    kind: "multiselect",
    value: "PVC Expanse;WHITE;10",
    options: Te.MATERIAL_CSV,
    labels: ["Kind", "Color", "Thickness"],
    units: ["", "", "mm"],
    separator: ";",
    cols: 3,
    // "datas" : "CALLFUNC(fetch,#POS1_ALIAS�API_GET_POS1_SELECTOR_DATAS)",
    context: {},
    filter: "pos1_selector_filter"
  }
};
M.tpl_case1 = {
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
      value: dn.MATERIAL_SELECTOR
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
        options: Te.ITEM_NUMBER
      }
    },
    {
      fid: "numWalls",
      label: "Number of vertical walls",
      unit: "",
      value: {
        kind: "select",
        value: 2,
        options: Te.ITEM_NUMBER
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
window.HForm = M;
window.dispatchEvent(new Event("HFORM_READY"));
window.addEventListener("load", () => {
  $('div[role="DemoHopesForm"]').each((e, t) => {
    new M($(t), M.tpl_case1).display();
  });
});
export {
  M as default
};
