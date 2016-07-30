(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_77__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _polyfill = __webpack_require__(1);

	Object.keys(_polyfill).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _polyfill[key];
	    }
	  });
	});

	var _rguiUiBase = __webpack_require__(75);

	Object.keys(_rguiUiBase).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiBase[key];
	    }
	  });
	});

	var _rguiUiCalendar = __webpack_require__(81);

	Object.keys(_rguiUiCalendar).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiCalendar[key];
	    }
	  });
	});

	var _rguiUiDrag = __webpack_require__(85);

	Object.keys(_rguiUiDrag).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiDrag[key];
	    }
	  });
	});

	var _rguiUiListview = __webpack_require__(91);

	Object.keys(_rguiUiListview).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiListview[key];
	    }
	  });
	});

	var _rguiUiModal = __webpack_require__(96);

	Object.keys(_rguiUiModal).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiModal[key];
	    }
	  });
	});

	var _rguiUiOverlay = __webpack_require__(99);

	Object.keys(_rguiUiOverlay).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiOverlay[key];
	    }
	  });
	});

	var _rguiUiPager = __webpack_require__(102);

	Object.keys(_rguiUiPager).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiPager[key];
	    }
	  });
	});

	var _rguiUiResizable = __webpack_require__(105);

	Object.keys(_rguiUiResizable).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiResizable[key];
	    }
	  });
	});

	var _rguiUiSelect = __webpack_require__(108);

	Object.keys(_rguiUiSelect).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiSelect[key];
	    }
	  });
	});

	var _rguiUiSlider = __webpack_require__(111);

	Object.keys(_rguiUiSlider).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiSlider[key];
	    }
	  });
	});

	var _rguiUiTabs = __webpack_require__(120);

	Object.keys(_rguiUiTabs).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiTabs[key];
	    }
	  });
	});

	var _rguiUiUploader = __webpack_require__(124);

	Object.keys(_rguiUiUploader).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rguiUiUploader[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _from = __webpack_require__(2);

	Object.keys(_from).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _from[key];
	    }
	  });
	});

	var _find = __webpack_require__(54);

	Object.keys(_find).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _find[key];
	    }
	  });
	});

	var _assign = __webpack_require__(61);

	Object.keys(_assign).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _assign[key];
	    }
	  });
	});

	var _includes = __webpack_require__(66);

	Object.keys(_includes).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _includes[key];
	    }
	  });
	});

	var _startsWith = __webpack_require__(71);

	Object.keys(_startsWith).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _startsWith[key];
	    }
	  });
	});

	var _endsWith = __webpack_require__(73);

	Object.keys(_endsWith).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _endsWith[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(47);
	module.exports = __webpack_require__(11).Array.from;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(4)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(7)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(5)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(8)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(22)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(23)
	  , Iterators      = __webpack_require__(27)
	  , $iterCreate    = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(43)
	  , getPrototypeOf = __webpack_require__(45)
	  , ITERATOR       = __webpack_require__(44)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , hide      = __webpack_require__(12)
	  , redefine  = __webpack_require__(22)
	  , ctx       = __webpack_require__(25)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , has       = __webpack_require__(23)
	  , SRC       = __webpack_require__(24)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(11).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(29)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(43)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(44)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(30)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(42).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(31);

	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(23)
	  , toIObject    = __webpack_require__(33)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(38);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(5)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(5)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys')
	  , uid    = __webpack_require__(24);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(23)
	  , TAG = __webpack_require__(44)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(40)('wks')
	  , uid        = __webpack_require__(24)
	  , Symbol     = __webpack_require__(10).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(23)
	  , toObject    = __webpack_require__(46)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(25)
	  , $export        = __webpack_require__(9)
	  , toObject       = __webpack_require__(46)
	  , call           = __webpack_require__(48)
	  , isArrayIter    = __webpack_require__(49)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(50)
	  , getIterFn      = __webpack_require__(51);

	$export($export.S + $export.F * !__webpack_require__(53)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(27)
	  , ITERATOR   = __webpack_require__(44)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(13)
	  , createDesc      = __webpack_require__(21);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(52)
	  , ITERATOR  = __webpack_require__(44)('iterator')
	  , Iterators = __webpack_require__(27);
	module.exports = __webpack_require__(11).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35)
	  , TAG = __webpack_require__(44)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(44)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	module.exports = __webpack_require__(11).Array.find;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(9)
	  , $find   = __webpack_require__(56)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(60)(KEY);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(25)
	  , IObject  = __webpack_require__(34)
	  , toObject = __webpack_require__(46)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(57);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(58);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , isArray  = __webpack_require__(59)
	  , SPECIES  = __webpack_require__(44)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(44)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	module.exports = __webpack_require__(11).Object.assign;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(63)});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(31)
	  , gOPS     = __webpack_require__(64)
	  , pIE      = __webpack_require__(65)
	  , toObject = __webpack_require__(46)
	  , IObject  = __webpack_require__(34)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	module.exports = __webpack_require__(11).String.includes;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(9)
	  , context  = __webpack_require__(68)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(70)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(69)
	  , defined  = __webpack_require__(6);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(15)
	  , cof      = __webpack_require__(35)
	  , MATCH    = __webpack_require__(44)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(44)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	module.exports = __webpack_require__(11).String.startsWith;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(9)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(68)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(70)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	module.exports = __webpack_require__(11).String.endsWith;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(9)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(68)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(70)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._ = exports.Component = undefined;

	var _component = __webpack_require__(76);

	var _component2 = _interopRequireDefault(_component);

	var _util = __webpack_require__(80);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Component = _component2.default;
	exports._ = _util2.default;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(77);

	var _regularjs2 = _interopRequireDefault(_regularjs);

	var _filter = __webpack_require__(78);

	var _filter2 = _interopRequireDefault(_filter);

	var _directive = __webpack_require__(79);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Component
	 * @extend Regular
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Component = _regularjs2.default.extend({
	    /**
	     * @protected
	     */
	    config: function config() {
	        this.data = Object.assign({
	            readonly: false,
	            disabled: false,
	            visible: true,
	            'class': ''
	        }, this.data);
	        this.supr();
	    }
	}).filter(_filter2.default).directive(_directive2.default);

	exports.default = Component;

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var filter = {};

	filter.dateFormat = function () {
	    var fix = function fix() {
	        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	        str = str + '';
	        return str.length <= 1 ? '0' + str : str;
	    };

	    var MAPS = {
	        yyyy: function yyyy(date) {
	            return date.getFullYear();
	        },
	        MM: function MM(date) {
	            return fix(date.getMonth() + 1);
	        },
	        dd: function dd(date) {
	            return fix(date.getDate());
	        },
	        HH: function HH(date) {
	            return fix(date.getHours());
	        },
	        mm: function mm(date) {
	            return fix(date.getMinutes());
	        },
	        ss: function ss(date) {
	            return fix(date.getSeconds());
	        }
	    };

	    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');

	    return function (value) {
	        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];

	        if (!value) return '';
	        value = new Date(value);

	        return format.replace(trunk, function (capture) {
	            return MAPS[capture] ? MAPS[capture](value) : '';
	        });
	    };
	}();

	filter.format = function (value, type) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }

	    return filter[type + 'Format'].apply(filter, [value].concat(args));
	};

	exports.default = filter;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(80);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var directive = {};

	directive['z-crt'] = _util2.default.createBoolClassDirective('z-crt');
	directive['z-sel'] = _util2.default.createBoolClassDirective('z-sel');
	directive['z-chk'] = _util2.default.createBoolClassDirective('z-chk');
	directive['z-dis'] = _util2.default.createBoolClassDirective('z-dis');

	directive['r-show'] = _util2.default.createBoolDirective(function (elem, value) {
	    elem.style.display = value ? 'block' : '';
	});

	directive['r-autofocus'] = _util2.default.createBoolDirective(function (elem, value) {
	    value && setTimeout(function () {
	        return elem.focus();
	    }, 0);
	});

	exports.default = directive;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _regularjs = __webpack_require__(77);

	var _ = {};

	_.createBoolDirective = function (func) {
	    return function (elem, value) {
	        var _this = this;

	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') {
	            this.$watch(value, function (newValue, oldValue) {
	                if (!newValue === !oldValue) return;
	                func.call(_this, elem, newValue);
	            });
	        } else if (!!value || value === '') func.call(this, elem, true);
	    };
	};

	_.createBoolClassDirective = function (boolClass) {
	    return _.createBoolDirective(function (elem, value) {
	        _regularjs.dom[value ? 'addClass' : 'delClass'](elem, boolClass);
	    });
	};

	exports.default = _;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Calendar = undefined;

	var _calendar = __webpack_require__(82);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Calendar = _calendar2.default;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _util = __webpack_require__(83);

	var _util2 = _interopRequireDefault(_util);

	var _index = __webpack_require__(84);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Calendar
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {Date|number|string=TODAY} options.data.date               <=> 当前选择的日期
	 * @param {Date|number|string}      options.data.minDate             => 最小日期，如果为空则不限制
	 * @param {Date|number|string}      options.data.maxDate             => 最大日期，如果为空则不限制
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Calendar = _rguiUiBase.Component.extend({
	    name: 'calendar',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        var _this = this;

	        this.data = Object.assign({
	            date: _util2.default.clearTime(new Date()),
	            minDate: undefined,
	            maxDate: undefined,
	            _days: []
	        }, this.data);
	        this.supr();

	        this.$watch('date', function (newValue, oldValue) {
	            // 时间戳或字符串自动转为日期类型
	            if (typeof newValue === 'number') return _this.data.date = new Date(newValue);else if (typeof newValue === 'string') return _this.data.date = _util2.default.parseDate(newValue);

	            if (!newValue || newValue + '' === 'Invalid Date') throw new TypeError('Invalid Date');

	            // 如果超出日期范围，则设置为范围边界的日期
	            var isOutOfRange = _this.isOutOfRange(newValue);
	            if (isOutOfRange) {
	                _this.data.date = isOutOfRange;

	                // 防止第二次刷新同月
	                _this._update();
	                return;
	            }

	            if (!oldValue || !oldValue.getFullYear) _this._update();else if (newValue.getFullYear() !== oldValue.getFullYear() || newValue.getMonth() !== oldValue.getMonth()) _this._update();

	            /**
	             * @event change 日期改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {object} date 改变后的日期
	             */
	            _this.$emit('change', {
	                sender: _this,
	                date: newValue
	            });
	        });

	        this.$watch('minDate', function (newValue, oldValue) {
	            if (!newValue) return;

	            // 时间戳或字符串自动转为日期类型
	            if (typeof newValue === 'number') return _this.data.minDate = new Date(newValue);else if (typeof newValue === 'string') return _this.data.minDate = _util2.default.parseDate(newValue);

	            if (newValue + '' === 'Invalid Date') throw new TypeError('Invalid Date');
	        });

	        this.$watch('maxDate', function (newValue, oldValue) {
	            if (!newValue) return;

	            // 时间戳或字符串自动转为日期类型
	            if (typeof newValue === 'number') return _this.data.maxDate = new Date(newValue);else if (typeof newValue === 'string') return _this.data.maxDate = _util2.default.parseDate(newValue);

	            if (newValue + '' === 'Invalid Date') throw new TypeError('Invalid Date');
	        });

	        this.$watch(['minDate', 'maxDate'], function (minDate, maxDate) {
	            if (!(minDate && minDate instanceof Date || maxDate && maxDate instanceof Date)) return;

	            if (minDate && maxDate) {
	                if (_util2.default.clearTime(minDate) > _util2.default.clearTime(maxDate)) throw new RangeError('Wrong Date Range where `minDate` is ' + minDate + ' and `maxDate` is ' + maxDate + '!');
	            }

	            // 如果超出日期范围，则设置为范围边界的日期
	            var isOutOfRange = _this.isOutOfRange(_this.data.date);
	            if (isOutOfRange) _this.data.date = isOutOfRange;
	        });
	    },

	    /**
	     * @method _update() 日期改变后更新日历
	     * @private
	     * @return {void}
	     */
	    _update: function _update() {
	        this.data._days = [];

	        var date = this.data.date;
	        var month = date.getMonth();
	        var mfirst = new Date(date);mfirst.setDate(1);
	        var mfirstTime = +mfirst;
	        var nfirst = new Date(mfirst);nfirst.setMonth(month + 1);nfirst.setDate(1);
	        var nfirstTime = +nfirst;
	        var lastTime = nfirstTime + ((7 - nfirst.getDay()) % 7 - 1) * _util2.default.MS_OF_DAY;
	        var num = -mfirst.getDay();
	        var tmpTime = void 0,
	            tmp = void 0;
	        do {
	            tmpTime = mfirstTime + num++ * _util2.default.MS_OF_DAY;
	            tmp = new Date(tmpTime);
	            this.data._days.push(tmp);
	        } while (tmpTime < lastTime);
	    },

	    /**
	     * @method addYear(year) 调整年份
	     * @public
	     * @param  {number=0} year 加/减的年份
	     * @return {Date} date 计算后的日期
	     */
	    addYear: function addYear(year) {
	        if (this.data.readonly || this.data.disabled || !year) return;

	        if (isNaN(year)) throw new TypeError(year + ' is not a number!');

	        var date = new Date(this.data.date);
	        var oldMonth = date.getMonth();
	        date.setFullYear(date.getFullYear() + year);
	        if (date.getMonth() !== oldMonth) date.setDate(0);

	        return this.data.date = date;
	    },

	    /**
	     * @method addMonth(month) 调整月份
	     * @public
	     * @param  {number=0} month 加/减的月份
	     * @return {Date} date 计算后的日期
	     */
	    addMonth: function addMonth(month) {
	        if (this.data.readonly || this.data.disabled || !month) return;

	        if (isNaN(month)) throw new TypeError(month + ' is not a number!');

	        var date = new Date(this.data.date);
	        var correctMonth = date.getMonth() + month;
	        date.setMonth(correctMonth);
	        // 如果跳月，则置为上一个月
	        if ((date.getMonth() - correctMonth) % 12) date.setDate(0);

	        return this.data.date = date;
	    },

	    /**
	     * @method select(date) 选择一个日期
	     * @public
	     * @param  {Date} date 选择的日期
	     * @return {void}
	     */
	    select: function select(date) {
	        if (this.data.readonly || this.data.disabled || this.isOutOfRange(date)) return;

	        this.data.date = new Date(date);

	        /**
	         * @event select 选择某一个日期时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} date 当前选择的日期
	         */
	        this.$emit('select', {
	            sender: this,
	            date: date
	        });
	    },

	    /**
	     * @method goToday() 回到今天
	     * @public
	     * @return {void}
	     */
	    goToday: function goToday() {
	        if (this.data.readonly || this.data.disabled) return;

	        this.data.date = _util2.default.clearTime(new Date());
	    },

	    /**
	     * @method isOutOfRange(date) 是否超出规定的日期范围
	     * @public
	     * @param {Date} date 待测的日期
	     * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
	     */
	    isOutOfRange: function isOutOfRange(date) {
	        var minDate = this.data.minDate;
	        var maxDate = this.data.maxDate;

	        if (minDate && typeof minDate === 'string' || maxDate && typeof maxDate === 'string') return;

	        // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
	        minDate = minDate && _util2.default.clearTime(minDate);
	        maxDate = maxDate && _util2.default.clearTime(maxDate);

	        // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
	        return minDate && date < minDate && minDate || maxDate && date > maxDate && maxDate;
	    }
	});

	exports.default = Calendar;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	_rguiUiBase._.MS_OF_DAY = 24 * 3600 * 1000;

	_rguiUiBase._.clearTime = function (date) {
	    return new Date((date / _rguiUiBase._.MS_OF_DAY >> 0) * _rguiUiBase._.MS_OF_DAY);
	};

	// 处理IE8下的兼容性问题
	_rguiUiBase._.parseDate = function (value) {
	    return new Date(new Date(value.replace(/-/g, '/')) - new Date('1970/01/01'));
	};

	exports.default = _rguiUiBase._;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-calendar ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"calendar_hd"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_prev"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['addYear']((-1))","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"i","attrs":[{"type":"attribute","name":"class","value":"u-icon u-icon-angle-double-left"}],"children":[]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['addMonth']((-1))","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"i","attrs":[{"type":"attribute","name":"class","value":"u-icon u-icon-angle-left"}],"children":[]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"span","attrs":[],"children":[{"type":"expression","body":"(function(t){t = c._f_('dateFormat' ).get.call( c,t, 'yyyy-MM');return t})(c._sg_('date', d, e))","constant":false,"setbody":"c._ss_('date',(function(t){t = c._f_('dateFormat' ).set.call( c,t, 'yyyy-MM');return t})(p_),d, '=', 1)"}]},{"type":"text","text":"\n        "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_next"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['addMonth'](1)","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"i","attrs":[{"type":"attribute","name":"class","value":"u-icon u-icon-angle-right"}],"children":[]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['addYear'](1)","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"i","attrs":[{"type":"attribute","name":"class","value":"u-icon u-icon-angle-double-right"}],"children":[]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"calendar_bd"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"calendar_week"}],"children":[{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"日"}]},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"一"}]},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"二"}]},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"三"}]},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"四"}]},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"五"}]},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"}],"children":[{"type":"text","text":"六"}]}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"calendar_day"}],"children":[{"type":"list","sequence":{"type":"expression","body":"c._sg_('_days', d, e)","constant":false,"setbody":"c._ss_('_days',p_,d, '=', 1)"},"alternate":[],"variable":"day","body":[{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"calendar_item"},{"type":"attribute","name":"z-sel","value":{"type":"expression","body":"c._sg_('date', d, e)['toDateString']()===c._sg_('day', d, e)['toDateString']()","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"(!(!c['isOutOfRange'](c._sg_('day', d, e))))","constant":false,"setbody":false}},{"type":"attribute","name":"r-class","value":{"type":"expression","body":"{'z-muted':c._sg_('date', d, e)['getMonth']()!==c._sg_('day', d, e)['getMonth']()}","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('day', d, e))","constant":false,"setbody":false}}],"children":[{"type":"expression","body":"(function(t){t = c._f_('dateFormat' ).get.call( c,t, 'dd');return t})(c._sg_('day', d, e))","constant":false,"setbody":"c._ss_('day',(function(t){t = c._f_('dateFormat' ).set.call( c,t, 'dd');return t})(p_),d, '=', 1)"}]}]}]},{"type":"text","text":"\n        "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Movable = exports.Droppable = exports.Draggable = undefined;

	var _draggable = __webpack_require__(86);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _droppable = __webpack_require__(89);

	var _droppable2 = _interopRequireDefault(_droppable);

	var _movable = __webpack_require__(90);

	var _movable2 = _interopRequireDefault(_movable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Draggable = _draggable2.default;
	exports.Droppable = _droppable2.default;
	exports.Movable = _movable2.default;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _manager = __webpack_require__(87);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Draggable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='clone'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，拖拽时拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {var}                     options.data.value               => 拖拽时需要传递的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Draggable = _rguiUiBase.Component.extend({
	    name: 'draggable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            proxy: 'clone',
	            value: undefined,
	            'class': 'z-draggable',
	            sourceClass: 'z-dragSource',
	            proxyClass: 'z-dragProxy'
	        }, this.data);
	        this.supr();

	        this._onMouseDown = this._onMouseDown.bind(this);
	        this._onMouseMove = this._onMouseMove.bind(this);
	        this._onMouseUp = this._onMouseUp.bind(this);
	        this.cancel = this.cancel.bind(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        _regularjs.dom.on(inner, 'mousedown', this._onMouseDown);
	        this.supr();

	        this.$watch('disabled', function (newValue) {
	            return _regularjs.dom[newValue ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	    },

	    /**
	     * @method _getProxy() 获取拖拽代理
	     * @private
	     * @return {Element} 拖拽代理元素
	     */
	    _getProxy: function _getProxy() {
	        var proxy = void 0;
	        var source = _regularjs.dom.element(this);

	        if (typeof this.data.proxy === 'function') proxy = this.data.proxy();else if (this.data.proxy instanceof Element) proxy = this.data.proxy;else if (this.data.proxy === 'self') proxy = source;else if (this.data.proxy === 'clone') {
	            proxy = source.cloneNode(true);
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            var size = _regularjs.dom.getSize(source);
	            proxy.style.width = size.width + 'px';
	            proxy.style.height = size.height + 'px';
	            source.parentElement.appendChild(proxy);
	        } else if (this.data.proxy instanceof Draggable.Proxy) {
	            proxy = _regularjs.dom.element(this.data.proxy.$body());
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            document.body.appendChild(proxy);
	        }

	        proxy && this._initProxy(proxy);
	        return proxy;
	    },

	    /**
	     * @method _setProxyFixed() 将拖拽代理的position设置fixed并设置初始位置
	     * @param  {Element} proxy 拖拽代理元素
	     * @param  {position=...} position 拖拽代理的初始位置
	     * @private
	     * @return {void}
	     */
	    _setProxyFixed: function _setProxyFixed(proxy) {
	        var position = arguments.length <= 1 || arguments[1] === undefined ? { left: 0, top: 0 } : arguments[1];

	        proxy.style.left = position.left + 'px';
	        proxy.style.top = position.top + 'px';
	        proxy.style.zIndex = '9999';
	        proxy.style.position = 'fixed';
	        proxy.style.display = '';
	    },

	    /**
	     * @method _initProxy() 初始化拖拽代理
	     * @private
	     * @return {void}
	     */
	    _initProxy: function _initProxy(proxy) {
	        // 如果position为static，则设置为relative，保证可以移动
	        if (_regularjs.dom.getComputedStyle(proxy, 'position') === 'static') proxy.style.position = 'relative';
	    },

	    /**
	     * @private
	     */
	    _onMouseDown: function _onMouseDown($event) {
	        if (this.data.disabled) return;

	        var e = $event.event;
	        // 阻止浏览器的默认行为，特别是IE的选择行为
	        $event.preventDefault();

	        // 鼠标坐标从MouseDown开始算，防止出现第一次移动的误差
	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            startX: e.clientX,
	            startY: e.clientY,
	            dragX: 0,
	            dragY: 0
	        });

	        _regularjs.dom.on(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.on(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @private
	     */
	    _onMouseMove: function _onMouseMove($event) {
	        var e = $event.event;
	        $event.preventDefault();

	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            dragX: e.clientX - _manager2.default.startX,
	            dragY: e.clientY - _manager2.default.startY
	        });

	        if (_manager2.default.dragging === false) this._onMouseMoveStart(e);else this._onMouseMoving(e);
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e, override) {
	        var proxy = this._getProxy();

	        // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
	        // 获取初始的left和top值
	        var computedStyle = proxy ? _regularjs.dom.getComputedStyle(proxy) : {};
	        if (!computedStyle.left || computedStyle.left === 'auto') computedStyle.left = '0px';
	        if (!computedStyle.top || computedStyle.top === 'auto') computedStyle.top = '0px';

	        Object.assign(_manager2.default, {
	            dragging: true,
	            proxy: proxy,
	            value: this.data.value,
	            startLeft: +computedStyle.left.slice(0, -2),
	            startTop: +computedStyle.top.slice(0, -2),
	            droppable: undefined
	        });

	        _manager2.default.left = _manager2.default.startLeft;
	        _manager2.default.top = _manager2.default.startTop;

	        !override && this._dragStart();
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理后续鼠标移动事件
	     * @param  {MouseEvent} e 鼠标事件
	     * @private
	     * @return {void}
	     */
	    _onMouseMoving: function _onMouseMoving(e) {
	        // 拖拽约束
	        var next = this.restrict(_manager2.default);
	        // 设置位置
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.left = next.left + 'px';
	            _manager2.default.proxy.style.top = next.top + 'px';
	        }
	        // 更新当前位置
	        _manager2.default.left = next.left;
	        _manager2.default.top = next.top;

	        this._drag();
	        if (!_manager2.default.dragging) return;

	        // for Droppable
	        var pointElement = null;
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.display = 'none';
	            pointElement = document.elementFromPoint(e.clientX, e.clientY);
	            _manager2.default.proxy.style.display = '';
	        } else pointElement = document.elementFromPoint(e.clientX, e.clientY);

	        var pointDroppable = null;
	        while (pointElement) {
	            pointDroppable = _manager2.default.droppables.find(function (droppable) {
	                return _regularjs.dom.element(droppable) === pointElement;
	            });

	            if (pointDroppable) break;else pointElement = pointElement.parentElement;
	        }

	        if (_manager2.default.droppable !== pointDroppable) {
	            _manager2.default.droppable && _manager2.default.droppable._dragLeave(this);
	            if (!_manager2.default.dragging) return;
	            pointDroppable && pointDroppable._dragEnter(this);
	            if (!_manager2.default.dragging) return;
	            _manager2.default.droppable = pointDroppable;
	        }

	        // dragEnter之后也要dragOver
	        pointDroppable && pointDroppable._dragOver(this);
	    },

	    /**
	     * @method restrict(manager) 拖拽约束函数
	     * @protected
	     * @param  {params} 拖拽参数
	     * @return {left, top} 拖拽代理元素计算后的left和top位置
	     */
	    restrict: function restrict(params) {
	        return {
	            left: params.startLeft + params.dragX,
	            top: params.startTop + params.dragY
	        };
	    },

	    /**
	     * @private
	     */
	    _onMouseUp: function _onMouseUp($event) {
	        if (_manager2.default.dragging) {
	            _manager2.default.droppable && _manager2.default.droppable._drop(this);
	            this.cancel();
	        }

	        _regularjs.dom.off(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.off(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @method cancel() 取消拖拽操作
	     * @public
	     * @return {void}
	     */
	    cancel: function cancel() {
	        this._dragEnd();

	        Object.assign(_manager2.default, {
	            dragging: false,
	            value: undefined,
	            proxy: undefined,
	            range: undefined,
	            screenX: 0,
	            screenY: 0,
	            clientX: 0,
	            clientY: 0,
	            pageX: 0,
	            pageY: 0,
	            startX: 0,
	            startY: 0,
	            dragX: 0,
	            dragY: 0,
	            startLeft: 0,
	            startTop: 0,
	            left: 0,
	            top: 0,
	            droppable: undefined
	        });
	    },

	    /**
	     * @private
	     */
	    _dragStart: function _dragStart() {
	        var source = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(source, this.data.sourceClass);
	        _manager2.default.proxy && _regularjs.dom.addClass(_manager2.default.proxy, this.data.proxyClass);

	        /**
	         * @event dragstart 拖拽开始时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragstart', Object.assign({
	            sender: this,
	            origin: this,
	            source: source,
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drag: function _drag() {
	        /**
	         * @event drag 正在拖拽时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('drag', Object.assign({
	            sender: this,
	            origin: this,
	            source: _regularjs.dom.element(this),
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragEnd: function _dragEnd() {
	        var source = this._watchers !== null ? _regularjs.dom.element(this) : null;
	        source && _regularjs.dom.delClass(source, this.data.sourceClass);

	        /**
	         * @event dragend 拖拽结束时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         */
	        this.$emit('dragend', Object.assign({
	            sender: this,
	            origin: this,
	            source: source
	        }, _manager2.default));

	        if (_manager2.default.proxy) {
	            if (this.data.proxy instanceof Draggable.Proxy || this.data.proxy === 'clone') _manager2.default.proxy.parentElement.removeChild(_manager2.default.proxy);

	            _regularjs.dom.delClass(_manager2.default.proxy, this.data.proxyClass);
	        }
	    }
	});

	Draggable.Proxy = _rguiUiBase.Component.extend({
	    name: 'draggable.proxy',
	    /**
	     * @protected
	     */
	    init: function init() {
	        if (this.$outer instanceof Draggable) this.$outer.data.proxy = this;
	    }
	});

	exports.default = Draggable;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(88);

	var manager = {
	    dragging: false,
	    value: undefined,
	    proxy: undefined,
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    startX: 0,
	    startY: 0,
	    dragX: 0,
	    dragY: 0,
	    startLeft: 0,
	    startTop: 0,
	    dragLeft: 0,
	    dragTop: 0,
	    droppable: undefined,
	    droppables: []
	};

	exports.default = manager;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(77);

	Object.assign(_regularjs.dom, {
	    getPosition: function getPosition(elem) {
	        var doc = elem && elem.ownerDocument;
	        var docElem = doc.documentElement;
	        var body = doc.body;

	        var box = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { left: 0, top: 0 };

	        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
	        var clientTop = docElem.clientTop || body.clientTop || 0;

	        return { left: box.left - clientLeft, top: box.top - clientTop };
	    },
	    getSize: function getSize(elem) {
	        var mode = arguments.length <= 1 || arguments[1] === undefined ? 'outside' : arguments[1];

	        if (mode === 'inside') return { width: elem.clientWidth, height: elem.clientHeight };else if (mode === 'center') return { width: (elem.clientWidth + elem.offsetWidth) / 2, height: (elem.offsetHeight + elem.clientHeight) / 2 };else if (mode === 'outside') return { width: elem.offsetWidth, height: elem.offsetHeight };
	    },
	    getDimension: function getDimension(elem, mode) {
	        return Object.assign(this.getSize(elem, mode), this.getPosition(elem));
	    },
	    isInRect: function isInRect(position, dimension) {
	        if (!position || !dimension) return false;

	        return position.left > dimension.left && position.left < dimension.left + dimension.width && position.top > dimension.top && position.top < dimension.top + dimension.height;
	    },
	    getComputedStyle: function getComputedStyle(elem, property) {
	        var computedStyle = elem.currentStyle || window.getComputedStyle(elem, null);
	        return property ? computedStyle[property] : computedStyle;
	    }
	});

	exports.default = _regularjs.dom;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _manager = __webpack_require__(87);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Droppable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=  拖放后传递过来的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-droppable'}    options.data.class               => 可放置时（即disabled=false）给元素附加此class
	 * @param {string='z-dragTarget'}   options.data.dragTarget          => 拖拽在该元素上方时给该元素附加此class
	 */
	var Droppable = _rguiUiBase.Component.extend({
	    name: 'droppable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            data: null,
	            'class': 'z-droppable',
	            dragTarget: 'z-dragTarget'
	        }, this.data);
	        this.supr();

	        _manager2.default.droppables.push(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        this.$watch('disabled', function (newValue) {
	            return _regularjs.dom[newValue ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	        this.supr();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    destroy: function destroy() {
	        _manager2.default.droppables.splice(_manager2.default.droppables.indexOf(this), 1);
	        this.supr();
	    },

	    /**
	     * @private
	     */
	    _dragEnter: function _dragEnter(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(element, this.data.dragTarget);

	        /**
	         * @event dragenter 拖拽进入该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragenter', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragLeave: function _dragLeave(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);

	        /**
	         * @event dragleave 拖拽离开该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragleave', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragOver: function _dragOver(origin) {
	        var element = _regularjs.dom.element(this);
	        var dimension = _regularjs.dom.getDimension(element);

	        /**
	         * @event dragover 拖拽在该元素上方时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragover', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drop: function _drop(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);
	        var dimension = _regularjs.dom.getDimension(element);

	        this.data.value = origin.data.value;
	        this.$update();

	        /**
	         * @event drop 拖拽放置时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         */
	        this.$emit('drop', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height
	        }, _manager2.default));
	    }
	});

	exports.default = Droppable;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _draggable = __webpack_require__(86);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _manager = __webpack_require__(87);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Movable
	 * @extend Draggable
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='self'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，表示拖拽时会拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {string='both'}           options.data.axis                => 拖拽代理移动时限制的轴向，`both`表示可以在任意方向上移动，`horizontal`表示限制在水平方向上移动，`vertical`表示限制在垂直方向上移动。
	 * @param {object={x:0,y:0}}        options.data.grid                => 拖拽代理移动时限制的网格。值为一个{x,y}格式的对象，表示水平方向和垂直方向网格的大小。
	 * @param {string|object|function}  options.data.range              @=> 拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界，也可以传一个函数。当值为`offsetParent`，代理元素限制在offsetParent中移动，仅适用于`position`为`absolute`的情况；当值为`parent`；当值为`window`时，拖拽时代理元素限制在window中移动，仅适用于`position`为`fixed`的情况。
	 * @param {string=inside}           options.data.rangeMode           => 拖拽范围模式，默认为`inside`，表示在拖拽范围内侧移动，`center`表示在拖拽范围边缘及内侧移动。
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Movable = _draggable2.default.extend({
	    name: 'movable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            proxy: 'self',
	            // value: undefined,
	            // 'class': 'z-draggable',
	            // sourceClass: 'z-dragSource',
	            // proxyClass: 'z-dragProxy'
	            axis: 'both',
	            grid: { x: 0, y: 0 },
	            range: undefined,
	            rangeMode: 'inside'
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @method _getRange(proxy) 获取拖拽范围
	     * @private
	     * @param  {Element} proxy 拖拽代理元素
	     * @return {Element} 拖拽范围元素
	     */
	    _getRange: function _getRange(proxy) {
	        var range = void 0;

	        if (_typeof(this.data.range) === 'object') range = this.data.range;else if (typeof this.data.range === 'function') range = this.data.range();else if (this.data.range === 'offsetParent') {
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') !== 'absolute') proxy.style.position = 'absolute';

	            var offsetParent = proxy.offsetParent;
	            range = Object.assign({ left: 0, top: 0 }, _regularjs.dom.getSize(offsetParent, this.data.rangeMode));
	        } else if (this.data.range === 'window') {
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') !== 'fixed') proxy.style.position = 'fixed';

	            range = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
	        }

	        if (range) {
	            if (range.width !== undefined && range.height !== undefined) {
	                range.right = range.left + range.width;
	                range.bottom = range.top + range.height;
	            } else if (range.right !== undefined && range.bottom !== undefined) {
	                range.width = range.right - range.left;
	                range.height = range.bottom - range.top;
	            }
	        }

	        return range;
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @override
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e) {
	        this.supr(e, true);
	        if (_manager2.default.proxy) _manager2.default.range = this._getRange(_manager2.default.proxy);
	        this._dragStart();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    restrict: function restrict(params) {
	        var next = this.supr(params);

	        // 范围约束
	        if (params.range) {
	            if (this.data.rangeMode === 'inside') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - _manager2.default.proxy.offsetWidth);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - _manager2.default.proxy.offsetHeight);
	            } else if (this.data.rangeMode === 'center') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
	            } else if (this.data.rangeMode === 'outside') {
	                next.left = Math.min(Math.max(params.range.left - _manager2.default.proxy.offsetWidth, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top - _manager2.default.proxy.offsetHeight, next.top), params.range.bottom);
	            }
	        }

	        // 网格约束
	        var grid = this.data.grid;
	        grid.x && (next.left = Math.round(next.left / grid.x) * grid.x);
	        grid.y && (next.top = Math.round(next.top / grid.y) * grid.y);

	        // 轴向约束
	        if (this.data.axis === 'vertical') next.left = params.startLeft;
	        if (this.data.axis === 'horizontal') next.top = params.startTop;

	        return next;
	    }
	});

	exports.default = Movable;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Item = exports.ListView = undefined;

	var _listView = __webpack_require__(92);

	var _listView2 = _interopRequireDefault(_listView);

	var _item = __webpack_require__(94);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ListView = _listView2.default;
	exports.Item = _item2.default;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(93);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class ListView
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=> 当前选择的值
	 * @param {boolean=false}           options.data.multiple            => 是否可以多选
	 * @param {boolean=false}           options.data.cancelable          => 是否可以取消选择
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var ListView = _rguiUiBase.Component.extend({
	    name: 'listView',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            _list: [],
	            _selected: undefined,
	            value: undefined,
	            multiple: false,
	            cancelable: false
	        }, this.data);
	        this.supr();
	        this.watch();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    watch: function watch() {
	        var _this = this;

	        this.$watch('value', function (newValue, oldValue) {
	            if (!_this.data._selected || _this.data._selected.data.value !== newValue) _this.data._selected = _this.data._list.find(function (item) {
	                return item.data.value === newValue;
	            });

	            /**
	             * @event change 选择值改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {Item} selected 改变后的选择项
	             * @property {var} value 改变后的选择值
	             */
	            _this.$emit('change', {
	                sender: _this,
	                selected: _this.data._selected,
	                value: newValue
	            });
	        });

	        this.$watch('_selected', function (newValue, oldValue) {
	            // 改变item的选择状态
	            oldValue && (oldValue.data.selected = false);
	            newValue && (newValue.data.selected = true);
	            // 设置value
	            _this.data.value = newValue ? newValue.data.value : newValue;
	        });
	    },

	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {Item} item 选择项
	     * @return {void}
	     */
	    select: function select(item) {
	        if (this.data.readonly || this.data.disabled) return;

	        if (this.data.multiple) item.data.selected = !item.data.selected;else if (this.data.cancelable && this.data._selected === item) this.data._selected = undefined;else this.data._selected = item;

	        /**
	         * @event select 选择某一项时触发
	         * @property {object} sender 事件发送对象
	         * @property {Item} selected 当前选择项
	         * @property {var} value 当前选择值
	         */
	        this.$emit('select', {
	            sender: this,
	            selected: item,
	            value: item.data.value
	        });
	    }
	});

	exports.default = ListView;

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-listView ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(95);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Item
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=> 该项的值
	 * @param {boolean=false}           options.data.selected           <=> 该项是否被选中
	 * @param {boolean=false}           options.data.divider             => 设置该项为分隔线
	 * @param {string}                  options.data.title               => 该项的工具提示
	 * @param {boolean=false}           options.data.disabled            => 禁用该项
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Item = _rguiUiBase.Component.extend({
	    name: 'item',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            value: undefined,
	            selected: false,
	            disabled: false,
	            divider: false,
	            title: undefined
	        }, this.data);
	        this.supr();

	        // 没有$outer就直接报错
	        this.$outer.data._list.push(this);

	        // 多选时不使用`value`和`_selected`
	        if (this.$outer.data.multiple) return;
	        // 与$outer的value相等时自动设为选中
	        if (this.data.value !== undefined && this.$outer.data.value === this.data.value) this.data.selected = true;
	        // 初始化时选择selected为true的item
	        if (this.data.selected) this.$outer.data._selected = this;
	    },

	    /**
	     * @protected
	     * @override
	     */
	    destroy: function destroy() {
	        if (this.$outer.data._selected === this) this.$outer.data._selected = undefined;
	        // 从$outer组件的列表中删除自己
	        var index = this.$outer.data._list.indexOf(this);
	        ~index && this.$outer.data._list.splice(index, 1);
	        this.supr();
	    },

	    /**
	     * @method select() 选择该项
	     * @public
	     * @return {void}
	     */
	    select: function select() {
	        if (this.data.disabled || this.data.divider) return;

	        this.$outer.select(this);

	        /**
	         * @event select 选择该项时触发
	         * @property {object} sender 事件发送对象
	         * @property {Item} selected 当前选择项
	         * @property {var} value 当前选择值
	         */
	        this.$emit('select', {
	            sender: this,
	            selected: this,
	            value: this.data.value
	        });
	    }
	}).directive({
	    'z-divider': _rguiUiBase._.createBoolClassDirective('z-divider')
	});

	exports.default = Item;

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"c._sg_('class', d, e)","constant":false,"setbody":"c._ss_('class',p_,d, '=', 1)"}},{"type":"attribute","name":"z-sel","value":{"type":"expression","body":"c._sg_('selected', d, e)","constant":false,"setbody":"c._ss_('selected',p_,d, '=', 1)"}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"z-divider","value":{"type":"expression","body":"c._sg_('divider', d, e)","constant":false,"setbody":"c._ss_('divider',p_,d, '=', 1)"}},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('title', d, e)","constant":false,"setbody":"c._ss_('title',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select']()","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Modal = undefined;

	var _modal = __webpack_require__(97);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Modal = _modal2.default;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(98);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Modal
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string='提示'}           options.data.title               => 对话框标题
	 * @param {string=''}               options.data.content             => 对话框内容
	 * @param {string=''}               options.data.contentTemplate    @=> 对话框内容模板，用于支持复杂内容的自定义。
	 * @param {string='确定'}           options.data.okButton            => 确定按钮的文字，如果为空则不显示。
	 * @param {string='取消'}           options.data.cancelButton        => 取消按钮的文字，如果为空则不显示。
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Modal = _rguiUiBase.Component.extend({
	    name: 'modal',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            title: '提示',
	            content: '',
	            contentTemplate: '',
	            okButton: '确定',
	            cancelButton: '取消'
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        this.supr();

	        // 如果不是内嵌组件，则嵌入到document.body中
	        if (this.$root === this) this.$inject(document.body);
	    },

	    /**
	     * @method close() 关闭对话框
	     * @public
	     * @return {void}
	     */
	    close: function close() {
	        /**
	         * @event close 关闭对话框时触发
	         * @property {object} sender 事件发送对象
	         */
	        this.$emit('close', {
	            sender: this
	        });

	        this.destroy();
	    },

	    /**
	     * @method ok() 确定对话框
	     * @public
	     * @return {void}
	     */
	    ok: function ok() {
	        /**
	         * @event ok 确定对话框时触发
	         * @property {object} sender 事件发送对象
	         */
	        this.$emit('ok', {
	            sender: this
	        });

	        this.close();
	    },

	    /**
	     * @method cancel() 取消对话框
	     * @public
	     * @return {void}
	     */
	    cancel: function cancel() {
	        /**
	         * @event cancel 取消对话框时触发
	         * @property {object} sender 事件发送对象
	         */
	        this.$emit('cancel', {
	            sender: this
	        });

	        this.close();
	    }
	});

	/**
	 * @method alert(content[,title]) 弹出一个alert对话框。关闭时始终触发确定事件。
	 * @static
	 * @public
	 * @param  {string=''} content 对话框内容
	 * @param  {string='提示'} title 对话框标题
	 * @return {Modal} modal 返回该对话框
	 */
	Modal.alert = function (content) {
	    var title = arguments.length <= 1 || arguments[1] === undefined ? '提示' : arguments[1];
	    var okButton = arguments.length <= 2 || arguments[2] === undefined ? '确定' : arguments[2];

	    var modal = new this({
	        data: { content: content, title: title, okButton: okButton, cancelButton: '' }
	    });

	    return modal;
	};

	/**
	 * @method confirm(content[,title]) 弹出一个confirm对话框
	 * @static
	 * @public
	 * @param  {string=''} content 对话框内容
	 * @param  {string='提示'} title 对话框标题
	 * @return {Modal} modal 返回该对话框
	 */
	Modal.confirm = function (content) {
	    var title = arguments.length <= 1 || arguments[1] === undefined ? '提示' : arguments[1];
	    var okButton = arguments.length <= 2 || arguments[2] === undefined ? '确定' : arguments[2];
	    var cancelButton = arguments.length <= 3 || arguments[3] === undefined ? '取消' : arguments[3];

	    var modal = new this({
	        data: { content: content, title: title, okButton: okButton, cancelButton: cancelButton }
	    });

	    return modal;
	};

	exports.default = Modal;

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-modal ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"modal_dialog"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"modal_hd"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"modal_close"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c._sg_('cancelButton', d, e)?c['cancel']():c['ok']()","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"i","attrs":[{"type":"attribute","name":"class","value":"u-icon u-icon-close"}],"children":[]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"h3","attrs":[{"type":"attribute","name":"class","value":"modal_title"}],"children":[{"type":"expression","body":"c._sg_('title', d, e)","constant":false,"setbody":"c._ss_('title',p_,d, '=', 1)"}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"modal_bd"}],"children":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('contentTemplate', d, e)","constant":false,"setbody":"c._ss_('contentTemplate',p_,d, '=', 1)"},"consequent":[{"type":"template","content":{"type":"expression","body":"c._sg_('contentTemplate', d, e)","constant":false,"setbody":"c._ss_('contentTemplate',p_,d, '=', 1)","once":true}}],"alternate":[{"type":"expression","body":"c._sg_('content', d, e)","constant":false,"setbody":"c._ss_('content',p_,d, '=', 1)"}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"modal_ft"}],"children":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('okButton', d, e)","constant":false,"setbody":"c._ss_('okButton',p_,d, '=', 1)"},"consequent":[{"type":"element","tag":"button","attrs":[{"type":"attribute","name":"class","value":"u-btn u-btn-primary"},{"type":"attribute","name":"r-autofocus"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['ok']()","constant":false,"setbody":false}}],"children":[{"type":"expression","body":"c._sg_('okButton', d, e)","constant":false,"setbody":"c._ss_('okButton',p_,d, '=', 1)"}]}],"alternate":[]},{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('cancelButton', d, e)","constant":false,"setbody":"c._ss_('cancelButton',p_,d, '=', 1)"},"consequent":[{"type":"element","tag":"button","attrs":[{"type":"attribute","name":"class","value":"u-btn"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['cancel']()","constant":false,"setbody":false}}],"children":[{"type":"expression","body":"c._sg_('cancelButton', d, e)","constant":false,"setbody":"c._ss_('cancelButton',p_,d, '=', 1)"}]}],"alternate":[]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Overlay = undefined;

	var _overlay = __webpack_require__(100);

	var _overlay2 = _interopRequireDefault(_overlay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Overlay = _overlay2.default;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(101);

	var _index2 = _interopRequireDefault(_index);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Overlay
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Overlay = _rguiUiBase.Component.extend({
	    name: 'overlay',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            open: false,
	            direction: 'bottomleft',
	            animation: 'on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;'
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @method toggle(open) 展开/收起
	     * @public
	     * @param  {boolean} open 展开/收起状态。如果无此参数，则在两种状态之间切换。
	     * @return {void}
	     */
	    toggle: function toggle(open) {
	        if (this.data.disabled) return;

	        if (open === undefined) open = !this.data.open;
	        this.data.open = open;

	        // 根据状态在Overlay.opens列表中添加/删除管理项
	        var index = Overlay.opens.indexOf(this);
	        if (open && index < 0) Overlay.opens.push(this);else if (!open && index >= 0) Overlay.opens.splice(index, 1);

	        /**
	         * @event toggle  展开/收起时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} open 展开/收起状态
	         */
	        this.$emit('toggle', {
	            sender: this,
	            open: open
	        });
	    },
	    destroy: function destroy() {
	        var index = Overlay.opens.indexOf(this);
	        index >= 0 && Overlay.opens.splice(index, 1);
	        this.supr();
	    }
	});

	// 处理点击toggle之外的地方后的收起事件。
	Overlay.opens = [];
	_regularjs.dom.on(document, 'click', function (e) {
	    Overlay.opens.forEach(function (overlay, index) {
	        // 这个地方不能用stopPropagation来处理，因为展开一个overlay的同时要收起其他overlay
	        var element = overlay.$refs.element;
	        var element2 = e.target;
	        while (element2) {
	            if (element === element2) return;
	            element2 = element2.parentElement;
	        }
	        overlay.toggle(false);
	        overlay.$update();
	    });
	});

	Overlay.Head = _rguiUiBase.Component.extend({
	    name: 'overlay.head',
	    template: '<div class="overlay_hd" on-click={this.$outer.toggle()}>{#inc this.$body}</div>'
	});

	Overlay.Body = _rguiUiBase.Component.extend({ //  r-animation={@(this.$outer.data.animation)}
	    name: 'overlay.body',
	    template: '<div class="overlay_bd" r-show={this.$outer.data.open}>{#inc this.$body}</div>'
	});

	exports.default = Overlay;

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-overlay u-overlay-',c._sg_('direction', d, e),' ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"ref","value":"element"}],"children":[{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Pager = undefined;

	var _pager = __webpack_require__(103);

	var _pager2 = _interopRequireDefault(_pager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Pager = _pager2.default;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(104);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Pager
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {number=1}                options.data.current            <=> 当前页
	 * @param {total=11}                options.data.total               => 总页数
	 * @param {string='center'}         options.data.position            => 分页的位置，可选参数：`center`、`left`、`right`
	 * @param {middle=5}                options.data.middle              => 当页数较多时，中间显示的页数
	 * @param {side=2}                  options.data.side                => 当页数较多时，两端显示的页数
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Pager = _rguiUiBase.Component.extend({
	    name: 'pager',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            current: 1,
	            total: 11,
	            position: 'center',
	            middle: 5,
	            side: 2,
	            _start: 1,
	            _end: 5
	        }, this.data);
	        this.supr();
	        this.watch();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    watch: function watch() {
	        var _this = this;

	        this.$watch(['current', 'total'], function (current, total) {
	            _this.data.current = current = +current;
	            _this.data.total = total = +total;
	            var show = _this.data.middle >> 1;
	            var side = _this.data.side;

	            _this.data._start = current - show;
	            _this.data._end = current + show;
	            if (_this.data._start < side + 1) _this.data._start = side + 1;
	            if (_this.data._end > total - side) _this.data._end = total - side;
	            if (current - _this.data._start < show) _this.data._end += _this.data._start - current + show;
	            if (_this.data._end - current < show) _this.data._start += _this.data._end - current - show;
	        });

	        this.$watch(['middle', 'side'], function (middle, side) {
	            _this.data.middle = +middle;
	            _this.data.side = +side;
	        });

	        this.$watch('current', function (newValue, oldValue) {
	            /**
	             * @event change 选择值改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {var} current 改变后的选择页
	             */
	            _this.$emit('change', {
	                sender: _this,
	                current: newValue
	            });
	        });
	    },

	    /**
	     * @method select(page) 选择某一页
	     * @public
	     * @param  {object} page 选择页
	     * @return {void}
	     */
	    select: function select(page) {
	        if (this.data.readonly || this.data.disabled) return;

	        page = +page;
	        if (page < 1) return;
	        if (page > this.data.total) return;
	        if (page === this.data.current) return;

	        this.data.current = page;

	        /**
	         * @event select 选择某一页时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} current 当前选择页
	         */
	        this.$emit('select', {
	            sender: this,
	            current: this.data.current
	        });
	    }
	});

	exports.default = Pager;

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-pager m-pager-',c._sg_('position', d, e),' ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"class","value":"pager_prev"},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('current', d, e)<=1","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('current', d, e)-1)","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"text","text":"上一页"}]}]},{"type":"text","text":"\n    "},{"type":"if","test":{"type":"expression","body":"c._sg_('total', d, e)-c._sg_('middle', d, e)>c._sg_('side', d, e)*2+1","constant":false,"setbody":false},"consequent":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(1,c._sg_('side', d, e))","constant":false,"setbody":false},"alternate":[],"variable":"i","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)==c._sg_('i', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('i', d, e))","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('i', d, e)","constant":false,"setbody":"c._ss_('i',p_,d, '=', 1)"}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"if","test":{"type":"expression","body":"c._sg_('_start', d, e)>c._sg_('side', d, e)+1","constant":false,"setbody":false},"consequent":[{"type":"element","tag":"li","attrs":[],"children":[{"type":"element","tag":"span","attrs":[],"children":[{"type":"text","text":"..."}]}]}],"alternate":[]},{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(c._sg_('_start', d, e),c._sg_('_end', d, e))","constant":false,"setbody":false},"alternate":[],"variable":"i","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)==c._sg_('i', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('i', d, e))","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('i', d, e)","constant":false,"setbody":"c._ss_('i',p_,d, '=', 1)"}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"if","test":{"type":"expression","body":"c._sg_('_end', d, e)<c._sg_('total', d, e)-c._sg_('side', d, e)","constant":false,"setbody":false},"consequent":[{"type":"element","tag":"li","attrs":[],"children":[{"type":"element","tag":"span","attrs":[],"children":[{"type":"text","text":"..."}]}]}],"alternate":[]},{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })((c._sg_('total', d, e)-c._sg_('side', d, e)+1),c._sg_('total', d, e))","constant":false,"setbody":false},"alternate":[],"variable":"i","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)==c._sg_('i', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('i', d, e))","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('i', d, e)","constant":false,"setbody":"c._ss_('i',p_,d, '=', 1)"}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}],"alternate":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(1,c._sg_('total', d, e))","constant":false,"setbody":false},"alternate":[],"variable":"i","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)==c._sg_('i', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('i', d, e))","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('i', d, e)","constant":false,"setbody":"c._ss_('i',p_,d, '=', 1)"}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"class","value":"pager_next"},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('current', d, e)>=c._sg_('total', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select'](c._sg_('current', d, e)+1)","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"text","text":"下一页"}]}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Resizable = undefined;

	var _resizable = __webpack_require__(106);

	var _resizable2 = _interopRequireDefault(_resizable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Resizable = _resizable2.default;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(107);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var manager = {
	    startLeft: 0,
	    startTop: 0,
	    startWidth: 0,
	    startHeight: 0
	};

	/**
	 * @class Resizable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {number=0}                options.data.left               <=> 水平位置
	 * @param {number=0}                options.data.top                <=> 垂直位置
	 * @param {number=300}              options.data.width              <=> 宽度
	 * @param {number=200}              options.data.height             <=> 高度
	 * @param {number=0}                options.data.minWidth            => 最小宽度
	 * @param {number=0}                options.data.minHeight           => 最小高度
	 * @param {number=Infinity}         options.data.maxWidth            => 最大宽度
	 * @param {number=Infinity}         options.data.maxHeight           => 最大高度
	 * @param {string|object|Element|function} options.data.range       @=> 拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界。当值为`offsetParent`，拖拽时代理元素限制在offsetParent中移动；当值为`parent`；当值为。也可以直接传入一个元素或函数。
	 * @param {Array=[...]}             options.data.handles             => 句柄
	 * @param {string=''}               options.data.handleType          => 句柄类型
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Resizable = _rguiUiBase.Component.extend({
	    name: 'resizable',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            left: 0,
	            top: 0,
	            width: 300,
	            height: 200,
	            minWidth: 0,
	            minHeight: 0,
	            maxWidth: Infinity,
	            maxHeight: Infinity,
	            range: undefined,
	            handles: ['top', 'bottom', 'left', 'right', 'topleft', 'topright', 'bottomleft', 'bottomright'],
	            handleType: ''
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @method _getRange(proxy) 获取拖拽范围
	     * @private
	     * @param  {Element} proxy 调整大小元素
	     * @return {Element} 拖拽范围元素
	     */
	    _getRange: function _getRange(proxy) {
	        var range = void 0;

	        if (_typeof(this.data.range) === 'object') range = this.data.range;else if (this.data.range === 'offsetParent') {
	            var offsetParent = proxy.offsetParent;
	            if (offsetParent) range = { left: 0, top: 0, right: offsetParent.offsetWidth, bottom: offsetParent.offsetHeight };else range = { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight };
	        } else if (this.data.range === 'parent') {
	            // range = proxy.parentElement;
	        } else if (range instanceof Element) {
	            //
	        }

	        if (range) {
	            range.width = range.right - range.left;
	            range.height = range.bottom - range.top;
	        }

	        return range;
	    },

	    /**
	     * @private
	     */
	    _onDragStart: function _onDragStart($event) {
	        Object.assign(manager, {
	            startLeft: this.data.left,
	            startTop: this.data.top,
	            startWidth: this.data.width,
	            startHeight: this.data.height,
	            range: this._getRange(this.$refs.element)
	        });
	    },

	    /**
	     * @private
	     */
	    _onDrag: function _onDrag($event, handle) {
	        var left = manager.startLeft;
	        var top = manager.startTop;
	        var width = manager.startWidth;
	        var height = manager.startHeight;

	        if (handle.includes('left')) {
	            var rangeWidth = manager.range ? manager.startLeft + manager.startWidth - manager.range.left : Infinity;
	            width = manager.startWidth - $event.dragX;
	            width = Math.min(Math.max(this.data.minWidth, width), this.data.maxWidth, rangeWidth);
	            left += manager.startWidth - width;
	        }

	        if (handle.includes('top')) {
	            var rangeHeight = manager.range ? manager.startTop + manager.startHeight - manager.range.top : Infinity;
	            height = manager.startHeight - $event.dragY;
	            height = Math.min(Math.max(this.data.minHeight, height), this.data.maxHeight, rangeHeight);
	            top += manager.startHeight - height;
	        }

	        if (handle.includes('right')) {
	            var _rangeWidth = manager.range ? manager.range.right - manager.startLeft : Infinity;
	            width = manager.startWidth + $event.dragX;
	            width = Math.min(Math.max(this.data.minWidth, width), this.data.maxWidth, _rangeWidth);
	        }

	        if (handle.includes('bottom')) {
	            var _rangeHeight = manager.range ? manager.range.bottom - manager.startTop : Infinity;
	            height = manager.startHeight + $event.dragY;
	            height = Math.min(Math.max(this.data.minHeight, height), this.data.maxHeight, _rangeHeight);
	        }

	        this.data.left = left;
	        this.data.top = top;
	        this.data.width = width;
	        this.data.height = height;

	        /**
	         * @event resize 调整大小时触发
	         * @property {object} sender 事件发送对象
	         * @property {number} left 水平位置
	         * @property {number} top 垂直位置
	         * @property {number} width 宽度
	         * @property {number} height 高度
	         */
	        this.$emit('resize', {
	            sender: this,
	            left: left, top: top, width: width, height: height
	        });
	    }
	});

	exports.default = Resizable;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-resizable m-resizable-',c._sg_('handleType', d, e),' ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"ref","value":"element"},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',c._sg_('left', d, e),'px; top: ',c._sg_('top', d, e),'px; width: ',c._sg_('width', d, e),'px; height: ',c._sg_('height', d, e),'px;'].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('handles', d, e)","constant":false,"setbody":"c._ss_('handles',p_,d, '=', 1)"},"alternate":[],"variable":"handle","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"draggable","attrs":[{"type":"attribute","name":"disabled","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"proxy","value":""},{"type":"attribute","name":"on-dragstart","value":{"type":"expression","body":"c['_onDragStart'](c._sg_('$event', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-drag","value":{"type":"expression","body":"c['_onDrag'](c._sg_('$event', d, e),c._sg_('handle', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['resizable_handle resizable_handle-',c._sg_('handle', d, e)].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SelectField = undefined;

	var _selectField = __webpack_require__(109);

	var _selectField2 = _interopRequireDefault(_selectField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SelectField = _selectField2.default;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rguiUiListview = __webpack_require__(91);

	var _index = __webpack_require__(110);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class SelectField
	 * @extend ListView
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=> 当前的选择值
	 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var SelectField = _rguiUiListview.ListView.extend({
	  name: 'selectField',
	  template: _index2.default,
	  /**
	   * @protected
	   * @override
	   */
	  config: function config() {
	    this.data = Object.assign({
	      // @inherited _list: [],
	      // @inherited _selected: undefined,
	      // @inherited value: undefined,
	      open: undefined
	    }, this.data);
	    this.supr();

	    /**
	     * @event change 选择值改变时触发
	     * @property {object} sender 事件发送对象
	     * @property {Item} selected 改变后的选择项
	     * @property {var} value 改变后的选择值
	     */
	  },

	  /**
	   * @protected
	   * @override
	   */
	  init: function init() {
	    this.supr();
	    if (!this.data._selected) this.data._selected = this.data._list[0];
	  },

	  /**
	   * @method select(item) 选择某一项
	   * @public
	   * @override
	   * @param  {Item} item 选择项
	   * @return {void}
	   */
	  select: function select(item) {
	    /**
	     * @event select 选择某一项时触发
	     * @property {object} sender 事件发送对象
	     * @property {Item} selected 当前选择项
	     * @property {var} value 当前选择值
	     */
	    this.supr(item);
	    this.$refs.overlay.toggle(false);
	  }
	});

	exports.default = SelectField;

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"overlay","attrs":[{"type":"attribute","name":"ref","value":"overlay"},{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-selectField ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"open","value":{"type":"expression","body":"c._sg_('open', d, e)","constant":false,"setbody":"c._ss_('open',p_,d, '=', 1)"}},{"type":"attribute","name":"disabled","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"visible","value":{"type":"expression","body":"c._sg_('visible', d, e)","constant":false,"setbody":"c._ss_('visible',p_,d, '=', 1)"}},{"type":"attribute","name":"on-toggle","value":"toggle"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"overlay.head","attrs":[],"children":[{"type":"text","text":"\n        "},{"type":"if","test":{"type":"expression","body":"c._sg_('_selected', d, e)","constant":false,"setbody":"c._ss_('_selected',p_,d, '=', 1)"},"consequent":[{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('title', c._sg_('data', c._sg_('_selected', d, e)))","constant":false,"setbody":"c._ss_('title',p_,c._sg_('data', c._sg_('_selected', d, e)), '=', 0)"}}],"children":[{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c._sg_('_selected', d, e))","constant":false,"setbody":"c._ss_('$body',p_,c._sg_('_selected', d, e), '=', 0)"}}]}],"alternate":[]},{"type":"text","text":"\n        "},{"type":"element","tag":"i","attrs":[{"type":"attribute","name":"class","value":"u-icon u-icon-caret-down"}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"overlay.body","attrs":[],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":"m-listView selectField_listView"}],"children":[{"type":"text","text":"\n            "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slider = undefined;

	var _slider = __webpack_require__(112);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Slider = _slider2.default;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(113);

	var _index2 = _interopRequireDefault(_index);

	var _regularjs = __webpack_require__(77);

	__webpack_require__(114);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Slider
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {number=0}                options.data.value              <=> 数值
	 * @param {number=0}                options.data.min                <=> 最小值
	 * @param {number=100}              options.data.max                <=> 最大值
	 * @param {number=0}                options.data.step               <=> 间隔
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Slider = _rguiUiBase.Component.extend({
	    name: 'slider',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        var _this = this;

	        this.data = Object.assign({
	            value: 0,
	            min: 0,
	            max: 100,
	            step: 0,
	            _grid: { x: 0, y: 0 }
	        }, this.data);
	        this.supr();

	        this.$watch('value', function (newValue, oldValue) {
	            _this.$emit('change', {
	                sender: _this,
	                value: newValue
	            });
	        });
	    },

	    computed: {
	        percent: {
	            get: function get() {
	                return (this.data.value - this.data.min) / (this.data.max - this.data.min) * 100;
	            },
	            set: function set(percent) {
	                var value = +this.data.min + (this.data.max - this.data.min) * percent / 100;
	                if (this.data.step) value = Math.round(value / this.data.step) * this.data.step;
	                this.data.value = value;
	            }
	        }
	    },
	    /**
	     * @private
	     */
	    _onMouseDown: function _onMouseDown($event) {
	        if (this.data.readonly || this.data.disabled) return;

	        var e = $event.event;
	        var $handle = this.$refs.handle;
	        var $parent = $handle.offsetParent;
	        var dimension = _regularjs.dom.getDimension($parent, 'center');

	        this.$set('percent', (e.clientX - dimension.left) / dimension.width * 100);
	    },

	    /**
	     * @private
	     */
	    _onDragStart: function _onDragStart($event) {
	        this.data._grid.x = this.data.step / (this.data.max - this.data.min) * $event.range.width;
	    },

	    /**
	     * @private
	     */
	    _onDrag: function _onDrag($event) {
	        this.$set('percent', $event.left / $event.range.width * 100);
	    }
	});

	exports.default = Slider;

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"movable","attrs":[{"type":"attribute","name":"disabled","value":{"type":"expression","body":"c._sg_('readonly', d, e)||c._sg_('disabled', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"proxy","value":{"type":"expression","body":"c._sg_('handle', c._sg_('$refs', c))","constant":false,"setbody":"c._ss_('handle',p_,c._sg_('$refs', c), '=', 0)"}},{"type":"attribute","name":"axis","value":"horizontal"},{"type":"attribute","name":"grid","value":{"type":"expression","body":"c._sg_('_grid', d, e)","constant":false,"setbody":"c._ss_('_grid',p_,d, '=', 1)"}},{"type":"attribute","name":"range","value":"offsetParent"},{"type":"attribute","name":"rangeMode","value":"center"},{"type":"attribute","name":"on-dragstart","value":{"type":"expression","body":"c['_onDragStart'](c._sg_('$event', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-drag","value":{"type":"expression","body":"c['_onDrag'](c._sg_('$event', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-slider ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-mousedown","value":{"type":"expression","body":"c['_onMouseDown'](c._sg_('$event', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"slider_track"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"slider_trail"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['width: ',c._sg_('percent', d, e),'%'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"slider_handle"},{"type":"attribute","name":"ref","value":"handle"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',c._sg_('percent', d, e),'%'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Movable = exports.Droppable = exports.Draggable = undefined;

	var _draggable = __webpack_require__(115);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _droppable = __webpack_require__(118);

	var _droppable2 = _interopRequireDefault(_droppable);

	var _movable = __webpack_require__(119);

	var _movable2 = _interopRequireDefault(_movable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Draggable = _draggable2.default;
	exports.Droppable = _droppable2.default;
	exports.Movable = _movable2.default;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _manager = __webpack_require__(116);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Draggable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='clone'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，拖拽时拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {var}                     options.data.value               => 拖拽时需要传递的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Draggable = _rguiUiBase.Component.extend({
	    name: 'draggable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            proxy: 'clone',
	            value: undefined,
	            'class': 'z-draggable',
	            sourceClass: 'z-dragSource',
	            proxyClass: 'z-dragProxy'
	        }, this.data);
	        this.supr();

	        this._onMouseDown = this._onMouseDown.bind(this);
	        this._onMouseMove = this._onMouseMove.bind(this);
	        this._onMouseUp = this._onMouseUp.bind(this);
	        this.cancel = this.cancel.bind(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        _regularjs.dom.on(inner, 'mousedown', this._onMouseDown);
	        this.supr();

	        this.$watch('disabled', function (newValue) {
	            return _regularjs.dom[newValue ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	    },

	    /**
	     * @method _getProxy() 获取拖拽代理
	     * @private
	     * @return {Element} 拖拽代理元素
	     */
	    _getProxy: function _getProxy() {
	        var proxy = void 0;
	        var source = _regularjs.dom.element(this);

	        if (typeof this.data.proxy === 'function') proxy = this.data.proxy();else if (this.data.proxy instanceof Element) proxy = this.data.proxy;else if (this.data.proxy === 'self') proxy = source;else if (this.data.proxy === 'clone') {
	            proxy = source.cloneNode(true);
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            var size = _regularjs.dom.getSize(source);
	            proxy.style.width = size.width + 'px';
	            proxy.style.height = size.height + 'px';
	            source.parentElement.appendChild(proxy);
	        } else if (this.data.proxy instanceof Draggable.Proxy) {
	            proxy = _regularjs.dom.element(this.data.proxy.$body());
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            document.body.appendChild(proxy);
	        }

	        proxy && this._initProxy(proxy);
	        return proxy;
	    },

	    /**
	     * @method _setProxyFixed() 将拖拽代理的position设置fixed并设置初始位置
	     * @param  {Element} proxy 拖拽代理元素
	     * @param  {position=...} position 拖拽代理的初始位置
	     * @private
	     * @return {void}
	     */
	    _setProxyFixed: function _setProxyFixed(proxy) {
	        var position = arguments.length <= 1 || arguments[1] === undefined ? { left: 0, top: 0 } : arguments[1];

	        proxy.style.left = position.left + 'px';
	        proxy.style.top = position.top + 'px';
	        proxy.style.zIndex = '9999';
	        proxy.style.position = 'fixed';
	        proxy.style.display = '';
	    },

	    /**
	     * @method _initProxy() 初始化拖拽代理
	     * @private
	     * @return {void}
	     */
	    _initProxy: function _initProxy(proxy) {
	        // 如果position为static，则设置为relative，保证可以移动
	        if (_regularjs.dom.getComputedStyle(proxy, 'position') === 'static') proxy.style.position = 'relative';
	    },

	    /**
	     * @private
	     */
	    _onMouseDown: function _onMouseDown($event) {
	        if (this.data.disabled) return;

	        var e = $event.event;
	        // 阻止浏览器的默认行为，特别是IE的选择行为
	        $event.preventDefault();

	        // 鼠标坐标从MouseDown开始算，防止出现第一次移动的误差
	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            startX: e.clientX,
	            startY: e.clientY,
	            dragX: 0,
	            dragY: 0
	        });

	        _regularjs.dom.on(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.on(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @private
	     */
	    _onMouseMove: function _onMouseMove($event) {
	        var e = $event.event;
	        $event.preventDefault();

	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            dragX: e.clientX - _manager2.default.startX,
	            dragY: e.clientY - _manager2.default.startY
	        });

	        if (_manager2.default.dragging === false) this._onMouseMoveStart(e);else this._onMouseMoving(e);
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e, override) {
	        var proxy = this._getProxy();

	        // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
	        // 获取初始的left和top值
	        var computedStyle = proxy ? _regularjs.dom.getComputedStyle(proxy) : {};
	        if (!computedStyle.left || computedStyle.left === 'auto') computedStyle.left = '0px';
	        if (!computedStyle.top || computedStyle.top === 'auto') computedStyle.top = '0px';

	        Object.assign(_manager2.default, {
	            dragging: true,
	            proxy: proxy,
	            value: this.data.value,
	            startLeft: +computedStyle.left.slice(0, -2),
	            startTop: +computedStyle.top.slice(0, -2),
	            droppable: undefined
	        });

	        _manager2.default.left = _manager2.default.startLeft;
	        _manager2.default.top = _manager2.default.startTop;

	        !override && this._dragStart();
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理后续鼠标移动事件
	     * @param  {MouseEvent} e 鼠标事件
	     * @private
	     * @return {void}
	     */
	    _onMouseMoving: function _onMouseMoving(e) {
	        // 拖拽约束
	        var next = this.restrict(_manager2.default);
	        // 设置位置
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.left = next.left + 'px';
	            _manager2.default.proxy.style.top = next.top + 'px';
	        }
	        // 更新当前位置
	        _manager2.default.left = next.left;
	        _manager2.default.top = next.top;

	        this._drag();
	        if (!_manager2.default.dragging) return;

	        // for Droppable
	        var pointElement = null;
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.display = 'none';
	            pointElement = document.elementFromPoint(e.clientX, e.clientY);
	            _manager2.default.proxy.style.display = '';
	        } else pointElement = document.elementFromPoint(e.clientX, e.clientY);

	        var pointDroppable = null;
	        while (pointElement) {
	            pointDroppable = _manager2.default.droppables.find(function (droppable) {
	                return _regularjs.dom.element(droppable) === pointElement;
	            });

	            if (pointDroppable) break;else pointElement = pointElement.parentElement;
	        }

	        if (_manager2.default.droppable !== pointDroppable) {
	            _manager2.default.droppable && _manager2.default.droppable._dragLeave(this);
	            if (!_manager2.default.dragging) return;
	            pointDroppable && pointDroppable._dragEnter(this);
	            if (!_manager2.default.dragging) return;
	            _manager2.default.droppable = pointDroppable;
	        }

	        // dragEnter之后也要dragOver
	        pointDroppable && pointDroppable._dragOver(this);
	    },

	    /**
	     * @method restrict(manager) 拖拽约束函数
	     * @protected
	     * @param  {params} 拖拽参数
	     * @return {left, top} 拖拽代理元素计算后的left和top位置
	     */
	    restrict: function restrict(params) {
	        return {
	            left: params.startLeft + params.dragX,
	            top: params.startTop + params.dragY
	        };
	    },

	    /**
	     * @private
	     */
	    _onMouseUp: function _onMouseUp($event) {
	        if (_manager2.default.dragging) {
	            _manager2.default.droppable && _manager2.default.droppable._drop(this);
	            this.cancel();
	        }

	        _regularjs.dom.off(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.off(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @method cancel() 取消拖拽操作
	     * @public
	     * @return {void}
	     */
	    cancel: function cancel() {
	        this._dragEnd();

	        Object.assign(_manager2.default, {
	            dragging: false,
	            value: undefined,
	            proxy: undefined,
	            range: undefined,
	            screenX: 0,
	            screenY: 0,
	            clientX: 0,
	            clientY: 0,
	            pageX: 0,
	            pageY: 0,
	            startX: 0,
	            startY: 0,
	            dragX: 0,
	            dragY: 0,
	            startLeft: 0,
	            startTop: 0,
	            left: 0,
	            top: 0,
	            droppable: undefined
	        });
	    },

	    /**
	     * @private
	     */
	    _dragStart: function _dragStart() {
	        var source = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(source, this.data.sourceClass);
	        _manager2.default.proxy && _regularjs.dom.addClass(_manager2.default.proxy, this.data.proxyClass);

	        /**
	         * @event dragstart 拖拽开始时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragstart', Object.assign({
	            sender: this,
	            origin: this,
	            source: source,
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drag: function _drag() {
	        /**
	         * @event drag 正在拖拽时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('drag', Object.assign({
	            sender: this,
	            origin: this,
	            source: _regularjs.dom.element(this),
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragEnd: function _dragEnd() {
	        var source = this._watchers !== null ? _regularjs.dom.element(this) : null;
	        source && _regularjs.dom.delClass(source, this.data.sourceClass);

	        /**
	         * @event dragend 拖拽结束时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         */
	        this.$emit('dragend', Object.assign({
	            sender: this,
	            origin: this,
	            source: source
	        }, _manager2.default));

	        if (_manager2.default.proxy) {
	            if (this.data.proxy instanceof Draggable.Proxy || this.data.proxy === 'clone') _manager2.default.proxy.parentElement.removeChild(_manager2.default.proxy);

	            _regularjs.dom.delClass(_manager2.default.proxy, this.data.proxyClass);
	        }
	    }
	});

	Draggable.Proxy = _rguiUiBase.Component.extend({
	    name: 'draggable.proxy',
	    /**
	     * @protected
	     */
	    init: function init() {
	        if (this.$outer instanceof Draggable) this.$outer.data.proxy = this;
	    }
	});

	exports.default = Draggable;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(117);

	var manager = {
	    dragging: false,
	    value: undefined,
	    proxy: undefined,
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    startX: 0,
	    startY: 0,
	    dragX: 0,
	    dragY: 0,
	    startLeft: 0,
	    startTop: 0,
	    dragLeft: 0,
	    dragTop: 0,
	    droppable: undefined,
	    droppables: []
	};

	exports.default = manager;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(77);

	Object.assign(_regularjs.dom, {
	    getPosition: function getPosition(elem) {
	        var doc = elem && elem.ownerDocument;
	        var docElem = doc.documentElement;
	        var body = doc.body;

	        var box = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { left: 0, top: 0 };

	        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
	        var clientTop = docElem.clientTop || body.clientTop || 0;

	        return { left: box.left - clientLeft, top: box.top - clientTop };
	    },
	    getSize: function getSize(elem) {
	        var mode = arguments.length <= 1 || arguments[1] === undefined ? 'outside' : arguments[1];

	        if (mode === 'inside') return { width: elem.clientWidth, height: elem.clientHeight };else if (mode === 'center') return { width: (elem.clientWidth + elem.offsetWidth) / 2, height: (elem.offsetHeight + elem.clientHeight) / 2 };else if (mode === 'outside') return { width: elem.offsetWidth, height: elem.offsetHeight };
	    },
	    getDimension: function getDimension(elem, mode) {
	        return Object.assign(this.getSize(elem, mode), this.getPosition(elem));
	    },
	    isInRect: function isInRect(position, dimension) {
	        if (!position || !dimension) return false;

	        return position.left > dimension.left && position.left < dimension.left + dimension.width && position.top > dimension.top && position.top < dimension.top + dimension.height;
	    },
	    getComputedStyle: function getComputedStyle(elem, property) {
	        var computedStyle = elem.currentStyle || window.getComputedStyle(elem, null);
	        return property ? computedStyle[property] : computedStyle;
	    }
	});

	exports.default = _regularjs.dom;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _manager = __webpack_require__(116);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Droppable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=  拖放后传递过来的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-droppable'}    options.data.class               => 可放置时（即disabled=false）给元素附加此class
	 * @param {string='z-dragTarget'}   options.data.dragTarget          => 拖拽在该元素上方时给该元素附加此class
	 */
	var Droppable = _rguiUiBase.Component.extend({
	    name: 'droppable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            data: null,
	            'class': 'z-droppable',
	            dragTarget: 'z-dragTarget'
	        }, this.data);
	        this.supr();

	        _manager2.default.droppables.push(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        this.$watch('disabled', function (newValue) {
	            return _regularjs.dom[newValue ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	        this.supr();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    destroy: function destroy() {
	        _manager2.default.droppables.splice(_manager2.default.droppables.indexOf(this), 1);
	        this.supr();
	    },

	    /**
	     * @private
	     */
	    _dragEnter: function _dragEnter(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(element, this.data.dragTarget);

	        /**
	         * @event dragenter 拖拽进入该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragenter', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragLeave: function _dragLeave(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);

	        /**
	         * @event dragleave 拖拽离开该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragleave', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragOver: function _dragOver(origin) {
	        var element = _regularjs.dom.element(this);
	        var dimension = _regularjs.dom.getDimension(element);

	        /**
	         * @event dragover 拖拽在该元素上方时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragover', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drop: function _drop(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);
	        var dimension = _regularjs.dom.getDimension(element);

	        this.data.value = origin.data.value;
	        this.$update();

	        /**
	         * @event drop 拖拽放置时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         */
	        this.$emit('drop', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height
	        }, _manager2.default));
	    }
	});

	exports.default = Droppable;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _draggable = __webpack_require__(115);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _manager = __webpack_require__(116);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Movable
	 * @extend Draggable
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='self'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，表示拖拽时会拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {string='both'}           options.data.axis                => 拖拽代理移动时限制的轴向，`both`表示可以在任意方向上移动，`horizontal`表示限制在水平方向上移动，`vertical`表示限制在垂直方向上移动。
	 * @param {object={x:0,y:0}}        options.data.grid                => 拖拽代理移动时限制的网格。值为一个{x,y}格式的对象，表示水平方向和垂直方向网格的大小。
	 * @param {string|object|function}  options.data.range              @=> 拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界，也可以传一个函数。当值为`offsetParent`，代理元素限制在offsetParent中移动，仅适用于`position`为`absolute`的情况；当值为`parent`；当值为`window`时，拖拽时代理元素限制在window中移动，仅适用于`position`为`fixed`的情况。
	 * @param {string=inside}           options.data.rangeMode           => 拖拽范围模式，默认为`inside`，表示在拖拽范围内侧移动，`center`表示在拖拽范围边缘及内侧移动。
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Movable = _draggable2.default.extend({
	    name: 'movable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            proxy: 'self',
	            // value: undefined,
	            // 'class': 'z-draggable',
	            // sourceClass: 'z-dragSource',
	            // proxyClass: 'z-dragProxy'
	            axis: 'both',
	            grid: { x: 0, y: 0 },
	            range: undefined,
	            rangeMode: 'inside'
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @method _getRange(proxy) 获取拖拽范围
	     * @private
	     * @param  {Element} proxy 拖拽代理元素
	     * @return {Element} 拖拽范围元素
	     */
	    _getRange: function _getRange(proxy) {
	        var range = void 0;

	        if (_typeof(this.data.range) === 'object') range = this.data.range;else if (typeof this.data.range === 'function') range = this.data.range();else if (this.data.range === 'offsetParent') {
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') !== 'absolute') proxy.style.position = 'absolute';

	            var offsetParent = proxy.offsetParent;
	            range = Object.assign({ left: 0, top: 0 }, _regularjs.dom.getSize(offsetParent, this.data.rangeMode));
	        } else if (this.data.range === 'window') {
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') !== 'fixed') proxy.style.position = 'fixed';

	            range = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
	        }

	        if (range) {
	            if (range.width !== undefined && range.height !== undefined) {
	                range.right = range.left + range.width;
	                range.bottom = range.top + range.height;
	            } else if (range.right !== undefined && range.bottom !== undefined) {
	                range.width = range.right - range.left;
	                range.height = range.bottom - range.top;
	            }
	        }

	        return range;
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @override
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e) {
	        this.supr(e, true);
	        if (_manager2.default.proxy) _manager2.default.range = this._getRange(_manager2.default.proxy);
	        this._dragStart();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    restrict: function restrict(params) {
	        var next = this.supr(params);

	        // 范围约束
	        if (params.range) {
	            if (this.data.rangeMode === 'inside') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - _manager2.default.proxy.offsetWidth);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - _manager2.default.proxy.offsetHeight);
	            } else if (this.data.rangeMode === 'center') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
	            } else if (this.data.rangeMode === 'outside') {
	                next.left = Math.min(Math.max(params.range.left - _manager2.default.proxy.offsetWidth, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top - _manager2.default.proxy.offsetHeight, next.top), params.range.bottom);
	            }
	        }

	        // 网格约束
	        var grid = this.data.grid;
	        grid.x && (next.left = Math.round(next.left / grid.x) * grid.x);
	        grid.y && (next.top = Math.round(next.top / grid.y) * grid.y);

	        // 轴向约束
	        if (this.data.axis === 'vertical') next.left = params.startLeft;
	        if (this.data.axis === 'horizontal') next.top = params.startTop;

	        return next;
	    }
	});

	exports.default = Movable;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tab = exports.Tabs = undefined;

	var _tabs = __webpack_require__(121);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _tab = __webpack_require__(123);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tabs = _tabs2.default;
	exports.Tab = _tab2.default;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiListview = __webpack_require__(91);

	var _index = __webpack_require__(122);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Tabs
	 * @extend ListView
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {object=null}             options.data.selected           <=> 当前选择卡
	 * @param {string=null}             options.data.titleTemplate      @=> 标题模板
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Tabs = _rguiUiListview.ListView.extend({
	    name: 'tabs',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            // @inherited _list: [],
	            // @inherited _selected: undefined,
	            current: 0,
	            titleTemplate: undefined
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    watch: function watch() {
	        var _this = this;

	        this.$watch('current', function (newValue, oldValue) {
	            if (!_this.data._selected) _this.data._selected = _this.data._list[newValue];

	            /**
	             * @event change 选择值改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {Item} selected 改变后的选择项
	             * @property {var} current 当前项索引
	             */
	            _this.$emit('change', {
	                sender: _this,
	                selected: _this.data._selected,
	                current: newValue
	            });
	        });

	        this.$watch('_selected', function (newValue, oldValue) {
	            // 设置current
	            _this.data.current = newValue ? _this.data._list.indexOf(newValue) : newValue;
	        });
	    }
	});

	exports.default = Tabs;

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-tabs ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":"tabs_hd"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('_list', d, e)","constant":false,"setbody":"c._ss_('_list',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('item', d, e)===c._sg_('_selected', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', c._sg_('data', c._sg_('item', d, e)))","constant":false,"setbody":"c._ss_('disabled',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)"}},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('title', c._sg_('data', c._sg_('item', d, e)))","constant":false,"setbody":"c._ss_('title',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', c._sg_('data', c._sg_('item', d, e))))","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c._sg_('item', d, e)['select']()","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n            "},{"type":"if","test":{"type":"expression","body":"c._sg_('titleTemplate', d, e)","constant":false,"setbody":"c._ss_('titleTemplate',p_,d, '=', 1)","once":true},"consequent":[{"type":"text","text":"\n                "},{"type":"template","content":{"type":"expression","body":"c._sg_('titleTemplate', d, e)","constant":false,"setbody":"c._ss_('titleTemplate',p_,d, '=', 1)","once":true}},{"type":"text","text":"\n            "}],"alternate":[{"type":"text","text":"\n                "},{"type":"expression","body":"c._sg_('title', c._sg_('data', c._sg_('item', d, e)))","constant":false,"setbody":"c._ss_('title',p_,c._sg_('data', c._sg_('item', d, e)), '=', 0)"},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"tabs_bd"}],"children":[{"type":"text","text":"\n        "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiListview = __webpack_require__(91);

	/**
	 * @class Tab
	 * @extend Item
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.selected           <=> 该项是否被选中
	 * @param {string=''}               options.data.title               => 该项的工具提示
	 * @param {boolean=false}           options.data.disabled            => 禁用该项
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Tab = _rguiUiListview.Item.extend({
	    name: 'tab',
	    template: '<div r-hide={this.$outer.data.selected !== this}>{#inc this.$body}</div>',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            // @inherited selected: false,
	            // @inherited disabled: false,
	            title: ''
	        }, this.data);
	        this.supr();
	    }
	});

	exports.default = Tab;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Uploader = undefined;

	var _uploader = __webpack_require__(125);

	var _uploader2 = _interopRequireDefault(_uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Uploader = _uploader2.default;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(75);

	var _index = __webpack_require__(126);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SIZE_UNITS = {
	    kB: 1000,
	    MB: Math.pow(1000, 2),
	    GB: Math.pow(1000, 3),
	    TB: Math.pow(1000, 4)
	};

	/**
	 * @class Uploader
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string=''}               options.data.url                 => 上传路径
	 * @param {string='json'}           options.data.dataType            => 接收数据类型。可以是：`text`、`xml`、`json`。
	 * @param {object}                  options.data.data                => 附加数据
	 * @param {string='file'}           options.data.name                => 上传文件的name
	 * @param {string|string[]=''}      options.data.extensions          => 可上传的扩展名。默认为空，表示可上传任意文件类型的文件；可以为字符串，多个扩展名用`,`隔开，如：'png,jpg,gif'；也可以为数组，如：['png', 'jpg', 'gif']。
	 * @param {string|number=''}        options.data.maxSize             => 可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位：`kB`、`MB`、`GB`。
	 * @param {boolean=false}           options.data.sending            <=  是否正在上传
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Uploader = _rguiUiBase.Component.extend({
	    name: 'uploader',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            url: '',
	            contentType: 'multipart/form-data',
	            dataType: 'json',
	            data: {},
	            name: 'file',
	            extensions: null,
	            maxSize: '',
	            sending: false,
	            _id: new Date().getTime()
	        }, this.data);
	        this.supr();
	    },

	    /**
	     * @method upload() 弹出文件对话框并且上传文件
	     * @public
	     * @return {void}
	     */
	    upload: function upload() {
	        if (this.data.disabled || this.data.sending) return;

	        this.$refs.file.click();
	    },

	    /**
	     * @method _checkExtensions(file) 检查扩展名
	     * @private
	     * @param  {File} file 文件对象
	     * @return {boolean} 返回是否通过验证
	     */
	    _checkExtensions: function _checkExtensions(file) {
	        if (!this.data.extensions) return true;

	        var fileName = file.name;
	        var extName = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();

	        var extensions = this.data.extensions;
	        if (typeof extensions === 'string') extensions = extensions.split(',');

	        if (extensions.includes(extName)) return true;

	        /**
	         * @event error 上传错误时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} name ExtensionError
	         * @property {object} message 错误信息
	         * @property {object} extensions 可上传的扩展名
	         */
	        this.$emit('error', {
	            sender: this,
	            name: 'ExtensionError',
	            message: '只能上传' + extensions.join(', ') + '类型的文件！',
	            extensions: extensions
	        });

	        return false;
	    },

	    /**
	     * @method _checkSize(file) 检查文件大小
	     * @private
	     * @param  {File} file 文件对象
	     * @return {boolean} 返回是否通过验证
	     */
	    _checkSize: function _checkSize(file) {
	        if (!this.data.maxSize && this.data.maxSize !== 0) return true;

	        var maxSize = void 0;
	        if (!isNaN(this.data.maxSize)) maxSize = +this.data.maxSize;else {
	            var unit = this.data.maxSize.slice(-2);
	            if (!SIZE_UNITS[unit]) throw new Error('Unknown unit!');

	            maxSize = this.data.maxSize.slice(0, -2) * SIZE_UNITS[unit];
	        }

	        if (file.size <= maxSize) return true;

	        /**
	         * @event error 上传错误时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} name SizeError
	         * @property {object} message 错误信息
	         * @property {object} maxSize 可上传的最大文件大小
	         * @property {object} size 当前文件大小
	         */
	        this.$emit('error', {
	            sender: this,
	            name: 'SizeError',
	            message: '文件大小超出限制！',
	            maxSize: this.data.maxSize,
	            size: file.size
	        });

	        return false;
	    },

	    /**
	     * @method _submit() 提交表单
	     * @private
	     * @return {void}
	     */
	    _submit: function _submit() {
	        var file = this.$refs.file.files ? this.$refs.file.files[0] : {
	            name: this.$refs.file.value,
	            size: 0
	        };

	        if (!file || !file.name || !this._checkExtensions(file) || !this._checkSize(file)) return;

	        this.data.sending = true;
	        /**
	         * @event sending 发送前触发
	         * @property {object} sender 事件发送对象
	         * @property {object} data 待发送的数据
	         */
	        this.$emit('sending', {
	            sender: this,
	            data: this.data.data
	        });

	        this.$refs.form.submit();
	    },

	    /**
	     * @method _onLoad() 接收数据回调
	     * @private
	     * @return {void}
	     */
	    _onLoad: function _onLoad() {
	        var $iframe = this.$refs.iframe;

	        if (!this.data.sending) return;
	        this.data.sending = false;

	        var xml = {};
	        if ($iframe.contentWindow) {
	            xml.responseText = $iframe.contentWindow.document.body ? $iframe.contentWindow.document.body.innerText : null;
	            xml.responseXML = $iframe.contentWindow.document.XMLDocument ? $iframe.contentWindow.document.XMLDocument : $iframe.contentWindow.document;
	        } else if ($iframe.contentDocument) {
	            xml.responseText = $iframe.contentDocument.document.body ? $iframe.contentDocument.document.body.innerText : null;
	            xml.responseXML = $iframe.contentDocument.document.XMLDocument ? $iframe.contentDocument.document.XMLDocument : $iframe.contentDocument.document;
	        }

	        if (!xml.responseText) {
	            /**
	             * @event error 上传错误时触发
	             * @property {object} sender 事件发送对象
	             * @property {object} name ResponseError
	             * @property {object} message 错误信息
	             */
	            return this.$emit('error', {
	                sender: this,
	                name: 'ResponseError',
	                message: 'No responseText!'
	            });
	        }

	        /**
	         * @event complete 上传完成时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} xml 返回的xml
	         */
	        this.$emit('complete', {
	            sender: this,
	            xml: xml
	        });

	        /**
	         * @event success 上传成功时触发
	         * @property {object} sender 事件发送对象
	         * @property {object} data 返回的数据
	         */
	        this.$emit('success', {
	            sender: this,
	            data: this._parseData(xml, this.data.dataType)
	        });
	    },

	    /**
	     * @method _parseData(xml, type) 解析接收的数据
	     * @private
	     * @param  {object} xml 接收的xml
	     * @param  {object} type 数据类型
	     * @return {object|string} 解析后的数据
	     */
	    _parseData: function _parseData(xml, type) {
	        if (type === 'text') return xml.responseText;else if (type === 'xml') return xml.responseXML;else if (type === 'json') {
	            var data = xml.responseText;
	            try {
	                data = JSON.parse(data);
	            } catch (e) {}

	            return data;
	            // danger，暂时不开启
	            // } else if (type === 'script')
	            //     return eval(xml.responseText);
	        } else return xml.responseText;
	    }
	});

	exports.default = Uploader;

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-uploader ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['upload']()","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n        "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"form","attrs":[{"type":"attribute","name":"method","value":"POST"},{"type":"attribute","name":"action","value":{"type":"expression","body":"c._sg_('url', d, e)","constant":false,"setbody":"c._ss_('url',p_,d, '=', 1)"}},{"type":"attribute","name":"target","value":{"type":"expression","body":"['iframe',c._sg_('_id', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"enctype","value":{"type":"expression","body":"c._sg_('contentType', d, e)","constant":false,"setbody":"c._ss_('contentType',p_,d, '=', 1)"}},{"type":"attribute","name":"ref","value":"form"}],"children":[{"type":"text","text":"\n        "},{"type":"if","test":{"type":"expression","body":"(!c._sg_('sending', d, e))","constant":false,"setbody":false},"consequent":[{"type":"text","text":"\n        \n        "},{"type":"element","tag":"input","attrs":[{"type":"attribute","name":"type","value":"file"},{"type":"attribute","name":"name","value":{"type":"expression","body":"c._sg_('name', d, e)","constant":false,"setbody":"c._ss_('name',p_,d, '=', 1)"}},{"type":"attribute","name":"ref","value":"file"},{"type":"attribute","name":"on-change","value":{"type":"expression","body":"c['_submit']()","constant":false,"setbody":false}}]},{"type":"text","text":"\n        "}],"alternate":[]},{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"Object['keys'](c._sg_('data', d, e))","constant":false,"setbody":false},"alternate":[],"variable":"key","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"input","attrs":[{"type":"attribute","name":"type","value":"hidden"},{"type":"attribute","name":"name","value":{"type":"expression","body":"c._sg_('key', d, e)","constant":false,"setbody":"c._ss_('key',p_,d, '=', 1)"}},{"type":"attribute","name":"value","value":{"type":"expression","body":"c._sg_(c._sg_('key', d, e), c._sg_('data', d, e))","constant":false,"setbody":"c._ss_(c._sg_('key', d, e),p_,c._sg_('data', d, e), '=', 0)"}}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"iframe","attrs":[{"type":"attribute","name":"name","value":{"type":"expression","body":"['iframe',c._sg_('_id', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"on-load","value":{"type":"expression","body":"c['_onLoad']()","constant":false,"setbody":false}},{"type":"attribute","name":"ref","value":"iframe"}]},{"type":"text","text":"\n"}]}]

/***/ }
/******/ ])
});
;