(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/KingWear-KW06.ea8e2093.jpg"},25:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(30),a(32),a(59)),i=a(60),m=a(61),u=function(e){return l.a.createElement("div",null,"Route did not match",l.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Go Home"))},s=a(58),d=l.a.createContext(null),p=function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(s.a,{to:"/"},"Home")," |\xa0",l.a.createElement(s.a,{to:"/products"},"Products")," |\xa0",l.a.createElement(s.a,{to:"/products/".concat(1)},"Product by no")," |\xa0",l.a.createElement(s.a,{to:"/admin/products/new"},"Enter new product")," |\xa0",l.a.createElement(s.a,{to:"/admin/products/".concat(1)},"Edit product")," |\xa0",l.a.createElement(s.a,{to:"/help"},"help")," |\xa0",l.a.createElement(s.a,{to:"/non-existant"},"Non Existant")," |\xa0",l.a.createElement(d.Consumer,null,function(e){return l.a.createElement("span",null,e)})),e.children)},h=a(6),f=a(7),E=a(12),g=a(8),v=a(13),b=a(22),y=a.n(b),C=function(e){return l.a.createElement("div",{className:"card",style:{width:"18rem"}},l.a.createElement("img",{className:"card-img-top",src:y.a,alt:"Smartwatch"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.description),l.a.createElement("p",{className:"card-text"},"Price: ",e.price," Euro"),l.a.createElement("p",{className:"card-text"},"Quantity: ",e.quantity," pcs."),l.a.createElement("a",{href:"#",className:"btn btn-primary"},"Product details")))},O=a(9),N=a.n(O),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).state={products:"",loading:"Loading products. Please wait..."},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://itpro2017.herokuapp.com/api/products").then(function(t){e.setState({products:t.data}),console.log(t.data),console.log("Produktai yra - "+e.state.products)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){if(this.state.products){var e=this.state.products.map(function(e,t){return l.a.createElement(C,{key:t,id:e.id,title:e.title,image:e.image,description:e.description,price:e.price,quantity:e.quantity})});return l.a.createElement("div",{className:"row"},e)}return this.state.loading}}]),t}(l.a.Component),D=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-12 mb-12"},l.a.createElement("p",null,e.fromMenu))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{htmlFor:"validationDefault01"},"Product title"),l.a.createElement("input",{type:"text",className:"form-control",id:"validationDefault01",placeholder:"Product title",required:!0,onChange:e.handleChangeOfTitle})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{htmlFor:"validationDefault02"},"Image URL"),l.a.createElement("input",{type:"text",className:"form-control",id:"validationDefault02",placeholder:"Image URL",required:!0,onChange:e.handleChangeOfImageUrl}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("label",{htmlFor:"validationDefault03"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"validationDefault03",placeholder:"Description",required:!0,onChange:e.handleChangeOfDescription}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{htmlFor:"validationDefault04"},"Price"),l.a.createElement("input",{type:"text",className:"form-control",id:"validationDefault01",placeholder:"Price",required:!0,onChange:e.handleChangeOfPrice})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{htmlFor:"validationDefault05"},"Quantity"),l.a.createElement("input",{type:"text",className:"form-control",id:"validationDefault02",placeholder:"Quantity",required:!0,onChange:e.handleChangeOfQuantity}))),l.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:e.handleSubmit},"Save"))},w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).handleChangeOfTitle=function(e){a.setState({title:e.target.value})},a.handleChangeOfImageUrl=function(e){a.setState({image:e.target.value})},a.handleChangeOfDescription=function(e){a.setState({description:e.target.value})},a.handleChangeOfPrice=function(e){a.setState({price:e.target.value})},a.handleChangeOfQuantity=function(e){a.setState({quantity:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),N.a.post("https://itpro2017.herokuapp.com/api/products",a.state).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.state={description:"",id:"",image:"",price:0,quantity:0,title:""},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){if("/admin/products/new"===this.props.history.location.pathname)this.fromMenu="Kuriamas naujas produktas";else{var e=this.props.history.location.pathname.split("/");if("admin"===e[1]&&"products"===e[2]){var t=e[e.length-1];this.fromMenu="Atnaujinamas produktas id: "+t}}return l.a.createElement(D,{handleChangeOfTitle:this.handleChangeOfTitle,handleChangeOfImageUrl:this.handleChangeOfImageUrl,handleChangeOfDescription:this.handleChangeOfDescription,handleChangeOfPrice:this.handleChangeOfPrice,handleChangeOfQuantity:this.handleChangeOfQuantity,handleSubmit:this.handleSubmit,fromMenu:this.fromMenu})}}]),t}(l.a.Component),k=function(e){return l.a.createElement("div",null,"At route: ",e.location.pathname,l.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Go Home"),l.a.createElement("pre",null,JSON.stringify(e,null,1)))};c.a.render(l.a.createElement(m.a,null,l.a.createElement(d.Provider,{value:"User: Jonas"},l.a.createElement(p,null,l.a.createElement(o.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:x}),l.a.createElement(i.a,{exact:!0,path:"/products/:id",component:k}),l.a.createElement(i.a,{exact:!0,path:"/products",component:x}),l.a.createElement(i.a,{exact:!0,path:"/admin/products/:id",component:w}),l.a.createElement(i.a,{exact:!0,path:"/admin/products/new",component:w}),l.a.createElement(i.a,{exact:!0,path:"/help",component:k}),l.a.createElement(i.a,{path:"*",component:u}),l.a.createElement(i.a,{component:u}))))),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.875c7864.chunk.js.map