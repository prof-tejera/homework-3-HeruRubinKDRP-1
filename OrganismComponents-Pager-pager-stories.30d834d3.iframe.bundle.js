"use strict";(self.webpackChunkhomework_3=self.webpackChunkhomework_3||[]).push([[232],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/OrganismComponents/Pager/pager.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Pager__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/OrganismComponents/Pager/Pager.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Organism Components/Pager",component:_Pager__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"],argTypes:{totalPages:{control:"number"}}};var Default=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Pager__WEBPACK_IMPORTED_MODULE_1__.Z,(0,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))}.bind({});Default.args={totalPages:22},Default.parameters=(0,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Default.parameters),{},{docs:(0,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,E_Code_homework_3_HeruRubinKDRP_1_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"args => <Pager {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/OrganismComponents/Pager/Pager.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Pager_Pager}});var _templateObject,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),PagerStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  .selected-page{\n    background-color: transparent;\n    border: 1px solid #333333;\n    label{\n      font-weight: bold;\n      color: #333333;\n    }\n  }\n  .pagination-button{\n    border-radius: 0.1rem;\n  }\n  .pagination-button-disabled{\n    pointer-events: none;\n    background-color: transparent;\n    label{\n      color: #333333;\n    }\n  }\n"])));try{PagerStyled.displayName="PagerStyled",PagerStyled.__docgenInfo={description:"",displayName:"PagerStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/OrganismComponents/Pager/pager.styled.tsx#PagerStyled"]={docgenInfo:PagerStyled.__docgenInfo,name:"PagerStyled",path:"src/OrganismComponents/Pager/pager.styled.tsx#PagerStyled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Pager=function Pager(props){var _React$useState=react.useState(1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),currentPage=_React$useState2[0],setCurrentPage=_React$useState2[1];return(0,jsx_runtime.jsx)(PagerStyled,{className:"pagination-container",children:function getDisplayedPages(){return props.totalPages<=5?Array.from({length:props.totalPages},(function(_,i){return i+1})):currentPage<=3?[1,2,3,4,"...",props.totalPages]:currentPage>=props.totalPages-2?[1,"...",props.totalPages-3,props.totalPages-2,props.totalPages-1,props.totalPages]:[1,"...",currentPage-1,currentPage,currentPage+1,"...",props.totalPages]}().map((function(page,index){return(0,jsx_runtime.jsx)(Button.Z,{classes:"".concat(page===currentPage?"selected-page":""," ").concat("..."!==page?"pagination-button":"pagination-button pagination-button-disabled"),label:page.toString(),active:"..."!==page,onClick:function onClick(){return function mangePageChange(page){console.log(page),"number"==typeof page&&setCurrentPage(page)}(page)}},index)}))})},Pager_Pager=Pager;try{Pager.displayName="Pager",Pager.__docgenInfo={description:"",displayName:"Pager",props:{totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},pageChangeFunction:{defaultValue:null,description:"",name:"pageChangeFunction",required:!0,type:{name:"(page: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/OrganismComponents/Pager/Pager.tsx#Pager"]={docgenInfo:Pager.__docgenInfo,name:"Pager",path:"src/OrganismComponents/Pager/Pager.tsx#Pager"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button_Button}});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ButtonStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  border-radius: 100vw;\n  font-weight: 400 !important;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n  border: none;\n  color: black;\n  padding: var(--step--6) var(--step--4);\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: var(--step--3);\n  margin: 0;\n  cursor: pointer;  \n  \n  label {\n    position: relative;\n    transition: all 0.2s ease-in-out;\n    z-index: 200;\n    pointer-events: none;\n  }\n\n  .expander {\n    background-color: transparent;\n    border-radius: 100vw;\n    inset: 50%;\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n    transition: all 0.2s ease-in-out;\n    z-index: 100;\n  }\n\n  &.Default-button {\n    \n  }\n\n  &.Default-button-active {\n    background-color: rgb(71, 145, 241);\n  }\n\n  &.expand-bg {\n    &:hover {\n      .expander {\n        inset: 0;\n        opacity: 1;\n      }\n    }\n  }\n\n  &.default {\n    background-color: #29404f;\n\n    &.expand-bg {\n      &:hover {\n        background-color: rgb(71, 145, 241);\n\n        label {\n          color: #333333;\n        }\n      }\n    }\n\n    label {\n      color: white;\n    }\n  }\n\n  &.primary {\n    background-color: #007306;\n\n    label {\n      color: white;\n    }\n\n    &.expand-bg {\n      &:hover {\n        label {\n          color: #333;\n        }\n\n        .expander {\n          background-color: #b9e0ab;\n          border: 1px solid #007306;\n        }\n      }\n    }\n\n    &.default-hover {\n      &:hover {\n        background-color: #b9e0ab;\n\n        label {\n          color: #333;\n        }\n      }\n    }\n  }\n\n  &.secondary {\n    background-color: rgb(245, 246, 246);\n    border: 1px solid #333;\n\n    label {\n      color: #333333;\n    }\n\n    &.expand-bg {\n      &:hover { \n        label {\n          color: #fff;\n        } \n        .expander {\n          background-color: #232623;\n          border: 1px solid #232623;\n        }\n      }\n    }\n  }\n\n"])));try{ButtonStyled.displayName="ButtonStyled",ButtonStyled.__docgenInfo={description:"",displayName:"ButtonStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.styled.tsx#ButtonStyled"]={docgenInfo:ButtonStyled.__docgenInfo,name:"ButtonStyled",path:"src/components/Button/button.styled.tsx#ButtonStyled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=function Button(props){var _props$type,_props$hoverType,_props$theme;return(0,jsx_runtime.jsxs)(ButtonStyled,{type:null!==(_props$type=props.type)&&void 0!==_props$type?_props$type:"button",onClick:props.onClick?props.onClick:function(){console.log("no function provided")},className:"btn ".concat(props.classes," ").concat(null!==(_props$hoverType=props.hoverType)&&void 0!==_props$hoverType?_props$hoverType:"default-hover"," ").concat(null!==(_props$theme=props.theme)&&void 0!==_props$theme?_props$theme:"default","  ").concat(props.active?"Default-button Default-button-active":"Default-button"),children:[props.label?(0,jsx_runtime.jsx)("label",{children:props.label}):(0,jsx_runtime.jsx)("span",{className:"spacer"}),"expand-bg"===props.hoverType&&(0,jsx_runtime.jsx)("div",{className:"expander"})]})},Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'}]}},hoverType:{defaultValue:null,description:"",name:"hoverType",required:!1,type:{name:"enum",value:[{value:'"default-hover"'},{value:'"expand-bg"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);