(this["webpackJsonpearn5star-social-auth"]=this["webpackJsonpearn5star-social-auth"]||[]).push([[0],{25:function(e,o,t){},26:function(e,o,t){},27:function(e,o,t){},28:function(e,o,t){},54:function(e,o,t){"use strict";t.r(o);var n=t(2),c=t.n(n),r=t(16),i=t.n(r),l=(t(25),t(26),t(13)),a=(t(27),t(17)),s=t(18),u=t(20),d=t(19),g=(t(28),t(0)),j=function(e){Object(u.a)(t,e);var o=Object(d.a)(t);function t(e,n){return Object(a.a)(this,t),o.call(this,e,n)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,o=(e.provider,e.profile);return console.log(JSON.stringify(o)),Object(g.jsx)("div",{class:"card",children:Object.keys(o).map((function(e,t){o[e]}))})}}]),t}(n.Component),b=t(4),f=t(5),O=["title","titleId"];function _(){return _=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_.apply(this,arguments)}function v(e,o){if(null==e)return{};var t,n,c=function(e,o){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(c[t]=e[t]);return c}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function P(e,o){var t=e.title,c=e.titleId,r=v(e,O);return n.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"20px",height:"20px",viewBox:"0 0 20 20",ref:o,"aria-labelledby":c},r),t?n.createElement("title",{id:c},t):null,n.createElement("g",{id:"surface1"},n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(79.215686%,12.941176%,15.294118%)",fillOpacity:1},d:"M 19.707031 9.972656 C 19.707031 15.351562 15.34375 19.710938 9.964844 19.710938 C 4.589844 19.710938 0.226562 15.351562 0.226562 9.972656 C 0.226562 4.59375 4.589844 0.234375 9.964844 0.234375 C 15.34375 0.234375 19.707031 4.59375 19.707031 9.972656 Z M 19.707031 9.972656 "}),n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:1},d:"M 9.148438 3.496094 C 6.40625 3.789062 3.671875 5.898438 3.5625 8.921875 C 3.488281 10.765625 4.261719 12.148438 6.105469 12.539062 C 6.316406 11.667969 6.355469 11.195312 6.355469 11.195312 C 6.355469 11.195312 5.542969 10.417969 5.460938 9.921875 C 4.785156 5.945312 10.277344 3.226562 13.160156 6.003906 C 15.148438 7.933594 13.839844 13.859375 10.628906 13.246094 C 7.550781 12.65625 12.132812 7.9375 9.679688 7.011719 C 7.683594 6.253906 6.621094 9.316406 7.566406 10.832031 C 7.011719 13.445312 5.816406 15.90625 6.300781 19.179688 C 7.871094 18.09375 8.398438 16.015625 8.832031 13.851562 C 9.621094 14.304688 10.042969 14.785156 11.050781 14.855469 C 14.761719 15.128906 16.832031 11.328125 16.328125 7.816406 C 15.871094 4.707031 12.617188 3.121094 9.148438 3.496094 Z M 9.148438 3.496094 "})))}var L=n.forwardRef(P),p=(t.p,{FACEBOOK_APP_ID:"570941927553078",GOOGLE_APP_ID:"ear5star-social",AMAZON_APP_ID:"amzn1.devportal.webapp.629dec25d9f345fcb33c4736250778e9",INSTAGRAM_APP_ID:"1048843902559376",INSTAGRAM_APP_SECRET:"3e4ba56139d86c2d3dd98a27b0c2341b",MICROSOFT_APP_ID:"",LINKEDIN_APP_SECRET:"OKcSpcCDbUVIjpaA",LINKEDIN_APP_ID:"86kcnrng78axjr",GITHUB_APP_ID:"6546103c59abd8d7dc75",GITHUB_APP_SECRET:"10d8bca30c6570f46ee44f334c08614c795f8d93",PINTEREST_APP_ID:"1473268",PINTEREST_APP_SECRET:"",TWITTER_APP_ID:"",TWITTER_API_KEY:"",TWITTER_APP_SECRET:"",TWITTER_TOKEN:""}),I={SOCIAL_REDIRECT_URI_LOCAL:"https://amdad-orangetoolz.github.io/earn5star-social-auth/account/login"}.SOCIAL_REDIRECT_URI_LOCAL,R=function(){var e=Object(n.useState)(""),o=Object(l.a)(e,2),t=o[0],c=o[1],r=Object(n.useState)(),i=Object(l.a)(r,2),a=i[0],s=i[1],u=Object(n.useRef)(null),d=Object(n.useRef)(null),O=Object(n.useRef)(null),_=Object(n.useRef)(null),v=Object(n.useRef)(null),P=Object(n.useRef)(null),R=Object(n.useRef)(null),S=Object(n.useRef)(null),E=Object(n.useRef)(null),T=Object(n.useCallback)((function(){alert("login start")}),[]),A=Object(n.useCallback)((function(){alert("logout fail")}),[]),h=Object(n.useCallback)((function(){s(null),c(""),alert("logout success")}),[]),C=Object(n.useCallback)((function(){var e,o,n,c,r,i,l,a,s;switch(t){case"amazon":null===(e=u.current)||void 0===e||e.onLogout();break;case"facebook":null===(o=_.current)||void 0===o||o.onLogout();break;case"google":null===(n=O.current)||void 0===n||n.onLogout();break;case"instagram":null===(c=d.current)||void 0===c||c.onLogout();break;case"microsoft":null===(r=v.current)||void 0===r||r.onLogout();break;case"github":null===(i=R.current)||void 0===i||i.onLogout();break;case"pinterest":null===(l=S.current)||void 0===l||l.onLogout();break;case"twitter":null===(a=E.current)||void 0===a||a.onLogout();break;case"linkedin":null===(s=P.current)||void 0===s||s.onLogout()}}),[t]);return Object(g.jsxs)(g.Fragment,{children:[t&&a&&Object(g.jsx)(j,{provider:t,profile:a,onLogout:C}),Object(g.jsxs)("div",{className:"App ".concat(t&&a?"hide":""),children:[Object(g.jsx)("h1",{className:"title",children:"ReactJS Social Login"}),Object(g.jsx)(b.LoginSocialFacebook,{ref:_,appId:p.FACEBOOK_APP_ID||"",onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.FacebookLoginButton,{})}),Object(g.jsx)(b.LoginSocialGoogle,{ref:O,client_id:p.GOOGLE_APP_ID||"",onLogoutFailure:A,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.GoogleLoginButton,{})}),Object(g.jsx)(b.LoginSocialAmazon,{ref:u,client_id:p.AMAZON_APP_ID||"",redirect_uri:I,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},onLoginStart:T,onLogoutSuccess:h,children:Object(g.jsx)(f.AmazonLoginButton,{})}),Object(g.jsx)(b.LoginSocialInstagram,{ref:d,client_id:p.INSTAGRAM_APP_ID||"",client_secret:p.INSTAGRAM_APP_SECRET||"",redirect_uri:I,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.InstagramLoginButton,{})}),Object(g.jsx)(b.LoginSocialMicrosoft,{ref:v,client_id:p.MICROSOFT_APP_ID||"",redirect_uri:I,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.MicrosoftLoginButton,{})}),Object(g.jsx)(b.LoginSocialLinkedin,{ref:P,client_id:p.LINKEDIN_APP_ID||"",client_secret:p.LINKEDIN_APP_SECRET||"",redirect_uri:I,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.LinkedInLoginButton,{})}),Object(g.jsx)(b.LoginSocialGithub,{ref:R,client_id:p.GITHUB_APP_ID||"",client_secret:p.GITHUB_APP_SECRET||"",redirect_uri:I,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.GithubLoginButton,{})}),Object(g.jsx)(b.LoginSocialPinterest,{ref:S,client_id:p.PINTEREST_APP_ID||"",client_secret:p.PINTEREST_APP_SECRET||"",redirect_uri:I,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},className:"pinterest-btn",children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(L,{})}),Object(g.jsx)("span",{className:"txt",children:"Login With Pinterest"})]})}),Object(g.jsx)(b.LoginSocialTwitter,{ref:E,client_id:p.TWITTER_API_KEY||"",client_secret:p.TWITTER_APP_SECRET||"",redirect_uri:I,onLoginStart:T,onLogoutSuccess:h,onResolve:function(e){var o=e.provider,t=e.data;console.log("provider"+o),console.log("data"+t),c(o),s(t)},onReject:function(e){console.log(e)},children:Object(g.jsx)(f.TwitterLoginButton,{})})]})]})};var S=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(R,{})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(o){var t=o.getCLS,n=o.getFID,c=o.getFCP,r=o.getLCP,i=o.getTTFB;t(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),E()}},[[54,1,2]]]);
//# sourceMappingURL=main.0ad8c193.chunk.js.map