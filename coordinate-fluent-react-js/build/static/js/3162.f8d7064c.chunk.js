"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[3162],{93582:(t,n,e)=>{e.d(n,{N:()=>_,a:()=>b,b:()=>q,c:()=>v,d:()=>p,f:()=>R,g:()=>A,i:()=>P,n:()=>L,u:()=>G,w:()=>I});e(81806);var r=e(76460),i=e(15941),o=e(34761),c=e(20664),s=e(9392),u=e(43047),a=e(55855),l=e(53494),f=e(5568),h=e(95925),g=e(96190),d=e(75762);const _=p();function p(){return(0,a.vt)()}const M=u.e,m=u.e;function v(t,n){return(0,u.c)(n,t)}function q(t,n){return(0,a.fA)(t[0],t[1],t[2],n)}function I(t){return t}function b(t){return t[3]}function A(t){return t}function R(t,n,e,r){return(0,a.fA)(t,n,e,r)}function T(t,n,e){if(null==n)return!1;if(!C(t,n,y))return!1;let{t0:r,t1:i}=y;if((r<0||i<r&&i>0)&&(r=i),r<0)return!1;if(e){const{origin:t,direction:i}=n;e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r}return!0}const y={t0:0,t1:0};function C(t,n,e){const{origin:r,direction:i}=n,o=E;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];const c=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===c)return!1;const s=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),u=s*s-4*c*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return e.t0=(-s-a)/(2*c),e.t1=(-s+a)/(2*c),!0}const E=(0,s.vt)();function P(t,n){return T(t,n,null)}function w(t,n,e){const r=d.rq.get(),i=d.Rc.get();(0,c.b)(r,n.origin,n.direction);const s=b(t);(0,c.b)(e,r,n.origin),(0,c.h)(e,e,1/(0,c.l)(e)*s);const u=k(t,n.origin),a=(0,g.g7)(n.origin,e);return(0,o.$0)(i,a+u,r),(0,c.e)(e,e,i),e}function N(t,n,e){const r=(0,c.f)(d.rq.get(),n,t),i=(0,c.h)(d.rq.get(),r,t[3]/(0,c.l)(r));return(0,c.g)(e,i,t)}function k(t,n){const e=(0,c.f)(d.rq.get(),n,t),r=(0,c.l)(e),o=b(t),s=o+Math.abs(o-r);return(0,i.XM)(o/s)}const S=(0,s.vt)();function j(t,n,e,r){const o=(0,c.f)(S,n,t);switch(e){case f._.X:{const t=(0,i.jU)(o,S)[2];return(0,c.s)(r,-Math.sin(t),Math.cos(t),0)}case f._.Y:{const t=(0,i.jU)(o,S),n=t[1],e=t[2],s=Math.sin(n);return(0,c.s)(r,-s*Math.cos(e),-s*Math.sin(e),Math.cos(n))}case f._.Z:return(0,c.n)(r,o);default:return}}function x(t,n){const e=(0,c.f)(D,n,t);return(0,c.l)(e)-t[3]}function L(t,n){const e=(0,c.a)(t,n),r=b(t);return e<=r*r}function G(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.vt)();const r=(0,c.q)(t,n),i=t[3],o=n[3];return r+o<i?((0,u.c)(e,t),e):r+i<o?((0,u.c)(e,n),e):((0,c.m)(e,t,n,(r+o-i)/(2*r)),e[3]=(r+i+o)/2,e)}const D=(0,s.vt)(),O=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:_,altitudeAt:x,angleToSilhouette:k,axisAt:j,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,n,e){return T(t,n,e)?e:((0,h.oC)(n,t,e),N(t,e,e))},closestPointOnSilhouette:w,containsPoint:L,copy:v,create:p,distanceToSilhouette:function(t,n){const e=(0,c.f)(d.rq.get(),n,t),r=(0,c.p)(e),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},elevate:function(t,n,e){return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),e[3]=t[3]+n,e},equals:m,exactEquals:M,fromCenterAndRadius:q,fromRadius:function(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t},fromValues:R,getCenter:A,getRadius:b,intersectLine:function(t,n,e){const r=(0,h.Cr)(n,e);if(!C(t,r,y))return[];const{origin:i,direction:o}=r,{t0:u,t1:a}=y,f=n=>{const e=(0,s.vt)();return(0,c.r)(e,i,o,n),N(t,e,e)};return Math.abs(u-a)<(0,l.FD)()?[f(u)]:[f(u),f(a)]},intersectRay:T,intersectRayClosestSilhouette:function(t,n,e){if(T(t,n,e))return e;const r=w(t,n,d.rq.get());return(0,c.g)(e,n.origin,(0,c.h)(d.rq.get(),n.direction,(0,c.q)(n.origin,r)/(0,c.l)(n.direction))),e},intersectsRay:P,projectPoint:N,setAltitudeAt:function(t,n,e,r){const i=x(t,n),o=j(t,n,f._.Z,D),s=(0,c.h)(D,o,e-i);return(0,c.g)(r,n,s)},setExtent:function(t,n,e){return r.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==e&&v(t,e),e},tmpSphere:O,union:G,wrap:I},Symbol.toStringTag,{value:"Module"}))},97467:(t,n,e)=>{e.d(n,{I:()=>i});var r=e(77944);class i{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},95925:(t,n,e)=>{e.d(n,{C:()=>l,Cr:()=>f,LV:()=>a,kb:()=>h,oC:()=>g,vt:()=>s});e(18690);var r=e(97467),i=e(20664),o=e(9392),c=e(75762);function s(t){return t?u((0,o.o8)(t.origin),(0,o.o8)(t.direction)):u((0,o.vt)(),(0,o.vt)())}function u(t,n){return{origin:t,direction:n}}function a(t,n){const e=d.get();return e.origin=t,e.direction=n,e}function l(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();return function(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(e.origin,t),(0,i.c)(e.direction,n),e}(t.origin,t.direction,n)}function f(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(e.origin,t),(0,i.f)(e.direction,n,t),e}function h(t,n){const e=(0,i.b)(c.rq.get(),(0,i.n)(c.rq.get(),t.direction),(0,i.f)(c.rq.get(),n,t.origin));return(0,i.k)(e,e)}function g(t,n,e){const r=(0,i.k)(t.direction,(0,i.f)(e,n,t.origin));return(0,i.g)(e,t.origin,(0,i.h)(e,t.direction,r)),e}const d=new r.I((()=>s()))},51990:(t,n,e)=>{e.d(n,{Eb:()=>c,_j:()=>s,k5:()=>r});var r,i,o=e(15941);function c(t){switch(t){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function s(t,n,e){if(null==t||n===r.Ignore)return e[0]=255,e[1]=255,e[2]=255,void(e[3]=255);const i=(0,o.qE)(Math.round(t[3]*a),0,a),c=0===i||n===r.Tint?0:n===r.Replace?l:f;e[0]=(0,o.qE)(Math.round(t[0]*u),0,u),e[1]=(0,o.qE)(Math.round(t[1]*u),0,u),e[2]=(0,o.qE)(Math.round(t[2]*u),0,u),e[3]=i+c}(i=r||(r={}))[i.Multiply=1]="Multiply",i[i.Ignore=2]="Ignore",i[i.Replace=3]="Replace",i[i.Tint=4]="Tint";const u=255,a=85,l=a,f=2*a},98476:(t,n,e)=>{var r;e.d(n,{M:()=>r}),function(t){t[t.ANIMATING=0]="ANIMATING",t[t.INTERACTING=1]="INTERACTING",t[t.IDLE=2]="IDLE"}(r||(r={}))}}]);
//# sourceMappingURL=3162.f8d7064c.chunk.js.map