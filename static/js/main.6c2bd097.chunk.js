(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),o=c(4),r=(c(9),c(10),c(1)),a=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(r.useState)("Jam"),e=Object(o.a)(t,2),c=e[0],n=e[1],s=function(t){var e=t.products;return Object(a.jsx)("table",{className:"table",children:Object(a.jsx)("tbody",{children:e.map((function(t){return Object(a.jsx)(d,{product:t},t)}))})})},u=function(){return Object(a.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return n("")},children:"-"})},d=function(t){var e=t.product,s=c===e,o=s?"has-background-success-light":"is-vcentered";return Object(a.jsxs)("tr",{"data-cy":"Good",className:o,children:[Object(a.jsx)("td",{children:s?Object(a.jsx)(u,{}):Object(a.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return n(e)},children:"+"})}),Object(a.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]})},l=c?"".concat(c," is selected"):"No goods selected";return Object(a.jsxs)("main",{className:"section container",children:[Object(a.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[l,c&&Object(a.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return n("")}})]}),Object(a.jsx)(s,{products:i})]})};s.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6c2bd097.chunk.js.map