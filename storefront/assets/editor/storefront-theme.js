/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/@vtex.storefront-theme/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _sdk = __webpack_require__(7);
	
	var _editorsShelfShelfEditor = __webpack_require__(73);
	
	var _editorsShelfShelfEditor2 = _interopRequireDefault(_editorsShelfShelfEditor);
	
	var _editorsShelfShelfEditMode = __webpack_require__(76);
	
	var _editorsShelfShelfEditMode2 = _interopRequireDefault(_editorsShelfShelfEditMode);
	
	var components = [{
	  name: 'ShelfEditor',
	  constructor: _editorsShelfShelfEditor2['default']
	}, {
	  name: 'ShelfEditMode',
	  constructor: _editorsShelfShelfEditMode2['default']
	}];
	
	_sdk.dispatcher.actions.ComponentActions.register(components);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = storefront.sdk;

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashCollectionIncludes = __webpack_require__(22);
	
	var _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
	
	var _lodashObjectKeys = __webpack_require__(40);
	
	var _lodashObjectKeys2 = _interopRequireDefault(_lodashObjectKeys);
	
	var _stylesComponentsUtilsSVGIconLess = __webpack_require__(44);
	
	var _stylesComponentsUtilsSVGIconLess2 = _interopRequireDefault(_stylesComponentsUtilsSVGIconLess);
	
	// eslint-disable-line
	
	var cleanups = {
	  // some useless stuff for us
	  // that svgo doesn't remove
	  title: /<title>.*<\/title>/gi,
	  desc: /<desc>.*<\/desc>/gi,
	  comment: /<!--.*-->/gi,
	  defs: /<defs>.*<\/defs>/gi,
	  style: /<style>.*<\/style>/gi,
	
	  // remove hardcoded dimensions
	  width: / +width="\d+(\.\d+)?(px)?"/gi,
	  height: / +height="\d+(\.\d+)?(px)?"/gi,
	
	  // remove fill
	  fill: / +fill=\"(none|#[0-9a-fA-F]+)\"/gi,
	
	  // Sketch.app shit
	  sketchMSShapeGroup: / +sketch:type=\"MSShapeGroup\"/gi,
	  sketchMSPage: / +sketch:type=\"MSPage\"/gi,
	  sketchMSLayerGroup: / +sketch:type=\"MSLayerGroup\"/gi
	};
	
	function browserSupportsInlineSVG() {
	  if (!document) {
	    return false;
	  }
	  var div = document.createElement('div');
	  div.innerHTML = '<svg/>';
	  return (typeof SVGRect !== 'undefined' && div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
	}
	
	var browserSupport = browserSupportsInlineSVG();
	
	var SVGIcon = (function (_React$Component) {
	  function SVGIcon() {
	    var _this = this;
	
	    _classCallCheck(this, SVGIcon);
	
	    _get(Object.getPrototypeOf(SVGIcon.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      browserSupport: browserSupport
	    };
	
	    this._renderSVG = function () {
	      var _props = _this.props;
	      var className = _props.className;
	      var component = _props.component;
	      var svg = _props.svg;
	      var fill = _props.fill;
	
	      var cleanup = _this.props.cleanup;
	      if (
	      // simple way to enable entire cleanup
	      cleanup === true || _this.props.cleanup.length === 0 && _this.props.cleanupExceptions.length > 0) {
	        cleanup = (0, _lodashObjectKeys2['default'])(cleanups);
	      }
	      cleanup = cleanup.filter(function (key) {
	        return !(0, _lodashCollectionIncludes2['default'])(_this.props.cleanupExceptions, key);
	      });
	
	      var _props2 = _this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	
	      if (width && height === undefined) {
	        height = width;
	      }
	
	      var props = _extends({}, _this.props, { svg: null, fill: null, width: null, height: null });
	
	      var classes = 'SVGICon';
	
	      if (cleanup.length) {
	        classes += ' SVGIcon--cleaned';
	      }
	      if (className) {
	        classes += ' ' + className;
	      }
	
	      var svgClasses = classes.split(' ').join(_this.props.classSuffix + ' ') + _this.props.classSuffix;
	
	      return _react2['default'].createElement(component, _extends({}, props, { // take most props
	        className: classes,
	        dangerouslySetInnerHTML: {
	          __html: SVGIcon.cleanupSvg(svg, cleanup).replace(/<svg/, '<svg class="' + svgClasses + '"' + (fill ? ' fill="' + fill + '"' : '') + (width || height ? ' style="' + (width ? 'width: ' + width + ';' : '') + (height ? 'height: ' + height + ';' : '') + '"' : ''))
	        }
	      }));
	    };
	
	    this._renderFallback = function () {
	      var _props3 = _this.props;
	      var className = _props3.className;
	      var component = _props3.component;
	      var fallback = _props3.fallback;
	      var width = _props3.width;
	      var height = _props3.height;
	
	      var props = _extends({}, _this.props, { svg: null, fill: null, width: null, height: null });
	
	      var classes = 'SVGICon SVGIcon--fallback ' + className;
	
	      return _react2['default'].createElement(
	        'component',
	        _extends({}, props, { className: classes }),
	        _react2['default'].createElement('img', { src: fallback, width: width, height: height, className: 'SVGICon--fallback-image' })
	      );
	    };
	  }
	
	  _inherits(SVGIcon, _React$Component);
	
	  _createClass(SVGIcon, [{
	    key: 'render',
	    value: function render() {
	      if (this.state.browserSupport) {
	        return this._renderSVG();
	      } else {
	        return this._renderFallback();
	      }
	    }
	  }], [{
	    key: 'cleanupSvg',
	    value: function cleanupSvg(svg) {
	      var cleanup = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	      return (0, _lodashObjectKeys2['default'])(cleanups).filter(function (key) {
	        return (0, _lodashCollectionIncludes2['default'])(cleanup, key);
	      }).reduce(function (acc, key) {
	        return acc.replace(cleanups[key], '');
	      }, svg).trim();
	    }
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'div',
	      classSuffix: '-svg',
	      cleanup: true,
	      cleanupExceptions: []
	    },
	    enumerable: true
	  }, {
	    key: 'PropTypes',
	    value: {
	      component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.func]),
	      svg: _react2['default'].PropTypes.string.isRequired,
	      fill: _react2['default'].PropTypes.string,
	      cleanup: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.array]),
	      width: _react2['default'].PropTypes.string,
	      height: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  return SVGIcon;
	})(_react2['default'].Component);
	
	exports['default'] = SVGIcon;
	module.exports = exports['default'];

	// passing cleanupExceptions enable cleanup as well

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(23),
	    getLength = __webpack_require__(25),
	    isArray = __webpack_require__(27),
	    isIterateeCall = __webpack_require__(34),
	    isLength = __webpack_require__(33),
	    isString = __webpack_require__(37),
	    values = __webpack_require__(38);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `value` is in `collection` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	 * from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @alias contains, include
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {*} target The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	 * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	 * // => true
	 *
	 * _.includes('pebbles', 'eb');
	 * // => true
	 */
	function includes(collection, target, fromIndex, guard) {
	  var length = collection ? getLength(collection) : 0;
	  if (!isLength(length)) {
	    collection = values(collection);
	    length = collection.length;
	  }
	  if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	    fromIndex = 0;
	  } else {
	    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	  }
	  return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	    ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, target, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(24);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(26);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    isLength = __webpack_require__(33),
	    isObjectLike = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(29);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(30),
	    isObjectLike = __webpack_require__(32);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(35),
	    isIndex = __webpack_require__(36),
	    isObject = __webpack_require__(31);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(25),
	    isLength = __webpack_require__(33);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(39),
	    keys = __webpack_require__(40);
	
	/**
	 * Creates an array of the own enumerable property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return baseValues(object, keys(object));
	}
	
	module.exports = values;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  var index = -1,
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = object[props[index]];
	  }
	  return result;
	}
	
	module.exports = baseValues;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    isArrayLike = __webpack_require__(35),
	    isObject = __webpack_require__(31),
	    shimKeys = __webpack_require__(41);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(42),
	    isArray = __webpack_require__(27),
	    isIndex = __webpack_require__(36),
	    isLength = __webpack_require__(33),
	    keysIn = __webpack_require__(43);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(35),
	    isObjectLike = __webpack_require__(32);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(42),
	    isArray = __webpack_require__(27),
	    isIndex = __webpack_require__(36),
	    isLength = __webpack_require__(33),
	    isObject = __webpack_require__(31);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/danielfosco/git/storefront-theme/node_modules/css-loader/index.js!/Users/danielfosco/git/storefront-theme/node_modules/less-loader/index.js!/Users/danielfosco/git/storefront-theme/src/styles/components/utils/SVGIcon.less", function() {
			var newContent = require("!!/Users/danielfosco/git/storefront-theme/node_modules/css-loader/index.js!/Users/danielfosco/git/storefront-theme/node_modules/less-loader/index.js!/Users/danielfosco/git/storefront-theme/src/styles/components/utils/SVGIcon.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	exports.push([module.id, ".SVGIcon {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* fix webkit/blink poor rendering issues */\n  transform: translate3d(0, 0, 0);\n}\n.SVGIcon-svg {\n  width: inherit;\n  height: inherit;\n  line-height: inherit;\n  color: inherit;\n  fill: currentColor;\n}\n", ""]);

