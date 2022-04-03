(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [809],
  {
    9047: function (e, t, i) {
      !(function (e) {
        "use strict";
        e.defineMode(
          "markdown",
          function (t, i) {
            var n = e.getMode(t, "text/html"),
              o = "null" == n.name;
            function r(i) {
              if (e.findModeByName) {
                var n = e.findModeByName(i);
                n && (i = n.mime || n.mimes[0]);
              }
              var o = e.getMode(t, i);
              return "null" == o.name ? null : o;
            }
            void 0 === i.highlightFormatting && (i.highlightFormatting = !1),
              void 0 === i.maxBlockquoteDepth && (i.maxBlockquoteDepth = 0),
              void 0 === i.taskLists && (i.taskLists = !1),
              void 0 === i.strikethrough && (i.strikethrough = !1),
              void 0 === i.emoji && (i.emoji = !1),
              void 0 === i.fencedCodeBlockHighlighting &&
                (i.fencedCodeBlockHighlighting = !0),
              void 0 === i.fencedCodeBlockDefaultMode &&
                (i.fencedCodeBlockDefaultMode = "text/plain"),
              void 0 === i.xml && (i.xml = !0),
              void 0 === i.tokenTypeOverrides && (i.tokenTypeOverrides = {});
            var a = {
              header: "header",
              code: "comment",
              quote: "quote",
              list1: "variable-2",
              list2: "variable-3",
              list3: "keyword",
              hr: "hr",
              image: "image",
              imageAltText: "image-alt-text",
              imageMarker: "image-marker",
              formatting: "formatting",
              linkInline: "link",
              linkEmail: "link",
              linkText: "link",
              linkHref: "string",
              em: "em",
              strong: "strong",
              strikethrough: "strikethrough",
              emoji: "builtin",
            };
            for (var s in a)
              a.hasOwnProperty(s) &&
                i.tokenTypeOverrides[s] &&
                (a[s] = i.tokenTypeOverrides[s]);
            var m = /^([*\-_])(?:\s*\1){2,}\s*$/,
              l = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              u = /^\[(x| )\](?=\s)/i,
              d = i.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              c = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
              p = /^[^#!\[\]*_\\<>` "'(~:]+/,
              h = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
              f = /^\s*\[[^\]]+?\]:.*$/,
              x =
                /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
              g = "    ";
            function k(e, t, i) {
              return (t.f = t.inline = i), i(e, t);
            }
            function y(e, t, i) {
              return (t.f = t.block = i), i(e, t);
            }
            function v(e) {
              return !e || !/\S/.test(e.string);
            }
            function D(t) {
              if (
                ((t.linkTitle = !1),
                (t.linkHref = !1),
                (t.linkText = !1),
                (t.em = !1),
                (t.strong = !1),
                (t.strikethrough = !1),
                (t.quote = 0),
                (t.indentedCode = !1),
                t.f == b)
              ) {
                var i = o;
                if (!i) {
                  var r = e.innerMode(n, t.htmlState);
                  i =
                    "xml" == r.mode.name &&
                    null === r.state.tagStart &&
                    !r.state.context &&
                    r.state.tokenize.isInText;
                }
                i && ((t.f = w), (t.block = C), (t.htmlState = null));
              }
              return (
                (t.trailingSpace = 0),
                (t.trailingSpaceNewLine = !1),
                (t.prevLine = t.thisLine),
                (t.thisLine = { stream: null }),
                null
              );
            }
            function C(t, n) {
              var o = t.column() === n.indentation,
                s = v(n.prevLine.stream),
                p = n.indentedCode,
                x = n.prevLine.hr,
                g = !1 !== n.list,
                y = (n.listStack[n.listStack.length - 1] || 0) + 3;
              n.indentedCode = !1;
              var D = n.indentation;
              if (
                null === n.indentationDiff &&
                ((n.indentationDiff = n.indentation), g)
              ) {
                for (n.list = null; D < n.listStack[n.listStack.length - 1]; )
                  n.listStack.pop(),
                    n.listStack.length
                      ? (n.indentation = n.listStack[n.listStack.length - 1])
                      : (n.list = !1);
                !1 !== n.list &&
                  (n.indentationDiff = D - n.listStack[n.listStack.length - 1]);
              }
              var C =
                  !s &&
                  !x &&
                  !n.prevLine.header &&
                  (!g || !p) &&
                  !n.prevLine.fencedCodeEnd,
                b =
                  (!1 === n.list || x || s) && n.indentation <= y && t.match(m),
                E = null;
              if (
                n.indentationDiff >= 4 &&
                (p || n.prevLine.fencedCodeEnd || n.prevLine.header || s)
              )
                return t.skipToEnd(), (n.indentedCode = !0), a.code;
              if (t.eatSpace()) return null;
              if (
                o &&
                n.indentation <= y &&
                (E = t.match(d)) &&
                E[1].length <= 6
              )
                return (
                  (n.quote = 0),
                  (n.header = E[1].length),
                  (n.thisLine.header = !0),
                  i.highlightFormatting && (n.formatting = "header"),
                  (n.f = n.inline),
                  S(n)
                );
              if (n.indentation <= y && t.eat(">"))
                return (
                  (n.quote = o ? 1 : n.quote + 1),
                  i.highlightFormatting && (n.formatting = "quote"),
                  t.eatSpace(),
                  S(n)
                );
              if (
                !b &&
                !n.setext &&
                o &&
                n.indentation <= y &&
                (E = t.match(l))
              ) {
                var w = E[1] ? "ol" : "ul";
                return (
                  (n.indentation = D + t.current().length),
                  (n.list = !0),
                  (n.quote = 0),
                  n.listStack.push(n.indentation),
                  (n.em = !1),
                  (n.strong = !1),
                  (n.code = !1),
                  (n.strikethrough = !1),
                  i.taskLists && t.match(u, !1) && (n.taskList = !0),
                  (n.f = n.inline),
                  i.highlightFormatting &&
                    (n.formatting = ["list", "list-" + w]),
                  S(n)
                );
              }
              return o && n.indentation <= y && (E = t.match(h, !0))
                ? ((n.quote = 0),
                  (n.fencedEndRE = new RegExp(E[1] + "+ *$")),
                  (n.localMode =
                    i.fencedCodeBlockHighlighting &&
                    r(E[2] || i.fencedCodeBlockDefaultMode)),
                  n.localMode && (n.localState = e.startState(n.localMode)),
                  (n.f = n.block = F),
                  i.highlightFormatting && (n.formatting = "code-block"),
                  (n.code = -1),
                  S(n))
                : n.setext ||
                  (!(
                    (C && g) ||
                    n.quote ||
                    !1 !== n.list ||
                    n.code ||
                    b ||
                    f.test(t.string)
                  ) &&
                    (E = t.lookAhead(1)) &&
                    (E = E.match(c)))
                ? (n.setext
                    ? ((n.header = n.setext),
                      (n.setext = 0),
                      t.skipToEnd(),
                      i.highlightFormatting && (n.formatting = "header"))
                    : ((n.header = "=" == E[0].charAt(0) ? 1 : 2),
                      (n.setext = n.header)),
                  (n.thisLine.header = !0),
                  (n.f = n.inline),
                  S(n))
                : b
                ? (t.skipToEnd(), (n.hr = !0), (n.thisLine.hr = !0), a.hr)
                : "[" === t.peek()
                ? k(t, n, T)
                : k(t, n, n.inline);
            }
            function b(t, i) {
              var r = n.token(t, i.htmlState);
              if (!o) {
                var a = e.innerMode(n, i.htmlState);
                (("xml" == a.mode.name &&
                  null === a.state.tagStart &&
                  !a.state.context &&
                  a.state.tokenize.isInText) ||
                  (i.md_inside && t.current().indexOf(">") > -1)) &&
                  ((i.f = w), (i.block = C), (i.htmlState = null));
              }
              return r;
            }
            function F(e, t) {
              var n,
                o = t.listStack[t.listStack.length - 1] || 0,
                r = t.indentation < o,
                s = o + 3;
              return t.fencedEndRE &&
                t.indentation <= s &&
                (r || e.match(t.fencedEndRE))
                ? (i.highlightFormatting && (t.formatting = "code-block"),
                  r || (n = S(t)),
                  (t.localMode = t.localState = null),
                  (t.block = C),
                  (t.f = w),
                  (t.fencedEndRE = null),
                  (t.code = 0),
                  (t.thisLine.fencedCodeEnd = !0),
                  r ? y(e, t, t.block) : n)
                : t.localMode
                ? t.localMode.token(e, t.localState)
                : (e.skipToEnd(), a.code);
            }
            function S(e) {
              var t = [];
              if (e.formatting) {
                t.push(a.formatting),
                  "string" === typeof e.formatting &&
                    (e.formatting = [e.formatting]);
                for (var n = 0; n < e.formatting.length; n++)
                  t.push(a.formatting + "-" + e.formatting[n]),
                    "header" === e.formatting[n] &&
                      t.push(
                        a.formatting + "-" + e.formatting[n] + "-" + e.header
                      ),
                    "quote" === e.formatting[n] &&
                      (!i.maxBlockquoteDepth || i.maxBlockquoteDepth >= e.quote
                        ? t.push(
                            a.formatting + "-" + e.formatting[n] + "-" + e.quote
                          )
                        : t.push("error"));
              }
              if (e.taskOpen)
                return t.push("meta"), t.length ? t.join(" ") : null;
              if (e.taskClosed)
                return t.push("property"), t.length ? t.join(" ") : null;
              if (
                (e.linkHref
                  ? t.push(a.linkHref, "url")
                  : (e.strong && t.push(a.strong),
                    e.em && t.push(a.em),
                    e.strikethrough && t.push(a.strikethrough),
                    e.emoji && t.push(a.emoji),
                    e.linkText && t.push(a.linkText),
                    e.code && t.push(a.code),
                    e.image && t.push(a.image),
                    e.imageAltText && t.push(a.imageAltText, "link"),
                    e.imageMarker && t.push(a.imageMarker)),
                e.header && t.push(a.header, a.header + "-" + e.header),
                e.quote &&
                  (t.push(a.quote),
                  !i.maxBlockquoteDepth || i.maxBlockquoteDepth >= e.quote
                    ? t.push(a.quote + "-" + e.quote)
                    : t.push(a.quote + "-" + i.maxBlockquoteDepth)),
                !1 !== e.list)
              ) {
                var o = (e.listStack.length - 1) % 3;
                o
                  ? 1 === o
                    ? t.push(a.list2)
                    : t.push(a.list3)
                  : t.push(a.list1);
              }
              return (
                e.trailingSpaceNewLine
                  ? t.push("trailing-space-new-line")
                  : e.trailingSpace &&
                    t.push(
                      "trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")
                    ),
                t.length ? t.join(" ") : null
              );
            }
            function E(e, t) {
              if (e.match(p, !0)) return S(t);
            }
            function w(t, o) {
              var r = o.text(t, o);
              if ("undefined" !== typeof r) return r;
              if (o.list) return (o.list = null), S(o);
              if (o.taskList)
                return (
                  " " === t.match(u, !0)[1]
                    ? (o.taskOpen = !0)
                    : (o.taskClosed = !0),
                  i.highlightFormatting && (o.formatting = "task"),
                  (o.taskList = !1),
                  S(o)
                );
              if (
                ((o.taskOpen = !1),
                (o.taskClosed = !1),
                o.header && t.match(/^#+$/, !0))
              )
                return i.highlightFormatting && (o.formatting = "header"), S(o);
              var s = t.next();
              if (o.linkTitle) {
                o.linkTitle = !1;
                var m = s;
                "(" === s && (m = ")");
                var l =
                  "^\\s*(?:[^" +
                  (m = (m + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) +
                  "\\\\]+|\\\\\\\\|\\\\.)" +
                  m;
                if (t.match(new RegExp(l), !0)) return a.linkHref;
              }
              if ("`" === s) {
                var d = o.formatting;
                i.highlightFormatting && (o.formatting = "code"),
                  t.eatWhile("`");
                var c = t.current().length;
                if (0 != o.code || (o.quote && 1 != c)) {
                  if (c == o.code) {
                    var p = S(o);
                    return (o.code = 0), p;
                  }
                  return (o.formatting = d), S(o);
                }
                return (o.code = c), S(o);
              }
              if (o.code) return S(o);
              if ("\\" === s && (t.next(), i.highlightFormatting)) {
                var h = S(o),
                  f = a.formatting + "-escape";
                return h ? h + " " + f : f;
              }
              if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                return (
                  (o.imageMarker = !0),
                  (o.image = !0),
                  i.highlightFormatting && (o.formatting = "image"),
                  S(o)
                );
              if (
                "[" === s &&
                o.imageMarker &&
                t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
              )
                return (
                  (o.imageMarker = !1),
                  (o.imageAltText = !0),
                  i.highlightFormatting && (o.formatting = "image"),
                  S(o)
                );
              if ("]" === s && o.imageAltText) {
                i.highlightFormatting && (o.formatting = "image");
                var h = S(o);
                return (
                  (o.imageAltText = !1), (o.image = !1), (o.inline = o.f = A), h
                );
              }
              if ("[" === s && !o.image)
                return (
                  (o.linkText && t.match(/^.*?\]/)) ||
                    ((o.linkText = !0),
                    i.highlightFormatting && (o.formatting = "link")),
                  S(o)
                );
              if ("]" === s && o.linkText) {
                i.highlightFormatting && (o.formatting = "link");
                var h = S(o);
                return (
                  (o.linkText = !1),
                  (o.inline = o.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? A : w),
                  h
                );
              }
              if (
                "<" === s &&
                t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
              )
                return (
                  (o.f = o.inline = M),
                  i.highlightFormatting && (o.formatting = "link"),
                  (h = S(o)) ? (h += " ") : (h = ""),
                  h + a.linkInline
                );
              if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1))
                return (
                  (o.f = o.inline = M),
                  i.highlightFormatting && (o.formatting = "link"),
                  (h = S(o)) ? (h += " ") : (h = ""),
                  h + a.linkEmail
                );
              if (
                i.xml &&
                "<" === s &&
                t.match(
                  /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                  !1
                )
              ) {
                var g = t.string.indexOf(">", t.pos);
                if (-1 != g) {
                  var k = t.string.substring(t.start, g);
                  /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k) &&
                    (o.md_inside = !0);
                }
                return t.backUp(1), (o.htmlState = e.startState(n)), y(t, o, b);
              }
              if (i.xml && "<" === s && t.match(/^\/\w*?>/))
                return (o.md_inside = !1), "tag";
              if ("*" === s || "_" === s) {
                for (
                  var v = 1, D = 1 == t.pos ? " " : t.string.charAt(t.pos - 2);
                  v < 3 && t.eat(s);

                )
                  v++;
                var C = t.peek() || " ",
                  F =
                    !/\s/.test(C) && (!x.test(C) || /\s/.test(D) || x.test(D)),
                  E =
                    !/\s/.test(D) && (!x.test(D) || /\s/.test(C) || x.test(C)),
                  j = null,
                  L = null;
                if (
                  (v % 2 &&
                    (o.em || !F || ("*" !== s && E && !x.test(D))
                      ? o.em != s ||
                        !E ||
                        ("*" !== s && F && !x.test(C)) ||
                        (j = !1)
                      : (j = !0)),
                  v > 1 &&
                    (o.strong || !F || ("*" !== s && E && !x.test(D))
                      ? o.strong != s ||
                        !E ||
                        ("*" !== s && F && !x.test(C)) ||
                        (L = !1)
                      : (L = !0)),
                  null != L || null != j)
                )
                  return (
                    i.highlightFormatting &&
                      (o.formatting =
                        null == j ? "strong" : null == L ? "em" : "strong em"),
                    !0 === j && (o.em = s),
                    !0 === L && (o.strong = s),
                    (p = S(o)),
                    !1 === j && (o.em = !1),
                    !1 === L && (o.strong = !1),
                    p
                  );
              } else if (" " === s && (t.eat("*") || t.eat("_"))) {
                if (" " === t.peek()) return S(o);
                t.backUp(1);
              }
              if (i.strikethrough)
                if ("~" === s && t.eatWhile(s)) {
                  if (o.strikethrough)
                    return (
                      i.highlightFormatting && (o.formatting = "strikethrough"),
                      (p = S(o)),
                      (o.strikethrough = !1),
                      p
                    );
                  if (t.match(/^[^\s]/, !1))
                    return (
                      (o.strikethrough = !0),
                      i.highlightFormatting && (o.formatting = "strikethrough"),
                      S(o)
                    );
                } else if (" " === s && t.match("~~", !0)) {
                  if (" " === t.peek()) return S(o);
                  t.backUp(2);
                }
              if (
                i.emoji &&
                ":" === s &&
                t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
              ) {
                (o.emoji = !0),
                  i.highlightFormatting && (o.formatting = "emoji");
                var T = S(o);
                return (o.emoji = !1), T;
              }
              return (
                " " === s &&
                  (t.match(/^ +$/, !1)
                    ? o.trailingSpace++
                    : o.trailingSpace && (o.trailingSpaceNewLine = !0)),
                S(o)
              );
            }
            function M(e, t) {
              if (">" === e.next()) {
                (t.f = t.inline = w),
                  i.highlightFormatting && (t.formatting = "link");
                var n = S(t);
                return n ? (n += " ") : (n = ""), n + a.linkInline;
              }
              return e.match(/^[^>]+/, !0), a.linkInline;
            }
            function A(e, t) {
              if (e.eatSpace()) return null;
              var n = e.next();
              return "(" === n || "[" === n
                ? ((t.f = t.inline = L("(" === n ? ")" : "]")),
                  i.highlightFormatting && (t.formatting = "link-string"),
                  (t.linkHref = !0),
                  S(t))
                : "error";
            }
            var j = {
              ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
              "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
            };
            function L(e) {
              return function (t, n) {
                if (t.next() === e) {
                  (n.f = n.inline = w),
                    i.highlightFormatting && (n.formatting = "link-string");
                  var o = S(n);
                  return (n.linkHref = !1), o;
                }
                return t.match(j[e]), (n.linkHref = !0), S(n);
              };
            }
            function T(e, t) {
              return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                ? ((t.f = B),
                  e.next(),
                  i.highlightFormatting && (t.formatting = "link"),
                  (t.linkText = !0),
                  S(t))
                : k(e, t, w);
            }
            function B(e, t) {
              if (e.match("]:", !0)) {
                (t.f = t.inline = q),
                  i.highlightFormatting && (t.formatting = "link");
                var n = S(t);
                return (t.linkText = !1), n;
              }
              return e.match(/^([^\]\\]|\\.)+/, !0), a.linkText;
            }
            function q(e, t) {
              return e.eatSpace()
                ? null
                : (e.match(/^[^\s]+/, !0),
                  void 0 === e.peek()
                    ? (t.linkTitle = !0)
                    : e.match(
                        /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                        !0
                      ),
                  (t.f = t.inline = w),
                  a.linkHref + " url");
            }
            var N = {
              startState: function () {
                return {
                  f: C,
                  prevLine: { stream: null },
                  thisLine: { stream: null },
                  block: C,
                  htmlState: null,
                  indentation: 0,
                  inline: w,
                  text: E,
                  formatting: !1,
                  linkText: !1,
                  linkHref: !1,
                  linkTitle: !1,
                  code: 0,
                  em: !1,
                  strong: !1,
                  header: 0,
                  setext: 0,
                  hr: !1,
                  taskList: !1,
                  list: !1,
                  listStack: [],
                  quote: 0,
                  trailingSpace: 0,
                  trailingSpaceNewLine: !1,
                  strikethrough: !1,
                  emoji: !1,
                  fencedEndRE: null,
                };
              },
              copyState: function (t) {
                return {
                  f: t.f,
                  prevLine: t.prevLine,
                  thisLine: t.thisLine,
                  block: t.block,
                  htmlState: t.htmlState && e.copyState(n, t.htmlState),
                  indentation: t.indentation,
                  localMode: t.localMode,
                  localState: t.localMode
                    ? e.copyState(t.localMode, t.localState)
                    : null,
                  inline: t.inline,
                  text: t.text,
                  formatting: !1,
                  linkText: t.linkText,
                  linkTitle: t.linkTitle,
                  linkHref: t.linkHref,
                  code: t.code,
                  em: t.em,
                  strong: t.strong,
                  strikethrough: t.strikethrough,
                  emoji: t.emoji,
                  header: t.header,
                  setext: t.setext,
                  hr: t.hr,
                  taskList: t.taskList,
                  list: t.list,
                  listStack: t.listStack.slice(0),
                  quote: t.quote,
                  indentedCode: t.indentedCode,
                  trailingSpace: t.trailingSpace,
                  trailingSpaceNewLine: t.trailingSpaceNewLine,
                  md_inside: t.md_inside,
                  fencedEndRE: t.fencedEndRE,
                };
              },
              token: function (e, t) {
                if (((t.formatting = !1), e != t.thisLine.stream)) {
                  if (((t.header = 0), (t.hr = !1), e.match(/^\s*$/, !0)))
                    return D(t), null;
                  if (
                    ((t.prevLine = t.thisLine),
                    (t.thisLine = { stream: e }),
                    (t.taskList = !1),
                    (t.trailingSpace = 0),
                    (t.trailingSpaceNewLine = !1),
                    !t.localState && ((t.f = t.block), t.f != b))
                  ) {
                    var i = e.match(/^\s*/, !0)[0].replace(/\t/g, g).length;
                    if (
                      ((t.indentation = i), (t.indentationDiff = null), i > 0)
                    )
                      return null;
                  }
                }
                return t.f(e, t);
              },
              innerMode: function (e) {
                return e.block == b
                  ? { state: e.htmlState, mode: n }
                  : e.localState
                  ? { state: e.localState, mode: e.localMode }
                  : { state: e, mode: N };
              },
              indent: function (t, i, o) {
                return t.block == b && n.indent
                  ? n.indent(t.htmlState, i, o)
                  : t.localState && t.localMode.indent
                  ? t.localMode.indent(t.localState, i, o)
                  : e.Pass;
              },
              blankLine: D,
              getType: S,
              blockCommentStart: "\x3c!--",
              blockCommentEnd: "--\x3e",
              closeBrackets: "()[]{}''\"\"``",
              fold: "markdown",
            };
            return N;
          },
          "xml"
        ),
          e.defineMIME("text/markdown", "markdown"),
          e.defineMIME("text/x-markdown", "markdown");
      })(i(4631), i(9589), i(2539));
    },
    2539: function (e, t, i) {
      !(function (e) {
        "use strict";
        e.modeInfo = [
          {
            name: "APL",
            mime: "text/apl",
            mode: "apl",
            ext: ["dyalog", "apl"],
          },
          {
            name: "PGP",
            mimes: [
              "application/pgp",
              "application/pgp-encrypted",
              "application/pgp-keys",
              "application/pgp-signature",
            ],
            mode: "asciiarmor",
            ext: ["asc", "pgp", "sig"],
          },
          {
            name: "ASN.1",
            mime: "text/x-ttcn-asn",
            mode: "asn.1",
            ext: ["asn", "asn1"],
          },
          {
            name: "Asterisk",
            mime: "text/x-asterisk",
            mode: "asterisk",
            file: /^extensions\.conf$/i,
          },
          {
            name: "Brainfuck",
            mime: "text/x-brainfuck",
            mode: "brainfuck",
            ext: ["b", "bf"],
          },
          {
            name: "C",
            mime: "text/x-csrc",
            mode: "clike",
            ext: ["c", "h", "ino"],
          },
          {
            name: "C++",
            mime: "text/x-c++src",
            mode: "clike",
            ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
            alias: ["cpp"],
          },
          {
            name: "Cobol",
            mime: "text/x-cobol",
            mode: "cobol",
            ext: ["cob", "cpy", "cbl"],
          },
          {
            name: "C#",
            mime: "text/x-csharp",
            mode: "clike",
            ext: ["cs"],
            alias: ["csharp", "cs"],
          },
          {
            name: "Clojure",
            mime: "text/x-clojure",
            mode: "clojure",
            ext: ["clj", "cljc", "cljx"],
          },
          {
            name: "ClojureScript",
            mime: "text/x-clojurescript",
            mode: "clojure",
            ext: ["cljs"],
          },
          {
            name: "Closure Stylesheets (GSS)",
            mime: "text/x-gss",
            mode: "css",
            ext: ["gss"],
          },
          {
            name: "CMake",
            mime: "text/x-cmake",
            mode: "cmake",
            ext: ["cmake", "cmake.in"],
            file: /^CMakeLists\.txt$/,
          },
          {
            name: "CoffeeScript",
            mimes: [
              "application/vnd.coffeescript",
              "text/coffeescript",
              "text/x-coffeescript",
            ],
            mode: "coffeescript",
            ext: ["coffee"],
            alias: ["coffee", "coffee-script"],
          },
          {
            name: "Common Lisp",
            mime: "text/x-common-lisp",
            mode: "commonlisp",
            ext: ["cl", "lisp", "el"],
            alias: ["lisp"],
          },
          {
            name: "Cypher",
            mime: "application/x-cypher-query",
            mode: "cypher",
            ext: ["cyp", "cypher"],
          },
          {
            name: "Cython",
            mime: "text/x-cython",
            mode: "python",
            ext: ["pyx", "pxd", "pxi"],
          },
          {
            name: "Crystal",
            mime: "text/x-crystal",
            mode: "crystal",
            ext: ["cr"],
          },
          { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] },
          { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] },
          { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] },
          {
            name: "Dart",
            mimes: ["application/dart", "text/x-dart"],
            mode: "dart",
            ext: ["dart"],
          },
          {
            name: "diff",
            mime: "text/x-diff",
            mode: "diff",
            ext: ["diff", "patch"],
          },
          { name: "Django", mime: "text/x-django", mode: "django" },
          {
            name: "Dockerfile",
            mime: "text/x-dockerfile",
            mode: "dockerfile",
            file: /^Dockerfile$/,
          },
          {
            name: "DTD",
            mime: "application/xml-dtd",
            mode: "dtd",
            ext: ["dtd"],
          },
          {
            name: "Dylan",
            mime: "text/x-dylan",
            mode: "dylan",
            ext: ["dylan", "dyl", "intr"],
          },
          { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" },
          { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] },
          {
            name: "edn",
            mime: "application/edn",
            mode: "clojure",
            ext: ["edn"],
          },
          { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] },
          { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] },
          {
            name: "Embedded JavaScript",
            mime: "application/x-ejs",
            mode: "htmlembedded",
            ext: ["ejs"],
          },
          {
            name: "Embedded Ruby",
            mime: "application/x-erb",
            mode: "htmlembedded",
            ext: ["erb"],
          },
          {
            name: "Erlang",
            mime: "text/x-erlang",
            mode: "erlang",
            ext: ["erl"],
          },
          { name: "Esper", mime: "text/x-esper", mode: "sql" },
          {
            name: "Factor",
            mime: "text/x-factor",
            mode: "factor",
            ext: ["factor"],
          },
          { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
          {
            name: "Forth",
            mime: "text/x-forth",
            mode: "forth",
            ext: ["forth", "fth", "4th"],
          },
          {
            name: "Fortran",
            mime: "text/x-fortran",
            mode: "fortran",
            ext: ["f", "for", "f77", "f90", "f95"],
          },
          {
            name: "F#",
            mime: "text/x-fsharp",
            mode: "mllike",
            ext: ["fs"],
            alias: ["fsharp"],
          },
          { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] },
          {
            name: "Gherkin",
            mime: "text/x-feature",
            mode: "gherkin",
            ext: ["feature"],
          },
          {
            name: "GitHub Flavored Markdown",
            mime: "text/x-gfm",
            mode: "gfm",
            file: /^(readme|contributing|history)\.md$/i,
          },
          { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
          {
            name: "Groovy",
            mime: "text/x-groovy",
            mode: "groovy",
            ext: ["groovy", "gradle"],
            file: /^Jenkinsfile$/,
          },
          { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] },
          {
            name: "Haskell",
            mime: "text/x-haskell",
            mode: "haskell",
            ext: ["hs"],
          },
          {
            name: "Haskell (Literate)",
            mime: "text/x-literate-haskell",
            mode: "haskell-literate",
            ext: ["lhs"],
          },
          { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] },
          { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] },
          {
            name: "ASP.NET",
            mime: "application/x-aspx",
            mode: "htmlembedded",
            ext: ["aspx"],
            alias: ["asp", "aspx"],
          },
          {
            name: "HTML",
            mime: "text/html",
            mode: "htmlmixed",
            ext: ["html", "htm", "handlebars", "hbs"],
            alias: ["xhtml"],
          },
          { name: "HTTP", mime: "message/http", mode: "http" },
          { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] },
          {
            name: "Pug",
            mime: "text/x-pug",
            mode: "pug",
            ext: ["jade", "pug"],
            alias: ["jade"],
          },
          { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
          {
            name: "Java Server Pages",
            mime: "application/x-jsp",
            mode: "htmlembedded",
            ext: ["jsp"],
            alias: ["jsp"],
          },
          {
            name: "JavaScript",
            mimes: [
              "text/javascript",
              "text/ecmascript",
              "application/javascript",
              "application/x-javascript",
              "application/ecmascript",
            ],
            mode: "javascript",
            ext: ["js"],
            alias: ["ecmascript", "js", "node"],
          },
          {
            name: "JSON",
            mimes: ["application/json", "application/x-json"],
            mode: "javascript",
            ext: ["json", "map"],
            alias: ["json5"],
          },
          {
            name: "JSON-LD",
            mime: "application/ld+json",
            mode: "javascript",
            ext: ["jsonld"],
            alias: ["jsonld"],
          },
          { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] },
          {
            name: "Jinja2",
            mime: "text/jinja2",
            mode: "jinja2",
            ext: ["j2", "jinja", "jinja2"],
          },
          {
            name: "Julia",
            mime: "text/x-julia",
            mode: "julia",
            ext: ["jl"],
            alias: ["jl"],
          },
          { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] },
          { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] },
          {
            name: "LiveScript",
            mime: "text/x-livescript",
            mode: "livescript",
            ext: ["ls"],
            alias: ["ls"],
          },
          { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] },
          {
            name: "Markdown",
            mime: "text/x-markdown",
            mode: "markdown",
            ext: ["markdown", "md", "mkd"],
          },
          { name: "mIRC", mime: "text/mirc", mode: "mirc" },
          { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
          {
            name: "Mathematica",
            mime: "text/x-mathematica",
            mode: "mathematica",
            ext: ["m", "nb", "wl", "wls"],
          },
          {
            name: "Modelica",
            mime: "text/x-modelica",
            mode: "modelica",
            ext: ["mo"],
          },
          { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] },
          { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
          {
            name: "mbox",
            mime: "application/mbox",
            mode: "mbox",
            ext: ["mbox"],
          },
          { name: "MySQL", mime: "text/x-mysql", mode: "sql" },
          {
            name: "Nginx",
            mime: "text/x-nginx-conf",
            mode: "nginx",
            file: /nginx.*\.conf$/i,
          },
          {
            name: "NSIS",
            mime: "text/x-nsis",
            mode: "nsis",
            ext: ["nsh", "nsi"],
          },
          {
            name: "NTriples",
            mimes: [
              "application/n-triples",
              "application/n-quads",
              "text/n-triples",
            ],
            mode: "ntriples",
            ext: ["nt", "nq"],
          },
          {
            name: "Objective-C",
            mime: "text/x-objectivec",
            mode: "clike",
            ext: ["m"],
            alias: ["objective-c", "objc"],
          },
          {
            name: "Objective-C++",
            mime: "text/x-objectivec++",
            mode: "clike",
            ext: ["mm"],
            alias: ["objective-c++", "objc++"],
          },
          {
            name: "OCaml",
            mime: "text/x-ocaml",
            mode: "mllike",
            ext: ["ml", "mli", "mll", "mly"],
          },
          { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] },
          { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] },
          {
            name: "Pascal",
            mime: "text/x-pascal",
            mode: "pascal",
            ext: ["p", "pas"],
          },
          { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] },
          {
            name: "Perl",
            mime: "text/x-perl",
            mode: "perl",
            ext: ["pl", "pm"],
          },
          {
            name: "PHP",
            mimes: [
              "text/x-php",
              "application/x-httpd-php",
              "application/x-httpd-php-open",
            ],
            mode: "php",
            ext: ["php", "php3", "php4", "php5", "php7", "phtml"],
          },
          { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] },
          {
            name: "Plain Text",
            mime: "text/plain",
            mode: "null",
            ext: ["txt", "text", "conf", "def", "list", "log"],
          },
          { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] },
          { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" },
          {
            name: "PowerShell",
            mime: "application/x-powershell",
            mode: "powershell",
            ext: ["ps1", "psd1", "psm1"],
          },
          {
            name: "Properties files",
            mime: "text/x-properties",
            mode: "properties",
            ext: ["properties", "ini", "in"],
            alias: ["ini", "properties"],
          },
          {
            name: "ProtoBuf",
            mime: "text/x-protobuf",
            mode: "protobuf",
            ext: ["proto"],
          },
          {
            name: "Python",
            mime: "text/x-python",
            mode: "python",
            ext: ["BUILD", "bzl", "py", "pyw"],
            file: /^(BUCK|BUILD)$/,
          },
          {
            name: "Puppet",
            mime: "text/x-puppet",
            mode: "puppet",
            ext: ["pp"],
          },
          { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] },
          {
            name: "R",
            mime: "text/x-rsrc",
            mode: "r",
            ext: ["r", "R"],
            alias: ["rscript"],
          },
          {
            name: "reStructuredText",
            mime: "text/x-rst",
            mode: "rst",
            ext: ["rst"],
            alias: ["rst"],
          },
          { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" },
          {
            name: "RPM Spec",
            mime: "text/x-rpm-spec",
            mode: "rpm",
            ext: ["spec"],
          },
          {
            name: "Ruby",
            mime: "text/x-ruby",
            mode: "ruby",
            ext: ["rb"],
            alias: ["jruby", "macruby", "rake", "rb", "rbx"],
          },
          { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
          { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
          { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] },
          {
            name: "Scala",
            mime: "text/x-scala",
            mode: "clike",
            ext: ["scala"],
          },
          {
            name: "Scheme",
            mime: "text/x-scheme",
            mode: "scheme",
            ext: ["scm", "ss"],
          },
          { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] },
          {
            name: "Shell",
            mimes: ["text/x-sh", "application/x-sh"],
            mode: "shell",
            ext: ["sh", "ksh", "bash"],
            alias: ["bash", "sh", "zsh"],
            file: /^PKGBUILD$/,
          },
          {
            name: "Sieve",
            mime: "application/sieve",
            mode: "sieve",
            ext: ["siv", "sieve"],
          },
          {
            name: "Slim",
            mimes: ["text/x-slim", "application/x-slim"],
            mode: "slim",
            ext: ["slim"],
          },
          {
            name: "Smalltalk",
            mime: "text/x-stsrc",
            mode: "smalltalk",
            ext: ["st"],
          },
          {
            name: "Smarty",
            mime: "text/x-smarty",
            mode: "smarty",
            ext: ["tpl"],
          },
          { name: "Solr", mime: "text/x-solr", mode: "solr" },
          {
            name: "SML",
            mime: "text/x-sml",
            mode: "mllike",
            ext: ["sml", "sig", "fun", "smackspec"],
          },
          {
            name: "Soy",
            mime: "text/x-soy",
            mode: "soy",
            ext: ["soy"],
            alias: ["closure template"],
          },
          {
            name: "SPARQL",
            mime: "application/sparql-query",
            mode: "sparql",
            ext: ["rq", "sparql"],
            alias: ["sparul"],
          },
          {
            name: "Spreadsheet",
            mime: "text/x-spreadsheet",
            mode: "spreadsheet",
            alias: ["excel", "formula"],
          },
          { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] },
          { name: "SQLite", mime: "text/x-sqlite", mode: "sql" },
          {
            name: "Squirrel",
            mime: "text/x-squirrel",
            mode: "clike",
            ext: ["nut"],
          },
          {
            name: "Stylus",
            mime: "text/x-styl",
            mode: "stylus",
            ext: ["styl"],
          },
          {
            name: "Swift",
            mime: "text/x-swift",
            mode: "swift",
            ext: ["swift"],
          },
          { name: "sTeX", mime: "text/x-stex", mode: "stex" },
          {
            name: "LaTeX",
            mime: "text/x-latex",
            mode: "stex",
            ext: ["text", "ltx", "tex"],
            alias: ["tex"],
          },
          {
            name: "SystemVerilog",
            mime: "text/x-systemverilog",
            mode: "verilog",
            ext: ["v", "sv", "svh"],
          },
          { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] },
          {
            name: "Textile",
            mime: "text/x-textile",
            mode: "textile",
            ext: ["textile"],
          },
          { name: "TiddlyWiki", mime: "text/x-tiddlywiki", mode: "tiddlywiki" },
          { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" },
          { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] },
          { name: "Tornado", mime: "text/x-tornado", mode: "tornado" },
          {
            name: "troff",
            mime: "text/troff",
            mode: "troff",
            ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
          },
          {
            name: "TTCN",
            mime: "text/x-ttcn",
            mode: "ttcn",
            ext: ["ttcn", "ttcn3", "ttcnpp"],
          },
          {
            name: "TTCN_CFG",
            mime: "text/x-ttcn-cfg",
            mode: "ttcn-cfg",
            ext: ["cfg"],
          },
          { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] },
          {
            name: "TypeScript",
            mime: "application/typescript",
            mode: "javascript",
            ext: ["ts"],
            alias: ["ts"],
          },
          {
            name: "TypeScript-JSX",
            mime: "text/typescript-jsx",
            mode: "jsx",
            ext: ["tsx"],
            alias: ["tsx"],
          },
          { name: "Twig", mime: "text/x-twig", mode: "twig" },
          {
            name: "Web IDL",
            mime: "text/x-webidl",
            mode: "webidl",
            ext: ["webidl"],
          },
          { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] },
          {
            name: "VBScript",
            mime: "text/vbscript",
            mode: "vbscript",
            ext: ["vbs"],
          },
          {
            name: "Velocity",
            mime: "text/velocity",
            mode: "velocity",
            ext: ["vtl"],
          },
          {
            name: "Verilog",
            mime: "text/x-verilog",
            mode: "verilog",
            ext: ["v"],
          },
          {
            name: "VHDL",
            mime: "text/x-vhdl",
            mode: "vhdl",
            ext: ["vhd", "vhdl"],
          },
          {
            name: "Vue.js Component",
            mimes: ["script/x-vue", "text/x-vue"],
            mode: "vue",
            ext: ["vue"],
          },
          {
            name: "XML",
            mimes: ["application/xml", "text/xml"],
            mode: "xml",
            ext: ["xml", "xsl", "xsd", "svg"],
            alias: ["rss", "wsdl", "xsd"],
          },
          {
            name: "XQuery",
            mime: "application/xquery",
            mode: "xquery",
            ext: ["xy", "xquery"],
          },
          { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] },
          {
            name: "YAML",
            mimes: ["text/x-yaml", "text/yaml"],
            mode: "yaml",
            ext: ["yaml", "yml"],
            alias: ["yml"],
          },
          { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] },
          {
            name: "mscgen",
            mime: "text/x-mscgen",
            mode: "mscgen",
            ext: ["mscgen", "mscin", "msc"],
          },
          { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] },
          {
            name: "msgenny",
            mime: "text/x-msgenny",
            mode: "mscgen",
            ext: ["msgenny"],
          },
          {
            name: "WebAssembly",
            mime: "text/webassembly",
            mode: "wast",
            ext: ["wat", "wast"],
          },
        ];
        for (var t = 0; t < e.modeInfo.length; t++) {
          var i = e.modeInfo[t];
          i.mimes && (i.mime = i.mimes[0]);
        }
        (e.findModeByMIME = function (t) {
          t = t.toLowerCase();
          for (var i = 0; i < e.modeInfo.length; i++) {
            var n = e.modeInfo[i];
            if (n.mime == t) return n;
            if (n.mimes)
              for (var o = 0; o < n.mimes.length; o++)
                if (n.mimes[o] == t) return n;
          }
          return /\+xml$/.test(t)
            ? e.findModeByMIME("application/xml")
            : /\+json$/.test(t)
            ? e.findModeByMIME("application/json")
            : void 0;
        }),
          (e.findModeByExtension = function (t) {
            t = t.toLowerCase();
            for (var i = 0; i < e.modeInfo.length; i++) {
              var n = e.modeInfo[i];
              if (n.ext)
                for (var o = 0; o < n.ext.length; o++)
                  if (n.ext[o] == t) return n;
            }
          }),
          (e.findModeByFileName = function (t) {
            for (var i = 0; i < e.modeInfo.length; i++) {
              var n = e.modeInfo[i];
              if (n.file && n.file.test(t)) return n;
            }
            var o = t.lastIndexOf("."),
              r = o > -1 && t.substring(o + 1, t.length);
            if (r) return e.findModeByExtension(r);
          }),
          (e.findModeByName = function (t) {
            t = t.toLowerCase();
            for (var i = 0; i < e.modeInfo.length; i++) {
              var n = e.modeInfo[i];
              if (n.name.toLowerCase() == t) return n;
              if (n.alias)
                for (var o = 0; o < n.alias.length; o++)
                  if (n.alias[o].toLowerCase() == t) return n;
            }
          });
      })(i(4631));
    },
    9589: function (e, t, i) {
      !(function (e) {
        "use strict";
        var t = {
            autoSelfClosers: {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              frame: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              menuitem: !0,
            },
            implicitlyClosed: {
              dd: !0,
              li: !0,
              optgroup: !0,
              option: !0,
              p: !0,
              rp: !0,
              rt: !0,
              tbody: !0,
              td: !0,
              tfoot: !0,
              th: !0,
              tr: !0,
            },
            contextGrabbers: {
              dd: { dd: !0, dt: !0 },
              dt: { dd: !0, dt: !0 },
              li: { li: !0 },
              option: { option: !0, optgroup: !0 },
              optgroup: { optgroup: !0 },
              p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0,
              },
              rp: { rp: !0, rt: !0 },
              rt: { rp: !0, rt: !0 },
              tbody: { tbody: !0, tfoot: !0 },
              td: { td: !0, th: !0 },
              tfoot: { tbody: !0 },
              th: { td: !0, th: !0 },
              thead: { tbody: !0, tfoot: !0 },
              tr: { tr: !0 },
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0,
          },
          i = {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            allowMissingTagName: !1,
            caseFold: !1,
          };
        e.defineMode("xml", function (n, o) {
          var r,
            a,
            s = n.indentUnit,
            m = {},
            l = o.htmlMode ? t : i;
          for (var u in l) m[u] = l[u];
          for (var u in o) m[u] = o[u];
          function d(e, t) {
            function i(i) {
              return (t.tokenize = i), i(e, t);
            }
            var n = e.next();
            return "<" == n
              ? e.eat("!")
                ? e.eat("[")
                  ? e.match("CDATA[")
                    ? i(h("atom", "]]>"))
                    : null
                  : e.match("--")
                  ? i(h("comment", "--\x3e"))
                  : e.match("DOCTYPE", !0, !0)
                  ? (e.eatWhile(/[\w\._\-]/), i(f(1)))
                  : null
                : e.eat("?")
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = h("meta", "?>")),
                  "meta")
                : ((r = e.eat("/") ? "closeTag" : "openTag"),
                  (t.tokenize = c),
                  "tag bracket")
              : "&" == n
              ? (
                  e.eat("#")
                    ? e.eat("x")
                      ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
                      : e.eatWhile(/[\d]/) && e.eat(";")
                    : e.eatWhile(/[\w\.\-:]/) && e.eat(";")
                )
                ? "atom"
                : "error"
              : (e.eatWhile(/[^&<]/), null);
          }
          function c(e, t) {
            var i = e.next();
            if (">" == i || ("/" == i && e.eat(">")))
              return (
                (t.tokenize = d),
                (r = ">" == i ? "endTag" : "selfcloseTag"),
                "tag bracket"
              );
            if ("=" == i) return (r = "equals"), null;
            if ("<" == i) {
              (t.tokenize = d), (t.state = v), (t.tagName = t.tagStart = null);
              var n = t.tokenize(e, t);
              return n ? n + " tag error" : "tag error";
            }
            return /[\'\"]/.test(i)
              ? ((t.tokenize = p(i)),
                (t.stringStartCol = e.column()),
                t.tokenize(e, t))
              : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
          }
          function p(e) {
            var t = function (t, i) {
              for (; !t.eol(); )
                if (t.next() == e) {
                  i.tokenize = c;
                  break;
                }
              return "string";
            };
            return (t.isInAttribute = !0), t;
          }
          function h(e, t) {
            return function (i, n) {
              for (; !i.eol(); ) {
                if (i.match(t)) {
                  n.tokenize = d;
                  break;
                }
                i.next();
              }
              return e;
            };
          }
          function f(e) {
            return function (t, i) {
              for (var n; null != (n = t.next()); ) {
                if ("<" == n) return (i.tokenize = f(e + 1)), i.tokenize(t, i);
                if (">" == n) {
                  if (1 == e) {
                    i.tokenize = d;
                    break;
                  }
                  return (i.tokenize = f(e - 1)), i.tokenize(t, i);
                }
              }
              return "meta";
            };
          }
          function x(e) {
            return e && e.toLowerCase();
          }
          function g(e, t, i) {
            (this.prev = e.context),
              (this.tagName = t || ""),
              (this.indent = e.indented),
              (this.startOfLine = i),
              (m.doNotIndent.hasOwnProperty(t) ||
                (e.context && e.context.noIndent)) &&
                (this.noIndent = !0);
          }
          function k(e) {
            e.context && (e.context = e.context.prev);
          }
          function y(e, t) {
            for (var i; ; ) {
              if (!e.context) return;
              if (
                ((i = e.context.tagName),
                !m.contextGrabbers.hasOwnProperty(x(i)) ||
                  !m.contextGrabbers[x(i)].hasOwnProperty(x(t)))
              )
                return;
              k(e);
            }
          }
          function v(e, t, i) {
            return "openTag" == e
              ? ((i.tagStart = t.column()), D)
              : "closeTag" == e
              ? C
              : v;
          }
          function D(e, t, i) {
            return "word" == e
              ? ((i.tagName = t.current()), (a = "tag"), S)
              : m.allowMissingTagName && "endTag" == e
              ? ((a = "tag bracket"), S(e, t, i))
              : ((a = "error"), D);
          }
          function C(e, t, i) {
            if ("word" == e) {
              var n = t.current();
              return (
                i.context &&
                  i.context.tagName != n &&
                  m.implicitlyClosed.hasOwnProperty(x(i.context.tagName)) &&
                  k(i),
                (i.context && i.context.tagName == n) || !1 === m.matchClosing
                  ? ((a = "tag"), b)
                  : ((a = "tag error"), F)
              );
            }
            return m.allowMissingTagName && "endTag" == e
              ? ((a = "tag bracket"), b(e, t, i))
              : ((a = "error"), F);
          }
          function b(e, t, i) {
            return "endTag" != e ? ((a = "error"), b) : (k(i), v);
          }
          function F(e, t, i) {
            return (a = "error"), b(e, t, i);
          }
          function S(e, t, i) {
            if ("word" == e) return (a = "attribute"), E;
            if ("endTag" == e || "selfcloseTag" == e) {
              var n = i.tagName,
                o = i.tagStart;
              return (
                (i.tagName = i.tagStart = null),
                "selfcloseTag" == e || m.autoSelfClosers.hasOwnProperty(x(n))
                  ? y(i, n)
                  : (y(i, n), (i.context = new g(i, n, o == i.indented))),
                v
              );
            }
            return (a = "error"), S;
          }
          function E(e, t, i) {
            return "equals" == e
              ? w
              : (m.allowMissing || (a = "error"), S(e, t, i));
          }
          function w(e, t, i) {
            return "string" == e
              ? M
              : "word" == e && m.allowUnquoted
              ? ((a = "string"), S)
              : ((a = "error"), S(e, t, i));
          }
          function M(e, t, i) {
            return "string" == e ? M : S(e, t, i);
          }
          return (
            (d.isInText = !0),
            {
              startState: function (e) {
                var t = {
                  tokenize: d,
                  state: v,
                  indented: e || 0,
                  tagName: null,
                  tagStart: null,
                  context: null,
                };
                return null != e && (t.baseIndent = e), t;
              },
              token: function (e, t) {
                if (
                  (!t.tagName && e.sol() && (t.indented = e.indentation()),
                  e.eatSpace())
                )
                  return null;
                r = null;
                var i = t.tokenize(e, t);
                return (
                  (i || r) &&
                    "comment" != i &&
                    ((a = null),
                    (t.state = t.state(r || i, e, t)),
                    a && (i = "error" == a ? i + " error" : a)),
                  i
                );
              },
              indent: function (t, i, n) {
                var o = t.context;
                if (t.tokenize.isInAttribute)
                  return t.tagStart == t.indented
                    ? t.stringStartCol + 1
                    : t.indented + s;
                if (o && o.noIndent) return e.Pass;
                if (t.tokenize != c && t.tokenize != d)
                  return n ? n.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)
                  return !1 !== m.multilineTagIndentPastTag
                    ? t.tagStart + t.tagName.length + 2
                    : t.tagStart + s * (m.multilineTagIndentFactor || 1);
                if (m.alignCDATA && /<!\[CDATA\[/.test(i)) return 0;
                var r = i && /^<(\/)?([\w_:\.-]*)/.exec(i);
                if (r && r[1])
                  for (; o; ) {
                    if (o.tagName == r[2]) {
                      o = o.prev;
                      break;
                    }
                    if (!m.implicitlyClosed.hasOwnProperty(x(o.tagName))) break;
                    o = o.prev;
                  }
                else if (r)
                  for (; o; ) {
                    var a = m.contextGrabbers[x(o.tagName)];
                    if (!a || !a.hasOwnProperty(x(r[2]))) break;
                    o = o.prev;
                  }
                for (; o && o.prev && !o.startOfLine; ) o = o.prev;
                return o ? o.indent + s : t.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: "\x3c!--",
              blockCommentEnd: "--\x3e",
              configuration: m.htmlMode ? "html" : "xml",
              helperType: m.htmlMode ? "html" : "xml",
              skipAttribute: function (e) {
                e.state == w && (e.state = S);
              },
              xmlCurrentTag: function (e) {
                return e.tagName
                  ? { name: e.tagName, close: "closeTag" == e.type }
                  : null;
              },
              xmlCurrentContext: function (e) {
                for (var t = [], i = e.context; i; i = i.prev)
                  t.push(i.tagName);
                return t.reverse();
              },
            }
          );
        }),
          e.defineMIME("text/xml", "xml"),
          e.defineMIME("application/xml", "xml"),
          e.mimeModes.hasOwnProperty("text/html") ||
            e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
      })(i(4631));
    },
    1855: function () {},
    5704: function () {},
    9656: function (e, t, i) {
      "use strict";
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      function o(e) {
        return (
          (o =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      var r = (function () {
        var e = function (t, i) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              }),
            e(t, i)
          );
        };
        return function (t, i) {
          function n() {
            this.constructor = t;
          }
          e(t, i),
            (t.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
      t.Rt = void 0;
      var a,
        s = i(7294),
        m =
          "undefined" === typeof navigator ||
          !0 === i.g.PREVENT_CODEMIRROR_RENDER;
      m || (a = i(4631));
      var l = (function () {
          function e() {}
          return (
            (e.equals = function (e, t) {
              var i = this,
                n = Object.keys,
                r = o(e),
                a = o(t);
              return e && t && "object" === r && r === a
                ? n(e).length === n(t).length &&
                    n(e).every(function (n) {
                      return i.equals(e[n], t[n]);
                    })
                : e === t;
            }),
            e
          );
        })(),
        u = (function () {
          function e(e, t) {
            (this.editor = e), (this.props = t);
          }
          return (
            (e.prototype.delegateCursor = function (e, t, i) {
              var n = this.editor.getDoc();
              i && this.editor.focus(),
                t ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 });
            }),
            (e.prototype.delegateScroll = function (e) {
              this.editor.scrollTo(e.x, e.y);
            }),
            (e.prototype.delegateSelection = function (e, t) {
              this.editor.getDoc().setSelections(e), t && this.editor.focus();
            }),
            (e.prototype.apply = function (e) {
              e &&
                e.selection &&
                e.selection.ranges &&
                this.delegateSelection(
                  e.selection.ranges,
                  e.selection.focus || !1
                ),
                e &&
                  e.cursor &&
                  this.delegateCursor(
                    e.cursor,
                    e.autoScroll || !1,
                    this.editor.getOption("autofocus") || !1
                  ),
                e && e.scroll && this.delegateScroll(e.scroll);
            }),
            (e.prototype.applyNext = function (e, t, i) {
              e &&
                e.selection &&
                e.selection.ranges &&
                t &&
                t.selection &&
                t.selection.ranges &&
                !l.equals(e.selection.ranges, t.selection.ranges) &&
                this.delegateSelection(
                  t.selection.ranges,
                  t.selection.focus || !1
                ),
                e &&
                  e.cursor &&
                  t &&
                  t.cursor &&
                  !l.equals(e.cursor, t.cursor) &&
                  this.delegateCursor(
                    i.cursor || t.cursor,
                    t.autoScroll || !1,
                    t.autoCursor || !1
                  ),
                e &&
                  e.scroll &&
                  t &&
                  t.scroll &&
                  !l.equals(e.scroll, t.scroll) &&
                  this.delegateScroll(t.scroll);
            }),
            (e.prototype.applyUserDefined = function (e, t) {
              t &&
                t.cursor &&
                this.delegateCursor(
                  t.cursor,
                  e.autoScroll || !1,
                  this.editor.getOption("autofocus") || !1
                );
            }),
            (e.prototype.wire = function (e) {
              var t = this;
              Object.keys(e || {})
                .filter(function (e) {
                  return /^on/.test(e);
                })
                .forEach(function (e) {
                  switch (e) {
                    case "onBlur":
                      t.editor.on("blur", function (e, i) {
                        t.props.onBlur(t.editor, i);
                      });
                      break;
                    case "onContextMenu":
                      t.editor.on("contextmenu", function (e, i) {
                        t.props.onContextMenu(t.editor, i);
                      });
                      break;
                    case "onCopy":
                      t.editor.on("copy", function (e, i) {
                        t.props.onCopy(t.editor, i);
                      });
                      break;
                    case "onCursor":
                      t.editor.on("cursorActivity", function (e) {
                        t.props.onCursor(
                          t.editor,
                          t.editor.getDoc().getCursor()
                        );
                      });
                      break;
                    case "onCursorActivity":
                      t.editor.on("cursorActivity", function (e) {
                        t.props.onCursorActivity(t.editor);
                      });
                      break;
                    case "onCut":
                      t.editor.on("cut", function (e, i) {
                        t.props.onCut(t.editor, i);
                      });
                      break;
                    case "onDblClick":
                      t.editor.on("dblclick", function (e, i) {
                        t.props.onDblClick(t.editor, i);
                      });
                      break;
                    case "onDragEnter":
                      t.editor.on("dragenter", function (e, i) {
                        t.props.onDragEnter(t.editor, i);
                      });
                      break;
                    case "onDragLeave":
                      t.editor.on("dragleave", function (e, i) {
                        t.props.onDragLeave(t.editor, i);
                      });
                      break;
                    case "onDragOver":
                      t.editor.on("dragover", function (e, i) {
                        t.props.onDragOver(t.editor, i);
                      });
                      break;
                    case "onDragStart":
                      t.editor.on("dragstart", function (e, i) {
                        t.props.onDragStart(t.editor, i);
                      });
                      break;
                    case "onDrop":
                      t.editor.on("drop", function (e, i) {
                        t.props.onDrop(t.editor, i);
                      });
                      break;
                    case "onFocus":
                      t.editor.on("focus", function (e, i) {
                        t.props.onFocus(t.editor, i);
                      });
                      break;
                    case "onGutterClick":
                      t.editor.on("gutterClick", function (e, i, n, o) {
                        t.props.onGutterClick(t.editor, i, n, o);
                      });
                      break;
                    case "onInputRead":
                      t.editor.on("inputRead", function (e, i) {
                        t.props.onInputRead(t.editor, i);
                      });
                      break;
                    case "onKeyDown":
                      t.editor.on("keydown", function (e, i) {
                        t.props.onKeyDown(t.editor, i);
                      });
                      break;
                    case "onKeyHandled":
                      t.editor.on("keyHandled", function (e, i, n) {
                        t.props.onKeyHandled(t.editor, i, n);
                      });
                      break;
                    case "onKeyPress":
                      t.editor.on("keypress", function (e, i) {
                        t.props.onKeyPress(t.editor, i);
                      });
                      break;
                    case "onKeyUp":
                      t.editor.on("keyup", function (e, i) {
                        t.props.onKeyUp(t.editor, i);
                      });
                      break;
                    case "onMouseDown":
                      t.editor.on("mousedown", function (e, i) {
                        t.props.onMouseDown(t.editor, i);
                      });
                      break;
                    case "onPaste":
                      t.editor.on("paste", function (e, i) {
                        t.props.onPaste(t.editor, i);
                      });
                      break;
                    case "onRenderLine":
                      t.editor.on("renderLine", function (e, i, n) {
                        t.props.onRenderLine(t.editor, i, n);
                      });
                      break;
                    case "onScroll":
                      t.editor.on("scroll", function (e) {
                        t.props.onScroll(t.editor, t.editor.getScrollInfo());
                      });
                      break;
                    case "onSelection":
                      t.editor.on("beforeSelectionChange", function (e, i) {
                        t.props.onSelection(t.editor, i);
                      });
                      break;
                    case "onTouchStart":
                      t.editor.on("touchstart", function (e, i) {
                        t.props.onTouchStart(t.editor, i);
                      });
                      break;
                    case "onUpdate":
                      t.editor.on("update", function (e) {
                        t.props.onUpdate(t.editor);
                      });
                      break;
                    case "onViewportChange":
                      t.editor.on("viewportChange", function (e, i, n) {
                        t.props.onViewportChange(t.editor, i, n);
                      });
                  }
                });
            }),
            e
          );
        })();
      (function (e) {
        function t(t) {
          var i = e.call(this, t) || this;
          return (
            m ||
              ((i.applied = !1),
              (i.appliedNext = !1),
              (i.appliedUserDefined = !1),
              (i.deferred = null),
              (i.emulating = !1),
              (i.hydrated = !1),
              (i.initCb = function () {
                i.props.editorDidConfigure &&
                  i.props.editorDidConfigure(i.editor);
              }),
              (i.mounted = !1)),
            i
          );
        }
        r(t, e),
          (t.prototype.hydrate = function (e) {
            var t = this,
              i = e && e.options ? e.options : {},
              o = n({}, a.defaults, this.editor.options, i);
            Object.keys(o).some(function (e) {
              return t.editor.getOption(e) !== o[e];
            }) &&
              Object.keys(o).forEach(function (e) {
                i.hasOwnProperty(e) &&
                  t.editor.getOption(e) !== o[e] &&
                  (t.editor.setOption(e, o[e]), t.mirror.setOption(e, o[e]));
              }),
              this.hydrated ||
                (this.deferred
                  ? this.resolveChange(e.value)
                  : this.initChange(e.value || "")),
              (this.hydrated = !0);
          }),
          (t.prototype.initChange = function (e) {
            this.emulating = !0;
            var t = this.editor.getDoc(),
              i = t.lastLine(),
              n = t.getLine(t.lastLine()).length;
            t.replaceRange(e || "", { line: 0, ch: 0 }, { line: i, ch: n }),
              this.mirror.setValue(e),
              t.clearHistory(),
              this.mirror.clearHistory(),
              (this.emulating = !1);
          }),
          (t.prototype.resolveChange = function (e) {
            this.emulating = !0;
            var t = this.editor.getDoc();
            if (
              ("undo" === this.deferred.origin
                ? t.undo()
                : "redo" === this.deferred.origin
                ? t.redo()
                : t.replaceRange(
                    this.deferred.text,
                    this.deferred.from,
                    this.deferred.to,
                    this.deferred.origin
                  ),
              e && e !== t.getValue())
            ) {
              var i = t.getCursor();
              t.setValue(e), t.setCursor(i);
            }
            (this.emulating = !1), (this.deferred = null);
          }),
          (t.prototype.mirrorChange = function (e) {
            var t = this.editor.getDoc();
            return (
              "undo" === e.origin
                ? (t.setHistory(this.mirror.getHistory()), this.mirror.undo())
                : "redo" === e.origin
                ? (t.setHistory(this.mirror.getHistory()), this.mirror.redo())
                : this.mirror.replaceRange(e.text, e.from, e.to, e.origin),
              this.mirror.getValue()
            );
          }),
          (t.prototype.componentDidMount = function () {
            var e = this;
            m ||
              (this.props.defineMode &&
                this.props.defineMode.name &&
                this.props.defineMode.fn &&
                a.defineMode(
                  this.props.defineMode.name,
                  this.props.defineMode.fn
                ),
              (this.editor = a(this.ref, this.props.options)),
              (this.shared = new u(this.editor, this.props)),
              (this.mirror = a(function () {}, this.props.options)),
              this.editor.on("electricInput", function () {
                e.mirror.setHistory(e.editor.getDoc().getHistory());
              }),
              this.editor.on("cursorActivity", function () {
                e.mirror.setCursor(e.editor.getDoc().getCursor());
              }),
              this.editor.on("beforeChange", function (t, i) {
                if (!e.emulating) {
                  i.cancel(), (e.deferred = i);
                  var n = e.mirrorChange(e.deferred);
                  e.props.onBeforeChange &&
                    e.props.onBeforeChange(e.editor, e.deferred, n);
                }
              }),
              this.editor.on("change", function (t, i) {
                e.mounted &&
                  e.props.onChange &&
                  e.props.onChange(e.editor, i, e.editor.getValue());
              }),
              this.hydrate(this.props),
              this.shared.apply(this.props),
              (this.applied = !0),
              (this.mounted = !0),
              this.shared.wire(this.props),
              this.editor.getOption("autofocus") && this.editor.focus(),
              this.props.editorDidMount &&
                this.props.editorDidMount(
                  this.editor,
                  this.editor.getValue(),
                  this.initCb
                ));
          }),
          (t.prototype.componentDidUpdate = function (e) {
            if (!m) {
              var t = { cursor: null };
              this.props.value !== e.value && (this.hydrated = !1),
                this.props.autoCursor ||
                  void 0 === this.props.autoCursor ||
                  (t.cursor = this.editor.getDoc().getCursor()),
                this.hydrate(this.props),
                this.appliedNext ||
                  (this.shared.applyNext(e, this.props, t),
                  (this.appliedNext = !0)),
                this.shared.applyUserDefined(e, t),
                (this.appliedUserDefined = !0);
            }
          }),
          (t.prototype.componentWillUnmount = function () {
            m ||
              (this.props.editorWillUnmount && this.props.editorWillUnmount(a));
          }),
          (t.prototype.shouldComponentUpdate = function (e, t) {
            return !m;
          }),
          (t.prototype.render = function () {
            var e = this;
            if (m) return null;
            var t = this.props.className
              ? "react-codemirror2 " + this.props.className
              : "react-codemirror2";
            return s.createElement("div", {
              className: t,
              ref: function (t) {
                return (e.ref = t);
              },
            });
          });
      })(s.Component);
      var d = (function (e) {
        function t(t) {
          var i = e.call(this, t) || this;
          return (
            m ||
              ((i.applied = !1),
              (i.appliedUserDefined = !1),
              (i.continueChange = !1),
              (i.detached = !1),
              (i.hydrated = !1),
              (i.initCb = function () {
                i.props.editorDidConfigure &&
                  i.props.editorDidConfigure(i.editor);
              }),
              (i.mounted = !1),
              (i.onBeforeChangeCb = function () {
                i.continueChange = !0;
              })),
            i
          );
        }
        return (
          r(t, e),
          (t.prototype.hydrate = function (e) {
            var t = this,
              i = e && e.options ? e.options : {},
              o = n({}, a.defaults, this.editor.options, i);
            if (
              (Object.keys(o).some(function (e) {
                return t.editor.getOption(e) !== o[e];
              }) &&
                Object.keys(o).forEach(function (e) {
                  i.hasOwnProperty(e) &&
                    t.editor.getOption(e) !== o[e] &&
                    t.editor.setOption(e, o[e]);
                }),
              !this.hydrated)
            ) {
              var r = this.editor.getDoc(),
                s = r.lastLine(),
                m = r.getLine(r.lastLine()).length;
              r.replaceRange(
                e.value || "",
                { line: 0, ch: 0 },
                { line: s, ch: m }
              );
            }
            this.hydrated = !0;
          }),
          (t.prototype.componentDidMount = function () {
            var e = this;
            m ||
              ((this.detached = !0 === this.props.detach),
              this.props.defineMode &&
                this.props.defineMode.name &&
                this.props.defineMode.fn &&
                a.defineMode(
                  this.props.defineMode.name,
                  this.props.defineMode.fn
                ),
              (this.editor = a(this.ref, this.props.options)),
              (this.shared = new u(this.editor, this.props)),
              this.editor.on("beforeChange", function (t, i) {
                e.props.onBeforeChange &&
                  e.props.onBeforeChange(
                    e.editor,
                    i,
                    e.editor.getValue(),
                    e.onBeforeChangeCb
                  );
              }),
              this.editor.on("change", function (t, i) {
                e.mounted &&
                  e.props.onChange &&
                  (e.props.onBeforeChange
                    ? e.continueChange &&
                      e.props.onChange(e.editor, i, e.editor.getValue())
                    : e.props.onChange(e.editor, i, e.editor.getValue()));
              }),
              this.hydrate(this.props),
              this.shared.apply(this.props),
              (this.applied = !0),
              (this.mounted = !0),
              this.shared.wire(this.props),
              this.editor.getDoc().clearHistory(),
              this.props.editorDidMount &&
                this.props.editorDidMount(
                  this.editor,
                  this.editor.getValue(),
                  this.initCb
                ));
          }),
          (t.prototype.componentDidUpdate = function (e) {
            if (
              (this.detached &&
                !1 === this.props.detach &&
                ((this.detached = !1),
                e.editorDidAttach && e.editorDidAttach(this.editor)),
              this.detached ||
                !0 !== this.props.detach ||
                ((this.detached = !0),
                e.editorDidDetach && e.editorDidDetach(this.editor)),
              !m && !this.detached)
            ) {
              var t = { cursor: null };
              this.props.value !== e.value &&
                ((this.hydrated = !1),
                (this.applied = !1),
                (this.appliedUserDefined = !1)),
                e.autoCursor ||
                  void 0 === e.autoCursor ||
                  (t.cursor = this.editor.getDoc().getCursor()),
                this.hydrate(this.props),
                this.applied || (this.shared.apply(e), (this.applied = !0)),
                this.appliedUserDefined ||
                  (this.shared.applyUserDefined(e, t),
                  (this.appliedUserDefined = !0));
            }
          }),
          (t.prototype.componentWillUnmount = function () {
            m ||
              (this.props.editorWillUnmount && this.props.editorWillUnmount(a));
          }),
          (t.prototype.shouldComponentUpdate = function (e, t) {
            var i = !0;
            return m && (i = !1), this.detached && e.detach && (i = !1), i;
          }),
          (t.prototype.render = function () {
            var e = this;
            if (m) return null;
            var t = this.props.className
              ? "react-codemirror2 " + this.props.className
              : "react-codemirror2";
            return s.createElement("div", {
              className: t,
              ref: function (t) {
                return (e.ref = t);
              },
            });
          }),
          t
        );
      })(s.Component);
      t.Rt = d;
    },
  },
]);
