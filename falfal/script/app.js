/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/handle-submit-news */ \"./src/js/modules/handle-submit-news.js\");\n\n__webpack_require__(/*! ./modules/handle-dropdown */ \"./src/js/modules/handle-dropdown.js\");\n\n__webpack_require__(/*! ./modules/handle-hamb */ \"./src/js/modules/handle-hamb.js\");\n\n__webpack_require__(/*! ./modules/handle-mslider */ \"./src/js/modules/handle-mslider.js\");\n\n__webpack_require__(/*! ./modules/handle-modal */ \"./src/js/modules/handle-modal.js\");\n\n__webpack_require__(/*! ./modules/handle-login-form */ \"./src/js/modules/handle-login-form.js\");\n\n__webpack_require__(/*! ./modules/handle-sign-up-form */ \"./src/js/modules/handle-sign-up-form.js\");\n\n__webpack_require__(/*! ./modules/handle-datepicker.js */ \"./src/js/modules/handle-datepicker.js\");\n\n__webpack_require__(/*! ./modules/handle-sign-slider */ \"./src/js/modules/handle-sign-slider.js\");\n\n__webpack_require__(/*! ./modules/handle-submit-password */ \"./src/js/modules/handle-submit-password.js\");\n\n__webpack_require__(/*! ./modules/handle-collapsible */ \"./src/js/modules/handle-collapsible.js\");\n\n__webpack_require__(/*! ./modules/handle-rating */ \"./src/js/modules/handle-rating.js\");\n\n__webpack_require__(/*! ./modules/handle-replay-form */ \"./src/js/modules/handle-replay-form.js\");\n\n__webpack_require__(/*! ./modules/handle-tabs */ \"./src/js/modules/handle-tabs.js\");\n\n__webpack_require__(/*! ./modules/handle-selects */ \"./src/js/modules/handle-selects.js\");\n\n__webpack_require__(/*! ./modules/handle-submit-account-info */ \"./src/js/modules/handle-submit-account-info.js\");\n\n__webpack_require__(/*! ./modules/handle-purchases-list */ \"./src/js/modules/handle-purchases-list.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-collapsible.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-collapsible.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  // var coll = document.getElementsByClassName(\"collapsible-btn\");\n  // let i;\n  // for (i = 0; i < coll.length; i++) {\n  //   coll[i].addEventListener(\"click\", function() {\n  //     this.parentNode.classList.toggle(\"iscollapsed\");\n  //     let content = this.nextElementSibling;\n  //     if (content.style.display === \"block\") {\n  //       content.style.display = \"none\";\n  //     } else {\n  //       content.style.display = \"block\";\n  //     }\n  //   });\n  // }\n\n  //ES6\n  var coll = document.getElementsByClassName(\"collapsible-btn\");\n  [].concat(_toConsumableArray(coll)).map(function (item) {\n    return item.addEventListener(\"click\", function () {\n      this.parentNode.classList.toggle(\"iscollapsed\");\n      var content = this.nextElementSibling;\n      if (content.style.display === \"block\") {\n        content.style.display = \"none\";\n      } else {\n        content.style.display = \"block\";\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-collapsible.js?");

/***/ }),

/***/ "./src/js/modules/handle-datepicker.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-datepicker.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  flatpickr(\".flatpickr\", {\n    \"locale\": \"tr\", // locale for this instance only\n    wrap: true\n    //defaultDate=\"\",\n    //onChange: function(selectedDates, dateStr, instance) {},\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-datepicker.js?");

/***/ }),

/***/ "./src/js/modules/handle-dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-dropdown.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var dropbtn = document.getElementsByClassName(\"js-dropbtn\");\n  var dropdowns = document.getElementsByClassName(\"js-dropdown\");\n\n  for (var dropbtni = 0; dropbtni < dropbtn.length; dropbtni++) {\n    dropbtn[dropbtni].addEventListener(\"click\", dropdownOpen);\n  }\n  function dropdownOpen(e) {\n    var target = e.target;\n    e.preventDefault();\n    e.stopPropagation();\n    while (!target.classList.contains('js-dropdown')) {\n      target = target.parentNode;\n    }\n    if (target.classList.contains(\"active-dropdown\")) {\n      target.classList.remove(\"active-dropdown\");\n    } else {\n      closeAllDropdown();\n      target.classList.add(\"active-dropdown\");\n    }\n  }\n  function closeAllDropdown() {\n    for (var dropi = 0; dropi < dropdowns.length; dropi++) {\n      if (dropdowns[dropi].classList.contains('active-dropdown')) {\n        dropdowns[dropi].classList.remove('active-dropdown');\n      }\n    }\n  }\n  // Close the dropdown menu if the user clicks outside of it\n  document.addEventListener(\"click\", closeAllDropdown);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-dropdown.js?");

