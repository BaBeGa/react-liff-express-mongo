(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],{26:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s(0),n=s(18),i=s.n(n),c=s(20),u=(s(26),s(7)),l=s.n(u),o=s(14),h=s(8),j=s(9),p=s(5),d=s(11),g=s(10),b=(s.p,s(28),s(29),function(e){Object(d.a)(s,e);var t=Object(g.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).getUser=function(){try{var e=localStorage.getItem("user");e&&(r.user=JSON.parse(e),r.setState({user:r.user})),console.log("state : ",r.state),console.log("user local : ",r.user),fetch("/api/user/"+r.user.userLineID).then((function(e){return e.json()})).then((function(e){console.log("getuser",e),r.setState({user:e})}))}catch(t){console.log("exception : ",t)}},r.getUser=r.getUser.bind(Object(p.a)(r)),r.state={user:{name:"",email:"",userLineID:"",pictureUrl:"",statusMessage:"",coupons:[]}},r}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"support",children:this.state.user.pictureUrl&&""!==this.state.user.pictureUrl?Object(r.jsx)("img",{width:"25%",src:this.state.user.pictureUrl}):Object(r.jsx)("p",{children:"pictureUrl = null"})}),Object(r.jsxs)("div",{className:"userData",children:[this.state.user.name&&""!==this.state.user.name?Object(r.jsxs)("p",{children:["Name: ",this.state.user.name]}):Object(r.jsx)("p",{children:"Name = null"}),this.state.user.email&&""!==this.state.user.email?Object(r.jsxs)("p",{children:["e-mail: ",this.state.user.email]}):Object(r.jsx)("p",{children:"email = null"}),this.state.user.userLineID&&""!==this.state.user.userLineID?Object(r.jsxs)("p",{children:["LineID: ",this.state.user.userLineID]}):Object(r.jsx)("p",{children:"LineID = null"}),this.state.user.statusMessage&&""!==this.state.user.statusMessage?Object(r.jsxs)("p",{children:["statusMessage: ",this.state.user.statusMessage]}):Object(r.jsx)("p",{children:"statusMessage = null"}),this.state.user.coupons.map((function(e,t){return Object(r.jsxs)("p",{children:[" details: ",e.details,", status : ",e.status]},t)}))]})]})}}]),s}(a.Component)),m=s(40),O=window.liff,f=function(e){Object(d.a)(s,e);var t=Object(g.a)(s);function s(e){var r;return Object(h.a)(this,s),(r=t.call(this,e)).saveUser=Object(o.a)(l.a.mark((function e(){var t,s,a,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("state : ",r.state),t=JSON.stringify(r.state.user),console.log("user state : ",t),s={method:"POST",headers:{"Content-Type":"application/json"},body:t},e.next=7,fetch("/api/user",s);case 7:return a=e.sent,e.next=10,a.json();case 10:n=e.sent,console.log("response : ",n),i=JSON.stringify(r.state.user),localStorage.setItem("user",i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("exception : ",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),r.saveUser=r.saveUser.bind(Object(p.a)(r)),r.state={user:{name:"",email:"",userLineID:"",pictureUrl:"",statusMessage:""}},r}return Object(j.a)(s,[{key:"getProfile",value:function(){var e=this,t=localStorage.getItem("user");t&&(this.user=JSON.parse(t),this.setState({user:this.user})),console.log("user : ",this.user),this.user||O.init({liffId:"1655424183-wzDgvLRj"},Object(o.a)(l.a.mark((function t(){var s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!O.isLoggedIn()){t.next=11;break}return t.next=3,O.getProfile();case 3:return s=t.sent,t.next=6,O.getDecodedIDToken();case 6:r=t.sent,e.setState({user:{name:s.displayName,email:r.email,userLineID:s.userId,pictureUrl:s.pictureUrl,statusMessage:s.statusMessage}}),console.log("liff done : ",e.state.user),t.next=12;break;case 11:O.login();case 12:case"end":return t.stop()}}),t)}))))}},{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){return this.user?Object(r.jsx)("div",{children:Object(r.jsx)(b,{})}):Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"support",children:this.state.user&&this.state.user.pictureUrl&&""!==this.state.user.pictureUrl?Object(r.jsx)("img",{width:"25%",src:this.state.user.pictureUrl}):Object(r.jsx)("p",{children:"pictureUrl = null"})}),Object(r.jsxs)("div",{className:"userData",children:[this.state.user&&this.state.user.name&&""!==this.state.user.name?Object(r.jsxs)("p",{children:["Name: ",this.state.user.name]}):Object(r.jsx)("p",{children:"Name = null"}),this.state.user&&this.state.user.email&&""!==this.state.user.email?Object(r.jsxs)("p",{children:["e-mail: ",this.state.user.email]}):Object(r.jsx)("p",{children:"email = null"}),this.state.user&&this.state.user.userLineID&&""!==this.state.user.userLineID?Object(r.jsxs)("p",{children:["LineID: ",this.state.user.userLineID]}):Object(r.jsx)("p",{children:"LineID = null"}),this.state.user&&this.state.user.statusMessage&&""!==this.state.user.statusMessage?Object(r.jsxs)("p",{children:["statusMessage: ",this.state.user.statusMessage]}):Object(r.jsx)("p",{children:"statusMessage = null"})]}),Object(r.jsx)("div",{className:"button login",children:Object(r.jsx)(m.a,{onClick:this.saveUser,variant:"warning",size:"lg",children:"Register"})})]})}}]),s}(a.Component),x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),r(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(c.a,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),x()}},[[38,1,2]]]);
//# sourceMappingURL=main.f7c45c20.chunk.js.map