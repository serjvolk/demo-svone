(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m}));var r=n(10),c=n.n(r),s=n(20),a=n(45),i=n(5),o=n(14),u="ADD-POST",l="SET_USER_PROFILE",j="SET_STATUS",d="DELETE_POST",b={posts:[{id:0,msg:"\u0423\u0442\u0440\u043e\u043c \u044f \u043f\u043e\u0431\u0435\u0433\u0430\u043b\u0430 \u0441 \u043e\u0440\u0435\u0445\u043e\u043c..."},{id:1,msg:"\u0412\u0435\u0447\u0435\u0440\u043e\u043c \u043f\u043e\u0431\u0435\u0433\u0430\u043b\u0430 \u0441 \u043e\u0440\u0435\u0445\u043e\u043c..."},{id:2,msg:"\u041d\u043e\u0447\u044c\u044e \u0441\u043f\u043b\u044e \u0441 \u043e\u0440\u0435\u0445\u043e\u043c..."},{id:3,msg:"\u0421\u043d\u0438\u0442\u044c\u0441\u044f \u043c\u043d\u0435 \u043e\u0440\u0435\u0445"}],profile:null,newPostTextVal:"",status:""},g=function(e){return{type:u,newPostText:e}},f=function(e){return{type:j,status:e}},h=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((c=r.data,{type:l,profile:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,msg:t.newPostText};return Object(i.a)(Object(i.a)({},e),{},{newPostTextVal:"",posts:[].concat(Object(a.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(45),c=n(5),s="SEND-MESSAGE",a={dialogs:[{id:1,name:"\u041c\u0438\u0445\u0430\u0438\u043b"},{id:2,name:"\u041e\u043b\u0435\u0433"},{id:3,name:"\u041a\u043e\u043b\u044f"},{id:4,name:"\u041e\u043b\u044f"},{id:5,name:"\u041d\u0430\u0442\u0430\u0448\u0430"},{id:6,name:"\u0416\u043e\u0440\u0438\u043a"}],messages:[{id:1,msg:"\u041f\u0440\u0438\u0432\u0435\u0442 \u044f \u041c\u0438\u0445\u0430\u0438\u043b\u043a\u043e, \u043a\u0430\u043a \u0443 \u0442\u0435\u0431\u044f \u0434\u0435\u043b\u0430???",typeMessage:!0},{id:2,msg:"\u0412\u0441\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u044f \u0443\u0447\u0443 ReactJS",typeMessage:!1},{id:3,msg:"\u0418 \u043c\u043d\u043e\u0433\u043e \u0443\u0436\u0435 \u0432\u044b\u0443\u0447\u0438\u043b???",typeMessage:!0},{id:4,msg:"23 \u0443\u0440\u043e\u043a\u0430",typeMessage:!1}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:5,msg:t.newMessageBody,typeMessage:!1};return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},136:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__219hO"}},137:function(e,t,n){e.exports={preloader:"Preloader_preloader__1rtP_"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(134),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9bc59add-c579-472c-a6ae-ed1a5901fb82"}}),s={getUsers:function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollow:function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.log("Obsolete method. Please use profileAPI method"),a.getProfile(e)}},a={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status/",{status:e})}},i={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return c.delete("auth/login")}}},15:function(e,t,n){e.exports={nav:"Nav_nav__3v3-e",list:"Nav_list__2nTjS",item:"Nav_item__1AaoP",activeLink:"Nav_activeLink__2WWaQ"}},170:function(e,t,n){},171:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(66),a=n.n(s),i=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,299)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},o=(n(170),n(36)),u=n(37),l=n(39),j=n(38),d=(n(171),n(11)),b=n(18),g=n(34),f=n.n(g),h=n(0);var p=function(){return Object(h.jsx)("div",{className:f.a.technologies,children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"technologiesBody",children:[Object(h.jsx)("h1",{className:"title",children:"ReactJS"}),Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsx)("li",{className:f.a.item,children:'\u0417\u043d\u0430\u044e \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 "\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"'}),Object(h.jsxs)("li",{className:f.a.item,children:["\u0423\u043c\u0435\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",Object(h.jsx)("span",{children:"import"})," \u0438 ",Object(h.jsx)("span",{children:"export"})]}),Object(h.jsx)("li",{className:f.a.item,children:"\u0417\u043d\u0430\u044e \u043a\u0430\u043a \u043f\u043e \u043d\u043e\u0432\u043e\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u044b"}),Object(h.jsx)("li",{className:f.a.item,children:"\u0417\u043d\u0430\u044e \u043a\u0430\u043a \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f SPA"}),Object(h.jsx)("li",{className:f.a.item,children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 props \u0434\u043b\u044f \u043c\u0435\u043d\u044f \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"})]})]})})})},m=n(71),O=n.n(m),A=n(72),x=n.n(A);var v=function(e){return Object(h.jsxs)("div",{className:x.a.comment,children:[Object(h.jsxs)("div",{className:x.a.person,children:[Object(h.jsx)("img",{src:e.src,alt:""}),Object(h.jsx)("p",{children:e.name})]}),Object(h.jsx)("p",{className:x.a.message,children:e.message})]})};var C=function(){return Object(h.jsx)("div",{className:O.a.comments,children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:O.a.body,children:[Object(h.jsx)("h1",{children:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0447\u0435\u043b\u0438\u043a\u043e\u0432"}),Object(h.jsxs)("div",{className:O.a.list,children:[Object(h.jsx)(v,{name:"\u0421\u043a\u0430\u0440\u043b\u0435\u0442\u0442 \u0419\u043e\u0445\u0430\u043d\u0441\u0441\u043e\u043d",message:"\u041a\u0430\u043a \u0442\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0447\u0442\u043e \u044f \u0442\u0443\u0442...",src:"https://fs.kinomania.ru/file/person/1/95/195688ae35f80d6aca00e2fb5cd80b90.jpeg"}),Object(h.jsx)(v,{name:"\u042d\u043d\u043d \u0425\u044d\u0442\u044d\u0443\u044d\u0439",message:"\u041d\u0435 \u0437\u043d\u0430\u044e \u0447\u0442\u043e \u0438 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u044d\u0442\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u043e",src:"https://kino-teatr.ua/public/main/persons/2020-10/x4_photo_5f928aeee68a9.jpg"}),Object(h.jsx)(v,{name:"\u041c\u0430\u0440\u0433\u043e \u0420\u043e\u0431\u0431\u0438",message:"\u041e\u0447\u0435\u043d\u044c \u043a\u0440\u0443\u0442\u043e\u0439 \u043a\u0443\u0440\u0441",src:"https://www.film.ru/sites/default/files/styles/epsa_260x320/public/people/0_996.jpg"})]})]})})})},w=n(15),I=n.n(w);var y=function(){return Object(h.jsx)("nav",{className:I.a.nav,children:Object(h.jsxs)("ul",{className:I.a.list,children:[Object(h.jsx)("li",{className:I.a.item,children:Object(h.jsx)(b.b,{to:"/profile",activeClassName:I.a.activeLink,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(h.jsx)("li",{className:I.a.item,children:Object(h.jsx)(b.b,{to:"/users",activeClassName:I.a.activeLink,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(h.jsx)("li",{className:I.a.item,children:Object(h.jsx)(b.b,{to:"/dialogs",activeClassName:I.a.activeLink,children:"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"})}),Object(h.jsx)("li",{className:I.a.item,children:Object(h.jsx)(b.b,{to:"/comments",activeClassName:I.a.activeLink,children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})}),Object(h.jsx)("li",{className:I.a.item,children:Object(h.jsx)(b.b,{to:"/technologies",activeClassName:I.a.activeLink,children:"\u041c\u043e\u0438 \u0437\u043d\u0430\u043d\u0438\u044f"})}),Object(h.jsx)("li",{className:I.a.item,children:Object(h.jsx)("a",{href:"",children:"\u0414\u0440\u0443\u0437\u044c\u044f"})})]})})},N=n(17),S=n(10),P=n.n(S),E=n(20),M=n(45),_=n(5),D=n(14),Q=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),r):e}))},k="FOLLOW",B="UNFOLLOW",G="SET_USERS",Y="SET_CURRENT_PAGE",F="SET_TOTAL_COUNT",U="TOGGLE_IS_FETCHING",L="TOGGLE_IS_FOLLOWING_PROGRESS",R={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:k,userID:e}},Z=function(e){return{type:B,userID:e}},H=function(e){return{type:Y,currentPage:e}},J=function(e){return{type:U,isFetching:e}},z=function(e,t){return{type:L,isFetching:e,userId:t}},K=function(){var e=Object(E.a)(P.a.mark((function e(t,n,r,c){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(c(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(_.a)(Object(_.a)({},e),{},{users:Q(e.users,t.userID,"id",{followed:!0})});case B:return Object(_.a)(Object(_.a)({},e),{},{users:Q(e.users,t.userID,"id",{followed:!1})});case G:return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case Y:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case F:return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.totalCount});case U:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case L:return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(M.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},V=n(56),W=n(69),X=n(132),$=n(57),ee=n.n($),te=n(135),ne=n.n(te),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,a=e.portionSize,i=void 0===a?10:a,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var j=Math.ceil(o/n),d=Object(r.useState)(1),b=Object(X.a)(d,2),g=b[0],f=b[1],p=(g-1)*i+1,m=g*i;return Object(h.jsxs)("div",{className:ee.a.navigation,children:[g>1&&Object(h.jsx)("button",{onClick:function(){f(g-1)},children:"PREV"}),u.filter((function(e){return e>=p&&e<=m})).map((function(e){return Object(h.jsx)("span",{className:ne()(Object(W.a)({},ee.a.selectedPage,c===e&&ee.a.selectedPage),ee.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),j>g&&Object(h.jsx)("button",{onClick:function(){f(g+1)},children:"NEXT"})]})},ce=n(136),se=n.n(ce),ae=n.p+"static/media/no-user.03a0c317.png",ie=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{to:"/profile/"+t.id,children:Object(h.jsx)("img",{src:null!=t.photos.small?t.photos.small:ae,alt:"",className:se.a.userPhoto})})}),Object(h.jsx)("div",{children:t.followed?Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:t.name}),Object(h.jsx)("div",{children:t.status})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:"u.location.country"}),Object(h.jsx)("div",{children:"u.location.city"})]})]})]})},oe=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],ue=function(e){for(var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,c=e.onPageChanged,s=e.users,a=Object(V.a)(e,oe),i=Math.ceil(a.totalUsersCount/a.pageSize),o=[],u=1;u<=i;u++)o.push(u);return Object(h.jsxs)("div",{children:[Object(h.jsx)(re,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:r}),s.map((function(e){return Object(h.jsx)(ie,{user:e,followingInProgress:a.followingInProgress,unfollow:a.unfollow,follow:a.follow},e.id)}))]})},le=n(41),je=n(9),de=n(138),be=Object(de.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ge=function(e){return e.usersPage.pageSize},fe=function(e){return e.usersPage.totalUsersCount},he=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.isFetching},me=function(e){return e.usersPage.followingInProgress},Oe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(le.a,{}):null,Object(h.jsx)(ue,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),Ae=Object(je.d)(Object(N.b)((function(e){return{users:be(e),pageSize:ge(e),totalUsersCount:fe(e),currentPage:he(e),isFetching:pe(e),followingInProgress:me(e)}}),{follow:function(e){return function(){var t=Object(E.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=D.c.follow.bind(D.c),K(n,e,r,T);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=D.c.unfollow.bind(D.c),K(n,e,r,Z);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(E.a)(P.a.mark((function n(r){var c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(H(e)),n.next=4,D.c.getUsers(e,t);case 4:c=n.sent,r(H(e)),r(J(!1)),r((a=c.items,{type:G,users:a})),r((s=c.totalCount,{type:F,totalCount:s}));case 9:case"end":return n.stop()}var s,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Oe),xe=n(96),ve=n.n(xe);var Ce=function(e){return Object(h.jsxs)("div",{className:ve.a.header,children:[Object(h.jsx)("h1",{children:"\u042f \u0431\u0443\u0434\u0443 \u0437\u043d\u0430\u0442\u044c ReactJS"}),e.isAuth?Object(h.jsxs)("h2",{children:[e.login," - ",Object(h.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(h.jsx)(b.b,{to:"/login",className:ve.a.link,children:"Login"})]})},we=n(46),Ie="SET_USER_DATA",ye={userId:null,email:null,login:null,isAuth:!1},Ne=function(e,t,n,r){return{type:Ie,payload:{userId:e,email:t,login:n,isAuth:r}}},Se=function(){return function(){var e=Object(E.a)(P.a.mark((function e(t){var n,r,c,s,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.login,a=r.email,t(Ne(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},Ee=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(Ce,Object(_.a)({},this.props))}}]),n}(c.a.Component),Me=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(E.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.logout();case 2:0===e.sent.data.resultCode&&t(Ne(null,null,null,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ee),_e=n(73),De=n.n(_e),Qe=n(131),ke=n(33),Be=n(90),Ge=Object(Qe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(h.jsxs)("form",{onSubmit:t,className:De.a.form,children:[Object(ke.c)("Email","email",[Be.b],ke.a),Object(ke.c)("Password","password",[Be.b],ke.a,{type:"password"}),Object(ke.c)(null,"rememberMe",[],ke.a,{type:"checkbox"},"Remember me"),n&&Object(h.jsx)("div",{className:De.a.formSummaryError,children:n}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Login"})})]})})),Ye=Object(N.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(E.a)(P.a.mark((function r(c){var s,a;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?c(Se()):(a=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(we.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(h.jsx)(d.a,{to:"/profile"}):Object(h.jsxs)("div",{className:De.a.login,children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(Ge,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Fe="INITIALIZED_SUCCESS",Ue={initialized:!1},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},Re=n(129),Te=n(130),Ze=n(140),He=n(133),Je=Object(je.c)({profilePage:Re.b,dialogsPage:Te.a,usersPage:q,auth:Pe,form:He.a,app:Le}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,Ke=Object(je.e)(Je,ze(Object(je.a)(Ze.a))),qe=function(e){return function(t){return Object(h.jsx)(c.a.Suspense,{fallback:Object(h.jsx)(le.a,{}),children:Object(h.jsx)(e,Object(_.a)({},t))})}},Ve=c.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),We=c.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),Xe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{id:"main",children:[Object(h.jsx)(Me,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"main__page",children:[Object(h.jsx)("div",{className:"main__aside",children:Object(h.jsx)(y,{})}),Object(h.jsxs)("div",{className:"main__content",children:[Object(h.jsx)(d.b,{path:"/profile/:userId?",render:qe(We)}),Object(h.jsx)(d.b,{path:"/dialogs",render:qe(Ve)}),Object(h.jsx)(d.b,{path:"/technologies",render:function(){return Object(h.jsx)(p,{})}}),Object(h.jsx)(d.b,{path:"/comments",render:function(){return Object(h.jsx)(C,{})}}),Object(h.jsx)(d.b,{path:"/users",render:function(){return Object(h.jsx)(Ae,{})}}),Object(h.jsx)(d.b,{path:"/login",render:function(){return Object(h.jsx)(Ye,{})}})]})]})})]}):Object(h.jsx)(le.a,{})}}]),n}(r.Component),$e=Object(je.d)(d.f,Object(N.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Se());Promise.all([t]).then((function(){e({type:Fe})}))}}}))(Xe),et=function(e){return Object(h.jsx)(b.a,{basename:"/demo-svone",children:Object(h.jsx)(N.a,{store:Ke,children:Object(h.jsx)($e,{})})})};a.a.render(Object(h.jsx)(et,{}),document.getElementById("root")),i()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return g}));var r=n(5),c=n(56),s=n(97),a=n.n(s),i=n(93),o=n(0),u=["input","meta","child"],l=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,s=n&&r;return Object(o.jsxs)("div",{className:a.a.formControl+" "+(s?a.a.error:""),children:[Object(o.jsx)("div",{children:c}),s&&Object(o.jsx)("span",{children:r})]})},d=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,u));return Object(o.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,l));return Object(o.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},g=function(e,t,n,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},s)),a]})}},34:function(e,t,n){e.exports={technologies:"Technologies_technologies__10MsZ",item:"Technologies_item__4eXZS"}},41:function(e,t,n){"use strict";var r=n(137),c=n.n(r),s=(n(1),n(0));t.a=function(e){return Object(s.jsx)("div",{className:c.a.preloader,children:Object(s.jsx)("img",{src:"data:image/gif;base64,R0lGODlhSAFIAdU4AN3d3f7+/tvb29zc3Onp6fv7++Tk5GZmZuHh4fj4+Pn5+ePj4/r6+urq6mBgYOjo6Pb29u7u7uLi4l5eXoSEhGRkZOXl5e/v72VlZV9fX5mZmZiYmJqamv39/V1dXXh4eICAgJeXl4KCgvz8/Pf395ubm5ycnHV1dYuLi9nZ2WNjY9jY2Hd3d1lZWbW1tXp6epaWlt7e3nZ2duDg4Ht7e+3t7d/f3////////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0M0RjU5NjFBMjM2ODExODIyQUM5OUM0MjlFNzg1MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MURDQjBCNEFCNDgxMUU0QkE0QTg4Mjk3MUMwQjZFOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MURDQjBCM0FCNDgxMUU0QkE0QTg4Mjk3MUMwQjZFOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRG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"})})}},57:function(e,t,n){e.exports={navigation:"Paginator_navigation__Wqffg",pageNumber:"Paginator_pageNumber__2tTQZ",selectedPage:"Paginator_selectedPage__3gmdU"}},71:function(e,t,n){e.exports={comments:"Comments_comments__30wXF",body:"Comments_body__315yA",list:"Comments_list__1y_Iv"}},72:function(e,t,n){e.exports={comment:"Comment_comment__1itvS",person:"Comment_person__qO6K1"}},73:function(e,t,n){e.exports={login:"Login_login__2reP0",form:"Login_form__5PNO4",checkbox:"Login_checkbox__20FhS",formSummaryError:"Login_formSummaryError__xr3U3"}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},96:function(e,t,n){e.exports={header:"Header_header__2mty_",link:"Header_link__2K-rq"}},97:function(e,t,n){e.exports={formControl:"FormsControls_formControl__7hH2P",error:"FormsControls_error__1Imdq"}}},[[296,1,2]]]);
//# sourceMappingURL=main.93a9b28b.chunk.js.map