/***/ }),

/***/ "./src/js/modules/handle-hamb.js":
/*!***************************************!*\
  !*** ./src/js/modules/handle-hamb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var hambButton = document.querySelector('.hamb-btn'),\n      xsNav = document.querySelector('.xs-nav');\n  var handleHambClick = function handleHambClick(e) {\n    hambButton.classList.toggle('open');\n    xsNav.classList.toggle('open');\n  };\n  var handleXsNavClick = function handleXsNavClick(e) {\n    if (e.target.classList.contains('nav-link') || e.target.parentNode.classList.contains('nav-link') || e.target.classList.contains('account-btn-login') || e.target.parentNode.classList.contains('account-btn-login') || e.target.classList.contains('account-btn-logined') || e.target.parentNode.classList.contains('account-btn-logined')) {\n      hambButton.classList.remove('open');\n      xsNav.classList.remove('open');\n    }\n  };\n  hambButton && hambButton.addEventListener(\"click\", handleHambClick);\n  xsNav && xsNav.addEventListener(\"click\", handleXsNavClick);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-hamb.js?");

/***/ }),

/***/ "./src/js/modules/handle-login-form.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-login-form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var loginForm = document.getElementById(\"login-form\"),\n      loginFormMessage = document.getElementById(\"login-form-message\");\n  loginForm && loginForm.addEventListener(\"submit\", checkLoginForm);\n  function checkLoginForm(e) {\n    e.preventDefault();\n    submitLoginForm(e);\n    return false;\n  }\n  function submitLoginForm(e) {\n    var loginemail = encodeURIComponent(document.getElementById('loginemail').value);\n    var loginpassword = encodeURIComponent(document.getElementById('loginpassword').value);\n\n    var loginparameters = 'loginemail=' + loginemail + '&loginpassword=' + loginpassword;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        loginForm.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(loginForm.method, loginForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(loginparameters);\n    xhr.send(loginparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-login-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-modal.js":
/*!****************************************!*\
  !*** ./src/js/modules/handle-modal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var presentmodals = document.getElementsByClassName(\"modal\");\n  if (presentmodals.length > 0) {\n    var vanillaModal = new VanillaModal.default({\n      modal: '.modal',\n      modalInner: '.modal-inner',\n      modalContent: '.modal-content',\n      open: '[data-modal-open]',\n      close: '[data-modal-close]',\n      page: 'body',\n      loadClass: 'vanilla-modal',\n      class: 'modal-visible',\n      clickOutside: true,\n      closeKeys: [27],\n      transitions: true,\n      onBeforeOpen: null,\n      onBeforeClose: null\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-modal.js?");

/***/ }),

/***/ "./src/js/modules/handle-mslider.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-mslider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.mslider').slick({\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    //fade: true, \n    dots: true\n    // mobileFirst: true,   \n    // responsive: [\n    //   {\n    //     breakpoint: 767,\n    //     settings: {        \n    //       dots: true\n    //     }\n    //   }\n    // ]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-mslider.js?");

/***/ }),

/***/ "./src/js/modules/handle-purchases-list.js":
/*!*************************************************!*\
  !*** ./src/js/modules/handle-purchases-list.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var purchasesList = new List('purchases-list', {\n    valueNames: ['purchase-item'],\n    page: 4,\n    pagination: {\n      name: \"purchases-pagination\",\n      paginationClass: \"purchases-pagination\",\n      innerWindow: 1,\n      outerWindow: 1\n      // left: 1,\n      // right: 1,\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-purchases-list.js?");

/***/ }),

/***/ "./src/js/modules/handle-rating.js":
/*!*****************************************!*\
  !*** ./src/js/modules/handle-rating.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $(\"#reply-rating\").starRating({\n    starSize: 29,\n    starShape: 'rounded',\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#e8bbc5\",\n    hoverColor: \"#6d1028\",\n    activeColor: \"#6d1028\",\n    ratedColor: \"#6d1028\",\n    useGradient: false,\n    disableAfterRate: false,\n    //readOnly: true,\n    //initialRating: 0,\n    callback: function callback(currentRating, $el) {\n      $(\"#reply-rating\").attr('data-rating', currentRating);\n      // console.log(currentRating);\n      //or vanilla JS\n      //document.getElementById(\"reply-rating\").setAttribute('data-rating', currentRating);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-rating.js?");

/***/ }),

