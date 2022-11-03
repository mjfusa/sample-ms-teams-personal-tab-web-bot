(()=>{"use strict";var e={64:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.nonce=void 0,t.nonce={},s(r(896),t)},896:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var s,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.MyProfileTab=void 0;const s=r(698);let n=class{};n=o([s.PreventIframe("/index.html")],n),t.MyProfileTab=n},455:e=>{e.exports=require("compression")},974:e=>{e.exports=require("debug")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},698:e=>{e.exports=require("express-msteams-host")},470:e=>{e.exports=require("morgan")},685:e=>{e.exports=require("http")},17:e=>{e.exports=require("path")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(()=>{const e=r(860),t=r(685),o=r(17),s=r(470),n=r(698),i=r(974),c=r(455),a=i("msteams");a("Initializing Microsoft Teams Express hosted App..."),r(142).config();const u=r(64),p=e(),d=process.env.port||process.env.PORT||3007;p.use(e.json({verify:(e,t,r,o)=>{e.rawBody=r.toString()}})),p.use(e.urlencoded({extended:!0})),p.set("views",o.join(__dirname,"/")),p.use(s("tiny")),p.use(c()),p.use("/scripts",e.static(o.join(__dirname,"web/scripts"))),p.use("/assets",e.static(o.join(__dirname,"web/assets"))),p.use(n.MsTeamsApiRouter(u)),p.use(n.MsTeamsPageRouter({root:o.join(__dirname,"web/"),components:u})),p.use("/",e.static(o.join(__dirname,"web/"),{index:"index.html"})),p.set("port",d),t.createServer(p).listen(d,(()=>{a(`Server running on ${d}`)}))})()})();
//# sourceMappingURL=server.js.map