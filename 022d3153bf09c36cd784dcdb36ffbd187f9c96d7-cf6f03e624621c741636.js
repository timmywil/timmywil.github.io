"use strict";(self.webpackChunktimmywil_com=self.webpackChunktimmywil_com||[]).push([[790],{5845:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},6747:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return v},S:function(){return R},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(1148),n=(a(5845),a(9389)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,u);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,m);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:i().object.isRequired,alt:L},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],S=new Set;let T,_;const I=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:g,onError:m}=e,h=o(e,k);const{width:f,height:y,layout:b}=n,w=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:v,className:x}=w,L=o(w,C),E=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(346)]).then(a.bind(a,4546)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(I);if(_&&S.has(I))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;E.current&&(E.current.innerHTML=a(s({isLoading:!0,isLoaded:S.has(I),image:n},h)),S.has(I)||(t=requestAnimationFrame((()=>{E.current&&(r=o(E.current,I,S,i,p,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(I)&&_&&(E.current.innerHTML=_(s({isLoading:S.has(I),isLoaded:S.has(I),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},v,i,{backgroundColor:c}),className:x+(d?" "+d:""),ref:E,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},N=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));N.propTypes=E,N.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:L,width:O,height:O,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(Z=N,function(e){let{src:t,__imageData:a,__error:n}=e,i=o(e,q);return n&&console.warn(n),a?r.createElement(Z,s({image:a},i)):(console.warn("Image not loaded",t),null)});var Z;R.displayName="StaticImage",R.propTypes=j},5387:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(9821),n=a(5024),i=a(6747),s=a(4683),o=a(8469),l=a(7518),c=a(559);const d=(0,r.Z)("svg",{target:"e9ms6vi0"})({name:"1f7iexh",styles:"width:16px;height:16px;display:block;line-height:0;transform:scale(1.5)"});function u(){const{site:e}=(0,n.useStaticQuery)(g),{author:t,social:r}=e.siteMetadata;return(0,c.BX)("div",{className:"flex-column flex-start-center",css:p.container,children:[(0,c.tZ)(i.S,{src:"../../content/assets/me-headshot.jpg",alt:t,layout:"fixed",width:100,height:100,imgStyle:p.image,placeholder:"none",__imageData:a(7552)}),(0,c.BX)("div",{css:p.socialLinks,className:"flex-row flex-center",children:[(0,c.tZ)("span",{className:"bio-name",children:"Timmy Willison"}),(0,c.tZ)("a",{className:"flex-center",css:p.socialLink,href:"https://mastodon.world/"+r.mastodon,children:(0,c.tZ)(d,{dangerouslySetInnerHTML:{__html:'<use xlink:href="/minima-social-icons.svg#mastodon"></use>'}})}),(0,c.tZ)("a",{className:"flex-center",css:p.socialLink,href:"https://twitter.com/"+r.twitter,children:(0,c.tZ)(d,{dangerouslySetInnerHTML:{__html:'<use xlink:href="/minima-social-icons.svg#twitter"></use>'}})})]})]})}const p={container:(0,o.iv)("width:100%;margin-top:",(0,l.qZ)(1),";margin-bottom:",(0,l.qZ)(.5),";gap:",(0,l.qZ)(.5),";",s.A.MIN_DEFAULT_MEDIA_QUERY,"{flex-direction:row;}","","",""),socialLinks:(0,o.iv)("gap:",(0,l.qZ)(.5),";","","",""),socialLink:{name:"1m7uesi",styles:"text-shadow:none;width:44px;height:44px;border-radius:50%;background-color:rgba(0, 0, 0, 0.3);&,&:hover,&:visited{color:white;background-image:none;}&:hover{background-color:rgba(0, 0, 0, 0.4);}&:active{box-shadow:inset 0 0 0 2px rgba(0, 0, 0, 0.2);}"},image:{borderRadius:"100%"}},g="3254634913"},7552:function(e){e.exports=JSON.parse('{"layout":"fixed","images":{"fallback":{"src":"/static/902d505b1b5cb0e49979431d548adfd1/e07e1/me-headshot.jpg","srcSet":"/static/902d505b1b5cb0e49979431d548adfd1/e07e1/me-headshot.jpg 100w,\\n/static/902d505b1b5cb0e49979431d548adfd1/dd515/me-headshot.jpg 200w","sizes":"100px"},"sources":[{"srcSet":"/static/902d505b1b5cb0e49979431d548adfd1/d8057/me-headshot.webp 100w,\\n/static/902d505b1b5cb0e49979431d548adfd1/2e34e/me-headshot.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":100}')}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-cf6f03e624621c741636.js.map