/***/ "./src/js/modules/handle-replay-form.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-replay-form.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var replyForm = document.getElementById(\"replay-form\"),\n      replyFormMessage = document.getElementById(\"reply-form-message\");\n  replyForm && replyForm.addEventListener(\"submit\", checkReplyForm);\n  function checkReplyForm(e) {\n    e.preventDefault();\n    submitReplyForm(e);\n    return false;\n  }\n  function submitReplyForm(e) {\n    var replyrating = encodeURIComponent(document.getElementById('reply-rating').dataset.rating);\n    var replytextarea = encodeURIComponent(document.getElementById('reply-textarea').value);\n\n    var replyparameters = 'replyrating=' + replyrating + '&replytextarea=' + replytextarea;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        replyForm.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(replyForm.method, replyForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(replyparameters);\n    xhr.send(replyparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-replay-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-selects.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-selects.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    $('select').each(function () {\n        var $this = $(this),\n            numberOfOptions = $(this).children('option').length;\n\n        $this.addClass('select-hidden');\n        $this.wrap('<div class=\"select\"></div>');\n        $this.after('<div class=\"select-styled\"></div>');\n\n        var $styledSelect = $this.next('div.select-styled');\n        $styledSelect.text($this.children('option').eq(0).text());\n\n        var $list = $('<ul />', {\n            'class': 'select-options'\n        }).insertAfter($styledSelect);\n\n        for (var i = 0; i < numberOfOptions; i++) {\n            $('<li />', {\n                text: $this.children('option').eq(i).text(),\n                rel: $this.children('option').eq(i).val()\n            }).appendTo($list);\n        }\n\n        var $listItems = $list.children('li');\n\n        $styledSelect.click(function (e) {\n            e.stopPropagation();\n            $('div.select-styled.active').not(this).each(function () {\n                $(this).removeClass('active').next('ul.select-options').hide();\n            });\n            $(this).toggleClass('active').next('ul.select-options').toggle();\n        });\n\n        $listItems.click(function (e) {\n            e.stopPropagation();\n            $styledSelect.text($(this).text()).removeClass('active').addClass('hasValue');\n            $this.val($(this).attr('rel'));\n            $list.hide();\n            //console.log($this.val());\n        });\n\n        $(document).click(function () {\n            $styledSelect.removeClass('active');\n            $list.hide();\n        });\n    });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-selects.js?");

/***/ }),

/***/ "./src/js/modules/handle-sign-slider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-sign-slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.sign-slider').slick({\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    dots: false,\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 1199,\n      settings: {\n        slidesToShow: 3\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sign-slider.js?");

/***/ }),

