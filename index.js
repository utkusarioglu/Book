!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),c=r(2),u=function(e){function t(t){var r=e.call(this)||this;return r._book={},r.RESOLUTION_RULES={During:[void 0,"get_Chapter()"]},r.set_GlobalNamespace(t),r}return o(t,e),t.prototype.add_Chapter=function(e,t,r){return void 0===r&&(r=function(e){return e}),this._book[e]=r(t),this},t.prototype.get_Chapter=function(e){return this.has_Chapter(e)?this._book[e]:null},t.prototype.has_Chapter=function(e){return this._book.hasOwnProperty(e)},t.prototype.get_AllChapters=function(){return this._book},t.prototype.get_AllChapterNames=function(){return Object.keys(this._book)},t.prototype.add_BookContent=function(e,t){var r=this;return void 0===t&&(t=function(e){return e}),Object.entries(e).forEach((function(e){var n=e[0],o=e[1];r.add_Chapter(n,o,t)})),this},t.prototype.add_Books=function(e,t){var r=this;return void 0===t&&(t=function(e){return e}),Object.values(e).forEach((function(e){r.add_BookContent(e,t)})),this},t}(a.Parent().with(c.M_Namespace));t.Book=u},function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Parent=e=>new n(e);class n{constructor(e){this.extender_class=e||class{}}with(...e){return e.reduce((e,t)=>n.produce_ClassExpression(t)(e),this.extender_class)}static produce_ClassExpression(e){return t=>{const r=class extends t{};return Object.getOwnPropertyNames(e.prototype).forEach(t=>{r.prototype.hasOwnProperty(t)||Object.defineProperty(r.prototype,t,Object.getOwnPropertyDescriptor(e.prototype,t))}),r}}}}]))},function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.M_Namespace=class{get_GlobalNamespace(){if(!this._global_namespace)throw new Error(n.C_Namespace.E_CalledBeforeDeclaration);return this._global_namespace}get_GlobalNamespaceStack(){const e=this.get_GlobalNamespace();return this.produce_Stack(e)}set_GlobalNamespace(e){if(void 0!==this._global_namespace)throw new Error(n.C_Namespace.E_AlreadyDefined);return this.check_NamespaceInput(e),this._global_namespace=e,this}get_LocalNamespace(){if(!this._local_namespace)throw new Error(n.C_Namespace.E_CalledBeforeDeclaration);return this._local_namespace}get_LocalNamespaceStack(){const e=this.get_LocalNamespace();return this.produce_Stack(e)}set_LocalNamespace(e){if(this._local_namespace)throw new Error(n.C_Namespace.E_AlreadyDefined);this.check_NamespaceInput(e),this._local_namespace=e}has_LocalNamespace(){return void 0!==this._local_namespace&&null!==this._local_namespace}check_NamespaceInput(e){if(void 0===e||0===e.length)throw new Error(n.C_Namespace.E_NoEmpty)}produce_Stack(e){return e.split(n.C_Namespace.NamespaceSeparator)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.C_Namespace={E_AlreadyDefined:"%1 Namespace already defined",E_CalledBeforeDeclaration:"%1 Namespace called before declaration",E_NoEmpty:"%1 Namespace declaration cannot be empty",NamespaceSeparator:"/"}}]))}]));
//# sourceMappingURL=index.js.map