/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chart/[iso]",{

/***/ "./utils/formatting.ts":
/*!*****************************!*\
  !*** ./utils/formatting.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatDate\": function() { return /* binding */ formatDate; },\n/* harmony export */   \"formatMonth\": function() { return /* binding */ formatMonth; },\n/* harmony export */   \"formatLargeNum\": function() { return /* binding */ formatLargeNum; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar formatDate = function formatDate(dateInput) {\n  var date = new Date(dateInput);\n  var year = new Intl.DateTimeFormat(\"en\", {\n    year: \"numeric\"\n  }).format(date);\n  var month = new Intl.DateTimeFormat(\"en\", {\n    month: \"short\"\n  }).format(date);\n  var day = new Intl.DateTimeFormat(\"en\", {\n    day: \"2-digit\"\n  }).format(date);\n  return \"\".concat(month, \" \").concat(day, \", \").concat(year);\n};\nvar formatMonth = function formatMonth(dateInput) {\n  var date = new Date(dateInput);\n  var year = new Intl.DateTimeFormat(\"en\", {\n    year: \"2-digit\"\n  }).format(date);\n  var month = new Intl.DateTimeFormat(\"en\", {\n    month: \"long\"\n  }).format(date);\n  return \"\".concat(month, \" \").concat(year);\n};\nvar formatLargeNum = function formatLargeNum(num) {\n  return num === undefined ? \"-\" : new Intl.NumberFormat().format(num);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZm9ybWF0dGluZy50cz80ZWFhIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJkYXRlSW5wdXQiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJtb250aCIsImRheSIsImZvcm1hdE1vbnRoIiwiZm9ybWF0TGFyZ2VOdW0iLCJudW0iLCJ1bmRlZmluZWQiLCJOdW1iZXJGb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQXVCO0FBQy9DLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNGLFNBQVQsQ0FBYjtBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEI7QUFBRUYsUUFBSSxFQUFFO0FBQVIsR0FBOUIsRUFBbURHLE1BQW5ELENBQTBETCxJQUExRCxDQUFiO0FBQ0EsTUFBTU0sS0FBSyxHQUFHLElBQUlILElBQUksQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixFQUE4QjtBQUFFRSxTQUFLLEVBQUU7QUFBVCxHQUE5QixFQUFrREQsTUFBbEQsQ0FBeURMLElBQXpELENBQWQ7QUFDQSxNQUFNTyxHQUFHLEdBQUcsSUFBSUosSUFBSSxDQUFDQyxjQUFULENBQXdCLElBQXhCLEVBQThCO0FBQUVHLE9BQUcsRUFBRTtBQUFQLEdBQTlCLEVBQWtERixNQUFsRCxDQUF5REwsSUFBekQsQ0FBWjtBQUVBLG1CQUFVTSxLQUFWLGNBQW1CQyxHQUFuQixlQUEyQkwsSUFBM0I7QUFDRCxDQVBNO0FBU0EsSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1QsU0FBRCxFQUF1QjtBQUNoRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixTQUFULENBQWI7QUFDQSxNQUFNRyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCLElBQXhCLEVBQThCO0FBQUVGLFFBQUksRUFBRTtBQUFSLEdBQTlCLEVBQW1ERyxNQUFuRCxDQUEwREwsSUFBMUQsQ0FBYjtBQUNBLE1BQU1NLEtBQUssR0FBRyxJQUFJSCxJQUFJLENBQUNDLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEI7QUFBRUUsU0FBSyxFQUFFO0FBQVQsR0FBOUIsRUFBaURELE1BQWpELENBQXdETCxJQUF4RCxDQUFkO0FBRUEsbUJBQVVNLEtBQVYsY0FBbUJKLElBQW5CO0FBQ0QsQ0FOTTtBQVFBLElBQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsR0FBRDtBQUFBLFNBQzVCQSxHQUFHLEtBQUtDLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEIsSUFBSVIsSUFBSSxDQUFDUyxZQUFULEdBQXdCUCxNQUF4QixDQUErQkssR0FBL0IsQ0FERTtBQUFBLENBQXZCIiwiZmlsZSI6Ii4vdXRpbHMvZm9ybWF0dGluZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGVJbnB1dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlSW5wdXQpO1xuICBjb25zdCB5ZWFyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IHllYXI6IFwibnVtZXJpY1wiIH0pLmZvcm1hdChkYXRlKTtcbiAgY29uc3QgbW9udGggPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KS5mb3JtYXQoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwgeyBkYXk6IFwiMi1kaWdpdFwiIH0pLmZvcm1hdChkYXRlKTtcblxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TW9udGggPSAoZGF0ZUlucHV0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbnB1dCk7XG4gIGNvbnN0IHllYXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHsgeWVhcjogXCIyLWRpZ2l0XCIgfSkuZm9ybWF0KGRhdGUpO1xuICBjb25zdCBtb250aCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwgeyBtb250aDogXCJsb25nXCIgfSkuZm9ybWF0KGRhdGUpO1xuXG4gIHJldHVybiBgJHttb250aH0gJHt5ZWFyfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TGFyZ2VOdW0gPSAobnVtOiBudW1iZXIpID0+XG4gIG51bSA9PT0gdW5kZWZpbmVkID8gXCItXCIgOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQobnVtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/formatting.ts\n");

/***/ })

});