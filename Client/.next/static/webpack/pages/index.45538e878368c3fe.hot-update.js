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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const gameAddress = chainId in _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress ? _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress[chainId][0] : null;\n    // const { x, y } = getIndexCoordinates(index);\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(selectedCell);\n    const numRows = 7;\n    const numCols = 5;\n    const { runContractFunction: setColor, isLoading, isFetching } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_2__.abi,\n        contractAddress: gameAddress,\n        functionName: \"setColor\",\n        params: {\n            x: selectedCell,\n            y: selectedCell,\n            colorId: 3\n        }\n    });\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex + 1);\n        }\n    };\n    const handleColorChange = async (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            await createEvent({\n                // onComplete:\n                // onError\n                onSuccess: handleSuccess,\n                onError: (error)=>toast.error(error)\n            });\n            newGrid[selectedCell - 1] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n            children: grid.map((cellColor, index)=>{\n                const { x, y } = getIndexCoordinates(index);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>toggleCellColor(index),\n                    className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 2 ? \"bg-black\" : cellColor === 4 ? \"bg-yellow-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                    children: [\n                        selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                    onClick: ()=>handleColorChange(2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-yellow-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(4)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(3)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-white border cursor-pointer\",\n                                    onClick: ()=>handleColorChange(1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                            children: \"(\".concat(x, \",\").concat(y, \")\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 108,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"5DLUNUzglR5O+4H8Q2tOgQRoq90=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztRQUVvREgscURBQVVBO1FBaUI5REMsMERBQWVBOzs7S0FuQmZFO0FBZ0hOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9hcmQuanM/ZDNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgdXNlTW9yYWxpcywgdXNlV2ViM0NvbnRyYWN0IH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwid2ViM3Vpa2l0XCI7XHJcblxyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgTW9yYWxpcywgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZDogY2hhaW5JZEhleCB9ID0gdXNlTW9yYWxpcygpXHJcblxyXG4gIGNvbnN0IGNoYWluSWQgPSBwYXJzZUludChjaGFpbklkSGV4KVxyXG5cclxuICBjb25zdCBnYW1lQWRkcmVzcyA9IGNoYWluSWQgaW4gY29udHJhY3RBZGRyZXNzID8gY29udHJhY3RBZGRyZXNzW2NoYWluSWRdWzBdIDogbnVsbFxyXG5cclxuICAvLyBjb25zdCB7IHgsIHkgfSA9IGdldEluZGV4Q29vcmRpbmF0ZXMoaW5kZXgpO1xyXG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKEFycmF5KDM1KS5maWxsKDApKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDZWxsLCBzZXRTZWxlY3RlZENlbGxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2VsbClcclxuICBjb25zdCBudW1Sb3dzID0gNztcclxuICBjb25zdCBudW1Db2xzID0gNTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcnVuQ29udHJhY3RGdW5jdGlvbjogc2V0Q29sb3IsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0ZldGNoaW5nLFxyXG4gIH0gPSB1c2VXZWIzQ29udHJhY3Qoe1xyXG4gICAgYWJpOiBhYmksXHJcbiAgICBjb250cmFjdEFkZHJlc3M6IGdhbWVBZGRyZXNzLFxyXG4gICAgZnVuY3Rpb25OYW1lOiBcInNldENvbG9yXCIsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgeDogc2VsZWN0ZWRDZWxsLCBcclxuICAgICAgeTogc2VsZWN0ZWRDZWxsLFxyXG4gICAgICBjb2xvcklkOjNcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNlbGxDb2xvciA9IChjZWxsSW5kZXgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgPT09IGNlbGxJbmRleCkge1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwobnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwoY2VsbEluZGV4ICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSBhc3luYyAoY29sb3IpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV3R3JpZCA9IFsuLi5ncmlkXTtcclxuICAgICAgYXdhaXQgY3JlYXRlRXZlbnQoe1xyXG4gICAgICAgIC8vIG9uQ29tcGxldGU6XHJcbiAgICAgICAgLy8gb25FcnJvclxyXG4gICAgICAgIG9uU3VjY2VzczogKGhhbmRsZVN1Y2Nlc3MpLFxyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IpLFxyXG4gICAgICB9KVxyXG4gICAgICBuZXdHcmlkW3NlbGVjdGVkQ2VsbCAtIDFdID0gY29sb3I7XHJcbiAgICAgIHNldEdyaWQobmV3R3JpZCk7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2VsbChudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBjb252ZXJ0IDFEIGluZGV4IHRvIDJEICh4LCB5KSBjb29yZGluYXRlc1xyXG4gIGNvbnN0IGdldEluZGV4Q29vcmRpbmF0ZXMgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHggPSAoaW5kZXggJSBudW1Db2xzKSArIDE7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIG51bUNvbHMpICsgMTtcclxuICAgIHJldHVybiB7IHgsIHkgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBncmlkLXJvd3MtNyBnYXAtMCB3LTMvNFwiPlxyXG4gICAgICAgIHtncmlkLm1hcCgoY2VsbENvbG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRJbmRleENvb3JkaW5hdGVzKGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNlbGxDb2xvcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICBjZWxsQ29sb3IgPT09IDJcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgOiBjZWxsQ29sb3IgPT09IDRcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IGNlbGxDb2xvciA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgfSByZWxhdGl2ZWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDZWxsID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTE2IG10LTEwIHotMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLWJsYWNrIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgyKX0gLy8gQmxhY2tcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy15ZWxsb3ctNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSg0KX0gLy8geWVsbG93XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctcmVkLTUwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMyl9IC8vIFJlZFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLXdoaXRlIGJvcmRlciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMSl9IC8vIFdoaXRlXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHsvKiBEaXNwbGF5IHRoZSB4LCB5IGNvb3JkaW5hdGVzICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB0ZXh0LXhzIHRleHQtZ3JheS01MDAgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICB7YCgke3h9LCR7eX0pYH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250cmFjdEFkZHJlc3MiLCJhYmkiLCJ1c2VNb3JhbGlzIiwidXNlV2ViM0NvbnRyYWN0IiwidXNlTm90aWZpY2F0aW9uIiwiQm9hcmQiLCJNb3JhbGlzIiwiaXNXZWIzRW5hYmxlZCIsImNoYWluSWQiLCJjaGFpbklkSGV4IiwicGFyc2VJbnQiLCJnYW1lQWRkcmVzcyIsImdyaWQiLCJzZXRHcmlkIiwiQXJyYXkiLCJmaWxsIiwic2VsZWN0ZWRDZWxsIiwic2V0U2VsZWN0ZWRDZWxsIiwiY29uc29sZSIsImxvZyIsIm51bVJvd3MiLCJudW1Db2xzIiwicnVuQ29udHJhY3RGdW5jdGlvbiIsInNldENvbG9yIiwiaXNMb2FkaW5nIiwiaXNGZXRjaGluZyIsImZ1bmN0aW9uTmFtZSIsInBhcmFtcyIsIngiLCJ5IiwiY29sb3JJZCIsInRvZ2dsZUNlbGxDb2xvciIsImNlbGxJbmRleCIsImhhbmRsZUNvbG9yQ2hhbmdlIiwiY29sb3IiLCJuZXdHcmlkIiwiY3JlYXRlRXZlbnQiLCJvblN1Y2Nlc3MiLCJoYW5kbGVTdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwidG9hc3QiLCJnZXRJbmRleENvb3JkaW5hdGVzIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJjZWxsQ29sb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});