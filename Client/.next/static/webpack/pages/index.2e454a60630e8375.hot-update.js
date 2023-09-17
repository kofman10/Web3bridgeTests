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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const gameAddress = chainId in _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress ? _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress[chainId][0] : null;\n    // const { x, y } = getIndexCoordinates(index);\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(selectedCell);\n    const numRows = 7;\n    const numCols = 5;\n    const { runContractFunction: setColor, isLoading, isFetching } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_2__.abi,\n        contractAddress: gameAddress,\n        functionName: \"setColor\",\n        params: {\n            x: 3,\n            y: 4,\n            colorId: 3\n        }\n    });\n    const { runContractFunction: getColor } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_2__.abi,\n        contractAddress: gameAddress,\n        functionName: \"setColor\",\n        params: {\n            x: 3,\n            y: 4,\n            colorId: 3\n        }\n    });\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex + 1);\n        }\n    };\n    const handleColorChange = async (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            await setColor({\n                // onComplete:\n                // onError\n                onSuccess: ()=>console.log(\"success\"),\n                onError: (error)=>console.log(error)\n            });\n            newGrid[selectedCell - 1] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: \"\",\n        y: \"\"\n    });\n    const inputHandle = (e)=>{\n        setState({\n            ...state,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n                children: grid.map((cellColor, index)=>{\n                    const { x, y } = getIndexCoordinates(index);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>toggleCellColor(index),\n                        className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 2 ? \"bg-black\" : cellColor === 4 ? \"bg-yellow-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                        children: [\n                            selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                        onClick: ()=>handleColorChange(2)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-yellow-500 cursor-pointer\",\n                                        onClick: ()=>handleColorChange(4)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                        onClick: ()=>handleColorChange(3)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-4 w-4 mx-1 bg-white border cursor-pointer\",\n                                        onClick: ()=>handleColorChange(1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                                children: \"(\".concat(x, \",\").concat(y, \")\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-slate-500\",\n                        htmlFor: \"varsity\",\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                        lineNumber: 141,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: state.x,\n                        onChange: inputHandle,\n                        className: \"p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md\",\n                        type: \"text\",\n                        name: \"name\",\n                        placeholder: \"name\",\n                        id: \"varsity\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                        lineNumber: 144,\n                        columnNumber: 23\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"V6LKTi0UIG5/s3pKqe2sugtTkB8=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQnlCLHVCQUNoQiw4REFBQ1U7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FDQ0MsV0FBVTt3Q0FDVkcsU0FBUyxJQUFNckIsa0JBQWtCOzs7Ozs7a0RBRW5DLDhEQUFDaUI7d0NBQ0NDLFdBQVU7d0NBQ1ZHLFNBQVMsSUFBTXJCLGtCQUFrQjs7Ozs7O2tEQUVuQyw4REFBQ2lCO3dDQUNDQyxXQUFVO3dDQUNWRyxTQUFTLElBQU1yQixrQkFBa0I7Ozs7OztrREFFbkMsOERBQUNpQjt3Q0FDQ0MsV0FBVTt3Q0FDVkcsU0FBUyxJQUFNckIsa0JBQWtCOzs7Ozs7Ozs7Ozs7MENBS3ZDLDhEQUFDaUI7Z0NBQUlDLFdBQVU7MENBQ1osSUFBU3ZCLE9BQUxELEdBQUUsS0FBSyxPQUFGQyxHQUFFOzs7Ozs7O3VCQWxDVFk7Ozs7O2dCQXNDWDs7Ozs7OzBCQUVJLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ0wsOERBQUNJO3dCQUFNSixXQUFVO3dCQUFpQkssU0FBUTtrQ0FBVTs7Ozs7O2tDQUdwRCw4REFBQ0M7d0JBQ0NSLE9BQU9OLE1BQU1oQixDQUFDO3dCQUNkK0IsVUFBVWI7d0JBQ1ZNLFdBQVU7d0JBQ1ZRLE1BQUs7d0JBQ0xYLE1BQUs7d0JBQ0xZLGFBQVk7d0JBQ1pDLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQXJKTXpEOztRQUVvREgscURBQVVBO1FBaUI5REMsMERBQWVBO1FBYWZBLDBEQUFlQTs7O0tBaENmRTtBQXVKTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JvYXJkLmpzP2QzYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbnRyYWN0QWRkcmVzcywgYWJpIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbmltcG9ydCB7IHVzZU1vcmFsaXMsIHVzZVdlYjNDb250cmFjdCB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCJcclxuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSBcIndlYjN1aWtpdFwiO1xyXG5cclxuXHJcbmNvbnN0IEJvYXJkID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IE1vcmFsaXMsIGlzV2ViM0VuYWJsZWQsIGNoYWluSWQ6IGNoYWluSWRIZXggfSA9IHVzZU1vcmFsaXMoKVxyXG5cclxuICBjb25zdCBjaGFpbklkID0gcGFyc2VJbnQoY2hhaW5JZEhleClcclxuXHJcbiAgY29uc3QgZ2FtZUFkZHJlc3MgPSBjaGFpbklkIGluIGNvbnRyYWN0QWRkcmVzcyA/IGNvbnRyYWN0QWRkcmVzc1tjaGFpbklkXVswXSA6IG51bGxcclxuXHJcbiAgLy8gY29uc3QgeyB4LCB5IH0gPSBnZXRJbmRleENvb3JkaW5hdGVzKGluZGV4KTtcclxuICBjb25zdCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShBcnJheSgzNSkuZmlsbCgwKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2VsbCwgc2V0U2VsZWN0ZWRDZWxsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICBjb25zb2xlLmxvZyhzZWxlY3RlZENlbGwpXHJcbiAgY29uc3QgbnVtUm93cyA9IDc7XHJcbiAgY29uc3QgbnVtQ29scyA9IDU7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJ1bkNvbnRyYWN0RnVuY3Rpb246IHNldENvbG9yLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaXNGZXRjaGluZyxcclxuICB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgIGFiaTogYWJpLFxyXG4gICAgY29udHJhY3RBZGRyZXNzOiBnYW1lQWRkcmVzcyxcclxuICAgIGZ1bmN0aW9uTmFtZTogXCJzZXRDb2xvclwiLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHg6IDMsIFxyXG4gICAgICB5OiA0LFxyXG4gICAgICBjb2xvcklkOjNcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcnVuQ29udHJhY3RGdW5jdGlvbjogZ2V0Q29sb3IsXHJcbiAgfSA9IHVzZVdlYjNDb250cmFjdCh7XHJcbiAgICBhYmk6IGFiaSxcclxuICAgIGNvbnRyYWN0QWRkcmVzczogZ2FtZUFkZHJlc3MsXHJcbiAgICBmdW5jdGlvbk5hbWU6IFwic2V0Q29sb3JcIixcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB4OiAzLCBcclxuICAgICAgeTogNCxcclxuICAgICAgY29sb3JJZDozXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG5cclxuICBjb25zdCB0b2dnbGVDZWxsQ29sb3IgPSAoY2VsbEluZGV4KSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRDZWxsID09PSBjZWxsSW5kZXgpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKGNlbGxJbmRleCArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbG9yQ2hhbmdlID0gYXN5bmMgKGNvbG9yKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRDZWxsICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5ld0dyaWQgPSBbLi4uZ3JpZF07XHJcbiAgICAgIGF3YWl0IHNldENvbG9yKHtcclxuICAgICAgICAvLyBvbkNvbXBsZXRlOlxyXG4gICAgICAgIC8vIG9uRXJyb3JcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJyksXHJcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgIH0pXHJcbiAgICAgIG5ld0dyaWRbc2VsZWN0ZWRDZWxsIC0gMV0gPSBjb2xvcjtcclxuICAgICAgc2V0R3JpZChuZXdHcmlkKTtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgMUQgaW5kZXggdG8gMkQgKHgsIHkpIGNvb3JkaW5hdGVzXHJcbiAgY29uc3QgZ2V0SW5kZXhDb29yZGluYXRlcyA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IChpbmRleCAlIG51bUNvbHMpICsgMTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gbnVtQ29scykgKyAxO1xyXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgeDogXCJcIixcclxuICAgIHk6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGlucHV0SGFuZGxlID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBncmlkLXJvd3MtNyBnYXAtMCB3LTMvNFwiPlxyXG4gICAgICAgIHtncmlkLm1hcCgoY2VsbENvbG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRJbmRleENvb3JkaW5hdGVzKGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNlbGxDb2xvcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICBjZWxsQ29sb3IgPT09IDJcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgOiBjZWxsQ29sb3IgPT09IDRcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IGNlbGxDb2xvciA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgfSByZWxhdGl2ZWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDZWxsID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTE2IG10LTEwIHotMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLWJsYWNrIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSgyKX0gLy8gQmxhY2tcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy15ZWxsb3ctNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZSg0KX0gLy8geWVsbG93XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctcmVkLTUwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMyl9IC8vIFJlZFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLXdoaXRlIGJvcmRlciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoMSl9IC8vIFdoaXRlXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHsvKiBEaXNwbGF5IHRoZSB4LCB5IGNvb3JkaW5hdGVzICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB0ZXh0LXhzIHRleHQtZ3JheS01MDAgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICB7YCgke3h9LCR7eX0pYH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMFwiIGh0bWxGb3I9XCJ2YXJzaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItc2xhdGUtNDAwIG10LTEgb3V0bGluZS0wIHRleHQtc2xhdGUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidmFyc2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnRyYWN0QWRkcmVzcyIsImFiaSIsInVzZU1vcmFsaXMiLCJ1c2VXZWIzQ29udHJhY3QiLCJ1c2VOb3RpZmljYXRpb24iLCJCb2FyZCIsIk1vcmFsaXMiLCJpc1dlYjNFbmFibGVkIiwiY2hhaW5JZCIsImNoYWluSWRIZXgiLCJwYXJzZUludCIsImdhbWVBZGRyZXNzIiwiZ3JpZCIsInNldEdyaWQiLCJBcnJheSIsImZpbGwiLCJzZWxlY3RlZENlbGwiLCJzZXRTZWxlY3RlZENlbGwiLCJjb25zb2xlIiwibG9nIiwibnVtUm93cyIsIm51bUNvbHMiLCJydW5Db250cmFjdEZ1bmN0aW9uIiwic2V0Q29sb3IiLCJpc0xvYWRpbmciLCJpc0ZldGNoaW5nIiwiZnVuY3Rpb25OYW1lIiwicGFyYW1zIiwieCIsInkiLCJjb2xvcklkIiwiZ2V0Q29sb3IiLCJ0b2dnbGVDZWxsQ29sb3IiLCJjZWxsSW5kZXgiLCJoYW5kbGVDb2xvckNoYW5nZSIsImNvbG9yIiwibmV3R3JpZCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJlcnJvciIsImdldEluZGV4Q29vcmRpbmF0ZXMiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInN0YXRlIiwic2V0U3RhdGUiLCJpbnB1dEhhbmRsZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJjZWxsQ29sb3IiLCJvbkNsaWNrIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});