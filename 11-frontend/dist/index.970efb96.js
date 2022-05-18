// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"786KC":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"hdge7"}],"hdge7":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"3wtBx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "800ddd5f970efb96";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hudl2":[function(require,module,exports) {
const { ApolloClient , InMemoryCache , gql  } = require("@apollo/client");
const { CREATE_USER  } = require("../queries/Mutation");
const { GET_USERS  } = require("../queries/Query");
const client = new ApolloClient({
    uri: "https://sk-optum-graphql.herokuapp.com/graphql",
    cache: new InMemoryCache()
});
window.onload = function() {
    const txtName = document.getElementById("txtName");
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const userList = document.getElementById("user-list");
    const btnSignup = document.getElementById("btnSignup");
    client.query({
        query: GET_USERS
    }).then((result)=>{
        result.data.users.forEach((user)=>{
            const liElements = document.createElement("li");
            liElements.innerHTML = `
                ${user.name} | ${user.age}
            `;
            liElements.className = "list-group-item";
            userList.appendChild(liElements);
        });
    }).catch(console.log);
    btnSignup.addEventListener("click", (event)=>{
        event.preventDefault();
        // console.log(txtName.value, txtEmail.value, txtPassword.value)
        client.mutate({
            mutation: CREATE_USER,
            variables: {
                name: txtName.value,
                email: txtEmail.value,
                password: txtPassword.value
            }
        }).then(console.log).catch(console);
    });
};

},{"@apollo/client":"2LaSG","../queries/Mutation":"an76n","../queries/Query":"kAHxC"}],"2LaSG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./core/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _indexJs1 = require("./react/index.js");
parcelHelpers.exportAll(_indexJs1, exports);

},{"./core/index.js":"eo1T9","./react/index.js":"vOB9J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eo1T9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloClient", ()=>_apolloClientJs.ApolloClient
);
parcelHelpers.export(exports, "mergeOptions", ()=>_apolloClientJs.mergeOptions
);
parcelHelpers.export(exports, "ObservableQuery", ()=>_observableQueryJs.ObservableQuery
);
parcelHelpers.export(exports, "NetworkStatus", ()=>_networkStatusJs.NetworkStatus
);
parcelHelpers.export(exports, "isApolloError", ()=>_indexJs1.isApolloError
);
parcelHelpers.export(exports, "ApolloError", ()=>_indexJs1.ApolloError
);
parcelHelpers.export(exports, "Cache", ()=>_indexJs2.Cache
);
parcelHelpers.export(exports, "ApolloCache", ()=>_indexJs2.ApolloCache
);
parcelHelpers.export(exports, "InMemoryCache", ()=>_indexJs2.InMemoryCache
);
parcelHelpers.export(exports, "MissingFieldError", ()=>_indexJs2.MissingFieldError
);
parcelHelpers.export(exports, "defaultDataIdFromObject", ()=>_indexJs2.defaultDataIdFromObject
);
parcelHelpers.export(exports, "makeVar", ()=>_indexJs2.makeVar
);
parcelHelpers.export(exports, "fromError", ()=>_indexJs5.fromError
);
parcelHelpers.export(exports, "toPromise", ()=>_indexJs5.toPromise
);
parcelHelpers.export(exports, "fromPromise", ()=>_indexJs5.fromPromise
);
parcelHelpers.export(exports, "throwServerError", ()=>_indexJs5.throwServerError
);
parcelHelpers.export(exports, "Observable", ()=>_indexJs6.Observable
);
parcelHelpers.export(exports, "isReference", ()=>_indexJs6.isReference
);
parcelHelpers.export(exports, "makeReference", ()=>_indexJs6.makeReference
);
parcelHelpers.export(exports, "setLogVerbosity", ()=>_tsInvariant.setVerbosity
);
parcelHelpers.export(exports, "gql", ()=>_graphqlTag.gql
);
parcelHelpers.export(exports, "resetCaches", ()=>_graphqlTag.resetCaches
);
parcelHelpers.export(exports, "disableFragmentWarnings", ()=>_graphqlTag.disableFragmentWarnings
);
parcelHelpers.export(exports, "enableExperimentalFragmentVariables", ()=>_graphqlTag.enableExperimentalFragmentVariables
);
parcelHelpers.export(exports, "disableExperimentalFragmentVariables", ()=>_graphqlTag.disableExperimentalFragmentVariables
);
var _indexJs = require("../utilities/globals/index.js");
var _tsInvariant = require("ts-invariant");
var _apolloClientJs = require("./ApolloClient.js");
var _observableQueryJs = require("./ObservableQuery.js");
var _networkStatusJs = require("./networkStatus.js");
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _indexJs1 = require("../errors/index.js");
var _indexJs2 = require("../cache/index.js");
var _typesJs1 = require("../cache/inmemory/types.js");
parcelHelpers.exportAll(_typesJs1, exports);
var _indexJs3 = require("../link/core/index.js");
parcelHelpers.exportAll(_indexJs3, exports);
var _indexJs4 = require("../link/http/index.js");
parcelHelpers.exportAll(_indexJs4, exports);
var _indexJs5 = require("../link/utils/index.js");
var _indexJs6 = require("../utilities/index.js");
var _graphqlTag = require("graphql-tag");
_tsInvariant.setVerbosity(_indexJs.DEV ? "log" : "silent");

},{"../utilities/globals/index.js":"60qk9","ts-invariant":"80w2F","./ApolloClient.js":"lhRBT","./ObservableQuery.js":"7svFE","./networkStatus.js":"2bxcN","./types.js":"u1KXa","../errors/index.js":"2jvqQ","../cache/index.js":"dKdrp","../cache/inmemory/types.js":"2SXma","../link/core/index.js":"4XY3c","../link/http/index.js":"eveJT","../link/utils/index.js":"7agqB","../utilities/index.js":"k51w7","graphql-tag":"bCfYb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60qk9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEV", ()=>_devJsDefault.default
);
parcelHelpers.export(exports, "checkDEV", ()=>checkDEV
);
parcelHelpers.export(exports, "maybe", ()=>_maybeJs.maybe
);
parcelHelpers.export(exports, "global", ()=>_globalJsDefault.default
);
parcelHelpers.export(exports, "invariant", ()=>_tsInvariant.invariant
);
parcelHelpers.export(exports, "InvariantError", ()=>_tsInvariant.InvariantError
);
var _tsInvariant = require("ts-invariant");
var _devJs = require("./DEV.js");
var _devJsDefault = parcelHelpers.interopDefault(_devJs);
var _fixGraphqlJs = require("./fix-graphql.js");
var _maybeJs = require("./maybe.js");
var _globalJs = require("./global.js");
var _globalJsDefault = parcelHelpers.interopDefault(_globalJs);
function checkDEV() {
    __DEV__ ? _tsInvariant.invariant("boolean" === typeof _devJsDefault.default, _devJsDefault.default) : _tsInvariant.invariant("boolean" === typeof _devJsDefault.default, 36);
}
_fixGraphqlJs.removeTemporaryGlobals();
checkDEV();

},{"ts-invariant":"80w2F","./DEV.js":"vcJWx","./fix-graphql.js":"kABcs","./maybe.js":"7hmnZ","./global.js":"jEVW7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80w2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvariantError", ()=>InvariantError
);
parcelHelpers.export(exports, "invariant", ()=>invariant
);
parcelHelpers.export(exports, "setVerbosity", ()=>setVerbosity
);
var _tslib = require("tslib");
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ function(_super) {
    _tslib.__extends(InvariantError1, _super);
    function InvariantError1(message) {
        if (message === void 0) message = genericMessage;
        var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError1.prototype);
        return _this;
    }
    return InvariantError1;
}(Error);
function invariant(condition, message) {
    if (!condition) throw new InvariantError(message);
}
var verbosityLevels = [
    "debug",
    "log",
    "warn",
    "error",
    "silent"
];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function() {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function(invariant1) {
    invariant1.debug = wrapConsoleMethod("debug");
    invariant1.log = wrapConsoleMethod("log");
    invariant1.warn = wrapConsoleMethod("warn");
    invariant1.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
exports.default = invariant;

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn
);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"vcJWx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _globalJs = require("./global.js");
var _globalJsDefault = parcelHelpers.interopDefault(_globalJs);
var _maybeJs = require("./maybe.js");
var __ = "__";
var GLOBAL_KEY = [
    __,
    __
].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    } catch (_a) {
        Object.defineProperty(_globalJsDefault.default, GLOBAL_KEY, {
            value: _maybeJs.maybe(function() {
                return "development";
            }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true
        });
        return _globalJsDefault.default[GLOBAL_KEY];
    }
}
exports.default = getDEV();

},{"./global.js":"jEVW7","./maybe.js":"7hmnZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEVW7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _maybeJs = require("./maybe.js");
var global = arguments[3];
exports.default = _maybeJs.maybe(function() {
    return globalThis;
}) || _maybeJs.maybe(function() {
    return window;
}) || _maybeJs.maybe(function() {
    return self;
}) || _maybeJs.maybe(function() {
    return global;
}) || _maybeJs.maybe(function() {
    return _maybeJs.maybe.constructor("return this")();
});

},{"./maybe.js":"7hmnZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hmnZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "maybe", ()=>maybe
);
function maybe(thunk) {
    try {
        return thunk();
    } catch (_a) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kABcs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeTemporaryGlobals", ()=>removeTemporaryGlobals
);
var _indexJs = require("ts-invariant/process/index.js");
var _graphql = require("graphql");
function removeTemporaryGlobals() {
    return typeof _graphql.Source === "function" ? _indexJs.remove() : _indexJs.remove();
}

},{"ts-invariant/process/index.js":"llrze","graphql":"dwHFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llrze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "install", ()=>install
);
parcelHelpers.export(exports, "remove", ()=>remove
);
var global = arguments[3];
var process = require("process");
function maybe(thunk) {
    try {
        return thunk();
    } catch (_) {}
}
var safeGlobal = maybe(function() {
    return globalThis;
}) || maybe(function() {
    return window;
}) || maybe(function() {
    return self;
}) || maybe(function() {
    return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
maybe(function() {
    return maybe.constructor("return this")();
});
var needToRemove = false;
function install() {
    if (safeGlobal && !maybe(function() {
        return "development";
    }) && !maybe(function() {
        return process;
    })) {
        Object.defineProperty(safeGlobal, "process", {
            value: {
                env: {
                    // This default needs to be "production" instead of "development", to
                    // avoid the problem https://github.com/graphql/graphql-js/pull/2894
                    // will eventually solve, once merged and released.
                    NODE_ENV: "production"
                }
            },
            // Let anyone else change global.process as they see fit, but hide it from
            // Object.keys(global) enumeration.
            configurable: true,
            enumerable: false,
            writable: true
        });
        needToRemove = true;
    }
}
// Call install() at least once, when this module is imported.
install();
function remove() {
    if (needToRemove) {
        delete safeGlobal.process;
        needToRemove = false;
    }
}

},{"process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"dwHFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 * ```ts
 * import { parse } from 'graphql';
 * import { parse } from 'graphql/language';
 * ```
 *
 * @packageDocumentation
 */ // The GraphQL.js version info.
parcelHelpers.export(exports, "version", ()=>_versionMjs.version
) // The primary entry point into fulfilling a GraphQL request.
;
parcelHelpers.export(exports, "versionInfo", ()=>_versionMjs.versionInfo
);
parcelHelpers.export(exports, "graphql", ()=>_graphqlMjs.graphql
) // Create and operate on GraphQL type definitions and schema.
;
parcelHelpers.export(exports, "graphqlSync", ()=>_graphqlMjs.graphqlSync
);
parcelHelpers.export(exports, "resolveObjMapThunk", ()=>_indexMjs.resolveObjMapThunk
);
parcelHelpers.export(exports, "resolveReadonlyArrayThunk", ()=>_indexMjs.resolveReadonlyArrayThunk
);
parcelHelpers.export(exports, "GraphQLSchema", ()=>_indexMjs.GraphQLSchema
);
parcelHelpers.export(exports, "GraphQLDirective", ()=>_indexMjs.GraphQLDirective
);
parcelHelpers.export(exports, "GraphQLScalarType", ()=>_indexMjs.GraphQLScalarType
);
parcelHelpers.export(exports, "GraphQLObjectType", ()=>_indexMjs.GraphQLObjectType
);
parcelHelpers.export(exports, "GraphQLInterfaceType", ()=>_indexMjs.GraphQLInterfaceType
);
parcelHelpers.export(exports, "GraphQLUnionType", ()=>_indexMjs.GraphQLUnionType
);
parcelHelpers.export(exports, "GraphQLEnumType", ()=>_indexMjs.GraphQLEnumType
);
parcelHelpers.export(exports, "GraphQLInputObjectType", ()=>_indexMjs.GraphQLInputObjectType
);
parcelHelpers.export(exports, "GraphQLList", ()=>_indexMjs.GraphQLList
);
parcelHelpers.export(exports, "GraphQLNonNull", ()=>_indexMjs.GraphQLNonNull
);
parcelHelpers.export(exports, "specifiedScalarTypes", ()=>_indexMjs.specifiedScalarTypes
);
parcelHelpers.export(exports, "GraphQLInt", ()=>_indexMjs.GraphQLInt
);
parcelHelpers.export(exports, "GraphQLFloat", ()=>_indexMjs.GraphQLFloat
);
parcelHelpers.export(exports, "GraphQLString", ()=>_indexMjs.GraphQLString
);
parcelHelpers.export(exports, "GraphQLBoolean", ()=>_indexMjs.GraphQLBoolean
);
parcelHelpers.export(exports, "GraphQLID", ()=>_indexMjs.GraphQLID
);
parcelHelpers.export(exports, "GRAPHQL_MAX_INT", ()=>_indexMjs.GRAPHQL_MAX_INT
);
parcelHelpers.export(exports, "GRAPHQL_MIN_INT", ()=>_indexMjs.GRAPHQL_MIN_INT
);
parcelHelpers.export(exports, "specifiedDirectives", ()=>_indexMjs.specifiedDirectives
);
parcelHelpers.export(exports, "GraphQLIncludeDirective", ()=>_indexMjs.GraphQLIncludeDirective
);
parcelHelpers.export(exports, "GraphQLSkipDirective", ()=>_indexMjs.GraphQLSkipDirective
);
parcelHelpers.export(exports, "GraphQLDeprecatedDirective", ()=>_indexMjs.GraphQLDeprecatedDirective
);
parcelHelpers.export(exports, "GraphQLSpecifiedByDirective", ()=>_indexMjs.GraphQLSpecifiedByDirective
);
parcelHelpers.export(exports, "TypeKind", ()=>_indexMjs.TypeKind
);
parcelHelpers.export(exports, "DEFAULT_DEPRECATION_REASON", ()=>_indexMjs.DEFAULT_DEPRECATION_REASON
);
parcelHelpers.export(exports, "introspectionTypes", ()=>_indexMjs.introspectionTypes
);
parcelHelpers.export(exports, "__Schema", ()=>_indexMjs.__Schema
);
parcelHelpers.export(exports, "__Directive", ()=>_indexMjs.__Directive
);
parcelHelpers.export(exports, "__DirectiveLocation", ()=>_indexMjs.__DirectiveLocation
);
parcelHelpers.export(exports, "__Type", ()=>_indexMjs.__Type
);
parcelHelpers.export(exports, "__Field", ()=>_indexMjs.__Field
);
parcelHelpers.export(exports, "__InputValue", ()=>_indexMjs.__InputValue
);
parcelHelpers.export(exports, "__EnumValue", ()=>_indexMjs.__EnumValue
);
parcelHelpers.export(exports, "__TypeKind", ()=>_indexMjs.__TypeKind
);
parcelHelpers.export(exports, "SchemaMetaFieldDef", ()=>_indexMjs.SchemaMetaFieldDef
);
parcelHelpers.export(exports, "TypeMetaFieldDef", ()=>_indexMjs.TypeMetaFieldDef
);
parcelHelpers.export(exports, "TypeNameMetaFieldDef", ()=>_indexMjs.TypeNameMetaFieldDef
);
parcelHelpers.export(exports, "isSchema", ()=>_indexMjs.isSchema
);
parcelHelpers.export(exports, "isDirective", ()=>_indexMjs.isDirective
);
parcelHelpers.export(exports, "isType", ()=>_indexMjs.isType
);
parcelHelpers.export(exports, "isScalarType", ()=>_indexMjs.isScalarType
);
parcelHelpers.export(exports, "isObjectType", ()=>_indexMjs.isObjectType
);
parcelHelpers.export(exports, "isInterfaceType", ()=>_indexMjs.isInterfaceType
);
parcelHelpers.export(exports, "isUnionType", ()=>_indexMjs.isUnionType
);
parcelHelpers.export(exports, "isEnumType", ()=>_indexMjs.isEnumType
);
parcelHelpers.export(exports, "isInputObjectType", ()=>_indexMjs.isInputObjectType
);
parcelHelpers.export(exports, "isListType", ()=>_indexMjs.isListType
);
parcelHelpers.export(exports, "isNonNullType", ()=>_indexMjs.isNonNullType
);
parcelHelpers.export(exports, "isInputType", ()=>_indexMjs.isInputType
);
parcelHelpers.export(exports, "isOutputType", ()=>_indexMjs.isOutputType
);
parcelHelpers.export(exports, "isLeafType", ()=>_indexMjs.isLeafType
);
parcelHelpers.export(exports, "isCompositeType", ()=>_indexMjs.isCompositeType
);
parcelHelpers.export(exports, "isAbstractType", ()=>_indexMjs.isAbstractType
);
parcelHelpers.export(exports, "isWrappingType", ()=>_indexMjs.isWrappingType
);
parcelHelpers.export(exports, "isNullableType", ()=>_indexMjs.isNullableType
);
parcelHelpers.export(exports, "isNamedType", ()=>_indexMjs.isNamedType
);
parcelHelpers.export(exports, "isRequiredArgument", ()=>_indexMjs.isRequiredArgument
);
parcelHelpers.export(exports, "isRequiredInputField", ()=>_indexMjs.isRequiredInputField
);
parcelHelpers.export(exports, "isSpecifiedScalarType", ()=>_indexMjs.isSpecifiedScalarType
);
parcelHelpers.export(exports, "isIntrospectionType", ()=>_indexMjs.isIntrospectionType
);
parcelHelpers.export(exports, "isSpecifiedDirective", ()=>_indexMjs.isSpecifiedDirective
);
parcelHelpers.export(exports, "assertSchema", ()=>_indexMjs.assertSchema
);
parcelHelpers.export(exports, "assertDirective", ()=>_indexMjs.assertDirective
);
parcelHelpers.export(exports, "assertType", ()=>_indexMjs.assertType
);
parcelHelpers.export(exports, "assertScalarType", ()=>_indexMjs.assertScalarType
);
parcelHelpers.export(exports, "assertObjectType", ()=>_indexMjs.assertObjectType
);
parcelHelpers.export(exports, "assertInterfaceType", ()=>_indexMjs.assertInterfaceType
);
parcelHelpers.export(exports, "assertUnionType", ()=>_indexMjs.assertUnionType
);
parcelHelpers.export(exports, "assertEnumType", ()=>_indexMjs.assertEnumType
);
parcelHelpers.export(exports, "assertInputObjectType", ()=>_indexMjs.assertInputObjectType
);
parcelHelpers.export(exports, "assertListType", ()=>_indexMjs.assertListType
);
parcelHelpers.export(exports, "assertNonNullType", ()=>_indexMjs.assertNonNullType
);
parcelHelpers.export(exports, "assertInputType", ()=>_indexMjs.assertInputType
);
parcelHelpers.export(exports, "assertOutputType", ()=>_indexMjs.assertOutputType
);
parcelHelpers.export(exports, "assertLeafType", ()=>_indexMjs.assertLeafType
);
parcelHelpers.export(exports, "assertCompositeType", ()=>_indexMjs.assertCompositeType
);
parcelHelpers.export(exports, "assertAbstractType", ()=>_indexMjs.assertAbstractType
);
parcelHelpers.export(exports, "assertWrappingType", ()=>_indexMjs.assertWrappingType
);
parcelHelpers.export(exports, "assertNullableType", ()=>_indexMjs.assertNullableType
);
parcelHelpers.export(exports, "assertNamedType", ()=>_indexMjs.assertNamedType
);
parcelHelpers.export(exports, "getNullableType", ()=>_indexMjs.getNullableType
);
parcelHelpers.export(exports, "getNamedType", ()=>_indexMjs.getNamedType
);
parcelHelpers.export(exports, "validateSchema", ()=>_indexMjs.validateSchema
);
parcelHelpers.export(exports, "assertValidSchema", ()=>_indexMjs.assertValidSchema
);
parcelHelpers.export(exports, "assertName", ()=>_indexMjs.assertName
);
parcelHelpers.export(exports, "assertEnumValueName", ()=>_indexMjs.assertEnumValueName
);
// Parse and operate on GraphQL language source files.
parcelHelpers.export(exports, "Token", ()=>_indexMjs1.Token
);
parcelHelpers.export(exports, "Source", ()=>_indexMjs1.Source
);
parcelHelpers.export(exports, "Location", ()=>_indexMjs1.Location
);
parcelHelpers.export(exports, "OperationTypeNode", ()=>_indexMjs1.OperationTypeNode
);
parcelHelpers.export(exports, "getLocation", ()=>_indexMjs1.getLocation
);
parcelHelpers.export(exports, "printLocation", ()=>_indexMjs1.printLocation
);
parcelHelpers.export(exports, "printSourceLocation", ()=>_indexMjs1.printSourceLocation
);
parcelHelpers.export(exports, "Lexer", ()=>_indexMjs1.Lexer
);
parcelHelpers.export(exports, "TokenKind", ()=>_indexMjs1.TokenKind
);
parcelHelpers.export(exports, "parse", ()=>_indexMjs1.parse
);
parcelHelpers.export(exports, "parseValue", ()=>_indexMjs1.parseValue
);
parcelHelpers.export(exports, "parseConstValue", ()=>_indexMjs1.parseConstValue
);
parcelHelpers.export(exports, "parseType", ()=>_indexMjs1.parseType
);
parcelHelpers.export(exports, "print", ()=>_indexMjs1.print
);
parcelHelpers.export(exports, "visit", ()=>_indexMjs1.visit
);
parcelHelpers.export(exports, "visitInParallel", ()=>_indexMjs1.visitInParallel
);
parcelHelpers.export(exports, "getVisitFn", ()=>_indexMjs1.getVisitFn
);
parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>_indexMjs1.getEnterLeaveForKind
);
parcelHelpers.export(exports, "BREAK", ()=>_indexMjs1.BREAK
);
parcelHelpers.export(exports, "Kind", ()=>_indexMjs1.Kind
);
parcelHelpers.export(exports, "DirectiveLocation", ()=>_indexMjs1.DirectiveLocation
);
parcelHelpers.export(exports, "isDefinitionNode", ()=>_indexMjs1.isDefinitionNode
);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>_indexMjs1.isExecutableDefinitionNode
);
parcelHelpers.export(exports, "isSelectionNode", ()=>_indexMjs1.isSelectionNode
);
parcelHelpers.export(exports, "isValueNode", ()=>_indexMjs1.isValueNode
);
parcelHelpers.export(exports, "isConstValueNode", ()=>_indexMjs1.isConstValueNode
);
parcelHelpers.export(exports, "isTypeNode", ()=>_indexMjs1.isTypeNode
);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>_indexMjs1.isTypeSystemDefinitionNode
);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>_indexMjs1.isTypeDefinitionNode
);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>_indexMjs1.isTypeSystemExtensionNode
);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>_indexMjs1.isTypeExtensionNode
);
// Execute GraphQL queries.
parcelHelpers.export(exports, "execute", ()=>_indexMjs2.execute
);
parcelHelpers.export(exports, "executeSync", ()=>_indexMjs2.executeSync
);
parcelHelpers.export(exports, "defaultFieldResolver", ()=>_indexMjs2.defaultFieldResolver
);
parcelHelpers.export(exports, "defaultTypeResolver", ()=>_indexMjs2.defaultTypeResolver
);
parcelHelpers.export(exports, "responsePathAsArray", ()=>_indexMjs2.responsePathAsArray
);
parcelHelpers.export(exports, "getArgumentValues", ()=>_indexMjs2.getArgumentValues
);
parcelHelpers.export(exports, "getVariableValues", ()=>_indexMjs2.getVariableValues
);
parcelHelpers.export(exports, "getDirectiveValues", ()=>_indexMjs2.getDirectiveValues
);
parcelHelpers.export(exports, "subscribe", ()=>_indexMjs2.subscribe
);
parcelHelpers.export(exports, "createSourceEventStream", ()=>_indexMjs2.createSourceEventStream
);
// Validate GraphQL documents.
parcelHelpers.export(exports, "validate", ()=>_indexMjs3.validate
);
parcelHelpers.export(exports, "ValidationContext", ()=>_indexMjs3.ValidationContext
);
parcelHelpers.export(exports, "specifiedRules", ()=>_indexMjs3.specifiedRules
);
parcelHelpers.export(exports, "ExecutableDefinitionsRule", ()=>_indexMjs3.ExecutableDefinitionsRule
);
parcelHelpers.export(exports, "FieldsOnCorrectTypeRule", ()=>_indexMjs3.FieldsOnCorrectTypeRule
);
parcelHelpers.export(exports, "FragmentsOnCompositeTypesRule", ()=>_indexMjs3.FragmentsOnCompositeTypesRule
);
parcelHelpers.export(exports, "KnownArgumentNamesRule", ()=>_indexMjs3.KnownArgumentNamesRule
);
parcelHelpers.export(exports, "KnownDirectivesRule", ()=>_indexMjs3.KnownDirectivesRule
);
parcelHelpers.export(exports, "KnownFragmentNamesRule", ()=>_indexMjs3.KnownFragmentNamesRule
);
parcelHelpers.export(exports, "KnownTypeNamesRule", ()=>_indexMjs3.KnownTypeNamesRule
);
parcelHelpers.export(exports, "LoneAnonymousOperationRule", ()=>_indexMjs3.LoneAnonymousOperationRule
);
parcelHelpers.export(exports, "NoFragmentCyclesRule", ()=>_indexMjs3.NoFragmentCyclesRule
);
parcelHelpers.export(exports, "NoUndefinedVariablesRule", ()=>_indexMjs3.NoUndefinedVariablesRule
);
parcelHelpers.export(exports, "NoUnusedFragmentsRule", ()=>_indexMjs3.NoUnusedFragmentsRule
);
parcelHelpers.export(exports, "NoUnusedVariablesRule", ()=>_indexMjs3.NoUnusedVariablesRule
);
parcelHelpers.export(exports, "OverlappingFieldsCanBeMergedRule", ()=>_indexMjs3.OverlappingFieldsCanBeMergedRule
);
parcelHelpers.export(exports, "PossibleFragmentSpreadsRule", ()=>_indexMjs3.PossibleFragmentSpreadsRule
);
parcelHelpers.export(exports, "ProvidedRequiredArgumentsRule", ()=>_indexMjs3.ProvidedRequiredArgumentsRule
);
parcelHelpers.export(exports, "ScalarLeafsRule", ()=>_indexMjs3.ScalarLeafsRule
);
parcelHelpers.export(exports, "SingleFieldSubscriptionsRule", ()=>_indexMjs3.SingleFieldSubscriptionsRule
);
parcelHelpers.export(exports, "UniqueArgumentNamesRule", ()=>_indexMjs3.UniqueArgumentNamesRule
);
parcelHelpers.export(exports, "UniqueDirectivesPerLocationRule", ()=>_indexMjs3.UniqueDirectivesPerLocationRule
);
parcelHelpers.export(exports, "UniqueFragmentNamesRule", ()=>_indexMjs3.UniqueFragmentNamesRule
);
parcelHelpers.export(exports, "UniqueInputFieldNamesRule", ()=>_indexMjs3.UniqueInputFieldNamesRule
);
parcelHelpers.export(exports, "UniqueOperationNamesRule", ()=>_indexMjs3.UniqueOperationNamesRule
);
parcelHelpers.export(exports, "UniqueVariableNamesRule", ()=>_indexMjs3.UniqueVariableNamesRule
);
parcelHelpers.export(exports, "ValuesOfCorrectTypeRule", ()=>_indexMjs3.ValuesOfCorrectTypeRule
);
parcelHelpers.export(exports, "VariablesAreInputTypesRule", ()=>_indexMjs3.VariablesAreInputTypesRule
);
parcelHelpers.export(exports, "VariablesInAllowedPositionRule", ()=>_indexMjs3.VariablesInAllowedPositionRule
);
parcelHelpers.export(exports, "LoneSchemaDefinitionRule", ()=>_indexMjs3.LoneSchemaDefinitionRule
);
parcelHelpers.export(exports, "UniqueOperationTypesRule", ()=>_indexMjs3.UniqueOperationTypesRule
);
parcelHelpers.export(exports, "UniqueTypeNamesRule", ()=>_indexMjs3.UniqueTypeNamesRule
);
parcelHelpers.export(exports, "UniqueEnumValueNamesRule", ()=>_indexMjs3.UniqueEnumValueNamesRule
);
parcelHelpers.export(exports, "UniqueFieldDefinitionNamesRule", ()=>_indexMjs3.UniqueFieldDefinitionNamesRule
);
parcelHelpers.export(exports, "UniqueArgumentDefinitionNamesRule", ()=>_indexMjs3.UniqueArgumentDefinitionNamesRule
);
parcelHelpers.export(exports, "UniqueDirectiveNamesRule", ()=>_indexMjs3.UniqueDirectiveNamesRule
);
parcelHelpers.export(exports, "PossibleTypeExtensionsRule", ()=>_indexMjs3.PossibleTypeExtensionsRule
);
parcelHelpers.export(exports, "NoDeprecatedCustomRule", ()=>_indexMjs3.NoDeprecatedCustomRule
);
parcelHelpers.export(exports, "NoSchemaIntrospectionCustomRule", ()=>_indexMjs3.NoSchemaIntrospectionCustomRule
);
// Create, format, and print GraphQL errors.
parcelHelpers.export(exports, "GraphQLError", ()=>_indexMjs4.GraphQLError
);
parcelHelpers.export(exports, "syntaxError", ()=>_indexMjs4.syntaxError
);
parcelHelpers.export(exports, "locatedError", ()=>_indexMjs4.locatedError
);
parcelHelpers.export(exports, "printError", ()=>_indexMjs4.printError
);
parcelHelpers.export(exports, "formatError", ()=>_indexMjs4.formatError
);
// Utilities for operating on GraphQL type schema and parsed sources.
parcelHelpers.export(exports, "getIntrospectionQuery", ()=>_indexMjs5.getIntrospectionQuery
);
parcelHelpers.export(exports, "getOperationAST", ()=>_indexMjs5.getOperationAST
);
parcelHelpers.export(exports, "getOperationRootType", ()=>_indexMjs5.getOperationRootType
);
parcelHelpers.export(exports, "introspectionFromSchema", ()=>_indexMjs5.introspectionFromSchema
);
parcelHelpers.export(exports, "buildClientSchema", ()=>_indexMjs5.buildClientSchema
);
parcelHelpers.export(exports, "buildASTSchema", ()=>_indexMjs5.buildASTSchema
);
parcelHelpers.export(exports, "buildSchema", ()=>_indexMjs5.buildSchema
);
parcelHelpers.export(exports, "extendSchema", ()=>_indexMjs5.extendSchema
);
parcelHelpers.export(exports, "lexicographicSortSchema", ()=>_indexMjs5.lexicographicSortSchema
);
parcelHelpers.export(exports, "printSchema", ()=>_indexMjs5.printSchema
);
parcelHelpers.export(exports, "printType", ()=>_indexMjs5.printType
);
parcelHelpers.export(exports, "printIntrospectionSchema", ()=>_indexMjs5.printIntrospectionSchema
);
parcelHelpers.export(exports, "typeFromAST", ()=>_indexMjs5.typeFromAST
);
parcelHelpers.export(exports, "valueFromAST", ()=>_indexMjs5.valueFromAST
);
parcelHelpers.export(exports, "valueFromASTUntyped", ()=>_indexMjs5.valueFromASTUntyped
);
parcelHelpers.export(exports, "astFromValue", ()=>_indexMjs5.astFromValue
);
parcelHelpers.export(exports, "TypeInfo", ()=>_indexMjs5.TypeInfo
);
parcelHelpers.export(exports, "visitWithTypeInfo", ()=>_indexMjs5.visitWithTypeInfo
);
parcelHelpers.export(exports, "coerceInputValue", ()=>_indexMjs5.coerceInputValue
);
parcelHelpers.export(exports, "concatAST", ()=>_indexMjs5.concatAST
);
parcelHelpers.export(exports, "separateOperations", ()=>_indexMjs5.separateOperations
);
parcelHelpers.export(exports, "stripIgnoredCharacters", ()=>_indexMjs5.stripIgnoredCharacters
);
parcelHelpers.export(exports, "isEqualType", ()=>_indexMjs5.isEqualType
);
parcelHelpers.export(exports, "isTypeSubTypeOf", ()=>_indexMjs5.isTypeSubTypeOf
);
parcelHelpers.export(exports, "doTypesOverlap", ()=>_indexMjs5.doTypesOverlap
);
parcelHelpers.export(exports, "assertValidName", ()=>_indexMjs5.assertValidName
);
parcelHelpers.export(exports, "isValidNameError", ()=>_indexMjs5.isValidNameError
);
parcelHelpers.export(exports, "BreakingChangeType", ()=>_indexMjs5.BreakingChangeType
);
parcelHelpers.export(exports, "DangerousChangeType", ()=>_indexMjs5.DangerousChangeType
);
parcelHelpers.export(exports, "findBreakingChanges", ()=>_indexMjs5.findBreakingChanges
);
parcelHelpers.export(exports, "findDangerousChanges", ()=>_indexMjs5.findDangerousChanges
);
var _versionMjs = require("./version.mjs");
var _graphqlMjs = require("./graphql.mjs");
var _indexMjs = require("./type/index.mjs");
var _indexMjs1 = require("./language/index.mjs");
var _indexMjs2 = require("./execution/index.mjs");
var _indexMjs3 = require("./validation/index.mjs");
var _indexMjs4 = require("./error/index.mjs");
var _indexMjs5 = require("./utilities/index.mjs");

},{"./version.mjs":false,"./graphql.mjs":false,"./type/index.mjs":false,"./language/index.mjs":"gdSvN","./execution/index.mjs":false,"./validation/index.mjs":false,"./error/index.mjs":false,"./utilities/index.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdSvN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Source", ()=>_sourceMjs.Source
);
parcelHelpers.export(exports, "getLocation", ()=>_locationMjs.getLocation
);
parcelHelpers.export(exports, "printLocation", ()=>_printLocationMjs.printLocation
);
parcelHelpers.export(exports, "printSourceLocation", ()=>_printLocationMjs.printSourceLocation
);
parcelHelpers.export(exports, "Kind", ()=>_kindsMjs.Kind
);
parcelHelpers.export(exports, "TokenKind", ()=>_tokenKindMjs.TokenKind
);
parcelHelpers.export(exports, "Lexer", ()=>_lexerMjs.Lexer
);
parcelHelpers.export(exports, "parse", ()=>_parserMjs.parse
);
parcelHelpers.export(exports, "parseValue", ()=>_parserMjs.parseValue
);
parcelHelpers.export(exports, "parseConstValue", ()=>_parserMjs.parseConstValue
);
parcelHelpers.export(exports, "parseType", ()=>_parserMjs.parseType
);
parcelHelpers.export(exports, "print", ()=>_printerMjs.print
);
parcelHelpers.export(exports, "visit", ()=>_visitorMjs.visit
);
parcelHelpers.export(exports, "visitInParallel", ()=>_visitorMjs.visitInParallel
);
parcelHelpers.export(exports, "getVisitFn", ()=>_visitorMjs.getVisitFn
);
parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>_visitorMjs.getEnterLeaveForKind
);
parcelHelpers.export(exports, "BREAK", ()=>_visitorMjs.BREAK
);
parcelHelpers.export(exports, "Location", ()=>_astMjs.Location
);
parcelHelpers.export(exports, "Token", ()=>_astMjs.Token
);
parcelHelpers.export(exports, "OperationTypeNode", ()=>_astMjs.OperationTypeNode
);
parcelHelpers.export(exports, "isDefinitionNode", ()=>_predicatesMjs.isDefinitionNode
);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>_predicatesMjs.isExecutableDefinitionNode
);
parcelHelpers.export(exports, "isSelectionNode", ()=>_predicatesMjs.isSelectionNode
);
parcelHelpers.export(exports, "isValueNode", ()=>_predicatesMjs.isValueNode
);
parcelHelpers.export(exports, "isConstValueNode", ()=>_predicatesMjs.isConstValueNode
);
parcelHelpers.export(exports, "isTypeNode", ()=>_predicatesMjs.isTypeNode
);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>_predicatesMjs.isTypeSystemDefinitionNode
);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>_predicatesMjs.isTypeDefinitionNode
);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>_predicatesMjs.isTypeSystemExtensionNode
);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>_predicatesMjs.isTypeExtensionNode
);
parcelHelpers.export(exports, "DirectiveLocation", ()=>_directiveLocationMjs.DirectiveLocation
);
var _sourceMjs = require("./source.mjs");
var _locationMjs = require("./location.mjs");
var _printLocationMjs = require("./printLocation.mjs");
var _kindsMjs = require("./kinds.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
var _lexerMjs = require("./lexer.mjs");
var _parserMjs = require("./parser.mjs");
var _printerMjs = require("./printer.mjs");
var _visitorMjs = require("./visitor.mjs");
var _astMjs = require("./ast.mjs");
var _predicatesMjs = require("./predicates.mjs");
var _directiveLocationMjs = require("./directiveLocation.mjs");

},{"./source.mjs":"jclLZ","./location.mjs":"gC1Jl","./printLocation.mjs":"dxBRO","./kinds.mjs":"6adj0","./tokenKind.mjs":"chwug","./lexer.mjs":"6eDKj","./parser.mjs":"iQAAW","./printer.mjs":"6YJ0M","./visitor.mjs":"dn6QO","./ast.mjs":"iaolY","./predicates.mjs":"hiHiR","./directiveLocation.mjs":"hGyry","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jclLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */ parcelHelpers.export(exports, "Source", ()=>Source
);
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */ parcelHelpers.export(exports, "isSource", ()=>isSource
);
var _devAssertMjs = require("../jsutils/devAssert.mjs");
var _inspectMjs = require("../jsutils/inspect.mjs");
var _instanceOfMjs = require("../jsutils/instanceOf.mjs");
class Source {
    constructor(body, name = 'GraphQL request', locationOffset = {
        line: 1,
        column: 1
    }){
        typeof body === 'string' || _devAssertMjs.devAssert(false, `Body must be a string. Received: ${_inspectMjs.inspect(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || _devAssertMjs.devAssert(false, 'line in locationOffset is 1-indexed and must be positive.');
        this.locationOffset.column > 0 || _devAssertMjs.devAssert(false, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [Symbol.toStringTag]() {
        return 'Source';
    }
}
function isSource(source) {
    return _instanceOfMjs.instanceOf(source, Source);
}

},{"../jsutils/devAssert.mjs":"7HVcG","../jsutils/inspect.mjs":"eTiKK","../jsutils/instanceOf.mjs":"hkwlu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HVcG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "devAssert", ()=>devAssert
);
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTiKK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Used to print values in error messages.
 */ parcelHelpers.export(exports, "inspect", ()=>inspect
);
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) return 'null';
    if (previouslySeenValues.includes(value)) return '[Circular]';
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
    } else if (Array.isArray(value)) return formatArray(value, seenValues);
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) return '{}';
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return '[' + getObjectTag(object) + ']';
    const properties = entries.map(([key, value])=>key + ': ' + formatValue(value, seenValues)
    );
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) return '[]';
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return '[Array]';
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i)items.push(formatValue(array[i], seenValues));
    if (remaining === 1) items.push('... 1 more item');
    else if (remaining > 1) items.push(`... ${remaining} more items`);
    return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') return name;
    }
    return tag;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkwlu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instanceOf", ()=>instanceOf
);
var _inspectMjs = require("./inspect.mjs");
const instanceOf = function instanceOf(value, constructor) {
    if (value instanceof constructor) return true;
    if (typeof value === 'object' && value !== null) {
        var _value$constructor;
        // Prefer Symbol.toStringTag since it is immune to minification.
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
         ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
            const stringifiedValue = _inspectMjs.inspect(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};

},{"./inspect.mjs":"eTiKK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gC1Jl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents a location in a Source.
 */ /**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */ parcelHelpers.export(exports, "getLocation", ()=>getLocation
);
var _invariantMjs = require("../jsutils/invariant.mjs");
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match of source.body.matchAll(LineRegExp)){
        typeof match.index === 'number' || _invariantMjs.invariant(false);
        if (match.index >= position) break;
        lastLineStart = match.index + match[0].length;
        line += 1;
    }
    return {
        line,
        column: position + 1 - lastLineStart
    };
}

},{"../jsutils/invariant.mjs":"kr8jI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kr8jI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant
);
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message != null ? message : 'Unexpected invariant triggered.');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxBRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ parcelHelpers.export(exports, "printLocation", ()=>printLocation
);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ parcelHelpers.export(exports, "printSourceLocation", ()=>printSourceLocation
);
var _locationMjs = require("./location.mjs");
function printLocation(location) {
    return printSourceLocation(location.source, _locationMjs.getLocation(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = ''.padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i = 0; i < locationLine.length; i += 80)subLines.push(locationLine.slice(i, i + 80));
        return locationStr + printPrefixedLines([
            [
                `${lineNum} |`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    '|',
                    subLine
                ]
            ),
            [
                '|',
                '^'.padStart(subLineColumnNum)
            ],
            [
                '|',
                subLines[subLineIndex + 1]
            ], 
        ]);
    }
    return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [
            `${lineNum - 1} |`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum} |`,
            locationLine
        ],
        [
            '|',
            '^'.padStart(columnNum)
        ],
        [
            `${lineNum + 1} |`,
            lines[lineIndex + 1]
        ], 
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined
    );
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length
    ));
    return existingLines.map(([prefix, line])=>prefix.padStart(padLen) + (line ? ' ' + line : '')
    ).join('\n');
}

},{"./location.mjs":"gC1Jl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6adj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Kind", ()=>Kind
);
let Kind;
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ (function(Kind1) {
    Kind1['NAME'] = 'Name';
    Kind1['DOCUMENT'] = 'Document';
    Kind1['OPERATION_DEFINITION'] = 'OperationDefinition';
    Kind1['VARIABLE_DEFINITION'] = 'VariableDefinition';
    Kind1['SELECTION_SET'] = 'SelectionSet';
    Kind1['FIELD'] = 'Field';
    Kind1['ARGUMENT'] = 'Argument';
    Kind1['FRAGMENT_SPREAD'] = 'FragmentSpread';
    Kind1['INLINE_FRAGMENT'] = 'InlineFragment';
    Kind1['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
    Kind1['VARIABLE'] = 'Variable';
    Kind1['INT'] = 'IntValue';
    Kind1['FLOAT'] = 'FloatValue';
    Kind1['STRING'] = 'StringValue';
    Kind1['BOOLEAN'] = 'BooleanValue';
    Kind1['NULL'] = 'NullValue';
    Kind1['ENUM'] = 'EnumValue';
    Kind1['LIST'] = 'ListValue';
    Kind1['OBJECT'] = 'ObjectValue';
    Kind1['OBJECT_FIELD'] = 'ObjectField';
    Kind1['DIRECTIVE'] = 'Directive';
    Kind1['NAMED_TYPE'] = 'NamedType';
    Kind1['LIST_TYPE'] = 'ListType';
    Kind1['NON_NULL_TYPE'] = 'NonNullType';
    Kind1['SCHEMA_DEFINITION'] = 'SchemaDefinition';
    Kind1['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
    Kind1['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
    Kind1['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
    Kind1['FIELD_DEFINITION'] = 'FieldDefinition';
    Kind1['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
    Kind1['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
    Kind1['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
    Kind1['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
    Kind1['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
    Kind1['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
    Kind1['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
    Kind1['SCHEMA_EXTENSION'] = 'SchemaExtension';
    Kind1['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
    Kind1['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
    Kind1['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
    Kind1['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
    Kind1['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
    Kind1['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chwug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenKind", ()=>TokenKind
);
let TokenKind;
/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ (function(TokenKind1) {
    TokenKind1['SOF'] = '<SOF>';
    TokenKind1['EOF'] = '<EOF>';
    TokenKind1['BANG'] = '!';
    TokenKind1['DOLLAR'] = '$';
    TokenKind1['AMP'] = '&';
    TokenKind1['PAREN_L'] = '(';
    TokenKind1['PAREN_R'] = ')';
    TokenKind1['SPREAD'] = '...';
    TokenKind1['COLON'] = ':';
    TokenKind1['EQUALS'] = '=';
    TokenKind1['AT'] = '@';
    TokenKind1['BRACKET_L'] = '[';
    TokenKind1['BRACKET_R'] = ']';
    TokenKind1['BRACE_L'] = '{';
    TokenKind1['PIPE'] = '|';
    TokenKind1['BRACE_R'] = '}';
    TokenKind1['NAME'] = 'Name';
    TokenKind1['INT'] = 'Int';
    TokenKind1['FLOAT'] = 'Float';
    TokenKind1['STRING'] = 'String';
    TokenKind1['BLOCK_STRING'] = 'BlockString';
    TokenKind1['COMMENT'] = 'Comment';
})(TokenKind || (TokenKind = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eDKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */ parcelHelpers.export(exports, "Lexer", ()=>Lexer
);
/**
 * @internal
 */ parcelHelpers.export(exports, "isPunctuatorTokenKind", ()=>isPunctuatorTokenKind
);
var _syntaxErrorMjs = require("../error/syntaxError.mjs");
var _astMjs = require("./ast.mjs");
var _blockStringMjs = require("./blockString.mjs");
var _characterClassesMjs = require("./characterClasses.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
class Lexer {
    /**
   * The previously focused non-ignored token.
   */ /**
   * The currently focused non-ignored token.
   */ /**
   * The (1-indexed) line containing the current token.
   */ /**
   * The character offset at which the current line begins.
   */ constructor(source){
        const startOfFileToken = new _astMjs.Token(_tokenKindMjs.TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return 'Lexer';
    }
    /**
   * Advances the token stream to the next non-ignored token.
   */ advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */ lookahead() {
        let token = this.token;
        if (token.kind !== _tokenKindMjs.TokenKind.EOF) {
            do if (token.next) token = token.next;
            else {
                // Read the next token and form a link in the token linked-list.
                const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.
                token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.
                nextToken.prev = token;
                token = nextToken;
            }
            while (token.kind === _tokenKindMjs.TokenKind.COMMENT)
        }
        return token;
    }
}
function isPunctuatorTokenKind(kind) {
    return kind === _tokenKindMjs.TokenKind.BANG || kind === _tokenKindMjs.TokenKind.DOLLAR || kind === _tokenKindMjs.TokenKind.AMP || kind === _tokenKindMjs.TokenKind.PAREN_L || kind === _tokenKindMjs.TokenKind.PAREN_R || kind === _tokenKindMjs.TokenKind.SPREAD || kind === _tokenKindMjs.TokenKind.COLON || kind === _tokenKindMjs.TokenKind.EQUALS || kind === _tokenKindMjs.TokenKind.AT || kind === _tokenKindMjs.TokenKind.BRACKET_L || kind === _tokenKindMjs.TokenKind.BRACKET_R || kind === _tokenKindMjs.TokenKind.BRACE_L || kind === _tokenKindMjs.TokenKind.PIPE || kind === _tokenKindMjs.TokenKind.BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */ function isUnicodeScalarValue(code) {
    return code >= 0x0000 && code <= 0xd7ff || code >= 0xe000 && code <= 0x10ffff;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */ function isSupplementaryCodePoint(body, location) {
    return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
}
function isTrailingSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */ function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);
    if (code === undefined) return _tokenKindMjs.TokenKind.EOF;
    else if (code >= 0x0020 && code <= 0x007e) {
        // Printable ASCII
        const char = String.fromCodePoint(code);
        return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point
    return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */ function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new _astMjs.Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */ function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // SourceCharacter
        switch(code){
            // Ignored ::
            //   - UnicodeBOM
            //   - WhiteSpace
            //   - LineTerminator
            //   - Comment
            //   - Comma
            //
            // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
            //
            // WhiteSpace ::
            //   - "Horizontal Tab (U+0009)"
            //   - "Space (U+0020)"
            //
            // Comma :: ,
            case 0xfeff:
            case 0x0009:
            case 0x0020:
            case 0x002c:
                // ,
                ++position;
                continue;
            // LineTerminator ::
            //   - "New Line (U+000A)"
            //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
            //   - "Carriage Return (U+000D)" "New Line (U+000A)"
            case 0x000a:
                // \n
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            case 0x000d:
                // \r
                if (body.charCodeAt(position + 1) === 0x000a) position += 2;
                else ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            // Comment
            case 0x0023:
                // #
                return readComment(lexer, position);
            // Token ::
            //   - Punctuator
            //   - Name
            //   - IntValue
            //   - FloatValue
            //   - StringValue
            //
            // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
            case 0x0021:
                // !
                return createToken(lexer, _tokenKindMjs.TokenKind.BANG, position, position + 1);
            case 0x0024:
                // $
                return createToken(lexer, _tokenKindMjs.TokenKind.DOLLAR, position, position + 1);
            case 0x0026:
                // &
                return createToken(lexer, _tokenKindMjs.TokenKind.AMP, position, position + 1);
            case 0x0028:
                // (
                return createToken(lexer, _tokenKindMjs.TokenKind.PAREN_L, position, position + 1);
            case 0x0029:
                // )
                return createToken(lexer, _tokenKindMjs.TokenKind.PAREN_R, position, position + 1);
            case 0x002e:
                // .
                if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) return createToken(lexer, _tokenKindMjs.TokenKind.SPREAD, position, position + 3);
                break;
            case 0x003a:
                // :
                return createToken(lexer, _tokenKindMjs.TokenKind.COLON, position, position + 1);
            case 0x003d:
                // =
                return createToken(lexer, _tokenKindMjs.TokenKind.EQUALS, position, position + 1);
            case 0x0040:
                // @
                return createToken(lexer, _tokenKindMjs.TokenKind.AT, position, position + 1);
            case 0x005b:
                // [
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACKET_L, position, position + 1);
            case 0x005d:
                // ]
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACKET_R, position, position + 1);
            case 0x007b:
                // {
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACE_L, position, position + 1);
            case 0x007c:
                // |
                return createToken(lexer, _tokenKindMjs.TokenKind.PIPE, position, position + 1);
            case 0x007d:
                // }
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACE_R, position, position + 1);
            // StringValue
            case 0x0022:
                // "
                if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) return readBlockString(lexer, position);
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if (_characterClassesMjs.isDigit(code) || code === 0x002d) return readNumber(lexer, position, code);
         // Name
        if (_characterClassesMjs.isNameStart(code)) return readName(lexer, position);
        throw _syntaxErrorMjs.syntaxError(lexer.source, position, code === 0x0027 ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?' : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, _tokenKindMjs.TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */ function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) break;
         // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else break;
    }
    return createToken(lexer, _tokenKindMjs.TokenKind.COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */ function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)
    if (code === 0x002d) code = body.charCodeAt(++position);
     // Zero (0)
    if (code === 0x0030) {
        code = body.charCodeAt(++position);
        if (_characterClassesMjs.isDigit(code)) throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
    } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Full stop (.)
    if (code === 0x002e) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // E e
    if (code === 0x0045 || code === 0x0065) {
        isFloat = true;
        code = body.charCodeAt(++position); // + -
        if (code === 0x002b || code === 0x002d) code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart
    if (code === 0x002e || _characterClassesMjs.isNameStart(code)) throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    return createToken(lexer, isFloat ? _tokenKindMjs.TokenKind.FLOAT : _tokenKindMjs.TokenKind.INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!_characterClassesMjs.isDigit(firstCode)) throw _syntaxErrorMjs.syntaxError(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while(_characterClassesMjs.isDigit(body.charCodeAt(position)))++position;
    return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */ function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = '';
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Quote (")
        if (code === 0x0022) {
            value += body.slice(chunkStart, position);
            return createToken(lexer, _tokenKindMjs.TokenKind.STRING, start, position + 1, value);
        } // Escape Sequence (\)
        if (code === 0x005c) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 0x0075 // u
             ? body.charCodeAt(position + 2) === 0x007b // {
             ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
        } // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) break;
         // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.
function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).
    while(size < 12){
        const code = body.charCodeAt(position + size++); // Closing Brace (})
        if (code === 0x007d) {
            // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
            if (size < 5 || !isUnicodeScalarValue(point)) break;
            return {
                value: String.fromCodePoint(point),
                size
            };
        } // Append this hex digit to the code point.
        point = point << 4 | readHexDigit(code);
        if (point < 0) break;
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);
    if (isUnicodeScalarValue(code)) return {
        value: String.fromCodePoint(code),
        size: 6
    };
     // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.
    if (isLeadingSurrogate(code)) // \u
    {
        if (body.charCodeAt(position + 6) === 0x005c && body.charCodeAt(position + 7) === 0x0075) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) // JavaScript defines strings as a sequence of UTF-16 code units and
            // encodes Unicode code points above U+FFFF using a surrogate pair of
            // code units. Since this is a surrogate pair escape sequence, just
            // include both codes into the JavaScript string value. Had JavaScript
            // not been internally based on UTF-16, then this surrogate pair would
            // be decoded to retrieve the supplementary code point.
            return {
                value: String.fromCodePoint(code, trailingCode),
                size: 12
            };
        }
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */ function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */ function readHexDigit(code) {
    return code >= 0x0030 && code <= 0x0039 // 0-9
     ? code - 0x0030 : code >= 0x0041 && code <= 0x0046 // A-F
     ? code - 0x0037 : code >= 0x0061 && code <= 0x0066 // a-f
     ? code - 0x0057 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */ function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);
    switch(code){
        case 0x0022:
            // "
            return {
                value: '\u0022',
                size: 2
            };
        case 0x005c:
            // \
            return {
                value: '\u005c',
                size: 2
            };
        case 0x002f:
            // /
            return {
                value: '\u002f',
                size: 2
            };
        case 0x0062:
            // b
            return {
                value: '\u0008',
                size: 2
            };
        case 0x0066:
            // f
            return {
                value: '\u000c',
                size: 2
            };
        case 0x006e:
            // n
            return {
                value: '\u000a',
                size: 2
            };
        case 0x0072:
            // r
            return {
                value: '\u000d',
                size: 2
            };
        case 0x0074:
            // t
            return {
                value: '\u0009',
                size: 2
            };
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */ function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = '';
    const blockLines = [];
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Triple-Quote (""")
        if (code === 0x0022 && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(lexer, _tokenKindMjs.TokenKind.BLOCK_STRING, start, position + 3, _blockStringMjs.dedentBlockStringLines(blockLines).join('\n'));
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
        } // Escaped Triple-Quote (\""")
        if (code === 0x005c && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022 && body.charCodeAt(position + 3) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1; // skip only slash
            position += 4;
            continue;
        } // LineTerminator
        if (code === 0x000a || code === 0x000d) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) position += 2;
            else ++position;
            currentLine = '';
            chunkStart = position;
            lineStart = position;
            continue;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */ function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position);
        if (_characterClassesMjs.isNameContinue(code)) ++position;
        else break;
    }
    return createToken(lexer, _tokenKindMjs.TokenKind.NAME, start, position, body.slice(start, position));
}

},{"../error/syntaxError.mjs":"9aPZI","./ast.mjs":"iaolY","./blockString.mjs":"hVqvS","./characterClasses.mjs":"ieRdY","./tokenKind.mjs":"chwug","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9aPZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */ parcelHelpers.export(exports, "syntaxError", ()=>syntaxError
);
var _graphQLErrorMjs = require("./GraphQLError.mjs");
function syntaxError(source, position, description) {
    return new _graphQLErrorMjs.GraphQLError(`Syntax Error: ${description}`, {
        source,
        positions: [
            position
        ]
    });
}

},{"./GraphQLError.mjs":"1aaUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aaUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */ parcelHelpers.export(exports, "GraphQLError", ()=>GraphQLError
);
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */ /**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ parcelHelpers.export(exports, "printError", ()=>printError
);
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */ parcelHelpers.export(exports, "formatError", ()=>formatError
);
var _isObjectLikeMjs = require("../jsutils/isObjectLike.mjs");
var _locationMjs = require("../language/location.mjs");
var _printLocationMjs = require("../language/printLocation.mjs");
function toNormalizedOptions(args) {
    const firstArg = args[0];
    if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) return {
        nodes: firstArg,
        source: args[1],
        positions: args[2],
        path: args[3],
        originalError: args[4],
        extensions: args[5]
    };
    return firstArg;
}
class GraphQLError extends Error {
    /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */ /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */ /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */ /**
   * The original error thrown from a field resolver during execution.
   */ /**
   * Extension fields to add to the formatted error.
   */ /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */ constructor(message, ...rawArgs){
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes , source , positions , path , originalError , extensions  } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = 'GraphQLError';
        this.path = path !== null && path !== void 0 ? path : undefined;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : undefined);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node)=>node.loc
        ).filter((loc)=>loc != null
        )); // Compute locations in the source for the given nodes/positions.
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>loc.start
        );
        this.locations = positions && source ? positions.map((pos)=>_locationMjs.getLocation(source, pos)
        ) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>_locationMjs.getLocation(loc.source, loc.start)
        );
        const originalExtensions = _isObjectLikeMjs.isObjectLike(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
        // Keep the rest as non-enumerable.
        Object.defineProperties(this, {
            message: {
                writable: true,
                enumerable: true
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        }); // Include (non-enumerable) stack trace.
        /* c8 ignore start */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
        if (originalError !== null && originalError !== void 0 && originalError.stack) Object.defineProperty(this, 'stack', {
            value: originalError.stack,
            writable: true,
            configurable: true
        });
        else if (Error.captureStackTrace) Error.captureStackTrace(this, GraphQLError);
        else Object.defineProperty(this, 'stack', {
            value: Error().stack,
            writable: true,
            configurable: true
        });
    /* c8 ignore stop */ }
    get [Symbol.toStringTag]() {
        return 'GraphQLError';
    }
    toString() {
        let output = this.message;
        if (this.nodes) {
            for (const node of this.nodes)if (node.loc) output += '\n\n' + _printLocationMjs.printLocation(node.loc);
        } else if (this.source && this.locations) for (const location of this.locations)output += '\n\n' + _printLocationMjs.printSourceLocation(this.source, location);
        return output;
    }
    toJSON() {
        const formattedError = {
            message: this.message
        };
        if (this.locations != null) formattedError.locations = this.locations;
        if (this.path != null) formattedError.path = this.path;
        if (this.extensions != null && Object.keys(this.extensions).length > 0) formattedError.extensions = this.extensions;
        return formattedError;
    }
}
function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
}
function printError(error) {
    return error.toString();
}
function formatError(error) {
    return error.toJSON();
}

},{"../jsutils/isObjectLike.mjs":"6KQxg","../language/location.mjs":"gC1Jl","../language/printLocation.mjs":"dxBRO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KQxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ parcelHelpers.export(exports, "isObjectLike", ()=>isObjectLike
);
function isObjectLike(value) {
    return typeof value == 'object' && value !== null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaolY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ parcelHelpers.export(exports, "Location", ()=>Location
);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ parcelHelpers.export(exports, "Token", ()=>Token
);
parcelHelpers.export(exports, "QueryDocumentKeys", ()=>QueryDocumentKeys
);
/**
 * @internal
 */ parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "OperationTypeNode", ()=>OperationTypeNode
);
class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return 'Location';
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return 'Token';
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
const QueryDocumentKeys = {
    Name: [],
    Document: [
        'definitions'
    ],
    OperationDefinition: [
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet', 
    ],
    VariableDefinition: [
        'variable',
        'type',
        'defaultValue',
        'directives'
    ],
    Variable: [
        'name'
    ],
    SelectionSet: [
        'selections'
    ],
    Field: [
        'alias',
        'name',
        'arguments',
        'directives',
        'selectionSet'
    ],
    Argument: [
        'name',
        'value'
    ],
    FragmentSpread: [
        'name',
        'directives'
    ],
    InlineFragment: [
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet', 
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        'values'
    ],
    ObjectValue: [
        'fields'
    ],
    ObjectField: [
        'name',
        'value'
    ],
    Directive: [
        'name',
        'arguments'
    ],
    NamedType: [
        'name'
    ],
    ListType: [
        'type'
    ],
    NonNullType: [
        'type'
    ],
    SchemaDefinition: [
        'description',
        'directives',
        'operationTypes'
    ],
    OperationTypeDefinition: [
        'type'
    ],
    ScalarTypeDefinition: [
        'description',
        'name',
        'directives'
    ],
    ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields', 
    ],
    FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
    ],
    InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives', 
    ],
    InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields', 
    ],
    UnionTypeDefinition: [
        'description',
        'name',
        'directives',
        'types'
    ],
    EnumTypeDefinition: [
        'description',
        'name',
        'directives',
        'values'
    ],
    EnumValueDefinition: [
        'description',
        'name',
        'directives'
    ],
    InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
    ],
    DirectiveDefinition: [
        'description',
        'name',
        'arguments',
        'locations'
    ],
    SchemaExtension: [
        'directives',
        'operationTypes'
    ],
    ScalarTypeExtension: [
        'name',
        'directives'
    ],
    ObjectTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    InterfaceTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeExtension: [
        'name',
        'directives',
        'types'
    ],
    EnumTypeExtension: [
        'name',
        'directives',
        'values'
    ],
    InputObjectTypeExtension: [
        'name',
        'directives',
        'fields'
    ]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
let OperationTypeNode;
(function(OperationTypeNode1) {
    OperationTypeNode1['QUERY'] = 'query';
    OperationTypeNode1['MUTATION'] = 'mutation';
    OperationTypeNode1['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (OperationTypeNode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVqvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ parcelHelpers.export(exports, "dedentBlockStringLines", ()=>dedentBlockStringLines
);
/**
 * @internal
 */ parcelHelpers.export(exports, "isPrintableAsBlockString", ()=>isPrintableAsBlockString
);
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ parcelHelpers.export(exports, "printBlockString", ()=>printBlockString
);
var _characterClassesMjs = require("./characterClasses.mjs");
function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i1 = 0; i1 < lines.length; ++i1){
        var _firstNonEmptyLine;
        const line = lines[i1];
        const indent = leadingWhitespace(line);
        if (indent === line.length) continue; // skip empty lines
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i1;
        lastNonEmptyLine = i1;
        if (i1 !== 0 && indent < commonIndent) commonIndent = indent;
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)
    ) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && _characterClassesMjs.isWhiteSpace(str.charCodeAt(i)))++i;
    return i;
}
function isPrintableAsBlockString(value) {
    if (value === '') return true; // empty string is printable
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i)switch(value.codePointAt(i)){
        case 0x0000:
        case 0x0001:
        case 0x0002:
        case 0x0003:
        case 0x0004:
        case 0x0005:
        case 0x0006:
        case 0x0007:
        case 0x0008:
        case 0x000b:
        case 0x000c:
        case 0x000e:
        case 0x000f:
            return false;
        // Has non-printable characters
        case 0x000d:
            //  \r
            return false;
        // Has \r or \r\n which will be replaced as \n
        case 10:
            //  \n
            if (isEmptyLine && !seenNonEmptyLine) return false; // Has leading new line
            seenNonEmptyLine = true;
            isEmptyLine = true;
            hasIndent = false;
            break;
        case 9:
        case 32:
            //  <space>
            hasIndent || (hasIndent = isEmptyLine);
            break;
        default:
            hasCommonIndent && (hasCommonIndent = hasIndent);
            isEmptyLine = false;
    }
    if (isEmptyLine) return false; // Has trailing empty lines
    if (hasCommonIndent && seenNonEmptyLine) return false; // Has internal indent
    return true;
}
function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || _characterClassesMjs.isWhiteSpace(line.charCodeAt(0))
    ); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith('\\');
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ''; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && _characterClassesMjs.isWhiteSpace(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) result += '\n';
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) result += '\n';
    return '"""' + result + '"""';
}

},{"./characterClasses.mjs":"ieRdY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ieRdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isWhiteSpace", ()=>isWhiteSpace
);
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isDigit", ()=>isDigit
);
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isLetter", ()=>isLetter
);
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isNameStart", ()=>isNameStart
);
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isNameContinue", ()=>isNameContinue
);
function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
}
function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
function isLetter(code) {
    return code >= 0x0061 && code <= 0x007a || code >= 0x0041 && code <= 0x005a // a-z
    ;
}
function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
}
function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 0x005f;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQAAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configuration options to control parser behavior
 */ /**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */ parcelHelpers.export(exports, "parse", ()=>parse
);
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */ parcelHelpers.export(exports, "parseValue", ()=>parseValue
);
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */ parcelHelpers.export(exports, "parseConstValue", ()=>parseConstValue
);
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */ parcelHelpers.export(exports, "parseType", ()=>parseType
);
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */ parcelHelpers.export(exports, "Parser", ()=>Parser
);
var _syntaxErrorMjs = require("../error/syntaxError.mjs");
var _astMjs = require("./ast.mjs");
var _directiveLocationMjs = require("./directiveLocation.mjs");
var _kindsMjs = require("./kinds.mjs");
var _lexerMjs = require("./lexer.mjs");
var _sourceMjs = require("./source.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
function parse(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
}
function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKindMjs.TokenKind.SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(_tokenKindMjs.TokenKind.EOF);
    return value;
}
function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKindMjs.TokenKind.SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(_tokenKindMjs.TokenKind.EOF);
    return value;
}
function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKindMjs.TokenKind.SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(_tokenKindMjs.TokenKind.EOF);
    return type;
}
class Parser {
    constructor(source, options){
        const sourceObj = _sourceMjs.isSource(source) ? source : new _sourceMjs.Source(source);
        this._lexer = new _lexerMjs.Lexer(sourceObj);
        this._options = options;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken(_tokenKindMjs.TokenKind.NAME);
        return this.node(token, {
            kind: _kindsMjs.Kind.NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.DOCUMENT,
            definitions: this.many(_tokenKindMjs.TokenKind.SOF, this.parseDefinition, _tokenKindMjs.TokenKind.EOF)
        });
    }
    /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */ parseDefinition() {
        if (this.peek(_tokenKindMjs.TokenKind.BRACE_L)) return this.parseOperationDefinition();
         // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === _tokenKindMjs.TokenKind.NAME) {
            switch(keywordToken.value){
                case 'schema':
                    return this.parseSchemaDefinition();
                case 'scalar':
                    return this.parseScalarTypeDefinition();
                case 'type':
                    return this.parseObjectTypeDefinition();
                case 'interface':
                    return this.parseInterfaceTypeDefinition();
                case 'union':
                    return this.parseUnionTypeDefinition();
                case 'enum':
                    return this.parseEnumTypeDefinition();
                case 'input':
                    return this.parseInputObjectTypeDefinition();
                case 'directive':
                    return this.parseDirectiveDefinition();
            }
            if (hasDescription) throw _syntaxErrorMjs.syntaxError(this._lexer.source, this._lexer.token.start, 'Unexpected description, descriptions are supported only on type definitions.');
            switch(keywordToken.value){
                case 'query':
                case 'mutation':
                case 'subscription':
                    return this.parseOperationDefinition();
                case 'fragment':
                    return this.parseFragmentDefinition();
                case 'extend':
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */ parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(_tokenKindMjs.TokenKind.BRACE_L)) return this.node(start, {
            kind: _kindsMjs.Kind.OPERATION_DEFINITION,
            operation: _astMjs.OperationTypeNode.QUERY,
            name: undefined,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        const operation = this.parseOperationType();
        let name;
        if (this.peek(_tokenKindMjs.TokenKind.NAME)) name = this.parseName();
        return this.node(start, {
            kind: _kindsMjs.Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * OperationType : one of query mutation subscription
   */ parseOperationType() {
        const operationToken = this.expectToken(_tokenKindMjs.TokenKind.NAME);
        switch(operationToken.value){
            case 'query':
                return _astMjs.OperationTypeNode.QUERY;
            case 'mutation':
                return _astMjs.OperationTypeNode.MUTATION;
            case 'subscription':
                return _astMjs.OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany(_tokenKindMjs.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKindMjs.TokenKind.PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(_tokenKindMjs.TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(_tokenKindMjs.TokenKind.EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken(_tokenKindMjs.TokenKind.DOLLAR);
        return this.node(start, {
            kind: _kindsMjs.Kind.VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.SELECTION_SET,
            selections: this.many(_tokenKindMjs.TokenKind.BRACE_L, this.parseSelection, _tokenKindMjs.TokenKind.BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek(_tokenKindMjs.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */ parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else name = nameOrAlias;
        return this.node(start, {
            kind: _kindsMjs.Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(_tokenKindMjs.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(_tokenKindMjs.TokenKind.PAREN_L, item, _tokenKindMjs.TokenKind.PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        return this.node(start, {
            kind: _kindsMjs.Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    parseConstArgument() {
        return this.parseArgument(true);
    }
    /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */ parseFragment() {
        const start = this._lexer.token;
        this.expectToken(_tokenKindMjs.TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword('on');
        if (!hasTypeCondition && this.peek(_tokenKindMjs.TokenKind.NAME)) return this.node(start, {
            kind: _kindsMjs.Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
        });
        return this.node(start, {
            kind: _kindsMjs.Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */ parseFragmentDefinition() {
        var _this$_options;
        const start = this._lexer.token;
        this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
        if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.allowLegacyFragmentVariables) === true) return this.node(start, {
            kind: _kindsMjs.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
        return this.node(start, {
            kind: _kindsMjs.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentName : Name but not `on`
   */ parseFragmentName() {
        if (this._lexer.token.value === 'on') throw this.unexpected();
        return this.parseName();
    }
    /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case _tokenKindMjs.TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case _tokenKindMjs.TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case _tokenKindMjs.TokenKind.INT:
                this._lexer.advance();
                return this.node(token, {
                    kind: _kindsMjs.Kind.INT,
                    value: token.value
                });
            case _tokenKindMjs.TokenKind.FLOAT:
                this._lexer.advance();
                return this.node(token, {
                    kind: _kindsMjs.Kind.FLOAT,
                    value: token.value
                });
            case _tokenKindMjs.TokenKind.STRING:
            case _tokenKindMjs.TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case _tokenKindMjs.TokenKind.NAME:
                this._lexer.advance();
                switch(token.value){
                    case 'true':
                        return this.node(token, {
                            kind: _kindsMjs.Kind.BOOLEAN,
                            value: true
                        });
                    case 'false':
                        return this.node(token, {
                            kind: _kindsMjs.Kind.BOOLEAN,
                            value: false
                        });
                    case 'null':
                        return this.node(token, {
                            kind: _kindsMjs.Kind.NULL
                        });
                    default:
                        return this.node(token, {
                            kind: _kindsMjs.Kind.ENUM,
                            value: token.value
                        });
                }
            case _tokenKindMjs.TokenKind.DOLLAR:
                if (isConst) {
                    this.expectToken(_tokenKindMjs.TokenKind.DOLLAR);
                    if (this._lexer.token.kind === _tokenKindMjs.TokenKind.NAME) {
                        const varName = this._lexer.token.value;
                        throw _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
                    } else throw this.unexpected(token);
                }
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this._lexer.advance();
        return this.node(token, {
            kind: _kindsMjs.Kind.STRING,
            value: token.value,
            block: token.kind === _tokenKindMjs.TokenKind.BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst)
        ;
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.LIST,
            values: this.any(_tokenKindMjs.TokenKind.BRACKET_L, item, _tokenKindMjs.TokenKind.BRACKET_R)
        });
    }
    /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */ parseObject(isConst) {
        const item = ()=>this.parseObjectField(isConst)
        ;
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.OBJECT,
            fields: this.any(_tokenKindMjs.TokenKind.BRACE_L, item, _tokenKindMjs.TokenKind.BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        return this.node(start, {
            kind: _kindsMjs.Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek(_tokenKindMjs.TokenKind.AT))directives.push(this.parseDirective(isConst));
        return directives;
    }
    parseConstDirectives() {
        return this.parseDirectives(true);
    }
    /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */ parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(_tokenKindMjs.TokenKind.AT);
        return this.node(start, {
            kind: _kindsMjs.Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
        });
    }
    /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */ parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(_tokenKindMjs.TokenKind.BRACKET_R);
            type = this.node(start, {
                kind: _kindsMjs.Kind.LIST_TYPE,
                type: innerType
            });
        } else type = this.parseNamedType();
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.BANG)) return this.node(start, {
            kind: _kindsMjs.Kind.NON_NULL_TYPE,
            type
        });
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(_tokenKindMjs.TokenKind.STRING) || this.peek(_tokenKindMjs.TokenKind.BLOCK_STRING);
    }
    /**
   * Description : StringValue
   */ parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
    }
    /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */ parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('schema');
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(_tokenKindMjs.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKindMjs.TokenKind.BRACE_R);
        return this.node(start, {
            kind: _kindsMjs.Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
        });
    }
    /**
   * OperationTypeDefinition : OperationType : NamedType
   */ parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: _kindsMjs.Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type
        });
    }
    /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */ parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */ parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */ parseImplementsInterfaces() {
        return this.expectOptionalKeyword('implements') ? this.delimitedMany(_tokenKindMjs.TokenKind.AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKindMjs.TokenKind.BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
        });
    }
    /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */ parseArgumentDefs() {
        return this.optionalMany(_tokenKindMjs.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKindMjs.TokenKind.PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.EQUALS)) defaultValue = this.parseConstValueLiteral();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
        });
    }
    /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */ parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */ parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
            kind: _kindsMjs.Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
        });
    }
    /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */ parseUnionMemberTypes() {
        return this.expectOptionalToken(_tokenKindMjs.TokenKind.EQUALS) ? this.delimitedMany(_tokenKindMjs.TokenKind.PIPE, this.parseNamedType) : [];
    }
    /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */ parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
        });
    }
    /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */ parseEnumValuesDefinition() {
        return this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKindMjs.TokenKind.BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === 'true' || this._lexer.token.value === 'false' || this._lexer.token.value === 'null') throw _syntaxErrorMjs.syntaxError(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
    }
    /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */ parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */ parseInputFieldsDefinition() {
        return this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKindMjs.TokenKind.BRACE_R);
    }
    /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */ parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === _tokenKindMjs.TokenKind.NAME) switch(keywordToken.value){
            case 'schema':
                return this.parseSchemaExtension();
            case 'scalar':
                return this.parseScalarTypeExtension();
            case 'type':
                return this.parseObjectTypeExtension();
            case 'interface':
                return this.parseInterfaceTypeExtension();
            case 'union':
                return this.parseUnionTypeExtension();
            case 'enum':
                return this.parseEnumTypeExtension();
            case 'input':
                return this.parseInputObjectTypeExtension();
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */ parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('schema');
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKindMjs.TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes
        });
    }
    /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */ parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives
        });
    }
    /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */ parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */ parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */ parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types
        });
    }
    /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */ parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
        });
    }
    /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */ parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */ parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('directive');
        this.expectToken(_tokenKindMjs.TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword('repeatable');
        this.expectKeyword('on');
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: _kindsMjs.Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
        });
    }
    /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */ parseDirectiveLocations() {
        return this.delimitedMany(_tokenKindMjs.TokenKind.PIPE, this.parseDirectiveLocation);
    }
    /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */ parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(_directiveLocationMjs.DirectiveLocation, name.value)) return name;
        throw this.unexpected(start);
    }
    /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */ node(startToken, node) {
        var _this$_options2;
        if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.noLocation) !== true) node.loc = new _astMjs.Location(startToken, this._lexer.lastToken, this._lexer.source);
        return node;
    }
    /**
   * Determines if the next token is of a given kind
   */ peek(kind) {
        return this._lexer.token.kind === kind;
    }
    /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return token;
        }
        throw _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return true;
        }
        return false;
    }
    /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKindMjs.TokenKind.NAME && token.value === value) this._lexer.advance();
        else throw _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKindMjs.TokenKind.NAME && token.value === value) {
            this._lexer.advance();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind))nodes.push(parseFn.call(this));
        return nodes;
    }
    /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do nodes.push(parseFn.call(this));
            while (!this.expectOptionalToken(closeKind))
            return nodes;
        }
        return [];
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do nodes.push(parseFn.call(this));
        while (!this.expectOptionalToken(closeKind))
        return nodes;
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */ delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do nodes.push(parseFn.call(this));
        while (this.expectOptionalToken(delimiterKind))
        return nodes;
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return _lexerMjs.isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

},{"../error/syntaxError.mjs":"9aPZI","./ast.mjs":"iaolY","./directiveLocation.mjs":"hGyry","./kinds.mjs":"6adj0","./lexer.mjs":"6eDKj","./source.mjs":"jclLZ","./tokenKind.mjs":"chwug","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGyry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectiveLocation", ()=>DirectiveLocation
);
let DirectiveLocation;
/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ (function(DirectiveLocation1) {
    DirectiveLocation1['QUERY'] = 'QUERY';
    DirectiveLocation1['MUTATION'] = 'MUTATION';
    DirectiveLocation1['SUBSCRIPTION'] = 'SUBSCRIPTION';
    DirectiveLocation1['FIELD'] = 'FIELD';
    DirectiveLocation1['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
    DirectiveLocation1['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
    DirectiveLocation1['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
    DirectiveLocation1['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
    DirectiveLocation1['SCHEMA'] = 'SCHEMA';
    DirectiveLocation1['SCALAR'] = 'SCALAR';
    DirectiveLocation1['OBJECT'] = 'OBJECT';
    DirectiveLocation1['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
    DirectiveLocation1['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
    DirectiveLocation1['INTERFACE'] = 'INTERFACE';
    DirectiveLocation1['UNION'] = 'UNION';
    DirectiveLocation1['ENUM'] = 'ENUM';
    DirectiveLocation1['ENUM_VALUE'] = 'ENUM_VALUE';
    DirectiveLocation1['INPUT_OBJECT'] = 'INPUT_OBJECT';
    DirectiveLocation1['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YJ0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ parcelHelpers.export(exports, "print", ()=>print
);
var _blockStringMjs = require("./blockString.mjs");
var _printStringMjs = require("./printString.mjs");
var _visitorMjs = require("./visitor.mjs");
function print(ast) {
    return _visitorMjs.visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>'$' + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, '\n\n')
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, ' '), 
            ], ' '); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable , type , defaultValue , directives  })=>variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '))
    },
    SelectionSet: {
        leave: ({ selections  })=>block(selections)
    },
    Field: {
        leave ({ alias , name , arguments: args , directives , selectionSet  }) {
            const prefix = wrap('', alias, ': ') + name;
            let argsLine = prefix + wrap('(', join(args, ', '), ')');
            if (argsLine.length > MAX_LINE_LENGTH) argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
            return join([
                argsLine,
                join(directives, ' '),
                selectionSet
            ], ' ');
        }
    },
    Argument: {
        leave: ({ name , value  })=>name + ': ' + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name , directives  })=>'...' + name + wrap(' ', join(directives, ' '))
    },
    InlineFragment: {
        leave: ({ typeCondition , directives , selectionSet  })=>join([
                '...',
                wrap('on ', typeCondition),
                join(directives, ' '),
                selectionSet, 
            ], ' ')
    },
    FragmentDefinition: {
        leave: ({ name , typeCondition , variableDefinitions , directives , selectionSet  })=>// or removed in the future.
            `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` + `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value  })=>value
    },
    FloatValue: {
        leave: ({ value  })=>value
    },
    StringValue: {
        leave: ({ value , block: isBlockString  })=>isBlockString ? _blockStringMjs.printBlockString(value) : _printStringMjs.printString(value)
    },
    BooleanValue: {
        leave: ({ value  })=>value ? 'true' : 'false'
    },
    NullValue: {
        leave: ()=>'null'
    },
    EnumValue: {
        leave: ({ value  })=>value
    },
    ListValue: {
        leave: ({ values  })=>'[' + join(values, ', ') + ']'
    },
    ObjectValue: {
        leave: ({ fields  })=>'{' + join(fields, ', ') + '}'
    },
    ObjectField: {
        leave: ({ name , value  })=>name + ': ' + value
    },
    // Directive
    Directive: {
        leave: ({ name , arguments: args  })=>'@' + name + wrap('(', join(args, ', '), ')')
    },
    // Type
    NamedType: {
        leave: ({ name  })=>name
    },
    ListType: {
        leave: ({ type  })=>'[' + type + ']'
    },
    NonNullType: {
        leave: ({ type  })=>type + '!'
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description , directives , operationTypes  })=>wrap('', description, '\n') + join([
                'schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    OperationTypeDefinition: {
        leave: ({ operation , type  })=>operation + ': ' + type
    },
    ScalarTypeDefinition: {
        leave: ({ description , name , directives  })=>wrap('', description, '\n') + join([
                'scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap('', description, '\n') + join([
                'type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    FieldDefinition: {
        leave: ({ description , name , arguments: args , type , directives  })=>wrap('', description, '\n') + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '))
    },
    InputValueDefinition: {
        leave: ({ description , name , type , defaultValue , directives  })=>wrap('', description, '\n') + join([
                name + ': ' + type,
                wrap('= ', defaultValue),
                join(directives, ' ')
            ], ' ')
    },
    InterfaceTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap('', description, '\n') + join([
                'interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    UnionTypeDefinition: {
        leave: ({ description , name , directives , types  })=>wrap('', description, '\n') + join([
                'union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeDefinition: {
        leave: ({ description , name , directives , values  })=>wrap('', description, '\n') + join([
                'enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    EnumValueDefinition: {
        leave: ({ description , name , directives  })=>wrap('', description, '\n') + join([
                name,
                join(directives, ' ')
            ], ' ')
    },
    InputObjectTypeDefinition: {
        leave: ({ description , name , directives , fields  })=>wrap('', description, '\n') + join([
                'input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    DirectiveDefinition: {
        leave: ({ description , name , arguments: args , repeatable , locations  })=>wrap('', description, '\n') + 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ')
    },
    SchemaExtension: {
        leave: ({ directives , operationTypes  })=>join([
                'extend schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    ScalarTypeExtension: {
        leave: ({ name , directives  })=>join([
                'extend scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                'extend type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    InterfaceTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                'extend interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    UnionTypeExtension: {
        leave: ({ name , directives , types  })=>join([
                'extend union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | ')), 
            ], ' ')
    },
    EnumTypeExtension: {
        leave: ({ name , directives , values  })=>join([
                'extend enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    InputObjectTypeExtension: {
        leave: ({ name , directives , fields  })=>join([
                'extend input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = '') {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x
    ).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = '') {
    return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}
function indent(str) {
    return wrap('  ', str.replace(/\n/g, '\n  '));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes('\n')
    )) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

},{"./blockString.mjs":"hVqvS","./printString.mjs":"c9hcM","./visitor.mjs":"dn6QO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9hcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ parcelHelpers.export(exports, "printString", ()=>printString
) // eslint-disable-next-line no-control-regex
;
function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F', 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn6QO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BREAK", ()=>BREAK
);
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ parcelHelpers.export(exports, "visit", ()=>visit
);
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ parcelHelpers.export(exports, "visitInParallel", ()=>visitInParallel
);
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>getEnterLeaveForKind
);
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ parcelHelpers.export(exports, "getVisitFn", ()=>getVisitFn
);
var _devAssertMjs = require("../jsutils/devAssert.mjs");
var _inspectMjs = require("../jsutils/inspect.mjs");
var _astMjs = require("./ast.mjs");
var _kindsMjs = require("./kinds.mjs");
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = _astMjs.QueryDocumentKeys) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(_kindsMjs.Kind))enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else node[arrayKey] = editValue;
                    }
                } else {
                    node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
                    for (const [editKey, editValue] of edits)node[editKey] = editValue;
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) continue;
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            _astMjs.isNode(node) || _devAssertMjs.devAssert(false, `Invalid AST Node: ${_inspectMjs.inspect(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) break;
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if (_astMjs.isNode(result)) node = result;
                    else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) edits.push([
            key,
            node
        ]);
        if (isLeaving) path.pop();
        else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) ancestors.push(parent);
            parent = node;
        }
    }while (stack !== undefined)
    if (edits.length !== 0) // New root
    return edits[edits.length - 1][1];
    return root;
}
function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(_kindsMjs.Kind)){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i1 = 0; i1 < visitors.length; ++i1){
            const { enter , leave  } = getEnterLeaveForKind(visitors[i1], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i1] = enter;
            leaveList[i1] = leave;
        }
        if (!hasVisitor) continue;
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++)if (skipping[i] === null) {
                    var _enterList$i;
                    const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                    if (result === false) skipping[i] = node;
                    else if (result === BREAK) skipping[i] = BREAK;
                    else if (result !== undefined) return result;
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) skipping[i] = BREAK;
                        else if (result !== undefined && result !== false) return result;
                    } else if (skipping[i] === node) skipping[i] = null;
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === 'object') // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
    else if (typeof kindVisitor === 'function') // { Kind() {} }
    return {
        enter: kindVisitor,
        leave: undefined
    };
     // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
function getVisitFn(visitor, kind, isLeaving) {
    const { enter , leave  } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

},{"../jsutils/devAssert.mjs":"7HVcG","../jsutils/inspect.mjs":"eTiKK","./ast.mjs":"iaolY","./kinds.mjs":"6adj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiHiR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDefinitionNode", ()=>isDefinitionNode
);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>isExecutableDefinitionNode
);
parcelHelpers.export(exports, "isSelectionNode", ()=>isSelectionNode
);
parcelHelpers.export(exports, "isValueNode", ()=>isValueNode
);
parcelHelpers.export(exports, "isConstValueNode", ()=>isConstValueNode
);
parcelHelpers.export(exports, "isTypeNode", ()=>isTypeNode
);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>isTypeSystemDefinitionNode
);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>isTypeDefinitionNode
);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>isTypeSystemExtensionNode
);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>isTypeExtensionNode
);
var _kindsMjs = require("./kinds.mjs");
function isDefinitionNode(node) {
    return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
    return node.kind === _kindsMjs.Kind.OPERATION_DEFINITION || node.kind === _kindsMjs.Kind.FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
    return node.kind === _kindsMjs.Kind.FIELD || node.kind === _kindsMjs.Kind.FRAGMENT_SPREAD || node.kind === _kindsMjs.Kind.INLINE_FRAGMENT;
}
function isValueNode(node) {
    return node.kind === _kindsMjs.Kind.VARIABLE || node.kind === _kindsMjs.Kind.INT || node.kind === _kindsMjs.Kind.FLOAT || node.kind === _kindsMjs.Kind.STRING || node.kind === _kindsMjs.Kind.BOOLEAN || node.kind === _kindsMjs.Kind.NULL || node.kind === _kindsMjs.Kind.ENUM || node.kind === _kindsMjs.Kind.LIST || node.kind === _kindsMjs.Kind.OBJECT;
}
function isConstValueNode(node) {
    return isValueNode(node) && (node.kind === _kindsMjs.Kind.LIST ? node.values.some(isConstValueNode) : node.kind === _kindsMjs.Kind.OBJECT ? node.fields.some((field)=>isConstValueNode(field.value)
    ) : node.kind !== _kindsMjs.Kind.VARIABLE);
}
function isTypeNode(node) {
    return node.kind === _kindsMjs.Kind.NAMED_TYPE || node.kind === _kindsMjs.Kind.LIST_TYPE || node.kind === _kindsMjs.Kind.NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
    return node.kind === _kindsMjs.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kindsMjs.Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
    return node.kind === _kindsMjs.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.UNION_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.ENUM_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
    return node.kind === _kindsMjs.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
    return node.kind === _kindsMjs.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.UNION_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.ENUM_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.INPUT_OBJECT_TYPE_EXTENSION;
}

},{"./kinds.mjs":"6adj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhRBT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeOptions", ()=>_indexJs3.mergeOptions
);
parcelHelpers.export(exports, "ApolloClient", ()=>ApolloClient
);
var _tslib = require("tslib");
var _indexJs = require("../utilities/globals/index.js");
var _indexJs1 = require("../link/core/index.js");
var _versionJs = require("../version.js");
var _indexJs2 = require("../link/http/index.js");
var _queryManagerJs = require("./QueryManager.js");
var _localStateJs = require("./LocalState.js");
var _indexJs3 = require("../utilities/index.js");
var hasSuggestedDevtools = false;
var ApolloClient = function() {
    function ApolloClient1(options) {
        var _this = this;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) link = uri ? new _indexJs2.HttpLink({
            uri: uri,
            credentials: credentials,
            headers: headers
        }) : _indexJs1.ApolloLink.empty();
        if (!cache) throw __DEV__ ? new _indexJs.InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new _indexJs.InvariantError(7);
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) setTimeout(function() {
            return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') window.__APOLLO_CLIENT__ = this;
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    else if (ua.indexOf("Firefox/") > -1) url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                }
                if (url) __DEV__ && _indexJs.invariant.log("Download the Apollo DevTools for a better development experience: " + url);
            }
        }
        this.version = _versionJs.version;
        this.localState = new _localStateJs.LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher
        });
        this.queryManager = new _queryManagerJs.QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function() {
                if (_this.devToolsHookCb) _this.devToolsHookCb({
                    action: {},
                    state: {
                        queries: _this.queryManager.getQueryStore(),
                        mutations: _this.queryManager.mutationStore || {}
                    },
                    dataWithOptimisticResults: _this.cache.extract(true)
                });
            } : void 0
        });
    }
    ApolloClient1.prototype.stop = function() {
        this.queryManager.stop();
    };
    ApolloClient1.prototype.watchQuery = function(options) {
        if (this.defaultOptions.watchQuery) options = _indexJs3.mergeOptions(this.defaultOptions.watchQuery, options);
        if (this.disableNetworkFetches && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) options = _tslib.__assign(_tslib.__assign({}, options), {
            fetchPolicy: 'cache-first'
        });
        return this.queryManager.watchQuery(options);
    };
    ApolloClient1.prototype.query = function(options) {
        if (this.defaultOptions.query) options = _indexJs3.mergeOptions(this.defaultOptions.query, options);
        __DEV__ ? _indexJs.invariant(options.fetchPolicy !== 'cache-and-network', "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : _indexJs.invariant(options.fetchPolicy !== 'cache-and-network', 8);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') options = _tslib.__assign(_tslib.__assign({}, options), {
            fetchPolicy: 'cache-first'
        });
        return this.queryManager.query(options);
    };
    ApolloClient1.prototype.mutate = function(options) {
        if (this.defaultOptions.mutate) options = _indexJs3.mergeOptions(this.defaultOptions.mutate, options);
        return this.queryManager.mutate(options);
    };
    ApolloClient1.prototype.subscribe = function(options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient1.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient1.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient1.prototype.writeQuery = function(options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient1.prototype.writeFragment = function(options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient1.prototype.__actionHookForDevTools = function(cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient1.prototype.__requestRaw = function(payload) {
        return _indexJs1.execute(this.link, payload);
    };
    ApolloClient1.prototype.resetStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.queryManager.clearStore({
                discardWatches: false
            });
        }).then(function() {
            return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
                return fn();
            }));
        }).then(function() {
            return _this.reFetchObservableQueries();
        });
    };
    ApolloClient1.prototype.clearStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.queryManager.clearStore({
                discardWatches: true
            });
        }).then(function() {
            return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
                return fn();
            }));
        });
    };
    ApolloClient1.prototype.onResetStore = function(cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function() {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
                return c !== cb;
            });
        };
    };
    ApolloClient1.prototype.onClearStore = function(cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function() {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
                return c !== cb;
            });
        };
    };
    ApolloClient1.prototype.reFetchObservableQueries = function(includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient1.prototype.refetchQueries = function(options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function(result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result1 = Promise.all(results);
        result1.queries = queries;
        result1.results = results;
        result1.catch(function(error) {
            __DEV__ && _indexJs.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result1;
    };
    ApolloClient1.prototype.getObservableQueries = function(include) {
        if (include === void 0) include = "active";
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient1.prototype.extract = function(optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient1.prototype.restore = function(serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient1.prototype.addResolvers = function(resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient1.prototype.setResolvers = function(resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient1.prototype.getResolvers = function() {
        return this.localState.getResolvers();
    };
    ApolloClient1.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient1.prototype.setLink = function(newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient1;
}();

},{"tslib":"lRdW5","../utilities/globals/index.js":"60qk9","../link/core/index.js":"4XY3c","../version.js":"5mZ8p","../link/http/index.js":"eveJT","./QueryManager.js":"fWxhn","./LocalState.js":"jTcXn","../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XY3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empty", ()=>_emptyJs.empty
);
parcelHelpers.export(exports, "from", ()=>_fromJs.from
);
parcelHelpers.export(exports, "split", ()=>_splitJs.split
);
parcelHelpers.export(exports, "concat", ()=>_concatJs.concat
);
parcelHelpers.export(exports, "execute", ()=>_executeJs.execute
);
parcelHelpers.export(exports, "ApolloLink", ()=>_apolloLinkJs.ApolloLink
);
var _indexJs = require("../../utilities/globals/index.js");
var _emptyJs = require("./empty.js");
var _fromJs = require("./from.js");
var _splitJs = require("./split.js");
var _concatJs = require("./concat.js");
var _executeJs = require("./execute.js");
var _apolloLinkJs = require("./ApolloLink.js");
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);

},{"../../utilities/globals/index.js":"60qk9","./empty.js":"h6yy7","./from.js":"1QuNj","./split.js":"i5PvA","./concat.js":"lQDvB","./execute.js":"38fCH","./ApolloLink.js":"3IMlV","./types.js":"8sngK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h6yy7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empty", ()=>empty
);
var _apolloLinkJs = require("./ApolloLink.js");
var empty = _apolloLinkJs.ApolloLink.empty;

},{"./ApolloLink.js":"3IMlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IMlV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloLink", ()=>ApolloLink
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _indexJs1 = require("../../utilities/index.js");
var _indexJs2 = require("../utils/index.js");
function passthrough(op, forward) {
    return forward ? forward(op) : _indexJs1.Observable.of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = function(_super) {
    _tslib.__extends(LinkError1, _super);
    function LinkError1(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError1;
}(Error);
var ApolloLink = function() {
    function ApolloLink1(request) {
        if (request) this.request = request;
    }
    ApolloLink1.empty = function() {
        return new ApolloLink1(function() {
            return _indexJs1.Observable.of();
        });
    };
    ApolloLink1.from = function(links) {
        if (links.length === 0) return ApolloLink1.empty();
        return links.map(toLink).reduce(function(x, y) {
            return x.concat(y);
        });
    };
    ApolloLink1.split = function(test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink1(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) return new ApolloLink1(function(operation) {
            return test(operation) ? leftLink.request(operation) || _indexJs1.Observable.of() : rightLink.request(operation) || _indexJs1.Observable.of();
        });
        else return new ApolloLink1(function(operation, forward) {
            return test(operation) ? leftLink.request(operation, forward) || _indexJs1.Observable.of() : rightLink.request(operation, forward) || _indexJs1.Observable.of();
        });
    };
    ApolloLink1.execute = function(link, operation) {
        return link.request(_indexJs2.createOperation(operation.context, _indexJs2.transformOperation(_indexJs2.validateOperation(operation)))) || _indexJs1.Observable.of();
    };
    ApolloLink1.concat = function(first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && _indexJs.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) return new ApolloLink1(function(operation) {
            return firstLink.request(operation, function(op) {
                return nextLink.request(op) || _indexJs1.Observable.of();
            }) || _indexJs1.Observable.of();
        });
        else return new ApolloLink1(function(operation, forward) {
            return firstLink.request(operation, function(op) {
                return nextLink.request(op, forward) || _indexJs1.Observable.of();
            }) || _indexJs1.Observable.of();
        });
    };
    ApolloLink1.prototype.split = function(test, left, right) {
        return this.concat(ApolloLink1.split(test, left, right || new ApolloLink1(passthrough)));
    };
    ApolloLink1.prototype.concat = function(next) {
        return ApolloLink1.concat(this, next);
    };
    ApolloLink1.prototype.request = function(operation, forward) {
        throw __DEV__ ? new _indexJs.InvariantError('request is not implemented') : new _indexJs.InvariantError(19);
    };
    ApolloLink1.prototype.onError = function(error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink1.prototype.setOnError = function(fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink1;
}();

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","../../utilities/index.js":"k51w7","../utils/index.js":"7agqB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k51w7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEV", ()=>_indexJs.DEV
);
parcelHelpers.export(exports, "maybe", ()=>_indexJs.maybe
);
parcelHelpers.export(exports, "shouldInclude", ()=>_directivesJs.shouldInclude
);
parcelHelpers.export(exports, "hasDirectives", ()=>_directivesJs.hasDirectives
);
parcelHelpers.export(exports, "hasClientExports", ()=>_directivesJs.hasClientExports
);
parcelHelpers.export(exports, "getDirectiveNames", ()=>_directivesJs.getDirectiveNames
);
parcelHelpers.export(exports, "getInclusionDirectives", ()=>_directivesJs.getInclusionDirectives
);
parcelHelpers.export(exports, "createFragmentMap", ()=>_fragmentsJs.createFragmentMap
);
parcelHelpers.export(exports, "getFragmentQueryDocument", ()=>_fragmentsJs.getFragmentQueryDocument
);
parcelHelpers.export(exports, "getFragmentFromSelection", ()=>_fragmentsJs.getFragmentFromSelection
);
parcelHelpers.export(exports, "checkDocument", ()=>_getFromASTJs.checkDocument
);
parcelHelpers.export(exports, "getOperationDefinition", ()=>_getFromASTJs.getOperationDefinition
);
parcelHelpers.export(exports, "getOperationName", ()=>_getFromASTJs.getOperationName
);
parcelHelpers.export(exports, "getFragmentDefinitions", ()=>_getFromASTJs.getFragmentDefinitions
);
parcelHelpers.export(exports, "getQueryDefinition", ()=>_getFromASTJs.getQueryDefinition
);
parcelHelpers.export(exports, "getFragmentDefinition", ()=>_getFromASTJs.getFragmentDefinition
);
parcelHelpers.export(exports, "getMainDefinition", ()=>_getFromASTJs.getMainDefinition
);
parcelHelpers.export(exports, "getDefaultValues", ()=>_getFromASTJs.getDefaultValues
);
parcelHelpers.export(exports, "makeReference", ()=>_storeUtilsJs.makeReference
);
parcelHelpers.export(exports, "isDocumentNode", ()=>_storeUtilsJs.isDocumentNode
);
parcelHelpers.export(exports, "isReference", ()=>_storeUtilsJs.isReference
);
parcelHelpers.export(exports, "isField", ()=>_storeUtilsJs.isField
);
parcelHelpers.export(exports, "isInlineFragment", ()=>_storeUtilsJs.isInlineFragment
);
parcelHelpers.export(exports, "valueToObjectRepresentation", ()=>_storeUtilsJs.valueToObjectRepresentation
);
parcelHelpers.export(exports, "storeKeyNameFromField", ()=>_storeUtilsJs.storeKeyNameFromField
);
parcelHelpers.export(exports, "argumentsObjectFromField", ()=>_storeUtilsJs.argumentsObjectFromField
);
parcelHelpers.export(exports, "resultKeyNameFromField", ()=>_storeUtilsJs.resultKeyNameFromField
);
parcelHelpers.export(exports, "getStoreKeyName", ()=>_storeUtilsJs.getStoreKeyName
);
parcelHelpers.export(exports, "getTypenameFromResult", ()=>_storeUtilsJs.getTypenameFromResult
);
parcelHelpers.export(exports, "addTypenameToDocument", ()=>_transformJs.addTypenameToDocument
);
parcelHelpers.export(exports, "buildQueryFromSelectionSet", ()=>_transformJs.buildQueryFromSelectionSet
);
parcelHelpers.export(exports, "removeDirectivesFromDocument", ()=>_transformJs.removeDirectivesFromDocument
);
parcelHelpers.export(exports, "removeConnectionDirectiveFromDocument", ()=>_transformJs.removeConnectionDirectiveFromDocument
);
parcelHelpers.export(exports, "removeArgumentsFromDocument", ()=>_transformJs.removeArgumentsFromDocument
);
parcelHelpers.export(exports, "removeFragmentSpreadFromDocument", ()=>_transformJs.removeFragmentSpreadFromDocument
);
parcelHelpers.export(exports, "removeClientSetsFromDocument", ()=>_transformJs.removeClientSetsFromDocument
);
parcelHelpers.export(exports, "concatPagination", ()=>_paginationJs.concatPagination
);
parcelHelpers.export(exports, "offsetLimitPagination", ()=>_paginationJs.offsetLimitPagination
);
parcelHelpers.export(exports, "relayStylePagination", ()=>_paginationJs.relayStylePagination
);
parcelHelpers.export(exports, "Observable", ()=>_observableJs.Observable
);
var _indexJs = require("./globals/index.js");
var _directivesJs = require("./graphql/directives.js");
var _fragmentsJs = require("./graphql/fragments.js");
var _getFromASTJs = require("./graphql/getFromAST.js");
var _storeUtilsJs = require("./graphql/storeUtils.js");
var _transformJs = require("./graphql/transform.js");
var _paginationJs = require("./policies/pagination.js");
var _observableJs = require("./observables/Observable.js");
var _mergeDeepJs = require("./common/mergeDeep.js");
parcelHelpers.exportAll(_mergeDeepJs, exports);
var _cloneDeepJs = require("./common/cloneDeep.js");
parcelHelpers.exportAll(_cloneDeepJs, exports);
var _maybeDeepFreezeJs = require("./common/maybeDeepFreeze.js");
parcelHelpers.exportAll(_maybeDeepFreezeJs, exports);
var _iterationJs = require("./observables/iteration.js");
parcelHelpers.exportAll(_iterationJs, exports);
var _asyncMapJs = require("./observables/asyncMap.js");
parcelHelpers.exportAll(_asyncMapJs, exports);
var _concastJs = require("./observables/Concast.js");
parcelHelpers.exportAll(_concastJs, exports);
var _subclassingJs = require("./observables/subclassing.js");
parcelHelpers.exportAll(_subclassingJs, exports);
var _arraysJs = require("./common/arrays.js");
parcelHelpers.exportAll(_arraysJs, exports);
var _objectsJs = require("./common/objects.js");
parcelHelpers.exportAll(_objectsJs, exports);
var _errorHandlingJs = require("./common/errorHandling.js");
parcelHelpers.exportAll(_errorHandlingJs, exports);
var _canUseJs = require("./common/canUse.js");
parcelHelpers.exportAll(_canUseJs, exports);
var _compactJs = require("./common/compact.js");
parcelHelpers.exportAll(_compactJs, exports);
var _makeUniqueIdJs = require("./common/makeUniqueId.js");
parcelHelpers.exportAll(_makeUniqueIdJs, exports);
var _stringifyForDisplayJs = require("./common/stringifyForDisplay.js");
parcelHelpers.exportAll(_stringifyForDisplayJs, exports);
var _mergeOptionsJs = require("./common/mergeOptions.js");
parcelHelpers.exportAll(_mergeOptionsJs, exports);
var _isStrictlyAnyJs = require("./types/IsStrictlyAny.js");
parcelHelpers.exportAll(_isStrictlyAnyJs, exports);

},{"./globals/index.js":"60qk9","./graphql/directives.js":"8Rmq7","./graphql/fragments.js":"ikrCz","./graphql/getFromAST.js":"7V9xw","./graphql/storeUtils.js":"dDzEB","./graphql/transform.js":"kjAAQ","./policies/pagination.js":false,"./observables/Observable.js":"8YthT","./common/mergeDeep.js":"hSCGu","./common/cloneDeep.js":"4ifOf","./common/maybeDeepFreeze.js":"763LZ","./observables/iteration.js":"3kx5N","./observables/asyncMap.js":"gRLrH","./observables/Concast.js":"hgqjc","./observables/subclassing.js":"lK9ZS","./common/arrays.js":"js0mt","./common/objects.js":"dnoNc","./common/errorHandling.js":"ay7p4","./common/canUse.js":"jT4Jd","./common/compact.js":"7w63p","./common/makeUniqueId.js":"dqz9N","./common/stringifyForDisplay.js":"2a3ic","./common/mergeOptions.js":"2ZtVF","./types/IsStrictlyAny.js":"fa3Bx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Rmq7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shouldInclude", ()=>shouldInclude
);
parcelHelpers.export(exports, "getDirectiveNames", ()=>getDirectiveNames
);
parcelHelpers.export(exports, "hasDirectives", ()=>hasDirectives
);
parcelHelpers.export(exports, "hasClientExports", ()=>hasClientExports
);
parcelHelpers.export(exports, "getInclusionDirectives", ()=>getInclusionDirectives
);
var _indexJs = require("../globals/index.js");
var _graphql = require("graphql");
function shouldInclude(_a1, variables) {
    var directives = _a1.directives;
    if (!directives || !directives.length) return true;
    return getInclusionDirectives(directives).every(function(_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? _indexJs.invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : _indexJs.invariant(evaledValue !== void 0, 37);
        } else evaledValue = ifArgument.value.value;
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    _graphql.visit(root, {
        Directive: function(node) {
            names.push(node.name.value);
        }
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function(name) {
        return names.indexOf(name) > -1;
    });
}
function hasClientExports(document) {
    return document && hasDirectives([
        'client'
    ], document) && hasDirectives([
        'export'
    ], document);
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) directives.forEach(function(directive) {
        if (!isInclusionDirective(directive)) return;
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
        __DEV__ ? _indexJs.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : _indexJs.invariant(directiveArguments && directiveArguments.length === 1, 38);
        var ifArgument = directiveArguments[0];
        __DEV__ ? _indexJs.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : _indexJs.invariant(ifArgument.name && ifArgument.name.value === 'if', 39);
        var ifValue = ifArgument.value;
        __DEV__ ? _indexJs.invariant(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : _indexJs.invariant(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 40);
        result.push({
            directive: directive,
            ifArgument: ifArgument
        });
    });
    return result;
}

},{"../globals/index.js":"60qk9","graphql":"dwHFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ikrCz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFragmentQueryDocument", ()=>getFragmentQueryDocument
);
parcelHelpers.export(exports, "createFragmentMap", ()=>createFragmentMap
);
parcelHelpers.export(exports, "getFragmentFromSelection", ()=>getFragmentFromSelection
);
var _tslib = require("tslib");
var _indexJs = require("../globals/index.js");
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function(definition) {
        if (definition.kind === 'OperationDefinition') throw __DEV__ ? new _indexJs.InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new _indexJs.InvariantError(41);
        if (definition.kind === 'FragmentDefinition') fragments.push(definition);
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? _indexJs.invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : _indexJs.invariant(fragments.length === 1, 42);
        actualFragmentName = fragments[0].name.value;
    }
    var query = _tslib.__assign(_tslib.__assign({}, document), {
        definitions: _tslib.__spreadArray([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName
                            }
                        }, 
                    ]
                }
            }
        ], document.definitions, true)
    });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) fragments = [];
    var symTable = {};
    fragments.forEach(function(fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch(selection.kind){
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread':
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? _indexJs.invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : _indexJs.invariant(fragment, 43);
            return fragment;
        default:
            return null;
    }
}

},{"tslib":"lRdW5","../globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7V9xw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkDocument", ()=>checkDocument
);
parcelHelpers.export(exports, "getOperationDefinition", ()=>getOperationDefinition
);
parcelHelpers.export(exports, "getOperationName", ()=>getOperationName
);
parcelHelpers.export(exports, "getFragmentDefinitions", ()=>getFragmentDefinitions
);
parcelHelpers.export(exports, "getQueryDefinition", ()=>getQueryDefinition
);
parcelHelpers.export(exports, "getFragmentDefinition", ()=>getFragmentDefinition
);
parcelHelpers.export(exports, "getMainDefinition", ()=>getMainDefinition
);
parcelHelpers.export(exports, "getDefaultValues", ()=>getDefaultValues
);
var _indexJs = require("../globals/index.js");
var _storeUtilsJs = require("./storeUtils.js");
function checkDocument(doc) {
    __DEV__ ? _indexJs.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : _indexJs.invariant(doc && doc.kind === 'Document', 44);
    var operations = doc.definitions.filter(function(d) {
        return d.kind !== 'FragmentDefinition';
    }).map(function(definition) {
        if (definition.kind !== 'OperationDefinition') throw __DEV__ ? new _indexJs.InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new _indexJs.InvariantError(45);
        return definition;
    });
    __DEV__ ? _indexJs.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : _indexJs.invariant(operations.length <= 1, 46);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function(definition) {
        return definition.kind === 'OperationDefinition';
    })[0];
}
function getOperationName(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    }).map(function(x) {
        return x.name.value;
    })[0] || null;
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === 'FragmentDefinition';
    });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? _indexJs.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : _indexJs.invariant(queryDef && queryDef.operation === 'query', 47);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? _indexJs.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : _indexJs.invariant(doc.kind === 'Document', 48);
    __DEV__ ? _indexJs.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : _indexJs.invariant(doc.definitions.length <= 1, 49);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? _indexJs.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : _indexJs.invariant(fragmentDef.kind === 'FragmentDefinition', 50);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for(var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++){
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' || operation === 'mutation' || operation === 'subscription') return definition;
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) fragmentDefinition = definition;
    }
    if (fragmentDefinition) return fragmentDefinition;
    throw __DEV__ ? new _indexJs.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new _indexJs.InvariantError(51);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) defs.forEach(function(def) {
        if (def.defaultValue) _storeUtilsJs.valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
    });
    return defaultValues;
}

},{"../globals/index.js":"60qk9","./storeUtils.js":"dDzEB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDzEB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeReference", ()=>makeReference
);
parcelHelpers.export(exports, "isReference", ()=>isReference
);
parcelHelpers.export(exports, "isDocumentNode", ()=>isDocumentNode
);
parcelHelpers.export(exports, "valueToObjectRepresentation", ()=>valueToObjectRepresentation
);
parcelHelpers.export(exports, "storeKeyNameFromField", ()=>storeKeyNameFromField
);
parcelHelpers.export(exports, "getStoreKeyName", ()=>getStoreKeyName
);
parcelHelpers.export(exports, "argumentsObjectFromField", ()=>argumentsObjectFromField
);
parcelHelpers.export(exports, "resultKeyNameFromField", ()=>resultKeyNameFromField
);
parcelHelpers.export(exports, "getTypenameFromResult", ()=>getTypenameFromResult
);
parcelHelpers.export(exports, "isField", ()=>isField
);
parcelHelpers.export(exports, "isInlineFragment", ()=>isInlineFragment
);
var _indexJs = require("../globals/index.js");
var _objectsJs = require("../common/objects.js");
var _fragmentsJs = require("./fragments.js");
function makeReference(id) {
    return {
        __ref: String(id)
    };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return _objectsJs.isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) argObj[name.value] = Number(value.value);
    else if (isBooleanValue(value) || isStringValue(value)) argObj[name.value] = value.value;
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function(obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    } else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    } else if (isListValue(value)) argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {};
        valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
    });
    else if (isEnumValue(value)) argObj[name.value] = value.value;
    else if (isNullValue(value)) argObj[name.value] = null;
    else throw __DEV__ ? new _indexJs.InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.') : new _indexJs.InvariantError(52);
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function(directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) directive.arguments.forEach(function(_a) {
                var name = _a.name, value = _a.value;
                return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
            });
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function(_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export', 
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
    if (args && directives && directives['connection'] && directives['connection']['key']) {
        if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function(key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
        } else return directives['connection']['key'];
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) Object.keys(directives).forEach(function(key) {
        if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;
        if (directives[key] && Object.keys(directives[key]).length) completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
        else completeFieldName += "@".concat(key);
    });
    return completeFieldName;
}, {
    setStringify: function(s) {
        var previous = stringify;
        stringify = s;
        return previous;
    }
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (_objectsJs.isNonNullObject(value) && !Array.isArray(value)) value = Object.keys(value).sort().reduce(function(copy, key) {
        copy[key] = value[key];
        return copy;
    }, {});
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function(_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') return result.__typename;
    for(var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++){
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') return result[resultKeyNameFromField(selection)];
        } else {
            var typename = getTypenameFromResult(result, _fragmentsJs.getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') return typename;
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}

},{"../globals/index.js":"60qk9","../common/objects.js":"dnoNc","./fragments.js":"ikrCz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dnoNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNonNullObject", ()=>isNonNullObject
);
function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kjAAQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeDirectivesFromDocument", ()=>removeDirectivesFromDocument
);
parcelHelpers.export(exports, "addTypenameToDocument", ()=>addTypenameToDocument
);
parcelHelpers.export(exports, "removeConnectionDirectiveFromDocument", ()=>removeConnectionDirectiveFromDocument
);
parcelHelpers.export(exports, "removeArgumentsFromDocument", ()=>removeArgumentsFromDocument
);
parcelHelpers.export(exports, "removeFragmentSpreadFromDocument", ()=>removeFragmentSpreadFromDocument
);
parcelHelpers.export(exports, "buildQueryFromSelectionSet", ()=>buildQueryFromSelectionSet
);
parcelHelpers.export(exports, "removeClientSetsFromDocument", ()=>removeClientSetsFromDocument
);
var _tslib = require("tslib");
var _indexJs = require("../globals/index.js");
var _graphql = require("graphql");
var _getFromASTJs = require("./getFromAST.js");
var _filterInPlaceJs = require("../common/filterInPlace.js");
var _storeUtilsJs = require("./storeUtils.js");
var _fragmentsJs = require("./fragments.js");
var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename'
    }
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function(selection) {
        return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(_getFromASTJs.getOperationDefinition(doc) || _getFromASTJs.getFragmentDefinition(doc), _fragmentsJs.createFragmentMap(_getFromASTJs.getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function(dir) {
            return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(_graphql.visit(doc, {
        Variable: {
            enter: function(node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') variablesInUse[node.name.value] = true;
            }
        },
        Field: {
            enter: function(node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function(directive) {
                        return directive.remove;
                    });
                    if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) node.arguments.forEach(function(arg) {
                            if (arg.value.kind === 'Variable') variablesToRemove.push({
                                name: arg.value.name.value
                            });
                        });
                        if (node.selectionSet) getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                            fragmentSpreadsToRemove.push({
                                name: frag.name.value
                            });
                        });
                        return null;
                    }
                }
            }
        },
        FragmentSpread: {
            enter: function(node) {
                fragmentSpreadsInUse[node.name.value] = true;
            }
        },
        Directive: {
            enter: function(node) {
                if (getDirectiveMatcher(directives)(node)) return null;
            }
        }
    }));
    if (modifiedDoc && _filterInPlaceJs.filterInPlace(variablesToRemove, function(v) {
        return !!v.name && !variablesInUse[v.name];
    }).length) modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    if (modifiedDoc && _filterInPlaceJs.filterInPlace(fragmentSpreadsToRemove, function(fs) {
        return !!fs.name && !fragmentSpreadsInUse[fs.name];
    }).length) modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function(doc) {
    return _graphql.visit(doc, {
        SelectionSet: {
            enter: function(node, _key, parent) {
                if (parent && parent.kind === 'OperationDefinition') return;
                var selections = node.selections;
                if (!selections) return;
                var skip = selections.some(function(selection) {
                    return _storeUtilsJs.isField(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
                });
                if (skip) return;
                var field = parent;
                if (_storeUtilsJs.isField(field) && field.directives && field.directives.some(function(d) {
                    return d.name.value === 'export';
                })) return;
                return _tslib.__assign(_tslib.__assign({}, node), {
                    selections: _tslib.__spreadArray(_tslib.__spreadArray([], selections, true), [
                        TYPENAME_FIELD
                    ], false)
                });
            }
        }
    });
}, {
    added: function(field) {
        return field === TYPENAME_FIELD;
    }
});
var connectionRemoveConfig = {
    test: function(directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments || !directive.arguments.some(function(arg) {
                return arg.name.value === 'key';
            })) __DEV__ && _indexJs.invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
        }
        return willRemove;
    }
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([
        connectionRemoveConfig
    ], _getFromASTJs.checkDocument(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) nestedCheck = true;
    return !!selectionSet && selectionSet.selections && selectionSet.selections.some(function(selection) {
        return hasDirectivesInSelection(directives, selection, nestedCheck);
    });
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) nestedCheck = true;
    if (!_storeUtilsJs.isField(selection)) return true;
    if (!selection.directives) return false;
    return selection.directives.some(getDirectiveMatcher(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function(aConfig) {
            return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(_graphql.visit(doc, {
        OperationDefinition: {
            enter: function(node) {
                return _tslib.__assign(_tslib.__assign({}, node), {
                    variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
                        return !config.some(function(arg) {
                            return arg.name === varDef.variable.name.value;
                        });
                    }) : []
                });
            }
        },
        Field: {
            enter: function(node) {
                var shouldRemoveField = config.some(function(argConfig) {
                    return argConfig.remove;
                });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) node.arguments.forEach(function(arg) {
                        if (argMatcher(arg)) argMatchCount_1 += 1;
                    });
                    if (argMatchCount_1 === 1) return null;
                }
            }
        },
        Argument: {
            enter: function(node) {
                if (argMatcher(node)) return null;
            }
        }
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function(def) {
            return def.name === node.name.value;
        })) return null;
    }
    return nullIfDocIsEmpty(_graphql.visit(doc, {
        FragmentSpread: {
            enter: enter
        },
        FragmentDefinition: {
            enter: enter
        }
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function(selection) {
        if ((_storeUtilsJs.isField(selection) || _storeUtilsJs.isInlineFragment(selection)) && selection.selectionSet) getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
            return allFragments.push(frag);
        });
        else if (selection.kind === 'FragmentSpread') allFragments.push(selection);
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = _getFromASTJs.getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') return document;
    var modifiedDoc = _graphql.visit(document, {
        OperationDefinition: {
            enter: function(node) {
                return _tslib.__assign(_tslib.__assign({}, node), {
                    operation: 'query'
                });
            }
        }
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    _getFromASTJs.checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function(directive) {
                return directive.name.value === 'client';
            },
            remove: true
        }, 
    ], document);
    if (modifiedDoc) modifiedDoc = _graphql.visit(modifiedDoc, {
        FragmentDefinition: {
            enter: function(node) {
                if (node.selectionSet) {
                    var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
                        return _storeUtilsJs.isField(selection) && selection.name.value === '__typename';
                    });
                    if (isTypenameOnly) return null;
                }
            }
        }
    });
    return modifiedDoc;
}

},{"tslib":"lRdW5","../globals/index.js":"60qk9","graphql":"dwHFG","./getFromAST.js":"7V9xw","../common/filterInPlace.js":"9hJeR","./storeUtils.js":"dDzEB","./fragments.js":"ikrCz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hJeR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterInPlace", ()=>filterInPlace
);
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function(elem, i) {
        if (test.call(this, elem, i, array)) array[target++] = elem;
    }, context);
    array.length = target;
    return array;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YthT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>_zenObservableTs.Observable
);
var _zenObservableTs = require("zen-observable-ts");
var _symbolObservable = require("symbol-observable");
var prototype = _zenObservableTs.Observable.prototype;
var fakeObsSymbol = '@@observable';
if (!prototype[fakeObsSymbol]) prototype[fakeObsSymbol] = function() {
    return this;
};

},{"zen-observable-ts":"3OWQB","symbol-observable":"7rWK3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OWQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable
);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
// === Symbol Support ===
var hasSymbols = function() {
    return typeof Symbol === 'function';
};
var hasSymbol = function(name) {
    return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
    return hasSymbol(name) ? Symbol[name] : '@@' + name;
};
if (hasSymbols() && !hasSymbol('observable')) Symbol.observable = Symbol('observable');
var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===
function getMethod(obj, key) {
    var value = obj[key];
    if (value == null) return undefined;
    if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
    return value;
}
function getSpecies(obj) {
    var ctor = obj.constructor;
    if (ctor !== undefined) {
        ctor = ctor[SymbolSpecies];
        if (ctor === null) ctor = undefined;
    }
    return ctor !== undefined ? ctor : Observable;
}
function isObservable(x) {
    return x instanceof Observable; // SPEC: Brand check
}
function hostReportError(e) {
    if (hostReportError.log) hostReportError.log(e);
    else setTimeout(function() {
        throw e;
    });
}
function enqueue(fn) {
    Promise.resolve().then(function() {
        try {
            fn();
        } catch (e) {
            hostReportError(e);
        }
    });
}
function cleanupSubscription(subscription) {
    var cleanup = subscription._cleanup;
    if (cleanup === undefined) return;
    subscription._cleanup = undefined;
    if (!cleanup) return;
    try {
        if (typeof cleanup === 'function') cleanup();
        else {
            var unsubscribe = getMethod(cleanup, 'unsubscribe');
            if (unsubscribe) unsubscribe.call(cleanup);
        }
    } catch (e) {
        hostReportError(e);
    }
}
function closeSubscription(subscription) {
    subscription._observer = undefined;
    subscription._queue = undefined;
    subscription._state = 'closed';
}
function flushSubscription(subscription) {
    var queue = subscription._queue;
    if (!queue) return;
    subscription._queue = undefined;
    subscription._state = 'ready';
    for(var i = 0; i < queue.length; ++i){
        notifySubscription(subscription, queue[i].type, queue[i].value);
        if (subscription._state === 'closed') break;
    }
}
function notifySubscription(subscription, type, value) {
    subscription._state = 'running';
    var observer = subscription._observer;
    try {
        var m = getMethod(observer, type);
        switch(type){
            case 'next':
                if (m) m.call(observer, value);
                break;
            case 'error':
                closeSubscription(subscription);
                if (m) m.call(observer, value);
                else throw value;
                break;
            case 'complete':
                closeSubscription(subscription);
                if (m) m.call(observer);
                break;
        }
    } catch (e) {
        hostReportError(e);
    }
    if (subscription._state === 'closed') cleanupSubscription(subscription);
    else if (subscription._state === 'running') subscription._state = 'ready';
}
function onNotify(subscription, type, value) {
    if (subscription._state === 'closed') return;
    if (subscription._state === 'buffering') {
        subscription._queue.push({
            type: type,
            value: value
        });
        return;
    }
    if (subscription._state !== 'ready') {
        subscription._state = 'buffering';
        subscription._queue = [
            {
                type: type,
                value: value
            }
        ];
        enqueue(function() {
            return flushSubscription(subscription);
        });
        return;
    }
    notifySubscription(subscription, type, value);
}
var Subscription = /*#__PURE__*/ function() {
    function Subscription1(observer, subscriber) {
        // ASSERT: observer is an object
        // ASSERT: subscriber is callable
        this._cleanup = undefined;
        this._observer = observer;
        this._queue = undefined;
        this._state = 'initializing';
        var subscriptionObserver = new SubscriptionObserver(this);
        try {
            this._cleanup = subscriber.call(undefined, subscriptionObserver);
        } catch (e) {
            subscriptionObserver.error(e);
        }
        if (this._state === 'initializing') this._state = 'ready';
    }
    var _proto = Subscription1.prototype;
    _proto.unsubscribe = function unsubscribe() {
        if (this._state !== 'closed') {
            closeSubscription(this);
            cleanupSubscription(this);
        }
    };
    _createClass(Subscription1, [
        {
            key: "closed",
            get: function() {
                return this._state === 'closed';
            }
        }
    ]);
    return Subscription1;
}();
var SubscriptionObserver = /*#__PURE__*/ function() {
    function SubscriptionObserver1(subscription) {
        this._subscription = subscription;
    }
    var _proto2 = SubscriptionObserver1.prototype;
    _proto2.next = function next(value) {
        onNotify(this._subscription, 'next', value);
    };
    _proto2.error = function error(value) {
        onNotify(this._subscription, 'error', value);
    };
    _proto2.complete = function complete() {
        onNotify(this._subscription, 'complete');
    };
    _createClass(SubscriptionObserver1, [
        {
            key: "closed",
            get: function() {
                return this._subscription._state === 'closed';
            }
        }
    ]);
    return SubscriptionObserver1;
}();
var Observable = /*#__PURE__*/ function() {
    function Observable1(subscriber) {
        if (!(this instanceof Observable1)) throw new TypeError('Observable cannot be called as a function');
        if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
        this._subscriber = subscriber;
    }
    var _proto3 = Observable1.prototype;
    _proto3.subscribe = function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) observer = {
            next: observer,
            error: arguments[1],
            complete: arguments[2]
        };
        return new Subscription(observer, this._subscriber);
    };
    _proto3.forEach = function forEach(fn) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (typeof fn !== 'function') {
                reject(new TypeError(fn + ' is not a function'));
                return;
            }
            function done() {
                subscription.unsubscribe();
                resolve();
            }
            var subscription = _this.subscribe({
                next: function(value) {
                    try {
                        fn(value, done);
                    } catch (e) {
                        reject(e);
                        subscription.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
        });
    };
    _proto3.map = function map(fn) {
        var _this2 = this;
        if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
        var C = getSpecies(this);
        return new C(function(observer) {
            return _this2.subscribe({
                next: function(value) {
                    try {
                        value = fn(value);
                    } catch (e) {
                        return observer.error(e);
                    }
                    observer.next(value);
                },
                error: function(e) {
                    observer.error(e);
                },
                complete: function() {
                    observer.complete();
                }
            });
        });
    };
    _proto3.filter = function filter(fn) {
        var _this3 = this;
        if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
        var C = getSpecies(this);
        return new C(function(observer) {
            return _this3.subscribe({
                next: function(value) {
                    try {
                        if (!fn(value)) return;
                    } catch (e) {
                        return observer.error(e);
                    }
                    observer.next(value);
                },
                error: function(e) {
                    observer.error(e);
                },
                complete: function() {
                    observer.complete();
                }
            });
        });
    };
    _proto3.reduce = function reduce(fn) {
        var _this4 = this;
        if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
        var C = getSpecies(this);
        var hasSeed = arguments.length > 1;
        var hasValue = false;
        var seed = arguments[1];
        var acc = seed;
        return new C(function(observer) {
            return _this4.subscribe({
                next: function(value) {
                    var first = !hasValue;
                    hasValue = true;
                    if (!first || hasSeed) try {
                        acc = fn(acc, value);
                    } catch (e) {
                        return observer.error(e);
                    }
                    else acc = value;
                },
                error: function(e) {
                    observer.error(e);
                },
                complete: function() {
                    if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
                    observer.next(acc);
                    observer.complete();
                }
            });
        });
    };
    _proto3.concat = function concat() {
        var _this5 = this;
        for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
        var C = getSpecies(this);
        return new C(function(observer) {
            var subscription;
            var index = 0;
            function startNext(next) {
                subscription = next.subscribe({
                    next: function(v) {
                        observer.next(v);
                    },
                    error: function(e) {
                        observer.error(e);
                    },
                    complete: function() {
                        if (index === sources.length) {
                            subscription = undefined;
                            observer.complete();
                        } else startNext(C.from(sources[index++]));
                    }
                });
            }
            startNext(_this5);
            return function() {
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = undefined;
                }
            };
        });
    };
    _proto3.flatMap = function flatMap(fn) {
        var _this6 = this;
        if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
        var C = getSpecies(this);
        return new C(function(observer) {
            var subscriptions = [];
            var outer = _this6.subscribe({
                next: function(value1) {
                    if (fn) try {
                        value1 = fn(value1);
                    } catch (e1) {
                        return observer.error(e1);
                    }
                    var inner = C.from(value1).subscribe({
                        next: function(value) {
                            observer.next(value);
                        },
                        error: function(e) {
                            observer.error(e);
                        },
                        complete: function() {
                            var i = subscriptions.indexOf(inner);
                            if (i >= 0) subscriptions.splice(i, 1);
                            completeIfDone();
                        }
                    });
                    subscriptions.push(inner);
                },
                error: function(e) {
                    observer.error(e);
                },
                complete: function() {
                    completeIfDone();
                }
            });
            function completeIfDone() {
                if (outer.closed && subscriptions.length === 0) observer.complete();
            }
            return function() {
                subscriptions.forEach(function(s) {
                    return s.unsubscribe();
                });
                outer.unsubscribe();
            };
        });
    };
    _proto3[SymbolObservable] = function() {
        return this;
    };
    Observable1.from = function from(x) {
        var C = typeof this === 'function' ? this : Observable1;
        if (x == null) throw new TypeError(x + ' is not an object');
        var method = getMethod(x, SymbolObservable);
        if (method) {
            var observable = method.call(x);
            if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
            if (isObservable(observable) && observable.constructor === C) return observable;
            return new C(function(observer) {
                return observable.subscribe(observer);
            });
        }
        if (hasSymbol('iterator')) {
            method = getMethod(x, SymbolIterator);
            if (method) return new C(function(observer) {
                enqueue(function() {
                    if (observer.closed) return;
                    for(var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;){
                        var item = _step.value;
                        observer.next(item);
                        if (observer.closed) return;
                    }
                    observer.complete();
                });
            });
        }
        if (Array.isArray(x)) return new C(function(observer) {
            enqueue(function() {
                if (observer.closed) return;
                for(var i = 0; i < x.length; ++i){
                    observer.next(x[i]);
                    if (observer.closed) return;
                }
                observer.complete();
            });
        });
        throw new TypeError(x + ' is not observable');
    };
    Observable1.of = function of() {
        for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)items[_key2] = arguments[_key2];
        var C = typeof this === 'function' ? this : Observable1;
        return new C(function(observer) {
            enqueue(function() {
                if (observer.closed) return;
                for(var i = 0; i < items.length; ++i){
                    observer.next(items[i]);
                    if (observer.closed) return;
                }
                observer.complete();
            });
        });
    };
    _createClass(Observable1, null, [
        {
            key: SymbolSpecies,
            get: function() {
                return this;
            }
        }
    ]);
    return Observable1;
}();
if (hasSymbols()) Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
        symbol: SymbolObservable,
        hostReportError: hostReportError
    },
    configurable: true
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rWK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* global window */ var _ponyfillJs = require("./ponyfill.js");
var _ponyfillJsDefault = parcelHelpers.interopDefault(_ponyfillJs);
var global = arguments[3];
var root;
if (typeof self !== 'undefined') root = self;
else if (typeof window !== 'undefined') root = window;
else if (typeof global !== 'undefined') root = global;
else root = module;
var result = _ponyfillJsDefault.default(root);
exports.default = result;

},{"./ponyfill.js":"94Tfe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94Tfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function symbolObservablePonyfill(root) {
    var result;
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) result = Symbol.observable;
        else {
            if (typeof Symbol.for === 'function') // This just needs to be something that won't trample other user's Symbol.for use
            // It also will guide people to the source of their issues, if this is problematic.
            // META: It's a resource locator!
            result = Symbol.for('https://github.com/benlesh/symbol-observable');
            else // Symbol.for didn't exist! The best we can do at this point is a totally 
            // unique symbol. Note that the string argument here is a descriptor, not
            // an identifier. This symbol is unique.
            result = Symbol('https://github.com/benlesh/symbol-observable');
            try {
                Symbol.observable = result;
            } catch (err) {
            // Do nothing. In some environments, users have frozen `Symbol` for security reasons,
            // if it is frozen assigning to it will throw. In this case, we don't care, because
            // they will need to use the returned value from the ponyfill.
            }
        }
    } else result = '@@observable';
    return result;
}
exports.default = symbolObservablePonyfill;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSCGu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeDeep", ()=>mergeDeep
);
parcelHelpers.export(exports, "mergeDeepArray", ()=>mergeDeepArray
);
parcelHelpers.export(exports, "DeepMerger", ()=>DeepMerger
);
var _tslib = require("tslib");
var _objectsJs = require("./objects.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for(var i = 1; i < count; ++i)target = merger.merge(target, sources[i]);
    }
    return target;
}
var defaultReconciler = function(target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
    function DeepMerger1(reconciler) {
        if (reconciler === void 0) reconciler = defaultReconciler;
        this.reconciler = reconciler;
        this.isObject = _objectsJs.isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger1.prototype.merge = function(target, source) {
        var _this = this;
        var context = [];
        for(var _i = 2; _i < arguments.length; _i++)context[_i - 2] = arguments[_i];
        if (_objectsJs.isNonNullObject(source) && _objectsJs.isNonNullObject(target)) {
            Object.keys(source).forEach(function(sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, _tslib.__spreadArray([
                            target,
                            source,
                            sourceKey
                        ], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                } else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger1.prototype.shallowCopyForMerge = function(value) {
        if (_objectsJs.isNonNullObject(value)) {
            if (this.pastCopies.has(value)) {
                if (!Object.isFrozen(value)) return value;
                this.pastCopies.delete(value);
            }
            if (Array.isArray(value)) value = value.slice(0);
            else value = _tslib.__assign({
                __proto__: Object.getPrototypeOf(value)
            }, value);
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger1;
}();

},{"tslib":"lRdW5","./objects.js":"dnoNc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ifOf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cloneDeep", ()=>cloneDeep
);
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch(toString.call(val)){
        case "[object Array]":
            seen = seen || new Map;
            if (seen.has(val)) return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function(child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        case "[object Object]":
            seen = seen || new Map;
            if (seen.has(val)) return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function(key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        default:
            return val;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"763LZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "maybeDeepFreeze", ()=>maybeDeepFreeze
);
var _indexJs = require("../globals/index.js");
var _objectsJs = require("./objects.js");
function deepFreeze(value) {
    var workSet = new Set([
        value
    ]);
    workSet.forEach(function(obj) {
        if (_objectsJs.isNonNullObject(obj) && shallowFreeze(obj) === obj) Object.getOwnPropertyNames(obj).forEach(function(name) {
            if (_objectsJs.isNonNullObject(obj[name])) workSet.add(obj[name]);
        });
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) try {
        Object.freeze(obj);
    } catch (e) {
        if (e instanceof TypeError) return null;
        throw e;
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) deepFreeze(obj);
    return obj;
}

},{"../globals/index.js":"60qk9","./objects.js":"dnoNc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kx5N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iterateObserversSafely", ()=>iterateObserversSafely
);
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function(obs) {
        return obs[method] && observersWithMethod.push(obs);
    });
    observersWithMethod.forEach(function(obs) {
        return obs[method](argument);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRLrH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncMap", ()=>asyncMap
);
var _observableJs = require("./Observable.js");
function asyncMap(observable, mapFn, catchFn) {
    return new _observableJs.Observable(function(observer) {
        var next = observer.next, error1 = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function(callback) {
                return new Promise(function(resolve) {
                    return resolve(callback());
                });
            }
        };
        function makeCallback(examiner, delegate) {
            if (examiner) return function(arg) {
                ++activeCallbackCount;
                var both = function() {
                    return examiner(arg);
                };
                promiseQueue = promiseQueue.then(both, both).then(function(result) {
                    --activeCallbackCount;
                    next && next.call(observer, result);
                    if (completed) handler.complete();
                }, function(error) {
                    --activeCallbackCount;
                    throw error;
                }).catch(function(caught) {
                    error1 && error1.call(observer, caught);
                });
            };
            else return function(arg) {
                return delegate && delegate.call(observer, arg);
            };
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error1),
            complete: function() {
                completed = true;
                if (!activeCallbackCount) complete && complete.call(observer);
            }
        };
        var sub = observable.subscribe(handler);
        return function() {
            return sub.unsubscribe();
        };
    });
}

},{"./Observable.js":"8YthT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgqjc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Concast", ()=>Concast
);
var _tslib = require("tslib");
var _observableJs = require("./Observable.js");
var _iterationJs = require("./iteration.js");
var _subclassingJs = require("./subclassing.js");
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = function(_super) {
    _tslib.__extends(Concast1, _super);
    function Concast1(sources) {
        var _this = _super.call(this, function(observer) {
            _this.addObserver(observer);
            return function() {
                return _this.removeObserver(observer);
            };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function(resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function(result) {
                if (_this.sub !== null) {
                    _this.latest = [
                        "next",
                        result
                    ];
                    _iterationJs.iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function(error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub) setTimeout(function() {
                        return sub.unsubscribe();
                    });
                    _this.sub = null;
                    _this.latest = [
                        "error",
                        error
                    ];
                    _this.reject(error);
                    _iterationJs.iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function() {
                var sub = _this.sub;
                if (sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        if (sub) setTimeout(function() {
                            return sub.unsubscribe();
                        });
                        _this.sub = null;
                        if (_this.latest && _this.latest[0] === "next") _this.resolve(_this.latest[1]);
                        else _this.resolve();
                        _iterationJs.iterateObserversSafely(_this.observers, "complete");
                    } else if (isPromiseLike(value)) value.then(function(obs) {
                        return _this.sub = obs.subscribe(_this.handlers);
                    });
                    else _this.sub = value.subscribe(_this.handlers);
                }
            }
        };
        _this.cancel = function(reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function(_) {});
        if (typeof sources === "function") sources = [
            new _observableJs.Observable(sources)
        ];
        if (isPromiseLike(sources)) sources.then(function(iterable) {
            return _this.start(iterable);
        }, _this.handlers.error);
        else _this.start(sources);
        return _this;
    }
    Concast1.prototype.start = function(sources) {
        if (this.sub !== void 0) return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast1.prototype.deliverLastMessage = function(observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) method.call(observer, this.latest[1]);
            if (this.sub === null && nextOrError === "next" && observer.complete) observer.complete();
        }
    };
    Concast1.prototype.addObserver = function(observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast1.prototype.removeObserver = function(observer, quietly) {
        if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) this.handlers.complete();
    };
    Concast1.prototype.cleanup = function(callback) {
        var _this = this;
        var called = false;
        var once = function() {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast1;
}(_observableJs.Observable);
_subclassingJs.fixObservableSubclass(Concast);

},{"tslib":"lRdW5","./Observable.js":"8YthT","./iteration.js":"3kx5N","./subclassing.js":"lK9ZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lK9ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fixObservableSubclass", ()=>fixObservableSubclass
);
var _observableJs = require("./Observable.js");
var _canUseJs = require("../common/canUse.js");
function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, {
            value: _observableJs.Observable
        });
    }
    if (_canUseJs.canUseSymbol && Symbol.species) set(Symbol.species);
    set("@@species");
    return subclass;
}

},{"./Observable.js":"8YthT","../common/canUse.js":"jT4Jd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jT4Jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canUseWeakMap", ()=>canUseWeakMap
);
parcelHelpers.export(exports, "canUseWeakSet", ()=>canUseWeakSet
);
parcelHelpers.export(exports, "canUseSymbol", ()=>canUseSymbol
);
parcelHelpers.export(exports, "canUseDOM", ()=>canUseDOM
);
parcelHelpers.export(exports, "canUseLayoutEffect", ()=>canUseLayoutEffect
);
var _indexJs = require("../globals/index.js");
var canUseWeakMap = typeof WeakMap === 'function' && _indexJs.maybe(function() {
    return navigator.product;
}) !== 'ReactNative';
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function';
var canUseDOM = typeof _indexJs.maybe(function() {
    return window.document.createElement;
}) === "function";
var usingJSDOM = _indexJs.maybe(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
var canUseLayoutEffect = canUseDOM && !usingJSDOM;

},{"../globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"js0mt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNonEmptyArray", ()=>isNonEmptyArray
);
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ay7p4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "graphQLResultHasError", ()=>graphQLResultHasError
);
function graphQLResultHasError(result) {
    return result.errors && result.errors.length > 0 || false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7w63p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact
);
function compact() {
    var objects = [];
    for(var _i = 0; _i < arguments.length; _i++)objects[_i] = arguments[_i];
    var result = Object.create(null);
    objects.forEach(function(obj) {
        if (!obj) return;
        Object.keys(obj).forEach(function(key) {
            var value = obj[key];
            if (value !== void 0) result[key] = value;
        });
    });
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqz9N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeUniqueId", ()=>makeUniqueId
);
var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2a3ic":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringifyForDisplay", ()=>stringifyForDisplay
);
var _makeUniqueIdJs = require("./makeUniqueId.js");
function stringifyForDisplay(value1) {
    var undefId = _makeUniqueIdJs.makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value1, function(key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}

},{"./makeUniqueId.js":"dqz9N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZtVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeOptions", ()=>mergeOptions
);
var _tslib = require("tslib");
var _compactJs = require("./compact.js");
function mergeOptions(defaults, options) {
    return _compactJs.compact(defaults, options, options.variables && {
        variables: _tslib.__assign(_tslib.__assign({}, defaults && defaults.variables), options.variables)
    });
}

},{"tslib":"lRdW5","./compact.js":"7w63p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fa3Bx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7agqB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromError", ()=>_fromErrorJs.fromError
);
parcelHelpers.export(exports, "toPromise", ()=>_toPromiseJs.toPromise
);
parcelHelpers.export(exports, "fromPromise", ()=>_fromPromiseJs.fromPromise
);
parcelHelpers.export(exports, "throwServerError", ()=>_throwServerErrorJs.throwServerError
);
parcelHelpers.export(exports, "validateOperation", ()=>_validateOperationJs.validateOperation
);
parcelHelpers.export(exports, "createOperation", ()=>_createOperationJs.createOperation
);
parcelHelpers.export(exports, "transformOperation", ()=>_transformOperationJs.transformOperation
);
var _indexJs = require("../../utilities/globals/index.js");
var _fromErrorJs = require("./fromError.js");
var _toPromiseJs = require("./toPromise.js");
var _fromPromiseJs = require("./fromPromise.js");
var _throwServerErrorJs = require("./throwServerError.js");
var _validateOperationJs = require("./validateOperation.js");
var _createOperationJs = require("./createOperation.js");
var _transformOperationJs = require("./transformOperation.js");

},{"../../utilities/globals/index.js":"60qk9","./fromError.js":"dQkEx","./toPromise.js":"8fij7","./fromPromise.js":"8DMhh","./throwServerError.js":"gLrRs","./validateOperation.js":"hbcZk","./createOperation.js":"8j1Ui","./transformOperation.js":"5NITY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQkEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromError", ()=>fromError
);
var _indexJs = require("../../utilities/index.js");
function fromError(errorValue) {
    return new _indexJs.Observable(function(observer) {
        observer.error(errorValue);
    });
}

},{"../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fij7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toPromise", ()=>toPromise
);
var _indexJs = require("../../utilities/globals/index.js");
function toPromise(observable) {
    var completed = false;
    return new Promise(function(resolve, reject) {
        observable.subscribe({
            next: function(data) {
                if (completed) __DEV__ && _indexJs.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject
        });
    });
}

},{"../../utilities/globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8DMhh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromPromise", ()=>fromPromise
);
var _indexJs = require("../../utilities/index.js");
function fromPromise(promise) {
    return new _indexJs.Observable(function(observer) {
        promise.then(function(value) {
            observer.next(value);
            observer.complete();
        }).catch(observer.error.bind(observer));
    });
}

},{"../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLrRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwServerError", ()=>throwServerError
);
var throwServerError = function(response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbcZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateOperation", ()=>validateOperation
);
var _indexJs = require("../../utilities/globals/index.js");
function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context', 
    ];
    for(var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++){
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) throw __DEV__ ? new _indexJs.InvariantError("illegal argument: ".concat(key)) : new _indexJs.InvariantError(24);
    }
    return operation;
}

},{"../../utilities/globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8j1Ui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOperation", ()=>createOperation
);
var _tslib = require("tslib");
function createOperation(starting, operation) {
    var context = _tslib.__assign({}, starting);
    var setContext = function(next) {
        if (typeof next === 'function') context = _tslib.__assign(_tslib.__assign({}, context), next(context));
        else context = _tslib.__assign(_tslib.__assign({}, context), next);
    };
    var getContext = function() {
        return _tslib.__assign({}, context);
    };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext
    });
    return operation;
}

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NITY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformOperation", ()=>transformOperation
);
var _indexJs = require("../../utilities/index.js");
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query
    };
    if (!transformedOperation.operationName) transformedOperation.operationName = typeof transformedOperation.query !== 'string' ? _indexJs.getOperationName(transformedOperation.query) || undefined : '';
    return transformedOperation;
}

},{"../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QuNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from
);
var _apolloLinkJs = require("./ApolloLink.js");
var from = _apolloLinkJs.ApolloLink.from;

},{"./ApolloLink.js":"3IMlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5PvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "split", ()=>split
);
var _apolloLinkJs = require("./ApolloLink.js");
var split = _apolloLinkJs.ApolloLink.split;

},{"./ApolloLink.js":"3IMlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQDvB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
var _apolloLinkJs = require("./ApolloLink.js");
var concat = _apolloLinkJs.ApolloLink.concat;

},{"./ApolloLink.js":"3IMlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38fCH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "execute", ()=>execute
);
var _apolloLinkJs = require("./ApolloLink.js");
var execute = _apolloLinkJs.ApolloLink.execute;

},{"./ApolloLink.js":"3IMlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sngK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5mZ8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version
);
var version = '3.6.4';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eveJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAndCheckHttpResponse", ()=>_parseAndCheckHttpResponseJs.parseAndCheckHttpResponse
);
parcelHelpers.export(exports, "serializeFetchParameter", ()=>_serializeFetchParameterJs.serializeFetchParameter
);
parcelHelpers.export(exports, "fallbackHttpConfig", ()=>_selectHttpOptionsAndBodyJs.fallbackHttpConfig
);
parcelHelpers.export(exports, "defaultPrinter", ()=>_selectHttpOptionsAndBodyJs.defaultPrinter
);
parcelHelpers.export(exports, "selectHttpOptionsAndBody", ()=>_selectHttpOptionsAndBodyJs.selectHttpOptionsAndBody
);
parcelHelpers.export(exports, "selectHttpOptionsAndBodyInternal", ()=>_selectHttpOptionsAndBodyJs.selectHttpOptionsAndBodyInternal
);
parcelHelpers.export(exports, "checkFetcher", ()=>_checkFetcherJs.checkFetcher
);
parcelHelpers.export(exports, "createSignalIfSupported", ()=>_createSignalIfSupportedJs.createSignalIfSupported
);
parcelHelpers.export(exports, "selectURI", ()=>_selectURIJs.selectURI
);
parcelHelpers.export(exports, "createHttpLink", ()=>_createHttpLinkJs.createHttpLink
);
parcelHelpers.export(exports, "HttpLink", ()=>_httpLinkJs.HttpLink
);
parcelHelpers.export(exports, "rewriteURIForGET", ()=>_rewriteURIForGETJs.rewriteURIForGET
);
var _indexJs = require("../../utilities/globals/index.js");
var _parseAndCheckHttpResponseJs = require("./parseAndCheckHttpResponse.js");
var _serializeFetchParameterJs = require("./serializeFetchParameter.js");
var _selectHttpOptionsAndBodyJs = require("./selectHttpOptionsAndBody.js");
var _checkFetcherJs = require("./checkFetcher.js");
var _createSignalIfSupportedJs = require("./createSignalIfSupported.js");
var _selectURIJs = require("./selectURI.js");
var _createHttpLinkJs = require("./createHttpLink.js");
var _httpLinkJs = require("./HttpLink.js");
var _rewriteURIForGETJs = require("./rewriteURIForGET.js");

},{"../../utilities/globals/index.js":"60qk9","./parseAndCheckHttpResponse.js":"gwG2w","./serializeFetchParameter.js":"45J5O","./selectHttpOptionsAndBody.js":"4tXAp","./checkFetcher.js":"ahEkQ","./createSignalIfSupported.js":"4epCf","./selectURI.js":"7JSXi","./createHttpLink.js":"2mFXo","./HttpLink.js":"bpm4N","./rewriteURIForGET.js":"lCYNn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwG2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAndCheckHttpResponse", ()=>parseAndCheckHttpResponse
);
var _indexJs = require("../utils/index.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function(response) {
        return response.text().then(function(bodyText) {
            try {
                return JSON.parse(bodyText);
            } catch (err) {
                var parseError = err;
                parseError.name = 'ServerParseError';
                parseError.response = response;
                parseError.statusCode = response.status;
                parseError.bodyText = bodyText;
                throw parseError;
            }
        }).then(function(result) {
            if (response.status >= 300) _indexJs.throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
            if (!Array.isArray(result) && !hasOwnProperty.call(result, 'data') && !hasOwnProperty.call(result, 'errors')) _indexJs.throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
                return op.operationName;
            }) : operations.operationName, "'."));
            return result;
        });
    };
}

},{"../utils/index.js":"7agqB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45J5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeFetchParameter", ()=>serializeFetchParameter
);
var _indexJs = require("../../utilities/globals/index.js");
var serializeFetchParameter = function(p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    } catch (e) {
        var parseError = __DEV__ ? new _indexJs.InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new _indexJs.InvariantError(21);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};

},{"../../utilities/globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tXAp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fallbackHttpConfig", ()=>fallbackHttpConfig
);
parcelHelpers.export(exports, "defaultPrinter", ()=>defaultPrinter
);
parcelHelpers.export(exports, "selectHttpOptionsAndBody", ()=>selectHttpOptionsAndBody
);
parcelHelpers.export(exports, "selectHttpOptionsAndBodyInternal", ()=>selectHttpOptionsAndBodyInternal
);
var _tslib = require("tslib");
var _graphql = require("graphql");
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json'
};
var defaultOptions = {
    method: 'POST'
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
    return printer(ast);
};
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for(var _i = 2; _i < arguments.length; _i++)configs[_i - 2] = arguments[_i];
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, _tslib.__spreadArray([
        operation,
        defaultPrinter
    ], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for(var _i = 2; _i < arguments.length; _i++)configs[_i - 2] = arguments[_i];
    var options = {};
    var http = {};
    configs.forEach(function(config) {
        options = _tslib.__assign(_tslib.__assign(_tslib.__assign({}, options), config.options), {
            headers: _tslib.__assign(_tslib.__assign({}, options.headers), headersToLowerCase(config.headers))
        });
        if (config.credentials) options.credentials = config.credentials;
        http = _tslib.__assign(_tslib.__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = {
        operationName: operationName,
        variables: variables
    };
    if (http.includeExtensions) body.extensions = extensions;
    if (http.includeQuery) body.query = printer(query, _graphql.print);
    return {
        options: options,
        body: body
    };
}
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function(name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}

},{"tslib":"lRdW5","graphql":"dwHFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahEkQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkFetcher", ()=>checkFetcher
);
var _indexJs = require("../../utilities/globals/index.js");
var checkFetcher = function(fetcher) {
    if (!fetcher && typeof fetch === 'undefined') throw __DEV__ ? new _indexJs.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new _indexJs.InvariantError(20);
};

},{"../../utilities/globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4epCf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSignalIfSupported", ()=>createSignalIfSupported
);
var createSignalIfSupported = function() {
    if (typeof AbortController === 'undefined') return {
        controller: false,
        signal: false
    };
    var controller = new AbortController();
    var signal = controller.signal;
    return {
        controller: controller,
        signal: signal
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JSXi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectURI", ()=>selectURI
);
var selectURI = function(operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) return contextURI;
    else if (typeof fallbackURI === 'function') return fallbackURI(operation);
    else return fallbackURI || '/graphql';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mFXo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHttpLink", ()=>createHttpLink
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _graphql = require("graphql");
var _indexJs1 = require("../core/index.js");
var _indexJs2 = require("../../utilities/index.js");
var _serializeFetchParameterJs = require("./serializeFetchParameter.js");
var _selectURIJs = require("./selectURI.js");
var _parseAndCheckHttpResponseJs = require("./parseAndCheckHttpResponse.js");
var _checkFetcherJs = require("./checkFetcher.js");
var _selectHttpOptionsAndBodyJs = require("./selectHttpOptionsAndBody.js");
var _createSignalIfSupportedJs = require("./createSignalIfSupported.js");
var _rewriteURIForGETJs = require("./rewriteURIForGET.js");
var _indexJs3 = require("../utils/index.js");
var backupFetch = _indexJs2.maybe(function() {
    return fetch;
});
var createHttpLink = function(linkOptions) {
    if (linkOptions === void 0) linkOptions = {};
    var _a1 = linkOptions.uri, uri = _a1 === void 0 ? '/graphql' : _a1, preferredFetch = linkOptions.fetch, _b1 = linkOptions.print, print = _b1 === void 0 ? _selectHttpOptionsAndBodyJs.defaultPrinter : _b1, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c1 = linkOptions.includeUnusedVariables, includeUnusedVariables = _c1 === void 0 ? false : _c1, requestOptions = _tslib.__rest(linkOptions, [
        "uri",
        "fetch",
        "print",
        "includeExtensions",
        "useGETForQueries",
        "includeUnusedVariables"
    ]);
    if (__DEV__) _checkFetcherJs.checkFetcher(preferredFetch || backupFetch);
    var linkConfig = {
        http: {
            includeExtensions: includeExtensions
        },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers
    };
    return new _indexJs1.ApolloLink(function(operation) {
        var chosenURI = _selectURIJs.selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) clientAwarenessHeaders['apollographql-client-name'] = name_1;
            if (version) clientAwarenessHeaders['apollographql-client-version'] = version;
        }
        var contextHeaders = _tslib.__assign(_tslib.__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders
        };
        var _b = _selectHttpOptionsAndBodyJs.selectHttpOptionsAndBodyInternal(operation, print, _selectHttpOptionsAndBodyJs.fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            _graphql.visit(operation.query, {
                Variable: function(node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') unusedNames_1.delete(node.name.value);
                }
            });
            if (unusedNames_1.size) {
                body.variables = _tslib.__assign({}, body.variables);
                unusedNames_1.forEach(function(name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = _createSignalIfSupportedJs.createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller) options.signal = signal;
        }
        var definitionIsMutation = function(d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) options.method = 'GET';
        if (options.method === 'GET') {
            var _d = _rewriteURIForGETJs.rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) return _indexJs3.fromError(parseError);
            chosenURI = newURI;
        } else try {
            options.body = _serializeFetchParameterJs.serializeFetchParameter(body, 'Payload');
        } catch (parseError) {
            return _indexJs3.fromError(parseError);
        }
        return new _indexJs2.Observable(function(observer) {
            var currentFetch = preferredFetch || _indexJs2.maybe(function() {
                return fetch;
            }) || backupFetch;
            currentFetch(chosenURI, options).then(function(response) {
                operation.setContext({
                    response: response
                });
                return response;
            }).then(_parseAndCheckHttpResponseJs.parseAndCheckHttpResponse(operation)).then(function(result) {
                observer.next(result);
                observer.complete();
                return result;
            }).catch(function(err) {
                if (err.name === 'AbortError') return;
                if (err.result && err.result.errors && err.result.data) observer.next(err.result);
                observer.error(err);
            });
            return function() {
                if (controller) controller.abort();
            };
        });
    });
};

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","graphql":"dwHFG","../core/index.js":"4XY3c","../../utilities/index.js":"k51w7","./serializeFetchParameter.js":"45J5O","./selectURI.js":"7JSXi","./parseAndCheckHttpResponse.js":"gwG2w","./checkFetcher.js":"ahEkQ","./selectHttpOptionsAndBody.js":"4tXAp","./createSignalIfSupported.js":"4epCf","./rewriteURIForGET.js":"lCYNn","../utils/index.js":"7agqB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCYNn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rewriteURIForGET", ()=>rewriteURIForGET
);
var _serializeFetchParameterJs = require("./serializeFetchParameter.js");
function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function(key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ('query' in body) addQueryParam('query', body.query);
    if (body.operationName) addQueryParam('operationName', body.operationName);
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = _serializeFetchParameterJs.serializeFetchParameter(body.variables, 'Variables map');
        } catch (parseError) {
            return {
                parseError: parseError
            };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = _serializeFetchParameterJs.serializeFetchParameter(body.extensions, 'Extensions map');
        } catch (parseError) {
            return {
                parseError: parseError
            };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return {
        newURI: newURI
    };
}

},{"./serializeFetchParameter.js":"45J5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpm4N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpLink", ()=>HttpLink
);
var _tslib = require("tslib");
var _indexJs = require("../core/index.js");
var _createHttpLinkJs = require("./createHttpLink.js");
var HttpLink = function(_super) {
    _tslib.__extends(HttpLink1, _super);
    function HttpLink1(options) {
        if (options === void 0) options = {};
        var _this = _super.call(this, _createHttpLinkJs.createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink1;
}(_indexJs.ApolloLink);

},{"tslib":"lRdW5","../core/index.js":"4XY3c","./createHttpLink.js":"2mFXo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fWxhn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryManager", ()=>QueryManager
);
var _tslib = require("tslib");
var _indexJs = require("../utilities/globals/index.js");
var _equality = require("@wry/equality");
var _indexJs1 = require("../link/core/index.js");
var _indexJs2 = require("../cache/index.js");
var _indexJs3 = require("../utilities/index.js");
var _indexJs4 = require("../errors/index.js");
var _observableQueryJs = require("./ObservableQuery.js");
var _networkStatusJs = require("./networkStatus.js");
var _localStateJs = require("./LocalState.js");
var _queryInfoJs = require("./QueryInfo.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
    function QueryManager1(_a) {
        var cache = _a.cache, link = _a.link, defaultOptions = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (_indexJs3.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new _localStateJs.LocalState({
            cache: cache
        });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if (this.onBroadcast = onBroadcast) this.mutationStore = Object.create(null);
    }
    QueryManager1.prototype.stop = function() {
        var _this = this;
        this.queries.forEach(function(_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new _indexJs.InvariantError('QueryManager stopped while query was in flight') : new _indexJs.InvariantError(11));
    };
    QueryManager1.prototype.cancelPendingFetches = function(error) {
        this.fetchCancelFns.forEach(function(cancel) {
            return cancel(error);
        });
        this.fetchCancelFns.clear();
    };
    QueryManager1.prototype.mutate = function(_a) {
        var _b, _c;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var mutationId, mutationStoreValue, self;
            return _tslib.__generator(this, function(_h) {
                switch(_h.label){
                    case 0:
                        __DEV__ ? _indexJs.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : _indexJs.invariant(mutation, 12);
                        __DEV__ ? _indexJs.invariant(fetchPolicy === 'network-only' || fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : _indexJs.invariant(fetchPolicy === 'network-only' || fetchPolicy === 'no-cache', 13);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            this.localState.addExportedVariables(mutation, variables, context)
                        ];
                    case 1:
                        variables = _h.sent();
                        _h.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                            mutation: mutation,
                            variables: variables,
                            loading: true,
                            error: null
                        });
                        if (optimisticResponse) this.markMutationOptimistic(optimisticResponse, {
                            mutationId: mutationId,
                            document: mutation,
                            variables: variables,
                            fetchPolicy: fetchPolicy,
                            errorPolicy: errorPolicy,
                            context: context,
                            updateQueries: updateQueries,
                            update: updateWithProxyFn,
                            keepRootFields: keepRootFields
                        });
                        this.broadcastQueries();
                        self = this;
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                return _indexJs3.asyncMap(self.getObservableFromLink(mutation, _tslib.__assign(_tslib.__assign({}, context), {
                                    optimisticResponse: optimisticResponse
                                }), variables, false), function(result) {
                                    if (_indexJs3.graphQLResultHasError(result) && errorPolicy === 'none') throw new _indexJs4.ApolloError({
                                        graphQLErrors: result.errors
                                    });
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = _tslib.__assign({}, result);
                                    if (typeof refetchQueries === "function") refetchQueries = refetchQueries(storeResult);
                                    if (errorPolicy === 'ignore' && _indexJs3.graphQLResultHasError(storeResult)) delete storeResult.errors;
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields
                                    });
                                }).subscribe({
                                    next: function(storeResult) {
                                        self.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function(err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) self.cache.removeOptimistic(mutationId);
                                        self.broadcastQueries();
                                        reject(err instanceof _indexJs4.ApolloError ? err : new _indexJs4.ApolloError({
                                            networkError: err
                                        }));
                                    }
                                });
                            })
                        ];
                }
            });
        });
    };
    QueryManager1.prototype.markMutationResult = function(mutation, cache1) {
        var _this = this;
        if (cache1 === void 0) cache1 = this.cache;
        var result1 = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && _queryInfoJs.shouldWriteResult(result1, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result1.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) this.queries.forEach(function(_a, queryId) {
                var observableQuery = _a.observableQuery;
                var queryName = observableQuery && observableQuery.queryName;
                if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) return;
                var updater = updateQueries_1[queryName];
                var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                var _c = cache1.diff({
                    query: document,
                    variables: variables,
                    returnPartialData: true,
                    optimistic: false
                }), currentQueryResult = _c.result, complete = _c.complete;
                if (complete && currentQueryResult) {
                    var nextQueryResult = updater(currentQueryResult, {
                        mutationResult: result1,
                        queryName: document && _indexJs3.getOperationName(document) || void 0,
                        queryVariables: variables
                    });
                    if (nextQueryResult) cacheWrites.push({
                        result: nextQueryResult,
                        dataId: 'ROOT_QUERY',
                        query: document,
                        variables: variables
                    });
                }
            });
        }
        if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function(cache) {
                    if (!skipCache) cacheWrites.forEach(function(write) {
                        return cache.write(write);
                    });
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true
                            });
                            if (diff.complete) result1 = _tslib.__assign(_tslib.__assign({}, result1), {
                                data: diff.result
                            });
                        }
                        update(cache, result1, {
                            context: mutation.context,
                            variables: mutation.variables
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) cache.modify({
                        id: 'ROOT_MUTATION',
                        fields: function(value, _a) {
                            var fieldName = _a.fieldName, DELETE = _a.DELETE;
                            return fieldName === "__typename" ? value : DELETE;
                        }
                    });
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null
            }).forEach(function(result) {
                return results_1.push(result);
            });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) return Promise.all(results_1).then(function() {
                return result1;
            });
        }
        return Promise.resolve(result1);
    };
    QueryManager1.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function(cache) {
            try {
                _this.markMutationResult(_tslib.__assign(_tslib.__assign({}, mutation), {
                    result: {
                        data: data
                    }
                }), cache);
            } catch (error) {
                __DEV__ && _indexJs.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager1.prototype.fetchQuery = function(queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager1.prototype.getQueryStore = function() {
        var store = Object.create(null);
        this.queries.forEach(function(info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors
            };
        });
        return store;
    };
    QueryManager1.prototype.resetErrors = function(queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager1.prototype.transform = function(document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = _indexJs3.removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: _indexJs3.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: _indexJs3.getDefaultValues(_indexJs3.getOperationDefinition(transformed)),
                asQuery: _tslib.__assign(_tslib.__assign({}, transformed), {
                    definitions: transformed.definitions.map(function(def) {
                        if (def.kind === "OperationDefinition" && def.operation !== "query") return _tslib.__assign(_tslib.__assign({}, def), {
                            operation: "query"
                        });
                        return def;
                    })
                })
            };
            var add = function(doc) {
                if (doc && !transformCache.has(doc)) transformCache.set(doc, cacheEntry_1);
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager1.prototype.getVariables = function(document, variables) {
        return _tslib.__assign(_tslib.__assign({}, this.transform(document).defaultVars), variables);
    };
    QueryManager1.prototype.watchQuery = function(options) {
        options = _tslib.__assign(_tslib.__assign({}, options), {
            variables: this.getVariables(options.query, options.variables)
        });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') options.notifyOnNetworkStatusChange = false;
        var queryInfo = new _queryInfoJs.QueryInfo(this);
        var observable = new _observableQueryJs.ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: observable.query,
            observableQuery: observable,
            variables: observable.variables
        });
        return observable;
    };
    QueryManager1.prototype.query = function(options, queryId) {
        var _this = this;
        if (queryId === void 0) queryId = this.generateQueryId();
        __DEV__ ? _indexJs.invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.") : _indexJs.invariant(options.query, 14);
        __DEV__ ? _indexJs.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : _indexJs.invariant(options.query.kind === 'Document', 15);
        __DEV__ ? _indexJs.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : _indexJs.invariant(!options.returnPartialData, 16);
        __DEV__ ? _indexJs.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : _indexJs.invariant(!options.pollInterval, 17);
        return this.fetchQuery(queryId, options).finally(function() {
            return _this.stopQuery(queryId);
        });
    };
    QueryManager1.prototype.generateQueryId = function() {
        return String(this.queryIdCounter++);
    };
    QueryManager1.prototype.generateRequestId = function() {
        return this.requestIdCounter++;
    };
    QueryManager1.prototype.generateMutationId = function() {
        return String(this.mutationIdCounter++);
    };
    QueryManager1.prototype.stopQueryInStore = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager1.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) queryInfo.stop();
    };
    QueryManager1.prototype.clearStore = function(options) {
        if (options === void 0) options = {
            discardWatches: true
        };
        this.cancelPendingFetches(__DEV__ ? new _indexJs.InvariantError('Store reset while query was in flight (not completed in link chain)') : new _indexJs.InvariantError(18));
        this.queries.forEach(function(queryInfo) {
            if (queryInfo.observableQuery) queryInfo.networkStatus = _networkStatusJs.NetworkStatus.loading;
            else queryInfo.stop();
        });
        if (this.mutationStore) this.mutationStore = Object.create(null);
        return this.cache.reset(options);
    };
    QueryManager1.prototype.getObservableQueries = function(include) {
        var _this = this;
        if (include === void 0) include = "active";
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) include.forEach(function(desc) {
            if (typeof desc === "string") queryNamesAndDocs.set(desc, false);
            else if (_indexJs3.isDocumentNode(desc)) queryNamesAndDocs.set(_this.transform(desc).document, false);
            else if (_indexJs3.isNonNullObject(desc) && desc.query) legacyQueryOptions.add(desc);
        });
        this.queries.forEach(function(_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) return;
                if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document && queryNamesAndDocs.has(document)) {
                    queries.set(queryId, oq);
                    if (queryName) queryNamesAndDocs.set(queryName, true);
                    if (document) queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) legacyQueryOptions.forEach(function(options) {
            var queryId = _indexJs3.makeUniqueId("legacyOneTimeQuery");
            var queryInfo = _this.getQuery(queryId).init({
                document: options.query,
                variables: options.variables
            });
            var oq = new _observableQueryJs.ObservableQuery({
                queryManager: _this,
                queryInfo: queryInfo,
                options: _tslib.__assign(_tslib.__assign({}, options), {
                    fetchPolicy: "network-only"
                })
            });
            _indexJs.invariant(oq.queryId === queryId);
            queryInfo.setObservableQuery(oq);
            queries.set(queryId, oq);
        });
        if (__DEV__ && queryNamesAndDocs.size) queryNamesAndDocs.forEach(function(included, nameOrDoc) {
            if (!included) __DEV__ && _indexJs.invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        });
        return queries;
    };
    QueryManager1.prototype.reFetchObservableQueries = function(includeStandby) {
        var _this = this;
        if (includeStandby === void 0) includeStandby = false;
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") observableQueryPromises.push(observableQuery.refetch());
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager1.prototype.setObservableQuery = function(observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager1.prototype.startGraphQLSubscription = function(_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables1 = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables1 = this.getVariables(query, variables1);
        var makeObservable = function(variables) {
            return _this.getObservableFromLink(query, context, variables).map(function(result) {
                if (fetchPolicy !== 'no-cache') {
                    if (_queryInfoJs.shouldWriteResult(result, errorPolicy)) _this.cache.write({
                        query: query,
                        result: result.data,
                        dataId: 'ROOT_SUBSCRIPTION',
                        variables: variables
                    });
                    _this.broadcastQueries();
                }
                if (_indexJs3.graphQLResultHasError(result)) throw new _indexJs4.ApolloError({
                    graphQLErrors: result.errors
                });
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables1, context).then(makeObservable);
            return new _indexJs3.Observable(function(observer) {
                var sub = null;
                observablePromise_1.then(function(observable) {
                    return sub = observable.subscribe(observer);
                }, observer.error);
                return function() {
                    return sub && sub.unsubscribe();
                };
            });
        }
        return makeObservable(variables1);
    };
    QueryManager1.prototype.stopQuery = function(queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager1.prototype.stopQueryNoBroadcast = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager1.prototype.removeQuery = function(queryId) {
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
            this.getQuery(queryId).stop();
            this.queries.delete(queryId);
        }
    };
    QueryManager1.prototype.broadcastQueries = function() {
        if (this.onBroadcast) this.onBroadcast();
        this.queries.forEach(function(info) {
            return info.notify();
        });
    };
    QueryManager1.prototype.getLocalState = function() {
        return this.localState;
    };
    QueryManager1.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication;
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: _indexJs3.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(_tslib.__assign(_tslib.__assign({}, context), {
                    forceFetch: !deduplication
                }))
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = _indexJs2.canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new _indexJs3.Concast([
                        _indexJs1.execute(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function() {
                        if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) inFlightLinkObservables_1.delete(serverQuery);
                    });
                }
            } else observable = new _indexJs3.Concast([
                _indexJs1.execute(link, operation)
            ]);
        } else {
            observable = new _indexJs3.Concast([
                _indexJs3.Observable.of({
                    data: {}
                })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) observable = _indexJs3.asyncMap(observable, function(result) {
            return _this.localState.runResolvers({
                document: clientQuery,
                remoteResult: result,
                context: context,
                variables: variables
            });
        });
        return observable;
    };
    QueryManager1.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return _indexJs3.asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result) {
            var hasErrors = _indexJs3.isNonEmptyArray(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") throw queryInfo.markError(new _indexJs4.ApolloError({
                    graphQLErrors: result.errors
                }));
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: _networkStatusJs.NetworkStatus.ready
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
                aqr.networkStatus = _networkStatusJs.NetworkStatus.error;
            }
            return aqr;
        }, function(networkError) {
            var error = _indexJs4.isApolloError(networkError) ? networkError : new _indexJs4.ApolloError({
                networkError: networkError
            });
            if (requestId >= queryInfo.lastRequestId) queryInfo.markError(error);
            throw error;
        });
    };
    QueryManager1.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) networkStatus = _networkStatusJs.NetworkStatus.loading;
        var query = this.transform(options.query).document;
        var variables2 = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var defaults = this.defaultOptions.watchQuery;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables2,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context
        });
        var fromVariables = function(variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function(reason) {
            setTimeout(function() {
                return concast.cancel(reason);
            });
        });
        var concast = new _indexJs3.Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
        concast.cleanup(function() {
            _this.fetchCancelFns.delete(queryId);
            if (queryInfo.observableQuery) queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
        });
        return concast;
    };
    QueryManager1.prototype.refetchQueries = function(_a1) {
        var _this = this;
        var updateCache = _a1.updateCache, include = _a1.include, _b = _a1.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a1.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? _indexJs3.makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a1.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) this.getObservableQueries(include).forEach(function(oq, queryId) {
            includedQueriesById.set(queryId, {
                oq: oq,
                lastDiff: _this.getQuery(queryId).getDiff()
            });
        });
        var results = new Map;
        if (updateCache) this.cache.batch({
            update: updateCache,
            optimistic: optimistic && removeOptimistic || false,
            removeOptimistic: removeOptimistic,
            onWatchUpdated: function(watch, diff, lastDiff) {
                var oq = watch.watcher instanceof _queryInfoJs.QueryInfo && watch.watcher.observableQuery;
                if (oq) {
                    if (onQueryUpdated) {
                        includedQueriesById.delete(oq.queryId);
                        var result = onQueryUpdated(oq, diff, lastDiff);
                        if (result === true) result = oq.refetch();
                        if (result !== false) results.set(oq, result);
                        return result;
                    }
                    if (onQueryUpdated !== null) includedQueriesById.set(oq.queryId, {
                        oq: oq,
                        lastDiff: lastDiff,
                        diff: diff
                    });
                }
            }
        });
        if (includedQueriesById.size) includedQueriesById.forEach(function(_a, queryId) {
            var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
            var result;
            if (onQueryUpdated) {
                if (!diff) {
                    var info = oq["queryInfo"];
                    info.reset();
                    diff = info.getDiff();
                }
                result = onQueryUpdated(oq, diff, lastDiff);
            }
            if (!onQueryUpdated || result === true) result = oq.refetch();
            if (result !== false) results.set(oq, result);
            if (queryId.indexOf("legacyOneTimeQuery") >= 0) _this.stopQueryNoBroadcast(queryId);
        });
        if (removeOptimistic) this.cache.removeOptimistic(removeOptimistic);
        return results;
    };
    QueryManager1.prototype.fetchQueryByPolicy = function(queryInfo, _a, networkStatus1) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: this.transform(query).document,
            variables: variables,
            networkStatus: networkStatus1
        });
        var readCache = function() {
            return queryInfo.getDiff(variables);
        };
        var resultsFromCache = function(diff, networkStatus) {
            if (networkStatus === void 0) networkStatus = queryInfo.networkStatus || _networkStatusJs.NetworkStatus.loading;
            var data1 = diff.result;
            if (__DEV__ && !returnPartialData && !_equality.equal(data1, {})) _observableQueryJs.logMissingFieldErrors(diff.missing);
            var fromData = function(data) {
                return _indexJs3.Observable.of(_tslib.__assign({
                    data: data,
                    loading: _networkStatusJs.isNetworkRequestInFlight(networkStatus),
                    networkStatus: networkStatus
                }, diff.complete ? null : {
                    partial: true
                }));
            };
            if (data1 && _this.transform(query).hasForcedResolvers) return _this.localState.runResolvers({
                document: query,
                remoteResult: {
                    data: data1
                },
                context: context,
                variables: variables,
                onlyRunForcedResolvers: true
            }).then(function(resolved) {
                return fromData(resolved.data || void 0);
            });
            return fromData(data1);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus1 === _networkStatusJs.NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
        var resultsFromLink = function() {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus1 && _networkStatusJs.isNetworkRequestInFlight(networkStatus1);
        switch(fetchPolicy){
            default:
            case "cache-first":
                var diff1 = readCache();
                if (diff1.complete) return [
                    resultsFromCache(diff1, queryInfo.markReady()), 
                ];
                if (returnPartialData || shouldNotify) return [
                    resultsFromCache(diff1),
                    resultsFromLink(), 
                ];
                return [
                    resultsFromLink(), 
                ];
            case "cache-and-network":
                var diff1 = readCache();
                if (diff1.complete || returnPartialData || shouldNotify) return [
                    resultsFromCache(diff1),
                    resultsFromLink(), 
                ];
                return [
                    resultsFromLink(), 
                ];
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()), 
                ];
            case "network-only":
                if (shouldNotify) return [
                    resultsFromCache(readCache()),
                    resultsFromLink(), 
                ];
                return [
                    resultsFromLink()
                ];
            case "no-cache":
                if (shouldNotify) return [
                    resultsFromCache(queryInfo.getDiff()),
                    resultsFromLink(), 
                ];
                return [
                    resultsFromLink()
                ];
            case "standby":
                return [];
        }
    };
    QueryManager1.prototype.getQuery = function(queryId) {
        if (queryId && !this.queries.has(queryId)) this.queries.set(queryId, new _queryInfoJs.QueryInfo(this, queryId));
        return this.queries.get(queryId);
    };
    QueryManager1.prototype.prepareContext = function(context) {
        if (context === void 0) context = {};
        var newContext = this.localState.prepareContext(context);
        return _tslib.__assign(_tslib.__assign({}, newContext), {
            clientAwareness: this.clientAwareness
        });
    };
    return QueryManager1;
}();

},{"tslib":"lRdW5","../utilities/globals/index.js":"60qk9","@wry/equality":"eBW80","../link/core/index.js":"4XY3c","../cache/index.js":"dKdrp","../utilities/index.js":"k51w7","../errors/index.js":"2jvqQ","./ObservableQuery.js":"7svFE","./networkStatus.js":"2bxcN","./LocalState.js":"jTcXn","./QueryInfo.js":"iueub","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBW80":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>equal
);
parcelHelpers.export(exports, "equal", ()=>equal
);
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */ function equal(a, b) {
    try {
        return check(a, b);
    } finally{
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) return true;
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) return false;
    switch(aTag){
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length) return false;
        // Fall through to object case...
        case '[object Object]':
            if (previouslyCompared(a, b)) return true;
            var aKeys = definedKeys(a);
            var bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length) return false;
            // Now make sure they have the same keys.
            for(var k = 0; k < keyCount; ++k){
                if (!hasOwnProperty.call(b, aKeys[k])) return false;
            }
            // Finally, check deep equality of all child properties.
            for(var k = 0; k < keyCount; ++k){
                var key = aKeys[k];
                if (!check(a[key], b[key])) return false;
            }
            return true;
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a) return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]':
            if (a.size !== b.size) return false;
            if (previouslyCompared(a, b)) return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while(true){
                var info = aIterator.next();
                if (info.done) break;
                // If a instanceof Set, aValue === aKey.
                var _a1 = info.value, aKey = _a1[0], aValue = _a1[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) return false;
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) return false;
            }
            return true;
        case '[object Uint16Array]':
        case '[object Uint8Array]':
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]':
            var len = a.byteLength;
            if (len === b.byteLength) {
                while((len--) && a[len] === b[len]);
            }
            return len === -1;
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]':
            var aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) return false;
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b)) return true;
    } else previousComparisons.set(a, bSet = new Set);
    bSet.add(b);
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKdrp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloCache", ()=>_cacheJs.ApolloCache
);
parcelHelpers.export(exports, "Cache", ()=>_cacheJs1.Cache
);
parcelHelpers.export(exports, "MissingFieldError", ()=>_commonJs.MissingFieldError
);
parcelHelpers.export(exports, "isReference", ()=>_indexJs1.isReference
);
parcelHelpers.export(exports, "makeReference", ()=>_indexJs1.makeReference
);
parcelHelpers.export(exports, "EntityStore", ()=>_entityStoreJs.EntityStore
);
parcelHelpers.export(exports, "fieldNameFromStoreName", ()=>_helpersJs.fieldNameFromStoreName
);
parcelHelpers.export(exports, "defaultDataIdFromObject", ()=>_helpersJs.defaultDataIdFromObject
);
parcelHelpers.export(exports, "InMemoryCache", ()=>_inMemoryCacheJs.InMemoryCache
);
parcelHelpers.export(exports, "makeVar", ()=>_reactiveVarsJs.makeVar
);
parcelHelpers.export(exports, "cacheSlot", ()=>_reactiveVarsJs.cacheSlot
);
parcelHelpers.export(exports, "Policies", ()=>_policiesJs.Policies
);
parcelHelpers.export(exports, "canonicalStringify", ()=>_objectCanonJs.canonicalStringify
);
var _indexJs = require("../utilities/globals/index.js");
var _cacheJs = require("./core/cache.js");
var _cacheJs1 = require("./core/types/Cache.js");
var _commonJs = require("./core/types/common.js");
var _indexJs1 = require("../utilities/index.js");
var _entityStoreJs = require("./inmemory/entityStore.js");
var _helpersJs = require("./inmemory/helpers.js");
var _inMemoryCacheJs = require("./inmemory/inMemoryCache.js");
var _reactiveVarsJs = require("./inmemory/reactiveVars.js");
var _policiesJs = require("./inmemory/policies.js");
var _objectCanonJs = require("./inmemory/object-canon.js");
var _typesJs = require("./inmemory/types.js");
parcelHelpers.exportAll(_typesJs, exports);

},{"../utilities/globals/index.js":"60qk9","./core/cache.js":"9CL2F","./core/types/Cache.js":"3uqgb","./core/types/common.js":"iPpQ4","../utilities/index.js":"k51w7","./inmemory/entityStore.js":"k8186","./inmemory/helpers.js":"euVKX","./inmemory/inMemoryCache.js":"kIdrg","./inmemory/reactiveVars.js":"f4hBf","./inmemory/policies.js":"i310Z","./inmemory/object-canon.js":"606cR","./inmemory/types.js":"2SXma","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CL2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloCache", ()=>ApolloCache
);
var _tslib = require("tslib");
var _optimism = require("optimism");
var _indexJs = require("../../utilities/index.js");
var ApolloCache = function() {
    function ApolloCache1() {
        this.getFragmentDoc = _optimism.wrap(_indexJs.getFragmentQueryDocument);
    }
    ApolloCache1.prototype.batch = function(options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function() {
            return updateResult = options.update(_this);
        }, optimisticId);
        return updateResult;
    };
    ApolloCache1.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache1.prototype.transformDocument = function(document) {
        return document;
    };
    ApolloCache1.prototype.identify = function(object) {
        return;
    };
    ApolloCache1.prototype.gc = function() {
        return [];
    };
    ApolloCache1.prototype.modify = function(options) {
        return false;
    };
    ApolloCache1.prototype.transformForLink = function(document) {
        return document;
    };
    ApolloCache1.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) optimistic = !!options.optimistic;
        return this.read(_tslib.__assign(_tslib.__assign({}, options), {
            rootId: options.id || 'ROOT_QUERY',
            optimistic: optimistic
        }));
    };
    ApolloCache1.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) optimistic = !!options.optimistic;
        return this.read(_tslib.__assign(_tslib.__assign({}, options), {
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            rootId: options.id,
            optimistic: optimistic
        }));
    };
    ApolloCache1.prototype.writeQuery = function(_a) {
        var id = _a.id, data = _a.data, options = _tslib.__rest(_a, [
            "id",
            "data"
        ]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data
        }));
    };
    ApolloCache1.prototype.writeFragment = function(_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = _tslib.__rest(_a, [
            "id",
            "data",
            "fragment",
            "fragmentName"
        ]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data
        }));
    };
    ApolloCache1.prototype.updateQuery = function(options, update) {
        return this.batch({
            update: function(cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null) return value;
                cache.writeQuery(_tslib.__assign(_tslib.__assign({}, options), {
                    data: data
                }));
                return data;
            }
        });
    };
    ApolloCache1.prototype.updateFragment = function(options, update) {
        return this.batch({
            update: function(cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null) return value;
                cache.writeFragment(_tslib.__assign(_tslib.__assign({}, options), {
                    data: data
                }));
                return data;
            }
        });
    };
    return ApolloCache1;
}();

},{"tslib":"lRdW5","optimism":"2p9hL","../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2p9hL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyTrie", ()=>_trie.Trie
);
parcelHelpers.export(exports, "asyncFromGen", ()=>_context.asyncFromGen
);
parcelHelpers.export(exports, "bindContext", ()=>_context.bind
);
parcelHelpers.export(exports, "noContext", ()=>_context.noContext
);
parcelHelpers.export(exports, "setTimeout", ()=>_context.setTimeout
);
parcelHelpers.export(exports, "defaultMakeCacheKey", ()=>defaultMakeCacheKey
);
parcelHelpers.export(exports, "dep", ()=>dep
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
var _trie = require("@wry/trie");
var _context = require("@wry/context");
function defaultDispose() {}
var Cache = /** @class */ function() {
    function Cache1(max, dispose) {
        if (max === void 0) max = Infinity;
        if (dispose === void 0) dispose = defaultDispose;
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache1.prototype.has = function(key) {
        return this.map.has(key);
    };
    Cache1.prototype.get = function(key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache1.prototype.getNode = function(key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) newer.older = older;
            if (older) older.newer = newer;
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) this.oldest = newer;
        }
        return node;
    };
    Cache1.prototype.set = function(key, value) {
        var node = this.getNode(key);
        if (node) return node.value = value;
        node = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) this.newest.newer = node;
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache1.prototype.clean = function() {
        while(this.oldest && this.map.size > this.max)this.delete(this.oldest.key);
    };
    Cache1.prototype.delete = function(key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) this.newest = node.older;
            if (node === this.oldest) this.oldest = node.newer;
            if (node.newer) node.newer.older = node.older;
            if (node.older) node.older.newer = node.newer;
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache1;
}();
var parentEntrySlot = new _context.Slot();
var _a;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var // This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a = Array.from, _a === void 0 ? function(collection) {
    var array = [];
    collection.forEach(function(item) {
        return array.push(item);
    });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) throw new Error(optionalMessage || "assertion failure");
}
function valueIs(a, b) {
    var len = a.length;
    return(// Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch(value.length){
        case 0:
            throw new Error("unknown value");
        case 1:
            return value[0];
        case 2:
            throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ function() {
    function Entry1(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry1.count;
    }
    Entry1.prototype.peek = function() {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry1.prototype.recompute = function(args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
    };
    Entry1.prototype.setDirty = function() {
        if (this.dirty) return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry1.prototype.dispose = function() {
        var _this = this;
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, function(parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry1.prototype.forget = function() {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    };
    Entry1.prototype.dependOn = function(dep1) {
        dep1.add(this);
        if (!this.deps) this.deps = emptySetPool.pop() || new Set();
        this.deps.add(dep1);
    };
    Entry1.prototype.forgetDeps = function() {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function(dep2) {
                return dep2.delete(_this);
            });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry1.count = 0;
    return Entry1;
}();
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) parent.childValues.set(child, []);
        if (mightBeDirty(child)) reportDirtyChild(parent, child);
        else reportCleanChild(parent, child);
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [
        entry,
        args
    ]);
    if (maybeSubscribe(entry, args)) // If we successfully recomputed entry.value and did not fail to
    // (re)subscribe, then this Entry is no longer explicitly dirty.
    setClean(entry);
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
    } catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) // This Entry may still have dirty children, in which case we can't
    // let our parents know we're clean just yet.
    return;
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for(var i = 0; i < parentCount; ++i)callback(parents[i], child);
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) parent.dirtyChildren = emptySetPool.pop() || new Set;
    else if (parent.dirtyChildren.has(child)) // If we already know this child is dirty, then we must have already
    // informed our own parents that we are dirty, so we can terminate
    // the recursion early.
    return;
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) reportDirty(parent);
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) parent.childValues.set(child, valueCopy(child.value));
    else if (!valueIs(childValue, child.value)) parent.setDirty();
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) return;
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) emptySetPool.push(dc);
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) parent.childValues.forEach(function(_value, child) {
        forgetChild(parent, child);
    });
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") try {
        maybeUnsubscribe(entry); // Prevent double subscriptions.
        entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
        // If this Entry has a subscribe function and it threw an exception
        // (or an unsubscribe function it previously returned now throws),
        // return false to indicate that we were not able to subscribe (or
        // unsubscribe), and this Entry should remain dirty.
        entry.setDirty();
        return false;
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}
var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true
};
function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) depsByKey.set(key, dep_1 = new Set);
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep3 = depsByKey.get(key);
        if (dep3) {
            var m_1 = entryMethodName && hasOwnProperty.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
            // We have to use toArray(dep).forEach instead of dep.forEach, because
            // modifying a Set while iterating over it can cause elements in the Set
            // to be removed from the Set before they've been iterated over.
            toArray(dep3).forEach(function(entry) {
                return entry[m_1]();
            });
            depsByKey.delete(key);
            maybeUnsubscribe(dep3);
        }
    };
    return depend;
}
function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new _trie.Trie(typeof WeakMap === "function");
    return function() {
        return keyTrie.lookupArray(arguments);
    };
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) options = Object.create(null);
    var cache1 = new Cache(options.max || Math.pow(2, 16), function(entry) {
        return entry.dispose();
    });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
    var optimistic = function() {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) return originalFunction.apply(null, arguments);
        var entry = cache1.get(key);
        if (!entry) {
            cache1.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = function() {
                return cache1.delete(key);
            };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache1.set(key, entry);
        caches.add(cache1);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function(cache) {
                return cache.clean();
            });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function() {
            return cache1["map"].size;
        },
        configurable: false,
        enumerable: false
    });
    function dirtyKey(key) {
        var entry = cache1.get(key);
        if (entry) entry.setDirty();
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache1.get(key);
        if (entry) return entry.peek();
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache1.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}

},{"@wry/trie":"3yDRd","@wry/context":"fwdpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3yDRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Trie", ()=>Trie
);
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
var defaultMakeData = function() {
    return Object.create(null);
};
// Useful for processing arguments objects as well as arrays.
var _a = Array.prototype, forEach = _a.forEach, slice = _a.slice;
var Trie = /** @class */ function() {
    function Trie1(weakness, makeData) {
        if (weakness === void 0) weakness = true;
        if (makeData === void 0) makeData = defaultMakeData;
        this.weakness = weakness;
        this.makeData = makeData;
    }
    Trie1.prototype.lookup = function() {
        var array = [];
        for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
        return this.lookupArray(array);
    };
    Trie1.prototype.lookupArray = function(array) {
        var node = this;
        forEach.call(array, function(key) {
            return node = node.getChildTrie(key);
        });
        return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie1.prototype.getChildTrie = function(key) {
        var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child) map.set(key, child = new Trie1(this.weakness, this.makeData));
        return child;
    };
    return Trie1;
}();
function isObjRef(value) {
    switch(typeof value){
        case "object":
            if (value === null) break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fwdpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slot", ()=>Slot
);
parcelHelpers.export(exports, "asyncFromGen", ()=>asyncFromGen
);
parcelHelpers.export(exports, "bind", ()=>bind
);
parcelHelpers.export(exports, "noContext", ()=>noContext
);
parcelHelpers.export(exports, "setTimeout", ()=>setTimeoutWithContext
);
parcelHelpers.export(exports, "wrapYieldingFiberMethods", ()=>wrapYieldingFiberMethods
);
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function() {
    return /** @class */ function() {
        function Slot1() {
            // If you have a Slot object, you can find out its slot.id, but you cannot
            // guess the slot.id of a Slot you don't have access to, thanks to the
            // randomized suffix.
            this.id = [
                "slot",
                idCounter++,
                Date.now(),
                Math.random().toString(36).slice(2), 
            ].join(":");
        }
        Slot1.prototype.hasValue = function() {
            for(var context_1 = currentContext; context_1; context_1 = context_1.parent)// We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE) break;
                if (context_1 !== currentContext) // Cache the value in currentContext.slots so the next lookup will
                // be faster. This caching is safe because the tree of contexts and
                // the values of the slots are logically immutable.
                currentContext.slots[this.id] = value;
                return true;
            }
            if (currentContext) // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
            return false;
        };
        Slot1.prototype.getValue = function() {
            if (this.hasValue()) return currentContext.slots[this.id];
        };
        Slot1.prototype.withValue = function(value, callback, // Given the prevalence of arrow functions, specifying arguments is likely
        // to be much more common than specifying `this`, hence this ordering:
        args, thisArg) {
            var _a;
            var slots = (_a = {
                __proto__: null
            }, _a[this.id] = value, _a);
            var parent = currentContext;
            currentContext = {
                parent: parent,
                slots: slots
            };
            try {
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            } finally{
                currentContext = parent;
            }
        };
        // Capture the current context and wrap a callback function so that it
        // reestablishes the captured context when called.
        Slot1.bind = function(callback) {
            var context = currentContext;
            return function() {
                var saved = currentContext;
                try {
                    currentContext = context;
                    return callback.apply(this, arguments);
                } finally{
                    currentContext = saved;
                }
            };
        };
        // Immediately run a callback function without any captured context.
        Slot1.noContext = function(callback, // Given the prevalence of arrow functions, specifying arguments is likely
        // to be much more common than specifying `this`, hence this ordering:
        args, thisArg) {
            if (currentContext) {
                var saved = currentContext;
                try {
                    currentContext = null;
                    // Function.prototype.apply allows the arguments array argument to be
                    // omitted or undefined, so args! is fine here.
                    return callback.apply(thisArg, args);
                } finally{
                    currentContext = saved;
                }
            } else return callback.apply(thisArg, args);
        };
        return Slot1;
    }();
};
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function() {
    var Slot2 = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot2,
            enumerable: false,
            writable: false,
            configurable: false
        });
    } finally{
        return Slot2;
    }
}();
var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function() {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function(resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                } catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) result.value.then(next, result.done ? reject : invokeThrow);
                else next(result.value);
            }
            var invokeNext = function(value) {
                return invoke(boundNext, value);
            };
            var invokeThrow = function(error) {
                return invoke(boundThrow, error);
            };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function(obj, method) {
            var fn = obj[method];
            obj[method] = function() {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uqgb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cache", ()=>Cache
);
var Cache;
Cache = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPpQ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MissingFieldError", ()=>MissingFieldError
);
var MissingFieldError = function() {
    function MissingFieldError1(message, path, query, variables) {
        this.message = message;
        this.path = path;
        this.query = query;
        this.variables = variables;
    }
    return MissingFieldError1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8186":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EntityStore", ()=>EntityStore
);
parcelHelpers.export(exports, "maybeDependOnExistenceOfEntity", ()=>maybeDependOnExistenceOfEntity
);
parcelHelpers.export(exports, "supportsResultCaching", ()=>supportsResultCaching
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _optimism = require("optimism");
var _equality = require("@wry/equality");
var _trie = require("@wry/trie");
var _indexJs1 = require("../../utilities/index.js");
var _helpersJs = require("./helpers.js");
var DELETE = Object.create(null);
var delModifier = function() {
    return DELETE;
};
var INVALIDATE = Object.create(null);
var EntityStore = function() {
    function EntityStore1(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function(objectOrReference, storeFieldName) {
            return _indexJs1.maybeDeepFreeze(_indexJs1.isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
        };
        this.canRead = function(objOrRef) {
            return _indexJs1.isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
        };
        this.toReference = function(objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") return _indexJs1.makeReference(objOrIdOrRef);
            if (_indexJs1.isReference(objOrIdOrRef)) return objOrIdOrRef;
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = _indexJs1.makeReference(id);
                if (mergeIntoStore) _this.merge(id, objOrIdOrRef);
                return ref;
            }
        };
    }
    EntityStore1.prototype.toObject = function() {
        return _tslib.__assign({}, this.data);
    };
    EntityStore1.prototype.has = function(dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore1.prototype.get = function(dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (_helpersJs.hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && _helpersJs.hasOwn.call(storeObject, fieldName)) return storeObject[fieldName];
        }
        if (fieldName === "__typename" && _helpersJs.hasOwn.call(this.policies.rootTypenamesById, dataId)) return this.policies.rootTypenamesById[dataId];
        if (this instanceof Layer) return this.parent.get(dataId, fieldName);
    };
    EntityStore1.prototype.lookup = function(dataId, dependOnExistence) {
        if (dependOnExistence) this.group.depend(dataId, "__exists");
        if (_helpersJs.hasOwn.call(this.data, dataId)) return this.data[dataId];
        if (this instanceof Layer) return this.parent.lookup(dataId, dependOnExistence);
        if (this.policies.rootTypenamesById[dataId]) return Object.create(null);
    };
    EntityStore1.prototype.merge = function(older, newer) {
        var _this = this;
        var dataId;
        if (_indexJs1.isReference(older)) older = older.__ref;
        if (_indexJs1.isReference(newer)) newer = newer.__ref;
        var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
        var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
        if (!incoming) return;
        __DEV__ ? _indexJs.invariant(typeof dataId === "string", "store.merge expects a string ID") : _indexJs.invariant(typeof dataId === "string", 1);
        var merged = new _indexJs1.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing) fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function(storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = _helpersJs.fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) fieldsToDirty_1[fieldName] = 1;
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) delete merged[storeFieldName];
                    }
                });
                if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) delete fieldsToDirty_1.__typename;
                Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
                    return _this.group.dirty(dataId, fieldName);
                });
            }
        }
    };
    EntityStore1.prototype.modify = function(dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: _indexJs1.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function(fieldNameOrOptions, from) {
                    return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                        fieldName: fieldNameOrOptions,
                        from: from || _indexJs1.makeReference(dataId)
                    } : fieldNameOrOptions, {
                        store: _this
                    });
                }
            };
            Object.keys(storeObject).forEach(function(storeFieldName) {
                var fieldName = _helpersJs.fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0) return;
                var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE : modify(_indexJs1.maybeDeepFreeze(fieldValue), _tslib.__assign(_tslib.__assign({}, sharedDetails_1), {
                        fieldName: fieldName,
                        storeFieldName: storeFieldName,
                        storage: _this.getStorage(dataId, storeFieldName)
                    }));
                    if (newValue === INVALIDATE) _this.group.dirty(dataId, storeFieldName);
                    else {
                        if (newValue === DELETE) newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) allDeleted_1 = false;
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) this.data[dataId] = void 0;
                    else delete this.data[dataId];
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore1.prototype.delete = function(dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({
                typename: typename,
                fieldName: fieldName,
                args: args
            }) : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {}, _a[storeFieldName] = delModifier, _a) : delModifier);
        }
        return false;
    };
    EntityStore1.prototype.evict = function(options, limit) {
        var evicted = false;
        if (options.id) {
            if (_helpersJs.hasOwn.call(this.data, options.id)) evicted = this.delete(options.id, options.fieldName, options.args);
            if (this instanceof Layer && this !== limit) evicted = this.parent.evict(options, limit) || evicted;
            if (options.fieldName || evicted) this.group.dirty(options.id, options.fieldName || "__exists");
        }
        return evicted;
    };
    EntityStore1.prototype.clear = function() {
        this.replace(null);
    };
    EntityStore1.prototype.extract = function() {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function(id) {
            if (!_helpersJs.hasOwn.call(_this.policies.rootTypenamesById, id)) extraRootIds.push(id);
        });
        if (extraRootIds.length) obj.__META = {
            extraRootIds: extraRootIds.sort()
        };
        return obj;
    };
    EntityStore1.prototype.replace = function(newData) {
        var _this = this;
        Object.keys(this.data).forEach(function(dataId) {
            if (!(newData && _helpersJs.hasOwn.call(newData, dataId))) _this.delete(dataId);
        });
        if (newData) {
            var __META = newData.__META, rest_1 = _tslib.__rest(newData, [
                "__META"
            ]);
            Object.keys(rest_1).forEach(function(dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) __META.extraRootIds.forEach(this.retain, this);
        }
    };
    EntityStore1.prototype.retain = function(rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore1.prototype.release = function(rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count) delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore1.prototype.getRootIdSet = function(ids) {
        if (ids === void 0) ids = new Set();
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) this.parent.getRootIdSet(ids);
        else Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        return ids;
    };
    EntityStore1.prototype.gc = function() {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function(id) {
            if (_helpersJs.hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while(root_1 instanceof Layer)root_1 = root_1.parent;
            idsToRemove.forEach(function(id) {
                return root_1.delete(id);
            });
        }
        return idsToRemove;
    };
    EntityStore1.prototype.findChildRefIds = function(dataId) {
        if (!_helpersJs.hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root) return found_1;
            var workSet_1 = new Set([
                root
            ]);
            workSet_1.forEach(function(obj) {
                if (_indexJs1.isReference(obj)) found_1[obj.__ref] = true;
                if (_indexJs1.isNonNullObject(obj)) Object.keys(obj).forEach(function(key) {
                    var child = obj[key];
                    if (_indexJs1.isNonNullObject(child)) workSet_1.add(child);
                });
            });
        }
        return this.refs[dataId];
    };
    EntityStore1.prototype.makeCacheKey = function() {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore1;
}();
var CacheGroup = function() {
    function CacheGroup1(caching, parent) {
        if (parent === void 0) parent = null;
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup1.prototype.resetCaching = function() {
        this.d = this.caching ? _optimism.dep() : null;
        this.keyMaker = new _trie.Trie(_indexJs1.canUseWeakMap);
    };
    CacheGroup1.prototype.depend = function(dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = _helpersJs.fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) this.d(makeDepKey(dataId, fieldName));
            if (this.parent) this.parent.depend(dataId, storeFieldName);
        }
    };
    CacheGroup1.prototype.dirty = function(dataId, storeFieldName) {
        if (this.d) this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    };
    return CacheGroup1;
}();
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) store.group.depend(entityId, "__exists");
}
(function(EntityStore2) {
    var Root1 = function(_super) {
        _tslib.__extends(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new _trie.Trie(_indexJs1.canUseWeakMap);
            if (seed) _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function(layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function() {
            return this;
        };
        Root.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore2);
    EntityStore2.Root = Root1;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
    _tslib.__extends(Layer1, _super);
    function Layer1(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer1.prototype.addLayer = function(layerId, replay) {
        return new Layer1(layerId, this, replay, this.group);
    };
    Layer1.prototype.removeLayer = function(layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) Object.keys(this.data).forEach(function(dataId) {
                var ownStoreObject = _this.data[dataId];
                var parentStoreObject = parent["lookup"](dataId);
                if (!parentStoreObject) _this.delete(dataId);
                else if (!ownStoreObject) {
                    _this.group.dirty(dataId, "__exists");
                    Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                        _this.group.dirty(dataId, storeFieldName);
                    });
                } else if (ownStoreObject !== parentStoreObject) Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                    if (!_equality.equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) _this.group.dirty(dataId, storeFieldName);
                });
            });
            return parent;
        }
        if (parent === this.parent) return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer1.prototype.toObject = function() {
        return _tslib.__assign(_tslib.__assign({}, this.parent.toObject()), this.data);
    };
    Layer1.prototype.findChildRefIds = function(dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return _helpersJs.hasOwn.call(this.data, dataId) ? _tslib.__assign(_tslib.__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer1.prototype.getStorage = function() {
        var p = this.parent;
        while(p.parent)p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer1;
}(EntityStore);
var Stump = function(_super) {
    _tslib.__extends(Stump1, _super);
    function Stump1(root) {
        return _super.call(this, "EntityStore.Stump", root, function() {}, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump1.prototype.removeLayer = function() {
        return this;
    };
    Stump1.prototype.merge = function() {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump1;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return _equality.equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","optimism":"2p9hL","@wry/equality":"eBW80","@wry/trie":"3yDRd","../../utilities/index.js":"k51w7","./helpers.js":"euVKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euVKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn
);
parcelHelpers.export(exports, "defaultDataIdFromObject", ()=>defaultDataIdFromObject
);
parcelHelpers.export(exports, "normalizeConfig", ()=>normalizeConfig
);
parcelHelpers.export(exports, "shouldCanonizeResults", ()=>shouldCanonizeResults
);
parcelHelpers.export(exports, "getTypenameFromStoreObject", ()=>getTypenameFromStoreObject
);
parcelHelpers.export(exports, "TypeOrFieldNameRegExp", ()=>TypeOrFieldNameRegExp
);
parcelHelpers.export(exports, "fieldNameFromStoreName", ()=>fieldNameFromStoreName
);
parcelHelpers.export(exports, "selectionSetMatchesResult", ()=>selectionSetMatchesResult
);
parcelHelpers.export(exports, "storeValueIsStoreObject", ()=>storeValueIsStoreObject
);
parcelHelpers.export(exports, "makeProcessedFieldsMerger", ()=>makeProcessedFieldsMerger
);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
var _indexJs = require("../../utilities/index.js");
var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) context.keyObject = id !== void 0 ? {
            id: id
        } : _id !== void 0 ? {
            _id: _id
        } : void 0;
        if (id === void 0) id = _id;
        if (id !== void 0) return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false
};
function normalizeConfig(config) {
    return _indexJs.compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return _indexJs.isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (_indexJs.isNonNullObject(result)) return isArray(result) ? result.every(function(item) {
        return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
        if (_indexJs.isField(field) && _indexJs.shouldInclude(field, variables)) {
            var key = _indexJs.resultKeyNameFromField(field);
            return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
        }
        return true;
    });
    return false;
}
function storeValueIsStoreObject(value) {
    return _indexJs.isNonNullObject(value) && !_indexJs.isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
    return new _indexJs.DeepMerger;
}
var isArray = function(a) {
    return Array.isArray(a);
};

},{"../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIdrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InMemoryCache", ()=>InMemoryCache
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _fixPolyfillsJs = require("./fixPolyfills.js");
var _optimism = require("optimism");
var _equality = require("@wry/equality");
var _cacheJs = require("../core/cache.js");
var _commonJs = require("../core/types/common.js");
var _indexJs1 = require("../../utilities/index.js");
var _readFromStoreJs = require("./readFromStore.js");
var _writeToStoreJs = require("./writeToStore.js");
var _entityStoreJs = require("./entityStore.js");
var _reactiveVarsJs = require("./reactiveVars.js");
var _policiesJs = require("./policies.js");
var _helpersJs = require("./helpers.js");
var _objectCanonJs = require("./object-canon.js");
var InMemoryCache = function(_super) {
    _tslib.__extends(InMemoryCache1, _super);
    function InMemoryCache1(config) {
        if (config === void 0) config = {};
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = _reactiveVarsJs.makeVar;
        _this.txCount = 0;
        _this.config = _helpersJs.normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new _policiesJs.Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies
        });
        _this.init();
        return _this;
    }
    InMemoryCache1.prototype.init = function() {
        var rootStore = this.data = new _entityStoreJs.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache1.prototype.resetResultCache = function(resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new _writeToStoreJs.StoreWriter(this, this.storeReader = new _readFromStoreJs.StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: _helpersJs.shouldCanonizeResults(this.config),
            canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
        }));
        this.maybeBroadcastWatch = _optimism.wrap(function(c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (_entityStoreJs.supportsResultCaching(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, _objectCanonJs.canonicalStringify({
                        optimistic: optimistic,
                        rootId: rootId,
                        variables: variables
                    }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group, 
        ]).forEach(function(group) {
            return group.resetCaching();
        });
    };
    InMemoryCache1.prototype.restore = function(data) {
        this.init();
        if (data) this.data.replace(data);
        return this;
    };
    InMemoryCache1.prototype.extract = function(optimistic) {
        if (optimistic === void 0) optimistic = false;
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache1.prototype.read = function(options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore(_tslib.__assign(_tslib.__assign({}, options), {
                store: options.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: returnPartialData
            })).result || null;
        } catch (e) {
            if (e instanceof _commonJs.MissingFieldError) return null;
            throw e;
        }
    };
    InMemoryCache1.prototype.write = function(options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        } finally{
            if (!--this.txCount && options.broadcast !== false) this.broadcastWatches();
        }
    };
    InMemoryCache1.prototype.modify = function(options) {
        if (_helpersJs.hasOwn.call(options, "id") && !options.id) return false;
        var store = options.optimistic ? this.optimisticData : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        } finally{
            if (!--this.txCount && options.broadcast !== false) this.broadcastWatches();
        }
    };
    InMemoryCache1.prototype.diff = function(options) {
        return this.storeReader.diffQueryAgainstStore(_tslib.__assign(_tslib.__assign({}, options), {
            store: options.optimistic ? this.optimisticData : this.data,
            rootId: options.id || "ROOT_QUERY",
            config: this.config
        }));
    };
    InMemoryCache1.prototype.watch = function(watch) {
        var _this = this;
        if (!this.watches.size) _reactiveVarsJs.recallCache(this);
        this.watches.add(watch);
        if (watch.immediate) this.maybeBroadcastWatch(watch);
        return function() {
            if (_this.watches.delete(watch) && !_this.watches.size) _reactiveVarsJs.forgetCache(_this);
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache1.prototype.gc = function(options) {
        _objectCanonJs.canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) this.resetResultCache(options.resetResultIdentities);
            else if (options.resetResultIdentities) this.storeReader.resetCanon();
        }
        return ids;
    };
    InMemoryCache1.prototype.retain = function(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache1.prototype.release = function(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache1.prototype.identify = function(object) {
        if (_indexJs1.isReference(object)) return object.__ref;
        try {
            return this.policies.identify(object)[0];
        } catch (e) {
            __DEV__ && _indexJs.invariant.warn(e);
        }
    };
    InMemoryCache1.prototype.evict = function(options) {
        if (!options.id) {
            if (_helpersJs.hasOwn.call(options, "id")) return false;
            options = _tslib.__assign(_tslib.__assign({}, options), {
                id: "ROOT_QUERY"
            });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        } finally{
            if (!--this.txCount && options.broadcast !== false) this.broadcastWatches();
        }
    };
    InMemoryCache1.prototype.reset = function(options) {
        var _this = this;
        this.init();
        _objectCanonJs.canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function(watch) {
                return _this.maybeBroadcastWatch.forget(watch);
            });
            this.watches.clear();
            _reactiveVarsJs.forgetCache(this);
        } else this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache1.prototype.removeOptimistic = function(idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache1.prototype.batch = function(options) {
        var _this = this;
        var update = options.update, _a1 = options.optimistic, optimistic = _a1 === void 0 ? true : _a1, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function(layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) _this.data = _this.optimisticData = layer;
            try {
                return updateResult = update(_this);
            } finally{
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) this.broadcastWatches(_tslib.__assign(_tslib.__assign({}, options), {
            onWatchUpdated: function(watch) {
                alreadyDirty.add(watch);
                return false;
            }
        }));
        if (typeof optimistic === 'string') this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        else if (optimistic === false) perform(this.data);
        else perform();
        if (typeof removeOptimistic === "string") this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(_tslib.__assign(_tslib.__assign({}, options), {
                onWatchUpdated: function(watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) alreadyDirty.delete(watch);
                    return result;
                }
            }));
            if (alreadyDirty.size) alreadyDirty.forEach(function(watch) {
                return _this.maybeBroadcastWatch.dirty(watch);
            });
        } else this.broadcastWatches(options);
        return updateResult;
    };
    InMemoryCache1.prototype.performTransaction = function(update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || optimisticId !== null
        });
    };
    InMemoryCache1.prototype.transformDocument = function(document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = _indexJs1.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache1.prototype.broadcastWatches = function(options) {
        var _this = this;
        if (!this.txCount) this.watches.forEach(function(c) {
            return _this.maybeBroadcastWatch(c, options);
        });
    };
    InMemoryCache1.prototype.broadcastWatch = function(c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic && typeof options.optimistic === "string") diff.fromOptimisticTransaction = true;
            if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) return;
        }
        if (!lastDiff || !_equality.equal(lastDiff.result, diff.result)) c.callback(c.lastDiff = diff, lastDiff);
    };
    return InMemoryCache1;
}(_cacheJs.ApolloCache);

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","./fixPolyfills.js":"2nueo","optimism":"2p9hL","@wry/equality":"eBW80","../core/cache.js":"9CL2F","../core/types/common.js":"iPpQ4","../../utilities/index.js":"k51w7","./readFromStore.js":"fUa3w","./writeToStore.js":"2CfdT","./entityStore.js":"k8186","./reactiveVars.js":"f4hBf","./policies.js":"i310Z","./helpers.js":"euVKX","./object-canon.js":"606cR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nueo":[function(require,module,exports) {

},{}],"fUa3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreReader", ()=>StoreReader
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _optimism = require("optimism");
var _indexJs1 = require("../../utilities/index.js");
var _entityStoreJs = require("./entityStore.js");
var _helpersJs = require("./helpers.js");
var _commonJs = require("../core/types/common.js");
var _objectCanonJs = require("./object-canon.js");
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults, 
    ];
}
var StoreReader = function() {
    function StoreReader1(config) {
        var _this = this;
        this.knownResults = new (_indexJs1.canUseWeakMap ? WeakMap : Map)();
        this.config = _indexJs1.compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: _helpersJs.shouldCanonizeResults(config)
        });
        this.canon = config.canon || new _objectCanonJs.ObjectCanon;
        this.executeSelectionSet = _optimism.wrap(function(options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) return _tslib.__assign(_tslib.__assign({}, other), {
                    result: _this.canon.admit(other.result)
                });
                return other;
            }
            _entityStoreJs.maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
                if (_entityStoreJs.supportsResultCaching(context.store)) return context.store.makeCacheKey(selectionSet, _indexJs1.isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
            }
        });
        this.executeSubSelectedArray = _optimism.wrap(function(options) {
            _entityStoreJs.maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (_entityStoreJs.supportsResultCaching(context.store)) return context.store.makeCacheKey(field, array, context.varString);
            }
        });
    }
    StoreReader1.prototype.resetCanon = function() {
        this.canon = new _objectCanonJs.ObjectCanon;
    };
    StoreReader1.prototype.diffQueryAgainstStore = function(_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = _tslib.__assign(_tslib.__assign({}, _indexJs1.getDefaultValues(_indexJs1.getQueryDefinition(query))), variables);
        var rootRef = _indexJs1.makeReference(rootId);
        var merger = new _indexJs1.DeepMerger;
        var execResult = this.executeSelectionSet({
            selectionSet: _indexJs1.getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: _objectCanonJs.canonicalStringify(variables),
                canonizeResults: canonizeResults,
                fragmentMap: _indexJs1.createFragmentMap(_indexJs1.getFragmentDefinitions(query)),
                merge: function(a, b) {
                    return merger.merge(a, b);
                }
            }
        });
        var missing;
        if (execResult.missing) {
            missing = [
                new _commonJs.MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)
            ];
            if (!returnPartialData) throw missing[0];
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing
        };
    };
    StoreReader1.prototype.isFresh = function(result, parent, selectionSet, context) {
        if (_entityStoreJs.supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) return true;
        }
        return false;
    };
    StoreReader1.prototype.execSelectionSetImpl = function(_a1) {
        var _this = this;
        var selectionSet = _a1.selectionSet, objectOrReference = _a1.objectOrReference, enclosingRef = _a1.enclosingRef, context = _a1.context;
        if (_indexJs1.isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
        };
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var result1 = {};
        var missing;
        if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) result1 = {
            __typename: typename
        };
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) missing = context.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function(selection) {
            var _a, _b;
            if (!_indexJs1.shouldInclude(selection, variables)) return;
            if (_indexJs1.isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference
                }, context);
                var resultName = _indexJs1.resultKeyNameFromField(selection);
                if (fieldValue === void 0) {
                    if (!_indexJs1.addTypenameToDocument.added(selection)) missing = context.merge(missing, (_a = {}, _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(_indexJs1.isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a));
                } else if (_helpersJs.isArray(fieldValue)) fieldValue = handleMissing(_this.executeSubSelectedArray({
                    field: selection,
                    array: fieldValue,
                    enclosingRef: enclosingRef,
                    context: context
                }), resultName);
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) fieldValue = _this.canon.pass(fieldValue);
                } else if (fieldValue != null) fieldValue = handleMissing(_this.executeSelectionSet({
                    selectionSet: selection.selectionSet,
                    objectOrReference: fieldValue,
                    enclosingRef: _indexJs1.isReference(fieldValue) ? fieldValue : enclosingRef,
                    context: context
                }), resultName);
                if (fieldValue !== void 0) result1 = context.merge(result1, (_b = {}, _b[resultName] = fieldValue, _b));
            } else {
                var fragment = _indexJs1.getFragmentFromSelection(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) fragment.selectionSet.selections.forEach(workSet.add, workSet);
            }
        });
        var finalResult = {
            result: result1,
            missing: missing
        };
        var frozen = context.canonizeResults ? this.canon.admit(finalResult) : _indexJs1.maybeDeepFreeze(finalResult);
        if (frozen.result) this.knownResults.set(frozen.result, selectionSet);
        return frozen;
    };
    StoreReader1.prototype.execSubSelectedArrayImpl = function(_a2) {
        var _this = this;
        var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
        var missing;
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) missing = context.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            return childResult.result;
        }
        if (field.selectionSet) array = array.filter(context.store.canRead);
        array = array.map(function(item, i) {
            if (item === null) return null;
            if (_helpersJs.isArray(item)) return handleMissing(_this.executeSubSelectedArray({
                field: field,
                array: item,
                enclosingRef: enclosingRef,
                context: context
            }), i);
            if (field.selectionSet) return handleMissing(_this.executeSelectionSet({
                selectionSet: field.selectionSet,
                objectOrReference: item,
                enclosingRef: _indexJs1.isReference(item) ? item : enclosingRef,
                context: context
            }), i);
            if (__DEV__) assertSelectionSetForIdValue(context.store, field, item);
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing
        };
    };
    return StoreReader1;
}();
function firstMissing(tree) {
    try {
        JSON.stringify(tree, function(_, value) {
            if (typeof value === "string") throw value;
            return value;
        });
    } catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([
            fieldValue
        ]);
        workSet_1.forEach(function(value) {
            if (_indexJs1.isNonNullObject(value)) {
                __DEV__ ? _indexJs.invariant(!_indexJs1.isReference(value), "Missing selection set for object of type ".concat(_helpersJs.getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : _indexJs.invariant(!_indexJs1.isReference(value), 5);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","optimism":"2p9hL","../../utilities/index.js":"k51w7","./entityStore.js":"k8186","./helpers.js":"euVKX","../core/types/common.js":"iPpQ4","./object-canon.js":"606cR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"606cR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectCanon", ()=>ObjectCanon
);
parcelHelpers.export(exports, "canonicalStringify", ()=>canonicalStringify
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _trie = require("@wry/trie");
var _indexJs1 = require("../../utilities/index.js");
var _helpersJs = require("./helpers.js");
function shallowCopy(value) {
    if (_indexJs1.isNonNullObject(value)) return _helpersJs.isArray(value) ? value.slice(0) : _tslib.__assign({
        __proto__: Object.getPrototypeOf(value)
    }, value);
    return value;
}
var ObjectCanon = function() {
    function ObjectCanon1() {
        this.known = new (_indexJs1.canUseWeakSet ? WeakSet : Set)();
        this.pool = new _trie.Trie(_indexJs1.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon1.prototype.isKnown = function(value) {
        return _indexJs1.isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon1.prototype.pass = function(value) {
        if (_indexJs1.isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon1.prototype.admit = function(value) {
        var _this = this;
        if (_indexJs1.isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original) return original;
            var proto = Object.getPrototypeOf(value);
            switch(proto){
                case Array.prototype:
                    if (this.known.has(value)) return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) Object.freeze(array);
                    }
                    return node.array;
                case null:
                case Object.prototype:
                    if (this.known.has(value)) return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [
                        proto_1
                    ];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function(key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function(key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) Object.freeze(obj_1);
                    }
                    return node.object;
            }
        }
        return value;
    };
    ObjectCanon1.prototype.sortedKeys = function(obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) this.keysByJSON.set(json, node.keys = {
                sorted: keys,
                json: json
            });
        }
        return node.keys;
    };
    return ObjectCanon1;
}();
var canonicalStringify = Object.assign(function(value) {
    if (_indexJs1.isNonNullObject(value)) {
        if (stringifyCanon === void 0) resetCanonicalStringify();
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) stringifyCache.set(canonical, json = JSON.stringify(canonical));
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (_indexJs1.canUseWeakMap ? WeakMap : Map)();
}

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","@wry/trie":"3yDRd","../../utilities/index.js":"k51w7","./helpers.js":"euVKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CfdT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreWriter", ()=>StoreWriter
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _equality = require("@wry/equality");
var _trie = require("@wry/trie");
var _indexJs1 = require("../../utilities/index.js");
var _helpersJs = require("./helpers.js");
var _objectCanonJs = require("./object-canon.js");
var _policiesJs = require("./policies.js");
function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : _tslib.__assign(_tslib.__assign({}, context), {
        clientOnly: clientOnly,
        deferred: deferred
    }));
    return flavored;
}
var StoreWriter = function() {
    function StoreWriter1(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter1.prototype.writeToStore = function(store, _a1) {
        var _this = this;
        var query = _a1.query, result = _a1.result, dataId1 = _a1.dataId, variables = _a1.variables, overwrite = _a1.overwrite;
        var operationDefinition = _indexJs1.getOperationDefinition(query);
        var merger = _helpersJs.makeProcessedFieldsMerger();
        variables = _tslib.__assign(_tslib.__assign({}, _indexJs1.getDefaultValues(operationDefinition)), variables);
        var context = {
            store: store,
            written: Object.create(null),
            merge: function(existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: _objectCanonJs.canonicalStringify(variables),
            fragmentMap: _indexJs1.createFragmentMap(_indexJs1.getFragmentDefinitions(query)),
            overwrite: !!overwrite,
            incomingById: new Map,
            clientOnly: false,
            deferred: false,
            flavors: new Map
        };
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId1,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: {
                map: new Map
            },
            context: context
        });
        if (!_indexJs1.isReference(ref)) throw __DEV__ ? new _indexJs.InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new _indexJs.InvariantError(6);
        context.incomingById.forEach(function(_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = _indexJs1.makeReference(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if (_indexJs1.isReference(applied)) return;
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function(field) {
                    if (field.selectionSet) fieldsWithSelectionSets_1[field.name.value] = true;
                });
                var hasSelectionSet_1 = function(storeFieldName) {
                    return fieldsWithSelectionSets_1[_helpersJs.fieldNameFromStoreName(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function(storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function(storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                });
            }
            store.merge(dataId, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter1.prototype.processSelectionSet = function(_a2) {
        var _this = this;
        var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context1 = _a2.context, mergeTree = _a2.mergeTree;
        var policies = this.cache.policies;
        var incoming = Object.create(null);
        var typename = dataId && policies.rootTypenamesById[dataId] || _indexJs1.getTypenameFromResult(result, selectionSet, context1.fragmentMap) || dataId && context1.store.get(dataId, "__typename");
        if ("string" === typeof typename) incoming.__typename = typename;
        var readField = function() {
            var options = _policiesJs.normalizeReadFieldOptions(arguments, incoming, context1.variables);
            if (_indexJs1.isReference(options.from)) {
                var info = context1.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField(_tslib.__assign(_tslib.__assign({}, options), {
                        from: info.storeObject
                    }), context1);
                    if (result_1 !== void 0) return result_1;
                }
            }
            return policies.readField(options, context1);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, context1, typename).forEach(function(context, field) {
            var _a;
            var resultFieldKey = _indexJs1.resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context, false, false) : context, childTree);
                var childTypename = void 0;
                if (field.selectionSet && (_indexJs1.isReference(incomingValue) || _helpersJs.storeValueIsStoreObject(incomingValue))) childTypename = readField("__typename", incomingValue);
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) childTree.info = {
                    field: field,
                    typename: typename,
                    merge: merge
                };
                else maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                incoming = context.merge(incoming, (_a = {}, _a[storeFieldName] = incomingValue, _a));
            } else if (__DEV__ && !context.clientOnly && !context.deferred && !_indexJs1.addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) __DEV__ && _indexJs.invariant.error("Missing field '".concat(_indexJs1.resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
        });
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context1.fragmentMap,
                storeObject: incoming,
                readField: readField
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) incoming = context1.merge(incoming, keyObject);
        } catch (e) {
            if (!dataId) throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = _indexJs1.makeReference(dataId);
            var sets = context1.written[dataId] || (context1.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0) return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context1)) return dataRef;
            var previous_1 = context1.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context1.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function(field) {
                    return previous_1.fieldNodeSet.add(field);
                });
            } else context1.incomingById.set(dataId, {
                storeObject: incoming,
                mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                fieldNodeSet: fieldNodeSet
            });
            return dataRef;
        }
        return incoming;
    };
    StoreWriter1.prototype.processFieldValue = function(value1, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value1 === null) return __DEV__ ? _indexJs1.cloneDeep(value1) : value1;
        if (_helpersJs.isArray(value1)) return value1.map(function(item, i) {
            var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
            maybeRecycleChildMergeTree(mergeTree, i);
            return value;
        });
        return this.processSelectionSet({
            result: value1,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree
        });
    };
    StoreWriter1.prototype.flattenFields = function(selectionSet1, result, context, typename) {
        if (typename === void 0) typename = _indexJs1.getTypenameFromResult(result, selectionSet1, context.fragmentMap);
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new _trie.Trie(false);
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited) return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function(selection) {
                if (!_indexJs1.shouldInclude(selection, context.variables)) return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) && _indexJs1.isNonEmptyArray(selection.directives)) selection.directives.forEach(function(dir) {
                    var name = dir.name.value;
                    if (name === "client") clientOnly = true;
                    if (name === "defer") {
                        var args = _indexJs1.argumentsObjectFromField(dir, context.variables);
                        if (!args || args.if !== false) deferred = true;
                    }
                });
                if (_indexJs1.isField(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                } else {
                    var fragment = _indexJs1.getFragmentFromSelection(selection, context.fragmentMap);
                    if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                }
            });
        })(selectionSet1, context);
        return fieldMap;
    };
    StoreWriter1.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !_indexJs1.isReference(incoming)) {
            var e_1 = !_helpersJs.isArray(incoming) && (_indexJs1.isReference(existing) || _helpersJs.storeValueIsStoreObject(existing)) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) getStorageArgs = [
                _indexJs1.isReference(e_1) ? e_1.__ref : e_1
            ];
            var changedFields_1;
            var getValue_1 = function(from, name) {
                return _helpersJs.isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function(childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal) return;
                if (getStorageArgs) getStorageArgs.push(storeFieldName);
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) _indexJs.invariant(getStorageArgs.pop() === storeFieldName);
            });
            if (changedFields_1) {
                incoming = _helpersJs.isArray(i_1) ? i_1.slice(0) : _tslib.__assign({}, i_1);
                changedFields_1.forEach(function(value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        return incoming;
    };
    return StoreWriter1;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) map.set(name, emptyMergeTreePool.pop() || {
        map: new Map
    });
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right)) return left;
    if (!left || mergeTreeIsEmpty(left)) return right;
    var info = left.info && right.info ? _tslib.__assign(_tslib.__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map : left.map.size ? left.map : right.map;
    var merged = {
        info: info,
        map: map
    };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function(leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function(key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function(objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing) return;
    var incoming = getChild(incomingObj);
    if (!incoming) return;
    if (_indexJs1.isReference(existing)) return;
    if (_equality.equal(existing, incoming)) return;
    if (Object.keys(existing).every(function(key) {
        return store.getFieldValue(incoming, key) !== void 0;
    })) return;
    var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
    var fieldName = _helpersJs.fieldNameFromStoreName(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName)) return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!_helpersJs.isArray(existing) && !_helpersJs.isArray(incoming)) [
        existing,
        incoming
    ].forEach(function(child) {
        var typename = store.getFieldValue(child, "__typename");
        if (typeof typename === "string" && !childTypenames.includes(typename)) childTypenames.push(typename);
    });
    __DEV__ && _indexJs.invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","@wry/equality":"eBW80","@wry/trie":"3yDRd","../../utilities/index.js":"k51w7","./helpers.js":"euVKX","./object-canon.js":"606cR","./policies.js":"i310Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i310Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Policies", ()=>Policies
);
parcelHelpers.export(exports, "normalizeReadFieldOptions", ()=>normalizeReadFieldOptions
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _indexJs1 = require("../../utilities/index.js");
var _helpersJs = require("./helpers.js");
var _reactiveVarsJs = require("./reactiveVars.js");
var _objectCanonJs = require("./object-canon.js");
var _keyExtractorJs = require("./key-extractor.js");
_indexJs1.getStoreKeyName.setStringify(_objectCanonJs.canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args : spec.field ? _indexJs1.argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
    return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
    return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
    return incoming;
};
var Policies = function() {
    function Policies1(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = _tslib.__assign({
            dataIdFromObject: _helpersJs.defaultDataIdFromObject
        }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) this.addPossibleTypes(config.possibleTypes);
        if (config.typePolicies) this.addTypePolicies(config.typePolicies);
    }
    Policies1.prototype.identify = function(object, partialContext) {
        var _a;
        var policies = this;
        var typename = partialContext && (partialContext.typename || ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) return [
            "ROOT_QUERY"
        ];
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = _tslib.__assign(_tslib.__assign({}, partialContext), {
            typename: typename,
            storeObject: storeObject,
            readField: partialContext && partialContext.readField || function() {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables
                });
            }
        });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while(keyFn){
            var specifierOrId = keyFn(object, context);
            if (_helpersJs.isArray(specifierOrId)) keyFn = _keyExtractorJs.keyFieldsFnFromSpecifier(specifierOrId);
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [
            id,
            context.keyObject
        ] : [
            id
        ];
    };
    Policies1.prototype.addTypePolicies = function(typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function(typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = _tslib.__rest(_a, [
                "queryType",
                "mutationType",
                "subscriptionType"
            ]);
            if (queryType) _this.setRootTypename("Query", typename);
            if (mutationType) _this.setRootTypename("Mutation", typename);
            if (subscriptionType) _this.setRootTypename("Subscription", typename);
            if (_helpersJs.hasOwn.call(_this.toBeAdded, typename)) _this.toBeAdded[typename].push(incoming);
            else _this.toBeAdded[typename] = [
                incoming
            ];
        });
    };
    Policies1.prototype.updateTypePolicy = function(typename, incoming1) {
        var _this = this;
        var existing1 = this.getTypePolicy(typename);
        var keyFields = incoming1.keyFields, fields = incoming1.fields;
        function setMerge(existing, merge) {
            existing.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing.merge;
        }
        setMerge(existing1, incoming1.merge);
        existing1.keyFn = keyFields === false ? nullKeyFieldsFn : _helpersJs.isArray(keyFields) ? _keyExtractorJs.keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing1.keyFn;
        if (fields) Object.keys(fields).forEach(function(fieldName) {
            var existing = _this.getFieldPolicy(typename, fieldName, true);
            var incoming = fields[fieldName];
            if (typeof incoming === "function") existing.read = incoming;
            else {
                var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                existing.keyFn = keyArgs === false ? simpleKeyArgsFn : _helpersJs.isArray(keyArgs) ? _keyExtractorJs.keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing.keyFn;
                if (typeof read === "function") existing.read = read;
                setMerge(existing, merge);
            }
            if (existing.read && existing.merge) existing.keyFn = existing.keyFn || simpleKeyArgsFn;
        });
    };
    Policies1.prototype.setRootTypename = function(which, typename) {
        if (typename === void 0) typename = which;
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? _indexJs.invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : _indexJs.invariant(!old || old === which, 3);
            if (old) delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies1.prototype.addPossibleTypes = function(possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function(supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function(subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(_helpersJs.TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
            });
        });
    };
    Policies1.prototype.getTypePolicy = function(typename) {
        var _this = this;
        if (!_helpersJs.hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) supertypes.forEach(function(supertype) {
                var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = _tslib.__rest(_a, [
                    "fields"
                ]);
                Object.assign(policy_1, rest);
                Object.assign(policy_1.fields, fields);
            });
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) inbox.splice(0).forEach(function(policy) {
            _this.updateTypePolicy(typename, policy);
        });
        return this.typePolicies[typename];
    };
    Policies1.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = Object.create(null));
        }
    };
    Policies1.prototype.getSupertypeSet = function(subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) this.supertypeMap.set(subtype, supertypeSet = new Set());
        return supertypeSet;
    };
    Policies1.prototype.fragmentMatches = function(fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition) return true;
        if (!typename) return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype) return true;
        if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [
                typenameSupertypeSet
            ];
            var maybeEnqueue_1 = function(subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet && supertypeSet.size && workQueue_1.indexOf(supertypeSet) < 0) workQueue_1.push(supertypeSet);
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for(var i = 0; i < workQueue_1.length; ++i){
                var supertypeSet1 = workQueue_1[i];
                if (supertypeSet1.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) __DEV__ && _indexJs.invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet1.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && _helpersJs.selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) maybeEnqueue_1(fuzzyString);
                    });
                }
            }
        }
        return false;
    };
    Policies1.prototype.hasKeyArgs = function(typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies1.prototype.getStoreFieldName = function(fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while(keyFn){
                var specifierOrString = keyFn(args, context);
                if (_helpersJs.isArray(specifierOrString)) keyFn = _keyExtractorJs.keyArgsFnFromSpecifier(specifierOrString);
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) storeFieldName = fieldSpec.field ? _indexJs1.storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : _indexJs1.getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        if (storeFieldName === false) return fieldName;
        return fieldName === _helpersJs.fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    };
    Policies1.prototype.readField = function(options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference) return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField) return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename) options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = _helpersJs.fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(_indexJs1.isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
            return _reactiveVarsJs.cacheSlot.withValue(this.cache, read, [
                existing,
                readOptions
            ]);
        }
        return existing;
    };
    Policies1.prototype.getReadFunction = function(typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies1.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies1.prototype.runMergeFunction = function(existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) return makeMergeObjectsFunction(context.store)(existing, incoming);
        if (merge === mergeFalseFn) return incoming;
        if (context.overwrite) existing = void 0;
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, {
            typename: typename,
            fieldName: field.name.value,
            field: field,
            variables: context.variables
        }, context, storage || Object.create(null)));
    };
    return Policies1;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = _helpersJs.fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: _indexJs1.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function() {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, context), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store)
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") options = {
        fieldName: fieldNameOrOptions,
        from: argc > 1 ? from : objectOrReference
    };
    else {
        options = _tslib.__assign({}, fieldNameOrOptions);
        if (!_helpersJs.hasOwn.call(options, "from")) options.from = objectOrReference;
    }
    if (__DEV__ && options.from === void 0) __DEV__ && _indexJs.invariant.warn("Undefined 'from' passed to readField with arguments ".concat(_indexJs1.stringifyForDisplay(Array.from(readFieldArgs))));
    if (void 0 === options.variables) options.variables = variables;
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (_helpersJs.isArray(existing) || _helpersJs.isArray(incoming)) throw __DEV__ ? new _indexJs.InvariantError("Cannot automatically merge arrays") : new _indexJs.InvariantError(4);
        if (_indexJs1.isNonNullObject(existing) && _indexJs1.isNonNullObject(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) return incoming;
            if (_indexJs1.isReference(existing) && _helpersJs.storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (_helpersJs.storeValueIsStoreObject(existing) && _indexJs1.isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (_helpersJs.storeValueIsStoreObject(existing) && _helpersJs.storeValueIsStoreObject(incoming)) return _tslib.__assign(_tslib.__assign({}, existing), incoming);
        }
        return incoming;
    };
}

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","../../utilities/index.js":"k51w7","./helpers.js":"euVKX","./reactiveVars.js":"f4hBf","./object-canon.js":"606cR","./key-extractor.js":"4f2z2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4hBf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cacheSlot", ()=>cacheSlot
);
parcelHelpers.export(exports, "forgetCache", ()=>forgetCache
);
parcelHelpers.export(exports, "recallCache", ()=>recallCache
);
parcelHelpers.export(exports, "makeVar", ()=>makeVar
);
var _optimism = require("optimism");
var _context = require("@wry/context");
var cacheSlot = new _context.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) cacheInfoMap.set(cache, info = {
        vars: new Set,
        dep: _optimism.dep()
    });
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function(rv) {
        return rv.forgetCache(cache);
    });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function(rv) {
        return rv.attachCache(cache);
    });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function(newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function(cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function(listener) {
                    return listener(value);
                });
            }
        } else {
            var cache1 = cacheSlot.getValue();
            if (cache1) {
                attach(cache1);
                getCacheInfo(cache1).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function(listener) {
        listeners.add(listener);
        return function() {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function(cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function(cache) {
        return caches.delete(cache);
    };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) cache.broadcastWatches();
}

},{"optimism":"2p9hL","@wry/context":"fwdpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4f2z2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyFieldsFnFromSpecifier", ()=>keyFieldsFnFromSpecifier
);
parcelHelpers.export(exports, "keyArgsFnFromSpecifier", ()=>keyArgsFnFromSpecifier
);
parcelHelpers.export(exports, "collectSpecifierPaths", ()=>collectSpecifierPaths
);
parcelHelpers.export(exports, "getSpecifierPaths", ()=>getSpecifierPaths
);
parcelHelpers.export(exports, "extractKeyPath", ()=>extractKeyPath
);
var _indexJs = require("../../utilities/globals/index.js");
var _indexJs1 = require("../../utilities/index.js");
var _helpersJs = require("./helpers.js");
var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
        var extract = function(from, key) {
            return context.readField(key, from);
        };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 && object !== context.storeObject && _helpersJs.hasOwn.call(object, schemaKeyPath[0])) extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            __DEV__ ? _indexJs.invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : _indexJs.invariant(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function(args, _a) {
        var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
        var collected = collectSpecifierPaths(specifier, function(keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && _indexJs1.isNonEmptyArray(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d1 = field.directives.find(function(d) {
                        return d.name.value === directiveName_1;
                    });
                    var directiveArgs = d1 && _indexJs1.argumentsObjectFromField(d1, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && _helpersJs.hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) return extractKeyPath(args, keyPath);
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") fieldName += ":" + suffix;
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new _indexJs1.DeepMerger;
    return getSpecifierPaths(specifier).reduce(function(collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for(var i = path.length - 1; i >= 0; --i)toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function(s, i) {
            if (_helpersJs.isArray(s)) {
                getSpecifierPaths(s).forEach(function(p) {
                    return paths_1.push(currentPath_1.concat(p));
                });
                currentPath_1.length = 0;
            } else {
                currentPath_1.push(s);
                if (!_helpersJs.isArray(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return _helpersJs.isArray(obj) ? obj.map(function(child) {
            return reducer(child, key);
        }) : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    if (_indexJs1.isNonNullObject(value)) {
        if (_helpersJs.isArray(value)) return value.map(normalize);
        return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
            return extractKeyPath(value, path);
        });
    }
    return value;
}

},{"../../utilities/globals/index.js":"60qk9","../../utilities/index.js":"k51w7","./helpers.js":"euVKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SXma":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jvqQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isApolloError", ()=>isApolloError
);
parcelHelpers.export(exports, "ApolloError", ()=>ApolloError
);
var _tslib = require("tslib");
var _indexJs = require("../utilities/globals/index.js");
var _indexJs1 = require("../utilities/index.js");
function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function(err) {
    var message = '';
    if (_indexJs1.isNonEmptyArray(err.graphQLErrors) || _indexJs1.isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
        errors.forEach(function(error) {
            var errorMessage = error ? error.message : 'Error message not found.';
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) message += "".concat(err.networkError.message, "\n");
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = function(_super) {
    _tslib.__extends(ApolloError1, _super);
    function ApolloError1(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError1.prototype;
        return _this;
    }
    return ApolloError1;
}(Error);

},{"tslib":"lRdW5","../utilities/globals/index.js":"60qk9","../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7svFE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObservableQuery", ()=>ObservableQuery
);
parcelHelpers.export(exports, "reobserveCacheFirst", ()=>reobserveCacheFirst
);
parcelHelpers.export(exports, "logMissingFieldErrors", ()=>logMissingFieldErrors
);
var _tslib = require("tslib");
var _indexJs = require("../utilities/globals/index.js");
var _equality = require("@wry/equality");
var _networkStatusJs = require("./networkStatus.js");
var _indexJs1 = require("../utilities/index.js");
var assign = Object.assign, hasOwnProperty = Object.hasOwnProperty;
var ObservableQuery = function(_super) {
    _tslib.__extends(ObservableQuery1, _super);
    function ObservableQuery1(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function(observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) subObserver.error = defaultSubscriptionObserverErrorCallback;
            } catch (_a) {}
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) observer.error && observer.error(last.error);
            else if (last && last.result) observer.next && observer.next(last.result);
            if (first) _this.reobserve().catch(function() {});
            return function() {
                if (_this.observers.delete(observer) && !_this.observers.size) _this.tearDownQuery();
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        _this.isTornDown = false;
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
        _this.options = _tslib.__assign(_tslib.__assign({}, options), {
            initialFetchPolicy: initialFetchPolicy,
            fetchPolicy: fetchPolicy
        });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = _indexJs1.getOperationDefinition(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
    }
    Object.defineProperty(ObservableQuery1.prototype, "query", {
        get: function() {
            return this.queryManager.transform(this.options.query).document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservableQuery1.prototype, "variables", {
        get: function() {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery1.prototype.result = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var observer = {
                next: function(result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) _this.queryManager.removeQuery(_this.queryId);
                    setTimeout(function() {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery1.prototype.getCurrentResult = function(saveAsLastResult) {
        if (saveAsLastResult === void 0) saveAsLastResult = true;
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || _networkStatusJs.NetworkStatus.ready;
        var result = _tslib.__assign(_tslib.__assign({}, lastResult), {
            loading: _networkStatusJs.isNetworkRequestInFlight(networkStatus),
            networkStatus: networkStatus
        });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (fetchPolicy === 'network-only' || fetchPolicy === 'no-cache' || fetchPolicy === 'standby' || this.queryManager.transform(this.options.query).hasForcedResolvers) ;
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) result.data = diff.result;
            if (_equality.equal(result.data, {})) result.data = void 0;
            if (diff.complete) {
                delete result.partial;
                if (diff.complete && result.networkStatus === _networkStatusJs.NetworkStatus.loading && (fetchPolicy === 'cache-first' || fetchPolicy === 'cache-only')) {
                    result.networkStatus = _networkStatusJs.NetworkStatus.ready;
                    result.loading = false;
                }
            } else result.partial = true;
            if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) logMissingFieldErrors(diff.missing);
        }
        if (saveAsLastResult) this.updateLastResult(result);
        return result;
    };
    ObservableQuery1.prototype.isDifferentFromLastResult = function(newResult) {
        return !this.last || !_equality.equal(this.last.result, newResult);
    };
    ObservableQuery1.prototype.getLast = function(key, variablesMustMatch) {
        var last = this.last;
        if (last && last[key] && (!variablesMustMatch || _equality.equal(last.variables, this.variables))) return last[key];
    };
    ObservableQuery1.prototype.getLastResult = function(variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery1.prototype.getLastError = function(variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery1.prototype.resetLastResults = function() {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery1.prototype.resetQueryStoreErrors = function() {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery1.prototype.refetch = function(variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-and-network') reobserveOptions.fetchPolicy = fetchPolicy;
        else if (fetchPolicy === 'no-cache') reobserveOptions.fetchPolicy = 'no-cache';
        else reobserveOptions.fetchPolicy = 'network-only';
        if (__DEV__ && variables && hasOwnProperty.call(variables, "variables")) {
            var queryDef = _indexJs1.getQueryDefinition(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function(v) {
                return v.variable.name.value === "variables";
            })) __DEV__ && _indexJs.invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
        }
        if (variables && !_equality.equal(this.options.variables, variables)) reobserveOptions.variables = this.options.variables = _tslib.__assign(_tslib.__assign({}, this.options.variables), variables);
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, _networkStatusJs.NetworkStatus.refetch);
    };
    ObservableQuery1.prototype.fetchMore = function(fetchMoreOptions) {
        var _this = this;
        var combinedOptions = _tslib.__assign(_tslib.__assign({}, fetchMoreOptions.query ? fetchMoreOptions : _tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign({}, this.options), {
            query: this.query
        }), fetchMoreOptions), {
            variables: _tslib.__assign(_tslib.__assign({}, this.options.variables), fetchMoreOptions.variables)
        })), {
            fetchPolicy: "no-cache"
        });
        var qid = this.queryManager.generateQueryId();
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = _networkStatusJs.NetworkStatus.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) this.observe();
        var updatedQuerySet = new Set();
        return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatusJs.NetworkStatus.fetchMore).then(function(fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === _networkStatusJs.NetworkStatus.fetchMore) queryInfo.networkStatus = originalNetworkStatus;
            _this.queryManager.cache.batch({
                update: function(cache) {
                    var updateQuery = fetchMoreOptions.updateQuery;
                    if (updateQuery) cache.updateQuery({
                        query: _this.query,
                        variables: _this.variables,
                        returnPartialData: true,
                        optimistic: false
                    }, function(previous) {
                        return updateQuery(previous, {
                            fetchMoreResult: fetchMoreResult.data,
                            variables: combinedOptions.variables
                        });
                    });
                    else cache.writeQuery({
                        query: combinedOptions.query,
                        variables: combinedOptions.variables,
                        data: fetchMoreResult.data
                    });
                },
                onWatchUpdated: function(watch) {
                    updatedQuerySet.add(watch.query);
                }
            });
            return fetchMoreResult;
        }).finally(function() {
            if (!updatedQuerySet.has(_this.query)) reobserveCacheFirst(_this);
        });
    };
    ObservableQuery1.prototype.subscribeToMore = function(options) {
        var _this = this;
        var subscription = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context
        }).subscribe({
            next: function(subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) _this.updateQuery(function(previous, _a) {
                    var variables = _a.variables;
                    return updateQuery(previous, {
                        subscriptionData: subscriptionData,
                        variables: variables
                    });
                });
            },
            error: function(err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && _indexJs.invariant.error('Unhandled GraphQL subscription error', err);
            }
        });
        this.subscriptions.add(subscription);
        return function() {
            if (_this.subscriptions.delete(subscription)) subscription.unsubscribe();
        };
    };
    ObservableQuery1.prototype.setOptions = function(newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery1.prototype.setVariables = function(variables) {
        if (_equality.equal(this.variables, variables)) return this.observers.size ? this.result() : Promise.resolve();
        this.options.variables = variables;
        if (!this.observers.size) return Promise.resolve();
        return this.reobserve({
            fetchPolicy: this.options.initialFetchPolicy,
            variables: variables
        }, _networkStatusJs.NetworkStatus.setVariables);
    };
    ObservableQuery1.prototype.updateQuery = function(mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery1.prototype.startPolling = function(pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery1.prototype.stopPolling = function() {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery1.prototype.applyNextFetchPolicy = function(reason, options) {
        if (options.nextFetchPolicy) {
            var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (typeof options.nextFetchPolicy === "function") options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                reason: reason,
                options: options,
                observable: this,
                initialFetchPolicy: initialFetchPolicy
            });
            else if (reason === "variables-changed") options.fetchPolicy = initialFetchPolicy;
            else options.fetchPolicy = options.nextFetchPolicy;
        }
        return options.fetchPolicy;
    };
    ObservableQuery1.prototype.fetch = function(options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery1.prototype.updatePolling = function() {
        var _this = this;
        if (this.queryManager.ssrMode) return;
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo && pollingInfo.interval === pollInterval) return;
        __DEV__ ? _indexJs.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : _indexJs.invariant(pollInterval, 10);
        var info1 = pollingInfo || (this.pollingInfo = {});
        info1.interval = pollInterval;
        var maybeFetch = function() {
            if (_this.pollingInfo) {
                if (!_networkStatusJs.isNetworkRequestInFlight(_this.queryInfo.networkStatus)) _this.reobserve({
                    fetchPolicy: "network-only"
                }, _networkStatusJs.NetworkStatus.poll).then(poll, poll);
                else poll();
            }
        };
        var poll = function() {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery1.prototype.updateLastResult = function(newResult, variables) {
        if (variables === void 0) variables = this.variables;
        this.last = _tslib.__assign(_tslib.__assign({}, this.last), {
            result: this.queryManager.assumeImmutableResults ? newResult : _indexJs1.cloneDeep(newResult),
            variables: variables
        });
        if (!_indexJs1.isNonEmptyArray(newResult.errors)) delete this.last.error;
        return this.last;
    };
    ObservableQuery1.prototype.reobserve = function(newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === _networkStatusJs.NetworkStatus.refetch || newNetworkStatus === _networkStatusJs.NetworkStatus.fetchMore || newNetworkStatus === _networkStatusJs.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = _indexJs1.mergeOptions(this.options, newOptions || {});
        var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions && newOptions.variables && !_equality.equal(newOptions.variables, oldVariables) && (!newOptions.fetchPolicy || newOptions.fetchPolicy === oldFetchPolicy)) {
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) newNetworkStatus = _networkStatusJs.NetworkStatus.setVariables;
            }
        }
        var variables = options.variables && _tslib.__assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function(result) {
                _this.reportResult(result, variables);
            },
            error: function(error) {
                _this.reportError(error, variables);
            }
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) this.concast.removeObserver(this.observer, true);
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery1.prototype.observe = function() {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery1.prototype.reportResult = function(result, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result)) {
            if (lastError || !result.partial || this.options.returnPartialData) this.updateLastResult(result, variables);
            _indexJs1.iterateObserversSafely(this.observers, 'next', result);
        }
    };
    ObservableQuery1.prototype.reportError = function(error, variables) {
        var errorResult = _tslib.__assign(_tslib.__assign({}, this.getLastResult()), {
            error: error,
            errors: error.graphQLErrors,
            networkStatus: _networkStatusJs.NetworkStatus.error,
            loading: false
        });
        this.updateLastResult(errorResult, variables);
        _indexJs1.iterateObserversSafely(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery1.prototype.hasObservers = function() {
        return this.observers.size > 0;
    };
    ObservableQuery1.prototype.tearDownQuery = function() {
        if (this.isTornDown) return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function(sub) {
            return sub.unsubscribe();
        });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery1;
}(_indexJs1.Observable);
_indexJs1.fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
    var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
    if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") return obsQuery.reobserve({
        fetchPolicy: "cache-first",
        nextFetchPolicy: function() {
            this.nextFetchPolicy = nextFetchPolicy;
            if (typeof nextFetchPolicy === "function") return nextFetchPolicy.apply(this, arguments);
            return fetchPolicy;
        }
    });
    return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && _indexJs.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) __DEV__ && _indexJs.invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
}

},{"tslib":"lRdW5","../utilities/globals/index.js":"60qk9","@wry/equality":"eBW80","./networkStatus.js":"2bxcN","../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bxcN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NetworkStatus", ()=>NetworkStatus
);
parcelHelpers.export(exports, "isNetworkRequestInFlight", ()=>isNetworkRequestInFlight
);
var NetworkStatus;
(function(NetworkStatus1) {
    NetworkStatus1[NetworkStatus1["loading"] = 1] = "loading";
    NetworkStatus1[NetworkStatus1["setVariables"] = 2] = "setVariables";
    NetworkStatus1[NetworkStatus1["fetchMore"] = 3] = "fetchMore";
    NetworkStatus1[NetworkStatus1["refetch"] = 4] = "refetch";
    NetworkStatus1[NetworkStatus1["poll"] = 6] = "poll";
    NetworkStatus1[NetworkStatus1["ready"] = 7] = "ready";
    NetworkStatus1[NetworkStatus1["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTcXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalState", ()=>LocalState
);
var _tslib = require("tslib");
var _indexJs = require("../utilities/globals/index.js");
var _graphql = require("graphql");
var _indexJs1 = require("../utilities/index.js");
var _indexJs2 = require("../cache/index.js");
var LocalState = function() {
    function LocalState1(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) this.client = client;
        if (resolvers) this.addResolvers(resolvers);
        if (fragmentMatcher) this.setFragmentMatcher(fragmentMatcher);
    }
    LocalState1.prototype.addResolvers = function(resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) resolvers.forEach(function(resolverGroup) {
            _this.resolvers = _indexJs1.mergeDeep(_this.resolvers, resolverGroup);
        });
        else this.resolvers = _indexJs1.mergeDeep(this.resolvers, resolvers);
    };
    LocalState1.prototype.setResolvers = function(resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState1.prototype.getResolvers = function() {
        return this.resolvers || {};
    };
    LocalState1.prototype.runResolvers = function(_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return _tslib.__awaiter(this, void 0, void 0, function() {
            return _tslib.__generator(this, function(_c) {
                if (document) return [
                    2,
                    this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
                        return _tslib.__assign(_tslib.__assign({}, remoteResult), {
                            data: localResult.result
                        });
                    })
                ];
                return [
                    2,
                    remoteResult
                ];
            });
        });
    };
    LocalState1.prototype.setFragmentMatcher = function(fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState1.prototype.getFragmentMatcher = function() {
        return this.fragmentMatcher;
    };
    LocalState1.prototype.clientQuery = function(document) {
        if (_indexJs1.hasDirectives([
            'client'
        ], document)) {
            if (this.resolvers) return document;
        }
        return null;
    };
    LocalState1.prototype.serverQuery = function(document) {
        return _indexJs1.removeClientSetsFromDocument(document);
    };
    LocalState1.prototype.prepareContext = function(context) {
        var cache = this.cache;
        return _tslib.__assign(_tslib.__assign({}, context), {
            cache: cache,
            getCacheKey: function(obj) {
                return cache.identify(obj);
            }
        });
    };
    LocalState1.prototype.addExportedVariables = function(document, variables, context) {
        if (variables === void 0) variables = {};
        if (context === void 0) context = {};
        return _tslib.__awaiter(this, void 0, void 0, function() {
            return _tslib.__generator(this, function(_a) {
                if (document) return [
                    2,
                    this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function(data) {
                        return _tslib.__assign(_tslib.__assign({}, variables), data.exportedVariables);
                    })
                ];
                return [
                    2,
                    _tslib.__assign({}, variables)
                ];
            });
        });
    };
    LocalState1.prototype.shouldForceResolvers = function(document) {
        var forceResolvers = false;
        _graphql.visit(document, {
            Directive: {
                enter: function(node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function(arg) {
                            return arg.name.value === 'always' && arg.value.kind === 'BooleanValue' && arg.value.value === true;
                        });
                        if (forceResolvers) return _graphql.BREAK;
                    }
                }
            }
        });
        return forceResolvers;
    };
    LocalState1.prototype.buildRootValueFromCache = function(document, variables) {
        return this.cache.diff({
            query: _indexJs1.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false
        }).result;
    };
    LocalState1.prototype.resolveDocument = function(document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) context = {};
        if (variables === void 0) variables = {};
        if (fragmentMatcher === void 0) fragmentMatcher = function() {
            return true;
        };
        if (onlyRunForcedResolvers === void 0) onlyRunForcedResolvers = false;
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return _tslib.__generator(this, function(_b) {
                mainDefinition = _indexJs1.getMainDefinition(document);
                fragments = _indexJs1.getFragmentDefinitions(document);
                fragmentMap = _indexJs1.createFragmentMap(fragments);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: _tslib.__assign(_tslib.__assign({}, context), {
                        cache: cache,
                        client: client
                    }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers
                };
                return [
                    2,
                    this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result) {
                        return {
                            result: result,
                            exportedVariables: execContext.exportedVariables
                        };
                    })
                ];
            });
        });
    };
    LocalState1.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return _tslib.__generator(this, function(_a1) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [
                    rootValue
                ];
                execute = function(selection) {
                    return _tslib.__awaiter(_this, void 0, void 0, function() {
                        var fragment, typeCondition;
                        return _tslib.__generator(this, function(_a2) {
                            if (!_indexJs1.shouldInclude(selection, variables)) return [
                                2
                            ];
                            if (_indexJs1.isField(selection)) return [
                                2,
                                this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') resultsToMerge.push((_a = {}, _a[_indexJs1.resultKeyNameFromField(selection)] = fieldResult, _a));
                                })
                            ];
                            if (_indexJs1.isInlineFragment(selection)) fragment = selection;
                            else {
                                fragment = fragmentMap[selection.name.value];
                                __DEV__ ? _indexJs.invariant(fragment, "No fragment named ".concat(selection.name.value)) : _indexJs.invariant(fragment, 9);
                            }
                            if (fragment && fragment.typeCondition) {
                                typeCondition = fragment.typeCondition.name.value;
                                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) return [
                                    2,
                                    this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })
                                ];
                            }
                            return [
                                2
                            ];
                        });
                    });
                };
                return [
                    2,
                    Promise.all(selectionSet.selections.map(execute)).then(function() {
                        return _indexJs1.mergeDeepArray(resultsToMerge);
                    })
                ];
            });
        });
    };
    LocalState1.prototype.resolveField = function(field, rootValue, execContext) {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return _tslib.__generator(this, function(_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = _indexJs1.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) resultPromise = Promise.resolve(_indexJs2.cacheSlot.withValue(this.cache, resolve, [
                            rootValue,
                            _indexJs1.argumentsObjectFromField(field, variables),
                            execContext.context,
                            {
                                field: field,
                                fragmentMap: execContext.fragmentMap
                            }, 
                        ]));
                    }
                }
                return [
                    2,
                    resultPromise.then(function(result) {
                        if (result === void 0) result = defaultResult;
                        if (field.directives) field.directives.forEach(function(directive) {
                            if (directive.name.value === 'export' && directive.arguments) directive.arguments.forEach(function(arg) {
                                if (arg.name.value === 'as' && arg.value.kind === 'StringValue') execContext.exportedVariables[arg.value.value] = result;
                            });
                        });
                        if (!field.selectionSet) return result;
                        if (result == null) return result;
                        if (Array.isArray(result)) return _this.resolveSubSelectedArray(field, result, execContext);
                        if (field.selectionSet) return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                    })
                ];
            });
        });
    };
    LocalState1.prototype.resolveSubSelectedArray = function(field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function(item) {
            if (item === null) return null;
            if (Array.isArray(item)) return _this.resolveSubSelectedArray(field, item, execContext);
            if (field.selectionSet) return _this.resolveSelectionSet(field.selectionSet, item, execContext);
        }));
    };
    return LocalState1;
}();

},{"tslib":"lRdW5","../utilities/globals/index.js":"60qk9","graphql":"dwHFG","../utilities/index.js":"k51w7","../cache/index.js":"dKdrp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iueub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryInfo", ()=>QueryInfo
);
parcelHelpers.export(exports, "shouldWriteResult", ()=>shouldWriteResult
);
var _tslib = require("tslib");
var _equality = require("@wry/equality");
var _observableQueryJs = require("./ObservableQuery.js");
var _indexJs = require("../utilities/index.js");
var _networkStatusJs = require("./networkStatus.js");
var destructiveMethodCounts = new (_indexJs.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") cache[methodName] = function() {
        destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
        return original.apply(this, arguments);
    };
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = function() {
    function QueryInfo1(queryManager, queryId) {
        if (queryId === void 0) queryId = queryManager.generateQueryId();
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo1.prototype.init = function(query) {
        var networkStatus = query.networkStatus || _networkStatusJs.NetworkStatus.loading;
        if (this.variables && this.networkStatus !== _networkStatusJs.NetworkStatus.loading && !_equality.equal(this.variables, query.variables)) networkStatus = _networkStatusJs.NetworkStatus.setVariables;
        if (!_equality.equal(query.variables, this.variables)) this.lastDiff = void 0;
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus
        });
        if (query.observableQuery) this.setObservableQuery(query.observableQuery);
        if (query.lastRequestId) this.lastRequestId = query.lastRequestId;
        return this;
    };
    QueryInfo1.prototype.reset = function() {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo1.prototype.getDiff = function(variables) {
        if (variables === void 0) variables = this.variables;
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && _equality.equal(options, this.lastDiff.options)) return this.lastDiff.diff;
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") return {
            complete: false
        };
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo1.prototype.updateLastDiff = function(diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions()
        } : void 0;
    };
    QueryInfo1.prototype.getDiffOptions = function(variables) {
        var _a;
        if (variables === void 0) variables = this.variables;
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults
        };
    };
    QueryInfo1.prototype.setDiff = function(diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty && !_equality.equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) this.notifyTimeout = setTimeout(function() {
                return _this.notify();
            }, 0);
        }
    };
    QueryInfo1.prototype.setObservableQuery = function(oq) {
        var _this = this;
        if (oq === this.observableQuery) return;
        if (this.oqListener) this.listeners.delete(this.oqListener);
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function() {
                var diff = _this.getDiff();
                if (diff.fromOptimisticTransaction) oq["observe"]();
                else _observableQueryJs.reobserveCacheFirst(oq);
            });
        } else delete this.oqListener;
    };
    QueryInfo1.prototype.notify = function() {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) this.listeners.forEach(function(listener) {
            return listener(_this);
        });
        this.dirty = false;
    };
    QueryInfo1.prototype.shouldNotify = function() {
        if (!this.dirty || !this.listeners.size) return false;
        if (_networkStatusJs.isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") return false;
        }
        return true;
    };
    QueryInfo1.prototype.stop = function() {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo1.prototype.cancel;
            this.subscriptions.forEach(function(sub) {
                return sub.unsubscribe();
            });
            var oq = this.observableQuery;
            if (oq) oq.stopPolling();
        }
    };
    QueryInfo1.prototype.cancel = function() {};
    QueryInfo1.prototype.updateWatch = function(variables) {
        var _this = this;
        if (variables === void 0) variables = this.variables;
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") return;
        var watchOptions = _tslib.__assign(_tslib.__assign({}, this.getDiffOptions(variables)), {
            watcher: this,
            callback: function(diff) {
                return _this.setDiff(diff);
            }
        });
        if (!this.lastWatch || !_equality.equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo1.prototype.resetLastWrite = function() {
        this.lastWrite = void 0;
    };
    QueryInfo1.prototype.shouldWrite = function(result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && _equality.equal(variables, lastWrite.variables) && _equality.equal(result.data, lastWrite.result.data));
    };
    QueryInfo1.prototype.markResult = function(result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = _indexJs.isNonEmptyArray(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') this.updateLastDiff({
            result: result.data,
            complete: true
        }, this.getDiffOptions(options.variables));
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) this.cache.performTransaction(function(cache) {
                if (_this.shouldWrite(result, options.variables)) {
                    cache.writeQuery({
                        query: _this.document,
                        data: result.data,
                        variables: options.variables,
                        overwrite: cacheWriteBehavior === 1
                    });
                    _this.lastWrite = {
                        result: result,
                        variables: options.variables,
                        dmCount: destructiveMethodCounts.get(_this.cache)
                    };
                } else if (_this.lastDiff && _this.lastDiff.diff.complete) {
                    result.data = _this.lastDiff.diff.result;
                    return;
                }
                var diffOptions = _this.getDiffOptions(options.variables);
                var diff = cache.diff(diffOptions);
                if (!_this.stopped) _this.updateWatch(options.variables);
                _this.updateLastDiff(diff, diffOptions);
                if (diff.complete) result.data = diff.result;
            });
            else this.lastWrite = void 0;
        }
    };
    QueryInfo1.prototype.markReady = function() {
        this.networkError = null;
        return this.networkStatus = _networkStatusJs.NetworkStatus.ready;
    };
    QueryInfo1.prototype.markError = function(error) {
        this.networkStatus = _networkStatusJs.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) this.graphQLErrors = error.graphQLErrors;
        if (error.networkError) this.networkError = error.networkError;
        return error;
    };
    return QueryInfo1;
}();
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) errorPolicy = "none";
    var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
    var writeWithErrors = !_indexJs.graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) writeWithErrors = true;
    return writeWithErrors;
}

},{"tslib":"lRdW5","@wry/equality":"eBW80","./ObservableQuery.js":"7svFE","../utilities/index.js":"k51w7","./networkStatus.js":"2bxcN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"u1KXa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCfYb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gql", ()=>gql
);
parcelHelpers.export(exports, "resetCaches", ()=>resetCaches
);
parcelHelpers.export(exports, "disableFragmentWarnings", ()=>disableFragmentWarnings
);
parcelHelpers.export(exports, "enableExperimentalFragmentVariables", ()=>enableExperimentalFragmentVariables
);
parcelHelpers.export(exports, "disableExperimentalFragmentVariables", ()=>disableExperimentalFragmentVariables
);
var _tslib = require("tslib");
var _graphql = require("graphql");
var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
            } else if (!sourceKeySet) fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else definitions.push(fragmentDefinition);
    });
    return _tslib.__assign(_tslib.__assign({}, ast), {
        definitions: definitions
    });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
        if (node.loc) delete node.loc;
        Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === 'object') workSet.add(value);
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = _graphql.parse(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') throw new Error('Not a valid GraphQL document.');
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
    if (typeof literals === 'string') literals = [
        literals
    ];
    var result = literals[0];
    args.forEach(function(arg, i) {
        if (arg && arg.kind === 'Document') result += arg.loc.source.body;
        else result += arg;
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
exports.default = gql;

},{"tslib":"lRdW5","graphql":"dwHFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vOB9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloProvider", ()=>_indexJs1.ApolloProvider
);
parcelHelpers.export(exports, "ApolloConsumer", ()=>_indexJs1.ApolloConsumer
);
parcelHelpers.export(exports, "getApolloContext", ()=>_indexJs1.getApolloContext
);
parcelHelpers.export(exports, "resetApolloContext", ()=>_indexJs1.resetApolloContext
);
parcelHelpers.export(exports, "DocumentType", ()=>_indexJs3.DocumentType
);
parcelHelpers.export(exports, "operationName", ()=>_indexJs3.operationName
);
parcelHelpers.export(exports, "parser", ()=>_indexJs3.parser
);
var _indexJs = require("../utilities/globals/index.js");
var _indexJs1 = require("./context/index.js");
var _indexJs2 = require("./hooks/index.js");
parcelHelpers.exportAll(_indexJs2, exports);
var _indexJs3 = require("./parser/index.js");
var _typesJs = require("./types/types.js");
parcelHelpers.exportAll(_typesJs, exports);

},{"../utilities/globals/index.js":"60qk9","./context/index.js":"8hzHx","./hooks/index.js":"7TrRV","./parser/index.js":"lMxkB","./types/types.js":"bEFXs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hzHx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloConsumer", ()=>_apolloConsumerJs.ApolloConsumer
);
parcelHelpers.export(exports, "getApolloContext", ()=>_apolloContextJs.getApolloContext
);
parcelHelpers.export(exports, "resetApolloContext", ()=>_apolloContextJs.getApolloContext
);
parcelHelpers.export(exports, "ApolloProvider", ()=>_apolloProviderJs.ApolloProvider
);
var _indexJs = require("../../utilities/globals/index.js");
var _apolloConsumerJs = require("./ApolloConsumer.js");
var _apolloContextJs = require("./ApolloContext.js");
var _apolloProviderJs = require("./ApolloProvider.js");

},{"../../utilities/globals/index.js":"60qk9","./ApolloConsumer.js":"4BV0u","./ApolloContext.js":"1ZCCj","./ApolloProvider.js":"c79Qr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BV0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloConsumer", ()=>ApolloConsumer
);
var _indexJs = require("../../utilities/globals/index.js");
var _react = require("react");
var _apolloContextJs = require("./ApolloContext.js");
var ApolloConsumer = function(props) {
    var ApolloContext = _apolloContextJs.getApolloContext();
    return _react.createElement(ApolloContext.Consumer, null, function(context) {
        __DEV__ ? _indexJs.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>.') : _indexJs.invariant(context && context.client, 25);
        return props.children(context.client);
    });
};

},{"../../utilities/globals/index.js":"60qk9","react":"21dqq","./ApolloContext.js":"1ZCCj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21dqq":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react.development.js');

},{"./cjs/react.development.js":"6YvXz"}],"6YvXz":[function(require,module,exports) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ReactVersion = '18.1.0';
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    // ATTENTION
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: null
    };
    var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame1 = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame1.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame1.getCurrentStack = null;
    ReactDebugCurrentFrame1.getStackAddendum = function() {
        var stack = ''; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame1.getCurrentStack;
        if (impl) stack += impl() || '';
        return stack;
    };
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame1;
    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning('warn', format, args);
    }
    function error1(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error1("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
        }
    };
    var assign = Object.assign;
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component1(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component1.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component1.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component1.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    var deprecatedAPIs = {
        isMounted: [
            'isMounted',
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            'replaceState',
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component1.prototype, methodName, {
            get: function() {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component1.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    assign(pureComponentPrototype, Component1.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error1("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error1("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error1("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error1("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error1('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = '' + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = '' + config.key;
            } // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            '=': '=0',
            ':': '=2'
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return '$' + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) {
            checkKeyStringCoercion(element.key);
            return escape('' + element.key);
        } // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === 'undefined' || type === 'boolean') // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case 'string':
            case 'number':
                invokeCallback = true;
                break;
            case 'object':
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
                var escapedChildKey = '';
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                    // The `if` statement here prevents auto-disabling of the safe
                    // coercion ESLint rule, so we must manually disable it below.
                    // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
                    mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                    escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === 'object') {
                // eslint-disable-next-line react-internal/safe-string-coercion
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw new Error('React.Children.only expected to receive a single React element child.');
        return children;
    }
    function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error1("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error1("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.
            thenable.then(function(moduleObject) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject;
                }
            }, function(error) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
            if (payload._status === Uninitialized) {
                // In case, we're still uninitialized, then we're waiting for the thenable
                // to resolve. Set it as pending in the meantime.
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
            }
        }
        if (payload._status === Resolved) {
            var moduleObject1 = payload._result;
            if (moduleObject1 === undefined) error1("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject1);
            if (!('default' in moduleObject1)) error1("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject1);
            return moduleObject1.default;
        } else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error1("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'defaultProps', {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error1("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'propTypes', {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error1("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== 'function') error1('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        else if (render.length !== 0 && render.length !== 2) error1('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error1("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!render.name && !render.displayName) render.displayName = name;
            }
        });
        return elementType;
    }
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error1("memo: The first argument must be a component. Instead received: %s", type === null ? 'null' : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!type.name && !type.displayName) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null) error1("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.
        return dispatcher;
    }
    function useContext(Context) {
        var dispatcher = resolveDispatcher();
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error1("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error1("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
    }
    function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error1("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes('<anonymous>')) _frame = _frame.replace('<anonymous>', fn.displayName);
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error1("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error1('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error1('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error1('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error1("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error1("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error1('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error1("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, 'type', {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
        try {
            scope();
        } finally{
            ReactCurrentBatchConfig.transition = prevTransition;
            if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                currentTransition._updatedFibers.clear();
            }
        }
    }
    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
        if (enqueueTaskImpl === null) try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ('require' + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.
            enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
        } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function(callback) {
                if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === 'undefined') error1("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
            };
        }
        return enqueueTaskImpl(task);
    }
    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        if (ReactCurrentActQueue.current === null) // This is the outermost `act` scope. Initialize the queue. The reconciler
        // will detect the queue and use it instead of Scheduler.
        ReactCurrentActQueue.current = [];
        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;
        try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                }
            }
        } catch (error2) {
            popActScope(prevActScopeDepth);
            throw error2;
        } finally{
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }
        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
            var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.
            var wasAwaited = false;
            var thenable = {
                then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) // We've exited the outermost act scope. Recursively flush the
                        // queue until there's no remaining work.
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        else resolve(returnValue);
                    }, function(error) {
                        // The callback threw an error.
                        popActScope(prevActScopeDepth);
                        reject(error);
                    });
                }
            };
            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') // eslint-disable-next-line no-undef
            Promise.resolve().then(function() {}).then(function() {
                if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error1("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                }
            });
            return thenable;
        } else {
            var returnValue1 = result; // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.
                var _thenable = {
                    then: function(resolve, reject) {
                        // Confirm we haven't re-entered another `act` scope, in case
                        // the user does something weird like await the thenable
                        // multiple times.
                        if (ReactCurrentActQueue.current === null) {
                            // Recursively flush the queue until there's no remaining work.
                            ReactCurrentActQueue.current = [];
                            recursivelyFlushAsyncActWork(returnValue1, resolve, reject);
                        } else resolve(returnValue1);
                    }
                };
                return _thenable;
            } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                    then: function(resolve, reject) {
                        resolve(returnValue1);
                    }
                };
                return _thenable2;
            }
        }
    }
    function popActScope(prevActScopeDepth) {
        if (prevActScopeDepth !== actScopeDepth - 1) error1("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactCurrentActQueue.current;
        if (queue !== null) try {
            flushActQueue(queue);
            enqueueTask(function() {
                if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                } else // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
        } catch (error) {
            reject(error);
        }
        else resolve(returnValue);
    }
    var isFlushing = false;
    function flushActQueue(queue) {
        if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do callback = callback(true);
                    while (callback !== null)
                }
                queue.length = 0;
            } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
            } finally{
                isFlushing = false;
            }
        }
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component1;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();

},{}],"1ZCCj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getApolloContext", ()=>getApolloContext
);
parcelHelpers.export(exports, "resetApolloContext", ()=>getApolloContext
);
var _react = require("react");
var _indexJs = require("../../utilities/index.js");
var contextKey = _indexJs.canUseSymbol ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = _react.createContext[contextKey];
    if (!context) {
        Object.defineProperty(_react.createContext, contextKey, {
            value: context = _react.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

},{"react":"21dqq","../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c79Qr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloProvider", ()=>ApolloProvider
);
var _indexJs = require("../../utilities/globals/index.js");
var _react = require("react");
var _apolloContextJs = require("./ApolloContext.js");
var ApolloProvider = function(_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = _apolloContextJs.getApolloContext();
    return _react.createElement(ApolloContext.Consumer, null, function(context) {
        if (context === void 0) context = {};
        if (client && context.client !== client) context = Object.assign({}, context, {
            client: client
        });
        __DEV__ ? _indexJs.invariant(context.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : _indexJs.invariant(context.client, 26);
        return _react.createElement(ApolloContext.Provider, {
            value: context
        }, children);
    });
};

},{"../../utilities/globals/index.js":"60qk9","react":"21dqq","./ApolloContext.js":"1ZCCj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TrRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useQuery", ()=>_useQueryJs.useQuery
);
var _indexJs = require("../../utilities/globals/index.js");
var _useApolloClientJs = require("./useApolloClient.js");
parcelHelpers.exportAll(_useApolloClientJs, exports);
var _useLazyQueryJs = require("./useLazyQuery.js");
parcelHelpers.exportAll(_useLazyQueryJs, exports);
var _useMutationJs = require("./useMutation.js");
parcelHelpers.exportAll(_useMutationJs, exports);
var _useQueryJs = require("./useQuery.js");
var _useSubscriptionJs = require("./useSubscription.js");
parcelHelpers.exportAll(_useSubscriptionJs, exports);
var _useReactiveVarJs = require("./useReactiveVar.js");
parcelHelpers.exportAll(_useReactiveVarJs, exports);

},{"../../utilities/globals/index.js":"60qk9","./useApolloClient.js":"6CQiw","./useLazyQuery.js":"cC0VI","./useMutation.js":"9nVzX","./useQuery.js":"3pjtN","./useSubscription.js":"lxceS","./useReactiveVar.js":"8gP2g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6CQiw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useApolloClient", ()=>useApolloClient
);
var _indexJs = require("../../utilities/globals/index.js");
var _react = require("react");
var _indexJs1 = require("../context/index.js");
function useApolloClient(override) {
    var context = _react.useContext(_indexJs1.getApolloContext());
    var client = override || context.client;
    __DEV__ ? _indexJs.invariant(!!client, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : _indexJs.invariant(!!client, 29);
    return client;
}

},{"../../utilities/globals/index.js":"60qk9","react":"21dqq","../context/index.js":"8hzHx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cC0VI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useLazyQuery", ()=>useLazyQuery
);
var _tslib = require("tslib");
var _react = require("react");
var _useQueryJs = require("./useQuery.js");
var _useApolloClientJs = require("./useApolloClient.js");
var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore', 
];
function useLazyQuery(query, options) {
    var internalState = _useQueryJs.useInternalState(_useApolloClientJs.useApolloClient(options && options.client), query);
    var execOptionsRef = _react.useRef();
    var useQueryResult = internalState.useQuery(_tslib.__assign(_tslib.__assign(_tslib.__assign({}, options), execOptionsRef.current), {
        skip: !execOptionsRef.current
    }));
    var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy || internalState.getDefaultFetchPolicy();
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current
    });
    var eagerMethods1 = _react.useMemo(function() {
        var eagerMethods = {};
        var _loop_1 = function(key) {
            var method = result[key];
            eagerMethods[key] = function() {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for(var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++){
            var key1 = EAGER_METHODS_1[_i];
            _loop_1(key1);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods1);
    var execute = _react.useCallback(function(executeOptions) {
        execOptionsRef.current = executeOptions ? _tslib.__assign(_tslib.__assign({}, executeOptions), {
            fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy
        }) : {
            fetchPolicy: initialFetchPolicy
        };
        var promise = internalState.asyncUpdate().then(function(queryResult) {
            return Object.assign(queryResult, eagerMethods1);
        });
        promise.catch(function() {});
        return promise;
    }, []);
    return [
        execute,
        result
    ];
}

},{"tslib":"lRdW5","react":"21dqq","./useQuery.js":"3pjtN","./useApolloClient.js":"6CQiw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pjtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useQuery", ()=>useQuery
);
parcelHelpers.export(exports, "useInternalState", ()=>useInternalState
);
var _tslib = require("tslib");
var _indexJs = require("../../utilities/globals/index.js");
var _react = require("react");
var _useSyncExternalStoreJs = require("./useSyncExternalStore.js");
var _equality = require("@wry/equality");
var _indexJs1 = require("../../core/index.js");
var _indexJs2 = require("../context/index.js");
var _indexJs3 = require("../../errors/index.js");
var _indexJs4 = require("../parser/index.js");
var _useApolloClientJs = require("./useApolloClient.js");
var _indexJs5 = require("../../utilities/index.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
    if (options === void 0) options = Object.create(null);
    return useInternalState(_useApolloClientJs.useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
    var stateRef = _react.useRef();
    if (!stateRef.current || client !== stateRef.current.client || query !== stateRef.current.query) stateRef.current = new InternalState(client, query);
    var state = stateRef.current;
    var _a = _react.useState(0), _tick = _a[0], setTick = _a[1];
    state.forceUpdate = function() {
        setTick(function(tick) {
            return tick + 1;
        });
    };
    return state;
}
var InternalState = function() {
    function InternalState1(client, query) {
        this.client = client;
        this.query = query;
        this.asyncResolveFns = new Set();
        this.optionsToIgnoreOnce = new (_indexJs5.canUseWeakSet ? WeakSet : Set)();
        this.ssrDisabledResult = _indexJs5.maybeDeepFreeze({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: _indexJs1.NetworkStatus.loading
        });
        this.skipStandbyResult = _indexJs5.maybeDeepFreeze({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: _indexJs1.NetworkStatus.ready
        });
        this.toQueryResultCache = new (_indexJs5.canUseWeakMap ? WeakMap : Map)();
        _indexJs4.verifyDocumentType(query, _indexJs4.DocumentType.Query);
    }
    InternalState1.prototype.forceUpdate = function() {
        __DEV__ && _indexJs.invariant.warn("Calling default no-op implementation of InternalState#forceUpdate");
    };
    InternalState1.prototype.asyncUpdate = function() {
        var _this = this;
        return new Promise(function(resolve) {
            _this.asyncResolveFns.add(resolve);
            _this.optionsToIgnoreOnce.add(_this.watchQueryOptions);
            _this.forceUpdate();
        });
    };
    InternalState1.prototype.useQuery = function(options) {
        var _this = this;
        this.renderPromises = _react.useContext(_indexJs2.getApolloContext()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result1 = _useSyncExternalStoreJs.useSyncExternalStore(_react.useCallback(function() {
            if (_this.renderPromises) return function() {};
            var onNext = function() {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult && previousResult.loading === result.loading && previousResult.networkStatus === result.networkStatus && _equality.equal(previousResult.data, result.data)) return;
                _this.setResult(result);
            };
            var onError = function(error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                } finally{
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) throw error;
                var previousResult = _this.result;
                if (!previousResult || previousResult && previousResult.loading || !_equality.equal(error, previousResult.error)) _this.setResult({
                    data: previousResult && previousResult.data,
                    error: error,
                    loading: false,
                    networkStatus: _indexJs1.NetworkStatus.error
                });
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function() {
                return subscription.unsubscribe();
            };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches, 
        ]), function() {
            return _this.getCurrentResult();
        }, function() {
            return _this.getCurrentResult();
        });
        this.unsafeHandlePartialRefetch(result1);
        var queryResult = this.toQueryResult(result1);
        if (!queryResult.loading && this.asyncResolveFns.size) {
            this.asyncResolveFns.forEach(function(resolve) {
                return resolve(queryResult);
            });
            this.asyncResolveFns.clear();
        }
        return queryResult;
    };
    InternalState1.prototype.useOptions = function(options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) || !_equality.equal(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
                this.observable.reobserve(watchQueryOptions);
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        this.onCompleted = options.onCompleted || InternalState1.prototype.onCompleted;
        this.onError = options.onError || InternalState1.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) && this.queryHookOptions.ssr === false && !this.queryHookOptions.skip) this.result = this.ssrDisabledResult;
        else if (this.queryHookOptions.skip || this.watchQueryOptions.fetchPolicy === 'standby') this.result = this.skipStandbyResult;
        else if (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) this.result = void 0;
    };
    InternalState1.prototype.createWatchQueryOptions = function(_a) {
        var _b;
        if (_a === void 0) _a = {};
        var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, displayName = _a.displayName, defaultOptions = _a.defaultOptions, otherOptions = _tslib.__rest(_a, [
            "skip",
            "ssr",
            "onCompleted",
            "onError",
            "displayName",
            "defaultOptions"
        ]);
        var watchQueryOptions = Object.assign(otherOptions, {
            query: this.query
        });
        if (this.renderPromises && (watchQueryOptions.fetchPolicy === 'network-only' || watchQueryOptions.fetchPolicy === 'cache-and-network')) watchQueryOptions.fetchPolicy = 'cache-first';
        if (!watchQueryOptions.variables) watchQueryOptions.variables = {};
        if (skip) {
            var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby'
            });
        } else if (!watchQueryOptions.fetchPolicy) watchQueryOptions.fetchPolicy = ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) || this.getDefaultFetchPolicy();
        return watchQueryOptions;
    };
    InternalState1.prototype.getDefaultFetchPolicy = function() {
        var _a, _b;
        return ((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) || ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "cache-first";
    };
    InternalState1.prototype.onCompleted = function(data) {};
    InternalState1.prototype.onError = function(error) {};
    InternalState1.prototype.useObservableQuery = function() {
        var obsQuery = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || this.client.watchQuery(_indexJs1.mergeOptions(this.queryHookOptions.defaultOptions, this.watchQueryOptions));
        this.obsQueryFields = _react.useMemo(function() {
            return {
                refetch: obsQuery.refetch.bind(obsQuery),
                reobserve: obsQuery.reobserve.bind(obsQuery),
                fetchMore: obsQuery.fetchMore.bind(obsQuery),
                updateQuery: obsQuery.updateQuery.bind(obsQuery),
                startPolling: obsQuery.startPolling.bind(obsQuery),
                stopPolling: obsQuery.stopPolling.bind(obsQuery),
                subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery)
            };
        }, [
            obsQuery
        ]);
        var ssrAllowed = !(this.queryHookOptions.ssr === false || this.queryHookOptions.skip);
        if (this.renderPromises && ssrAllowed) {
            this.renderPromises.registerSSRObservable(obsQuery);
            if (obsQuery.getCurrentResult().loading) this.renderPromises.addObservableQueryPromise(obsQuery);
        }
        return obsQuery;
    };
    InternalState1.prototype.setResult = function(nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) this.previousData = previousResult.data;
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState1.prototype.handleErrorOrCompleted = function(result) {
        if (!result.loading) {
            if (result.error) this.onError(result.error);
            else if (result.data) this.onCompleted(result.data);
        }
    };
    InternalState1.prototype.getCurrentResult = function() {
        if (!this.result) this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        return this.result;
    };
    InternalState1.prototype.toQueryResult = function(result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult) return queryResult;
        var data = result.data, partial = result.partial, resultWithoutPartial = _tslib.__rest(result, [
            "data",
            "partial"
        ]);
        this.toQueryResultCache.set(result, queryResult = _tslib.__assign(_tslib.__assign(_tslib.__assign({
            data: data
        }, resultWithoutPartial), this.obsQueryFields), {
            client: this.client,
            observable: this.observable,
            variables: this.observable.variables,
            called: true,
            previousData: this.previousData
        }));
        if (!queryResult.error && _indexJs5.isNonEmptyArray(result.errors)) queryResult.error = new _indexJs3.ApolloError({
            graphQLErrors: result.errors
        });
        return queryResult;
    };
    InternalState1.prototype.unsafeHandlePartialRefetch = function(result) {
        if (result.partial && this.queryHookOptions.partialRefetch && !result.loading && (!result.data || Object.keys(result.data).length === 0) && this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: _indexJs1.NetworkStatus.refetch
            });
            this.observable.refetch();
        }
    };
    return InternalState1;
}();

},{"tslib":"lRdW5","../../utilities/globals/index.js":"60qk9","react":"21dqq","./useSyncExternalStore.js":"rRA7W","@wry/equality":"eBW80","../../core/index.js":"eo1T9","../context/index.js":"8hzHx","../../errors/index.js":"2jvqQ","../parser/index.js":"lMxkB","./useApolloClient.js":"6CQiw","../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rRA7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSyncExternalStore", ()=>useSyncExternalStore
);
var _indexJs = require("../../utilities/globals/index.js");
var _react = require("react");
var _indexJs1 = require("../../utilities/index.js");
var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = _react[uSESKey];
var useSyncExternalStore = realHook || function(subscribe, getSnapshot, getServerSnapshot) {
    var value = getSnapshot();
    if (__DEV__ && !didWarnUncachedGetSnapshot && value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        __DEV__ && _indexJs.invariant.error('The result of getSnapshot should be cached to avoid an infinite loop');
    }
    var _a = _react.useState({
        inst: {
            value: value,
            getSnapshot: getSnapshot
        }
    }), inst = _a[0].inst, forceUpdate = _a[1];
    if (_indexJs1.canUseLayoutEffect) _react.useLayoutEffect(function() {
        Object.assign(inst, {
            value: value,
            getSnapshot: getSnapshot
        });
        if (checkIfSnapshotChanged(inst)) forceUpdate({
            inst: inst
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    else Object.assign(inst, {
        value: value,
        getSnapshot: getSnapshot
    });
    _react.useEffect(function() {
        if (checkIfSnapshotChanged(inst)) forceUpdate({
            inst: inst
        });
        return subscribe(function handleStoreChange() {
            if (checkIfSnapshotChanged(inst)) forceUpdate({
                inst: inst
            });
        });
    }, [
        subscribe
    ]);
    return value;
};
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    } catch (_b) {
        return true;
    }
}

},{"../../utilities/globals/index.js":"60qk9","react":"21dqq","../../utilities/index.js":"k51w7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMxkB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentType", ()=>DocumentType
);
parcelHelpers.export(exports, "operationName", ()=>operationName
);
parcelHelpers.export(exports, "parser", ()=>parser
);
parcelHelpers.export(exports, "verifyDocumentType", ()=>verifyDocumentType
);
var _indexJs = require("../../utilities/globals/index.js");
var DocumentType;
(function(DocumentType1) {
    DocumentType1[DocumentType1["Query"] = 0] = "Query";
    DocumentType1[DocumentType1["Mutation"] = 1] = "Mutation";
    DocumentType1[DocumentType1["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch(type){
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached) return cached;
    var variables, type, name;
    __DEV__ ? _indexJs.invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") + "DocumentNode. You may need to use 'graphql-tag' or another method " + "to convert your operation into a document") : _indexJs.invariant(!!document && !!document.kind, 30);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for(var _i = 0, _a = document.definitions; _i < _a.length; _i++){
        var x = _a[_i];
        if (x.kind === 'FragmentDefinition') {
            fragments.push(x);
            continue;
        }
        if (x.kind === 'OperationDefinition') switch(x.operation){
            case 'query':
                queries.push(x);
                break;
            case 'mutation':
                mutations.push(x);
                break;
            case 'subscription':
                subscriptions.push(x);
                break;
        }
    }
    __DEV__ ? _indexJs.invariant(!fragments.length || queries.length || mutations.length || subscriptions.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : _indexJs.invariant(!fragments.length || queries.length || mutations.length || subscriptions.length, 31);
    __DEV__ ? _indexJs.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") + "subscriptions and ".concat(mutations.length, " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : _indexJs.invariant(queries.length + mutations.length + subscriptions.length <= 1, 32);
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length) type = DocumentType.Subscription;
    var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
    __DEV__ ? _indexJs.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") + "".concat(definitions.length, " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : _indexJs.invariant(definitions.length === 1, 33);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') name = definition.name.value;
    else name = 'data';
    var payload = {
        name: name,
        type: type,
        variables: variables
    };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? _indexJs.invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") + "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : _indexJs.invariant(operation.type === type, 34);
}

},{"../../utilities/globals/index.js":"60qk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nVzX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMutation", ()=>useMutation
);
var _tslib = require("tslib");
var _react = require("react");
var _indexJs = require("../../core/index.js");
var _equality = require("@wry/equality");
var _indexJs1 = require("../parser/index.js");
var _indexJs2 = require("../../errors/index.js");
var _useApolloClientJs = require("./useApolloClient.js");
function useMutation(mutation1, options1) {
    var client1 = _useApolloClientJs.useApolloClient(options1 === null || options1 === void 0 ? void 0 : options1.client);
    _indexJs1.verifyDocumentType(mutation1, _indexJs1.DocumentType.Mutation);
    var _a1 = _react.useState({
        called: false,
        loading: false,
        client: client1
    }), result = _a1[0], setResult = _a1[1];
    var ref = _react.useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client1,
        mutation: mutation1,
        options: options1
    });
    Object.assign(ref.current, {
        client: client1,
        options: options1,
        mutation: mutation1
    });
    var execute = _react.useCallback(function(executeOptions) {
        if (executeOptions === void 0) executeOptions = {};
        var _a2 = ref.current, client = _a2.client, options = _a2.options, mutation = _a2.mutation;
        var baseOptions = _tslib.__assign(_tslib.__assign({}, options), {
            mutation: mutation
        });
        if (!ref.current.result.loading && !baseOptions.ignoreResults) setResult(ref.current.result = {
            loading: true,
            error: void 0,
            data: void 0,
            called: true,
            client: client
        });
        var mutationId = ++ref.current.mutationId;
        var clientOptions = _indexJs.mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function(response) {
            var _a, _b;
            var data = response.data, errors = response.errors;
            var error = errors && errors.length > 0 ? new _indexJs2.ApolloError({
                graphQLErrors: errors
            }) : void 0;
            if (mutationId === ref.current.mutationId && !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client
                };
                if (ref.current.isMounted && !_equality.equal(ref.current.result, result_1)) setResult(ref.current.result = result_1);
            }
            (_a = baseOptions.onCompleted) === null || _a === void 0 || _a.call(baseOptions, response.data);
            (_b = executeOptions.onCompleted) === null || _b === void 0 || _b.call(executeOptions, response.data);
            return response;
        }).catch(function(error) {
            var _a, _b;
            if (mutationId === ref.current.mutationId && ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client
                };
                if (!_equality.equal(ref.current.result, result_2)) setResult(ref.current.result = result_2);
            }
            if (baseOptions.onError || clientOptions.onError) {
                (_a = baseOptions.onError) === null || _a === void 0 || _a.call(baseOptions, error);
                (_b = executeOptions.onError) === null || _b === void 0 || _b.call(executeOptions, error);
                return {
                    data: void 0,
                    errors: error
                };
            }
            throw error;
        });
    }, []);
    var reset = _react.useCallback(function() {
        setResult({
            called: false,
            loading: false,
            client: client1
        });
    }, []);
    _react.useEffect(function() {
        ref.current.isMounted = true;
        return function() {
            ref.current.isMounted = false;
        };
    }, []);
    return [
        execute,
        _tslib.__assign({
            reset: reset
        }, result)
    ];
}

},{"tslib":"lRdW5","react":"21dqq","../../core/index.js":"eo1T9","@wry/equality":"eBW80","../parser/index.js":"lMxkB","../../errors/index.js":"2jvqQ","./useApolloClient.js":"6CQiw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxceS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSubscription", ()=>useSubscription
);
var _indexJs = require("../../utilities/globals/index.js");
var _react = require("react");
var _equality = require("@wry/equality");
var _indexJs1 = require("../parser/index.js");
var _useApolloClientJs = require("./useApolloClient.js");
function useSubscription(subscription1, options) {
    var client = _useApolloClientJs.useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    _indexJs1.verifyDocumentType(subscription1, _indexJs1.DocumentType.Subscription);
    var _a1 = _react.useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables
    }), result1 = _a1[0], setResult = _a1[1];
    var _b1 = _react.useState(function() {
        if (options === null || options === void 0 ? void 0 : options.skip) return null;
        return client.subscribe({
            query: subscription1,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context
        });
    }), observable = _b1[0], setObservable = _b1[1];
    var canResetObservableRef = _react.useRef(false);
    _react.useEffect(function() {
        return function() {
            canResetObservableRef.current = true;
        };
    }, []);
    var ref = _react.useRef({
        client: client,
        subscription: subscription1,
        options: options
    });
    _react.useEffect(function() {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') shouldResubscribe = !!shouldResubscribe(options);
        if (options === null || options === void 0 ? void 0 : options.skip) {
            if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip) || canResetObservableRef.current) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables
                });
                setObservable(null);
                canResetObservableRef.current = false;
            }
        } else if (shouldResubscribe !== false && (client !== ref.current.client || subscription1 !== ref.current.subscription || (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) || !_equality.equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables)) || canResetObservableRef.current) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables
            });
            setObservable(client.subscribe({
                query: subscription1,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context
            }));
            canResetObservableRef.current = false;
        }
        Object.assign(ref.current, {
            client: client,
            subscription: subscription1,
            options: options
        });
    }, [
        client,
        subscription1,
        options,
        canResetObservableRef.current
    ]);
    _react.useEffect(function() {
        if (!observable) return;
        var subscription = observable.subscribe({
            next: function(fetchResult) {
                var _a, _b;
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables
                };
                setResult(result);
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionData) === null || _b === void 0 || _b.call(_a, {
                    client: client,
                    subscriptionData: result
                });
            },
            error: function(error) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: error,
                    variables: options === null || options === void 0 ? void 0 : options.variables
                });
            },
            complete: function() {
                var _a, _b;
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionComplete) === null || _b === void 0 || _b.call(_a);
            }
        });
        return function() {
            subscription.unsubscribe();
        };
    }, [
        observable
    ]);
    return result1;
}

},{"../../utilities/globals/index.js":"60qk9","react":"21dqq","@wry/equality":"eBW80","../parser/index.js":"lMxkB","./useApolloClient.js":"6CQiw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8gP2g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useReactiveVar", ()=>useReactiveVar
);
var _react = require("react");
function useReactiveVar(rv) {
    var value = rv();
    var setValue = _react.useState(value)[1];
    _react.useEffect(function() {
        var probablySameValue = rv();
        if (value !== probablySameValue) setValue(probablySameValue);
        else return rv.onNextChange(setValue);
    }, [
        value
    ]);
    return value;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEFXs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"an76n":[function(require,module,exports) {
const { gql  } = require("@apollo/client");
const CREATE_USER = gql`
mutation CreateNewUser($name: String!, $email: String!, $password: String!){ 
    createUser(data : {
        name : $name,
        email : $email,
        password : $password
    }){
        _id
        name
        email
        password
    }
}
`;
module.exports = {
    CREATE_USER
};

},{"@apollo/client":"2LaSG"}],"kAHxC":[function(require,module,exports) {
const { gql  } = require("@apollo/client");
const GET_USERS = gql`
    query {
        users {
            _id
            name
            email
            age
        }
    }
`;
module.exports = {
    GET_USERS
};

},{"@apollo/client":"2LaSG"}]},["kn9T2","3wtBx","hudl2"], "hudl2", "parcelRequire8e7c")

//# sourceMappingURL=index.970efb96.js.map
