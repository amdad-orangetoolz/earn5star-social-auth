(this["webpackJsonpearn5star-social-auth"]=this["webpackJsonpearn5star-social-auth"]||[]).push([[0],{21:function(e,o,t){},22:function(e,o,t){},23:function(e,o,t){},49:function(e,o,t){"use strict";t.r(o);var n=t(2),c=t.n(n),r=t(16),l=t.n(r),i=(t(21),t(22),t(13)),a=(t(23),t(4)),s=t(5),u=["title","titleId"];function d(){return d=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function g(e,o){if(null==e)return{};var t,n,c=function(e,o){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(c[t]=e[t]);return c}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function j(e,o){var t=e.title,c=e.titleId,r=g(e,u);return n.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"20px",height:"20px",viewBox:"0 0 20 20",ref:o,"aria-labelledby":c},r),t?n.createElement("title",{id:c},t):null,n.createElement("g",{id:"surface1"},n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(79.215686%,12.941176%,15.294118%)",fillOpacity:1},d:"M 19.707031 9.972656 C 19.707031 15.351562 15.34375 19.710938 9.964844 19.710938 C 4.589844 19.710938 0.226562 15.351562 0.226562 9.972656 C 0.226562 4.59375 4.589844 0.234375 9.964844 0.234375 C 15.34375 0.234375 19.707031 4.59375 19.707031 9.972656 Z M 19.707031 9.972656 "}),n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:1},d:"M 9.148438 3.496094 C 6.40625 3.789062 3.671875 5.898438 3.5625 8.921875 C 3.488281 10.765625 4.261719 12.148438 6.105469 12.539062 C 6.316406 11.667969 6.355469 11.195312 6.355469 11.195312 C 6.355469 11.195312 5.542969 10.417969 5.460938 9.921875 C 4.785156 5.945312 10.277344 3.226562 13.160156 6.003906 C 15.148438 7.933594 13.839844 13.859375 10.628906 13.246094 C 7.550781 12.65625 12.132812 7.9375 9.679688 7.011719 C 7.683594 6.253906 6.621094 9.316406 7.566406 10.832031 C 7.011719 13.445312 5.816406 15.90625 6.300781 19.179688 C 7.871094 18.09375 8.398438 16.015625 8.832031 13.851562 C 9.621094 14.304688 10.042969 14.785156 11.050781 14.855469 C 14.761719 15.128906 16.832031 11.328125 16.328125 7.816406 C 15.871094 4.707031 12.617188 3.121094 9.148438 3.496094 Z M 9.148438 3.496094 "})))}var b=n.forwardRef(j),_=(t.p,{FACEBOOK_APP_ID:"570941927553078",GOOGLE_APP_ID:"ear5star-social",AMAZON_APP_ID:"amzn1.devportal.webapp.629dec25d9f345fcb33c4736250778e9",INSTAGRAM_APP_ID:"1048843902559376",INSTAGRAM_APP_SECRET:"3e4ba56139d86c2d3dd98a27b0c2341b",MICROSOFT_APP_ID:"",LINKEDIN_APP_SECRET:"OKcSpcCDbUVIjpaA",LINKEDIN_APP_ID:"86kcnrng78axjr",GITHUB_APP_ID:"6546103c59abd8d7dc75",GITHUB_APP_SECRET:"10d8bca30c6570f46ee44f334c08614c795f8d93",PINTEREST_APP_ID:"",PINTEREST_APP_SECRET:"",TWITTER_APP_ID:"",TWITTER_API_KEY:"",TWITTER_APP_SECRET:"",TWITTER_TOKEN:""}),f={SOCIAL_REDIRECT_URI_LOCAL:"http://localhost:3000/account/login"},O=t(0),v=f.SOCIAL_REDIRECT_URI_LOCAL,P=function(){var e=Object(n.useState)(""),o=Object(i.a)(e,2),t=o[0],c=o[1],r=Object(n.useState)(),l=Object(i.a)(r,2),u=l[0],d=l[1],g=Object(n.useRef)(null),j=Object(n.useRef)(null),f=Object(n.useRef)(null),P=Object(n.useRef)(null),I=Object(n.useRef)(null),L=Object(n.useRef)(null),R=Object(n.useRef)(null),p=Object(n.useRef)(null),S=Object(n.useRef)(null),E=Object(n.useCallback)((function(){alert("login start")}),[]),T=Object(n.useCallback)((function(){alert("logout fail")}),[]),A=Object(n.useCallback)((function(){d(null),c(""),alert("logout success")}),[]);Object(n.useCallback)((function(){var e,o,n,c,r,l,i,a,s;switch(t){case"amazon":null===(e=g.current)||void 0===e||e.onLogout();break;case"facebook":null===(o=P.current)||void 0===o||o.onLogout();break;case"google":null===(n=f.current)||void 0===n||n.onLogout();break;case"instagram":null===(c=j.current)||void 0===c||c.onLogout();break;case"microsoft":null===(r=I.current)||void 0===r||r.onLogout();break;case"github":null===(l=R.current)||void 0===l||l.onLogout();break;case"pinterest":null===(i=p.current)||void 0===i||i.onLogout();break;case"twitter":null===(a=S.current)||void 0===a||a.onLogout();break;case"linkedin":null===(s=L.current)||void 0===s||s.onLogout()}}),[t]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"App ".concat(t&&u?"hide":""),children:[Object(O.jsx)("h1",{className:"title",children:"ReactJS Social Login"}),Object(O.jsx)(a.LoginSocialFacebook,{ref:P,appId:_.FACEBOOK_APP_ID||"",onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.FacebookLoginButton,{})}),Object(O.jsx)(a.LoginSocialGoogle,{ref:f,client_id:_.GOOGLE_APP_ID||"",onLogoutFailure:T,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.GoogleLoginButton,{})}),Object(O.jsx)(a.LoginSocialAmazon,{ref:g,client_id:_.AMAZON_APP_ID||"",redirect_uri:v,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},onLoginStart:E,onLogoutSuccess:A,children:Object(O.jsx)(s.AmazonLoginButton,{})}),Object(O.jsx)(a.LoginSocialInstagram,{ref:j,client_id:_.INSTAGRAM_APP_ID||"",client_secret:_.INSTAGRAM_APP_SECRET||"",redirect_uri:v,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.InstagramLoginButton,{})}),Object(O.jsx)(a.LoginSocialMicrosoft,{ref:I,client_id:_.MICROSOFT_APP_ID||"",redirect_uri:v,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.MicrosoftLoginButton,{})}),Object(O.jsx)(a.LoginSocialLinkedin,{ref:L,client_id:_.LINKEDIN_APP_ID||"",client_secret:_.LINKEDIN_APP_SECRET||"",redirect_uri:v,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.LinkedInLoginButton,{})}),Object(O.jsx)(a.LoginSocialGithub,{ref:R,client_id:_.GITHUB_APP_ID||"",client_secret:_.GITHUB_APP_SECRET||"",redirect_uri:v,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.GithubLoginButton,{})}),Object(O.jsx)(a.LoginSocialPinterest,{ref:p,client_id:_.PINTEREST_APP_ID||"",client_secret:_.PINTEREST_APP_SECRET||"",redirect_uri:v,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},className:"pinterest-btn",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(b,{})}),Object(O.jsx)("span",{className:"txt",children:"Login With Pinterest"})]})}),Object(O.jsx)(a.LoginSocialTwitter,{ref:S,client_id:_.TWITTER_API_KEY||"",client_secret:_.TWITTER_APP_SECRET||"",redirect_uri:v,onLoginStart:E,onLogoutSuccess:A,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),d(t)},onReject:function(e){console.log(e)},children:Object(O.jsx)(s.TwitterLoginButton,{})})]})})};var I=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{children:Object(O.jsx)(P,{})})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(o){var t=o.getCLS,n=o.getFID,c=o.getFCP,r=o.getLCP,l=o.getTTFB;t(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),L()}},[[49,1,2]]]);
//# sourceMappingURL=main.7e1d0ef2.chunk.js.map