"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("opt-phone");if(t)new IMask(t,{mask:"+(00) (000) 000 00 00 [000000000000000000000000000000]",lazy:!1,placeholderChar:"_"})}),document.addEventListener("DOMContentLoaded",function(){$(function(){$("input[type=file]").not("#default").fancyFileInput({clearButtonText:"Clear"})})}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-opt-soc-btn"),e=(document.querySelectorAll(".js-opt-input"),document.querySelectorAll(".js-close-opt-btn"));[].concat(_toConsumableArray(t)).map(function(t){return t.addEventListener("click",function(t){var e=this.getAttribute("data-opt"),n=document.querySelector(".js-opt-input[data-opt="+e+"]");this.classList.add("active"),n.classList.add("active")})}),[].concat(_toConsumableArray(e)).map(function(t){return t.addEventListener("click",function(t){var e=this.getAttribute("data-opt"),n=document.querySelector(".js-opt-input[data-opt="+e+"]"),o=document.querySelector(".js-opt-soc-btn[data-opt="+e+"]");n.classList.remove("active"),o.classList.remove("active")})})});