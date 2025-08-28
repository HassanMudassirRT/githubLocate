import{$ as pl,$a as Tl,$b as jt,A as cs,Aa as vl,Ab as et,B as Vn,Ba as Tt,Bb as Cs,C as sl,Ca as G,Cb as ct,D as Bn,Db as w,E as Zt,Ea as tn,Eb as j,F as us,Fa as _l,Fb as xe,G as al,Ga as Cl,Gb as ke,H as ll,Ha as ys,Hb as Qo,I as cl,Ia as v,Ib as Zo,J as Re,Ja as Z,Jb as Yo,K as ds,Ka as pe,Kb as Y,L as Ue,La as wl,Lb as mn,M as me,Ma as A,Mb as ge,N as Yt,Na as g,Nb as Ot,O as E,Oa as Sl,Ob as Al,P as Q,Pa as W,Q as ul,Qa as Ke,Qb as Ol,R as de,Ra as bs,Rb as Rl,S as oe,Sa as Dl,Sb as Fl,T as f,Ta as jn,Tb as je,U as zn,Ua as El,Ub as Ll,V as dl,Va as vs,W as Xt,Wa as Il,Wb as Pe,X as Je,Xa as _s,Xb as Te,Y as N,Ya as Ko,Yb as mt,Z as V,Za as P,Zb as kl,_ as M,_a as xl,_b as z,a as S,aa as Jt,ab as Ee,ac as Pl,b as _e,ba as Se,bb as Ml,bc as Nl,ca as qo,cb as Ie,cc as Vl,d as el,da as ps,db as Mt,dc as R,e as tl,ea as Un,eb as At,ec as Ne,f as Ho,fa as ee,fb as d,fc as Bl,g as as,gb as _,h as ls,ha as hl,hb as C,i as ze,ia as fl,ib as T,ic as Ti,j as Ye,ja as Le,jb as te,jc as gn,k as qe,ka as D,kb as ne,l as Xe,la as hs,lb as q,lc as yn,m as K,ma as lt,mb as ae,n as xi,na as ml,nb as le,nc as bn,o as nl,oa as fs,ob as re,oc as Xo,p as il,pa as gl,pb as fe,q as he,qa as ft,qb as $n,qc as Jo,r as Nn,rb as H,s as st,sa as ms,sb as p,t as ol,ta as gs,tb as De,u as Go,ua as yl,ub as Ce,v as Wo,va as en,vb as U,w as Ut,wa as bl,wb as Ge,x as at,xa as u,xb as L,y as pn,ya as hn,yb as k,z as rl,za as fn,zb as Qe}from"./chunk-WFJADRI2.js";var ws=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-footer"]],decls:5,vars:0,consts:[[1,"fixed","bottom-0","start-0","w-screen","backdrop-blur-md","border-t","border-zinc-400/50"],[1,"p-6"],[1,"text-xs","md:text-sm","lg:text-lg","xl:text-xl","text-center"]],template:function(e,n){e&1&&(te(0,"footer",0)(1,"article",1)(2,"nav")(3,"h2",2),j(4," \xA9 2025 githubLocate. All rights reserved. "),ne()()()())},encapsulation:2})};var jl=null;function ut(){return jl}function Ss(t){jl??=t}var Mi=class{},Ds=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f($l),providedIn:"platform"})}return t})();var $l=(()=>{class t extends Ds{_location;_history;_doc=f(Se);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ut().getBaseHref(this._doc)}onPopState(e){let n=ut().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ut().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Hl(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function zl(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function nn(t){return t&&t[0]!=="?"?`?${t}`:t}var Hn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(Wl),providedIn:"root"})}return t})(),Gl=new de(""),Wl=(()=>{class t extends Hn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(Se).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Hl(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+nn(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+nn(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+nn(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(oe(Ds),oe(Gl,8))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gn=(()=>{class t{_subject=new ze;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ah(zl(Ul(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+nn(n))}normalize(e){return t.stripTrailingSlash(sh(this._basePath,Ul(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+nn(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+nn(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=nn;static joinWithSlash=Hl;static stripTrailingSlash=zl;static \u0275fac=function(n){return new(n||t)(oe(Hn))};static \u0275prov=E({token:t,factory:()=>rh(),providedIn:"root"})}return t})();function rh(){return new Gn(oe(Hn))}function sh(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ul(t){return t.replace(/\/index.html$/,"")}function ah(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Es=/\s+/,ql=[],gt=(()=>{class t{_ngEl;_renderer;initialClasses=ql;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Es):ql}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Es):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Es).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(G(lt),G(Tt))};static \u0275dir=pe({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var er=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},on=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new er(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Kl(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);Kl(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(G(tn),G(fn),G(Pl))};static \u0275dir=pe({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Kl(t,i){t.context.$implicit=i.item}var Oe=(()=>{class t{_viewContainer;_context=new tr;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ql(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ql(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(G(tn),G(fn))};static \u0275dir=pe({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),tr=class{$implicit=null;ngIf=null};function Ql(t,i){if(t&&!t.createEmbeddedView)throw new me(2020,!1)}var dt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:hn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(G(lt),G(Nl),G(Tt))};static \u0275dir=pe({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Ve=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(G(tn))};static \u0275dir=pe({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Le]})}return t})();function ch(t,i){return new me(2100,!1)}var Is=class{createSubscription(i,e,n){return Pe(()=>i.subscribe({next:e,error:n}))}dispose(i){Pe(()=>i.unsubscribe())}},xs=class{createSubscription(i,e,n){return i.then(o=>e?.(o),o=>n?.(o)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},uh=new xs,dh=new Is,Ts=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=f(Un);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(jn(e))return uh;if(El(e))return dh;throw ch(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(G(jt,16))};static \u0275pipe=wl({name:"async",type:t,pure:!1})}return t})();var ce=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({})}return t})();function Ai(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var vn=class{};var Ms="browser",ph="server";function yt(t){return t===Ms}function Yl(t){return t===ph}var ir=new de(""),Ls=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,o,r){return this._findPluginFor(n).addEventListener(e,n,o,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(r=>r.supports(e)),!n)throw new me(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(oe(ir),oe(Ke))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Oi=class{_doc;constructor(i){this._doc=i}manager},As="ng-app-id";function Xl(t){for(let i of t)i.remove()}function Jl(t,i){let e=i.createElement("style");return e.textContent=t,e}function hh(t,i,e,n){let o=t.head?.querySelectorAll(`style[${As}="${i}"],link[${As}="${i}"]`);if(o)for(let r of o)r.removeAttribute(As),r instanceof HTMLLinkElement?n.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function Rs(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ks=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,o,r={}){this.doc=e,this.appId=n,this.nonce=o,hh(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,Jl);n?.forEach(o=>this.addUsage(o,this.external,Rs))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let r=n.get(e);r?r.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(Xl(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Xl(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,Jl(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,Rs(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(oe(Se),oe(fs),oe(ms,8),oe(ft))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Os={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ps=/%COMP%/g;var tc="%COMP%",fh=`_nghost-${tc}`,mh=`_ngcontent-${tc}`,gh=!0,yh=new de("",{providedIn:"root",factory:()=>gh});function bh(t){return mh.replace(Ps,t)}function vh(t){return fh.replace(Ps,t)}function nc(t,i){return i.map(e=>e.replace(Ps,t))}var Ns=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;animationDisabled;maxAnimationTimeout;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;registry;constructor(e,n,o,r,s,a,l,c=null,h,m,y=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.animationDisabled=h,this.maxAnimationTimeout=m,this.tracingService=y,this.platformIsServer=!1,this.defaultRenderer=new Ri(e,s,l,this.platformIsServer,this.tracingService,this.registry=pl(),this.maxAnimationTimeout)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof nr?o.applyToHost(e):o instanceof Fi&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,r=o.get(n.id);if(!r){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,m=this.platformIsServer,y=this.tracingService;switch(n.encapsulation){case gs.Emulated:r=new nr(l,c,n,this.appId,h,s,a,m,y,this.registry,this.animationDisabled,this.maxAnimationTimeout);break;case gs.ShadowDom:return new Fs(l,c,e,n,s,a,this.nonce,m,y,this.registry,this.maxAnimationTimeout);default:r=new Fi(l,c,n,h,s,a,m,y,this.registry,this.animationDisabled,this.maxAnimationTimeout);break}o.set(n.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(oe(Ls),oe(ks),oe(fs),oe(yh),oe(Se),oe(ft),oe(Ke),oe(ms),oe(xl),oe(Tl),oe(Sl,8))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Ri=class{eventManager;doc;ngZone;platformIsServer;tracingService;registry;maxAnimationTimeout;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,o,r,s,a){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=o,this.tracingService=r,this.registry=s,this.maxAnimationTimeout=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Os[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ec(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(ec(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){let{elements:n}=this.registry;if(n){n.animate(e,()=>e.remove(),this.maxAnimationTimeout);return}e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new me(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,o){if(o){e=o+":"+e;let r=Os[o];r?i.setAttributeNS(r,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let o=Os[n];o?i.removeAttributeNS(o,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,o){o&(hn.DashCase|hn.Important)?i.style.setProperty(e,n,o&hn.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&hn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,o){if(typeof i=="string"&&(i=ut().getGlobalEventTarget(this.doc,i),!i))throw new me(5102,!1);let r=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,e,r)),this.eventManager.addEventListener(i,e,r,o)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ec(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Fs=class extends Ri{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,o,r,s,a,l,c,h,m){super(i,r,s,l,c,h,m),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let y=o.styles;y=nc(o.id,y);for(let x of y){let B=document.createElement("style");a&&B.setAttribute("nonce",a),B.textContent=x,this.shadowRoot.appendChild(B)}let b=o.getExternalStyles?.();if(b)for(let x of b){let B=Rs(x,r);a&&B.setAttribute("nonce",a),this.shadowRoot.appendChild(B)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fi=class extends Ri{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;_animationDisabled;constructor(i,e,n,o,r,s,a,l,c,h,m,y){super(i,r,s,a,l,c,m),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this._animationDisabled=h;let b=n.styles;this.styles=y?nc(y,b):b,this.styleUrls=n.getExternalStyles?.(y)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){if(this.removeStylesOnCompDestroy){if(!this._animationDisabled&&this.registry.elements){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)},this.maxAnimationTimeout)});return}this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}}},nr=class extends Fi{contentAttr;hostAttr;constructor(i,e,n,o,r,s,a,l,c,h,m,y){let b=o+"-"+n.id;super(i,e,n,r,s,a,l,c,h,m,y,b),this.contentAttr=bh(b),this.hostAttr=vh(b)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var or=class t extends Mi{supportsDOMEvents=!0;static makeCurrent(){Ss(new t)}onAndCancel(i,e,n,o){return i.addEventListener(e,n,o),()=>{i.removeEventListener(e,n,o)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=_h();return e==null?null:Ch(e)}resetBaseElement(){Li=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Ai(document.cookie,i)}},Li=null;function _h(){return Li=Li||document.head.querySelector("base"),Li?Li.getAttribute("href"):null}function Ch(t){return new URL(t,document.baseURI).pathname}var wh=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),oc=(()=>{class t extends Oi{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,r){return e.addEventListener(n,o,r),()=>this.removeEventListener(e,n,o,r)}removeEventListener(e,n,o,r){return e.removeEventListener(n,o,r)}static \u0275fac=function(n){return new(n||t)(oe(Se))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),ic=["alt","control","meta","shift"],Sh={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Dh={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},rc=(()=>{class t extends Oi{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,r){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ut().onAndCancel(e,s.domEventName,a,r))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let r=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),ic.forEach(c=>{let h=n.indexOf(c);h>-1&&(n.splice(h,1),s+=c+".")}),s+=r,n.length!=0||r.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(e,n){let o=Sh[e.key]||e.key,r="";return n.indexOf("code.")>-1&&(o=e.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),ic.forEach(s=>{if(s!==o){let a=Dh[s];a(e)&&(r+=s+".")}}),r+=o,r===n)}static eventCallback(e,n,o){return r=>{t.matchEventFullKeyCode(r,e)&&o.runGuarded(()=>n(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(oe(Se))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function Eh(t,i){let e=S({rootComponent:t},Ih(i));return Vl(e)}function Ih(t){return{appProviders:[...Oh,...t?.providers??[]],platformProviders:Ah}}function xh(){or.makeCurrent()}function Th(){return new ps}function Mh(){return ml(document),document}var Ah=[{provide:ft,useValue:Ms},{provide:gl,useValue:xh,multi:!0},{provide:Se,useFactory:Mh}];var Oh=[{provide:dl,useValue:"root"},{provide:ps,useFactory:Th},{provide:ir,useClass:oc,multi:!0,deps:[Se]},{provide:ir,useClass:rc,multi:!0,deps:[Se]},Ns,ks,Ls,{provide:vl,useExisting:Ns},{provide:vn,useClass:wh},[]];var Kn=class{},ki=class{},rn=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var sr=class{encodeKey(i){return sc(i)}encodeValue(i){return sc(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Rh(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var Fh=/%(\d[a-f0-9])/gi,Lh={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function sc(t){return encodeURIComponent(t).replace(Fh,(i,e)=>Lh[e]??i)}function rr(t){return`${t}`}var $t=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new sr,i.fromString){if(i.fromObject)throw new me(2805,!1);this.map=Rh(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(rr):[rr(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(rr(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(rr(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var ar=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function kh(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ac(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function lc(t){return typeof Blob<"u"&&t instanceof Blob}function cc(t){return typeof FormData<"u"&&t instanceof FormData}function Ph(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var uc="Content-Type",dc="Accept",pc="X-Request-URL",hc="text/plain",fc="application/json",Nh=`${fc}, ${hc}, */*`,Wn=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let r;if(kh(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new me(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer&&(this.referrer=r.referrer),this.transferCache=r.transferCache}if(this.headers??=new rn,this.context??=new ar,!this.params)this.params=new $t,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ac(this.body)||lc(this.body)||cc(this.body)||Ph(this.body)?this.body:this.body instanceof $t?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||cc(this.body)?null:lc(this.body)?this.body.type||null:ac(this.body)?null:typeof this.body=="string"?hc:this.body instanceof $t?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?fc:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.keepalive??this.keepalive,s=i.priority||this.priority,a=i.cache||this.cache,l=i.mode||this.mode,c=i.redirect||this.redirect,h=i.credentials||this.credentials,m=i.referrer||this.referrer,y=i.integrity||this.integrity,b=i.transferCache??this.transferCache,x=i.timeout??this.timeout,B=i.body!==void 0?i.body:this.body,I=i.withCredentials??this.withCredentials,O=i.reportProgress??this.reportProgress,$=i.headers||this.headers,ue=i.params||this.params,ye=i.context??this.context;return i.setHeaders!==void 0&&($=Object.keys(i.setHeaders).reduce((Fe,He)=>Fe.set(He,i.setHeaders[He]),$)),i.setParams&&(ue=Object.keys(i.setParams).reduce((Fe,He)=>Fe.set(He,i.setParams[He]),ue)),new t(e,n,B,{params:ue,headers:$,context:ye,reportProgress:O,responseType:o,withCredentials:I,transferCache:b,keepalive:r,cache:a,priority:s,timeout:x,mode:l,redirect:c,credentials:h,referrer:m,integrity:y})}},_n=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(_n||{}),Qn=class{headers;status;statusText;url;ok;type;redirected;constructor(i,e=200,n="OK"){this.headers=i.headers||new rn,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.ok=this.status>=200&&this.status<300}},lr=class t extends Qn{constructor(i={}){super(i)}type=_n.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Pi=class t extends Qn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=_n.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected})}},qn=class extends Qn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Vh=200,Bh=204;function Vs(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer}}var ur=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof Wn)r=e;else{let l;o.headers instanceof rn?l=o.headers:l=new rn(o.headers);let c;o.params&&(o.params instanceof $t?c=o.params:c=new $t({fromObject:o.params})),r=new Wn(e,n,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,integrity:o.integrity,timeout:o.timeout})}let s=K(r).pipe(pn(l=>this.handler.handle(l)));if(e instanceof Wn||o.observe==="events")return s;let a=s.pipe(Ut(l=>l instanceof Pi));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(he(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new me(2806,!1);return l.body}));case"blob":return a.pipe(he(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new me(2807,!1);return l.body}));case"text":return a.pipe(he(l=>{if(l.body!==null&&typeof l.body!="string")throw new me(2808,!1);return l.body}));case"json":default:return a.pipe(he(l=>l.body))}case"response":return a;default:throw new me(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new $t().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Vs(o,n))}post(e,n,o={}){return this.request("POST",e,Vs(o,n))}put(e,n,o={}){return this.request("PUT",e,Vs(o,n))}static \u0275fac=function(n){return new(n||t)(oe(Kn))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var zh=new de("");function Uh(t,i){return i(t)}function jh(t,i,e){return(n,o)=>Je(e,()=>i(n,r=>t(r,o)))}var zs=new de(""),mc=new de(""),gc=new de("",{providedIn:"root",factory:()=>!0});var cr=(()=>{class t extends Kn{backend;injector;chain=null;pendingTasks=f(fl);contributeToStability=f(gc);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(zs),...this.injector.get(mc,[])]));this.chain=n.reduceRight((o,r)=>jh(o,r,this.injector),Uh)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(Bn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(oe(ki),oe(Xt))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var $h=/^\)\]\}',?\n/,Hh=RegExp(`^${pc}:`,"m");function Gh(t){return"responseURL"in t&&t.responseURL?t.responseURL:Hh.test(t.getAllResponseHeaders())?t.getResponseHeader(pc):null}var Bs=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new me(-2800,!1);let n=this.xhrFactory;return K(null).pipe(Re(()=>new Ho(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((I,O)=>s.setRequestHeader(I,O.join(","))),e.headers.has(dc)||s.setRequestHeader(dc,Nh),!e.headers.has(uc)){let I=e.detectContentTypeHeader();I!==null&&s.setRequestHeader(uc,I)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();s.responseType=I!=="json"?I:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let I=s.statusText||"OK",O=new rn(s.getAllResponseHeaders()),$=Gh(s)||e.url;return l=new lr({headers:O,status:s.status,statusText:I,url:$}),l},h=()=>{let{headers:I,status:O,statusText:$,url:ue}=c(),ye=null;O!==Bh&&(ye=typeof s.response>"u"?s.responseText:s.response),O===0&&(O=ye?Vh:0);let Fe=O>=200&&O<300;if(e.responseType==="json"&&typeof ye=="string"){let He=ye;ye=ye.replace($h,"");try{ye=ye!==""?JSON.parse(ye):null}catch(Pn){ye=He,Fe&&(Fe=!1,ye={error:Pn,text:ye})}}Fe?(r.next(new Pi({body:ye,headers:I,status:O,statusText:$,url:ue||void 0})),r.complete()):r.error(new qn({error:ye,headers:I,status:O,statusText:$,url:ue||void 0}))},m=I=>{let{url:O}=c(),$=new qn({error:I,status:s.status||0,statusText:s.statusText||"Unknown Error",url:O||void 0});r.error($)},y=m;e.timeout&&(y=I=>{let{url:O}=c(),$=new qn({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:O||void 0});r.error($)});let b=!1,x=I=>{b||(r.next(c()),b=!0);let O={type:_n.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(O.total=I.total),e.responseType==="text"&&s.responseText&&(O.partialText=s.responseText),r.next(O)},B=I=>{let O={type:_n.UploadProgress,loaded:I.loaded};I.lengthComputable&&(O.total=I.total),r.next(O)};return s.addEventListener("load",h),s.addEventListener("error",m),s.addEventListener("timeout",y),s.addEventListener("abort",m),e.reportProgress&&(s.addEventListener("progress",x),a!==null&&s.upload&&s.upload.addEventListener("progress",B)),s.send(a),r.next({type:_n.Sent}),()=>{s.removeEventListener("error",m),s.removeEventListener("abort",m),s.removeEventListener("load",h),s.removeEventListener("timeout",y),e.reportProgress&&(s.removeEventListener("progress",x),a!==null&&s.upload&&s.upload.removeEventListener("progress",B)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(oe(vn))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),yc=new de(""),Wh="XSRF-TOKEN",qh=new de("",{providedIn:"root",factory:()=>Wh}),Kh="X-XSRF-TOKEN",Qh=new de("",{providedIn:"root",factory:()=>Kh}),Ni=class{},Zh=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ai(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(oe(Se),oe(qh))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function Yh(t,i){let e=t.url.toLowerCase();if(!f(yc)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=f(Ni).getToken(),o=f(Qh);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}var Us=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Us||{});function Xh(t,i){return{\u0275kind:t,\u0275providers:i}}function Jh(...t){let i=[ur,Bs,cr,{provide:Kn,useExisting:cr},{provide:ki,useFactory:()=>f(zh,{optional:!0})??f(Bs)},{provide:zs,useValue:Yh,multi:!0},{provide:yc,useValue:!0},{provide:Ni,useClass:Zh}];for(let e of t)i.push(...e.\u0275providers);return zn(i)}function ef(t){return Xh(Us.Interceptors,t.map(i=>({provide:zs,useValue:i,multi:!0})))}var bc=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(oe(Se))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ie="primary",Xi=Symbol("RouteTitle"),Ws=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Sn(t){return new Ws(t)}function Ic(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let o={};for(let r=0;r<n.length;r++){let s=n[r],a=t[r];if(s[0]===":")o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:t.slice(0,n.length),posParams:o}}function nf(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Rt(t[e],i[e]))return!1;return!0}function Rt(t,i){let e=t?qs(t):void 0,n=i?qs(i):void 0;if(!e||!n||e.length!=n.length)return!1;let o;for(let r=0;r<e.length;r++)if(o=e[r],!xc(t[o],i[o]))return!1;return!0}function qs(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function xc(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((o,r)=>n[r]===o)}else return t===i}function Tc(t){return t.length>0?t[t.length-1]:null}function Wt(t){return nl(t)?t:jn(t)?Xe(Promise.resolve(t)):K(t)}var of={exact:Ac,subset:Oc},Mc={exact:rf,subset:sf,ignored:()=>!0};function vc(t,i,e){return of[e.paths](t.root,i.root,e.matrixParams)&&Mc[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function rf(t,i){return Rt(t,i)}function Ac(t,i,e){if(!Cn(t.segments,i.segments)||!hr(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Ac(t.children[n],i.children[n],e))return!1;return!0}function sf(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>xc(t[e],i[e]))}function Oc(t,i,e){return Rc(t,i,i.segments,e)}function Rc(t,i,e,n){if(t.segments.length>e.length){let o=t.segments.slice(0,e.length);return!(!Cn(o,e)||i.hasChildren()||!hr(o,e,n))}else if(t.segments.length===e.length){if(!Cn(t.segments,e)||!hr(t.segments,e,n))return!1;for(let o in i.children)if(!t.children[o]||!Oc(t.children[o],i.children[o],n))return!1;return!0}else{let o=e.slice(0,t.segments.length),r=e.slice(t.segments.length);return!Cn(t.segments,o)||!hr(t.segments,o,n)||!t.children[ie]?!1:Rc(t.children[ie],i,r,n)}}function hr(t,i,e){return i.every((n,o)=>Mc[e](t[o].parameters,n.parameters))}var Lt=class{root;queryParams;fragment;_queryParamMap;constructor(i=new be([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Sn(this.queryParams),this._queryParamMap}toString(){return cf.serialize(this)}},be=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return fr(this)}},sn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Sn(this.parameters),this._parameterMap}toString(){return Lc(this)}};function af(t,i){return Cn(t,i)&&t.every((e,n)=>Rt(e.parameters,i[n].parameters))}function Cn(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function lf(t,i){let e=[];return Object.entries(t.children).forEach(([n,o])=>{n===ie&&(e=e.concat(i(o,n)))}),Object.entries(t.children).forEach(([n,o])=>{n!==ie&&(e=e.concat(i(o,n)))}),e}var Ji=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>new Dn,providedIn:"root"})}return t})(),Dn=class{parse(i){let e=new Qs(i);return new Lt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Vi(i.root,!0)}`,n=pf(i.queryParams),o=typeof i.fragment=="string"?`#${uf(i.fragment)}`:"";return`${e}${n}${o}`}},cf=new Dn;function fr(t){return t.segments.map(i=>Lc(i)).join("/")}function Vi(t,i){if(!t.hasChildren())return fr(t);if(i){let e=t.children[ie]?Vi(t.children[ie],!1):"",n=[];return Object.entries(t.children).forEach(([o,r])=>{o!==ie&&n.push(`${o}:${Vi(r,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=lf(t,(n,o)=>o===ie?[Vi(t.children[ie],!1)]:[`${o}:${Vi(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[ie]!=null?`${fr(t)}/${e[0]}`:`${fr(t)}/(${e.join("//")})`}}function Fc(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function dr(t){return Fc(t).replace(/%3B/gi,";")}function uf(t){return encodeURI(t)}function Ks(t){return Fc(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function mr(t){return decodeURIComponent(t)}function _c(t){return mr(t.replace(/\+/g,"%20"))}function Lc(t){return`${Ks(t.path)}${df(t.parameters)}`}function df(t){return Object.entries(t).map(([i,e])=>`;${Ks(i)}=${Ks(e)}`).join("")}function pf(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(o=>`${dr(e)}=${dr(o)}`).join("&"):`${dr(e)}=${dr(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var hf=/^[^\/()?;#]+/;function js(t){let i=t.match(hf);return i?i[0]:""}var ff=/^[^\/()?;=#]+/;function mf(t){let i=t.match(ff);return i?i[0]:""}var gf=/^[^=?&#]+/;function yf(t){let i=t.match(gf);return i?i[0]:""}var bf=/^[^&#]+/;function vf(t){let i=t.match(bf);return i?i[0]:""}var Qs=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new be([],{}):new be([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[ie]=new be(i,e)),n}parseSegment(){let i=js(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new me(4009,!1);return this.capture(i),new sn(mr(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=mf(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=js(this.remaining);o&&(n=o,this.capture(n))}i[mr(e)]=mr(n)}parseQueryParam(i){let e=yf(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=vf(this.remaining);s&&(n=s,this.capture(n))}let o=_c(e),r=_c(n);if(i.hasOwnProperty(o)){let s=i[o];Array.isArray(s)||(s=[s],i[o]=s),s.push(r)}else i[o]=r}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=js(this.remaining),o=this.remaining[n.length];if(o!=="/"&&o!==")"&&o!==";")throw new me(4010,!1);let r;n.indexOf(":")>-1?(r=n.slice(0,n.indexOf(":")),this.capture(r),this.capture(":")):i&&(r=ie);let s=this.parseChildren();e[r]=Object.keys(s).length===1?s[ie]:new be([],s),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new me(4011,!1)}};function kc(t){return t.segments.length>0?new be([],{[ie]:t}):t}function Pc(t){let i={};for(let[n,o]of Object.entries(t.children)){let r=Pc(o);if(n===ie&&r.segments.length===0&&r.hasChildren())for(let[s,a]of Object.entries(r.children))i[s]=a;else(r.segments.length>0||r.hasChildren())&&(i[n]=r)}let e=new be(t.segments,i);return _f(e)}function _f(t){if(t.numberOfChildren===1&&t.children[ie]){let i=t.children[ie];return new be(t.segments.concat(i.segments),i.children)}return t}function an(t){return t instanceof Lt}function Nc(t,i,e=null,n=null){let o=Vc(t);return Bc(o,i,e,n)}function Vc(t){let i;function e(r){let s={};for(let l of r.children){let c=e(l);s[l.outlet]=c}let a=new be(r.url,s);return r===t&&(i=a),a}let n=e(t.root),o=kc(n);return i??o}function Bc(t,i,e,n){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return $s(o,o,o,e,n);let r=Cf(i);if(r.toRoot())return $s(o,o,new be([],{}),e,n);let s=wf(r,o,t),a=s.processChildren?zi(s.segmentGroup,s.index,r.commands):Uc(s.segmentGroup,s.index,r.commands);return $s(o,s.segmentGroup,a,e,n)}function gr(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function $i(t){return typeof t=="object"&&t!=null&&t.outlets}function $s(t,i,e,n,o){let r={};n&&Object.entries(n).forEach(([l,c])=>{r[l]=Array.isArray(c)?c.map(h=>`${h}`):`${c}`});let s;t===i?s=e:s=zc(t,i,e);let a=kc(Pc(s));return new Lt(a,r,o)}function zc(t,i,e){let n={};return Object.entries(t.children).forEach(([o,r])=>{r===i?n[o]=e:n[o]=zc(r,i,e)}),new be(t.segments,n)}var yr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&gr(n[0]))throw new me(4003,!1);let o=n.find($i);if(o&&o!==Tc(n))throw new me(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Cf(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new yr(!0,0,t);let i=0,e=!1,n=t.reduce((o,r,s)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let a={};return Object.entries(r.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...o,{outlets:a}]}if(r.segmentPath)return[...o,r.segmentPath]}return typeof r!="string"?[...o,r]:s===0?(r.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?i++:a!=""&&o.push(a))}),o):[...o,r]},[]);return new yr(e,i,n)}var Xn=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function wf(t,i,e){if(t.isAbsolute)return new Xn(i,!0,0);if(!e)return new Xn(i,!1,NaN);if(e.parent===null)return new Xn(e,!0,0);let n=gr(t.commands[0])?0:1,o=e.segments.length-1+n;return Sf(e,o,t.numberOfDoubleDots)}function Sf(t,i,e){let n=t,o=i,r=e;for(;r>o;){if(r-=o,n=n.parent,!n)throw new me(4005,!1);o=n.segments.length}return new Xn(n,!1,o-r)}function Df(t){return $i(t[0])?t[0].outlets:{[ie]:t}}function Uc(t,i,e){if(t??=new be([],{}),t.segments.length===0&&t.hasChildren())return zi(t,i,e);let n=Ef(t,i,e),o=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let r=new be(t.segments.slice(0,n.pathIndex),{});return r.children[ie]=new be(t.segments.slice(n.pathIndex),t.children),zi(r,0,o)}else return n.match&&o.length===0?new be(t.segments,{}):n.match&&!t.hasChildren()?Zs(t,i,e):n.match?zi(t,0,o):Zs(t,i,e)}function zi(t,i,e){if(e.length===0)return new be(t.segments,{});{let n=Df(e),o={};if(Object.keys(n).some(r=>r!==ie)&&t.children[ie]&&t.numberOfChildren===1&&t.children[ie].segments.length===0){let r=zi(t.children[ie],i,e);return new be(t.segments,r.children)}return Object.entries(n).forEach(([r,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[r]=Uc(t.children[r],i,s))}),Object.entries(t.children).forEach(([r,s])=>{n[r]===void 0&&(o[r]=s)}),new be(t.segments,o)}}function Ef(t,i,e){let n=0,o=i,r={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(n>=e.length)return r;let s=t.segments[o],a=e[n];if($i(a))break;let l=`${a}`,c=n<e.length-1?e[n+1]:null;if(o>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!wc(l,c,s))return r;n+=2}else{if(!wc(l,{},s))return r;n++}o++}return{match:!0,pathIndex:o,commandIndex:n}}function Zs(t,i,e){let n=t.segments.slice(0,i),o=0;for(;o<e.length;){let r=e[o];if($i(r)){let l=If(r.outlets);return new be(n,l)}if(o===0&&gr(e[0])){let l=t.segments[i];n.push(new sn(l.path,Cc(e[0]))),o++;continue}let s=$i(r)?r.outlets[ie]:`${r}`,a=o<e.length-1?e[o+1]:null;s&&a&&gr(a)?(n.push(new sn(s,Cc(a))),o+=2):(n.push(new sn(s,{})),o++)}return new be(n,{})}function If(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=Zs(new be([],{}),0,n))}),i}function Cc(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function wc(t,i,e){return t==e.path&&Rt(i,e.parameters)}var Ui="imperative",$e=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})($e||{}),it=class{id;url;constructor(i,e){this.id=i,this.url=e}},En=class extends it{type=$e.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",o=null){super(i,e),this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},kt=class extends it{urlAfterRedirects;type=$e.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ze=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ze||{}),Hi=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Hi||{}),Ft=class extends it{reason;code;type=$e.NavigationCancel;constructor(i,e,n,o){super(i,e),this.reason=n,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ht=class extends it{reason;code;type=$e.NavigationSkipped;constructor(i,e,n,o){super(i,e),this.reason=n,this.code=o}},ei=class extends it{error;target;type=$e.NavigationError;constructor(i,e,n,o){super(i,e),this.error=n,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Gi=class extends it{urlAfterRedirects;state;type=$e.RoutesRecognized;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},br=class extends it{urlAfterRedirects;state;type=$e.GuardsCheckStart;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vr=class extends it{urlAfterRedirects;state;shouldActivate;type=$e.GuardsCheckEnd;constructor(i,e,n,o,r){super(i,e),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},_r=class extends it{urlAfterRedirects;state;type=$e.ResolveStart;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cr=class extends it{urlAfterRedirects;state;type=$e.ResolveEnd;constructor(i,e,n,o){super(i,e),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wr=class{route;type=$e.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Sr=class{route;type=$e.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Dr=class{snapshot;type=$e.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Er=class{snapshot;type=$e.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ir=class{snapshot;type=$e.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xr=class{snapshot;type=$e.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Wi=class{},ti=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function xf(t){return!(t instanceof Wi)&&!(t instanceof ti)}function Tf(t,i){return t.providers&&!t._injector&&(t._injector=ys(t.providers,i,`Route: ${t.path}`)),t._injector??i}function vt(t){return t.outlet||ie}function Mf(t,i){let e=t.filter(n=>vt(n)===i);return e.push(...t.filter(n=>vt(n)!==i)),e}function oi(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Tr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return oi(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new ri(this.rootInjector)}},ri=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let o=this.getOrCreateContext(e);o.outlet=n,this.contexts.set(e,o)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Tr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(oe(Xt))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Ys(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Ys(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Xs(i,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==i)}pathFromRoot(i){return Xs(i,this._root).map(e=>e.value)}};function Ys(t,i){if(t===i.value)return i;for(let e of i.children){let n=Ys(t,e);if(n)return n}return null}function Xs(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Xs(t,e);if(n.length)return n.unshift(i),n}return[]}var nt=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Yn(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var qi=class extends Mr{snapshot;constructor(i,e){super(i),this.snapshot=e,sa(this,i)}toString(){return this.snapshot.toString()}};function jc(t){let i=Af(t),e=new Ye([new sn("",{})]),n=new Ye({}),o=new Ye({}),r=new Ye({}),s=new Ye(""),a=new Gt(e,n,r,s,o,ie,t,i.root);return a.snapshot=i.root,new qi(new nt(a,[]),i)}function Af(t){let i={},e={},n={},r=new wn([],i,n,"",e,ie,t,null,{});return new Ki("",new nt(r,[]))}var Gt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,o,r,s,a,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=o,this.dataSubject=r,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(he(c=>c[Xi]))??K(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=o,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(he(i=>Sn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(he(i=>Sn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ar(t,i,e="emptyOnly"){let n,{routeConfig:o}=t;return i!==null&&(e==="always"||o?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:S(S({},i.params),t.params),data:S(S({},i.data),t.data),resolve:S(S(S(S({},t.data),i.data),o?.data),t._resolvedData)}:n={params:S({},t.params),data:S({},t.data),resolve:S(S({},t.data),t._resolvedData??{})},o&&Hc(o)&&(n.resolve[Xi]=o.title),n}var wn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Xi]}constructor(i,e,n,o,r,s,a,l,c){this.url=i,this.params=e,this.queryParams=n,this.fragment=o,this.data=r,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Sn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Sn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Ki=class extends Mr{url;constructor(i,e){super(e),this.url=i,sa(this,e)}toString(){return $c(this._root)}};function sa(t,i){i.value._routerState=t,i.children.forEach(e=>sa(t,e))}function $c(t){let i=t.children.length>0?` { ${t.children.map($c).join(", ")} } `:"";return`${t.value}${i}`}function Hs(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Rt(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Rt(i.params,e.params)||t.paramsSubject.next(e.params),nf(i.url,e.url)||t.urlSubject.next(e.url),Rt(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Js(t,i){let e=Rt(t.params,i.params)&&af(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||Js(t.parent,i.parent))}function Hc(t){return typeof t.title=="string"||t.title===null}var Gc=new de(""),aa=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ie;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=z(void 0);parentContexts=f(ri);location=f(tn);changeDetector=f(jt);inputBinder=f(eo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:o}=e.name;if(n)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new me(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new me(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new me(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new me(4013,!1);this._activatedRoute=e;let o=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new ea(e,a,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=pe({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Le]})}return t})(),ea=class{route;childContexts;parent;outletData;constructor(i,e,n,o){this.route=i,this.childContexts=e,this.parent=n,this.outletData=o}get(i,e){return i===Gt?this.route:i===ri?this.childContexts:i===Gc?this.outletData:this.parent.get(i,e)}},eo=new de(""),la=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,o=Nn([n.queryParams,n.params,n.data]).pipe(Re(([r,s,a],l)=>(a=S(S(S({},r),s),a),l===0?K(a):Promise.resolve(a)))).subscribe(r=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let s=Bl(n.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,r[a])});this.outletDataSubscriptions.set(e,o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),ca=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=v({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,o){n&1&&T(0,"router-outlet")},dependencies:[aa],encapsulation:2})}return t})();function ua(t){let i=t.children&&t.children.map(ua),e=i?_e(S({},t),{children:i}):S({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==ie&&(e.component=ca),e}function Of(t,i,e){let n=Qi(t,i._root,e?e._root:void 0);return new qi(n,i)}function Qi(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let o=Rf(t,i,e);return new nt(n,o)}else{if(t.shouldAttach(i.value)){let r=t.retrieve(i.value);if(r!==null){let s=r.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(a=>Qi(t,a)),s}}let n=Ff(i.value),o=i.children.map(r=>Qi(t,r));return new nt(n,o)}}function Rf(t,i,e){return i.children.map(n=>{for(let o of e.children)if(t.shouldReuseRoute(n.value,o.value.snapshot))return Qi(t,n,o);return Qi(t,n)})}function Ff(t){return new Gt(new Ye(t.url),new Ye(t.params),new Ye(t.queryParams),new Ye(t.fragment),new Ye(t.data),t.outlet,t.component,t)}var ni=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Wc="ngNavigationCancelingError";function Or(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=an(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,o=qc(!1,Ze.Redirect);return o.url=e,o.navigationBehaviorOptions=n,o}function qc(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Wc]=!0,e.cancellationCode=i,e}function Lf(t){return Kc(t)&&an(t.url)}function Kc(t){return!!t&&t[Wc]}var kf=(t,i,e,n)=>he(o=>(new ta(i,o.targetRouterState,o.currentRouterState,e,n).activate(t),o)),ta=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,o,r){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=o,this.inputBindingEnabled=r}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Hs(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let o=Yn(e);i.children.forEach(r=>{let s=r.value.outlet;this.deactivateRoutes(r,o[s],n),delete o[s]}),Object.values(o).forEach(r=>{this.deactivateRouteAndItsChildren(r,n)})}deactivateRoutes(i,e,n){let o=i.value,r=e?e.value:null;if(o===r)if(o.component){let s=n.getContext(o.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,n);else r&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),o=n&&i.value.component?n.children:e,r=Yn(i);for(let s of Object.values(r))this.deactivateRouteAndItsChildren(s,o);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:a})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),o=n&&i.value.component?n.children:e,r=Yn(i);for(let s of Object.values(r))this.deactivateRouteAndItsChildren(s,o);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let o=Yn(e);i.children.forEach(r=>{this.activateRoutes(r,o[r.value.outlet],n),this.forwardEvent(new xr(r.value.snapshot))}),i.children.length&&this.forwardEvent(new Er(i.value.snapshot))}activateRoutes(i,e,n){let o=i.value,r=e?e.value:null;if(Hs(o),o===r)if(o.component){let s=n.getOrCreateContext(o.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,n);else if(o.component){let s=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Hs(a.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,n)}},Rr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Jn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Pf(t,i,e){let n=t._root,o=i?i._root:null;return Bi(n,o,e,[n.value])}function Nf(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function si(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!ul(t)?t:i.get(t):n}function Bi(t,i,e,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=Yn(i);return t.children.forEach(s=>{Vf(s,r[s.value.outlet],e,n.concat([s.value]),o),delete r[s.value.outlet]}),Object.entries(r).forEach(([s,a])=>ji(a,e.getContext(s),o)),o}function Vf(t,i,e,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let r=t.value,s=i?i.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&r.routeConfig===s.routeConfig){let l=Bf(s,r,r.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new Rr(n)):(r.data=s.data,r._resolvedData=s._resolvedData),r.component?Bi(t,i,a?a.children:null,n,o):Bi(t,i,e,n,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new Jn(a.outlet.component,s))}else s&&ji(i,a,o),o.canActivateChecks.push(new Rr(n)),r.component?Bi(t,null,a?a.children:null,n,o):Bi(t,null,e,n,o);return o}function Bf(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!Cn(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Cn(t.url,i.url)||!Rt(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Js(t,i)||!Rt(t.queryParams,i.queryParams);case"paramsChange":default:return!Js(t,i)}}function ji(t,i,e){let n=Yn(t),o=t.value;Object.entries(n).forEach(([r,s])=>{o.component?i?ji(s,i.children.getContext(r),e):ji(s,null,e):ji(s,i,e)}),o.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Jn(i.outlet.component,o)):e.canDeactivateChecks.push(new Jn(null,o)):e.canDeactivateChecks.push(new Jn(null,o))}function to(t){return typeof t=="function"}function zf(t){return typeof t=="boolean"}function Uf(t){return t&&to(t.canLoad)}function jf(t){return t&&to(t.canActivate)}function $f(t){return t&&to(t.canActivateChild)}function Hf(t){return t&&to(t.canDeactivate)}function Gf(t){return t&&to(t.canMatch)}function Qc(t){return t instanceof il||t?.name==="EmptyError"}var pr=Symbol("INITIAL_VALUE");function ii(){return Re(t=>Nn(t.map(i=>i.pipe(Vn(1),cl(pr)))).pipe(he(i=>{for(let e of i)if(e!==!0){if(e===pr)return pr;if(e===!1||Wf(e))return e}return!0}),Ut(i=>i!==pr),Vn(1)))}function Wf(t){return an(t)||t instanceof ni}function qf(t,i){return st(e=>{let{targetSnapshot:n,currentSnapshot:o,guards:{canActivateChecks:r,canDeactivateChecks:s}}=e;return s.length===0&&r.length===0?K(_e(S({},e),{guardsResult:!0})):Kf(s,n,o,t).pipe(st(a=>a&&zf(a)?Qf(n,r,t,i):K(a)),he(a=>_e(S({},e),{guardsResult:a})))})}function Kf(t,i,e,n){return Xe(t).pipe(st(o=>em(o.component,o.route,e,i,n)),Zt(o=>o!==!0,!0))}function Qf(t,i,e,n){return Xe(i).pipe(pn(o=>ol(Yf(o.route.parent,n),Zf(o.route,n),Jf(t,o.path,e),Xf(t,o.route,e))),Zt(o=>o!==!0,!0))}function Zf(t,i){return t!==null&&i&&i(new Ir(t)),K(!0)}function Yf(t,i){return t!==null&&i&&i(new Dr(t)),K(!0)}function Xf(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return K(!0);let o=n.map(r=>Go(()=>{let s=oi(i)??e,a=si(r,s),l=jf(a)?a.canActivate(i,t):Je(s,()=>a(i,t));return Wt(l).pipe(Zt())}));return K(o).pipe(ii())}function Jf(t,i,e){let n=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(s=>Nf(s)).filter(s=>s!==null).map(s=>Go(()=>{let a=s.guards.map(l=>{let c=oi(s.node)??e,h=si(l,c),m=$f(h)?h.canActivateChild(n,t):Je(c,()=>h(n,t));return Wt(m).pipe(Zt())});return K(a).pipe(ii())}));return K(r).pipe(ii())}function em(t,i,e,n,o){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return K(!0);let s=r.map(a=>{let l=oi(i)??o,c=si(a,l),h=Hf(c)?c.canDeactivate(t,i,e,n):Je(l,()=>c(t,i,e,n));return Wt(h).pipe(Zt())});return K(s).pipe(ii())}function tm(t,i,e,n){let o=i.canLoad;if(o===void 0||o.length===0)return K(!0);let r=o.map(s=>{let a=si(s,t),l=Uf(a)?a.canLoad(i,e):Je(t,()=>a(i,e));return Wt(l)});return K(r).pipe(ii(),Zc(n))}function Zc(t){return tl(Ue(i=>{if(typeof i!="boolean")throw Or(t,i)}),he(i=>i===!0))}function nm(t,i,e,n){let o=i.canMatch;if(!o||o.length===0)return K(!0);let r=o.map(s=>{let a=si(s,t),l=Gf(a)?a.canMatch(i,e):Je(t,()=>a(i,e));return Wt(l)});return K(r).pipe(ii(),Zc(n))}var Zi=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},Yi=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function Zn(t){return xi(new Zi(t))}function im(t){return xi(new me(4e3,!1))}function om(t){return xi(qc(!1,Ze.GuardRejected))}var na=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],o=e.root;for(;;){if(n=n.concat(o.segments),o.numberOfChildren===0)return K(n);if(o.numberOfChildren>1||!o.children[ie])return im(`${i.redirectTo}`);o=o.children[ie]}}applyRedirectCommands(i,e,n,o,r){return rm(e,o,r).pipe(he(s=>{if(s instanceof Lt)throw new Yi(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),i,n);if(s[0]==="/")throw new Yi(a);return a}))}applyRedirectCreateUrlTree(i,e,n,o){let r=this.createSegmentGroup(i,e.root,n,o);return new Lt(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([o,r])=>{if(typeof r=="string"&&r[0]===":"){let a=r.substring(1);n[o]=e[a]}else n[o]=r}),n}createSegmentGroup(i,e,n,o){let r=this.createSegments(i,e.segments,n,o),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(i,l,n,o)}),new be(r,s)}createSegments(i,e,n,o){return e.map(r=>r.path[0]===":"?this.findPosParam(i,r,o):this.findOrReturn(r,n))}findPosParam(i,e,n){let o=n[e.path.substring(1)];if(!o)throw new me(4001,!1);return o}findOrReturn(i,e){let n=0;for(let o of e){if(o.path===i.path)return e.splice(n),o;n++}return i}};function rm(t,i,e){if(typeof t=="string")return K(t);let n=t,{queryParams:o,fragment:r,routeConfig:s,url:a,outlet:l,params:c,data:h,title:m}=i;return Wt(Je(e,()=>n({params:c,data:h,queryParams:o,fragment:r,routeConfig:s,url:a,outlet:l,title:m})))}var ia={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function sm(t,i,e,n,o){let r=Yc(t,i,e);return r.matched?(n=Tf(i,n),nm(n,i,e,o).pipe(he(s=>s===!0?r:S({},ia)))):K(r)}function Yc(t,i,e){if(i.path==="**")return am(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?S({},ia):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let o=(i.matcher||Ic)(e,t,i);if(!o)return S({},ia);let r={};Object.entries(o.posParams??{}).forEach(([a,l])=>{r[a]=l.path});let s=o.consumed.length>0?S(S({},r),o.consumed[o.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:o.consumed,remainingSegments:e.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function am(t){return{matched:!0,parameters:t.length>0?Tc(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function Sc(t,i,e,n){return e.length>0&&um(t,e,n)?{segmentGroup:new be(i,cm(n,new be(e,t.children))),slicedSegments:[]}:e.length===0&&dm(t,e,n)?{segmentGroup:new be(t.segments,lm(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new be(t.segments,t.children),slicedSegments:e}}function lm(t,i,e,n){let o={};for(let r of e)if(Lr(t,i,r)&&!n[vt(r)]){let s=new be([],{});o[vt(r)]=s}return S(S({},n),o)}function cm(t,i){let e={};e[ie]=i;for(let n of t)if(n.path===""&&vt(n)!==ie){let o=new be([],{});e[vt(n)]=o}return e}function um(t,i,e){return e.some(n=>Lr(t,i,n)&&vt(n)!==ie)}function dm(t,i,e){return e.some(n=>Lr(t,i,n))}function Lr(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pm(t,i,e){return i.length===0&&!t.children[e]}var oa=class{};function hm(t,i,e,n,o,r,s="emptyOnly"){return new ra(t,i,e,n,o,s,r).recognize()}var fm=31,ra=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,o,r,s,a){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=o,this.urlTree=r,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new na(this.urlSerializer,this.urlTree)}noMatchError(i){return new me(4002,`'${i.segmentGroup}'`)}recognize(){let i=Sc(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(he(({children:e,rootSnapshot:n})=>{let o=new nt(n,e),r=new Ki("",o),s=Nc(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(s),{state:r,tree:s}}))}match(i){let e=new wn([],Object.freeze({}),Object.freeze(S({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ie,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,ie,e).pipe(he(n=>({children:n,rootSnapshot:e})),at(n=>{if(n instanceof Yi)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Zi?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,o,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,r):this.processSegment(i,e,n,n.segments,o,!0,r).pipe(he(s=>s instanceof nt?[s]:[]))}processChildren(i,e,n,o){let r=[];for(let s of Object.keys(n.children))s==="primary"?r.unshift(s):r.push(s);return Xe(r).pipe(pn(s=>{let a=n.children[s],l=Mf(e,s);return this.processSegmentGroup(i,l,a,s,o)}),ll((s,a)=>(s.push(...a),s)),cs(null),al(),st(s=>{if(s===null)return Zn(n);let a=Xc(s);return mm(a),K(a)}))}processSegment(i,e,n,o,r,s,a){return Xe(e).pipe(pn(l=>this.processSegmentAgainstRoute(l._injector??i,e,l,n,o,r,s,a).pipe(at(c=>{if(c instanceof Zi)return K(null);throw c}))),Zt(l=>!!l),at(l=>{if(Qc(l))return pm(n,o,r)?K(new oa):Zn(n);throw l}))}processSegmentAgainstRoute(i,e,n,o,r,s,a,l){return vt(n)!==s&&(s===ie||!Lr(o,r,n))?Zn(o):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,o,n,r,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(i,o,e,n,r,s,l):Zn(o)}expandSegmentAgainstRouteUsingRedirect(i,e,n,o,r,s,a){let{matched:l,parameters:c,consumedSegments:h,positionalParamSegments:m,remainingSegments:y}=Yc(e,o,r);if(!l)return Zn(e);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>fm&&(this.allowRedirects=!1));let b=new wn(r,c,Object.freeze(S({},this.urlTree.queryParams)),this.urlTree.fragment,Dc(o),vt(o),o.component??o._loadedComponent??null,o,Ec(o)),x=Ar(b,a,this.paramsInheritanceStrategy);return b.params=Object.freeze(x.params),b.data=Object.freeze(x.data),this.applyRedirects.applyRedirectCommands(h,o.redirectTo,m,b,i).pipe(Re(I=>this.applyRedirects.lineralizeSegments(o,I)),st(I=>this.processSegment(i,n,e,I.concat(y),s,!1,a)))}matchSegmentAgainstRoute(i,e,n,o,r,s){let a=sm(e,n,o,i,this.urlSerializer);return n.path==="**"&&(e.children={}),a.pipe(Re(l=>l.matched?(i=n._injector??i,this.getChildConfig(i,n,o).pipe(Re(({routes:c})=>{let h=n._loadedInjector??i,{parameters:m,consumedSegments:y,remainingSegments:b}=l,x=new wn(y,m,Object.freeze(S({},this.urlTree.queryParams)),this.urlTree.fragment,Dc(n),vt(n),n.component??n._loadedComponent??null,n,Ec(n)),B=Ar(x,s,this.paramsInheritanceStrategy);x.params=Object.freeze(B.params),x.data=Object.freeze(B.data);let{segmentGroup:I,slicedSegments:O}=Sc(e,y,b,c);if(O.length===0&&I.hasChildren())return this.processChildren(h,c,I,x).pipe(he(ue=>new nt(x,ue)));if(c.length===0&&O.length===0)return K(new nt(x,[]));let $=vt(n)===r;return this.processSegment(h,c,I,O,$?ie:r,!0,x).pipe(he(ue=>new nt(x,ue instanceof nt?[ue]:[])))}))):Zn(e)))}getChildConfig(i,e,n){return e.children?K({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?K({routes:e._loadedRoutes,injector:e._loadedInjector}):tm(i,e,n,this.urlSerializer).pipe(st(o=>o?this.configLoader.loadChildren(i,e).pipe(Ue(r=>{e._loadedRoutes=r.routes,e._loadedInjector=r.injector})):om(e))):K({routes:[],injector:i})}};function mm(t){t.sort((i,e)=>i.value.outlet===ie?-1:e.value.outlet===ie?1:i.value.outlet.localeCompare(e.value.outlet))}function gm(t){let i=t.value.routeConfig;return i&&i.path===""}function Xc(t){let i=[],e=new Set;for(let n of t){if(!gm(n)){i.push(n);continue}let o=i.find(r=>n.value.routeConfig===r.value.routeConfig);o!==void 0?(o.children.push(...n.children),e.add(o)):i.push(n)}for(let n of e){let o=Xc(n.children);i.push(new nt(n.value,o))}return i.filter(n=>!e.has(n))}function Dc(t){return t.data||{}}function Ec(t){return t.resolve||{}}function ym(t,i,e,n,o,r){return st(s=>hm(t,i,e,n,s.extractedUrl,o,r).pipe(he(({state:a,tree:l})=>_e(S({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function bm(t,i){return st(e=>{let{targetSnapshot:n,guards:{canActivateChecks:o}}=e;if(!o.length)return K(e);let r=new Set(o.map(l=>l.route)),s=new Set;for(let l of r)if(!s.has(l))for(let c of Jc(l))s.add(c);let a=0;return Xe(s).pipe(pn(l=>r.has(l)?vm(l,n,t,i):(l.data=Ar(l,l.parent,t).resolve,K(void 0))),Ue(()=>a++),us(1),st(l=>a===s.size?K(e):qe))})}function Jc(t){let i=t.children.map(e=>Jc(e)).flat();return[t,...i]}function vm(t,i,e,n){let o=t.routeConfig,r=t._resolve;return o?.title!==void 0&&!Hc(o)&&(r[Xi]=o.title),Go(()=>(t.data=Ar(t,t.parent,e).resolve,_m(r,t,i,n).pipe(he(s=>(t._resolvedData=s,t.data=S(S({},t.data),s),null)))))}function _m(t,i,e,n){let o=qs(t);if(o.length===0)return K({});let r={};return Xe(o).pipe(st(s=>Cm(t[s],i,e,n).pipe(Zt(),Ue(a=>{if(a instanceof ni)throw Or(new Dn,a);r[s]=a}))),us(1),he(()=>r),at(s=>Qc(s)?qe:xi(s)))}function Cm(t,i,e,n){let o=oi(i)??n,r=si(t,o),s=r.resolve?r.resolve(i,e):Je(o,()=>r(i,e));return Wt(s)}function Gs(t){return Re(i=>{let e=t(i);return e?Xe(e).pipe(he(()=>i)):K(i)})}var da=(()=>{class t{buildTitle(e){let n,o=e.root;for(;o!==void 0;)n=this.getResolvedTitleForRoute(o)??n,o=o.children.find(r=>r.outlet===ie);return n}getResolvedTitleForRoute(e){return e.data[Xi]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(eu),providedIn:"root"})}return t})(),eu=(()=>{class t extends da{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(oe(bc))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ai=new de("",{providedIn:"root",factory:()=>({})}),no=new de(""),tu=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=f(Ll);loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return K(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let o=Wt(Je(e,()=>n.loadComponent())).pipe(he(iu),Re(ou),Ue(s=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s}),Bn(()=>{this.componentLoaders.delete(n)})),r=new ls(o,()=>new ze).pipe(as());return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return K({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=nu(n,this.compiler,e,this.onLoadEndListener).pipe(Bn(()=>{this.childrenLoaders.delete(n)})),s=new ls(r,()=>new ze).pipe(as());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nu(t,i,e,n){return Wt(Je(e,()=>t.loadChildren())).pipe(he(iu),Re(ou),st(o=>o instanceof Cl||Array.isArray(o)?K(o):Xe(i.compileModuleAsync(o))),he(o=>{n&&n(t);let r,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(r=o.create(e).injector,s=r.get(no,[],{optional:!0,self:!0}).flat()),{routes:s.map(ua),injector:r}}))}function wm(t){return t&&typeof t=="object"&&"default"in t}function iu(t){return wm(t)?t.default:t}function ou(t){return K(t)}var kr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(Sm),providedIn:"root"})}return t})(),Sm=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pa=new de(""),ha=new de("");function ru(t,i,e){let n=t.get(ha),o=t.get(Se);if(!o.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let r,s=new Promise(c=>{r=c}),a=o.startViewTransition(()=>(r(),Dm(t)));a.ready.catch(c=>{});let{onViewTransitionCreated:l}=n;return l&&Je(t,()=>l({transition:a,from:i,to:e})),s}function Dm(t){return new Promise(i=>{bs({read:()=>setTimeout(i)},{injector:t})})}var su=new de(""),au=(()=>{class t{currentNavigation=ee(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new ze;transitionAbortWithErrorSubject=new ze;configLoader=f(tu);environmentInjector=f(Xt);destroyRef=f(qo);urlSerializer=f(Ji);rootContexts=f(ri);location=f(Gn);inputBindingEnabled=f(eo,{optional:!0})!==null;titleStrategy=f(da);options=f(ai,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=f(kr);createViewTransition=f(pa,{optional:!0});navigationErrorHandler=f(su,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>K(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=o=>this.events.next(new wr(o)),n=o=>this.events.next(new Sr(o));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;Pe(()=>{this.transitions?.next(_e(S({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:n}))})}setupNavigations(e){return this.transitions=new Ye(null),this.transitions.pipe(Ut(n=>n!==null),Re(n=>{let o=!1;return K(n).pipe(Re(r=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Ze.SupersededByNewNavigation),qe;this.currentTransition=n,this.currentNavigation.set({id:r.id,initialUrl:r.rawUrl,extractedUrl:r.extractedUrl,targetBrowserUrl:typeof r.extras.browserUrl=="string"?this.urlSerializer.parse(r.extras.browserUrl):r.extras.browserUrl,trigger:r.source,extras:r.extras,previousNavigation:this.lastSuccessfulNavigation?_e(S({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>r.abortController.abort()});let s=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=r.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!s&&a!=="reload")return this.events.next(new Ht(r.id,this.urlSerializer.serialize(r.rawUrl),"",Hi.IgnoredSameUrlNavigation)),r.resolve(!1),qe;if(this.urlHandlingStrategy.shouldProcessUrl(r.rawUrl))return K(r).pipe(Re(l=>(this.events.next(new En(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?qe:Promise.resolve(l))),ym(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),Ue(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=l.urlAfterRedirects,h));let c=new Gi(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(r.currentRawUrl)){let{id:l,extractedUrl:c,source:h,restoredState:m,extras:y}=r,b=new En(l,this.urlSerializer.serialize(c),h,m);this.events.next(b);let x=jc(this.rootComponentType).snapshot;return this.currentTransition=n=_e(S({},r),{targetSnapshot:x,urlAfterRedirects:c,extras:_e(S({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(B=>(B.finalUrl=c,B)),K(n)}else return this.events.next(new Ht(r.id,this.urlSerializer.serialize(r.extractedUrl),"",Hi.IgnoredByUrlHandlingStrategy)),r.resolve(!1),qe}),Ue(r=>{let s=new br(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot);this.events.next(s)}),he(r=>(this.currentTransition=n=_e(S({},r),{guards:Pf(r.targetSnapshot,r.currentSnapshot,this.rootContexts)}),n)),qf(this.environmentInjector,r=>this.events.next(r)),Ue(r=>{if(n.guardsResult=r.guardsResult,r.guardsResult&&typeof r.guardsResult!="boolean")throw Or(this.urlSerializer,r.guardsResult);let s=new vr(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot,!!r.guardsResult);this.events.next(s)}),Ut(r=>r.guardsResult?!0:(this.cancelNavigationTransition(r,"",Ze.GuardRejected),!1)),Gs(r=>{if(r.guards.canActivateChecks.length!==0)return K(r).pipe(Ue(s=>{let a=new _r(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),Re(s=>{let a=!1;return K(s).pipe(bm(this.paramsInheritanceStrategy,this.environmentInjector),Ue({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",Ze.NoDataFromResolver)}}))}),Ue(s=>{let a=new Cr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),Gs(r=>{let s=a=>{let l=[];if(a.routeConfig?.loadComponent){let c=oi(a)??this.environmentInjector;l.push(this.configLoader.loadComponent(c,a.routeConfig).pipe(Ue(h=>{a.component=h}),he(()=>{})))}for(let c of a.children)l.push(...s(c));return l};return Nn(s(r.targetSnapshot.root)).pipe(cs(null),Vn(1))}),Gs(()=>this.afterPreactivation()),Re(()=>{let{currentSnapshot:r,targetSnapshot:s}=n,a=this.createViewTransition?.(this.environmentInjector,r.root,s.root);return a?Xe(a).pipe(he(()=>n)):K(n)}),he(r=>{let s=Of(e.routeReuseStrategy,r.targetSnapshot,r.currentRouterState);return this.currentTransition=n=_e(S({},r),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),n}),Ue(()=>{this.events.next(new Wi)}),kf(this.rootContexts,e.routeReuseStrategy,r=>this.events.next(r),this.inputBindingEnabled),Vn(1),ds(new Ho(r=>{let s=n.abortController.signal,a=()=>r.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(Ut(()=>!o&&!n.targetRouterState),Ue(()=>{this.cancelNavigationTransition(n,n.abortController.signal.reason+"",Ze.Aborted)}))),Ue({next:r=>{o=!0,this.lastSuccessfulNavigation=Pe(this.currentNavigation),this.events.next(new kt(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects))),this.titleStrategy?.updateTitle(r.targetRouterState.snapshot),r.resolve(!0)},complete:()=>{o=!0}}),ds(this.transitionAbortWithErrorSubject.pipe(Ue(r=>{throw r}))),Bn(()=>{o||this.cancelNavigationTransition(n,"",Ze.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),at(r=>{if(this.destroyed)return n.resolve(!1),qe;if(o=!0,Kc(r))this.events.next(new Ft(n.id,this.urlSerializer.serialize(n.extractedUrl),r.message,r.cancellationCode)),Lf(r)?this.events.next(new ti(r.url,r.navigationBehaviorOptions)):n.resolve(!1);else{let s=new ei(n.id,this.urlSerializer.serialize(n.extractedUrl),r,n.targetSnapshot??void 0);try{let a=Je(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof ni){let{message:l,cancellationCode:c}=Or(this.urlSerializer,a);this.events.next(new Ft(n.id,this.urlSerializer.serialize(n.extractedUrl),l,c)),this.events.next(new ti(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),r}catch(a){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(a)}}return qe}))}))}cancelNavigationTransition(e,n,o){let r=new Ft(e.id,this.urlSerializer.serialize(e.extractedUrl),n,o);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=Pe(this.currentNavigation),o=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==o?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Em(t){return t!==Ui}var lu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(Im),providedIn:"root"})}return t})(),Fr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},Im=(()=>{class t extends Fr{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cu=(()=>{class t{urlSerializer=f(Ji);options=f(ai,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=f(Gn);urlHandlingStrategy=f(kr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Lt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:o}){let r=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,s=o??r;return s instanceof Lt?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:o}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,o),this.routerState=e):this.rawUrlTree=o}routerState=jc(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>f(xm),providedIn:"root"})}return t})(),xm=(()=>{class t extends cu{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate")})})}handleRouterEvent(e,n){e instanceof En?this.updateStateMemento():e instanceof Ht?this.commitTransition(n):e instanceof Gi?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Wi?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ft&&e.code!==Ze.SupersededByNewNavigation&&e.code!==Ze.Redirect?this.restoreHistory(n):e instanceof ei?this.restoreHistory(n,!0):e instanceof kt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:o}){let{replaceUrl:r,state:s}=n;if(this.location.isCurrentPathEqualTo(e)||r){let a=this.browserPageId,l=S(S({},s),this.generateNgRouterState(o,a));this.location.replaceState(e,"",l)}else{let a=S(S({},s),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,r=this.currentPageId-o;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===e.finalUrl&&r===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fa(t,i){t.events.pipe(Ut(e=>e instanceof kt||e instanceof Ft||e instanceof ei||e instanceof Ht),he(e=>e instanceof kt||e instanceof Ht?0:(e instanceof Ft?e.code===Ze.Redirect||e.code===Ze.SupersededByNewNavigation:!1)?2:1),Ut(e=>e!==2),Vn(1)).subscribe(()=>{i()})}var Tm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Mm={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},In=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=f(Dl);stateManager=f(cu);options=f(ai,{optional:!0})||{};pendingTasks=f(hl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=f(au);urlSerializer=f(Ji);location=f(Gn);urlHandlingStrategy=f(kr);injector=f(Xt);_events=new ze;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=f(lu);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=f(no,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!f(eo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new el;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let o=this.navigationTransitions.currentTransition,r=Pe(this.navigationTransitions.currentNavigation);if(o!==null&&r!==null){if(this.stateManager.handleRouterEvent(n,r),n instanceof Ft&&n.code!==Ze.Redirect&&n.code!==Ze.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof kt)this.navigated=!0;else if(n instanceof ti){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,o.currentRawUrl),l=S({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Em(o.source)},s);this.scheduleNavigation(a,Ui,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}xf(n)&&this._events.next(n)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ui,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,o)=>{this.navigateToSyncWithBrowser(e,o,n)})}navigateToSyncWithBrowser(e,n,o){let r={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let l=S({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(r.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,n,s,r).catch(l=>{this.disposed||this.injector.get(Un)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Pe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ua),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:o,queryParams:r,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:s,h=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":h=S(S({},this.currentUrlTree.queryParams),r);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=r||null}h!==null&&(h=this.removeEmptyProps(h));let m;try{let y=o?o.snapshot:this.routerState.snapshot.root;m=Vc(y)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return Bc(m,e,h,c??null)}navigateByUrl(e,n={skipLocationChange:!1}){let o=an(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(r,Ui,null,n)}navigate(e,n={skipLocationChange:!1}){return Am(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let o;if(n===!0?o=S({},Tm):n===!1?o=S({},Mm):o=n,an(e))return vc(this.currentUrlTree,e,o);let r=this.parseUrl(e);return vc(this.currentUrlTree,r,o)}removeEmptyProps(e){return Object.entries(e).reduce((n,[o,r])=>(r!=null&&(n[o]=r),n),{})}scheduleNavigation(e,n,o,r,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((m,y)=>{a=m,l=y});let h=this.pendingTasks.add();return fa(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(m=>Promise.reject(m))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Am(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new me(4008,!1)}var li=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=ee(null);get href(){return Pe(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new ze;applicationErrorHandler=f(Un);options=f(ai,{optional:!0});constructor(e,n,o,r,s,a){this.router=e,this.route=n,this.tabIndexAttribute=o,this.renderer=r,this.el=s,this.locationStrategy=a,this.reactiveHref.set(f(new kl("href"),{optional:!0}));let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let e=this.preserveFragment,n=o=>o==="merge"||o==="preserve";e||=n(this.queryParamsHandling),e||=!this.queryParamsHandling&&!n(this.options?.defaultQueryParamsHandling),e&&(this.subscription=this.router.events.subscribe(o=>{o instanceof kt&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(an(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,o,r,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(e!==0||n||o||r||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.reactiveHref.set(e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null)}applyAttributeValue(e,n){let o=this.renderer,r=this.el.nativeElement;n!==null?o.setAttribute(r,e,n):o.removeAttribute(r,e)}get urlTree(){return this.routerLinkInput===null?null:an(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)(G(In),G(Gt),hs("tabindex"),G(Tt),G(lt),G(Hn))};static \u0275dir=pe({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,o){n&1&&H("click",function(s){return o.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&P("href",o.reactiveHref(),bl)("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",R],skipLocationChange:[2,"skipLocationChange","skipLocationChange",R],replaceUrl:[2,"replaceUrl","replaceUrl",R],routerLink:"routerLink"},features:[Le]})}return t})();var Rm=new de("");function Fm(t,...i){return zn([{provide:no,multi:!0,useValue:t},[],{provide:Gt,useFactory:Lm,deps:[In]},{provide:Il,multi:!0,useFactory:km},i.map(e=>e.\u0275providers)])}function Lm(t){return t.routerState.root}function uu(t,i){return{\u0275kind:t,\u0275providers:i}}function km(){let t=f(Jt);return i=>{let e=t.get(_s);if(i!==e.components[0])return;let n=t.get(In),o=t.get(Pm);t.get(Nm)===1&&n.initialNavigation(),t.get(Vm,null,{optional:!0})?.setUpPreloading(),t.get(Rm,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Pm=new de("",{factory:()=>new ze}),Nm=new de("",{providedIn:"root",factory:()=>1});var Vm=new de("");function Bm(){return uu(8,[la,{provide:eo,useExisting:la}])}function zm(t){_l("NgRouterViewTransitions");let i=[{provide:pa,useValue:ru},{provide:ha,useValue:S({skipNextTransition:!!t?.skipInitialTransition},t)}];return uu(9,i)}function ci(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[ci(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function xn(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function ui(t,i){if(t&&i){let e=n=>{xn(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Pt(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function du(t){typeof t=="string"?Pt(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),Pt(document.body,t?.className||"p-overflow-hidden"))}function pu(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function hu(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function ma(t){return t?Math.abs(t.scrollLeft):0}function fu(){let t=document.documentElement;return(window.pageXOffset||ma(t))-(t.clientLeft||0)}function mu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function pt(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Um(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function jm(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Um(t))}function io(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function gu(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),io(i)?i:void 0}function ga(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=gu(r);return jm(s)?s:r?.nodeType===9?r:void 0}}}function ya(t,i){let e=ga(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function ba(t,i={}){if(io(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let h=typeof c;if(h==="string"||h==="number")l.push(c);else if(h==="object"){let m=Array.isArray(c)?e(n,c):Object.entries(c).map(([y,b])=>n==="style"&&(b||b===0)?`${y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${b}`:b?y:void 0);l=m.length?l.concat(m.filter(y=>!!y)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?ba(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function yu(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function $m(t,i){return io(t)?Array.from(t.querySelectorAll(i)):[]}function ht(t,i){return io(t)?t.matches(i)?t:t.querySelector(i):null}function _t(t,i){t&&document.activeElement!==t&&t.focus(i)}function Pr(t,i=""){let e=$m(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function bu(t,i){let e=Pr(t,i);return e.length>0?e[0]:null}function Nt(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function vu(t,i){let e=Pr(t,i);return e.length>0?e[e.length-1]:null}function _u(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||ma(document.documentElement)||ma(document.body)||0)}}return{top:"auto",left:"auto"}}function Ct(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Cu(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Vt(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function va(t){return!!(t&&t.offsetParent!=null)}function Tn(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function wu(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Su(t,i){let e=gu(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Du(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,c=t.clientHeight,h=Ct(i);a<0?t.scrollTop=l+a:a+h>c&&(t.scrollTop=l+a-c+h)}function SD(t,i="",e){io(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Eu(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var Hm=Object.defineProperty,Iu=Object.getOwnPropertySymbols,Gm=Object.prototype.hasOwnProperty,Wm=Object.prototype.propertyIsEnumerable,xu=(t,i,e)=>i in t?Hm(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,qm=(t,i)=>{for(var e in i||(i={}))Gm.call(i,e)&&xu(t,e,i[e]);if(Iu)for(var e of Iu(i))Wm.call(i,e)&&xu(t,e,i[e]);return t};function zt(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function _a(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!_a(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==i.getTime();let h=t instanceof RegExp,m=i instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==i.toString();let y=Object.keys(t);if(s=y.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,y[r]))return!1;for(r=s;r--!==0;)if(a=y[r],!_a(t[a],i[a],e))return!1;return!0}function Ca(t,i){return _a(t,i)}function Mu(t){return typeof t=="function"&&"call"in t&&"apply"in t}function ve(t){return!zt(t)}function Bt(t,i){if(!t||!i)return null;try{let e=t[i];if(ve(e))return e}catch{}if(Object.keys(t).length){if(Mu(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function di(t,i,e){return e?Bt(t,e)===Bt(i,e):Ca(t,i)}function wt(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Au(t={},i={}){let e=qm({},t);return Object.keys(i).forEach(n=>{let o=n;wt(i[o])&&o in t&&wt(t[o])?e[o]=Au(t[o],i[o]):e[o]=i[o]}),e}function Ou(...t){return t.reduce((i,e,n)=>n===0?e:Au(i,e),{})}function wa(t,i){let e=-1;if(ve(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function tt(t,...i){return Mu(t)?t(...i):t}function ln(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Tu(t){return ln(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Nr(t,i="",e={}){let n=Tu(i).split("."),o=n.shift();if(o){if(wt(t)){let r=Object.keys(t).find(s=>Tu(s)===o)||"";return Nr(tt(t[r],e),n.join("."),e)}return}return tt(t,e)}function Ru(t){return ve(t)&&!isNaN(t)}function Fu(t=""){return ve(t)&&t.length===1&&!!t.match(/\S| /)}function St(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Mn(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function ot(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function Vr(t){return ln(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}var Br={};function Dt(t="pui_id_"){return Object.hasOwn(Br,t)||(Br[t]=0),Br[t]++,`${t}${Br[t]}`}var Lu=["*"];var We=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var ku=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let c of n){let h=Bt(l,c);if(this.filters[r](h,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=ot(n.toString()).toLocaleLowerCase(o);return ot(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=ot(n.toString()).toLocaleLowerCase(o);return ot(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=ot(n.toString()).toLocaleLowerCase(o);return ot(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=ot(n.toString()).toLocaleLowerCase(o),s=ot(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:ot(e.toString()).toLocaleLowerCase(o)==ot(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:ot(e.toString()).toLocaleLowerCase(o)!=ot(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(di(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),OD=(()=>{class t{messageSource=new ze;clearSource=new ze;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Pu=(()=>{class t{clickSource=new ze;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=v({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Lu,decls:1,vars:0,template:function(n,o){n&1&&(De(),Ce(0))},encapsulation:2})}return t})(),Vu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=v({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Lu,decls:1,vars:0,template:function(n,o){n&1&&(De(),Ce(0))},encapsulation:2})}return t})(),Be=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(G(fn))};static \u0275dir=pe({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),X=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[ce]})}return t})(),zr=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Km=Object.defineProperty,Qm=Object.defineProperties,Zm=Object.getOwnPropertyDescriptors,Ur=Object.getOwnPropertySymbols,Uu=Object.prototype.hasOwnProperty,ju=Object.prototype.propertyIsEnumerable,Bu=(t,i,e)=>i in t?Km(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,It=(t,i)=>{for(var e in i||(i={}))Uu.call(i,e)&&Bu(t,e,i[e]);if(Ur)for(var e of Ur(i))ju.call(i,e)&&Bu(t,e,i[e]);return t},Da=(t,i)=>Qm(t,Zm(i)),qt=(t,i)=>{var e={};for(var n in t)Uu.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Ur)for(var n of Ur(t))i.indexOf(n)<0&&ju.call(t,n)&&(e[n]=t[n]);return e};function LD(...t){return Ou(...t)}var Ym=Eu(),rt=Ym,oo=/{([^}]*)}/g,$u=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Hu=/var\([^)]+\)/g;function zu(t){return ln(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function Xm(t){return wt(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function Jm(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ea(t="",i=""){return Jm(`${ln(t,!1)&&ln(i,!1)?`${t}-`:t}${i}`)}function Gu(t="",i=""){return`--${Ea(t,i)}`}function eg(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Wu(t,i="",e="",n=[],o){if(ln(t)){let r=t.trim();if(eg(r))return;if(St(r,oo)){let s=r.replaceAll(oo,a=>{let l=a.replace(/{|}/g,"").split(".").filter(c=>!n.some(h=>St(c,h)));return`var(${Gu(e,Vr(l.join("-")))}${ve(o)?`, ${o}`:""})`});return St(s.replace(Hu,"0"),$u)?`calc(${s})`:s}return r}else if(Ru(t))return t}function tg(t,i,e){ln(i,!1)&&t.push(`${i}:${e};`)}function pi(t,i){return t?`${t}{${i}}`:""}function qu(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],c=0,h="",m=null,y=0;for(;c<=s.length;){let b=s[c];if((b==='"'||b==="'"||b==="`")&&s[c-1]!=="\\"&&(m=m===b?null:b),!m&&(b==="("&&y++,b===")"&&y--,(b===","||c===s.length)&&y===0)){let x=h.trim();x.startsWith("dt(")?l.push(qu(x,a)):l.push(n(x)),h="",c++;continue}b!==void 0&&(h+=b),c++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],c=t.slice(a+3,l),h=e(c,i),m=i(...h);t=t.slice(0,a)+m+t.slice(l+1)}return t}var Ku=t=>{var i;let e=we.getTheme(),n=Ia(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Ia(e,t,void 0,"value");return{name:o,variable:n,value:r}},Kt=(...t)=>Ia(we.getTheme(),...t),Ia=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=we.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=St(i,oo)?i:`{${i}}`;return n==="value"||zt(n)&&a==="strict"?we.getTokenValue(i):Wu(l,void 0,s,[o.excludedKeyRegex],e)}return""};function hi(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=tt(i[r],{dt:Kt}))!=null?s:"")},"");return qu(e,Kt)}return tt(t,{dt:Kt})}function ng(t,i={}){let e=we.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:h,path:m}=l.pop();for(let y in h){let b=h[y],x=Xm(b),B=St(y,r)?Ea(m):Ea(m,Vr(y));if(wt(x))l.push({node:x,path:B});else{let I=Gu(B),O=Wu(x,B,n,[r]);tg(a,I,O);let $=B;n&&$.startsWith(n+"-")&&($=$.slice(n.length+1)),s.push($.replace(/-/g,"."))}}}let c=a.join("");return{value:a,tokens:s,declarations:c,css:pi(o,c)}}var Et={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ng(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,c,h,m;let{preset:y,options:b}=i,x,B,I,O,$,ue,ye;if(ve(y)&&b.transform!=="strict"){let{primitive:Fe,semantic:He,extend:Pn}=y,Di=He||{},{colorScheme:Ro}=Di,Fo=qt(Di,["colorScheme"]),Lo=Pn||{},{colorScheme:ko}=Lo,Ei=qt(Lo,["colorScheme"]),Ii=Ro||{},{dark:Po}=Ii,No=qt(Ii,["dark"]),Vo=ko||{},{dark:Bo}=Vo,zo=qt(Vo,["dark"]),Uo=ve(Fe)?this._toVariables({primitive:Fe},b):{},jo=ve(Fo)?this._toVariables({semantic:Fo},b):{},$o=ve(No)?this._toVariables({light:No},b):{},Za=ve(Po)?this._toVariables({dark:Po},b):{},Ya=ve(Ei)?this._toVariables({semantic:Ei},b):{},Xa=ve(zo)?this._toVariables({light:zo},b):{},Ja=ve(Bo)?this._toVariables({dark:Bo},b):{},[Up,jp]=[(r=Uo.declarations)!=null?r:"",Uo.tokens],[$p,Hp]=[(s=jo.declarations)!=null?s:"",jo.tokens||[]],[Gp,Wp]=[(a=$o.declarations)!=null?a:"",$o.tokens||[]],[qp,Kp]=[(l=Za.declarations)!=null?l:"",Za.tokens||[]],[Qp,Zp]=[(c=Ya.declarations)!=null?c:"",Ya.tokens||[]],[Yp,Xp]=[(h=Xa.declarations)!=null?h:"",Xa.tokens||[]],[Jp,eh]=[(m=Ja.declarations)!=null?m:"",Ja.tokens||[]];x=this.transformCSS(t,Up,"light","variable",b,n,o),B=jp;let th=this.transformCSS(t,`${$p}${Gp}`,"light","variable",b,n,o),nh=this.transformCSS(t,`${qp}`,"dark","variable",b,n,o);I=`${th}${nh}`,O=[...new Set([...Hp,...Wp,...Kp])];let ih=this.transformCSS(t,`${Qp}${Yp}color-scheme:light`,"light","variable",b,n,o),oh=this.transformCSS(t,`${Jp}color-scheme:dark`,"dark","variable",b,n,o);$=`${ih}${oh}`,ue=[...new Set([...Zp,...Xp,...eh])],ye=tt(y.css,{dt:Kt})}return{primitive:{css:x,tokens:B},semantic:{css:I,tokens:O},global:{css:$,tokens:ue},style:ye}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,c;let h,m,y;if(ve(i)&&e.transform!=="strict"){let b=t.replace("-directive",""),x=i,{colorScheme:B,extend:I,css:O}=x,$=qt(x,["colorScheme","extend","css"]),ue=I||{},{colorScheme:ye}=ue,Fe=qt(ue,["colorScheme"]),He=B||{},{dark:Pn}=He,Di=qt(He,["dark"]),Ro=ye||{},{dark:Fo}=Ro,Lo=qt(Ro,["dark"]),ko=ve($)?this._toVariables({[b]:It(It({},$),Fe)},e):{},Ei=ve(Di)?this._toVariables({[b]:It(It({},Di),Lo)},e):{},Ii=ve(Pn)?this._toVariables({[b]:It(It({},Pn),Fo)},e):{},[Po,No]=[(a=ko.declarations)!=null?a:"",ko.tokens||[]],[Vo,Bo]=[(l=Ei.declarations)!=null?l:"",Ei.tokens||[]],[zo,Uo]=[(c=Ii.declarations)!=null?c:"",Ii.tokens||[]],jo=this.transformCSS(b,`${Po}${Vo}`,"light","variable",e,o,r,s),$o=this.transformCSS(b,zo,"dark","variable",e,o,r,s);h=`${jo}${$o}`,m=[...new Set([...No,...Bo,...Uo])],y=tt(O,{dt:Kt})}return{css:h,tokens:m,style:y}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:c}=i,h=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:h,options:c,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${tt(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[c,h])=>l.push(`${c}="${h}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,h])=>{if(wt(h)&&Object.hasOwn(h,"css")){let m=Mn(h.css),y=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${y}" ${a}>${m}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((h,[m,y])=>h.push(`${m}="${y}"`)&&h,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${Mn(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};c.push(this.path),l.name=this.path,l.binding||(l.binding={});let h=this.value;if(typeof this.value=="string"&&oo.test(this.value)){let m=this.value.trim().replace(oo,y=>{var b;let x=y.slice(1,-1),B=this.tokens[x];if(!B)return console.warn(`Token not found for path: ${x}`),"__UNRESOLVED__";let I=B.computed(a,l,c);return Array.isArray(I)&&I.length===2?`light-dark(${I[0].value},${I[1].value})`:(b=I?.value)!=null?b:"__UNRESOLVED__"});h=$u.test(m.replace(Hu,"0"))?`calc(${m})`:m}return zt(l.binding)&&delete l.binding,c.pop(),{colorScheme:a,path:this.path,paths:l,value:h.includes("__UNRESOLVED__")?void 0:h}},s=(a,l,c)=>{Object.entries(a).forEach(([h,m])=>{let y=St(h,i.variable.excludedKeyRegex)?l:l?`${l}.${zu(h)}`:zu(h),b=c?`${c}.${h}`:h;wt(m)?s(m,y,b):(o[y]||(o[y]={paths:[],computed:(x,B={},I=[])=>{if(o[y].paths.length===1)return o[y].paths[0].computed(o[y].paths[0].scheme,B.binding,I);if(x&&x!=="none")for(let O=0;O<o[y].paths.length;O++){let $=o[y].paths[O];if($.scheme===x)return $.computed(x,B.binding,I)}return o[y].paths.map(O=>O.computed(O.scheme,B[O.scheme],I))}}),o[y].paths.push({path:b,value:m,scheme:b.includes("colorScheme.light")?"light":b.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!St(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let c=l,{colorScheme:h}=c,m=qt(c,["colorScheme"]);return a[h]=m,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?pi(ve(i)?`${t}${i},${t} ${i}`:t,n):pi(t,pi(i??":root",n))},transformCSS(t,i,e,n,o={},r,s,a){if(ve(i)){let{cssLayer:l}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=e==="dark"?c.reduce((h,{type:m,selector:y})=>(ve(y)&&(h+=y.includes("[CSS]")?y.replace("[CSS]",i):this.getSelectorRule(y,a,m,i)),h),""):pi(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};wt(l)&&(c.name=tt(l.name,{name:t,type:n})),ve(c.name)&&(i=pi(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},we={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Da(It({},i),{options:It(It({},this.defaults.options),i.options)}),this._tokens=Et.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),rt.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Da(It({},this.theme),{preset:t}),this._tokens=Et.createTokens(t,this.defaults),this.clearLoadedStyleNames(),rt.emit("preset:change",t),rt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Da(It({},this.theme),{options:t}),this.clearLoadedStyleNames(),rt.emit("options:change",t),rt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Et.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return Et.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Et.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Et.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Et.getPreset(o)},getLayerOrderCSS(t=""){return Et.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return Et.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return Et.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return Et.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),rt.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&rt.emit("theme:load"))}};var Qu=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var ig=0,Zu=(()=>{class t{document=f(Se);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ig}`,id:h=void 0,media:m=void 0,nonce:y=void 0,first:b=!1,props:x={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||h&&this.document.getElementById(h)||this.document.createElement("style"),!s.isConnected){r=e;let B=this.document.head;b&&B.firstChild?B.insertBefore(s,B.firstChild):B.appendChild(s),ba(s,{type:"text/css",media:m,nonce:y,"data-primeng-style-id":c})}return s.textContent!==r&&(s.textContent=r),{id:h,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fi={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},og=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,J=(()=>{class t{name="base";useStyle=f(Zu);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(hi`${tt(e,{dt:Kt})}`);return r?this.useStyle.use(Mn(r),S({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>we.transformCSS(e.name||this.name,`${o}${hi`${n}`}`));loadGlobalCSS=(e={})=>this.load(og,e);loadGlobalTheme=(e={},n="")=>this.load(Qu,e,(o="")=>we.transformCSS(e.name||this.name,`${o}${hi`${n}`}`));getCommonTheme=e=>we.getCommon(this.name,e);getComponentTheme=e=>we.getComponent(this.name,e);getDirectiveTheme=e=>we.getDirective(this.name,e);getPresetTheme=(e,n,o)=>we.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>we.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=tt(this.css,{dt:Kt}),r=Mn(hi`${o}${e}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>we.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[we.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=hi`${tt(this.theme,{dt:Kt})}`,a=Mn(we.transformCSS(r,s)),l=Object.entries(n).reduce((c,[h,m])=>c.push(`${h}="${m}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rg=(()=>{class t{theme=ee(void 0);csp=ee({nonce:void 0});isThemeChanged=!1;document=f(Se);baseStyle=f(J);constructor(){mt(()=>{rt.on("theme:change",e=>{Pe(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),mt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){we.clearLoadedStyleNames(),rt.clear()}onThemeChange(e){we.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!we.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,S({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,S({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,S({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},s),r),we.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xa=(()=>{class t extends rg{ripple=ee(!1);platformId=f(ft);inputStyle=ee(null);inputVariant=ee(null);overlayAppendTo=ee("self");overlayOptions={};csp=ee({nonce:void 0});filterMatchModeOptions={text:[We.STARTS_WITH,We.CONTAINS,We.NOT_CONTAINS,We.ENDS_WITH,We.EQUALS,We.NOT_EQUALS],numeric:[We.EQUALS,We.NOT_EQUALS,We.LESS_THAN,We.LESS_THAN_OR_EQUAL_TO,We.GREATER_THAN,We.GREATER_THAN_OR_EQUAL_TO],date:[We.DATE_IS,We.DATE_IS_NOT,We.DATE_BEFORE,We.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ze;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=S(S({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:h,overlayAppendTo:m}=e||{};n&&this.csp.set(n),m&&this.overlayAppendTo.set(m),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),h&&(this.filterMatchModeOptions=h),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sg=new de("PRIME_NG_CONFIG");function cE(...t){let i=t?.map(n=>({provide:sg,useValue:n,multi:!1})),e=vs(()=>{let n=f(xa);t?.forEach(o=>n.setConfig(o))});return zn([...i,e])}var Yu=(()=>{class t extends J{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),se=(()=>{class t{document=f(Se);platformId=f(ft);el=f(lt);injector=f(Jt);cd=f(jt);renderer=f(Tt);config=f(xa);baseComponentStyle=f(Yu);baseStyle=f(J);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Dt("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return Nr(e,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Yl(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>rt.off("theme:change",e))}_loadStyles(){let e=()=>{fi.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),fi.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!fi.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),fi.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!we.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,S({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,S({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,S({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},this.styleOptions),r),we.setLoadedStyleName("common")}if(!we.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,S({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(S({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),we.setLoadedStyleName(this.componentStyle?.name)}if(!we.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,S({name:"layer-order",first:!0},this.styleOptions)),we.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,S({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){fi.clearLoadedStyleNames(),rt.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return ci(this._getOptionValue(this.$style?.classes,e,S({instance:this},n)))}sx(e="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,S({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=ci;static \u0275fac=function(n){return new(n||t)};static \u0275dir=pe({type:t,inputs:{dt:"dt"},features:[Y([Yu,J]),Le]})}return t})();var An=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=ue=>{if(ue)return getComputedStyle(ue).getPropertyValue("position")==="relative"?ue:r(ue.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),m=this.getViewport(),b=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*h},x,B,I="top";l.top+a+s.height>m.height?(x=l.top-b.top-s.height,I="bottom",l.top+x<0&&(x=-1*l.top)):(x=a+l.top-b.top,I="top");let O=l.left+s.width-m.width,$=l.left-b.left;if(s.width>m.width?B=(l.left-b.left)*-1:O>0?B=$-O:B=l.left-b.left,e.style.top=x+"px",e.style.left=B+"px",e.style.transformOrigin=I,o){let ue=pu(/-anchor-gutter$/)?.value;e.style.marginTop=I==="bottom"?`calc(${ue??"2px"} * -1)`:ue??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,h=n.getBoundingClientRect(),m=this.getWindowScrollTop(),y=this.getWindowScrollLeft(),b=this.getViewport(),x,B;h.top+l+s>b.height?(x=h.top+m-s,e.style.transformOrigin="bottom",x<0&&(x=m)):(x=l+h.top+m,e.style.transformOrigin="top"),h.left+a>b.width?B=Math.max(0,h.left+y+c-a):B=h.left+y,e.style.top=x+"px",e.style.left=B+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let h of c){let m=this.findSingle(a,h);m&&s(m)&&n.push(m)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),h=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,m=e.scrollTop,y=e.clientHeight,b=this.getOuterHeight(n);h<0?e.scrollTop=m+h:h+b>y&&(e.scrollTop=m+h-y+b)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let h=typeof c;if(h==="string"||h==="number")l.push(c);else if(h==="object"){let m=Array.isArray(c)?o(r,c):Object.entries(c).map(([y,b])=>r==="style"&&(b||b===0)?`${y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${b}`:b?y:void 0);l=m.length?l.concat(m.filter(y=>!!y)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Xu(){du({variableName:Ku("scrollbar.width").name})}var mi=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=An.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var gi=(()=>{class t extends se{autofocus=!1;focused=!1;platformId=f(ft);document=f(Se);host=f(lt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){yt(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=An.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=pe({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[A]})}return t})();var Ju=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var ag=`
    ${Ju}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,lg={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":ve(t.value())&&String(t.value()).length===1,"p-badge-dot":zt(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},ed=(()=>{class t extends J{name="badge";theme=ag;classes=lg;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ta=(()=>{class t extends se{styleClass=z();badgeSize=z();size=z();severity=z();value=z();badgeDisabled=z(!1,{transform:R});_componentStyle=f(ed);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(w(o.cn(o.cx("root"),o.styleClass())),et("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Y([ed]),A],decls:1,vars:1,template:function(n,o){n&1&&j(0),n&2&&xe(o.value())},dependencies:[ce,X],encapsulation:2,changeDetection:0})}return t})(),td=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[Ta,X,X]})}return t})();var nd=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var ug=["*"],dg={root:"p-fluid"},id=(()=>{class t extends J{name="fluid";classes=dg;theme=nd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var On=(()=>{class t extends se{_componentStyle=f(id);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&w(o.cx("root"))},features:[Y([id]),A],ngContentSelectors:ug,decls:1,vars:0,template:function(n,o){n&1&&(De(),Ce(0))},dependencies:[ce],encapsulation:2,changeDetection:0})}return t})(),od=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[On]})}return t})();var pg=["*"],hg=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,rd=(()=>{class t extends J{name="baseicon";css=hg;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ae=(()=>{class t extends se{spin=!1;_componentStyle=f(rd);getClassNames(){return ci("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&w(o.getClassNames())},inputs:{spin:[2,"spin","spin",R]},features:[Y([rd]),A],ngContentSelectors:pg,decls:1,vars:0,template:function(n,o){n&1&&(De(),Ce(0))},encapsulation:2,changeDetection:0})}return t})();var fg=["data-p-icon","angle-double-left"],sd=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","angle-double-left"]],features:[A],attrs:fg,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var mg=["data-p-icon","angle-double-right"],ad=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","angle-double-right"]],features:[A],attrs:mg,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var gg=["data-p-icon","angle-down"],ld=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","angle-down"]],features:[A],attrs:gg,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var yg=["data-p-icon","angle-left"],cd=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","angle-left"]],features:[A],attrs:yg,decls:1,vars:0,consts:[["d","M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var bg=["data-p-icon","angle-right"],ud=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","angle-right"]],features:[A],attrs:bg,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var vg=["data-p-icon","angle-up"],dd=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","angle-up"]],features:[A],attrs:vg,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var _g=["data-p-icon","blank"],pd=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","blank"]],features:[A],attrs:_g,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,o){n&1&&(M(),q(0,"rect",0))},encapsulation:2})}return t})();var Cg=["data-p-icon","check"],hd=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","check"]],features:[A],attrs:Cg,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var wg=["data-p-icon","chevron-down"],fd=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[A],attrs:wg,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var Sg=["data-p-icon","search"],md=(()=>{class t extends Ae{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Dt()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","search"]],features:[A],attrs:Sg,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(M(),te(0,"g"),q(1,"path",0),ne(),te(2,"defs")(3,"clipPath",1),q(4,"rect",2),ne()()),n&2&&(P("clip-path",o.pathId),u(3),$n("id",o.pathId))},encapsulation:2})}return t})();var Dg=["data-p-icon","spinner"],jr=(()=>{class t extends Ae{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Dt()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","spinner"]],features:[A],attrs:Dg,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(M(),te(0,"g"),q(1,"path",0),ne(),te(2,"defs")(3,"clipPath",1),q(4,"rect",2),ne()()),n&2&&(P("clip-path",o.pathId),u(3),$n("id",o.pathId))},encapsulation:2})}return t})();var Eg=["data-p-icon","times"],yi=(()=>{class t extends Ae{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","times"]],features:[A],attrs:Eg,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(M(),q(0,"path",0))},encapsulation:2})}return t})();var gd=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Ig=`
    ${gd}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,xg={root:"p-ink"},yd=(()=>{class t extends J{name="ripple";theme=Ig;classes=xg;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var cn=(()=>{class t extends se{zone=f(Ke);_componentStyle=f(yd);animationListener;mouseDownListener;timeout;constructor(){super(),mt(()=>{yt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Pt(n,"p-ink-active"),!Nt(n)&&!Vt(n)){let a=Math.max(pt(this.el.nativeElement),Ct(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=_u(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Vt(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Nt(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ui(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Pt(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Pt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Pt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,wu(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=pe({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Y([yd]),A]})}return t})(),bd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({})}return t})();var vd=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Tg=["content"],Mg=["loadingicon"],Ag=["icon"],Og=["*"],Cd=t=>({class:t});function Rg(t,i){t&1&&re(0)}function Fg(t,i){if(t&1&&T(0,"span"),t&2){let e=p(3);w(e.cx("loadingIcon")),P("aria-hidden",!0)("data-pc-section","loadingicon")}}function Lg(t,i){if(t&1&&(M(),T(0,"svg",7)),t&2){let e=p(3);w(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),d("spin",!0),P("aria-hidden",!0)("data-pc-section","loadingicon")}}function kg(t,i){if(t&1&&(ae(0),g(1,Fg,1,4,"span",3)(2,Lg,1,5,"svg",6),le()),t&2){let e=p(2);u(),d("ngIf",e.loadingIcon),u(),d("ngIf",!e.loadingIcon)}}function Pg(t,i){}function Ng(t,i){if(t&1&&g(0,Pg,0,0,"ng-template",8),t&2){let e=p(2);d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Vg(t,i){if(t&1&&(ae(0),g(1,kg,3,2,"ng-container",2)(2,Ng,1,1,null,5),le()),t&2){let e=p();u(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),u(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ge(3,Cd,e.cx("loadingIcon")))}}function Bg(t,i){if(t&1&&T(0,"span"),t&2){let e=p(2);w(e.cx("icon")),P("data-pc-section","icon")}}function zg(t,i){}function Ug(t,i){if(t&1&&g(0,zg,0,0,"ng-template",8),t&2){let e=p(2);d("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function jg(t,i){if(t&1&&(ae(0),g(1,Bg,1,3,"span",3)(2,Ug,1,1,null,5),le()),t&2){let e=p();u(),d("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),u(),d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ge(3,Cd,e.cx("icon")))}}function $g(t,i){if(t&1&&(_(0,"span"),j(1),C()),t&2){let e=p();w(e.cx("label")),P("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),u(),xe(e.label)}}function Hg(t,i){if(t&1&&T(0,"p-badge",9),t&2){let e=p();d("value",e.badge)("severity",e.badgeSeverity)}}var Gg={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},_d=(()=>{class t extends J{name="button";theme=vd;classes=Gg;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ro=(()=>{class t extends se{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=z(void 0,{transform:R});onClick=new W;onFocus=new W;onBlur=new W;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(On,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=f(_d);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(U(r,Tg,5),U(r,Mg,5),U(r,Ag,5),U(r,Be,4)),n&2){let s;L(s=k())&&(o.contentTemplate=s.first),L(s=k())&&(o.loadingIconTemplate=s.first),L(s=k())&&(o.iconTemplate=s.first),L(s=k())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",R],loading:[2,"loading","loading",R],loadingIcon:"loadingIcon",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],plain:[2,"plain","plain",R],severity:"severity",outlined:[2,"outlined","outlined",R],link:[2,"link","link",R],tabindex:[2,"tabindex","tabindex",Ne],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",R],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Y([_d]),A],ngContentSelectors:Og,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(De(),_(0,"button",0),H("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Ce(1),g(2,Rg,1,0,"ng-container",1)(3,Vg,3,5,"ng-container",2)(4,jg,3,5,"ng-container",2)(5,$g,2,5,"span",3)(6,Hg,1,2,"p-badge",4),C()),n&2&&(w(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),d("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),P("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),u(2),d("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),u(),d("ngIf",o.loading),u(),d("ngIf",!o.loading),u(),d("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),u(),d("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ce,Oe,Ve,dt,cn,gi,jr,td,Ta,X],encapsulation:2,changeDetection:0})}return t})(),$r=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[ce,ro,X,X]})}return t})();var Ma=class t{router=f(In);isDarkMode=ee(!1);ngOnInit(){let i=document.documentElement,e=localStorage.getItem("darkMode");if(e==="1"){i.classList.add("my-app-dark"),this.isDarkMode.set(!0);return}if(e==="0"){i.classList.remove("my-app-dark"),this.isDarkMode.set(!1);return}window.matchMedia("(prefers-color-scheme: dark)").matches&&(i.classList.add("my-app-dark"),this.isDarkMode.set(!0))}toggleDarkMode(){let i=document.documentElement;i.classList.toggle("my-app-dark"),this.isDarkMode.set(i.classList.contains("my-app-dark")),localStorage.setItem("darkMode",this.isDarkMode()?"1":"0")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-navbar"]],decls:5,vars:2,consts:[[1,"p-4","md:p-5","lg:p-6","xl:p-8","backdrop-blur-md","border-b","border-zinc-400/50"],[1,"flex","justify-between","items-center","md:grid","md:grid-cols-3"],[1,"text-xl","md:text-4xl","xl:text-5xl","col-start-2","col-end-3","text-center","cursor-pointer","transition-all","duration-300",3,"click"],["size","small","ariaLabel","Toggle dark mode",1,"col-start-3","col-end-4","justify-self-end","px-3","py-2","text-sm","md:px-4","md:py-2.5","md:text-base","lg:px-5","lg:py-3","lg:text-lg","md:scale-110","lg:scale-130",3,"click","icon","outlined"]],template:function(e,n){e&1&&(_(0,"header",0)(1,"nav",1)(2,"h1",2),H("click",function(){return n.router.navigate(["/"])}),j(3," githubLocate "),C(),_(4,"p-button",3),H("click",function(){return n.toggleDarkMode()}),C()()()),e&2&&(u(4),d("icon",n.isDarkMode()?"pi pi-moon":"pi pi-sun")("outlined",!0))},dependencies:[$r,ro],encapsulation:2})};var Ad=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(G(Tt),G(lt))};static \u0275dir=pe({type:t})}return t})(),Wg=(()=>{class t extends Ad{static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=pe({type:t,features:[A]})}return t})(),Rn=new de("");var qg={provide:Rn,useExisting:Yt(()=>Qr),multi:!0};function Kg(){let t=ut()?ut().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Qg=new de(""),Qr=(()=>{class t extends Ad{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Kg())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(G(Tt),G(lt),G(Qg,8))};static \u0275dir=pe({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&H("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[Y([qg]),A]})}return t})();var Od=new de(""),Rd=new de("");function Fd(t){return t!=null}function Ld(t){return jn(t)?Xe(t):t}function kd(t){let i={};return t.forEach(e=>{i=e!=null?S(S({},i),e):i}),Object.keys(i).length===0?null:i}function Pd(t,i){return i.map(e=>e(t))}function Zg(t){return!t.validate}function Nd(t){return t.map(i=>Zg(i)?i:e=>i.validate(e))}function Yg(t){if(!t)return null;let i=t.filter(Fd);return i.length==0?null:function(e){return kd(Pd(e,i))}}function Vd(t){return t!=null?Yg(Nd(t)):null}function Xg(t){if(!t)return null;let i=t.filter(Fd);return i.length==0?null:function(e){let n=Pd(e,i).map(Ld);return Wo(n).pipe(he(kd))}}function Bd(t){return t!=null?Xg(Nd(t)):null}function Sd(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function zd(t){return t._rawValidators}function Ud(t){return t._rawAsyncValidators}function Aa(t){return t?Array.isArray(t)?t:[t]:[]}function Gr(t,i){return Array.isArray(t)?t.includes(i):t===i}function Dd(t,i){let e=Aa(i);return Aa(t).forEach(o=>{Gr(e,o)||e.push(o)}),e}function Ed(t,i){return Aa(i).filter(e=>!Gr(t,e))}var Wr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Vd(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Bd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Oa=class extends Wr{name;get formDirective(){return null}get path(){return null}},xt=class extends Wr{_parent=null;name=null;valueAccessor=null},Ra=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Jg={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qx=_e(S({},Jg),{"[class.ng-submitted]":"isSubmitted"}),Zr=(()=>{class t extends Ra{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(G(xt,2))};static \u0275dir=pe({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Cs("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[A]})}return t})();var so="VALID",Hr="INVALID",bi="PENDING",ao="DISABLED",_i=class{},qr=class extends _i{value;source;constructor(i,e){super(),this.value=i,this.source=e}},lo=class extends _i{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},co=class extends _i{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},vi=class extends _i{status;source;constructor(i,e){super(),this.status=i,this.source=e}};function e0(t){return(Yr(t)?t.validators:t)||null}function t0(t){return Array.isArray(t)?Vd(t):t||null}function n0(t,i){return(Yr(i)?i.asyncValidators:t)||null}function i0(t){return Array.isArray(t)?Bd(t):t||null}function Yr(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Fa=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Pe(this.statusReactive)}set status(i){Pe(()=>this.statusReactive.set(i))}_status=Te(()=>this.statusReactive());statusReactive=ee(void 0);get valid(){return this.status===so}get invalid(){return this.status===Hr}get pending(){return this.status==bi}get disabled(){return this.status===ao}get enabled(){return this.status!==ao}errors;get pristine(){return Pe(this.pristineReactive)}set pristine(i){Pe(()=>this.pristineReactive.set(i))}_pristine=Te(()=>this.pristineReactive());pristineReactive=ee(!0);get dirty(){return!this.pristine}get touched(){return Pe(this.touchedReactive)}set touched(i){Pe(()=>this.touchedReactive.set(i))}_touched=Te(()=>this.touchedReactive());touchedReactive=ee(!1);get untouched(){return!this.touched}_events=new ze;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Dd(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Dd(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Ed(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Ed(i,this._rawAsyncValidators))}hasValidator(i){return Gr(this._rawValidators,i)}hasAsyncValidator(i){return Gr(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(_e(S({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new co(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new co(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(_e(S({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new lo(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new lo(!0,n))}markAsPending(i={}){this.status=bi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new vi(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(_e(S({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ao,this.errors=null,this._forEachChild(o=>{o.disable(_e(S({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new qr(this.value,n)),this._events.next(new vi(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_e(S({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=so,this._forEachChild(n=>{n.enable(_e(S({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(_e(S({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===so||this.status===bi)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new qr(this.value,e)),this._events.next(new vi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(_e(S({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ao:so}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=bi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Ld(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new vi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?ao:this.errors?Hr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(bi)?bi:this._anyControlsHaveStatus(Hr)?Hr:so}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new lo(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new co(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Yr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=t0(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=i0(this._rawAsyncValidators)}};var Xr=new de("",{providedIn:"root",factory:()=>Jr}),Jr="always";function o0(t,i){return[...i.path,t]}function jd(t,i,e=Jr){s0(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),l0(t,i),u0(t,i),c0(t,i),r0(t,i)}function Id(t,i,e=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),a0(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Kr(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function r0(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function s0(t,i){let e=zd(t);i.validator!==null?t.setValidators(Sd(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ud(t);i.asyncValidator!==null?t.setAsyncValidators(Sd(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();Kr(i._rawValidators,o),Kr(i._rawAsyncValidators,o)}function a0(t,i){let e=!1;if(t!==null){if(i.validator!==null){let o=zd(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(i.asyncValidator!==null){let o=Ud(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return Kr(i._rawValidators,n),Kr(i._rawAsyncValidators,n),e}function l0(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&$d(t,i)})}function c0(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&$d(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function $d(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function u0(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Hd(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function d0(t){return Object.getPrototypeOf(t.constructor)===Wg}function Gd(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===Qr?e=r:d0(r)?n=r:o=r}),o||n||e||null}function xd(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Td(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var La=class extends Fa{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(e0(e),n0(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Yr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Td(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){xd(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){xd(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Td(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var p0={provide:xt,useExisting:Yt(()=>ka)},Md=Promise.resolve(),ka=(()=>{class t extends xt{_changeDetectorRef;callSetDisabledState;control=new La;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new W;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Gd(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Hd(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){jd(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Md.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&R(n);Md.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?o0(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(G(Oa,9),G(Od,10),G(Rd,10),G(Rn,10),G(jt,8),G(Xr,8))};static \u0275dir=pe({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Y([p0]),A,Le]})}return t})();var Wd=new de(""),h0={provide:xt,useExisting:Yt(()=>Pa)},Pa=(()=>{class t extends xt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new W;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Gd(this,o)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&Id(n,this,!1),jd(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Hd(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Id(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(n){return new(n||t)(G(Od,10),G(Rd,10),G(Rn,10),G(Wd,8),G(Xr,8))};static \u0275dir=pe({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Y([h0]),A,Le]})}return t})();var qd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({})}return t})();var Kd=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Xr,useValue:e.callSetDisabledState??Jr}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[qd]})}return t})(),Qd=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Wd,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Xr,useValue:e.callSetDisabledState??Jr}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[qd]})}return t})();var es=(()=>{class t extends se{modelValue=ee(void 0);$filled=Te(()=>ve(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=pe({type:t,features:[A]})}return t})();var Yd=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var f0=`
    ${Yd}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,m0={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Xd=(()=>{class t extends J{name="inputtext";theme=f0;classes=m0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ci=(()=>{class t extends es{ngControl=f(xt,{optional:!0,self:!0});pcFluid=f(On,{optional:!0,host:!0,skipSelf:!0});pSize;variant=z();fluid=z(void 0,{transform:R});invalid=z(void 0,{transform:R});$variant=Te(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=f(Xd);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=pe({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,o){n&1&&H("input",function(s){return o.onInput(s)}),n&2&&w(o.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[Y([Xd]),A]})}return t})(),Jd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({})}return t})();var ep=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var y0=["*"],b0={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},tp=(()=>{class t extends J{name="iconfield";theme=ep;classes=b0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var uo=(()=>{class t extends se{iconPosition="left";styleClass;_componentStyle=f(tp);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,o){n&2&&w(o.cn(o.cx("root"),o.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[Y([tp]),A],ngContentSelectors:y0,decls:1,vars:0,template:function(n,o){n&1&&(De(),Ce(0))},dependencies:[ce],encapsulation:2,changeDetection:0})}return t})(),ts=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[uo]})}return t})();var _0=["*"],C0={root:"p-inputicon"},np=(()=>{class t extends J{name="inputicon";classes=C0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),po=(()=>{class t extends se{styleClass;_componentStyle=f(np);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,o){n&2&&w(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass"},features:[Y([np]),A],ngContentSelectors:_0,decls:1,vars:0,template:function(n,o){n&1&&(De(),Ce(0))},dependencies:[ce,X],encapsulation:2,changeDetection:0})}return t})(),ns=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[po,X,X]})}return t})();var Fn=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),c=this.isDate(e);if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var h=i instanceof RegExp,m=e instanceof RegExp;if(h!=m)return!1;if(h&&m)return i.toString()==e.toString();var y=Object.keys(i);if(s=y.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,y[r]))return!1;for(r=s;r--!==0;)if(a=y[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return S(S({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,c=e instanceof Date;if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var h=i instanceof RegExp,m=e instanceof RegExp;if(h!=m)return!1;if(h&&m)return i.toString()==e.toString();var y=Object.keys(i);if(s=y.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,y[r]))return!1;for(r=s;r--!==0;)if(a=y[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}};function S0(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var un=S0();var ip=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var D0={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},op=(()=>{class t extends J{name="tooltip";theme=ip;classes=D0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var wi=(()=>{class t extends se{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=z(void 0);$appendTo=Te(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Dt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=f(op);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),yt(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=S(S({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(xn(e.relatedTarget,"p-tooltip")||xn(e.relatedTarget,"p-tooltip-text")||xn(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",e.setAttribute("data-pc-section","arrow"),this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ya(this.container,this.el.nativeElement):ya(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),yu(this.container,250),this.getOption("tooltipZIndex")==="auto"?un.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&un.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof fn){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,r]of n[e].entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+fu(),o=e.top+mu();return{left:n,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?ht(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=pt(e),o=(Ct(e)-Ct(this.container))/2;this.alignTooltip(n,o);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=pt(this.container),o=(Ct(this.el.nativeElement)-Ct(this.container))/2;this.alignTooltip(-n,o),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),o=pt(this.container),r=(pt(this.el.nativeElement)-pt(this.container))/2,s=Ct(this.container);this.alignTooltip(r,-s);let a=n.left-this.getHostOffset().left+o/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=a+"px"}getArrowElement(){return ht(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=pt(this.container),o=this.getHostOffset(),r=(pt(this.el.nativeElement)-pt(this.container))/2,s=Ct(this.el.nativeElement);this.alignTooltip(r,s);let a=o.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=a+"px"}alignTooltip(e,n){let o=this.getHostOffset(),r=o.left+e,s=o.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=S(S({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return xn(e,"p-inputwrapper")?ht(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,o=e.left,r=pt(this.container),s=Ct(this.container),a=hu();return o+r>a.width||o<0||n<0||n+s>a.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new mi(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Su(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&un.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(G(Ke),G(tn))};static \u0275dir=pe({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",R],showDelay:[2,"showDelay","showDelay",Ne],hideDelay:[2,"hideDelay","hideDelay",Ne],life:[2,"life","life",Ne],positionTop:[2,"positionTop","positionTop",Ne],positionLeft:[2,"positionLeft","positionLeft",Ne],autoHide:[2,"autoHide","autoHide",R],fitContent:[2,"fitContent","fitContent",R],hideOnEscape:[2,"hideOnEscape","hideOnEscape",R],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[Y([op]),A,Le]})}return t})(),is=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({})}return t})();var sp=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var E0={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ap=(()=>{class t extends J{name="progressspinner";theme=sp;classes=E0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Na=(()=>{class t extends se{styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=f(ap);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:7,hostBindings:function(n,o){n&2&&(P("aria-label",o.ariaLabel)("role","progressbar")("data-pc-name","progressspinner")("data-pc-section","root")("aria-busy",!0),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[Y([ap]),A],decls:2,vars:9,consts:[["viewBox","25 25 50 50"],["cx","50","cy","50","r","20","stroke-miterlimit","10"]],template:function(n,o){n&1&&(M(),_(0,"svg",0),T(1,"circle",1),C()),n&2&&(w(o.cx("spin")),et("animation-duration",o.animationDuration),P("data-pc-section","root"),u(),w(o.cx("circle")),P("fill",o.fill)("stroke-width",o.strokeWidth))},dependencies:[ce,X],encapsulation:2,changeDetection:0})}return t})(),Si=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[Na,X,X]})}return t})();var Qt=class t{label=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-loader"]],inputs:{label:[1,"label"]},decls:4,vars:2,consts:[[1,"flex","flex-col","items-center","justify-center","md:my-8"],["animationDuration","1s","aria-label","Loading",1,"mx-auto","my-4","size-8","md:size-12",3,"strokeWidth"],[1,"mb-2","md:mt-4","text-center"]],template:function(e,n){e&1&&(_(0,"div",0),T(1,"p-progressspinner",1),_(2,"p",2),j(3),C()()),e&2&&(u(),d("strokeWidth","4"),u(2),xe(n.label()))},dependencies:[Si,Na],encapsulation:2})};var ho=class t{user=z.required();first=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-user-search-item"]],inputs:{user:[1,"user"],first:[1,"first"]},decls:4,vars:6,consts:[[1,"flex","justify-between","items-center","p-2","border-0","border-b-1","border-zinc-400/20","hover:bg-zinc-200/50","dark:hover:bg-zinc-800/50",3,"routerLink"],["icon","pi pi-user",1,"w-8","h-8","md:w-10","md:h-10","rounded-[999px]","ml-3","bg-zinc-800",3,"src","alt"],[1,"flex-1","mx-4","text-sm","md:text-base","lg:text-lg","break-all"]],template:function(e,n){e&1&&(_(0,"div",0),T(1,"img",1),_(2,"p",2),j(3),C()()),e&2&&(et("margin-top",n.first()?"0.5rem":"0rem"),d("routerLink","/user/"+n.user().login),u(),d("src",n.user().avatar_url,en)("alt",n.user().login),u(2),ke(" ",n.user().login," "))},dependencies:[li],encapsulation:2})};var dn=class t{http=f(ur);apiUrl="https://api.github.com";searchUsers(i){return this.http.get(`${this.apiUrl}/search/users?q=${i}`)}getUserDetails(i){return this.http.get(`${this.apiUrl}/users/${i}`)}getUserRepos(i,e=10,n=1){return this.http.get(`${this.apiUrl}/users/${i}/repos?per_page=${e}&page=${n}`)}getUserFollowers(i){return this.http.get(`${this.apiUrl}/users/${i}/followers`)}getUserFollowing(i){return this.http.get(`${this.apiUrl}/users/${i}/following`)}getUserSocials(i){return this.http.get(`${this.apiUrl}/users/${i}/social_accounts`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var x0=(t,i)=>i.id;function T0(t,i){t&1&&T(0,"app-loader",5)}function M0(t,i){if(t&1&&T(0,"app-user-search-item",7),t&2){let e=i.$implicit,n=i.$index;d("user",e)("first",n===0)}}function A0(t,i){if(t&1&&Mt(0,M0,1,2,"app-user-search-item",7,x0),t&2){let e=p();At(e.users())}}function O0(t,i){t&1&&(_(0,"p",6),j(1," No users found. "),C())}var fo=class t{searchTerm=new La("");isLoading=ee(!1);hasSearched=ee(!1);users=ee([]);githubService=f(dn);ngOnInit(){this.searchTerm.valueChanges.pipe(rl(500),sl(),Re(i=>i?(this.hasSearched.set(!0),this.isLoading.set(!0),this.githubService.searchUsers(i).pipe(at(()=>(this.isLoading.set(!1),this.users.set([]),qe)))):(this.users.set([]),this.hasSearched.set(!1),qe))).subscribe(i=>{this.users.set(i.items),this.isLoading.set(!1)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-search-bar"]],decls:8,vars:2,consts:[[1,"flex","flex-col","justify-center","items-center","min-h-[65vh]","p-4","md:p-8","lg:p-12"],[1,"w-full","max-w-4xl"],[1,"pi","pi-search","ml-0.5"],["type","text","pInputText","","pSize","large","fluid","","placeholder","Enter GitHub username and press Enter","pTooltip","Search GitHub username...","tooltipPosition","top",1,"text-sm","md:text-base","lg:text-xl",3,"formControl"],[1,"w-full","max-h-[20vh]","max-w-4xl","flex","flex-col","border-t-0","border-1","border-zinc-400/40","overflow-y-scroll","dark:bg-zinc-950","bg-white"],["label","Fetching users...","aria-label","Loading"],[1,"text-center","my-4","text-zinc-500","dark:text-zinc-400"],[3,"user","first"]],template:function(e,n){e&1&&(_(0,"main",0)(1,"p-iconfield",1),T(2,"p-inputicon",2)(3,"input",3),C(),_(4,"article",4),Ee(5,T0,1,0,"app-loader",5)(6,A0,2,0)(7,O0,2,0,"p",6),C()()),e&2&&(u(3),d("formControl",n.searchTerm),u(2),Ie(n.isLoading()?5:n.users().length!==0?6:n.hasSearched()?7:-1))},dependencies:[Jd,Ci,ts,uo,ns,po,is,wi,od,Qd,Qr,Zr,Pa,ho,Qt],encapsulation:2})};function R0(t,i){if(t&1&&(te(0,"p",3),j(1),ne()),t&2){let e=p();u(),ke(" ",e.repo().description," ")}}function F0(t,i){if(t&1&&(te(0,"span",5),q(1,"i",9),j(2),ne()),t&2){let e=p();u(2),ke(" ",e.repo().language," ")}}var Ln=class t{repo=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-repo-card"]],inputs:{repo:[1,"repo"]},decls:13,vars:6,consts:[[1,"flex","flex-col","justify-between","items-start","p-4","rounded-lg","bg-zinc-200/50","dark:bg-zinc-800/50","border","border-zinc-400/20","mb-4"],[1,"flex-1","w-full"],["target","_blank",1,"text-lg","font-bold","text-primary-500","hover:underline","break-words","md:text-xl","lg:text-2xl",3,"href"],[1,"text-sm","mt-1","text-zinc-600","dark:text-zinc-400"],[1,"flex","flex-wrap","gap-4","mt-2","text-sm","text-zinc-500","dark:text-zinc-400"],[1,"flex","items-center","gap-1.5"],[1,"flex","gap-1.5"],[1,"pi","pi-star"],[1,"pi","pi-eye"],[1,"pi","pi-code"]],template:function(e,n){e&1&&(te(0,"div",0)(1,"div",1)(2,"a",2),j(3),ne(),Ee(4,R0,2,1,"p",3),ne(),te(5,"div",4),Ee(6,F0,3,1,"span",5),te(7,"span",6),q(8,"i",7),j(9),ne(),te(10,"span",6),q(11,"i",8),j(12),ne()()()),e&2&&(u(2),$n("href",n.repo().html_url,en),u(),ke(" ",n.repo().name," "),u(),Ie(n.repo().description?4:-1),u(2),Ie(n.repo().language?6:-1),u(3),ke(" ",n.repo().stargazers_count," "),u(3),ke(" ",n.repo().watchers_count," "))},encapsulation:2})};var L0=(t,i)=>i.id;function k0(t,i){if(t&1&&T(0,"app-repo-card",2),t&2){let e=i.$implicit;d("repo",e)}}var mo=class t{repos=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-repo-list"]],inputs:{repos:[1,"repos"]},decls:5,vars:0,consts:[[1,"text-2xl","font-bold","mb-4"],[1,"space-y-4"],[3,"repo"]],template:function(e,n){e&1&&(_(0,"h3",0),j(1,"Repositories"),C(),_(2,"div",1),Mt(3,k0,1,1,"app-repo-card",2,L0),C()),e&2&&(u(3),At(n.repos()))},dependencies:[Ln],encapsulation:2})};var P0=["github-icon",""],go=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","github-icon",""]],attrs:P0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var N0=["facebook-icon",""],yo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","facebook-icon",""]],attrs:N0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var V0=["instagram-icon",""],bo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","instagram-icon",""]],attrs:V0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var B0=["twitch-icon",""],vo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","twitch-icon",""]],attrs:B0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M455.4 167.5L416.8 167.5L416.8 277.2L455.4 277.2L455.4 167.5zM349.2 167L310.6 167L310.6 276.8L349.2 276.8L349.2 167zM185 64L88.5 155.4L88.5 484.6L204.3 484.6L204.3 576L300.8 484.6L378.1 484.6L551.9 320L551.9 64L185 64zM513.3 301.8L436.1 374.9L358.9 374.9L291.3 438.9L291.3 374.9L204.4 374.9L204.4 100.6L513.3 100.6L513.3 301.8z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var z0=["linkedin-icon",""],_o=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","linkedin-icon",""]],attrs:z0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var U0=["mastodon-icon",""],Co=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","mastodon-icon",""]],attrs:U0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M529 243.1C529 145.9 465.3 117.4 465.3 117.4C402.8 88.7 236.7 89 174.8 117.4C174.8 117.4 111.1 145.9 111.1 243.1C111.1 358.8 104.5 502.5 216.7 532.2C257.2 542.9 292 545.2 320 543.6C370.8 540.8 399.3 525.5 399.3 525.5L397.6 488.6C397.6 488.6 361.3 500 320.5 498.7C280.1 497.3 237.5 494.3 230.9 444.7C230.3 440.1 230 435.4 230 430.8C315.6 451.7 388.7 439.9 408.7 437.5C464.8 430.8 513.7 396.2 519.9 364.6C529.7 314.8 528.9 243.1 528.9 243.1zM453.9 368.3L407.3 368.3L407.3 254.1C407.3 204.4 343.3 202.5 343.3 261L343.3 323.5L297 323.5L297 261C297 202.5 233 204.4 233 254.1L233 368.3L186.3 368.3C186.3 246.2 181.1 220.4 204.7 193.3C230.6 164.4 284.5 162.5 308.5 199.4L320.1 218.9L331.7 199.4C355.8 162.3 409.8 164.6 435.5 193.3C459.2 220.6 453.9 246.3 453.9 368.3L453.9 368.3z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var j0=["reddit-icon",""],wo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","reddit-icon",""]],attrs:j0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576L101.1 576C87.4 576 80.6 559.5 90.2 549.8L139 501C92.7 454.7 64 390.7 64 320zM413.6 217.6C437.2 217.6 456.3 198.5 456.3 174.9C456.3 151.3 437.2 132.2 413.6 132.2C393 132.2 375.8 146.8 371.8 166.2C337.3 169.9 310.4 199.2 310.4 234.6L310.4 234.8C272.9 236.4 238.6 247.1 211.4 263.9C201.3 256.1 188.6 251.4 174.9 251.4C141.9 251.4 115.1 278.2 115.1 311.2C115.1 335.2 129.2 355.8 149.5 365.3C151.5 434.7 227.1 490.5 320.1 490.5C413.1 490.5 488.8 434.6 490.7 365.2C510.9 355.6 524.8 335 524.8 311.2C524.8 278.2 498 251.4 465 251.4C451.3 251.4 438.7 256 428.6 263.8C401.2 246.8 366.5 236.1 328.6 234.7L328.6 234.5C328.6 209.1 347.5 188 372 184.6C376.4 203.4 393.3 217.4 413.5 217.4L413.6 217.6zM241.1 310.9C257.8 310.9 270.6 328.5 269.6 350.2C268.6 371.9 256.1 379.8 239.3 379.8C222.5 379.8 207.9 371 208.9 349.3C209.9 327.6 224.3 311 241 311L241.1 310.9zM431.2 349.2C432.2 370.9 417.5 379.7 400.8 379.7C384.1 379.7 371.5 371.8 370.5 350.1C369.5 328.4 382.3 310.8 399 310.8C415.7 310.8 430.2 327.4 431.1 349.1L431.2 349.2zM383.1 405.9C372.8 430.5 348.5 447.8 320.1 447.8C291.7 447.8 267.4 430.5 257.1 405.9C255.9 403 257.9 399.7 261 399.4C279.4 397.5 299.3 396.5 320.1 396.5C340.9 396.5 360.8 397.5 379.2 399.4C382.3 399.7 384.3 403 383.1 405.9z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var $0=["bluesky-icon",""],So=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","bluesky-icon",""]],attrs:$0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M439.8 358.7C436.5 358.3 433.1 357.9 429.8 357.4C433.2 357.8 436.5 358.3 439.8 358.7zM320 291.1C293.9 240.4 222.9 145.9 156.9 99.3C93.6 54.6 69.5 62.3 53.6 69.5C35.3 77.8 32 105.9 32 122.4C32 138.9 41.1 258 47 277.9C66.5 343.6 136.1 365.8 200.2 358.6C203.5 358.1 206.8 357.7 210.2 357.2C206.9 357.7 203.6 358.2 200.2 358.6C106.3 372.6 22.9 406.8 132.3 528.5C252.6 653.1 297.1 501.8 320 425.1C342.9 501.8 369.2 647.6 505.6 528.5C608 425.1 533.7 372.5 439.8 358.6C436.5 358.2 433.1 357.8 429.8 357.3C433.2 357.7 436.5 358.2 439.8 358.6C503.9 365.7 573.4 343.5 593 277.9C598.9 258 608 139 608 122.4C608 105.8 604.7 77.7 586.4 69.5C570.6 62.4 546.4 54.6 483.2 99.3C417.1 145.9 346.1 240.4 320 291.1z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var H0=["twitter-icon",""],Do=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","twitter-icon",""]],attrs:H0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM447.3 263.3C447.3 350 381.3 449.9 260.7 449.9C223.5 449.9 189 439.1 160 420.5C165.3 421.1 170.4 421.3 175.8 421.3C206.5 421.3 234.7 410.9 257.2 393.3C228.4 392.7 204.2 373.8 195.9 347.8C206 349.3 215.1 349.3 225.5 346.6C195.5 340.5 173 314.1 173 282.2L173 281.4C181.7 286.3 191.9 289.3 202.6 289.7C193.6 283.7 186.2 275.6 181.1 266.1C176 256.6 173.3 245.9 173.4 235.1C173.4 222.9 176.6 211.7 182.3 202C214.6 241.8 263.1 267.8 317.5 270.6C308.2 226.1 341.5 190 381.5 190C400.4 190 417.4 197.9 429.4 210.7C444.2 207.9 458.4 202.4 471 194.9C466.1 210.1 455.8 222.9 442.2 231C455.4 229.6 468.2 225.9 480 220.8C471.1 233.9 459.9 245.5 447.1 254.8C447.3 257.6 447.3 260.5 447.3 263.3z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};var G0=["default-icon",""],Eo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["svg","default-icon",""]],attrs:G0,decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 640","fill","#92898a"],["d","M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"]],template:function(e,n){e&1&&(M(),te(0,"svg",0),q(1,"path",1),ne())},encapsulation:2})};function W0(t,i){t&1&&(M(),T(0,"svg",1))}function q0(t,i){t&1&&(M(),T(0,"svg",2))}function K0(t,i){t&1&&(M(),T(0,"svg",3))}function Q0(t,i){t&1&&(M(),T(0,"svg",4))}function Z0(t,i){t&1&&(M(),T(0,"svg",5))}function Y0(t,i){t&1&&(M(),T(0,"svg",6))}function X0(t,i){t&1&&(M(),T(0,"svg",7))}function J0(t,i){t&1&&(M(),T(0,"svg",8))}function ey(t,i){t&1&&(M(),T(0,"svg",9))}function ty(t,i){t&1&&(M(),T(0,"svg",10))}var Io=class t{url=z.required();provider=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-social-media-link"]],inputs:{url:[1,"url"],provider:[1,"provider"]},decls:11,vars:3,consts:[["target","_blank","tooltipPosition","top",3,"href","pTooltip"],["github-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["twitter-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["facebook-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["instagram-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["twitch-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["linkedin-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["mastodon-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["reddit-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["bluesky-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"],["default-icon","",1,"hover:opacity-80","transition-opacity","size-6","lg:size-8"]],template:function(e,n){if(e&1&&(_(0,"a",0),Ee(1,W0,1,0,":svg:svg",1)(2,q0,1,0,":svg:svg",2)(3,K0,1,0,":svg:svg",3)(4,Q0,1,0,":svg:svg",4)(5,Z0,1,0,":svg:svg",5)(6,Y0,1,0,":svg:svg",6)(7,X0,1,0,":svg:svg",7)(8,J0,1,0,":svg:svg",8)(9,ey,1,0,":svg:svg",9)(10,ty,1,0,":svg:svg",10),C()),e&2){let o;d("href",n.url(),en)("pTooltip",n.provider().charAt(0).toUpperCase()+n.provider().slice(1)),u(),Ie((o=n.provider().toLowerCase())==="github"?1:o==="twitter"?2:o==="facebook"?3:o==="instagram"?4:o==="twitch"?5:o==="linkedin"?6:o==="mastodon"?7:o==="reddit"?8:o==="bluesky"?9:10)}},dependencies:[is,wi,go,yo,bo,vo,Do,_o,Co,So,wo,Eo],encapsulation:2})};var ny=(t,i)=>i.label;function iy(t,i){if(t&1&&(te(0,"div",1)(1,"span",2),j(2),ne(),te(3,"span",3),j(4),ne()()),t&2){let e=i.$implicit;u(2),xe(e.value),u(2),xe(e.label)}}var xo=class t{stats=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-user-stats"]],inputs:{stats:[1,"stats"]},decls:3,vars:0,consts:[[1,"grid","grid-cols-2","gap-4","text-center","text-sm"],[1,"flex","flex-col","items-center","justify-center","p-2","rounded-lg","bg-zinc-200/50","dark:bg-zinc-800/50"],[1,"text-xl","font-bold"],[1,"text-zinc-600","dark:text-zinc-400"]],template:function(e,n){e&1&&(te(0,"div",0),Mt(1,iy,5,2,"div",1,ny),ne()),e&2&&(u(),At(n.stats()))},encapsulation:2})};var oy=(t,i)=>i.provider;function ry(t,i){if(t&1&&T(0,"app-social-media-link",1),t&2){let e=i.$implicit;d("provider",e.provider)("url",e.url)}}var To=class t{socials=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-user-socials"]],inputs:{socials:[1,"socials"]},decls:3,vars:0,consts:[[1,"flex","space-x-4","items-center","mt-2"],[3,"provider","url"]],template:function(e,n){e&1&&(_(0,"div",0),Mt(1,ry,1,2,"app-social-media-link",1,oy),C()),e&2&&(u(),At(n.socials()))},dependencies:[Io],encapsulation:2})};var Mo=class t{name=z("");login=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-user-aliases"]],inputs:{name:[1,"name"],login:[1,"login"]},decls:4,vars:2,consts:[[1,"text-3xl","md:text-4xl","font-extrabold","text-primary-500","text-center","mb-1.5"],[1,"text-lg","md:text-xl","font-medium","text-center","text-zinc-600","dark:text-zinc-400"]],template:function(e,n){e&1&&(te(0,"h1",0),j(1),ne(),te(2,"p",1),j(3),ne()),e&2&&(u(),ke(" ",n.name()||n.login(),`
`),u(2),ke(" ",n.login(),`
`))},encapsulation:2})};var Ao=class t{bio=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-user-bio"]],inputs:{bio:[1,"bio"]},decls:2,vars:1,consts:[[1,"text-center","text-sm","md:text-base","text-zinc-500","dark:text-zinc-400"]],template:function(e,n){e&1&&(te(0,"p",0),j(1),ne()),e&2&&(u(),ke(" ",n.bio(),`
`))},encapsulation:2})};var lp=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`;var sy=["container"],ay=["icon"],ly=["closeicon"],cy=["*"],uy=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),dy=t=>({value:"visible()",params:t}),py=t=>({closeCallback:t});function hy(t,i){t&1&&re(0)}function fy(t,i){if(t&1&&g(0,hy,1,0,"ng-container",7),t&2){let e=p(2);d("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function my(t,i){if(t&1&&T(0,"i"),t&2){let e=p(2);w(e.cn(e.cx("icon"),e.icon))}}function gy(t,i){if(t&1&&T(0,"span",9),t&2){let e=p(3);d("ngClass",e.cx("text"))("innerHTML",e.text,yl)}}function yy(t,i){if(t&1&&(_(0,"div"),g(1,gy,1,2,"span",8),C()),t&2){let e=p(2);u(),d("ngIf",!e.escape)}}function by(t,i){if(t&1&&(_(0,"span",5),j(1),C()),t&2){let e=p(3);d("ngClass",e.cx("text")),u(),xe(e.text)}}function vy(t,i){if(t&1&&g(0,by,2,2,"span",10),t&2){let e=p(2);d("ngIf",e.escape&&e.text)}}function _y(t,i){t&1&&re(0)}function Cy(t,i){if(t&1&&g(0,_y,1,0,"ng-container",11),t&2){let e=p(2);d("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",ge(2,py,e.close.bind(e)))}}function wy(t,i){if(t&1&&(_(0,"span",5),Ce(1),C()),t&2){let e=p(2);d("ngClass",e.cx("text"))}}function Sy(t,i){if(t&1&&T(0,"i",5),t&2){let e=p(3);w(e.cn(e.cx("closeIcon"),e.closeIcon)),d("ngClass",e.closeIcon)}}function Dy(t,i){t&1&&re(0)}function Ey(t,i){if(t&1&&g(0,Dy,1,0,"ng-container",7),t&2){let e=p(3);d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Iy(t,i){if(t&1&&(M(),T(0,"svg",15)),t&2){let e=p(3);w(e.cx("closeIcon"))}}function xy(t,i){if(t&1){let e=fe();_(0,"button",12),H("click",function(o){N(e);let r=p(2);return V(r.close(o))}),Ee(1,Sy,1,3,"i",13),Ee(2,Ey,1,1,"ng-container"),Ee(3,Iy,1,2,":svg:svg",14),C()}if(t&2){let e=p(2);w(e.cx("closeButton")),P("aria-label",e.closeAriaLabel),u(),Ie(e.closeIcon?1:-1),u(),Ie(e.closeIconTemplate||e._closeIconTemplate?2:-1),u(),Ie(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Ty(t,i){if(t&1&&(_(0,"div",2)(1,"div"),Ee(2,fy,1,1,"ng-container"),Ee(3,my,1,2,"i",3),g(4,yy,2,1,"div",4)(5,vy,1,1,"ng-template",null,0,je),Ee(7,Cy,1,4,"ng-container")(8,wy,2,1,"span",5),Ee(9,xy,4,6,"button",6),C()()),t&2){let e=Qe(6),n=p();w(n.cn(n.cx("root"),n.styleClass)),d("@messageAnimation",ge(16,dy,Ot(13,uy,n.showTransitionOptions,n.hideTransitionOptions))),P("aria-live","polite")("role","alert"),u(),w(n.cx("content")),u(),Ie(n.iconTemplate||n._iconTemplate?2:-1),u(),Ie(n.icon?3:-1),u(),d("ngIf",!n.escape)("ngIfElse",e),u(3),Ie(n.containerTemplate||n._containerTemplate?7:8),u(2),Ie(n.closable?9:-1)}}var My={root:({instance:t})=>["p-message p-component p-message-"+t.severity,"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},cp=(()=>{class t extends J{name="message";theme=lp;classes=My;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Va=(()=>{class t extends se{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new W;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=ee(!0);_componentStyle=f(cp);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-message"]],contentQueries:function(n,o,r){if(n&1&&(U(r,sy,4),U(r,ay,4),U(r,ly,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.containerTemplate=s.first),L(s=k())&&(o.iconTemplate=s.first),L(s=k())&&(o.closeIconTemplate=s.first),L(s=k())&&(o.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",R],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",R],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[Y([cp]),A],ngContentSelectors:cy,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"class"],[1,"p-message","p-component"],[3,"class"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",3,"class"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",3,"click"],[3,"class","ngClass"],["data-p-icon","times",3,"class"],["data-p-icon","times"]],template:function(n,o){n&1&&(De(),Ee(0,Ty,10,18,"div",1)),n&2&&Ie(o.visible()?0:-1)},dependencies:[ce,gt,Oe,Ve,yi,cn,X],encapsulation:2,data:{animation:[Ti("messageAnimation",[bn(":enter",[yn({opacity:0,transform:"translateY(-25%)"}),gn("{{showTransitionParams}}")]),bn(":leave",[gn("{{hideTransitionParams}}",yn({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),up=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[Va,X,X]})}return t})();var kn=class t{message=z.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-error-message"]],inputs:{message:[1,"message"]},decls:3,vars:3,consts:[["severity","error","size","large",1,"relative","bottom-14","flex","items-baseline","p-2"],[1,"pi","pi-exclamation-triangle"]],template:function(e,n){e&1&&(_(0,"p-message",0),T(1,"i",1),j(2),C()),e&2&&(u(),et("font-size",1.25,"rem"),u(),ke(" ",n.message(),`
`))},dependencies:[up,Va],encapsulation:2})};var Ba=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-home"]],decls:1,vars:0,template:function(e,n){e&1&&T(0,"app-search-bar")},dependencies:[fo],encapsulation:2})};var dp=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Oy=["header"],Ry=["title"],Fy=["subtitle"],Ly=["content"],ky=["footer"],Py=["*",[["p-header"]],[["p-footer"]]],Ny=["*","p-header","p-footer"];function Vy(t,i){t&1&&re(0)}function By(t,i){if(t&1&&(_(0,"div"),Ce(1,1),g(2,Vy,1,0,"ng-container",1),C()),t&2){let e=p();w(e.cx("header")),u(2),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function zy(t,i){if(t&1&&(ae(0),j(1),le()),t&2){let e=p(2);u(),xe(e.header)}}function Uy(t,i){t&1&&re(0)}function jy(t,i){if(t&1&&(_(0,"div"),g(1,zy,2,1,"ng-container",2)(2,Uy,1,0,"ng-container",1),C()),t&2){let e=p();w(e.cx("title")),u(),d("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),u(),d("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function $y(t,i){if(t&1&&(ae(0),j(1),le()),t&2){let e=p(2);u(),xe(e.subheader)}}function Hy(t,i){t&1&&re(0)}function Gy(t,i){if(t&1&&(_(0,"div"),g(1,$y,2,1,"ng-container",2)(2,Hy,1,0,"ng-container",1),C()),t&2){let e=p();w(e.cx("subtitle")),u(),d("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),u(),d("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function Wy(t,i){t&1&&re(0)}function qy(t,i){t&1&&re(0)}function Ky(t,i){if(t&1&&(_(0,"div"),Ce(1,2),g(2,qy,1,0,"ng-container",1),C()),t&2){let e=p();w(e.cx("footer")),u(2),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Qy=`
    ${dp}

    .p-card {
        display: block;
    }
`,Zy={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},pp=(()=>{class t extends J{name="card";theme=Qy;classes=Zy;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var za=(()=>{class t extends se{header;subheader;set style(e){di(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ee(null);_componentStyle=f(pp);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-card"]],contentQueries:function(n,o,r){if(n&1&&(U(r,Nu,5),U(r,Vu,5),U(r,Oy,4),U(r,Ry,4),U(r,Fy,4),U(r,Ly,4),U(r,ky,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.headerFacet=s.first),L(s=k())&&(o.footerFacet=s.first),L(s=k())&&(o.headerTemplate=s.first),L(s=k())&&(o.titleTemplate=s.first),L(s=k())&&(o.subtitleTemplate=s.first),L(s=k())&&(o.contentTemplate=s.first),L(s=k())&&(o.footerTemplate=s.first),L(s=k())&&(o.templates=s)}},hostVars:5,hostBindings:function(n,o){n&2&&(P("data-pc-name","card"),ct(o._style()),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[Y([pp]),A],ngContentSelectors:Ny,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,o){n&1&&(De(Py),g(0,By,3,3,"div",0),_(1,"div"),g(2,jy,3,4,"div",0)(3,Gy,3,4,"div",0),_(4,"div"),Ce(5),g(6,Wy,1,0,"ng-container",1),C(),g(7,Ky,3,3,"div",0),C()),n&2&&(d("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),u(),w(o.cx("body")),u(),d("ngIf",o.header||o.titleTemplate||o._titleTemplate),u(),d("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),u(),w(o.cx("content")),u(2),d("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),u(),d("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[ce,Oe,Ve,X],encapsulation:2,changeDetection:0})}return t})(),hp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[za,X,X]})}return t})();var fp=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Xy=["icon"],Jy=["*"];function eb(t,i){if(t&1&&T(0,"span",3),t&2){let e=p(2);w(e.cx("icon")),d("ngClass",e.icon)}}function tb(t,i){if(t&1&&(ae(0),g(1,eb,1,3,"span",2),le()),t&2){let e=p();u(),d("ngIf",e.icon)}}function nb(t,i){}function ib(t,i){t&1&&g(0,nb,0,0,"ng-template")}function ob(t,i){if(t&1&&(_(0,"span"),g(1,ib,1,0,null,4),C()),t&2){let e=p();w(e.cx("icon")),u(),d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var rb={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},mp=(()=>{class t extends J{name="tag";theme=fp;classes=rb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var sb=(()=>{class t extends se{styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=f(mp);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-tag"]],contentQueries:function(n,o,r){if(n&1&&(U(r,Xy,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.iconTemplate=s.first),L(s=k())&&(o.templates=s)}},hostVars:2,hostBindings:function(n,o){n&2&&w(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",R]},features:[Y([mp]),A],ngContentSelectors:Jy,decls:5,vars:5,consts:[[4,"ngIf"],[3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(n,o){n&1&&(De(),Ce(0),g(1,tb,2,1,"ng-container",0)(2,ob,2,3,"span",1),_(3,"span"),j(4),C()),n&2&&(u(),d("ngIf",!o.iconTemplate&&!o._iconTemplate),u(),d("ngIf",o.iconTemplate||o._iconTemplate),u(),w(o.cx("label")),u(),xe(o.value))},dependencies:[ce,gt,Oe,Ve,X],encapsulation:2,changeDetection:0})}return t})(),gp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[sb,X,X]})}return t})();var yp=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var ab=["*"];function lb(t,i){if(t&1&&(_(0,"span"),j(1),C()),t&2){let e=p();w(e.cx("label")),u(),xe(e.label)}}function cb(t,i){if(t&1&&T(0,"span",4),t&2){let e=p(2);w(e.icon),d("ngClass",e.cx("icon"))}}function ub(t,i){if(t&1&&g(0,cb,1,3,"span",3),t&2){let e=p(),n=Qe(5);d("ngIf",e.icon)("ngIfElse",n)}}function db(t,i){if(t&1){let e=fe();_(0,"img",6),H("error",function(o){N(e);let r=p(2);return V(r.imageError(o))}),C()}if(t&2){let e=p(2);d("src",e.image,en),P("aria-label",e.ariaLabel)}}function pb(t,i){if(t&1&&g(0,db,1,2,"img",5),t&2){let e=p();d("ngIf",e.image)}}var hb={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},bp=(()=>{class t extends J{name="avatar";theme=yp;classes=hb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ua=(()=>{class t extends se{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new W;_componentStyle=f(bp);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,o){n&2&&(P("data-pc-name","avatar")("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[Y([bp]),A],ngContentSelectors:ab,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,o){if(n&1&&(De(),Ce(0),g(1,lb,2,3,"span",2)(2,ub,1,2,"ng-template",null,0,je)(4,pb,1,1,"ng-template",null,1,je)),n&2){let r=Qe(3);u(),d("ngIf",o.label)("ngIfElse",r)}},dependencies:[ce,gt,Oe,X],encapsulation:2,changeDetection:0})}return t})(),vp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[Ua,X,X]})}return t})();var _p=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var mb=["*"],gb={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},yb={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},Cp=(()=>{class t extends J{name="divider";theme=_p;classes=yb;inlineStyles=gb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ja=(()=>{class t extends se{styleClass;layout="horizontal";type="solid";align;_componentStyle=f(Cp);static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(n,o){n&2&&(P("aria-orientation",o.layout),ct(o.sx("root")),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[Y([Cp]),A],ngContentSelectors:mb,decls:2,vars:2,template:function(n,o){n&1&&(De(),_(0,"div"),Ce(1),C()),n&2&&w(o.cx("content"))},dependencies:[ce,X],encapsulation:2,changeDetection:0})}return t})(),wp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[ja]})}return t})();var vb=()=>({overflow:"hidden"}),_b=()=>({width:"10rem",height:"10rem"});function Cb(t,i){if(t&1&&T(0,"app-user-bio",9),t&2){let e=p();d("bio",e.user.bio)}}function wb(t,i){if(t&1&&(_(0,"div",15),T(1,"p-button",16),C()),t&2){let e=p();u(),d("routerLink","/user/"+e.user.login+"/repos")}}function Sb(t,i){if(t&1&&(_(0,"p-card",4)(1,"div",5)(2,"div",6),T(3,"p-avatar",7)(4,"app-user-aliases",8),Ee(5,Cb,1,1,"app-user-bio",9),T(6,"app-user-socials",10),C(),_(7,"div",11),T(8,"app-user-stats",12)(9,"p-divider",13)(10,"app-repo-list",14),Ee(11,wb,2,1,"div",15),C()()()),t&2){let e=i;ct(mn(12,vb)),u(3),ct(mn(13,_b)),d("image",e.user.avatar_url),u(),d("name",e.user.name)("login",e.user.login),u(),Ie(e.user.bio?5:-1),u(),d("socials",e.socials),u(2),d("stats",e.userStats),u(2),d("repos",e.repos),u(),Ie(e.repos.length>0?11:-1)}}function Db(t,i){t&1&&T(0,"app-error-message",2)}function Eb(t,i){t&1&&T(0,"app-loader",3)}var $a=class t{username=z.required();isLoading=ee(!0);isError=ee(!1);combinedData$;githubService=f(dn);constructor(){mt(()=>{this.isLoading.set(!0),this.isError.set(!1),this.combinedData$=Wo({user:this.githubService.getUserDetails(this.username()),repos:this.githubService.getUserRepos(this.username()),socials:this.githubService.getUserSocials(this.username())}).pipe(he(i=>{let e=[{label:"Public Repos",value:i.user.public_repos},{label:"Followers",value:i.user.followers},{label:"Following",value:i.user.following},{label:"Public Gists",value:i.user.public_gists}];return{user:i.user,repos:i.repos.slice(0,5),socials:[...i.socials,{url:i.user.html_url,provider:"GitHub"}],userStats:e}}),at(i=>(console.error("Failed to load user data:",i),this.isLoading.set(!1),this.isError.set(!0),qe)),Ue(()=>{this.isLoading.set(!1)}))})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-user"]],inputs:{username:[1,"username"]},decls:5,vars:3,consts:[[1,"flex","flex-col","justify-center","items-center","min-h-screen","p-4","md:p-8","lg:p-12","mb-[100px]","md:mb-[120px]","lg:mb-[150px]"],[1,"w-full","h-full","lg:w-3/4","xl:w-2/3","border-none","shadow-none","bg-zinc-100","dark:bg-zinc-900/50",3,"style"],["message",`Could not find the user or an issue occurred. Please check the username
      and try again.`],["label","Loading user data..."],[1,"w-full","h-full","lg:w-3/4","xl:w-2/3","border-none","shadow-none","bg-zinc-100","dark:bg-zinc-900/50"],[1,"flex","flex-col","items-center","space-x-0"],[1,"flex","flex-col","items-center","space-y-4"],["shape","circle",1,"border-4","border-primary-500/20",3,"image"],[3,"name","login"],[3,"bio"],[3,"socials"],[1,"flex-1","w-full","mt-8"],[3,"stats"],[1,"my-6"],[3,"repos"],[1,"w-full","flex","justify-center","mt-6"],["label","View More Repos",3,"routerLink"]],template:function(e,n){if(e&1&&(_(0,"main",0),Ee(1,Sb,12,14,"p-card",1),Rl(2,"async"),Ml(3,Db,1,0,"app-error-message",2)(4,Eb,1,0,"app-loader",3),C()),e&2){let o;u(),Ie((o=Fl(2,1,n.combinedData$))?1:n.isError()?3:n.isLoading()?4:-1,o)}},dependencies:[Si,hp,za,gp,$r,ro,vp,Ua,wp,ja,bd,li,mo,xo,To,Mo,Ao,Qt,kn,Ts],encapsulation:2})};var Sp=(()=>{class t extends es{required=z(void 0,{transform:R});invalid=z(void 0,{transform:R});disabled=z(void 0,{transform:R});name=z();_disabled=ee(!1);$disabled=Te(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=pe({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[A]})}return t})();var os=(()=>{class t extends Sp{pcFluid=f(On,{optional:!0,host:!0,skipSelf:!0});fluid=z(void 0,{transform:R});variant=z();size=z();inputSize=z();pattern=z();min=z();max=z();step=z();minlength=z();maxlength=z();$variant=Te(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275dir=pe({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[A]})}return t})();var Dp=["content"],Ib=["overlay"],xb=["*"],Tb=(t,i,e,n,o,r,s,a,l,c,h,m,y,b)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":i,"p-overlay-top":e,"p-overlay-top-start":n,"p-overlay-top-end":o,"p-overlay-bottom":r,"p-overlay-bottom-start":s,"p-overlay-bottom-end":a,"p-overlay-left":l,"p-overlay-left-start":c,"p-overlay-left-end":h,"p-overlay-right":m,"p-overlay-right-start":y,"p-overlay-right-end":b}),Mb=(t,i,e)=>({showTransitionParams:t,hideTransitionParams:i,transform:e}),Ab=t=>({value:"visible",params:t}),Ob=t=>({mode:t}),Rb=t=>({$implicit:t});function Fb(t,i){t&1&&re(0)}function Lb(t,i){if(t&1){let e=fe();_(0,"div",3,1),H("click",function(o){N(e);let r=p(2);return V(r.onOverlayContentClick(o))})("@overlayContentAnimation.start",function(o){N(e);let r=p(2);return V(r.onOverlayContentAnimationStart(o))})("@overlayContentAnimation.done",function(o){N(e);let r=p(2);return V(r.onOverlayContentAnimationDone(o))}),Ce(2),g(3,Fb,1,0,"ng-container",4),C()}if(t&2){let e=p(2);w(e.contentStyleClass),d("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",ge(11,Ab,Al(7,Mb,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),u(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ge(15,Rb,ge(13,Ob,e.overlayMode)))}}function kb(t,i){if(t&1){let e=fe();_(0,"div",3,0),H("click",function(){N(e);let o=p();return V(o.onOverlayClick())}),g(2,Lb,4,17,"div",2),C()}if(t&2){let e=p();w(e.styleClass),d("ngStyle",e.style)("ngClass",Ol(5,Tb,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),u(2),d("ngIf",e.visible)}}var Pb=`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,Ep=(()=>{class t extends J{name="overlay";theme=Pb;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Nb=Xo([yn({transform:"{{transform}}",opacity:0}),gn("{{showTransitionParams}}")]),Vb=Xo([gn("{{hideTransitionParams}}",yn({transform:"{{transform}}",opacity:0}))]),Ip=(()=>{class t extends se{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return Fn.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return Fn.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return Fn.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return Fn.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=z(void 0);visibleChange=new W;onBeforeShow=new W;onShow=new W;onBeforeHide=new W;onHide=new W;onAnimationStart=new W;onAnimationDone=new W;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=z();$appendTo=Te(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=f(Ep);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(yt(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return S(S({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return S(S({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return ga(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&_t(this.targetEl),this.modal&&ui(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&_t(this.targetEl),this.modal&&Pt(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&An.alignOverlay(this.overlayEl,this.targetEl,this.$appendTo())}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&un.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),this.hostAttrSelector()&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),An.appendOverlay(this.overlayEl,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo()),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&ui(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let n=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(n,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(n,!0),this.modalVisible=!1,this.unbindListeners(),An.appendOverlay(this.overlayEl,this.targetEl,this.$appendTo()),un.clear(n),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new mi(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let o=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&o}):o)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!Tn()}):!Tn())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!Tn()}):!Tn())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),un.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(G(Pu),G(Ke))};static \u0275cmp=v({type:t,selectors:[["p-overlay"]],contentQueries:function(n,o,r){if(n&1&&(U(r,Dp,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.contentTemplate=s.first),L(s=k())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ge(Ib,5),Ge(Dp,5)),n&2){let r;L(r=k())&&(o.overlayViewChild=r.first),L(r=k())&&(o.contentViewChild=r.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[Y([Ep]),A],ngContentSelectors:xb,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&(De(),g(0,kb,3,20,"div",2)),n&2&&d("ngIf",o.modalVisible)},dependencies:[ce,gt,Oe,Ve,dt,X],encapsulation:2,data:{animation:[Ti("overlayContentAnimation",[bn(":enter",[Jo(Nb)]),bn(":leave",[Jo(Vb)])])]},changeDetection:0})}return t})();var xp=["content"],Bb=["item"],zb=["loader"],Ub=["loadericon"],jb=["element"],$b=["*"],Ha=(t,i)=>({$implicit:t,options:i}),Hb=t=>({numCols:t}),Mp=t=>({options:t}),Gb=()=>({styleClass:"p-virtualscroller-loading-icon"}),Wb=(t,i)=>({rows:t,columns:i});function qb(t,i){t&1&&re(0)}function Kb(t,i){if(t&1&&(ae(0),g(1,qb,1,0,"ng-container",10),le()),t&2){let e=p(2);u(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ot(2,Ha,e.loadedItems,e.getContentOptions()))}}function Qb(t,i){t&1&&re(0)}function Zb(t,i){if(t&1&&(ae(0),g(1,Qb,1,0,"ng-container",10),le()),t&2){let e=i.$implicit,n=i.index,o=p(3);u(),d("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",Ot(2,Ha,e,o.getOptions(n)))}}function Yb(t,i){if(t&1&&(_(0,"div",null,3),g(2,Zb,2,5,"ng-container",11),C()),t&2){let e=p(2);ct(e.contentStyle),w(e.cn(e.cx("content"),e.contentStyleClass)),P("data-pc-section","content"),u(2),d("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Xb(t,i){if(t&1&&T(0,"div",12),t&2){let e=p(2);w(e.cx("spacer")),d("ngStyle",e.spacerStyle),P("data-pc-section","spacer")}}function Jb(t,i){t&1&&re(0)}function ev(t,i){if(t&1&&(ae(0),g(1,Jb,1,0,"ng-container",10),le()),t&2){let e=i.index,n=p(4);u(),d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",ge(4,Mp,n.getLoaderOptions(e,n.both&&ge(2,Hb,n.numItemsInViewport.cols))))}}function tv(t,i){if(t&1&&(ae(0),g(1,ev,2,6,"ng-container",13),le()),t&2){let e=p(3);u(),d("ngForOf",e.loaderArr)}}function nv(t,i){t&1&&re(0)}function iv(t,i){if(t&1&&(ae(0),g(1,nv,1,0,"ng-container",10),le()),t&2){let e=p(4);u(),d("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",ge(3,Mp,mn(2,Gb)))}}function ov(t,i){if(t&1&&(M(),T(0,"svg",14)),t&2){let e=p(4);w(e.cx("loadingIcon")),d("spin",!0),P("data-pc-section","loadingIcon")}}function rv(t,i){if(t&1&&g(0,iv,2,5,"ng-container",6)(1,ov,1,4,"ng-template",null,5,je),t&2){let e=Qe(2),n=p(3);d("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function sv(t,i){if(t&1&&(_(0,"div"),g(1,tv,2,1,"ng-container",6)(2,rv,3,2,"ng-template",null,4,je),C()),t&2){let e=Qe(3),n=p(2);w(n.cx("loader")),P("data-pc-section","loader"),u(),d("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function av(t,i){if(t&1){let e=fe();ae(0),_(1,"div",7,1),H("scroll",function(o){N(e);let r=p();return V(r.onContainerScroll(o))}),g(3,Kb,2,5,"ng-container",6)(4,Yb,3,7,"ng-template",null,2,je)(6,Xb,1,4,"div",8)(7,sv,4,5,"div",9),C(),le()}if(t&2){let e=Qe(5),n=p();u(),w(n.cn(n.cx("root"),n.styleClass)),d("ngStyle",n._style),P("id",n._id)("tabindex",n.tabindex)("data-pc-name","scroller")("data-pc-section","root"),u(2),d("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),u(3),d("ngIf",n._showSpacer),u(),d("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function lv(t,i){t&1&&re(0)}function cv(t,i){if(t&1&&(ae(0),g(1,lv,1,0,"ng-container",10),le()),t&2){let e=p(2);u(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ot(5,Ha,e.items,Ot(2,Wb,e._items,e.loadedColumns)))}}function uv(t,i){if(t&1&&(Ce(0),g(1,cv,2,8,"ng-container",15)),t&2){let e=p();u(),d("ngIf",e.contentTemplate||e._contentTemplate)}}var dv=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,pv={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},Tp=(()=>{class t extends J{name="virtualscroller";theme=dv;classes=pv;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ap=(()=>{class t extends se{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o)),Object.entries(e).forEach(([n,o])=>this[`${n}`]!==o&&(this[`${n}`]=o)))}onLazyLoad=new W;onScroll=new W;onScrollIndexChange=new W;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:e.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=f(Tp);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:o,currentValue:r}=e.loading;this.lazy&&o!==r&&r!==this.d_loading&&(this.d_loading=r,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:o,currentValue:r}=e.numToleratedItems;o!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:o,currentValue:r}=e.options;this.lazy&&o?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,n=!0),o?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){yt(this.platformId)&&!this.initialized&&va(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=Vt(this.elementViewChild?.nativeElement),this.defaultHeight=Nt(this.elementViewChild?.nativeElement),this.defaultContentWidth=Vt(this.contentEl),this.defaultContentHeight=Nt(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||ht(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:s=0,scrollLeft:a=0}=this.elementViewChild?.nativeElement,{numToleratedItems:l}=this.calculateNumItems(),c=this.getContentPosition(),h=this.itemSize,m=(O=0,$)=>O<=$?0:O,y=(O,$,ue)=>O*$+ue,b=(O=0,$=0)=>this.scrollTo({left:O,top:$,behavior:n}),x=this.both?{rows:0,cols:0}:0,B=!1,I=!1;this.both?(x={rows:m(e[0],l[0]),cols:m(e[1],l[1])},b(y(x.cols,h[1],c.left),y(x.rows,h[0],c.top)),I=this.lastScrollPos.top!==s||this.lastScrollPos.left!==a,B=x.rows!==r.rows||x.cols!==r.cols):(x=m(e,l),this.horizontal?b(y(x,h,c.left),s):b(a,y(x,h,c.top)),I=this.lastScrollPos!==(this.horizontal?a:s),B=x!==r),this.isRangeChanged=B,I&&(this.first=x)}}scrollInView(e,n,o="auto"){if(n){let{first:r,viewport:s}=this.getRenderedRange(),a=(h=0,m=0)=>this.scrollTo({left:h,top:m,behavior:o}),l=n==="to-start",c=n==="to-end";if(l){if(this.both)s.first.rows-r.rows>e[0]?a(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>e[1]&&a((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>e){let h=(s.first-1)*this._itemSize;this.horizontal?a(h,0):a(0,h)}}else if(c){if(this.both)s.last.rows-r.rows<=e[0]+1?a(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=e[1]+1&&a((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=e+1){let h=(s.first+1)*this._itemSize;this.horizontal?a(h,0):a(0,h)}}}else this.scrollToIndex(e,o)}getRenderedRange(){let e=(r,s)=>s||r?Math.floor(r/(s||r)):0,n=this.first,o=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(r,this._itemSize[0]),cols:e(s,this._itemSize[1])},o={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let a=this.horizontal?s:r;n=e(a,this._itemSize),o=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:o}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,o=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(c,h)=>h||c?Math.ceil(c/(h||c)):0,s=c=>Math.ceil(c/2),a=this.both?{rows:r(o,this._itemSize[0]),cols:r(n,this._itemSize[1])}:r(this.horizontal?n:o,this._itemSize),l=this.d_numToleratedItems||(this.both?[s(a.rows),s(a.cols)]:s(a));return{numItemsInViewport:a,numToleratedItems:l}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),o=(a,l,c,h=!1)=>this.getLast(a+l+(a<c?2:3)*c,h),r=this.first,s=this.both?{rows:o(this.first.rows,e.rows,n[0]),cols:o(this.first.cols,e.cols,n[1],!0)}:o(this.first,e,n);this.last=s,this.numItemsInViewport=e,this.d_numToleratedItems=n,this.showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[Vt(this.contentEl),Nt(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[o,r]=[Vt(this.elementViewChild.nativeElement),Nt(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=o<this.defaultWidth?o+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),o=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),s=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:o,top:r,bottom:s,x:n+o,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,n=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,o=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,r=(s,a)=>this.elementViewChild.nativeElement.style[s]=a;this.both||this.horizontal?(r("height",o),r("width",n)):r("height",o)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(o,r,s,a=0)=>this.spacerStyle=_e(S({},this.spacerStyle),{[`${o}`]:(r||[]).length*s+a+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,o=(s,a)=>s*a,r=(s=0,a=0)=>this.contentStyle=_e(S({},this.contentStyle),{transform:`translate3d(${s}px, ${a}px, 0)`});if(this.both)r(o(n.cols,this._itemSize[1]),o(n.rows,this._itemSize[0]));else{let s=o(n,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(e){let n=e.target,o=this.getContentPosition(),r=(I,O)=>I?I>O?I-O:I:0,s=(I,O)=>O||I?Math.floor(I/(O||I)):0,a=(I,O,$,ue,ye,Fe)=>I<=ye?ye:Fe?$-ue-ye:O+ye-1,l=(I,O,$,ue,ye,Fe,He)=>I<=Fe?0:Math.max(0,He?I<O?$:I-Fe:I>O?$:I-2*Fe),c=(I,O,$,ue,ye,Fe=!1)=>{let He=O+ue+2*ye;return I>=ye&&(He+=ye+1),this.getLast(He,Fe)},h=r(n.scrollTop,o.top),m=r(n.scrollLeft,o.left),y=this.both?{rows:0,cols:0}:0,b=this.last,x=!1,B=this.lastScrollPos;if(this.both){let I=this.lastScrollPos.top<=h,O=this.lastScrollPos.left<=m;if(!this._appendOnly||this._appendOnly&&(I||O)){let $={rows:s(h,this._itemSize[0]),cols:s(m,this._itemSize[1])},ue={rows:a($.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],I),cols:a($.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],O)};y={rows:l($.rows,ue.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],I),cols:l($.cols,ue.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],O)},b={rows:c($.rows,y.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:c($.cols,y.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},x=y.rows!==this.first.rows||b.rows!==this.last.rows||y.cols!==this.first.cols||b.cols!==this.last.cols||this.isRangeChanged,B={top:h,left:m}}}else{let I=this.horizontal?m:h,O=this.lastScrollPos<=I;if(!this._appendOnly||this._appendOnly&&O){let $=s(I,this._itemSize),ue=a($,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,O);y=l($,ue,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,O),b=c($,y,this.last,this.numItemsInViewport,this.d_numToleratedItems),x=y!==this.first||b!==this.last||this.isRangeChanged,B=I}}return{first:y,last:b,isRangeChanged:x,scrollPos:B}}onScrollChange(e){let{first:n,last:o,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(e);if(r){let a={first:n,last:o};if(this.setContentPosition(a),this.first=n,this.last=o,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",a),this._lazy&&this.isPageChanged(n)){let l={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this.items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:o,this.items.length)};(this.lazyLoadState.first!==l.first||this.lazyLoadState.last!==l.last)&&this.handleEvents("onLazyLoad",l),this.lazyLoadState=l}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){yt(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=Tn()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(va(this.elementViewChild?.nativeElement)){let[e,n]=[Vt(this.elementViewChild?.nativeElement),Nt(this.elementViewChild?.nativeElement)],[o,r]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?o||r:this.horizontal?o:this.vertical?r:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=Vt(this.contentEl),this.defaultContentHeight=Nt(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(e){let n=(this._items||[]).length,o=this.both?this.first.rows+e:this.first+e;return{index:o,count:n,first:o===0,last:o===n-1,even:o%2===0,odd:o%2!==0}}getLoaderOptions(e,n){let o=this.loaderArr.length;return S({index:e,count:o,first:e===0,last:e===o-1,even:e%2===0,odd:e%2!==0},n)}static \u0275fac=function(n){return new(n||t)(G(Ke))};static \u0275cmp=v({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,o,r){if(n&1&&(U(r,xp,4),U(r,Bb,4),U(r,zb,4),U(r,Ub,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.contentTemplate=s.first),L(s=k())&&(o.itemTemplate=s.first),L(s=k())&&(o.loaderTemplate=s.first),L(s=k())&&(o.loaderIconTemplate=s.first),L(s=k())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ge(jb,5),Ge(xp,5)),n&2){let r;L(r=k())&&(o.elementViewChild=r.first),L(r=k())&&(o.contentViewChild=r.first)}},hostVars:2,hostBindings:function(n,o){n&2&&et("height",o.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[Y([Tp]),A,Le],ngContentSelectors:$b,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle"],[3,"class","ngStyle",4,"ngIf"],[3,"class",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin"],[4,"ngIf"]],template:function(n,o){if(n&1&&(De(),g(0,av,8,11,"ng-container",6)(1,uv,2,1,"ng-template",null,0,je)),n&2){let r=Qe(2);d("ngIf",!o._disabled)("ngIfElse",r)}},dependencies:[ce,on,Oe,Ve,dt,jr,X],encapsulation:2})}return t})();var Op=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select:has(.p-select-clear-icon) .p-select-label {
        padding-inline-end: calc(1rem + dt('select.padding.x'));
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }
`;var Oo=t=>({height:t}),Ga=t=>({$implicit:t});function hv(t,i){if(t&1&&(M(),T(0,"svg",5)),t&2){let e=p(2);w(e.cx("optionCheckIcon"))}}function fv(t,i){if(t&1&&(M(),T(0,"svg",6)),t&2){let e=p(2);w(e.cx("optionBlankIcon"))}}function mv(t,i){if(t&1&&(ae(0),g(1,hv,1,2,"svg",3)(2,fv,1,2,"svg",4),le()),t&2){let e=p();u(),d("ngIf",e.selected),u(),d("ngIf",!e.selected)}}function gv(t,i){if(t&1&&(_(0,"span"),j(1),C()),t&2){let e=p();u(),xe(e.label??"empty")}}function yv(t,i){t&1&&re(0)}var bv=["item"],vv=["group"],_v=["loader"],Cv=["selectedItem"],wv=["header"],Rp=["filter"],Sv=["footer"],Dv=["emptyfilter"],Ev=["empty"],Iv=["dropdownicon"],xv=["loadingicon"],Tv=["clearicon"],Mv=["filtericon"],Av=["onicon"],Ov=["officon"],Rv=["cancelicon"],Fv=["focusInput"],Lv=["editableInput"],kv=["items"],Pv=["scroller"],Nv=["overlay"],Vv=["firstHiddenFocusableEl"],Bv=["lastHiddenFocusableEl"],Fp=t=>({class:t}),Lp=t=>({options:t}),kp=(t,i)=>({$implicit:t,options:i}),zv=()=>({});function Uv(t,i){if(t&1&&(ae(0),j(1),le()),t&2){let e=p(2);u(),xe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function jv(t,i){if(t&1&&re(0,24),t&2){let e=p(2);d("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",ge(2,Ga,e.selectedOption))}}function $v(t,i){if(t&1&&(_(0,"span"),j(1),C()),t&2){let e=p(3);u(),xe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Hv(t,i){if(t&1&&g(0,$v,2,1,"span",18),t&2){let e=p(2);d("ngIf",e.isSelectedOptionEmpty())}}function Gv(t,i){if(t&1){let e=fe();_(0,"span",22,3),H("focus",function(o){N(e);let r=p();return V(r.onInputFocus(o))})("blur",function(o){N(e);let r=p();return V(r.onInputBlur(o))})("keydown",function(o){N(e);let r=p();return V(r.onKeyDown(o))}),g(2,Uv,2,1,"ng-container",20)(3,jv,1,4,"ng-container",23)(4,Hv,1,1,"ng-template",null,4,je),C()}if(t&2){let e=Qe(5),n=p();w(n.cx("label")),d("pTooltip",n.tooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),P("aria-disabled",n.$disabled())("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",n.overlayVisible??!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.$disabled()?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0),u(2),d("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",e),u(),d("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function Wv(t,i){if(t&1){let e=fe();_(0,"input",25,5),H("input",function(o){N(e);let r=p();return V(r.onEditableInput(o))})("keydown",function(o){N(e);let r=p();return V(r.onKeyDown(o))})("focus",function(o){N(e);let r=p();return V(r.onInputFocus(o))})("blur",function(o){N(e);let r=p();return V(r.onInputBlur(o))}),C()}if(t&2){let e=p();w(e.cx("label")),d("pAutoFocus",e.autofocus),P("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)}}function qv(t,i){if(t&1){let e=fe();M(),_(0,"svg",28),H("click",function(o){N(e);let r=p(2);return V(r.clear(o))}),C()}if(t&2){let e=p(2);w(e.cx("clearIcon")),P("data-pc-section","clearicon")}}function Kv(t,i){}function Qv(t,i){t&1&&g(0,Kv,0,0,"ng-template")}function Zv(t,i){if(t&1){let e=fe();_(0,"span",29),H("click",function(o){N(e);let r=p(2);return V(r.clear(o))}),g(1,Qv,1,0,null,30),C()}if(t&2){let e=p(2);w(e.cx("clearIcon")),P("data-pc-section","clearicon"),u(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",ge(5,Fp,e.cx("clearIcon")))}}function Yv(t,i){if(t&1&&(ae(0),g(1,qv,1,3,"svg",26)(2,Zv,2,7,"span",27),le()),t&2){let e=p();u(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),u(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Xv(t,i){t&1&&re(0)}function Jv(t,i){if(t&1&&(ae(0),g(1,Xv,1,0,"ng-container",31),le()),t&2){let e=p(2);u(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function e_(t,i){if(t&1&&T(0,"span",33),t&2){let e=p(3);w(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon))}}function t_(t,i){if(t&1&&T(0,"span",33),t&2){let e=p(3);w(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin"))}}function n_(t,i){if(t&1&&(ae(0),g(1,e_,1,2,"span",32)(2,t_,1,2,"span",32),le()),t&2){let e=p(2);u(),d("ngIf",e.loadingIcon),u(),d("ngIf",!e.loadingIcon)}}function i_(t,i){if(t&1&&(ae(0),g(1,Jv,2,1,"ng-container",18)(2,n_,3,2,"ng-container",18),le()),t&2){let e=p();u(),d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),u(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function o_(t,i){if(t&1&&T(0,"span"),t&2){let e=p(3);w(e.cn(e.cx("dropdownIcon"),e.dropdownIcon))}}function r_(t,i){if(t&1&&(M(),T(0,"svg",36)),t&2){let e=p(3);w(e.cx("dropdownIcon"))}}function s_(t,i){if(t&1&&(ae(0),g(1,o_,1,2,"span",34)(2,r_,1,2,"svg",35),le()),t&2){let e=p(2);u(),d("ngIf",e.dropdownIcon),u(),d("ngIf",!e.dropdownIcon)}}function a_(t,i){}function l_(t,i){t&1&&g(0,a_,0,0,"ng-template")}function c_(t,i){if(t&1&&(_(0,"span"),g(1,l_,1,0,null,30),C()),t&2){let e=p(2);w(e.cx("dropdownIcon")),u(),d("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",ge(4,Fp,e.cx("dropdownIcon")))}}function u_(t,i){if(t&1&&g(0,s_,3,2,"ng-container",18)(1,c_,2,6,"span",34),t&2){let e=p();d("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),u(),d("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function d_(t,i){t&1&&re(0)}function p_(t,i){t&1&&re(0)}function h_(t,i){if(t&1&&(ae(0),g(1,p_,1,0,"ng-container",30),le()),t&2){let e=p(3);u(),d("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",ge(2,Lp,e.filterOptions))}}function f_(t,i){t&1&&(M(),T(0,"svg",42))}function m_(t,i){}function g_(t,i){t&1&&g(0,m_,0,0,"ng-template")}function y_(t,i){if(t&1&&(_(0,"span"),g(1,g_,1,0,null,31),C()),t&2){let e=p(4);u(),d("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function b_(t,i){if(t&1){let e=fe();_(0,"p-iconfield")(1,"input",40,10),H("input",function(o){N(e);let r=p(3);return V(r.onFilterInputChange(o))})("keydown",function(o){N(e);let r=p(3);return V(r.onFilterKeyDown(o))})("blur",function(o){N(e);let r=p(3);return V(r.onFilterBlur(o))}),C(),_(3,"p-inputicon"),g(4,f_,1,0,"svg",41)(5,y_,2,1,"span",18),C()()}if(t&2){let e=p(3);u(),w(e.cx("pcFilter")),d("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant()),P("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),u(3),d("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),u(),d("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function v_(t,i){if(t&1){let e=fe();_(0,"div",29),H("click",function(o){return N(e),V(o.stopPropagation())}),g(1,h_,2,4,"ng-container",20)(2,b_,6,11,"ng-template",null,9,je),C()}if(t&2){let e=Qe(3),n=p(2);w(n.cx("header")),u(),d("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function __(t,i){t&1&&re(0)}function C_(t,i){if(t&1&&g(0,__,1,0,"ng-container",30),t&2){let e=i.$implicit,n=i.options;p(2);let o=Qe(9);d("ngTemplateOutlet",o)("ngTemplateOutletContext",Ot(2,kp,e,n))}}function w_(t,i){t&1&&re(0)}function S_(t,i){if(t&1&&g(0,w_,1,0,"ng-container",30),t&2){let e=i.options,n=p(4);d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",ge(2,Lp,e))}}function D_(t,i){t&1&&(ae(0),g(1,S_,1,4,"ng-template",null,12,je),le())}function E_(t,i){if(t&1){let e=fe();_(0,"p-scroller",43,11),H("onLazyLoad",function(o){N(e);let r=p(2);return V(r.onLazyLoad.emit(o))}),g(2,C_,1,5,"ng-template",null,2,je)(4,D_,3,0,"ng-container",18),C()}if(t&2){let e=p(2);ct(ge(8,Oo,e.scrollHeight)),d("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),u(4),d("ngIf",e.loaderTemplate||e._loaderTemplate)}}function I_(t,i){t&1&&re(0)}function x_(t,i){if(t&1&&(ae(0),g(1,I_,1,0,"ng-container",30),le()),t&2){p();let e=Qe(9),n=p();u(),d("ngTemplateOutlet",e)("ngTemplateOutletContext",Ot(3,kp,n.visibleOptions(),mn(2,zv)))}}function T_(t,i){if(t&1&&(_(0,"span"),j(1),C()),t&2){let e=p(2).$implicit,n=p(3);u(),xe(n.getOptionGroupLabel(e.optionGroup))}}function M_(t,i){t&1&&re(0)}function A_(t,i){if(t&1&&(ae(0),_(1,"li",47),g(2,T_,2,1,"span",18)(3,M_,1,0,"ng-container",30),C(),le()),t&2){let e=p(),n=e.$implicit,o=e.index,r=p().options,s=p(2);u(),w(s.cx("optionGroup")),d("ngStyle",ge(7,Oo,r.itemSize+"px")),P("id",s.id+"_"+s.getOptionIndex(o,r)),u(),d("ngIf",!s.groupTemplate&&!s._groupTemplate),u(),d("ngTemplateOutlet",s.groupTemplate||s._groupTemplate)("ngTemplateOutletContext",ge(9,Ga,n.optionGroup))}}function O_(t,i){if(t&1){let e=fe();ae(0),_(1,"p-selectItem",48),H("onClick",function(o){N(e);let r=p().$implicit,s=p(3);return V(s.onOptionSelect(o,r))})("onMouseEnter",function(o){N(e);let r=p().index,s=p().options,a=p(2);return V(a.onOptionMouseEnter(o,a.getOptionIndex(r,s)))}),C(),le()}if(t&2){let e=p(),n=e.$implicit,o=e.index,r=p().options,s=p(2);u(),d("id",s.id+"_"+s.getOptionIndex(o,r))("option",n)("checkmark",s.checkmark)("selected",s.isSelected(n))("label",s.getOptionLabel(n))("disabled",s.isOptionDisabled(n))("template",s.itemTemplate||s._itemTemplate)("focused",s.focusedOptionIndex()===s.getOptionIndex(o,r)),Ko("ariaPosInset",s.getAriaPosInset(s.getOptionIndex(o,r)))("ariaSetSize",s.ariaSetSize)}}function R_(t,i){if(t&1&&g(0,A_,4,11,"ng-container",18)(1,O_,2,10,"ng-container",18),t&2){let e=i.$implicit,n=p(3);d("ngIf",n.isOptionGroup(e)),u(),d("ngIf",!n.isOptionGroup(e))}}function F_(t,i){if(t&1&&j(0),t&2){let e=p(4);ke(" ",e.emptyFilterMessageLabel," ")}}function L_(t,i){t&1&&re(0,null,14)}function k_(t,i){if(t&1&&g(0,L_,2,0,"ng-container",31),t&2){let e=p(4);d("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function P_(t,i){if(t&1&&(_(0,"li",47),Ee(1,F_,1,1)(2,k_,1,1,"ng-container"),C()),t&2){let e=p().options,n=p(2);w(n.cx("emptyMessage")),d("ngStyle",ge(4,Oo,e.itemSize+"px")),u(),Ie(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function N_(t,i){if(t&1&&j(0),t&2){let e=p(4);ke(" ",e.emptyMessageLabel," ")}}function V_(t,i){t&1&&re(0,null,15)}function B_(t,i){if(t&1&&g(0,V_,2,0,"ng-container",31),t&2){let e=p(4);d("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function z_(t,i){if(t&1&&(_(0,"li",47),Ee(1,N_,1,1)(2,B_,1,1,"ng-container"),C()),t&2){let e=p().options,n=p(2);w(n.cx("emptyMessage")),d("ngStyle",ge(4,Oo,e.itemSize+"px")),u(),Ie(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function U_(t,i){if(t&1&&(_(0,"ul",44,13),g(2,R_,2,2,"ng-template",45)(3,P_,3,6,"li",46)(4,z_,3,6,"li",46),C()),t&2){let e=i.$implicit,n=i.options,o=p(2);ct(n.contentStyle),w(o.cn(o.cx("list"),n.contentStyleClass)),P("id",o.id+"_list")("aria-label",o.listLabel),u(2),d("ngForOf",e),u(),d("ngIf",o.filterValue&&o.isEmpty()),u(),d("ngIf",!o.filterValue&&o.isEmpty())}}function j_(t,i){t&1&&re(0)}function $_(t,i){if(t&1){let e=fe();_(0,"div",37)(1,"span",38,6),H("focus",function(o){N(e);let r=p();return V(r.onFirstHiddenFocus(o))}),C(),g(3,d_,1,0,"ng-container",31)(4,v_,4,4,"div",27),_(5,"div"),g(6,E_,5,10,"p-scroller",39)(7,x_,2,6,"ng-container",18)(8,U_,5,9,"ng-template",null,7,je),C(),g(10,j_,1,0,"ng-container",31),_(11,"span",38,8),H("focus",function(o){N(e);let r=p();return V(r.onLastHiddenFocus(o))}),C()()}if(t&2){let e=p();w(e.cn(e.cx("overlay"),e.panelStyleClass)),d("ngStyle",e.panelStyle),u(),P("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),u(2),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),u(),d("ngIf",e.filter),u(),w(e.cx("listContainer")),et("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),u(),d("ngIf",e.virtualScroll),u(),d("ngIf",!e.virtualScroll),u(3),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),u(),P("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var H_=`
    ${Op}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`,G_={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},rs=(()=>{class t extends J{name="select";theme=H_;classes=G_;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var W_={provide:Rn,useExisting:Yt(()=>Wa),multi:!0},q_=(()=>{class t extends se{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new W;onMouseEnter=new W;_componentStyle=f(rs);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=v({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",R],focused:[2,"focused","focused",R],label:"label",disabled:[2,"disabled","disabled",R],visible:[2,"visible","visible",R],itemSize:[2,"itemSize","itemSize",Ne],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",R]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[Y([rs]),A],decls:4,vars:19,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class",4,"ngIf"],["data-p-icon","blank",3,"class",4,"ngIf"],["data-p-icon","check"],["data-p-icon","blank"]],template:function(n,o){n&1&&(_(0,"li",0),H("click",function(s){return o.onOptionClick(s)})("mouseenter",function(s){return o.onOptionMouseEnter(s)}),g(1,mv,3,2,"ng-container",1)(2,gv,2,1,"span",1)(3,yv,1,0,"ng-container",2),C()),n&2&&(w(o.cx("option")),d("id",o.id)("ngStyle",ge(15,Oo,o.itemSize+"px")),P("aria-label",o.label)("aria-setsize",o.ariaSetSize)("aria-posinset",o.ariaPosInset)("aria-selected",o.selected)("data-p-focused",o.focused)("data-p-highlight",o.selected)("data-p-disabled",o.disabled),u(),d("ngIf",o.checkmark),u(),d("ngIf",!o.template),u(),d("ngTemplateOutlet",o.template)("ngTemplateOutletContext",ge(17,Ga,o.option)))},dependencies:[ce,Oe,Ve,dt,X,cn,hd,pd],encapsulation:2})}return t})(),Wa=(()=>{class t extends os{zone;filterService;id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){Ca(e,this._options())||this._options.set(e)}appendTo=z(void 0);onChange=new W;onFilter=new W;onFocus=new W;onBlur=new W;onClick=new W;onShow=new W;onHide=new W;onClear=new W;onLazyLoad=new W;_componentStyle=f(rs);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=Te(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=ee(null);_placeholder=ee(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=ee(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=ee(-1);labelId;listId;clicked=ee(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(zr.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(zr.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(zr.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=Te(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let o=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(r=>r.label?r.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:r.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let r=this.options||[],s=[];return r.forEach(a=>{let c=this.getOptionGroupChildren(a).filter(h=>o.includes(h));c.length>0&&s.push(_e(S({},a),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...c]}))}),this.flatOptions(s)}return o}return e});label=Te(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(o=>this.isOptionValueEqualsModelValue(o));return n!==-1?this.getOptionLabel(e[n]):this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,mt(()=>{let o=this.modelValue(),r=this.visibleOptions();if(r&&ve(r)){let s=this.findSelectedOptionIndex();(s!==-1||o===void 0||typeof o=="string"&&o.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=r[s])}zt(r)&&(o===void 0||this.isModelValueNotSet())&&ve(this.selectedOption)&&(this.selectedOption=null),o!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),this.id=this.id||Dt("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=ht(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-select-option-selected");e&&Du(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,o,r)=>{n.push({optionGroup:o,group:!0,index:r});let s=this.getOptionGroupChildren(o);return s&&s.forEach(a=>n.push(a)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,o=!0,r=!1){if(!this.isSelected(n)){let s=this.getOptionValue(n);this.updateModel(s,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),r===!1&&this.onChange.emit({originalEvent:e,value:s})}o&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return this.isValidOption(e)&&di(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){super.ngAfterViewInit(),this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let o=e.querySelector("label");o&&this._placeholder.set(o.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?Bt(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?Bt(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isSelectedOptionEmpty(){return zt(this.selectedOption)}isOptionDisabled(e){return this.getOptionValue(this.modelValue())===this.getOptionValue(e)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(e))&&e.disabled===!1?!1:this.optionDisabled?Bt(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?Bt(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?Bt(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&ve(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&_t(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=ht(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-select-list-container"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=ht(this.itemsWrapper,".p-select-option.p-select-option-selected");n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Xu(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&_t(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&_t(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&Fu(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let o=this.visibleOptions()[n];this.onOptionSelect(e,o,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=ht(this.itemsViewChild.nativeElement,`li[id="${n}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?wa(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return n>-1?n:e}findLastOptionIndex(){return wa(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,o)}this.overlayVisible&&this.hide()}else{let o=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n){let o=e.currentTarget;e.shiftKey?o.setSelectionRange(0,o.value.length):(o.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n){let o=e.currentTarget;if(e.shiftKey)o.setSelectionRange(0,o.value.length);else{let r=o.value.length;o.setSelectionRange(r,r),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,o)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())_t(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let o=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,o)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?bu(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;_t(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?vu(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;_t(n)}hasFocusableElements(){return Pr(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let o=-1,r=!1;return o=this.visibleOptions().findIndex(s=>this.isOptionMatched(s)),o!==-1&&(r=!0),o===-1&&this.focusedOptionIndex()===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,o)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?ht(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():_t(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}static \u0275fac=function(n){return new(n||t)(G(Ke),G(ku))};static \u0275cmp=v({type:t,selectors:[["p-select"]],contentQueries:function(n,o,r){if(n&1&&(U(r,bv,4),U(r,vv,4),U(r,_v,4),U(r,Cv,4),U(r,wv,4),U(r,Rp,4),U(r,Sv,4),U(r,Dv,4),U(r,Ev,4),U(r,Iv,4),U(r,xv,4),U(r,Tv,4),U(r,Mv,4),U(r,Av,4),U(r,Ov,4),U(r,Rv,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.itemTemplate=s.first),L(s=k())&&(o.groupTemplate=s.first),L(s=k())&&(o.loaderTemplate=s.first),L(s=k())&&(o.selectedItemTemplate=s.first),L(s=k())&&(o.headerTemplate=s.first),L(s=k())&&(o.filterTemplate=s.first),L(s=k())&&(o.footerTemplate=s.first),L(s=k())&&(o.emptyFilterTemplate=s.first),L(s=k())&&(o.emptyTemplate=s.first),L(s=k())&&(o.dropdownIconTemplate=s.first),L(s=k())&&(o.loadingIconTemplate=s.first),L(s=k())&&(o.clearIconTemplate=s.first),L(s=k())&&(o.filterIconTemplate=s.first),L(s=k())&&(o.onIconTemplate=s.first),L(s=k())&&(o.offIconTemplate=s.first),L(s=k())&&(o.cancelIconTemplate=s.first),L(s=k())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ge(Rp,5),Ge(Fv,5),Ge(Lv,5),Ge(kv,5),Ge(Pv,5),Ge(Nv,5),Ge(Vv,5),Ge(Bv,5)),n&2){let r;L(r=k())&&(o.filterViewChild=r.first),L(r=k())&&(o.focusInputViewChild=r.first),L(r=k())&&(o.editableInputViewChild=r.first),L(r=k())&&(o.itemsViewChild=r.first),L(r=k())&&(o.scroller=r.first),L(r=k())&&(o.overlayViewChild=r.first),L(r=k())&&(o.firstHiddenFocusableElementOnOverlay=r.first),L(r=k())&&(o.lastHiddenFocusableElementOnOverlay=r.first)}},hostVars:3,hostBindings:function(n,o){n&1&&H("click",function(s){return o.onContainerClick(s)}),n&2&&(P("id",o.id),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",R],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",R],editable:[2,"editable","editable",R],tabindex:[2,"tabindex","tabindex",Ne],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",R],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",R],checkmark:[2,"checkmark","checkmark",R],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",R],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",R],showClear:[2,"showClear","showClear",R],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",R],virtualScroll:[2,"virtualScroll","virtualScroll",R],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",Ne],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",R],selectOnFocus:[2,"selectOnFocus","selectOnFocus",R],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",R],autofocusFilter:[2,"autofocusFilter","autofocusFilter",R],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[Y([W_,rs]),A],decls:11,vars:14,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","hostAttrSelector","visible","options","target","appendTo"],["role","combobox",3,"focus","blur","keydown","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pAutoFocus"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true"],[3,"class",4,"ngIf"],["data-p-icon","chevron-down",3,"class",4,"ngIf"],["data-p-icon","chevron-down"],[3,"ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant"],["data-p-icon","search",4,"ngIf"],["data-p-icon","search"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle",4,"ngIf"],["role","option",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"]],template:function(n,o){if(n&1){let r=fe();g(0,Gv,6,22,"span",16)(1,Wv,2,18,"input",17)(2,Yv,3,2,"ng-container",18),_(3,"div",19),g(4,i_,3,2,"ng-container",20)(5,u_,2,2,"ng-template",null,0,je),C(),_(7,"p-overlay",21,1),Yo("visibleChange",function(a){return N(r),Zo(o.overlayVisible,a)||(o.overlayVisible=a),V(a)}),H("onAnimationStart",function(a){return N(r),V(o.onOverlayAnimationStart(a))})("onHide",function(){return N(r),V(o.hide())}),g(9,$_,13,18,"ng-template",null,2,je),C()}if(n&2){let r=Qe(6);d("ngIf",!o.editable),u(),d("ngIf",o.editable),u(),d("ngIf",o.isVisibleClearIcon),u(),w(o.cx("dropdown")),P("aria-expanded",o.overlayVisible??!1)("data-pc-section","trigger"),u(),d("ngIf",o.loading)("ngIfElse",r),u(3),d("hostAttrSelector",o.attrSelector),Qo("visible",o.overlayVisible),d("options",o.overlayOptions)("target","@parent")("appendTo",o.$appendTo())}},dependencies:[ce,on,Oe,Ve,dt,q_,Ip,wi,gi,yi,fd,md,Ci,uo,po,Ap,X],encapsulation:2,changeDetection:0})}return t})();var Pp=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon, 
    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var K_=["clearicon"],Q_=["incrementbuttonicon"],Z_=["decrementbuttonicon"],Y_=["input"];function X_(t,i){if(t&1){let e=fe();M(),_(0,"svg",7),H("click",function(){N(e);let o=p(2);return V(o.clear())}),C()}if(t&2){let e=p(2);w(e.cx("clearIcon")),P("data-pc-section","clearIcon")}}function J_(t,i){}function e1(t,i){t&1&&g(0,J_,0,0,"ng-template")}function t1(t,i){if(t&1){let e=fe();_(0,"span",8),H("click",function(){N(e);let o=p(2);return V(o.clear())}),g(1,e1,1,0,null,9),C()}if(t&2){let e=p(2);w(e.cx("clearIcon")),P("data-pc-section","clearIcon"),u(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function n1(t,i){if(t&1&&(ae(0),g(1,X_,1,3,"svg",5)(2,t1,2,4,"span",6),le()),t&2){let e=p();u(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),u(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function i1(t,i){if(t&1&&T(0,"span",12),t&2){let e=p(2);d("ngClass",e.incrementButtonIcon),P("data-pc-section","incrementbuttonicon")}}function o1(t,i){t&1&&(M(),T(0,"svg",14)),t&2&&P("data-pc-section","incrementbuttonicon")}function r1(t,i){}function s1(t,i){t&1&&g(0,r1,0,0,"ng-template")}function a1(t,i){if(t&1&&(ae(0),g(1,o1,1,1,"svg",13)(2,s1,1,0,null,9),le()),t&2){let e=p(2);u(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),u(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function l1(t,i){if(t&1&&T(0,"span",12),t&2){let e=p(2);d("ngClass",e.decrementButtonIcon),P("data-pc-section","decrementbuttonicon")}}function c1(t,i){t&1&&(M(),T(0,"svg",16)),t&2&&P("data-pc-section","decrementbuttonicon")}function u1(t,i){}function d1(t,i){t&1&&g(0,u1,0,0,"ng-template")}function p1(t,i){if(t&1&&(ae(0),g(1,c1,1,1,"svg",15)(2,d1,1,0,null,9),le()),t&2){let e=p(2);u(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),u(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function h1(t,i){if(t&1){let e=fe();_(0,"span")(1,"button",10),H("mousedown",function(o){N(e);let r=p();return V(r.onUpButtonMouseDown(o))})("mouseup",function(){N(e);let o=p();return V(o.onUpButtonMouseUp())})("mouseleave",function(){N(e);let o=p();return V(o.onUpButtonMouseLeave())})("keydown",function(o){N(e);let r=p();return V(r.onUpButtonKeyDown(o))})("keyup",function(){N(e);let o=p();return V(o.onUpButtonKeyUp())}),g(2,i1,1,2,"span",11)(3,a1,3,2,"ng-container",2),C(),_(4,"button",10),H("mousedown",function(o){N(e);let r=p();return V(r.onDownButtonMouseDown(o))})("mouseup",function(){N(e);let o=p();return V(o.onDownButtonMouseUp())})("mouseleave",function(){N(e);let o=p();return V(o.onDownButtonMouseLeave())})("keydown",function(o){N(e);let r=p();return V(r.onDownButtonKeyDown(o))})("keyup",function(){N(e);let o=p();return V(o.onDownButtonKeyUp())}),g(5,l1,1,2,"span",11)(6,p1,3,2,"ng-container",2),C()()}if(t&2){let e=p();w(e.cx("buttonGroup")),P("data-pc-section","buttonGroup"),u(),w(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),P("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),u(),d("ngIf",e.incrementButtonIcon),u(),d("ngIf",!e.incrementButtonIcon),u(),w(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),P("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),u(),d("ngIf",e.decrementButtonIcon),u(),d("ngIf",!e.decrementButtonIcon)}}function f1(t,i){if(t&1&&T(0,"span",12),t&2){let e=p(2);d("ngClass",e.incrementButtonIcon),P("data-pc-section","incrementbuttonicon")}}function m1(t,i){t&1&&(M(),T(0,"svg",14)),t&2&&P("data-pc-section","incrementbuttonicon")}function g1(t,i){}function y1(t,i){t&1&&g(0,g1,0,0,"ng-template")}function b1(t,i){if(t&1&&(ae(0),g(1,m1,1,1,"svg",13)(2,y1,1,0,null,9),le()),t&2){let e=p(2);u(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),u(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function v1(t,i){if(t&1){let e=fe();_(0,"button",10),H("mousedown",function(o){N(e);let r=p();return V(r.onUpButtonMouseDown(o))})("mouseup",function(){N(e);let o=p();return V(o.onUpButtonMouseUp())})("mouseleave",function(){N(e);let o=p();return V(o.onUpButtonMouseLeave())})("keydown",function(o){N(e);let r=p();return V(r.onUpButtonKeyDown(o))})("keyup",function(){N(e);let o=p();return V(o.onUpButtonKeyUp())}),g(1,f1,1,2,"span",11)(2,b1,3,2,"ng-container",2),C()}if(t&2){let e=p();w(e.cx("incrementButton")),P("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),u(),d("ngIf",e.incrementButtonIcon),u(),d("ngIf",!e.incrementButtonIcon)}}function _1(t,i){if(t&1&&T(0,"span",12),t&2){let e=p(2);d("ngClass",e.decrementButtonIcon),P("data-pc-section","decrementbuttonicon")}}function C1(t,i){t&1&&(M(),T(0,"svg",16)),t&2&&P("data-pc-section","decrementbuttonicon")}function w1(t,i){}function S1(t,i){t&1&&g(0,w1,0,0,"ng-template")}function D1(t,i){if(t&1&&(ae(0),g(1,C1,1,1,"svg",15)(2,S1,1,0,null,9),le()),t&2){let e=p(2);u(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),u(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function E1(t,i){if(t&1){let e=fe();_(0,"button",10),H("mousedown",function(o){N(e);let r=p();return V(r.onDownButtonMouseDown(o))})("mouseup",function(){N(e);let o=p();return V(o.onDownButtonMouseUp())})("mouseleave",function(){N(e);let o=p();return V(o.onDownButtonMouseLeave())})("keydown",function(o){N(e);let r=p();return V(r.onDownButtonKeyDown(o))})("keyup",function(){N(e);let o=p();return V(o.onDownButtonKeyUp())}),g(1,_1,1,2,"span",11)(2,D1,3,2,"ng-container",2),C()}if(t&2){let e=p();w(e.cx("decrementButton")),P("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),u(),d("ngIf",e.decrementButtonIcon),u(),d("ngIf",!e.decrementButtonIcon)}}var I1=`
    ${Pp}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,x1={root:({instance:t})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled()||t.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-stacked":t.showButtons&&t.buttonLayout==="stacked","p-inputnumber-horizontal":t.showButtons&&t.buttonLayout==="horizontal","p-inputnumber-vertical":t.showButtons&&t.buttonLayout==="vertical","p-inputnumber-fluid":t.hasFluid,"p-invalid":t.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:t})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":t.showButtons&&t.max()!=null&&t.maxlength()}],decrementButton:({instance:t})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":t.showButtons&&t.min()!=null&&t.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Np=(()=>{class t extends J{name="inputnumber";theme=I1;classes=x1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var T1={provide:Rn,useExisting:Yt(()=>qa),multi:!0},qa=(()=>{class t extends os{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new W;onFocus=new W;onBlur=new W;onKeyDown=new W;onClear=new W;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=f(Np);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(o=>!!e[o])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(xt,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(e.map((o,r)=>[o,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>n.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,_e(S({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let o=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(o=this.prefix+o),this.suffix&&e!=this.suffix&&(o=o+this.suffix),o}return e.toString()}return""}parseValue(e){let n=new RegExp(this._suffix,""),o=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),s=e.replace(n,"").replace(o,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(s){if(s==="-")return s;let a=+s;return isNaN(a)?null:a}return null}repeat(e,n,o){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,o)},r),this.spin(e,o)}spin(e,n){let o=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,s=this.validateValue(r+o);this.maxlength()&&this.maxlength()<this.formatValue(s).length||(this.updateInput(s,null,"spin",null),this.updateModel(e,s),this.handleOnInput(e,r,s))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,o=e.target.selectionEnd,r=e.target.value,s=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let a=n;a<=r.length;a++){let l=a===0?0:a-1;if(this.isNumeralChar(r.charAt(l))){this.input.nativeElement.setSelectionRange(a,a);break}}break;case"ArrowRight":for(let a=o;a>=0;a--)if(this.isNumeralChar(r.charAt(a))){this.input.nativeElement.setSelectionRange(a,a);break}break;case"Tab":case"Enter":s=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(s),this.input.nativeElement.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),n===o){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let a=r.charAt(n-1),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let h=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,s=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,h?this.input?.nativeElement.setSelectionRange(n-1,n-1):s=r.slice(0,n-1)+r.slice(n);else if(l>0&&n>l){let m=this.isDecimalMode()&&(this.minFractionDigits||0)<h?"":"0";s=r.slice(0,n-1)+m+r.slice(n)}else c===1?(s=r.slice(0,n-1)+"0"+r.slice(n),s=this.parseValue(s)>0?s:""):s=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&a.search(this._currency)!=-1&&(s=r.slice(1));this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(r,n,o),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===o){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let a=r.charAt(n),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let h=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,s=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(a))this._decimal.lastIndex=0,h?this.input?.nativeElement.setSelectionRange(n+1,n+1):s=r.slice(0,n)+r.slice(n+1);else if(l>0&&n>l){let m=this.isDecimalMode()&&(this.minFractionDigits||0)<h?"":"0";s=r.slice(0,n)+m+r.slice(n+1)}else c===1?(s=r.slice(0,n)+"0"+r.slice(n+1),s=this.parseValue(s)>0?s:""):s=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(r,n,o),this.updateValue(e,s,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,o=String.fromCharCode(n),r=this.isDecimalSign(o),s=this.isMinusSign(o);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,o=this._decimalChar,n=o.charCodeAt(0));let{value:a,selectionStart:l,selectionEnd:c}=this.input.nativeElement,h=this.parseValue(a+o),m=h!=null?h.toString():"",y=a.substring(l,c),b=this.parseValue(y),x=b!=null?b.toString():"";if(l!==c&&x.length>0){this.insert(e,o,{isDecimalSign:r,isMinusSign:s});return}this.maxlength()&&m.length>this.maxlength()||(48<=n&&n<=57||s||r)&&this.insert(e,o,{isDecimalSign:r,isMinusSign:s})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let o=this.parseValue(n);o!=null&&this.insert(e,o.toString())}}}allowMinusSign(){return this.min()==null||this.min()<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let o=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let s=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:o,suffixCharIndex:r,currencyCharIndex:s}}insert(e,n,o={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let s=this.input?.nativeElement.selectionStart,a=this.input?.nativeElement.selectionEnd,l=this.input?.nativeElement.value.trim(),{decimalCharIndex:c,minusCharIndex:h,suffixCharIndex:m,currencyCharIndex:y}=this.getCharIndexes(l),b;if(o.isMinusSign)s===0&&(b=l,(h===-1||a!==0)&&(b=this.insertText(l,n,0,a)),this.updateValue(e,b,n,"insert"));else if(o.isDecimalSign)c>0&&s===c?this.updateValue(e,l,n,"insert"):c>s&&c<a?(b=this.insertText(l,n,s,a),this.updateValue(e,b,n,"insert")):c===-1&&this.maxFractionDigits&&(b=this.insertText(l,n,s,a),this.updateValue(e,b,n,"insert"));else{let x=this.numberFormat.resolvedOptions().maximumFractionDigits,B=s!==a?"range-insert":"insert";if(c>0&&s>c){if(s+n.length-(c+1)<=x){let I=y>=s?y-1:m>=s?m:l.length;b=l.slice(0,s)+n+l.slice(s+n.length,I)+l.slice(I),this.updateValue(e,b,n,B)}}else b=this.insertText(l,n,s,a),this.updateValue(e,b,n,B)}}insertText(e,n,o,r){if((n==="."?n:n.split(".")).length===2){let a=e.slice(o,r).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,o)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-o===e.length?this.formatValue(n):o===0?n+e.slice(r):r===e.length?e.slice(0,o)+n:e.slice(0,o)+n+e.slice(r)}deleteRange(e,n,o){let r;return o-n===e.length?r="":n===0?r=e.slice(o):o===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(o),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,o=this.input?.nativeElement.value,r=o.length,s=null,a=(this.prefixChar||"").length;o=o.replace(this._prefix,""),(e===n||e!==0||n<a)&&(e-=a);let l=o.charAt(e);if(this.isNumeralChar(l))return e+a;let c=e-1;for(;c>=0;)if(l=o.charAt(c),this.isNumeralChar(l)){s=c+a;break}else c--;if(s!==null)this.input?.nativeElement.setSelectionRange(s+1,s+1);else{for(c=e;c<r;)if(l=o.charAt(c),this.isNumeralChar(l)){s=c+a;break}else c++;s!==null&&this.input?.nativeElement.setSelectionRange(s,s)}return s||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Cu()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,o,r){let s=this.input?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty?0:a,this.updateInput(a,o,r,n),this.handleOnInput(e,s,a))}handleOnInput(e,n,o){this.isValueChanged(n,o)&&(this.input.nativeElement.value=this.formatValue(o),this.input?.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o),this.onInput.emit({originalEvent:e,value:o,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let o=typeof e=="string"?this.parseValue(e):e;return n!==o}return!1}validateValue(e){return e==="-"||e==null?null:this.min()!=null&&e<this.min()?this.min():this.max()!=null&&e>this.max()?this.max():e}updateInput(e,n,o,r){n=n||"";let s=this.input?.nativeElement.value,a=this.formatValue(e),l=s.length;if(a!==r&&(a=this.concatValues(a,r)),l===0){this.input.nativeElement.value=a,this.input.nativeElement.setSelectionRange(0,0);let h=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(h,h)}else{let c=this.input.nativeElement.selectionStart,h=this.input.nativeElement.selectionEnd;if(this.maxlength()&&a.length>this.maxlength()&&(a=a.slice(0,this.maxlength()),c=Math.min(c,this.maxlength()),h=Math.min(h,this.maxlength())),this.maxlength()&&this.maxlength()<a.length)return;this.input.nativeElement.value=a;let m=a.length;if(o==="range-insert"){let y=this.parseValue((s||"").slice(0,c)),x=(y!==null?y.toString():"").split("").join(`(${this.groupChar})?`),B=new RegExp(x,"g");B.test(a);let I=n.split("").join(`(${this.groupChar})?`),O=new RegExp(I,"g");O.test(a.slice(B.lastIndex)),h=B.lastIndex+O.lastIndex,this.input.nativeElement.setSelectionRange(h,h)}else if(m===l)o==="insert"||o==="delete-back-single"?this.input.nativeElement.setSelectionRange(h+1,h+1):o==="delete-single"?this.input.nativeElement.setSelectionRange(h-1,h-1):(o==="delete-range"||o==="spin")&&this.input.nativeElement.setSelectionRange(h,h);else if(o==="delete-back-single"){let y=s.charAt(h-1),b=s.charAt(h),x=l-m,B=this._group.test(b);B&&x===1?h+=1:!B&&this.isNumeralChar(y)&&(h+=-1*x+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(h,h)}else if(s==="-"&&o==="insert"){this.input.nativeElement.setSelectionRange(0,0);let b=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(b,b)}else h=h+(m-l),this.input.nativeElement.setSelectionRange(h,h)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let o=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?o!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(o)+this.suffixChar:e:o!==-1?e.split(this._decimal)[0]+n.slice(o):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),o=n?.toString();this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let o=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,o&&this.focused||this.onModelChange(n)):o&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||t)(G(Jt))};static \u0275cmp=v({type:t,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,o,r){if(n&1&&(U(r,K_,4),U(r,Q_,4),U(r,Z_,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.clearIconTemplate=s.first),L(s=k())&&(o.incrementButtonIconTemplate=s.first),L(s=k())&&(o.decrementButtonIconTemplate=s.first),L(s=k())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&Ge(Y_,5),n&2){let r;L(r=k())&&(o.input=r.first)}},hostVars:4,hostBindings:function(n,o){n&2&&(P("data-pc-name","inputnumber")("data-pc-section","root"),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",R],format:[2,"format","format",R],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",Ne],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",R],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",R],allowEmpty:[2,"allowEmpty","allowEmpty",R],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",R],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>Ne(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>Ne(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",R],autofocus:[2,"autofocus","autofocus",R]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[Y([T1,Np]),A,Le],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(n,o){if(n&1){let r=fe();_(0,"input",1,0),H("input",function(a){return N(r),V(o.onUserInput(a))})("keydown",function(a){return N(r),V(o.onInputKeyDown(a))})("keypress",function(a){return N(r),V(o.onInputKeyPress(a))})("paste",function(a){return N(r),V(o.onPaste(a))})("click",function(){return N(r),V(o.onInputClick())})("focus",function(a){return N(r),V(o.onInputFocus(a))})("blur",function(a){return N(r),V(o.onInputBlur(a))}),C(),g(2,n1,3,2,"ng-container",2)(3,h1,7,17,"span",3)(4,v1,3,7,"button",4)(5,E1,3,7,"button",4)}n&2&&(w(o.cn(o.cx("pcInputText"),o.inputStyleClass)),d("value",o.formattedValue())("ngStyle",o.inputStyle)("variant",o.$variant())("invalid",o.invalid())("pSize",o.size())("pAutoFocus",o.autofocus)("fluid",o.hasFluid),P("id",o.inputId)("aria-valuemin",o.min())("aria-valuemax",o.max())("aria-valuenow",o.value)("placeholder",o.placeholder)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy)("aria-describedby",o.ariaDescribedBy)("title",o.title)("size",o.inputSize())("name",o.name())("autocomplete",o.autocomplete)("maxlength",o.maxlength())("minlength",o.minlength())("tabindex",o.tabindex)("aria-required",o.ariaRequired)("min",o.min())("max",o.max())("step",o.step()??1)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("data-pc-section","input"),u(2),d("ngIf",o.buttonLayout!="vertical"&&o.showClear&&o.value),u(),d("ngIf",o.showButtons&&o.buttonLayout==="stacked"),u(),d("ngIf",o.showButtons&&o.buttonLayout!=="stacked"),u(),d("ngIf",o.showButtons&&o.buttonLayout!=="stacked"))},dependencies:[ce,gt,Oe,Ve,dt,Ci,gi,yi,dd,ld,X],encapsulation:2,changeDetection:0})}return t})();var Vp=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`;var M1=["dropdownicon"],A1=["firstpagelinkicon"],O1=["previouspagelinkicon"],R1=["lastpagelinkicon"],F1=["nextpagelinkicon"],ss=t=>({$implicit:t}),L1=t=>({pageLink:t});function k1(t,i){t&1&&re(0)}function P1(t,i){if(t&1&&(_(0,"div"),g(1,k1,1,0,"ng-container",9),C()),t&2){let e=p();w(e.cx("contentStart")),P("data-pc-section","start"),u(),d("ngTemplateOutlet",e.templateLeft)("ngTemplateOutletContext",ge(5,ss,e.paginatorState))}}function N1(t,i){if(t&1&&(_(0,"span"),j(1),C()),t&2){let e=p();w(e.cx("current")),u(),xe(e.currentPageReport)}}function V1(t,i){if(t&1&&(M(),T(0,"svg",12)),t&2){let e=p(2);w(e.cx("firstIcon"))}}function B1(t,i){}function z1(t,i){t&1&&g(0,B1,0,0,"ng-template")}function U1(t,i){if(t&1&&(_(0,"span"),g(1,z1,1,0,null,13),C()),t&2){let e=p(2);w(e.cx("firstIcon")),u(),d("ngTemplateOutlet",e.firstPageLinkIconTemplate||e._firstPageLinkIconTemplate)}}function j1(t,i){if(t&1){let e=fe();_(0,"button",10),H("click",function(o){N(e);let r=p();return V(r.changePageToFirst(o))}),g(1,V1,1,2,"svg",11)(2,U1,2,3,"span",0),C()}if(t&2){let e=p();w(e.cx("first")),P("aria-label",e.getAriaLabel("firstPageLabel")),u(),d("ngIf",!e.firstPageLinkIconTemplate&&!e._firstPageLinkIconTemplate),u(),d("ngIf",e.firstPageLinkIconTemplate||e._firstPageLinkIconTemplate)}}function $1(t,i){if(t&1&&(M(),T(0,"svg",14)),t&2){let e=p();w(e.cx("prevIcon"))}}function H1(t,i){}function G1(t,i){t&1&&g(0,H1,0,0,"ng-template")}function W1(t,i){if(t&1&&(_(0,"span"),g(1,G1,1,0,null,13),C()),t&2){let e=p();w(e.cx("prevIcon")),u(),d("ngTemplateOutlet",e.previousPageLinkIconTemplate||e._previousPageLinkIconTemplate)}}function q1(t,i){if(t&1){let e=fe();_(0,"button",10),H("click",function(o){let r=N(e).$implicit,s=p(2);return V(s.onPageLinkClick(o,r-1))}),j(1),C()}if(t&2){let e=i.$implicit,n=p(2);w(n.cx("page",ge(5,L1,e))),P("aria-label",n.getPageAriaLabel(e))("aria-current",e-1==n.getPage()?"page":void 0),u(),ke(" ",n.getLocalization(e)," ")}}function K1(t,i){if(t&1&&(_(0,"span"),g(1,q1,2,7,"button",15),C()),t&2){let e=p();w(e.cx("pages")),u(),d("ngForOf",e.pageLinks)}}function Q1(t,i){if(t&1&&j(0),t&2){let e=p(2);xe(e.currentPageReport)}}function Z1(t,i){t&1&&re(0)}function Y1(t,i){if(t&1&&g(0,Z1,1,0,"ng-container",9),t&2){let e=i.$implicit,n=p(3);d("ngTemplateOutlet",n.jumpToPageItemTemplate)("ngTemplateOutletContext",ge(2,ss,e))}}function X1(t,i){t&1&&(ae(0),g(1,Y1,1,4,"ng-template",19),le())}function J1(t,i){t&1&&re(0)}function eC(t,i){if(t&1&&g(0,J1,1,0,"ng-container",13),t&2){let e=p(3);d("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function tC(t,i){t&1&&g(0,eC,1,1,"ng-template",20)}function nC(t,i){if(t&1){let e=fe();_(0,"p-select",16),H("onChange",function(o){N(e);let r=p();return V(r.onPageDropdownChange(o))}),g(1,Q1,1,1,"ng-template",17)(2,X1,2,0,"ng-container",18)(3,tC,1,0,null,18),C()}if(t&2){let e=p();d("options",e.pageItems)("ngModel",e.getPage())("disabled",e.empty())("styleClass",e.cx("pcJumpToPageDropdown"))("appendTo",e.dropdownAppendTo||e.$appendTo())("scrollHeight",e.dropdownScrollHeight),P("aria-label",e.getAriaLabel("jumpToPageDropdownLabel")),u(2),d("ngIf",e.jumpToPageItemTemplate),u(),d("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function iC(t,i){if(t&1&&(M(),T(0,"svg",21)),t&2){let e=p();w(e.cx("nextIcon"))}}function oC(t,i){}function rC(t,i){t&1&&g(0,oC,0,0,"ng-template")}function sC(t,i){if(t&1&&(_(0,"span"),g(1,rC,1,0,null,13),C()),t&2){let e=p();w(e.cx("nextIcon")),u(),d("ngTemplateOutlet",e.nextPageLinkIconTemplate||e._nextPageLinkIconTemplate)}}function aC(t,i){if(t&1&&(M(),T(0,"svg",23)),t&2){let e=p(2);w(e.cx("lastIcon"))}}function lC(t,i){}function cC(t,i){t&1&&g(0,lC,0,0,"ng-template")}function uC(t,i){if(t&1&&(_(0,"span"),g(1,cC,1,0,null,13),C()),t&2){let e=p(2);w(e.cx("lastIcon")),u(),d("ngTemplateOutlet",e.lastPageLinkIconTemplate||e._lastPageLinkIconTemplate)}}function dC(t,i){if(t&1){let e=fe();_(0,"button",2),H("click",function(o){N(e);let r=p();return V(r.changePageToLast(o))}),g(1,aC,1,2,"svg",22)(2,uC,2,3,"span",0),C()}if(t&2){let e=p();w(e.cx("last")),d("disabled",e.isLastPage()||e.empty()),P("aria-label",e.getAriaLabel("lastPageLabel")),u(),d("ngIf",!e.lastPageLinkIconTemplate&&!e._lastPageLinkIconTemplate),u(),d("ngIf",e.lastPageLinkIconTemplate||e._lastPageLinkIconTemplate)}}function pC(t,i){if(t&1){let e=fe();_(0,"p-inputnumber",24),H("ngModelChange",function(o){N(e);let r=p();return V(r.changePage(o-1))}),C()}if(t&2){let e=p();w(e.cx("pcJumpToPageInput")),d("ngModel",e.currentPage())("disabled",e.empty())}}function hC(t,i){t&1&&re(0)}function fC(t,i){if(t&1&&g(0,hC,1,0,"ng-container",9),t&2){let e=i.$implicit,n=p(3);d("ngTemplateOutlet",n.dropdownItemTemplate)("ngTemplateOutletContext",ge(2,ss,e))}}function mC(t,i){t&1&&(ae(0),g(1,fC,1,4,"ng-template",19),le())}function gC(t,i){t&1&&re(0)}function yC(t,i){if(t&1&&g(0,gC,1,0,"ng-container",13),t&2){let e=p(3);d("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function bC(t,i){t&1&&g(0,yC,1,1,"ng-template",20)}function vC(t,i){if(t&1){let e=fe();_(0,"p-select",25),Yo("ngModelChange",function(o){N(e);let r=p();return Zo(r.rows,o)||(r.rows=o),V(o)}),H("onChange",function(o){N(e);let r=p();return V(r.onRppChange(o))}),g(1,mC,2,0,"ng-container",18)(2,bC,1,0,null,18),C()}if(t&2){let e=p();d("options",e.rowsPerPageItems),Qo("ngModel",e.rows),d("styleClass",e.cx("pcRowPerPageDropdown"))("disabled",e.empty())("appendTo",e.dropdownAppendTo||e.$appendTo())("scrollHeight",e.dropdownScrollHeight),Ko("ariaLabel",e.getAriaLabel("rowsPerPageLabel")),u(),d("ngIf",e.dropdownItemTemplate),u(),d("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function _C(t,i){t&1&&re(0)}function CC(t,i){if(t&1&&(_(0,"div"),g(1,_C,1,0,"ng-container",9),C()),t&2){let e=p();w(e.cx("contentEnd")),P("data-pc-section","end"),u(),d("ngTemplateOutlet",e.templateRight)("ngTemplateOutletContext",ge(5,ss,e.paginatorState))}}var wC={paginator:({instance:t})=>["p-paginator p-component"],content:"p-paginator-content",contentStart:"p-paginator-content-start",contentEnd:"p-paginator-content-end",first:({instance:t})=>["p-paginator-first",{"p-disabled":t.isFirstPage()||t.empty()}],firstIcon:"p-paginator-first-icon",prev:({instance:t})=>["p-paginator-prev",{"p-disabled":t.isFirstPage()||t.empty()}],prevIcon:"p-paginator-prev-icon",next:({instance:t})=>["p-paginator-next",{"p-disabled":t.isLastPage()||t.empty()}],nextIcon:"p-paginator-next-icon",last:({instance:t})=>["p-paginator-last",{"p-disabled":t.isLastPage()||t.empty()}],lastIcon:"p-paginator-last-icon",pages:"p-paginator-pages",page:({instance:t,pageLink:i})=>["p-paginator-page",{"p-paginator-page-selected":i-1==t.getPage()}],current:"p-paginator-current",pcRowPerPageDropdown:"p-paginator-rpp-dropdown",pcJumpToPageDropdown:"p-paginator-jtp-dropdown",pcJumpToPageInput:"p-paginator-jtp-input"},Bp=(()=>{class t extends J{name="paginator";theme=Vp;classes=wC;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Ka=(()=>{class t extends se{pageLinkSize=5;styleClass;alwaysShow=!0;dropdownAppendTo;templateLeft;templateRight;dropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showFirstLastIcon=!0;totalRecords=0;rows=0;rowsPerPageOptions;showJumpToPageDropdown;showJumpToPageInput;jumpToPageItemTemplate;showPageLinks=!0;locale;dropdownItemTemplate;get first(){return this._first}set first(e){this._first=e}appendTo=z(void 0);onPageChange=new W;dropdownIconTemplate;firstPageLinkIconTemplate;previousPageLinkIconTemplate;lastPageLinkIconTemplate;nextPageLinkIconTemplate;templates;_dropdownIconTemplate;_firstPageLinkIconTemplate;_previousPageLinkIconTemplate;_lastPageLinkIconTemplate;_nextPageLinkIconTemplate;pageLinks;pageItems;rowsPerPageItems;paginatorState;_first=0;_page=0;_componentStyle=f(Bp);$appendTo=Te(()=>this.appendTo()||this.config.overlayAppendTo());get display(){return this.alwaysShow||this.pageLinks&&this.pageLinks.length>1?null:"none"}constructor(){super()}ngOnInit(){super.ngOnInit(),this.updatePaginatorState()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"firstpagelinkicon":this._firstPageLinkIconTemplate=e.template;break;case"previouspagelinkicon":this._previousPageLinkIconTemplate=e.template;break;case"lastpagelinkicon":this._lastPageLinkIconTemplate=e.template;break;case"nextpagelinkicon":this._nextPageLinkIconTemplate=e.template;break}})}getAriaLabel(e){return this.config.translation.aria?this.config.translation.aria[e]:void 0}getPageAriaLabel(e){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,`${e}`):void 0}getLocalization(e){let n=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),o=new Map(n.map((r,s)=>[s,r]));return e>9?String(e).split("").map(s=>o.get(Number(s))).join(""):o.get(e)}ngOnChanges(e){super.ngOnChanges(e),e.totalRecords&&(this.updatePageLinks(),this.updatePaginatorState(),this.updateFirst(),this.updateRowsPerPageOptions()),e.first&&(this._first=e.first.currentValue,this.updatePageLinks(),this.updatePaginatorState()),e.rows&&(this.updatePageLinks(),this.updatePaginatorState()),e.rowsPerPageOptions&&this.updateRowsPerPageOptions(),e.pageLinkSize&&this.updatePageLinks()}updateRowsPerPageOptions(){if(this.rowsPerPageOptions){this.rowsPerPageItems=[];let e=null;for(let n of this.rowsPerPageOptions)typeof n=="object"&&n.showAll?e={label:n.showAll,value:this.totalRecords}:this.rowsPerPageItems.push({label:String(this.getLocalization(n)),value:n});e&&this.rowsPerPageItems.push(e)}}isFirstPage(){return this.getPage()===0}isLastPage(){return this.getPage()===this.getPageCount()-1}getPageCount(){return Math.ceil(this.totalRecords/this.rows)}calculatePageLinkBoundaries(){let e=this.getPageCount(),n=Math.min(this.pageLinkSize,e),o=Math.max(0,Math.ceil(this.getPage()-n/2)),r=Math.min(e-1,o+n-1);var s=this.pageLinkSize-(r-o+1);return o=Math.max(0,o-s),[o,r]}updatePageLinks(){this.pageLinks=[];let e=this.calculatePageLinkBoundaries(),n=e[0],o=e[1];for(let r=n;r<=o;r++)this.pageLinks.push(r+1);if(this.showJumpToPageDropdown){this.pageItems=[];for(let r=0;r<this.getPageCount();r++)this.pageItems.push({label:String(r+1),value:r})}}changePage(e){var n=this.getPageCount();if(e>=0&&e<n){this._first=this.rows*e;var o={page:e,first:this.first,rows:this.rows,pageCount:n};this.updatePageLinks(),this.onPageChange.emit(o),this.updatePaginatorState()}}updateFirst(){let e=this.getPage();e>0&&this.totalRecords&&this.first>=this.totalRecords&&Promise.resolve(null).then(()=>this.changePage(e-1))}getPage(){return Math.floor(this.first/this.rows)}changePageToFirst(e){this.isFirstPage()||this.changePage(0),e.preventDefault()}changePageToPrev(e){this.changePage(this.getPage()-1),e.preventDefault()}changePageToNext(e){this.changePage(this.getPage()+1),e.preventDefault()}changePageToLast(e){this.isLastPage()||this.changePage(this.getPageCount()-1),e.preventDefault()}onPageLinkClick(e,n){this.changePage(n),e.preventDefault()}onRppChange(e){this.changePage(this.getPage())}onPageDropdownChange(e){this.changePage(e.value)}updatePaginatorState(){this.paginatorState={page:this.getPage(),pageCount:this.getPageCount(),rows:this.rows,first:this.first,totalRecords:this.totalRecords}}empty(){return this.getPageCount()===0}currentPage(){return this.getPageCount()>0?this.getPage()+1:0}get currentPageReport(){return this.currentPageReportTemplate.replace("{currentPage}",String(this.currentPage())).replace("{totalPages}",String(this.getPageCount())).replace("{first}",String(this.totalRecords>0?this._first+1:0)).replace("{last}",String(Math.min(this._first+this.rows,this.totalRecords))).replace("{rows}",String(this.rows)).replace("{totalRecords}",String(this.totalRecords))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=v({type:t,selectors:[["p-paginator"]],contentQueries:function(n,o,r){if(n&1&&(U(r,M1,4),U(r,A1,4),U(r,O1,4),U(r,R1,4),U(r,F1,4),U(r,Be,4)),n&2){let s;L(s=k())&&(o.dropdownIconTemplate=s.first),L(s=k())&&(o.firstPageLinkIconTemplate=s.first),L(s=k())&&(o.previousPageLinkIconTemplate=s.first),L(s=k())&&(o.lastPageLinkIconTemplate=s.first),L(s=k())&&(o.nextPageLinkIconTemplate=s.first),L(s=k())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&2&&(P("data-pc-name","paginator")("data-pc-section","root"),w(o.cn(o.cx("paginator"),o.styleClass)),et("display",o.display))},inputs:{pageLinkSize:[2,"pageLinkSize","pageLinkSize",Ne],styleClass:"styleClass",alwaysShow:[2,"alwaysShow","alwaysShow",R],dropdownAppendTo:"dropdownAppendTo",templateLeft:"templateLeft",templateRight:"templateRight",dropdownScrollHeight:"dropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",R],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",R],totalRecords:[2,"totalRecords","totalRecords",Ne],rows:[2,"rows","rows",Ne],rowsPerPageOptions:"rowsPerPageOptions",showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",R],showJumpToPageInput:[2,"showJumpToPageInput","showJumpToPageInput",R],jumpToPageItemTemplate:"jumpToPageItemTemplate",showPageLinks:[2,"showPageLinks","showPageLinks",R],locale:"locale",dropdownItemTemplate:"dropdownItemTemplate",first:"first",appendTo:[1,"appendTo"]},outputs:{onPageChange:"onPageChange"},features:[Y([Bp]),A,Le],decls:15,vars:21,consts:[[3,"class",4,"ngIf"],["type","button","pRipple","",3,"class","click",4,"ngIf"],["type","button","pRipple","",3,"click","disabled"],["data-p-icon","angle-left",3,"class",4,"ngIf"],[3,"options","ngModel","disabled","styleClass","appendTo","scrollHeight","onChange",4,"ngIf"],["data-p-icon","angle-right",3,"class",4,"ngIf"],["type","button","pRipple","",3,"disabled","class","click",4,"ngIf"],[3,"ngModel","class","disabled","ngModelChange",4,"ngIf"],[3,"options","ngModel","styleClass","disabled","appendTo","scrollHeight","ariaLabel","ngModelChange","onChange",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","pRipple","",3,"click"],["data-p-icon","angle-double-left",3,"class",4,"ngIf"],["data-p-icon","angle-double-left"],[4,"ngTemplateOutlet"],["data-p-icon","angle-left"],["type","button","pRipple","",3,"class","click",4,"ngFor","ngForOf"],[3,"onChange","options","ngModel","disabled","styleClass","appendTo","scrollHeight"],["pTemplate","selectedItem"],[4,"ngIf"],["pTemplate","item"],["pTemplate","dropdownicon"],["data-p-icon","angle-right"],["data-p-icon","angle-double-right",3,"class",4,"ngIf"],["data-p-icon","angle-double-right"],[3,"ngModelChange","ngModel","disabled"],[3,"ngModelChange","onChange","options","ngModel","styleClass","disabled","appendTo","scrollHeight","ariaLabel"]],template:function(n,o){n&1&&(g(0,P1,2,7,"div",0)(1,N1,2,3,"span",0)(2,j1,3,5,"button",1),_(3,"button",2),H("click",function(s){return o.changePageToPrev(s)}),g(4,$1,1,2,"svg",3)(5,W1,2,3,"span",0),C(),g(6,K1,2,3,"span",0)(7,nC,4,9,"p-select",4),_(8,"button",2),H("click",function(s){return o.changePageToNext(s)}),g(9,iC,1,2,"svg",5)(10,sC,2,3,"span",0),C(),g(11,dC,3,6,"button",6)(12,pC,1,4,"p-inputnumber",7)(13,vC,3,9,"p-select",8)(14,CC,2,7,"div",0)),n&2&&(d("ngIf",o.templateLeft),u(),d("ngIf",o.showCurrentPageReport),u(),d("ngIf",o.showFirstLastIcon),u(),w(o.cx("prev")),d("disabled",o.isFirstPage()||o.empty()),P("aria-label",o.getAriaLabel("prevPageLabel")),u(),d("ngIf",!o.previousPageLinkIconTemplate&&!o._previousPageLinkIconTemplate),u(),d("ngIf",o.previousPageLinkIconTemplate||o._previousPageLinkIconTemplate),u(),d("ngIf",o.showPageLinks),u(),d("ngIf",o.showJumpToPageDropdown),u(),w(o.cx("next")),d("disabled",o.isLastPage()||o.empty()),P("aria-label",o.getAriaLabel("nextPageLabel")),u(),d("ngIf",!o.nextPageLinkIconTemplate&&!o._nextPageLinkIconTemplate),u(),d("ngIf",o.nextPageLinkIconTemplate||o._nextPageLinkIconTemplate),u(),d("ngIf",o.showFirstLastIcon),u(),d("ngIf",o.showJumpToPageInput),u(),d("ngIf",o.rowsPerPageOptions),u(),d("ngIf",o.templateRight))},dependencies:[ce,on,Oe,Ve,Wa,qa,Kd,Zr,ka,cn,sd,ad,cd,ud,X,Be],encapsulation:2,changeDetection:0})}return t})(),zp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=Q({imports:[Ka,X,X]})}return t})();var DC=(t,i)=>i.id;function EC(t,i){t&1&&T(0,"app-loader",3)}function IC(t,i){t&1&&T(0,"app-error-message",4)}function xC(t,i){if(t&1&&T(0,"app-repo-card",8),t&2){let e=i.$implicit;d("repo",e)}}function TC(t,i){if(t&1&&Mt(0,xC,1,1,"app-repo-card",8,DC),t&2){let e=p(2);At(e.repos())}}function MC(t,i){t&1&&(_(0,"p",6),j(1," No repositories found for this user. "),C())}function AC(t,i){if(t&1){let e=fe();_(0,"div",5),Ee(1,TC,2,0)(2,MC,2,0,"p",6),C(),_(3,"p-paginator",7),H("onPageChange",function(o){N(e);let r=p();return V(r.onPageChange(o))}),C()}if(t&2){let e=p();u(),Ie(e.repos().length>0?1:2),u(2),d("rows",e.paginatorState$.value.rows)("totalRecords",e.totalRecords())("rowsPerPageOptions",e.rowsPerPageOptions())}}var Qa=class t{username=z.required();totalRecords=ee(0);isLoading=ee(!0);isError=ee(!1);repos=ee([]);paginatorState$=new Ye({first:0,rows:10});rowsPerPageOptions=Te(()=>{let i=this.totalRecords(),e=[10,30,50,100];return i>0&&i<e[0]?[i,...e]:e});githubService=f(dn);constructor(){mt(()=>{this.isLoading.set(!0),this.isError.set(!1),Nn([this.paginatorState$]).pipe(Re(()=>this.githubService.getUserDetails(this.username())),Re(i=>{this.totalRecords.set(i.public_repos);let e=this.paginatorState$.value,n=(e.first??0)/(e.rows??10)+1,o=e.rows??10;return this.githubService.getUserRepos(this.username(),o,n)}),at(i=>(this.isLoading.set(!1),this.isError.set(!0),qe))).subscribe(i=>{this.repos.set(i),this.isLoading.set(!1)})})}onPageChange(i){this.paginatorState$.next(i)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-view-repo"]],inputs:{username:[1,"username"]},decls:7,vars:1,consts:[[1,"flex","flex-col","items-center","min-h-screen","p-4","md:p-8","lg:p-12","mb-[100px]","md:mb-[120px]","lg:mb-[150px]"],[1,"flex","flex-col","items-center","space-x-0","w-full","max-w-4xl"],[1,"text-2xl","font-bold","my-4","mb-12","center","md:text-3xl","lg:text-4xl"],["label","Fetching repositories..."],["message","Could not fetch repositories. Please check the username and try again."],[1,"space-y-4","w-full"],[1,"text-center","my-4","text-zinc-500","dark:text-zinc-400"],[1,"mt-6","w-full",3,"onPageChange","rows","totalRecords","rowsPerPageOptions"],[3,"repo"]],template:function(e,n){e&1&&(_(0,"main",0)(1,"div",1)(2,"h1",2),j(3," Repositories "),C(),Ee(4,EC,1,0,"app-loader",3)(5,IC,1,0,"app-error-message",4)(6,AC,4,4),C()()),e&2&&(u(4),Ie(n.isLoading()?4:n.isError()?5:6))},dependencies:[zp,Ka,Si,ts,ns,Ln,kn,Qt],encapsulation:2})};export{gt as a,on as b,Oe as c,Ve as d,ce as e,Ns as f,Eh as g,Jh as h,ef as i,aa as j,Fm as k,Bm as l,zm as m,SD as n,zt as o,Dt as p,OD as q,Be as r,X as s,LD as t,J as u,xa as v,cE as w,ws as x,se as y,Ae as z,hd as A,yi as B,Ma as C,un as D,Ba as E,$a as F,Qa as G};
