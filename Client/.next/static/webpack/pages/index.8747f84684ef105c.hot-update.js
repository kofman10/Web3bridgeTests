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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const gameAddress = chainId in _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress ? _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress[chainId][0] : null;\n    // const { x, y } = getIndexCoordinates(index);\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(selectedCell);\n    const numRows = 7;\n    const numCols = 5;\n    const { runContractFunction: setColor, isLoading, isFetching } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_2__.abi,\n        contractAddress: gameAddress,\n        functionName: \"setColor\",\n        params: {\n            x: 3,\n            y: 4,\n            colorId: 3\n        }\n    });\n    const { runContractFunction: getColor } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_2__.abi,\n        contractAddress: gameAddress,\n        functionName: \"setColor\",\n        params: {\n            x: 3,\n            y: 4,\n            colorId: 3\n        }\n    });\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex + 1);\n        }\n    };\n    const handleColorChange = async (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            await setColor({\n                // onComplete:\n                // onError\n                onSuccess: ()=>console.log(\"success\"),\n                onError: (error)=>console.log(error)\n            });\n            newGrid[selectedCell - 1] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: \"\",\n        y: \"\"\n    });\n    const inputHandle = (e)=>{\n        setState({\n            ...state,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n                children: grid.map((cellColor, index)=>{\n                    const { x, y } = getIndexCoordinates(index);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>toggleCellColor(index),\n                        className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 2 ? \"bg-black\" : cellColor === 4 ? \"bg-yellow-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                        children: [\n                            selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                        onClick: ()=>handleColorChange(2)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-yellow-500 cursor-pointer\",\n                                        onClick: ()=>handleColorChange(4)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                        onClick: ()=>handleColorChange(3)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-white border cursor-pointer\",\n                                        onClick: ()=>handleColorChange(1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                                children: \"(\".concat(x, \",\").concat(y, \")\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-slate-500\",\n                        htmlFor: \"varsity\",\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                        lineNumber: 141,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: state.name,\n                        onChange: inputHandle,\n                        className: \"p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md\",\n                        type: \"text\",\n                        name: \"name\",\n                        placeholder: \"name\",\n                        id: \"varsity\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                        lineNumber: 144,\n                        columnNumber: 23\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"V6LKTi0UIG5/s3pKqe2sugtTkB8=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQnlCLHVCQUNoQiw4REFBQ1U7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FDQ0MsV0FBVTt3Q0FDVkcsU0FBUyxJQUFNckIsa0JBQWtCOzs7Ozs7a0RBRW5DLDhEQUFDaUI7d0NBQ0NDLFdBQVU7d0NBQ1ZHLFNBQVMsSUFBTXJCLGtCQUFrQjs7Ozs7O2tEQUVuQyw4REFBQ2lCO3dDQUNDQyxXQUFVO3dDQUNWRyxTQUFTLElBQU1yQixrQkFBa0I7Ozs7OztrREFFbkMsOERBQUNpQjt3Q0FDQ0MsV0FBVTt3Q0FDVkcsU0FBUyxJQUFNckIsa0JBQWtCOzs7Ozs7Ozs7Ozs7MENBS3ZDLDhEQUFDaUI7Z0NBQUlDLFdBQVU7MENBQ1osSUFBU3ZCLE9BQUxELEdBQUUsS0FBSyxPQUFGQyxHQUFFOzs7Ozs7O3VCQWxDVFk7Ozs7O2dCQXNDWDs7Ozs7OzBCQUVJLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ0wsOERBQUNJO3dCQUFNSixXQUFVO3dCQUFpQkssU0FBUTtrQ0FBVTs7Ozs7O2tDQUdwRCw4REFBQ0M7d0JBQ0NSLE9BQU9OLE1BQU1LLElBQUk7d0JBQ2pCVSxVQUFVYjt3QkFDVk0sV0FBVTt3QkFDVlEsTUFBSzt3QkFDTFgsTUFBSzt3QkFDTFksYUFBWTt3QkFDWkMsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0dBckpNekQ7O1FBRW9ESCxxREFBVUE7UUFpQjlEQywwREFBZUE7UUFhZkEsMERBQWVBOzs7S0FoQ2ZFO0FBdUpOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9hcmQuanM/ZDNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgdXNlTW9yYWxpcywgdXNlV2ViM0NvbnRyYWN0IH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwid2ViM3Vpa2l0XCI7XHJcblxyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgTW9yYWxpcywgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZDogY2hhaW5JZEhleCB9ID0gdXNlTW9yYWxpcygpXHJcblxyXG4gIGNvbnN0IGNoYWluSWQgPSBwYXJzZUludChjaGFpbklkSGV4KVxyXG5cclxuICBjb25zdCBnYW1lQWRkcmVzcyA9IGNoYWluSWQgaW4gY29udHJhY3RBZGRyZXNzID8gY29udHJhY3RBZGRyZXNzW2NoYWluSWRdWzBdIDogbnVsbFxyXG5cclxuICAvLyBjb25zdCB7IHgsIHkgfSA9IGdldEluZGV4Q29vcmRpbmF0ZXMoaW5kZXgpO1xyXG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKEFycmF5KDM1KS5maWxsKDApKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDZWxsLCBzZXRTZWxlY3RlZENlbGxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2VsbClcclxuICBjb25zdCBudW1Sb3dzID0gNztcclxuICBjb25zdCBudW1Db2xzID0gNTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcnVuQ29udHJhY3RGdW5jdGlvbjogc2V0Q29sb3IsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBpc0ZldGNoaW5nLFxyXG4gIH0gPSB1c2VXZWIzQ29udHJhY3Qoe1xyXG4gICAgYWJpOiBhYmksXHJcbiAgICBjb250cmFjdEFkZHJlc3M6IGdhbWVBZGRyZXNzLFxyXG4gICAgZnVuY3Rpb25OYW1lOiBcInNldENvbG9yXCIsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgeDogMywgXHJcbiAgICAgIHk6IDQsXHJcbiAgICAgIGNvbG9ySWQ6M1xyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBydW5Db250cmFjdEZ1bmN0aW9uOiBnZXRDb2xvcixcclxuICB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgIGFiaTogYWJpLFxyXG4gICAgY29udHJhY3RBZGRyZXNzOiBnYW1lQWRkcmVzcyxcclxuICAgIGZ1bmN0aW9uTmFtZTogXCJzZXRDb2xvclwiLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHg6IDMsIFxyXG4gICAgICB5OiA0LFxyXG4gICAgICBjb2xvcklkOjNcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNlbGxDb2xvciA9IChjZWxsSW5kZXgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgPT09IGNlbGxJbmRleCkge1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwobnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwoY2VsbEluZGV4ICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sb3JDaGFuZ2UgPSBhc3luYyAoY29sb3IpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV3R3JpZCA9IFsuLi5ncmlkXTtcclxuICAgICAgYXdhaXQgc2V0Q29sb3Ioe1xyXG4gICAgICAgIC8vIG9uQ29tcGxldGU6XHJcbiAgICAgICAgLy8gb25FcnJvclxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgfSlcclxuICAgICAgbmV3R3JpZFtzZWxlY3RlZENlbGwgLSAxXSA9IGNvbG9yO1xyXG4gICAgICBzZXRHcmlkKG5ld0dyaWQpO1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gY29udmVydCAxRCBpbmRleCB0byAyRCAoeCwgeSkgY29vcmRpbmF0ZXNcclxuICBjb25zdCBnZXRJbmRleENvb3JkaW5hdGVzID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB4ID0gKGluZGV4ICUgbnVtQ29scykgKyAxO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaW5kZXggLyBudW1Db2xzKSArIDE7XHJcbiAgICByZXR1cm4geyB4LCB5IH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB4OiBcIlwiLFxyXG4gICAgeTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaW5wdXRIYW5kbGUgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdyaWQtcm93cy03IGdhcC0wIHctMy80XCI+XHJcbiAgICAgICAge2dyaWQubWFwKChjZWxsQ29sb3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGdldEluZGV4Q29vcmRpbmF0ZXMoaW5kZXgpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ2VsbENvbG9yKGluZGV4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTEwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgIGNlbGxDb2xvciA9PT0gMlxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICA6IGNlbGxDb2xvciA9PT0gNFxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmcteWVsbG93LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogY2VsbENvbG9yID09PSAzXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlXCJcclxuICAgICAgICAgICAgICB9IHJlbGF0aXZlYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZENlbGwgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctMTYgbXQtMTAgei0xMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctYmxhY2sgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDIpfSAvLyBCbGFja1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLXllbGxvdy01MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDQpfSAvLyB5ZWxsb3dcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy1yZWQtNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgzKX0gLy8gUmVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctd2hpdGUgYm9yZGVyIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgxKX0gLy8gV2hpdGVcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgey8qIERpc3BsYXkgdGhlIHgsIHkgY29vcmRpbmF0ZXMgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHRleHQteHMgdGV4dC1ncmF5LTUwMCBwLTFcIj5cclxuICAgICAgICAgICAgICAgIHtgKCR7eH0sJHt5fSlgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwXCIgaHRtbEZvcj1cInZhcnNpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1zbGF0ZS00MDAgbXQtMSBvdXRsaW5lLTAgdGV4dC1zbGF0ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2YXJzaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwidXNlTW9yYWxpcyIsInVzZVdlYjNDb250cmFjdCIsInVzZU5vdGlmaWNhdGlvbiIsIkJvYXJkIiwiTW9yYWxpcyIsImlzV2ViM0VuYWJsZWQiLCJjaGFpbklkIiwiY2hhaW5JZEhleCIsInBhcnNlSW50IiwiZ2FtZUFkZHJlc3MiLCJncmlkIiwic2V0R3JpZCIsIkFycmF5IiwiZmlsbCIsInNlbGVjdGVkQ2VsbCIsInNldFNlbGVjdGVkQ2VsbCIsImNvbnNvbGUiLCJsb2ciLCJudW1Sb3dzIiwibnVtQ29scyIsInJ1bkNvbnRyYWN0RnVuY3Rpb24iLCJzZXRDb2xvciIsImlzTG9hZGluZyIsImlzRmV0Y2hpbmciLCJmdW5jdGlvbk5hbWUiLCJwYXJhbXMiLCJ4IiwieSIsImNvbG9ySWQiLCJnZXRDb2xvciIsInRvZ2dsZUNlbGxDb2xvciIsImNlbGxJbmRleCIsImhhbmRsZUNvbG9yQ2hhbmdlIiwiY29sb3IiLCJuZXdHcmlkIiwib25TdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwiZ2V0SW5kZXhDb29yZGluYXRlcyIsImluZGV4IiwiTWF0aCIsImZsb29yIiwic3RhdGUiLCJzZXRTdGF0ZSIsImlucHV0SGFuZGxlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNlbGxDb2xvciIsIm9uQ2xpY2siLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});