"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{8396:function(e,t,n){n.d(t,{d:function(){return at}});var i=n(6311),r=n(9895),a=n(2427),o=n(7294),s=n(3002);function l(){return(0,s.useQueryStore)("catalog","list")}var c=n(2014),d=n(4478),p=n(1267),g=n(5893),m=o.memo((function(e){var t=e.id,n=e.title,i=e.handleDelete,r=(0,o.useCallback)((function(){return i(t)}),[]);return(0,g.jsx)(p.Z,{label:n,color:"primary",onDelete:r,style:{justifyContent:"space-between"}})})),u=n(229),f=n(2809),h=n(578),b=n(8718);n(8778);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h.Z.use(b.Db).init({resources:{ru:{translation:{"catalog-view-variants":"\u0412\u0438\u0434","select--popular":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435","select--ascending price":"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b","select--descending price":"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b ","select--according to buyers":"\u041f\u043e \u043e\u0446\u0435\u043d\u043a\u0435 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439","select--according to the rating of experts":"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u043e\u0432","select--new items":"\u041d\u043e\u0432\u0438\u043d\u043a\u0438","select--discount":"\u041f\u043e \u0441\u043a\u0438\u0434\u043a\u0435","select--vintage from old to new":"\u0412\u0438\u043d\u0442\u0430\u0436 \u043e\u0442 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u043a \u043d\u043e\u0432\u043e\u043c\u0443","select--vintage from new to old":"\u0412\u0438\u043d\u0442\u0430\u0436 \u043e\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u043a \u0441\u0442\u0430\u0440\u043e\u043c\u0443","navigation--geolocation":"\u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f","navigation--wedding":"\u0421\u0432\u0430\u0434\u044c\u0431\u0430 \u0438 \u0431\u0430\u043d\u043a\u0435\u0442","navigation--for-business":"\u0414\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430","navigation--order-status":"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430","navigation--shops":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b","navigation--help-consulting":"\u041f\u043e\u043c\u043e\u0449\u044c \u0438 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f","navigation--switch-site-to":"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0430\u0439\u0442 \u043d\u0430 {{language}}","navigation--catalog":"\u041a\u0430\u0442\u0430\u043b\u043e\u0433","navigation--search-icon":"\u041f\u043e\u0438\u0441\u043a","navigation--search-input":"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443","navigation--menu-items":"\u041f\u0443\u043d\u043a\u0442\u044b \u043c\u0435\u043d\u044e","navigation--menu-item-promotion":"\u0410\u043a\u0446\u0438\u0438","navigation--menu-item-wine":"\u0412\u0438\u043d\u043e","navigation--menu-item-champagne":"\u0428\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u043e\u0435","navigation--menu-item-whiskey":"\u0412\u0438\u0441\u043a\u0438","navigation--menu-item-beer-cider":"\u041f\u0438\u0432\u043e \u0438 \u0441\u0438\u0434\u0440","navigation--menu-item-water-juices":"\u0412\u043e\u0434\u0430 \u0438 \u0441\u043e\u043a\u0438","navigation--menu-item-delicacies":"\u0414\u0435\u043b\u0438\u043a\u0430\u0442\u0435\u0441\u044b","navigation--menu-item-sets-gifts":"\u041d\u0430\u0431\u043e\u0440\u044b \u0438 \u043f\u043e\u0434\u0430\u0440\u043a\u0438","navigation--menu-item-dishes-accessories":"\u041f\u043e\u0441\u0443\u0434\u0430 \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b","navigation--login":"\u0412\u043e\u0439\u0442\u0438","navigation--favorites":"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435","navigation--bin":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430","-of-review-1":"\u043e\u0442\u0437\u044b\u0432","-of-review-2":"\u043e\u0442\u0437\u044b\u0432\u0430","-of-review-5":"\u043e\u0442\u0437\u044b\u0432\u043e\u0432",liter:"\u043b","best-seller":"\u0411\u0435\u0441\u0442\u0441\u0435\u043b\u043b\u0435\u0440","price-unit":"\u0448\u0442"}}},lng:"ru",interpolation:{escapeValue:!1}});function y(){var e=(0,d.$)(),t=(0,o.useCallback)((function(t,n){return e.t(t,x(x({},n),{},{"variable-currency-rub":"\u20bd"}))}),[]);return x(x({},e),{},{t:t})}var j=n(4155),w="/adaptive",O=j.platform,S=n(7435);console.log({"os.platform":S.platform()});var C=(0,a.Z)((function(e){return{outlinedInputRoot:{maxWidth:"12vw",maxHeight:40,appearance:"menulist-button"}}})),P=o.memo((function(){var e=C(),t=y().t,n=(0,s.useQueryStore)("select-option","popular"),r=(0,i.Z)(n,2),a=r[0],l=r[1],c=(0,o.useCallback)((function(e){var t=e.target.value;l(t)}),[]);return console.log({OPERATION_SYSTEM:O}),(0,g.jsxs)(u.Z,{native:!0,className:e.outlinedInputRoot,value:a,onChange:c,variant:"outlined",inputProps:{id:"select-options"},children:[(0,g.jsx)("option",{"aria-label":t("select--popular"),value:"popular",children:t("select--popular")}),(0,g.jsx)("option",{"aria-label":t("select--ascending price"),value:"ascending price",children:t("select--ascending price")}),(0,g.jsx)("option",{"aria-label":t("select--descending price"),value:"descending price",children:t("select--descending price")}),(0,g.jsx)("option",{"aria-label":t("select--according to buyers"),value:"according to buyers",children:t("select--according to buyers")}),(0,g.jsx)("option",{"aria-label":t("select--according to the rating of experts"),value:"according to the rating of experts",children:t("select--according to the rating of experts")}),(0,g.jsx)("option",{"aria-label":t("select--new items"),value:"new items",children:t("select--new items")}),(0,g.jsx)("option",{"aria-label":t("select--discount"),value:"discount",children:t("select--discount")}),(0,g.jsx)("option",{"aria-label":t("select--vintage from old to new"),value:"vintage from old to new",children:t("select--vintage from old to new")}),(0,g.jsx)("option",{"aria-label":t("select--vintage from new to old"),value:"vintage from new to old",children:t("select--vintage from new to old")})]})})),Z=n(4837),k=n(7812),N=n(4184),D=n.n(N);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=o.memo((function(e){var t=e.fill,n=void 0===t?"#f55760":t,i=e.svgProps;return(0,g.jsx)("svg",I(I({"data-name":"grid-view",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",width:20,height:20},i),{},{children:(0,g.jsx)("path",{d:"M8 11H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 7H2v-5h5v5zM19 0h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1zm-1 7h-5V2h5v5zm1 4h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 7h-5v-5h5v5zM8 0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1zM7 7H2V2h5v5z",fill:n})}))}));function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=o.memo((function(e){var t=e.fill,n=void 0===t?"#f55760":t,i=e.svgProps;return(0,g.jsx)("svg",z(z({"data-name":"list-view",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 19",fill:"none",width:20,height:19},i),{},{children:(0,g.jsx)("path",{d:"M0 8.333a1 1 0 011-1h1.448a1 1 0 011 1V10a1 1 0 01-1 1H1a1 1 0 01-1-1V8.333zM0 1a1 1 0 011-1h1.448a1 1 0 011 1v1.667a1 1 0 01-1 1H1a1 1 0 01-1-1V1zM0 15.667a1 1 0 011-1h1.448a1 1 0 011 1v1.666a1 1 0 01-1 1H1a1 1 0 01-1-1v-1.666zM6.897 1.733a1 1 0 011-1H19a1 1 0 011 1v.2a1 1 0 01-1 1H7.897a1 1 0 01-1-1v-.2zM6.897 9.067a1 1 0 011-1H19a1 1 0 011 1v.2a1 1 0 01-1 1H7.897a1 1 0 01-1-1v-.2zM6.897 16.4a1 1 0 011-1H19a1 1 0 011 1v.2a1 1 0 01-1 1H7.897a1 1 0 01-1-1v-.2z",fill:n})}))})),F=n(1120),W=n(2318),E=n(5663);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=(0,F.Z)((function(e){return{rating:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},banner:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},priceCard:{color:"#6D6865",fontFamily:E.rO,fontSize:"2rem",fontWeight:900,letterSpacing:0,lineHeight:"2.25rem"},body3:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},body4:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},button1:{color:"#fff",fontFamily:E.I8,fontSize:"1rem",fontWeight:700,letterSpacing:"-0.023rem",lineHeight:"1.5rem"},button2:{color:"#fff",fontFamily:E.I8,fontSize:"0.875rem",fontWeight:700,letterSpacing:"-0.023rem",lineHeight:"1.25rem"},button3:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},caption2:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},caption3:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},caption4:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},link2:{fontFamily:"",fontSize:"",fontWeight:700,letterSpacing:0,lineHeight:"",fontStyle:""},sale:{color:"#fff",fontFamily:E.rO,fontSize:"1rem",fontWeight:700,letterSpacing:0,lineHeight:"1.5rem",fontStyle:"italic"},sale2:{color:"#fff",fontFamily:E.rO,fontSize:"1.5rem",fontWeight:700,letterSpacing:"-0.025rem",lineHeight:"1.75rem",fontStyle:"italic"},sale3:{color:"#fff",fontFamily:E.rO,fontSize:"0.875rem",fontWeight:700,letterSpacing:"0.025rem",lineHeight:"1.25rem",fontStyle:"italic"},note:{fontFamily:"",fontSize:"0.75rem",fontWeight:500,letterSpacing:"-0.094rem",lineHeight:"0.75rem"}}})),G=["rating","banner","priceCard","body3","body4","button1","button2","button3","caption2","caption3","caption4","link2","sale","sale2","sale3","note"],L=o.memo((function(e){var t=e.customVariant,n=e.children,i=e.TypographyProps,r=M();return(0,g.jsx)(W.Z,V(V({variant:G.includes(t)?"body1":t,className:"priceCard"===t?r.priceCard:"rating"===t?r.rating:"banner"===t?r.banner:"body3"===t?r.body3:"body4"===t?r.body4:"button1"===t?r.button1:"button2"===t?r.button2:"button3"===t?r.button3:"caption2"===t?r.caption2:"caption3"===t?r.caption3:"caption4"===t?r.caption4:"link2"===t?r.link2:"sale"===t?r.sale:"sale2"===t?r.sale2:"sale3"===t?r.sale3:"note"===t?r.note:null},i),{},{children:n}))}));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=(0,a.Z)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",alignItems:"center"}}})),Y=o.memo((function(e){var t=e.additionalClasses,n=e.buttonGroupProps,r=$(),a=l(),s=(0,i.Z)(a,2),c=s[0],d=s[1];return(0,g.jsxs)("div",{className:D()(r.root,t),children:[(0,g.jsx)(L,{customVariant:"body2",TypographyProps:{style:{textTransform:"none"}},children:"\u0412\u0438\u0434"}),(0,g.jsxs)(Z.Z,Q(Q({variant:"text",color:"primary"},n),{},{children:[(0,g.jsx)(k.Z,{"aria-label":"catalog-list-view",onClick:(0,o.useCallback)((function(){return d("list")}),[]),children:(0,g.jsx)(T,{fill:"list"===c?"#f55760":"#AFACA9"})}),(0,g.jsx)(k.Z,{"aria-label":"catalog-grid-view",size:"small",onClick:(0,o.useCallback)((function(){return d("grid")}),[]),children:(0,g.jsx)(R,{fill:"grid"===c?"#f55760":"#AFACA9"})})]}))]})})),q=(0,a.Z)((function(e){return{displayOptionsBarArea:{display:"flex",flexDirection:"column",gap:24,backgroundColor:"#fff"},selectedFiltersOptionsAndViewArea:{display:"grid",gridTemplateColumns:"1fr 0.1fr"},selectedFiltersOptionsChips:{display:"grid",gridColumnGap:8,gridTemplateColumns:"repeat( auto-fit, minmax(112px, 0.08fr) )",alignContent:"center"}}})),J=o.memo((function(e){e.children;var t=e.selectedFilterOptions,n=q(),i=((0,d.$)().t,(0,o.useCallback)((function(e){alert("delete "+e)}),[]));return(0,g.jsxs)("nav",{className:n.displayOptionsBarArea,children:[(0,g.jsx)(P,{}),(0,g.jsxs)("div",{className:n.selectedFiltersOptionsAndViewArea,children:[(0,g.jsx)("div",{className:n.selectedFiltersOptionsChips,children:t.map((function(e){return(0,g.jsx)(m,{id:e.id,title:e.title,handleDelete:i},e.id)}))}),(0,g.jsx)(Y,{})]})]})})),K=n(1437),U=n(282),X=n(6486),ee=n.n(X);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=(0,F.Z)((function(e){return{badgeArea:{backgroundImage:'url("'.concat(w,'/badge.svg")'),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",width:"6vh",height:"3vh",maxWidth:76,display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center"},badgeVolumeQuantityArea:{backgroundImage:'url("'.concat(w,'/badge.svg")'),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",width:"6vh",height:"3vh",maxWidth:76,display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center"}}})),re=o.memo((function(e){var t=e.SaleBadgeProps,n=e.saleBadgeStyle,i=e.percent,r=void 0===i?"-24%":i,a=ie(),o=Ze();return(0,g.jsx)("div",ne(ne({className:D()(a.badgeArea,n)},t),{},{children:(0,g.jsx)(L,{customVariant:!0===o?"sale3":"sale2",TypographyProps:{component:"div",align:"center",style:{zIndex:2,width:"100%"}},children:r})}))})),ae=n(628),oe=(0,a.Z)((function(e){return{root:(0,f.Z)({display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},e.breakpoints.down("sm"),{marginBottom:"1.5rem"}),badge:(0,f.Z)({border:"1px solid #ceb1b1",borderRadius:25,width:"max-content",height:"2rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},e.breakpoints.down("sm"),{width:"2rem"})}})),se=o.memo((function(e){var t=e.value,n=e.numberReviews,i=void 0===n?15:n,r=oe(),a=Ze();return(0,g.jsxs)("div",{className:r.root,children:[(0,g.jsx)(ae.Z,{name:"client-rating",size:!0===a?"small":"large",value:t,readOnly:!0}),(0,g.jsxs)(U.Z,{variant:"text",children:[i," \u043e\u0442\u0437\u044b\u0432\u043e\u0432"]})]})}));function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=(0,a.Z)((function(e){return{badge:{borderRadius:25,width:"2rem",height:"2rem",display:"flex",alignItems:"center",justifyContent:"center"},horizontalBadge:{width:"max-content",height:"1.5rem"},typographyArea:{padding:"0 8px"}}})),pe=o.memo((function(e){var t=e.badgeBorderColor,n=void 0===t?"#ceb1b1":t,i=e.rating,r=e.num1,a=void 0===r?98:r,o=e.num2,s=void 0===o?95:o,l=e.horizontalBadge,c=void 0!==l&&l,d=e.ExpertRatingBadgeProps,p=e.expertRatingBadgeStyle,m=de();return(0,g.jsx)("div",ce(ce({style:{border:"2px solid ".concat(n)},className:D()(m.badge,!c&&m.horizontalBadge,p)},d),{},{"aria-labelledby":"\u043e\u0446\u0435\u043d\u043a\u0430 \u0441\u043e\u043c\u0435\u043b\u044c\u0435 ".concat(i),children:(0,g.jsx)(W.Z,{variant:"caption",className:!c&&m.typographyArea,component:"div",children:c?i:i?"Vivini ".concat(i):a?"DC ".concat(a):s?"RP ".concat(s):null})}))}));function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=(0,a.Z)((function(e){return{galleryGrid:(0,f.Z)({width:"100%",height:"auto",display:"grid",gridTemplateColumns:"min-content auto",boxSizing:"border-box"},e.breakpoints.down("sm"),{display:"flex",paddingTop:"3.75rem",paddingBottom:"2.5rem"}),wrapperImagesViewer:(0,f.Z)({position:"relative",maxHeight:"60vh",width:"100%"},e.breakpoints.down("sm"),{height:"40vh"}),image:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",display:"block"},imagesArrangement:(0,f.Z)({display:"flex",flexDirection:"column",boxSizing:"border-box",marginRight:"0.75rem"},e.breakpoints.down("sm"),{display:"none"}),notActiveImage:{position:"relative",width:"3.5rem",height:"3.5rem",backgroundColor:"#fff",borderRadius:8,overflow:"hidden",marginBottom:4,"&:hover":{boxSizing:"border-box",border:"1px solid #FCF3ED"}},"@keyframes mountImage":{"0%":{opacity:0},"25%":{opacity:.25},"50%":{opacity:.5},"75%":{opacity:.75},"100%":{opacity:1}},mainActiveImageMount:{animationName:"$mountImage",animation:"1s alternate slide-in"},activeImage:{border:"1px solid #F55760",boxSizing:"border-box",borderRadius:8}}})),fe=o.memo((function(e){var t=e.children,n=ue();return(0,g.jsx)("div",{className:n.galleryGrid,children:t})})),he=o.memo((function(e){var t=e.imageClasses,n=void 0===t?{}:t,i=e.src,r=void 0===i?"":i,a=e.alt,o=void 0===a?"":a,s=e.ImagesProps,l=void 0===s?{}:s;return(0,g.jsx)("img",me({src:r,alt:o,className:n},l))})),be=o.memo((function(e){var t,n,i=e.images,r=e.ImageProps,a=e.nonActiveImagesProps,s=e.saleBadge,l=ue(),c=(0,o.useState)(0),d=c[0],p=c[1],m=(0,o.useState)(0),u=(m[0],m[1]);return(0,g.jsxs)(fe,{children:[i.length<1||(0,g.jsx)("div",{className:l.imagesArrangement,children:i.map((function(e,t){return(0,g.jsx)("div",me(me({className:D()(l.notActiveImage,d===t&&l.activeImage),onClick:function(){u(d),p(t)}},a),{},{children:(0,g.jsx)(he,{src:e.src,alt:e.alt,imageClasses:l.image,ImageProps:r})}),e.id)}))}),(0,g.jsxs)("div",{className:l.wrapperImagesViewer,children:[s,[(0,g.jsx)(he,{src:null===(t=i[d])||void 0===t?void 0:t.src,alt:null===(n=i[d])||void 0===n?void 0:n.alt,imageClasses:D()(l.image,l.mainActiveImageMount),ImageProps:r},d)]]})]})})),ve=n(998);function xe(e,t,n){var i,r,a=(""+e).split("."),o="";for(t||(t=" "),n||0===n||(n=3),i=a[0].length;i>n;)r=i-n,o=t+a[0].slice(r,i)+o,i=r;return o=a[0].slice(0,i)+o,a[0]=o,a.join(".")}function ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return(0,o.useMemo)((function(){return xe(e," ",t)}),[e,t])}var je=n(5757),we=(0,a.Z)((function(e){return{priceCard:(0,f.Z)({backgroundColor:"#fff",boxShadow:"0px 4px 7px rgba(0, 0, 0, 0.05)",borderRadius:20,width:"100%",height:"min-content",maxWidth:336},e.breakpoints.down("sm"),{boxShadow:"none",maxWidth:"100%",borderRadius:0}),priceArea:(0,f.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"baseline",marginBottom:"2.5rem"},e.breakpoints.down("sm"),{marginBottom:"1.5rem"}),priceStyle:{textDecoration:"line-through"},marginButton:{marginBottom:"0.5rem"},buttonStyles:{paddingTop:"1rem",paddingBottom:"1rem"}}})),Oe=o.memo((function(){var e=we();return(0,g.jsx)("section",{className:e.priceCard,children:(0,g.jsxs)(c.Z,{pt:{xs:0,md:3},px:{xs:0,md:3},pb:{xs:0,md:5},width:"100%",display:"flex",flexDirection:"column",children:[(0,g.jsx)(Se,{price:2990}),(0,g.jsxs)(c.Z,{display:"flex",flexDirection:"column",children:[(0,g.jsx)(U.Z,{variant:"outlined",fullWidth:!0,className:D()(e.marginButton,e.buttonStyles),children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0438\u0435"}),(0,g.jsx)(U.Z,{variant:"contained",color:"primary",fullWidth:!0,className:e.buttonStyles,children:"\u0423\u0437\u043d\u0430\u0442\u044c \u043e \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0438"})]})]})})})),Se=o.memo((function(e){var t=e.salePrice,n=void 0===t?1890:t,i=e.currency,r=void 0===i?"\u20bd":i,a=e.price,o=void 0===a?2990:a,s=e.sale,l=void 0===s||s,c=(e.unitPrice,e.color),d=we();return(0,g.jsxs)("div",{className:d.priceArea,children:[(0,g.jsxs)(L,{customVariant:"priceCard",color:c,children:[ye(n)," ",r]}),!0===l?(0,g.jsxs)(L,{customVariant:"h5",TypographyProps:{className:d.priceStyle,style:{marginLeft:12}},children:[ye(o)," ",r]}):null]})})),Ce=o.memo((function(e){var t=e.salePrice,n=void 0===t?1890:t,i=e.currency,r=void 0===i?"\u20bd":i,a=e.price,o=void 0===a?2990:a,s=e.sale,l=void 0===s||s,c=e.unitPrice,d=void 0===c?49:c,p=e.color,m=e.customVariantTypographySale,u=void 0===m?"priceCard":m,f=e.customVariantTypographyPrice,h=void 0===f?"h5":f,b=we(),v=y().t;return(0,g.jsx)(ve.Z,{children:(0,g.jsx)(je.Z,{primary:(0,g.jsxs)("div",{className:b.priceArea,children:[(0,g.jsxs)(L,{customVariant:u,color:p,children:[ye(n)," ",r]}),!0===l?(0,g.jsxs)(L,{customVariant:h,TypographyProps:{className:b.priceStyle,style:{marginLeft:12}},children:[ye(o)," ",r]}):null]}),secondary:!!d&&(0,g.jsxs)(L,{customVariant:"body2",color:"primary",children:[d," / ",v("price-unit")]})})})})),Pe=[{id:"a",src:"".concat(w,"/bottle.png"),alt:"red wine"},{id:"d",src:"".concat(w,"/wine.png"),alt:"red wine"},{id:"b",src:"".concat(w,"/wine_n.jpeg"),alt:"red wine"},{id:"c",src:"".concat(w,"/wine_nn.jpeg"),alt:"red wine"}];function Ze(){return(0,K.Z)("(max-width: 1023px)")}var ke=(0,a.Z)((function(e){return{productCardMainContainerNude:{backgroundColor:"#F9F5F3"},productCardMainContainerWhite:{backgroundColor:"#FFF"},productCardGridContainer:(0,f.Z)({width:"100%",height:"auto",display:"grid",gridTemplateColumns:"minmax(231px, 1.2fr) minmax(339px, 1.3fr) minmax(316px, 1fr)",paddingLeft:"1.75rem",paddingRight:"1.75rem",paddingTop:"3.75rem",paddingBottom:"2.5rem",boxSizing:"border-box"},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",flexWrap:"wrap",paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0}),productCardGalleryArea:(0,f.Z)({textAlign:"center",position:"relative",boxSizing:"border-box",marginRight:"2rem"},e.breakpoints.down("sm"),{marginRight:0}),productCardInfoArea:(0,f.Z)({display:"flex",flexDirection:"column",gap:"2.5rem",marginRight:"1.5rem"},e.breakpoints.down("sm"),{marginRight:0,gap:"0.5rem"}),productCardPriceArea:(0,f.Z)({width:"100%",position:"relative",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"flex-end"},e.breakpoints.down("sm"),{display:"none"}),productCardSaleBadgePositioning:(0,f.Z)({position:"absolute",top:0,right:0,zIndex:1},e.breakpoints.down("sm"),{top:"calc(100% - 12px)",left:"1rem"}),productCardInfo:(0,f.Z)({},e.breakpoints.down("sm"),{backgroundColor:"#fff",padding:"1rem",borderRadius:"0.5rem"}),bestseller:{color:e.palette.info.main},expertsRatingBadgeReview:(0,f.Z)({},e.breakpoints.down("sm"),{backgroundColor:"#fff",padding:"1.5rem 1rem",borderRadius:"0.5rem"}),expertRatingBadge:(0,f.Z)({marginBottom:"2.5rem"},e.breakpoints.down("sm"),{marginBottom:"1.5rem"}),buttonMoreInfoExpertReview:(0,f.Z)({},e.breakpoints.down("sm"),{paddingLeft:0,paddingRight:0,justifyContent:"flex-start"}),reviewText:(0,f.Z)({marginBottom:"1.5rem"},e.breakpoints.down("sm"),{marginBottom:"0.5rem"})}})),Ne=o.memo((function(e){var t=e.data;return(0,g.jsx)(g.Fragment,{children:t})})),De=o.memo((function(e){var t=e.title,n=e.reviewText,i=void 0===n?"\u0412\u043a\u0443\u0441 \u0432\u0438\u043d\u0430 \u0449\u0435\u0434\u0440\u044b\u0439, \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0441 \u043d\u043e\u0442\u0430\u043c\u0438 \u0432\u0430\u043d\u0438\u043b\u0438, \u043a\u043e\u0444\u0435 \u0438 \u0434\u0443\u0431\u0430, \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u043c\u0438 \u0430\u043a\u0446\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u0434\u043e\u043b\u0433\u0438\u043c, \u043e\u043a\u0440\u0443\u0433\u043b\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0432\u043a\u0443\u0441\u0438\u0435\u043c.":n,r=e.backgroundColorSwitch,a=void 0!==r&&r,o=ke(),s=Ze(),l=y().t;return(0,g.jsx)("article",{className:a?o.productCardMainContainerNude:o.productCardMainContainerWhite,children:(0,g.jsxs)("section",{className:o.productCardGridContainer,children:[(0,g.jsx)("aside",{className:o.productCardGalleryArea,children:(0,g.jsx)(be,{images:Pe,saleBadge:(0,g.jsx)(re,{saleBadgeStyle:o.productCardSaleBadgePositioning})})}),(0,g.jsx)(Ne,{data:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{className:o.productCardInfoArea,children:[(0,g.jsxs)("section",{className:o.productCardInfo,children:[(0,g.jsx)(W.Z,{variant:"body1",className:o.bestseller,children:l("best-seller")}),(0,g.jsx)(W.Z,{component:"div",variant:"h1",color:"textPrimary",align:"left",children:t}),(0,g.jsx)(se,{value:2.7}),s&&(0,g.jsx)(Oe,{})]}),(0,g.jsxs)("section",{className:o.expertsRatingBadgeReview,children:[(0,g.jsx)(pe,{rating:4.2,horizontalBadge:!0===s,expertRatingBadgeStyle:o.expertRatingBadge}),(0,g.jsx)(W.Z,{component:"div",variant:"body1",align:"left",className:o.reviewText,children:i}),(0,g.jsx)(U.Z,{variant:!0===s?"text":"outlined",className:o.buttonMoreInfoExpertReview,children:!0===s?"\u0415\u0449\u0435":"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c"})]})]}),(0,g.jsx)("section",{className:o.productCardPriceArea,children:(0,g.jsx)(Oe,{})})]})})]})})}),ee().isEqual),Be=n(2822),Ie=n(4246),Re=n(7249),Ae=(0,a.Z)((function(e){return{productSnippetArea:{display:"flex",flexDirection:"column",position:"relative"},imageProductSnippetArea:{position:"absolute",top:0,left:0,width:"100%",display:"flex",justifyContent:"center"},badgesLocation:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},expertRatingRow:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},imgBox:{paddingBottom:12},imgStyle:{display:"block",width:"100%"},infoProductSnippetArea:{},bestseller:{color:e.palette.info.main}}})),ze=o.memo((function(e){var t=e.src,n=void 0===t?"".concat(w,"/bottle.png"):t,i=e.alt,r=Ae(),a=y().t;return(0,g.jsxs)("section",{className:r.productSnippetArea,children:[(0,g.jsx)("div",{style:{position:"relative",width:"auto",height:"100%"},children:(0,g.jsxs)("div",{className:r.imageProductSnippetArea,children:[(0,g.jsx)(Te,{}),(0,g.jsx)("div",{className:r.imgBox,children:(0,g.jsx)("img",{src:n,alt:i,className:r.imgStyle})})]})}),(0,g.jsxs)(Be.Z,{className:r.infoProductSnippetArea,children:[(0,g.jsx)(Ce,{customVariantTypographySale:"h5",customVariantTypographyPrice:"body2",color:"primary"}),(0,g.jsx)(L,{customVariant:"body1",className:r.bestseller,children:a("best-seller")})]})]})})),Te=o.memo((function(){var e=Ae(),t=(0,o.useState)(!1),n=t[0],i=t[1],r=(0,o.useCallback)((function(){return i(!n)}),[n]);return(0,g.jsxs)("div",{className:e.badgesLocation,children:[(0,g.jsxs)("div",{className:e.expertRatingRow,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(pe,{rating:4.3}),(0,g.jsx)(pe,{num1:93,badgeBorderColor:"#C4B4E7"}),(0,g.jsx)(pe,{num2:98,badgeBorderColor:"#BEE0C9"})]}),(0,g.jsx)(k.Z,{onClick:r,children:n?(0,g.jsx)(Re.Z,{color:"primary"}):(0,g.jsx)(Ie.Z,{})})]}),(0,g.jsx)("div",{children:(0,g.jsx)(re,{})})]})})),Fe=(0,a.Z)((function(e){return{productCardStyle:{backgroundColor:"#fff"},catalogListView:{display:"flex",flexDirection:"column",gap:24},catalogGridView:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridAutoRows:"minmax(auto, 648px)",columnGap:"1vw",rowGap:"1vh"}}})),We=o.memo((function(){var e=Fe(),t=l(),n=(0,i.Z)(t,2),r=n[0],a=(n[1],"list"===r?De:ze);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(J,{selectedFilterOptions:[{id:"a",title:"\u043a\u0440\u0430\u0441\u043d\u043e\u0435"},{id:"b",title:"\u0418\u0442\u0430\u043b\u0438\u044f"}]}),(0,g.jsxs)(c.Z,{component:"section",className:"list"===r?e.catalogListView:e.catalogGridView,children:[(0,g.jsx)(a,{backgroundColor:!1,title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'}),(0,g.jsx)(a,{title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'}),(0,g.jsx)(a,{title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'}),(0,g.jsx)(a,{title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'}),(0,g.jsx)(a,{title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'}),(0,g.jsx)(a,{title:'\u0412\u0438\u043d\u043e Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'})]})]})})),Ee=n(4436),He=n(6019),Ve=n(6562),Me=n(553),Ge=n(6653);function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=(0,F.Z)((function(e){return{root:{display:"flex",width:240,flexShrink:0},formControl:{margin:e.spacing(3)}}})),$e=o.memo((function(){var e=Qe(),t=(0,o.useState)({white:!0,red:!1,pink:!1}),n=t[0],i=t[1],r=(0,o.useCallback)((function(e){i(_e(_e({},n),{},(0,f.Z)({},e.target.name,e.target.checked)))}),[n]),a=n.white,s=n.red,l=n.pink;return(0,g.jsx)("div",{className:e.root,children:(0,g.jsxs)(Ee.Z,{component:"fieldset",className:e.formControl,children:[(0,g.jsx)(He.Z,{component:"legend",children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),(0,g.jsxs)(Ve.Z,{children:[(0,g.jsx)(Me.Z,{control:(0,g.jsx)(Ge.Z,{checked:a,onChange:r,name:"white"}),label:"\u0431\u0435\u043b\u043e\u0435"}),(0,g.jsx)(Me.Z,{control:(0,g.jsx)(Ge.Z,{checked:s,onChange:r,name:"red"}),label:"\u043a\u0440\u0430\u0441\u043d\u043e\u0435"}),(0,g.jsx)(Me.Z,{control:(0,g.jsx)(Ge.Z,{checked:l,onChange:r,name:"pink"}),label:"\u0440\u043e\u0437\u043e\u0432\u043e\u0435"})]})]})})})),Ye=n(4741),qe=n(1423),Je=n(65),Ke=n(1675),Ue=(0,a.Z)((function(e){return{navigationArea:{width:"100%",display:"flex",flexDirection:"column",gap:12},upperNavigationSection:{width:"100%",display:"flex",justifyContent:"space-between"},upperNavigationButtonsBlock:{display:"flex",gap:"1vw"},middleSection:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},menuItemsTabs:{},logoSearchSection:{display:"flex",gap:"1.3vw"},catalogButton:{padding:"0 14px"},searchSection:{width:"40vw",padding:"2px 4px",display:"flex",alignItems:"center",border:"2px solid #DDDBD8",borderRadius:8},searchInput:{marginLeft:e.spacing(1),flex:1},searchButton:{height:"100%"},loginFavBinContainer:{display:"flex",gap:"1.5vw"},buttonWithIcons:{flexDirection:"column"},startIconButtons:{marginRight:0},tabsStyles:{"& > *:first-child, & > *:last-child":{transition:"width 0.3s ease","&[class*=disabled]":{width:0}}},imgStyle:{display:"block",width:"100%"}}})),Xe=o.memo((function(){var e=Ue();return(0,g.jsxs)(c.Z,{component:"div",className:e.navigationArea,children:[(0,g.jsx)(et,{}),(0,g.jsx)(tt,{}),(0,g.jsx)(it,{})]})})),et=o.memo((function(e){var t=e.geolocation,n=void 0===t?"\u041c\u043e\u0441\u043a\u0432\u0430":t,i=Ue(),r=y().t;return(0,g.jsxs)("div",{className:i.upperNavigationSection,children:[(0,g.jsx)(U.Z,{startIcon:(0,g.jsx)("img",{className:i.imgStyle,src:"./geolocation.svg",alt:r("navigation--geolocation")}),onClick:function(){return alert("Moscowneversleep")},children:n}),(0,g.jsxs)("div",{className:i.upperNavigationButtonsBlock,children:[(0,g.jsx)(U.Z,{onClick:function(){return alert("Wedding")},children:r("navigation--wedding")}),(0,g.jsx)(U.Z,{onClick:function(){return alert("Business")},children:r("navigation--for-business")}),(0,g.jsx)(U.Z,{onClick:function(){return alert("Your order is arriving")},children:r("navigation--order-status")}),(0,g.jsx)(U.Z,{startIcon:(0,g.jsx)("img",{className:i.imgStyle,src:"./map-point.svg",alt:r("navigation--shops")}),onClick:function(){return alert("List of shops")},children:r("navigation--shops")}),(0,g.jsx)(U.Z,{onClick:function(){return alert("FAQ")},children:r("navigation--help-consulting")}),(0,g.jsx)(U.Z,{variant:"outlined",onClick:function(){return alert("Change you favorite language")},"aria-labelledby":r("navigation--switch-site-to",{language:"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"}),children:"EN"})]})]})})),tt=o.memo((function(){var e=Ue(),t=y().t;return(0,g.jsxs)("div",{className:e.middleSection,children:[(0,g.jsxs)("div",{className:e.logoSearchSection,children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{className:e.imgStyle,src:"./logo.svg",alt:"logo",width:"100%",height:"100%"})}),(0,g.jsx)(U.Z,{classes:{label:e.catalogButton},startIcon:(0,g.jsx)("img",{className:e.imgStyle,src:"./catalog-icon.svg",alt:t("navigation--catalog")}),variant:"contained",color:"primary",onClick:function(){return alert("open catalog")},children:t("navigation--catalog")}),(0,g.jsx)(nt,{})]}),(0,g.jsxs)("div",{className:e.loginFavBinContainer,children:[(0,g.jsx)(U.Z,{classes:{label:e.buttonWithIcons,startIcon:e.startIconButtons},startIcon:(0,g.jsx)(Ke.Z,{}),children:t("navigation--login")}),(0,g.jsx)(U.Z,{classes:{label:e.buttonWithIcons,startIcon:e.startIconButtons},startIcon:(0,g.jsx)(Ie.Z,{}),children:t("navigation--favorites")}),(0,g.jsx)(U.Z,{classes:{label:e.buttonWithIcons,startIcon:e.startIconButtons},startIcon:(0,g.jsx)("img",{className:e.imgStyle,src:"./bin.svg",alt:t("navigation--bin")}),children:t("navigation--bin")})]})]})})),nt=o.memo((function(){var e=Ue(),t=y().t;return(0,g.jsxs)(c.Z,{component:"form",className:e.searchSection,children:[(0,g.jsx)(Ye.Z,{className:e.searchInput,placeholder:t("navigation--search-input"),inputProps:{"aria-label":"search google maps"}}),(0,g.jsx)(U.Z,{color:"primary",variant:"contained",type:"submit","aria-label":"search",className:e.searchButton,children:(0,g.jsx)("img",{className:e.imgStyle,src:"./search-icon.svg",alt:t("navigation--search-icon")})})]})})),it=o.memo((function(){var e=Ue(),t=y().t,n=(0,s.useQueryStore)("menu-item","promotion"),r=(0,i.Z)(n,2),a=r[0],l=(r[1],(0,o.useCallback)((function(){}),[]));return(0,g.jsxs)(Je.Z,{value:a,onChange:l,variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":t("navigation--menu-items"),className:e.tabsStyles,children:[(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-promotion")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-wine")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-champagne")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-whiskey")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-beer-cider")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-water-juices")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-delicacies")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-sets-gifts")}),(0,g.jsx)(qe.Z,{label:t("navigation--menu-item-dishes-accessories")})]})})),rt=(0,a.Z)((function(e){return{page:{display:"grid",gridTemplateRows:"min-content auto",width:"100%",height:"100vh",maxWidth:1920,margin:"0 auto",padding:"0 28px"},mainPageArea:{display:"flex",zIndex:1},header:{width:"100%",height:"auto",position:"sticky",top:0,zIndex:2,padding:"12px 0"},mainContentArea:{position:"relative",width:"100%"}}})),at=o.memo((function(){var e=rt(),t=l(),n=(0,i.Z)(t,2);n[0],n[1];return(0,g.jsxs)("div",{className:e.page,children:[(0,g.jsx)(r.Z,{component:"header",elevation:0,className:e.header,children:(0,g.jsx)(Xe,{})}),(0,g.jsxs)("main",{className:e.mainPageArea,children:[(0,g.jsx)($e,{}),(0,g.jsx)("main",{className:e.mainContentArea,children:(0,g.jsx)(We,{})})]}),(0,g.jsx)("footer",{})]})}))}}]);