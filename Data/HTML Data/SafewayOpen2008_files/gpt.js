(function(){var window=this;var f=this,k=function(a){return"string"==typeof a},aa=/^[\w+/_-]+[=]{0,2}$/,m=null,n=function(){},q=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ba=function(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var r;a:{var t=f.navigator;if(t){var w=t.userAgent;if(w){r=w;break a}}r=""};var x=function(a){x[" "](a);return a};x[" "]=n;var z=function(){this.b="";this.v=y};z.prototype.l=!0;z.prototype.a=function(){return this.b};var A=function(a){return a instanceof z&&a.constructor===z&&a.v===y?a.b:"type_error:TrustedResourceUrl"},y={};var C=function(){this.g="";this.u=B};C.prototype.l=!0;C.prototype.a=function(){return this.g};var ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,B={},D=function(a){var b=new C;b.g=a;return b};D("about:blank");var da=function(a,b){a.src=A(b);if(null===m){a:{if((b=f.document.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&aa.test(b))break a;b=null}m=b||""}if(b=m)a.nonce=b};var ea=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ha=function(a){fa();var b=new z;b.b=a;return b},fa=n;var ia=/^[\w+/_-]+[=]{0,2}$/;var ja=function(){if(!f.crypto)return Math.random();try{var a=new Uint32Array(1);f.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},ka=ea(function(){return-1!=r.indexOf("Google Web Preview")||1E-4>Math.random()}),la=function(){try{a:{var a=f.document.querySelector("script[nonce]");if(a){var b=a.nonce||a.getAttribute("nonce");if(b&&ia.test(b)){var c=b;break a}}c=void 0}return c}catch(d){}};var E=function(){return f.googletag||(f.googletag={})};var F={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,83:0,85:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.01,169:0,207:.01,127:0,129:.05,131:"",156:0,133:0,134:.01,135:.1,137:.01,167:1,138:"",143:.005,168:0,144:.001,187:.01,141:1,158:.001,150:"",179:.05,170:!1,211:!1,183:0,196:.001,197:.001,152:[],172:null,175:"21061661,21061662,21061663,21061664,21061665,21061666,21061667,21061668,22316437,22316438",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,225:.95,199:0,180:null,219:[],210:{},227:{},226:[],195:1,198:1,222:.01,223:.5,200:.95,201:0,202:"",203:.01,206:0,213:1,214:.05,215:.01,217:0,218:.01,220:!1,224:!1,228:"//publisherconsole.appspot.com/js/"};F[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);F[49]=(new Date).getTime();F[36]=/^true$/.test("false");F[46]=/^true$/.test("false");F[148]=/^true$/.test("false");F[221]=/^true$/.test("");var G;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var ma=Number("{{MOD}}");if(!isNaN(ma)){G=ma;break a}}G=-1}F[204]=G;var H=function(){for(var a in F)this[a]=F[a]};H.b=void 0;H.a=function(){return H.b?H.b:H.b=new H};var I=function(a){return H.a()[a]},J=function(a,b){H.a()[a]=b},na=E(),oa=H.a(),pa=na._vars_,K;for(K in pa)oa[K]=pa[K];na._vars_=oa;var qa=function(){return"200"},ra=E();ra.hasOwnProperty("getVersion")||(ra.getVersion=qa);var sa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)},ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};var ua=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var L=null;var va=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;f.google_image_requests||(f.google_image_requests=[]);var d=f.document.createElement("img");if(b){var e=function(){if(b){var a=f.google_image_requests;a:if(k(a))var c=k(d)&&1==d.length?a.indexOf(d,0):-1;else{for(c=0;c<a.length;c++)if(c in a&&a[c]===d)break a;c=-1}0<=c&&Array.prototype.splice.call(a,c,1)}ta(d,"load",e);ta(d,"error",e)};sa(d,"load",e);sa(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;f.google_image_requests.push(d)};var wa=ea(function(){var a=f.navigator&&f.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),M=function(a,b,c,d,e){d=void 0===d?"":d;var g=a.createElement("link");g.rel=c;-1!=c.toLowerCase().indexOf("stylesheet")?b=A(b):b instanceof z?b=A(b):b instanceof C?b=b instanceof C&&b.constructor===C&&b.u===B?b.g:"type_error:SafeUrl":(b instanceof C||(b=b.l?b.a():String(b),ca.test(b)||(b="about:invalid#zClosurez"),b=D(b)),b=b.a());g.href=b;d&&"preload"==c&&(g.as=d);e&&(g.nonce=e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(g)}catch(h){}};var xa=/^\.google\.(com?\.)?[a-z]{2,3}$/,ya=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,N=function(a){return xa.test(a)&&!ya.test(a)},za=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},O=f,Aa=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(f.location.hostname)];P[3]>=+new Date&&b.push("adsid="+encodeURIComponent(P[1]));return a+"?"+b.join("&")},P,Q,R=function(){O=f;P=O.googleToken=O.googleToken||{};var a=+new Date;P[1]&&P[3]>a&&0<P[2]||(P[1]="",P[2]=-1,P[3]=-1,P[4]="",P[6]="");Q=O.googleIMState=O.googleIMState||{};N(Q[1])||(Q[1]=".google.com");"array"==q(Q[5])||(Q[5]=[]);"boolean"==typeof Q[6]||(Q[6]=!1);"array"==q(Q[7])||(Q[7]=[]);"number"==typeof Q[8]||(Q[8]=0)},Ba=function(a){try{a()}catch(b){f.setTimeout(function(){throw b;},0)}},Da=function(a){"complete"==f.document.readyState||"loaded"==f.document.readyState||f.document.currentScript&&f.document.currentScript.async?Ca(3):a()},Ea=0,S={c:function(){return 0<Q[8]},h:function(){Q[8]++},m:function(){0<Q[8]&&Q[8]--},o:function(){Q[8]=0},f:function(){},s:function(){return!1},j:function(){return Q[5]},i:Ba},T={c:function(){return Q[6]},h:function(){Q[6]=!0},m:function(){Q[6]=!1},o:function(){Q[6]=!1},f:function(){},s:function(){return".google.com"!=Q[1]&&2<++Ea},j:function(){return Q[7]},i:function(a){Da(function(){Ba(a)})}},Ca=function(a){1E-5>Math.random()&&va("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a)};S.f=function(){if(!S.c()){var a=f.document,b=function(b){var c=Aa("js",b),d=la();M(a,c,"preload","script",d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return f.processGoogleToken({},2)};c=ha(c);da(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),S.h()}catch(p){}},c=Q[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);f.setTimeout(function(){return f.processGoogleToken(d,1)},1E3)}};T.f=function(){if(!T.c()){var a=f.document,b=Aa("sync.js",Q[1]);M(a,b,"preload","script");b=za(b);var c=x("script"),d="",e=la();e&&(d='nonce="'+za(e)+'"');var g="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Da(function(){a.write(g);T.h()})}};var Fa=function(a){R();P[3]>=+new Date&&P[2]>=+new Date||a.f()},Ha=function(){f.processGoogleToken=f.processGoogleToken||function(a,b){return Ga(S,a,b)};Fa(S)},Ia=function(){f.processGoogleTokenSync=f.processGoogleTokenSync||function(a,b){return Ga(T,a,b)};Fa(T)},Ga=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,g=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),p=b["1p_jar"]||"";b=b.pucrd||"";R();1==c?a.o():a.m();if(!d&&a.s())N(".google.com")&&(Q[1]=".google.com"),a.f();else{var u=O.googleToken=O.googleToken||{},l=0==c&&d&&k(d)&&!e&&"number"==typeof g&&0<g&&"number"==typeof h&&0<h&&k(p);e=e&&!a.c()&&(!(P[3]>=+new Date)||"NT"==P[1]);var v=!(P[3]>=+new Date)&&0!=c;if(l||e||v)e=+new Date,g=e+1E3*g,h=e+1E3*h,Ca(c),u[5]=c,u[1]=d,u[2]=g,u[3]=h,u[4]=p,u[6]=b,R();if(l||!a.c()){c=a.j();for(d=0;d<c.length;d++)a.i(c[d]);c.length=0}}};var Ja=function(){this.a=null},Ka=function(a,b){a.a=b};Ja.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new ua(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);f.google_js_errors=f.google_js_errors||[];f.google_js_errors.push(b);f.error_rep_loaded||(b=f.document,a=b.createElement("script"),da(a,ha(f.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),f.error_rep_loaded=!0);return!1};var La=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(d){if(!c.call(a,420,d,.01,void 0,"gpt_exception"))throw d;}};var Ma=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];ba(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Na=["21061818","21061819","21061820"],Oa=["21060622"],Pa=["21061212","21061213","21061214","21061277"];var Qa=[[null,null,2,[null,null,"1-0-23"]],[7,null,null,[1]]];var Ra={3:[[50,[[21061799],[21061800],[21061801]]],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[10,[[21060132],[21060133,[[2,null,null,[1]]]]]],[1,[[22321847],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]]]],[null,[[21061902],[21061901],[21061900]]],[100,[[21061811],[21061812,[[3,null,null,[1]]]]]],[500,[[21061845],[21061846,[[9,null,null,[1]]]]],[4,null,2]],[null,[[21061929,[[null,null,2,[null,null,"1-0-23"]]]],[21061928,[[null,null,null,[null,null,null,["v","1-0-23"]],null,1]]]]],[10,[[21061870],[21061871,[[4,null,null,[1]]]]]],[1E3,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]]],[10,[[21061803],[21061804]]]]};x("partner.googleadservices.com");var U=x("www.googletagservices.com"),V=!1,W=!1,X="",Y="",Sa=I(46)&&!I(6);X=Sa?"http:":"https:";Y=I(Sa?2:3);var Z=function(a,b){if(null===L){L="";try{var c="";try{c=f.top.location.hash}catch(e){c=f.location.hash}if(c){var d=c.match(/\bdeid=([\d,]+)/);L=d?d[1]:""}}catch(e){}}if(c=(c=L)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{b=a.length*b;if(!ka()&&(c=Math.random(),c<b)){c=ja();a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};(function(a){var b=new Ja;Ka(b,function(a){a.methodId=420});La(b,function(){var b=a,d=E(),e=d.fifWin||window;b=b||e.document;var g=[],h=E();h.hasOwnProperty("cmd")||(h.cmd=g);if(d.evalScripts)d.evalScripts();else{(g=Z(Pa,I(178)))&&I(152).push(g);switch(g){case "21061213":W=!0;break;case "21061214":V=!0;break;case "21061277":V=W=!0}g=I(138)||Z(Oa,0)||Z(Na,I(137))||Z(["21061149"],I(167));h=b;var p=Z(["21061590","21061591"],.001);I(219).length||J(219,Qa);a:{var u=I(210);for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)){var l=!1;break a}l=!0}l&&J(210,Ra);p&&("21061591"==p?(J(173,U),J(174,U)):J(163,p),I(152).push(p));-1!=r.indexOf("Mobile")||J(194,I(225));if(l=I(150))R(),N(l)&&(Q[1]=l);g&&I(152).push(g);if(!(l=h.currentScript))a:{if(h=h.scripts)for(l=0;l<h.length;l++)if(p=h[l],-1<p.src.indexOf(U+"/tag/js/gpt")){l=p;break a}l=null}J(172,l);e.PerformanceObserver&&e.PerformanceLongTaskTiming&&Ma(e);h=e;h=void 0===h?f:h;if(h=(h=h.performance)&&h.now?h.now():null)h={label:"1",type:9,value:h},e=e.google_js_reporting_queue=e.google_js_reporting_queue||[],1024>e.length&&e.push(h);if(e=I(76))var v=e;else I(131)&&(v="200"),e=X+"//"+Y+"/gpt/pubads_impl_"+(v||"199")+".js",J(76,e),v=e;e=b.currentScript;if(!("complete"==b.readyState||"loaded"==b.readyState||e&&e.async)){e="gpt-impl-"+Math.random();try{h='<script id="'+e+'" src="'+v+'">\x3c/script>',V&&wa()&&(h+='<link rel="preconnect" href="'+X+"//"+Y+'">'),b.write(h)}catch(Ta){}b.getElementById(e)&&(d._loadStarted_=!0,J(220,!1),"21061818"!=g&&"21060622"!=g&&"21061149"!=g||Ia())}d._loadStarted_||("21061818"!=g&&"21060622"!=g&&"21061149"!=g||Ha(),W&&M(b,v,"preload","script"),g=b.createElement("script"),g.src=v,g.async=!0,(b.head||b.body||b.documentElement).appendChild(g),V&&wa()&&M(b,X+"//"+Y,"preconnect"),J(220,!0),d._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
