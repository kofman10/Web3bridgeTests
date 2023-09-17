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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const raffleAddress = chainId in _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress ? _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress[chainId][0] : null;\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const numRows = 7;\n    const numCols = 5;\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex);\n        }\n    };\n    const handleColorChange = (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            newGrid[selectedCell] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n            children: grid.map((cellColor, index)=>{\n                const { x, y } = getIndexCoordinates(index);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>toggleCellColor(index),\n                    className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 2 ? \"bg-black\" : cellColor === 4 ? \"bg-yellow-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                    children: [\n                        selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                    onClick: ()=>handleColorChange(1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-green-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(3)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-white cursor-pointer\",\n                                    onClick: ()=>handleColorChange(0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                            children: \"(\".concat(x, \",\").concat(y, \")\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"HCaCe4ECqyplXfL6Qswm677YhA0=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDVztBQUNRO0FBRTNELE1BQU1NLFFBQVE7O0lBRVosTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsU0FBU0MsVUFBVSxFQUFFLEdBQUdOLHlEQUFVQTtJQUVsRSxNQUFNSyxVQUFVRSxTQUFTRDtJQUV6QixNQUFNRSxnQkFBZ0JILFdBQVdQLHVEQUFlQSxHQUFHQSx1REFBZSxDQUFDTyxRQUFRLENBQUMsRUFBRSxHQUFHO0lBRWpGLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQ2MsTUFBTSxJQUFJQyxJQUFJLENBQUM7SUFDaEQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1rQixVQUFVO0lBQ2hCLE1BQU1DLFVBQVU7SUFFaEIsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3ZCLElBQUlMLGlCQUFpQkssV0FBVztZQUM5QkosZ0JBQWdCO1FBQ2xCLE9BQU87WUFDTEEsZ0JBQWdCSTtRQUNsQjtJQUNGO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCLElBQUlQLGlCQUFpQixNQUFNO1lBQ3pCLE1BQU1RLFVBQVU7bUJBQUlaO2FBQUs7WUFDekJZLE9BQU8sQ0FBQ1IsYUFBYSxHQUFHTztZQUN4QlYsUUFBUVc7WUFDUlAsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSx3REFBd0Q7SUFDeEQsTUFBTVEsc0JBQXNCLENBQUNDO1FBQzNCLE1BQU1DLElBQUksUUFBU1IsVUFBVztRQUM5QixNQUFNUyxJQUFJQyxLQUFLQyxLQUFLLENBQUNKLFFBQVFQLFdBQVc7UUFDeEMsT0FBTztZQUFFUTtZQUFHQztRQUFFO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pwQixLQUFLcUIsR0FBRyxDQUFDLENBQUNDLFdBQVdSO2dCQUNwQixNQUFNLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEdBQUdILG9CQUFvQkM7Z0JBQ3JDLHFCQUNFLDhEQUFDSztvQkFFQ0ksU0FBUyxJQUFNZixnQkFBZ0JNO29CQUMvQk0sV0FBVyw4Q0FRVixPQVBDRSxjQUFjLElBQ1YsYUFDQUEsY0FBYyxJQUNkLGtCQUNBQSxjQUFjLElBQ2QsZUFDQSxZQUNMOzt3QkFFQWxCLGlCQUFpQlUsdUJBQ2hCLDhEQUFDSzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU1iLGtCQUFrQjs7Ozs7OzhDQUVuQyw4REFBQ1M7b0NBQ0NDLFdBQVU7b0NBQ1ZHLFNBQVMsSUFBTWIsa0JBQWtCOzs7Ozs7OENBRW5DLDhEQUFDUztvQ0FDQ0MsV0FBVTtvQ0FDVkcsU0FBUyxJQUFNYixrQkFBa0I7Ozs7Ozs4Q0FFbkMsOERBQUNTO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU1iLGtCQUFrQjs7Ozs7Ozs7Ozs7O3NDQUt2Qyw4REFBQ1M7NEJBQUlDLFdBQVU7c0NBQ1osSUFBU0osT0FBTEQsR0FBRSxLQUFLLE9BQUZDLEdBQUU7Ozs7Ozs7bUJBbENURjs7Ozs7WUFzQ1g7Ozs7Ozs7Ozs7O0FBSVI7R0F2Rk1yQjs7UUFFb0RGLHFEQUFVQTs7O0tBRjlERTtBQXlGTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JvYXJkLmpzP2QzYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbnRyYWN0QWRkcmVzcywgYWJpIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbmltcG9ydCB7IHVzZU1vcmFsaXMsIHVzZVdlYjNDb250cmFjdCB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCJcclxuXHJcbmNvbnN0IEJvYXJkID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IE1vcmFsaXMsIGlzV2ViM0VuYWJsZWQsIGNoYWluSWQ6IGNoYWluSWRIZXggfSA9IHVzZU1vcmFsaXMoKVxyXG5cclxuICBjb25zdCBjaGFpbklkID0gcGFyc2VJbnQoY2hhaW5JZEhleClcclxuXHJcbiAgY29uc3QgcmFmZmxlQWRkcmVzcyA9IGNoYWluSWQgaW4gY29udHJhY3RBZGRyZXNzID8gY29udHJhY3RBZGRyZXNzW2NoYWluSWRdWzBdIDogbnVsbFxyXG5cclxuICBjb25zdCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShBcnJheSgzNSkuZmlsbCgwKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2VsbCwgc2V0U2VsZWN0ZWRDZWxsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBudW1Sb3dzID0gNztcclxuICBjb25zdCBudW1Db2xzID0gNTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ2VsbENvbG9yID0gKGNlbGxJbmRleCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkQ2VsbCA9PT0gY2VsbEluZGV4KSB7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2VsbChudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2VsbChjZWxsSW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbG9yQ2hhbmdlID0gKGNvbG9yKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRDZWxsICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dyaWQgPSBbLi4uZ3JpZF07XHJcbiAgICAgIG5ld0dyaWRbc2VsZWN0ZWRDZWxsXSA9IGNvbG9yO1xyXG4gICAgICBzZXRHcmlkKG5ld0dyaWQpO1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gY29udmVydCAxRCBpbmRleCB0byAyRCAoeCwgeSkgY29vcmRpbmF0ZXNcclxuICBjb25zdCBnZXRJbmRleENvb3JkaW5hdGVzID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB4ID0gKGluZGV4ICUgbnVtQ29scykgKyAxO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaW5kZXggLyBudW1Db2xzKSArIDE7XHJcbiAgICByZXR1cm4geyB4LCB5IH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTUgZ3JpZC1yb3dzLTcgZ2FwLTAgdy0zLzRcIj5cclxuICAgICAgICB7Z3JpZC5tYXAoKGNlbGxDb2xvciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZ2V0SW5kZXhDb29yZGluYXRlcyhpbmRleCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDZWxsQ29sb3IoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtMTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgY2VsbENvbG9yID09PSAyXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgIDogY2VsbENvbG9yID09PSA0XHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBjZWxsQ29sb3IgPT09IDNcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGVcIlxyXG4gICAgICAgICAgICAgIH0gcmVsYXRpdmVgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkQ2VsbCA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy0xNiBtdC0xMCB6LTEwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy1ibGFjayBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMSl9IC8vIEJsYWNrXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctZ3JlZW4tNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgyKX0gLy8gR3JlZW5cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy1yZWQtNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgzKX0gLy8gUmVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDApfSAvLyBXaGl0ZVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7LyogRGlzcGxheSB0aGUgeCwgeSBjb29yZGluYXRlcyAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdGV4dC14cyB0ZXh0LWdyYXktNTAwIHAtMVwiPlxyXG4gICAgICAgICAgICAgICAge2AoJHt4fSwke3l9KWB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwidXNlTW9yYWxpcyIsInVzZVdlYjNDb250cmFjdCIsIkJvYXJkIiwiTW9yYWxpcyIsImlzV2ViM0VuYWJsZWQiLCJjaGFpbklkIiwiY2hhaW5JZEhleCIsInBhcnNlSW50IiwicmFmZmxlQWRkcmVzcyIsImdyaWQiLCJzZXRHcmlkIiwiQXJyYXkiLCJmaWxsIiwic2VsZWN0ZWRDZWxsIiwic2V0U2VsZWN0ZWRDZWxsIiwibnVtUm93cyIsIm51bUNvbHMiLCJ0b2dnbGVDZWxsQ29sb3IiLCJjZWxsSW5kZXgiLCJoYW5kbGVDb2xvckNoYW5nZSIsImNvbG9yIiwibmV3R3JpZCIsImdldEluZGV4Q29vcmRpbmF0ZXMiLCJpbmRleCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2VsbENvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});