/***/ "./src/js/modules/handle-sign-up-form.js":
/*!***********************************************!*\
  !*** ./src/js/modules/handle-sign-up-form.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var signupForm = document.getElementById(\"sign-up-form\"),\n      signUpFormMessage = document.getElementById(\"sign-up-form-message\");\n  signupForm && signupForm.addEventListener(\"submit\", checkSignupForm);\n  function checkSignupForm(e) {\n    e.preventDefault();\n    submitSignupForm(e);\n    return false;\n  }\n  function submitSignupForm(e) {\n    var signupname = encodeURIComponent(document.getElementById('signupname').value);\n    var signupemail = encodeURIComponent(document.getElementById('signupemail').value);\n    var signuppassword = encodeURIComponent(document.getElementById('signuppassword').value);\n\n    var signupparameters = 'signupname=' + signupname + '&signupemail=' + signupemail + '&signuppassword=' + signuppassword;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     signupForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(signupForm.method, signupForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(signupparameters);\n    xhr.send(signupparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sign-up-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-account-info.js":
/*!******************************************************!*\
  !*** ./src/js/modules/handle-submit-account-info.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var accountForm = document.getElementById(\"account-form\"),\n      accountFormMessage = document.getElementById(\"account-form-message\");\n\n  accountForm && accountForm.addEventListener(\"submit\", checkAccountForm);\n\n  function checkAccountForm(e) {\n    e.preventDefault();\n    checkingAccountForm() ? goodAccountForm(e) : badAccountForm(e);\n    return false;\n  }\n  function checkingAccountForm() {\n    return true;\n  }\n  function goodAccountForm(e) {\n    submitAccountForm(e);\n  }\n  function badAccountForm(e) {}\n  function submitAccountForm(e) {\n    var accountname = encodeURIComponent(document.getElementById('account-name').value);\n    var accountemail = encodeURIComponent(document.getElementById('account-email').value);\n    var accountpassword = encodeURIComponent(document.getElementById('account-password').value);\n    var accountphone = encodeURIComponent(document.getElementById('account-phone').value);\n    var accountgender = encodeURIComponent(document.getElementById('account-gender').value);\n    var accountdatabirth = encodeURIComponent(document.getElementById('account-data-birth').value);\n    var accountmonthbirth = encodeURIComponent(document.getElementById('account-month-birth').value);\n    var accountyearbirth = encodeURIComponent(document.getElementById('account-year-birth').value);\n\n    var accountparameters = \"accountname=\" + accountname + \"&accountemail=\" + accountemail + \"&accountpassword=\" + accountpassword + \"&accountphone=\" + accountphone + \"&accountgender=\" + accountgender + \"&accountdatabirth=\" + accountdatabirth + \"&accountmonthbirth=\" + accountmonthbirth + \"&accountyearbirth=\" + accountyearbirth;\n\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     accountForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(accountForm.method, accountForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(accountparameters);\n    xhr.send(accountparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-account-info.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-news.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-submit-news.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var newsForm = document.getElementById(\"news-form\"),\n      newsFormMessage = document.getElementById(\"news-form-message\"); //not used        \n  newsForm && newsForm.addEventListener(\"submit\", checkNewsForm);\n  function checkNewsForm(e) {\n    e.preventDefault();\n    submitNewsForm(e);\n    return false;\n  }\n  function submitNewsForm(e) {\n    var email = encodeURIComponent(document.getElementById('news-email').value);\n    var newsparameters = 'email=' + email;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     newsForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(newsForm.method, newsForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(newsparameters);\n    xhr.send(newsparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-news.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-password.js":
/*!**************************************************!*\
  !*** ./src/js/modules/handle-submit-password.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var passwordForm = document.getElementById(\"password-form\"),\n      passwordFormMessage = document.getElementById(\"password-form-message\");\n\n  passwordForm && passwordForm.addEventListener(\"submit\", checkPasswordForm);\n\n  function checkPasswordForm(e) {\n    e.preventDefault();\n    checkPassword() ? goodPassword(e) : badPassword(e);\n    return false;\n  }\n  function checkPassword() {\n    if (document.getElementById('password').value === document.getElementById('confirm-password').value) {\n      passwordFormMessage.innerHTML = \"\";\n      return true;\n    } else {\n      passwordFormMessage.innerHTML = \"No match. Please try again.\";\n      return false;\n    }\n  }\n  function goodPassword(e) {\n    submitPasswordForm(e);\n  }\n  function badPassword(e) {}\n  function submitPasswordForm(e) {\n    var password = encodeURIComponent(document.getElementById('password').value);\n    var passwordparameters = 'password=' + password;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     passwordForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(passwordForm.method, passwordForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(passwordparameters);\n    xhr.send(passwordparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-password.js?");

/***/ }),

/***/ "./src/js/modules/handle-tabs.js":
/*!***************************************!*\
  !*** ./src/js/modules/handle-tabs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  function tabs(container) {\n    var tabs = container.querySelectorAll('.tab');\n    var panes = container.querySelectorAll('.tab-pane');\n\n    each(tabs, function (i, tab) {\n      tab.addEventListener('click', function (e) {\n        activate(tabs, i);\n        activate(panes, i);\n      });\n    });\n\n    function activate(tabs, index) {\n      each(tabs, function (i, tab) {\n        if (i != index) {\n          removeClass(tab, 'active');\n        } else {\n          addClass(tab, 'active');\n        }\n      });\n    }\n  }\n  function each(elements, fn) {\n    for (var i = elements.length - 1; i >= 0; i--) {\n      fn(i, elements[i]);\n    }\n  }\n  function hasClass(el, cls) {\n    return el.className.match(new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)'));\n  }\n  function addClass(el, cls) {\n    if (!hasClass(el, cls)) {\n      el.className += \" \" + cls;\n    }\n  }\n  function removeClass(el, cls) {\n    if (hasClass(el, cls)) {\n      var reg = new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)');\n      el.className = el.className.replace(reg, '');\n    }\n  }\n\n  var tabContainer = document.querySelector('.js-tab-container');\n  //console.log(tabContainer);\n  tabContainer && tabs(tabContainer);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-tabs.js?");

/***/ })

/******/ });