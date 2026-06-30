module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
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
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
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
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
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
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
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
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
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
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
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
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
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
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
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
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
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
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/node_modules/@smithy/is-array-buffer/dist-es/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArrayBuffer",
    ()=>isArrayBuffer
]);
const isArrayBuffer = (arg)=>typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
}),
"[project]/node_modules/@smithy/util-buffer-from/dist-es/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromArrayBuffer",
    ()=>fromArrayBuffer,
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$is$2d$array$2d$buffer$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/is-array-buffer/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
;
;
const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$is$2d$array$2d$buffer$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArrayBuffer"])(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(input, offset, length);
};
const fromString = (input, encoding)=>{
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(input, encoding) : __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(input);
};
}),
"[project]/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromUtf8",
    ()=>fromUtf8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$buffer$2d$from$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-buffer-from/dist-es/index.js [app-route] (ecmascript)");
;
const fromUtf8 = (input)=>{
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$buffer$2d$from$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromString"])(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
}),
"[project]/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toUint8Array",
    ()=>toUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)");
;
const toUint8Array = (data)=>{
    if (typeof data === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromUtf8"])(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};
}),
"[project]/node_modules/@smithy/util-utf8/dist-es/toUtf8.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toUtf8",
    ()=>toUtf8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$buffer$2d$from$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-buffer-from/dist-es/index.js [app-route] (ecmascript)");
