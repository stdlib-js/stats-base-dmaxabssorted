"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(h,o){
var v=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function m(e,r,s,n){var a,t;return e<=0?NaN:e===1||s===0?r[0]:(a=r[n],t=r[n+(e-1)*s],v(a)||v(t)?NaN:(a=d(a),t=d(t),a>t?a:t))}o.exports=m
});var c=u(function(j,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),y=i();function l(e,r,s){return y(e,r,s,p(e,s))}q.exports=l
});var b=u(function(k,x){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=c(),O=i();N(f,"ndarray",O);x.exports=f
});var R=b();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