/***/ },
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"88\" viewBox=\"0 0 35 118.2\"><style>.arrow{fill:none;stroke:#EDAF97;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class=\"arrow\" d=\"M34 117.2L1 59.1 34 1\"/></svg>"

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"88\" viewBox=\"0 0 35 118.2\"><style>.arrow{fill:none;stroke:#EDAF97;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class=\"arrow\" d=\"M1 1L34 59.1 1 117.2\"/></svg>"

/***/ },
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylesComponentsShelfShelfEditorLess = __webpack_require__(74);
	
	var _stylesComponentsShelfShelfEditorLess2 = _interopRequireDefault(_stylesComponentsShelfShelfEditorLess);
	
	//eslint-disable-line
	
	var ShelfEditor = (function (_React$Component) {
	  function ShelfEditor() {
	    _classCallCheck(this, ShelfEditor);
	
	    _get(Object.getPrototypeOf(ShelfEditor.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(ShelfEditor, _React$Component);
	
	  _createClass(ShelfEditor, [{
	    key: 'render',
	    value: function render() {
	      var ActionBar = this.props.actionBar;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'v-shelf-ed' },
	        _react2['default'].createElement(
	          'form',
	          { className: 'v-shelf-ed__inner' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'v-shelf-ed__text-field' },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'shelf-name' },
	              'Nome da Prateleira'
	            ),
	            _react2['default'].createElement('input', { id: 'shelf-name', className: 'form-control', type: 'url', placeholder: 'Nome da Prateleira' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'v-shelf-ed__text-field' },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'text' },
	              'Coleção'
	            ),
	            _react2['default'].createElement('input', { id: 'alt', className: 'form-control', type: 'url', placeholder: 'ID da coleção' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'v-shelf-ed__quant-field' },
	            _react2['default'].createElement(
	              'label',
	              { htmlFor: 'text' },
	              'Quantidade de Produtos na Prateleira'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'v-shelf-ed__quant-selector' },
	              _react2['default'].createElement(
	                'button',
	                { className: 'v-shelf-ed__quant-button--left' },
	                ' - '
	              ),
	              _react2['default'].createElement('input', { type: 'text', className: 'v-shelf-ed__quant-selector__input', placeholder: '1' }),
	              _react2['default'].createElement(
	                'button',
	                { className: 'v-shelf-ed__quant-button--right' },
	                ' + '
	              )
	            )
	          )
	        ),
	        _react2['default'].createElement(ActionBar, { onSave: function () {
	            return console.log('oi');
	          } })
	      );
	    }
	  }]);
	
	  return ShelfEditor;
	})(_react2['default'].Component);
	
	exports['default'] = ShelfEditor;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/danielfosco/git/storefront-theme/node_modules/css-loader/index.js!/Users/danielfosco/git/storefront-theme/node_modules/less-loader/index.js!/Users/danielfosco/git/storefront-theme/src/styles/components/shelf/ShelfEditor.less", function() {
			var newContent = require("!!/Users/danielfosco/git/storefront-theme/node_modules/css-loader/index.js!/Users/danielfosco/git/storefront-theme/node_modules/less-loader/index.js!/Users/danielfosco/git/storefront-theme/src/styles/components/shelf/ShelfEditor.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	exports.push([module.id, "/**\n*** @name:    sufixo da classe\n*** @i:       indice do sufixo\n*** ...       lista de 3 cores\n***\n*** Exemplo: .swatch(vtex; 1; @cor1; @cor2; @cor3);\n*** Resultado:\n*** &.swatch-vtex-1 { background-color: #111; }\n*** &.swatch-vtex-2 { background-color: #222; }\n*** &.swatch-vtex-3 { background-color: #333; }\n**/\n.v-uim {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n}\n.v-uim h1,\n.v-uim h2,\n.v-uim h3,\n.v-uim h4,\n.v-uim h5,\n.v-uim h6,\n.v-uim .lead {\n  font-family: \"Helvetica Neue\", \"Arial Narrow\", sans-serif;\n}\n.v-uim h1,\n.v-uim h2 {\n  font-weight: 300;\n}\n.v-uim h3,\n.v-uim h4 {\n  font-weight: 400;\n}\n.v-uim h5,\n.v-uim h6 {\n  font-weight: 800;\n}\n.v-uim h6 {\n  text-transform: uppercase;\n}\n.v-uim h4 small,\n.v-uim h5 small,\n.v-uim h6 small {\n  font-weight: 600;\n}\n.v-uim .btn {\n  font-family: \"Helvetica Neue\", \"Arial Narrow\", sans-serif;\n  font-weight: 700;\n  border-radius: 6px;\n  line-height: 1.4;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.v-uim .btn.btn-lg {\n  font-weight: 600;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.lead {\n  color: #5c6f7f;\n}\n.btn {\n  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.4);\n}\n.btn-default {\n  border-color: #c8ced6;\n  color: #5c6f7f;\n}\n.btn-default:hover {\n  background-color: #dbe1e5;\n}\n.btn-primary {\n  background-color: #0088cc;\n  border-color: #007ebd;\n  color: #cceeff;\n}\n.btn-success {\n  background-color: #17904a;\n  border-color: #158343;\n  color: #87ecb2;\n}\n.btn-warning {\n  background-color: #f4c22d;\n  border-color: #f3bb15;\n  color: #ffffff;\n}\n.btn-danger {\n  background-color: #e74c3c;\n  border-color: #e53f2e;\n  color: #fbdedb;\n}\n.v-clean-btn {\n  background-color: transparent;\n  border: none;\n}\n.v-no-outlines:active,\n.v-no-outlines:focus {\n  outline: none;\n}\n.v-arrow-icon {\n  fill: none;\n  stroke: #EDAF97;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-miterlimit: 10;\n}\n.v-arrow-icon[data-is-disabled=true] {\n  stroke: #eee;\n}\n.v-arrow-icon:active:not([data-is-disabled=true]) {\n  stroke-width: 4;\n  stroke: #e58e6c;\n}\n.v-shelf__title {\n  font-size: 27px;\n  font-style: italic;\n  font-weight: 400;\n  color: #153243;\n  text-align: center;\n}\n.v-shelf__products {\n  position: relative;\n  height: 235px;\n}\n.v-shelf__product {\n  position: absolute;\n  top: 30px;\n}\n.v-shelf__product-photo {\n  width: 167px;\n  height: 235px;\n}\n.v-shelf__product-title {\n  padding-top: 5px;\n  margin: 0;\n}\n.v-shelf__product-price {\n  font-size: 14px;\n  font-weight: 600;\n  color: #75CCB1;\n}\n.v-arrow {\n  position: relative;\n  padding-top: 110px;\n  padding-bottom: 170px;\n}\n.v-btn {\n  width: 167px;\n  height: 35px;\n  margin-bottom: 30px;\n  background-color: #75CCB1;\n  border: none;\n  border-radius: 9px;\n}\n.v-btn p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n}\n.v-shelf-ed {\n  background-color: #f4f7fa;\n  height: 100%;\n  overflow: auto;\n}\n.v-shelf-ed__inner {\n  margin: 1em 1em 0em 1em;\n}\n.v-shelf-ed__field {\n  margin-bottom: 1.5em;\n}\n.v-shelf-ed__field label {\n  font-family: \"ff-dagny-web-pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #777777;\n}\n.v-shelf-ed__text-field {\n  margin-bottom: 1.5em;\n}\n.v-shelf-ed__text-field label {\n  font-family: \"ff-dagny-web-pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #777777;\n}\n.v-shelf-ed__quant-field {\n  margin-bottom: 1.5em;\n}\n.v-shelf-ed__quant-field label {\n  font-family: \"ff-dagny-web-pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #777777;\n}\n.v-shelf-ed__quant-selector {\n  display: flex;\n  justify-content: center;\n  box-shadow: 2px 2px 0px 0px #ebebeb;\n  border-radius: 3px;\n}\n.v-shelf-ed__quant-selector__input {\n  border-bottom: 2px solid #ebebeb;\n  border-top: 2px solid #ebebeb;\n  border-right: none;\n  border-left: none;\n  color: #555555;\n  text-align: center;\n  height: 50px;\n  width: 60%;\n}\n.v-shelf-ed__quant-selector__input:active,\n.v-shelf-ed__quant-selector__input:focus {\n  outline: none;\n}\n.v-shelf-ed__quant-button {\n  background-color: transparent;\n  border: none;\n  background-color: #FFF;\n  color: #8c8c8c;\n  border: 2px solid #ebebeb;\n  font-size: 1.6em;\n  font-weight: 500;\n  height: 50px;\n  line-height: 1em;\n}\n.v-shelf-ed__quant-button:active,\n.v-shelf-ed__quant-button:focus {\n  outline: none;\n}\n.v-shelf-ed__quant-button:active {\n  background-color: #f0f0f0;\n}\n.v-shelf-ed__quant-button--left {\n  background-color: transparent;\n  border: none;\n  background-color: #FFF;\n  color: #8c8c8c;\n  border: 2px solid #ebebeb;\n  font-size: 1.6em;\n  font-weight: 500;\n  height: 50px;\n  line-height: 1em;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n  width: 20%;\n}\n.v-shelf-ed__quant-button--left:active,\n.v-shelf-ed__quant-button--left:focus {\n  outline: none;\n}\n.v-shelf-ed__quant-button--left:active {\n  background-color: #f0f0f0;\n}\n.v-shelf-ed__quant-button--right {\n  background-color: transparent;\n  border: none;\n  background-color: #FFF;\n  color: #8c8c8c;\n  border: 2px solid #ebebeb;\n  font-size: 1.6em;\n  font-weight: 500;\n  height: 50px;\n  line-height: 1em;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n  width: 20%;\n}\n.v-shelf-ed__quant-button--right:active,\n.v-shelf-ed__quant-button--right:focus {\n  outline: none;\n}\n.v-shelf-ed__quant-button--right:active {\n  background-color: #f0f0f0;\n}\n", ""]);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sdk = __webpack_require__(7);
	
	var _stylesComponentsShelfShelfEditModeLess = __webpack_require__(77);
	
	var _stylesComponentsShelfShelfEditModeLess2 = _interopRequireDefault(_stylesComponentsShelfShelfEditModeLess);
	
	// eslint-disable-line
	
	var _componentsUtilsSVGIcon = __webpack_require__(21);
	
	var _componentsUtilsSVGIcon2 = _interopRequireDefault(_componentsUtilsSVGIcon);
	
	var _assetsIconsArrowLeftSvg = __webpack_require__(69);
	
	var _assetsIconsArrowLeftSvg2 = _interopRequireDefault(_assetsIconsArrowLeftSvg);
	
	var _assetsIconsArrowRightSvg = __webpack_require__(70);
	
	var _assetsIconsArrowRightSvg2 = _interopRequireDefault(_assetsIconsArrowRightSvg);
	
	var ShelfEditMode = (function (_React$Component) {
	  function ShelfEditMode() {
	    var _this = this;
	
	    _classCallCheck(this, ShelfEditMode);
	
	    _get(Object.getPrototypeOf(ShelfEditMode.prototype), 'constructor', this).apply(this, arguments);
	
	    this.handleOpenEditor = function () {
	      _sdk.dispatcher.actions.EditorActions.openEditor({
	        component: 'ShelfEditor',
	        route: _this.props.route,
	        id: _this.props.id
	      });
	    };
	  }
	
	  _inherits(ShelfEditMode, _React$Component);
	
	  _createClass(ShelfEditMode, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'v-shelf-ed__placeholder row-fluid', onTouchTap: this.handleOpenEditor },
	        _react2['default'].createElement(
	          'h2',
	          { className: 'v-shelf__title' },
	          'Prateleira'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'row-fluid clearfix' },
	          _react2['default'].createElement(
	            'button',
	            { className: 'v-arrow col-xs-2 v-clean-btn' },
	            _react2['default'].createElement(_componentsUtilsSVGIcon2['default'], { className: 'v-arrow-icon--edit', svg: _assetsIconsArrowLeftSvg2['default'], width: 26, height: 88 })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'v-shelf__products col-xs-8' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'v-shelf__product col-xs-12' },
	              _react2['default'].createElement('img', { className: 'v-shelf__product-photo', src: 'assets/@vtex.storefront-theme/images/shelf-placeholder.png' }),
	              _react2['default'].createElement(
	                'p',
	                { className: 'v-shelf-ed__product-title' },
	                'Produto'
	              ),
	              _react2['default'].createElement(
	                'p',
	                { className: 'v-shelf-ed__product-price' },
	                'R$ 10.00'
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'v-btn--placeholder btn btn-block' },
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  'Adicionar ao carrinho'
	                )
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'v-arrow col-xs-2 v-clean-btn' },
	            _react2['default'].createElement(_componentsUtilsSVGIcon2['default'], { className: 'v-arrow-icon--edit', svg: _assetsIconsArrowRightSvg2['default'], width: 26, height: 88 })
	          )
	        )
	      );
	    }
	  }]);
	
	  return ShelfEditMode;
	})(_react2['default'].Component);
	
	exports['default'] = ShelfEditMode;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/danielfosco/git/storefront-theme/node_modules/css-loader/index.js!/Users/danielfosco/git/storefront-theme/node_modules/less-loader/index.js!/Users/danielfosco/git/storefront-theme/src/styles/components/shelf/ShelfEditMode.less", function() {
			var newContent = require("!!/Users/danielfosco/git/storefront-theme/node_modules/css-loader/index.js!/Users/danielfosco/git/storefront-theme/node_modules/less-loader/index.js!/Users/danielfosco/git/storefront-theme/src/styles/components/shelf/ShelfEditMode.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	exports.push([module.id, "/**\n*** @name:    sufixo da classe\n*** @i:       indice do sufixo\n*** ...       lista de 3 cores\n***\n*** Exemplo: .swatch(vtex; 1; @cor1; @cor2; @cor3);\n*** Resultado:\n*** &.swatch-vtex-1 { background-color: #111; }\n*** &.swatch-vtex-2 { background-color: #222; }\n*** &.swatch-vtex-3 { background-color: #333; }\n**/\n.v-uim {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n}\n.v-uim h1,\n.v-uim h2,\n.v-uim h3,\n.v-uim h4,\n.v-uim h5,\n.v-uim h6,\n.v-uim .lead {\n  font-family: \"Helvetica Neue\", \"Arial Narrow\", sans-serif;\n}\n.v-uim h1,\n.v-uim h2 {\n  font-weight: 300;\n}\n.v-uim h3,\n.v-uim h4 {\n  font-weight: 400;\n}\n.v-uim h5,\n.v-uim h6 {\n  font-weight: 800;\n}\n.v-uim h6 {\n  text-transform: uppercase;\n}\n.v-uim h4 small,\n.v-uim h5 small,\n.v-uim h6 small {\n  font-weight: 600;\n}\n.v-uim .btn {\n  font-family: \"Helvetica Neue\", \"Arial Narrow\", sans-serif;\n  font-weight: 700;\n  border-radius: 6px;\n  line-height: 1.4;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.v-uim .btn.btn-lg {\n  font-weight: 600;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.lead {\n  color: #5c6f7f;\n}\n.btn {\n  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.4);\n}\n.btn-default {\n  border-color: #c8ced6;\n  color: #5c6f7f;\n}\n.btn-default:hover {\n  background-color: #dbe1e5;\n}\n.btn-primary {\n  background-color: #0088cc;\n  border-color: #007ebd;\n  color: #cceeff;\n}\n.btn-success {\n  background-color: #17904a;\n  border-color: #158343;\n  color: #87ecb2;\n}\n.btn-warning {\n  background-color: #f4c22d;\n  border-color: #f3bb15;\n  color: #ffffff;\n}\n.btn-danger {\n  background-color: #e74c3c;\n  border-color: #e53f2e;\n  color: #fbdedb;\n}\n.v-clean-btn {\n  background-color: transparent;\n  border: none;\n}\n.v-no-outlines:active,\n.v-no-outlines:focus {\n  outline: none;\n}\n.v-arrow-icon {\n  fill: none;\n  stroke: #EDAF97;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-miterlimit: 10;\n}\n.v-arrow-icon[data-is-disabled=true] {\n  stroke: #eee;\n}\n.v-arrow-icon:active:not([data-is-disabled=true]) {\n  stroke-width: 4;\n  stroke: #e58e6c;\n}\n.v-shelf__title {\n  font-size: 27px;\n  font-style: italic;\n  font-weight: 400;\n  color: #153243;\n  text-align: center;\n}\n.v-shelf__products {\n  position: relative;\n  height: 235px;\n}\n.v-shelf__product {\n  position: absolute;\n  top: 30px;\n}\n.v-shelf__product-photo {\n  width: 167px;\n  height: 235px;\n}\n.v-shelf__product-title {\n  padding-top: 5px;\n  margin: 0;\n}\n.v-shelf__product-price {\n  font-size: 14px;\n  font-weight: 600;\n  color: #75CCB1;\n}\n.v-arrow {\n  position: relative;\n  padding-top: 110px;\n  padding-bottom: 170px;\n}\n.v-btn {\n  width: 167px;\n  height: 35px;\n  margin-bottom: 30px;\n  background-color: #75CCB1;\n  border: none;\n  border-radius: 9px;\n}\n.v-btn p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n}\n.v-arrow-icon--edit {\n  fill: none;\n  stroke: #EDAF97;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-miterlimit: 10;\n  stroke: #999999;\n}\n.v-arrow-icon--edit[data-is-disabled=true] {\n  stroke: #eee;\n}\n.v-arrow-icon--edit:active:not([data-is-disabled=true]) {\n  stroke-width: 4;\n  stroke: #e58e6c;\n}\n.v-shelf-ed__product-price {\n  font-size: 14px;\n  font-weight: 600;\n  color: #75CCB1;\n  color: #999999;\n}\n.v-shelf-ed__product-title {\n  padding-top: 5px;\n  margin: 0;\n  color: #999999;\n}\n.v-btn--placeholder {\n  width: 167px;\n  height: 35px;\n  margin-bottom: 30px;\n  background-color: #75CCB1;\n  border: none;\n  border-radius: 9px;\n  background-color: #666666;\n}\n.v-btn--placeholder p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n}\n", ""]);

/***/ }
/******/ ]);
//# sourceMappingURL=storefront-theme.js.map