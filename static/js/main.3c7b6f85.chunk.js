(this["webpackJsonpcopy-unsplash"]=this["webpackJsonpcopy-unsplash"]||[]).push([[0],{56:function(e,t,a){e.exports=a(85)},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(28),s=a.n(c),o=a(8),l=a(10),i=a(9),u={Types:{UPDATE_STATE:"UPDATE_STATE",FETCH_PHOTOS:"FETCH_PHOTOS",FETCH_RANDOM_PHOTOS:"FETCH_RANDOM_PHOTOS",FETCH_RELATED_PHOTOS:"FETCH_RELATED_PHOTOS",FETCH_SEARCH:"FETCH_SEARCH",FETCH_SEARCH_PHOTOS:"FETCH_SEARCH_PHOTOS",FETCH_SEARCH_COLLECTIONS:"FETCH_SEARCH_COLLECTIONS",FETCH_SEARCH_USERS:"FETCH_SEARCH_USERS",FETCH_COLLECTIONS:"FETCH_COLLECTIONS",FETCH_COLLECTION_BY_ID:"FETCH_COLLECTION_BY_ID",FETCH_COLLECTION_PHOTOS:"FETCH_COLLECTION_PHOTOS",FETCH_USER_PROFILE:"FETCH_USER_PROFILE",FETCH_USER_PORTFOLIO_LINK:"FETCH_USER_PORTFOLIO_LINK",FETCH_USER_PHOTOS:"FETCH_USER_PHOTOS",FETCH_USER_STATISTICS:"FETCH_USER_STATISTICS"},Creators:{updateState:function(e){return{type:u.Types.UPDATE_STATE,payload:e}},fetchPhotos:function(){return{type:u.Types.FETCH_PHOTOS}},fetchRandomPhotos:function(){return{type:u.Types.FETCH_RANDOM_PHOTOS}},fetchRelatedPhotos:function(e){return{type:u.Types.FETCH_RELATED_PHOTOS,payload:e}},fetchSearch:function(e){return{type:u.Types.FETCH_SEARCH,payload:e}},fetchSearchPhotos:function(e){return{type:u.Types.FETCH_SEARCH_PHOTOS,payload:e}},fetchSearchCollections:function(e){return{type:u.Types.FETCH_SEARCH_COLLECTIONS,payload:e}},fetchSearchUsers:function(e){return{type:u.Types.FETCH_SEARCH_USERS,payload:e}},fetchCollections:function(){return{type:u.Types.FETCH_COLLECTIONS}},fetchCollectionById:function(e){return{type:u.Types.FETCH_COLLECTION_BY_ID,payload:e}},fetchCollectionPhotos:function(e){return{type:u.Types.FETCH_COLLECTION_PHOTOS,payload:e}},fetchUserProfile:function(){return{type:u.Types.FETCH_USER_PROFILE}},fetchUserPortfolioLink:function(){return{type:u.Types.FETCH_USER_PORTFOLIOLINK}},fetchUserPhotos:function(){return{type:u.Types.FETCH_USER_PHOTOS}},fetchUserStatistics:function(){return{type:u.Types.FETCH_USER_STASTICS}}}},m=u,d=a(11),p=a.n(d);var h=function(e){var t=e.src,a=e.name;return r.a.createElement("div",{className:"UserIcon"},r.a.createElement("img",{src:t||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu4OXvz-ae0nUgYrD5TymZqMhJdgtQbNaYxRR-DEe9m6ZQouJ8w&s",alt:""}),r.a.createElement("span",{className:"name"},a))};var f=function(e){var t=e.photo,a=void 0===t?{}:t,n=e.showDetail,c=void 0===n?function(){}:n;return r.a.createElement("div",{className:"PhotoCard",onClick:function(){c()}},r.a.createElement("img",{src:a.urls.small,alt:"",className:"img"}),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"upper"},r.a.createElement("div",{className:"left-area"},r.a.createElement("div",{className:"info-txt"},r.a.createElement("i",{className:"material-icons"},"info")," sponsored")),r.a.createElement("div",{className:"right-area"},r.a.createElement("div",{className:"btn-basic"},r.a.createElement("i",{className:"material-icons"},"favorite")),r.a.createElement("div",{className:"btn-basic"},r.a.createElement("i",{className:"material-icons"},"add"),"Collect"))),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"left-area"},r.a.createElement("div",{className:"user-wrap"},r.a.createElement(h,{src:a.user.icon}),r.a.createElement("div",{className:"name"},a.user.name))),r.a.createElement("div",{className:"right-area"},r.a.createElement("div",{className:"btn-basic"},r.a.createElement("i",{className:"material-icons"},"arrow_downward"))))))},E=a(14),v=Object(E.b)({basename:"/copy-unsplash"}),b=function(e){v.push(e)},C=a(18),N=a.n(C);var O=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.photo,a=void 0===t?{}:t,c=(e.relatedPhotos,e.onClose),s=void 0===c?function(){}:c;function o(e){13!==e.keyCode&&27!==e.keyCode||s()}return e.dispatch,Object(n.useEffect)((function(){return window.addEventListener("keyup",o),function(){window.removeEventListener("keyup",o)}}),[]),r.a.createElement("div",{className:"PhotoDetail",onKeyUp:function(e){13===e.keyCode&&s()}},r.a.createElement("div",{className:"bg-wrap"},r.a.createElement("div",{className:"btn-close",onClick:function(){return s()}},r.a.createElement("i",{className:"material-icons"},"cancel")),r.a.createElement("div",{className:"photo-wrap"},r.a.createElement("div",{className:"photo-upper clearfix"},r.a.createElement("div",{className:"left-area"},r.a.createElement(h,{src:a.user.icon}),r.a.createElement("div",{className:"info-wrap"},r.a.createElement("div",{className:"user-name",onClick:function(){return b("/@".concat(a.user.username))}},a.user.username),r.a.createElement("div",{className:"user-id"},"@",a.user.id))),r.a.createElement("div",{className:"right-area"},r.a.createElement("div",{className:N()("btn-basic",{"like-active":!1})},r.a.createElement("i",{className:"material-icons"},"favorite")),r.a.createElement("div",{className:"btn-basic"},r.a.createElement("i",{className:"material-icons"},"add"),"Collect"),r.a.createElement("div",{className:"btn-basic long"},"Download"))),r.a.createElement("div",{className:"main-photo"},r.a.createElement("img",{src:a.urls.regular,alt:""})),r.a.createElement("div",{className:"photo-bottom clearfix"},r.a.createElement("div",{className:"left-area"},r.a.createElement("i",{className:"material-icons"},"pets"),r.a.createElement("span",{className:"loc"},a.user.location)),r.a.createElement("div",{className:"right-area"},r.a.createElement("div",{className:"btn-basic"},r.a.createElement("i",{className:"material-icons"},"share")," Share"),r.a.createElement("div",{className:"btn-basic"},r.a.createElement("i",{className:"material-icons"},"info")," Info")))),r.a.createElement("div",{className:"related-photos-wrap"})))})),g=a(19),y=a(20);function x(){var e=Object(g.a)(["\nposition: absolute;\n  z-index: 15000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  img{\n    display: flex;\n    height: 140px;\n  }\n    ","\n"]);return x=function(){return e},e}var T=y.a.div(x(),(function(e){return e.toggle?"\n          display: flex;\n      ":"\n          display: none;\n\n      "}));var S=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.isLoading;return r.a.createElement(T,{toggle:t},r.a.createElement("img",{src:"https://flevix.com/wp-content/uploads/2019/07/Ring-Loading.gif",alt:""}))}));function k(e){var t=e.dispatch,a=e.group;return r.a.createElement("div",{className:"photo-col"},d.map(a,(function(e,a){return r.a.createElement(f,{key:a,photo:e,showDetail:function(){return t(m.Creators.updateState({opacityScreen:!0,selectedPhoto:e}))}})})))}var w=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.isLoading,n=e.selectedPhoto,c=e.photos,s=void 0===c?[]:c,o=[[],[],[]];return d.map(s,(function(e,t){t%3===0?o[0].push(e):t%3===1?o[1].push(e):t%3===2&&o[2].push(e)})),r.a.createElement("div",{className:"Photos",style:{position:"relative"}},r.a.createElement(S,{isLoading:a}),d.map(o,(function(e,a){return r.a.createElement(k,{key:a,group:e,dispatch:t})})),d.keys(n).length>0&&r.a.createElement(O,{photo:n,onClose:function(){t(m.Creators.updateState({opacityScreen:!1,selectedPhoto:{}}))}}))})),_=a(25),P=a(7),j=a.n(P),H=a(50),L=a(51),R="get",F="post",I="put",U="delete",A="application/json",D="public read_photos write_photos write_likes write_collections",J=function(e,t){return{ok:e,data:t}},z=a.n(L).a.create({baseURL:"https://api.unsplash.com/",timeout:12e3,headers:{Accept:A,"Content-Type":A,Authorization:"Client-ID 2ccbe25b22646226acd40ad7bd94d104fdade080b74c50c2d1e05448dfd348c4",scope:D}}),M=function(){var e=Object(H.a)(j.a.mark((function e(t,a){var n,r,c,s=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:{},e.prev=1,r={method:t,url:a,data:n},t===R?r.params=n:r.data=n,e.next=6,z(r);case 6:return c=e.sent,console.log("@@ axiosInstance",z),console.log("@@ axiosConfig",r),e.t0=console,e.next=12,z(r);case 12:return e.t1=e.sent,e.t0.log.call(e.t0,"@@ await axiosInstance(axiosConfig)",e.t1),e.abrupt("return",J(!0,c.data));case 17:if(e.prev=17,e.t2=e.catch(1),!e.t2.response){e.next=33;break}if(console.log("@@ [failed api] method:".concat(e.t2.response.config.method,", url: ").concat(e.t2.response.config.url,", data:").concat(e.t2.response.config.data,", message:").concat(e.t2.response.data.message)),400!==e.t2.response.status){e.next=25;break}return e.abrupt("return",J(!1,e.t2.response.data));case 25:if(403!==e.t2.response.status){e.next=30;break}return console.log("\ub85c\uadf8\uc778 \ub9cc\ub8cc\ub428. \ub85c\uadf8\uc778\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),e.abrupt("return",J(!1,e.t2.response.data));case 30:return e.abrupt("return",J(!1,e.t2.response.data));case 31:e.next=35;break;case 33:console.log("failed api: ",a,", reason: ",e.t2),J(!1,"\uc798\ubabb\ub41c \uc694\uccad\uc785\ub2c8\ub2e4.");case 35:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,a){return e.apply(this,arguments)}}(),B={fetchJsonGet:function(e,t){return M(R,e,t)},fetchJsonPost:function(e,t){return M(F,e,t)},fetchJsonUpdate:function(e,t){return M(I,e,t)},fetchJsonDelete:function(e,t){return M(U,e,t)}};var G=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.placeholder,a=void 0===t?"Search free high-resolution photos":t,c=e.keyword,s=e.dispatch,o=Object(n.useState)(""),l=Object(_.a)(o,2),i=l[0],u=l[1];return Object(n.useEffect)((function(){u(c)}),[c]),r.a.createElement("div",{className:"SearchBar"},r.a.createElement("i",{className:"material-icons",onClick:function(){b("/search/photos/".concat(i)),s(m.Creators.updateState({keyword:i}))}},"search"),r.a.createElement("input",{type:"text",placeholder:a,value:i,onChange:function(e){u(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(b("/search/photos/".concat(i)),s(m.Creators.updateState({keyword:i})))}}))}));var q=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.recentPhotos;return Object(n.useEffect)((function(){t(m.Creators.fetchPhotos())}),[]),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"main-visual"},r.a.createElement("div",{className:"main-txt"},r.a.createElement("p",{className:"t1"},"Unsplash"),r.a.createElement("p",{className:"t2"},"The internet\u2019s source of freely usable images."),r.a.createElement("p",{className:"t2"},"Powered by creators everywhere."),r.a.createElement(G,null),r.a.createElement("p",{className:"sub"},r.a.createElement("span",{className:"bold"},"Trending: "),"flower, wallpapers, backgrounds, happy, love")),r.a.createElement("div",{className:"bottom-txt"},r.a.createElement("div",null,"Photo of the Day ",r.a.createElement("span",null,"by"),"Martin Schmidli"),r.a.createElement("div",null,r.a.createElement("span",null,"Read more about the"),"Unsplash License"),r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn4.buysellads.net/uu/7/41629/1545953812-1543526594-transparent_squarespace.png",alt:""}),r.a.createElement("p",null,"Create your website today")))),r.a.createElement("div",{className:"container"},r.a.createElement(w,{photos:a})))})),V=function(e){return e.toLowerCase().split(" ").join("-").split("(").join("").split(")").join("")},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t=Math.pow(10,t);for(var a=["k","m","b","t"],n=a.length-1;n>=0;n--){var r=Math.pow(10,3*(n+1));if(r<=e){1e3==(e=Math.round(e*t/r)/t)&&n<a.length-1&&(e=1,n++),e+=a[n];break}}return e};var K=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){return e.dispatch,r.a.createElement("div",{className:"HeaderCategory"},r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"link",onClick:function(){b("/random")}},r.a.createElement("div",{className:"txt"},"random")),p.a.map([{title:"wallpapers",id:"1065976"},{title:"business & work",id:"3348877"},{title:"nature",id:"3330448"},{title:"people",id:"3356568"},{title:"unsplash editorial",id:"317099"},{title:"health",id:"3356594"},{title:"textures & patterns",id:"3330445"},{title:"nature",id:"3330448"},{title:"people",id:"3356568"},{title:"unsplash editorial",id:"317099"},{title:"health",id:"3356594"},{title:"textures & patterns",id:"3330445"},{title:"nature",id:"3330448"},{title:"people",id:"3356568"},{title:"unsplash editorial",id:"317099"}],(function(e,t){return r.a.createElement("div",{className:"link",key:t,onClick:function(){b("/collections/".concat(e.id,"/").concat(V(e.title),"/bCate"))}},r.a.createElement("div",{className:"txt"},e.title))}))))})),Q=a(12);var Z=function(e){var t=e.children,a=e.items,n=void 0===a?[{link:"",txt:""}]:a,c=e.isOpen,s=void 0!==c&&c,o=e.isRightSide,l=void 0!==o&&o;return r.a.createElement("div",{className:N()("PopupMenu",{"open-active":s,"right-side":l})},p.a.map(n,(function(e,t){return r.a.createElement(Q.a,{to:e.link,className:"item",key:t},e.txt)})),t)},X=a(27);var $=Object(l.g)((function(e){var t=e.currentPath,a=Object(n.useState)(!1),c=Object(_.a)(a,2),s=c[0],o=c[1];function l(e){document.getElementsByClassName("PopupMenu")&&("more_horiz"===e.target.innerHTML&&0!=e.target.className.indexOf("PopupMenu")||o(!1))}return Object(n.useEffect)((function(){return window.addEventListener("click",l),function(){window.removeEventListener("click",l)}}),[]),r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"upper"},r.a.createElement("div",{className:" logo"},r.a.createElement("svg",{className:"_2m4hn",onClick:function(){return b("/")},version:"1.1",viewBox:"0 0 32 32",width:"32",height:"32","aria-labelledby":"unsplash-home","aria-hidden":"false"},r.a.createElement("title",{id:"unsplash-home"},"Unsplash Home"),r.a.createElement("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"})),r.a.createElement("div",{className:"txt-wrap"},r.a.createElement("div",{className:"top"},"Unsplash"),r.a.createElement("div",{className:"bottom"},"Photos for everyone"))),r.a.createElement("div",{className:"search-wrap"},r.a.createElement(G,null)),r.a.createElement("div",{className:"tools"},r.a.createElement("div",{className:"links"},r.a.createElement(Q.a,{to:"/",className:"link"},r.a.createElement("div",{className:"txt"},"Home")),r.a.createElement(Q.a,{to:"/collections",className:"link"},r.a.createElement("div",{className:"txt"},"Collections")),r.a.createElement("div",{className:"link",style:{position:"relative"},onClick:function(){return o(!s)}},r.a.createElement("div",{className:"txt"},r.a.createElement("i",{className:"material-icons"},"more_horiz")),r.a.createElement(Z,{items:[{link:"/",txt:"Blog"},{link:"/",txt:"Community"},{link:"/",txt:"History"},{link:"/",txt:"Made with Unsplash"},{link:"/",txt:"API/Developers"},{link:"/",txt:"Press"},{link:"/",txt:"Join the team"},{link:"/",txt:"License"},{link:"/",txt:"Help"}],isOpen:s},r.a.createElement("div",{className:"col-wrap"},r.a.createElement(Q.a,{to:"/",className:"item"},r.a.createElement(X.d,null)),r.a.createElement(Q.a,{to:"/",className:"item"},r.a.createElement(X.a,null)),r.a.createElement(Q.a,{to:"/",className:"item"},r.a.createElement(X.b,null)),r.a.createElement(Q.a,{to:"/",className:"item"},r.a.createElement(X.c,null))))),r.a.createElement(Q.a,{to:"/submit",className:"link btn-type"},r.a.createElement("div",{className:"txt"},"Submit a photo")),r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"link",onClick:function(){alert("Not prepared yet!")}},r.a.createElement("div",{className:"txt"},"Login")),r.a.createElement("div",{className:"link green",onClick:function(){alert("Not prepared yet!")}},r.a.createElement("div",{className:"txt"},"Join free"))))),("/"===t||t.indexOf("bCate")>0)&&r.a.createElement(K,null))})),W=a(21);function ee(){var e=Object(g.a)(["\nposition: fixed;\nz-index: 30000;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nbackground-color: #fff;\nbackground-position: 50% 50%;\n-webkit-background-size: cover;\nbackground-size: cover;\nbackground-repeat: no-repeat;\nbackground-image: url(https://images.unsplash.com/gifs/weird/weird-14.gif);\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n&:before{\ncontent: '';\nposition: absolute;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nbackground: rgba(0,0,0,.4);\n}\n\n.inner-wrap{\nposition: relative;\nz-index: 2;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n}\nsvg{\nmargin-bottom: 20px;\ncursor: pointer;\n}\n.txt{\nfont-size: 18px;\ncolor: rgba(255,255,255,.8);\n}\n.btn-home{\nmargin-top: 15px;\npadding: 6px 10px;\n-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;\nbackground: rgba(255,255,255,.8);\nfont-size: 15px;\nfont-weight: 400;\ncolor: rgba(0,0,0,.6);\n}\n"]);return ee=function(){return e},e}var te=y.a.div(ee());var ae=function(e){return Object(W.a)(e),r.a.createElement(te,{className:"NotFound"},r.a.createElement("div",{className:"inner-wrap"},r.a.createElement("svg",{className:"_2m4hn",onClick:function(){return b("/")},version:"1.1",viewBox:"0 0 32 32",width:"32",height:"32","aria-labelledby":"unsplash-home","aria-hidden":"false"},r.a.createElement("title",{id:"unsplash-home"},"Unsplash Home"),r.a.createElement("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"})),r.a.createElement("div",{className:"txt"},"Hm, the page you were looking for doesn't seem to exist anymore."),r.a.createElement("div",{className:"btn-home",onClick:function(){return b("/")}},"Back to Unsplash")))};var ne=function(e){e.img;var t=e.msg,a=void 0===t?"\uacb0\uacfc \uc5c6\uc2b5\ub2c8\ub2e4.":t;return r.a.createElement("div",{className:"NoData"},r.a.createElement("i",{className:"material-icons"},"directions_run"),r.a.createElement("div",{className:"msg"},a))};var re=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.items,n=void 0===a?[]:a;return r.a.createElement("div",{className:"TagList"},p.a.map(n,(function(e,a){return r.a.createElement("div",{className:"item",key:a,onClick:function(){return t(m.Creators.fetchSearchPhotos(e.title))}},e.title)})))}));var ce=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.collection;return r.a.createElement("div",{className:"Collection",onClick:function(){b("/collections/".concat(t.id,"/").concat(V(t.title)))}},r.a.createElement("div",{className:"thumbs-wrap"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"thumb",style:{backgroundImage:"url(".concat(t.preview_photos[0].urls.small,")")}})),r.a.createElement("div",{className:"col2"},r.a.createElement("div",{className:"thumb",style:{backgroundImage:"url(".concat(t.preview_photos[1].urls.small,")")}}),r.a.createElement("div",{className:"thumb",style:{backgroundImage:"url(".concat(t.preview_photos[2].urls.small,")")}}))),r.a.createElement("div",{className:"desc-wrap"},r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"summary"},t.total_photos," photos \xb7 Curated by ",r.a.createElement(Q.a,{to:t.user.links.html},t.user.name)),r.a.createElement(re,{items:t.tags})))})),se=a(52);var oe=function(e){var t=e.user;return r.a.createElement("div",{className:"UserCard"},r.a.createElement("div",{className:"inner-wrap"},r.a.createElement("div",{className:"info-wrap"},r.a.createElement("div",{className:"thumb",style:{backgroundImage:t.profile_image}}),r.a.createElement("div",{className:"desc"},r.a.createElement("p",{className:"bold"},t.name),r.a.createElement("p",{className:"id"},"@",t.id))),r.a.createElement("div",{className:"btn-follow",onClick:function(){return alert("Not prepared yet")}},r.a.createElement(se.a,null)," Follow")))};var le=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))(Object(l.g)((function(e){var t=e.dispatch,a=(e.isLoading,e.searchResult),c="photos",s="collections",o="users",l=Object(n.useState)(e.match.params.type),i=Object(_.a)(l,2),u=i[0],d=i[1],h=e.match.params.keyword;return Object(n.useEffect)((function(){t(m.Creators.fetchSearch(h))}),[h]),Object(n.useEffect)((function(){d("photos")}),["photos"]),!!a&&r.a.createElement("div",{className:"Tab SearchTab"},r.a.createElement("div",{className:"head-wrap"},r.a.createElement("div",{className:N()("head",{"is-active":u===c}),onClick:function(){d(c),b("/search/".concat(c,"/").concat(h))}},r.a.createElement("div",{className:"txt"},r.a.createElement("i",{className:"material-icons"},"insert_photo"),"Photos ",Y(a.photos.total))),r.a.createElement("div",{className:N()("head",{"is-active":u===s}),onClick:function(){d(s),b("/search/".concat(s,"/").concat(h))}},r.a.createElement("div",{className:"txt"},r.a.createElement("i",{className:"material-icons"},"layers"),"Collections ",Y(a.collections.total))),r.a.createElement("div",{className:N()("head",{"is-active":u===o}),onClick:function(){d(o),b("/search/".concat(o,"/").concat(h))}},r.a.createElement("div",{className:"txt"},r.a.createElement("i",{className:"material-icons"},"group"),"Users ",Y(a.users.total)))),r.a.createElement("div",{className:"cont-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},h),r.a.createElement("div",{className:"related-keywords-wrap"},r.a.createElement("div",{className:"related-keywords"},p.a.map(a.related_searches,(function(e,t){return r.a.createElement("div",{className:"item",key:t,onClick:function(){b("/search/".concat(c,"/").concat(e.title))}},r.a.createElement("div",{className:"txt"},e.title))})))),u===c&&r.a.createElement(w,{photos:a.photos.results}),u===s&&r.a.createElement("div",{className:"collection-wrap"},p.a.map(a.collections.results,(function(e,t){return r.a.createElement(ce,{key:t,collection:e})}))),u===o&&r.a.createElement("div",{className:"user-wrap"},p.a.map(a.users.results,(function(e,t){return r.a.createElement(oe,{key:t,user:e})}))),0===a.photos.total&&r.a.createElement(ne,{msg:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}))))})));var ie=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){return Object(W.a)(e),r.a.createElement("div",{className:"Search"},r.a.createElement(le,null))}));var ue=function(e){var t=e.title,a=void 0===t?"":t,n=e.msg,c=void 0===n?"":n,s=e.link,o=void 0===s?"":s,l=e.linkTxt,i=void 0===l?"":l,u=e.children;return r.a.createElement("div",{className:"PageTitle"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"msg"},c,o.length>0&&r.a.createElement("a",{href:o},i)),u))};var me=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.isLoading,c=e.collections;return Object(n.useEffect)((function(){t(m.Creators.fetchCollections())}),[]),r.a.createElement("div",{className:"Collections"},r.a.createElement(ue,{title:"Collections",msg:"Explore the world through collections of beautiful photos free to use under the ",link:"/",linkTxt:"Unsplash License"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collection-wrap",style:{position:"relative"}},r.a.createElement(S,{isLoading:a}),p.a.map(c,(function(e,t){return r.a.createElement(ce,{key:t,collection:e})})))))}));var de=function(e){return Object(W.a)(e),r.a.createElement("div",{className:"Footer"},r.a.createElement("svg",{className:"_2m4hn",onClick:function(){return b("/")},version:"1.1",viewBox:"0 0 32 32",width:"32",height:"32","aria-labelledby":"unsplash-home","aria-hidden":"false"},r.a.createElement("title",{id:"unsplash-home"},"Unsplash Home"),r.a.createElement("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"})),r.a.createElement("p",null,"Make something awesome"))};var pe=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.randomPhotos;return Object(n.useEffect)((function(){t(m.Creators.fetchRandomPhotos())}),[]),r.a.createElement("div",{className:"RandomPhotos"},r.a.createElement(ue,{title:"Random Photos",msg:"Photos spreaded among Unsplash data"}),r.a.createElement("div",{className:"container"},r.a.createElement(w,{photos:a})))}));var he=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.collectionById,c=e.collectionPhotos,s=e.match.params.id;return Object(n.useEffect)((function(){t(m.Creators.fetchCollectionById(s)),t(m.Creators.fetchCollectionPhotos(s))}),[s]),!!a&&r.a.createElement("div",{className:"CollectionPhotos"},r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"bg",style:{backgroundImage:"url(".concat(a.cover_photo.urls.small,")")}}),r.a.createElement(ue,{title:a.title,msg:a.description},r.a.createElement("div",{className:"user-wrap"},r.a.createElement(h,{src:a.user.profile_image.small,name:a.user.username}),r.a.createElement("div",{className:"btn-basic btn-type btn-share",onClick:function(){t(m.Creators.updateState({showSharePopup:!0,opacityScreen:!0}))}},r.a.createElement("i",{className:"material-icons"},"reply")," Share")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"count-info"},a.total_photos," photos"),r.a.createElement(w,{photos:c})))}));var fe=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))((function(e){var t=e.dispatch,a=e.collectionById;return r.a.createElement("div",{className:"PopupShare"},r.a.createElement("div",{className:"btn-close",onClick:function(e){e.stopPropagation(),t(m.Creators.updateState({showSharePopup:!1,opacityScreen:!1}))}},r.a.createElement("i",{className:"material-icons"},"cancel")),r.a.createElement("div",{className:"title"},"Share"),r.a.createElement("div",{className:"sub"},"CollectionPhotos by ",a.user.username),r.a.createElement("div",{className:"link-wrap text-ellipsis"},a.links.html,r.a.createElement("div",{className:"btn-basic"},"Copy link")))}));function Ee(){var e=Object(g.a)(["\n  position: fixed;\n  z-index: 20000;\n  bottom: 70px;\n  left: 50%;\n  -webkit-transform: translate(-50%,0);\n  -moz-transform: translate(-50%,0);\n  -ms-transform: translate(-50%,0);\n  -o-transform: translate(-50%,0);\n  transform: translate(-50%,0);\n  padding: 11px 30px;\n  -webkit-border-radius: 25px;\n  -moz-border-radius: 25px;\n  border-radius: 25px;\n  background: #17a8f1;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  //color: $white;\n"]);return Ee=function(){return e},e}var ve=y.a.div(Ee());var be=function(e){var t=e.message;return r.a.createElement(ve,null,t)};function Ce(){var e=Object(g.a)(["\n    position: fixed;\n  z-index: 15001;\n    //position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.4);\n"]);return Ce=function(){return e},e}var Ne=y.a.div(Ce());var Oe=function(e){return Object(W.a)(e),r.a.createElement(Ne,null)};var ge=Object(i.b)((function(e){return Object(o.a)({},e)}),(function(e){return{dispatch:e}}))(Object(l.g)((function(e){var t=e.dispatch,a=e.toastMessage,c=e.opacityScreen,s=e.showSharePopup,o=e.location;return Object(n.useEffect)((function(){t(m.Creators.updateState({currentPath:o.pathname,showSharePopup:!1})),o.pathname.indexOf("search")<0&&(console.log("location.pathname.indexOf('search')",o.pathname.indexOf("search")),t(m.Creators.updateState({keyword:"",opacityScreen:!1,selectedPhoto:{}})))}),[o.pathname]),r.a.createElement("div",{className:"App"},r.a.createElement($,{currentPath:o.pathname}),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:q}),r.a.createElement(l.b,{path:"/random",component:pe}),r.a.createElement(l.b,{path:"/collections/:id/:title/",component:he}),r.a.createElement(l.b,{path:"/collections",component:me}),r.a.createElement(l.b,{path:"/search/:type/:keyword",component:ie}),r.a.createElement(l.b,{path:"/404",component:ae}),r.a.createElement(l.a,{to:"/404"})),r.a.createElement(de,null),s&&r.a.createElement(fe,null),c&&r.a.createElement(Oe,null),a&&r.a.createElement(be,{message:a}))}))),ye=(a(84),a(24)),xe={isLoading:!1,toastMessage:"",opacityScreen:!1,showSharePopup:null,recentPhotos:[],selectedPhoto:null,randomPhotos:[],relatedPhotos:[],keyword:null,searchResult:null,searchPhotos:[],searchCollections:[],searchUsers:[],collections:null,collectionById:null,collectionPhotos:[],userProfile:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case m.Types.UPDATE_STATE:return Object(o.a)(Object(o.a)({},e),t.payload)}},Se=a(53),ke=a(4),we={fetchPhotos:function(){return B.fetchJsonGet("/photos")},fetchRandomPhotos:function(){return B.fetchJsonGet("/photos/random/?count=30")},fetchRelatedPhotos:function(e){return B.fetchJsonGet("/search/photos?=page=1&query=".concat(e))},fetchSearch:function(e){return B.fetchJsonGet("/search?page=1&query=".concat(e))},fetchSearchPhotos:function(e){return B.fetchJsonGet("/search/photos?page=1&query=".concat(e))},fetchSearchCollections:function(e){return B.fetchJsonGet("/search/collections?page=1&query=".concat(e))},fetchSearchUsers:function(e){return B.fetchJsonGet("/search/users?page=1&query=".concat(e))},fetchCollections:function(){return B.fetchJsonGet("/collections")},fetchCollectionById:function(e){return B.fetchJsonGet("/collections/".concat(e))},fetchCollectionPhotos:function(e){return B.fetchJsonGet("/collections/".concat(e,"/photos"))},fetchUserProfile:function(e){return B.fetchJsonGet("/users/".concat(e))},fetchUserPortfolioLink:function(e){return B.fetchJsonGet("/users/".concat(e,"/portfolio"))},fetchUserPhotos:function(e){return B.fetchJsonGet("/users/".concat(e,"/photos"))},fetchUserStatistics:function(e){return B.fetchJsonGet("/photos/".concat(e,"/statistics"))}},_e=j.a.mark(Pe);function Pe(){var e,t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.c)(m.Creators.updateState({isLoading:t}));case 2:case"end":return e.stop()}}),e)})),t=j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.c)(m.Creators.updateState({toastMessage:t}));case 2:return e.next=4,Object(ke.d)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.b)(a);case 2:return e.next=4,Object(ke.c)(m.Creators.updateState({toastMessage:""}));case 4:case"end":return e.stop()}}),e)})));case 4:case"end":return e.stop()}}),e)})),a.next=4,Object(ke.e)(m.Types.FETCH_PHOTOS,j.a.mark((function a(){var n;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(!0);case 2:return a.next=4,Object(ke.a)(we.fetchPhotos);case 4:return n=a.sent,console.log("[saga] [fetchPhotos]",n),a.next=8,Object(ke.c)(m.Creators.updateState({recentPhotos:n.data}));case 8:return a.next=10,e(!1);case 10:return a.next=12,t("\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",2e3);case 12:case"end":return a.stop()}}),a)})));case 4:return a.next=6,Object(ke.e)(m.Types.FETCH_RANDOM_PHOTOS,j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchRandomPhotos);case 4:return a=t.sent,console.log("[saga] [fetchRandomPhotos]",a.data),t.next=8,Object(ke.c)(m.Creators.updateState({randomPhotos:a.data}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 6:return a.next=8,Object(ke.e)(m.Types.FETCH_RELATED_PHOTOS,j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchRelatedPhotos,a.payload);case 4:return n=t.sent,console.log("[saga] [fetchRelatedPhotos]",n.data.results),t.next=8,Object(ke.c)(m.Creators.updateState({relatedPhotos:n.data.results,keyword:a.payload}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 8:return a.next=10,Object(ke.e)(m.Types.FETCH_SEARCH,j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchSearch,a.payload);case 4:return n=t.sent,console.log("[saga] [fetchSearch]",n.data),t.next=8,Object(ke.c)(m.Creators.updateState({searchResult:n.data,keyword:a.payload}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 10:return a.next=12,Object(ke.e)(m.Types.FETCH_SEARCH_PHOTOS,j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchSearchPhotos,a.payload);case 4:return n=t.sent,console.log("[saga] [fetchSearchPhotos]",n.data),t.next=8,Object(ke.c)(m.Creators.updateState({searchPhotos:n.data,keyword:a.payload}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 12:return a.next=14,Object(ke.e)(m.Types.FETCH_SEARCH_COLLECTIONS,j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchSearchCollections,a.payload);case 4:return n=t.sent,console.log("[saga] [fetchSearchCollections]",n.data),t.next=8,Object(ke.c)(m.Creators.updateState({searchCollections:n.data,keyword:a.payload}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 14:return a.next=16,Object(ke.e)(m.Types.FETCH_SEARCH_USERS,j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchSearchUsers,a.payload);case 4:return n=t.sent,console.log("[saga] [fetchSearchUsers]",n.data),t.next=8,Object(ke.c)(m.Creators.updateState({searchUsers:n.data,keyword:a.payload}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 16:return a.next=18,Object(ke.e)(m.Types.FETCH_COLLECTIONS,j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchCollections);case 4:return a=t.sent,console.log("[saga] [fetchCollections]",a.data),t.next=8,Object(ke.c)(m.Creators.updateState({collections:a.data}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 18:return a.next=20,Object(ke.e)(m.Types.FETCH_COLLECTION_BY_ID,j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.a)(we.fetchCollectionById,t.payload);case 2:return a=e.sent,console.log("[saga] [fetchCollectionById]",a.data),e.next=6,Object(ke.c)(m.Creators.updateState({collectionById:a.data}));case 6:case"end":return e.stop()}}),e)})));case 20:return a.next=22,Object(ke.e)(m.Types.FETCH_COLLECTION_PHOTOS,j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchCollectionPhotos,a.payload);case 4:return n=t.sent,console.log("[saga] [fetchCollectionPhotos]",n.data),t.next=8,Object(ke.c)(m.Creators.updateState({collectionPhotos:n.data}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 22:return a.next=24,Object(ke.e)(m.Types.FETCH_USER_PROFILE,j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(!0);case 2:return t.next=4,Object(ke.a)(we.fetchUserProfile);case 4:return a=t.sent,console.log("[saga] [fetchUserProfile]",a.data),t.next=8,Object(ke.c)(m.Creators.updateState({userProfile:a.data}));case 8:return t.next=10,e(!1);case 10:case"end":return t.stop()}}),t)})));case 24:case"end":return a.stop()}}),_e)}var je=Object(Se.a)(),He=Object(ye.d)(Te,Object(ye.a)(je));je.run(Pe);var Le=He;s.a.render(r.a.createElement(i.a,{store:Le},r.a.createElement(l.c,{history:v},r.a.createElement(ge,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.3c7b6f85.chunk.js.map