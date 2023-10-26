import{_ as u,r as m,g as p,A as l,h,P as f,y as g,S as y,c as o,a as e,l as v,m as b,b as w,o as s,n as k,p as S,d as B,s as x}from"./index.2d67bbdc.js";const C={setup(){const d=m({});p(()=>{i()});async function i(){if(l.accountBookshelves){let n=l.accountBookshelves.find(t=>t.type=="wishlist");l.activeBookShelf=n}}return{editable:d,account:h(()=>l.account),filtered:h(()=>{var n;return(n=l.accountShelvedBooks)==null?void 0:n.filter(t=>{var r;return t.bookShelfId==((r=l.activeBookShelf)==null?void 0:r.id)})}),bookShelves:h(()=>l.accountShelvedBooks),books:h(()=>l.books.filter(n=>n.averageRating>=5).sort(()=>Math.random-.5).splice([0],[16])),setActiveShelf(n){let t=l.accountBookshelves.find(r=>r.type==n);l.activeBookShelf=t},async removeFromBookShelf(n){try{await f.confirm()&&await g.removeFromBookShelf(n)}catch(t){f.error(t,"[removeFromBookShelf]")}}}},components:{BookCard:y}},_=d=>(S("data-v-4c6d4be3"),d=d(),B(),d),A={class:"container"},F={key:0,class:"row my-5"},I=_(()=>e("div",{class:"col-md-12"},[e("div",{class:"card elevation-5 border-0 p-4"},[e("p",{class:"fs-1 fw-bold"},"You Haven't Added any Books to this list Yet break ")])],-1)),L={class:"row scrollX flex-nowrap mt-5"},P={class:"row mt-3"},M=_(()=>e("div",{class:"col-md-12 mb-3"},[e("div",{class:"d-flex justify-content-between"},[e("h1",{class:"text-dark abril display-3"},"My Book Lists")])],-1)),N={class:"col-md-12"},R={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},V={class:"tab-content",id:"nav-tabContent"},W={class:"tab-pane fade show active",id:"nav-wishlist",role:"tabpanel","aria-labelledby":"nav-wishlist-tab",tabindex:"0"},Y={class:"row mt-3"},j=["onClick"],D={class:"tab-pane fade",id:"nav-owned",role:"tabpanel","aria-labelledby":"nav-owned-tab",tabindex:"0"},E={class:"row mt-3"},H={class:"tab-pane fade",id:"nav-reading",role:"tabpanel","aria-labelledby":"nav-reading-tab",tabindex:"0"},X={class:"row mt-3"},q={class:"tab-pane fade",id:"nav-finished",role:"tabpanel","aria-labelledby":"nav-finished-tab",tabindex:"0"},z={class:"row mt-3"};function G(d,i,n,t,r,J){const c=x("BookCard");return s(),o("div",A,[t.filtered.length<=0?(s(),o("div",F,[I,e("div",L,[(s(!0),o(v,null,b(t.books,a=>(s(),o("div",{class:"col-md-2",key:a.id},[k(c,{book:a},null,8,["book"])]))),128))])])):w("",!0),e("div",P,[M,e("div",N,[e("nav",null,[e("div",R,[e("button",{class:"nav-link active text-dark",id:"nav-wishlist-tab","data-bs-toggle":"tab","data-bs-target":"#nav-wishlist",type:"button",role:"tab","aria-controls":"nav-wishlist","aria-selected":"true",onClick:i[0]||(i[0]=a=>t.setActiveShelf("wishlist"))}," Wishlist "),e("button",{class:"nav-link text-dark",id:"nav-owned-tab","data-bs-toggle":"tab","data-bs-target":"#nav-owned",type:"button",role:"tab","aria-controls":"nav-owned","aria-selected":"false",onClick:i[1]||(i[1]=a=>t.setActiveShelf("favorite"))}," Favorites "),e("button",{class:"nav-link text-dark",id:"nav-reading-tab","data-bs-toggle":"tab","data-bs-target":"#nav-reading",type:"button",role:"tab","aria-controls":"nav-reading","aria-selected":"false",onClick:i[2]||(i[2]=a=>t.setActiveShelf("reading"))}," Reading "),e("button",{class:"nav-link text-dark",id:"nav-finished-tab","data-bs-toggle":"tab","data-bs-target":"#nav-finished",type:"button",role:"tab","aria-controls":"nav-finished","aria-selected":"false",onClick:i[3]||(i[3]=a=>t.setActiveShelf("finished"))}," Finished ")])]),e("div",V,[e("div",W,[e("div",Y,[(s(!0),o(v,null,b(t.filtered,a=>(s(),o("div",{class:"col-md-2",key:a.id},[k(c,{book:a},null,8,["book"]),e("div",null,[e("button",{onClick:K=>t.removeFromBookShelf(a.shelvedId),class:"fs-6 link text-danger btn p-0"}," Remove ",8,j)])]))),128))])]),e("div",D,[e("div",E,[(s(!0),o(v,null,b(t.filtered,a=>(s(),o("div",{class:"col-md-2",key:a.id},[k(c,{book:a},null,8,["book"])]))),128))])]),e("div",H,[e("div",X,[(s(!0),o(v,null,b(t.filtered,a=>(s(),o("div",{class:"col-md-2",key:a.id},[k(c,{book:a},null,8,["book"])]))),128))])]),e("div",q,[e("div",z,[(s(!0),o(v,null,b(t.filtered,a=>(s(),o("div",{class:"col-md-2",key:a.id},[k(c,{book:a},null,8,["book"])]))),128))])])])])])])}const Q=u(C,[["render",G],["__scopeId","data-v-4c6d4be3"]]);export{Q as default};
