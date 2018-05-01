(function(b,a){a.pgatour.setModulePath("players");
a.pgatour.players.ArticleBodyText=a.pgatour.players.ArticleBodyText||a.pgatour.BaseModule.extend({constructor:function(c,d){this.base(c);
this.config=d
},init:function(){this.base();
this.initProperties();
if(this.hasAdvModule){this.advApi=this.getAdvAPI();
if(this.advApi){this.advApi.addRenderCallback(this.proxy(this.onAdvRender))
}}},initProperties:function(){this.$rightRail=this.container.find(this.config.rightColumn);
this.$advBlock=this.$rightRail.find(".js-ad");
this.hasAdvModule=this.$advBlock.length>0
},getAdvAPI:function(){var c=this.$advBlock.data("ad-api");
if(c){return c
}},checkHeight:function(){var c=this.$rightRail.find(".module");
var d=0;
var e;
for(e=0;
e<c.length;
e++){d+=c.eq(e).outerHeight()
}var f=this.$advBlock.outerHeight()+d;
if(this.container.height()<f){this.container.css("min-height",f+"px")
}},layout:function(){if(this.isLargeScreen()){this.checkHeight()
}else{this.container.css("min-height","auto")
}},onAdvRender:function(){if(this.isLargeScreen()){this.checkHeight()
}}})
})(jQuery,window);
(function(b,a){a.pgatour.setModulePath("players");
a.pgatour.players.Hero=a.pgatour.players.Hero||a.pgatour.BaseCssCloudinaryModule.extend({CLOSE_BTN_SELECTOR:".close-btn",SOUND_BTN_SELECTOR:".btn-play",BTN_PLAY_SOUND_SELECTOR:".btn-play-sound",READ_MORE_SELECTOR:".information.read-more",SLIDER_CONTAINER_SELECTOR:".dl-photoslider",VIDEO_THUMBS_SELECTOR:".thumb[data-video-id]",THUMB_VIDEO_SELECTOR:".thumb-video",LOADER_CONTAINER_SELECTOR:".hero-loader",THUMB_SELECTOR:".thumb",INLINE_ONLY_SELECTOR:".inline-only",INLINE_VIDEO_PLAYER_SELECTOR:".inline-video-player",BX_CONTROLS_SELECTOR:".bx-controls",CTA_SELECTOR:".button-hero",OO_CONTROLS_SELECTOR:".oo_controls_wrap",AD_HERO_SELECTOR:".hero-ad-inside .ad-new",AD_CONTAINER_SELECTOR:".ad-container",BX_CLONE_SELECTOR:".bx-clone",INFORMATION_SELECTOR:".information",NO_PRE_ROLL_SELECTOR:".no-pre-roll",LOADER_COVER_ATTR:"data-src",VIDEO_ID_ATTR:"data-video-id",LOADING_CLASS:"loading",PLAYER_AMBIENT_CLASS:"player-ambient",PLAYER_AUTORUN_CLASS:"player-autorun",PLAY_MODE_CLASS:"play-mode",NO_VOLUME_CLASS:"no-volume",aspectRatio:16/9,loopCheckingInterval:500,defaultHeight:"auto",isPlaying:false,slider:null,firstPlay:true,constructor:function(c,d){this.base(c,d);
var e=this.canAutoPlay();
if(!e){this.config.autoRun=false;
this.config.ambientVideo=false
}if(e&&a.pgatour.videoPlayer){a.pgatour.videoPlayer.load()
}this.initProperties()
},enable:function(){this.initSlider();
this.adjustSizes();
this.base();
this.initEvents()
},initProperties:function(){this.$closeBtn=this.container.find(this.CLOSE_BTN_SELECTOR);
this.$soundBtn=this.container.find(this.SOUND_BTN_SELECTOR);
this.$ctaButtons=this.container.find(this.CTA_SELECTOR);
this.config.videoPlayerOptions=b.extend(true,{},this.config.videoPlayerOptions,{autoplay:true,loop:false,onCreate:this.proxy(this.onPlayerCreate)})
},initEvents:function(){this.$closeBtn.on("click",this.proxy(this.onPlayerClose));
this.$soundBtn.on("click",this.proxy(this.onSoundBtnClick));
this.$ctaButtons.on("click",this.proxy(this.onCtaClick));
this.container.on("click",this.READ_MORE_SELECTOR,this.proxy(this.onMoreClick))
},initSlider:function(){var c=this.container.find(this.SLIDER_CONTAINER_SELECTOR);
if(this.slider||!c.length){return
}if(this.config.ambientVideo){this.ambientInitFlow(c)
}else{if(this.config.autoRun){this.autoPlayInitFlow(c)
}else{this.regularInitFlow(c)
}}},adInit:function(){this.$adHeroBlock=this.container.find(this.AD_HERO_SELECTOR);
if(!this.$adHeroBlock.length){return
}this.$adHeroBlock.css("position","fixed");
this.adFound=true;
this.adHide()
},adHide:function(){if(!this.adFound){this.adInit();
return
}this.$adHeroBlock.css("visibility","hidden")
},adShow:function(){if(!this.adFound){return
}this.$adHeroBlock.css({opacity:0,visibility:"visible"}).fadeTo("fast",1)
},adMove:function(){if(!this.adFound){return
}var e=parseInt(this.slider.find("li").css("width"),10);
var d=Math.abs(parseInt(this.slider.css("transform").split(",")[4],10));
var f=parseInt(this.container.find(this.INFORMATION_SELECTOR).css("right"),10);
var c=this.$adHeroBlock.width();
this.$adHeroBlock.css("left",d+e-c-f)
},isAdPersist:function(d){var c=d.find(this.AD_CONTAINER_SELECTOR);
return c.length
},adjustSizes:function(){var f,c;
var d=0;
var g=this.container.width();
var e=this.window.width();
if(this.config.ambientVideo){if(e>this.window.height()){d=-(e-Math.max(e,g))/2
}this.container.css({marginLeft:d+"px",marginRight:d+"px",width:this.window.width()+"px"})
}f=this.container.width();
c=this.defaultHeight;
if(this.isPlaying||(this.canAutoPlay()&&this.firstPlay)){c=this.getVideoHeight(f)
}if(!this.player&&(this.config.autoRun||this.config.ambientVideo)){this.enablePreloadMode()
}this.container.find(this.LOADER_CONTAINER_SELECTOR).width(f).height(c);
this.setVideoHeight(c)
},canAutoPlay:function(){return !!this.getVideoThumbs().length&&((this.config.autoRun&&!pgatour.is.iOS)||this.config.ambientVideo)
},getVideoThumbs:function(){return this.container.find(this.VIDEO_THUMBS_SELECTOR)
},isHeroVideo:function(c){var e=this.getVideoThumbs();
for(var d=0;
d<e.length;
d++){if(e.eq(d).attr(this.VIDEO_ID_ATTR)===c){return true
}}return false
},createSlider:function(c){this.slider=null;
if(this.container.find(this.SLIDER_CONTAINER_SELECTOR).find("li").length<=1){this.hideLoader();
this.onSliderCreate(c);
return
}this.slider=c.bxSlider({controls:false,touchEnabled:!this.isPlaying,onSliderLoad:this.proxy(this.onSliderCreate,c),onSlideBefore:this.proxy(this.onVideoPlayerSlide),onSlideAfter:this.proxy(this.onSlideChanged)})
},refreshSlider:function(){if(this.slider){this.slider.data("bxSlider").settings.touchEnabled=!this.isPlaying
}},autoPlayVideo:function(g){var f=1;
if(this.config.ambientVideo||g.children().length===1){f=0
}var d=g.find("li").eq(f).find(this.THUMB_VIDEO_SELECTOR);
if(!d.length){this.hideLoader();
return
}var e=pgatour.getViewportSize().width-14;
if(this.config.autoRun){e=this.container.width()
}this.setVideoHeight(this.getVideoHeight(e));
if(!this.config.autoRun){var c=g.find(this.INLINE_ONLY_SELECTOR).parent();
g.find("li").not(c).hide()
}d.click()
},getVideoHeight:function(c){return Math.round(c/this.aspectRatio)
},setVideoHeight:function(c){var e=this.container.find(this.SLIDER_CONTAINER_SELECTOR);
e.add(e.find(this.INLINE_VIDEO_PLAYER_SELECTOR)).height(c);
if(c!==this.defaultHeight){c+=20
}if(!this.config.ambientVideo&&e.children().length>1){e.parent().height(c)
}if(this.config.showSoundBtn){var d;
if(this.config.ambientVideo){d=60
}else{if(!this.config.autoRun){d=40
}else{d=17
}}this.$soundBtn.css("top",(c-d)+"px")
}this.container.css("height","auto")
},resize:function(){this.base();
this.adjustSizes();
this.adMove()
},enablePreloadMode:function(){var c=this.container.find(this.VIDEO_THUMBS_SELECTOR).length;
var d=this.container.find(this.NO_PRE_ROLL_SELECTOR).length;
if(c&&d){this.showLoader();
this.container.find(this.THUMB_SELECTOR).filter(this.INLINE_ONLY_SELECTOR).addClass(this.PLAY_MODE_CLASS)
}},initLoaderCover:function(){var c=this.container.find(this.LOADER_CONTAINER_SELECTOR);
var d=pgatour.getDamCloudinaryURL(c.attr(this.LOADER_COVER_ATTR));
c.css("background-image",pgatour.format("url({url})",{url:d}))
},ambientInitFlow:function(c){this.config.autoRun=false;
this.config.videoPlayerOptions.loop=true;
this.container.addClass(this.PLAYER_AMBIENT_CLASS);
this.autoPlayVideo(c)
},ambientPlayerCreateFlow:function(){this.hideCloseBtn();
this.player.mb.subscribe(OO.EVENTS.PLAYING,"mediaKitPlayer",this.proxy(this.onPlayerReady))
},ambientPlayerEndFlow:function(){var c=this.container.find(this.SLIDER_CONTAINER_SELECTOR).find(this.INLINE_ONLY_SELECTOR).parent();
c.find(this.THUMB_SELECTOR).off("click");
c.find(this.THUMB_VIDEO_SELECTOR).remove()
},ambientDestroyFlow:function(){this.setVideoHeight(this.defaultHeight)
},autoPlayInitFlow:function(c){this.container.addClass(this.PLAYER_AUTORUN_CLASS);
if(this.config.forceUnMute){this.$soundBtn.addClass(this.NO_VOLUME_CLASS)
}this.createSlider(c)
},autoPlayPlayerCreateFlow:function(){this.player.mb.subscribe(OO.EVENTS.PLAYING,"mediaKitPlayer",this.proxy(this.onPlayerReady));
this.player.mb.subscribe(OO.EVENTS.PLAYED,"mediaKitPlayer",this.proxy(this.onPlayerEnd))
},autoPlayEndFlow:function(){this.config.autoRun=false;
this.container.removeClass(this.PLAYER_AUTORUN_CLASS);
this.player.mb.subscribe(OO.EVENTS.PLAYING,"mediaKitPlayer",this.proxy(this.onRegularPlayerReady))
},regularInitFlow:function(c){this.createSlider(c)
},regularCreateFlow:function(){this.player.mb.subscribe(OO.EVENTS.PLAYING,"mediaKitPlayer",this.proxy(this.onRegularPlayerReady))
},showLoader:function(){if(!pgatour.is.touchDevice){this.container.addClass(this.LOADING_CLASS);
this.initLoaderCover()
}},hideLoader:function(){this.container.removeClass(this.LOADING_CLASS)
},showSoundBtn:function(){this.$soundBtn.show()
},hideSoundBtn:function(){this.$soundBtn.hide()
},showCloseBtn:function(){this.$closeBtn.show()
},hideCloseBtn:function(){this.$closeBtn.hide()
},onSliderCreate:function(c){c.find(this.BX_CLONE_SELECTOR).find(this.AD_HERO_SELECTOR).remove();
if(this.canAutoPlay()){this.autoPlayVideo(c)
}},onPlayerCreate:function(c,d){if(!this.isHeroVideo(d)){return
}this.isPlaying=true;
this.refreshSlider();
this.window.trigger("hero-playing",true);
this.showCloseBtn();
this.container.find(this.BX_CONTROLS_SELECTOR).hide();
this.player=c;
if(this.config.ambientVideo){this.ambientPlayerCreateFlow()
}else{this.setVideoHeight(this.getVideoHeight(this.container.width()));
if(this.config.autoRun){this.autoPlayPlayerCreateFlow()
}else{this.regularCreateFlow()
}}c.mb.subscribe(OO.EVENTS.PLAYBACK_READY,"mediaKitPlayer",this.proxy(this.onPlayBackReady));
c.mb.subscribe(OO.EVENTS.DESTROY,"mediaKitPlayer",this.proxy(this.onPlayerDestroy));
c.mb.subscribe(OO.EVENTS.WILL_PLAY_ADS,"mediaKitPlayer",this.proxy(this.hideLoader));
c.mb.subscribe(OO.EVENTS.FULLSCREEN_CHANGED,"mediaKitPlayer",this.proxy(this.onFullScreen))
},onPlayBackReady:function(){if(pgatour.is.touchDevice){this.hideLoader()
}},onPlayerDestroy:function(){this.isPlaying=false;
this.firstPlay=false;
this.refreshSlider();
this.window.trigger("hero-playing",false);
this.hideCloseBtn();
this.container.find(this.BX_CONTROLS_SELECTOR).show();
if(!this.config.ambientVideo){this.ambientDestroyFlow()
}},onPlayerReady:function(){this.hideLoader();
var c=Number(this.$soundBtn.hasClass(this.NO_VOLUME_CLASS));
if((this.config.ambientVideo||this.config.autoRun)&&!pgatour.is.touchDevice){this.container.find(this.OO_CONTROLS_SELECTOR).toggle(!this.firstPlay&&!this.config.ambientVideo)
}if(this.config.showSoundBtn&&!pgatour.is.touchDevice){this.player.setVolume(c);
this.showSoundBtn()
}if(pgatour.is.touchDevice){this.player.setVolume(1)
}},onRegularPlayerReady:function(){if(this.player.getVolume()&&this.config.showSoundBtn&&!pgatour.is.touchDevice){this.$soundBtn.addClass(this.NO_VOLUME_CLASS);
this.showSoundBtn()
}},onPlayerEnd:function(c){if(c!==true){this.onPlayerClose()
}this.hideSoundBtn();
if(this.config.ambientVideo){this.ambientPlayerEndFlow()
}if(!this.config.ambientVideo&&this.config.autoRun){this.autoPlayEndFlow()
}},onPlayerClose:function(){this.destroyVideoPlayers();
this.hideSoundBtn();
if(this.config.autoRun){this.onPlayerEnd(true)
}},onSoundBtnClick:function(){if(this.player&&this.config.showSoundBtn){this.$soundBtn.toggleClass(this.NO_VOLUME_CLASS);
this.player.setVolume(this.$soundBtn.hasClass(this.NO_VOLUME_CLASS)-0)
}},onCtaClick:function(c){c.stopPropagation()
},onMoreClick:function(e){if(e.target.nodeName.toLowerCase()==="a"){return
}var d=b(e.currentTarget).prev()[0];
var c=document.createEvent("MouseEvents");
c.initMouseEvent("click",true,true,null,null,0,0,90,90,false,false,false,false,0,null);
d.dispatchEvent(c)
},onVideoPlayerSlide:function(d,c){this.adHide();
this.base(d,c)
},onSlideChanged:function(c){if(this.isAdPersist(c)){this.adMove();
this.adShow()
}},onFullScreen:function(){if(pgatour.is.iOS&&!this.player.isFullscreen()){this.onPlayerClose()
}}})
})(jQuery,window);
(function(d,c,b){var a=b.setModulePath("players");
a.ArticleMediaHeader=a.ArticleMediaHeader||a.Hero.extend({VIDEO_CONTAINER_SELECTOR:".video-container",setVideoHeight:function(e){this.base(e);
this.container.find(this.SLIDER_CONTAINER_SELECTOR).height("auto");
this.container.find(this.VIDEO_CONTAINER_SELECTOR).height(e)
}})
})(jQuery,window,pgatour);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{configurable:false,enumerable:true,get:d})
}};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=3)
})([(function(module,exports){var g;
g=(function(){return this
})();
try{g=g||Function("return this")()||(1,eval)("this")
}catch(e){if(typeof window==="object"){g=window
}}module.exports=g
}),(function(c,a,d){Object.defineProperty(a,"__esModule",{value:true});
a["default"]=b;
function b(e){if(e&&e!==""){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}else{return"--"
}}}),(function(c,e,b){Object.defineProperty(e,"__esModule",{value:true});
var f=b(1);
var a=k(f);
function k(n){return n&&n.__esModule?n:{"default":n}
}e["default"]={dep:{formatNumber:a["default"]},getEventById:function l(o,p){for(var n=0;
n<o.length;
n++){if(o[n].id===p){return o[n]
}}return null
},getTicketById:function m(o,p,r){var q=this.getEventById(o,p);
for(var n=0;
n<q.tickets.length;
n++){if(q.tickets[n].id===r){return q.tickets[n]
}}return null
},populateWithFormattedPrices:function i(p){for(var o=0;
o<p.length;
o++){for(var n=0;
n<p[o].tickets.length;
n++){var q=p[o].tickets[n];
q.priceString="$"+this.dep.formatNumber(q.price.toFixed(2))
}}return p
},formatMoneyValue:function j(o){var n=o.toFixed(2);
return"$"+this.dep.formatNumber(n)
},multiplyFloat:function d(p,o){var r=o.toString().length-2;
function n(s){return s*Math.pow(10,r)
}function q(s){return s/Math.pow(100,r)
}return q(n(p)*n(o))
},updateTicketsTotal:function g(p){for(var o=0;
o<p.length;
o++){var q=p[o];
for(var n=0;
n<q.tickets.length;
n++){var r=q.tickets[n];
var s=q.ticketsCount[r.id];
if(s){var t=this.multiplyFloat(s,r.price);
r.totalPrice=this.formatMoneyValue(t)
}}}return p
},hasMastercardTickets:function h(p){for(var o=0;
o<p.length;
o++){var q=p[o];
for(var n=0;
n<q.tickets.length;
n++){var r=q.tickets[n];
var s=q.ticketsCount[r.id];
if(s&&r.name.toLowerCase().indexOf("mastercard")!==-1){return true
}}}return false
}}
}),(function(c,b,f){var a=f(4);
var e=d(a);
function d(g){return g&&g.__esModule?g:{"default":g}
}(0,e["default"])(window)
}),(function(c,s,d){Object.defineProperty(s,"__esModule",{value:true});
s["default"]=function(u){var G=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{EventData:b["default"],EventUtils:t["default"],Cart:k["default"],CartButton:n["default"],TicketSelector:j["default"],EventList:e["default"],ModalSystemError:l["default"],ModalTicketInfo:q["default"]};
var S=u.$,X=u.ReactDOM,F=u.pgatour;
return F.FanJourneyTickets=F.FanJourneyTickets||F.BaseCssCloudinaryModule.extend({TICKET_ADDED_MESSAGE_CLASS:"show-ticket-added-message",EVENT_ORDER_PRIORITY:["TD1","TD2","TD3","TD4","TD5","TD6","TD7","TW","TDA","PD1","PD2","PD3","PD4","PD5","PD6","PD7","PW","PDA"],eventBus:S({}),ticketFilter:"T",init:function aa(){if(!this.config.feed.events){return
}this.initCart();
S("body").on("click",this.proxy(this.onBodyClick));
this.$eventListContainer=this.container.find(".event-list-render");
this.$cartButtonContainer=this.container.find(".cart-render");
this.$ticketSelectorContainer=this.container.find(".ticket-selector");
this.eventBus.on("toggleEvent",this.proxy(this.toggleEvent));
this.eventBus.on("addTicket",this.proxy(this.addTicket));
this.eventBus.on("removeTicket",this.proxy(this.removeTicket));
this.eventBus.on("addToCart",this.proxy(this.addToCart));
this.eventBus.on("buyNow",this.proxy(this.buyNow));
this.eventBus.on("onRendered",this.proxy(this.onRendered));
this.eventBus.on("onCartButtonClick",this.proxy(this.onCartButtonClick));
this.eventBus.on("showTicketInfo",this.proxy(this.showTicketInfo));
this.eventBus.on("onChangeTicketSelector",this.proxy(this.filterTickets));
this.loadEvents(this.config.feed.events)
},initCart:function Y(){this.cart=new G.Cart();
this.cart.init({feedUrl:this.config.feedUrl,apiUrl:this.config.cartApiUrl,domain:this.config.domain,countDownTime:this.config.countDownTime,events:this.config.feed.events,callbacks:{onCartUpdated:this.proxy(this.onCartUpdated),onCartTimerUpdated:this.proxy(this.onCartTimerUpdated),onCartError:this.proxy(this.onCartError),onCartAborted:this.proxy(this.onCartAborted)}})
},renderEventList:function J(){if(!this.events){return
}var af=this.events.filter(this.applyTicketFilter.bind(this)).sort(this.sortEvents.bind(this));
X.render(React.createElement(G.EventList,{events:af,infoBubble:this.infoBubble,emptyImageUrl:this.config.emptyImageUrl,screenSize:this.getScreenSize(),eventBus:this.eventBus,localization:this.config.localization}),this.$eventListContainer[0])
},applyTicketFilter:function V(ag){if(!ag.tickets||!ag.tickets.length){return false
}if(!this.ticketFilter){return true
}var af=ag.id.substr(4,this.ticketFilter.length);
return af===this.ticketFilter
},getEventOrderPriority:function M(ag){var af=this.EVENT_ORDER_PRIORITY.indexOf(ag.id.substr(4,3));
return af!==-1?af:this.EVENT_ORDER_PRIORITY.length
},sortEvents:function I(ai,ah){var ag=this.getEventOrderPriority(ai);
var af=this.getEventOrderPriority(ah);
if(ag===this.EVENT_ORDER_PRIORITY.length&&af===this.EVENT_ORDER_PRIORITY.length){return ai.id>ah.id?1:-1
}else{return ag-af
}},renderCartButton:function w(){X.render(React.createElement(G.CartButton,{ticketsCount:this.cart.getTotalTicketsCount(),timeLeft:this.cart.getTimeLeft(),eventBus:this.eventBus,localization:this.config.localization}),this.$cartButtonContainer[0])
},renderTicketSelector:function H(){X.render(React.createElement(G.TicketSelector,{selected:this.ticketFilter,types:this.getEventTypes(),eventBus:this.eventBus,localization:this.config.localization}),this.$ticketSelectorContainer[0])
},layout:function Q(){if(this.isSmallScreen()!==this.prevIsSmallScreen){this.prevIsSmallScreen=this.isSmallScreen();
this.infoBubble=null;
this.renderEventList()
}},getEventTicketsTotalCount:function A(ag){var af=0;
for(var ah in ag.ticketsCount){if(ag.ticketsCount.hasOwnProperty(ah)){af+=ag.ticketsCount[ah]
}}return af
},getEventTicketsForCart:function O(ag){var af=[];
for(var ai in ag.ticketsCount){if(ag.ticketsCount.hasOwnProperty(ai)){var ah=G.EventUtils.getTicketById(this.events,ag.id,ai);
af.push(ah)
}}return af
},resetEvents:function ad(ag){for(var af=0;
af<ag.length;
af++){var ah=ag[af];
ah.opened=false;
ah.error=null;
ah.displayInfoForTicketId=null;
ah.ticketsCount={}
}return ag
},toggleEvent:function W(af,ag){for(var ah=0;
ah<this.events.length;
ah++){var ai=this.events[ah];
ai.opened=ai.id===ag.eventId&&!ai.opened;
ai.error=null
}this.renderEventList()
},updateTicketCount:function y(ag,aj){var ai=G.EventUtils.getEventById(this.events,ag.eventId);
if(ai){var af=ai.ticketsCount;
var ah=af[ag.ticketId]||0;
ah=ah+aj;
if(ah>=0){af[ag.ticketId]=ah;
ai.ticketsTotalCount=this.getEventTicketsTotalCount(ai);
ai.error=null;
this.renderEventList()
}}},addTicket:function v(af,ag){this.updateTicketCount(ag,1)
},removeTicket:function R(af,ag){this.updateTicketCount(ag,-1)
},addToCart:function C(ag,ai,ah){var aj=G.EventUtils.getEventById(this.events,ai.eventId);
this.redirectToCartAfterAdding=!!ah;
if(aj){if(aj.ticketsTotalCount){var af=this.getEventTicketsForCart(aj);
this.cart.addEventTickets(aj,af)
}else{this.redirectToCartAfterAdding=false;
aj.error="quantity"
}this.renderEventList()
}else{this.redirectToCartAfterAdding=false
}},buyNow:function T(af,ag){this.addToCart(af,ag,true)
},showTicketInfo:function ab(af,ah){if(this.isSmallScreen()){if(ah.ticketId){var ai=G.EventUtils.getTicketById(this.events,ah.eventId,ah.ticketId);
F.fanJourneyModalWindow.open(React.createElement(G.ModalTicketInfo,{ticket:ai,emptyImageUrl:this.config.emptyImageUrl,eventBus:this.eventBus,localization:this.config.localization}))
}}else{if(ah.ticketId){var ag=this.infoBubble&&this.infoBubble.eventId===ah.eventId&&this.infoBubble.ticketId===ah.ticketId;
this.infoBubble=ag?null:{eventId:ah.eventId,ticketId:ah.ticketId}
}else{this.infoBubble=null
}this.renderEventList()
}},showTicketAddedMessage:function P(){this.container.addClass(this.TICKET_ADDED_MESSAGE_CLASS);
this.hideTicketAddedMessageTimer=setTimeout(this.proxy(this.hideTicketAddedMessage),this.config.ticketAddedMessageTimeout*1000)
},hideTicketAddedMessage:function E(){if(this.hideTicketAddedMessageTimer){clearTimeout(this.hideTicketAddedMessageTimer);
this.hideTicketAddedMessageTimer=null;
this.container.removeClass(this.TICKET_ADDED_MESSAGE_CLASS)
}},getEventTypes:function L(){var af=this;
return this.events.reduce(function(ag,ah){return af.reduceEventTypes(ag,ah)
},[])
},reduceEventTypes:function ae(af,ah){var ag=ah.id.substr(4,1);
if(af.indexOf(ag)===-1){af.push(ag)
}return af
},filterTickets:function U(ag,af){this.ticketFilter=af;
this.renderEventList();
this.renderTicketSelector()
},loadEvents:function N(af){this.events=G.EventData.populateWithLowestPrice(af);
this.events=G.EventUtils.populateWithFormattedPrices(af);
this.events=this.resetEvents(this.events);
this.renderEventList();
this.renderCartButton();
this.renderTicketSelector()
},onRendered:function D(af){var ag=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
this.applyCloudinary(ag.$container)
},onBodyClick:function B(){if(this.infoBubble){this.eventBus.trigger("showTicketInfo",{})
}},onCartUpdated:function x(af){if(af){af.opened=false;
af.ticketsCount={};
af.ticketsTotalCount=0;
this.showTicketAddedMessage();
if(this.redirectToCartAfterAdding){this.onCartButtonClick()
}}this.renderEventList();
this.renderCartButton()
},onCartTimerUpdated:function z(){if(this.events){this.renderCartButton()
}},onCartError:function ac(af,ag){this.redirectToCartAfterAdding=false;
if(ag==="system"){F.fanJourneyModalWindow.open(React.createElement(G.ModalSystemError,{errorMessage:this.config.localization.errorMessages.system}))
}else{if(af){af.error=ag==="timeout"?"timeout":"unknown";
this.renderEventList()
}}},onCartAborted:function Z(af){this.renderCartButton();
if(af){F.fanJourneyModalWindow.open(React.createElement(G.ModalSystemError,{errorMessage:this.config.localization.cartExpiredMessage}))
}},onCartButtonClick:function K(){F.setWindowLocation(this.config.cartPageUrl)
}})
};
var m=d(5);
var b=a(m);
var o=d(2);
var t=a(o);
var g=d(6);
var k=a(g);
var h=d(10);
var e=a(h);
var r=d(13);
var n=a(r);
var p=d(14);
var j=a(p);
var i=d(15);
var l=a(i);
var f=d(16);
var q=a(f);
function a(u){return u&&u.__esModule?u:{"default":u}
}}),(function(d,f,c){Object.defineProperty(f,"__esModule",{value:true});
var g=c(1);
var b=j(g);
function j(k){return k&&k.__esModule?k:{"default":k}
}f["default"]={dep:{formatNumber:b["default"]},populateWithLowestPrice:function i(){var l=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
for(var k=0;
k<l.length;
k++){var m=l[k];
m.lowestPrice=this.getLowestPrice(m);
if(m.lowestPrice){m.lowestPriceString="$"+this.dep.formatNumber(m.lowestPrice.toFixed(2))
}}return l
},getLowestPrice:function a(){var l=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var k=(l.tickets||[]).slice();
k.sort(this.compareByTicketPrice.bind(this));
return k[0]&&k[0].price
},compareByTicketPrice:function h(l,k){var n=this.getPriceAsNumber(l.price);
var m=this.getPriceAsNumber(k.price);
return n-m
},getPriceAsNumber:function e(){var l=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";
var k=l.toString().replace(/[^0-9.]/g,"");
k=parseFloat(k)||null;
return k
}}
}),(function(b,a,c){(function(e){Object.defineProperty(a,"__esModule",{value:true});
var f=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(u){return typeof u
}:function(u){return u&&typeof Symbol==="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u
};
var i=function(){function u(y,w){for(var v=0;
v<w.length;
v++){var x=w[v];
x.enumerable=x.enumerable||false;
x.configurable=true;
if("value" in x){x.writable=true
}Object.defineProperty(y,x.key,x)
}}return function(x,v,w){if(v){u(x.prototype,v)
}if(w){u(x,w)
}return x
}
}();
var h=c(2);
var p=s(h);
var d=c(7);
var j=s(d);
var q=c(8);
var m=s(q);
var o=c(9);
var t=s(o);
function s(u){return u&&u.__esModule?u:{"default":u}
}function l(u,v){if(!(u instanceof v)){throw new TypeError("Cannot call a class as a function")
}}var n=e,k=n.$;
var g=0;
var r=function(){function aa(){l(this,aa);
this.cartId=null;
this.orderCompleted=false;
this.dep={EventUtils:p["default"]};
this.actionQueue=new j["default"]();
this.timer=new m["default"]();
this.customer=new t["default"]()
}i(aa,[{key:"init",value:function ad(af){this.apiUrl=af.apiUrl;
this.callbacks=k.extend({onCartUpdated:k.noop,onCartTimerUpdated:k.noop,onCartError:k.noop,onCartAborted:k.noop,onAuthorizationChange:k.noop},af.callbacks);
this.requestTotals=!!af.requestTotals;
this.domain=af.domain;
this.feedFile=af.feedUrl&&af.feedUrl.split("/").pop().replace(".json","");
this.actionQueue.init({requestTotals:this.requestTotals,actions:{retrieve:this._retrieve.bind(this),update:this._update.bind(this),abort:this._abort.bind(this),create:this._create.bind(this),getTotals:this._getTotals.bind(this)}});
this.timer.init({countDownTimer:af.countDownTime,callbacks:{onUpdate:this.callbacks.onCartTimerUpdated,onTimeout:this._onTimerTimeout.bind(this)}});
if(af.requestCustomer){this.customer.init({apiUrl:this.apiUrl,domain:this.domain,feedFile:this.feedFile,callbacks:{onAuthorizationChange:this.callbacks.onAuthorizationChange}})
}this._populateWithEvents(af.events);
if(af.events.length){this.retrieve()
}return this.cartId
}},{key:"retrieve",value:function T(){this._getInfoFromCookies();
if(this.cartId){this.actionQueue.set([{action:"retrieve"}]);
this.actionQueue.next()
}}},{key:"abort",value:function I(af){if(this.cartId){this.actionQueue.set([{action:"abort",abortByTimeout:af}]);
this.actionQueue.next()
}}},{key:"addEventTickets",value:function M(ah,af){var aj=[];
for(var ag=0;
ag<af.length;
ag++){var ak=af[ag].id;
var ai=ah.ticketsCount[ak];
if(ai>0){aj.push({ticket_type_code:ak,num_seats:ai})
}}if(this.cartId){this.actionQueue.set([{action:"update",event:ah,eventsToUpdate:[{eventId:ah.id,ticketTypes:aj}]}])
}else{this.actionQueue.set([{action:"create",eventId:ah.id,event:ah,ticketTypes:aj}])
}if(this.requestTotals){this.actionQueue.add({action:"getTotals",event:ah})
}this.actionQueue.next()
}},{key:"update",value:function Q(af){this.actionQueue.buildFromEventsState(af,this.getEvents());
this.actionQueue.next()
}},{key:"getEvents",value:function v(){var af=[];
for(var aj=0;
aj<this.events.length;
aj++){var ak=this.events[aj];
var ag=[];
for(var ai=0;
ai<ak.tickets.length;
ai++){var al=ak.tickets[ai];
if(ak.ticketsCount[al.id]>=0){ag.push(k.extend(true,{},al))
}}if(ag.length){var ah=k.extend(true,{},ak);
ah.tickets=ag;
af.push(ah)
}}return af
}},{key:"getTimeLeft",value:function Z(){return this.timer.timeLeft
}},{key:"getTotalTicketsCount",value:function F(){var af=0;
for(var ag=0;
ag<this.events.length;
ag++){var ah=this.events[ag];
for(var ai in ah.ticketsCount){if(ah.ticketsCount.hasOwnProperty(ai)){af+=ah.ticketsCount[ai]
}}}return af
}},{key:"buy",value:function E(ag,ah){var af=this.customer.getGigyaInfo();
if(!af||this.customer.getAuthorizationStatus()!=="full"){this._onCartError(null,"system")
}else{this._buy(ag,ah,af)
}}},{key:"_retrieve",value:function B(){this.updateInProgress=true;
var af={cmd:this.requestTotals?"total":"shopping_cart",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile};
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onRetrieved,this),error:k.proxy(this._onRequestError,this),data:af})
}},{key:"_create",value:function K(af,ag){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onCreated,this,af),error:k.proxy(this._onCreatedError,this,af),data:{cmd:"seats_hold",event_name:af.id,ticket_type:ag,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_update",value:function ac(ah,ai){this.updateInProgress=true;
var af=[k.Deferred().resolve()];
for(var ag=0;
ag<ai.length;
ag++){af.push(k.ajax({url:this.apiUrl,method:"POST",dataType:"json",data:{cmd:"seats_hold",order_num_in:this.cartId,event_name:ai[ag].eventId,ticket_type:ai[ag].ticketTypes,domain:this.domain,price_feed:this.feedFile}}))
}k.when.apply(this,af).done(k.proxy(this._onUpdated,this,ah)).fail(k.proxy(this._onRequestError,this,ah))
}},{key:"_abort",value:function L(af){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onAborted,this,af),error:k.proxy(this._onRequestError,this),data:{cmd:"abort_shopping_cart",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_getTotals",value:function U(af){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onTotalsLoaded,this,af),error:k.proxy(this._onRequestError,this,af),data:{cmd:"total",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_buy",value:function D(ag,ai,af){var ah=k.extend({cmd:"payment_request",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile,cc_exp:ag.expirationDateAsNumber,data_mask:ag.mask,cc_type:ag.type,cin:ai},af);
this.creditCard=ag;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onBuyCompleted,this),error:k.proxy(this._onRequestError,this),data:ah})
}},{key:"_getSavedCarts",value:function N(){var af=k.cookie("ticket_carts");
if(typeof af==="string"){try{af=JSON.parse(af)
}catch(ag){af={}
}}if(!af||(typeof af==="undefined"?"undefined":f(af))!=="object"){af={}
}return af
}},{key:"_setSavedCarts",value:function ab(){var af=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
k.cookie("ticket_carts",JSON.stringify(af),{expires:1,path:"/"})
}},{key:"_setCookies",value:function C(){var af=this._getSavedCarts();
af[this.feedFile]={id:this.cartId,startTime:this.timer.startTime};
this._setSavedCarts(af)
}},{key:"_getInfoFromCookies",value:function ae(){var ag=this._getSavedCarts();
var af=ag[this.feedFile];
if(af&&af.id&&af.startTime){this.timer.set(af.startTime);
if(this.timer.secondsLeft>0){this.cartId=af.id
}else{this.timer.stop();
this._removeCookies()
}}}},{key:"_removeCookies",value:function x(){var af=this._getSavedCarts();
delete af[this.feedFile];
this._setSavedCarts(af)
}},{key:"_resetCart",value:function W(){this.cartId=null;
this._updateCartEvents([],true);
this._removeCookies();
this.timer.stop();
this.actionQueue.set([])
}},{key:"_updateCartEvents",value:function X(ag,aj){if(aj){for(var af=0;
af<this.events.length;
af++){this.events[af].ticketsCount={}
}}for(var ak=0;
ak<ag.length;
ak++){var am=ag[ak];
var ai=this.dep.EventUtils.getEventById(this.events,am.event_name);
var al=this.dep.EventUtils.getTicketById(this.events,am.event_name,am.ticket_type_code);
if(ai&&al){var ah=ai.ticketsCount[al.id]||0;
ai.ticketsCount[al.id]=ah+am.num_seats
}}}},{key:"_populateWithEvents",value:function u(ag){this.events=[];
for(var af=0;
af<ag.length;
af++){var ah=k.extend(true,{},ag[af],{ticketsCount:{}});
this.events.push(ah)
}}},{key:"_onCreated",value:function H(af,ag){if(ag.seats&&ag.result===g){this.cartId=ag.order_num_out;
this._updateCartEvents(ag.seats,true);
this.timer.start();
this._setCookies();
if(this.actionQueue.isEmpty()){this._onCartUpdated(af)
}else{this.actionQueue.next()
}}else{this._resetCart();
this._onCartError(af,"system")
}}},{key:"_onCreatedError",value:function P(ah,ag,af){this._resetCart();
this._onRequestError(ah,ag,af)
}},{key:"_onRetrieved",value:function O(af){var ag=af.shoppingCart||af;
if(ag&&ag.seats&&ag.result===g){this._updateCartEvents(ag.seats,true);
this.timer.start();
if(this.requestTotals){this._onTotalsLoaded(null,af)
}else{this._onCartUpdated()
}}else{this.cartId=null;
this.updateInProgress=false;
this._onCartUpdated()
}}},{key:"_onUpdated",value:function R(ag){var ai=Array.prototype.slice.call(arguments,2);
for(var af=0;
af<ai.length;
af++){var ah=ai[af][0];
if(ah&&ah.seats&&ah.result===g){this._updateCartEvents(ah.seats)
}else{this._onCartError(ag,"system");
this._retrieve();
return
}}if(this.actionQueue.isEmpty()){this._onCartUpdated(ag)
}else{this.actionQueue.next()
}}},{key:"_onTotalsLoaded",value:function y(af,ag){if(ag.total){this.totals={subtotal:this.dep.EventUtils.formatMoneyValue(ag.subtotal),serviceCharge:!ag.fees?null:this.dep.EventUtils.formatMoneyValue(ag.fees),total:this.dep.EventUtils.formatMoneyValue(ag.total)};
this._onCartUpdated(af)
}else{this.totals={};
this._onCartError(af,"system")
}}},{key:"_onAborted",value:function G(af){this.cartId=null;
this._removeCookies();
this.timer.stop();
if(this.actionQueue.isEmpty()){this._onCartAborted(af)
}else{this.actionQueue.next()
}}},{key:"_onBuyCompleted",value:function V(af){if(af.result===g&&af.mop&&af.mop[0]){if(af.mop[0].cc_captured==="Y"){this._onOrderCompleted()
}else{this._onCartError(null,"system",af.mop[0].cc_results)
}}else{this._onCartError(null,"system")
}}},{key:"_onRequestError",value:function A(ah,ag,af){var ai=af==="timeout"?"timeout":"error";
this._onCartError(ah,ai)
}},{key:"_onCartUpdated",value:function J(af){this.updateInProgress=false;
this.callbacks.onCartUpdated(af)
}},{key:"_onCartError",value:function w(ag,ah,af){this.updateInProgress=false;
this.callbacks.onCartError(ag,ah,af)
}},{key:"_onCartAborted",value:function z(af){this._resetCart();
this.updateInProgress=false;
this.callbacks.onCartAborted(af)
}},{key:"_onTimerTimeout",value:function S(){this.abort(true)
}},{key:"_onOrderCompleted",value:function Y(){this.orderCompleted=true;
this._removeCookies();
this.timer.stop();
this._onCartUpdated()
}}]);
return aa
}();
a["default"]=r
}.call(a,c(0)))
}),(function(c,a,f){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function g(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}return function(j,h,i){if(h){g(j.prototype,h)
}if(i){g(j,i)
}return j
}
}();
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var d=function(){function i(){e(this,i);
this.queue=[]
}b(i,[{key:"init",value:function p(r){this.actions=r.actions;
this.requestTotals=r.requestTotals
}},{key:"add",value:function q(r){this.queue.push(r)
}},{key:"set",value:function o(r){this.queue=r
}},{key:"next",value:function k(){if(this.queue.length){var r=this.queue.shift();
if(r.action==="retrieve"){this.actions.retrieve()
}else{if(r.action==="update"){this.actions.update(r.event,r.eventsToUpdate,true)
}else{if(r.action==="abort"){this.actions.abort(r.abortByTimeout)
}else{if(r.action==="create"){this.actions.create(r.event||{id:r.eventId},r.ticketTypes,true)
}else{if(r.action==="getTotals"){this.actions.getTotals(r.event)
}}}}}}}},{key:"empty",value:function l(){this.queue=[]
}},{key:"buildFromEventsState",value:function h(v,u){var x=this._getEventsToUpdate(v,u);
var r=[];
if(x){for(var w in x){if(x.hasOwnProperty(w)){r.push({action:"update",eventId:w,ticketTypes:x[w]})
}}}else{var t=this._getEventsToCreate(v);
for(var s in t){if(t.hasOwnProperty(s)){r.push({action:r.length===0?"create":"update",eventId:s,ticketTypes:t[s]})
}}if(r.length){r.unshift({action:"abort"})
}}if(!r.length){r.push({action:"abort"})
}else{if(this.requestTotals){r.push({action:"getTotals"})
}}this.queue=this._squashQueue(r)
}},{key:"isEmpty",value:function j(){return !this.queue.length
}},{key:"_squashQueue",value:function g(s){var r=[];
for(var t=0;
t<s.length;
t++){var v=s[t];
var u=r[r.length-1];
if(u&&u.action==="update"&&v.action==="update"){u.eventsToUpdate.push({eventId:v.eventId,ticketTypes:v.ticketTypes})
}else{if(v.action==="update"){r.push({action:"update",eventsToUpdate:[{eventId:v.eventId,ticketTypes:v.ticketTypes}]})
}else{r.push(v)
}}}return r
}},{key:"_getEventsToUpdate",value:function m(r,A){var x={};
for(var v=0;
v<r.length;
v++){var t=r[v];
var s=A[v];
if(t.id!==s.id||t.tickets.length!==s.tickets.length){return false
}else{for(var u=0;
u<t.tickets.length;
u++){var y=t.tickets[u];
var w=s.tickets[u];
var z=t.ticketsCount[y.id]||0;
var B=s.ticketsCount[w.id]||0;
if(y.id!==w.id||z<B){return false
}else{if(z>B){x[t.id]=x[t.id]||[];
x[t.id].push({ticket_type_code:y.id,num_seats:z-B})
}}}}}return x
}},{key:"_getEventsToCreate",value:function n(u){var r={};
for(var t=0;
t<u.length;
t++){var v=u[t];
for(var s=0;
s<v.tickets.length;
s++){var x=v.tickets[s];
var w=v.ticketsCount[x.id];
if(w){r[v.id]=r[v.id]||[];
r[v.id].push({ticket_type_code:x.id,num_seats:w})
}}}return r
}}]);
return i
}();
a["default"]=d
}),(function(b,a,c){(function(f){Object.defineProperty(a,"__esModule",{value:true});
var e=function(){function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}return function(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}
}();
function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var i=f,g=i.$;
var d=function(){function j(){h(this,j);
this.secondsLeft=0;
this.timeLeft="";
this.startTime=null
}e(j,[{key:"init",value:function n(r){this.countDownTimer=r.countDownTimer;
this.callbacks=r.callbacks
}},{key:"start",value:function q(){if(!this.startTime){this.startTime=Date.now()
}this._update(this.startTime);
this.timerInterval=setInterval(g.proxy(this._onClockTick,this),1000);
this.callbacks.onUpdate()
}},{key:"stop",value:function l(){this.secondsLeft=0;
this.timeLeft="";
this.startTime=null;
if(this.timerInterval){clearInterval(this.timerInterval);
this.timerInterval=null
}this.callbacks.onUpdate()
}},{key:"set",value:function p(r){this.startTime=r;
this._update(r)
}},{key:"_getSecondsLeft",value:function o(r){var t=Math.floor((Date.now()-r)/1000);
var s=this.countDownTimer-t;
return s>0?s:0
}},{key:"_update",value:function k(s){this.secondsLeft=this._getSecondsLeft(s);
if(this.secondsLeft){var r=Math.floor(this.secondsLeft/60);
var t=this.secondsLeft%60;
if(r<10){r="0"+r
}if(t<10){t="0"+t
}this.timeLeft=r+":"+t
}else{this.timeLeft=""
}}},{key:"_onClockTick",value:function m(){this._update(this.startTime);
if(!this.secondsLeft){this.stop();
this.callbacks.onTimeout()
}this.callbacks.onUpdate()
}}]);
return j
}();
a["default"]=d
}.call(a,c(0)))
}),(function(b,a,c){(function(h){Object.defineProperty(a,"__esModule",{value:true});
var f=function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
}();
function j(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var e=0;
var d=5333;
var k=h,i=k.$;
var g=function(){function o(){j(this,o);
this.ticketMasterAuthorized=null;
this.gigyaAuthorized=null;
this.creditCards=[]
}f(o,[{key:"init",value:function y(A){this.apiUrl=A.apiUrl;
this.domain=A.domain;
this.feedFile=A.feedFile;
this.callbacks=A.callbacks;
this.gigyaAuthorized=this._isGigyaAuthorized();
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya();
pgatour.GigyaSocialize.bindLogoutEventHandler(this._onGigyaLogout.bind(this));
pgatour.GigyaSocialize.getUserAccountInfo(this._onGigyaAccountInfo.bind(this))
}},{key:"signIn",value:function z(C,B){var A=pgatour.GigyaSocialize.user;
if(!A){return
}i.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:i.proxy(this._onSignIn,this),error:i.proxy(this._onSignInRequestError,this),data:{cmd:"customer_query",email:C,pin:B,UID:A.UID,UIDSignature:A.UIDSignature,signatureTimestamp:A.signatureTimestamp,domain:this.domain,price_feed:this.feedFile}})
}},{key:"getAuthorizationStatus",value:function s(){if(this.gigyaAuthorized&&this.ticketMasterAuthorized){return"full"
}else{if(this.gigyaAuthorized){return"gigya"
}else{return"none"
}}}},{key:"getGigyaInfo",value:function n(B){var A=B||pgatour.GigyaSocialize.user;
if(!A){return null
}return{UID:A.UID,UIDSignature:A.UIDSignature,signatureTimestamp:A.signatureTimestamp}
}},{key:"_getCreditCards",value:function m(B){var A=this.getGigyaInfo(B);
if(this.getAuthorizationStatus()!=="full"||!A){return
}var C=i.extend({cmd:"cc_query",domain:this.domain,price_feed:this.feedFile},A);
i.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:i.proxy(this._onCreditCardsLoaded,this),error:i.proxy(this._onCreditCardsRequestError,this),data:C})
}},{key:"_isGigyaAuthorized",value:function v(B){var A=B||pgatour.GigyaSocialize.user;
return !!(A&&A.data)
}},{key:"_getTicketMasterAuthorizedFromGigya",value:function r(B){var A=void 0;
if(B){A=B.data
}else{A=pgatour.GigyaSocialize&&pgatour.GigyaSocialize.user&&pgatour.GigyaSocialize.user.data
}return !!(A&&A.ATSUser)
}},{key:"_onSignIn",value:function x(A){if(A.customer&&!A.errorMessage){this.ticketMasterAuthorized=true;
this._getCreditCards()
}else{if(A.errorMessage==="Failed login"){this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"authError"})
}else{this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"system"})
}}}},{key:"_onSignInRequestError",value:function p(){this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"system"})
}},{key:"_onGigyaLogin",value:function q(){this.gigyaAuthorized=true;
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya();
if(this.getAuthorizationStatus()==="full"){this._getCreditCards()
}else{this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}}},{key:"_onGigyaLogout",value:function l(){this.gigyaAuthorized=false;
this.ticketMasterAuthorized=false;
this.creditCards=[];
this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}},{key:"_onGigyaAccountInfo",value:function u(A){this.gigyaAuthorized=this._isGigyaAuthorized(A);
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya(A);
if(this.getAuthorizationStatus()==="full"){this._getCreditCards(A)
}else{this.callbacks.onAuthorizationChange({gigyaUser:A,creditCards:this.creditCards})
}pgatour.GigyaSocialize.bindLoginEventHandler(this._onGigyaLogin.bind(this))
}},{key:"_onCreditCardsLoaded",value:function w(F){this.creditCards=[];
if(F.result===e){var D=F.credit_card||[];
for(var C=0;
C<D.length;
C++){var B=D[C];
var A=(B.cc_exp||"").toString();
if(A.length===4){A=A.substr(0,2)+"/"+A.substr(2,2)
}var E={holder:B.full_name||B.cc_name_first+" "+B.cc_name_last,type:B.cc_type,mask:B.data_mask,expirationDate:A,expirationDateAsNumber:B.cc_exp,address:B.cc_address||B.cc_postal_code};
this.creditCards.push(E)
}this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}else{if(F.result===d){this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}else{this._onCreditCardsRequestError()
}}}},{key:"_onCreditCardsRequestError",value:function t(){this.creditCards=[];
this.callbacks.onAuthorizationChange({error:"system"})
}}]);
return o
}();
a["default"]=g
}.call(a,c(0)))
}),(function(b,a,c){(function(e){Object.defineProperty(a,"__esModule",{value:true});
var h=function(){function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}return function(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}
}();
var g=c(11);
var f=n(g);
function n(o){return o&&o.__esModule?o:{"default":o}
}function i(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function k(o,p){if(!o){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return p&&(typeof p==="object"||typeof p==="function")?p:o
}function l(p,o){if(typeof o!=="function"&&o!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof o)
}p.prototype=Object.create(o&&o.prototype,{constructor:{value:p,enumerable:false,writable:true,configurable:true}});
if(o){Object.setPrototypeOf?Object.setPrototypeOf(p,o):p.__proto__=o
}}var j=e,d=j.React;
var m=function(r){l(o,r);
function o(){i(this,o);
return k(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))
}h(o,[{key:"render",value:function q(){var v=this.getColumns();
return d.createElement("div",{className:"events clearfix"},d.createElement("div",{className:"col"},v.left),d.createElement("div",{className:"col"},v.right))
}},{key:"componentDidMount",value:function u(){this.props.eventBus.trigger("onRendered")
}},{key:"componentDidUpdate",value:function s(){this.props.eventBus.trigger("onRendered")
}},{key:"getColumns",value:function p(){var x=this.props.events;
var v=[];
var y=[];
if(this.props.screenSize==="small"){return{left:this.getEventNodes(x)}
}else{for(var w=0;
w<x.length;
w++){if(w%2===0){v.push(x[w])
}else{y.push(x[w])
}}return{left:this.getEventNodes(v),right:this.getEventNodes(y)}
}}},{key:"getEventNodes",value:function t(v){var w=this;
return v.map(function(x){return d.createElement(f["default"],{key:x.id,event:x,emptyImageUrl:w.props.emptyImageUrl,infoBubble:w.props.infoBubble,eventBus:w.props.eventBus,localization:w.props.localization})
})
}}]);
return o
}(d.Component);
a["default"]=m
}.call(a,c(0)))
}),(function(b,a,c){(function(e){Object.defineProperty(a,"__esModule",{value:true});
var g=function(){function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}return function(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}
}();
var f=c(12);
var n=m(f);
function m(o){return o&&o.__esModule?o:{"default":o}
}function h(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function j(o,p){if(!o){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return p&&(typeof p==="object"||typeof p==="function")?p:o
}function l(p,o){if(typeof o!=="function"&&o!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof o)
}p.prototype=Object.create(o&&o.prototype,{constructor:{value:p,enumerable:false,writable:true,configurable:true}});
if(o){Object.setPrototypeOf?Object.setPrototypeOf(p,o):p.__proto__=o
}}var i=e,d=i.React;
var k=function(t){l(o,t);
function o(){h(this,o);
return j(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))
}g(o,[{key:"render",value:function s(){var w=this.props.event;
var x=this.props.localization;
var v=w.error&&x.errorMessages[w.error];
return d.createElement("div",{className:"event"},d.createElement("div",{className:"inner"},d.createElement("div",{className:"media",onClick:this.onEventClick.bind(this)},d.createElement("img",{className:"img","data-src":w.image,src:this.props.emptyImageUrl,alt:""}),!!w.ticketsTotalCount&&d.createElement("div",{className:"tickets-added"},w.ticketsTotalCount)),d.createElement("div",{className:"description",onClick:this.onEventClick.bind(this)},d.createElement("div",{className:"data"},d.createElement("div",{className:"ticket-type"},d.createElement("span",{className:w.multipass?"multi-day-ticket":"ticket"})),d.createElement("div",{className:"event-name"},d.createElement("div",{className:"title"},w.name)),d.createElement("div",{className:"price"},x.from,d.createElement("br",null),d.createElement("span",{className:"value"},w.lowestPriceString)," ",x.ea))),w.opened&&v&&d.createElement("div",{className:"error-message",dangerouslySetInnerHTML:{__html:v}}),w.opened&&d.createElement("div",{className:"tickets-list"},this.getTickets()),w.opened&&d.createElement("div",{className:"buttons clearfix"},d.createElement("span",{className:"button button-theme",onClick:this.onAddToCartClick.bind(this)},x.addToCart),d.createElement("span",{className:"button button-theme",onClick:this.onBuyNowClick.bind(this)},x.buyNow))))
}},{key:"getTickets",value:function q(){var w=this;
var v=this.props.event;
var x=this.props.infoBubble;
return this.props.event.tickets.map(function(y){return d.createElement(n["default"],{key:y.id,eventId:v.id,ticket:y,count:v.ticketsCount[y.id]||0,displayInfo:x&&v.id===x.eventId&&y.id===x.ticketId,emptyImageUrl:w.props.emptyImageUrl,eventBus:w.props.eventBus})
})
}},{key:"onEventClick",value:function r(){this.props.eventBus.trigger("toggleEvent",{eventId:this.props.event.id})
}},{key:"onAddToCartClick",value:function p(){this.props.eventBus.trigger("addToCart",{eventId:this.props.event.id})
}},{key:"onBuyNowClick",value:function u(){this.props.eventBus.trigger("buyNow",{eventId:this.props.event.id})
}}]);
return o
}(d.Component);
a["default"]=k
}.call(a,c(0)))
}),(function(b,a,c){(function(d){Object.defineProperty(a,"__esModule",{value:true});
var f=function(){function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}return function(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}
}();
function g(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function j(m,n){if(!m){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return n&&(typeof n==="object"||typeof n==="function")?n:m
}function k(n,m){if(typeof m!=="function"&&m!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof m)
}n.prototype=Object.create(m&&m.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});
if(m){Object.setPrototypeOf?Object.setPrototypeOf(n,m):n.__proto__=m
}}var i=d,h=i.$,e=i.React;
var l=function(r){k(v,r);
function v(){g(this,v);
return j(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))
}f(v,[{key:"render",value:function o(){var w=this.props.ticket;
return e.createElement("div",{className:"ticket clearfix"},e.createElement("span",{className:"title"},e.createElement("span",{className:"name"},w.name)," (",w.priceString,")\xA0",w.description&&e.createElement("span",{className:"info"+(this.props.displayInfo?" active":""),ref:"infoContainer"},e.createElement("span",{className:"info-icon"},"i"),e.createElement("span",{className:"tickets-tooltip",ref:"tooltip","data-event-id":this.props.eventId,"data-ticket-id":this.props.ticket.id},!!w.image&&e.createElement("img",{className:"tooltip-img","data-src":w.image,src:this.props.emptyImageUrl,alt:""}),e.createElement("span",{className:"tooltip-description"},w.description),e.createElement("span",{ref:"tooltipArrow",className:"arrow"})))),e.createElement("div",{className:"control"},e.createElement("span",{className:"counter"},this.props.count),e.createElement("span",{className:"remove",onClick:this.onRemoveTicketClick.bind(this)}),e.createElement("span",{className:"add",onClick:this.onAddTicketClick.bind(this)})))
}},{key:"componentDidMount",value:function u(){h(this.refs.infoContainer).on("click",h.proxy(this.onShowInfoClick,this));
this.updateTooltipPos()
}},{key:"componentWillUnmount",value:function m(){h(this.refs.infoContainer).off("click")
}},{key:"componentDidUpdate",value:function q(){this.updateTooltipPos()
}},{key:"updateTooltipPos",value:function s(){if(!this.props.displayInfo){return
}var w=h(this.refs.infoContainer);
var z=h(this.refs.tooltip);
var D=h(this.refs.tooltipArrow);
var A=z.outerWidth();
var y=w.outerWidth();
var C=w.offset().left;
var x=-A/2+y/2;
var B="";
if(C+x<0){B=C+x-D.outerWidth()/2;
x=-C
}z.css("left",x);
D.css("margin-left",B)
}},{key:"onShowInfoClick",value:function t(w){w.stopPropagation();
this.props.eventBus.trigger("showTicketInfo",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}},{key:"onAddTicketClick",value:function p(){this.props.eventBus.trigger("addTicket",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}},{key:"onRemoveTicketClick",value:function n(){this.props.eventBus.trigger("removeTicket",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}}]);
return v
}(e.Component);
a["default"]=l
}.call(a,c(0)))
}),(function(d,b,g){Object.defineProperty(b,"__esModule",{value:true});
var c=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var a=function(l){h(i,l);
function i(){f(this,i);
return e(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))
}c(i,[{key:"render",value:function k(){return React.createElement("span",{className:"cart",onClick:this.onCartClick.bind(this)},React.createElement("span",{className:"cart-icon"},!!this.props.ticketsCount&&React.createElement("span",{className:"counter"},this.props.ticketsCount)),React.createElement("span",{className:"cart-data"},React.createElement("span",{className:"text"},this.props.localization.viewCart),!!this.props.ticketsCount&&React.createElement("span",{className:"timer"},this.props.timeLeft)))
}},{key:"onCartClick",value:function j(){this.props.eventBus.trigger("onCartButtonClick")
}}]);
return i
}(React.Component);
b["default"]=a
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(k){h(l,k);
function l(){f(this,l);
return e(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))
}b(l,[{key:"render",value:function j(){var m=this;
var n=this.props.localization.ticketSelector;
if(this.props.types.length<2){return null
}return React.createElement("div",{ref:"ticketSelector"},n.map(function(p,o){return React.createElement("span",{className:m.props.selected===p.value?"selected":"",onClick:function q(){return m.onClickTicketSelector(p.value)
},key:o},p.text)
}))
}},{key:"onClickTicketSelector",value:function i(m){this.props.eventBus.trigger("onChangeTicketSelector",m)
}}]);
return l
}(React.Component);
a["default"]=d
}),(function(c,a,f){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function e(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function d(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var g=function(j){h(k,j);
function k(){e(this,k);
return d(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){return React.createElement("div",{className:"error-container"},React.createElement("div",{className:"error-icon"}),React.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.errorMessage}}))
}}]);
return k
}(React.Component);
a["default"]=g
}),(function(b,a,c){(function(d){Object.defineProperty(a,"__esModule",{value:true});
var g=function(){function n(r,p){for(var o=0;
o<p.length;
o++){var q=p[o];
q.enumerable=q.enumerable||false;
q.configurable=true;
if("value" in q){q.writable=true
}Object.defineProperty(r,q.key,q)
}}return function(q,o,p){if(o){n(q.prototype,o)
}if(p){n(q,p)
}return q
}
}();
function h(n,o){if(!(n instanceof o)){throw new TypeError("Cannot call a class as a function")
}}function k(n,o){if(!n){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return o&&(typeof o==="object"||typeof o==="function")?o:n
}function m(o,n){if(typeof n!=="function"&&n!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof n)
}o.prototype=Object.create(n&&n.prototype,{constructor:{value:o,enumerable:false,writable:true,configurable:true}});
if(n){Object.setPrototypeOf?Object.setPrototypeOf(o,n):o.__proto__=n
}}var j=d,i=j.$,e=j.React,l=j.ReactDOM;
var f=function(o){m(q,o);
function q(){h(this,q);
return k(this,(q.__proto__||Object.getPrototypeOf(q)).apply(this,arguments))
}g(q,[{key:"render",value:function n(){var r=this.props.ticket;
return e.createElement("div",{className:"ticket-info"},r.image&&e.createElement("img",{className:"img","data-src":r.image,src:this.props.emptyImageUrl,alt:""}),e.createElement("span",{className:"description"},r.description))
}},{key:"componentDidMount",value:function p(){this.props.eventBus.trigger("onRendered",{$container:i(l.findDOMNode(this))})
}}]);
return q
}(e.Component);
a["default"]=f
}.call(a,c(0)))
})]);
(function(d,c){var a=c.pgatour;
var b=a.FollowPopup=a.SharePopup.extend({constructor:function(f,e,h,g){this.links=g;
this.base(f,e,h)
},create:function(){b.create(this.container,this.position,this.title,this.links)
},destroy:function(){b.destroy(this.container)
}},d.extend({},a.SharePopup,{create:function(f,e,j,g){this.popupTemplate='<div class="share-popup"><div><h3>{title}</h3><div class="link-box">';
for(var h=0;
h<g.length;
h++){this.popupTemplate+=a.format('<a class="{className}" href="{url}" target="{target}"/>',{className:g[h].type,url:g[h].url,target:g[h].target||"_self"})
}this.popupTemplate+="</div></div></div>";
f.find("b.follow > .icon").each(this.proxy(this.createSingle,e,j))
},destroy:function(e){e.find("b.follow > .icon").each(this.proxy(this.destroySingle))
}}))
})(jQuery,window);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{configurable:false,enumerable:true,get:d})
}};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=5)
})([(function(module,exports){var g;
g=(function(){return this
})();
try{g=g||Function("return this")()||(1,eval)("this")
}catch(e){if(typeof window==="object"){g=window
}}module.exports=g
}),(function(c,e,b){Object.defineProperty(e,"__esModule",{value:true});
var f=b(7);
var a=k(f);
function k(n){return n&&n.__esModule?n:{"default":n}
}e["default"]={dep:{formatNumber:a["default"]},getEventById:function l(o,p){for(var n=0;
n<o.length;
n++){if(o[n].id===p){return o[n]
}}return null
},getTicketById:function m(o,p,r){var q=this.getEventById(o,p);
for(var n=0;
n<q.tickets.length;
n++){if(q.tickets[n].id===r){return q.tickets[n]
}}return null
},populateWithFormattedPrices:function i(p){for(var o=0;
o<p.length;
o++){for(var n=0;
n<p[o].tickets.length;
n++){var q=p[o].tickets[n];
q.priceString="$"+this.dep.formatNumber(q.price.toFixed(2))
}}return p
},formatMoneyValue:function j(o){var n=o.toFixed(2);
return"$"+this.dep.formatNumber(n)
},multiplyFloat:function d(p,o){var r=o.toString().length-2;
function n(s){return s*Math.pow(10,r)
}function q(s){return s/Math.pow(100,r)
}return q(n(p)*n(o))
},updateTicketsTotal:function g(p){for(var o=0;
o<p.length;
o++){var q=p[o];
for(var n=0;
n<q.tickets.length;
n++){var r=q.tickets[n];
var s=q.ticketsCount[r.id];
if(s){var t=this.multiplyFloat(s,r.price);
r.totalPrice=this.formatMoneyValue(t)
}}}return p
},hasMastercardTickets:function h(p){for(var o=0;
o<p.length;
o++){var q=p[o];
for(var n=0;
n<q.tickets.length;
n++){var r=q.tickets[n];
var s=q.ticketsCount[r.id];
if(s&&r.name.toLowerCase().indexOf("mastercard")!==-1){return true
}}}return false
}}
}),(function(c,f,b){Object.defineProperty(f,"__esModule",{value:true});
var e=function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
}();
var a=b(13);
var d=j(a);
function j(l){return l&&l.__esModule?l:{"default":l}
}function g(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function h(l,m){if(!l){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return m&&(typeof m==="object"||typeof m==="function")?m:l
}function i(m,l){if(typeof l!=="function"&&l!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof l)
}m.prototype=Object.create(l&&l.prototype,{constructor:{value:m,enumerable:false,writable:true,configurable:true}});
if(l){Object.setPrototypeOf?Object.setPrototypeOf(m,l):m.__proto__=l
}}var k=function(o){i(p,o);
function p(){g(this,p);
return h(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))
}e(p,[{key:"render",value:function n(){return React.createElement("div",{className:"event"},React.createElement("div",{className:"event-head"},React.createElement("div",{className:"title"},this.props.event.name)),React.createElement("div",{className:"tickets"},this.getTickets()))
}},{key:"shouldComponentUpdate",value:function m(q){return !q.isTimerUpdate
}},{key:"getTickets",value:function l(){var q=this;
return this.props.event.tickets.map(function(r){return React.createElement(d["default"],{key:r.id,eventId:q.props.event.id,ticket:r,count:q.props.event.ticketsCount[r.id],isEditMode:q.props.isEditMode,isPurchaseMode:q.props.isPurchaseMode,eventBus:q.props.eventBus})
})
}}]);
return p
}(React.Component);
f["default"]=k
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(j){h(k,j);
function k(){f(this,k);
return e(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){var l=this.props.localization;
return React.createElement("div",{className:"total"},React.createElement("div",{className:"main"},React.createElement("div",{className:"title"},l.total),this.props.hasMastercardTickets&&React.createElement("span",{className:"cart-logo"},React.createElement("img",{src:this.props.masterCardLogo,alt:""})),this.props.hasMastercardTickets&&React.createElement("span",{className:"cart-text",dangerouslySetInnerHTML:{__html:l.masterCardMessage}})),React.createElement("div",{className:"price"},this.props.totals.total))
}}]);
return k
}(React.Component);
a["default"]=d
}),(function(c,a,f){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function e(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function d(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var g=function(j){h(k,j);
function k(){e(this,k);
return d(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){return React.createElement("div",{className:"error-container"},React.createElement("div",{className:"error-icon"}),React.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.errorMessage}}))
}}]);
return k
}(React.Component);
a["default"]=g
}),(function(c,b,f){var a=f(6);
var e=d(a);
function d(g){return g&&g.__esModule?g:{"default":g}
}(0,e["default"])(window)
}),(function(b,g,a){Object.defineProperty(g,"__esModule",{value:true});
g["default"]=function(F){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{EventUtils:l["default"],Cart:i["default"],CartContainer:h["default"],CartThankYou:m["default"],ModalSystemError:f["default"]};
var r=F.$,A=F.ReactDOM,t=F.pgatour;
return t.FanJourneyPurchase=t.FanJourneyPurchase||t.BaseCssCloudinaryModule.extend({eventBus:r({}),ticketMaster:{authorizationStatus:null,creditCards:[]},init:function H(){this.$renderContainer=this.container.find(".render");
this.eventBus.on("closeModal",this.proxy(this.closeModal));
this.eventBus.on("signIn",this.proxy(this.onSignIn));
this.eventBus.on("resetTicketMasterError",this.proxy(this.onResetTicketMasterError));
this.eventBus.on("buyNow",this.proxy(this.onBuyNow));
t.GigyaSocialize.bindLogoutEventHandler(this.proxy(this.onGigyaLogout,this));
this.getData()
},initCart:function G(O){this.cart=new s.Cart();
var P=this.cart.init({feedUrl:this.config.feedUrl,apiUrl:this.config.cartApiUrl,domain:this.config.domain,countDownTime:this.config.countDownTime,events:O,requestTotals:true,requestCustomer:true,callbacks:{onCartUpdated:this.proxy(this.onCartUpdated),onCartTimerUpdated:this.proxy(this.onCartTimerUpdated),onCartError:this.proxy(this.onCartError),onCartAborted:this.proxy(this.onCartAborted),onAuthorizationChange:this.proxy(this.onAuthorizationChange)}});
if(!P){this.events=[];
this.render()
}},getData:function B(){r.ajax({url:this.config.feedUrl,dataType:"json",success:this.proxy(this.onDataLoaded),error:this.proxy(this.onDataLoaded)})
},render:function N(O){if(!this.events){return
}this.initialized=true;
if(!O){t.fanJourneyModalWindow.closePreloader()
}if(this.cart.orderCompleted){if(!this.thankYouRendered){this.thankYouRendered=true;
F.scrollTo(0,0)
}this.renderThankYou()
}else{this.renderCart(O)
}},renderCart:function u(O){A.render(React.createElement(s.CartContainer,{events:this.events,totals:this.cart.totals,hasMastercardTickets:this.hasMastercardTickets,isTimerUpdate:O,timeLeft:this.cart.getTimeLeft(),masterCardLogo:this.config.masterCardLogo,ticketMasterLogo:this.config.ticketMasterLogo,ticketsPageUrl:this.config.ticketsPageUrl,cartPageUrl:this.config.cartPageUrl,forgotPasswordPageUrl:this.config.forgotPasswordPageUrl,welcomeTitle:this.getWelcomeTitle(),ticketMaster:this.ticketMaster,screenSize:this.getScreenSize(),eventBus:this.eventBus,localization:this.config.localization}),this.$renderContainer[0])
},renderThankYou:function w(){A.render(React.createElement(s.CartThankYou,{events:this.events,totals:this.cart.totals,orderNumber:this.cart.cartId,email:t.GigyaSocialize.user&&t.GigyaSocialize.user.data.ATSEmail,hasMastercardTickets:this.hasMastercardTickets,masterCardLogo:this.config.masterCardLogo,ticketMasterLogo:this.config.ticketMasterLogo,thankYouMessage:this.getThankYouMessage(),accessTicketsPageUrl:this.config.accessTicketsPageUrl,followLinks:this.config.followLinks,shareInfo:this.config.shareInfo,eventBus:this.eventBus,localization:this.config.localization}),this.$renderContainer[0])
},layout:function K(){if(!this.initialized){t.fanJourneyModalWindow.openPreloader()
}},getWelcomeTitle:function D(){var O=void 0;
if(this.userHasLoggedIn()&&t.GigyaSocialize.user.profile){O=t.format(this.config.localization.welcome,{firstName:t.GigyaSocialize.user.profile.firstName})
}return O
},getThankYouMessage:function q(){var O=void 0;
if(this.userHasLoggedIn()&&t.GigyaSocialize.user.profile){var P=void 0;
if(this.cart.creditCard&&this.cart.creditCard.type==="MC"){P=this.config.localization.thankYou.thankYouMessageMasterCard
}else{P=this.config.localization.thankYou.thankYouMessage
}O=t.format(P,{firstName:t.GigyaSocialize.user.profile.firstName})
}return O
},closeModal:function v(){t.fanJourneyModalWindow.close()
},userHasLoggedIn:function z(){return !!t.GigyaSocialize.user
},onDataLoaded:function y(O){this.initCart(O.events||[]);
if(!O.events){this.onCartError()
}},onGigyaLogout:function M(){var O=this;
setTimeout(function(){t.setWindowLocation(O.config.cartPageUrl+"?login=true")
},1000)
},onCartUpdated:function o(){this.events=this.cart.getEvents();
this.events=s.EventUtils.populateWithFormattedPrices(this.events);
this.events=s.EventUtils.updateTicketsTotal(this.events);
this.hasMastercardTickets=s.EventUtils.hasMastercardTickets(this.events);
this.render()
},onCartTimerUpdated:function C(){if(this.events){this.render(true)
}},onCartError:function I(P,Q,O){if(!O){if(Q==="timeout"){O=this.config.localization.errorMessages.timeout
}else{O=this.config.localization.errorMessages.system
}}t.fanJourneyModalWindow.open(React.createElement(s.ModalSystemError,{errorMessage:O}));
this.render()
},onCartAborted:function x(O){this.events=this.cart.getEvents();
this.render();
if(O){t.fanJourneyModalWindow.open(React.createElement(s.ModalSystemError,{errorMessage:this.config.localization.cartExpiredMessage}))
}},onSignIn:function L(O,P){t.fanJourneyModalWindow.openPreloader();
this.cart.customer.signIn(P.email,P.password)
},onAuthorizationChange:function E(O){if(!t.GigyaSocialize.user&&!O.gigyaUser){this.onGigyaLogout()
}else{if(O.error==="system"){t.fanJourneyModalWindow.open(React.createElement(s.ModalSystemError,{errorMessage:this.config.localization.errorMessages.system}))
}else{this.ticketMaster=O
}}this.ticketMaster.authorizationStatus=this.cart.customer.getAuthorizationStatus();
this.render()
},onResetTicketMasterError:function p(){this.ticketMaster.error=null;
this.render()
},onBuyNow:function J(O,P){t.fanJourneyModalWindow.openPreloader();
this.cart.buy(P.creditCard,P.cvv)
}})
};
var c=a(1);
var l=n(c);
var d=a(8);
var i=n(d);
var e=a(12);
var h=n(e);
var j=a(18);
var m=n(j);
var k=a(4);
var f=n(k);
function n(o){return o&&o.__esModule?o:{"default":o}
}}),(function(c,a,d){Object.defineProperty(a,"__esModule",{value:true});
a["default"]=b;
function b(e){if(e&&e!==""){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}else{return"--"
}}}),(function(b,a,c){(function(e){Object.defineProperty(a,"__esModule",{value:true});
var f=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(u){return typeof u
}:function(u){return u&&typeof Symbol==="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u
};
var i=function(){function u(y,w){for(var v=0;
v<w.length;
v++){var x=w[v];
x.enumerable=x.enumerable||false;
x.configurable=true;
if("value" in x){x.writable=true
}Object.defineProperty(y,x.key,x)
}}return function(x,v,w){if(v){u(x.prototype,v)
}if(w){u(x,w)
}return x
}
}();
var h=c(1);
var p=s(h);
var d=c(9);
var j=s(d);
var q=c(10);
var m=s(q);
var o=c(11);
var t=s(o);
function s(u){return u&&u.__esModule?u:{"default":u}
}function l(u,v){if(!(u instanceof v)){throw new TypeError("Cannot call a class as a function")
}}var n=e,k=n.$;
var g=0;
var r=function(){function aa(){l(this,aa);
this.cartId=null;
this.orderCompleted=false;
this.dep={EventUtils:p["default"]};
this.actionQueue=new j["default"]();
this.timer=new m["default"]();
this.customer=new t["default"]()
}i(aa,[{key:"init",value:function ad(af){this.apiUrl=af.apiUrl;
this.callbacks=k.extend({onCartUpdated:k.noop,onCartTimerUpdated:k.noop,onCartError:k.noop,onCartAborted:k.noop,onAuthorizationChange:k.noop},af.callbacks);
this.requestTotals=!!af.requestTotals;
this.domain=af.domain;
this.feedFile=af.feedUrl&&af.feedUrl.split("/").pop().replace(".json","");
this.actionQueue.init({requestTotals:this.requestTotals,actions:{retrieve:this._retrieve.bind(this),update:this._update.bind(this),abort:this._abort.bind(this),create:this._create.bind(this),getTotals:this._getTotals.bind(this)}});
this.timer.init({countDownTimer:af.countDownTime,callbacks:{onUpdate:this.callbacks.onCartTimerUpdated,onTimeout:this._onTimerTimeout.bind(this)}});
if(af.requestCustomer){this.customer.init({apiUrl:this.apiUrl,domain:this.domain,feedFile:this.feedFile,callbacks:{onAuthorizationChange:this.callbacks.onAuthorizationChange}})
}this._populateWithEvents(af.events);
if(af.events.length){this.retrieve()
}return this.cartId
}},{key:"retrieve",value:function T(){this._getInfoFromCookies();
if(this.cartId){this.actionQueue.set([{action:"retrieve"}]);
this.actionQueue.next()
}}},{key:"abort",value:function I(af){if(this.cartId){this.actionQueue.set([{action:"abort",abortByTimeout:af}]);
this.actionQueue.next()
}}},{key:"addEventTickets",value:function M(ah,af){var aj=[];
for(var ag=0;
ag<af.length;
ag++){var ak=af[ag].id;
var ai=ah.ticketsCount[ak];
if(ai>0){aj.push({ticket_type_code:ak,num_seats:ai})
}}if(this.cartId){this.actionQueue.set([{action:"update",event:ah,eventsToUpdate:[{eventId:ah.id,ticketTypes:aj}]}])
}else{this.actionQueue.set([{action:"create",eventId:ah.id,event:ah,ticketTypes:aj}])
}if(this.requestTotals){this.actionQueue.add({action:"getTotals",event:ah})
}this.actionQueue.next()
}},{key:"update",value:function Q(af){this.actionQueue.buildFromEventsState(af,this.getEvents());
this.actionQueue.next()
}},{key:"getEvents",value:function v(){var af=[];
for(var aj=0;
aj<this.events.length;
aj++){var ak=this.events[aj];
var ag=[];
for(var ai=0;
ai<ak.tickets.length;
ai++){var al=ak.tickets[ai];
if(ak.ticketsCount[al.id]>=0){ag.push(k.extend(true,{},al))
}}if(ag.length){var ah=k.extend(true,{},ak);
ah.tickets=ag;
af.push(ah)
}}return af
}},{key:"getTimeLeft",value:function Z(){return this.timer.timeLeft
}},{key:"getTotalTicketsCount",value:function F(){var af=0;
for(var ag=0;
ag<this.events.length;
ag++){var ah=this.events[ag];
for(var ai in ah.ticketsCount){if(ah.ticketsCount.hasOwnProperty(ai)){af+=ah.ticketsCount[ai]
}}}return af
}},{key:"buy",value:function E(ag,ah){var af=this.customer.getGigyaInfo();
if(!af||this.customer.getAuthorizationStatus()!=="full"){this._onCartError(null,"system")
}else{this._buy(ag,ah,af)
}}},{key:"_retrieve",value:function B(){this.updateInProgress=true;
var af={cmd:this.requestTotals?"total":"shopping_cart",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile};
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onRetrieved,this),error:k.proxy(this._onRequestError,this),data:af})
}},{key:"_create",value:function K(af,ag){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onCreated,this,af),error:k.proxy(this._onCreatedError,this,af),data:{cmd:"seats_hold",event_name:af.id,ticket_type:ag,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_update",value:function ac(ah,ai){this.updateInProgress=true;
var af=[k.Deferred().resolve()];
for(var ag=0;
ag<ai.length;
ag++){af.push(k.ajax({url:this.apiUrl,method:"POST",dataType:"json",data:{cmd:"seats_hold",order_num_in:this.cartId,event_name:ai[ag].eventId,ticket_type:ai[ag].ticketTypes,domain:this.domain,price_feed:this.feedFile}}))
}k.when.apply(this,af).done(k.proxy(this._onUpdated,this,ah)).fail(k.proxy(this._onRequestError,this,ah))
}},{key:"_abort",value:function L(af){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onAborted,this,af),error:k.proxy(this._onRequestError,this),data:{cmd:"abort_shopping_cart",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_getTotals",value:function U(af){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onTotalsLoaded,this,af),error:k.proxy(this._onRequestError,this,af),data:{cmd:"total",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_buy",value:function D(ag,ai,af){var ah=k.extend({cmd:"payment_request",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile,cc_exp:ag.expirationDateAsNumber,data_mask:ag.mask,cc_type:ag.type,cin:ai},af);
this.creditCard=ag;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onBuyCompleted,this),error:k.proxy(this._onRequestError,this),data:ah})
}},{key:"_getSavedCarts",value:function N(){var af=k.cookie("ticket_carts");
if(typeof af==="string"){try{af=JSON.parse(af)
}catch(ag){af={}
}}if(!af||(typeof af==="undefined"?"undefined":f(af))!=="object"){af={}
}return af
}},{key:"_setSavedCarts",value:function ab(){var af=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
k.cookie("ticket_carts",JSON.stringify(af),{expires:1,path:"/"})
}},{key:"_setCookies",value:function C(){var af=this._getSavedCarts();
af[this.feedFile]={id:this.cartId,startTime:this.timer.startTime};
this._setSavedCarts(af)
}},{key:"_getInfoFromCookies",value:function ae(){var ag=this._getSavedCarts();
var af=ag[this.feedFile];
if(af&&af.id&&af.startTime){this.timer.set(af.startTime);
if(this.timer.secondsLeft>0){this.cartId=af.id
}else{this.timer.stop();
this._removeCookies()
}}}},{key:"_removeCookies",value:function x(){var af=this._getSavedCarts();
delete af[this.feedFile];
this._setSavedCarts(af)
}},{key:"_resetCart",value:function W(){this.cartId=null;
this._updateCartEvents([],true);
this._removeCookies();
this.timer.stop();
this.actionQueue.set([])
}},{key:"_updateCartEvents",value:function X(ag,aj){if(aj){for(var af=0;
af<this.events.length;
af++){this.events[af].ticketsCount={}
}}for(var ak=0;
ak<ag.length;
ak++){var am=ag[ak];
var ai=this.dep.EventUtils.getEventById(this.events,am.event_name);
var al=this.dep.EventUtils.getTicketById(this.events,am.event_name,am.ticket_type_code);
if(ai&&al){var ah=ai.ticketsCount[al.id]||0;
ai.ticketsCount[al.id]=ah+am.num_seats
}}}},{key:"_populateWithEvents",value:function u(ag){this.events=[];
for(var af=0;
af<ag.length;
af++){var ah=k.extend(true,{},ag[af],{ticketsCount:{}});
this.events.push(ah)
}}},{key:"_onCreated",value:function H(af,ag){if(ag.seats&&ag.result===g){this.cartId=ag.order_num_out;
this._updateCartEvents(ag.seats,true);
this.timer.start();
this._setCookies();
if(this.actionQueue.isEmpty()){this._onCartUpdated(af)
}else{this.actionQueue.next()
}}else{this._resetCart();
this._onCartError(af,"system")
}}},{key:"_onCreatedError",value:function P(ah,ag,af){this._resetCart();
this._onRequestError(ah,ag,af)
}},{key:"_onRetrieved",value:function O(af){var ag=af.shoppingCart||af;
if(ag&&ag.seats&&ag.result===g){this._updateCartEvents(ag.seats,true);
this.timer.start();
if(this.requestTotals){this._onTotalsLoaded(null,af)
}else{this._onCartUpdated()
}}else{this.cartId=null;
this.updateInProgress=false;
this._onCartUpdated()
}}},{key:"_onUpdated",value:function R(ag){var ai=Array.prototype.slice.call(arguments,2);
for(var af=0;
af<ai.length;
af++){var ah=ai[af][0];
if(ah&&ah.seats&&ah.result===g){this._updateCartEvents(ah.seats)
}else{this._onCartError(ag,"system");
this._retrieve();
return
}}if(this.actionQueue.isEmpty()){this._onCartUpdated(ag)
}else{this.actionQueue.next()
}}},{key:"_onTotalsLoaded",value:function y(af,ag){if(ag.total){this.totals={subtotal:this.dep.EventUtils.formatMoneyValue(ag.subtotal),serviceCharge:!ag.fees?null:this.dep.EventUtils.formatMoneyValue(ag.fees),total:this.dep.EventUtils.formatMoneyValue(ag.total)};
this._onCartUpdated(af)
}else{this.totals={};
this._onCartError(af,"system")
}}},{key:"_onAborted",value:function G(af){this.cartId=null;
this._removeCookies();
this.timer.stop();
if(this.actionQueue.isEmpty()){this._onCartAborted(af)
}else{this.actionQueue.next()
}}},{key:"_onBuyCompleted",value:function V(af){if(af.result===g&&af.mop&&af.mop[0]){if(af.mop[0].cc_captured==="Y"){this._onOrderCompleted()
}else{this._onCartError(null,"system",af.mop[0].cc_results)
}}else{this._onCartError(null,"system")
}}},{key:"_onRequestError",value:function A(ah,ag,af){var ai=af==="timeout"?"timeout":"error";
this._onCartError(ah,ai)
}},{key:"_onCartUpdated",value:function J(af){this.updateInProgress=false;
this.callbacks.onCartUpdated(af)
}},{key:"_onCartError",value:function w(ag,ah,af){this.updateInProgress=false;
this.callbacks.onCartError(ag,ah,af)
}},{key:"_onCartAborted",value:function z(af){this._resetCart();
this.updateInProgress=false;
this.callbacks.onCartAborted(af)
}},{key:"_onTimerTimeout",value:function S(){this.abort(true)
}},{key:"_onOrderCompleted",value:function Y(){this.orderCompleted=true;
this._removeCookies();
this.timer.stop();
this._onCartUpdated()
}}]);
return aa
}();
a["default"]=r
}.call(a,c(0)))
}),(function(c,a,f){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function g(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}return function(j,h,i){if(h){g(j.prototype,h)
}if(i){g(j,i)
}return j
}
}();
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var d=function(){function i(){e(this,i);
this.queue=[]
}b(i,[{key:"init",value:function p(r){this.actions=r.actions;
this.requestTotals=r.requestTotals
}},{key:"add",value:function q(r){this.queue.push(r)
}},{key:"set",value:function o(r){this.queue=r
}},{key:"next",value:function k(){if(this.queue.length){var r=this.queue.shift();
if(r.action==="retrieve"){this.actions.retrieve()
}else{if(r.action==="update"){this.actions.update(r.event,r.eventsToUpdate,true)
}else{if(r.action==="abort"){this.actions.abort(r.abortByTimeout)
}else{if(r.action==="create"){this.actions.create(r.event||{id:r.eventId},r.ticketTypes,true)
}else{if(r.action==="getTotals"){this.actions.getTotals(r.event)
}}}}}}}},{key:"empty",value:function l(){this.queue=[]
}},{key:"buildFromEventsState",value:function h(v,u){var x=this._getEventsToUpdate(v,u);
var r=[];
if(x){for(var w in x){if(x.hasOwnProperty(w)){r.push({action:"update",eventId:w,ticketTypes:x[w]})
}}}else{var t=this._getEventsToCreate(v);
for(var s in t){if(t.hasOwnProperty(s)){r.push({action:r.length===0?"create":"update",eventId:s,ticketTypes:t[s]})
}}if(r.length){r.unshift({action:"abort"})
}}if(!r.length){r.push({action:"abort"})
}else{if(this.requestTotals){r.push({action:"getTotals"})
}}this.queue=this._squashQueue(r)
}},{key:"isEmpty",value:function j(){return !this.queue.length
}},{key:"_squashQueue",value:function g(s){var r=[];
for(var t=0;
t<s.length;
t++){var v=s[t];
var u=r[r.length-1];
if(u&&u.action==="update"&&v.action==="update"){u.eventsToUpdate.push({eventId:v.eventId,ticketTypes:v.ticketTypes})
}else{if(v.action==="update"){r.push({action:"update",eventsToUpdate:[{eventId:v.eventId,ticketTypes:v.ticketTypes}]})
}else{r.push(v)
}}}return r
}},{key:"_getEventsToUpdate",value:function m(r,A){var x={};
for(var v=0;
v<r.length;
v++){var t=r[v];
var s=A[v];
if(t.id!==s.id||t.tickets.length!==s.tickets.length){return false
}else{for(var u=0;
u<t.tickets.length;
u++){var y=t.tickets[u];
var w=s.tickets[u];
var z=t.ticketsCount[y.id]||0;
var B=s.ticketsCount[w.id]||0;
if(y.id!==w.id||z<B){return false
}else{if(z>B){x[t.id]=x[t.id]||[];
x[t.id].push({ticket_type_code:y.id,num_seats:z-B})
}}}}}return x
}},{key:"_getEventsToCreate",value:function n(u){var r={};
for(var t=0;
t<u.length;
t++){var v=u[t];
for(var s=0;
s<v.tickets.length;
s++){var x=v.tickets[s];
var w=v.ticketsCount[x.id];
if(w){r[v.id]=r[v.id]||[];
r[v.id].push({ticket_type_code:x.id,num_seats:w})
}}}return r
}}]);
return i
}();
a["default"]=d
}),(function(b,a,c){(function(f){Object.defineProperty(a,"__esModule",{value:true});
var e=function(){function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}return function(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}
}();
function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var i=f,g=i.$;
var d=function(){function j(){h(this,j);
this.secondsLeft=0;
this.timeLeft="";
this.startTime=null
}e(j,[{key:"init",value:function n(r){this.countDownTimer=r.countDownTimer;
this.callbacks=r.callbacks
}},{key:"start",value:function q(){if(!this.startTime){this.startTime=Date.now()
}this._update(this.startTime);
this.timerInterval=setInterval(g.proxy(this._onClockTick,this),1000);
this.callbacks.onUpdate()
}},{key:"stop",value:function l(){this.secondsLeft=0;
this.timeLeft="";
this.startTime=null;
if(this.timerInterval){clearInterval(this.timerInterval);
this.timerInterval=null
}this.callbacks.onUpdate()
}},{key:"set",value:function p(r){this.startTime=r;
this._update(r)
}},{key:"_getSecondsLeft",value:function o(r){var t=Math.floor((Date.now()-r)/1000);
var s=this.countDownTimer-t;
return s>0?s:0
}},{key:"_update",value:function k(s){this.secondsLeft=this._getSecondsLeft(s);
if(this.secondsLeft){var r=Math.floor(this.secondsLeft/60);
var t=this.secondsLeft%60;
if(r<10){r="0"+r
}if(t<10){t="0"+t
}this.timeLeft=r+":"+t
}else{this.timeLeft=""
}}},{key:"_onClockTick",value:function m(){this._update(this.startTime);
if(!this.secondsLeft){this.stop();
this.callbacks.onTimeout()
}this.callbacks.onUpdate()
}}]);
return j
}();
a["default"]=d
}.call(a,c(0)))
}),(function(b,a,c){(function(h){Object.defineProperty(a,"__esModule",{value:true});
var f=function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
}();
function j(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var e=0;
var d=5333;
var k=h,i=k.$;
var g=function(){function o(){j(this,o);
this.ticketMasterAuthorized=null;
this.gigyaAuthorized=null;
this.creditCards=[]
}f(o,[{key:"init",value:function y(A){this.apiUrl=A.apiUrl;
this.domain=A.domain;
this.feedFile=A.feedFile;
this.callbacks=A.callbacks;
this.gigyaAuthorized=this._isGigyaAuthorized();
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya();
pgatour.GigyaSocialize.bindLogoutEventHandler(this._onGigyaLogout.bind(this));
pgatour.GigyaSocialize.getUserAccountInfo(this._onGigyaAccountInfo.bind(this))
}},{key:"signIn",value:function z(C,B){var A=pgatour.GigyaSocialize.user;
if(!A){return
}i.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:i.proxy(this._onSignIn,this),error:i.proxy(this._onSignInRequestError,this),data:{cmd:"customer_query",email:C,pin:B,UID:A.UID,UIDSignature:A.UIDSignature,signatureTimestamp:A.signatureTimestamp,domain:this.domain,price_feed:this.feedFile}})
}},{key:"getAuthorizationStatus",value:function s(){if(this.gigyaAuthorized&&this.ticketMasterAuthorized){return"full"
}else{if(this.gigyaAuthorized){return"gigya"
}else{return"none"
}}}},{key:"getGigyaInfo",value:function n(B){var A=B||pgatour.GigyaSocialize.user;
if(!A){return null
}return{UID:A.UID,UIDSignature:A.UIDSignature,signatureTimestamp:A.signatureTimestamp}
}},{key:"_getCreditCards",value:function m(B){var A=this.getGigyaInfo(B);
if(this.getAuthorizationStatus()!=="full"||!A){return
}var C=i.extend({cmd:"cc_query",domain:this.domain,price_feed:this.feedFile},A);
i.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:i.proxy(this._onCreditCardsLoaded,this),error:i.proxy(this._onCreditCardsRequestError,this),data:C})
}},{key:"_isGigyaAuthorized",value:function v(B){var A=B||pgatour.GigyaSocialize.user;
return !!(A&&A.data)
}},{key:"_getTicketMasterAuthorizedFromGigya",value:function r(B){var A=void 0;
if(B){A=B.data
}else{A=pgatour.GigyaSocialize&&pgatour.GigyaSocialize.user&&pgatour.GigyaSocialize.user.data
}return !!(A&&A.ATSUser)
}},{key:"_onSignIn",value:function x(A){if(A.customer&&!A.errorMessage){this.ticketMasterAuthorized=true;
this._getCreditCards()
}else{if(A.errorMessage==="Failed login"){this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"authError"})
}else{this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"system"})
}}}},{key:"_onSignInRequestError",value:function p(){this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"system"})
}},{key:"_onGigyaLogin",value:function q(){this.gigyaAuthorized=true;
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya();
if(this.getAuthorizationStatus()==="full"){this._getCreditCards()
}else{this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}}},{key:"_onGigyaLogout",value:function l(){this.gigyaAuthorized=false;
this.ticketMasterAuthorized=false;
this.creditCards=[];
this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}},{key:"_onGigyaAccountInfo",value:function u(A){this.gigyaAuthorized=this._isGigyaAuthorized(A);
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya(A);
if(this.getAuthorizationStatus()==="full"){this._getCreditCards(A)
}else{this.callbacks.onAuthorizationChange({gigyaUser:A,creditCards:this.creditCards})
}pgatour.GigyaSocialize.bindLoginEventHandler(this._onGigyaLogin.bind(this))
}},{key:"_onCreditCardsLoaded",value:function w(F){this.creditCards=[];
if(F.result===e){var D=F.credit_card||[];
for(var C=0;
C<D.length;
C++){var B=D[C];
var A=(B.cc_exp||"").toString();
if(A.length===4){A=A.substr(0,2)+"/"+A.substr(2,2)
}var E={holder:B.full_name||B.cc_name_first+" "+B.cc_name_last,type:B.cc_type,mask:B.data_mask,expirationDate:A,expirationDateAsNumber:B.cc_exp,address:B.cc_address||B.cc_postal_code};
this.creditCards.push(E)
}this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}else{if(F.result===d){this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}else{this._onCreditCardsRequestError()
}}}},{key:"_onCreditCardsRequestError",value:function t(){this.creditCards=[];
this.callbacks.onAuthorizationChange({error:"system"})
}}]);
return o
}();
a["default"]=g
}.call(a,c(0)))
}),(function(c,s,e){Object.defineProperty(s,"__esModule",{value:true});
var p=function(){function t(x,v){for(var u=0;
u<v.length;
u++){var w=v[u];
w.enumerable=w.enumerable||false;
w.configurable=true;
if("value" in w){w.writable=true
}Object.defineProperty(x,w.key,w)
}}return function(w,u,v){if(u){t(w.prototype,u)
}if(v){t(w,v)
}return w
}
}();
var q=e(2);
var j=a(q);
var r=e(14);
var d=a(r);
var b=e(3);
var h=a(b);
var g=e(15);
var n=a(g);
var i=e(16);
var m=a(i);
function a(t){return t&&t.__esModule?t:{"default":t}
}function f(t,u){if(!(t instanceof u)){throw new TypeError("Cannot call a class as a function")
}}function k(t,u){if(!t){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return u&&(typeof u==="object"||typeof u==="function")?u:t
}function o(u,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)
}u.prototype=Object.create(t&&t.prototype,{constructor:{value:u,enumerable:false,writable:true,configurable:true}});
if(t){Object.setPrototypeOf?Object.setPrototypeOf(u,t):u.__proto__=t
}}var l=function(v){o(w,v);
function w(){f(this,w);
return k(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))
}p(w,[{key:"render",value:function u(){var A=this.props.localization;
var y=this.getEvents();
var z=y.length===0;
var x=pgatour.format(A.timerMessage,{timeLeft:this.props.timeLeft});
return React.createElement("div",null,React.createElement("div",{className:"cart"},React.createElement("div",{className:"cart-header clearfix"},React.createElement("div",{className:"cart-title"},A.title)),z&&React.createElement("div",{className:"message-empty"},A.emptyCartMessage),!z&&this.props.timeLeft&&React.createElement("div",{className:"timer"},x),!z&&!this.props.timeLeft&&React.createElement("div",{className:"timer"},"\xA0"),!z&&this.props.welcomeTitle&&React.createElement("div",{className:"welcome"},React.createElement("div",{className:"title"},this.props.welcomeTitle),React.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:A.welcomeMessage}})),!z&&React.createElement("div",{className:"events"},y),!z&&!!this.props.totals&&React.createElement(d["default"],{totals:this.props.totals,localization:this.props.localization}),!z&&!!this.props.totals&&React.createElement(h["default"],{totals:this.props.totals,hasMastercardTickets:this.props.hasMastercardTickets,masterCardLogo:this.props.masterCardLogo,localization:this.props.localization}),!z&&this.props.ticketMaster.authorizationStatus==="gigya"&&React.createElement(n["default"],{ticketMaster:this.props.ticketMaster,cartPageUrl:this.props.cartPageUrl,forgotPasswordPageUrl:this.props.forgotPasswordPageUrl,eventBus:this.props.eventBus,localization:this.props.localization}),!z&&this.props.ticketMaster.authorizationStatus==="full"&&React.createElement(m["default"],{ticketMaster:this.props.ticketMaster,hasMastercardTickets:this.props.hasMastercardTickets,cartPageUrl:this.props.cartPageUrl,screenSize:this.props.screenSize,eventBus:this.props.eventBus,localization:this.props.localization}),(z||this.props.ticketMaster.authorizationStatus==="none")&&React.createElement("div",{className:"cart-control clearfix"},React.createElement("a",{href:this.props.ticketsPageUrl,className:"button button-theme"},A.backButton))),React.createElement("div",{className:"powered-by-tm"},React.createElement("img",{src:this.props.ticketMasterLogo,alt:""})))
}},{key:"getEvents",value:function t(){var x=this;
return this.props.events.map(function(y){return React.createElement(j["default"],{key:y.id,event:y,isPurchaseMode:true,isTimerUpdate:x.props.isTimerUpdate,eventBus:x.props.eventBus})
})
}}]);
return w
}(React.Component);
s["default"]=l
}),(function(d,a,g){Object.defineProperty(a,"__esModule",{value:true});
var c=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var b=function(n){h(l,n);
function l(){f(this,l);
return e(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))
}c(l,[{key:"render",value:function m(){var p=this.props.ticket;
var o=p.priceString;
if(this.props.isPurchaseMode){o+="x"+this.props.count
}return React.createElement("div",{className:"ticket"},React.createElement("div",{className:"name"},React.createElement("span",{className:"title"},p.name),React.createElement("span",{className:"cost"}," (",o,")")),!this.props.isPurchaseMode&&React.createElement("div",{className:"control"},React.createElement("span",{className:"add",onClick:this.onAddTicketClick.bind(this)}),React.createElement("span",{className:"remove",onClick:this.onRemoveTicketClick.bind(this)}),React.createElement("span",{className:"counter"},this.props.count)),React.createElement("div",{className:"price"},p.totalPrice),this.props.isEditMode&&React.createElement("div",{className:"delete-ticket"},React.createElement("span",{className:"delete-icon",onClick:this.onDeleteButtonClick.bind(this)})))
}},{key:"onDeleteButtonClick",value:function j(){this.props.eventBus.trigger("deleteTicketRequest",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}},{key:"onAddTicketClick",value:function i(){this.props.eventBus.trigger("addTicket",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}},{key:"onRemoveTicketClick",value:function k(){this.props.eventBus.trigger("removeTicket",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}}]);
return l
}(React.Component);
a["default"]=b
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(j){h(k,j);
function k(){f(this,k);
return e(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){var m=this.props.localization;
var l=this.props.totals;
return React.createElement("ul",{className:"addition clearfix"},React.createElement("li",null,React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"title"},m.subtotal),React.createElement("div",{className:"value"},l.subtotal))),l.serviceCharge!==null&&React.createElement("li",null,React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"title"},m.fees),React.createElement("div",{className:"value"},l.serviceCharge))),React.createElement("li",null,React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"title"},m.deliveryMethod),React.createElement("div",{className:"value"},m.free))))
}}]);
return k
}(React.Component);
a["default"]=d
}),(function(b,a,c){(function(d){Object.defineProperty(a,"__esModule",{value:true});
var f=function(){function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}return function(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}
}();
function g(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function j(m,n){if(!m){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return n&&(typeof n==="object"||typeof n==="function")?n:m
}function k(n,m){if(typeof m!=="function"&&m!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof m)
}n.prototype=Object.create(m&&m.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});
if(m){Object.setPrototypeOf?Object.setPrototypeOf(n,m):n.__proto__=m
}}var i=d,e=i.React,l=i.ReactDOM;
var h=function(p){k(o,p);
function o(t){g(this,o);
var u=j(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));
u.state={email:"",password:""};
return u
}f(o,[{key:"render",value:function n(){var u=this.props.localization;
var t=this.props.ticketMaster.error||!this.state.email||!this.state.password;
return e.createElement("form",{ref:"form",onSubmit:this.onSubmit.bind(this)},e.createElement("div",{className:"sign-in"},e.createElement("div",{className:"sign-in-head"},e.createElement("div",{className:"title"},u.signIn.title),e.createElement("div",{className:"subtitle",dangerouslySetInnerHTML:{__html:u.signIn.signUp}})),e.createElement("div",{className:"sign-in-form"},this.props.ticketMaster.error==="authError"&&e.createElement("div",{className:"sign-in-error"},u.signIn.authError),e.createElement("div",{className:"clearfix"},e.createElement("div",{className:"col"},e.createElement("input",{type:"email",placeholder:u.signIn.email,ref:"email",value:this.state.email,onChange:this.onEmailChange.bind(this)})),e.createElement("div",{className:"col"},e.createElement("input",{type:"password",placeholder:u.signIn.password,ref:"password",value:this.state.password,onChange:this.onPasswordChange.bind(this)}),e.createElement("a",{href:this.props.forgotPasswordPageUrl,className:"forgot-password"},u.signIn.forgotPassword))))),e.createElement("div",{className:"cart-control clearfix"},e.createElement("a",{href:"",onClick:this.onSignInClick.bind(this),className:"button button-theme"+(t?" disabled":"")},u.signIn.signInButton),e.createElement("a",{href:this.props.cartPageUrl,className:"button button-theme"},u.signIn.backButton)),e.createElement("input",{type:"submit",style:{display:"none"}}))
}},{key:"onEmailChange",value:function r(t){if(this.props.ticketMaster.error==="authError"){this.props.eventBus.trigger("resetTicketMasterError")
}this.setState({email:t.target.value})
}},{key:"onPasswordChange",value:function m(t){if(this.props.ticketMaster.error==="authError"){this.props.eventBus.trigger("resetTicketMasterError")
}this.setState({password:t.target.value})
}},{key:"onSignInClick",value:function q(t){t.preventDefault();
l.findDOMNode(this.refs.form).dispatchEvent(new Event("submit"))
}},{key:"onSubmit",value:function s(t){t.preventDefault();
if(!this.props.ticketMaster.error&&this.state.email&&this.state.password){this.props.eventBus.trigger("signIn",{email:this.state.email,password:this.state.password})
}}}]);
return o
}(e.Component);
a["default"]=h
}.call(a,c(0)))
}),(function(b,a,c){(function(e){Object.defineProperty(a,"__esModule",{value:true});
var f=function(){function s(w,u){for(var t=0;
t<u.length;
t++){var v=u[t];
v.enumerable=v.enumerable||false;
v.configurable=true;
if("value" in v){v.writable=true
}Object.defineProperty(w,v.key,v)
}}return function(v,t,u){if(t){s(v.prototype,t)
}if(u){s(v,u)
}return v
}
}();
var p=c(17);
var q=r(p);
var m=c(4);
var g=r(m);
function r(s){return s&&s.__esModule?s:{"default":s}
}function i(s,t){if(!(s instanceof t)){throw new TypeError("Cannot call a class as a function")
}}function k(s,t){if(!s){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return t&&(typeof t==="object"||typeof t==="function")?t:s
}function o(t,s){if(typeof s!=="function"&&s!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof s)
}t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});
if(s){Object.setPrototypeOf?Object.setPrototypeOf(t,s):t.__proto__=s
}}var j=e,h=j.$,d=j.React,n=j.ReactDOM;
var l=function(x){o(D,x);
function D(F){i(this,D);
var G=k(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,F));
G.id=pgatour.generateId();
G.state={selectedCreditCardIndex:null,displayCvvInfo:false};
return G
}f(D,[{key:"render",value:function v(){var G=this.props.localization.payment;
var F=!this.props.ticketMaster.creditCards.length;
return d.createElement("div",null,d.createElement("div",{className:"payment"},d.createElement("div",{className:"payment-title"},G.title),!F&&this.getCreditCardsTable(),F&&d.createElement("div",{className:"add-method",dangerouslySetInnerHTML:{__html:G.noPaymentMethods}})),d.createElement("div",{className:"cart-control clearfix"},d.createElement("a",{href:"",onClick:this.onBuyNowClick.bind(this),className:"button button-theme"+(F?" disabled":"")},this.props.localization.buyNowButton),d.createElement("a",{href:this.props.cartPageUrl,className:"button button-theme"},this.props.localization.backButton)))
}},{key:"getCreditCardsTable",value:function C(){var F=this.props.localization.payment;
return d.createElement("table",{className:"methods-list"},d.createElement("tbody",null,d.createElement("tr",null,d.createElement("th",{className:"col-holder"},F.cardHolder),d.createElement("th",null,F.creditCard),d.createElement("th",{className:"col-expiration"},F.expirationDate),d.createElement("th",{className:"col-cvv"},F.cvv,"\xA0",d.createElement("span",{className:"info",ref:"infoContainer"},d.createElement("span",{className:"info-icon"},"i"),d.createElement("span",{className:"cart-tooltip"+(this.state.displayCvvInfo?" active":""),ref:"tooltip"},d.createElement("span",{className:"cvv-diagram"}),d.createElement("span",{className:"tooltip-description"},F.cvvHelpMessage),d.createElement("span",{ref:"tooltipArrow",className:"arrow"})))),d.createElement("th",{className:"col-address"},F.billingAddress),d.createElement("th",{className:"col-radio"},"\xA0")),this.getCreditCards()))
}},{key:"componentDidMount",value:function A(){h(this.refs.infoContainer).on("click",h.proxy(this.onShowInfoClick,this));
h("body").on("click."+this.id,h.proxy(this.onBodyClick,this));
this.updateTooltipPos()
}},{key:"componentWillUnmount",value:function s(){h(this.refs.infoContainer).off("click");
h("body").off("."+this.id)
}},{key:"componentDidUpdate",value:function w(){this.updateTooltipPos()
}},{key:"getCreditCards",value:function u(){var F=this;
var G=this.props.localization.payment;
return this.props.ticketMaster.creditCards.map(function(J,I){var H=F.state.selectedCreditCardIndex===I;
return d.createElement("tr",{key:J.type+J.mask+J.expirationDate},d.createElement("td",{className:"col-holder"},J.holder),d.createElement("td",null,G[J.type]||"",d.createElement("span",{className:"card-number"},J.mask)),d.createElement("td",{className:"col-expiration"},J.expirationDate),d.createElement("td",{className:"col-cvv"},d.createElement("input",{type:"text",ref:"cvv"+I})),d.createElement("td",{className:"col-address"},J.address),d.createElement("td",{className:"col-radio"},d.createElement("div",{className:"radio-button"},d.createElement("input",{title:"",type:"radio",id:"option-"+I,checked:H,onChange:h.proxy(F.onSelectCreditCard,F,I)}),d.createElement("label",{htmlFor:"option-"+I}))))
})
}},{key:"updateTooltipPos",value:function y(){if(!this.state.displayCvvInfo){return
}var F=h(this.refs.infoContainer);
var I=h(this.refs.tooltip);
var M=h(this.refs.tooltipArrow);
var J=I.outerWidth();
var H=F.outerWidth();
var L=F.offset().left;
var G=-J/2+H/2;
var K="";
if(L+G<0){K=L+G-M.outerWidth()/2;
G=-L
}I.css("left",G);
M.css("margin-left",K)
}},{key:"onSelectCreditCard",value:function B(F){this.setState({selectedCreditCardIndex:F})
}},{key:"onBuyNowClick",value:function t(F){F.preventDefault();
if(!this.props.ticketMaster.creditCards.length){return
}var G=this.props.ticketMaster.creditCards[this.state.selectedCreditCardIndex];
var H=h(n.findDOMNode(this.refs["cvv"+this.state.selectedCreditCardIndex])).val();
if(!G){pgatour.fanJourneyModalWindow.open(d.createElement(g["default"],{errorMessage:this.props.localization.errorMessages.selectPaymentMethod,localization:this.props.localization}))
}else{if(this.props.hasMastercardTickets&&G.type!=="MC"){pgatour.fanJourneyModalWindow.open(d.createElement(g["default"],{errorMessage:this.props.localization.payment.selectMasterCardMessage,localization:this.props.localization}))
}else{if(!H){pgatour.fanJourneyModalWindow.open(d.createElement(g["default"],{errorMessage:this.props.localization.errorMessages.emptyCvv,localization:this.props.localization}))
}else{this.props.eventBus.trigger("buyNow",{creditCard:G,cvv:H})
}}}}},{key:"onShowInfoClick",value:function z(F){F.stopPropagation();
if(this.props.screenSize==="small"){pgatour.fanJourneyModalWindow.open(d.createElement(q["default"],{localization:this.props.localization}))
}else{this.setState({displayCvvInfo:!this.state.displayCvvInfo})
}}},{key:"onBodyClick",value:function E(){if(this.state.displayCvvInfo){this.setState({displayCvvInfo:false})
}}}]);
return D
}(d.Component);
a["default"]=l
}.call(a,c(0)))
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(j){h(k,j);
function k(){f(this,k);
return e(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){return React.createElement("div",null,React.createElement("div",{className:"cvv-diagram"}),React.createElement("p",null,this.props.localization.payment.cvvHelpMessage))
}}]);
return k
}(React.Component);
a["default"]=d
}),(function(b,a,c){(function(d){Object.defineProperty(a,"__esModule",{value:true});
var g=function(){function r(v,t){for(var s=0;
s<t.length;
s++){var u=t[s];
u.enumerable=u.enumerable||false;
u.configurable=true;
if("value" in u){u.writable=true
}Object.defineProperty(v,u.key,u)
}}return function(u,s,t){if(s){r(u.prototype,s)
}if(t){r(u,t)
}return u
}
}();
var n=c(2);
var e=q(n);
var j=c(3);
var k=q(j);
function q(r){return r&&r.__esModule?r:{"default":r}
}function i(r,s){if(!(r instanceof s)){throw new TypeError("Cannot call a class as a function")
}}function m(r,s){if(!r){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return s&&(typeof s==="object"||typeof s==="function")?s:r
}function p(s,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof r)
}s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,enumerable:false,writable:true,configurable:true}});
if(r){Object.setPrototypeOf?Object.setPrototypeOf(s,r):s.__proto__=r
}}var l=d,h=l.$,o=l.ReactDOM;
var f=function(v){p(w,v);
function w(){i(this,w);
return m(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))
}g(w,[{key:"render",value:function u(){var A=this.props.localization.thankYou;
var z=this.props.shareInfo;
return React.createElement("div",null,React.createElement("div",{className:"cart result"},React.createElement("div",{className:"cart-header clearfix"},React.createElement("div",{className:"cart-title"},A.title)),React.createElement("div",{className:"thanks-message"},React.createElement("span",{className:"check-icon"}),React.createElement("div",{className:"title"},this.props.thankYouMessage),React.createElement("div",{className:"text"},React.createElement("p",null,A.orderNumber,": ",this.props.orderNumber),React.createElement("a",{className:"button button-theme",target:"_blank",href:this.props.accessTicketsPageUrl},A.buttonAccessTickets))),React.createElement("div",{className:"events"},this.getEvents()),React.createElement(k["default"],{totals:this.props.totals,hasMastercardTickets:false,masterCardLogo:this.props.masterCardLogo,localization:this.props.localization}),React.createElement("div",{className:"follow-and-share"},React.createElement("b",{className:"follow"},React.createElement("span",{className:"icon",ref:"followIcon"}),React.createElement("span",{className:"title",ref:"followTitle"},A.followTournament),React.createElement("div",null,A.followTournamentDescription)),React.createElement("div",{className:"and"},"And"),React.createElement("b",{className:"share sharing","data-share-url":z.url,"data-share-title":z.title,"data-share-description":" ","data-share-image":" "},React.createElement("span",{className:"icon",ref:"shareIcon"}),React.createElement("span",{className:"title",ref:"shareTitle"},A.sharePlans),React.createElement("div",null,A.sharePlansDescription)))),React.createElement("div",{className:"powered-by-tm"},React.createElement("img",{src:this.props.ticketMasterLogo,alt:""})))
}},{key:"componentDidMount",value:function y(){var A=this.props.localization.thankYou;
var z=h(o.findDOMNode(this));
h(o.findDOMNode(this.refs.shareTitle)).on("click",h.proxy(this.onPopupTitleClick,this,this.refs.shareIcon));
h(o.findDOMNode(this.refs.followTitle)).on("click",h.proxy(this.onPopupTitleClick,this,this.refs.followIcon));
h(o.findDOMNode(this.refs.shareIcon)).on("click",h.proxy(this.onPopupIconClick,this,this.refs.shareIcon));
h(o.findDOMNode(this.refs.followIcon)).on("click",h.proxy(this.onPopupIconClick,this,this.refs.followIcon));
this.sharePopups=new pgatour.SharePopup(z,"top",A.sharePopup);
this.followPopups=new pgatour.FollowPopup(z,"top",A.followTournamentPopup,this.props.followLinks)
}},{key:"componentWillUnmount",value:function x(){this.sharePopups.destroy();
this.followPopups.destroy()
}},{key:"getEvents",value:function s(){var z=this;
return this.props.events.map(function(A){return React.createElement(e["default"],{key:A.id,event:A,isPurchaseMode:true,eventBus:z.props.eventBus})
})
}},{key:"onPopupTitleClick",value:function t(A,z){z.stopPropagation();
h(o.findDOMNode(A)).trigger("click")
}},{key:"onPopupIconClick",value:function r(z){if(!h(o.findDOMNode(z)).siblings(".popover").length){h("body").trigger("click")
}}}]);
return w
}(React.Component);
a["default"]=f
}.call(a,c(0)))
})]);
(function(c,b){var a=b.pgatour.setModulePath("players");
a.PgaTourPromos=a.PgaTourPromos||b.pgatour.BaseLazyLoadModule.extend({constructor:function(d,e){this.base(d);
this.config=e
},enable:function(){this.base();
this.initMarkup();
this.waitForImages()
},initMarkup:function(){this.data=c.extend({},this.config);
this.initData();
c.templates({promoItemsTemplate:{markup:"#promoItemsTemplate"}});
c.templates.promoItemsTemplate.link(this.container,this.data)
},initData:function(){this.initImage();
this.initCoords()
},initImage:function(){var e={dpr:c.cloudinary.device_pixel_ratio(),crop:"fill",gravity:"face:center"};
var d=JSPath.apply(".blocks .images",this.data);
var f;
for(f=0;
f<d.length;
f++){e=c.extend(e,{width:d[f].width,height:d[f].height});
d[f].link=pgatour.getDamCloudinaryURL(d[f].img,e)
}},initCoords:function(){var d=JSPath.apply(".blocks .images",this.data);
var f,e;
for(f=0;
f<d.length;
f++){for(e=0;
e<d[f].areas.length;
e++){d[f].areas[e].imgWidth=d[f].width;
d[f].areas[e].imgHeight=d[f].height;
d[f].areas[e].originCoords=d[f].areas[e].coords
}}},waitForImages:function(){this.imagesLoaded=0;
this.$images=this.container.find("img");
this.$images.load(this.proxy(this.imageLoaded))
},imageLoaded:function(){this.imagesLoaded++;
if(this.imagesLoaded===this.$images.length){this.getNewSize()
}},getNewSize:function(){var f=this.container.find("img:visible").eq(0);
var k={width:f.width(),height:f.height()};
var g=JSPath.apply(".blocks .images .areas",this.data);
var j;
for(j=0;
j<g.length;
j++){var e={width:g[j].imgWidth,height:g[j].imgHeight};
var n={width:parseFloat(k.width/e.width),height:parseFloat(k.height/e.height)};
var m=g[j].originCoords.split(",");
var l={x1:parseInt(m[0],10),y1:parseInt(m[1],10),x2:parseInt(m[2],10),y2:parseInt(m[3],10)};
var h=parseInt((l.x2-l.x1)*n.width,10);
var d=parseInt((l.y2-l.y1)*n.height,10);
l.x2=l.x1+h;
l.y2=l.y1+d;
this.getNewCoords(g[j],l,n)
}},getNewCoords:function(g,h,i){var d,f,e;
if(h.x1!==0&&h.x2!==0){f=h.x1;
h.x1=parseInt(h.x1*i.width,10);
d=f-h.x1;
h.x2=h.x2-d
}if(h.y1!==0&&h.y2!==0){e=h.y1;
h.y1=parseInt(h.y1*i.height,10);
d=e-h.y1;
h.y2=h.y2-d
}this.setNewCoords(g,h)
},setNewCoords:function(d,e){var f=""+e.x1+","+e.y1+","+e.x2+","+e.y2;
c.observable(d).setProperty("coords",f)
},onWindowResize:function(){this.base();
this.getNewSize()
}})
})(jQuery,window);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{configurable:false,enumerable:true,get:d})
}};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=0)
})([(function(c,b,f){var a=f(1);
var e=d(a);
function d(g){return g&&g.__esModule?g:{"default":g}
}(0,e["default"])(window)
}),(function(b,a,c){Object.defineProperty(a,"__esModule",{value:true});
a["default"]=function(e){var f=e.$,k=e.ReactDOM,d=e.pgatour;
return d.FanJourneyModalWindow=d.FanJourneyModalWindow||d.BaseCssCloudinaryModule.extend({init:function l(){this.$overlay=f(".fj-overlay");
this.$overlay.prependTo(f("body"));
this.$modal=this.$overlay.find(".modal");
this.$modalMessageContainer=this.$modal.find(".modal-content");
this.$modalCloseButton=this.$modal.find(".close");
this.$modalCloseButton.on("click",this.proxy(this.close));
this.$preloader=this.$overlay.find(".fj-loader")
},open:function g(n){k.render(n,this.$modalMessageContainer[0]);
this.modalOpened=true;
this.closePreloader();
this.$modal.show();
this.$preloader.hide();
this.updateOverlay()
},close:function m(){this.modalOpened=false;
this.$modal.hide();
this.updateOverlay();
k.unmountComponentAtNode(this.$modalMessageContainer[0])
},openPreloader:function j(){this.preloaderOpened=true;
this.close();
this.$preloader.show();
this.$modal.hide();
this.updateOverlay()
},closePreloader:function i(){if(this.preloaderOpened){this.preloaderOpened=false;
this.$preloader.hide();
this.updateOverlay()
}},updateOverlay:function h(){var n=this.modalOpened||this.preloaderOpened;
this.$overlay.toggleClass("active",n);
f("body").css("overflow",n?"hidden":"")
}})
}
})]);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{configurable:false,enumerable:true,get:d})
}};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=2)
})([(function(module,exports){var g;
g=(function(){return this
})();
try{g=g||Function("return this")()||(1,eval)("this")
}catch(e){if(typeof window==="object"){g=window
}}module.exports=g
}),(function(c,e,b){Object.defineProperty(e,"__esModule",{value:true});
var f=b(4);
var a=k(f);
function k(n){return n&&n.__esModule?n:{"default":n}
}e["default"]={dep:{formatNumber:a["default"]},getEventById:function l(o,p){for(var n=0;
n<o.length;
n++){if(o[n].id===p){return o[n]
}}return null
},getTicketById:function m(o,p,r){var q=this.getEventById(o,p);
for(var n=0;
n<q.tickets.length;
n++){if(q.tickets[n].id===r){return q.tickets[n]
}}return null
},populateWithFormattedPrices:function i(p){for(var o=0;
o<p.length;
o++){for(var n=0;
n<p[o].tickets.length;
n++){var q=p[o].tickets[n];
q.priceString="$"+this.dep.formatNumber(q.price.toFixed(2))
}}return p
},formatMoneyValue:function j(o){var n=o.toFixed(2);
return"$"+this.dep.formatNumber(n)
},multiplyFloat:function d(p,o){var r=o.toString().length-2;
function n(s){return s*Math.pow(10,r)
}function q(s){return s/Math.pow(100,r)
}return q(n(p)*n(o))
},updateTicketsTotal:function g(p){for(var o=0;
o<p.length;
o++){var q=p[o];
for(var n=0;
n<q.tickets.length;
n++){var r=q.tickets[n];
var s=q.ticketsCount[r.id];
if(s){var t=this.multiplyFloat(s,r.price);
r.totalPrice=this.formatMoneyValue(t)
}}}return p
},hasMastercardTickets:function h(p){for(var o=0;
o<p.length;
o++){var q=p[o];
for(var n=0;
n<q.tickets.length;
n++){var r=q.tickets[n];
var s=q.ticketsCount[r.id];
if(s&&r.name.toLowerCase().indexOf("mastercard")!==-1){return true
}}}return false
}}
}),(function(c,b,f){var a=f(3);
var e=d(a);
function d(g){return g&&g.__esModule?g:{"default":g}
}(0,e["default"])(window)
}),(function(c,i,b){Object.defineProperty(i,"__esModule",{value:true});
i["default"]=function(I){var v=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{EventUtils:m["default"],Cart:k["default"],CartContainer:j["default"],ModalEmptyCart:a["default"],ModalDeleteTicket:o["default"],ModalSystemError:h["default"]};
var t=I.$,D=I.ReactDOM,w=I.pgatour;
return w.FanJourneyCart=w.FanJourneyCart||w.BaseCssCloudinaryModule.extend({eventBus:t({}),isEditMode:false,init:function K(){this.$renderContainer=this.container.find(".render");
this.eventBus.on("toggleEditMode",this.proxy(this.onToggleEditMode));
this.eventBus.on("emptyCartRequest",this.proxy(this.onEmptyCartRequest));
this.eventBus.on("emptyCart",this.proxy(this.onEmptyCart));
this.eventBus.on("updateCart",this.proxy(this.onUpdateCart));
this.eventBus.on("continueToCheckout",this.proxy(this.onContinueToCheckout));
this.eventBus.on("addTicket",this.proxy(this.onAddTicket));
this.eventBus.on("removeTicket",this.proxy(this.onRemoveTicket));
this.eventBus.on("deleteTicketRequest",this.proxy(this.onDeleteTicketRequest));
this.eventBus.on("deleteTicket",this.proxy(this.onDeleteTicket));
this.eventBus.on("closeModal",this.proxy(this.closeModal));
w.GigyaSocialize.bindLoginEventHandler(this.proxy(this.onGigyaLogin,this));
this.getData()
},initCart:function J(S){this.cart=new v.Cart();
var T=this.cart.init({feedUrl:this.config.feedUrl,apiUrl:this.config.cartApiUrl,domain:this.config.domain,countDownTime:this.config.countDownTime,events:S,requestTotals:true,callbacks:{onCartUpdated:this.proxy(this.onCartUpdated),onCartTimerUpdated:this.proxy(this.onCartTimerUpdated),onCartError:this.proxy(this.onCartError),onCartAborted:this.proxy(this.onCartAborted)}});
if(!T){this.events=[];
this.render()
}},getData:function E(){t.ajax({url:this.config.feedUrl,dataType:"json",success:this.proxy(this.onDataLoaded),error:this.proxy(this.onDataLoaded)})
},render:function R(S){this.initialized=true;
if(!this.cart.updateInProgress){w.fanJourneyModalWindow.closePreloader()
}D.render(React.createElement(v.CartContainer,{events:this.events,totals:this.cart.totals,hasMastercardTickets:this.hasMastercardTickets,needsUpdate:this.needsUpdate,isEditMode:this.isEditMode,isTimerUpdate:S,timeLeft:this.cart.getTimeLeft(),masterCardLogo:this.config.masterCardLogo,ticketMasterLogo:this.config.ticketMasterLogo,ticketsPageUrl:this.config.ticketsPageUrl,welcomeTitle:this.getWelcomeTitle(),eventBus:this.eventBus,localization:this.config.localization}),this.$renderContainer[0])
},layout:function M(){if(!this.initialized){w.fanJourneyModalWindow.openPreloader()
}},getWelcomeTitle:function H(){var S=void 0;
if(this.userHasLoggedIn()&&w.GigyaSocialize.user.profile){S=w.format(this.config.localization.welcome,{firstName:w.GigyaSocialize.user.profile.firstName})
}return S
},closeModal:function x(){w.fanJourneyModalWindow.close()
},userHasLoggedIn:function B(){return !!w.GigyaSocialize.user
},onDataLoaded:function A(S){this.initCart(S.events||[]);
if(!S.events){this.onCartError()
}},onGigyaLogin:function Q(){if(this.continueToCheckout){w.setWindowLocation(this.config.purchasePageUrl)
}},onToggleEditMode:function u(){if(this.cart.updateInProgress){return
}this.isEditMode=!this.isEditMode;
this.render()
},onEmptyCartRequest:function y(){if(this.cart.updateInProgress){return
}w.fanJourneyModalWindow.open(React.createElement(v.ModalEmptyCart,{eventBus:this.eventBus,localization:this.config.localization}))
},onEmptyCart:function q(){if(this.cart.updateInProgress){return
}w.fanJourneyModalWindow.openPreloader();
this.cart.update([])
},onUpdateCart:function C(){if(this.cart.updateInProgress){return
}w.fanJourneyModalWindow.openPreloader();
this.cart.update(this.events)
},onContinueToCheckout:function O(){if(this.cart.updateInProgress){return
}if(this.userHasLoggedIn()){w.setWindowLocation(this.config.purchasePageUrl)
}else{this.continueToCheckout=true;
w.GigyaSocialize.login()
}},onAddTicket:function N(S,T){if(this.cart.updateInProgress){return
}var V=v.EventUtils.getEventById(this.events,T.eventId);
var W=v.EventUtils.getTicketById(this.events,T.eventId,T.ticketId);
var U=V.ticketsCount[W.id]||0;
V.ticketsCount[W.id]=U+1;
this.events=v.EventUtils.updateTicketsTotal(this.events);
this.hasMastercardTickets=v.EventUtils.hasMastercardTickets(this.events);
this.needsUpdate=JSON.stringify(this.events)!==this.eventsString;
this.render()
},onRemoveTicket:function s(S,T){if(this.cart.updateInProgress){return
}var U=v.EventUtils.getEventById(this.events,T.eventId);
var V=v.EventUtils.getTicketById(this.events,T.eventId,T.ticketId);
if(U.ticketsCount[V.id]>0){U.ticketsCount[V.id]--;
this.events=v.EventUtils.updateTicketsTotal(this.events);
this.hasMastercardTickets=v.EventUtils.hasMastercardTickets(this.events);
this.needsUpdate=JSON.stringify(this.events)!==this.eventsString;
this.render()
}},onDeleteTicketRequest:function P(S,T){if(this.cart.updateInProgress){return
}w.fanJourneyModalWindow.open(React.createElement(v.ModalDeleteTicket,{options:T,eventBus:this.eventBus,localization:this.config.localization}))
},onDeleteTicket:function G(S,T){var U=v.EventUtils.getEventById(this.events,T.eventId);
if(U&&U.ticketsCount[T.ticketId]){delete U.ticketsCount[T.ticketId];
w.fanJourneyModalWindow.openPreloader();
this.cart.update(this.events)
}},onCartUpdated:function r(){this.events=this.cart.getEvents();
this.events=v.EventUtils.populateWithFormattedPrices(this.events);
this.events=v.EventUtils.updateTicketsTotal(this.events);
this.hasMastercardTickets=v.EventUtils.hasMastercardTickets(this.events);
this.eventsString=JSON.stringify(this.events);
this.needsUpdate=false;
this.render();
if(this.events.length&&w.urlParams.login&&!this.userHasLoggedIn()){w.urlParams.login=false;
this.onContinueToCheckout()
}},onCartTimerUpdated:function F(){if(!this.cart.updateInProgress&&this.events){this.render(true)
}},onCartError:function L(T,U){var S=void 0;
if(U==="timeout"){S=this.config.localization.errorMessages.timeout
}else{S=this.config.localization.errorMessages.system
}w.fanJourneyModalWindow.open(React.createElement(v.ModalSystemError,{errorMessage:S}));
this.onCartUpdated()
},onCartAborted:function z(S){this.events=this.cart.getEvents();
this.render();
if(S){w.fanJourneyModalWindow.open(React.createElement(v.ModalSystemError,{errorMessage:this.config.localization.cartExpiredMessage}))
}}})
};
var e=b(1);
var m=n(e);
var f=b(5);
var k=n(f);
var g=b(9);
var j=n(g);
var d=b(14);
var a=n(d);
var p=b(15);
var o=n(p);
var l=b(16);
var h=n(l);
function n(q){return q&&q.__esModule?q:{"default":q}
}}),(function(c,a,d){Object.defineProperty(a,"__esModule",{value:true});
a["default"]=b;
function b(e){if(e&&e!==""){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}else{return"--"
}}}),(function(b,a,c){(function(e){Object.defineProperty(a,"__esModule",{value:true});
var f=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(u){return typeof u
}:function(u){return u&&typeof Symbol==="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u
};
var i=function(){function u(y,w){for(var v=0;
v<w.length;
v++){var x=w[v];
x.enumerable=x.enumerable||false;
x.configurable=true;
if("value" in x){x.writable=true
}Object.defineProperty(y,x.key,x)
}}return function(x,v,w){if(v){u(x.prototype,v)
}if(w){u(x,w)
}return x
}
}();
var h=c(1);
var p=s(h);
var d=c(6);
var j=s(d);
var q=c(7);
var m=s(q);
var o=c(8);
var t=s(o);
function s(u){return u&&u.__esModule?u:{"default":u}
}function l(u,v){if(!(u instanceof v)){throw new TypeError("Cannot call a class as a function")
}}var n=e,k=n.$;
var g=0;
var r=function(){function aa(){l(this,aa);
this.cartId=null;
this.orderCompleted=false;
this.dep={EventUtils:p["default"]};
this.actionQueue=new j["default"]();
this.timer=new m["default"]();
this.customer=new t["default"]()
}i(aa,[{key:"init",value:function ad(af){this.apiUrl=af.apiUrl;
this.callbacks=k.extend({onCartUpdated:k.noop,onCartTimerUpdated:k.noop,onCartError:k.noop,onCartAborted:k.noop,onAuthorizationChange:k.noop},af.callbacks);
this.requestTotals=!!af.requestTotals;
this.domain=af.domain;
this.feedFile=af.feedUrl&&af.feedUrl.split("/").pop().replace(".json","");
this.actionQueue.init({requestTotals:this.requestTotals,actions:{retrieve:this._retrieve.bind(this),update:this._update.bind(this),abort:this._abort.bind(this),create:this._create.bind(this),getTotals:this._getTotals.bind(this)}});
this.timer.init({countDownTimer:af.countDownTime,callbacks:{onUpdate:this.callbacks.onCartTimerUpdated,onTimeout:this._onTimerTimeout.bind(this)}});
if(af.requestCustomer){this.customer.init({apiUrl:this.apiUrl,domain:this.domain,feedFile:this.feedFile,callbacks:{onAuthorizationChange:this.callbacks.onAuthorizationChange}})
}this._populateWithEvents(af.events);
if(af.events.length){this.retrieve()
}return this.cartId
}},{key:"retrieve",value:function T(){this._getInfoFromCookies();
if(this.cartId){this.actionQueue.set([{action:"retrieve"}]);
this.actionQueue.next()
}}},{key:"abort",value:function I(af){if(this.cartId){this.actionQueue.set([{action:"abort",abortByTimeout:af}]);
this.actionQueue.next()
}}},{key:"addEventTickets",value:function M(ah,af){var aj=[];
for(var ag=0;
ag<af.length;
ag++){var ak=af[ag].id;
var ai=ah.ticketsCount[ak];
if(ai>0){aj.push({ticket_type_code:ak,num_seats:ai})
}}if(this.cartId){this.actionQueue.set([{action:"update",event:ah,eventsToUpdate:[{eventId:ah.id,ticketTypes:aj}]}])
}else{this.actionQueue.set([{action:"create",eventId:ah.id,event:ah,ticketTypes:aj}])
}if(this.requestTotals){this.actionQueue.add({action:"getTotals",event:ah})
}this.actionQueue.next()
}},{key:"update",value:function Q(af){this.actionQueue.buildFromEventsState(af,this.getEvents());
this.actionQueue.next()
}},{key:"getEvents",value:function v(){var af=[];
for(var aj=0;
aj<this.events.length;
aj++){var ak=this.events[aj];
var ag=[];
for(var ai=0;
ai<ak.tickets.length;
ai++){var al=ak.tickets[ai];
if(ak.ticketsCount[al.id]>=0){ag.push(k.extend(true,{},al))
}}if(ag.length){var ah=k.extend(true,{},ak);
ah.tickets=ag;
af.push(ah)
}}return af
}},{key:"getTimeLeft",value:function Z(){return this.timer.timeLeft
}},{key:"getTotalTicketsCount",value:function F(){var af=0;
for(var ag=0;
ag<this.events.length;
ag++){var ah=this.events[ag];
for(var ai in ah.ticketsCount){if(ah.ticketsCount.hasOwnProperty(ai)){af+=ah.ticketsCount[ai]
}}}return af
}},{key:"buy",value:function E(ag,ah){var af=this.customer.getGigyaInfo();
if(!af||this.customer.getAuthorizationStatus()!=="full"){this._onCartError(null,"system")
}else{this._buy(ag,ah,af)
}}},{key:"_retrieve",value:function B(){this.updateInProgress=true;
var af={cmd:this.requestTotals?"total":"shopping_cart",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile};
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onRetrieved,this),error:k.proxy(this._onRequestError,this),data:af})
}},{key:"_create",value:function K(af,ag){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onCreated,this,af),error:k.proxy(this._onCreatedError,this,af),data:{cmd:"seats_hold",event_name:af.id,ticket_type:ag,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_update",value:function ac(ah,ai){this.updateInProgress=true;
var af=[k.Deferred().resolve()];
for(var ag=0;
ag<ai.length;
ag++){af.push(k.ajax({url:this.apiUrl,method:"POST",dataType:"json",data:{cmd:"seats_hold",order_num_in:this.cartId,event_name:ai[ag].eventId,ticket_type:ai[ag].ticketTypes,domain:this.domain,price_feed:this.feedFile}}))
}k.when.apply(this,af).done(k.proxy(this._onUpdated,this,ah)).fail(k.proxy(this._onRequestError,this,ah))
}},{key:"_abort",value:function L(af){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onAborted,this,af),error:k.proxy(this._onRequestError,this),data:{cmd:"abort_shopping_cart",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_getTotals",value:function U(af){this.updateInProgress=true;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onTotalsLoaded,this,af),error:k.proxy(this._onRequestError,this,af),data:{cmd:"total",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile}})
}},{key:"_buy",value:function D(ag,ai,af){var ah=k.extend({cmd:"payment_request",order_num:this.cartId,domain:this.domain,price_feed:this.feedFile,cc_exp:ag.expirationDateAsNumber,data_mask:ag.mask,cc_type:ag.type,cin:ai},af);
this.creditCard=ag;
k.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:k.proxy(this._onBuyCompleted,this),error:k.proxy(this._onRequestError,this),data:ah})
}},{key:"_getSavedCarts",value:function N(){var af=k.cookie("ticket_carts");
if(typeof af==="string"){try{af=JSON.parse(af)
}catch(ag){af={}
}}if(!af||(typeof af==="undefined"?"undefined":f(af))!=="object"){af={}
}return af
}},{key:"_setSavedCarts",value:function ab(){var af=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
k.cookie("ticket_carts",JSON.stringify(af),{expires:1,path:"/"})
}},{key:"_setCookies",value:function C(){var af=this._getSavedCarts();
af[this.feedFile]={id:this.cartId,startTime:this.timer.startTime};
this._setSavedCarts(af)
}},{key:"_getInfoFromCookies",value:function ae(){var ag=this._getSavedCarts();
var af=ag[this.feedFile];
if(af&&af.id&&af.startTime){this.timer.set(af.startTime);
if(this.timer.secondsLeft>0){this.cartId=af.id
}else{this.timer.stop();
this._removeCookies()
}}}},{key:"_removeCookies",value:function x(){var af=this._getSavedCarts();
delete af[this.feedFile];
this._setSavedCarts(af)
}},{key:"_resetCart",value:function W(){this.cartId=null;
this._updateCartEvents([],true);
this._removeCookies();
this.timer.stop();
this.actionQueue.set([])
}},{key:"_updateCartEvents",value:function X(ag,aj){if(aj){for(var af=0;
af<this.events.length;
af++){this.events[af].ticketsCount={}
}}for(var ak=0;
ak<ag.length;
ak++){var am=ag[ak];
var ai=this.dep.EventUtils.getEventById(this.events,am.event_name);
var al=this.dep.EventUtils.getTicketById(this.events,am.event_name,am.ticket_type_code);
if(ai&&al){var ah=ai.ticketsCount[al.id]||0;
ai.ticketsCount[al.id]=ah+am.num_seats
}}}},{key:"_populateWithEvents",value:function u(ag){this.events=[];
for(var af=0;
af<ag.length;
af++){var ah=k.extend(true,{},ag[af],{ticketsCount:{}});
this.events.push(ah)
}}},{key:"_onCreated",value:function H(af,ag){if(ag.seats&&ag.result===g){this.cartId=ag.order_num_out;
this._updateCartEvents(ag.seats,true);
this.timer.start();
this._setCookies();
if(this.actionQueue.isEmpty()){this._onCartUpdated(af)
}else{this.actionQueue.next()
}}else{this._resetCart();
this._onCartError(af,"system")
}}},{key:"_onCreatedError",value:function P(ah,ag,af){this._resetCart();
this._onRequestError(ah,ag,af)
}},{key:"_onRetrieved",value:function O(af){var ag=af.shoppingCart||af;
if(ag&&ag.seats&&ag.result===g){this._updateCartEvents(ag.seats,true);
this.timer.start();
if(this.requestTotals){this._onTotalsLoaded(null,af)
}else{this._onCartUpdated()
}}else{this.cartId=null;
this.updateInProgress=false;
this._onCartUpdated()
}}},{key:"_onUpdated",value:function R(ag){var ai=Array.prototype.slice.call(arguments,2);
for(var af=0;
af<ai.length;
af++){var ah=ai[af][0];
if(ah&&ah.seats&&ah.result===g){this._updateCartEvents(ah.seats)
}else{this._onCartError(ag,"system");
this._retrieve();
return
}}if(this.actionQueue.isEmpty()){this._onCartUpdated(ag)
}else{this.actionQueue.next()
}}},{key:"_onTotalsLoaded",value:function y(af,ag){if(ag.total){this.totals={subtotal:this.dep.EventUtils.formatMoneyValue(ag.subtotal),serviceCharge:!ag.fees?null:this.dep.EventUtils.formatMoneyValue(ag.fees),total:this.dep.EventUtils.formatMoneyValue(ag.total)};
this._onCartUpdated(af)
}else{this.totals={};
this._onCartError(af,"system")
}}},{key:"_onAborted",value:function G(af){this.cartId=null;
this._removeCookies();
this.timer.stop();
if(this.actionQueue.isEmpty()){this._onCartAborted(af)
}else{this.actionQueue.next()
}}},{key:"_onBuyCompleted",value:function V(af){if(af.result===g&&af.mop&&af.mop[0]){if(af.mop[0].cc_captured==="Y"){this._onOrderCompleted()
}else{this._onCartError(null,"system",af.mop[0].cc_results)
}}else{this._onCartError(null,"system")
}}},{key:"_onRequestError",value:function A(ah,ag,af){var ai=af==="timeout"?"timeout":"error";
this._onCartError(ah,ai)
}},{key:"_onCartUpdated",value:function J(af){this.updateInProgress=false;
this.callbacks.onCartUpdated(af)
}},{key:"_onCartError",value:function w(ag,ah,af){this.updateInProgress=false;
this.callbacks.onCartError(ag,ah,af)
}},{key:"_onCartAborted",value:function z(af){this._resetCart();
this.updateInProgress=false;
this.callbacks.onCartAborted(af)
}},{key:"_onTimerTimeout",value:function S(){this.abort(true)
}},{key:"_onOrderCompleted",value:function Y(){this.orderCompleted=true;
this._removeCookies();
this.timer.stop();
this._onCartUpdated()
}}]);
return aa
}();
a["default"]=r
}.call(a,c(0)))
}),(function(c,a,f){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function g(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}return function(j,h,i){if(h){g(j.prototype,h)
}if(i){g(j,i)
}return j
}
}();
function e(g,h){if(!(g instanceof h)){throw new TypeError("Cannot call a class as a function")
}}var d=function(){function i(){e(this,i);
this.queue=[]
}b(i,[{key:"init",value:function p(r){this.actions=r.actions;
this.requestTotals=r.requestTotals
}},{key:"add",value:function q(r){this.queue.push(r)
}},{key:"set",value:function o(r){this.queue=r
}},{key:"next",value:function k(){if(this.queue.length){var r=this.queue.shift();
if(r.action==="retrieve"){this.actions.retrieve()
}else{if(r.action==="update"){this.actions.update(r.event,r.eventsToUpdate,true)
}else{if(r.action==="abort"){this.actions.abort(r.abortByTimeout)
}else{if(r.action==="create"){this.actions.create(r.event||{id:r.eventId},r.ticketTypes,true)
}else{if(r.action==="getTotals"){this.actions.getTotals(r.event)
}}}}}}}},{key:"empty",value:function l(){this.queue=[]
}},{key:"buildFromEventsState",value:function h(v,u){var x=this._getEventsToUpdate(v,u);
var r=[];
if(x){for(var w in x){if(x.hasOwnProperty(w)){r.push({action:"update",eventId:w,ticketTypes:x[w]})
}}}else{var t=this._getEventsToCreate(v);
for(var s in t){if(t.hasOwnProperty(s)){r.push({action:r.length===0?"create":"update",eventId:s,ticketTypes:t[s]})
}}if(r.length){r.unshift({action:"abort"})
}}if(!r.length){r.push({action:"abort"})
}else{if(this.requestTotals){r.push({action:"getTotals"})
}}this.queue=this._squashQueue(r)
}},{key:"isEmpty",value:function j(){return !this.queue.length
}},{key:"_squashQueue",value:function g(s){var r=[];
for(var t=0;
t<s.length;
t++){var v=s[t];
var u=r[r.length-1];
if(u&&u.action==="update"&&v.action==="update"){u.eventsToUpdate.push({eventId:v.eventId,ticketTypes:v.ticketTypes})
}else{if(v.action==="update"){r.push({action:"update",eventsToUpdate:[{eventId:v.eventId,ticketTypes:v.ticketTypes}]})
}else{r.push(v)
}}}return r
}},{key:"_getEventsToUpdate",value:function m(r,A){var x={};
for(var v=0;
v<r.length;
v++){var t=r[v];
var s=A[v];
if(t.id!==s.id||t.tickets.length!==s.tickets.length){return false
}else{for(var u=0;
u<t.tickets.length;
u++){var y=t.tickets[u];
var w=s.tickets[u];
var z=t.ticketsCount[y.id]||0;
var B=s.ticketsCount[w.id]||0;
if(y.id!==w.id||z<B){return false
}else{if(z>B){x[t.id]=x[t.id]||[];
x[t.id].push({ticket_type_code:y.id,num_seats:z-B})
}}}}}return x
}},{key:"_getEventsToCreate",value:function n(u){var r={};
for(var t=0;
t<u.length;
t++){var v=u[t];
for(var s=0;
s<v.tickets.length;
s++){var x=v.tickets[s];
var w=v.ticketsCount[x.id];
if(w){r[v.id]=r[v.id]||[];
r[v.id].push({ticket_type_code:x.id,num_seats:w})
}}}return r
}}]);
return i
}();
a["default"]=d
}),(function(b,a,c){(function(f){Object.defineProperty(a,"__esModule",{value:true});
var e=function(){function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}return function(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}
}();
function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}var i=f,g=i.$;
var d=function(){function j(){h(this,j);
this.secondsLeft=0;
this.timeLeft="";
this.startTime=null
}e(j,[{key:"init",value:function n(r){this.countDownTimer=r.countDownTimer;
this.callbacks=r.callbacks
}},{key:"start",value:function q(){if(!this.startTime){this.startTime=Date.now()
}this._update(this.startTime);
this.timerInterval=setInterval(g.proxy(this._onClockTick,this),1000);
this.callbacks.onUpdate()
}},{key:"stop",value:function l(){this.secondsLeft=0;
this.timeLeft="";
this.startTime=null;
if(this.timerInterval){clearInterval(this.timerInterval);
this.timerInterval=null
}this.callbacks.onUpdate()
}},{key:"set",value:function p(r){this.startTime=r;
this._update(r)
}},{key:"_getSecondsLeft",value:function o(r){var t=Math.floor((Date.now()-r)/1000);
var s=this.countDownTimer-t;
return s>0?s:0
}},{key:"_update",value:function k(s){this.secondsLeft=this._getSecondsLeft(s);
if(this.secondsLeft){var r=Math.floor(this.secondsLeft/60);
var t=this.secondsLeft%60;
if(r<10){r="0"+r
}if(t<10){t="0"+t
}this.timeLeft=r+":"+t
}else{this.timeLeft=""
}}},{key:"_onClockTick",value:function m(){this._update(this.startTime);
if(!this.secondsLeft){this.stop();
this.callbacks.onTimeout()
}this.callbacks.onUpdate()
}}]);
return j
}();
a["default"]=d
}.call(a,c(0)))
}),(function(b,a,c){(function(h){Object.defineProperty(a,"__esModule",{value:true});
var f=function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
}();
function j(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}var e=0;
var d=5333;
var k=h,i=k.$;
var g=function(){function o(){j(this,o);
this.ticketMasterAuthorized=null;
this.gigyaAuthorized=null;
this.creditCards=[]
}f(o,[{key:"init",value:function y(A){this.apiUrl=A.apiUrl;
this.domain=A.domain;
this.feedFile=A.feedFile;
this.callbacks=A.callbacks;
this.gigyaAuthorized=this._isGigyaAuthorized();
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya();
pgatour.GigyaSocialize.bindLogoutEventHandler(this._onGigyaLogout.bind(this));
pgatour.GigyaSocialize.getUserAccountInfo(this._onGigyaAccountInfo.bind(this))
}},{key:"signIn",value:function z(C,B){var A=pgatour.GigyaSocialize.user;
if(!A){return
}i.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:i.proxy(this._onSignIn,this),error:i.proxy(this._onSignInRequestError,this),data:{cmd:"customer_query",email:C,pin:B,UID:A.UID,UIDSignature:A.UIDSignature,signatureTimestamp:A.signatureTimestamp,domain:this.domain,price_feed:this.feedFile}})
}},{key:"getAuthorizationStatus",value:function s(){if(this.gigyaAuthorized&&this.ticketMasterAuthorized){return"full"
}else{if(this.gigyaAuthorized){return"gigya"
}else{return"none"
}}}},{key:"getGigyaInfo",value:function n(B){var A=B||pgatour.GigyaSocialize.user;
if(!A){return null
}return{UID:A.UID,UIDSignature:A.UIDSignature,signatureTimestamp:A.signatureTimestamp}
}},{key:"_getCreditCards",value:function m(B){var A=this.getGigyaInfo(B);
if(this.getAuthorizationStatus()!=="full"||!A){return
}var C=i.extend({cmd:"cc_query",domain:this.domain,price_feed:this.feedFile},A);
i.ajax({url:this.apiUrl,method:"POST",dataType:"json",success:i.proxy(this._onCreditCardsLoaded,this),error:i.proxy(this._onCreditCardsRequestError,this),data:C})
}},{key:"_isGigyaAuthorized",value:function v(B){var A=B||pgatour.GigyaSocialize.user;
return !!(A&&A.data)
}},{key:"_getTicketMasterAuthorizedFromGigya",value:function r(B){var A=void 0;
if(B){A=B.data
}else{A=pgatour.GigyaSocialize&&pgatour.GigyaSocialize.user&&pgatour.GigyaSocialize.user.data
}return !!(A&&A.ATSUser)
}},{key:"_onSignIn",value:function x(A){if(A.customer&&!A.errorMessage){this.ticketMasterAuthorized=true;
this._getCreditCards()
}else{if(A.errorMessage==="Failed login"){this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"authError"})
}else{this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"system"})
}}}},{key:"_onSignInRequestError",value:function p(){this.ticketMasterAuthorized=false;
this.callbacks.onAuthorizationChange({error:"system"})
}},{key:"_onGigyaLogin",value:function q(){this.gigyaAuthorized=true;
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya();
if(this.getAuthorizationStatus()==="full"){this._getCreditCards()
}else{this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}}},{key:"_onGigyaLogout",value:function l(){this.gigyaAuthorized=false;
this.ticketMasterAuthorized=false;
this.creditCards=[];
this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}},{key:"_onGigyaAccountInfo",value:function u(A){this.gigyaAuthorized=this._isGigyaAuthorized(A);
this.ticketMasterAuthorized=this._getTicketMasterAuthorizedFromGigya(A);
if(this.getAuthorizationStatus()==="full"){this._getCreditCards(A)
}else{this.callbacks.onAuthorizationChange({gigyaUser:A,creditCards:this.creditCards})
}pgatour.GigyaSocialize.bindLoginEventHandler(this._onGigyaLogin.bind(this))
}},{key:"_onCreditCardsLoaded",value:function w(F){this.creditCards=[];
if(F.result===e){var D=F.credit_card||[];
for(var C=0;
C<D.length;
C++){var B=D[C];
var A=(B.cc_exp||"").toString();
if(A.length===4){A=A.substr(0,2)+"/"+A.substr(2,2)
}var E={holder:B.full_name||B.cc_name_first+" "+B.cc_name_last,type:B.cc_type,mask:B.data_mask,expirationDate:A,expirationDateAsNumber:B.cc_exp,address:B.cc_address||B.cc_postal_code};
this.creditCards.push(E)
}this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}else{if(F.result===d){this.callbacks.onAuthorizationChange({creditCards:this.creditCards})
}else{this._onCreditCardsRequestError()
}}}},{key:"_onCreditCardsRequestError",value:function t(){this.creditCards=[];
this.callbacks.onAuthorizationChange({error:"system"})
}}]);
return o
}();
a["default"]=g
}.call(a,c(0)))
}),(function(b,f,a){Object.defineProperty(f,"__esModule",{value:true});
var e=function(){function p(t,r){for(var q=0;
q<r.length;
q++){var s=r[q];
s.enumerable=s.enumerable||false;
s.configurable=true;
if("value" in s){s.writable=true
}Object.defineProperty(t,s.key,s)
}}return function(s,q,r){if(q){p(s.prototype,q)
}if(r){p(s,r)
}return s
}
}();
var m=a(10);
var d=o(m);
var j=a(12);
var c=o(j);
var i=a(13);
var h=o(i);
function o(p){return p&&p.__esModule?p:{"default":p}
}function g(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function l(p,q){if(!p){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return q&&(typeof q==="object"||typeof q==="function")?q:p
}function n(q,p){if(typeof p!=="function"&&p!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof p)
}q.prototype=Object.create(p&&p.prototype,{constructor:{value:q,enumerable:false,writable:true,configurable:true}});
if(p){Object.setPrototypeOf?Object.setPrototypeOf(q,p):q.__proto__=p
}}var k=function(t){n(v,t);
function v(){g(this,v);
return l(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))
}e(v,[{key:"render",value:function r(){var B=this.props.localization;
var z=this.getEvents();
var A=z.length===0;
var y=pgatour.format(B.timerMessage,{timeLeft:this.props.timeLeft});
return React.createElement("div",null,React.createElement("div",{className:"cart"},React.createElement("div",{className:"cart-header clearfix"},React.createElement("div",{className:"cart-title"},B.title),!A&&React.createElement("a",{href:"#",className:"cta",onClick:this.onToggleEditClick.bind(this)},this.props.isEditMode?B.cancel:B.edit)),A&&React.createElement("div",{className:"message-empty"},B.emptyCartMessage),!A&&this.props.timeLeft&&React.createElement("div",{className:"timer"},y),!A&&!this.props.timeLeft&&React.createElement("div",{className:"timer"},"\xA0"),!A&&this.props.welcomeTitle&&React.createElement("div",{className:"welcome"},React.createElement("div",{className:"title"},this.props.welcomeTitle),React.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:B.welcomeMessage}})),!A&&React.createElement("div",{className:"events"},z),!A&&!!this.props.totals&&React.createElement(c["default"],{totals:this.props.totals,localization:this.props.localization}),!A&&!!this.props.totals&&React.createElement(h["default"],{totals:this.props.totals,hasMastercardTickets:this.props.hasMastercardTickets,masterCardLogo:this.props.masterCardLogo,localization:this.props.localization}),React.createElement("div",{className:"cart-control clearfix"},this.getControlButton())),React.createElement("div",{className:"powered-by-tm"},React.createElement("img",{src:this.props.ticketMasterLogo,alt:""})))
}},{key:"getEvents",value:function u(){var y=this;
return this.props.events.map(function(z){return React.createElement(d["default"],{key:z.id,event:z,isEditMode:y.props.isEditMode,isTimerUpdate:y.props.isTimerUpdate,eventBus:y.props.eventBus})
})
}},{key:"getControlButton",value:function q(){var y=this.props.localization;
if(!this.props.events.length){return React.createElement("a",{href:this.props.ticketsPageUrl,className:"button button-theme"},y.backButton)
}else{if(this.props.isEditMode){return React.createElement("a",{href:"",onClick:this.onEmptyButtonClick.bind(this),className:"button button-theme error"},y.emptyCartButton)
}else{if(this.props.needsUpdate){return React.createElement("a",{href:"",onClick:this.onUpdateButtonClick.bind(this),className:"button button-theme"},y.updateCartButton)
}else{return React.createElement("a",{href:"",onClick:this.onContinueButtonClick.bind(this),className:"button button-theme"},y.continueButton)
}}}}},{key:"onEmptyButtonClick",value:function x(y){y.preventDefault();
this.props.eventBus.trigger("emptyCartRequest")
}},{key:"onUpdateButtonClick",value:function w(y){y.preventDefault();
this.props.eventBus.trigger("updateCart")
}},{key:"onContinueButtonClick",value:function p(y){y.preventDefault();
this.props.eventBus.trigger("continueToCheckout")
}},{key:"onToggleEditClick",value:function s(y){y.preventDefault();
this.props.eventBus.trigger("toggleEditMode")
}}]);
return v
}(React.Component);
f["default"]=k
}),(function(c,f,b){Object.defineProperty(f,"__esModule",{value:true});
var e=function(){function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}return function(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}
}();
var a=b(11);
var d=j(a);
function j(l){return l&&l.__esModule?l:{"default":l}
}function g(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function h(l,m){if(!l){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return m&&(typeof m==="object"||typeof m==="function")?m:l
}function i(m,l){if(typeof l!=="function"&&l!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof l)
}m.prototype=Object.create(l&&l.prototype,{constructor:{value:m,enumerable:false,writable:true,configurable:true}});
if(l){Object.setPrototypeOf?Object.setPrototypeOf(m,l):m.__proto__=l
}}var k=function(o){i(p,o);
function p(){g(this,p);
return h(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))
}e(p,[{key:"render",value:function n(){return React.createElement("div",{className:"event"},React.createElement("div",{className:"event-head"},React.createElement("div",{className:"title"},this.props.event.name)),React.createElement("div",{className:"tickets"},this.getTickets()))
}},{key:"shouldComponentUpdate",value:function m(q){return !q.isTimerUpdate
}},{key:"getTickets",value:function l(){var q=this;
return this.props.event.tickets.map(function(r){return React.createElement(d["default"],{key:r.id,eventId:q.props.event.id,ticket:r,count:q.props.event.ticketsCount[r.id],isEditMode:q.props.isEditMode,isPurchaseMode:q.props.isPurchaseMode,eventBus:q.props.eventBus})
})
}}]);
return p
}(React.Component);
f["default"]=k
}),(function(d,a,g){Object.defineProperty(a,"__esModule",{value:true});
var c=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var b=function(n){h(l,n);
function l(){f(this,l);
return e(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))
}c(l,[{key:"render",value:function m(){var p=this.props.ticket;
var o=p.priceString;
if(this.props.isPurchaseMode){o+="x"+this.props.count
}return React.createElement("div",{className:"ticket"},React.createElement("div",{className:"name"},React.createElement("span",{className:"title"},p.name),React.createElement("span",{className:"cost"}," (",o,")")),!this.props.isPurchaseMode&&React.createElement("div",{className:"control"},React.createElement("span",{className:"add",onClick:this.onAddTicketClick.bind(this)}),React.createElement("span",{className:"remove",onClick:this.onRemoveTicketClick.bind(this)}),React.createElement("span",{className:"counter"},this.props.count)),React.createElement("div",{className:"price"},p.totalPrice),this.props.isEditMode&&React.createElement("div",{className:"delete-ticket"},React.createElement("span",{className:"delete-icon",onClick:this.onDeleteButtonClick.bind(this)})))
}},{key:"onDeleteButtonClick",value:function j(){this.props.eventBus.trigger("deleteTicketRequest",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}},{key:"onAddTicketClick",value:function i(){this.props.eventBus.trigger("addTicket",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}},{key:"onRemoveTicketClick",value:function k(){this.props.eventBus.trigger("removeTicket",{eventId:this.props.eventId,ticketId:this.props.ticket.id})
}}]);
return l
}(React.Component);
a["default"]=b
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(j){h(k,j);
function k(){f(this,k);
return e(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){var m=this.props.localization;
var l=this.props.totals;
return React.createElement("ul",{className:"addition clearfix"},React.createElement("li",null,React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"title"},m.subtotal),React.createElement("div",{className:"value"},l.subtotal))),l.serviceCharge!==null&&React.createElement("li",null,React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"title"},m.fees),React.createElement("div",{className:"value"},l.serviceCharge))),React.createElement("li",null,React.createElement("div",{className:"clearfix"},React.createElement("div",{className:"title"},m.deliveryMethod),React.createElement("div",{className:"value"},m.free))))
}}]);
return k
}(React.Component);
a["default"]=d
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(j){h(k,j);
function k(){f(this,k);
return e(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){var l=this.props.localization;
return React.createElement("div",{className:"total"},React.createElement("div",{className:"main"},React.createElement("div",{className:"title"},l.total),this.props.hasMastercardTickets&&React.createElement("span",{className:"cart-logo"},React.createElement("img",{src:this.props.masterCardLogo,alt:""})),this.props.hasMastercardTickets&&React.createElement("span",{className:"cart-text",dangerouslySetInnerHTML:{__html:l.masterCardMessage}})),React.createElement("div",{className:"price"},this.props.totals.total))
}}]);
return k
}(React.Component);
a["default"]=d
}),(function(d,a,g){Object.defineProperty(a,"__esModule",{value:true});
var c=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var b=function(l){h(j,l);
function j(){f(this,j);
return e(this,(j.__proto__||Object.getPrototypeOf(j)).apply(this,arguments))
}c(j,[{key:"render",value:function k(){return React.createElement("div",null,React.createElement("div",{className:"error-container"},React.createElement("div",{className:"remove-ticket-icon"}),React.createElement("p",null,this.props.localization.deleteAllTickets)),React.createElement("div",{className:"buttons"},React.createElement("a",{className:"btn",href:"#",onClick:this.onYesClick.bind(this)},"Yes"),React.createElement("a",{className:"btn",href:"#",onClick:this.onCancelClick.bind(this)},"Cancel")))
}},{key:"onYesClick",value:function i(n){n.preventDefault();
this.props.eventBus.trigger("emptyCart");
this.props.eventBus.trigger("closeModal")
}},{key:"onCancelClick",value:function m(n){n.preventDefault();
this.props.eventBus.trigger("closeModal")
}}]);
return j
}(React.Component);
a["default"]=b
}),(function(c,a,g){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function f(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function e(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var d=function(l){h(k,l);
function k(){f(this,k);
return e(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function j(){return React.createElement("div",null,React.createElement("div",{className:"error-container"},React.createElement("div",{className:"remove-ticket-icon"}),React.createElement("p",null,this.props.localization.deleteTicket)),React.createElement("div",{className:"buttons"},React.createElement("a",{className:"btn",href:"#",onClick:this.onYesClick.bind(this)},"Yes"),React.createElement("a",{className:"btn",href:"#",onClick:this.onCancelClick.bind(this)},"Cancel")))
}},{key:"onYesClick",value:function i(n){n.preventDefault();
this.props.eventBus.trigger("deleteTicket",{eventId:this.props.options.eventId,ticketId:this.props.options.ticketId});
this.props.eventBus.trigger("closeModal")
}},{key:"onCancelClick",value:function m(n){n.preventDefault();
this.props.eventBus.trigger("closeModal")
}}]);
return k
}(React.Component);
a["default"]=d
}),(function(c,a,f){Object.defineProperty(a,"__esModule",{value:true});
var b=function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
}();
function e(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function d(i,j){if(!i){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return j&&(typeof j==="object"||typeof j==="function")?j:i
}function h(j,i){if(typeof i!=="function"&&i!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof i)
}j.prototype=Object.create(i&&i.prototype,{constructor:{value:j,enumerable:false,writable:true,configurable:true}});
if(i){Object.setPrototypeOf?Object.setPrototypeOf(j,i):j.__proto__=i
}}var g=function(j){h(k,j);
function k(){e(this,k);
return d(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments))
}b(k,[{key:"render",value:function i(){return React.createElement("div",{className:"error-container"},React.createElement("div",{className:"error-icon"}),React.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.errorMessage}}))
}}]);
return k
}(React.Component);
a["default"]=g
})]);