(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f86c6ad"],{"5d14":function(e,t,a){"use strict";a("eb0b")},e9c0:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));class i{getProductsSmall(){return fetch("data/products-small.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall2(){return fetch("data/products-small2.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall3(){return fetch("data/products-small3.json").then(e=>e.json()).then(e=>e.data)}getProductsSmall4(){return fetch("data/products-small4.json").then(e=>e.json()).then(e=>e.data)}getGalleria(){return fetch("data/galleria.json").then(e=>e.json()).then(e=>e.data)}getCars(){return fetch("data/cars.json").then(e=>e.json()).then(e=>e.data)}getGuide(){return fetch("data/guide.json").then(e=>e.json()).then(e=>e.data)}getWelcome(){return fetch("data/welcome.json").then(e=>e.json()).then(e=>e.data)}getProductsWithOrdersSmall(){return fetch("data/products-orders-small.json").then(e=>e.json()).then(e=>e.data)}}},eb0b:function(e,t,a){},f908:function(e,t,a){"use strict";a.r(t);var i=a("7a23");const s=e=>(Object(i["C"])("data-v-69680bd6"),e=e(),Object(i["A"])(),e),c={class:"grid p-fluid"},l={class:"col-12"},n={class:"card"},o=s(()=>Object(i["j"])("h2",{style:{"text-align":"center"}},"Guide for Travel",-1)),r={class:"product-item"},d={class:"product-item-content"},u={class:"mb-3"},b=["src","alt"],j={class:"mb-1"},p={class:"mt-0 mb-2"},h={class:"mt-0 mb-1"},m={class:"col-12"},O={class:"col-12"},g={class:"col-12"},v=["src","alt"],y=["src","alt"],f={class:"line-height-3 m-0"},w={class:"line-height-3 m-0"},S={class:"line-height-3 m-0"};function R(e,t,a,s,R,x){const C=Object(i["H"])("Button"),k=Object(i["H"])("Carousel"),_=Object(i["H"])("Column"),P=Object(i["H"])("DataTable"),D=Object(i["H"])("Dialog"),L=Object(i["H"])("Galleria"),G=Object(i["H"])("TabPanel"),H=Object(i["H"])("TabView");return Object(i["z"])(),Object(i["i"])("div",c,[Object(i["j"])("div",l,[Object(i["j"])("div",n,[o,Object(i["n"])(k,{value:R.products,numVisible:3,numScroll:3,circular:!1,responsiveOptions:R.carouselResponsiveOptions},{item:Object(i["R"])(e=>[Object(i["j"])("div",r,[Object(i["j"])("div",d,[Object(i["j"])("div",u,[Object(i["j"])("img",{src:"images/gits/"+e.data.image,alt:e.data.name,style:{width:"50%"},class:"product-image"},null,8,b)]),Object(i["j"])("div",null,[Object(i["j"])("h4",j,Object(i["L"])(e.data.name),1),Object(i["j"])("h5",p," $"+Object(i["L"])(e.data.price),1),Object(i["j"])("h5",h,Object(i["L"])(e.data.description),1)]),Object(i["j"])("div",null,[Object(i["j"])("div",m,[Object(i["n"])(C,{type:"button",label:"Price for experience and excursion",onClick:t=>x.toggleDataTable(e.data.id),class:"p-button-success"},null,8,["onClick"])]),Object(i["j"])("div",O,[Object(i["n"])(C,{type:"button",label:"Galleria",onClick:t=>x.toggleGalleria(e.data.id),class:"p-button-success"},null,8,["onClick"])]),Object(i["j"])("div",g,[Object(i["n"])(C,{type:"button",label:"Data",onClick:t=>x.toggleData(e.data.id),class:"p-button-success"},null,8,["onClick"])])])])])]),_:1},8,["value","responsiveOptions"]),Object(i["n"])(D,{header:"Cars",visible:R.display2,"onUpdate:visible":t[1]||(t[1]=e=>R.display2=e),breakpoints:{"960px":"100vw"},style:{width:"50vw"},modal:!0},{default:Object(i["R"])(()=>[Object(i["n"])(P,{value:R.guide,selection:e.selectedProduct,"onUpdate:selection":t[0]||(t[0]=t=>e.selectedProduct=t),selectionMode:"single",paginator:!0,rows:5,onRowSelect:x.onProductSelect,responsiveLayout:"scroll"},{default:Object(i["R"])(()=>[Object(i["n"])(_,{field:"name",header:"Excursion",sortable:!0,headerStyle:"min-width:10rem;"},{body:Object(i["R"])(e=>[Object(i["m"])(Object(i["L"])(e.data.excursion),1)]),_:1}),Object(i["n"])(_,{field:"name",header:"Experience",sortable:!0,headerStyle:"min-width:10rem;"},{body:Object(i["R"])(e=>[Object(i["m"])(Object(i["L"])(e.data.experience),1)]),_:1}),Object(i["n"])(_,{field:"price",header:"Price",sortable:!0,headerStyle:"min-width:8rem;"},{body:Object(i["R"])(e=>[Object(i["m"])(" $"+Object(i["L"])(e.data.price),1)]),_:1})]),_:1},8,["value","selection","onRowSelect"])]),_:1},8,["visible"]),Object(i["n"])(D,{header:"Galleria",visible:R.display3,"onUpdate:visible":t[2]||(t[2]=e=>R.display3=e),breakpoints:{"960px":"100vw"},style:{width:"50vw"},modal:!0},{default:Object(i["R"])(()=>[Object(i["n"])(L,{value:R.galleria,responsiveOptions:e.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 960px",showItemNavigators:!0,showThumbnails:!1},{item:Object(i["R"])(e=>[Object(i["j"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,v)]),thumbnail:Object(i["R"])(e=>[Object(i["j"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,y)]),_:1},8,["value","responsiveOptions"])]),_:1},8,["visible"]),Object(i["n"])(D,{header:"Data",visible:R.display4,"onUpdate:visible":t[3]||(t[3]=e=>R.display4=e),breakpoints:{"960px":"100vw"},style:{width:"50vw"},modal:!0},{default:Object(i["R"])(()=>[Object(i["n"])(H,{value:e.text,style:{"text-align":"justify"}},{default:Object(i["R"])(()=>[Object(i["n"])(G,{header:"Duration"},{default:Object(i["R"])(()=>[Object(i["j"])("p",f,Object(i["L"])(e.product.description1),1)]),_:1}),Object(i["n"])(G,{header:"Driving time"},{default:Object(i["R"])(()=>[Object(i["j"])("p",w,Object(i["L"])(e.product.description2),1)]),_:1}),Object(i["n"])(G,{header:"Distance"},{default:Object(i["R"])(()=>[Object(i["j"])("p",S,Object(i["L"])(e.product.description3),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["visible"])])])])}var x=a("e9c0"),C={data(){return{display:!1,display2:!1,display3:!1,display4:!1,displayConfirmation:!1,products:[],guide:[],galleria:[],carouselResponsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]}},created(){this.productService=new x["a"]},mounted(){this.productService.getGuide().then(e=>{this.products=e})},methods:{open(){this.display=!0},close(){this.display=!1},openConfirmation(){this.displayConfirmation=!0},closeConfirmation(){this.displayConfirmation=!1},toggle(e){this.$refs.op.toggle(e)},toggleDataTable(e){this.guide=this.products[e-1].guide,this.display2=!0},toggleGalleria(e){this.galleria=this.products[e-1].galleria,console.log(this.galleria),this.display3=!0},toggleData(e){this.product=this.products[e-1],console.log(this.product),this.display4=!0},formatCurrency(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},onProductSelect(e){this.$refs.op.hide(),this.$toast.add({severity:"info",summary:"Product Selected",detail:e.data.name,life:3e3})},confirm(e){this.$confirm.require({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},k=(a("5d14"),a("6b0d")),_=a.n(k);const P=_()(C,[["render",R],["__scopeId","data-v-69680bd6"]]);t["default"]=P}}]);
//# sourceMappingURL=chunk-0f86c6ad.4a38486c.js.map