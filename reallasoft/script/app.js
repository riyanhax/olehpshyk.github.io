!function(t){var s={};function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)o.d(t,s,function(e){return n[e]}.bind(null,s));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./src/js/app.js")}({"./src/js/app.js":function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! ./modules/handle-hamb */ "./src/js/modules/handle-hamb.js");\n\n__webpack_require__(/*! ./modules/handle-headroom */ "./src/js/modules/handle-headroom.js");\n\n__webpack_require__(/*! ./modules/handle-dragslider */ "./src/js/modules/handle-dragslider.js");\n\n__webpack_require__(/*! ./modules/handle-vacancy-opt */ "./src/js/modules/handle-vacancy-opt.js");\n\n__webpack_require__(/*! ./modules/handle-vacancy-fileinput */ "./src/js/modules/handle-vacancy-fileinput.js");\n\n__webpack_require__(/*! ./modules/handle-valuesslider */ "./src/js/modules/handle-valuesslider.js");\n\n__webpack_require__(/*! ./modules/handle-benefitsslider */ "./src/js/modules/handle-benefitsslider.js");\n\n__webpack_require__(/*! ./modules/handle-phoneNumber */ "./src/js/modules/handle-phoneNumber.js");\n\n//# sourceURL=webpack:///./src/js/app.js?')},"./src/js/modules/handle-benefitsslider.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  function benefitsSlickify() {\n    var benefitsSlider = $('.benefits-slider').slick({\n      vertical: true,\n      verticalSwiping: true,\n      arrows: false,\n      infinite: true,\n      draggable: false,\n      slidesToShow: 1,\n      centerMode: true,\n      cssEase: 'ease-in-out',\n      //dots: true,    \n      slidesToScroll: 1,\n      mobileFirst: true,\n      responsive: [{\n        breakpoint: 0,\n        settings: \"unslick\"\n      }, {\n        breakpoint: 767,\n        settings: {\n          dots: true,\n          centerPadding: \"8vh\" //60vh-slide + 20vh-top + 20vh-bottom\n        }\n      }, {\n        breakpoint: 1199,\n        settings: {\n          dots: true,\n          centerPadding: \"20vh\" //60vh-slide + 20vh-top + 20vh-bottom\n        }\n      }]\n    });\n    benefitsSlider && benefitsSlider.on('wheel', function (e) {\n      e.preventDefault();\n      if (e.originalEvent.deltaY > 0) {\n        $(this).slick('slickNext');\n      } else {\n        $(this).slick('slickPrev');\n      }\n    });\n  }\n  benefitsSlickify();\n  var benefitsSliderIsLive;\n  if (window.innerWidth >= 768) {\n    benefitsSliderIsLive = true;\n  } else {\n    benefitsSliderIsLive = false;\n  }\n  window.addEventListener(\"resize\", function () {\n    if (window.innerWidth < 768) {\n      benefitsSliderIsLive = false;\n    } else {\n      if (!benefitsSliderIsLive) {\n        benefitsSlickify();\n        benefitsSliderIsLive = true;\n      } else {\n        $('.benefits-slider').slick('refresh');\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-benefitsslider.js?")},"./src/js/modules/handle-dragslider.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.drag-slider').slick({\n    arrows: false,\n    infinite: true,\n    variableWidth: true,\n    dots: true,\n    //swipeToSlide: true,\n    cssEase: 'linear',\n\n    // slidesToScroll: 1,   \n    // autoplay: true, \n    // autoplaySpeed: 0,\n    // speed: 300,\n    // pauseOnHover: true, \n    // touchMove: true,\n    // centerMode: true,\n\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 767,\n      settings: {\n        //slidesToShow: 2,\n        dots: false\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-dragslider.js?")},"./src/js/modules/handle-hamb.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var hambButton = document.querySelector('.hamb-btn'),\n      xsNav = document.querySelector('.xs-nav'),\n      header = document.querySelector('.header');\n  var handleHambClick = function handleHambClick(e) {\n    hambButton.classList.toggle('open');\n    xsNav.classList.toggle('open');\n    header.classList.toggle('xs-nav-open');\n    // document.body.classList.toggle('overflow-hidden');\n  };\n  // const handleXsNavClick = (e)=> {    \n  //   if ( e.target.classList.contains('nav-link') || e.target.parentNode.classList.contains('nav-link') ) {\n  //     hambButton.classList.remove('open');\n  //     xsNav.classList.remove('open');\n  //     header.classList.remove('xs-nav-open');           \n  //   }\n  // }\n  hambButton && hambButton.addEventListener(\"click\", handleHambClick);\n  // xsNav&&xsNav.addEventListener(\"click\", handleXsNavClick);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-hamb.js?")},"./src/js/modules/handle-headroom.js":function(module,exports,__webpack_require__){"use strict";eval('\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  var myElement = document.querySelector("header");\n  var headroom;\n  function isXsNavOpen(el) {\n    return el.classList.contains(\'xs-nav-open\');\n  }\n  if (myElement) {\n    headroom = new Headroom(myElement, {\n      // vertical offset in px before element is first unpinned\n      //offset : 96,\n      // scroll tolerance in px before state changes\n      // tolerance : 0,\n      // or scroll tolerance per direction\n      tolerance: {\n        down: 0,\n        up: 10\n      },\n      // element which is source of scroll events. Defaults to window\n      //scroller : element,\n      // css classes to apply\n      classes: {\n        // when element is initialised\n        initial: "headroom",\n        // when scrolling up\n        pinned: "headroom--pinned",\n        // when scrolling down\n        unpinned: "headroom--unpinned",\n        // when above offset\n        top: "headroom--top",\n        // when below offset\n        notTop: "headroom--not-top",\n        // when at bottom of scoll area\n        bottom: "headroom--bottom",\n        // when not at bottom of scroll area\n        notBottom: "headroom--not-bottom"\n      }\n      // onUnpin: function() {\n      //   if ( (window.innerWidth < 1200) && isXsNavOpen(myElement) ) {\n      //     this.elem.classList.remove(this.classes.unpinned);\n      //     this.elem.classList.add(this.classes.pinned);\n      //   }\n      //   // else {\n      //   //   this.elem.classList.add(this.classes.unpinned);\n      //   //   this.elem.classList.remove(this.classes.pinned);\n      //   // }                       \n      // },\n      // // callback when pinned, `this` is headroom object\n      // onPin : function() {},\n      // // callback when unpinned, `this` is headroom object\n      // onUnpin : function() {},\n      // // callback when above offset, `this` is headroom object\n      // onTop : function() {},\n      // // callback when below offset, `this` is headroom object\n      // onNotTop : function() {}\n      // // callback at bottom of page, `this` is headroom object\n      // onBottom : function() {},\n      // // callback when moving away from bottom of page, `this` is headroom object\n      // onNotBottom : function() {}\n    });\n    headroom.init();\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-headroom.js?')},"./src/js/modules/handle-phoneNumber.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var phoneElement = document.getElementById('opt-phone');\n  if (phoneElement) {\n    var phoneMask = new IMask(phoneElement, {\n      mask: '+(00) (000) 000 00 00 [000000000000000000000000000000]',\n      lazy: false, // make placeholder always visible\n      placeholderChar: '_' // defaults to '_'\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-phoneNumber.js?")},"./src/js/modules/handle-vacancy-fileinput.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $(function () {\n    $('input[type=file]').not(\"#default\").fancyFileInput({\n      clearButtonText: \"Clear\"\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-vacancy-fileinput.js?")},"./src/js/modules/handle-vacancy-opt.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var jsOptBtn = document.querySelectorAll('.js-opt-soc-btn'),\n        jsOptInputs = document.querySelectorAll('.js-opt-input'),\n        jsOptCloseBtn = document.querySelectorAll('.js-close-opt-btn');\n\n    [].concat(_toConsumableArray(jsOptBtn)).map(function (btn) {\n        return btn.addEventListener(\"click\", function (e) {\n            var optInputName = this.getAttribute('data-opt'),\n                selectedOptContent = document.querySelector('.js-opt-input[data-opt=' + optInputName + ']');\n            this.classList.add('active');\n            selectedOptContent.classList.add('active');\n        });\n    });\n    [].concat(_toConsumableArray(jsOptCloseBtn)).map(function (btn) {\n        return btn.addEventListener(\"click\", function (e) {\n            var optInputCloseName = this.getAttribute('data-opt'),\n                selectedOptContent = document.querySelector('.js-opt-input[data-opt=' + optInputCloseName + ']'),\n                selectedOptBtn = document.querySelector('.js-opt-soc-btn[data-opt=' + optInputCloseName + ']');\n            selectedOptContent.classList.remove('active');\n            selectedOptBtn.classList.remove('active');\n        });\n    });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-vacancy-opt.js?")},"./src/js/modules/handle-valuesslider.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  function valuesSlickify() {\n    var valuesSlider = $('.values-slider').slick({\n      vertical: true,\n      verticalSwiping: true,\n      arrows: false,\n      infinite: true,\n      draggable: false,\n      slidesToShow: 1,\n      centerMode: true,\n      cssEase: 'ease-in-out',\n      //dots: true,    \n      slidesToScroll: 1,\n      mobileFirst: true,\n      responsive: [{\n        breakpoint: 0,\n        settings: \"unslick\"\n      }, {\n        breakpoint: 767,\n        settings: {\n          dots: true,\n          centerPadding: \"8vh\" //60vh-slide + 20vh-top + 20vh-bottom\n        }\n      }, {\n        breakpoint: 1199,\n        settings: {\n          dots: true,\n          centerPadding: \"20vh\" //60vh-slide + 20vh-top + 20vh-bottom\n        }\n      }]\n    });\n    valuesSlider && valuesSlider.on('wheel', function (e) {\n      e.preventDefault();\n      if (e.originalEvent.deltaY > 0) {\n        $(this).slick('slickNext');\n      } else {\n        $(this).slick('slickPrev');\n      }\n    });\n  }\n  valuesSlickify();\n  var valuesSliderIsLive;\n  if (window.innerWidth >= 768) {\n    valuesSliderIsLive = true;\n  } else {\n    valuesSliderIsLive = false;\n  }\n  window.addEventListener(\"resize\", function () {\n    if (window.innerWidth < 768) {\n      valuesSliderIsLive = false;\n    } else {\n      if (!valuesSliderIsLive) {\n        valuesSlickify();\n        valuesSliderIsLive = true;\n      } else {\n        $('.values-slider').slick('refresh');\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-valuesslider.js?")}});