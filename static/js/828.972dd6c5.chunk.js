"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[828],{2427:function(n,e,t){t.d(e,{Z:function(){return l}});var i,r=t(885),o=t(2791),a=t(168),c=t(6444).ZP.img(i||(i=(0,a.Z)(["\n  display: block;\n  max-width: ",";\n  width: 100%;\n"])),(function(n){var e;return null!==(e=n.maxWidth)&&void 0!==e?e:"300px"})),s=t(4603),d=t(184),l=function(n){var e=n.src,t=n.alt,i=n.check,a=n.maxWidth,l=(0,o.useState)(e),x=(0,r.Z)(l,2),p=x[0],u=x[1];return(0,d.jsxs)(d.Fragment,{children:[!i&&(0,d.jsx)(c,{maxWidth:a,src:s,alt:t}),i&&(0,d.jsx)(c,{maxWidth:a,onError:function(){u(s)},src:p,alt:t})]})}},2281:function(n,e,t){var i=t(5861),r=t(885),o=t(7757),a=t.n(o),c=t(4569),s=t.n(c),d=t(2791);e.Z=function(n,e){var t,o=(0,d.useState)({}),c=(0,r.Z)(o,2),l=c[0],x=c[1],p=(0,d.useState)(!1),u=(0,r.Z)(p,2),h=u[0],v=u[1];switch(e){case"credits":t="/credits";break;case"reviews":t="/reviews";break;default:t=""}return(0,d.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,s().get("https://api.themoviedb.org/3/movie/".concat(n).concat(t,"?api_key=80dd3433372e51907072dd17bd29b086"));case 4:return i=e.sent,e.next=7,x(i.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,t]),{movie:l,loading:h}}},3828:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});t(2791);var i,r,o,a,c,s,d=t(6871),l=t(2281),x=t(7793),p=t(2427),u=t(168),h=t(6444),v=h.ZP.article(i||(i=(0,u.Z)(["\n  @media (min-width: 660px) {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    gap: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    gap: 50px;\n  }\n"]))),m=h.ZP.div(r||(r=(0,u.Z)(["\n  max-width: 300px;\n  width: 100%;\n  margin: 0 auto;\n\n  @media (min-width: 660px) {\n    margin: 0;\n  }\n"]))),g=h.ZP.div(o||(o=(0,u.Z)(["\n  text-align: justify;\n\n  @media (min-width: 660px) {\n    & h2 {\n      margin-top: 0;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    padding-right: 50px;\n  }\n"]))),b=t(184),f=function(n){var e=n.movie,t=e.poster_path,i=e.release_date,r=e.title,o=e.vote_average,a=e.overview,c=e.genres,s=new Date(i).getFullYear(),d="".concat((10*o).toFixed(0),"%");return(0,b.jsxs)(v,{children:[(0,b.jsx)(m,{children:(0,b.jsx)(p.Z,{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:"".concat(r," cover"),check:t,maxWidth:"500px"})}),(0,b.jsxs)(g,{children:[(0,b.jsx)("h2",{children:"".concat(r," (").concat(s,")")}),(0,b.jsx)("p",{children:"User score: ".concat(d)}),(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:a}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("p",{children:null===c||void 0===c?void 0:c.map((function(n){return n.name})).join(", ")})]})]})},w=h.ZP.section(a||(a=(0,u.Z)(["\n  padding: 10px 20px;\n\n  & button {\n    margin-bottom: 10px;\n    padding: 8px 16px;\n    border: 1px solid grey;\n    border-radius: 5px;\n    font-size: 14px;\n    color: white;\n    background-color: black;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      background-color: #B30303;\n      box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n      transition: background-color 400ms;\n    }\n  }\n"]))),j=t(501),k=h.ZP.ul(c||(c=(0,u.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n\n  & li {\n    &:not(:last-child) {\n      margin-right: 15px;\n    }\n  }\n"]))),Z=(0,h.ZP)(j.OL)(s||(s=(0,u.Z)(["\n  display: block;\n  padding: 8px 16px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  font-size: 14px;\n  text-decoration: none;\n  color: white;\n  background-color: black;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    font-weight: 600;\n    background-color: #B30303;\n    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n    transition: background-color 500ms;\n  }\n\n  &.active {\n    font-weight: 600;\n    background-color: #B30303;\n    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n  }\n"]))),y=function(){var n=(0,d.TH)();return(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Aditional information"}),(0,b.jsxs)(k,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(Z,{to:"cast",state:n.state,children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(Z,{to:"reviews",state:n.state,children:"Reviews"})})]})]})},_=function(){var n,e,t,i,r,o=(0,d.UO)().movieId,a=(0,d.TH)(),c=(0,d.s0)(),s=(0,l.Z)(o),p=s.movie,u=s.loading,h=null!==(n="".concat(null===(e=a.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname).concat(null===(i=a.state)||void 0===i||null===(r=i.from)||void 0===r?void 0:r.search))&&void 0!==n?n:"/movies";return(0,b.jsxs)(w,{children:[(0,b.jsx)("button",{type:"button",onClick:function(n){c(h,{replace:!0})},children:"\u2190 Go back"}),u?(0,b.jsx)(x.Z,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{movie:p}),(0,b.jsx)(y,{}),(0,b.jsx)(d.j3,{})]})]})}},4603:function(n,e,t){n.exports=t.p+"static/media/NoImageAvailable.b0ded384e6a4d8723849.png"}}]);
//# sourceMappingURL=828.972dd6c5.chunk.js.map