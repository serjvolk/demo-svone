(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{298:function(t,e,s){t.exports={profile:"Profile_profile__35m_D",body:"Profile_body__1WtVw",row:"Profile_row__1wGlB",image:"Profile_image__3Vzz3",text:"Profile_text__3Hzh5",name:"Profile_name__2nd4k",age:"Profile_age__3xI30",sity:"Profile_sity__2rE97",posts:"Profile_posts__2THfJ",addPost:"Profile_addPost__2qkjQ",status:"Profile_status__2YEVw"}},301:function(t,e,s){"use strict";s.r(e);var a=s(5),o=s(36),i=s(37),r=s(39),c=s(38),n=s(1),u=s.n(n),l=s(129),p=s(298),d=s.n(p),j=s(41),b=s(132),f=s(0),h=function(t){var e=Object(n.useState)(!1),s=Object(b.a)(e,2),a=s[0],o=s[1],i=Object(n.useState)(t.status),r=Object(b.a)(i,2),c=r[0],u=r[1];Object(n.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsxs)("div",{className:d.a.status,children:[!a&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"-----"})}),a&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(c)},value:c})})]})};var O=function(t){var e=t.profile,s=t.status,a=t.updateStatus;return e?Object(f.jsxs)("div",{className:d.a.body,children:[Object(f.jsxs)("div",{className:d.a.row,children:[Object(f.jsx)("div",{className:d.a.col,children:Object(f.jsx)("div",{className:d.a.image,children:Object(f.jsx)("img",{src:e.photos.large,alt:""})})}),Object(f.jsx)("div",{className:d.a.col,children:Object(f.jsxs)("div",{className:d.a.text,children:[Object(f.jsx)("p",{className:d.a.name,children:e.fullName}),Object(f.jsx)("p",{className:d.a.age,children:"2.7 \u043b\u0435\u0442"}),Object(f.jsx)("p",{className:d.a.sity,children:"\u0410\u043d\u0442\u0430\u0440\u043a\u0442\u0438\u0434\u0430"}),Object(f.jsx)("p",{className:d.a.description,children:e.aboutMe})]})})]}),Object(f.jsx)(h,{status:s,updateStatus:a})]}):Object(f.jsx)(j.a,{})};var m=function(t){return Object(f.jsx)("li",{id:t.id,children:t.postMessage})},x=s(93),_=s(131),g=s(90),P=s(33),v=Object(g.a)(10),N=u.a.memo((function(t){console.log("RENDER"),console.log(t);var e=t.posts.map((function(t){return Object(f.jsx)(m,{postMessage:t.msg,id:t.id},t.id)}));return Object(f.jsx)("div",{className:d.a.profile,children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)("ul",{className:d.a.posts,children:e}),Object(f.jsx)(S,{onSubmit:function(e){t.addPostMessage(e.newPostText)}})]})})})),S=Object(_.a)({form:"addPostMessageForm"})((function(t){return Object(f.jsxs)("form",{className:d.a.addPost,onSubmit:t.handleSubmit,children:[Object(f.jsx)(x.a,{component:P.b,name:"newPostText",placeholder:"Enter your post message",validate:[g.b,v]}),Object(f.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})),y=N,w=s(11),k=s(17),M=s(9),E=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(f.jsx)(y,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(M.d)(Object(k.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,posts:t.profilePage.posts,newPostText:t.profilePage.newPostTextVal,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{addPostMessage:l.a,getUserProfile:l.d,getStatus:l.c,updateStatus:l.e}),w.f)(E)}}]);
//# sourceMappingURL=4.aedcbece.chunk.js.map