(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docz/examples/10-example-component-overriding.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return C});var t=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),r=o.n(t),a=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(a),l=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),s=o.n(l),d=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=o.n(d),u=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=o.n(u),p=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),b=o.n(p),h=o("./node_modules/react/index.js"),f=o.n(h),_=o("./node_modules/@mdx-js/tag/dist/index.js"),y=o("./docz/utils/Playground.jsx"),g=o("./src/material-table.js"),C=function(e){function n(e){var o;return i()(this,n),(o=m()(this,c()(n).call(this,e))).layout=null,o}return b()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.components,o=r()(e,["components"]);return f.a.createElement(_.MDXTag,{name:"wrapper",components:n},f.a.createElement(_.MDXTag,{name:"h2",components:n,props:{id:"component-overriding-example"}},"Component Overriding Example"),f.a.createElement(_.MDXTag,{name:"p",components:n},"You can change all parts of material-table components."),f.a.createElement(y.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  components={{\n    Toolbar: props => (\n      <div style={{ backgroundColor: '#e8eaf5' }}>\n        <MTableToolbar {...props} />\n      </div>\n    ),\n  }}\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Customizing Toolbar\"\n  options={{\n    columnsButton: true,\n    filtering: true,\n  }}\n/>",__scope:{props:this?this.props:o,Playground:y.a,MaterialTable:g.b,MTableToolbar:g.a}},f.a.createElement(g.b,{components:{Toolbar:function(e){return f.a.createElement("div",{style:{backgroundColor:"#e8eaf5"}},f.a.createElement(g.a,e))}},columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63}],title:"Customizing Toolbar",options:{columnsButton:!0,filtering:!0}})))}}]),n}(f.a.Component);C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,o){"use strict";var t=o("./node_modules/docz/dist/index.m.js"),r=o("./node_modules/codemirror/lib/codemirror.js");o.n(r).a.defaults.viewportMargin=1/0,n.a=t.e}}]);
//# sourceMappingURL=docz-examples-10-example-component-overriding.7d33bc0627e86bf33e05.js.map