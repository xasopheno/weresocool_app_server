(this.webpackJsonpapp_frontend=this.webpackJsonpapp_frontend||[]).push([[0],{48:function(e,n,t){e.exports=t(86)},77:function(e,n,t){"use strict";(function(e){var n=t(19),a=t.n(n);a.a.define("ace/theme/wsc",["require","exports","module","ace/lib/dom"],(function(e,n,t){n.isDark=!0,n.cssClass="ace-wsc-theme",n.cssText=".ace-wsc-theme .ace_gutter {background: #1a0005;}.ace-wsc-theme {background: #1a0005;color: #929292  font-color: red}.ace-wsc-theme .ace_print-margin {width: 1px;background: #1a1a1a}.ace-wsc-theme { background-color: #111102;color: #DEDEDE}.ace-wsc-theme .ace_cursor {color: #9F9F9F}.ace-wsc-theme .ace_marker-layer .ace_selection {background: #424242}.ace-wsc-theme.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px black;}.ace-wsc-theme .ace_marker-layer .ace_step {background: rgb(0, 0, 0)}.ace-wsc-theme .ace_marker-layer .ace_bracket {background: salmon;}.ace-wsc-theme .ace_marker-layer .ace_bracket-start {background: orange;}.ace-wsc-theme .ace_marker-layer .ace_bracket-unmatched {margin: -1px 0 0 -1px;border: 1px solid #900}.ace-wsc-theme .ace_marker-layer .ace_active-line {background: #2A2A2A}.ace-wsc-theme .ace_gutter-active-line {background-color: #2A112A}.ace-wsc-theme .ace_invisible {color: #343434}.ace-wsc-theme .ace_operation {color: #ff6168}.ace-wsc-theme .ace_danny {color: deeppink}.ace-wsc-theme .ace_group_operation {color: steelblue}.ace-wsc-theme .ace_group_operation_other {color: #FFD866}.ace-wsc-theme .ace_o_shortcut {color: #E78C45}.ace-wsc-theme .ace_pipe {color: #D54E53}.ace-wsc-theme .ace_bracket {color: #7AA6DA}.ace-wsc-theme .ace_curly {color: tomato}.ace-wsc-theme .ace_list {color: orange}.ace-wsc-theme .ace_repeat {color: #A9DC76}.ace-wsc-theme .ace_comment {color: grey}.ace-wsc-theme .ace_number {color: cornsilk}.ace-wsc-theme .ace_slash {color: tan}.ace-wsc-theme .ace_zero {color: wheat}.ace-wsc-theme .ace_zero {color: wheat}.ace-wsc-theme .ace_letter {color: #FFCFFF}.ace-wsc-theme .ace_string {color: #B9CA4A}.error {  background: lightsalmon;  opacity: 0.2;  position:absolute;  z-index:20;}",e("../lib/dom").importCssString(n.cssText,n.cssClass)})),a.a.require(["ace/theme/wsc"],(function(n){"object"==typeof exports&&e&&(e.exports=n)}))}).call(this,t(78)(e))},85:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(36),o=t.n(c),i=t(10),l=t(37),u=t(12),s=t(13),m=t(46),g=t(7),h=t(18),f=t.n(h),d=t(38),b=t(8),p=t(39),w=t.n(p),k=t(40),x=t.n(k),v=t(41),_=t.n(v),y=(t(77),t(4)),O=t(5);function j(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return j=function(){return e},e}function E(){var e=Object(y.a)(["\n  font-size: 1em;\n  background-color: #454343;\n  margin-right: 2em;\n  color: #edd;\n  &:visited {\n    outline: none;\n  }\n  &:active {\n    outline: none;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-left: 10%;\n"]);return C=function(){return e},e}function F(){var e=Object(y.a)(["\n  vertical-align: middle;\n  margin-bottom: 0px;\n"]);return F=function(){return e},e}function S(){var e=Object(y.a)(["\n  font-family: 'Courier New', Courier, monospace;\n  text-align: bottom;\n  color: #cbb;\n  font-size: 1em;\n  padding-right: 0.2em;\n"]);return S=function(){return e},e}function A(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-right: 10%;\n"]);return A=function(){return e},e}function R(){var e=Object(y.a)(["\n  background-color: #454343;\n  height: 100vh;\n"]);return R=function(){return e},e}function z(){var e=Object(y.a)(["\n  font-family: 'Courier New', Courier, monospace;\n  //text-align: center;\n  color: ",";\n  font-size: 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  color: gold;\n"]);return z=function(){return e},e}function L(){var e=Object(y.a)(["\n  font-family: 'Courier New', Courier, monospace;\n  text-align: center;\n  color: #cbb;\n  font-size: 1em;\n"]);return L=function(){return e},e}function q(){var e=Object(y.a)(["\n  font-family: 'Courier New', Courier, monospace;\n  text-align: center;\n  padding-top: 10px;\n  color: #edd;\n  font-size: 1.5em;\n"]);return q=function(){return e},e}var T,D=O.a.h1(q()),M=O.a.p(L()),B=O.a.p(z(),(function(e){return e.color})),I=O.a.div(R()),N=O.a.div(A()),P=O.a.label(S()),$=O.a.input(F()),H=O.a.div(C()),W=O.a.button(E()),G=O.a.div(j()),V=(t(80),function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).$rules={start:[{token:"comment",regex:"--.*$"},{token:"number",regex:"[1-9]"},{token:"zero",regex:"[0]"},{token:"danny",regex:"f:|l:|g:|p:"},{token:"slash",regex:"/"},{token:"keyword",regex:"#"},{token:"curly",regex:"{|}"},{token:"bracket",regex:"\\[|\\]"},{token:"paren",regex:"\\(|\\)"},{token:"pipe",regex:"\\|"},{token:"keyword",regex:">"},{token:"curly",regex:"="},{token:"dot",regex:"\\."},{token:"group_operation_other",regex:"FitLength|ModulateBy|Reverse|ModBy"},{token:"repeat",regex:"Repeat"},{token:"group_operation",regex:"Sequence|Overlay|Seq"},{token:"o_shortcut",regex:"O"},{token:"operation",regex:"AsIs|Tm|Ta|PanA|PanM|Gain|Length|Fm|Fa|Pa|Pm|Lm|Gm"},{token:"list",regex:"@|List"},{token:"letter",regex:"[a-z]"}]},e}return t}(window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules)),J=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).HighlightRules=V,e.lineCommentStart="--",e.getNextLineIndent=function(e,n,t){var a=this.$getIndent(n),r=this.getTokenizer().getLineTokens(n,e).tokens;if(r.length&&"comment"===r[r.length-1].type)return a;"start"===e&&(n.match(/^.*[{([]\s*$/)&&(a+=t));return a},e}return t}(window.ace.acequire("ace/mode/text").Mode),K="{ f: 270, l: 1, g: 1, p: 0 }\n\novertones = {\n  O[\n    (5/2, 0, 1/2, 0),\n    (3/2, 2, 1, 1),\n    (1/1, 0, 1, -1),\n  ]\n}\n\nthing1 = {\n  overtones |\n  Sequence [\n    Fm 1,\n    Fm 9/8,\n    Fm 5/4,\n  ] \n  | ModBy [\n    Seq [Fm 1/2, Fm 3/4,  Fm 1] | Repeat 7\n  ]\n}\n\nthing2 = {\n  Overlay [\n    Fm 3, Fa 3 | Fm 3\n  ]\n  | Seq [Fm 1, Fm 5/6, Fm 7/8 | Lm 1/3]\n  | Fm 5/4\n  > FitLength thing1\n}\n\nmain = {\n  Overlay [\n    thing1, \n    thing2\n  ]\n  | Seq [Fm 1, Fm 7/8]\n  | Repeat 4\n}\n",Q={backend:"http://localhost:4599/api"},U=(t(81),t(82),t(83),"".concat(Q.backend,"/render")),X=new J;!function(e){e[e.Cool=0]="Cool",e[e.Rendering=1]="Rendering"}(T||(T={}));var Y=function(){var e=Object(a.useState)(T.Cool),n=Object(b.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(b.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(!0),m=Object(b.a)(s,2),g=m[0],h=m[1],p=Object(a.useState)(),k=Object(b.a)(p,2),v=k[0],y=k[1],O=Object(a.useState)(K),j=Object(b.a)(O,2),E=j[0],C=j[1],F=Object(a.useState)(!1),S=Object(b.a)(F,2),A=S[0],R=S[1],z=Object(a.useState)([]),L=Object(b.a)(z,2),q=L[0],V=L[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=15;break}return V([]),e.prev=2,c(T.Rendering),e.next=6,x.a.post(U,{language:E});case 6:e.sent,v&&localStorage.setItem("language",E),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:c(T.Cool),R(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}})()()}),[A,E,v]),Object(a.useEffect)((function(){v&&(v.editor.getSession().setMode(X),v.editor.setTheme("ace/theme/wsc"))}),[v]),Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("language");e&&C(e)}()}),[]),Object(a.useEffect)((function(){l&&u(!1)}),[l]);var J=function(){return t===T.Rendering?r.a.createElement(B,null,"Rendering"):r.a.createElement("div",null)},Q=function(e){return r.a.createElement("input",Object.assign({type:"file",name:"file-input",accept:".socool"},e))};return r.a.createElement(I,null,r.a.createElement(Q,{onChange:function(e){var n=e.target.files[0],t=new FileReader;t.onload=function(e){C(e.target.result)},t.readAsText(n)}}),r.a.createElement("button",{onClick:function(){var e=new Blob(["Hello, world!"],{type:"text/plain;charset=utf-8"});_.a.saveAs(e,"hello world.txt")}}),r.a.createElement(D,null,"WereSoCool"),r.a.createElement(M,null,"Make cool sounds. Impress your friends/pets/plants."),r.a.createElement(G,null,r.a.createElement(H,null,r.a.createElement(W,{onClick:function(){return R(!0)}},"Render"),r.a.createElement(W,{onClick:function(){}},"Stop"),r.a.createElement(J,null)),r.a.createElement(N,null,r.a.createElement(W,{onClick:function(){return C(K)}},"Reset"),r.a.createElement(P,null,g?"Vim!":"Vim?"),r.a.createElement($,{name:"Vim",type:"checkbox",checked:!!g,onChange:function(){return h(!g)}}))),r.a.createElement(w.a,{focus:!0,ref:function(e){y(e)},placeholder:"WereSoCool",mode:"elixir",theme:"github",name:"aceEditor",keyboardHandler:g?"vim":"",value:E,onChange:function(e){return C(e)},markers:q,fontSize:20,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{showLineNumbers:!0,tabSize:2},commands:[{name:"submit",bindKey:{win:"Shift-Enter",mac:"Shift-Enter"},exec:function(){R(!0)}},{name:"save",bindKey:{win:"Command-s",mac:"Command-s"},exec:function(){u(!0)}}],style:{height:"80vh",width:"80vw",marginLeft:"10vw"}}))},Z=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return a.createElement(m.a,null,a.createElement(g.c,null,a.createElement(g.a,{path:"/",children:a.createElement(Y,null)})))}}]),t}(a.Component);t(85),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.cf988eea.chunk.js.map