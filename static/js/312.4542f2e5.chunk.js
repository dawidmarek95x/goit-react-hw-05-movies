"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[312],{1913:function(n,e,t){var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o),s="80dd3433372e51907072dd17bd29b086",l=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"day",n.prev=1,n.next=4,c().get("https://api.themoviedb.org/3/trending/movie/".concat(e,"?api_key=").concat(s));case 4:return t=n.sent,n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u={fetchTrendy:l,fetchMoviesByQuery:d};e.ZP=u},2427:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a=t(885),i=t(2791),o=t(168),c=t(6444).ZP.img(r||(r=(0,o.Z)(["\n  display: block;\n  max-width: ",";\n  width: 100%;\n"])),(function(n){var e;return null!==(e=n.maxWidth)&&void 0!==e?e:"300px"})),s=t(4603),l=t(184),d=function(n){var e=n.src,t=n.alt,r=n.check,o=n.maxWidth,d=(0,i.useState)(e),u=(0,a.Z)(d,2),p=u[0],x=u[1];return(0,l.jsxs)(l.Fragment,{children:[!r&&(0,l.jsx)(c,{maxWidth:o,src:s,alt:t}),r&&(0,l.jsx)(c,{maxWidth:o,onError:function(){x(s)},src:p,alt:t})]})}},1870:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,i=t(2427),o=(t(2791),t(501)),c=t(6871),s=t(168),l=t(6444),d="10px",u=l.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  justify-items: center;\n  padding: 0 20px;\n  list-style-type: none;\n\n  & li {\n    max-width: 300px;\n    width: 100%;\n    border: 1px solid black;\n    border-radius: ",";\n    background-color: lightgray;\n\n    &:hover {\n      border-color: gray;\n      box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n    }\n  }\n\n  & a {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    color: black;\n    text-decoration: none;\n\n    & p {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      margin: auto 0;\n      padding: 5px;\n      font-weight: 500;\n    }\n  }\n"])),d),p=l.ZP.div(a||(a=(0,s.Z)(["\n  max-height: 370px;\n  height: 100%;\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n  border-bottom: 1px solid black;\n  overflow: hidden;\n\n  & img {\n    display: block;\n    height: 100%;\n  }\n"])),d,d),x=t(184),h=function(n){var e=n.movies,t=(0,c.TH)();return(0,x.jsx)(u,{children:e.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsxs)(o.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,x.jsx)(p,{children:(0,x.jsx)(i.Z,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,check:n.poster_path})}),(0,x.jsx)("p",{children:n.title})]})},n.id)}))})}},1312:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i=t(5861),o=t(885),c=t(7757),s=t.n(c),l=t(1870),d=t(2791),u=t(168),p=t(6444),x=p.ZP.div(r||(r=(0,u.Z)(["\n  padding: 10px 20px;\n"]))),h=p.ZP.form(a||(a=(0,u.Z)(['\n  display: grid;\n  grid-template-columns: minmax(50px, 1fr) 80px;\n  grid-template-areas: "searchbar searchbtn";\n  margin: 0 auto;\n  border: 1px solid grey;\n  border-radius: 10px;\n  overflow: hidden;\n\n  @media (min-width: 576px) {\n    grid-template-columns: 450px 80px;\n    width: max-content;\n  }\n\n  & input {\n    grid-area: searchbar;\n    padding: 5px 10px;\n    outline: none;\n    border: none;\n    font-size: 18px;\n    line-height: 1.2;\n  }\n\n  & button {\n    grid-area: searchbtn;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    border-left: 1px solid gray;\n    color: white;\n    background-color: black;\n    cursor: pointer;\n    transition: background-color 600ms, color 600ms;\n\n    &:hover {\n      color: white;\n      background-color: #B30303;\n      transition: background-color 400ms, color 400ms;\n    }\n\n    & svg {\n      margin-right: 5px;\n    }\n  }\n\n  &:focus-within {\n    box-shadow: -1px -1px 3px 1px black, 1px 1px 3px 1px black;\n  }\n']))),g=t(8185),m=t(184),f=function(n){var e=n.value,t=n.submitHandler,r=n.changeHandler;return(0,m.jsx)(x,{children:(0,m.jsxs)(h,{onSubmit:t,children:[(0,m.jsx)("input",{type:"text",value:e,onChange:r}),(0,m.jsxs)("button",{type:"submit",children:[(0,m.jsx)(g.dVI,{}),"Search"]})]})})},b=t(501),v=t(6871),y=t(1913),k=function(){var n=(0,v.UO)(),e=(0,d.useState)(""),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,b.lr)(),u=(0,o.Z)(c,2),p=u[0],x=u[1],h=(0,d.useState)([]),g=(0,o.Z)(h,2),k=g[0],w=g[1],j=(0,d.useCallback)((0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(e=p.get("query"))){n.next=7;break}return n.next=5,y.ZP.fetchMoviesByQuery(e);case 5:t=n.sent,w(t);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),[p]);return(0,d.useEffect)((function(){j()}),[j]),(0,m.jsxs)(m.Fragment,{children:[!n.movieId&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{value:r,submitHandler:function(n){n.preventDefault(),r||alert("Complete the search field!"),x(r?{query:r}:""),a("")},changeHandler:function(n){a(n.target.value)}}),(0,m.jsx)(l.Z,{movies:k})]}),n.movieId&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(v.j3,{})})]})}},4603:function(n,e,t){n.exports=t.p+"static/media/NoImageAvailable.b0ded384e6a4d8723849.png"}}]);
//# sourceMappingURL=312.4542f2e5.chunk.js.map