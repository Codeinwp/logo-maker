import './common/_commonjsHelpers-8c19dec8.js';
import { r as react } from './common/index-3eaa2e06.js';

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return !!n&&!!n[Q]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);return !t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=nn(n);delete t[Q];for(var r=Z(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){y(n)||t(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0));}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=tn[t];return r||n(19,t),r}function m(n,t){tn[n]=t;}function _(){return U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t);}function g(n){O(n),n.p.forEach(S),n.p=null;}function O(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.g=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||b("ES5").S(e,t,o),o?(i[Q].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r);}function z(n,t){var r=n[Q];return (r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r);}}function E(n){n.P||(n.P=!0,n.l&&E(n.l));}function k(n){n.o||(n.o=l(n.t));}function R(n,t,r){var e=s(t)?b("MapSet").T(t,r):v(t)?b("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(t,c),u.I=!1;}else e=N(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function N(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return [n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++)"object"!=typeof(f=a(f,i[s]))&&n(15,i.join("/"));var v=o(f),p=e(r.value),l=i[i.length-1];switch(u){case"replace":switch(v){case 2:return f.set(l,p);case 3:n(16);default:return f[l]=p}case c:switch(v){case 1:return f.splice(l,0,p);case 2:return f.set(l,p);case 3:return f.add(p);default:return f[l]=p}case"remove":switch(v){case 1:return f.splice(l,1);case 2:return f.delete(l);case 3:return f.delete(r.value);default:return delete f[l]}default:n(17,u);}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)});}}));}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1];}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])});}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])});}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length});}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n});}u++;})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n});}u++;}));}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t});}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},tn={},rn={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(k(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return !0;k(n),E(n);}return n.o[t]=r,n.D[t]=!0,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,k(n),E(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),en.deleteProperty=function(t,r){return rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B,this.N="production"!=="production","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return (r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=R(this,t,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g(f):O(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t);},i.produceWithPatches=function(n,t){var r,e,i=this;return "function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t;})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[Q];var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n;},i.setUseProxies=function(t){t&&!B&&n(20),this.O=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);

function useStoreState(store, getSubState, deps) {
    const updateRef = react.useRef({ state: undefined, initialized: false });
    if (!updateRef.current.initialized) {
        updateRef.current.state = getSubState ? getSubState(store.getRawState()) : store.getRawState();
        updateRef.current.initialized = true;
    }
    const [, setUpdateTrigger] = react.useState(0);
    react.useEffect(() => {
        const effectState = { shouldUpdate: true };
        function update() {
            if (effectState.shouldUpdate) {
                const nextSubState = getSubState
                    ? getSubState(store.getRawState())
                    : store.getRawState();
                if (!es6(updateRef.current.state, nextSubState)) {
                    if (effectState.shouldUpdate) {
                        updateRef.current.state = nextSubState;
                        setUpdateTrigger((val) => val + 1);
                    }
                }
            }
        }
        store._addUpdateListener(update);
        return () => {
            effectState.shouldUpdate = false;
            store._removeUpdateListener(update);
        };
    }, deps !== null && deps !== void 0 ? deps : []);
    if (deps !== undefined) {
        const prevDeps = react.useRef(deps);
        if (!es6(deps, prevDeps)) {
            updateRef.current.state = getSubState(store.getRawState());
        }
    }
    return updateRef.current.state;
}function useLocalStore(initialState, deps) {
    const storeRef = react.useRef();
    if (storeRef.current == null) {
        storeRef.current = new Store(typeof initialState === "function" ? initialState() : initialState);
    }
    if (deps !== undefined) {
        const prevDeps = react.useRef(deps);
        if (!es6(deps, prevDeps)) {
            storeRef.current = new Store(typeof initialState === "function" ? initialState() : initialState);
        }
    }
    return storeRef.current;
}F();
function makeSubscriptionFunction(store, watch, listener) {
    let lastWatchState = watch(store.getRawState());
    return () => {
        const currentState = store.getRawState();
        const nextWatchState = watch(currentState);
        if (!es6(nextWatchState, lastWatchState)) {
            listener(nextWatchState, currentState, lastWatchState);
            lastWatchState = nextWatchState;
        }
    };
}
function makeReactionFunctionCreator(watch, reaction) {
    return (store) => {
        let lastWatchState = watch(store.getRawState());
        return (forceRun = false) => {
            const currentState = store.getRawState();
            const nextWatchState = watch(currentState);
            if (forceRun || !es6(nextWatchState, lastWatchState)) {
                if (store._optListenerCount > 0) {
                    const [nextState, patches, inversePatches] = fn(currentState, (s) => reaction(nextWatchState, s, currentState, lastWatchState));
                    store._updateStateWithoutReaction(nextState);
                    lastWatchState = nextWatchState;
                    if (patches.length > 0) {
                        store._patchListeners.forEach((listener) => listener(patches, inversePatches));
                        return Object.keys(getChangedPathsFromPatches(patches));
                    }
                }
                else {
                    if (store._patchListeners.length > 0) {
                        const [nextState, patches, inversePatches] = fn(currentState, (s) => reaction(nextWatchState, s, currentState, lastWatchState));
                        if (patches.length > 0) {
                            store._patchListeners.forEach((listener) => listener(patches, inversePatches));
                        }
                        store._updateStateWithoutReaction(nextState);
                    }
                    else {
                        store._updateStateWithoutReaction(an(currentState, (s) => reaction(nextWatchState, s, currentState, lastWatchState)));
                    }
                    lastWatchState = nextWatchState;
                }
            }
            return [];
        };
    };
}
const optPathDivider = "~._.~";
class Store {
    constructor(initialState) {
        this.updateListeners = [];
        this.ssr = false;
        this.reactions = [];
        this.clientSubscriptions = [];
        this.reactionCreators = [];
        this.optimizedUpdateListeners = {};
        this.optimizedUpdateListenerPaths = {};
        this.optimizedListenerPropertyMap = {};
        this._optListenerCount = 0;
        this._patchListeners = [];
        this.currentState = initialState;
        this.initialState = initialState;
    }
    _setInternalOptions({ ssr, reactionCreators = [] }) {
        this.ssr = ssr;
        this.reactionCreators = reactionCreators;
        this.reactions = reactionCreators.map((rc) => rc(this));
    }
    _getReactionCreators() {
        return this.reactionCreators;
    }
    _instantiateReactions() {
        this.reactions = this.reactionCreators.map((rc) => rc(this));
    }
    _getInitialState() {
        return this.initialState;
    }
    _updateStateWithoutReaction(nextState) {
        this.currentState = nextState;
    }
    _updateState(nextState, updateKeyedPaths = []) {
        this.currentState = nextState;
        this.batchState = undefined;
        for (const runReaction of this.reactions) {
            updateKeyedPaths.push(...runReaction());
        }
        if (!this.ssr) {
            for (const runSubscription of this.clientSubscriptions) {
                runSubscription();
            }
            if (updateKeyedPaths.length > 0) {
                const updateOrds = new Set();
                for (const keyedPath of updateKeyedPaths) {
                    if (this.optimizedListenerPropertyMap[keyedPath]) {
                        for (const ord of this.optimizedListenerPropertyMap[keyedPath]) {
                            updateOrds.add(ord);
                        }
                    }
                }
                for (const ord of updateOrds.values()) {
                    if (this.optimizedUpdateListeners[ord]) {
                        this.optimizedUpdateListeners[ord]();
                    }
                }
            }
            this.updateListeners.forEach((listener) => listener());
        }
    }
    _addUpdateListener(listener) {
        this.updateListeners.push(listener);
    }
    _addUpdateListenerOpt(listener, ordKey, paths) {
        this.optimizedUpdateListeners[ordKey] = listener;
        const listenerPathsKeyed = paths.map((path) => path.join(optPathDivider));
        this.optimizedUpdateListenerPaths[ordKey] = listenerPathsKeyed;
        for (const keyedPath of listenerPathsKeyed) {
            if (this.optimizedListenerPropertyMap[keyedPath] == null) {
                this.optimizedListenerPropertyMap[keyedPath] = [ordKey];
            }
            else {
                this.optimizedListenerPropertyMap[keyedPath].push(ordKey);
            }
        }
        this._optListenerCount++;
    }
    _removeUpdateListener(listener) {
        this.updateListeners = this.updateListeners.filter((f) => f !== listener);
    }
    _removeUpdateListenerOpt(ordKey) {
        const listenerPathsKeyed = this.optimizedUpdateListenerPaths[ordKey];
        for (const keyedPath of listenerPathsKeyed) {
            this.optimizedListenerPropertyMap[keyedPath] = this.optimizedListenerPropertyMap[keyedPath].filter((ord) => ord !== ordKey);
        }
        delete this.optimizedUpdateListenerPaths[ordKey];
        delete this.optimizedUpdateListeners[ordKey];
        this._optListenerCount--;
    }
    listenToPatches(patchListener) {
        this._patchListeners.push(patchListener);
        return () => {
            this._patchListeners = this._patchListeners.filter((f) => f !== patchListener);
        };
    }
    subscribe(watch, listener) {
        if (!this.ssr) {
            const func = makeSubscriptionFunction(this, watch, listener);
            this.clientSubscriptions.push(func);
            return () => {
                this.clientSubscriptions = this.clientSubscriptions.filter((f) => f !== func);
            };
        }
        return () => {
            console.warn(`Pullstate: Subscriptions made on the server side are not registered - so therefor this call to unsubscribe does nothing.`);
        };
    }
    createReaction(watch, reaction, { runNow = false, runNowWithSideEffects = false } = {}) {
        const creator = makeReactionFunctionCreator(watch, reaction);
        this.reactionCreators.push(creator);
        const func = creator(this);
        this.reactions.push(func);
        if (runNow || runNowWithSideEffects) {
            func(true);
            if (runNowWithSideEffects && !this.ssr) {
                this._updateState(this.currentState);
            }
        }
        return () => {
            this.reactions = this.reactions.filter((f) => f !== func);
        };
    }
    getRawState() {
        if (this.batchState !== undefined) {
            return this.batchState;
        }
        else {
            return this.currentState;
        }
    }
    useState(getSubState, deps) {
        return useStoreState(this, getSubState, deps);
    }
    useLocalCopyInitial(deps) {
        return useLocalStore(() => this.initialState, deps);
    }
    useLocalCopySnapshot(deps) {
        return useLocalStore(this.currentState, deps);
    }
    update(updater, patchesCallback) {
        update(this, updater, patchesCallback);
    }
    replace(newState) {
        this._updateState(newState);
    }
    applyPatches(patches) {
        applyPatchesToStore(this, patches);
    }
}
function applyPatchesToStore(store, patches) {
    const currentState = store.getRawState();
    const nextState = vn(currentState, patches);
    if (nextState !== currentState) {
        store._updateState(nextState, Object.keys(getChangedPathsFromPatches(patches)));
    }
}
function getChangedPathsFromPatches(changePatches, prev = {}) {
    for (const patch of changePatches) {
        let curKey;
        for (const p of patch.path) {
            if (curKey) {
                curKey = `${curKey}${optPathDivider}${p}`;
            }
            else {
                curKey = p;
            }
            prev[curKey] = 1;
        }
    }
    return prev;
}
function runUpdates(currentState, updater, func) {
    return func
        ? fn(currentState, (s) => updater(s, currentState))
        : updater.reduce(([nextState, patches, inversePatches], currentValue) => {
            const resp = fn(nextState, (s) => currentValue(s, nextState));
            patches.push(...resp[1]);
            inversePatches.push(...resp[2]);
            return [resp[0], patches, inversePatches];
        }, [currentState, [], []]);
}
function update(store, updater, patchesCallback) {
    const currentState = store.getRawState();
    const func = typeof updater === "function";
    if (store._optListenerCount > 0) {
        const [nextState, patches, inversePatches] = runUpdates(currentState, updater, func);
        if (patches.length > 0) {
            if (patchesCallback) {
                patchesCallback(patches, inversePatches);
            }
            store._patchListeners.forEach((listener) => listener(patches, inversePatches));
            store._updateState(nextState, Object.keys(getChangedPathsFromPatches(patches)));
        }
    }
    else {
        let nextState;
        if (store._patchListeners.length > 0 || patchesCallback) {
            const [ns, patches, inversePatches] = runUpdates(currentState, updater, func);
            if (patches.length > 0) {
                if (patchesCallback) {
                    patchesCallback(patches, inversePatches);
                }
                store._patchListeners.forEach((listener) => listener(patches, inversePatches));
            }
            nextState = ns;
        }
        else {
            nextState = an(currentState, (s) => func
                ? updater(s, currentState)
                : updater.reduce((previousValue, currentUpdater) => {
                    return an(previousValue, (s) => currentUpdater(s, previousValue));
                }, currentState));
        }
        if (nextState !== currentState) {
            store._updateState(nextState);
        }
    }
}var EAsyncEndTags;
(function (EAsyncEndTags) {
    EAsyncEndTags["THREW_ERROR"] = "THREW_ERROR";
    EAsyncEndTags["RETURNED_ERROR"] = "RETURNED_ERROR";
    EAsyncEndTags["UNFINISHED"] = "UNFINISHED";
    EAsyncEndTags["DORMANT"] = "DORMANT";
})(EAsyncEndTags || (EAsyncEndTags = {}));
var EPostActionContext;
(function (EPostActionContext) {
    EPostActionContext["WATCH_HIT_CACHE"] = "WATCH_HIT_CACHE";
    EPostActionContext["BECKON_HIT_CACHE"] = "BECKON_HIT_CACHE";
    EPostActionContext["RUN_HIT_CACHE"] = "RUN_HIT_CACHE";
    EPostActionContext["READ_HIT_CACHE"] = "READ_HIT_CACHE";
    EPostActionContext["READ_RUN"] = "READ_RUN";
    EPostActionContext["SHORT_CIRCUIT"] = "SHORT_CIRCUIT";
    EPostActionContext["DIRECT_RUN"] = "DIRECT_RUN";
    EPostActionContext["BECKON_RUN"] = "BECKON_RUN";
    EPostActionContext["CACHE_UPDATE"] = "CACHE_UPDATE";
})(EPostActionContext || (EPostActionContext = {}));let storeErrorProxy;
try {
    storeErrorProxy = new Proxy({}, {
        get: function (obj, prop) {
            throw new Error(`Pullstate: Trying to access store (${String(prop)}) inside async actions without the correct usage or setup.
If this error occurred on the server:
* If using run(), make use of your created instance for this request: instance.runAsyncAction()
* If using read(), useWatch(), useBeckon() etc. - make sure you have properly set up your <PullstateProvider/>

If this error occurred on the client:
* Make sure you have created your "pullstateCore" object with all your stores, using createPullstateCore(), and are making use of instantiate() before rendering.`);
        }
    });
}
catch {
    storeErrorProxy = {};
}
const startedButUnfinishedResult = [
    true,
    false,
    {
        message: "",
        tags: [EAsyncEndTags.UNFINISHED],
        error: true,
        payload: null,
        errorPayload: null
    },
    false,
    -1
];
const PullstateContext = react.createContext(null);
var EAsyncActionInjectType;
(function (EAsyncActionInjectType) {
    EAsyncActionInjectType["WATCH"] = "watch";
    EAsyncActionInjectType["BECKON"] = "beckon";
})(EAsyncActionInjectType || (EAsyncActionInjectType = {}));

export { Store };
