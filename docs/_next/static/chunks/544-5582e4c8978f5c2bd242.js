"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{7544:function(e,t,n){n.d(t,{d:function(){return U}});var i=n(2809),r=n(7294),o=n(9895),a=n(2427),l=n(2014),c=n(3183),s=n(2318),d=n(1120),m=n(5893),g=(n(7386),(0,d.Z)((function(e){return{badgeArea:{backgroundImage:'url("../../../badge.svg")',backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",width:"6vw",height:"4vh",display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center"}}}))),p=r.memo((function(){var e=g();return(0,m.jsx)("div",{className:e.badgeArea,children:(0,m.jsx)(s.Z,{variant:"h3",component:"div",align:"center",style:{zIndex:2,color:"#fff",fontStyle:"italic",width:"100%"},children:"-24%"})})})),u=n(4184),f=n.n(u),h=(0,a.Z)((function(e){return{badge:{border:"1px solid #ceb1b1",borderRadius:25,width:"2rem",height:"2rem",display:"flex",alignItems:"center",justifyContent:"center"},horizontalBadge:{width:"4.563rem",height:"1.5rem"}}})),b=r.memo((function(e){var t=e.rating,n=e.horizontalBadge,i=void 0!==n&&n,r=h();return(0,m.jsx)("div",{className:f()(r.badge,!i&&r.horizontalBadge),"aria-labelledby":"\u043e\u0446\u0435\u043d\u043a\u0430 \u0441\u043e\u043c\u0435\u043b\u044c\u0435 ".concat(t),children:(0,m.jsx)(s.Z,{variant:"caption",component:"div",children:i?t:"Vivini ".concat(t)})})})),x=n(7031),y=(0,a.Z)((function(e){return{root:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},badge:(0,i.Z)({border:"1px solid #ceb1b1",borderRadius:25,width:"max-content",height:"2rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},e.breakpoints.down("sm"),{width:"2rem"})}})),v=r.memo((function(e){var t=e.value,n=e.numberReviews,i=void 0===n?15:n,r=y();return(0,m.jsxs)("div",{className:r.root,children:[(0,m.jsx)(x.Z,{name:"client-rating",value:t,readOnly:!0}),(0,m.jsxs)(c.Z,{variant:"text",children:[i," \u043e\u0442\u0437\u044b\u0432\u043e\u0432"]})]})})),j=n(6486),S=n.n(j),w=n(3914),C=n(5663);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=(0,d.Z)((function(e){return{rating:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},banner:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},priceCard:{color:"#6D6865",fontFamily:C.rO,fontSize:"2rem",fontWeight:900,letterSpacing:0,lineHeight:"2.25rem"},body3:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},body4:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},button2:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},button3:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},caption2:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},caption3:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},caption4:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},link2:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},sale:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},sale2:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},sale3:{color:"",fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},note:{color:"",fontFamily:"",fontSize:"0.75rem",fontWeight:500,letterSpacing:"-0.094rem",lineHeight:"0.75rem"}}})),N=["rating","banner","priceCard","body3","body4","button2","button3","caption2","caption3","caption4","link2","sale","sale2","sale3","note"],P=r.memo((function(e){var t=e.customVariant,n=e.children,i=e.TypographyProps,r=Z();return(0,m.jsx)(s.Z,O(O({variant:N.includes(t)?"body1":t,className:"priceCard"===t?r.priceCard:"rating"===t?r.rating:"banner"===t?r.banner:"body3"===t?r.body3:"body4"===t?r.body4:"button2"===t?r.button2:"button3"===t?r.button3:"caption2"===t?r.caption2:"caption3"===t?r.caption3:"caption4"===t?r.caption4:"link2"===t?r.link2:"sale"===t?r.sale:"sale2"===t?r.sale2:"sale3"===t?r.sale3:"note"===t?r.note:null},i),{},{children:n}))}));function I(e,t,n){var i,r,o=(""+e).split("."),a="";for(t||(t=" "),n||0===n||(n=3),i=o[0].length;i>n;)r=i-n,a=t+o[0].slice(r,i)+a,i=r;return a=o[0].slice(0,i)+a,o[0]=a,o.join(".")}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return(0,r.useMemo)((function(){return I(e," ",t)}),[e,t])}var W=(0,w.Z)((function(e){return{priceArea:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"baseline",marginBottom:40},priceStyle:{textDecoration:"line-through"},marginButton:{marginBottom:8},buttonStyles:{paddingTop:12,paddingBottom:12}}})),F=r.memo((function(){var e=W();return(0,m.jsx)(l.Z,{boxShadow:"0px 4px 7px rgba(0, 0, 0, 0.05)",borderRadius:20,maxWidth:336,minWidth:316,children:(0,m.jsxs)(l.Z,{pt:3,px:3,pb:5,width:"100%",display:"flex",flexDirection:"column",children:[(0,m.jsx)(D,{price:2990}),(0,m.jsxs)(l.Z,{display:"flex",flexDirection:"column",children:[(0,m.jsx)(c.Z,{variant:"outlined",fullWidth:!0,className:f()(e.marginButton,e.buttonStyles),children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0438\u0435"}),(0,m.jsx)(c.Z,{variant:"contained",color:"primary",fullWidth:!0,className:e.buttonStyles,children:"\u0423\u0437\u043d\u0430\u0442\u044c \u043e \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0438"})]})]})})})),D=r.memo((function(e){var t=e.salePrice,n=void 0===t?1890:t,i=e.currency,r=void 0===i?"\u20bd":i,o=e.price,a=e.sale,l=void 0===a||a,c=W();return(0,m.jsxs)("div",{className:c.priceArea,children:[(0,m.jsxs)(P,{customVariant:"priceCard",children:[z(n)," ",r]}),!0===l?(0,m.jsxs)(P,{customVariant:"h5",TypographyProps:{className:c.priceStyle,style:{marginLeft:12}},children:[z(o)," ",r]}):null]})})),B=(0,a.Z)((function(e){var t;return{mainContainerProductCard:{backgroundColor:"#F9F5F3"},gridContainerProductCard:(t={width:"100%",height:"auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridColumnGap:64,paddingLeft:"1.75rem",paddingRight:"1.75rem",paddingTop:"3.75rem",paddingBottom:"2.5rem"},(0,i.Z)(t,e.breakpoints.down("md"),{gridTemplateColumns:"0.5fr 1fr",gridColumnGap:24}),(0,i.Z)(t,e.breakpoints.down("xs"),{display:"flex",flexDirection:"column",flexWrap:"wrap"}),t),verticalSection:{display:"flex",flexDirection:"column",gap:"1.5rem"},bestseller:{color:e.palette.info.main},infoSection:{},originSection:{},priceSection:{},ratingSection:{backgroundColor:"#633d04",width:"100%",height:126},valueSectionBadge:{display:"grid",gridTemplateColumns:"repeat(2, 0.5fr)",alignItems:"center",gridColumnGap:"2rem"}}})),T=r.memo((function(e){var t=e.productImages,n=e.title,i=e.countryOrigin,o=void 0===i?"\u0412\u043a\u0443\u0441 \u0432\u0438\u043d\u0430 \u0449\u0435\u0434\u0440\u044b\u0439, \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0441 \u043d\u043e\u0442\u0430\u043c\u0438 \u0432\u0430\u043d\u0438\u043b\u0438, \u043a\u043e\u0444\u0435 \u0438 \u0434\u0443\u0431\u0430, \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u043c\u0438 \u0430\u043a\u0446\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u0434\u043e\u043b\u0433\u0438\u043c, \u043e\u043a\u0440\u0443\u0433\u043b\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0432\u043a\u0443\u0441\u0438\u0435\u043c.":i,a=B(),d=(0,r.useState)(!1),g=d[0],u=d[1],f=(0,r.useCallback)((function(){u(!g),console.log({horizontalBadge:g})}),[g]);return(0,m.jsx)("section",{className:a.mainContainerProductCard,children:(0,m.jsxs)("section",{className:a.gridContainerProductCard,children:[(0,m.jsx)("aside",{style:{textAlign:"center",position:"relative"},children:t}),(0,m.jsxs)("section",{className:a.verticalSection,children:[(0,m.jsxs)("section",{className:a.infoSection,children:[(0,m.jsx)(s.Z,{variant:"body1",className:a.bestseller,children:"\u0411\u0435\u0441\u0442\u0441\u0435\u043b\u043b\u0435\u0440"}),(0,m.jsx)(s.Z,{component:"div",variant:"h1",color:"textPrimary",align:"left",children:n}),(0,m.jsx)(v,{value:2.7}),(0,m.jsx)(p,{})]}),(0,m.jsxs)("section",{className:a.valueSectionBadge,children:[(0,m.jsx)(b,{rating:4.2,horizontalBadge:g}),(0,m.jsx)(c.Z,{variant:"outlined",onClick:f,children:"Change badge"})]}),(0,m.jsx)("section",{className:a.originSection,children:(0,m.jsx)(s.Z,{component:"div",variant:"body1",align:"left",children:o})}),(0,m.jsx)(l.Z,{component:"div",display:{xs:"block",lg:"none"},children:(0,m.jsxs)("section",{className:a.priceSection,children:[(0,m.jsx)(s.Z,{component:"div",variant:"h4",align:"center",children:Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(2500)}),(0,m.jsx)(c.Z,{fullWidth:!0,variant:"contained",color:"secondary",children:"Buy"})]})}),(0,m.jsx)("section",{}),(0,m.jsx)("section",{children:(0,m.jsx)(c.Z,{variant:"outlined",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c"})})]}),(0,m.jsx)(l.Z,{component:"article",display:{xs:"none",lg:"block"},position:"relative",children:(0,m.jsx)("section",{className:a.priceSection,style:{marginBottom:"2rem"},children:(0,m.jsx)(F,{})})})]})})}),S().isEquel);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=(0,a.Z)((function(e){return{galleryGrid:(0,i.Z)({width:"100%",height:"calc(100vh - 500px)",display:"grid",gridTemplateColumns:"min-content auto",boxSizing:"border-box"},e.breakpoints.down("xs"),{flexDirection:"column-reverse",display:"flex","& > :nth-child(2)":{height:"50vh"}}),wrapperImg:{position:"relative"},image:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",display:"block"},itemsArrangement:(0,i.Z)({display:"flex",flexDirection:"column"},e.breakpoints.down("xs"),{flexDirection:"row",columnGap:"1rem"}),blockAreaForSmallImages:{position:"relative",width:"3.5rem",height:"3.5rem",backgroundColor:"#fff",borderRadius:8,boxShadow:"0 0 0px 1px rgb(0 0 0 / 9%), 0 0 1px 2px rgb(0 0 0 / 12%)",overflow:"hidden",marginBottom:4},"@keyframes mountImage":{"0%":{opacity:0},"25%":{opacity:.25},"50%":{opacity:.5},"75%":{opacity:.75},"100%":{opacity:1}},activeImageMount:{animationName:"$mountImage",animation:"1s alternate slide-in"},smallActiveImage:{border:"1px solid #F55760",boxSizing:"border-box",borderRadius:8}}})),G=r.memo((function(e){var t=e.children,n=A();return(0,m.jsx)("div",{className:n.galleryGrid,children:t})})),E=r.memo((function(e){var t=e.imageClasses,n=void 0===t?{}:t,i=e.src,r=void 0===i?"":i,o=e.alt,a=void 0===o?"":o,l=e.ImagesProps,c=void 0===l?{}:l;return(0,m.jsx)("img",R({src:r,alt:a,className:n},c))})),_=r.memo((function(e){var t,n,i=e.images,o=e.ImageProps,a=e.nonActiveImagesProps,l=A(),c=(0,r.useState)(0),s=c[0],d=c[1],g=(0,r.useState)(0),p=(g[0],g[1]);return(0,m.jsxs)(G,{children:[i.length<1||(0,m.jsx)("div",{className:l.itemsArrangement,children:i.map((function(e,t){return(0,m.jsx)("div",R(R({className:f()(l.blockAreaForSmallImages,s===t&&l.smallActiveImage),onClick:function(){p(s),d(t)}},a),{},{children:(0,m.jsx)(E,{src:e.src,alt:e.alt,imageClasses:l.image,ImageProps:o})}),e.id)}))}),(0,m.jsx)("div",{className:l.wrapperImg,children:[(0,m.jsx)(E,{src:null===(t=i[s])||void 0===t?void 0:t.src,alt:null===(n=i[s])||void 0===n?void 0:n.alt,imageClasses:f()(l.image,l.activeImageMount),ImageProps:o},s)]})]})})),V=(0,a.Z)((function(e){return{page:{display:"grid",gridTemplateRows:"min-content auto",width:"100%",height:"100vh",maxWidth:1472,margin:"0 auto"},header:{width:"100%",height:"15vh",backgroundColor:"#54a0ff",position:"static",top:0},zoneForScroll:{position:"relative",overflowY:"scroll"},scrollableZone:(0,i.Z)({width:"100%",height:"2000px",backgroundColor:"#f5f3f3",display:"grid",gridTemplateColumns:"max-content 1fr"},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",flexWrap:"wrap"}),asideBlock:(0,i.Z)({},e.breakpoints.down("sm"),{display:"none"}),articleBlock:{display:"flex",flexDirection:"column",gap:32}}})),M="/adaptive",L=[{id:"a",src:"".concat(M,"/wine.png"),alt:"red wine"},{id:"b",src:"".concat(M,"/wine_n.jpeg"),alt:"red wine"},{id:"c",src:"".concat(M,"/wine_nn.jpeg"),alt:"red wine"}],U=r.memo((function(e){var t=e.header,n=V();return(0,m.jsxs)("div",{className:n.page,children:[(0,m.jsx)(o.Z,{component:"header",elevation:3,className:n.header,children:t}),(0,m.jsx)("div",{className:n.zoneForScroll,children:(0,m.jsxs)("main",{className:n.scrollableZone,children:[(0,m.jsx)("aside",{className:n.asideBlock}),(0,m.jsxs)("article",{className:n.articleBlock,children:[(0,m.jsx)(T,{productImages:(0,m.jsx)(_,{images:L}),title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'}),(0,m.jsx)(T,{productImages:(0,m.jsx)(_,{images:L}),title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'})]})]})}),(0,m.jsx)("footer",{})]})}))},7386:function(e,t,n){n.r(t),t.default={src:"/_next/static/image/public/badge-edge.ddaab4660a7e13347c2043d2dabe66ac.svg",height:31,width:12}}}]);