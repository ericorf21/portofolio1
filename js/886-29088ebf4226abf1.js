
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{5193:function(a,b,c){"use strict";c.d(b,{zx:function(){return x}});var d=c(7375),e=c(7178),f=c(9703),g=c(8554),h=c.n(g),i=c(7294),j=c(6450),k=c(9238);function l(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function m(){return(m=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var n=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],o=(0,j.kr)({strict:!1,name:"ButtonGroupContext"}),p=o[0],q=o[1],r=(0,e.Gp)(function(a,b){var c=a.size,d=a.colorScheme,g=a.variant,h=a.className,j=a.spacing,k=a.isAttached,o=a.isDisabled,q=l(a,n),r=(0,f.cx)("chakra-button__group",h),s=i.useMemo(function(){return{size:c,colorScheme:d,variant:g,isDisabled:o}},[c,d,g,o]),t={display:"inline-flex"};return t=k?m({},t,{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):m({},t,{"& > *:not(style) ~ *:not(style)":{marginStart:void 0===j?"0.5rem":j}}),i.createElement(p,{value:s},i.createElement(e.m$.div,m({ref:b,role:"group",__css:t,className:r,"data-attached":k?"":void 0},q)))});f.Ts&&(r.displayName="ButtonGroup");var s=["label","placement","spacing","children","className","__css"],t=function(a){var b=a.label,c=a.placement,d=a.spacing,g=void 0===d?"0.5rem":d,h=a.children,j=void 0===h?i.createElement(k.$,{color:"currentColor",width:"1em",height:"1em"}):h,n=a.className,o=a.__css,p=l(a,s),q=(0,f.cx)("chakra-button__spinner",n),r="start"===c?"marginEnd":"marginStart",t=i.useMemo(function(){var a;return m(((a={display:"flex",alignItems:"center",position:b?"relative":"absolute"})[r]=b?g:0,a.fontSize="1em",a.lineHeight="normal",a),o)},[o,b,r,g]);return i.createElement(e.m$.div,m({className:q},p,{__css:t}),j)};f.Ts&&(t.displayName="ButtonSpinner");var u=["children","className"],v=function(a){var b=a.children,c=a.className,d=l(a,u),g=i.isValidElement(b)?i.cloneElement(b,{"aria-hidden":!0,focusable:!1}):b,h=(0,f.cx)("chakra-button__icon",c);return i.createElement(e.m$.span,m({display:"inline-flex",alignSelf:"center",flexShrink:0},d,{className:h}),g)};f.Ts&&(v.displayName="ButtonIcon");var w=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],x=(0,e.Gp)(function(a,b){var c,g,j,k,n,o=q(),p=(0,e.mq)("Button",m({},o,a)),r=(0,e.Lr)(a),s=r.isDisabled,u=void 0===s?null==o?void 0:o.isDisabled:s,v=r.isLoading,x=r.isActive,z=r.children,A=r.leftIcon,B=r.rightIcon,C=r.loadingText,D=r.iconSpacing,E=void 0===D?"0.5rem":D,F=r.type,G=r.spinner,H=r.spinnerPlacement,I=void 0===H?"start":H,J=r.className,K=r.as,L=l(r,w),M=i.useMemo(function(){var a,b=h()({},null!=(a=null==p?void 0:p["_focus"])?a:{},{zIndex:1});return m({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},p,!!o&&{_focus:b})},[p,o]),N=(c=K,j=(g=i.useState(!c))[0],k=g[1],n=i.useCallback(function(a){a&&k("BUTTON"===a.tagName)},[]),{ref:n,type:j?"button":void 0}),O=N.ref,P=N.type,Q={rightIcon:B,leftIcon:A,iconSpacing:E,children:z};return i.createElement(e.m$.button,m({disabled:u||v,ref:(0,d.qq)(b,O),as:K,type:null!=F?F:P,"data-active":(0,f.PB)(x),"data-loading":(0,f.PB)(v),__css:M,className:(0,f.cx)("chakra-button",J)},L),v&&"start"===I&&i.createElement(t,{className:"chakra-button__spinner--start",label:C,placement:"start",spacing:E},G),v?C||i.createElement(e.m$.span,{opacity:0},i.createElement(y,Q)):i.createElement(y,Q),v&&"end"===I&&i.createElement(t,{className:"chakra-button__spinner--end",label:C,placement:"end",spacing:E},G))});function y(a){var b=a.leftIcon,c=a.rightIcon,d=a.children,e=a.iconSpacing;return i.createElement(i.Fragment,null,b&&i.createElement(v,{marginEnd:e},b),d,c&&i.createElement(v,{marginStart:e},c))}f.Ts&&(x.displayName="Button");var z=["icon","children","isRound","aria-label"],A=(0,e.Gp)(function(a,b){var c=a.icon,d=a.children,e=a.isRound,f=a["aria-label"],g=l(a,z),h=c||d,j=i.isValidElement(h)?i.cloneElement(h,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(x,m({padding:"0",borderRadius:e?"full":void 0,ref:b,"aria-label":f},g),j)});f.Ts&&(A.displayName="IconButton")},4651:function(a,b,c){"use strict";c.d(b,{Ee:function(){return m}});var d=c(7178),e=c(9703),f=c(7294),g=c(4697);function h(){return(h=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function i(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var j=["htmlWidth","htmlHeight","alt"],k=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],l=f.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,g=i(a,j);return f.createElement("img",h({width:c,height:d,ref:b,alt:e},g))});e.Ts&&(l.displayName="NativeImage");var m=(0,d.Gp)(function(a,b){var c,j,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a.fallbackSrc,C=a.fallback,D=a.src,E=a.srcSet,F=a.align,G=a.fit,H=a.loading,I=a.ignoreFallback,J=a.crossOrigin,K=a.fallbackStrategy,L=a.referrerPolicy,M=i(a,k),N=null!=H||I||!(void 0!==B|| void 0!==C),O=(z=(j=(c=h({},a,{ignoreFallback:N})).loading,m=c.src,n=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,f.useState)("pending"),u=t[0],v=t[1],(0,f.useEffect)(function(){v(m?"loading":"pending")},[m]),w=(0,f.useRef)(),x=(0,f.useCallback)(function(){if(m){y();var a=new Image;a.src=m,q&&(a.crossOrigin=q),n&&(a.srcset=n),r&&(a.sizes=r),j&&(a.loading=j),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[m,q,n,r,o,p,j]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,g.a)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),A=void 0===K?"beforeLoadOrError":K,"loaded"!==z&&"beforeLoadOrError"===A||"failed"===z&&"onError"===A),P=h({ref:b,objectFit:G,objectPosition:F},N?M:(0,e.CE)(M,["onError","onLoad"]));return O?C||f.createElement(d.m$.img,h({as:l,className:"chakra-image__placeholder",src:B},P)):f.createElement(d.m$.img,h({as:l,src:D,srcSet:E,crossOrigin:J,loading:H,referrerPolicy:L,className:"chakra-image"},P))});e.Ts&&(m.displayName="Image")},8527:function(a,b,c){"use strict";c.d(b,{Kq:function(){return ad},LZ:function(){return _},Ug:function(){return ae},X6:function(){return H},gC:function(){return af},kC:function(){return D},xu:function(){return r},xv:function(){return ah}});var d=c(7178),e=c(4244),f=c(9703),g=c(7294),h=c(894),i=c(6450);function j(){return(j=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var l=["ratio","children","className"],m=(0,d.Gp)(function(a,b){var c=a.ratio,e=a.children,h=a.className,i=k(a,l),m=g.Children.only(e),n=(0,f.cx)("chakra-aspect-ratio",h);return g.createElement(d.m$.div,j({ref:b,position:"relative",className:n,_before:{height:0,content:'""',display:"block",paddingBottom:(0,f.XQ)(void 0===c?4/3:c,function(a){return 1/a*100+"%"})},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},i),m)});f.Ts&&(m.displayName="AspectRatio");var n=["className"],o=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Badge",a),e=(0,d.Lr)(a);e.className;var h=k(e,n);return g.createElement(d.m$.span,j({ref:b,className:(0,f.cx)("chakra-badge",a.className)},h,{__css:j({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},c)}))});f.Ts&&(o.displayName="Badge");var p=["size","centerContent"],q=["size"],r=(0,d.m$)("div");f.Ts&&(r.displayName="Box");var s=(0,d.Gp)(function(a,b){var c=a.size,d=a.centerContent,e=k(a,p);return g.createElement(r,j({ref:b,boxSize:c,__css:j({},void 0===d||d?{display:"flex",alignItems:"center",justifyContent:"center"}:{},{flexShrink:0,flexGrow:0})},e))});f.Ts&&(s.displayName="Square");var t=(0,d.Gp)(function(a,b){var c=a.size,d=k(a,q);return g.createElement(s,j({size:c,ref:b,borderRadius:"9999px"},d))});f.Ts&&(t.displayName="Circle");var u=(0,d.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});f.Ts&&(u.displayName="Center");var v=["className"],w=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Code",a),e=(0,d.Lr)(a);e.className;var h=k(e,v);return g.createElement(d.m$.code,j({ref:b,className:(0,f.cx)("chakra-code",a.className)},h,{__css:j({display:"inline-block"},c)}))});f.Ts&&(w.displayName="Code");var x=["className","centerContent"],y=(0,d.Gp)(function(a,b){var c=(0,d.Lr)(a),e=c.className,h=c.centerContent,i=k(c,x),l=(0,d.mq)("Container",a);return g.createElement(d.m$.div,j({ref:b,className:(0,f.cx)("chakra-container",e)},i,{__css:j({},l,h&&{display:"flex",flexDirection:"column",alignItems:"center"})}))});f.Ts&&(y.displayName="Container");var z=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],A=["className","orientation","__css"],B=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Divider",a),e=c.borderLeftWidth,h=c.borderBottomWidth,i=c.borderTopWidth,l=c.borderRightWidth,m=c.borderWidth,n=c.borderStyle,o=c.borderColor,p=k(c,z),q=(0,d.Lr)(a),r=q.className,s=q.orientation,t=void 0===s?"horizontal":s,u=q.__css,v=k(q,A);return g.createElement(d.m$.hr,j({ref:b,"aria-orientation":t},v,{__css:j({},p,{border:"0",borderColor:o,borderStyle:n},{vertical:{borderLeftWidth:e||l||m||"1px",height:"100%"},horizontal:{borderBottomWidth:h||i||m||"1px",width:"100%"}}[t],u),className:(0,f.cx)("chakra-divider",r)}))});f.Ts&&(B.displayName="Divider");var C=["direction","align","justify","wrap","basis","grow","shrink"],D=(0,d.Gp)(function(a,b){var c=a.direction,e=a.align,f=a.justify,h=a.wrap,i=a.basis,l=a.grow,m=a.shrink,n=k(a,C);return g.createElement(d.m$.div,j({ref:b,__css:{display:"flex",flexDirection:c,alignItems:e,justifyContent:f,flexWrap:h,flexBasis:i,flexGrow:l,flexShrink:m}},n))});f.Ts&&(D.displayName="Flex");var E=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],F=(0,d.Gp)(function(a,b){var c=a.templateAreas,e=a.gap,f=a.rowGap,h=a.columnGap,i=a.column,l=a.row,m=a.autoFlow,n=a.autoRows,o=a.templateRows,p=a.autoColumns,q=a.templateColumns,r=k(a,E);return g.createElement(d.m$.div,j({ref:b,__css:{display:"grid",gridTemplateAreas:c,gridGap:e,gridRowGap:f,gridColumnGap:h,gridAutoColumns:p,gridColumn:i,gridRow:l,gridAutoFlow:m,gridAutoRows:n,gridTemplateRows:o,gridTemplateColumns:q}},r))});f.Ts&&(F.displayName="Grid");var G=["className"],H=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Heading",a),e=(0,d.Lr)(a);e.className;var h=k(e,G);return g.createElement(d.m$.h2,j({ref:b,className:(0,f.cx)("chakra-heading",a.className)},h,{__css:c}))});f.Ts&&(H.displayName="Heading");var I=["className"],J=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Kbd",a),e=(0,d.Lr)(a),h=e.className,i=k(e,I);return g.createElement(d.m$.kbd,j({ref:b,className:(0,f.cx)("chakra-kbd",h)},i,{__css:j({fontFamily:"mono"},c)}))});f.Ts&&(J.displayName="Kbd");var K=["className","isExternal"],L=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Link",a),e=(0,d.Lr)(a),h=e.className,i=e.isExternal,l=k(e,K);return g.createElement(d.m$.a,j({target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:b,className:(0,f.cx)("chakra-link",h)},l,{__css:c}))});f.Ts&&(L.displayName="Link");var M=["children","styleType","stylePosition","spacing"],N=["as"],O=["as"],P=(0,d.eC)("List"),Q=P[0],R=P[1],S=(0,d.Gp)(function(a,b){var c,e=(0,d.jC)("List",a),f=(0,d.Lr)(a),h=f.children,l=f.styleType,m=f.stylePosition,n=f.spacing,o=k(f,M),p=(0,i.WR)(h),q=n?((c={})["& > *:not(style) ~ *:not(style)"]={mt:n},c):{};return g.createElement(Q,{value:e},g.createElement(d.m$.ul,j({ref:b,listStyleType:void 0===l?"none":l,listStylePosition:m,role:"list",__css:j({},e.container,q)},o),p))});f.Ts&&(S.displayName="List");var T=(0,d.Gp)(function(a,b){a.as;var c=k(a,N);return g.createElement(S,j({ref:b,as:"ol",styleType:"decimal",marginStart:"1em"},c))});f.Ts&&(T.displayName="OrderedList");var U=(0,d.Gp)(function(a,b){a.as;var c=k(a,O);return g.createElement(S,j({ref:b,as:"ul",styleType:"initial",marginStart:"1em"},c))});f.Ts&&(U.displayName="UnorderedList");var V=(0,d.Gp)(function(a,b){var c=R();return g.createElement(d.m$.li,j({ref:b},a,{__css:c.item}))});f.Ts&&(V.displayName="ListItem");var W=(0,d.Gp)(function(a,b){var c=R();return g.createElement(h.JO,j({ref:b,role:"presentation"},a,{__css:c.icon}))});f.Ts&&(W.displayName="ListIcon");var X=["columns","spacingX","spacingY","spacing","minChildWidth"],Y=(0,d.Gp)(function(a,b){var c=a.columns,e=a.spacingX,f=a.spacingY,h=a.spacing,i=a.minChildWidth,l=k(a,X),m=(0,d.Fg)(),n=i?Z(i,m):$(c);return g.createElement(F,j({ref:b,gap:h,columnGap:e,rowGap:f,templateColumns:n},l))});function Z(a,b){return(0,f.XQ)(a,function(a){var c,e=(0,d.LP)("sizes",a,(c=a,(0,f.hj)(c)?c+"px":c))(b);return(0,f.Ft)(a)?null:"repeat(auto-fit, minmax("+e+", 1fr))"})}function $(a){return(0,f.XQ)(a,function(a){return(0,f.Ft)(a)?null:"repeat("+a+", minmax(0, 1fr))"})}f.Ts&&(Y.displayName="SimpleGrid");var _=(0,d.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});f.Ts&&(_.displayName="Spacer");var aa="& > *:not(style) ~ *:not(style)",ab=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ac=function(a){return g.createElement(d.m$.div,j({className:"chakra-stack__item"},a,{__css:j({display:"inline-block",flex:"0 0 auto",minWidth:0},a["__css"])}))},ad=(0,d.Gp)(function(a,b){var c,e=a.isInline,h=a.direction,l=a.align,m=a.justify,n=a.spacing,o=void 0===n?"0.5rem":n,p=a.wrap,q=a.children,r=a.divider,s=a.className,t=a.shouldWrapChildren,u=k(a,ab),v=e?"row":null!=h?h:"column",w=g.useMemo(function(){var a,b,c,d,e;return c=(a={direction:v,spacing:o}).spacing,d=a.direction,e={column:{marginTop:c,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:c},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:c,marginStart:0},"row-reverse":{marginTop:0,marginEnd:c,marginBottom:0,marginStart:0}},(b={flexDirection:d})[aa]=(0,f.XQ)(d,function(a){return e[a]}),b},[v,o]),x=g.useMemo(function(){var a,b,c,d;return b=(a={spacing:o,direction:v}).spacing,c=a.direction,d={column:{my:b,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:b,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:b,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:b,my:0,borderLeftWidth:"1px",borderBottomWidth:0}},{"&":(0,f.XQ)(c,function(a){return d[a]})}},[o,v]),y=!!r,z=(0,i.WR)(q),A=t||y?z.map(function(a,b){var c=void 0!==a.key?a.key:b,d=b+1===z.length,e=g.createElement(ac,{key:c},a),f=t?e:a;if(!y)return f;var h=g.cloneElement(r,{__css:x}),i=d?null:h;return g.createElement(g.Fragment,{key:c},f,i)}):z,B=(0,f.cx)("chakra-stack",s);return g.createElement(d.m$.div,j({ref:b,display:"flex",alignItems:l,justifyContent:m,flexDirection:w.flexDirection,flexWrap:p,className:B,__css:y?{}:((c={})[aa]=w[aa],c)},u),A)});f.Ts&&(ad.displayName="Stack");var ae=(0,d.Gp)(function(a,b){return g.createElement(ad,j({align:"center"},a,{direction:"row",ref:b}))});f.Ts&&(ae.displayName="HStack");var af=(0,d.Gp)(function(a,b){return g.createElement(ad,j({align:"center"},a,{direction:"column",ref:b}))});f.Ts&&(af.displayName="VStack");var ag=["className","align","decoration","casing"],ah=(0,d.Gp)(function(a,b){var c=(0,d.mq)("Text",a),e=(0,d.Lr)(a);e.className,e.align,e.decoration,e.casing;var h=k(e,ag),i=(0,f.YU)({textAlign:a.align,textDecoration:a.decoration,textTransform:a.casing});return g.createElement(d.m$.p,j({ref:b,className:(0,f.cx)("chakra-text",a.className)},i,h,{__css:c}))});f.Ts&&(ah.displayName="Text");var ai=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],aj=["className"];function ak(a){return"number"==typeof a?a+"px":a}var al=(0,d.Gp)(function(a,b){var c=a.spacing,h=void 0===c?"0.5rem":c,i=a.spacingX,l=a.spacingY,m=a.children,n=a.justify,o=a.direction,p=a.align,q=a.className,r=a.shouldWrapChildren,s=k(a,ai),t=g.useMemo(function(){var a={spacingX:i,spacingY:l},b=a.spacingX,c=void 0===b?h:b,d=a.spacingY,g=void 0===d?h:d;return{"--chakra-wrap-x-spacing":function(a){return(0,f.XQ)(c,function(b){return ak((0,e.fr)("space",b)(a))})},"--chakra-wrap-y-spacing":function(a){return(0,f.XQ)(g,function(b){return ak((0,e.fr)("space",b)(a))})},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:n,alignItems:p,flexDirection:o,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[h,i,l,n,p,o]),u=r?g.Children.map(m,function(a,b){return g.createElement(am,{key:b},a)}):m;return g.createElement(d.m$.div,j({ref:b,className:(0,f.cx)("chakra-wrap",q),overflow:"hidden"},s),g.createElement(d.m$.ul,{className:"chakra-wrap__list",__css:t},u))});f.Ts&&(al.displayName="Wrap");var am=(0,d.Gp)(function(a,b){var c=a.className,e=k(a,aj);return g.createElement(d.m$.li,j({ref:b,__css:{display:"flex",alignItems:"flex-start"},className:(0,f.cx)("chakra-wrap__listitem",c)},e))});f.Ts&&(am.displayName="WrapItem")},8e3:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e,f=(d=c(7294),d&&d.__esModule?d:{default:d}).default.createContext({});b.AmpStateContext=f},9470:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},2717:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var d,e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=k();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(7294)),f=(d=c(1585),d&&d.__esModule?d:{default:d}),g=c(8e3),h=c(5850),i=c(9470);function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return k=function(){return a},a}function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[e.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(e.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===e.default.Fragment?a.concat(e.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}c(9475);var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,d,f,g;return a.reduce(m,[]).reverse().concat(l(b.inAmpMode).reverse()).filter((c=new Set,d=new Set,f=new Set,g={},function(a){var b=!0,e=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){e=!0;var h=a.key.slice(a.key.indexOf("$")+1);c.has(h)?b=!1:c.add(h)}switch(a.type){case"title":case"base":d.has(a.type)?b=!1:d.add(a.type);break;case"meta":for(var i=0,j=n.length;i<j;i++){var k=n[i];if(a.props.hasOwnProperty(k)){if("charSet"===k)f.has(k)?b=!1:f.add(k);else{var l=a.props[k],m=g[k]||new Set;("name"!==k||!e)&&m.has(l)?b=!1:(m.add(l),g[k]=m)}}}}return b})).reverse().map(function(a,c){var d=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var f=j({},a.props||{});return f["data-href"]=f.href,f.href=void 0,f["data-optimized-fonts"]=!0,e.default.cloneElement(a,f)}return e.default.cloneElement(a,{key:d})})}var p=function(a){var b=a.children,c=e.useContext(g.AmpStateContext),d=e.useContext(h.HeadManagerContext);return e.default.createElement(f.default,{reduceComponentsToState:o,headManager:d,inAmpMode:i.isInAmpMode(c)},b)};b.default=p,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1585:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c=a.headManager,e=a.reduceComponentsToState;function i(){if(c&&c.mountedInstances){var b=d.Children.toArray(Array.from(c.mountedInstances).filter(Boolean));c.updateHead(e(b,a))}}return f&&(null==c||null==(b=c.mountedInstances)||b.add(a.children),i()),g(function(){var b;return null==c||null==(b=c.mountedInstances)||b.add(a.children),function(){var b;null==c||null==(b=c.mountedInstances)||b.delete(a.children)}}),g(function(){return c&&(c._pendingUpdate=i),function(){c&&(c._pendingUpdate=i)}}),h(function(){return c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null),function(){c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null)}}),null};var d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=e();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){var g=d?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(c,f,g):c[f]=a[f]}return c.default=a,b&&b.set(a,c),c}(c(7294));function e(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return e=function(){return a},a}var f=!1,g=f?function(){}:d.useLayoutEffect,h=f?function(){}:d.useEffect},9008:function(a,b,c){a.exports=c(2717)},2703:function(a,b,c){"use strict";var d=c(414);function e(){}function f(){}f.resetWarningCache=e,a.exports=function(){function a(a,b,c,e,f,g){if(g!==d){var h=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function b(){return a}a.isRequired=a;var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:e};return c.PropTypes=c,c}},5697:function(a,b,c){a.exports=c(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5124:function(a,b,c){"use strict";var d=c(7294),e=c(5697),f=c.n(e);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=(0,d.forwardRef)(function(a,b){var c=a.color,e=a.size,f=void 0===e?24:e,h=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["color","size"]);return d.createElement("svg",g({ref:b,xmlns:"http://www.w3.org/2000/svg",width:f,height:f,viewBox:"0 0 24 24",fill:"none",stroke:void 0===c?"currentColor":c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),d.createElement("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),d.createElement("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),d.createElement("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),d.createElement("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),d.createElement("line",{x1:"14",y1:"1",x2:"14",y2:"4"}))});h.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},h.displayName="Coffee",b.Z=h},6702:function(a,b,c){"use strict";var d=c(7294),e=c(5697),f=c.n(e);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=(0,d.forwardRef)(function(a,b){var c=a.color,e=a.size,f=void 0===e?24:e,h=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["color","size"]);return d.createElement("svg",g({ref:b,xmlns:"http://www.w3.org/2000/svg",width:f,height:f,viewBox:"0 0 24 24",fill:"none",stroke:void 0===c?"currentColor":c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),d.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))});h.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},h.displayName="GitHub",b.Z=h},4588:function(a,b,c){"use strict";var d=c(7294),e=c(5697),f=c.n(e);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=(0,d.forwardRef)(function(a,b){var c=a.color,e=a.size,f=void 0===e?24:e,h=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["color","size"]);return d.createElement("svg",g({ref:b,xmlns:"http://www.w3.org/2000/svg",width:f,height:f,viewBox:"0 0 24 24",fill:"none",stroke:void 0===c?"currentColor":c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),d.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});h.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},h.displayName="Zap",b.Z=h},3614:function(a){!/*!
* 
*   typed.js - A JavaScript Typing Animation Library
*   Author: Matt Boldt <me@mattboldt.com>
*   Version: v2.0.12
*   Url: https://github.com/mattboldt/typed.js
*   License(s): MIT
* 
*/ function(b,c){a.exports=c()}(this,function(){return function(a){var b={};function c(d){if(b[d])return b[d].exports;var e=b[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,c),e.loaded=!0,e.exports}return c.m=a,c.c=b,c.p="",c(0)}([function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=c(1),f=c(3),g=function(){function a(b,c){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,a),e.initializer.load(this,c,b),this.begin()}return d(a,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){!this.typingComplete&&(this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this)))}},{key:"start",value:function(){!this.typingComplete&&this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var a=arguments.length<=0|| void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,a&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var a=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){a.currentElContent&&0!==a.currentElContent.length?a.backspace(a.currentElContent,a.currentElContent.length):a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)}},{key:"typewrite",value:function(a,b){var c=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var d=this.humanizer(this.typeSpeed),e=1;if(!0===this.pause.status){this.setPauseStatus(a,b,!0);return}this.timeout=setTimeout(function(){b=f.htmlParser.typeHtmlChars(a,b,c);var d=0,g=a.substr(b);if("^"===g.charAt(0)&&/^\^\d+/.test(g)){var h=1;h+=(g=/\d+/.exec(g)[0]).length,d=parseInt(g),c.temporaryPause=!0,c.options.onTypingPaused(c.arrayPos,c),a=a.substring(0,b)+a.substring(b+h),c.toggleBlinking(!0)}if("`"===g.charAt(0)){for(;"`"!==a.substr(b+e).charAt(0)&&!(b+ ++e>a.length););var i=a.substring(0,b),j=a.substring(i.length+1,b+e),k=a.substring(b+e+1);a=i+j+k,e--}c.timeout=setTimeout(function(){c.toggleBlinking(!1),b>=a.length?c.doneTyping(a,b):c.keepTyping(a,b,e),c.temporaryPause&&(c.temporaryPause=!1,c.options.onTypingResumed(c.arrayPos,c))},d)},d)}},{key:"keepTyping",value:function(a,b,c){0===b&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),b+=c;var d=a.substr(0,b);this.replaceText(d),this.typewrite(a,b)}},{key:"doneTyping",value:function(a,b){var c=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),(this.arrayPos!==this.strings.length-1||(this.complete(),!1!==this.loop&&this.curLoop!==this.loopCount))&&(this.timeout=setTimeout(function(){c.backspace(a,b)},this.backDelay))}},{key:"backspace",value:function(a,b){var c=this;if(!0===this.pause.status){this.setPauseStatus(a,b,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var d=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){b=f.htmlParser.backSpaceHtmlChars(a,b,c);var d=a.substr(0,b);if(c.replaceText(d),c.smartBackspace){var e=c.strings[c.arrayPos+1];e&&d===e.substr(0,b)?c.stopNum=b:c.stopNum=0}b>c.stopNum?(b--,c.backspace(a,b)):b<=c.stopNum&&(c.arrayPos++,c.arrayPos===c.strings.length?(c.arrayPos=0,c.options.onLastStringBackspaced(),c.shuffleStringsIfNeeded(),c.begin()):c.typewrite(c.strings[c.sequence[c.arrayPos]],b))},d)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(a,b,c){this.pause.typewrite=c,this.pause.curString=a,this.pause.curStrPos=b}},{key:"toggleBlinking",value:function(a){this.cursor&&!this.pause.status&&this.cursorBlinking!==a&&(this.cursorBlinking=a,a?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(a){return Math.round(Math.random()*a/2)+a}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var a=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){a.arrayPos++,a.replaceText(""),a.strings.length>a.arrayPos?a.typewrite(a.strings[a.sequence[a.arrayPos]],0):(a.typewrite(a.strings[0],0),a.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:"html"===this.contentType?this.el.innerHTML=a:this.el.textContent=a}},{key:"bindFocusEvents",value:function(){var a=this;this.isInput&&(this.el.addEventListener("focus",function(b){a.stop()}),this.el.addEventListener("blur",function(b){(!a.el.value||0===a.el.value.length)&&a.start()}))}},{key:"insertCursor",value:function(){this.showCursor&& !this.cursor&&(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),a}();b.default=g,a.exports=b.default},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=(d=c(2))&&d.__esModule?d:{default:d},h=function(){function a(){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,a)}return f(a,[{key:"load",value:function(a,b,c){if("string"==typeof c?a.el=document.querySelector(c):a.el=c,a.options=e({},g.default,b),a.isInput="input"===a.el.tagName.toLowerCase(),a.attr=a.options.attr,a.bindInputFocusEvents=a.options.bindInputFocusEvents,a.showCursor=!a.isInput&&a.options.showCursor,a.cursorChar=a.options.cursorChar,a.cursorBlinking=!0,a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent,a.contentType=a.options.contentType,a.typeSpeed=a.options.typeSpeed,a.startDelay=a.options.startDelay,a.backSpeed=a.options.backSpeed,a.smartBackspace=a.options.smartBackspace,a.backDelay=a.options.backDelay,a.fadeOut=a.options.fadeOut,a.fadeOutClass=a.options.fadeOutClass,a.fadeOutDelay=a.options.fadeOutDelay,a.isPaused=!1,a.strings=a.options.strings.map(function(a){return a.trim()}),"string"==typeof a.options.stringsElement?a.stringsElement=document.querySelector(a.options.stringsElement):a.stringsElement=a.options.stringsElement,a.stringsElement){a.strings=[],a.stringsElement.style.display="none";var d=Array.prototype.slice.apply(a.stringsElement.children),f=d.length;if(f)for(var h=0;h<f;h+=1){var i=d[h];a.strings.push(i.innerHTML.trim())}}for(var h in a.strPos=0,a.arrayPos=0,a.stopNum=0,a.loop=a.options.loop,a.loopCount=a.options.loopCount,a.curLoop=0,a.shuffle=a.options.shuffle,a.sequence=[],a.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},a.typingComplete=!1,a.strings)a.sequence[h]=h;a.currentElContent=this.getCurrentElContent(a),a.autoInsertCss=a.options.autoInsertCss,this.appendAnimationCss(a)}},{key:"getCurrentElContent",value:function(a){var b="";return a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:"html"===a.contentType?a.el.innerHTML:a.el.textContent}},{key:"appendAnimationCss",value:function(a){var b="data-typed-js-css";if(!(!a.autoInsertCss|| !a.showCursor&&!a.fadeOut||document.querySelector("["+b+"]"))){var c=document.createElement("style");c.type="text/css",c.setAttribute(b,!0);var d="";a.showCursor&&(d+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),a.fadeOut&&(d+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==c.length&&(c.innerHTML=d,document.body.appendChild(c))}}}]),a}();b.default=h;var i=new h;b.initializer=i},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(a){},onComplete:function(a){},preStringTyped:function(a,b){},onStringTyped:function(a,b){},onLastStringBackspaced:function(a){},onTypingPaused:function(a,b){},onTypingResumed:function(a,b){},onReset:function(a){},onStop:function(a,b){},onStart:function(a,b){},onDestroy:function(a){}},a.exports=b.default},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),d=function(){function a(){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,a)}return c(a,[{key:"typeHtmlChars",value:function(a,b,c){if("html"!==c.contentType)return b;var d=a.substr(b).charAt(0);if("<"===d||"&"===d){var e="";for(e="<"===d?">":";";a.substr(b+1).charAt(0)!==e&&!(++b+1>a.length););b++}return b}},{key:"backSpaceHtmlChars",value:function(a,b,c){if("html"!==c.contentType)return b;var d=a.substr(b).charAt(0);if(">"===d||";"===d){var e="";for(e=">"===d?"<":"&";a.substr(b-1).charAt(0)!==e&&!(--b<0););b--}return b}}]),a}();b.default=d;var e=new d;b.htmlParser=e}])})}}])