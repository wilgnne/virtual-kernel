(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"++Bh":function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return n}))},"/XWH":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("pr4h");function a(e,t){if(null!=e)if(Object(n.e)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>a(t,e)))}}},"3L07":function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var n=r("AeFk"),a=r("sKyC"),o=r("4jWa"),i=r("CRla"),c=r("U6LL"),l=r("epLR"),s=r("pr4h"),u=r("F+Ee"),f=r("q1tI");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=Object(n.b)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),m=Object(a.a)(((e,t)=>{var r=Object(o.b)("Spinner",e),n=Object(i.b)(e),{label:a="Loading...",thickness:s="2px",speed:m="0.45s",color:b,emptyColor:h="transparent",className:y}=n,g=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["label","thickness","speed","color","emptyColor","className"]),v=Object(l.b)("chakra-spinner",y),O=d({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:s,borderBottomColor:h,borderLeftColor:h,color:b,animation:p+" "+m+" linear infinite"},r);return f.createElement(c.a.div,d({ref:t,__css:O,className:v},g),a&&f.createElement(u.a,null,a))}));s.a&&(m.displayName="Spinner");var b=r("qd8s"),h=r.n(b),y=r("KTVP");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var[v,O]=Object(y.a)({strict:!1,name:"ButtonGroupContext"}),j=Object(a.a)(((e,t)=>{var{size:r,colorScheme:n,variant:a,className:o,spacing:i="0.5rem",isAttached:s,isDisabled:u}=e,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),p=Object(l.b)("chakra-button__group",o),m=f.useMemo((()=>({size:r,colorScheme:n,variant:a,isDisabled:u})),[r,n,a,u]),b={display:"inline-flex"};return b=g({},b,s?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:i}}),f.createElement(v,{value:m},f.createElement(c.a.div,g({ref:t,role:"group",__css:b,className:p},d)))}));function w(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}s.a&&(j.displayName="ButtonGroup");var k=Object(a.a)(((e,t)=>{var r,n=O(),a=Object(o.b)("Button",x({},n,e)),s=Object(i.b)(e),{isDisabled:u=(null==n?void 0:n.isDisabled),isLoading:d,isActive:p,isFullWidth:m,children:b,leftIcon:y,rightIcon:g,loadingText:v,iconSpacing:j="0.5rem",type:k="button",spinner:E,className:C,as:P}=s,L=w(s,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),A=h()({},null!=(r=null==a?void 0:a._focus)?r:{},{zIndex:1}),N=x({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:m?"100%":"auto"},a,!!n&&{_focus:A});return f.createElement(c.a.button,x({disabled:u||d,ref:t,as:P,type:P?void 0:k,"data-active":Object(l.c)(p),"data-loading":Object(l.c)(d),__css:N,className:Object(l.b)("chakra-button",C)},L),y&&!d&&f.createElement(S,{marginEnd:j},y),d&&f.createElement(_,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:j,label:v},E),d?v||f.createElement(c.a.span,{opacity:0},b):b,g&&!d&&f.createElement(S,{marginStart:j},g))}));s.a&&(k.displayName="Button");var S=e=>{var{children:t,className:r}=e,n=w(e,["children","className"]),a=f.isValidElement(t)?f.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,o=Object(l.b)("chakra-button__icon",r);return f.createElement(c.a.span,x({},n,{className:o}),a)};s.a&&(S.displayName="ButtonIcon");var _=e=>{var{label:t,spacing:r,children:n=f.createElement(m,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:o}=e,i=w(e,["label","spacing","children","className","__css"]),s=Object(l.b)("chakra-button__spinner",a),u=x({display:"flex",alignItems:"center",position:t?"relative":"absolute",marginEnd:t?r:0},o);return f.createElement(c.a.div,x({className:s},i,{__css:u}),n)};s.a&&(_.displayName="ButtonSpinner")},"4jWa":function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return d}));var n=r("BXwj"),a=r("qd8s"),o=r.n(a),i=r("KwD7"),c=r("q1tI"),l=r("bmMU"),s=r.n(l),u=r("E9O5");function f(e,t,r){var a,l;void 0===t&&(t={}),void 0===r&&(r={});var{styleConfig:f}=t,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),{theme:p,colorMode:m}=Object(u.a)(),b=Object(n.d)(p,"components."+e),h=f||b,y=o()({theme:p,colorMode:m},null!=(a=null==h?void 0:h.defaultProps)?a:{},Object(n.a)(Object(n.g)(d,["children"]))),g=Object(c.useRef)({});return Object(c.useMemo)((()=>{if(h){var e,t,n,a,c,l,u=Object(i.c)(null!=(e=h.baseStyle)?e:{},y),f=Object(i.c)(null!=(t=null==(n=h.variants)?void 0:n[y.variant])?t:{},y),d=Object(i.c)(null!=(a=null==(c=h.sizes)?void 0:c[y.size])?a:{},y),p=o()({},u,d,f);null!=(l=r)&&l.isMultiPart&&h.parts&&h.parts.forEach((e=>{var t;p[e]=null!=(t=p[e])?t:{}})),s()(g.current,p)||(g.current=p)}return g.current}),[h,y,null==(l=r)?void 0:l.isMultiPart])}function d(e,t){return f(e,t,{isMultiPart:!0})}},"6FTQ":function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},"8rE2":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("6FTQ");function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},"8tO+":function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,"a",(function(){return n}))},CRla:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var n=r("BXwj"),a=(r("pr4h"),["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"]);function o(e){return Object(n.g)(e,["styleConfig","size","variant","colorScheme"])}},DNJr:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI");function a(e){return n.Children.toArray(e).filter((e=>n.isValidElement(e)))}},E9O5:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("+p43"),a=(r("BXwj"),r("qd8s"),r("KwD7"),r("q1tI"),r("bmMU"),r("5+Am"));r("CRla");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(){return o({},Object(n.b)(),{theme:Object(a.e)()})}},"F+Ee":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("U6LL"),a=r("pr4h"),o={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},i=Object(n.a)("span",{baseStyle:o});a.a&&(i.displayName="VisuallyHidden");var c=Object(n.a)("input",{baseStyle:o});a.a&&(c.displayName="VisuallyHiddenInput")},F2j1:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r("sKyC"),a=r("U6LL"),o=r("pr4h"),i=r("x9W9"),c=r("BXwj"),l=r("q1tI");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=Object(n.a)(((e,t)=>{var{area:r,templateAreas:n,gap:o,rowGap:i,columnGap:c,column:f,row:d,autoFlow:p,autoRows:m,templateRows:b,autoColumns:h,templateColumns:y}=e,g=u(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),v={display:"grid",gridArea:r,gridTemplateAreas:n,gridGap:o,gridRowGap:i,gridColumnGap:c,gridAutoColumns:h,gridColumn:f,gridRow:d,gridAutoFlow:p,gridAutoRows:m,gridTemplateRows:b,gridTemplateColumns:y};return l.createElement(a.a.div,s({ref:t,__css:v},g))}));function d(e){return Object(i.b)(e,(e=>"auto"===e?"auto":"span "+e+"/span "+e))}o.a&&(f.displayName="Grid");var p=Object(n.a)(((e,t)=>{var{colSpan:r,colStart:n,colEnd:o,rowEnd:i,rowSpan:f,rowStart:p}=e,m=u(e,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),b=Object(c.a)({gridColumn:d(r),gridRow:d(f),gridColumnStart:n,gridColumnEnd:o,gridRowStart:p,gridRowEnd:i});return l.createElement(a.a.div,s({ref:t,__css:b},m))}))},MAJE:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("sKyC"),a=r("4jWa"),o=r("CRla"),i=r("U6LL"),c=r("BXwj"),l=r("epLR"),s=r("pr4h"),u=r("q1tI");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=Object(n.a)(((e,t)=>{var r=Object(a.b)("Text",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(Object(o.b)(e),["className","align","decoration","casing"]),s=Object(c.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(i.a.p,f({ref:t,className:Object(l.b)("chakra-text",e.className)},s,n,{__css:r}))}));s.a&&(d.displayName="Text")},"T/aA":function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return n}))},U6LL:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r("0sYf"),a=r("BXwj"),o=(r("pVnL"),r("q1tI")),i=r("SVgp"),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=Object(i.a)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),s=r("wx14"),u=r("cSFU"),f=r("eVQB"),d=r("Exhd"),p=l,m=function(e){return"theme"!==e},b=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?p:m},h=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},y=function e(t,r){var n,a,i=t.__emotion_real===t,c=i&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var l=h(t,r,i),p=l||b(c),m=!p("as");return function(){var y=arguments,g=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&g.push("label:"+n+";"),null==y[0]||void 0===y[0].raw)g.push.apply(g,y);else{0,g.push(y[0][0]);for(var v=y.length,O=1;O<v;O++)g.push(y[O],y[0][O])}var j=Object(u.f)((function(e,t,r){var n=m&&e.as||c,i="",s=[],h=e;if(null==e.theme){for(var y in h={},e)h[y]=e[y];h.theme=Object(o.useContext)(u.b)}"string"===typeof e.className?i=Object(f.a)(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var v=Object(d.a)(g.concat(s),t.registered,h);Object(f.b)(t,v,"string"===typeof n);i+=t.key+"-"+v.name,void 0!==a&&(i+=" "+a);var O=m&&void 0===l?b(n):p,j={};for(var w in e)m&&"as"===w||O(w)&&(j[w]=e[w]);return j.className=i,j.ref=r,Object(o.createElement)(n,j)}));return j.displayName=void 0!==n?n:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",j.defaultProps=t.defaultProps,j.__emotion_real=j,j.__emotion_base=c,j.__emotion_styles=g,j.__emotion_forwardProp=l,Object.defineProperty(j,"toString",{value:function(){return"."+a}}),j.withComponent=function(t,n){return e(t,Object(s.a)({},r,{},n,{shouldForwardProp:h(j,n,!0)})).apply(void 0,g)},j}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){y[e]=y(e)}));var g=y,v=r("bKnd"),O=r("CRla");function j(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var w=function(e,t){var r=null!=t?t:{},{baseStyle:o}=r,i=j(r,["baseStyle"]);i.shouldForwardProp||(i.shouldForwardProp=v.a);var c=(e=>{var{baseStyle:t}=e;return e=>{var{css:r,__css:o,sx:i}=e,c=j(e,["theme","css","__css","sx"]),l=Object(a.e)(c,((e,t)=>Object(n.isStyleProp)(t))),s=Object.assign({},o,t,l,i),u=Object(n.css)(s)(e.theme);return r?[u,r]:u}})({baseStyle:o});return g(e,i)(c)};O.a.forEach((e=>{w[e]=w(e)}))},YFqc:function(e,t,r){e.exports=r("cTJO")},bKnd:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("0sYf"),a=new Set([...n.propNames,"textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),o=new Set(["htmlWidth","htmlHeight","htmlSize"]),i=e=>o.has(e)||!a.has(e)},bmMU:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,a="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=t.length)return!1;for(l=c;0!==l--;)if(!i(e[l],t[l]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!t.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],t.get(l.value[0])))return!1;return!0}if(a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!t.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((c=e.length)!=t.length)return!1;for(l=c;0!==l--;)if(e[l]!==t[l])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(l=c;0!==l--;)if(!Object.prototype.hasOwnProperty.call(t,s[l]))return!1;if(r&&e instanceof Element)return!1;for(l=c;0!==l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],t[s[l]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),a=r("7KCV");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),i=r("elyg"),c=r("nOHt"),l=r("vNVm"),s={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,b=e.replace,h=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var v=o.Children.only(m),O=v&&"object"===typeof v&&v.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),w=n(j,2),x=w[0],k=w[1],S=o.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,o.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof g?g:r&&r.locale,a=s[d+"%"+p+(n?"%"+n:"")];e&&!a&&u(r,d,p,{locale:n})}),[p,d,k,g,t,r]);var _={ref:S,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:c}))}(e,r,d,p,b,h,y,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof g?g:r&&r.locale,C=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,E,r&&r.locales,r&&r.domainLocales);_.href=C||(0,i.addBasePath)((0,i.addLocale)(p,E,r&&r.defaultLocale))}return o.default.cloneElement(v,_)};t.default=f},sKyC:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI");function a(e){return n.forwardRef(e)}},t6h6:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("q1tI"),a=r("zlS4"),o=!1,i=0,c=()=>++i;function l(e,t){var r=e||(o?c():null),[i,l]=n.useState(r);Object(a.a)((()=>{null===i&&l(c())}),[]),n.useEffect((()=>{!1===o&&(o=!0)}),[]);var s=null!=i?i.toString():void 0;return t?t+"-"+s:s}},tofy:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("sKyC"),a=r("U6LL"),o=r("pr4h"),i=r("q1tI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=Object(n.a)(((e,t)=>{var{direction:r,align:n,justify:o,wrap:l,basis:s,grow:u,shrink:f}=e,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:r,alignItems:n,justifyContent:o,flexWrap:l,flexBasis:s,flexGrow:u,flexShrink:f};return i.createElement(a.a.div,c({ref:t,__css:p},d))}));o.a&&(l.displayName="Flex")},v7Hm:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("U6LL"),a=r("sKyC"),o=r("pr4h"),i=r("q1tI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var s=Object(n.a)("div");o.a&&(s.displayName="Box");var u=Object(a.a)(((e,t)=>{var{size:r,centerContent:n=!0}=e,a=l(e,["size","centerContent"]),o=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(s,c({ref:t,boxSize:r,__css:c({},o,{flexShrink:0,flexGrow:0})},a))}));o.a&&(u.displayName="Square");var f=Object(a.a)(((e,t)=>{var{size:r}=e,n=l(e,["size"]);return i.createElement(u,c({size:r,ref:t,borderRadius:"9999px"},n))}));o.a&&(f.displayName="Circle")},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=(0,a.useRef)(),s=(0,a.useState)(!1),u=n(s,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r("q1tI"),o=r("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},vOmp:function(e,t,r){"use strict";var n=r("cpVT"),a=r("nKUr"),o=r("xvhg"),i=r("q1tI"),c=r.n(i),l=r("v7Hm"),s=r("MAJE");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){return Object(a.jsx)(l.a,f(f({},e),{},{children:Object(a.jsx)(s.a,{color:"blue.800",fontSize:"lg",fontWeight:"bold",children:"Virtual Kernel \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb"})}))},p=r("sKyC");var m=r("U6LL");"undefined"===typeof window||!window.document||window.document.createElement;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h={path:i.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},i.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),i.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),i.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},y=Object(p.a)(((e,t)=>{var{as:r,viewBox:n,color:a="currentColor",focusable:o=!1,children:c,className:l,__css:s}=e,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),f={ref:t,focusable:o,className:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}("chakra-icon",l),__css:b({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:a},s)},d=null!=n?n:h.viewBox;if(r&&"string"!==typeof r)return i.createElement(m.a.svg,b({as:r},f,u));var p=null!=c?c:h.path;return i.createElement(m.a.svg,b({verticalAlign:"middle",viewBox:d},f,u),p)}));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e){var{viewBox:t="0 0 24 24",d:r,path:n,displayName:a,defaultProps:o={}}=e,c=Object(p.a)(((e,a)=>i.createElement(y,g({ref:a,viewBox:t},o,e),null!=n?n:i.createElement("path",{fill:"currentColor",d:r}))));return c}var O=v({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),j=v({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"}),w=function(e){var t=e.toggle,r=e.isOpen;return Object(a.jsx)(l.a,{display:{base:"block",md:"none"},onClick:t,children:r?Object(a.jsx)(O,{}):Object(a.jsx)(j,{})})},x=r("wZsY");function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var S=r("YFqc"),_=r.n(S);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t=e.children,r=e.to,n=void 0===r?"/":r,o=k(e,["children","to"]);return Object(a.jsx)(_.a,{href:n,as:"virtual-kernel/"+n,children:Object(a.jsx)(s.a,C(C({display:"block"},o),{},{children:t}))})},L=function(e){var t=e.isOpen;return Object(a.jsx)(l.a,{display:{base:t?"block":"none",md:"block"},flexBasis:{base:"100%",md:"auto"},children:Object(a.jsxs)(x.a,{spacing:8,align:"center",justify:["center","space-between","flex-end","flex-end"],direction:["column","row","row","row"],pt:[4,4,0,0],children:[Object(a.jsx)(P,{to:"/",children:"Scheduler"}),Object(a.jsx)(P,{to:"/memory",children:"Memory"}),Object(a.jsx)(P,{to:"/fs",children:"File System"})]})})},A=r("tofy");function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.children,r=k(e,["children"]);return Object(a.jsx)(A.a,I(I({as:"nav",align:"center",justify:"space-between",wrap:"wrap",w:"100%",mb:8,p:8},r),{},{children:t}))};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=c.a.useState(!1),r=Object(o.a)(t,2),n=r[0],i=r[1];return Object(a.jsxs)(R,B(B({},e),{},{children:[Object(a.jsx)(d,{w:"150px"}),Object(a.jsx)(w,{toggle:function(){return i(!n)},isOpen:n}),Object(a.jsx)(L,{isOpen:n})]}))}},wZsY:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return m}));var n=r("U6LL"),a=r("sKyC"),o=r("epLR"),i=r("pr4h"),c=r("DNJr"),l=r("q1tI"),s=r("x9W9"),u="& > *:not(style) ~ *:not(style)";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=e=>l.createElement(n.a.div,f({className:"chakra-stack__divider"},e,{__css:f({},e.__css,{borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"})})),p=e=>l.createElement(n.a.div,f({className:"chakra-stack__item"},e,{__css:f({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),m=Object(a.a)(((e,t)=>{var{isInline:r,direction:a,align:i,justify:d,spacing:m="0.5rem",wrap:b,children:h,divider:y,className:g,shouldWrapChildren:v}=e,O=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),j=r?"row":null!=a?a:"column",w=l.useMemo((()=>function(e){var{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[u]:Object(s.b)(r,(e=>n[e]))}}({direction:j,spacing:m})),[j,m]),x=l.useMemo((()=>function(e){var{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Object(s.b)(r,(e=>n[e]))}}({spacing:m,direction:j})),[m,j]),k=!!y,S=!v&&!k,_=Object(c.a)(h),E=S?_:_.map(((e,t)=>{var r=t+1===_.length,n=v?l.createElement(p,{key:t},e):e;if(!k)return n;var a=r?null:l.cloneElement(y,{__css:x});return l.createElement(l.Fragment,{key:t},n,a)})),C=Object(o.b)("chakra-stack",g);return l.createElement(n.a.div,f({ref:t,display:"flex",alignItems:i,justifyContent:d,flexDirection:w.flexDirection,flexWrap:b,className:C,__css:k?{}:{[u]:w[u]}},O),E)}));i.a&&(m.displayName="Stack");var b=Object(a.a)(((e,t)=>l.createElement(m,f({align:"center"},e,{direction:"row",ref:t}))));i.a&&(b.displayName="HStack");var h=Object(a.a)(((e,t)=>l.createElement(m,f({align:"center"},e,{direction:"column",ref:t}))));i.a&&(h.displayName="VStack")},xvhg:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("T/aA");var a=r("8rE2"),o=r("++Bh");function i(e,t){return Object(n.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||Object(a.a)(e,t)||Object(o.a)()}},zlS4:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI"),a=r("epLR").d?n.useLayoutEffect:n.useEffect}}]);