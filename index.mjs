// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function r(s,r,n){var a,i;return s<=0?NaN:1===s||0===n?r[0]:(n<0?(a=r[(1-s)*n],i=r[0]):(a=r[0],i=r[(s-1)*n]),e(a)||e(i)?NaN:(a=t(a))>(i=t(i))?a:i)}function n(s,r,n,a){var i,d;return s<=0?NaN:1===s||0===n?r[0]:(i=r[a],d=r[a+(s-1)*n],e(i)||e(d)?NaN:(i=t(i))>(d=t(d))?i:d)}s(r,"ndarray",n);export{r as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
