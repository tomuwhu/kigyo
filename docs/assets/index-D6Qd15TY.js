var H=Object.defineProperty;var J=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>J(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _(){}function K(e){return e()}function S(){return Object.create(null)}function b(e){e.forEach(K)}function R(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function X(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function T(){return D(" ")}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}function Z(e,t){t=""+t,e.data!==t&&(e.data=t)}let g;function m(e){g=e}function tt(){if(!g)throw new Error("Function called outside component initialization");return g}function et(e){tt().$$.on_mount.push(e)}const a=[],L=[];let d=[];const I=[],nt=Promise.resolve();let E=!1;function it(){E||(E=!0,nt.then(V))}function q(e){d.push(e)}const A=new Set;let u=0;function V(){if(u!==0)return;const e=g;do{try{for(;u<a.length;){const t=a[u];u++,m(t),st(t.$$)}}catch(t){throw a.length=0,u=0,t}for(m(null),a.length=0,u=0;L.length;)L.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];A.has(n)||(A.add(n),n())}d.length=0}while(a.length);for(;I.length;)I.pop()();E=!1,A.clear(),m(e)}function st(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function rt(e){const t=[],n=[];d.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),d=t}const ot=new Set;function ct(e,t){e&&e.i&&(ot.delete(e),e.i(t))}function w(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ft(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),q(()=>{const s=e.$$.on_mount.map(K).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...s):b(s),e.$$.on_mount=[]}),i.forEach(q)}function lt(e,t){const n=e.$$;n.fragment!==null&&(rt(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(e,t){e.$$.dirty[0]===-1&&(a.push(e),it(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ut(e,t,n,r,i,s,c=null,o=[-1]){const l=g;m(e);const f=e.$$={fragment:null,ctx:[],props:s,update:_,not_equal:i,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};c&&c(f.root);let p=!1;if(f.ctx=n(e,t.props||{},(h,M,...N)=>{const P=N.length?N[0]:M;return f.ctx&&i(f.ctx[h],f.ctx[h]=P)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](P),p&&ht(e,h)),M}),f.update(),p=!0,b(f.before_update),f.fragment=r(f.ctx),t.target){if(t.hydrate){const h=Y(t.target);f.fragment&&f.fragment.l(h),h.forEach($)}else f.fragment&&f.fragment.c();t.intro&&ct(e.$$.fragment),ft(e,t.target,t.anchor),V()}m(l)}class at{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){lt(this,1),this.$destroy=_}$on(t,n){if(!R(n))return _;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!X(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);class O{constructor(){this.container=[],this.size=0}put(t){Array.isArray(t)?t.forEach(n=>{this.container.push(n),this.size++}):(this.container.push(t),this.size++)}get(){return this.size?(this.size--,this.container.pop()):null}check(){return this.container[0]}toarray(){let t=[];for(;this.size;)t.push(this.get());return t}[Symbol.iterator](){return{next:()=>this.size>0?{value:this.get(),done:!1}:{done:!0}}}}class pt extends O{constructor(){super(),this.offset=0}get(){if(this.size){this.size--;let t=this.container[this.offset++];return this.offset*2>=this.container.length&&(this.container=this.container.slice(this.offset),this.offset=0),t}else return!1}check(){return this.container[this.offset]}}class G extends O{constructor(){super()}comparator(t,n){return n-t}put(t){Array.isArray(t)?t.forEach(n=>{this.container.push(n),this.fix(this.size++)}):(this.container.push(t),this.fix(this.size++))}get(){if(this.size){let t=this.container[0];return--this.size?(this.container[0]=this.container.pop(),this.fixup(0)):this.container.pop(),t}else return null}fixup(t){let n=(t+1)*2,r=n-1,i=0;n>this.size+2&&(n=t),r>this.size+2&&(r=n),this.container[n]===void 0?i=r:this.container[r]===void 0?i=n:i=this.comparator(this.container[n],this.container[r])<0?n:r,t!=i&&(this.cshn(i,t),this.fixup(i))}fix(t){let n=Math.round((t+1)/2-.4)-1;this.cshn(t,n),n>0&&this.fix(n)}cshn(t,n){this.container[t]!=null&&this.container[n]!=null&&this.comparator(this.container[t],this.container[n])<0&&([this.container[t],this.container[n]]=[this.container[n],this.container[t]])}}class mt extends G{comparator(t,n){return t-n}fixup(t){let n=(t+1)*2,r=n-1,i=0;n>this.size+2&&(n=t),r>this.size+2&&(r=n),i=this.comparator(this.container[n],this.container[r])<0?n:r,t!=i&&(this.cshn(i,t),this.fixup(i))}}var _t={Stack:O,Queue:pt,PQueue:G,PQueue_min:mt};class C{ahossz(){return this.q.size}pozmod(){if(this.x+=this.vx,this.y+=this.vy,this.q.put({x:this.x,y:this.y}),this.q.size>this.hossz){let t=this.q.get();this.fx=t.x,this.fy=t.y}}control(t){switch(t){case this.controlkeys[0]:this.vx=-1,this.vy=0;break;case this.controlkeys[1]:this.vx=1,this.vy=0;break;case this.controlkeys[2]:this.vx=0,this.vy=1;break;case this.controlkeys[3]:this.vx=0,this.vy=-1;break}}constructor(t){this.hossz=10,this.q=new _t.Queue,this.x=t.x,this.y=t.y,this.fx=t.x,this.fy=t.y,this.vx=t.vx,this.vy=0,this.controlkeys=t.control}}function Q(e,t,n){const r=e.slice();return r[3]=t[n],r}function B(e,t,n){const r=e.slice();return r[6]=t[n],r}function j(e){let t,n;return{c(){t=x("div"),v(t,"class",n="cell c"+e[6]+" svelte-her1mw")},m(r,i){k(r,t,i)},p(r,i){i&2&&n!==(n="cell c"+r[6]+" svelte-her1mw")&&v(t,"class",n)},d(r){r&&$(t)}}}function F(e){let t,n,r=w(e[3]),i=[];for(let s=0;s<r.length;s+=1)i[s]=j(B(e,r,s));return{c(){t=x("div");for(let s=0;s<i.length;s+=1)i[s].c();n=T(),v(t,"class","row svelte-her1mw")},m(s,c){k(s,t,c);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(t,null);y(t,n)},p(s,c){if(c&2){r=w(s[3]);let o;for(o=0;o<r.length;o+=1){const l=B(s,r,o);i[o]?i[o].p(l,c):(i[o]=j(l),i[o].c(),i[o].m(t,n))}for(;o<i.length;o+=1)i[o].d(1);i.length=r.length}},d(s){s&&$(t),U(i,s)}}}function gt(e){let t,n,r,i,s=w(e[1]),c=[];for(let o=0;o<s.length;o+=1)c[o]=F(Q(e,s,o));return{c(){t=x("main"),n=D(e[0]),r=T(),i=x("div");for(let o=0;o<c.length;o+=1)c[o].c();v(i,"class","cont svelte-her1mw")},m(o,l){k(o,t,l),y(t,n),y(t,r),y(t,i);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(i,null)},p(o,[l]){if(l&1&&Z(n,o[0]),l&2){s=w(o[1]);let f;for(f=0;f<s.length;f+=1){const p=Q(o,s,f);c[f]?c[f].p(p,l):(c[f]=F(p),c[f].c(),c[f].m(i,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=s.length}},i:_,o:_,d(o){o&&$(t),U(c,o)}}}function yt(e,t,n){const r=[new C({x:90,y:50,vx:-1,control:["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"]}),new C({x:10,y:51,vx:1,control:["a","d","s","w"]})];var i=0;const s=Array.from({length:100},()=>Array.from({length:100},()=>0));return s.forEach((c,o)=>{c.forEach((l,f)=>{(o===0||f===0||o===99||f===99)&&n(1,s[o][f]=4,s)})}),et(()=>window.onkeydown=c=>{r.forEach(o=>o.control(c.key))}),setInterval(()=>{i||r.forEach((c,o)=>{c.pozmod(),s[c.y][c.x]===3&&(n(1,s[c.y][c.x]=0,s),c.hossz+=10),s[c.y][c.x]===0?(n(1,s[c.y][c.x]=o+1,s),n(1,s[c.fy][c.fx]=0,s)):i?n(0,i=12):n(0,i=o+1)})},50),setInterval(()=>{i||n(1,s[Math.floor(1+Math.random()*98)][Math.floor(1+Math.random()*98)]=3,s)},3e3),[i,s]}class xt extends at{constructor(t){super(),ut(this,t,yt,gt,W,{})}}new xt({target:document.getElementById("app")});
