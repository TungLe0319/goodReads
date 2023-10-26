import{G as X,$ as F,_ as R,g as Y,r as Q,h as I,B as V,H as U,I as W,L as J,J as K,S as Z,K as w,M as aa,N as ta,O as la,c as C,a as c,n as _,q as ea,T as na,l as O,m as q,A,i as sa,o as b,p as oa,d as ia,s as z}from"./index.4ef991fb.js";function j(a,f,g,r){const m=X();return a.params.createElements&&Object.keys(r).forEach(h=>{if(!g[h]&&g.auto===!0){let i=a.$el.children(`.${r[h]}`)[0];i||(i=m.createElement("div"),i.className=r[h],a.$el.append(i)),g[h]=i,f[h]=i}}),g}function da({swiper:a,extendParams:f,on:g,emit:r}){f({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function m(e){let n;return e&&(n=F(e),a.params.uniqueNavElements&&typeof e=="string"&&n.length>1&&a.$el.find(e).length===1&&(n=a.$el.find(e))),n}function h(e,n){const t=a.params.navigation;e&&e.length>0&&(e[n?"addClass":"removeClass"](t.disabledClass),e[0]&&e[0].tagName==="BUTTON"&&(e[0].disabled=n),a.params.watchOverflow&&a.enabled&&e[a.isLocked?"addClass":"removeClass"](t.lockClass))}function i(){if(a.params.loop)return;const{$nextEl:e,$prevEl:n}=a.navigation;h(n,a.isBeginning&&!a.params.rewind),h(e,a.isEnd&&!a.params.rewind)}function S(e){e.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),r("navigationPrev"))}function k(e){e.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),r("navigationNext"))}function p(){const e=a.params.navigation;if(a.params.navigation=j(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;const n=m(e.nextEl),t=m(e.prevEl);n&&n.length>0&&n.on("click",k),t&&t.length>0&&t.on("click",S),Object.assign(a.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:t,prevEl:t&&t[0]}),a.enabled||(n&&n.addClass(e.lockClass),t&&t.addClass(e.lockClass))}function s(){const{$nextEl:e,$prevEl:n}=a.navigation;e&&e.length&&(e.off("click",k),e.removeClass(a.params.navigation.disabledClass)),n&&n.length&&(n.off("click",S),n.removeClass(a.params.navigation.disabledClass))}g("init",()=>{a.params.navigation.enabled===!1?H():(p(),i())}),g("toEdge fromEdge lock unlock",()=>{i()}),g("destroy",()=>{s()}),g("enable disable",()=>{const{$nextEl:e,$prevEl:n}=a.navigation;e&&e[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),n&&n[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),g("click",(e,n)=>{const{$nextEl:t,$prevEl:l}=a.navigation,u=n.target;if(a.params.navigation.hideOnClick&&!F(u).is(l)&&!F(u).is(t)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===u||a.pagination.el.contains(u)))return;let o;t?o=t.hasClass(a.params.navigation.hiddenClass):l&&(o=l.hasClass(a.params.navigation.hiddenClass)),r(o===!0?"navigationShow":"navigationHide"),t&&t.toggleClass(a.params.navigation.hiddenClass),l&&l.toggleClass(a.params.navigation.hiddenClass)}});const N=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),p(),i()},H=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),s()};Object.assign(a.navigation,{enable:N,disable:H,update:i,init:p,destroy:s})}function T(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function ca({swiper:a,extendParams:f,on:g,emit:r}){const m="swiper-pagination";f({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${m}-bullet`,bulletActiveClass:`${m}-bullet-active`,modifierClass:`${m}-`,currentClass:`${m}-current`,totalClass:`${m}-total`,hiddenClass:`${m}-hidden`,progressbarFillClass:`${m}-progressbar-fill`,progressbarOppositeClass:`${m}-progressbar-opposite`,clickableClass:`${m}-clickable`,lockClass:`${m}-lock`,horizontalClass:`${m}-horizontal`,verticalClass:`${m}-vertical`,paginationDisabledClass:`${m}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let h,i=0;function S(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function k(t,l){const{bulletActiveClass:u}=a.params.pagination;t[l]().addClass(`${u}-${l}`)[l]().addClass(`${u}-${l}-${l}`)}function p(){const t=a.rtl,l=a.params.pagination;if(S())return;const u=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,o=a.pagination.$el;let d;const y=a.params.loop?Math.ceil((u-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(d=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),d>u-1-a.loopedSlides*2&&(d-=u-a.loopedSlides*2),d>y-1&&(d-=y),d<0&&a.params.paginationType!=="bullets"&&(d=y+d)):typeof a.snapIndex<"u"?d=a.snapIndex:d=a.activeIndex||0,l.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const v=a.pagination.bullets;let $,B,P;if(l.dynamicBullets&&(h=v.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),o.css(a.isHorizontal()?"width":"height",`${h*(l.dynamicMainBullets+4)}px`),l.dynamicMainBullets>1&&a.previousIndex!==void 0&&(i+=d-(a.previousIndex-a.loopedSlides||0),i>l.dynamicMainBullets-1?i=l.dynamicMainBullets-1:i<0&&(i=0)),$=Math.max(d-i,0),B=$+(Math.min(v.length,l.dynamicMainBullets)-1),P=(B+$)/2),v.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(M=>`${l.bulletActiveClass}${M}`).join(" ")),o.length>1)v.each(M=>{const E=F(M),x=E.index();x===d&&E.addClass(l.bulletActiveClass),l.dynamicBullets&&(x>=$&&x<=B&&E.addClass(`${l.bulletActiveClass}-main`),x===$&&k(E,"prev"),x===B&&k(E,"next"))});else{const M=v.eq(d),E=M.index();if(M.addClass(l.bulletActiveClass),l.dynamicBullets){const x=v.eq($),G=v.eq(B);for(let L=$;L<=B;L+=1)v.eq(L).addClass(`${l.bulletActiveClass}-main`);if(a.params.loop)if(E>=v.length){for(let L=l.dynamicMainBullets;L>=0;L-=1)v.eq(v.length-L).addClass(`${l.bulletActiveClass}-main`);v.eq(v.length-l.dynamicMainBullets-1).addClass(`${l.bulletActiveClass}-prev`)}else k(x,"prev"),k(G,"next");else k(x,"prev"),k(G,"next")}}if(l.dynamicBullets){const M=Math.min(v.length,l.dynamicMainBullets+4),E=(h*M-h)/2-P*h,x=t?"right":"left";v.css(a.isHorizontal()?x:"top",`${E}px`)}}if(l.type==="fraction"&&(o.find(T(l.currentClass)).text(l.formatFractionCurrent(d+1)),o.find(T(l.totalClass)).text(l.formatFractionTotal(y))),l.type==="progressbar"){let v;l.progressbarOpposite?v=a.isHorizontal()?"vertical":"horizontal":v=a.isHorizontal()?"horizontal":"vertical";const $=(d+1)/y;let B=1,P=1;v==="horizontal"?B=$:P=$,o.find(T(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${B}) scaleY(${P})`).transition(a.params.speed)}l.type==="custom"&&l.renderCustom?(o.html(l.renderCustom(a,d+1,y)),r("paginationRender",o[0])):r("paginationUpdate",o[0]),a.params.watchOverflow&&a.enabled&&o[a.isLocked?"addClass":"removeClass"](l.lockClass)}function s(){const t=a.params.pagination;if(S())return;const l=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,u=a.pagination.$el;let o="";if(t.type==="bullets"){let d=a.params.loop?Math.ceil((l-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&d>l&&(d=l);for(let y=0;y<d;y+=1)t.renderBullet?o+=t.renderBullet.call(a,y,t.bulletClass):o+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;u.html(o),a.pagination.bullets=u.find(T(t.bulletClass))}t.type==="fraction"&&(t.renderFraction?o=t.renderFraction.call(a,t.currentClass,t.totalClass):o=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,u.html(o)),t.type==="progressbar"&&(t.renderProgressbar?o=t.renderProgressbar.call(a,t.progressbarFillClass):o=`<span class="${t.progressbarFillClass}"></span>`,u.html(o)),t.type!=="custom"&&r("paginationRender",a.pagination.$el[0])}function N(){a.params.pagination=j(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const t=a.params.pagination;if(!t.el)return;let l=F(t.el);l.length!==0&&(a.params.uniqueNavElements&&typeof t.el=="string"&&l.length>1&&(l=a.$el.find(t.el),l.length>1&&(l=l.filter(u=>F(u).parents(".swiper")[0]===a.el))),t.type==="bullets"&&t.clickable&&l.addClass(t.clickableClass),l.addClass(t.modifierClass+t.type),l.addClass(a.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(l.addClass(`${t.modifierClass}${t.type}-dynamic`),i=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&l.addClass(t.progressbarOppositeClass),t.clickable&&l.on("click",T(t.bulletClass),function(o){o.preventDefault();let d=F(this).index()*a.params.slidesPerGroup;a.params.loop&&(d+=a.loopedSlides),a.slideTo(d)}),Object.assign(a.pagination,{$el:l,el:l[0]}),a.enabled||l.addClass(t.lockClass))}function H(){const t=a.params.pagination;if(S())return;const l=a.pagination.$el;l.removeClass(t.hiddenClass),l.removeClass(t.modifierClass+t.type),l.removeClass(a.isHorizontal()?t.horizontalClass:t.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&l.off("click",T(t.bulletClass))}g("init",()=>{a.params.pagination.enabled===!1?n():(N(),s(),p())}),g("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&p()}),g("snapIndexChange",()=>{a.params.loop||p()}),g("slidesLengthChange",()=>{a.params.loop&&(s(),p())}),g("snapGridLengthChange",()=>{a.params.loop||(s(),p())}),g("destroy",()=>{H()}),g("enable disable",()=>{const{$el:t}=a.pagination;t&&t[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),g("lock unlock",()=>{p()}),g("click",(t,l)=>{const u=l.target,{$el:o}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&o&&o.length>0&&!F(u).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&u===a.navigation.nextEl||a.navigation.prevEl&&u===a.navigation.prevEl))return;const d=o.hasClass(a.params.pagination.hiddenClass);r(d===!0?"paginationShow":"paginationHide"),o.toggleClass(a.params.pagination.hiddenClass)}});const e=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),N(),s(),p()},n=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),H()};Object.assign(a.pagination,{enable:e,disable:n,render:s,update:p,init:N,destroy:H})}const ra={setup(){Y(()=>{});let a=Q({});return{editable:a,quote:I(()=>A.quote),books:I(()=>A.books.slice([0],[16])),cookingBooks:I(()=>A.books.filter(f=>f.categories.includes("Cooking")).slice([0],[24]).sort(()=>Math.random-.5)),scienceBooks:I(()=>A.books.filter(f=>f.categories.includes("Science")).slice([0],[24]).sort(()=>Math.random-.5)),fictionBooks:I(()=>A.books.filter(f=>f.categories.includes("Fiction")).slice([0],[24]).sort(()=>Math.random-.5)),natureBooks:I(()=>A.books.filter(f=>f.categories.includes("Nature")).slice([0],[24]).sort(()=>Math.random-.5)),historyBooks:I(()=>A.books.filter(f=>f.categories.includes("History")).slice([0],[24]).sort(()=>Math.random-.5)),bestSellers:I(()=>A.books.filter(f=>f.averageRating>=5).slice([0],[24]).sort(()=>Math.random-.5)),async searchByQuery(){try{await V.searchByQuery(a.value.term)}catch(f){U.error(f)}},modules:[ca,da]}},components:{EasyStepsCard:W,LeaveFeedBackCard:J,SQLBook:K,BookCard:Z,RecentActivity:w,SwiperTest:aa,Swiper:ta,SwiperSlide:la}},D=a=>(oa("data-v-28f6a353"),a=a(),ia(),a),ua=sa('<div class="container-fluid p-0" data-v-28f6a353><div class="row mb-5" data-v-28f6a353><div class="col-md-12" data-v-28f6a353><div class="card border-0" data-v-28f6a353><img src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg" alt="" class="bannerImg" data-v-28f6a353><div class="card-img-overlay align-items-center d-flex justify-content-center flex-column justify-content-evenly" data-v-28f6a353><div class="text-constantLight" data-v-28f6a353><h1 class="text-shadow abril text-center display-4" data-v-28f6a353>Find Your Book, Find Your Why <br data-v-28f6a353> Become Better After Books</h1></div><figure class="text-shadow px-5 mb-5" data-v-28f6a353><blockquote class="blockquote text-constantLight" data-v-28f6a353><p data-v-28f6a353><i class="mdi mdi-format-quote-open" data-v-28f6a353></i>Good friends, good books, and a sleepy conscience: this is the ideal life. <i class="mdi mdi-format-quote-close" data-v-28f6a353></i></p></blockquote><figcaption class="blockquote-footer text-constantLight text-center mt-3" data-v-28f6a353> Mark Twain </figcaption></figure></div></div></div></div></div>',1),ga={key:0,class:"container p-5"},fa={class:"row"},ma={class:"col-md-8"},va={class:"row"},Ca={class:"col-md-4"},ba={class:"row g-3"},ha={class:"mt-4"},pa=D(()=>c("h2",{class:"categoryTitle text-dark"},"Cooking",-1)),ka={class:"row scrollX"},_a={class:"mt-4"},ya=D(()=>c("h2",{class:"categoryTitle text-dark"},"Science",-1)),$a={class:"row scrollX"},xa={class:"mt-4"},Ba=D(()=>c("h2",{class:"categoryTitle text-dark"},"Fiction",-1)),Ea={class:"row scrollX"},Sa={class:"mt-4"},Ma=D(()=>c("h2",{class:"categoryTitle text-dark"},"Nature",-1)),Ia={class:"row scrollX"},Oa={class:"mt-4"},Aa=D(()=>c("h2",{class:"categoryTitle text-dark"},"History",-1)),Fa={class:"row scrollX"},La=D(()=>c("h2",{class:"categoryTitle text-dark"},"Best Sellers",-1)),qa={class:"row scrollX"},Da={key:1,class:""},Ha=D(()=>c("h1",null,"LOADING",-1)),Ta=[Ha];function Na(a,f,g,r,m,h){const i=z("BookCard"),S=z("EasyStepsCard"),k=z("LeaveFeedBackCard"),p=z("RecentActivity");return b(),C(O,null,[ua,r.books?(b(),C("div",ga,[c("div",fa,[c("div",ma,[c("div",va,[_(na,{name:"",enterActiveClass:"animate__fadeIn animate__animated",leaveActiveClass:"animate__fadeOut animate__animated"},{default:ea(()=>[(b(!0),C(O,null,q(r.books,s=>(b(),C("div",{class:"col-md-3 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))]),_:1})])]),c("div",Ca,[c("div",ba,[_(S),_(k),_(p)])])]),c("section",null,[c("div",ha,[pa,c("div",ka,[(b(!0),C(O,null,q(r.cookingBooks,s=>(b(),C("div",{class:"col-md-2 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))])]),c("div",_a,[ya,c("div",$a,[(b(!0),C(O,null,q(r.scienceBooks,s=>(b(),C("div",{class:"col-md-2 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))])]),c("div",xa,[Ba,c("div",Ea,[(b(!0),C(O,null,q(r.fictionBooks,s=>(b(),C("div",{class:"col-md-2 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))])]),c("div",Sa,[Ma,c("div",Ia,[(b(!0),C(O,null,q(r.natureBooks,s=>(b(),C("div",{class:"col-md-2 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))])]),c("div",Oa,[Aa,c("div",Fa,[(b(!0),C(O,null,q(r.historyBooks,s=>(b(),C("div",{class:"col-md-2 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))])])]),c("section",null,[La,c("div",qa,[(b(!0),C(O,null,q(r.bestSellers,s=>(b(),C("div",{class:"col-md-2 gy-3",key:s.id},[_(i,{book:s},null,8,["book"])]))),128))])])])):(b(),C("div",Da,Ta))],64)}const za=R(ra,[["render",Na],["__scopeId","data-v-28f6a353"]]);export{za as default};