;
const toUtf8 = (input)=>{
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$buffer$2d$from$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromArrayBuffer"])(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};
}),
"[project]/node_modules/@smithy/util-utf8/dist-es/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-utf8/dist-es/toUtf8.js [app-route] (ecmascript)");
;
;
;
}),
"[project]/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertToBuffer",
    ()=>convertToBuffer
]);
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-utf8/dist-es/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)");
;
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
} : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromUtf8"];
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array) return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
}),
"[project]/node_modules/@aws-crypto/util/build/module/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [app-route] (ecmascript)");
;
;
;
;
}),
"[project]/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// IE 11 does not support Array.from, so we do it manually
__turbopack_context__.s([
    "uint32ArrayFrom",
    ()=>uint32ArrayFrom
]);
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while(a_index < a_lookUpTable.length){
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
}),
"[project]/node_modules/@aws-crypto/util/build/module/isEmptyData.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "isEmptyData",
    ()=>isEmptyData
]);
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
}),
"[project]/node_modules/@aws-crypto/util/build/module/numToUint8.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "numToUint8",
    ()=>numToUint8
]);
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff
    ]);
}
}),
"[project]/node_modules/@aws-crypto/crc32/build/module/aws_crc32.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AwsCrc32",
    ()=>AwsCrc32
]);
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/isEmptyData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$numToUint8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/numToUint8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/crc32/build/module/index.js [app-route] (ecmascript) <locals>");
;
;
;
var AwsCrc32 = function() {
    function AwsCrc32() {
        this.crc32 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Crc32"]();
    }
    AwsCrc32.prototype.update = function(toHash) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmptyData"])(toHash)) return;
        this.crc32.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToBuffer"])(toHash));
    };
    AwsCrc32.prototype.digest = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                return [
                    2 /*return*/ ,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$numToUint8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numToUint8"])(this.crc32.digest())
                ];
            });
        });
    };
    AwsCrc32.prototype.reset = function() {
        this.crc32 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Crc32"]();
    };
    return AwsCrc32;
}();
;
}),
"[project]/node_modules/@aws-crypto/crc32/build/module/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Crc32",
    ()=>Crc32,
    "crc32",
    ()=>crc32
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$uint32ArrayFrom$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$aws_crc32$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/crc32/build/module/aws_crc32.js [app-route] (ecmascript)");
;
;
function crc32(data) {
    return new Crc32().update(data).digest();
}
var Crc32 = function() {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function(data) {
        var e_1, _a;
        try {
            for(var data_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__values"])(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()){
                var byte = data_1_1.value;
                this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this;
    };
    Crc32.prototype.digest = function() {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}();
;
// prettier-ignore
var a_lookUpTable = [
    0x00000000,
    0x77073096,
    0xEE0E612C,
    0x990951BA,
    0x076DC419,
    0x706AF48F,
    0xE963A535,
    0x9E6495A3,
    0x0EDB8832,
    0x79DCB8A4,
    0xE0D5E91E,
    0x97D2D988,
    0x09B64C2B,
    0x7EB17CBD,
    0xE7B82D07,
    0x90BF1D91,
    0x1DB71064,
    0x6AB020F2,
    0xF3B97148,
    0x84BE41DE,
    0x1ADAD47D,
    0x6DDDE4EB,
    0xF4D4B551,
    0x83D385C7,
    0x136C9856,
    0x646BA8C0,
    0xFD62F97A,
    0x8A65C9EC,
    0x14015C4F,
    0x63066CD9,
    0xFA0F3D63,
    0x8D080DF5,
    0x3B6E20C8,
    0x4C69105E,
    0xD56041E4,
    0xA2677172,
    0x3C03E4D1,
    0x4B04D447,
    0xD20D85FD,
    0xA50AB56B,
    0x35B5A8FA,
    0x42B2986C,
    0xDBBBC9D6,
    0xACBCF940,
    0x32D86CE3,
    0x45DF5C75,
    0xDCD60DCF,
    0xABD13D59,
    0x26D930AC,
    0x51DE003A,
    0xC8D75180,
    0xBFD06116,
    0x21B4F4B5,
    0x56B3C423,
    0xCFBA9599,
    0xB8BDA50F,
    0x2802B89E,
    0x5F058808,
    0xC60CD9B2,
    0xB10BE924,
    0x2F6F7C87,
    0x58684C11,
    0xC1611DAB,
    0xB6662D3D,
    0x76DC4190,
    0x01DB7106,
    0x98D220BC,
    0xEFD5102A,
    0x71B18589,
    0x06B6B51F,
    0x9FBFE4A5,
    0xE8B8D433,
    0x7807C9A2,
    0x0F00F934,
    0x9609A88E,
    0xE10E9818,
    0x7F6A0DBB,
    0x086D3D2D,
    0x91646C97,
    0xE6635C01,
    0x6B6B51F4,
    0x1C6C6162,
    0x856530D8,
    0xF262004E,
    0x6C0695ED,
    0x1B01A57B,
    0x8208F4C1,
    0xF50FC457,
    0x65B0D9C6,
    0x12B7E950,
    0x8BBEB8EA,
    0xFCB9887C,
    0x62DD1DDF,
    0x15DA2D49,
    0x8CD37CF3,
    0xFBD44C65,
    0x4DB26158,
    0x3AB551CE,
    0xA3BC0074,
    0xD4BB30E2,
    0x4ADFA541,
    0x3DD895D7,
    0xA4D1C46D,
    0xD3D6F4FB,
    0x4369E96A,
    0x346ED9FC,
    0xAD678846,
    0xDA60B8D0,
    0x44042D73,
    0x33031DE5,
    0xAA0A4C5F,
    0xDD0D7CC9,
    0x5005713C,
    0x270241AA,
    0xBE0B1010,
    0xC90C2086,
    0x5768B525,
    0x206F85B3,
    0xB966D409,
    0xCE61E49F,
    0x5EDEF90E,
    0x29D9C998,
    0xB0D09822,
    0xC7D7A8B4,
    0x59B33D17,
    0x2EB40D81,
    0xB7BD5C3B,
    0xC0BA6CAD,
    0xEDB88320,
    0x9ABFB3B6,
    0x03B6E20C,
    0x74B1D29A,
    0xEAD54739,
    0x9DD277AF,
    0x04DB2615,
    0x73DC1683,
    0xE3630B12,
    0x94643B84,
    0x0D6D6A3E,
    0x7A6A5AA8,
    0xE40ECF0B,
    0x9309FF9D,
    0x0A00AE27,
    0x7D079EB1,
    0xF00F9344,
    0x8708A3D2,
    0x1E01F268,
    0x6906C2FE,
    0xF762575D,
    0x806567CB,
    0x196C3671,
    0x6E6B06E7,
    0xFED41B76,
    0x89D32BE0,
    0x10DA7A5A,
    0x67DD4ACC,
    0xF9B9DF6F,
    0x8EBEEFF9,
    0x17B7BE43,
    0x60B08ED5,
    0xD6D6A3E8,
    0xA1D1937E,
    0x38D8C2C4,
    0x4FDFF252,
    0xD1BB67F1,
    0xA6BC5767,
    0x3FB506DD,
    0x48B2364B,
    0xD80D2BDA,
    0xAF0A1B4C,
    0x36034AF6,
    0x41047A60,
    0xDF60EFC3,
    0xA867DF55,
    0x316E8EEF,
    0x4669BE79,
    0xCB61B38C,
    0xBC66831A,
    0x256FD2A0,
    0x5268E236,
    0xCC0C7795,
    0xBB0B4703,
    0x220216B9,
    0x5505262F,
    0xC5BA3BBE,
    0xB2BD0B28,
    0x2BB45A92,
    0x5CB36A04,
    0xC2D7FFA7,
    0xB5D0CF31,
    0x2CD99E8B,
    0x5BDEAE1D,
    0x9B64C2B0,
    0xEC63F226,
    0x756AA39C,
    0x026D930A,
    0x9C0906A9,
    0xEB0E363F,
    0x72076785,
    0x05005713,
    0x95BF4A82,
    0xE2B87A14,
    0x7BB12BAE,
    0x0CB61B38,
    0x92D28E9B,
    0xE5D5BE0D,
    0x7CDCEFB7,
    0x0BDBDF21,
    0x86D3D2D4,
    0xF1D4E242,
    0x68DDB3F8,
    0x1FDA836E,
    0x81BE16CD,
    0xF6B9265B,
    0x6FB077E1,
    0x18B74777,
    0x88085AE6,
    0xFF0F6A70,
    0x66063BCA,
    0x11010B5C,
    0x8F659EFF,
    0xF862AE69,
    0x616BFFD3,
    0x166CCF45,
    0xA00AE278,
    0xD70DD2EE,
    0x4E048354,
    0x3903B3C2,
    0xA7672661,
    0xD06016F7,
    0x4969474D,
    0x3E6E77DB,
    0xAED16A4A,
    0xD9D65ADC,
    0x40DF0B66,
    0x37D83BF0,
    0xA9BCAE53,
    0xDEBB9EC5,
    0x47B2CF7F,
    0x30B5FFE9,
    0xBDBDF21C,
    0xCABAC28A,
    0x53B39330,
    0x24B4A3A6,
    0xBAD03605,
    0xCDD70693,
    0x54DE5729,
    0x23D967BF,
    0xB3667A2E,
    0xC4614AB8,
    0x5D681B02,
    0x2A6F2B94,
    0xB40BBE37,
    0xC30C8EA1,
    0x5A05DF1B,
    0x2D02EF8D
];
var lookupTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$uint32ArrayFrom$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uint32ArrayFrom"])(a_lookUpTable);
;
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Int64",
    ()=>Int64
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-route] (ecmascript)");
;
class Int64 {
    bytes;
    constructor(bytes){
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9_223_372_036_854_775_807 || number < -9_223_372_036_854_775_808) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for(let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256){
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for(let i = 0; i < 8; i++){
        bytes[i] ^= 0xff;
    }
    for(let i = 7; i > -1; i--){
        bytes[i]++;
        if (bytes[i] !== 0) break;
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderMarshaller",
    ()=>HeaderMarshaller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$Int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js [app-route] (ecmascript)");
;
;
class HeaderMarshaller {
    toUtf8;
    fromUtf8;
    constructor(toUtf8, fromUtf8){
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)){
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([
                bytes.byteLength
            ]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes)=>carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks){
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch(header.type){
            case "boolean":
                return Uint8Array.from([
                    header.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    header.value
                ]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$Int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Int64"].fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromHex"])(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while(position < headers.byteLength){
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch(headers.getUint8(position++)){
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++)
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false)
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false)
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$Int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Int64"](new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$Int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Int64"](new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(uuidBytes.subarray(0, 4))}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(uuidBytes.subarray(4, 6))}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(uuidBytes.subarray(6, 8))}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(uuidBytes.subarray(8, 10))}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$hex$2d$encoding$2f$hex$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHex"])(uuidBytes.subarray(10))}`
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/splitMessage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "splitMessage",
    ()=>splitMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/crc32/build/module/index.js [app-route] (ecmascript) <locals>");
;
const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Crc32"]().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
    };
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStreamCodec",
    ()=>EventStreamCodec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-crypto/crc32/build/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$HeaderMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$splitMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/splitMessage.js [app-route] (ecmascript)");
;
;
;
class EventStreamCodec {
    headerMarshaller;
    messageBuffer;
    isEndOfStream;
    constructor(toUtf8, fromUtf8){
        this.headerMarshaller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$HeaderMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HeaderMarshaller"](toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
    }
    feed(message) {
        this.messageBuffer.push(this.decode(message));
    }
    endOfStream() {
        this.isEndOfStream = true;
    }
    getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessage () {
                return message;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessages () {
                return messages;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$crypto$2f$crc32$2f$build$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Crc32"]();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    }
    decode(message) {
        const { headers, body } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$splitMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["splitMessage"])(message);
        return {
            headers: this.headerMarshaller.parse(headers),
            body
        };
    }
    formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageDecoderStream",
    ()=>MessageDecoderStream
]);
class MessageDecoderStream {
    options;
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const bytes of this.options.inputStream){
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
        }
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageEncoderStream",
    ()=>MessageEncoderStream
]);
class MessageEncoderStream {
    options;
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const msg of this.options.messageStream){
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
        }
        if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
        }
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmithyMessageDecoderStream",
    ()=>SmithyMessageDecoderStream
]);
class SmithyMessageDecoderStream {
    options;
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const message of this.options.messageStream){
            const deserialized = await this.options.deserializer(message);
            if (deserialized === undefined) continue;
            yield deserialized;
        }
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmithyMessageEncoderStream",
    ()=>SmithyMessageEncoderStream
]);
class SmithyMessageEncoderStream {
    options;
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const chunk of this.options.inputStream){
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
        }
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChunkedStream",
    ()=>getChunkedStream
]);
function getChunkedStream(source) {
    let currentMessageTotalLength = 0;
    let currentMessagePendingLength = 0;
    let currentMessage = null;
    let messageLengthBuffer = null;
    const allocateMessage = (size)=>{
        if (typeof size !== "number") {
            throw new Error("Attempted to allocate an event message where size was not a number: " + size);
        }
        currentMessageTotalLength = size;
        currentMessagePendingLength = 4;
        currentMessage = new Uint8Array(size);
        const currentMessageView = new DataView(currentMessage.buffer);
        currentMessageView.setUint32(0, size, false);
    };
    const iterator = async function*() {
        const sourceIterator = source[Symbol.asyncIterator]();
        while(true){
            const { value, done } = await sourceIterator.next();
            if (done) {
                if (!currentMessageTotalLength) {
                    return;
                } else if (currentMessageTotalLength === currentMessagePendingLength) {
                    yield currentMessage;
                } else {
                    throw new Error("Truncated event message received.");
                }
                return;
            }
            const chunkLength = value.length;
            let currentOffset = 0;
            while(currentOffset < chunkLength){
                if (!currentMessage) {
                    const bytesRemaining = chunkLength - currentOffset;
                    if (!messageLengthBuffer) {
                        messageLengthBuffer = new Uint8Array(4);
                    }
                    const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
                    messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
                    currentMessagePendingLength += numBytesForTotal;
                    currentOffset += numBytesForTotal;
                    if (currentMessagePendingLength < 4) {
                        break;
                    }
                    allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
                    messageLengthBuffer = null;
                }
                const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
                currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
                currentMessagePendingLength += numBytesToWrite;
                currentOffset += numBytesToWrite;
                if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
                    yield currentMessage;
                    currentMessage = null;
                    currentMessageTotalLength = 0;
                    currentMessagePendingLength = 0;
                }
            }
        }
    };
    return {
        [Symbol.asyncIterator]: iterator
    };
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMessageUnmarshaller",
    ()=>getMessageUnmarshaller,
    "getUnmarshalledStream",
    ()=>getUnmarshalledStream
]);
function getUnmarshalledStream(source, options) {
    const messageUnmarshaller = getMessageUnmarshaller(options.deserializer, options.toUtf8);
    return {
        [Symbol.asyncIterator]: async function*() {
            for await (const chunk of source){
                const message = options.eventStreamCodec.decode(chunk);
                const type = await messageUnmarshaller(message);
                if (type === undefined) continue;
                yield type;
            }
        }
    };
}
function getMessageUnmarshaller(deserializer, toUtf8) {
    return async function(message) {
        const { value: messageType } = message.headers[":message-type"];
        if (messageType === "error") {
            const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
            unmodeledError.name = message.headers[":error-code"].value;
            throw unmodeledError;
        } else if (messageType === "exception") {
            const code = message.headers[":exception-type"].value;
            const exception = {
                [code]: message
            };
            const deserializedException = await deserializer(exception);
            if (deserializedException.$unknown) {
                const error = new Error(toUtf8(message.body));
                error.name = code;
                throw error;
            }
            throw deserializedException[code];
        } else if (messageType === "event") {
            const event = {
                [message.headers[":event-type"].value]: message
            };
            const deserialized = await deserializer(event);
            if (deserialized.$unknown) return;
            return deserialized;
        } else {
            throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
        }
    };
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStreamMarshaller",
    ()=>EventStreamMarshaller,
    "eventStreamSerdeProvider",
    ()=>eventStreamSerdeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$EventStreamCodec$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getChunkedStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getUnmarshalledStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class EventStreamMarshaller {
    eventStreamCodec;
    utfEncoder;
    constructor({ utf8Encoder, utf8Decoder }){
        this.eventStreamCodec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$EventStreamCodec$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamCodec"](utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
    }
    deserialize(body, deserializer) {
        const inputStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getChunkedStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChunkedStream"])(body);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SmithyMessageDecoderStream"]({
            messageStream: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageDecoderStream"]({
                inputStream,
                decoder: this.eventStreamCodec
            }),
            deserializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getUnmarshalledStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMessageUnmarshaller"])(deserializer, this.utfEncoder)
        });
    }
    serialize(inputStream, serializer) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageEncoderStream"]({
            messageStream: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SmithyMessageEncoderStream"]({
                inputStream,
                serializer
            }),
            encoder: this.eventStreamCodec,
            includeEndFrame: true
        });
    }
}
const eventStreamSerdeProvider = (options)=>new EventStreamMarshaller(options);
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/EventStreamMarshaller.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStreamMarshaller",
    ()=>EventStreamMarshaller,
    "eventStreamSerdeProvider",
    ()=>eventStreamSerdeProvider,
    "readableToIterable",
    ()=>readableToIterable
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js [app-route] (ecmascript)");
;
;
class EventStreamMarshaller {
    universalMarshaller;
    constructor({ utf8Encoder, utf8Decoder }){
        this.universalMarshaller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamMarshaller"]({
            utf8Decoder,
            utf8Encoder
        });
    }
    deserialize(body, deserializer) {
        const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readableToIterable(body);
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
    }
    serialize(input, serializer) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Readable"].from(this.universalMarshaller.serialize(input, serializer));
    }
}
const eventStreamSerdeProvider = (options)=>new EventStreamMarshaller(options);
async function* readableToIterable(readStream) {
    let streamEnded = false;
    let generationEnded = false;
    const records = new Array();
    readStream.on("error", (err)=>{
        if (!streamEnded) {
            streamEnded = true;
        }
        if (err) {
            throw err;
        }
    });
    readStream.on("data", (data)=>{
        records.push(data);
    });
    readStream.on("end", ()=>{
        streamEnded = true;
    });
    while(!generationEnded){
        const value = await new Promise((resolve)=>setTimeout(()=>resolve(records.shift()), 0));
        if (value) {
            yield value;
        }
        generationEnded = streamEnded && records.length === 0;
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iterableToReadableStream",
    ()=>iterableToReadableStream,
    "readableStreamToIterable",
    ()=>readableStreamToIterable
]);
const readableStreamToIterable = (readableStream)=>({
        [Symbol.asyncIterator]: async function*() {
            const reader = readableStream.getReader();
            try {
                while(true){
                    const { done, value } = await reader.read();
                    if (done) return;
                    yield value;
                }
            } finally{
                reader.releaseLock();
            }
        }
    });
