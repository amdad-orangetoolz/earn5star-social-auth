(this["webpackJsonpearn5star-social-auth"]=this["webpackJsonpearn5star-social-auth"]||[]).push([[0],{25:function(e,t,o){},26:function(e,t,o){},27:function(e,t,o){},28:function(e,t,o){},54:function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),r=o(16),i=o.n(r),l=(o(25),o(26),o(13)),a=(o(27),o(17)),s=o(18),u=o(20),d=o(19),j=(o(28),o(0)),b=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e,n){var c;return Object(a.a)(this,o),(c=t.call(this,e,n)).getUserProfile=function(e,t){var o=e.toLowerCase();return"facebook"==o?t.picture.data.url:"google"==o?t.avatar:"https://res.cloudinary.com/demo/basketball_shot.jpg"},c}return Object(s.a)(o,[{key:"renderResponseData",value:function(e){return Object(j.jsx)("div",{children:Object.keys(e).map((function(t,o){return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("div",{className:"label",children:t}),Object(j.jsxs)("div",{className:"value",children:[" ","object"===typeof e[t]?JSON.stringify(e[t]):e[t]]})]},o)}))})}},{key:"render",value:function(){var e=this.props,t=e.provider,o=e.profile,n=this.getUserProfile(t,o);return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"avt",children:Object(j.jsx)("img",{alt:"141",src:n,height:"50",width:"50",ext:"1636983621",hash:"AeSlbB-lvRiW8SBjjlo"})}),Object(j.jsx)("h3",{className:"provider",children:t.toUpperCase()}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"data",children:[this.renderResponseData(o),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btnLogout",children:"Logout"})})]})})]})}}]),o}(n.Component),g=o(4),f=o(5),O=["title","titleId"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},v.apply(this,arguments)}function _(e,t){if(null==e)return{};var o,n,c=function(e,t){if(null==e)return{};var o,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(c[o]=e[o]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(c[o]=e[o])}return c}function h(e,t){var o=e.title,c=e.titleId,r=_(e,O);return n.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"20px",height:"20px",viewBox:"0 0 20 20",ref:t,"aria-labelledby":c},r),o?n.createElement("title",{id:c},o):null,n.createElement("g",{id:"surface1"},n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(79.215686%,12.941176%,15.294118%)",fillOpacity:1},d:"M 19.707031 9.972656 C 19.707031 15.351562 15.34375 19.710938 9.964844 19.710938 C 4.589844 19.710938 0.226562 15.351562 0.226562 9.972656 C 0.226562 4.59375 4.589844 0.234375 9.964844 0.234375 C 15.34375 0.234375 19.707031 4.59375 19.707031 9.972656 Z M 19.707031 9.972656 "}),n.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:1},d:"M 9.148438 3.496094 C 6.40625 3.789062 3.671875 5.898438 3.5625 8.921875 C 3.488281 10.765625 4.261719 12.148438 6.105469 12.539062 C 6.316406 11.667969 6.355469 11.195312 6.355469 11.195312 C 6.355469 11.195312 5.542969 10.417969 5.460938 9.921875 C 4.785156 5.945312 10.277344 3.226562 13.160156 6.003906 C 15.148438 7.933594 13.839844 13.859375 10.628906 13.246094 C 7.550781 12.65625 12.132812 7.9375 9.679688 7.011719 C 7.683594 6.253906 6.621094 9.316406 7.566406 10.832031 C 7.011719 13.445312 5.816406 15.90625 6.300781 19.179688 C 7.871094 18.09375 8.398438 16.015625 8.832031 13.851562 C 9.621094 14.304688 10.042969 14.785156 11.050781 14.855469 C 14.761719 15.128906 16.832031 11.328125 16.328125 7.816406 C 15.871094 4.707031 12.617188 3.121094 9.148438 3.496094 Z M 9.148438 3.496094 "})))}var p=n.forwardRef(h),P=(o.p,{FACEBOOK_APP_ID:"570941927553078",GOOGLE_APP_ID:"421173343253-0m9l7aldoegd7dhdv793nbhth1c0mch0.apps.googleusercontent.com",AMAZON_APP_ID:"amzn1.application-oa2-client.69c5c85afd9a49dc9e9822be3b2d2063",INSTAGRAM_APP_ID:"1048843902559376",INSTAGRAM_APP_SECRET:"3e4ba56139d86c2d3dd98a27b0c2341b",MICROSOFT_APP_ID:"",LINKEDIN_APP_SECRET:"OKcSpcCDbUVIjpaA",LINKEDIN_APP_ID:"86kcnrng78axjr",GITHUB_APP_ID:"6546103c59abd8d7dc75",GITHUB_APP_SECRET:"10d8bca30c6570f46ee44f334c08614c795f8d93",PINTEREST_APP_ID:"1473268",PINTEREST_APP_SECRET:"e273f47a295593afbe43f709d31b71690363380b",TWITTER_APP_ID:"",TWITTER_API_KEY:"09CiRZFUQbXADxZG6hrvQbvOS",TWITTER_APP_SECRET:"TSOKBrBxokk1nxCg8fZKqLPDRuMaFgxbFapcxZMV8YQGDnPIGq",TWITTER_TOKEN:""}),L={SOCIAL_REDIRECT_URI_LOCAL:"https://amdad-orangetoolz.github.io/earn5star-social-auth/account/login"}.SOCIAL_REDIRECT_URI_LOCAL,R=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),o=t[0],c=t[1],r=Object(n.useState)(),i=Object(l.a)(r,2),a=i[0],s=i[1],u=Object(n.useRef)(null),d=Object(n.useRef)(null),O=Object(n.useRef)(null),v=Object(n.useRef)(null),_=Object(n.useRef)(null),h=Object(n.useRef)(null),R=Object(n.useRef)(null),I=Object(n.useRef)(null),S=Object(n.useRef)(null),x=Object(n.useCallback)((function(){alert("login start")}),[]),E=Object(n.useCallback)((function(){alert("logout fail")}),[]),T=Object(n.useCallback)((function(){s(null),c(""),alert("logout success")}),[]),A=Object(n.useCallback)((function(){var e,t,n,c,r,i,l,a,s;switch(o){case"amazon":null===(e=u.current)||void 0===e||e.onLogout();break;case"facebook":null===(t=v.current)||void 0===t||t.onLogout();break;case"google":null===(n=O.current)||void 0===n||n.onLogout();break;case"instagram":null===(c=d.current)||void 0===c||c.onLogout();break;case"microsoft":null===(r=_.current)||void 0===r||r.onLogout();break;case"github":null===(i=R.current)||void 0===i||i.onLogout();break;case"pinterest":null===(l=I.current)||void 0===l||l.onLogout();break;case"twitter":null===(a=S.current)||void 0===a||a.onLogout();break;case"linkedin":null===(s=h.current)||void 0===s||s.onLogout()}}),[o]);return Object(j.jsxs)(j.Fragment,{children:[o&&a&&Object(j.jsx)(b,{provider:o,profile:a,onLogout:A}),Object(j.jsxs)("div",{className:"App ".concat(o&&a?"hide":""),children:[Object(j.jsx)("h1",{className:"title",children:"ReactJS Social Login"}),Object(j.jsx)(g.LoginSocialFacebook,{ref:v,appId:P.FACEBOOK_APP_ID||"",onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.FacebookLoginButton,{})}),Object(j.jsx)(g.LoginSocialGoogle,{ref:O,client_id:P.GOOGLE_APP_ID||"",onLogoutFailure:E,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.GoogleLoginButton,{})}),Object(j.jsx)(g.LoginSocialAmazon,{ref:u,client_id:P.AMAZON_APP_ID||"",redirect_uri:L,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},onLoginStart:x,onLogoutSuccess:T,children:Object(j.jsx)(f.AmazonLoginButton,{})}),Object(j.jsx)(g.LoginSocialInstagram,{ref:d,client_id:P.INSTAGRAM_APP_ID||"",client_secret:P.INSTAGRAM_APP_SECRET||"",redirect_uri:L,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.InstagramLoginButton,{})}),Object(j.jsx)(g.LoginSocialMicrosoft,{ref:_,client_id:P.MICROSOFT_APP_ID||"",redirect_uri:L,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.MicrosoftLoginButton,{})}),Object(j.jsx)(g.LoginSocialLinkedin,{ref:h,client_id:P.LINKEDIN_APP_ID||"",client_secret:P.LINKEDIN_APP_SECRET||"",redirect_uri:L,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.LinkedInLoginButton,{})}),Object(j.jsx)(g.LoginSocialGithub,{ref:R,client_id:P.GITHUB_APP_ID||"",client_secret:P.GITHUB_APP_SECRET||"",redirect_uri:L,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.GithubLoginButton,{})}),Object(j.jsx)(g.LoginSocialPinterest,{ref:I,client_id:P.PINTEREST_APP_ID||"",client_secret:P.PINTEREST_APP_SECRET||"",redirect_uri:L,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},className:"pinterest-btn",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(p,{})}),Object(j.jsx)("span",{className:"txt",children:"Login With Pinterest"})]})}),Object(j.jsx)(g.LoginSocialTwitter,{ref:S,client_id:P.TWITTER_API_KEY||"",client_secret:P.TWITTER_APP_SECRET||"",redirect_uri:L,onLoginStart:x,onLogoutSuccess:T,onResolve:function(e){var t=e.provider,o=e.data;console.log("provider"+t),console.log("data"+o),c(t),s(o)},onReject:function(e){console.log(e)},children:Object(j.jsx)(f.TwitterLoginButton,{})})]})]})};var I=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(R,{})})},S=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,55)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.8c6fcef0.chunk.js.map