(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ceaa4be8"],{"7ce6":function(t,e,a){"use strict";a("a671")},a671:function(t,e,a){},baed:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const s=t=>(Object(n["B"])("data-v-9a96bb22"),t=t(),Object(n["z"])(),t),c={class:"grid p-fluid"},r={class:"col-12"},o={class:"card"},i=s(()=>Object(n["j"])("h5",null,"Galleria",-1)),l=["src","alt"];function u(t,e,a,s,u,d){const h=Object(n["G"])("Galleria",!0);return Object(n["y"])(),Object(n["i"])("div",c,[Object(n["j"])("div",r,[Object(n["j"])("div",o,[i,Object(n["m"])(h,{value:u.images,responsiveOptions:u.galleriaResponsiveOptions,numVisible:7,circular:!0,containerStyle:"max-width: 800px; margin: auto"},{item:Object(n["Q"])(t=>[Object(n["j"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,l)]),_:1},8,["value","responsiveOptions"])])])])}var d=a("e9c0"),h=a("cc2b"),p={data(){return{products:[],images:[],galleriaResponsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],carouselResponsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]}},created(){this.productService=new d["a"],this.photoService=new h["a"]},mounted(){this.productService.getProductsSmall().then(t=>{this.products=t}),this.photoService.getImages().then(t=>{this.images=t})}},m=(a("7ce6"),a("6b0d")),b=a.n(m);const j=b()(p,[["render",u],["__scopeId","data-v-9a96bb22"]]);e["default"]=j},cc2b:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{getImages(){return fetch("data/photos.json").then(t=>t.json()).then(t=>t.data)}}},e9c0:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{getProductsSmall(){return fetch("data/products-small.json").then(t=>t.json()).then(t=>t.data)}getProductsSmall2(){return fetch("data/products-small2.json").then(t=>t.json()).then(t=>t.data)}getProductsSmall3(){return fetch("data/products-small3.json").then(t=>t.json()).then(t=>t.data)}getProductsSmall4(){return fetch("data/products-small4.json").then(t=>t.json()).then(t=>t.data)}getProductsSmall5(){return fetch("data/products-small5.json").then(t=>t.json()).then(t=>t.data)}getCars(){return fetch("data/cars.json").then(t=>t.json()).then(t=>t.data)}getGuide(){return fetch("data/guide.json").then(t=>t.json()).then(t=>t.data)}getWelcome(){return fetch("data/welcome.json").then(t=>t.json()).then(t=>t.data)}getProductsWithOrdersSmall(){return fetch("data/products-orders-small.json").then(t=>t.json()).then(t=>t.data)}}}}]);
//# sourceMappingURL=chunk-ceaa4be8.f2e0567c.js.map