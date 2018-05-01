/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(bc,aD){var aW=[];
var m=bc.document;
var X=aW.slice;
var aH=aW.concat;
var w=aW.push;
var b2=aW.indexOf;
var ak={};
var x=ak.toString;
var R=ak.hasOwnProperty;
var F={};
var ap="1.12.4",bP=function(cd,ce){return new bP.fn.init(cd,ce)
},G=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bZ=/^-ms-/,a3=/-([\da-z])/gi,W=function(cd,ce){return ce.toUpperCase()
};
bP.fn=bP.prototype={jquery:ap,constructor:bP,selector:"",length:0,toArray:function(){return X.call(this)
},get:function(cd){return cd!=null?(cd<0?this[cd+this.length]:this[cd]):X.call(this)
},pushStack:function(cd){var ce=bP.merge(this.constructor(),cd);
ce.prevObject=this;
ce.context=this.context;
return ce
},each:function(cd){return bP.each(this,cd)
},map:function(cd){return this.pushStack(bP.map(this,function(cf,ce){return cd.call(cf,ce,cf)
}))
},slice:function(){return this.pushStack(X.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(cf){var cd=this.length,ce=+cf+(cf<0?cd:0);
return this.pushStack(ce>=0&&ce<cd?[this[ce]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:w,sort:aW.sort,splice:aW.splice};
bP.extend=bP.fn.extend=function(){var cd,cj,ce,cf,cm,ck,ci=arguments[0]||{},ch=1,cg=arguments.length,cl=false;
if(typeof ci==="boolean"){cl=ci;
ci=arguments[ch]||{};
ch++
}if(typeof ci!=="object"&&!bP.isFunction(ci)){ci={}
}if(ch===cg){ci=this;
ch--
}for(;
ch<cg;
ch++){if((cm=arguments[ch])!=null){for(cf in cm){cd=ci[cf];
ce=cm[cf];
if(ci===ce){continue
}if(cl&&ce&&(bP.isPlainObject(ce)||(cj=bP.isArray(ce)))){if(cj){cj=false;
ck=cd&&bP.isArray(cd)?cd:[]
}else{ck=cd&&bP.isPlainObject(cd)?cd:{}
}ci[cf]=bP.extend(cl,ck,ce)
}else{if(ce!==undefined){ci[cf]=ce
}}}}}return ci
};
bP.extend({expando:"jQuery"+(ap+Math.random()).replace(/\D/g,""),isReady:true,error:function(cd){throw new Error(cd)
},noop:function(){},isFunction:function(cd){return bP.type(cd)==="function"
},isArray:Array.isArray||function(cd){return bP.type(cd)==="array"
},isWindow:function(cd){return cd!=null&&cd==cd.window
},isNumeric:function(ce){var cd=ce&&ce.toString();
return !bP.isArray(ce)&&(cd-parseFloat(cd)+1)>=0
},isEmptyObject:function(ce){var cd;
for(cd in ce){return false
}return true
},isPlainObject:function(cf){var cd;
if(!cf||bP.type(cf)!=="object"||cf.nodeType||bP.isWindow(cf)){return false
}try{if(cf.constructor&&!R.call(cf,"constructor")&&!R.call(cf.constructor.prototype,"isPrototypeOf")){return false
}}catch(ce){return false
}if(!F.ownFirst){for(cd in cf){return R.call(cf,cd)
}}for(cd in cf){}return cd===undefined||R.call(cf,cd)
},type:function(cd){if(cd==null){return cd+""
}return typeof cd==="object"||typeof cd==="function"?ak[x.call(cd)]||"object":typeof cd
},globalEval:function(cd){if(cd&&bP.trim(cd)){(bc.execScript||function(ce){bc["eval"].call(bc,ce)
})(cd)
}},camelCase:function(cd){return cd.replace(bZ,"ms-").replace(a3,W)
},nodeName:function(ce,cd){return ce.nodeName&&ce.nodeName.toLowerCase()===cd.toLowerCase()
},each:function(cf,cg){var ce,cd=0;
if(aB(cf)){ce=cf.length;
for(;
cd<ce;
cd++){if(cg.call(cf[cd],cd,cf[cd])===false){break
}}}else{for(cd in cf){if(cg.call(cf[cd],cd,cf[cd])===false){break
}}}return cf
},trim:function(cd){return cd==null?"":(cd+"").replace(G,"")
},makeArray:function(cd,cf){var ce=cf||[];
if(cd!=null){if(aB(Object(cd))){bP.merge(ce,typeof cd==="string"?[cd]:cd)
}else{w.call(ce,cd)
}}return ce
},inArray:function(cg,ce,cf){var cd;
if(ce){if(b2){return b2.call(ce,cg,cf)
}cd=ce.length;
cf=cf?cf<0?Math.max(0,cd+cf):cf:0;
for(;
cf<cd;
cf++){if(cf in ce&&ce[cf]===cg){return cf
}}}return -1
},merge:function(ch,cf){var cd=+cf.length,ce=0,cg=ch.length;
while(ce<cd){ch[cg++]=cf[ce++]
}if(cd!==cd){while(cf[ce]!==undefined){ch[cg++]=cf[ce++]
}}ch.length=cg;
return ch
},grep:function(cd,ck,ch){var cj,cg=[],ce=0,cf=cd.length,ci=!ch;
for(;
ce<cf;
ce++){cj=!ck(cd[ce],ce);
if(cj!==ci){cg.push(cd[ce])
}}return cg
},map:function(ce,cj,cd){var ch,ci,cg=0,cf=[];
if(aB(ce)){ch=ce.length;
for(;
cg<ch;
cg++){ci=cj(ce[cg],cg,cd);
if(ci!=null){cf.push(ci)
}}}else{for(cg in ce){ci=cj(ce[cg],cg,cd);
if(ci!=null){cf.push(ci)
}}}return aH.apply([],cf)
},guid:1,proxy:function(ch,cg){var cd,cf,ce;
if(typeof cg==="string"){ce=ch[cg];
cg=ch;
ch=ce
}if(!bP.isFunction(ch)){return undefined
}cd=X.call(arguments,2);
cf=function(){return ch.apply(cg||this,cd.concat(X.call(arguments)))
};
cf.guid=ch.guid=ch.guid||bP.guid++;
return cf
},now:function(){return +(new Date())
},support:F});
if(typeof Symbol==="function"){bP.fn[Symbol.iterator]=aW[Symbol.iterator]
}bP.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(ce,cd){ak["[object "+cd+"]"]=cd.toLowerCase()
});
function aB(cf){var ce=!!cf&&"length" in cf&&cf.length,cd=bP.type(cf);
if(cd==="function"||bP.isWindow(cf)){return false
}return cd==="array"||ce===0||typeof ce==="number"&&ce>0&&(ce-1) in cf
}var l=
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function(dk){var cE,dn,ct,cN,cQ,cn,c2,dm,dt,cO,c3,c5,cI,cu,de,c9,dl,ck,cL,dg="sizzle"+1*new Date(),cP=dk.document,dp=0,da=0,cf=cG(),df=cG(),cM=cG(),cK=function(dv,du){if(dv===du){c3=true
}return 0
},cW=1<<31,cU=({}).hasOwnProperty,di=[],dj=di.pop,cS=di.push,cd=di.push,cs=di.slice,cj=function(dx,dw){var dv=0,du=dx.length;
for(;
dv<du;
dv++){if(dx[dv]===dw){return dv
}}return -1
},ce="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",cv="[\\x20\\t\\r\\n\\f]",cR="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",dc="\\["+cv+"*("+cR+")(?:"+cv+"*([*^$|!~]?=)"+cv+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+cR+"))|)"+cv+"*\\]",cq=":("+cR+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+dc+")*)|.*)\\)|)",cA=new RegExp(cv+"+","g"),cx=new RegExp("^"+cv+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cv+"+$","g"),cB=new RegExp("^"+cv+"*,"+cv+"*"),cH=new RegExp("^"+cv+"*([>+~]|"+cv+")"+cv+"*"),cz=new RegExp("="+cv+"*([^\\]'\"]*?)"+cv+"*\\]","g"),cY=new RegExp(cq),c0=new RegExp("^"+cR+"$"),c8={ID:new RegExp("^#("+cR+")"),CLASS:new RegExp("^\\.("+cR+")"),TAG:new RegExp("^("+cR+"|[*])"),ATTR:new RegExp("^"+dc),PSEUDO:new RegExp("^"+cq),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cv+"*(even|odd|(([+-]|)(\\d*)n|)"+cv+"*(?:([+-]|)"+cv+"*(\\d+)|))"+cv+"*\\)|)","i"),bool:new RegExp("^(?:"+ce+")$","i"),needsContext:new RegExp("^"+cv+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cv+"*((?:-\\d)?\\d*)"+cv+"*\\)|)(?=[^-]|$)","i")},ci=/^(?:input|select|textarea|button)$/i,cr=/^h\d$/i,cV=/^[^{]+\{\s*\[native \w/,cX=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,c7=/[+~]/,cT=/'|\\/g,cy=new RegExp("\\\\([\\da-f]{1,6}"+cv+"?|("+cv+")|.)","ig"),db=function(du,dx,dv){var dw="0x"+dx-65536;
return dw!==dw||dv?dx:dw<0?String.fromCharCode(dw+65536):String.fromCharCode(dw>>10|55296,dw&1023|56320)
},ds=function(){c5()
};
try{cd.apply((di=cs.call(cP.childNodes)),cP.childNodes);
di[cP.childNodes.length].nodeType
}catch(cJ){cd={apply:di.length?function(dv,du){cS.apply(dv,cs.call(du))
}:function(dx,dw){var du=dx.length,dv=0;
while((dx[du++]=dw[dv++])){}dx.length=du-1
}}
}function cC(dB,dv,dE,dH){var dz,dF,dy,du,dI,dG,dx,dC,dw=dv&&dv.ownerDocument,dD=dv?dv.nodeType:9;
dE=dE||[];
if(typeof dB!=="string"||!dB||dD!==1&&dD!==9&&dD!==11){return dE
}if(!dH){if((dv?dv.ownerDocument||dv:cP)!==cI){c5(dv)
}dv=dv||cI;
if(de){if(dD!==11&&(dG=cX.exec(dB))){if((dz=dG[1])){if(dD===9){if((dy=dv.getElementById(dz))){if(dy.id===dz){dE.push(dy);
return dE
}}else{return dE
}}else{if(dw&&(dy=dw.getElementById(dz))&&cL(dv,dy)&&dy.id===dz){dE.push(dy);
return dE
}}}else{if(dG[2]){cd.apply(dE,dv.getElementsByTagName(dB));
return dE
}else{if((dz=dG[3])&&dn.getElementsByClassName&&dv.getElementsByClassName){cd.apply(dE,dv.getElementsByClassName(dz));
return dE
}}}}if(dn.qsa&&!cM[dB+" "]&&(!c9||!c9.test(dB))){if(dD!==1){dw=dv;
dC=dB
}else{if(dv.nodeName.toLowerCase()!=="object"){if((du=dv.getAttribute("id"))){du=du.replace(cT,"\\$&")
}else{dv.setAttribute("id",(du=dg))
}dx=cn(dB);
dF=dx.length;
dI=c0.test(du)?"#"+du:"[id='"+du+"']";
while(dF--){dx[dF]=dI+" "+co(dx[dF])
}dC=dx.join(",");
dw=c7.test(dB)&&cZ(dv.parentNode)||dv
}}if(dC){try{cd.apply(dE,dw.querySelectorAll(dC));
return dE
}catch(dA){}finally{if(du===dg){dv.removeAttribute("id")
}}}}}}return dm(dB.replace(cx,"$1"),dv,dE,dH)
}function cG(){var dv=[];
function du(dw,dx){if(dv.push(dw+" ")>ct.cacheLength){delete du[dv.shift()]
}return(du[dw+" "]=dx)
}return du
}function cp(du){du[dg]=true;
return du
}function cl(du){var dw=cI.createElement("div");
try{return !!du(dw)
}catch(dv){return false
}finally{if(dw.parentNode){dw.parentNode.removeChild(dw)
}dw=null
}}function dq(dv,dx){var du=dv.split("|"),dw=du.length;
while(dw--){ct.attrHandle[du[dw]]=dx
}}function cg(dv,du){var dx=du&&dv,dw=dx&&dv.nodeType===1&&du.nodeType===1&&(~du.sourceIndex||cW)-(~dv.sourceIndex||cW);
if(dw){return dw
}if(dx){while((dx=dx.nextSibling)){if(dx===du){return -1
}}}return dv?1:-1
}function cD(du){return function(dw){var dv=dw.nodeName.toLowerCase();
return dv==="input"&&dw.type===du
}
}function ch(du){return function(dw){var dv=dw.nodeName.toLowerCase();
return(dv==="input"||dv==="button")&&dw.type===du
}
}function dd(du){return cp(function(dv){dv=+dv;
return cp(function(dw,dA){var dy,dx=du([],dw.length,dv),dz=dx.length;
while(dz--){if(dw[(dy=dx[dz])]){dw[dy]=!(dA[dy]=dw[dy])
}}})
})
}function cZ(du){return du&&typeof du.getElementsByTagName!=="undefined"&&du
}dn=cC.support={};
cQ=cC.isXML=function(du){var dv=du&&(du.ownerDocument||du).documentElement;
return dv?dv.nodeName!=="HTML":false
};
c5=cC.setDocument=function(dw){var du,dv,dx=dw?dw.ownerDocument||dw:cP;
if(dx===cI||dx.nodeType!==9||!dx.documentElement){return cI
}cI=dx;
cu=cI.documentElement;
de=!cQ(cI);
if((dv=cI.defaultView)&&dv.top!==dv){if(dv.addEventListener){dv.addEventListener("unload",ds,false)
}else{if(dv.attachEvent){dv.attachEvent("onunload",ds)
}}}dn.attributes=cl(function(dy){dy.className="i";
return !dy.getAttribute("className")
});
dn.getElementsByTagName=cl(function(dy){dy.appendChild(cI.createComment(""));
return !dy.getElementsByTagName("*").length
});
dn.getElementsByClassName=cV.test(cI.getElementsByClassName);
dn.getById=cl(function(dy){cu.appendChild(dy).id=dg;
return !cI.getElementsByName||!cI.getElementsByName(dg).length
});
if(dn.getById){ct.find.ID=function(dA,dz){if(typeof dz.getElementById!=="undefined"&&de){var dy=dz.getElementById(dA);
return dy?[dy]:[]
}};
ct.filter.ID=function(dz){var dy=dz.replace(cy,db);
return function(dA){return dA.getAttribute("id")===dy
}
}
}else{delete ct.find.ID;
ct.filter.ID=function(dz){var dy=dz.replace(cy,db);
return function(dB){var dA=typeof dB.getAttributeNode!=="undefined"&&dB.getAttributeNode("id");
return dA&&dA.value===dy
}
}
}ct.find.TAG=dn.getElementsByTagName?function(dy,dz){if(typeof dz.getElementsByTagName!=="undefined"){return dz.getElementsByTagName(dy)
}else{if(dn.qsa){return dz.querySelectorAll(dy)
}}}:function(dy,dC){var dD,dB=[],dA=0,dz=dC.getElementsByTagName(dy);
if(dy==="*"){while((dD=dz[dA++])){if(dD.nodeType===1){dB.push(dD)
}}return dB
}return dz
};
ct.find.CLASS=dn.getElementsByClassName&&function(dz,dy){if(typeof dy.getElementsByClassName!=="undefined"&&de){return dy.getElementsByClassName(dz)
}};
dl=[];
c9=[];
if((dn.qsa=cV.test(cI.querySelectorAll))){cl(function(dy){cu.appendChild(dy).innerHTML="<a id='"+dg+"'></a><select id='"+dg+"-\r\\' msallowcapture=''><option selected=''></option></select>";
if(dy.querySelectorAll("[msallowcapture^='']").length){c9.push("[*^$]="+cv+"*(?:''|\"\")")
}if(!dy.querySelectorAll("[selected]").length){c9.push("\\["+cv+"*(?:value|"+ce+")")
}if(!dy.querySelectorAll("[id~="+dg+"-]").length){c9.push("~=")
}if(!dy.querySelectorAll(":checked").length){c9.push(":checked")
}if(!dy.querySelectorAll("a#"+dg+"+*").length){c9.push(".#.+[+~]")
}});
cl(function(dz){var dy=cI.createElement("input");
dy.setAttribute("type","hidden");
dz.appendChild(dy).setAttribute("name","D");
if(dz.querySelectorAll("[name=d]").length){c9.push("name"+cv+"*[*^$|!~]?=")
}if(!dz.querySelectorAll(":enabled").length){c9.push(":enabled",":disabled")
}dz.querySelectorAll("*,:x");
c9.push(",.*:")
})
}if((dn.matchesSelector=cV.test((ck=cu.matches||cu.webkitMatchesSelector||cu.mozMatchesSelector||cu.oMatchesSelector||cu.msMatchesSelector)))){cl(function(dy){dn.disconnectedMatch=ck.call(dy,"div");
ck.call(dy,"[s!='']:x");
dl.push("!=",cq)
})
}c9=c9.length&&new RegExp(c9.join("|"));
dl=dl.length&&new RegExp(dl.join("|"));
du=cV.test(cu.compareDocumentPosition);
cL=du||cV.test(cu.contains)?function(dz,dy){var dB=dz.nodeType===9?dz.documentElement:dz,dA=dy&&dy.parentNode;
return dz===dA||!!(dA&&dA.nodeType===1&&(dB.contains?dB.contains(dA):dz.compareDocumentPosition&&dz.compareDocumentPosition(dA)&16))
}:function(dz,dy){if(dy){while((dy=dy.parentNode)){if(dy===dz){return true
}}}return false
};
cK=du?function(dz,dy){if(dz===dy){c3=true;
return 0
}var dA=!dz.compareDocumentPosition-!dy.compareDocumentPosition;
if(dA){return dA
}dA=(dz.ownerDocument||dz)===(dy.ownerDocument||dy)?dz.compareDocumentPosition(dy):1;
if(dA&1||(!dn.sortDetached&&dy.compareDocumentPosition(dz)===dA)){if(dz===cI||dz.ownerDocument===cP&&cL(cP,dz)){return -1
}if(dy===cI||dy.ownerDocument===cP&&cL(cP,dy)){return 1
}return cO?(cj(cO,dz)-cj(cO,dy)):0
}return dA&4?-1:1
}:function(dz,dy){if(dz===dy){c3=true;
return 0
}var dF,dC=0,dE=dz.parentNode,dB=dy.parentNode,dA=[dz],dD=[dy];
if(!dE||!dB){return dz===cI?-1:dy===cI?1:dE?-1:dB?1:cO?(cj(cO,dz)-cj(cO,dy)):0
}else{if(dE===dB){return cg(dz,dy)
}}dF=dz;
while((dF=dF.parentNode)){dA.unshift(dF)
}dF=dy;
while((dF=dF.parentNode)){dD.unshift(dF)
}while(dA[dC]===dD[dC]){dC++
}return dC?cg(dA[dC],dD[dC]):dA[dC]===cP?-1:dD[dC]===cP?1:0
};
return cI
};
cC.matches=function(dv,du){return cC(dv,null,null,du)
};
cC.matchesSelector=function(dv,dx){if((dv.ownerDocument||dv)!==cI){c5(dv)
}dx=dx.replace(cz,"='$1']");
if(dn.matchesSelector&&de&&!cM[dx+" "]&&(!dl||!dl.test(dx))&&(!c9||!c9.test(dx))){try{var du=ck.call(dv,dx);
if(du||dn.disconnectedMatch||dv.document&&dv.document.nodeType!==11){return du
}}catch(dw){}}return cC(dx,cI,null,[dv]).length>0
};
cC.contains=function(du,dv){if((du.ownerDocument||du)!==cI){c5(du)
}return cL(du,dv)
};
cC.attr=function(dw,du){if((dw.ownerDocument||dw)!==cI){c5(dw)
}var dv=ct.attrHandle[du.toLowerCase()],dx=dv&&cU.call(ct.attrHandle,du.toLowerCase())?dv(dw,du,!de):undefined;
return dx!==undefined?dx:dn.attributes||!de?dw.getAttribute(du):(dx=dw.getAttributeNode(du))&&dx.specified?dx.value:null
};
cC.error=function(du){throw new Error("Syntax error, unrecognized expression: "+du)
};
cC.uniqueSort=function(dw){var dx,dy=[],du=0,dv=0;
c3=!dn.detectDuplicates;
cO=!dn.sortStable&&dw.slice(0);
dw.sort(cK);
if(c3){while((dx=dw[dv++])){if(dx===dw[dv]){du=dy.push(dv)
}}while(du--){dw.splice(dy[du],1)
}}cO=null;
return dw
};
cN=cC.getText=function(dy){var dx,dv="",dw=0,du=dy.nodeType;
if(!du){while((dx=dy[dw++])){dv+=cN(dx)
}}else{if(du===1||du===9||du===11){if(typeof dy.textContent==="string"){return dy.textContent
}else{for(dy=dy.firstChild;
dy;
dy=dy.nextSibling){dv+=cN(dy)
}}}else{if(du===3||du===4){return dy.nodeValue
}}}return dv
};
ct=cC.selectors={cacheLength:50,createPseudo:cp,match:c8,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(du){du[1]=du[1].replace(cy,db);
du[3]=(du[3]||du[4]||du[5]||"").replace(cy,db);
if(du[2]==="~="){du[3]=" "+du[3]+" "
}return du.slice(0,4)
},CHILD:function(du){du[1]=du[1].toLowerCase();
if(du[1].slice(0,3)==="nth"){if(!du[3]){cC.error(du[0])
}du[4]=+(du[4]?du[5]+(du[6]||1):2*(du[3]==="even"||du[3]==="odd"));
du[5]=+((du[7]+du[8])||du[3]==="odd")
}else{if(du[3]){cC.error(du[0])
}}return du
},PSEUDO:function(dv){var du,dw=!dv[6]&&dv[2];
if(c8.CHILD.test(dv[0])){return null
}if(dv[3]){dv[2]=dv[4]||dv[5]||""
}else{if(dw&&cY.test(dw)&&(du=cn(dw,true))&&(du=dw.indexOf(")",dw.length-du)-dw.length)){dv[0]=dv[0].slice(0,du);
dv[2]=dw.slice(0,du)
}}return dv.slice(0,3)
}},filter:{TAG:function(dv){var du=dv.replace(cy,db).toLowerCase();
return dv==="*"?function(){return true
}:function(dw){return dw.nodeName&&dw.nodeName.toLowerCase()===du
}
},CLASS:function(du){var dv=cf[du+" "];
return dv||(dv=new RegExp("(^|"+cv+")"+du+"("+cv+"|$)"))&&cf(du,function(dw){return dv.test(typeof dw.className==="string"&&dw.className||typeof dw.getAttribute!=="undefined"&&dw.getAttribute("class")||"")
})
},ATTR:function(dw,dv,du){return function(dy){var dx=cC.attr(dy,dw);
if(dx==null){return dv==="!="
}if(!dv){return true
}dx+="";
return dv==="="?dx===du:dv==="!="?dx!==du:dv==="^="?du&&dx.indexOf(du)===0:dv==="*="?du&&dx.indexOf(du)>-1:dv==="$="?du&&dx.slice(-du.length)===du:dv==="~="?(" "+dx.replace(cA," ")+" ").indexOf(du)>-1:dv==="|="?dx===du||dx.slice(0,du.length+1)===du+"-":false
}
},CHILD:function(dv,dy,dx,dz,dw){var dB=dv.slice(0,3)!=="nth",du=dv.slice(-4)!=="last",dA=dy==="of-type";
return dz===1&&dw===0?function(dC){return !!dC.parentNode
}:function(dJ,dH,dM){var dC,dF,dP,dK,dL,dG,dI=dB!==du?"nextSibling":"previousSibling",dO=dJ.parentNode,dE=dA&&dJ.nodeName.toLowerCase(),dD=!dM&&!dA,dN=false;
if(dO){if(dB){while(dI){dK=dJ;
while((dK=dK[dI])){if(dA?dK.nodeName.toLowerCase()===dE:dK.nodeType===1){return false
}}dG=dI=dv==="only"&&!dG&&"nextSibling"
}return true
}dG=[du?dO.firstChild:dO.lastChild];
if(du&&dD){dK=dO;
dP=dK[dg]||(dK[dg]={});
dF=dP[dK.uniqueID]||(dP[dK.uniqueID]={});
dC=dF[dv]||[];
dL=dC[0]===dp&&dC[1];
dN=dL&&dC[2];
dK=dL&&dO.childNodes[dL];
while((dK=++dL&&dK&&dK[dI]||(dN=dL=0)||dG.pop())){if(dK.nodeType===1&&++dN&&dK===dJ){dF[dv]=[dp,dL,dN];
break
}}}else{if(dD){dK=dJ;
dP=dK[dg]||(dK[dg]={});
dF=dP[dK.uniqueID]||(dP[dK.uniqueID]={});
dC=dF[dv]||[];
dL=dC[0]===dp&&dC[1];
dN=dL
}if(dN===false){while((dK=++dL&&dK&&dK[dI]||(dN=dL=0)||dG.pop())){if((dA?dK.nodeName.toLowerCase()===dE:dK.nodeType===1)&&++dN){if(dD){dP=dK[dg]||(dK[dg]={});
dF=dP[dK.uniqueID]||(dP[dK.uniqueID]={});
dF[dv]=[dp,dN]
}if(dK===dJ){break
}}}}}dN-=dw;
return dN===dz||(dN%dz===0&&dN/dz>=0)
}}
},PSEUDO:function(dx,dw){var du,dv=ct.pseudos[dx]||ct.setFilters[dx.toLowerCase()]||cC.error("unsupported pseudo: "+dx);
if(dv[dg]){return dv(dw)
}if(dv.length>1){du=[dx,dx,"",dw];
return ct.setFilters.hasOwnProperty(dx.toLowerCase())?cp(function(dA,dC){var dz,dy=dv(dA,dw),dB=dy.length;
while(dB--){dz=cj(dA,dy[dB]);
dA[dz]=!(dC[dz]=dy[dB])
}}):function(dy){return dv(dy,0,du)
}
}return dv
}},pseudos:{not:cp(function(du){var dv=[],dw=[],dx=c2(du.replace(cx,"$1"));
return dx[dg]?cp(function(dz,dE,dC,dA){var dD,dy=dx(dz,null,dA,[]),dB=dz.length;
while(dB--){if((dD=dy[dB])){dz[dB]=!(dE[dB]=dD)
}}}):function(dA,dz,dy){dv[0]=dA;
dx(dv,null,dy,dw);
dv[0]=null;
return !dw.pop()
}
}),has:cp(function(du){return function(dv){return cC(du,dv).length>0
}
}),contains:cp(function(du){du=du.replace(cy,db);
return function(dv){return(dv.textContent||dv.innerText||cN(dv)).indexOf(du)>-1
}
}),lang:cp(function(du){if(!c0.test(du||"")){cC.error("unsupported lang: "+du)
}du=du.replace(cy,db).toLowerCase();
return function(dw){var dv;
do{if((dv=de?dw.lang:dw.getAttribute("xml:lang")||dw.getAttribute("lang"))){dv=dv.toLowerCase();
return dv===du||dv.indexOf(du+"-")===0
}}while((dw=dw.parentNode)&&dw.nodeType===1);
return false
}
}),target:function(du){var dv=dk.location&&dk.location.hash;
return dv&&dv.slice(1)===du.id
},root:function(du){return du===cu
},focus:function(du){return du===cI.activeElement&&(!cI.hasFocus||cI.hasFocus())&&!!(du.type||du.href||~du.tabIndex)
},enabled:function(du){return du.disabled===false
},disabled:function(du){return du.disabled===true
},checked:function(du){var dv=du.nodeName.toLowerCase();
return(dv==="input"&&!!du.checked)||(dv==="option"&&!!du.selected)
},selected:function(du){if(du.parentNode){du.parentNode.selectedIndex
}return du.selected===true
},empty:function(du){for(du=du.firstChild;
du;
du=du.nextSibling){if(du.nodeType<6){return false
}}return true
},parent:function(du){return !ct.pseudos.empty(du)
},header:function(du){return cr.test(du.nodeName)
},input:function(du){return ci.test(du.nodeName)
},button:function(dv){var du=dv.nodeName.toLowerCase();
return du==="input"&&dv.type==="button"||du==="button"
},text:function(dv){var du;
return dv.nodeName.toLowerCase()==="input"&&dv.type==="text"&&((du=dv.getAttribute("type"))==null||du.toLowerCase()==="text")
},first:dd(function(){return[0]
}),last:dd(function(du,dv){return[dv-1]
}),eq:dd(function(du,dw,dv){return[dv<0?dv+dw:dv]
}),even:dd(function(du,dw){var dv=0;
for(;
dv<dw;
dv+=2){du.push(dv)
}return du
}),odd:dd(function(du,dw){var dv=1;
for(;
dv<dw;
dv+=2){du.push(dv)
}return du
}),lt:dd(function(du,dx,dw){var dv=dw<0?dw+dx:dw;
for(;
--dv>=0;
){du.push(dv)
}return du
}),gt:dd(function(du,dx,dw){var dv=dw<0?dw+dx:dw;
for(;
++dv<dx;
){du.push(dv)
}return du
})}};
ct.pseudos.nth=ct.pseudos.eq;
for(cE in {radio:true,checkbox:true,file:true,password:true,image:true}){ct.pseudos[cE]=cD(cE)
}for(cE in {submit:true,reset:true}){ct.pseudos[cE]=ch(cE)
}function c1(){}c1.prototype=ct.filters=ct.pseudos;
ct.setFilters=new c1();
cn=cC.tokenize=function(dy,dD){var dv,dz,dB,dC,dA,dw,du,dx=df[dy+" "];
if(dx){return dD?0:dx.slice(0)
}dA=dy;
dw=[];
du=ct.preFilter;
while(dA){if(!dv||(dz=cB.exec(dA))){if(dz){dA=dA.slice(dz[0].length)||dA
}dw.push((dB=[]))
}dv=false;
if((dz=cH.exec(dA))){dv=dz.shift();
dB.push({value:dv,type:dz[0].replace(cx," ")});
dA=dA.slice(dv.length)
}for(dC in ct.filter){if((dz=c8[dC].exec(dA))&&(!du[dC]||(dz=du[dC](dz)))){dv=dz.shift();
dB.push({value:dv,type:dC,matches:dz});
dA=dA.slice(dv.length)
}}if(!dv){break
}}return dD?dA.length:dA?cC.error(dy):df(dy,dw).slice(0)
};
function co(dx){var dw=0,dv=dx.length,du="";
for(;
dw<dv;
dw++){du+=dx[dw].value
}return du
}function cw(dy,dw,dx){var du=dw.dir,dz=dx&&du==="parentNode",dv=da++;
return dw.first?function(dC,dB,dA){while((dC=dC[du])){if(dC.nodeType===1||dz){return dy(dC,dB,dA)
}}}:function(dF,dD,dC){var dG,dA,dE,dB=[dp,dv];
if(dC){while((dF=dF[du])){if(dF.nodeType===1||dz){if(dy(dF,dD,dC)){return true
}}}}else{while((dF=dF[du])){if(dF.nodeType===1||dz){dE=dF[dg]||(dF[dg]={});
dA=dE[dF.uniqueID]||(dE[dF.uniqueID]={});
if((dG=dA[du])&&dG[0]===dp&&dG[1]===dv){return(dB[2]=dG[2])
}else{dA[du]=dB;
if((dB[2]=dy(dF,dD,dC))){return true
}}}}}}
}function dr(du){return du.length>1?function(dy,dx,dv){var dw=du.length;
while(dw--){if(!du[dw](dy,dx,dv)){return false
}}return true
}:du[0]
}function cF(dv,dy,dx){var dw=0,du=dy.length;
for(;
dw<du;
dw++){cC(dv,dy[dw],dx)
}return dx
}function c6(du,dv,dw,dx,dA){var dy,dD=[],dz=0,dB=du.length,dC=dv!=null;
for(;
dz<dB;
dz++){if((dy=du[dz])){if(!dw||dw(dy,dx,dA)){dD.push(dy);
if(dC){dv.push(dz)
}}}}return dD
}function cm(dw,dv,dy,dx,dz,du){if(dx&&!dx[dg]){dx=cm(dx)
}if(dz&&!dz[dg]){dz=cm(dz,du)
}return cp(function(dK,dH,dC,dJ){var dM,dI,dE,dD=[],dL=[],dB=dH.length,dA=dK||cF(dv||"*",dC.nodeType?[dC]:dC,[]),dF=dw&&(dK||!dv)?c6(dA,dD,dw,dC,dJ):dA,dG=dy?dz||(dK?dw:dB||dx)?[]:dH:dF;
if(dy){dy(dF,dG,dC,dJ)
}if(dx){dM=c6(dG,dL);
dx(dM,[],dC,dJ);
dI=dM.length;
while(dI--){if((dE=dM[dI])){dG[dL[dI]]=!(dF[dL[dI]]=dE)
}}}if(dK){if(dz||dw){if(dz){dM=[];
dI=dG.length;
while(dI--){if((dE=dG[dI])){dM.push((dF[dI]=dE))
}}dz(null,(dG=[]),dM,dJ)
}dI=dG.length;
while(dI--){if((dE=dG[dI])&&(dM=dz?cj(dK,dE):dD[dI])>-1){dK[dM]=!(dH[dM]=dE)
}}}}else{dG=c6(dG===dH?dG.splice(dB,dG.length):dG);
if(dz){dz(null,dH,dG,dJ)
}else{cd.apply(dH,dG)
}}})
}function dh(dA){var dv,dy,dw,dz=dA.length,dD=ct.relative[dA[0].type],dE=dD||ct.relative[" "],dx=dD?1:0,dB=cw(function(dF){return dF===dv
},dE,true),dC=cw(function(dF){return cj(dv,dF)>-1
},dE,true),du=[function(dI,dH,dG){var dF=(!dD&&(dG||dH!==dt))||((dv=dH).nodeType?dB(dI,dH,dG):dC(dI,dH,dG));
dv=null;
return dF
}];
for(;
dx<dz;
dx++){if((dy=ct.relative[dA[dx].type])){du=[cw(dr(du),dy)]
}else{dy=ct.filter[dA[dx].type].apply(null,dA[dx].matches);
if(dy[dg]){dw=++dx;
for(;
dw<dz;
dw++){if(ct.relative[dA[dw].type]){break
}}return cm(dx>1&&dr(du),dx>1&&co(dA.slice(0,dx-1).concat({value:dA[dx-2].type===" "?"*":""})).replace(cx,"$1"),dy,dx<dw&&dh(dA.slice(dx,dw)),dw<dz&&dh((dA=dA.slice(dw))),dw<dz&&co(dA))
}du.push(dy)
}}return dr(du)
}function c4(dx,dw){var du=dw.length>0,dy=dx.length>0,dv=function(dI,dC,dH,dG,dL){var dD,dE,dJ,dN=0,dF="0",dz=dI&&[],dO=[],dM=dt,dB=dI||dy&&ct.find.TAG("*",dL),dA=(dp+=dM==null?1:Math.random()||0.1),dK=dB.length;
if(dL){dt=dC===cI||dC||dL
}for(;
dF!==dK&&(dD=dB[dF])!=null;
dF++){if(dy&&dD){dE=0;
if(!dC&&dD.ownerDocument!==cI){c5(dD);
dH=!de
}while((dJ=dx[dE++])){if(dJ(dD,dC||cI,dH)){dG.push(dD);
break
}}if(dL){dp=dA
}}if(du){if((dD=!dJ&&dD)){dN--
}if(dI){dz.push(dD)
}}}dN+=dF;
if(du&&dF!==dN){dE=0;
while((dJ=dw[dE++])){dJ(dz,dO,dC,dH)
}if(dI){if(dN>0){while(dF--){if(!(dz[dF]||dO[dF])){dO[dF]=dj.call(dG)
}}}dO=c6(dO)
}cd.apply(dG,dO);
if(dL&&!dI&&dO.length>0&&(dN+dw.length)>1){cC.uniqueSort(dG)
}}if(dL){dp=dA;
dt=dM
}return dz
};
return du?cp(dv):dv
}c2=cC.compile=function(du,dw){var dx,dv=[],dz=[],dy=cM[du+" "];
if(!dy){if(!dw){dw=cn(du)
}dx=dw.length;
while(dx--){dy=dh(dw[dx]);
if(dy[dg]){dv.push(dy)
}else{dz.push(dy)
}}dy=cM(du,c4(dz,dv));
dy.selector=du
}return dy
};
dm=cC.select=function(dw,du,dx,dA){var dy,dD,dv,dE,dB,dC=typeof dw==="function"&&dw,dz=!dA&&cn((dw=dC.selector||dw));
dx=dx||[];
if(dz.length===1){dD=dz[0]=dz[0].slice(0);
if(dD.length>2&&(dv=dD[0]).type==="ID"&&dn.getById&&du.nodeType===9&&de&&ct.relative[dD[1].type]){du=(ct.find.ID(dv.matches[0].replace(cy,db),du)||[])[0];
if(!du){return dx
}else{if(dC){du=du.parentNode
}}dw=dw.slice(dD.shift().value.length)
}dy=c8.needsContext.test(dw)?0:dD.length;
while(dy--){dv=dD[dy];
if(ct.relative[(dE=dv.type)]){break
}if((dB=ct.find[dE])){if((dA=dB(dv.matches[0].replace(cy,db),c7.test(dD[0].type)&&cZ(du.parentNode)||du))){dD.splice(dy,1);
dw=dA.length&&co(dD);
if(!dw){cd.apply(dx,dA);
return dx
}break
}}}}(dC||c2(dw,dz))(dA,du,!de,dx,!du||c7.test(dw)&&cZ(du.parentNode)||du);
return dx
};
dn.sortStable=dg.split("").sort(cK).join("")===dg;
dn.detectDuplicates=!!c3;
c5();
dn.sortDetached=cl(function(du){return du.compareDocumentPosition(cI.createElement("div"))&1
});
if(!cl(function(du){du.innerHTML="<a href='#'></a>";
return du.firstChild.getAttribute("href")==="#"
})){dq("type|href|height|width",function(dv,du,dw){if(!dw){return dv.getAttribute(du,du.toLowerCase()==="type"?1:2)
}})
}if(!dn.attributes||!cl(function(du){du.innerHTML="<input/>";
du.firstChild.setAttribute("value","");
return du.firstChild.getAttribute("value")===""
})){dq("value",function(dv,du,dw){if(!dw&&dv.nodeName.toLowerCase()==="input"){return dv.defaultValue
}})
}if(!cl(function(du){return du.getAttribute("disabled")==null
})){dq(ce,function(dv,du,dx){var dw;
if(!dx){return dv[du]===true?du.toLowerCase():(dw=dv.getAttributeNode(du))&&dw.specified?dw.value:null
}})
}return cC
})(bc);
bP.find=l;
bP.expr=l.selectors;
bP.expr[":"]=bP.expr.pseudos;
bP.uniqueSort=bP.unique=l.uniqueSort;
bP.text=l.getText;
bP.isXMLDoc=l.isXML;
bP.contains=l.contains;
var af=function(cg,ce,ch){var cd=[],cf=ch!==undefined;
while((cg=cg[ce])&&cg.nodeType!==9){if(cg.nodeType===1){if(cf&&bP(cg).is(ch)){break
}cd.push(cg)
}}return cd
};
var o=function(cf,ce){var cd=[];
for(;
cf;
cf=cf.nextSibling){if(cf.nodeType===1&&cf!==ce){cd.push(cf)
}}return cd
};
var z=bP.expr.match.needsContext;
var a=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
var aR=/^.[^:#\[\.,]*$/;
function aY(cf,cd,ce){if(bP.isFunction(cd)){return bP.grep(cf,function(ch,cg){return !!cd.call(ch,cg,ch)!==ce
})
}if(cd.nodeType){return bP.grep(cf,function(cg){return(cg===cd)!==ce
})
}if(typeof cd==="string"){if(aR.test(cd)){return bP.filter(cd,cf,ce)
}cd=bP.filter(cd,cf)
}return bP.grep(cf,function(cg){return(bP.inArray(cg,cd)>-1)!==ce
})
}bP.filter=function(cg,cd,cf){var ce=cd[0];
if(cf){cg=":not("+cg+")"
}return cd.length===1&&ce.nodeType===1?bP.find.matchesSelector(ce,cg)?[ce]:[]:bP.find.matches(cg,bP.grep(cd,function(ch){return ch.nodeType===1
}))
};
bP.fn.extend({find:function(ce){var ch,cg=[],cf=this,cd=cf.length;
if(typeof ce!=="string"){return this.pushStack(bP(ce).filter(function(){for(ch=0;
ch<cd;
ch++){if(bP.contains(cf[ch],this)){return true
}}}))
}for(ch=0;
ch<cd;
ch++){bP.find(ce,cf[ch],cg)
}cg=this.pushStack(cd>1?bP.unique(cg):cg);
cg.selector=this.selector?this.selector+" "+ce:ce;
return cg
},filter:function(cd){return this.pushStack(aY(this,cd||[],false))
},not:function(cd){return this.pushStack(aY(this,cd||[],true))
},is:function(cd){return !!aY(this,typeof cd==="string"&&z.test(cd)?bP(cd):cd||[],false).length
}});
var y,bA=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,b3=bP.fn.init=function(cd,cg,ce){var cf,ch;
if(!cd){return this
}ce=ce||y;
if(typeof cd==="string"){if(cd.charAt(0)==="<"&&cd.charAt(cd.length-1)===">"&&cd.length>=3){cf=[null,cd,null]
}else{cf=bA.exec(cd)
}if(cf&&(cf[1]||!cg)){if(cf[1]){cg=cg instanceof bP?cg[0]:cg;
bP.merge(this,bP.parseHTML(cf[1],cg&&cg.nodeType?cg.ownerDocument||cg:m,true));
if(a.test(cf[1])&&bP.isPlainObject(cg)){for(cf in cg){if(bP.isFunction(this[cf])){this[cf](cg[cf])
}else{this.attr(cf,cg[cf])
}}}return this
}else{ch=m.getElementById(cf[2]);
if(ch&&ch.parentNode){if(ch.id!==cf[2]){return y.find(cd)
}this.length=1;
this[0]=ch
}this.context=m;
this.selector=cd;
return this
}}else{if(!cg||cg.jquery){return(cg||ce).find(cd)
}else{return this.constructor(cg).find(cd)
}}}else{if(cd.nodeType){this.context=this[0]=cd;
this.length=1;
return this
}else{if(bP.isFunction(cd)){return typeof ce.ready!=="undefined"?ce.ready(cd):cd(bP)
}}}if(cd.selector!==undefined){this.selector=cd.selector;
this.context=cd.context
}return bP.makeArray(cd,this)
};
b3.prototype=bP.fn;
y=bP(m);
var bC=/^(?:parents|prev(?:Until|All))/,bG={children:true,contents:true,next:true,prev:true};
bP.fn.extend({has:function(cg){var cf,ce=bP(cg,this),cd=ce.length;
return this.filter(function(){for(cf=0;
cf<cd;
cf++){if(bP.contains(this,ce[cf])){return true
}}})
},closest:function(ch,cg){var ci,cf=0,ce=this.length,cd=[],cj=z.test(ch)||typeof ch!=="string"?bP(ch,cg||this.context):0;
for(;
cf<ce;
cf++){for(ci=this[cf];
ci&&ci!==cg;
ci=ci.parentNode){if(ci.nodeType<11&&(cj?cj.index(ci)>-1:ci.nodeType===1&&bP.find.matchesSelector(ci,ch))){cd.push(ci);
break
}}}return this.pushStack(cd.length>1?bP.uniqueSort(cd):cd)
},index:function(cd){if(!cd){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof cd==="string"){return bP.inArray(this[0],bP(cd))
}return bP.inArray(cd.jquery?cd[0]:cd,this)
},add:function(cd,ce){return this.pushStack(bP.uniqueSort(bP.merge(this.get(),bP(cd,ce))))
},addBack:function(cd){return this.add(cd==null?this.prevObject:this.prevObject.filter(cd))
}});
function a6(ce,cd){do{ce=ce[cd]
}while(ce&&ce.nodeType!==1);
return ce
}bP.each({parent:function(ce){var cd=ce.parentNode;
return cd&&cd.nodeType!==11?cd:null
},parents:function(cd){return af(cd,"parentNode")
},parentsUntil:function(ce,cd,cf){return af(ce,"parentNode",cf)
},next:function(cd){return a6(cd,"nextSibling")
},prev:function(cd){return a6(cd,"previousSibling")
},nextAll:function(cd){return af(cd,"nextSibling")
},prevAll:function(cd){return af(cd,"previousSibling")
},nextUntil:function(ce,cd,cf){return af(ce,"nextSibling",cf)
},prevUntil:function(ce,cd,cf){return af(ce,"previousSibling",cf)
},siblings:function(cd){return o((cd.parentNode||{}).firstChild,cd)
},children:function(cd){return o(cd.firstChild)
},contents:function(cd){return bP.nodeName(cd,"iframe")?cd.contentDocument||cd.contentWindow.document:bP.merge([],cd.childNodes)
}},function(cd,ce){bP.fn[cd]=function(ch,cf){var cg=bP.map(this,ce,ch);
if(cd.slice(-5)!=="Until"){cf=ch
}if(cf&&typeof cf==="string"){cg=bP.filter(cf,cg)
}if(this.length>1){if(!bG[cd]){cg=bP.uniqueSort(cg)
}if(bC.test(cd)){cg=cg.reverse()
}}return this.pushStack(cg)
}
});
var aM=(/\S+/g);
function am(ce){var cd={};
bP.each(ce.match(aM)||[],function(cg,cf){cd[cf]=true
});
return cd
}bP.Callbacks=function(cm){cm=typeof cm==="string"?am(cm):bP.extend({},cm);
var ch,cf,cd,cg,ck=[],ci=[],cj=-1,ce=function(){cg=cm.once;
cd=ch=true;
for(;
ci.length;
cj=-1){cf=ci.shift();
while(++cj<ck.length){if(ck[cj].apply(cf[0],cf[1])===false&&cm.stopOnFalse){cj=ck.length;
cf=false
}}}if(!cm.memory){cf=false
}ch=false;
if(cg){if(cf){ck=[]
}else{ck=""
}}},cl={add:function(){if(ck){if(cf&&!ch){cj=ck.length-1;
ci.push(cf)
}(function cn(co){bP.each(co,function(cq,cp){if(bP.isFunction(cp)){if(!cm.unique||!cl.has(cp)){ck.push(cp)
}}else{if(cp&&cp.length&&bP.type(cp)!=="string"){cn(cp)
}}})
})(arguments);
if(cf&&!ch){ce()
}}return this
},remove:function(){bP.each(arguments,function(cp,cn){var co;
while((co=bP.inArray(cn,ck,co))>-1){ck.splice(co,1);
if(co<=cj){cj--
}}});
return this
},has:function(cn){return cn?bP.inArray(cn,ck)>-1:ck.length>0
},empty:function(){if(ck){ck=[]
}return this
},disable:function(){cg=ci=[];
ck=cf="";
return this
},disabled:function(){return !ck
},lock:function(){cg=true;
if(!cf){cl.disable()
}return this
},locked:function(){return !!cg
},fireWith:function(co,cn){if(!cg){cn=cn||[];
cn=[co,cn.slice?cn.slice():cn];
ci.push(cn);
if(!ch){ce()
}}return this
},fire:function(){cl.fireWith(this,arguments);
return this
},fired:function(){return !!cd
}};
return cl
};
bP.extend({Deferred:function(cf){var ce=[["resolve","done",bP.Callbacks("once memory"),"resolved"],["reject","fail",bP.Callbacks("once memory"),"rejected"],["notify","progress",bP.Callbacks("memory")]],cg="pending",ch={state:function(){return cg
},always:function(){cd.done(arguments).fail(arguments);
return this
},then:function(){var ci=arguments;
return bP.Deferred(function(cj){bP.each(ce,function(cl,ck){var cm=bP.isFunction(ci[cl])&&ci[cl];
cd[ck[1]](function(){var cn=cm&&cm.apply(this,arguments);
if(cn&&bP.isFunction(cn.promise)){cn.promise().progress(cj.notify).done(cj.resolve).fail(cj.reject)
}else{cj[ck[0]+"With"](this===ch?cj.promise():this,cm?[cn]:arguments)
}})
});
ci=null
}).promise()
},promise:function(ci){return ci!=null?bP.extend(ci,ch):ch
}},cd={};
ch.pipe=ch.then;
bP.each(ce,function(cj,ci){var cl=ci[2],ck=ci[3];
ch[ci[1]]=cl.add;
if(ck){cl.add(function(){cg=ck
},ce[cj^1][2].disable,ce[2][2].lock)
}cd[ci[0]]=function(){cd[ci[0]+"With"](this===cd?ch:this,arguments);
return this
};
cd[ci[0]+"With"]=cl.fireWith
});
ch.promise(cd);
if(cf){cf.call(cd,cd)
}return cd
},when:function(ch){var cf=0,cj=X.call(arguments),cd=cj.length,ce=cd!==1||(ch&&bP.isFunction(ch.promise))?cd:0,cm=ce===1?ch:bP.Deferred(),cg=function(co,cp,cn){return function(cq){cp[co]=this;
cn[co]=arguments.length>1?X.call(arguments):cq;
if(cn===cl){cm.notifyWith(cp,cn)
}else{if(!(--ce)){cm.resolveWith(cp,cn)
}}}
},cl,ci,ck;
if(cd>1){cl=new Array(cd);
ci=new Array(cd);
ck=new Array(cd);
for(;
cf<cd;
cf++){if(cj[cf]&&bP.isFunction(cj[cf].promise)){cj[cf].promise().progress(cg(cf,ci,cl)).done(cg(cf,ck,cj)).fail(cm.reject)
}else{--ce
}}}if(!ce){cm.resolveWith(ck,cj)
}return cm.promise()
}});
var ar;
bP.fn.ready=function(cd){bP.ready.promise().done(cd);
return this
};
bP.extend({isReady:false,readyWait:1,holdReady:function(cd){if(cd){bP.readyWait++
}else{bP.ready(true)
}},ready:function(cd){if(cd===true?--bP.readyWait:bP.isReady){return
}bP.isReady=true;
if(cd!==true&&--bP.readyWait>0){return
}ar.resolveWith(m,[bP]);
if(bP.fn.triggerHandler){bP(m).triggerHandler("ready");
bP(m).off("ready")
}}});
function bt(){if(m.addEventListener){m.removeEventListener("DOMContentLoaded",b7);
bc.removeEventListener("load",b7)
}else{m.detachEvent("onreadystatechange",b7);
bc.detachEvent("onload",b7)
}}function b7(){if(m.addEventListener||bc.event.type==="load"||m.readyState==="complete"){bt();
bP.ready()
}}bP.ready.promise=function(cg){if(!ar){ar=bP.Deferred();
if(m.readyState==="complete"||(m.readyState!=="loading"&&!m.documentElement.doScroll)){bc.setTimeout(bP.ready)
}else{if(m.addEventListener){m.addEventListener("DOMContentLoaded",b7);
bc.addEventListener("load",b7)
}else{m.attachEvent("onreadystatechange",b7);
bc.attachEvent("onload",b7);
var cf=false;
try{cf=bc.frameElement==null&&m.documentElement
}catch(ce){}if(cf&&cf.doScroll){(function cd(){if(!bP.isReady){try{cf.doScroll("left")
}catch(ch){return bc.setTimeout(cd,50)
}bt();
bP.ready()
}})()
}}}}return ar.promise(cg)
};
bP.ready.promise();
var bo;
for(bo in bP(F)){break
}F.ownFirst=bo==="0";
F.inlineBlockNeedsLayout=false;
bP(function(){var cf,cg,cd,ce;
cd=m.getElementsByTagName("body")[0];
if(!cd||!cd.style){return
}cg=m.createElement("div");
ce=m.createElement("div");
ce.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
cd.appendChild(ce).appendChild(cg);
if(typeof cg.style.zoom!=="undefined"){cg.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
F.inlineBlockNeedsLayout=cf=cg.offsetWidth===3;
if(cf){cd.style.zoom=1
}}cd.removeChild(ce)
});
(function(){var ce=m.createElement("div");
F.deleteExpando=true;
try{delete ce.test
}catch(cd){F.deleteExpando=false
}ce=null
})();
var V=function(cf){var ce=bP.noData[(cf.nodeName+" ").toLowerCase()],cd=+cf.nodeType||1;
return cd!==1&&cd!==9?false:!ce||ce!==true&&cf.getAttribute("classid")===ce
};
var bF=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aX=/([A-Z])/g;
function bH(cf,ce,cg){if(cg===undefined&&cf.nodeType===1){var cd="data-"+ce.replace(aX,"-$1").toLowerCase();
cg=cf.getAttribute(cd);
if(typeof cg==="string"){try{cg=cg==="true"?true:cg==="false"?false:cg==="null"?null:+cg+""===cg?+cg:bF.test(cg)?bP.parseJSON(cg):cg
}catch(ch){}bP.data(cf,ce,cg)
}else{cg=undefined
}}return cg
}function Y(ce){var cd;
for(cd in ce){if(cd==="data"&&bP.isEmptyObject(ce[cd])){continue
}if(cd!=="toJSON"){return false
}}return true
}function bj(cg,ce,ci,ch){if(!V(cg)){return
}var ck,cj,cl=bP.expando,cm=cg.nodeType,cd=cm?bP.cache:cg,cf=cm?cg[cl]:cg[cl]&&cl;
if((!cf||!cd[cf]||(!ch&&!cd[cf].data))&&ci===undefined&&typeof ce==="string"){return
}if(!cf){if(cm){cf=cg[cl]=aW.pop()||bP.guid++
}else{cf=cl
}}if(!cd[cf]){cd[cf]=cm?{}:{toJSON:bP.noop}
}if(typeof ce==="object"||typeof ce==="function"){if(ch){cd[cf]=bP.extend(cd[cf],ce)
}else{cd[cf].data=bP.extend(cd[cf].data,ce)
}}cj=cd[cf];
if(!ch){if(!cj.data){cj.data={}
}cj=cj.data
}if(ci!==undefined){cj[bP.camelCase(ce)]=ci
}if(typeof ce==="string"){ck=cj[ce];
if(ck==null){ck=cj[bP.camelCase(ce)]
}}else{ck=cj
}return ck
}function aj(ch,cf,cd){if(!V(ch)){return
}var cj,cg,ci=ch.nodeType,ce=ci?bP.cache:ch,ck=ci?ch[bP.expando]:bP.expando;
if(!ce[ck]){return
}if(cf){cj=cd?ce[ck]:ce[ck].data;
if(cj){if(!bP.isArray(cf)){if(cf in cj){cf=[cf]
}else{cf=bP.camelCase(cf);
if(cf in cj){cf=[cf]
}else{cf=cf.split(" ")
}}}else{cf=cf.concat(bP.map(cf,bP.camelCase))
}cg=cf.length;
while(cg--){delete cj[cf[cg]]
}if(cd?!Y(cj):!bP.isEmptyObject(cj)){return
}}}if(!cd){delete ce[ck].data;
if(!Y(ce[ck])){return
}}if(ci){bP.cleanData([ch],true)
}else{if(F.deleteExpando||ce!=ce.window){delete ce[ck]
}else{ce[ck]=undefined
}}}bP.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(cd){cd=cd.nodeType?bP.cache[cd[bP.expando]]:cd[bP.expando];
return !!cd&&!Y(cd)
},data:function(ce,cd,cf){return bj(ce,cd,cf)
},removeData:function(ce,cd){return aj(ce,cd)
},_data:function(ce,cd,cf){return bj(ce,cd,cf,true)
},_removeData:function(ce,cd){return aj(ce,cd,true)
}});
bP.fn.extend({data:function(cg,cj){var cf,ce,ci,ch=this[0],cd=ch&&ch.attributes;
if(cg===undefined){if(this.length){ci=bP.data(ch);
if(ch.nodeType===1&&!bP._data(ch,"parsedAttrs")){cf=cd.length;
while(cf--){if(cd[cf]){ce=cd[cf].name;
if(ce.indexOf("data-")===0){ce=bP.camelCase(ce.slice(5));
bH(ch,ce,ci[ce])
}}}bP._data(ch,"parsedAttrs",true)
}}return ci
}if(typeof cg==="object"){return this.each(function(){bP.data(this,cg)
})
}return arguments.length>1?this.each(function(){bP.data(this,cg,cj)
}):ch?bH(ch,cg,bP.data(ch,cg)):undefined
},removeData:function(cd){return this.each(function(){bP.removeData(this,cd)
})
}});
bP.extend({queue:function(cf,ce,cg){var cd;
if(cf){ce=(ce||"fx")+"queue";
cd=bP._data(cf,ce);
if(cg){if(!cd||bP.isArray(cg)){cd=bP._data(cf,ce,bP.makeArray(cg))
}else{cd.push(cg)
}}return cd||[]
}},dequeue:function(ci,ch){ch=ch||"fx";
var ce=bP.queue(ci,ch),cj=ce.length,cg=ce.shift(),cd=bP._queueHooks(ci,ch),cf=function(){bP.dequeue(ci,ch)
};
if(cg==="inprogress"){cg=ce.shift();
cj--
}if(cg){if(ch==="fx"){ce.unshift("inprogress")
}delete cd.stop;
cg.call(ci,cf,cd)
}if(!cj&&cd){cd.empty.fire()
}},_queueHooks:function(cf,ce){var cd=ce+"queueHooks";
return bP._data(cf,cd)||bP._data(cf,cd,{empty:bP.Callbacks("once memory").add(function(){bP._removeData(cf,ce+"queue");
bP._removeData(cf,cd)
})})
}});
bP.fn.extend({queue:function(cd,ce){var cf=2;
if(typeof cd!=="string"){ce=cd;
cd="fx";
cf--
}if(arguments.length<cf){return bP.queue(this[0],cd)
}return ce===undefined?this:this.each(function(){var cg=bP.queue(this,cd,ce);
bP._queueHooks(this,cd);
if(cd==="fx"&&cg[0]!=="inprogress"){bP.dequeue(this,cd)
}})
},dequeue:function(cd){return this.each(function(){bP.dequeue(this,cd)
})
},clearQueue:function(cd){return this.queue(cd||"fx",[])
},promise:function(cf,cj){var ce,cg=1,ck=bP.Deferred(),ci=this,cd=this.length,ch=function(){if(!(--cg)){ck.resolveWith(ci,[ci])
}};
if(typeof cf!=="string"){cj=cf;
cf=undefined
}cf=cf||"fx";
while(cd--){ce=bP._data(ci[cd],cf+"queueHooks");
if(ce&&ce.empty){cg++;
ce.empty.add(ch)
}}ch();
return ck.promise(cj)
}});
(function(){var cd;
F.shrinkWrapBlocks=function(){if(cd!=null){return cd
}cd=false;
var cg,ce,cf;
ce=m.getElementsByTagName("body")[0];
if(!ce||!ce.style){return
}cg=m.createElement("div");
cf=m.createElement("div");
cf.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
ce.appendChild(cf).appendChild(cg);
if(typeof cg.style.zoom!=="undefined"){cg.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
cg.appendChild(m.createElement("div")).style.width="5px";
cd=cg.offsetWidth!==3
}ce.removeChild(cf);
return cd
}
})();
var aL=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var b6=new RegExp("^(?:([+-])=|)("+aL+")([a-z%]*)$","i");
var b0=["Top","Right","Bottom","Left"];
var aa=function(ce,cd){ce=cd||ce;
return bP.css(ce,"display")==="none"||!bP.contains(ce.ownerDocument,ce)
};
function A(ce,cd,ch,cm){var cn,cf=1,cj=20,cl=cm?function(){return cm.cur()
}:function(){return bP.css(ce,cd,"")
},ci=cl(),ck=ch&&ch[3]||(bP.cssNumber[cd]?"":"px"),cg=(bP.cssNumber[cd]||ck!=="px"&&+ci)&&b6.exec(bP.css(ce,cd));
if(cg&&cg[3]!==ck){ck=ck||cg[3];
ch=ch||[];
cg=+ci||1;
do{cf=cf||".5";
cg=cg/cf;
bP.style(ce,cd,cg+ck)
}while(cf!==(cf=cl()/ci)&&cf!==1&&--cj)
}if(ch){cg=+cg||+ci||0;
cn=ch[1]?cg+(ch[1]+1)*ch[2]:+ch[2];
if(cm){cm.unit=ck;
cm.start=cg;
cm.end=cn
}}return cn
}var aJ=function(cd,ci,ck,cj,cg,cm,cl){var cf=0,ce=cd.length,ch=ck==null;
if(bP.type(ck)==="object"){cg=true;
for(cf in ck){aJ(cd,ci,cf,ck[cf],true,cm,cl)
}}else{if(cj!==undefined){cg=true;
if(!bP.isFunction(cj)){cl=true
}if(ch){if(cl){ci.call(cd,cj);
ci=null
}else{ch=ci;
ci=function(co,cn,cp){return ch.call(bP(co),cp)
}
}}if(ci){for(;
cf<ce;
cf++){ci(cd[cf],ck,cl?cj:cj.call(cd[cf],cf,ci(cd[cf],ck)))
}}}}return cg?cd:ch?ci.call(cd):ce?ci(cd[0],ck):cm
};
var aS=(/^(?:checkbox|radio)$/i);
var n=(/<([\w:-]+)/);
var bI=(/^$|\/(?:java|ecma)script/i);
var cc=(/^\s+/);
var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function C(cd){var cf=d.split("|"),ce=cd.createDocumentFragment();
if(ce.createElement){while(cf.length){ce.createElement(cf.pop())
}}return ce
}(function(){var cf=m.createElement("div"),ce=m.createDocumentFragment(),cd=m.createElement("input");
cf.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
F.leadingWhitespace=cf.firstChild.nodeType===3;
F.tbody=!cf.getElementsByTagName("tbody").length;
F.htmlSerialize=!!cf.getElementsByTagName("link").length;
F.html5Clone=m.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
cd.type="checkbox";
cd.checked=true;
ce.appendChild(cd);
F.appendChecked=cd.checked;
cf.innerHTML="<textarea>x</textarea>";
F.noCloneChecked=!!cf.cloneNode(true).lastChild.defaultValue;
ce.appendChild(cf);
cd=m.createElement("input");
cd.setAttribute("type","radio");
cd.setAttribute("checked","checked");
cd.setAttribute("name","t");
cf.appendChild(cd);
F.checkClone=cf.cloneNode(true).cloneNode(true).lastChild.checked;
F.noCloneEvent=!!cf.addEventListener;
cf[bP.expando]=1;
F.attributes=!cf.getAttribute(bP.expando)
})();
var ad={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:F.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
ad.optgroup=ad.option;
ad.tbody=ad.tfoot=ad.colgroup=ad.caption=ad.thead;
ad.th=ad.td;
function k(cg,cd){var ce,ch,cf=0,ci=typeof cg.getElementsByTagName!=="undefined"?cg.getElementsByTagName(cd||"*"):typeof cg.querySelectorAll!=="undefined"?cg.querySelectorAll(cd||"*"):undefined;
if(!ci){for(ci=[],ce=cg.childNodes||cg;
(ch=ce[cf])!=null;
cf++){if(!cd||bP.nodeName(ch,cd)){ci.push(ch)
}else{bP.merge(ci,k(ch,cd))
}}}return cd===undefined||cd&&bP.nodeName(cg,cd)?bP.merge([cg],ci):ci
}function bB(cd,cf){var cg,ce=0;
for(;
(cg=cd[ce])!=null;
ce++){bP._data(cg,"globalEval",!cf||bP._data(cf[ce],"globalEval"))
}}var S=/<|&#?\w+;/,b8=/<tbody/i;
function b5(cd){if(aS.test(cd.type)){cd.defaultChecked=cd.checked
}}function B(ce,cg,cm,cr,cj){var cn,ci,cl,cq,cs,cp,cf,ck=ce.length,ch=C(cg),cd=[],co=0;
for(;
co<ck;
co++){ci=ce[co];
if(ci||ci===0){if(bP.type(ci)==="object"){bP.merge(cd,ci.nodeType?[ci]:ci)
}else{if(!S.test(ci)){cd.push(cg.createTextNode(ci))
}else{cq=cq||ch.appendChild(cg.createElement("div"));
cs=(n.exec(ci)||["",""])[1].toLowerCase();
cf=ad[cs]||ad._default;
cq.innerHTML=cf[1]+bP.htmlPrefilter(ci)+cf[2];
cn=cf[0];
while(cn--){cq=cq.lastChild
}if(!F.leadingWhitespace&&cc.test(ci)){cd.push(cg.createTextNode(cc.exec(ci)[0]))
}if(!F.tbody){ci=cs==="table"&&!b8.test(ci)?cq.firstChild:cf[1]==="<table>"&&!b8.test(ci)?cq:0;
cn=ci&&ci.childNodes.length;
while(cn--){if(bP.nodeName((cp=ci.childNodes[cn]),"tbody")&&!cp.childNodes.length){ci.removeChild(cp)
}}}bP.merge(cd,cq.childNodes);
cq.textContent="";
while(cq.firstChild){cq.removeChild(cq.firstChild)
}cq=ch.lastChild
}}}}if(cq){ch.removeChild(cq)
}if(!F.appendChecked){bP.grep(k(cd,"input"),b5)
}co=0;
while((ci=cd[co++])){if(cr&&bP.inArray(ci,cr)>-1){if(cj){cj.push(ci)
}continue
}cl=bP.contains(ci.ownerDocument,ci);
cq=k(ch.appendChild(ci),"script");
if(cl){bB(cq)
}if(cm){cn=0;
while((ci=cq[cn++])){if(bI.test(ci.type||"")){cm.push(ci)
}}}}cq=null;
return ch
}(function(){var ce,cd,cf=m.createElement("div");
for(ce in {submit:true,change:true,focusin:true}){cd="on"+ce;
if(!(F[ce]=cd in bc)){cf.setAttribute(cd,"t");
F[ce]=cf.attributes[cd].expando===false
}}cf=null
})();
var bN=/^(?:input|select|textarea)$/i,bd=/^key/,bS=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bJ=/^(?:focusinfocus|focusoutblur)$/,bE=/^([^.]*)(?:\.(.+)|)/;
function ac(){return true
}function ah(){return false
}function au(){try{return m.activeElement
}catch(cd){}}function bp(ci,cf,cd,cj,ch,ce){var ck,cg;
if(typeof cf==="object"){if(typeof cd!=="string"){cj=cj||cd;
cd=undefined
}for(cg in cf){bp(ci,cg,cd,cj,cf[cg],ce)
}return ci
}if(cj==null&&ch==null){ch=cd;
cj=cd=undefined
}else{if(ch==null){if(typeof cd==="string"){ch=cj;
cj=undefined
}else{ch=cj;
cj=cd;
cd=undefined
}}}if(ch===false){ch=ah
}else{if(!ch){return ci
}}if(ce===1){ck=ch;
ch=function(cl){bP().off(cl);
return ck.apply(this,arguments)
};
ch.guid=ck.guid||(ck.guid=bP.guid++)
}return ci.each(function(){bP.event.add(this,cf,ch,cj,cd)
})
}bP.event={global:{},add:function(ch,cm,cr,cj,ci){var ck,cs,ct,cf,co,cl,cq,cg,cp,cd,ce,cn=bP._data(ch);
if(!cn){return
}if(cr.handler){cf=cr;
cr=cf.handler;
ci=cf.selector
}if(!cr.guid){cr.guid=bP.guid++
}if(!(cs=cn.events)){cs=cn.events={}
}if(!(cl=cn.handle)){cl=cn.handle=function(cu){return typeof bP!=="undefined"&&(!cu||bP.event.triggered!==cu.type)?bP.event.dispatch.apply(cl.elem,arguments):undefined
};
cl.elem=ch
}cm=(cm||"").match(aM)||[""];
ct=cm.length;
while(ct--){ck=bE.exec(cm[ct])||[];
cp=ce=ck[1];
cd=(ck[2]||"").split(".").sort();
if(!cp){continue
}co=bP.event.special[cp]||{};
cp=(ci?co.delegateType:co.bindType)||cp;
co=bP.event.special[cp]||{};
cq=bP.extend({type:cp,origType:ce,data:cj,handler:cr,guid:cr.guid,selector:ci,needsContext:ci&&bP.expr.match.needsContext.test(ci),namespace:cd.join(".")},cf);
if(!(cg=cs[cp])){cg=cs[cp]=[];
cg.delegateCount=0;
if(!co.setup||co.setup.call(ch,cj,cd,cl)===false){if(ch.addEventListener){ch.addEventListener(cp,cl,false)
}else{if(ch.attachEvent){ch.attachEvent("on"+cp,cl)
}}}}if(co.add){co.add.call(ch,cq);
if(!cq.handler.guid){cq.handler.guid=cr.guid
}}if(ci){cg.splice(cg.delegateCount++,0,cq)
}else{cg.push(cq)
}bP.event.global[cp]=true
}ch=null
},remove:function(cg,cm,ct,ch,cl){var cj,cq,ck,ci,cs,cr,co,cf,cp,cd,ce,cn=bP.hasData(cg)&&bP._data(cg);
if(!cn||!(cr=cn.events)){return
}cm=(cm||"").match(aM)||[""];
cs=cm.length;
while(cs--){ck=bE.exec(cm[cs])||[];
cp=ce=ck[1];
cd=(ck[2]||"").split(".").sort();
if(!cp){for(cp in cr){bP.event.remove(cg,cp+cm[cs],ct,ch,true)
}continue
}co=bP.event.special[cp]||{};
cp=(ch?co.delegateType:co.bindType)||cp;
cf=cr[cp]||[];
ck=ck[2]&&new RegExp("(^|\\.)"+cd.join("\\.(?:.*\\.|)")+"(\\.|$)");
ci=cj=cf.length;
while(cj--){cq=cf[cj];
if((cl||ce===cq.origType)&&(!ct||ct.guid===cq.guid)&&(!ck||ck.test(cq.namespace))&&(!ch||ch===cq.selector||ch==="**"&&cq.selector)){cf.splice(cj,1);
if(cq.selector){cf.delegateCount--
}if(co.remove){co.remove.call(cg,cq)
}}}if(ci&&!cf.length){if(!co.teardown||co.teardown.call(cg,cd,cn.handle)===false){bP.removeEvent(cg,cp,cn.handle)
}delete cr[cp]
}}if(bP.isEmptyObject(cr)){delete cn.handle;
bP._removeData(cg,"events")
}},trigger:function(cd,ck,cg,cr){var cl,cf,cp,cq,cn,cj,ci,ch=[cg||m],co=R.call(cd,"type")?cd.type:cd,ce=R.call(cd,"namespace")?cd.namespace.split("."):[];
cp=cj=cg=cg||m;
if(cg.nodeType===3||cg.nodeType===8){return
}if(bJ.test(co+bP.event.triggered)){return
}if(co.indexOf(".")>-1){ce=co.split(".");
co=ce.shift();
ce.sort()
}cf=co.indexOf(":")<0&&"on"+co;
cd=cd[bP.expando]?cd:new bP.Event(co,typeof cd==="object"&&cd);
cd.isTrigger=cr?2:3;
cd.namespace=ce.join(".");
cd.rnamespace=cd.namespace?new RegExp("(^|\\.)"+ce.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
cd.result=undefined;
if(!cd.target){cd.target=cg
}ck=ck==null?[cd]:bP.makeArray(ck,[cd]);
cn=bP.event.special[co]||{};
if(!cr&&cn.trigger&&cn.trigger.apply(cg,ck)===false){return
}if(!cr&&!cn.noBubble&&!bP.isWindow(cg)){cq=cn.delegateType||co;
if(!bJ.test(cq+co)){cp=cp.parentNode
}for(;
cp;
cp=cp.parentNode){ch.push(cp);
cj=cp
}if(cj===(cg.ownerDocument||m)){ch.push(cj.defaultView||cj.parentWindow||bc)
}}ci=0;
while((cp=ch[ci++])&&!cd.isPropagationStopped()){cd.type=ci>1?cq:cn.bindType||co;
cl=(bP._data(cp,"events")||{})[cd.type]&&bP._data(cp,"handle");
if(cl){cl.apply(cp,ck)
}cl=cf&&cp[cf];
if(cl&&cl.apply&&V(cp)){cd.result=cl.apply(cp,ck);
if(cd.result===false){cd.preventDefault()
}}}cd.type=co;
if(!cr&&!cd.isDefaultPrevented()){if((!cn._default||cn._default.apply(ch.pop(),ck)===false)&&V(cg)){if(cf&&cg[co]&&!bP.isWindow(cg)){cj=cg[cf];
if(cj){cg[cf]=null
}bP.event.triggered=co;
try{cg[co]()
}catch(cm){}bP.event.triggered=undefined;
if(cj){cg[cf]=cj
}}}}return cd.result
},dispatch:function(cd){cd=bP.event.fix(cd);
var ch,cg,ci,ce,cm,cl=[],ck=X.call(arguments),cf=(bP._data(this,"events")||{})[cd.type]||[],cj=bP.event.special[cd.type]||{};
ck[0]=cd;
cd.delegateTarget=this;
if(cj.preDispatch&&cj.preDispatch.call(this,cd)===false){return
}cl=bP.event.handlers.call(this,cd,cf);
ch=0;
while((ce=cl[ch++])&&!cd.isPropagationStopped()){cd.currentTarget=ce.elem;
cg=0;
while((cm=ce.handlers[cg++])&&!cd.isImmediatePropagationStopped()){if(!cd.rnamespace||cd.rnamespace.test(cm.namespace)){cd.handleObj=cm;
cd.data=cm.data;
ci=((bP.event.special[cm.origType]||{}).handle||cm.handler).apply(ce.elem,ck);
if(ci!==undefined){if((cd.result=ci)===false){cd.preventDefault();
cd.stopPropagation()
}}}}}if(cj.postDispatch){cj.postDispatch.call(this,cd)
}return cd.result
},handlers:function(cd,cf){var ch,ci,ce,ck,cj=[],cg=cf.delegateCount,cl=cd.target;
if(cg&&cl.nodeType&&(cd.type!=="click"||isNaN(cd.button)||cd.button<1)){for(;
cl!=this;
cl=cl.parentNode||this){if(cl.nodeType===1&&(cl.disabled!==true||cd.type!=="click")){ci=[];
for(ch=0;
ch<cg;
ch++){ck=cf[ch];
ce=ck.selector+" ";
if(ci[ce]===undefined){ci[ce]=ck.needsContext?bP(ce,this).index(cl)>-1:bP.find(ce,this,null,[cl]).length
}if(ci[ce]){ci.push(ck)
}}if(ci.length){cj.push({elem:cl,handlers:ci})
}}}}if(cg<cf.length){cj.push({elem:this,handlers:cf.slice(cg)})
}return cj
},fix:function(cg){if(cg[bP.expando]){return cg
}var ce,cj,ci,cf=cg.type,cd=cg,ch=this.fixHooks[cf];
if(!ch){this.fixHooks[cf]=ch=bS.test(cf)?this.mouseHooks:bd.test(cf)?this.keyHooks:{}
}ci=ch.props?this.props.concat(ch.props):this.props;
cg=new bP.Event(cd);
ce=ci.length;
while(ce--){cj=ci[ce];
cg[cj]=cd[cj]
}if(!cg.target){cg.target=cd.srcElement||m
}if(cg.target.nodeType===3){cg.target=cg.target.parentNode
}cg.metaKey=!!cg.metaKey;
return ch.filter?ch.filter(cg,cd):cg
},props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(ce,cd){if(ce.which==null){ce.which=cd.charCode!=null?cd.charCode:cd.keyCode
}return ce
}},mouseHooks:{props:("button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement").split(" "),filter:function(cg,cf){var cd,ch,ci,ce=cf.button,cj=cf.fromElement;
if(cg.pageX==null&&cf.clientX!=null){ch=cg.target.ownerDocument||m;
ci=ch.documentElement;
cd=ch.body;
cg.pageX=cf.clientX+(ci&&ci.scrollLeft||cd&&cd.scrollLeft||0)-(ci&&ci.clientLeft||cd&&cd.clientLeft||0);
cg.pageY=cf.clientY+(ci&&ci.scrollTop||cd&&cd.scrollTop||0)-(ci&&ci.clientTop||cd&&cd.clientTop||0)
}if(!cg.relatedTarget&&cj){cg.relatedTarget=cj===cg.target?cf.toElement:cj
}if(!cg.which&&ce!==undefined){cg.which=(ce&1?1:(ce&2?3:(ce&4?2:0)))
}return cg
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==au()&&this.focus){try{this.focus();
return false
}catch(cd){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===au()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(bP.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(cd){return bP.nodeName(cd.target,"a")
}},beforeunload:{postDispatch:function(cd){if(cd.result!==undefined&&cd.originalEvent){cd.originalEvent.returnValue=cd.result
}}}},simulate:function(cd,cf,ce){var cg=bP.extend(new bP.Event(),ce,{type:cd,isSimulated:true});
bP.event.trigger(cg,null,cf);
if(cg.isDefaultPrevented()){ce.preventDefault()
}}};
bP.removeEvent=m.removeEventListener?function(ce,cd,cf){if(ce.removeEventListener){ce.removeEventListener(cd,cf)
}}:function(cf,ce,cg){var cd="on"+ce;
if(cf.detachEvent){if(typeof cf[cd]==="undefined"){cf[cd]=null
}cf.detachEvent(cd,cg)
}};
bP.Event=function(ce,cd){if(!(this instanceof bP.Event)){return new bP.Event(ce,cd)
}if(ce&&ce.type){this.originalEvent=ce;
this.type=ce.type;
this.isDefaultPrevented=ce.defaultPrevented||ce.defaultPrevented===undefined&&ce.returnValue===false?ac:ah
}else{this.type=ce
}if(cd){bP.extend(this,cd)
}this.timeStamp=ce&&ce.timeStamp||bP.now();
this[bP.expando]=true
};
bP.Event.prototype={constructor:bP.Event,isDefaultPrevented:ah,isPropagationStopped:ah,isImmediatePropagationStopped:ah,preventDefault:function(){var cd=this.originalEvent;
this.isDefaultPrevented=ac;
if(!cd){return
}if(cd.preventDefault){cd.preventDefault()
}else{cd.returnValue=false
}},stopPropagation:function(){var cd=this.originalEvent;
this.isPropagationStopped=ac;
if(!cd||this.isSimulated){return
}if(cd.stopPropagation){cd.stopPropagation()
}cd.cancelBubble=true
},stopImmediatePropagation:function(){var cd=this.originalEvent;
this.isImmediatePropagationStopped=ac;
if(cd&&cd.stopImmediatePropagation){cd.stopImmediatePropagation()
}this.stopPropagation()
}};
bP.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(ce,cd){bP.event.special[ce]={delegateType:cd,bindType:cd,handle:function(ch){var cf,cj=this,ci=ch.relatedTarget,cg=ch.handleObj;
if(!ci||(ci!==cj&&!bP.contains(cj,ci))){ch.type=cg.origType;
cf=cg.handler.apply(this,arguments);
ch.type=cd
}return cf
}}
});
if(!F.submit){bP.event.special.submit={setup:function(){if(bP.nodeName(this,"form")){return false
}bP.event.add(this,"click._submit keypress._submit",function(cf){var ce=cf.target,cd=bP.nodeName(ce,"input")||bP.nodeName(ce,"button")?bP.prop(ce,"form"):undefined;
if(cd&&!bP._data(cd,"submit")){bP.event.add(cd,"submit._submit",function(cg){cg._submitBubble=true
});
bP._data(cd,"submit",true)
}})
},postDispatch:function(cd){if(cd._submitBubble){delete cd._submitBubble;
if(this.parentNode&&!cd.isTrigger){bP.event.simulate("submit",this.parentNode,cd)
}}},teardown:function(){if(bP.nodeName(this,"form")){return false
}bP.event.remove(this,"._submit")
}}
}if(!F.change){bP.event.special.change={setup:function(){if(bN.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bP.event.add(this,"propertychange._change",function(cd){if(cd.originalEvent.propertyName==="checked"){this._justChanged=true
}});
bP.event.add(this,"click._change",function(cd){if(this._justChanged&&!cd.isTrigger){this._justChanged=false
}bP.event.simulate("change",this,cd)
})
}return false
}bP.event.add(this,"beforeactivate._change",function(ce){var cd=ce.target;
if(bN.test(cd.nodeName)&&!bP._data(cd,"change")){bP.event.add(cd,"change._change",function(cf){if(this.parentNode&&!cf.isSimulated&&!cf.isTrigger){bP.event.simulate("change",this.parentNode,cf)
}});
bP._data(cd,"change",true)
}})
},handle:function(ce){var cd=ce.target;
if(this!==cd||ce.isSimulated||ce.isTrigger||(cd.type!=="radio"&&cd.type!=="checkbox")){return ce.handleObj.handler.apply(this,arguments)
}},teardown:function(){bP.event.remove(this,"._change");
return !bN.test(this.nodeName)
}}
}if(!F.focusin){bP.each({focus:"focusin",blur:"focusout"},function(cf,cd){var ce=function(cg){bP.event.simulate(cd,cg.target,bP.event.fix(cg))
};
bP.event.special[cd]={setup:function(){var ch=this.ownerDocument||this,cg=bP._data(ch,cd);
if(!cg){ch.addEventListener(cf,ce,true)
}bP._data(ch,cd,(cg||0)+1)
},teardown:function(){var ch=this.ownerDocument||this,cg=bP._data(ch,cd)-1;
if(!cg){ch.removeEventListener(cf,ce,true);
bP._removeData(ch,cd)
}else{bP._data(ch,cd,cg)
}}}
})
}bP.fn.extend({on:function(ce,cd,cg,cf){return bp(this,ce,cd,cg,cf)
},one:function(ce,cd,cg,cf){return bp(this,ce,cd,cg,cf,1)
},off:function(cf,cd,ch){var ce,cg;
if(cf&&cf.preventDefault&&cf.handleObj){ce=cf.handleObj;
bP(cf.delegateTarget).off(ce.namespace?ce.origType+"."+ce.namespace:ce.origType,ce.selector,ce.handler);
return this
}if(typeof cf==="object"){for(cg in cf){this.off(cg,cd,cf[cg])
}return this
}if(cd===false||typeof cd==="function"){ch=cd;
cd=undefined
}if(ch===false){ch=ah
}return this.each(function(){bP.event.remove(this,cf,ch,cd)
})
},trigger:function(cd,ce){return this.each(function(){bP.event.trigger(cd,ce,this)
})
},triggerHandler:function(cd,cf){var ce=this[0];
if(ce){return bP.event.trigger(cd,cf,ce,true)
}}});
var aK=/ jQuery\d+="(?:null|\d+)"/g,T=new RegExp("<(?:"+d+")[\\s/>]","i"),aN=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,av=/<script|<style|<link/i,b4=/checked\s*(?:[^=]|=\s*.checked.)/i,az=/^true\/(.*)/,aU=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,a0=C(m),j=a0.appendChild(m.createElement("div"));
function ba(ce,cd){return bP.nodeName(ce,"table")&&bP.nodeName(cd.nodeType!==11?cd:cd.firstChild,"tr")?ce.getElementsByTagName("tbody")[0]||ce.appendChild(ce.ownerDocument.createElement("tbody")):ce
}function u(cd){cd.type=(bP.find.attr(cd,"type")!==null)+"/"+cd.type;
return cd
}function bm(ce){var cd=az.exec(ce.type);
if(cd){ce.type=cd[1]
}else{ce.removeAttribute("type")
}return ce
}function aA(ck,ce){if(ce.nodeType!==1||!bP.hasData(ck)){return
}var ch,cg,cd,cj=bP._data(ck),ci=bP._data(ce,cj),cf=cj.events;
if(cf){delete ci.handle;
ci.events={};
for(ch in cf){for(cg=0,cd=cf[ch].length;
cg<cd;
cg++){bP.event.add(ce,ch,cf[ch][cg])
}}}if(ci.data){ci.data=bP.extend({},ci.data)
}}function ab(cg,cd){var ch,cf,ce;
if(cd.nodeType!==1){return
}ch=cd.nodeName.toLowerCase();
if(!F.noCloneEvent&&cd[bP.expando]){ce=bP._data(cd);
for(cf in ce.events){bP.removeEvent(cd,cf,ce.handle)
}cd.removeAttribute(bP.expando)
}if(ch==="script"&&cd.text!==cg.text){u(cd).text=cg.text;
bm(cd)
}else{if(ch==="object"){if(cd.parentNode){cd.outerHTML=cg.outerHTML
}if(F.html5Clone&&(cg.innerHTML&&!bP.trim(cd.innerHTML))){cd.innerHTML=cg.innerHTML
}}else{if(ch==="input"&&aS.test(cg.type)){cd.defaultChecked=cd.checked=cg.checked;
if(cd.value!==cg.value){cd.value=cg.value
}}else{if(ch==="option"){cd.defaultSelected=cd.selected=cg.defaultSelected
}else{if(ch==="input"||ch==="textarea"){cd.defaultValue=cg.defaultValue
}}}}}}function J(cl,cn,cr,cg){cn=aH.apply([],cn);
var ck,cf,cd,ci,cp,cm,cj=0,ch=cl.length,cq=ch-1,co=cn[0],ce=bP.isFunction(co);
if(ce||(ch>1&&typeof co==="string"&&!F.checkClone&&b4.test(co))){return cl.each(function(ct){var cs=cl.eq(ct);
if(ce){cn[0]=co.call(this,ct,cs.html())
}J(cs,cn,cr,cg)
})
}if(ch){cm=B(cn,cl[0].ownerDocument,false,cl,cg);
ck=cm.firstChild;
if(cm.childNodes.length===1){cm=ck
}if(ck||cg){ci=bP.map(k(cm,"script"),u);
cd=ci.length;
for(;
cj<ch;
cj++){cf=cm;
if(cj!==cq){cf=bP.clone(cf,true,true);
if(cd){bP.merge(ci,k(cf,"script"))
}}cr.call(cl[cj],cf,cj)
}if(cd){cp=ci[ci.length-1].ownerDocument;
bP.map(ci,bm);
for(cj=0;
cj<cd;
cj++){cf=ci[cj];
if(bI.test(cf.type||"")&&!bP._data(cf,"globalEval")&&bP.contains(cp,cf)){if(cf.src){if(bP._evalUrl){bP._evalUrl(cf.src)
}}else{bP.globalEval((cf.text||cf.textContent||cf.innerHTML||"").replace(aU,""))
}}}}cm=ck=null
}}return cl
}function L(ch,cd,ci){var cg,ce=cd?bP.filter(cd,ch):ch,cf=0;
for(;
(cg=ce[cf])!=null;
cf++){if(!ci&&cg.nodeType===1){bP.cleanData(k(cg))
}if(cg.parentNode){if(ci&&bP.contains(cg.ownerDocument,cg)){bB(k(cg,"script"))
}cg.parentNode.removeChild(cg)
}}return ch
}bP.extend({htmlPrefilter:function(cd){return cd.replace(aN,"<$1></$2>")
},clone:function(ce,cg,cd){var ci,cf,cl,ch,cj,ck=bP.contains(ce.ownerDocument,ce);
if(F.html5Clone||bP.isXMLDoc(ce)||!T.test("<"+ce.nodeName+">")){cl=ce.cloneNode(true)
}else{j.innerHTML=ce.outerHTML;
j.removeChild(cl=j.firstChild)
}if((!F.noCloneEvent||!F.noCloneChecked)&&(ce.nodeType===1||ce.nodeType===11)&&!bP.isXMLDoc(ce)){ci=k(cl);
cj=k(ce);
for(ch=0;
(cf=cj[ch])!=null;
++ch){if(ci[ch]){ab(cf,ci[ch])
}}}if(cg){if(cd){cj=cj||k(ce);
ci=ci||k(cl);
for(ch=0;
(cf=cj[ch])!=null;
ch++){aA(cf,ci[ch])
}}else{aA(ce,cl)
}}ci=k(cl,"script");
if(ci.length>0){bB(ci,!ck&&k(ce,"script"))
}ci=cj=cf=null;
return cl
},cleanData:function(ce,cm){var cg,cl,cf,ci,cj=0,cn=bP.expando,cd=bP.cache,ch=F.attributes,ck=bP.event.special;
for(;
(cg=ce[cj])!=null;
cj++){if(cm||V(cg)){cf=cg[cn];
ci=cf&&cd[cf];
if(ci){if(ci.events){for(cl in ci.events){if(ck[cl]){bP.event.remove(cg,cl)
}else{bP.removeEvent(cg,cl,ci.handle)
}}}if(cd[cf]){delete cd[cf];
if(!ch&&typeof cg.removeAttribute!=="undefined"){cg.removeAttribute(cn)
}else{cg[cn]=undefined
}aW.push(cf)
}}}}}});
bP.fn.extend({domManip:J,detach:function(cd){return L(this,cd,true)
},remove:function(cd){return L(this,cd)
},text:function(cd){return aJ(this,function(ce){return ce===undefined?bP.text(this):this.empty().append((this[0]&&this[0].ownerDocument||m).createTextNode(ce))
},null,cd,arguments.length)
},append:function(){return J(this,arguments,function(cd){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var ce=ba(this,cd);
ce.appendChild(cd)
}})
},prepend:function(){return J(this,arguments,function(cd){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var ce=ba(this,cd);
ce.insertBefore(cd,ce.firstChild)
}})
},before:function(){return J(this,arguments,function(cd){if(this.parentNode){this.parentNode.insertBefore(cd,this)
}})
},after:function(){return J(this,arguments,function(cd){if(this.parentNode){this.parentNode.insertBefore(cd,this.nextSibling)
}})
},empty:function(){var ce,cd=0;
for(;
(ce=this[cd])!=null;
cd++){if(ce.nodeType===1){bP.cleanData(k(ce,false))
}while(ce.firstChild){ce.removeChild(ce.firstChild)
}if(ce.options&&bP.nodeName(ce,"select")){ce.options.length=0
}}return this
},clone:function(ce,cd){ce=ce==null?false:ce;
cd=cd==null?ce:cd;
return this.map(function(){return bP.clone(this,ce,cd)
})
},html:function(cd){return aJ(this,function(ch){var cg=this[0]||{},cf=0,ce=this.length;
if(ch===undefined){return cg.nodeType===1?cg.innerHTML.replace(aK,""):undefined
}if(typeof ch==="string"&&!av.test(ch)&&(F.htmlSerialize||!T.test(ch))&&(F.leadingWhitespace||!cc.test(ch))&&!ad[(n.exec(ch)||["",""])[1].toLowerCase()]){ch=bP.htmlPrefilter(ch);
try{for(;
cf<ce;
cf++){cg=this[cf]||{};
if(cg.nodeType===1){bP.cleanData(k(cg,false));
cg.innerHTML=ch
}}cg=0
}catch(ci){}}if(cg){this.empty().append(ch)
}},null,cd,arguments.length)
},replaceWith:function(){var cd=[];
return J(this,arguments,function(cf){var ce=this.parentNode;
if(bP.inArray(this,cd)<0){bP.cleanData(k(this));
if(ce){ce.replaceChild(cf,this)
}}},cd)
}});
bP.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(cd,ce){bP.fn[cd]=function(cf){var cg,ci=0,ch=[],ck=bP(cf),cj=ck.length-1;
for(;
ci<=cj;
ci++){cg=ci===cj?this:this.clone(true);
bP(ck[ci])[ce](cg);
w.apply(ch,cg.get())
}return this.pushStack(ch)
}
});
var aO,bs={HTML:"block",BODY:"block"};
function bb(cd,cg){var ce=bP(cg.createElement(cd)).appendTo(cg.body),cf=bP.css(ce[0],"display");
ce.detach();
return cf
}function a8(cf){var ce=m,cd=bs[cf];
if(!cd){cd=bb(cf,ce);
if(cd==="none"||!cd){aO=(aO||bP("<iframe frameborder='0' width='0' height='0'/>")).appendTo(ce.documentElement);
ce=(aO[0].contentWindow||aO[0].contentDocument).document;
ce.write();
ce.close();
cd=bb(cf,ce);
aO.detach()
}bs[cf]=cd
}return cd
}var a7=(/^margin/);
var ag=new RegExp("^("+aL+")(?!px)[a-z%]+$","i");
var K=function(ci,ch,cj,cg){var cf,ce,cd={};
for(ce in ch){cd[ce]=ci.style[ce];
ci.style[ce]=ch[ce]
}cf=cj.apply(ci,cg||[]);
for(ce in ch){ci.style[ce]=cd[ce]
}return cf
};
var b1=m.documentElement;
(function(){var ci,cf,cj,cl,ck,cg,ce=m.createElement("div"),cd=m.createElement("div");
if(!cd.style){return
}cd.style.cssText="float:left;opacity:.5";
F.opacity=cd.style.opacity==="0.5";
F.cssFloat=!!cd.style.cssFloat;
cd.style.backgroundClip="content-box";
cd.cloneNode(true).style.backgroundClip="";
F.clearCloneStyle=cd.style.backgroundClip==="content-box";
ce=m.createElement("div");
ce.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
cd.innerHTML="";
ce.appendChild(cd);
F.boxSizing=cd.style.boxSizing===""||cd.style.MozBoxSizing===""||cd.style.WebkitBoxSizing==="";
bP.extend(F,{reliableHiddenOffsets:function(){if(ci==null){ch()
}return cl
},boxSizingReliable:function(){if(ci==null){ch()
}return cj
},pixelMarginRight:function(){if(ci==null){ch()
}return cf
},pixelPosition:function(){if(ci==null){ch()
}return ci
},reliableMarginRight:function(){if(ci==null){ch()
}return ck
},reliableMarginLeft:function(){if(ci==null){ch()
}return cg
}});
function ch(){var cn,cm,co=m.documentElement;
co.appendChild(ce);
cd.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
ci=cj=cg=false;
cf=ck=true;
if(bc.getComputedStyle){cm=bc.getComputedStyle(cd);
ci=(cm||{}).top!=="1%";
cg=(cm||{}).marginLeft==="2px";
cj=(cm||{width:"4px"}).width==="4px";
cd.style.marginRight="50%";
cf=(cm||{marginRight:"4px"}).marginRight==="4px";
cn=cd.appendChild(m.createElement("div"));
cn.style.cssText=cd.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
cn.style.marginRight=cn.style.width="0";
cd.style.width="1px";
ck=!parseFloat((bc.getComputedStyle(cn)||{}).marginRight);
cd.removeChild(cn)
}cd.style.display="none";
cl=cd.getClientRects().length===0;
if(cl){cd.style.display="";
cd.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cd.childNodes[0].style.borderCollapse="separate";
cn=cd.getElementsByTagName("td");
cn[0].style.cssText="margin:0;border:0;padding:0;display:none";
cl=cn[0].offsetHeight===0;
if(cl){cn[0].style.display="";
cn[1].style.display="none";
cl=cn[0].offsetHeight===0
}}co.removeChild(ce)
}})();
var bx,I,bv=/^(top|right|bottom|left)$/;
if(bc.getComputedStyle){bx=function(ce){var cd=ce.ownerDocument.defaultView;
if(!cd||!cd.opener){cd=bc
}return cd.getComputedStyle(ce)
};
I=function(ck,ce,cj){var ch,cg,ci,cd,cf=ck.style;
cj=cj||bx(ck);
cd=cj?cj.getPropertyValue(ce)||cj[ce]:undefined;
if((cd===""||cd===undefined)&&!bP.contains(ck.ownerDocument,ck)){cd=bP.style(ck,ce)
}if(cj){if(!F.pixelMarginRight()&&ag.test(cd)&&a7.test(ce)){ch=cf.width;
cg=cf.minWidth;
ci=cf.maxWidth;
cf.minWidth=cf.maxWidth=cf.width=cd;
cd=cj.width;
cf.width=ch;
cf.minWidth=cg;
cf.maxWidth=ci
}}return cd===undefined?cd:cd+""
}
}else{if(b1.currentStyle){bx=function(cd){return cd.currentStyle
};
I=function(cj,cg,ci){var ck,ce,cd,cf,ch=cj.style;
ci=ci||bx(cj);
cf=ci?ci[cg]:undefined;
if(cf==null&&ch&&ch[cg]){cf=ch[cg]
}if(ag.test(cf)&&!bv.test(cg)){ck=ch.left;
ce=cj.runtimeStyle;
cd=ce&&ce.left;
if(cd){ce.left=cj.currentStyle.left
}ch.left=cg==="fontSize"?"1em":cf;
cf=ch.pixelLeft+"px";
ch.left=ck;
if(cd){ce.left=cd
}}return cf===undefined?cf:cf+""||"auto"
}
}}function be(cd,ce){return{get:function(){if(cd()){delete this.get;
return
}return(this.get=ce).apply(this,arguments)
}}
}var bq=/alpha\([^)]*\)/i,a2=/opacity\s*=\s*([^)]*)/i,M=/^(none|table(?!-c[ea]).+)/,bi=new RegExp("^("+aL+")(.*)$","i"),bl={position:"absolute",visibility:"hidden",display:"block"},bK={letterSpacing:"0",fontWeight:"400"},aE=["Webkit","O","Moz","ms"],bY=m.createElement("div").style;
function c(cd){if(cd in bY){return cd
}var cf=cd.charAt(0).toUpperCase()+cd.slice(1),ce=aE.length;
while(ce--){cd=aE[ce]+cf;
if(cd in bY){return cd
}}}function r(cj,cd){var ck,ch,ci,ce=[],cf=0,cg=cj.length;
for(;
cf<cg;
cf++){ch=cj[cf];
if(!ch.style){continue
}ce[cf]=bP._data(ch,"olddisplay");
ck=ch.style.display;
if(cd){if(!ce[cf]&&ck==="none"){ch.style.display=""
}if(ch.style.display===""&&aa(ch)){ce[cf]=bP._data(ch,"olddisplay",a8(ch.nodeName))
}}else{ci=aa(ch);
if(ck&&ck!=="none"||!ci){bP._data(ch,"olddisplay",ci?ck:bP.css(ch,"display"))
}}}for(cf=0;
cf<cg;
cf++){ch=cj[cf];
if(!ch.style){continue
}if(!cd||ch.style.display==="none"||ch.style.display===""){ch.style.display=cd?ce[cf]||"":"none"
}}return cj
}function aT(cd,cf,cg){var ce=bi.exec(cf);
return ce?Math.max(0,ce[1]-(cg||0))+(ce[2]||"px"):cf
}function aF(ch,ce,cd,cj,cg){var cf=cd===(cj?"border":"content")?4:ce==="width"?1:0,ci=0;
for(;
cf<4;
cf+=2){if(cd==="margin"){ci+=bP.css(ch,cd+b0[cf],true,cg)
}if(cj){if(cd==="content"){ci-=bP.css(ch,"padding"+b0[cf],true,cg)
}if(cd!=="margin"){ci-=bP.css(ch,"border"+b0[cf]+"Width",true,cg)
}}else{ci+=bP.css(ch,"padding"+b0[cf],true,cg);
if(cd!=="padding"){ci+=bP.css(ch,"border"+b0[cf]+"Width",true,cg)
}}}return ci
}function v(ch,ce,cd){var cg=true,ci=ce==="width"?ch.offsetWidth:ch.offsetHeight,cf=bx(ch),cj=F.boxSizing&&bP.css(ch,"boxSizing",false,cf)==="border-box";
if(ci<=0||ci==null){ci=I(ch,ce,cf);
if(ci<0||ci==null){ci=ch.style[ce]
}if(ag.test(ci)){return ci
}cg=cj&&(F.boxSizingReliable()||ci===ch.style[ce]);
ci=parseFloat(ci)||0
}return(ci+aF(ch,ce,cd||(cj?"border":"content"),cg,cf))+"px"
}bP.extend({cssHooks:{opacity:{get:function(cf,ce){if(ce){var cd=I(cf,"opacity");
return cd===""?"1":cd
}}}},cssNumber:{animationIterationCount:true,columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":F.cssFloat?"cssFloat":"styleFloat"},style:function(cf,ce,cl,cg){if(!cf||cf.nodeType===3||cf.nodeType===8||!cf.style){return
}var cj,ck,cm,ch=bP.camelCase(ce),cd=cf.style;
ce=bP.cssProps[ch]||(bP.cssProps[ch]=c(ch)||ch);
cm=bP.cssHooks[ce]||bP.cssHooks[ch];
if(cl!==undefined){ck=typeof cl;
if(ck==="string"&&(cj=b6.exec(cl))&&cj[1]){cl=A(cf,ce,cj);
ck="number"
}if(cl==null||cl!==cl){return
}if(ck==="number"){cl+=cj&&cj[3]||(bP.cssNumber[ch]?"":"px")
}if(!F.clearCloneStyle&&cl===""&&ce.indexOf("background")===0){cd[ce]="inherit"
}if(!cm||!("set" in cm)||(cl=cm.set(cf,cl,cg))!==undefined){try{cd[ce]=cl
}catch(ci){}}}else{if(cm&&"get" in cm&&(cj=cm.get(cf,false,cg))!==undefined){return cj
}return cd[ce]
}},css:function(cj,ch,ce,ci){var cg,ck,cd,cf=bP.camelCase(ch);
ch=bP.cssProps[cf]||(bP.cssProps[cf]=c(cf)||cf);
cd=bP.cssHooks[ch]||bP.cssHooks[cf];
if(cd&&"get" in cd){ck=cd.get(cj,true,ce)
}if(ck===undefined){ck=I(cj,ch,ci)
}if(ck==="normal"&&ch in bK){ck=bK[ch]
}if(ce===""||ce){cg=parseFloat(ck);
return ce===true||isFinite(cg)?cg||0:ck
}return ck
}});
bP.each(["height","width"],function(ce,cd){bP.cssHooks[cd]={get:function(ch,cg,cf){if(cg){return M.test(bP.css(ch,"display"))&&ch.offsetWidth===0?K(ch,bl,function(){return v(ch,cd,cf)
}):v(ch,cd,cf)
}},set:function(ch,ci,cf){var cg=cf&&bx(ch);
return aT(ch,ci,cf?aF(ch,cd,cf,F.boxSizing&&bP.css(ch,"boxSizing",false,cg)==="border-box",cg):0)
}}
});
if(!F.opacity){bP.cssHooks.opacity={get:function(ce,cd){return a2.test((cd&&ce.currentStyle?ce.currentStyle.filter:ce.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":cd?"1":""
},set:function(ch,ci){var cg=ch.style,ce=ch.currentStyle,cd=bP.isNumeric(ci)?"alpha(opacity="+ci*100+")":"",cf=ce&&ce.filter||cg.filter||"";
cg.zoom=1;
if((ci>=1||ci==="")&&bP.trim(cf.replace(bq,""))===""&&cg.removeAttribute){cg.removeAttribute("filter");
if(ci===""||ce&&!ce.filter){return
}}cg.filter=bq.test(cf)?cf.replace(bq,cd):cf+" "+cd
}}
}bP.cssHooks.marginRight=be(F.reliableMarginRight,function(ce,cd){if(cd){return K(ce,{display:"inline-block"},I,[ce,"marginRight"])
}});
bP.cssHooks.marginLeft=be(F.reliableMarginLeft,function(ce,cd){if(cd){return(parseFloat(I(ce,"marginLeft"))||(bP.contains(ce.ownerDocument,ce)?ce.getBoundingClientRect().left-K(ce,{marginLeft:0},function(){return ce.getBoundingClientRect().left
}):0))+"px"
}});
bP.each({margin:"",padding:"",border:"Width"},function(cd,ce){bP.cssHooks[cd+ce]={expand:function(ch){var cg=0,cf={},ci=typeof ch==="string"?ch.split(" "):[ch];
for(;
cg<4;
cg++){cf[cd+b0[cg]+ce]=ci[cg]||ci[cg-2]||ci[0]
}return cf
}};
if(!a7.test(cd)){bP.cssHooks[cd+ce].set=aT
}});
bP.fn.extend({css:function(cd,ce){return aJ(this,function(cj,cg,ck){var ci,cf,cl={},ch=0;
if(bP.isArray(cg)){ci=bx(cj);
cf=cg.length;
for(;
ch<cf;
ch++){cl[cg[ch]]=bP.css(cj,cg[ch],false,ci)
}return cl
}return ck!==undefined?bP.style(cj,cg,ck):bP.css(cj,cg)
},cd,ce,arguments.length>1)
},show:function(){return r(this,true)
},hide:function(){return r(this)
},toggle:function(cd){if(typeof cd==="boolean"){return cd?this.show():this.hide()
}return this.each(function(){if(aa(this)){bP(this).show()
}else{bP(this).hide()
}})
}});
function P(cf,ce,ch,cd,cg){return new P.prototype.init(cf,ce,ch,cd,cg)
}bP.Tween=P;
P.prototype={constructor:P,init:function(cg,ce,ci,cd,ch,cf){this.elem=cg;
this.prop=ci;
this.easing=ch||bP.easing._default;
this.options=ce;
this.start=this.now=this.cur();
this.end=cd;
this.unit=cf||(bP.cssNumber[ci]?"":"px")
},cur:function(){var cd=P.propHooks[this.prop];
return cd&&cd.get?cd.get(this):P.propHooks._default.get(this)
},run:function(cf){var ce,cd=P.propHooks[this.prop];
if(this.options.duration){this.pos=ce=bP.easing[this.easing](cf,this.options.duration*cf,0,1,this.options.duration)
}else{this.pos=ce=cf
}this.now=(this.end-this.start)*ce+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(cd&&cd.set){cd.set(this)
}else{P.propHooks._default.set(this)
}return this
}};
P.prototype.init.prototype=P.prototype;
P.propHooks={_default:{get:function(ce){var cd;
if(ce.elem.nodeType!==1||ce.elem[ce.prop]!=null&&ce.elem.style[ce.prop]==null){return ce.elem[ce.prop]
}cd=bP.css(ce.elem,ce.prop,"");
return !cd||cd==="auto"?0:cd
},set:function(cd){if(bP.fx.step[cd.prop]){bP.fx.step[cd.prop](cd)
}else{if(cd.elem.nodeType===1&&(cd.elem.style[bP.cssProps[cd.prop]]!=null||bP.cssHooks[cd.prop])){bP.style(cd.elem,cd.prop,cd.now+cd.unit)
}else{cd.elem[cd.prop]=cd.now
}}}}};
P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(cd){if(cd.elem.nodeType&&cd.elem.parentNode){cd.elem[cd.prop]=cd.now
}}};
bP.easing={linear:function(cd){return cd
},swing:function(cd){return 0.5-Math.cos(cd*Math.PI)/2
},_default:"swing"};
bP.fx=P.prototype.init;
bP.fx.step={};
var U,al,bX=/^(?:toggle|show|hide)$/,bV=/queueHooks$/;
function bu(){bc.setTimeout(function(){U=undefined
});
return(U=bP.now())
}function bO(cf,ch){var cg,cd={height:cf},ce=0;
ch=ch?1:0;
for(;
ce<4;
ce+=2-ch){cg=b0[ce];
cd["margin"+cg]=cd["padding"+cg]=cf
}if(ch){cd.opacity=cd.width=cf
}return cd
}function bk(ch,cj,cg){var ce,ci=(e.tweeners[cj]||[]).concat(e.tweeners["*"]),cd=0,cf=ci.length;
for(;
cd<cf;
cd++){if((ce=ci[cd].call(cg,cj,ch))){return ce
}}}function g(cg,cl,cd){var cf,co,ci,cr,cs,cp,ck,cn,ch=this,cm={},ce=cg.style,cj=cg.nodeType&&aa(cg),cq=bP._data(cg,"fxshow");
if(!cd.queue){cs=bP._queueHooks(cg,"fx");
if(cs.unqueued==null){cs.unqueued=0;
cp=cs.empty.fire;
cs.empty.fire=function(){if(!cs.unqueued){cp()
}}
}cs.unqueued++;
ch.always(function(){ch.always(function(){cs.unqueued--;
if(!bP.queue(cg,"fx").length){cs.empty.fire()
}})
})
}if(cg.nodeType===1&&("height" in cl||"width" in cl)){cd.overflow=[ce.overflow,ce.overflowX,ce.overflowY];
ck=bP.css(cg,"display");
cn=ck==="none"?bP._data(cg,"olddisplay")||a8(cg.nodeName):ck;
if(cn==="inline"&&bP.css(cg,"float")==="none"){if(!F.inlineBlockNeedsLayout||a8(cg.nodeName)==="inline"){ce.display="inline-block"
}else{ce.zoom=1
}}}if(cd.overflow){ce.overflow="hidden";
if(!F.shrinkWrapBlocks()){ch.always(function(){ce.overflow=cd.overflow[0];
ce.overflowX=cd.overflow[1];
ce.overflowY=cd.overflow[2]
})
}}for(cf in cl){co=cl[cf];
if(bX.exec(co)){delete cl[cf];
ci=ci||co==="toggle";
if(co===(cj?"hide":"show")){if(co==="show"&&cq&&cq[cf]!==undefined){cj=true
}else{continue
}}cm[cf]=cq&&cq[cf]||bP.style(cg,cf)
}else{ck=undefined
}}if(!bP.isEmptyObject(cm)){if(cq){if("hidden" in cq){cj=cq.hidden
}}else{cq=bP._data(cg,"fxshow",{})
}if(ci){cq.hidden=!cj
}if(cj){bP(cg).show()
}else{ch.done(function(){bP(cg).hide()
})
}ch.done(function(){var ct;
bP._removeData(cg,"fxshow");
for(ct in cm){bP.style(cg,ct,cm[ct])
}});
for(cf in cm){cr=bk(cj?cq[cf]:0,cf,ch);
if(!(cf in cq)){cq[cf]=cr.start;
if(cj){cr.end=cr.start;
cr.start=cf==="width"||cf==="height"?1:0
}}}}else{if((ck==="none"?a8(cg.nodeName):ck)==="inline"){ce.display=ck
}}}function aw(cg,ci){var cf,ce,cj,ch,cd;
for(cf in cg){ce=bP.camelCase(cf);
cj=ci[ce];
ch=cg[cf];
if(bP.isArray(ch)){cj=ch[1];
ch=cg[cf]=ch[0]
}if(cf!==ce){cg[ce]=ch;
delete cg[cf]
}cd=bP.cssHooks[ce];
if(cd&&"expand" in cd){ch=cd.expand(ch);
delete cg[ce];
for(cf in ch){if(!(cf in cg)){cg[cf]=ch[cf];
ci[cf]=cj
}}}else{ci[ce]=cj
}}}function e(cf,cj,cm){var cn,cd,ci=0,ce=e.prefilters.length,cl=bP.Deferred().always(function(){delete ch.elem
}),ch=function(){if(cd){return false
}var ct=U||bu(),cq=Math.max(0,cg.startTime+cg.duration-ct),co=cq/cg.duration||0,cs=1-co,cp=0,cr=cg.tweens.length;
for(;
cp<cr;
cp++){cg.tweens[cp].run(cs)
}cl.notifyWith(cf,[cg,cs,cq]);
if(cs<1&&cr){return cq
}else{cl.resolveWith(cf,[cg]);
return false
}},cg=cl.promise({elem:cf,props:bP.extend({},cj),opts:bP.extend(true,{specialEasing:{},easing:bP.easing._default},cm),originalProperties:cj,originalOptions:cm,startTime:U||bu(),duration:cm.duration,tweens:[],createTween:function(cq,co){var cp=bP.Tween(cf,cg.opts,cq,co,cg.opts.specialEasing[cq]||cg.opts.easing);
cg.tweens.push(cp);
return cp
},stop:function(cp){var co=0,cq=cp?cg.tweens.length:0;
if(cd){return this
}cd=true;
for(;
co<cq;
co++){cg.tweens[co].run(1)
}if(cp){cl.notifyWith(cf,[cg,1,0]);
cl.resolveWith(cf,[cg,cp])
}else{cl.rejectWith(cf,[cg,cp])
}return this
}}),ck=cg.props;
aw(ck,cg.opts.specialEasing);
for(;
ci<ce;
ci++){cn=e.prefilters[ci].call(cg,cf,ck,cg.opts);
if(cn){if(bP.isFunction(cn.stop)){bP._queueHooks(cg.elem,cg.opts.queue).stop=bP.proxy(cn.stop,cn)
}return cn
}}bP.map(ck,bk,cg);
if(bP.isFunction(cg.opts.start)){cg.opts.start.call(cf,cg)
}bP.fx.timer(bP.extend(ch,{elem:cf,anim:cg,queue:cg.opts.queue}));
return cg.progress(cg.opts.progress).done(cg.opts.done,cg.opts.complete).fail(cg.opts.fail).always(cg.opts.always)
}bP.Animation=bP.extend(e,{tweeners:{"*":[function(cf,ce){var cd=this.createTween(cf,ce);
A(cd.elem,cf,b6.exec(ce),cd);
return cd
}]},tweener:function(ce,ch){if(bP.isFunction(ce)){ch=ce;
ce=["*"]
}else{ce=ce.match(aM)
}var cg,cd=0,cf=ce.length;
for(;
cd<cf;
cd++){cg=ce[cd];
e.tweeners[cg]=e.tweeners[cg]||[];
e.tweeners[cg].unshift(ch)
}},prefilters:[g],prefilter:function(ce,cd){if(cd){e.prefilters.unshift(ce)
}else{e.prefilters.push(ce)
}}});
bP.speed=function(cf,cg,ce){var cd=cf&&typeof cf==="object"?bP.extend({},cf):{complete:ce||!ce&&cg||bP.isFunction(cf)&&cf,duration:cf,easing:ce&&cg||cg&&!bP.isFunction(cg)&&cg};
cd.duration=bP.fx.off?0:typeof cd.duration==="number"?cd.duration:cd.duration in bP.fx.speeds?bP.fx.speeds[cd.duration]:bP.fx.speeds._default;
if(cd.queue==null||cd.queue===true){cd.queue="fx"
}cd.old=cd.complete;
cd.complete=function(){if(bP.isFunction(cd.old)){cd.old.call(this)
}if(cd.queue){bP.dequeue(this,cd.queue)
}};
return cd
};
bP.fn.extend({fadeTo:function(cd,cg,cf,ce){return this.filter(aa).css("opacity",0).show().end().animate({opacity:cg},cd,cf,ce)
},animate:function(cj,cg,ci,ch){var cf=bP.isEmptyObject(cj),cd=bP.speed(cg,ci,ch),ce=function(){var ck=e(this,bP.extend({},cj),cd);
if(cf||bP._data(this,"finish")){ck.stop(true)
}};
ce.finish=ce;
return cf||cd.queue===false?this.each(ce):this.queue(cd.queue,ce)
},stop:function(cf,ce,cd){var cg=function(ch){var ci=ch.stop;
delete ch.stop;
ci(cd)
};
if(typeof cf!=="string"){cd=ce;
ce=cf;
cf=undefined
}if(ce&&cf!==false){this.queue(cf||"fx",[])
}return this.each(function(){var ck=true,ch=cf!=null&&cf+"queueHooks",cj=bP.timers,ci=bP._data(this);
if(ch){if(ci[ch]&&ci[ch].stop){cg(ci[ch])
}}else{for(ch in ci){if(ci[ch]&&ci[ch].stop&&bV.test(ch)){cg(ci[ch])
}}}for(ch=cj.length;
ch--;
){if(cj[ch].elem===this&&(cf==null||cj[ch].queue===cf)){cj[ch].anim.stop(cd);
ck=false;
cj.splice(ch,1)
}}if(ck||!cd){bP.dequeue(this,cf)
}})
},finish:function(cd){if(cd!==false){cd=cd||"fx"
}return this.each(function(){var cg,cj=bP._data(this),cf=cj[cd+"queue"],ce=cj[cd+"queueHooks"],ci=bP.timers,ch=cf?cf.length:0;
cj.finish=true;
bP.queue(this,cd,[]);
if(ce&&ce.stop){ce.stop.call(this,true)
}for(cg=ci.length;
cg--;
){if(ci[cg].elem===this&&ci[cg].queue===cd){ci[cg].anim.stop(true);
ci.splice(cg,1)
}}for(cg=0;
cg<ch;
cg++){if(cf[cg]&&cf[cg].finish){cf[cg].finish.call(this)
}}delete cj.finish
})
}});
bP.each(["toggle","show","hide"],function(ce,cd){var cf=bP.fn[cd];
bP.fn[cd]=function(cg,ci,ch){return cg==null||typeof cg==="boolean"?cf.apply(this,arguments):this.animate(bO(cd,true),cg,ci,ch)
}
});
bP.each({slideDown:bO("show"),slideUp:bO("hide"),slideToggle:bO("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(cd,ce){bP.fn[cd]=function(cf,ch,cg){return this.animate(ce,cf,ch,cg)
}
});
bP.timers=[];
bP.fx.tick=function(){var cf,ce=bP.timers,cd=0;
U=bP.now();
for(;
cd<ce.length;
cd++){cf=ce[cd];
if(!cf()&&ce[cd]===cf){ce.splice(cd--,1)
}}if(!ce.length){bP.fx.stop()
}U=undefined
};
bP.fx.timer=function(cd){bP.timers.push(cd);
if(cd()){bP.fx.start()
}else{bP.timers.pop()
}};
bP.fx.interval=13;
bP.fx.start=function(){if(!al){al=bc.setInterval(bP.fx.tick,bP.fx.interval)
}};
bP.fx.stop=function(){bc.clearInterval(al);
al=null
};
bP.fx.speeds={slow:600,fast:200,_default:400};
bP.fn.delay=function(ce,cd){ce=bP.fx?bP.fx.speeds[ce]||ce:ce;
cd=cd||"fx";
return this.queue(cd,function(cg,cf){var ch=bc.setTimeout(cg,ce);
cf.stop=function(){bc.clearTimeout(ch)
}
})
};
(function(){var ce,cf=m.createElement("input"),ch=m.createElement("div"),cd=m.createElement("select"),cg=cd.appendChild(m.createElement("option"));
ch=m.createElement("div");
ch.setAttribute("className","t");
ch.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
ce=ch.getElementsByTagName("a")[0];
cf.setAttribute("type","checkbox");
ch.appendChild(cf);
ce=ch.getElementsByTagName("a")[0];
ce.style.cssText="top:1px";
F.getSetAttribute=ch.className!=="t";
F.style=/top/.test(ce.getAttribute("style"));
F.hrefNormalized=ce.getAttribute("href")==="/a";
F.checkOn=!!cf.value;
F.optSelected=cg.selected;
F.enctype=!!m.createElement("form").enctype;
cd.disabled=true;
F.optDisabled=!cg.disabled;
cf=m.createElement("input");
cf.setAttribute("value","");
F.input=cf.getAttribute("value")==="";
cf.value="t";
cf.setAttribute("type","radio");
F.radioValue=cf.value==="t"
})();
var at=/\r/g,a4=/[\x20\t\r\n\f]+/g;
bP.fn.extend({val:function(cg){var cd,ce,ch,cf=this[0];
if(!arguments.length){if(cf){cd=bP.valHooks[cf.type]||bP.valHooks[cf.nodeName.toLowerCase()];
if(cd&&"get" in cd&&(ce=cd.get(cf,"value"))!==undefined){return ce
}ce=cf.value;
return typeof ce==="string"?ce.replace(at,""):ce==null?"":ce
}return
}ch=bP.isFunction(cg);
return this.each(function(ci){var cj;
if(this.nodeType!==1){return
}if(ch){cj=cg.call(this,ci,bP(this).val())
}else{cj=cg
}if(cj==null){cj=""
}else{if(typeof cj==="number"){cj+=""
}else{if(bP.isArray(cj)){cj=bP.map(cj,function(ck){return ck==null?"":ck+""
})
}}}cd=bP.valHooks[this.type]||bP.valHooks[this.nodeName.toLowerCase()];
if(!cd||!("set" in cd)||cd.set(this,cj,"value")===undefined){this.value=cj
}})
}});
bP.extend({valHooks:{option:{get:function(cd){var ce=bP.find.attr(cd,"value");
return ce!=null?ce:bP.trim(bP.text(cd)).replace(a4," ")
}},select:{get:function(cd){var cj,cf,cl=cd.options,ch=cd.selectedIndex,cg=cd.type==="select-one"||ch<0,ck=cg?null:[],ci=cg?ch+1:cl.length,ce=ch<0?ci:cg?ch:0;
for(;
ce<ci;
ce++){cf=cl[ce];
if((cf.selected||ce===ch)&&(F.optDisabled?!cf.disabled:cf.getAttribute("disabled")===null)&&(!cf.parentNode.disabled||!bP.nodeName(cf.parentNode,"optgroup"))){cj=bP(cf).val();
if(cg){return cj
}ck.push(cj)
}}return ck
},set:function(ci,cj){var ck,ch,cf=ci.options,cd=bP.makeArray(cj),cg=cf.length;
while(cg--){ch=cf[cg];
if(bP.inArray(bP.valHooks.option.get(ch),cd)>-1){try{ch.selected=ck=true
}catch(ce){ch.scrollHeight
}}else{ch.selected=false
}}if(!ck){ci.selectedIndex=-1
}return cf
}}}});
bP.each(["radio","checkbox"],function(){bP.valHooks[this]={set:function(cd,ce){if(bP.isArray(ce)){return(cd.checked=bP.inArray(bP(cd).val(),ce)>-1)
}}};
if(!F.checkOn){bP.valHooks[this].get=function(cd){return cd.getAttribute("value")===null?"on":cd.value
}
}});
var bh,ca,bU=bP.expr.attrHandle,ay=/^(?:checked|selected)$/i,bT=F.getSetAttribute,bM=F.input;
bP.fn.extend({attr:function(cd,ce){return aJ(this,bP.attr,cd,ce,arguments.length>1)
},removeAttr:function(cd){return this.each(function(){bP.removeAttr(this,cd)
})
}});
bP.extend({attr:function(ch,cg,ci){var cf,cd,ce=ch.nodeType;
if(ce===3||ce===8||ce===2){return
}if(typeof ch.getAttribute==="undefined"){return bP.prop(ch,cg,ci)
}if(ce!==1||!bP.isXMLDoc(ch)){cg=cg.toLowerCase();
cd=bP.attrHooks[cg]||(bP.expr.match.bool.test(cg)?ca:bh)
}if(ci!==undefined){if(ci===null){bP.removeAttr(ch,cg);
return
}if(cd&&"set" in cd&&(cf=cd.set(ch,ci,cg))!==undefined){return cf
}ch.setAttribute(cg,ci+"");
return ci
}if(cd&&"get" in cd&&(cf=cd.get(ch,cg))!==null){return cf
}cf=bP.find.attr(ch,cg);
return cf==null?undefined:cf
},attrHooks:{type:{set:function(cd,ce){if(!F.radioValue&&ce==="radio"&&bP.nodeName(cd,"input")){var cf=cd.value;
cd.setAttribute("type",ce);
if(cf){cd.value=cf
}return ce
}}}},removeAttr:function(cf,ch){var cd,cg,ce=0,ci=ch&&ch.match(aM);
if(ci&&cf.nodeType===1){while((cd=ci[ce++])){cg=bP.propFix[cd]||cd;
if(bP.expr.match.bool.test(cd)){if(bM&&bT||!ay.test(cd)){cf[cg]=false
}else{cf[bP.camelCase("default-"+cd)]=cf[cg]=false
}}else{bP.attr(cf,cd,"")
}cf.removeAttribute(bT?cd:cg)
}}}});
ca={set:function(ce,cf,cd){if(cf===false){bP.removeAttr(ce,cd)
}else{if(bM&&bT||!ay.test(cd)){ce.setAttribute(!bT&&bP.propFix[cd]||cd,cd)
}else{ce[bP.camelCase("default-"+cd)]=ce[cd]=true
}}return cd
}};
bP.each(bP.expr.match.bool.source.match(/\w+/g),function(cf,ce){var cd=bU[ce]||bP.find.attr;
if(bM&&bT||!ay.test(ce)){bU[ce]=function(ci,ch,ck){var cg,cj;
if(!ck){cj=bU[ch];
bU[ch]=cg;
cg=cd(ci,ch,ck)!=null?ch.toLowerCase():null;
bU[ch]=cj
}return cg
}
}else{bU[ce]=function(ch,cg,ci){if(!ci){return ch[bP.camelCase("default-"+cg)]?cg.toLowerCase():null
}}
}});
if(!bM||!bT){bP.attrHooks.value={set:function(ce,cf,cd){if(bP.nodeName(ce,"input")){ce.defaultValue=cf
}else{return bh&&bh.set(ce,cf,cd)
}}}
}if(!bT){bh={set:function(cf,cg,ce){var cd=cf.getAttributeNode(ce);
if(!cd){cf.setAttributeNode((cd=cf.ownerDocument.createAttribute(ce)))
}cd.value=cg+="";
if(ce==="value"||cg===cf.getAttribute(ce)){return cg
}}};
bU.id=bU.name=bU.coords=function(cf,ce,cg){var cd;
if(!cg){return(cd=cf.getAttributeNode(ce))&&cd.value!==""?cd.value:null
}};
bP.valHooks.button={get:function(cf,ce){var cd=cf.getAttributeNode(ce);
if(cd&&cd.specified){return cd.value
}},set:bh.set};
bP.attrHooks.contenteditable={set:function(ce,cf,cd){bh.set(ce,cf===""?false:cf,cd)
}};
bP.each(["width","height"],function(ce,cd){bP.attrHooks[cd]={set:function(cf,cg){if(cg===""){cf.setAttribute(cd,"auto");
return cg
}}}
})
}if(!F.style){bP.attrHooks.style={get:function(cd){return cd.style.cssText||undefined
},set:function(cd,ce){return(cd.style.cssText=ce+"")
}}
}var aP=/^(?:input|select|textarea|button|object)$/i,H=/^(?:a|area)$/i;
bP.fn.extend({prop:function(cd,ce){return aJ(this,bP.prop,cd,ce,arguments.length>1)
},removeProp:function(cd){cd=bP.propFix[cd]||cd;
return this.each(function(){try{this[cd]=undefined;
delete this[cd]
}catch(ce){}})
}});
bP.extend({prop:function(ch,cg,ci){var cf,cd,ce=ch.nodeType;
if(ce===3||ce===8||ce===2){return
}if(ce!==1||!bP.isXMLDoc(ch)){cg=bP.propFix[cg]||cg;
cd=bP.propHooks[cg]
}if(ci!==undefined){if(cd&&"set" in cd&&(cf=cd.set(ch,ci,cg))!==undefined){return cf
}return(ch[cg]=ci)
}if(cd&&"get" in cd&&(cf=cd.get(ch,cg))!==null){return cf
}return ch[cg]
},propHooks:{tabIndex:{get:function(ce){var cd=bP.find.attr(ce,"tabindex");
return cd?parseInt(cd,10):aP.test(ce.nodeName)||H.test(ce.nodeName)&&ce.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}});
if(!F.hrefNormalized){bP.each(["href","src"],function(ce,cd){bP.propHooks[cd]={get:function(cf){return cf.getAttribute(cd,4)
}}
})
}if(!F.optSelected){bP.propHooks.selected={get:function(ce){var cd=ce.parentNode;
if(cd){cd.selectedIndex;
if(cd.parentNode){cd.parentNode.selectedIndex
}}return null
},set:function(ce){var cd=ce.parentNode;
if(cd){cd.selectedIndex;
if(cd.parentNode){cd.parentNode.selectedIndex
}}}}
}bP.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bP.propFix[this.toLowerCase()]=this
});
if(!F.enctype){bP.propFix.enctype="encoding"
}var bR=/[\t\r\n\f]/g;
function D(cd){return bP.attr(cd,"class")||""
}bP.fn.extend({addClass:function(ck){var cf,ce,cl,cg,cj,ch,cd,ci=0;
if(bP.isFunction(ck)){return this.each(function(cm){bP(this).addClass(ck.call(this,cm,D(this)))
})
}if(typeof ck==="string"&&ck){cf=ck.match(aM)||[];
while((ce=this[ci++])){cg=D(ce);
cl=ce.nodeType===1&&(" "+cg+" ").replace(bR," ");
if(cl){ch=0;
while((cj=cf[ch++])){if(cl.indexOf(" "+cj+" ")<0){cl+=cj+" "
}}cd=bP.trim(cl);
if(cg!==cd){bP.attr(ce,"class",cd)
}}}}return this
},removeClass:function(ck){var cf,ce,cl,cg,cj,ch,cd,ci=0;
if(bP.isFunction(ck)){return this.each(function(cm){bP(this).removeClass(ck.call(this,cm,D(this)))
})
}if(!arguments.length){return this.attr("class","")
}if(typeof ck==="string"&&ck){cf=ck.match(aM)||[];
while((ce=this[ci++])){cg=D(ce);
cl=ce.nodeType===1&&(" "+cg+" ").replace(bR," ");
if(cl){ch=0;
while((cj=cf[ch++])){while(cl.indexOf(" "+cj+" ")>-1){cl=cl.replace(" "+cj+" "," ")
}}cd=bP.trim(cl);
if(cg!==cd){bP.attr(ce,"class",cd)
}}}}return this
},toggleClass:function(cf,cd){var ce=typeof cf;
if(typeof cd==="boolean"&&ce==="string"){return cd?this.addClass(cf):this.removeClass(cf)
}if(bP.isFunction(cf)){return this.each(function(cg){bP(this).toggleClass(cf.call(this,cg,D(this),cd),cd)
})
}return this.each(function(){var ci,ch,cg,cj;
if(ce==="string"){ch=0;
cg=bP(this);
cj=cf.match(aM)||[];
while((ci=cj[ch++])){if(cg.hasClass(ci)){cg.removeClass(ci)
}else{cg.addClass(ci)
}}}else{if(cf===undefined||ce==="boolean"){ci=D(this);
if(ci){bP._data(this,"__className__",ci)
}bP.attr(this,"class",ci||cf===false?"":bP._data(this,"__className__")||"")
}}})
},hasClass:function(cd){var cf,cg,ce=0;
cf=" "+cd+" ";
while((cg=this[ce++])){if(cg.nodeType===1&&(" "+D(cg)+" ").replace(bR," ").indexOf(cf)>-1){return true
}}return false
}});
bP.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(ce,cd){bP.fn[cd]=function(cg,cf){return arguments.length>0?this.on(cd,null,cg,cf):this.trigger(cd)
}
});
bP.fn.extend({hover:function(cd,ce){return this.mouseenter(cd).mouseleave(ce||cd)
}});
var aV=bc.location;
var bw=bP.now();
var bW=(/\?/);
var a9=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
bP.parseJSON=function(cd){if(bc.JSON&&bc.JSON.parse){return bc.JSON.parse(cd+"")
}var cg,cf=null,ce=bP.trim(cd+"");
return ce&&!bP.trim(ce.replace(a9,function(cj,ch,ci,ck){if(cg&&ch){cf=0
}if(cf===0){return cj
}cg=ci||ch;
cf+=!ck-!ci;
return""
}))?(Function("return "+ce))():bP.error("Invalid JSON: "+cd)
};
bP.parseXML=function(cf){var cd,ce;
if(!cf||typeof cf!=="string"){return null
}try{if(bc.DOMParser){ce=new bc.DOMParser();
cd=ce.parseFromString(cf,"text/xml")
}else{cd=new bc.ActiveXObject("Microsoft.XMLDOM");
cd.async="false";
cd.loadXML(cf)
}}catch(cg){cd=undefined
}if(!cd||!cd.documentElement||cd.getElementsByTagName("parsererror").length){bP.error("Invalid XML: "+cf)
}return cd
};
var ax=/#.*$/,Z=/([?&])_=[^&]*/,ao=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,E=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,q=/^(?:GET|HEAD)$/,aQ=/^\/\//,a1=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,t={},bg={},a5="*/".concat("*"),ai=aV.href,cb=a1.exec(ai.toLowerCase())||[];
function bQ(cd){return function(ch,ci){if(typeof ch!=="string"){ci=ch;
ch="*"
}var ce,cf=0,cg=ch.toLowerCase().match(aM)||[];
if(bP.isFunction(ci)){while((ce=cg[cf++])){if(ce.charAt(0)==="+"){ce=ce.slice(1)||"*";
(cd[ce]=cd[ce]||[]).unshift(ci)
}else{(cd[ce]=cd[ce]||[]).push(ci)
}}}}
}function p(cd,cf,cj,cg){var ce={},ch=(cd===bg);
function ci(ck){var cl;
ce[ck]=true;
bP.each(cd[ck]||[],function(cn,cm){var co=cm(cf,cj,cg);
if(typeof co==="string"&&!ch&&!ce[co]){cf.dataTypes.unshift(co);
ci(co);
return false
}else{if(ch){return !(cl=co)
}}});
return cl
}return ci(cf.dataTypes[0])||!ce["*"]&&ci("*")
}function s(cf,cg){var cd,ce,ch=bP.ajaxSettings.flatOptions||{};
for(ce in cg){if(cg[ce]!==undefined){(ch[ce]?cf:(cd||(cd={})))[ce]=cg[ce]
}}if(cd){bP.extend(true,cf,cd)
}return cf
}function f(cl,ck,ch){var cd,cg,cf,ci,ce=cl.contents,cj=cl.dataTypes;
while(cj[0]==="*"){cj.shift();
if(cg===undefined){cg=cl.mimeType||ck.getResponseHeader("Content-Type")
}}if(cg){for(ci in ce){if(ce[ci]&&ce[ci].test(cg)){cj.unshift(ci);
break
}}}if(cj[0] in ch){cf=cj[0]
}else{for(ci in ch){if(!cj[0]||cl.converters[ci+" "+cj[0]]){cf=ci;
break
}if(!cd){cd=ci
}}cf=cf||cd
}if(cf){if(cf!==cj[0]){cj.unshift(cf)
}return ch[cf]
}}function an(co,cg,cl,ce){var cd,cj,cm,ch,cf,cn={},ck=co.dataTypes.slice();
if(ck[1]){for(cm in co.converters){cn[cm.toLowerCase()]=co.converters[cm]
}}cj=ck.shift();
while(cj){if(co.responseFields[cj]){cl[co.responseFields[cj]]=cg
}if(!cf&&ce&&co.dataFilter){cg=co.dataFilter(cg,co.dataType)
}cf=cj;
cj=ck.shift();
if(cj){if(cj==="*"){cj=cf
}else{if(cf!=="*"&&cf!==cj){cm=cn[cf+" "+cj]||cn["* "+cj];
if(!cm){for(cd in cn){ch=cd.split(" ");
if(ch[1]===cj){cm=cn[cf+" "+ch[0]]||cn["* "+ch[0]];
if(cm){if(cm===true){cm=cn[cd]
}else{if(cn[cd]!==true){cj=ch[0];
ck.unshift(ch[1])
}}break
}}}}if(cm!==true){if(cm&&co["throws"]){cg=cm(cg)
}else{try{cg=cm(cg)
}catch(ci){return{state:"parsererror",error:cm?ci:"No conversion from "+cf+" to "+cj}
}}}}}}}return{state:"success",data:cg}
}bP.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ai,type:"GET",isLocal:E.test(cb[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":a5,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":bP.parseJSON,"text xml":bP.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(ce,cd){return cd?s(s(ce,bP.ajaxSettings),cd):s(bP.ajaxSettings,ce)
},ajaxPrefilter:bQ(t),ajaxTransport:bQ(bg),ajax:function(ch,ce){if(typeof ch==="object"){ce=ch;
ch=undefined
}ce=ce||{};
var cq,cs,ci,cx,cm,cd,ct,cf,cl=bP.ajaxSetup({},ce),cz=cl.context||cl,co=cl.context&&(cz.nodeType||cz.jquery)?bP(cz):bP.event,cy=bP.Deferred(),cv=bP.Callbacks("once memory"),cj=cl.statusCode||{},cp={},cw={},cg=0,ck="canceled",cr={readyState:0,getResponseHeader:function(cB){var cA;
if(cg===2){if(!cf){cf={};
while((cA=ao.exec(cx))){cf[cA[1].toLowerCase()]=cA[2]
}}cA=cf[cB.toLowerCase()]
}return cA==null?null:cA
},getAllResponseHeaders:function(){return cg===2?cx:null
},setRequestHeader:function(cB,cC){var cA=cB.toLowerCase();
if(!cg){cB=cw[cA]=cw[cA]||cB;
cp[cB]=cC
}return this
},overrideMimeType:function(cA){if(!cg){cl.mimeType=cA
}return this
},statusCode:function(cB){var cA;
if(cB){if(cg<2){for(cA in cB){cj[cA]=[cj[cA],cB[cA]]
}}else{cr.always(cB[cr.status])
}}return this
},abort:function(cB){var cA=cB||ck;
if(ct){ct.abort(cA)
}cn(0,cA);
return this
}};
cy.promise(cr).complete=cv.add;
cr.success=cr.done;
cr.error=cr.fail;
cl.url=((ch||cl.url||ai)+"").replace(ax,"").replace(aQ,cb[1]+"//");
cl.type=ce.method||ce.type||cl.method||cl.type;
cl.dataTypes=bP.trim(cl.dataType||"*").toLowerCase().match(aM)||[""];
if(cl.crossDomain==null){cq=a1.exec(cl.url.toLowerCase());
cl.crossDomain=!!(cq&&(cq[1]!==cb[1]||cq[2]!==cb[2]||(cq[3]||(cq[1]==="http:"?"80":"443"))!==(cb[3]||(cb[1]==="http:"?"80":"443"))))
}if(cl.data&&cl.processData&&typeof cl.data!=="string"){cl.data=bP.param(cl.data,cl.traditional)
}p(t,cl,ce,cr);
if(cg===2){return cr
}cd=bP.event&&cl.global;
if(cd&&bP.active++===0){bP.event.trigger("ajaxStart")
}cl.type=cl.type.toUpperCase();
cl.hasContent=!q.test(cl.type);
ci=cl.url;
if(!cl.hasContent){if(cl.data){ci=(cl.url+=(bW.test(ci)?"&":"?")+cl.data);
delete cl.data
}if(cl.cache===false){cl.url=Z.test(ci)?ci.replace(Z,"$1_="+bw++):ci+(bW.test(ci)?"&":"?")+"_="+bw++
}}if(cl.ifModified){if(bP.lastModified[ci]){cr.setRequestHeader("If-Modified-Since",bP.lastModified[ci])
}if(bP.etag[ci]){cr.setRequestHeader("If-None-Match",bP.etag[ci])
}}if(cl.data&&cl.hasContent&&cl.contentType!==false||ce.contentType){cr.setRequestHeader("Content-Type",cl.contentType)
}cr.setRequestHeader("Accept",cl.dataTypes[0]&&cl.accepts[cl.dataTypes[0]]?cl.accepts[cl.dataTypes[0]]+(cl.dataTypes[0]!=="*"?", "+a5+"; q=0.01":""):cl.accepts["*"]);
for(cs in cl.headers){cr.setRequestHeader(cs,cl.headers[cs])
}if(cl.beforeSend&&(cl.beforeSend.call(cz,cr,cl)===false||cg===2)){return cr.abort()
}ck="abort";
for(cs in {success:1,error:1,complete:1}){cr[cs](cl[cs])
}ct=p(bg,cl,ce,cr);
if(!ct){cn(-1,"No Transport")
}else{cr.readyState=1;
if(cd){co.trigger("ajaxSend",[cr,cl])
}if(cg===2){return cr
}if(cl.async&&cl.timeout>0){cm=bc.setTimeout(function(){cr.abort("timeout")
},cl.timeout)
}try{cg=1;
ct.send(cp,cn)
}catch(cu){if(cg<2){cn(-1,cu)
}else{throw cu
}}}function cn(cF,cB,cG,cD){var cA,cJ,cH,cE,cI,cC=cB;
if(cg===2){return
}cg=2;
if(cm){bc.clearTimeout(cm)
}ct=undefined;
cx=cD||"";
cr.readyState=cF>0?4:0;
cA=cF>=200&&cF<300||cF===304;
if(cG){cE=f(cl,cr,cG)
}cE=an(cl,cE,cr,cA);
if(cA){if(cl.ifModified){cI=cr.getResponseHeader("Last-Modified");
if(cI){bP.lastModified[ci]=cI
}cI=cr.getResponseHeader("etag");
if(cI){bP.etag[ci]=cI
}}if(cF===204||cl.type==="HEAD"){cC="nocontent"
}else{if(cF===304){cC="notmodified"
}else{cC=cE.state;
cJ=cE.data;
cH=cE.error;
cA=!cH
}}}else{cH=cC;
if(cF||!cC){cC="error";
if(cF<0){cF=0
}}}cr.status=cF;
cr.statusText=(cB||cC)+"";
if(cA){cy.resolveWith(cz,[cJ,cC,cr])
}else{cy.rejectWith(cz,[cr,cC,cH])
}cr.statusCode(cj);
cj=undefined;
if(cd){co.trigger(cA?"ajaxSuccess":"ajaxError",[cr,cl,cA?cJ:cH])
}cv.fireWith(cz,[cr,cC]);
if(cd){co.trigger("ajaxComplete",[cr,cl]);
if(!(--bP.active)){bP.event.trigger("ajaxStop")
}}}return cr
},getJSON:function(cd,ce,cf){return bP.get(cd,ce,cf,"json")
},getScript:function(cd,ce){return bP.get(cd,undefined,ce,"script")
}});
bP.each(["get","post"],function(cd,ce){bP[ce]=function(cf,ch,ci,cg){if(bP.isFunction(ch)){cg=cg||ci;
ci=ch;
ch=undefined
}return bP.ajax(bP.extend({url:cf,type:ce,dataType:cg,data:ch,success:ci},bP.isPlainObject(cf)&&cf))
}
});
bP._evalUrl=function(cd){return bP.ajax({url:cd,type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true})
};
bP.fn.extend({wrapAll:function(cd){if(bP.isFunction(cd)){return this.each(function(cf){bP(this).wrapAll(cd.call(this,cf))
})
}if(this[0]){var ce=bP(cd,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){ce.insertBefore(this[0])
}ce.map(function(){var cf=this;
while(cf.firstChild&&cf.firstChild.nodeType===1){cf=cf.firstChild
}return cf
}).append(this)
}return this
},wrapInner:function(cd){if(bP.isFunction(cd)){return this.each(function(ce){bP(this).wrapInner(cd.call(this,ce))
})
}return this.each(function(){var ce=bP(this),cf=ce.contents();
if(cf.length){cf.wrapAll(cd)
}else{ce.append(cd)
}})
},wrap:function(cd){var ce=bP.isFunction(cd);
return this.each(function(cf){bP(this).wrapAll(ce?cd.call(this,cf):cd)
})
},unwrap:function(){return this.parent().each(function(){if(!bP.nodeName(this,"body")){bP(this).replaceWith(this.childNodes)
}}).end()
}});
function Q(cd){return cd.style&&cd.style.display||bP.css(cd,"display")
}function N(cd){if(!bP.contains(cd.ownerDocument||m,cd)){return true
}while(cd&&cd.nodeType===1){if(Q(cd)==="none"||cd.type==="hidden"){return true
}cd=cd.parentNode
}return false
}bP.expr.filters.hidden=function(cd){return F.reliableHiddenOffsets()?(cd.offsetWidth<=0&&cd.offsetHeight<=0&&!cd.getClientRects().length):N(cd)
};
bP.expr.filters.visible=function(cd){return !bP.expr.filters.hidden(cd)
};
var bD=/%20/g,aZ=/\[\]$/,ae=/\r?\n/g,b=/^(?:submit|button|image|reset|file)$/i,aC=/^(?:input|select|textarea|keygen)/i;
function h(cf,ch,ce,cg){var cd;
if(bP.isArray(ch)){bP.each(ch,function(cj,ci){if(ce||aZ.test(cf)){cg(cf,ci)
}else{h(cf+"["+(typeof ci==="object"&&ci!=null?cj:"")+"]",ci,ce,cg)
}})
}else{if(!ce&&bP.type(ch)==="object"){for(cd in ch){h(cf+"["+cd+"]",ch[cd],ce,cg)
}}else{cg(cf,ch)
}}}bP.param=function(cd,cf){var cg,ce=[],ch=function(ci,cj){cj=bP.isFunction(cj)?cj():(cj==null?"":cj);
ce[ce.length]=encodeURIComponent(ci)+"="+encodeURIComponent(cj)
};
if(cf===undefined){cf=bP.ajaxSettings&&bP.ajaxSettings.traditional
}if(bP.isArray(cd)||(cd.jquery&&!bP.isPlainObject(cd))){bP.each(cd,function(){ch(this.name,this.value)
})
}else{for(cg in cd){h(cg,cd[cg],cf,ch)
}}return ce.join("&").replace(bD,"+")
};
bP.fn.extend({serialize:function(){return bP.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var cd=bP.prop(this,"elements");
return cd?bP.makeArray(cd):this
}).filter(function(){var cd=this.type;
return this.name&&!bP(this).is(":disabled")&&aC.test(this.nodeName)&&!b.test(cd)&&(this.checked||!aS.test(cd))
}).map(function(cd,ce){var cf=bP(this).val();
return cf==null?null:bP.isArray(cf)?bP.map(cf,function(cg){return{name:ce.name,value:cg.replace(ae,"\r\n")}
}):{name:ce.name,value:cf.replace(ae,"\r\n")}
}).get()
}});
bP.ajaxSettings.xhr=bc.ActiveXObject!==undefined?function(){if(this.isLocal){return bn()
}if(m.documentMode>8){return bL()
}return/^(get|post|head|put|delete|options)$/i.test(this.type)&&bL()||bn()
}:bL;
var aI=0,aq={},aG=bP.ajaxSettings.xhr();
if(bc.attachEvent){bc.attachEvent("onunload",function(){for(var cd in aq){aq[cd](undefined,true)
}})
}F.cors=!!aG&&("withCredentials" in aG);
aG=F.ajax=!!aG;
if(aG){bP.ajaxTransport(function(cd){if(!cd.crossDomain||F.cors){var ce;
return{send:function(ci,cf){var cg,ch=cd.xhr(),cj=++aI;
ch.open(cd.type,cd.url,cd.async,cd.username,cd.password);
if(cd.xhrFields){for(cg in cd.xhrFields){ch[cg]=cd.xhrFields[cg]
}}if(cd.mimeType&&ch.overrideMimeType){ch.overrideMimeType(cd.mimeType)
}if(!cd.crossDomain&&!ci["X-Requested-With"]){ci["X-Requested-With"]="XMLHttpRequest"
}for(cg in ci){if(ci[cg]!==undefined){ch.setRequestHeader(cg,ci[cg]+"")
}}ch.send((cd.hasContent&&cd.data)||null);
ce=function(cm,cl){var ck,cp,cn;
if(ce&&(cl||ch.readyState===4)){delete aq[cj];
ce=undefined;
ch.onreadystatechange=bP.noop;
if(cl){if(ch.readyState!==4){ch.abort()
}}else{cn={};
ck=ch.status;
if(typeof ch.responseText==="string"){cn.text=ch.responseText
}try{cp=ch.statusText
}catch(co){cp=""
}if(!ck&&cd.isLocal&&!cd.crossDomain){ck=cn.text?200:404
}else{if(ck===1223){ck=204
}}}}if(cn){cf(ck,cp,cn,ch.getAllResponseHeaders())
}};
if(!cd.async){ce()
}else{if(ch.readyState===4){bc.setTimeout(ce)
}else{ch.onreadystatechange=aq[cj]=ce
}}},abort:function(){if(ce){ce(undefined,true)
}}}
}})
}function bL(){try{return new bc.XMLHttpRequest()
}catch(cd){}}function bn(){try{return new bc.ActiveXObject("Microsoft.XMLHTTP")
}catch(cd){}}bP.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(cd){bP.globalEval(cd);
return cd
}}});
bP.ajaxPrefilter("script",function(cd){if(cd.cache===undefined){cd.cache=false
}if(cd.crossDomain){cd.type="GET";
cd.global=false
}});
bP.ajaxTransport("script",function(cf){if(cf.crossDomain){var cd,ce=m.head||bP("head")[0]||m.documentElement;
return{send:function(cg,ch){cd=m.createElement("script");
cd.async=true;
if(cf.scriptCharset){cd.charset=cf.scriptCharset
}cd.src=cf.url;
cd.onload=cd.onreadystatechange=function(cj,ci){if(ci||!cd.readyState||/loaded|complete/.test(cd.readyState)){cd.onload=cd.onreadystatechange=null;
if(cd.parentNode){cd.parentNode.removeChild(cd)
}cd=null;
if(!ci){ch(200,"success")
}}};
ce.insertBefore(cd,ce.firstChild)
},abort:function(){if(cd){cd.onload(undefined,true)
}}}
}});
var bz=[],bf=/(=)\?(?=&|$)|\?\?/;
bP.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var cd=bz.pop()||(bP.expando+"_"+(bw++));
this[cd]=true;
return cd
}});
bP.ajaxPrefilter("json jsonp",function(cg,cd,ch){var cj,ce,cf,ci=cg.jsonp!==false&&(bf.test(cg.url)?"url":typeof cg.data==="string"&&(cg.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&bf.test(cg.data)&&"data");
if(ci||cg.dataTypes[0]==="jsonp"){cj=cg.jsonpCallback=bP.isFunction(cg.jsonpCallback)?cg.jsonpCallback():cg.jsonpCallback;
if(ci){cg[ci]=cg[ci].replace(bf,"$1"+cj)
}else{if(cg.jsonp!==false){cg.url+=(bW.test(cg.url)?"&":"?")+cg.jsonp+"="+cj
}}cg.converters["script json"]=function(){if(!cf){bP.error(cj+" was not called")
}return cf[0]
};
cg.dataTypes[0]="json";
ce=bc[cj];
bc[cj]=function(){cf=arguments
};
ch.always(function(){if(ce===undefined){bP(bc).removeProp(cj)
}else{bc[cj]=ce
}if(cg[cj]){cg.jsonpCallback=cd.jsonpCallback;
bz.push(cj)
}if(cf&&bP.isFunction(ce)){ce(cf[0])
}cf=ce=undefined
});
return"script"
}});
bP.parseHTML=function(ch,cf,cg){if(!ch||typeof ch!=="string"){return null
}if(typeof cf==="boolean"){cg=cf;
cf=false
}cf=cf||m;
var ce=a.exec(ch),cd=!cg&&[];
if(ce){return[cf.createElement(ce[1])]
}ce=B([ch],cf,cd);
if(cd&&cd.length){bP(cd).remove()
}return bP.merge([],ce.childNodes)
};
var b9=bP.fn.load;
bP.fn.load=function(cg,cj,ck){if(typeof cg!=="string"&&b9){return b9.apply(this,arguments)
}var cd,ch,cf,ce=this,ci=cg.indexOf(" ");
if(ci>-1){cd=bP.trim(cg.slice(ci,cg.length));
cg=cg.slice(0,ci)
}if(bP.isFunction(cj)){ck=cj;
cj=undefined
}else{if(cj&&typeof cj==="object"){ch="POST"
}}if(ce.length>0){bP.ajax({url:cg,type:ch||"GET",dataType:"html",data:cj}).done(function(cl){cf=arguments;
ce.html(cd?bP("<div>").append(bP.parseHTML(cl)).find(cd):cl)
}).always(ck&&function(cm,cl){ce.each(function(){ck.apply(this,cf||[cm.responseText,cl,cm])
})
})
}return this
};
bP.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(cd,ce){bP.fn[ce]=function(cf){return this.on(ce,cf)
}
});
bP.expr.filters.animated=function(cd){return bP.grep(bP.timers,function(ce){return cd===ce.elem
}).length
};
function by(cd){return bP.isWindow(cd)?cd:cd.nodeType===9?cd.defaultView||cd.parentWindow:false
}bP.offset={setOffset:function(cf,cp,cj){var cl,ci,cd,cg,ce,cn,co,ck=bP.css(cf,"position"),ch=bP(cf),cm={};
if(ck==="static"){cf.style.position="relative"
}ce=ch.offset();
cd=bP.css(cf,"top");
cn=bP.css(cf,"left");
co=(ck==="absolute"||ck==="fixed")&&bP.inArray("auto",[cd,cn])>-1;
if(co){cl=ch.position();
cg=cl.top;
ci=cl.left
}else{cg=parseFloat(cd)||0;
ci=parseFloat(cn)||0
}if(bP.isFunction(cp)){cp=cp.call(cf,cj,bP.extend({},ce))
}if(cp.top!=null){cm.top=(cp.top-ce.top)+cg
}if(cp.left!=null){cm.left=(cp.left-ce.left)+ci
}if("using" in cp){cp.using.call(cf,cm)
}else{ch.css(cm)
}}};
bP.fn.extend({offset:function(ce){if(arguments.length){return ce===undefined?this:this.each(function(cj){bP.offset.setOffset(this,ce,cj)
})
}var cd,ci,cg={top:0,left:0},cf=this[0],ch=cf&&cf.ownerDocument;
if(!ch){return
}cd=ch.documentElement;
if(!bP.contains(cd,cf)){return cg
}if(typeof cf.getBoundingClientRect!=="undefined"){cg=cf.getBoundingClientRect()
}ci=by(ch);
return{top:cg.top+(ci.pageYOffset||cd.scrollTop)-(cd.clientTop||0),left:cg.left+(ci.pageXOffset||cd.scrollLeft)-(cd.clientLeft||0)}
},position:function(){if(!this[0]){return
}var cf,cg,cd={top:0,left:0},ce=this[0];
if(bP.css(ce,"position")==="fixed"){cg=ce.getBoundingClientRect()
}else{cf=this.offsetParent();
cg=this.offset();
if(!bP.nodeName(cf[0],"html")){cd=cf.offset()
}cd.top+=bP.css(cf[0],"borderTopWidth",true);
cd.left+=bP.css(cf[0],"borderLeftWidth",true)
}return{top:cg.top-cd.top-bP.css(ce,"marginTop",true),left:cg.left-cd.left-bP.css(ce,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var cd=this.offsetParent;
while(cd&&(!bP.nodeName(cd,"html")&&bP.css(cd,"position")==="static")){cd=cd.offsetParent
}return cd||b1
})
}});
bP.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(cf,ce){var cd=/Y/.test(ce);
bP.fn[cf]=function(cg){return aJ(this,function(ch,ck,cj){var ci=by(ch);
if(cj===undefined){return ci?(ce in ci)?ci[ce]:ci.document.documentElement[ck]:ch[ck]
}if(ci){ci.scrollTo(!cd?cj:bP(ci).scrollLeft(),cd?cj:bP(ci).scrollTop())
}else{ch[ck]=cj
}},cf,cg,arguments.length,null)
}
});
bP.each(["top","left"],function(cd,ce){bP.cssHooks[ce]=be(F.pixelPosition,function(cg,cf){if(cf){cf=I(cg,ce);
return ag.test(cf)?bP(cg).position()[ce]+"px":cf
}})
});
bP.each({Height:"height",Width:"width"},function(cd,ce){bP.each({padding:"inner"+cd,content:ce,"":"outer"+cd},function(cf,cg){bP.fn[cg]=function(ck,cj){var ci=arguments.length&&(cf||typeof ck!=="boolean"),ch=cf||(ck===true||cj===true?"margin":"border");
return aJ(this,function(cm,cl,cn){var co;
if(bP.isWindow(cm)){return cm.document.documentElement["client"+cd]
}if(cm.nodeType===9){co=cm.documentElement;
return Math.max(cm.body["scroll"+cd],co["scroll"+cd],cm.body["offset"+cd],co["offset"+cd],co["client"+cd])
}return cn===undefined?bP.css(cm,cl,ch):bP.style(cm,cl,cn,ch)
},ce,ci?ck:undefined,ci,null)
}
})
});
bP.fn.extend({bind:function(cd,cf,ce){return this.on(cd,null,cf,ce)
},unbind:function(cd,ce){return this.off(cd,null,ce)
},delegate:function(cd,ce,cg,cf){return this.on(ce,cd,cg,cf)
},undelegate:function(cd,ce,cf){return arguments.length===1?this.off(cd,"**"):this.off(ce,cd||"**",cf)
}});
bP.fn.size=function(){return this.length
};
bP.fn.andSelf=bP.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return bP
})
}var br=bc.jQuery,O=bc.$;
bP.noConflict=function(cd){if(bc.$===bP){bc.$=O
}if(cd&&bc.jQuery===bP){bc.jQuery=br
}return bP
};
if(!aD){bc.jQuery=bc.$=bP
}return bP
}));
jQuery.uaMatch=function(b){b=b.toLowerCase();
var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
};
if(!jQuery.browser){matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){browser[matched.browser]=true;
browser.version=matched.version
}if(browser.chrome){browser.webkit=true
}else{if(browser.webkit){browser.safari=true
}}jQuery.browser=browser
}window.Granite=window.Granite||{};
Granite.Sling={SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"};
(function(a,b){a.Util=(function(){var c={patchText:function(f,e){if(e){if(!b.isArray(e)){f=f.replace("{0}",e)
}else{for(var d=0;
d<e.length;
d++){f=f.replace(("{"+d+"}"),e[d])
}}}return f
},getTopWindow:function(){var e=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(e.parent&&e!==e.parent&&e.parent.location.href){e=e.parent
}}catch(d){}return e
},setIFrameMode:function(d){this.iFrameTopWindow=d||window
},applyDefaults:function(){var f,h=arguments[0]||{};
for(var e=1;
e<arguments.length;
e++){f=arguments[e];
for(var d in f){var g=f[d];
if(f.hasOwnProperty(d)&&g!==undefined){if(g!==null&&typeof g==="object"&&!(g instanceof Array)){h[d]=c.applyDefaults(h[d],g)
}else{if(g instanceof Array){h[d]=g.slice(0)
}else{h[d]=g
}}}}}return h
},getKeyCode:function(d){return d.keyCode?d.keyCode:d.which
}};
return c
}())
}(Granite,jQuery));
(function(Granite,util,sling,$){Granite.HTTP=(function(){var contextPath=null,SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/,ENCODE_PATH_REGEXP=/[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,loginRedirected=false,self={};
self.getSchemeAndAuthority=function(url){var end;
try{if(url.indexOf("://")==-1){return""
}end=url.indexOf("/",url.indexOf("://")+3);
return(end==-1)?url:url.substring(0,end)
}catch(e){return""
}};
self.getContextPath=function(){return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return
}}contextPath=""
}}catch(e){}};
self.externalize=function(url){try{if(url.indexOf("/")==0&&contextPath&&url.indexOf(contextPath+"/")!=0){url=contextPath+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)=="/"){if(contextPath===url){return""
}else{if(contextPath&&url.indexOf(contextPath+"/")==0){return url.substring(contextPath.length)
}else{return url
}}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost==urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!=-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(url){if(url.indexOf("#")!=-1){return url.substring(0,url.indexOf("#"))
}return url
};
self.removeParameters=function(url){if(url.indexOf("?")!=-1){return url.substring(0,url.indexOf("?"))
}return url
};
self.encodePathOfURI=function(url){var parts,delim;
if(url.indexOf("?")!=-1){parts=url.split("?");
delim="?"
}else{if(url.indexOf("#")!=-1){parts=url.split("#");
delim="#"
}else{parts=[url]
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(path){path=encodeURI(path).replace(/%5B/g,"[").replace(/%5D/g,"]");
path=path.replace(/\+/g,"%2B");
path=path.replace(/\?/g,"%3F");
path=path.replace(/;/g,"%3B");
path=path.replace(/#/g,"%23");
path=path.replace(/=/g,"%3D");
path=path.replace(/\$/g,"%24");
path=path.replace(/,/g,"%2C");
path=path.replace(/'/g,"%27");
path=path.replace(/"/g,"%22");
return path
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize(sling.LOGIN_URL)+"?resource="+encodeURIComponent(l.pathname+l.search+l.hash)
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&$.isFunction(G_XHR_HOOK)){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}(Granite,Granite.Util,Granite.Sling,jQuery));
(function(document,Granite,util,http,$){Granite.I18n=(function(){var dicts={},urlPrefix="/libs/cq/i18n/dict.",urlSuffix=".json",manualLocale=undefined,pseudoTranslations=false,languages=null,self={},manualDictionary=false,getDictionaryUrl=function(locale){if(manualDictionary){return urlPrefix+locale+urlSuffix
}var dictionarySrc=$("html").attr("data-i18n-dictionary-src");
if(!dictionarySrc){return urlPrefix+locale+urlSuffix
}return dictionarySrc.replace("{locale}",encodeURIComponent(locale)).replace("{+locale}",locale)
};
self.LOCALE_DEFAULT="en";
self.PSEUDO_LANGUAGE="zz";
self.PSEUDO_PATTERN_KEY="_pseudoPattern_";
self.init=function(config){config=config||{};
this.setLocale(config.locale);
this.setUrlPrefix(config.urlPrefix);
this.setUrlSuffix(config.urlSuffix)
};
self.setLocale=function(locale){if(!locale){return
}manualLocale=locale
};
self.getLocale=function(){if($.isFunction(manualLocale)){manualLocale=manualLocale()
}return manualLocale||document.documentElement.lang||self.LOCALE_DEFAULT
};
self.setUrlPrefix=function(prefix){if(!prefix){return
}urlPrefix=prefix;
manualDictionary=true
};
self.setUrlSuffix=function(suffix){if(!suffix){return
}urlSuffix=suffix;
manualDictionary=true
};
self.getDictionary=function(locale){locale=locale||self.getLocale();
if(!dicts[locale]){pseudoTranslations=(locale.indexOf(self.PSEUDO_LANGUAGE)==0);
try{var response=$.ajax(getDictionaryUrl(locale),{async:false,dataType:"json"});
dicts[locale]=$.parseJSON(response.responseText)
}catch(e){}if(!dicts[locale]){dicts[locale]={}
}}return dicts[locale]
};
self.get=function(text,snippets,note){var dict,newText,lookupText;
dict=self.getDictionary();
lookupText=pseudoTranslations?self.PSEUDO_PATTERN_KEY:note?text+" (("+note+"))":text;
if(dict){newText=dict[lookupText]
}if(!newText){newText=text
}if(pseudoTranslations){newText=newText.replace("{string}",text).replace("{comment}",note?note:"")
}return util.patchText(newText,snippets)
};
self.getVar=function(text,note){if(!text){return null
}return self.get(text,null,note)
};
self.getLanguages=function(){if(!languages){try{var json=http.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
$.each(json,function(name,lang){lang.title=self.getVar(lang.language);
if(lang.title&&lang.country&&lang.country!="*"){lang.title+=" ("+self.getVar(lang.country)+")"
}});
languages=json
}catch(e){languages={}
}}return languages
};
self.parseLocale=function(langCode){if(!langCode){return null
}var pos=langCode.indexOf("_");
if(pos<0){pos=langCode.indexOf("-")
}var language,country;
if(pos<0){language=langCode;
country=null
}else{language=langCode.substring(0,pos);
country=langCode.substring(pos+1)
}return{code:langCode,language:language,country:country}
};
return self
}())
}(document,Granite,Granite.Util,Granite.HTTP,jQuery));
(function(b,c){var a=function(){var e={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var f={};
var d=[];
return{debugWithMouse:false,init:function(){var g=this;
c(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator",function(j){var h=j.originalEvent.touches;
g.update(h);
return true
});
if(this.debugWithMouse){c(document).on("mousemove.touchindicator",function(h){h.identifer="fake";
g.update([h]);
return true
})
}},update:function(k){var h={};
for(var j=0;
j<k.length;
j++){var m=k[j];
var l=m.identifier;
var g=f[l];
if(!g){g=d.pop();
if(!g){g=c("<div></div>").css(e);
c("body").append(g)
}}h[l]=g;
g.offset({left:m.pageX-20,top:m.pageY-20});
g.css("visibility","visible")
}for(l in f){if(f.hasOwnProperty(l)&&!h[l]){g=f[l];
g.css("visibility","hidden");
d.push(g)
}}f=h
}}
};
b.TouchIndicator=new a()
}(Granite,jQuery));
(function(c,a,b,d){c.OptOutUtil=(function(){var e={};
var f=[];
var g=[];
e.init=function(h){if(h){f=h.cookieNames?h.cookieNames:f;
g=h.whitelistCookieNames?h.whitelistCookieNames:g
}};
e.getCookieNames=function(){return f
};
e.getWhitelistCookieNames=function(){return g
};
e.isOptedOut=function(){var k=document.cookie.split(";");
for(var j=0;
j<k.length;
j++){var h=k[j];
var l=d.trim(h.split("=")[0]);
if(d.inArray(l,e.getCookieNames())>-1){return true
}}return false
};
e.maySetCookie=function(h){return !(e.isOptedOut()&&d.inArray(h,e.getWhitelistCookieNames())===-1)
};
return e
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
(function(c,b,d){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(f,e){if(typeof G_IS_HOOKED=="undefined"||!G_IS_HOOKED(e.url)){if(e.externalize){e.url=a.externalize(e.url)
}if(e.encodePath){e.url=a.encodePathOfURI(e.url)
}}if(e.hook){var g=a.getXhrHook(e.url,e.type,e.data);
if(g){e.url=g.url;
if(g.params){if(e.type.toUpperCase()=="GET"){e.url+="?"+c.param(g.params)
}else{e.data=c.param(g.params)
}}}}},statusCode:{403:function(e){if(e.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));
(function(e,b){e.Granite=e.Granite||{};
if(e.Granite.csrf){return
}e.Granite.csrf={initialised:false,refreshToken:m};
function h(){this._handler=[]
}h.prototype={then:function(s,r){this._handler.push({resolve:s,reject:r})
},resolve:function(){this._execute("resolve",arguments)
},reject:function(){this._execute("reject",arguments)
},_execute:function(r,s){if(this._handler===null){throw new Error("Promise already completed.")
}for(var t=0,u=this._handler.length;
t<u;
t++){this._handler[t][r].apply(e,s)
}this.then=function(w,v){(r==="resolve"?w:v).apply(e,s)
};
this._handler=null
}};
function j(s){var t=document.location.host,v=document.location.protocol,u="//"+t,r=v+u;
return(s==r||s.slice(0,r.length+1)==r+"/")||(s==u||s.slice(0,u.length+1)==u+"/")||!(/^(\/\/|http:|https:).*/.test(s))
}var l=":cq_csrf_token",k="CSRF-Token",n="/libs/granite/csrf/token.json";
var q,g;
function m(){q=new h();
var r=new XMLHttpRequest();
r.onreadystatechange=function(){if(r.readyState===4){try{var t=JSON.parse(r.responseText);
g=t.token;
q.resolve(g)
}catch(s){q.reject(r.responseText)
}}};
r.open("GET",Granite.HTTP.externalize(n),true);
r.send();
return q
}function a(s){var t=s.getAttribute("action");
if(t&&!j(t)){return
}var r=s.querySelector('input[name="'+l+'"]');
if(!r){r=document.createElement("input");
r.setAttribute("type","hidden");
r.setAttribute("name",l);
s.appendChild(r)
}r.setAttribute("value",g)
}function o(r){var s=function(v){var u=v.target;
if(u.nodeName.toLowerCase()==="form"&&g){a(u)
}};
if(r.addEventListener){r.addEventListener("submit",s,true)
}else{if(r.attachEvent){r.attachEvent("submit",s)
}}}m();
o(document);
var d=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(s,r){if(j(r)&&s.toLowerCase()!=="get"){this._csrf=true
}return d.apply(this,arguments)
};
var c=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(t){if(!this._csrf){c.apply(this,arguments);
return
}if(g){this.setRequestHeader(k,g);
c.apply(this,arguments);
return
}var r=this;
var s=Array.prototype.slice.call(arguments);
q.then(function(u){r.setRequestHeader(k,u);
c.apply(r,s)
},function(){if(e.console){console.error("Unable to read CSRF meta information")
}c.apply(r,s)
})
};
var f=HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit=function(){a(this);
return f.apply(this,arguments)
};
if(e.Node){var p=Node.prototype.appendChild;
Node.prototype.appendChild=function(){var r=p.apply(this,arguments);
if(r.nodeName==="IFRAME"){try{if(r.contentWindow&&!r._csrf){r._csrf=true;
o(r.contentWindow.document)
}}catch(s){if(r.src&&r.src.length&&j(r.src)){if(e.console){console.error("Unable to attach CSRF token an iframe element on the same origin")
}}}}return r
}
}setInterval(function(){m()
},300000)
})(this);
window.$CQ=_g.$;
(function(a){a(function(){function c(g,h){try{if(a.cq.isAuthor()||window.location.hash=="#debug"){if(typeof console!="undefined"&&typeof console.log!="undefined"){console.log(g);
console.log(h)
}alert(g.name+":\n"+g.message+".\n"+h+".")
}}catch(j){}}try{var d=a.browser.msie?0:250;
function b(g){try{if(window.location.hash.length>0&&a(window.location.hash,g).length>0){window.location=(window.location+"").replace(window.location.hash,"")
}}catch(h){c(h,"Could not remove hash")
}}try{a(".cq-carousel").each(function(){var v=a(this);
var g=+a("var[title='play-delay']",this).text();
if(!g){g=6000
}var k=+a("var[title='transition-time']",this).text();
if(!k){k=1000
}var t=a(".cq-carousel-banners",this);
var o=a(".cq-carousel-banner-switch",this);
var u=o.find("a");
var p=a(".cq-carousel-banner-item",this);
var e=p.outerWidth();
var q=p.filter(":first");
var m=null;
var h=null;
var l=0;
var n=a("a.cq-carousel-control-prev",this);
n.click(function(){if(n.is(".cq-carousel-active")){a(u[(l+u.length-1)%u.length]).click()
}return false
});
var s=a("a.cq-carousel-control-next",this);
s.click(function(){if(s.is(".cq-carousel-active")){a(u[(l+1)%u.length]).click()
}return false
});
if(u.length>1){s.addClass("cq-carousel-active")
}function j(){r();
if(g>0){h=setInterval(function(){a(u[(l+1)%u.length]).click()
},g)
}}function r(){if(h!==null){clearInterval(h);
h=null
}}if(d||a.browser.version>6){q.css("left",0)
}else{q.show()
}u.click(function(){var y=a(this);
var w=p.filter(y.attr("href"));
var x=w.prevAll().length;
var z=(x>l||h!==null)?1:-1;
if(!y.is(".cq-carousel-active")){u.removeClass("cq-carousel-active");
y.addClass("cq-carousel-active");
if(q.is(":animated")){q.stop(true,true);
m.stop(true,true)
}if(d){w.css({left:z*e}).animate({left:0,opacity:1},k);
q.animate({left:-z*e,opacity:0},k)
}else{if(a.browser.version>6){w.css({left:z*e,opacity:1}).animate({left:0},k);
q.animate({left:-z*e},k)
}else{w.fadeIn();
q.fadeOut()
}}m=q;
q=w;
l=x;
if(l>0){n.addClass("cq-carousel-active")
}else{n.removeClass("cq-carousel-active")
}if(l<u.length-1){s.addClass("cq-carousel-active")
}else{s.removeClass("cq-carousel-active")
}}return false
}).each(function(){var w=a(this);
w.attr("title",w.text())
}).filter(":first").addClass("cq-carousel-active");
j();
v.hover(function(){r();
n.fadeIn();
s.fadeIn()
},function(){j();
n.fadeOut();
s.fadeOut()
});
b(this)
})
}catch(f){c(f,"Could not initialize the banners")
}}catch(f){c(f,"Init failed")
}})
})($CQ||$);
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(j,e){var h=this,g=arguments,f=function(){j.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})($CQ);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
(function(b,a){a.picturefill=function(c){var d;
if(c===d){c=b("body")
}b("div[data-picture]",c).each(function(){var f=this;
var g=[];
b("div[data-media]",f).each(function(){var j=b(this).attr("data-media");
if(!j||(a.matchMedia&&a.matchMedia(j).matches)){g.push(this)
}});
var e=b("img",f).first();
if(g.length){if(e.size()===0){var h=b(f);
e=b("<img />").attr("alt",h.attr("data-alt")).appendTo(h)
}e.attr("src",g.pop().getAttribute("data-src"))
}else{e.remove()
}})
};
b(function(){a.picturefill()
});
b(a).on("debouncedresize",function(){a.picturefill()
})
}($CQ,this));
function cq5forms_isArray(a){if(Array.isArray){return Array.isArray(a)
}else{return Object.prototype.toString.call(a)==="[object Array]"
}}function cq5forms_isNodeList(b){var a=Object.prototype.toString.call(b);
return typeof b==="object"&&/^\[object (HTMLCollection|NodeList|RadioNodeList)\]$/.test(a)&&(typeof b.length==="number")&&(b.length===0||(typeof b[0]==="object"&&b[0].nodeType>0))
}function cq5forms_showMsg(e,c,d,a){var b=document.forms[e].elements[c];
alert(d);
if(cq5forms_isNodeList(b)){b=Array.prototype.slice.call(b)
}if(cq5forms_isArray(b)){if(!a){a=0
}b[a].focus()
}else{b.focus()
}}function cq5forms_isEmpty(b){if(b===undefined){return false
}var a=true;
if(cq5forms_isNodeList(b)){b=Array.prototype.slice.call(b)
}if(cq5forms_isArray(b)){for(i=0;
i<b.length;
i++){if(b[i].type=="radio"||b[i].type=="checkbox"){if(b[i].checked){a=false
}}else{if(b[i].localName=="option"){if(b[i].selected){a=false
}}else{if(b[i].value.length>0){a=false
}}}}}else{if(b.type=="radio"||b.type=="checkbox"){if(b.checked){a=false
}}else{if(b.value.length>0){a=false
}}}return a
}function cq5forms_regcheck(f,d){var b=false;
var c=d.exec(f);
if(c){var a=f.length;
var e=c[0].length;
b=(e==a)
}return b
}function cq5forms_multiResourceChange(a,b,c){if(!c){if(!a){a=window.event
}if(a.keyCode<48&&a.keyCode!=8&&a.keyCode!=46){return
}}try{document.getElementById(b).checked=true
}catch(d){}};