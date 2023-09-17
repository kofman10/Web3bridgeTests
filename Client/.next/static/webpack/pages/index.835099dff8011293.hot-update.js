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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const gameAddress = chainId in _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress ? _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress[chainId][0] : null;\n    const { runContractFunction: setColor, isLoading, isFetching } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_2__.abi,\n        contractAddress: gameAddress,\n        functionName: \"serColor\",\n        params: {\n            x: 0,\n            y: 0\n        }\n    });\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const numRows = 7;\n    const numCols = 5;\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex);\n        }\n    };\n    const handleColorChange = (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            newGrid[selectedCell] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n            children: grid.map((cellColor, index)=>{\n                const { x, y } = getIndexCoordinates(index);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>toggleCellColor(index),\n                    className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 2 ? \"bg-black\" : cellColor === 4 ? \"bg-yellow-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                    children: [\n                        selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                    onClick: ()=>handleColorChange(2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-yellow-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(4)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(3)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-white border cursor-pointer\",\n                                    onClick: ()=>handleColorChange(1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                            children: \"(\".concat(x, \",\").concat(y, \")\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 96,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"b/JV0WnYi6XSFuJ3EKi1BCQb7fw=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDVztBQUNRO0FBQ2Y7QUFHNUMsTUFBTU8sUUFBUTs7SUFFWixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxTQUFTQyxVQUFVLEVBQUUsR0FBR1AseURBQVVBO0lBRWxFLE1BQU1NLFVBQVVFLFNBQVNEO0lBRXpCLE1BQU1FLGNBQWNILFdBQVdSLHVEQUFlQSxHQUFHQSx1REFBZSxDQUFDUSxRQUFRLENBQUMsRUFBRSxHQUFHO0lBRS9FLE1BQU0sRUFDSkkscUJBQXFCQyxRQUFRLEVBQzdCQyxTQUFTLEVBQ1RDLFVBQVUsRUFDWCxHQUFHWiw4REFBZUEsQ0FBQztRQUNsQkYsS0FBS0EsMkNBQUdBO1FBQ1JELGlCQUFpQlc7UUFDakJLLGNBQWM7UUFDZEMsUUFBUTtZQUFDQyxHQUFHO1lBQUdDLEdBQUc7UUFBQztJQUNyQjtJQUVBLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHdEIsK0NBQVFBLENBQUN1QixNQUFNLElBQUlDLElBQUksQ0FBQztJQUNoRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHMUIsK0NBQVFBLENBQUM7SUFFakQsTUFBTTJCLFVBQVU7SUFDaEIsTUFBTUMsVUFBVTtJQUVoQixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUwsaUJBQWlCSyxXQUFXO1lBQzlCSixnQkFBZ0I7UUFDbEIsT0FBTztZQUNMQSxnQkFBZ0JJO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsSUFBSVAsaUJBQWlCLE1BQU07WUFDekIsTUFBTVEsVUFBVTttQkFBSVo7YUFBSztZQUN6QlksT0FBTyxDQUFDUixhQUFhLEdBQUdPO1lBQ3hCVixRQUFRVztZQUNSUCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHdEQUF3RDtJQUN4RCxNQUFNUSxzQkFBc0IsQ0FBQ0M7UUFDM0IsTUFBTWhCLElBQUksUUFBU1MsVUFBVztRQUM5QixNQUFNUixJQUFJZ0IsS0FBS0MsS0FBSyxDQUFDRixRQUFRUCxXQUFXO1FBQ3hDLE9BQU87WUFBRVQ7WUFBR0M7UUFBRTtJQUNoQjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWmxCLEtBQUttQixHQUFHLENBQUMsQ0FBQ0MsV0FBV047Z0JBQ3BCLE1BQU0sRUFBRWhCLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEdBQUdjLG9CQUFvQkM7Z0JBQ3JDLHFCQUNFLDhEQUFDRztvQkFFQ0ksU0FBUyxJQUFNYixnQkFBZ0JNO29CQUMvQkksV0FBVyw4Q0FRVixPQVBDRSxjQUFjLElBQ1YsYUFDQUEsY0FBYyxJQUNkLGtCQUNBQSxjQUFjLElBQ2QsZUFDQSxZQUNMOzt3QkFFQWhCLGlCQUFpQlUsdUJBQ2hCLDhEQUFDRzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU1YLGtCQUFrQjs7Ozs7OzhDQUVuQyw4REFBQ087b0NBQ0NDLFdBQVU7b0NBQ1ZHLFNBQVMsSUFBTVgsa0JBQWtCOzs7Ozs7OENBRW5DLDhEQUFDTztvQ0FDQ0MsV0FBVTtvQ0FDVkcsU0FBUyxJQUFNWCxrQkFBa0I7Ozs7Ozs4Q0FFbkMsOERBQUNPO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU1YLGtCQUFrQjs7Ozs7Ozs7Ozs7O3NDQUt2Qyw4REFBQ087NEJBQUlDLFdBQVU7c0NBQ1osSUFBU25CLE9BQUxELEdBQUUsS0FBSyxPQUFGQyxHQUFFOzs7Ozs7O21CQWxDVGU7Ozs7O1lBc0NYOzs7Ozs7Ozs7OztBQUlSO0dBbEdNN0I7O1FBRW9ESCxxREFBVUE7UUFVOURDLDBEQUFlQTs7O0tBWmZFO0FBb0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9hcmQuanM/ZDNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgdXNlTW9yYWxpcywgdXNlV2ViM0NvbnRyYWN0IH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwid2ViM3Vpa2l0XCI7XHJcblxyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgTW9yYWxpcywgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZDogY2hhaW5JZEhleCB9ID0gdXNlTW9yYWxpcygpXHJcblxyXG4gIGNvbnN0IGNoYWluSWQgPSBwYXJzZUludChjaGFpbklkSGV4KVxyXG5cclxuICBjb25zdCBnYW1lQWRkcmVzcyA9IGNoYWluSWQgaW4gY29udHJhY3RBZGRyZXNzID8gY29udHJhY3RBZGRyZXNzW2NoYWluSWRdWzBdIDogbnVsbFxyXG5cclxuICBjb25zdCB7XHJcbiAgICBydW5Db250cmFjdEZ1bmN0aW9uOiBzZXRDb2xvcixcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGlzRmV0Y2hpbmcsXHJcbiAgfSA9IHVzZVdlYjNDb250cmFjdCh7XHJcbiAgICBhYmk6IGFiaSxcclxuICAgIGNvbnRyYWN0QWRkcmVzczogZ2FtZUFkZHJlc3MsXHJcbiAgICBmdW5jdGlvbk5hbWU6IFwic2VyQ29sb3JcIixcclxuICAgIHBhcmFtczoge3g6IDAsIHk6IDB9LFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKEFycmF5KDM1KS5maWxsKDApKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDZWxsLCBzZXRTZWxlY3RlZENlbGxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IG51bVJvd3MgPSA3O1xyXG4gIGNvbnN0IG51bUNvbHMgPSA1O1xyXG5cclxuICBjb25zdCB0b2dnbGVDZWxsQ29sb3IgPSAoY2VsbEluZGV4KSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRDZWxsID09PSBjZWxsSW5kZXgpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKGNlbGxJbmRleCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSAoY29sb3IpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV3R3JpZCA9IFsuLi5ncmlkXTtcclxuICAgICAgbmV3R3JpZFtzZWxlY3RlZENlbGxdID0gY29sb3I7XHJcbiAgICAgIHNldEdyaWQobmV3R3JpZCk7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2VsbChudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBjb252ZXJ0IDFEIGluZGV4IHRvIDJEICh4LCB5KSBjb29yZGluYXRlc1xyXG4gIGNvbnN0IGdldEluZGV4Q29vcmRpbmF0ZXMgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHggPSAoaW5kZXggJSBudW1Db2xzKSArIDE7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIG51bUNvbHMpICsgMTtcclxuICAgIHJldHVybiB7IHgsIHkgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBncmlkLXJvd3MtNyBnYXAtMCB3LTMvNFwiPlxyXG4gICAgICAgIHtncmlkLm1hcCgoY2VsbENvbG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRJbmRleENvb3JkaW5hdGVzKGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNlbGxDb2xvcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICBjZWxsQ29sb3IgPT09IDJcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgOiBjZWxsQ29sb3IgPT09IDRcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IGNlbGxDb2xvciA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgfSByZWxhdGl2ZWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDZWxsID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTE2IG10LTEwIHotMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLWJsYWNrIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgyKX0gLy8gQmxhY2tcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy15ZWxsb3ctNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSg0KX0gLy8gR3JlZW5cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy1yZWQtNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgzKX0gLy8gUmVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctd2hpdGUgYm9yZGVyIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgxKX0gLy8gV2hpdGVcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgey8qIERpc3BsYXkgdGhlIHgsIHkgY29vcmRpbmF0ZXMgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHRleHQteHMgdGV4dC1ncmF5LTUwMCBwLTFcIj5cclxuICAgICAgICAgICAgICAgIHtgKCR7eH0sJHt5fSlgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnRyYWN0QWRkcmVzcyIsImFiaSIsInVzZU1vcmFsaXMiLCJ1c2VXZWIzQ29udHJhY3QiLCJ1c2VOb3RpZmljYXRpb24iLCJCb2FyZCIsIk1vcmFsaXMiLCJpc1dlYjNFbmFibGVkIiwiY2hhaW5JZCIsImNoYWluSWRIZXgiLCJwYXJzZUludCIsImdhbWVBZGRyZXNzIiwicnVuQ29udHJhY3RGdW5jdGlvbiIsInNldENvbG9yIiwiaXNMb2FkaW5nIiwiaXNGZXRjaGluZyIsImZ1bmN0aW9uTmFtZSIsInBhcmFtcyIsIngiLCJ5IiwiZ3JpZCIsInNldEdyaWQiLCJBcnJheSIsImZpbGwiLCJzZWxlY3RlZENlbGwiLCJzZXRTZWxlY3RlZENlbGwiLCJudW1Sb3dzIiwibnVtQ29scyIsInRvZ2dsZUNlbGxDb2xvciIsImNlbGxJbmRleCIsImhhbmRsZUNvbG9yQ2hhbmdlIiwiY29sb3IiLCJuZXdHcmlkIiwiZ2V0SW5kZXhDb29yZGluYXRlcyIsImluZGV4IiwiTWF0aCIsImZsb29yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2VsbENvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});