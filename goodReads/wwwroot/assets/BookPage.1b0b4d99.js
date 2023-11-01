import{_ as p,r as w,g as y,w as B,h as d,A as a,v as W,P as b,x as z,y as O,L as E,o as t,c as s,t as r,a as e,z as T,l as u,m as g,b as f,p as N,d as j,B as $,C as P,S as Q,e as v,n as D,s as L}from"./index.a945708b.js";import{R as U}from"./ReviewCard.27a9c0f4.js";const F={props:{},setup(i){const n=w({});return y(()=>{}),B(()=>{}),{editable:n,book:d(()=>a.activeBook),async createReview(){try{n.bookId=a.activeBook.bookId,await W.createReview(n.value)}catch(c){b.error(c,"[createReview]")}}}}};function M(i,n,c,o,l,S){return null}const q=p(F,[["render",M]]);const G={props:{},setup(i){const n=w({});y(()=>{}),B(()=>{});const c=z();return{editable:n,book:d(()=>a.activeBook),bookShelves:d(()=>a.accountBookshelves),shelf:d(()=>a.activeBookShelf),user:d(()=>a.user),copyToClipBoard(){navigator.clipboard.writeText(c.fullPath),b.toast("Copied To ClipBoard")},async makeActiveShelf(o){a.activeBookShelf=o},async addToBookShelf(o){try{if(a.activeBookShelf.hasActiveBook){b.toast("already apart of this list");return}let l={bookId:a.activeBook.id,bookShelfId:a.activeBookShelf.id};await O.addToBookShelf(l,o),b.success(`${a.activeBook.title} added to your ${a.activeBookShelf.type} shelf`)}catch(l){b.error(l,"[addToBookShelf]")}}}},components:{Login:E}},m=i=>(N("data-v-29b5a297"),i=i(),j(),i),H={class:"card p-2 elevation-4 border-0"},J={key:0,class:"ms-3 text-danger text-decoration-underline fw-bold"},K={key:1},X=m(()=>e("p",{class:"ms-3"},"Available for a limited time",-1)),Y={class:"card-body d-flex flex-column justify-content-center"},Z={key:0,class:"mb-3"},ee=m(()=>e("label",{for:"",class:"form-label"},"Add to BookShelf",-1)),oe={class:"dropdown open"},te={class:"btn btn-outline-dark dropdown-toggle",type:"button",id:"triggerId","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},se=["disabled"],ae={key:1},ie={class:"dropdown-menu","aria-labelledby":"triggerId"},ne={class:"dropdown-item btn selectable"},re=["onClick"],ce={key:2,class:"mt-4"},le={key:0,class:"btn btn-outline-dark mt-2","data-bs-toggle":"modal","data-bs-target":"#createReview"},de={class:"mt-3"},he=m(()=>e("small",null,"Share with your network :",-1)),_e={class:"d-flex gap-2 justify-content-center mt-2"},ke=m(()=>e("a",{target:"_blank",OnClick:"window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;",href:"https://www.twitter.com"},[e("img",{src:"/src\\assets\\img\\ShareIcons\\twitter.png",alt:"",width:"30"})],-1)),be=m(()=>e("a",{href:"mailto:"},[e("img",{src:"/src\\assets\\img\\ShareIcons\\email.png",alt:"",width:"30"})],-1)),me=m(()=>e("a",{target:"_blank",OnClick:"window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;",href:"https://www.facebook.com"},[e("img",{src:"/src\\assets\\img\\ShareIcons\\facebook.png",alt:"",width:"30"})],-1)),ve=m(()=>e("a",{target:"_blank",OnClick:"window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;",href:"http://pinterest.com"},[e("img",{src:"/src\\assets\\img\\ShareIcons\\pinterest.png",alt:"",width:"30"})],-1));function ue(i,n,c,o,l,S){return t(),s("div",H,[o.book.saleAbility=="Unavailable"?(t(),s("h3",J,r(o.book.saleAbility),1)):(t(),s("h3",K,r(o.book.saleAbility),1)),X,e("div",Y,[e("div",null,[o.user.isAuthenticated?(t(),s("div",Z,[ee,e("div",oe,[e("button",te,[o.shelf?(t(),s("span",{key:0,class:T(o.shelf.hasActiveBook?"text-warning noSelect":"text-primary"),type:"button",disabled:o.shelf.hasActiveBook},r(o.shelf.type),11,se)):(t(),s("span",ae,r("pick a shelf")))]),e("div",ie,[(t(!0),s(u,null,g(o.bookShelves,k=>(t(),s("button",ne,[e("span",{class:T(k.hasActiveBook?"text-warning noSelect":"text-primary"),onClick:x=>o.makeActiveShelf(k)},r(k.type),11,re)]))),256))])])])):f("",!0),o.user.isAuthenticated?(t(),s("button",{key:1,class:"btn btn-outline-dark",type:"button",onClick:n[0]||(n[0]=k=>o.addToBookShelf(o.book))}," Save To BookShelf ")):(t(),s("div",ce,"Sign in to Create a bookshelf and bookmark this book, AND create a recommendation!"))]),o.user.isAuthenticated?(t(),s("button",le," Review ")):f("",!0),e("div",de,[he,e("div",_e,[ke,be,e("img",{class:"link",src:"/src\\assets\\img\\ShareIcons\\link.png",alt:"",width:"30",onClick:n[1]||(n[1]=k=>o.copyToClipBoard())}),me,ve])])])])}const ge=p(G,[["render",ue],["__scopeId","data-v-29b5a297"]]);const fe={setup(){y(()=>{i()}),B(()=>{a.activeBook||P.push("/")});async function i(){try{await $.getBookReviews(c.params.id)}catch(o){b.error(o,"[getBookReviews]")}}const n=w({}),c=z();return{editable:n,route:c,book:d(()=>a.activeBook),extraDetails:d(()=>a.extraDetails),bookShelves:d(()=>a.accountBookshelves),reviews:d(()=>a.reviews),async addToBookShelf(){},async searchByCategory(o){try{P.push("/search"),a.categoryQuery=o,await $.searchByCategory(a.categoryQuery)}catch(l){console.error("[searchByCategory]",l),b.error(l)}}}},components:{BookCard:Q,CreateReview:q,ReviewCard:U,AddToBookShelf:ge}},_=i=>(N("data-v-c3f133e1"),i=i(),j(),i),pe={key:0,class:"container mt-4"},we={class:"row bookRow"},ye={class:"col-md-3 text-center animate__animated animate__fadeInLeft"},Be=["src"],Se=["src"],xe={class:"mt-2"},Ce=["href"],Ie=_(()=>e("i",{class:"mdi mdi-book fs-5"},null,-1)),Ae=v(" Read Preview"),Re=[Ie,Ae],Te={class:""},$e=["src"],Pe={class:"col-md-6 animate__animated animate__fadeInUp"},De={class:"bookTitle elevation-5 bg-create p-2 px-3"},Le={class:"d-flex"},ze=["onClick","title"],Ne=_(()=>e("div",{class:"border-bottom border-2 my-3 border-muted"},null,-1)),je={class:"lead text-dark"},Ve={class:"text-dark"},We=_(()=>e("i",{class:"mdi mdi-calendar fs-4"},null,-1)),Oe=v(),Ee=_(()=>e("b",null," Release Date -",-1)),Qe={class:""},Ue={class:"d-flex align-items-center"},Fe=_(()=>e("b",{class:"me-2 mb-3 mt-3"},"Categories -",-1)),Me=["onClick"],qe=_(()=>e("b",null,"Language -",-1)),Ge=_(()=>e("b",null," Page Count -",-1)),He={class:"col-md-3 animate__animated animate__fadeInRight"},Je={class:"",id:"reviews"},Ke={class:"row"},Xe=_(()=>e("div",{class:"col-md-12 d-flex justify-content-between my-3"},[e("h3",{class:"text-dark"},"Community Reviews"),e("button",{"data-bs-toggle":"modal","data-bs-target":"#createReview",class:"btn bg-create text-dark fw-bold d-flex align-items-center justify-content-center"},[e("i",{class:"mdi mdi-comment fs-4 text-dark me-2"}),v(" Write a Review ")])],-1));function Ye(i,n,c,o,l,S){var C,I,A,R;const k=L("AddToBookShelf"),x=L("ReviewCard");return o.book?(t(),s("div",pe,[e("div",we,[e("div",ye,[(C=o.book)!=null&&C.largeImg?(t(),s("img",{key:0,src:(I=o.book)==null?void 0:I.largeImg,alt:"",class:"img-fluid rounded elevation-5",width:"400",height:"600"},null,8,Be)):(t(),s("img",{key:1,src:(A=o.book)==null?void 0:A.img,alt:"",class:"img-fluid rounded elevation-5",width:"400",height:"600"},null,8,Se)),e("div",xe,[e("a",{href:o.book.previewLink,target:"_blank",class:"text-danger previewText"},Re,8,Ce)]),e("div",Te,[o.book?(t(),s("img",{key:0,src:(R=o.book)==null?void 0:R.img,alt:"",class:"img-fluid smallerImg rounded elevation-5 mt-5",width:"100",height:"200"},null,8,$e)):f("",!0)])]),e("div",Pe,[e("h1",De,r(o.book.title),1),e("div",Le,[(t(!0),s(u,null,g(o.book.authors,h=>(t(),s("b",{class:"authors mx-2 text-dark selectable p-1 rounded",onClick:V=>o.searchByCategory(h),title:o.book.authors},r(h),9,ze))),256))]),Ne,e("div",null,[e("p",je,r(o.book.description),1)]),e("div",Ve,[e("p",null,[We,Oe,Ee,v(" "+r(new Date(o.book.publishedDate).toLocaleDateString()),1)]),e("b",Qe,"Publisher - "+r(o.book.publisher),1),e("div",Ue,[Fe,(t(!0),s(u,null,g(o.book.categories,h=>(t(),s("button",{class:"btn btn-outline-dark my-3 text-dark p-1 rounded-pill px-2 mx-2",onClick:V=>o.searchByCategory(h)},r(h),9,Me))),256))]),e("p",null,[qe,v(" "+r(o.book.language),1)]),e("p",null,[Ge,v(" "+r(o.book.pageCount),1)])])]),e("div",He,[D(k)])]),e("section",Je,[e("div",Ke,[Xe,(t(!0),s(u,null,g(o.reviews,h=>(t(),s("div",{class:"col-md-12",key:h.id},[D(x,{review:h},null,8,["review"])]))),128))])])])):f("",!0)}const oo=p(fe,[["render",Ye],["__scopeId","data-v-c3f133e1"]]);export{oo as default};
