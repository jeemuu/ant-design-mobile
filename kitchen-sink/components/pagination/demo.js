webpackJsonp([26,87],{16:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(5),l=t(o),c=s(8),u=t(c),i=s(7),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,l=a.onClick,c=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:c,style:o,onClick:l})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},17:function(n,a,s){"use strict";s(12),s(29)},18:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(5),l=t(o),c=s(8),u=t(c),i=s(7),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,l=a.style,c=(0,m["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:c,style:l},o)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},19:function(n,a,s){"use strict";s(12),s(31)},24:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&M(n.props.children)?b["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(M(n)&&(n=n.split("").join(" ")),b["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(4),l=t(o),c=s(6),u=t(c),i=s(38),r=t(i),k=s(5),d=t(k),f=s(8),m=t(f),g=s(7),h=t(g),v=s(1),b=t(v),y=s(3),x=t(y),E=s(13),C=t(E),N=s(28),w=t(N),T=s(39),_=t(T),S=s(26),j=t(S),P=/^[\u4e00-\u9fa5]{2}$/,M=P.test.bind(P),z=function(n){function a(){return(0,d["default"])(this,a),(0,m["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,_["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback","activeStyle"]),s=(0,r["default"])(a,2),t=s[0],e=t.children,o=t.className,c=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.disabled,m=t.htmlType,g=t.icon,h=t.loading,v=t.touchFeedback,y=t.activeStyle,E=s[1],N=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===k),(0,u["default"])(n,c+"-loading",h),(0,u["default"])(n,c+"-inline",d),(0,u["default"])(n,c+"-disabled",f),n),T=(0,C["default"])({},this.props.style);v&&(T=(0,C["default"])(T,y),N[c+"-active"]=!0);var S=h?"loading":g,j=b["default"].Children.map(e,p);return b["default"].createElement("button",(0,l["default"])({},E,{style:T,type:m||"button",className:(0,x["default"])(N),disabled:f}),S?b["default"].createElement(w["default"],{type:S}):null,j)},a}(b["default"].Component);z.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1},a["default"]=(0,j["default"])(z),n.exports=a["default"]},26:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:{myName:a||"TouchableFeedbackComponent"},getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),c["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(4),o=t(p);a["default"]=e;var l=s(1),c=t(l),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},29:function(n,a){},31:function(n,a){},44:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(55),p=t(e),o=s(56),l=t(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},55:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(5),l=t(o),c=s(8),u=t(c),i=s(7),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.direction,t=a.wrap,e=a.justify,o=a.align,l=a.alignContent,c=a.className,u=a.children,i=a.prefixCls,r=a.style,k=a.onClick,f=(0,m["default"])((n={},(0,p["default"])(n,i,!0),(0,p["default"])(n,i+"-dir-row","row"===s),(0,p["default"])(n,i+"-dir-row-reverse","row-reverse"===s),(0,p["default"])(n,i+"-dir-column","column"===s),(0,p["default"])(n,i+"-dir-column-reverse","column-reverse"===s),(0,p["default"])(n,i+"-nowrap","nowrap"===t),(0,p["default"])(n,i+"-wrap","wrap"===t),(0,p["default"])(n,i+"-wrap-reverse","wrap-reverse"===t),(0,p["default"])(n,i+"-justify-start","start"===e),(0,p["default"])(n,i+"-justify-end","end"===e),(0,p["default"])(n,i+"-justify-center","center"===e),(0,p["default"])(n,i+"-justify-between","between"===e),(0,p["default"])(n,i+"-justify-around","around"===e),(0,p["default"])(n,i+"-align-top","top"===o||"start"===o),(0,p["default"])(n,i+"-align-middle","middle"===o||"center"===o),(0,p["default"])(n,i+"-align-bottom","bottom"===o||"end"===o),(0,p["default"])(n,i+"-align-baseline","baseline"===o),(0,p["default"])(n,i+"-align-stretch","stretch"===o),(0,p["default"])(n,i+"-align-content-start","start"===l),(0,p["default"])(n,i+"-align-content-end","end"===l),(0,p["default"])(n,i+"-align-content-center","center"===l),(0,p["default"])(n,i+"-align-content-between","between"===l),(0,p["default"])(n,i+"-align-content-around","around"===l),(0,p["default"])(n,i+"-align-content-stretch","stretch"===l),(0,p["default"])(n,c,c),n));return d["default"].createElement("div",{className:f,style:r,onClick:k},u)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},56:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(6),p=t(e),o=s(5),l=t(o),c=s(8),u=t(c),i=s(7),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.style,l=a.onClick,c=(0,m["default"])((n={},(0,p["default"])(n,e+"-item",!0),(0,p["default"])(n,t,t),n));return d["default"].createElement("div",{className:c,style:o,onClick:l},s)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},455:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(6),o=t(p),l=s(5),c=t(l),u=s(8),i=t(u),r=s(7),k=t(r),d=s(1),f=t(d),m=s(3),g=t(m),h=s(24),v=t(h),b=s(44),y=t(b),x=function(n){function a(s){(0,c["default"])(this,a);var t=(0,i["default"])(this,n.call(this,s));return t.state={current:s.current},t.onPrev=t.onPrev.bind(t),t.onNext=t.onNext.bind(t),t}return(0,k["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},a.prototype._hasPrev=function(){return this.state.current>0},a.prototype._hasNext=function(){return this.state.current<this.props.total},a.prototype._handleChange=function(n){return this.setState({current:n}),this.props.onChange&&this.props.onChange(n),n},a.prototype.onPrev=function(){this._handleChange(this.state.current-1)},a.prototype.onNext=function(){this._handleChange(this.state.current+1)},a.prototype.getIndexes=function(n){for(var a=[],s=0;s<n;s++)a.push(s);return a},a.prototype.render=function(){var n=this.props,a=n.prefixCls,s=n.className,t=n.mode,e=n.total,p=n.simple,l=n.prevText,c=n.nextText,u=this.state.current,i=(0,g["default"])((0,o["default"])({className:s},a+"-wrap",!0)),r=void 0;switch(t){case"button":r=f["default"].createElement(y["default"],null,f["default"].createElement(y["default"].Item,{className:a+"-wrap-btn "+a+"-wrap-btn-prev"},f["default"].createElement(v["default"],{inline:!0,disabled:u<=0,onClick:this.onPrev},l)),this.props.children?f["default"].createElement(y["default"].Item,null,this.props.children):!p&&f["default"].createElement(y["default"].Item,{className:i},f["default"].createElement("span",{className:"active"},u+1),"/",f["default"].createElement("span",null,e)),f["default"].createElement(y["default"].Item,{className:a+"-wrap-btn "+a+"-wrap-btn-next"},f["default"].createElement(v["default"],{disabled:u>=e-1,inline:!0,onClick:this.onNext},c)));break;case"number":r=f["default"].createElement("div",{className:i},f["default"].createElement("span",{className:"active"},u+1),"/",f["default"].createElement("span",null,e));break;case"pointer":var k=this.getIndexes(e);r=f["default"].createElement("div",{className:i},k.map(function(n){var s,t=(0,g["default"])((s={},(0,o["default"])(s,a+"-wrap-dot",!0),(0,o["default"])(s,a+"-wrap-dot-active",n===u),s));return f["default"].createElement("div",{className:t,key:"dot-"+n},f["default"].createElement("span",null))}));break;default:r=!1}return f["default"].createElement("div",{className:a},r)},a}(f["default"].Component);a["default"]=x,x.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:e},n.exports=a["default"]},456:function(n,a,s){"use strict";s(12),s(1089)},665:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(32),s(28)),p=t(e),o=(s(19),s(18)),l=t(o),c=(s(456),s(455)),u=t(c),i=(s(17),s(16)),r=t(i),k=s(1),d=t(k),f=s(2);t(f);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:0,title:"\u6309\u94ae\u5f62\u6001",filename:"components/pagination/demo/button.md",id:"components-pagination-demo-button"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6309\u94ae\u5185\u5e26\u6587\u672c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e26\u6587\u672c\u548cicon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\u4e0a\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n              nextText<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u4e0b\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n            <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9690\u85cf\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >simple</span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].createClass({displayName:"App",render:function(){return d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("div",{className:"pagination-container"},d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u6309\u94ae\u5185\u5e26\u6587\u672c"),d["default"].createElement(u["default"],{total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u5e26\u6587\u672c\u548cicon"),d["default"].createElement(u["default"],{total:5,current:1,prevText:d["default"].createElement("div",null,d["default"].createElement(p["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:d["default"].createElement("div",null,"\u4e0b\u4e00\u6b65",d["default"].createElement(p["default"],{type:"right"}))})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u9690\u85cf\u6570\u5b57"),d["default"].createElement(u["default"],{total:5,simple:!0,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),d["default"].createElement(u["default"],{mode:"number",total:5,current:3})),d["default"].createElement(r["default"],{size:"lg"})))}});return d["default"].createElement(n,null)},style:".demo-preview-item .loading-example * {\n  box-sizing: border-box;\n}\n.loading-example .title {\n  margin-bottom: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.demo-preview-item</span> <span class="token class" >.loading-example</span> * </span><span class="token punctuation" >{</span>\n  <span class="token property" >box-sizing</span><span class="token punctuation" >:</span> border-box<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},666:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(19),s(18)),p=t(e),o=(s(456),s(455)),l=t(o),c=(s(17),s(16)),u=t(c),i=s(1),r=t(i),k=s(2);t(k);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:2,title:"\u70b9\u72b6\u578b",filename:"components/pagination/demo/pointer.md",id:"components-pagination-demo-pointer"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u72b6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token string" >\'32px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n                <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pointer<span class="token punctuation" >"</span></span>\n                <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n                <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=r["default"].createClass({displayName:"App",render:function(){return r["default"].createElement("div",null,r["default"].createElement("div",{className:"pagination-container"},r["default"].createElement(u["default"],{size:"lg"}),r["default"].createElement(p["default"],null,r["default"].createElement("p",{className:"title"},"\u70b9\u72b6"),r["default"].createElement("div",{style:{marginBottom:"32px"}},r["default"].createElement(l["default"],{mode:"pointer",total:5,current:2}))),r["default"].createElement(u["default"],{size:"lg"})))}});return r["default"].createElement(n,null)},style:".loading-example .title {\n  margin-right: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},827:function(n,a,s){n.exports={button:s(665),pointer:s(666)}},1089:function(n,a){}});