const iterableToReadableStream = (asyncIterable)=>{
    const iterator = asyncIterable[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (controller) {
            const { done, value } = await iterator.next();
            if (done) {
                return controller.close();
            }
            controller.enqueue(value);
        }
    });
};
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-config-resolver/EventStreamSerdeConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveEventStreamSerdeConfig",
    ()=>resolveEventStreamSerdeConfig
]);
const resolveEventStreamSerdeConfig = (input)=>Object.assign(input, {
        eventStreamMarshaller: input.eventStreamSerdeProvider(input)
    });
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStreamSerde",
    ()=>EventStreamSerde
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUtf8.js [app-route] (ecmascript)");
;
class EventStreamSerde {
    marshaller;
    serializer;
    deserializer;
    serdeContext;
    defaultContentType;
    constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }){
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
    }
    async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const marshaller = this.marshaller;
        const eventStreamMember = requestSchema.getEventStreamMember();
        const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
        const serializer = this.serializer;
        const defaultContentType = this.defaultContentType;
        const initialRequestMarker = Symbol("initialRequestMarker");
        const eventStreamIterable = {
            async *[Symbol.asyncIterator] () {
                if (initialRequest) {
                    const headers = {
                        ":event-type": {
                            type: "string",
                            value: "initial-request"
                        },
                        ":message-type": {
                            type: "string",
                            value: "event"
                        },
                        ":content-type": {
                            type: "string",
                            value: defaultContentType
                        }
                    };
                    serializer.write(requestSchema, initialRequest);
                    const body = serializer.flush();
                    yield {
                        [initialRequestMarker]: true,
                        headers,
                        body
                    };
                }
                for await (const page of eventStream){
                    yield page;
                }
            }
        };
        return marshaller.serialize(eventStreamIterable, (event)=>{
            if (event[initialRequestMarker]) {
                return {
                    headers: event.headers,
                    body: event.body
                };
            }
            let unionMember = "";
            for(const key in event){
                if (key !== "__type") {
                    unionMember = key;
                    break;
                }
            }
            const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
            const headers = {
                ":event-type": {
                    type: "string",
                    value: eventType
                },
                ":message-type": {
                    type: "string",
                    value: "event"
                },
                ":content-type": {
                    type: "string",
                    value: explicitPayloadContentType ?? defaultContentType
                },
                ...additionalHeaders
            };
            return {
                headers,
                body
            };
        });
    }
    async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const marshaller = this.marshaller;
        const eventStreamMember = responseSchema.getEventStreamMember();
        const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
        const memberSchemas = unionSchema.getMemberSchemas();
        const initialResponseMarker = Symbol("initialResponseMarker");
        const asyncIterable = marshaller.deserialize(response.body, async (event)=>{
            let unionMember = "";
            for(const key in event){
                if (key !== "__type") {
                    unionMember = key;
                    break;
                }
            }
            const body = event[unionMember].body;
            if (unionMember === "initial-response") {
                const dataObject = await this.deserializer.read(responseSchema, body);
                delete dataObject[eventStreamMember];
                return {
                    [initialResponseMarker]: true,
                    ...dataObject
                };
            } else if (unionMember in memberSchemas) {
                const eventStreamSchema = memberSchemas[unionMember];
                if (eventStreamSchema.isStructSchema()) {
                    const out = {};
                    let hasBindings = false;
                    for (const [name, member] of eventStreamSchema.structIterator()){
                        const { eventHeader, eventPayload } = member.getMergedTraits();
                        hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                        if (eventPayload) {
                            if (member.isBlobSchema()) {
                                out[name] = body;
                            } else if (member.isStringSchema()) {
                                out[name] = (this.serdeContext?.utf8Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUtf8"])(body);
                            } else if (member.isStructSchema()) {
                                out[name] = await this.deserializer.read(member, body);
                            }
                        } else if (eventHeader) {
                            const value = event[unionMember].headers[name]?.value;
                            if (value != null) {
                                if (member.isNumericSchema()) {
                                    if (value && typeof value === "object" && "bytes" in value) {
                                        out[name] = BigInt(value.toString());
                                    } else {
                                        out[name] = Number(value);
                                    }
                                } else {
                                    out[name] = value;
                                }
                            }
                        }
                    }
                    if (hasBindings) {
                        return {
                            [unionMember]: out
                        };
                    }
                    if (body.byteLength === 0) {
                        return {
                            [unionMember]: {}
                        };
                    }
                }
                return {
                    [unionMember]: await this.deserializer.read(eventStreamSchema, body)
                };
            } else {
                return {
                    $unknown: event
                };
            }
        });
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        const firstEvent = await asyncIterator.next();
        if (firstEvent.done) {
            return asyncIterable;
        }
        if (firstEvent.value?.[initialResponseMarker]) {
            if (!responseSchema) {
                throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
            }
            for(const key in firstEvent.value){
                initialResponseContainer[key] = firstEvent.value[key];
            }
        }
        return {
            async *[Symbol.asyncIterator] () {
                if (!firstEvent?.value?.[initialResponseMarker]) {
                    yield firstEvent.value;
                }
                while(true){
                    const { done, value } = await asyncIterator.next();
                    if (done) {
                        break;
                    }
                    yield value;
                }
            }
        };
    }
    writeEventBody(unionMember, unionSchema, event) {
        const serializer = this.serializer;
        let eventType = unionMember;
        let explicitPayloadMember = null;
        let explicitPayloadContentType;
        const isKnownSchema = (()=>{
            const struct = unionSchema.getSchema();
            return struct[4].includes(unionMember);
        })();
        const additionalHeaders = {};
        if (!isKnownSchema) {
            const [type, value] = event[unionMember];
            eventType = type;
            serializer.write(15, value);
        } else {
            const eventSchema = unionSchema.getMemberSchema(unionMember);
            if (eventSchema.isStructSchema()) {
                for (const [memberName, memberSchema] of eventSchema.structIterator()){
                    const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
                    if (eventPayload) {
                        explicitPayloadMember = memberName;
                    } else if (eventHeader) {
                        const value = event[unionMember][memberName];
                        let type = "binary";
                        if (memberSchema.isNumericSchema()) {
                            if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                                type = "integer";
                            } else {
                                type = "long";
                            }
                        } else if (memberSchema.isTimestampSchema()) {
                            type = "timestamp";
                        } else if (memberSchema.isStringSchema()) {
                            type = "string";
                        } else if (memberSchema.isBooleanSchema()) {
                            type = "boolean";
                        }
                        if (value != null) {
                            additionalHeaders[memberName] = {
                                type,
                                value
                            };
                            delete event[unionMember][memberName];
                        }
                    }
                }
                if (explicitPayloadMember !== null) {
                    const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
                    if (payloadSchema.isBlobSchema()) {
                        explicitPayloadContentType = "application/octet-stream";
                    } else if (payloadSchema.isStringSchema()) {
                        explicitPayloadContentType = "text/plain";
                    }
                    serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
                } else {
                    serializer.write(eventSchema, event[unionMember]);
                }
            } else if (eventSchema.isUnitSchema()) {
                serializer.write(eventSchema, {});
            } else {
                throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            }
        }
        const messageSerialization = serializer.flush() ?? new Uint8Array();
        const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$util$2d$utf8$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromUtf8"])(messageSerialization) : messageSerialization;
        return {
            body,
            eventType,
            explicitPayloadContentType,
            additionalHeaders
        };
    }
}
}),
"[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStreamCodec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$EventStreamCodec$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamCodec"],
    "EventStreamMarshaller",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamMarshaller"],
    "EventStreamSerde",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$EventStreamSerde$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamSerde"],
    "HeaderMarshaller",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$HeaderMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HeaderMarshaller"],
    "Int64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$Int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Int64"],
    "MessageDecoderStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageDecoderStream"],
    "MessageEncoderStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageEncoderStream"],
    "SmithyMessageDecoderStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SmithyMessageDecoderStream"],
    "SmithyMessageEncoderStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SmithyMessageEncoderStream"],
    "UniversalEventStreamMarshaller",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventStreamMarshaller"],
    "eventStreamSerdeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eventStreamSerdeProvider"],
    "getChunkedStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getChunkedStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChunkedStream"],
    "getMessageUnmarshaller",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getUnmarshalledStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMessageUnmarshaller"],
    "getUnmarshalledStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getUnmarshalledStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUnmarshalledStream"],
    "iterableToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterableToReadableStream"],
    "readableStreamToIterable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readableStreamToIterable"],
    "resolveEventStreamSerdeConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$config$2d$resolver$2f$EventStreamSerdeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveEventStreamSerdeConfig"],
    "universalEventStreamSerdeProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eventStreamSerdeProvider"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$EventStreamCodec$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$HeaderMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$Int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$MessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageDecoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$codec$2f$SmithyMessageEncoderStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/EventStreamMarshaller.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$EventStreamMarshaller$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getChunkedStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$universal$2f$getUnmarshalledStream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$eventstream$2d$serde$2d$config$2d$resolver$2f$EventStreamSerdeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-config-resolver/EventStreamSerdeConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$event$2d$streams$2f$EventStreamSerde$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1rb7nmx._.js.map