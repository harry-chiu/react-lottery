(this["webpackJsonpreact-lottery"]=this["webpackJsonpreact-lottery"]||[]).push([[0],{1080:function(n,e,t){},1081:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(10),c=t.n(i),o=t(6),u=t(3),l=t(1),f=t(2);function p(){var n=Object(l.a)(["\n  display: inline-block;\n  padding: 12px 36px;\n  border-radius: 16px;\n  border: none;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  background: linear-gradient(135deg, #cc9cdfdd, #745bc6dd);\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background: linear-gradient(135deg, #cc9cdfff, #745bc6ff);\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  transform: translateX(",");\n  z-index: ",";\n  background: #000000aa;\n"]);return s=function(){return n},n}function d(){var n=Object(l.a)(["\n  display: inline-block;\n  margin: 0;\n  padding: 0 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: ",";\n\n  @media (max-width: 768px) {\n    font-size: ",";\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(l.a)(["\n  min-width: ",";\n  height: ",";\n  border-radius: 50%;\n  background: #cccccc90;\n  object-fit: cover;\n\n  @media (max-width: 768px) {\n    min-width: ",";\n    height: ",";\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  transition: 0.15s ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    background: #ffffff0e;\n  }\n\n  @media (max-width: 768px) {\n    padding: 4px;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return v=function(){return n},n}function g(){var n=Object(l.a)(["\n  font-size: ",";\n\n  @media (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #ffffff;\n  background: linear-gradient(135deg, #333333, #000000);\n"]);return x=function(){return n},n}var h={};h.Container=f.a.div(x()),h.Icon=f.a.i(g(),(function(n){return"".concat(n.size,"px")||!1})),h.List=f.a.ul(v()),h.ListItem=f.a.li(b()),h.Avatar=f.a.img(m(),(function(n){return n.size?"".concat(n.size,"px"):"32px"}),(function(n){return n.size?"".concat(n.size,"px"):"32px"}),(function(n){return n.size?"".concat(n.size,"px"):"24px"}),(function(n){return n.size?"".concat(n.size,"px"):"24px"})),h.Text=f.a.p(d(),(function(n){return n.size?"".concat(n.size,"px"):"unset"}),(function(n){return n.size?"".concat(n.size,"px"):"0.8rem"})),h.Modal=f.a.div(s(),(function(n){return n.open?"0":"100%"}),(function(n){return n.open?"0":"-1"})),h.Button=f.a.button(p());var y=h,O=t(8);function j(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 16px 0;\n  font-weight: bold;\n"]);return j=function(){return n},n}function E(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  padding: 8px;\n  max-width: 240px;\n  transform: translateX(",");\n  transition: 0.25s ease-in-out;\n  background: #222222;\n  height: 100%;\n  overflow: auto;\n"]);return E=function(){return n},n}function w(){var n=Object(l.a)(["\n  display: inline-block;\n  padding: 12px 0;\n  width: 100%;\n  color: #ffffff;\n  background: inherit;\n  border: none;\n  transition: 0.15s ease-in-out;\n  cursor: pointer;\n  opacity: 0.7;\n  text-align: center;\n\n  &:hover {\n    background: #333333;\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px 0;\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(l.a)(["\n  opacity: 0.7;\n  max-width: 180px;\n\n  @media (max-width: 768px) {\n    max-width: 140px;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(l.a)(["\n  position: absolute;\n"]);return z=function(){return n},n}function k(){var n=Object(l.a)(["\n  margin-left: auto;\n"]);return k=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: inline-block;\n  margin: 0;\n  font-weight: bold;\n"]);return T=function(){return n},n}function A(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 8px;\n"]);return A=function(){return n},n}function L(){var n=Object(l.a)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  min-width: 200px;\n  padding: 16px;\n  border-radius: 15px;\n  transition: 0.15s ease-in-out;\n\n  @media (max-width: 768px) {\n    top: 4px;\n    right: 4px;\n    padding: 8px;\n    min-width: 160px;\n  }\n"]);return L=function(){return n},n}var I={};I.Container=f.a.div(L()),I.PlayerTotalContainer=f.a.div(A()),I.Text=f.a.label(T()),I.Total=Object(f.a)(I.Text)(k()),I.LatestPlayerListContainer=f.a.div(z()),I.ListWrapper=f.a.div(C()),I.ViewAllButton=f.a.button(w()),I.AllPlayerListContainer=f.a.div(E(),(function(n){return n.open?"0":"240px"})),I.AllPlayerTitle=f.a.p(j());var P=I,W=function(n){var e=n.children,t=n.open,r=n.setOpen;return a.a.createElement(y.Modal,{open:t,onClick:function(){return r(!1)}},e)},B=function(n){var e=n.size;return a.a.createElement(y.Icon,{size:e,className:"uil uil-users-alt"})},R=function(n){var e=n.total;return a.a.createElement(P.PlayerTotalContainer,null,a.a.createElement(B,{size:24}),a.a.createElement(P.Text,null,"Players:"),a.a.createElement(P.Total,null,e))},S=function(n){var e=n.players,t=n.openModal,r=n.renderPlayers;return a.a.createElement(P.LatestPlayerListContainer,null,a.a.createElement(P.ListWrapper,null,a.a.createElement(y.List,null,e.length>3?r(e.slice(e.length-3)):r(e))),e.length>3&&a.a.createElement(P.ViewAllButton,{onClick:t},"View All"))},N=function(n){var e=n.open,t=n.players,r=n.renderPlayers;return a.a.createElement(P.AllPlayerListContainer,{open:e},a.a.createElement(P.AllPlayerTitle,null,t.length," Players"),a.a.createElement(y.List,null,r(t)))},M=function(){var n=Object(u.c)((function(n){return n.player})).players,e=Object(r.useState)(!1),t=Object(O.a)(e,2),i=t[0],c=t[1],o=function(n){return n.map((function(n){return a.a.createElement(y.ListItem,{key:n.id},a.a.createElement(y.Avatar,{src:n.avatar,alt:n.name.slice(0,1)}),a.a.createElement(y.Text,null,n.name))}))};return a.a.createElement(P.Container,null,a.a.createElement(R,{total:n.length}),a.a.createElement(S,{players:n,openModal:function(){return c(!0)},renderPlayers:o}),a.a.createElement(W,{open:i,setOpen:c},a.a.createElement(N,{open:i,players:n,renderPlayers:o})))},_=t(21),F=function(n){return""===n},V=function(n){return n>0},Y=function(n,e){return Math.floor(Math.random()*e)+n},D=function(n){return"0"===n.slice(0,1)?n.slice(1):n},J=function(n){return n<10?"0"+n:n},K=function(n){return n.target.select()},X="ADD_FAKE_PLAYER",q="CLEAR_FAKE_PLAYERS",G="SET_WINNER",H="CLEAR_WINNER",Q=X,U=q,Z=G,$=H,nn=1,en=function(){for(var n=[],e=Y(0,10),t=0;t<e;t++)n.push({id:nn++,name:_.name.findName(),avatar:"https://i.pravatar.cc/50?img=".concat(Y(1,50))});return{type:Q,payload:n}},tn=function(){return{type:U}},rn=function(n){return{type:Z,payload:n[Y(0,n.length-1)]}},an=function(){return{type:$}};function cn(){var n=Object(l.a)(["\n  text-align: center;\n  padding: 32px 0;\n"]);return cn=function(){return n},n}function on(){var n=Object(l.a)(["\n  display: inline-block;\n  font-size: 48px;\n  background: inherit;\n  padding: 0 8px;\n  border: none;\n  box-shadow: ",";\n  width: calc(2ch + 16px);\n  color: inherit;\n\n  &:focus {\n    outline: none;\n  }\n"]);return on=function(){return n},n}function un(){var n=Object(l.a)(["\n  display: inline-block;\n  font-size: 48px;\n"]);return un=function(){return n},n}function ln(){var n=Object(l.a)(["\n  padding: 32px 0;\n"]);return ln=function(){return n},n}function fn(){var n=Object(l.a)(["\n  font-size: 36px;\n  margin: 0;\n"]);return fn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  display: ",";\n  text-align: center;\n"]);return pn=function(){return n},n}var sn={};sn.Container=f.a.div(pn(),(function(n){return n.hide?"none":"block"})),sn.Title=f.a.h1(fn()),sn.TimeInputContainer=f.a.div(ln()),sn.ColonSeparate=f.a.label(un()),sn.TimeInput=f.a.input(on(),(function(n){return n.underline?"0 2px #999999":"unset"})),sn.ButtonWrapper=f.a.div(cn());var dn=sn,mn=function(){return a.a.createElement(dn.Title,null,"Lottery",a.a.createElement("br",null),"Countdown")},bn=function(n){var e=n.delay,t=n.minutes,r=n.seconds,i=n.minutesOnChange,c=n.secondsOnChange,o=n.toggleCountdownTimer;return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn.TimeInputContainer,null,a.a.createElement(dn.TimeInput,{value:t,onChange:i,onFocus:K,underline:!e}),a.a.createElement(dn.ColonSeparate,null,":"),a.a.createElement(dn.TimeInput,{value:r,onChange:c,onFocus:K,underline:!e})),a.a.createElement(dn.ButtonWrapper,null,a.a.createElement(y.Button,{onClick:o},e?"Pause":"Start")))},vn=en,gn=rn,xn=function(){var n=Object(u.c)((function(n){return n.player})),e=n.players,t=n.winner,i=Object(u.b)(),c=Object(r.useState)(0),o=Object(O.a)(c,2),l=o[0],f=o[1],p=Object(r.useState)(0),s=Object(O.a)(p,2),d=s[0],m=s[1],b=Object(r.useState)(null),v=Object(O.a)(b,2),g=v[0],x=v[1];return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n})),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){return clearInterval(n)}}}),[e])}((function(){if(i(vn()),0===d&&(f(l-1),m(59)),d>0&&(m(d-1),0===l&&d-1===0))return x(null),void i(gn(e))}),g),a.a.createElement(dn.Container,{hide:!!t},a.a.createElement(mn,null),a.a.createElement(bn,{delay:g,minutes:J(l),seconds:J(d),minutesOnChange:function(n){var e=n.target.value;e=D(e),e=F(e)?f(0):parseInt(e,10),V(e)&&(e>60?(f(60),m(0)):f(e))},secondsOnChange:function(n){var e=n.target.value;e=D(e),e=F(e)?m(0):parseInt(e,10),l>=60?m(0):V(e)&&m(e>=60?59:e)},toggleCountdownTimer:function(){0!==l||0!==d?x(g?null:1e3):alert("You have to setting countdown time")}}))};function hn(){var n=Object(l.a)(["\n  text-align: center;\n  padding: 32px 0;\n"]);return hn=function(){return n},n}function yn(){var n=Object(l.a)(["\n  padding: 24px 0;\n"]);return yn=function(){return n},n}function On(){var n=Object(l.a)(["\n  color: #ffc107;\n  margin: 0;\n  padding: 16px 0;\n  font-size: 48px;\n  letter-spacing: 4px;\n"]);return On=function(){return n},n}function jn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return jn=function(){return n},n}function En(){var n=Object(l.a)(["\n  display: ",";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]);return En=function(){return n},n}var wn={};wn.Container=f.a.div(En(),(function(n){return n.hide?"none":"flex"})),wn.Wrapper=f.a.div(jn()),wn.Title=f.a.h1(On()),wn.AvatarWrapper=f.a.div(yn()),wn.ButtonWrapper=f.a.div(hn());var Cn=wn,zn=an,kn=tn,Tn=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n.player})).winner;return a.a.createElement(Cn.Container,{hide:!e},a.a.createElement(Cn.Wrapper,null,a.a.createElement(Cn.Title,null,"WINNER"),a.a.createElement(Cn.AvatarWrapper,null,a.a.createElement(y.Avatar,{size:200,src:e.avatar})),a.a.createElement(y.Text,{size:32},e.name),a.a.createElement(Cn.ButtonWrapper,null,a.a.createElement(y.Button,{onClick:function(){n(zn()),n(kn())}},"Reset"))))},An=function(){return a.a.createElement(y.Container,null,a.a.createElement(M,null),a.a.createElement(xn,null),a.a.createElement(Tn,null))},Ln=t(13),In=t(4),Pn=X,Wn=q,Bn=G,Rn=H,Sn={players:[],winner:""},Nn=Object(o.b)({player:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Pn:return Object(In.a)(Object(In.a)({},n),{},{players:[].concat(Object(Ln.a)(n.players),Object(Ln.a)(e.payload))});case Wn:return Object(In.a)(Object(In.a)({},n),{},{players:[]});case Bn:return Object(In.a)(Object(In.a)({},n),{},{winner:e.payload});case Rn:return Object(In.a)(Object(In.a)({},n),{},{winner:""});default:return n}}}),Mn=(t(1080),Object(o.c)(Nn));c.a.render(a.a.createElement(u.a,{store:Mn},a.a.createElement(An,null)),document.getElementById("root"))},22:function(n,e,t){n.exports=t(1081)}},[[22,1,2]]]);
//# sourceMappingURL=main.3bf5d9d0.chunk.js.map