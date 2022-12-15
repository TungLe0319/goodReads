import{I as f,A as l,_ as B,g as S,P as x,r as w,h as _,G as C,J as q,K as L,L as T,M as F,S as I,c as e,a as o,e as M,t as y,n as r,q as Q,T as A,l as h,m as k,o as a,p as N,d as X,s as m}from"./index.b744b949.js";class H{constructor(c){this._id=c._id,this.content=c.content,this.author=c.author,this.tags=c.tags,this.authorSlug=c.authorSlug}}class P{async getQuote(){const c=await f.get("api/quotes",{params:{author:"Aldous Huxley"}});l.quote=new H(c.data)}}const j=new P;const E={setup(){S(()=>{d()});async function d(){try{await j.getQuote()}catch(t){x.error(t,"[getBooks]")}}let c=w({});return{editable:c,quote:_(()=>l.quote),books:_(()=>l.books.slice([0],[16])),cookingBooks:_(()=>l.books.filter(t=>t.categories.includes("Cooking")).slice([0],[24]).sort(()=>Math.random-.5)),scienceBooks:_(()=>l.books.filter(t=>t.categories.includes("Science")).slice([0],[24]).sort(()=>Math.random-.5)),fictionBooks:_(()=>l.books.filter(t=>t.categories.includes("Fiction")).slice([0],[24]).sort(()=>Math.random-.5)),natureBooks:_(()=>l.books.filter(t=>t.categories.includes("Nature")).slice([0],[24]).sort(()=>Math.random-.5)),historyBooks:_(()=>l.books.filter(t=>t.categories.includes("History")).slice([0],[24]).sort(()=>Math.random-.5)),bestSellers:_(()=>l.books.filter(t=>t.averageRating>=5).slice([0],[24]).sort(()=>Math.random-.5)),async searchByQuery(){try{await C.searchByQuery(c.value.term)}catch(t){q.error(t)}}}},components:{EasyStepsCard:L,LeaveFeedBackCard:T,SQLBook:F,BookCard:I}},i=d=>(N("data-v-94b1019d"),d=d(),X(),d),G={key:0,class:"container p-5"},V={class:"row mb-5"},Y={class:"col-md-12"},D={class:"card elevation-5 border-0"},O=i(()=>o("img",{src:"https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg",alt:"",class:"bannerImg"},null,-1)),J={class:"card-img-overlay align-items-center d-flex justify-content-center flex-column justify-content-evenly"},K=i(()=>o("div",{class:"text-constantLight text-decoration-underline 4border-bottom border-3"},[o("h1",{class:"text-shadow abril"},"Find Your Book, Find Your Why")],-1)),R={class:"text-shadow px-5"},W={class:"blockquote text-constantLight"},z=i(()=>o("i",{class:"mdi mdi-format-quote-open"},null,-1)),U=i(()=>o("i",{class:"mdi mdi-format-quote-close"},null,-1)),Z={class:"blockquote-footer text-constantLight"},$={class:"row"},oo={class:"col-md-8"},so={class:"row"},to={class:"col-md-4"},eo={class:"row g-3"},ao={class:"mt-4"},co=i(()=>o("h2",{class:"categoryTitle text-dark"},"Cooking",-1)),io={class:"row scrollX"},no={class:"mt-4"},ro=i(()=>o("h2",{class:"categoryTitle text-dark"},"Science",-1)),lo={class:"row scrollX"},_o={class:"mt-4"},uo=i(()=>o("h2",{class:"categoryTitle text-dark"},"Fiction",-1)),ho={class:"row scrollX"},ko={class:"mt-4"},mo=i(()=>o("h2",{class:"categoryTitle text-dark"},"Nature",-1)),go={class:"row scrollX"},vo={class:"mt-4"},yo=i(()=>o("h2",{class:"categoryTitle text-dark"},"History",-1)),bo={class:"row scrollX"},po=i(()=>o("h2",{class:"categoryTitle text-dark"},"Best Sellers",-1)),fo={class:"row scrollX"},Bo={key:1,class:""},So=i(()=>o("h1",null,"LOADING",-1)),xo=[So];function wo(d,c,t,n,Co,qo){var g,v;const u=m("BookCard"),b=m("EasyStepsCard"),p=m("LeaveFeedBackCard");return n.books?(a(),e("div",G,[o("div",V,[o("div",Y,[o("div",D,[O,o("div",J,[K,o("figure",R,[o("blockquote",W,[o("p",null,[z,M(" "+y((g=n.quote)==null?void 0:g.content)+" ",1),U])]),o("figcaption",Z,y((v=n.quote)==null?void 0:v.author),1)])])])])]),o("div",$,[o("div",oo,[o("div",so,[r(A,{name:"",enterActiveClass:"animate__fadeIn animate__animated",leaveActiveClass:"animate__fadeOut animate__animated"},{default:Q(()=>[(a(!0),e(h,null,k(n.books,s=>(a(),e("div",{class:"col-md-3 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))]),_:1})])]),o("div",to,[o("div",eo,[r(b),r(p)])])]),o("section",null,[o("div",ao,[co,o("div",io,[(a(!0),e(h,null,k(n.cookingBooks,s=>(a(),e("div",{class:"col-md-2 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))])]),o("div",no,[ro,o("div",lo,[(a(!0),e(h,null,k(n.scienceBooks,s=>(a(),e("div",{class:"col-md-2 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))])]),o("div",_o,[uo,o("div",ho,[(a(!0),e(h,null,k(n.fictionBooks,s=>(a(),e("div",{class:"col-md-2 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))])]),o("div",ko,[mo,o("div",go,[(a(!0),e(h,null,k(n.natureBooks,s=>(a(),e("div",{class:"col-md-2 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))])]),o("div",vo,[yo,o("div",bo,[(a(!0),e(h,null,k(n.historyBooks,s=>(a(),e("div",{class:"col-md-2 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))])])]),o("section",null,[po,o("div",fo,[(a(!0),e(h,null,k(n.bestSellers,s=>(a(),e("div",{class:"col-md-2 gy-3",key:s.id},[r(u,{book:s},null,8,["book"])]))),128))])])])):(a(),e("div",Bo,xo))}const To=B(E,[["render",wo],["__scopeId","data-v-94b1019d"]]);export{To as default};
