"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Board.js":
/*!*****************************!*\
  !*** ./components/Board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const numRows = 7;\n    const numCols = 5;\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex);\n        }\n    };\n    const handleColorChange = (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            newGrid[selectedCell] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n            children: grid.map((cellColor, index)=>{\n                const { x, y } = getIndexCoordinates(index);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>toggleCellColor(index),\n                    className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 1 ? \"bg-black\" : cellColor === 2 ? \"bg-green-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                    children: [\n                        selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                    onClick: ()=>handleColorChange(1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-green-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(3)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-white cursor-pointer\",\n                                    onClick: ()=>handleColorChange(0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                            children: \"(\".concat(x, \",\").concat(y, \")\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 82,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"HCaCe4ECqyplXfL6Qswm677YhA0=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ21CO0FBRTNELE1BQU1JLFFBQVE7O0lBRVosTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsU0FBU0MsVUFBVSxFQUFFLEdBQUdOLHlEQUFVQTtJQUVsRSxNQUFNSyxVQUFVRSxTQUFTRDtJQUV6QixNQUFNRSxnQkFBZ0JILFdBQVdJLG9CQUFvQkEsaUJBQWlCLENBQUNKLFFBQVEsQ0FBQyxFQUFFLEdBQUc7SUFFckYsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDYSxNQUFNLElBQUlDLElBQUksQ0FBQztJQUNoRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFakQsTUFBTWlCLFVBQVU7SUFDaEIsTUFBTUMsVUFBVTtJQUVoQixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUwsaUJBQWlCSyxXQUFXO1lBQzlCSixnQkFBZ0I7UUFDbEIsT0FBTztZQUNMQSxnQkFBZ0JJO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsSUFBSVAsaUJBQWlCLE1BQU07WUFDekIsTUFBTVEsVUFBVTttQkFBSVo7YUFBSztZQUN6QlksT0FBTyxDQUFDUixhQUFhLEdBQUdPO1lBQ3hCVixRQUFRVztZQUNSUCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHdEQUF3RDtJQUN4RCxNQUFNUSxzQkFBc0IsQ0FBQ0M7UUFDM0IsTUFBTUMsSUFBSSxRQUFTUixVQUFXO1FBQzlCLE1BQU1TLElBQUlDLEtBQUtDLEtBQUssQ0FBQ0osUUFBUVAsV0FBVztRQUN4QyxPQUFPO1lBQUVRO1lBQUdDO1FBQUU7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWnBCLEtBQUtxQixHQUFHLENBQUMsQ0FBQ0MsV0FBV1I7Z0JBQ3BCLE1BQU0sRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUUsR0FBR0gsb0JBQW9CQztnQkFDckMscUJBQ0UsOERBQUNLO29CQUVDSSxTQUFTLElBQU1mLGdCQUFnQk07b0JBQy9CTSxXQUFXLDhDQVFWLE9BUENFLGNBQWMsSUFDVixhQUNBQSxjQUFjLElBQ2QsaUJBQ0FBLGNBQWMsSUFDZCxlQUNBLFlBQ0w7O3dCQUVBbEIsaUJBQWlCVSx1QkFDaEIsOERBQUNLOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQ0NDLFdBQVU7b0NBQ1ZHLFNBQVMsSUFBTWIsa0JBQWtCOzs7Ozs7OENBRW5DLDhEQUFDUztvQ0FDQ0MsV0FBVTtvQ0FDVkcsU0FBUyxJQUFNYixrQkFBa0I7Ozs7Ozs4Q0FFbkMsOERBQUNTO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU1iLGtCQUFrQjs7Ozs7OzhDQUVuQyw4REFBQ1M7b0NBQ0NDLFdBQVU7b0NBQ1ZHLFNBQVMsSUFBTWIsa0JBQWtCOzs7Ozs7Ozs7Ozs7c0NBS3ZDLDhEQUFDUzs0QkFBSUMsV0FBVTtzQ0FDWixJQUFTSixPQUFMRCxHQUFFLEtBQUssT0FBRkMsR0FBRTs7Ozs7OzttQkFsQ1RGOzs7OztZQXNDWDs7Ozs7Ozs7Ozs7QUFJUjtHQXZGTXRCOztRQUVvREYscURBQVVBOzs7S0FGOURFO0FBeUZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9hcmQuanM/ZDNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTW9yYWxpcywgdXNlV2ViM0NvbnRyYWN0IH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgTW9yYWxpcywgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZDogY2hhaW5JZEhleCB9ID0gdXNlTW9yYWxpcygpXHJcblxyXG4gIGNvbnN0IGNoYWluSWQgPSBwYXJzZUludChjaGFpbklkSGV4KVxyXG4gIFxyXG4gIGNvbnN0IHJhZmZsZUFkZHJlc3MgPSBjaGFpbklkIGluIGNvbnRyYWN0QWRkcmVzc2VzID8gY29udHJhY3RBZGRyZXNzZXNbY2hhaW5JZF1bMF0gOiBudWxsXHJcblxyXG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKEFycmF5KDM1KS5maWxsKDApKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDZWxsLCBzZXRTZWxlY3RlZENlbGxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IG51bVJvd3MgPSA3O1xyXG4gIGNvbnN0IG51bUNvbHMgPSA1O1xyXG5cclxuICBjb25zdCB0b2dnbGVDZWxsQ29sb3IgPSAoY2VsbEluZGV4KSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRDZWxsID09PSBjZWxsSW5kZXgpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKGNlbGxJbmRleCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoY29sb3IpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV3R3JpZCA9IFsuLi5ncmlkXTtcclxuICAgICAgbmV3R3JpZFtzZWxlY3RlZENlbGxdID0gY29sb3I7XHJcbiAgICAgIHNldEdyaWQobmV3R3JpZCk7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2VsbChudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBjb252ZXJ0IDFEIGluZGV4IHRvIDJEICh4LCB5KSBjb29yZGluYXRlc1xyXG4gIGNvbnN0IGdldEluZGV4Q29vcmRpbmF0ZXMgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHggPSAoaW5kZXggJSBudW1Db2xzKSArIDE7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIG51bUNvbHMpICsgMTtcclxuICAgIHJldHVybiB7IHgsIHkgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBncmlkLXJvd3MtNyBnYXAtMCB3LTMvNFwiPlxyXG4gICAgICAgIHtncmlkLm1hcCgoY2VsbENvbG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRJbmRleENvb3JkaW5hdGVzKGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNlbGxDb2xvcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICBjZWxsQ29sb3IgPT09IDFcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgOiBjZWxsQ29sb3IgPT09IDJcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogY2VsbENvbG9yID09PSAzXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlXCJcclxuICAgICAgICAgICAgICB9IHJlbGF0aXZlYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZENlbGwgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctMTYgbXQtMTAgei0xMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctYmxhY2sgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDEpfSAvLyBCbGFja1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLWdyZWVuLTUwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMil9IC8vIEdyZWVuXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctcmVkLTUwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMyl9IC8vIFJlZFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLXdoaXRlIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgwKX0gLy8gV2hpdGVcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgey8qIERpc3BsYXkgdGhlIHgsIHkgY29vcmRpbmF0ZXMgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHRleHQteHMgdGV4dC1ncmF5LTUwMCBwLTFcIj5cclxuICAgICAgICAgICAgICAgIHtgKCR7eH0sJHt5fSlgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU1vcmFsaXMiLCJ1c2VXZWIzQ29udHJhY3QiLCJCb2FyZCIsIk1vcmFsaXMiLCJpc1dlYjNFbmFibGVkIiwiY2hhaW5JZCIsImNoYWluSWRIZXgiLCJwYXJzZUludCIsInJhZmZsZUFkZHJlc3MiLCJjb250cmFjdEFkZHJlc3NlcyIsImdyaWQiLCJzZXRHcmlkIiwiQXJyYXkiLCJmaWxsIiwic2VsZWN0ZWRDZWxsIiwic2V0U2VsZWN0ZWRDZWxsIiwibnVtUm93cyIsIm51bUNvbHMiLCJ0b2dnbGVDZWxsQ29sb3IiLCJjZWxsSW5kZXgiLCJoYW5kbGVDb2xvckNoYW5nZSIsImNvbG9yIiwibmV3R3JpZCIsImdldEluZGV4Q29vcmRpbmF0ZXMiLCJpbmRleCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2VsbENvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});